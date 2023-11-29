package html

import (
	"fmt"
	"html/template"
	"path/filepath"
)

var TEMPLATE_DIR = "../static" // relative to main.go

func GetTemplate(name string) *template.Template {
	templatePath := filepath.Join(TEMPLATE_DIR, fmt.Sprintf("%s.html", name))
	return template.Must(template.ParseFiles(templatePath))
}

func GetStatic(name string) string {
	return filepath.Join(TEMPLATE_DIR, fmt.Sprintf("%s.html", name))
}
