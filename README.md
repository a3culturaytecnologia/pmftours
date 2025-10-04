# PMF Tours Website

![PMF Tours Logo](./image/logo.png)

Sitio web oficial de PMF Tours, empresa de transporte privado y tours en Panamá. Diseñado para ofrecer una experiencia de usuario intuitiva y atractiva.

![Website](https://img.shields.io/website?url=https%3A%2F%2Fa3culturaytecnologia.github.io%2Fpmftours)
![License](https://img.shields.io/github/license/a3culturaytecnologia/pmftours)

## 🚀 Características

- Diseño responsive y moderno
- Animaciones suaves y profesionales
- Soporte multiidioma (Español/Inglés)
- Integración con WhatsApp para reservas
- Galería de imágenes interactiva
- Formulario de contacto optimizado
- Sección de testimonios
- Animación de carro personalizada

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS personalizadas)
- JavaScript vanilla
- [Boxicons](https://boxicons.com/) para iconos
- [AOS](https://michalsnik.github.io/aos/) para animaciones de scroll
- [Swiper](https://swiperjs.com/) para sliders
- Google Fonts (Montserrat & Open Sans)

## 📦 Estructura del Proyecto

```plaintext
pmftours-website/
├── css/
│   ├── styles.css
│   └── kia-animation.css
├── js/
│   ├── language-switcher.js
│   ├── hero-slider.js
│   ├── form-handler.js
│   └── car-animation.js
├── image/
│   ├── favicon/
│   ├── gallery/
│   └── tours/
└── index.html
```

## ⚙️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/A3InfinitaAfinidad/pmftours-website.git
```

2. Navega al directorio del proyecto:
```bash
cd pmftours-website
```

3. Abre el proyecto en VS Code:
```bash
code .
```

4. Instala la extensión "Live Server" en VS Code

5. Click derecho en index.html y selecciona "Open with Live Server"

## 📦 Despliegue

El sitio está optimizado para ser desplegado en:

- GitHub Pages
- Netlify
- Vercel
- Cualquier servidor web estático

### Pasos para despliegue en GitHub Pages:

1. Crear un repositorio en GitHub
2. Subir el código:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```
3. Activar GitHub Pages en la configuración del repositorio

## 📋 Prerrequisitos

- Node.js (versión 14 o superior)
- Navegador web moderno
- Conexión a internet para las CDN (Boxicons, Google Fonts)

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en las variables CSS:
```css
:root {
    --pmf-rojo: #a70007;
    --pmf-verde: #058600;
    --pmf-teal: #01979e;
    --pmf-amarillo: #ffd202;
}
```

### Fuentes
El sitio utiliza:
- Montserrat (600, 700, 800) para títulos
- Open Sans (400, 600) para texto

## 📱 Responsive Design

El sitio está optimizado para:
- Móviles (< 576px)
- Tablets (< 768px)
- Laptops (< 992px)
- Desktops (> 992px)

## 🌐 SEO y Rendimiento

- Meta tags optimizados para redes sociales
- Schema.org markup para mejor indexación
- Imágenes optimizadas y con lazy loading
- Favicons para múltiples dispositivos
- Web App Manifest incluido
- Estructura semántica HTML5
- CSS y JavaScript minificados
- Caché optimizado
- Core Web Vitals optimizados

## 🔧 Mantenimiento

### Actualización de contenido
- Las imágenes se deben optimizar antes de subirlas a `/image`
- Los textos multiidioma se encuentran en `/js/language-switcher.js`
- Las animaciones del carro se pueden modificar en `/js/car-animation.js`

### Optimización
- Comprimir imágenes con [TinyPNG](https://tinypng.com/)
- Minificar CSS y JS para producción
- Verificar PageSpeed Insights regularmente

## 🔒 Seguridad

- El sitio no almacena datos sensibles
- Las comunicaciones se realizan por HTTPS
- Los formularios incluyen validación
- Se siguen las mejores prácticas de OWASP

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles

## ✨ Contribuir

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🌟 Demo
Visita la demo en vivo: [PMF Tours Website](https://a3culturaytecnologia.github.io/pmftours/)

## 📈 Estado del Proyecto

![GitHub last commit](https://img.shields.io/github/last-commit/A3InfinitaAfinidad/pmftours-website)
![GitHub issues](https://img.shields.io/github/issues/A3InfinitaAfinidad/pmftours-website)
![GitHub pull requests](https://img.shields.io/github/issues-pr/A3InfinitaAfinidad/pmftours-website)

## 🚦 Tests y Calidad

- HTML validado con W3C Validator
- CSS validado con W3C CSS Validator
- JavaScript siguiendo ESLint
- Lighthouse Score > 90 en todas las categorías

## 💻 Comandos Útiles

```bash
# Clonar el repositorio
git clone https://github.com/A3InfinitaAfinidad/pmftours-website.git

# Navegar al directorio
cd pmftours-website

# Abrir en VS Code
code .

# Iniciar servidor local con Python
python -m http.server 8000

# Abrir en el navegador
start http://localhost:8000
```

## 📞 Contacto

Pierre Flores
- GitHub: [@A3InfinitaAfinidad](https://github.com/A3InfinitaAfinidad)
- Instagram: [@pmftours](https://instagram.com/pmftours)
- WhatsApp: [+507 6534-7412](https://wa.me/50765347412)
- Email: pfloresmanito19@gmail.com

## 🔄 Actualizaciones

El sitio se actualiza regularmente con:
- Nuevas funcionalidades
- Mejoras de rendimiento
- Correcciones de bugs
- Actualizaciones de contenido

Para estar al tanto de las últimas actualizaciones:
1. Dale ⭐ al repositorio
2. Activa las notificaciones de GitHub
3. Sigue el [canal de cambios](https://github.com/A3InfinitaAfinidad/pmftours-website/releases)

## 🙏 Agradecimientos

- [Boxicons](https://boxicons.com/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Swiper](https://swiperjs.com/)
- [Google Fonts](https://fonts.google.com/)

## 📊 Analytics y Métricas
- Google Analytics implementado
- Seguimiento de conversiones WhatsApp
- Métricas de velocidad de carga
- Monitoreo de UX

## 🔄 Workflow de Desarrollo
```bash
# Desarrollo local
npm install
npm start

# Build para producción
npm run build

# Despliegue a GitHub Pages
npm run deploy
```

## 📱 PWA Support
- Instalable como app
- Funciona offline
- Notificaciones push
- Actualización automática

## 🌍 Optimización Internacional
- Contenido bilingüe (ES/EN)
- Precios en USD
- Horarios en zona horaria local
- Formatos internacionales

## 📈 Roadmap 2024
- [ ] Reservas en línea
- [ ] Blog de viajes
- [ ] Sistema de reviews
- [ ] App móvil nativa
