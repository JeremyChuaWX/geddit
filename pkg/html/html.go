package html

import (
	"fmt"
	"html/template"
	"path/filepath"
)

const TEMPLATES_PATH = "./templates" // relative to main.go

func GetTemplate(name string) *template.Template {
	templatePath := filepath.Join(TEMPLATES_PATH, fmt.Sprintf("%s.html", name))
	return template.Must(template.ParseFiles(templatePath))
}

func GetStatic(name string) string {
	return filepath.Join(TEMPLATES_PATH, fmt.Sprintf("%s.html", name))
}
