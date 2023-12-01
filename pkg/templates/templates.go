package templates

import (
	"fmt"
	"html/template"
	"path/filepath"
)

const TEMPLATES_PATH = "./templates"

type Templates = map[string]*template.Template

func InitTemplates() Templates {
	t := make(Templates)
	composeTemplate(t, "login", []string{"base", "login"})
	composeTemplate(t, "signup", []string{"base", "signup"})
	composeTemplate(t, "profile", []string{"base", "profile"})
	return t
}

// components: ordered as per required by html/template
func composeTemplate(
	t Templates,
	name string,
	components []string,
) {
	paths := []string{}
	for _, component := range components {
		filename := fmt.Sprintf("%s.html", component)
		path := filepath.Join(TEMPLATES_PATH, filename)
		paths = append(paths, path)
	}
	t[name] = template.Must(template.ParseFiles(paths...))
}
