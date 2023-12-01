package password

import "testing"

func TestPassword(t *testing.T) {
	password := "password123"
	encodedHash, err := Hash(password)
	if err != nil {
		t.Fatal("failed to hash password", err)
	}
	match, err := Verify(password, encodedHash)
	if err != nil {
		t.Fatal("failed to verify correct password", err)
	}
	if !match {
		t.Fatal("failed to match correct password")
	}
	match, err = Verify("wrongpassword", encodedHash)
	if err != nil {
		t.Fatal("failed to verify wrong password", err)
	}
	if match {
		t.Fatal("failed to match wrong password")
	}
}
