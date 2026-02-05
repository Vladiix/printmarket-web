# PrintMarket Web 🖨️✨

Proyecto Final de Desarrollo Web realizado para la entrega del curso.

Sitio web responsive desarrollado con **HTML5**, **Bootstrap** y **SASS (sintaxis .sass)**, aplicando buenas prácticas de maquetación, diseño adaptable y conceptos básicos de SEO.

---

## 🌐 Links del Proyecto

- **Repositorio GitHub:**  
  https://github.com/Vladiix/printmarket-web  

- **Sitio publicado (Deploy):**  
  https://vladiix.github.io/printmarket-web/

---

## 📌 Tecnologías Utilizadas

- HTML5 Semántico  
- CSS3  
- **SASS (.sass)**  
- Bootstrap 5  
- JavaScript (animación y scroll en navbar)  
- GitHub Pages (Deploy)

---

## ✅ Requisitos Cumplidos

### 1. Estructura HTML Correcta
- Uso de etiquetas semánticas:  
  `header`, `nav`, `main`, `section`, `footer`
- Código indentado y jerárquico
- Uso correcto de títulos (`h1`, `h2`, `h3`)

---

### 2. Estilos con SASS (sin SCSS)

El proyecto incluye SASS en sintaxis indentada `.sass` con:

- Variables
- Mixins
- Extends
- Partials

Estructura:

```
sass/
├── main.sass
├── _variables.sass
├── _mixins.sass
├── _extends.sass
├── _base.sass
└── _components.sass
```

El archivo final compilado se encuentra en:

```
styles/styles.css
```

---

### 📌 ¿Por qué se utilizaron Variables, Mixins, Extends y Partials?

- **Variables:** permiten centralizar valores reutilizables como colores o fuentes.  
  Ejemplo: `$primary-color`

- **Mixins:** se usaron para reutilizar bloques de código repetidos, como configuraciones flex.  
  Esto reduce duplicación y mejora el mantenimiento.

- **Extends:** se aplicaron para heredar estilos comunes (por ejemplo reset o estilos base).  
  Esto ayuda a mantener el código más limpio.

- **Partials:** se utilizaron para dividir el código SASS en archivos pequeños y ordenados  
  (`_variables`, `_mixins`, `_layout`, etc.), facilitando la organización del proyecto.

---

### 3. Bootstrap Implementado

Se utilizaron componentes como:

- Navbar responsive
- Cards de productos
- Carruseles en secciones internas
- Accordion de Preguntas Frecuentes (FAQ)
- Sistema de grillas

---

### 4. Diseño Responsive

El sitio está adaptado para:

- Desktop
- Tablet
- Mobile

Con mejoras específicas en imágenes, carruseles y cards.

---

### 5. SEO Básico Aplicado

Se implementaron:

- Meta description
- Meta keywords
- Meta author
- Uso correcto de `alt` en imágenes
- Imágenes optimizadas en formato `.webp`

---

### 6. Deploy Online

Proyecto publicado mediante **GitHub Pages** y accesible desde el link del sitio.

---

## 👤 Autor

**Vladi**  
Proyecto Web - Curso Desarrollo WebFlex
Lucho y Neldo los Mejores 
Año 2025

---
