package templates

import (
	"fmt"
	"html/template"
	"path/filepath"
)

const TEMPLATES_PATH = "./templates"

func InitTemplates() *template.Template {
	t := template.New("")
	pattern := filepath.Join(TEMPLATES_PATH, "*.html")
	return template.Must(t.ParseGlob(pattern))
}

// TODO: deprecate for nested components
func GetStatic(name string) string {
	return filepath.Join(TEMPLATES_PATH, fmt.Sprintf("%s.html", name))
}
