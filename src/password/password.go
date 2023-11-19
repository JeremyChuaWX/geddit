package password

import (
	"crypto/rand"
	"crypto/subtle"
	"encoding/base64"
	"errors"
	"fmt"
	"runtime"
	"strings"

	"golang.org/x/crypto/argon2"
)

type params struct {
	memory      uint32
	iterations  uint32
	parallelism uint8
	saltLength  uint32
	keyLength   uint32
}

var (
	ErrorInvalidHash         = errors.New("encoded hash is in the wrong format")
	ErrorIncompatibleVersion = errors.New("incompatible version of argon2")
)

// sane defaults for argon2 hashing algorithm; modify before use in production
var p = params{
	memory:      64 * 1024,
	iterations:  1,
	parallelism: uint8(runtime.NumCPU()),
	saltLength:  16,
	keyLength:   32,
}

func Hash(password string) (encodedHash string, err error) {
	salt := make([]byte, p.saltLength)
	if _, err := rand.Read(salt); err != nil {
		return "", err
	}
	hash := argon2.IDKey(
		[]byte(password),
		salt,
		p.iterations,
		p.memory,
		p.parallelism,
		p.keyLength,
	)
	b64Salt := base64.RawStdEncoding.EncodeToString(salt)
	b64Hash := base64.RawStdEncoding.EncodeToString(hash)
	encodedHash = fmt.Sprintf(
		"$argon2id$v=%d$m=%d,t=%d,p=%d$%s$%s",
		argon2.Version,
		p.memory,
		p.iterations,
		p.parallelism,
		b64Salt,
		b64Hash,
	)
	return encodedHash, nil
}

func Verify(password string, encodedHash string) (match bool, err error) {
	values := strings.Split(encodedHash, "$")
	if len(values) != 6 {
		return false, ErrorInvalidHash
	}
	var version int
	if _, err = fmt.Sscanf(values[2], "v=%d", &version); err != nil {
		return false, err
	}
	if version != argon2.Version {
		return false, ErrorIncompatibleVersion
	}
	p = params{}
	if _, err = fmt.Sscanf(
		values[3],
		"m=%d,t=%d,p=%d",
		&p.memory,
		&p.iterations,
		&p.parallelism,
	); err != nil {
		return false, err
	}
	salt, err := base64.RawStdEncoding.Strict().DecodeString(values[4])
	if err != nil {
		return false, err
	}
	hash, err := base64.RawStdEncoding.Strict().DecodeString(values[5])
	if err != nil {
		return false, err
	}
	p.keyLength = uint32(len(hash))
	otherHash := argon2.IDKey(
		[]byte(password),
		salt,
		p.iterations,
		p.memory,
		p.parallelism,
		p.keyLength,
	)
	if subtle.ConstantTimeCompare(hash, otherHash) == 1 {
		return true, nil
	}
	return false, nil
}
