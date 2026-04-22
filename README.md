# ⚔️ Portafolio RPG - Jhonatan Ayala

Portafolio web personal con temática de *The Elder Scrolls: Oblivion*. Diseñado para mostrar proyectos de desarrollo mientras se mantiene una experiencia inmersiva de RPG clásico.

**[🔗 Ver Demo en Vivo](https://jhonnyelithaz.github.io/)** | 

![Preview del Portafolio](public/img/demo-cofre.gif)


---

## 🛠️ Stack Tecnológico

| Tecnología | Uso en el proyecto |
| --- | --- |
| *HTML5* | Estructura semántica y accesible |
| *CSS3* | Estilos, animaciones, responsive design, temática pergamino |
| *JavaScript Vanilla* | Manipulación del DOM, eventos, efectos de sonido |
| *Git / GitHub* | Control de versiones y deploy |

*Sin frameworks*: Proyecto 100% vanilla para demostrar dominio de las bases de la web.

---

## ✨ Características Principales

### 1. *Interfaz Diegética RPG*
- *Fondo de pergamino antiguo*: Optimizado en .webp con preload para carga instantánea en móvil.
- *Cofre de proyectos interactivo*: Componente hecho con JS que cambia sprite y reproduce audio al abrir/cerrar.
- *Tipografía temática*: Fuentes estilo medieval para reforzar la inmersión.

### 2. *Código Optimizado para Móviles*
- *Renderizado < 1s*: Imagen de fondo < 300KB + color base para evitar flash blanco.
- *Fix de background-attachment*: Usa scroll en móvil para evitar lag de repintado en iOS/Android.
- *Assets con image-rendering: pixelated*: Pixel art nítido sin blur.

### 3. *Manipulación Avanzada del DOM*
```javascript
// Ejemplo: Cambio de sprite + audio sincronizado
cofre.addEventListener('click', () => {
  cofre.classList.toggle('abierto');
  imagenCofre.src = cofre.classList.contains('abierto') 
    ? 'cofre-abierto.png' 
    : 'cofre-cerrado.png';
  sonidoAbrir.currentTime = 0;
  sonidoAbrir.play();
});
```


---

## 🚀 Instalación y Uso Local

1. Clona el repositorio
   git clone https://github.com/jhonnyelithAZ/jhonnyelithAZ.github.io.git

2. Entra a la carpeta
   cd jhonnyelithAZ.github.io

3. Abre con Live Server
   
   Si usas VS Code, instala la extensión Live Server y dale clic derecho a index.html > Open with Live Server.
   
   O simplemente abre index.html en tu navegador.


```
## 📂 Estructura del Proyecto

/
├── index.html              # Estructura principal
├── styles.css              # Todos los estilos y media queries
├── script.js               # Lógica del cofre y eventos del DOM
├── public/
│   ├── img/
│   │   ├── back.webp       # Fondo pergamino optimizado
│   │   ├── cofre-cerrado.png
│   │   └── cofre-abierto.png
│   └── audio/
│       ├── cofre-abrir.mp3
│       └── cofre-cerrar.mp3
└── README.md
```

## 🎯 Decisiones Técnicas y Aprendizajes

| # | Problema | Solución | Concepto Aprendido |
| --- | --- | --- | --- |
| **1** | Fondo lento en móvil + flash blanco | `rel="preload"` + imagen <300KB + `background-color` base | **Critical Rendering Path** |
| **2** | Lag con `fixed` en iOS | Media query `@media (max-width: 900px)` → `scroll` | **Renderizado WebKit vs Chromium** |
| **3** | Audio no repetía con spam-click | `audio.currentTime = 0` antes de `play()` | **HTML5 Audio API** |
| **4** | Pixel art borroso al escalar | `image-rendering: pixelated` | **Renderizado de imágenes** |
| **5** | Demostrar bases sin librerías | 100% **JavaScript Vanilla** | **Manipulación directa del DOM** |
| **6** | Estructura desordenada | Carpetas `/public/img` y `/public/audio` | **Arquitectura de archivos** |

---

## 🗺️ Roadmap / Próximas Mejoras

- [ ] **Sistema de partículas**: Añadir polvo flotando con Canvas para más inmersión.
- [ ] **Cursor personalizado**: Cambiar el cursor por una espada o cursor de Oblivion.
- [ ] **Modo "Encantar objeto"**: Efecto hover en los links de proyectos con brillo.
- [ ] **Migrar a Vite**: Para modularizar el JS sin perder el enfoque vanilla.

---

## 📬 Contacto

| Medio | Información | Link Directo |
| --- | --- | --- |
| **Nombre** | Jhonatan Ayala | |
| **Rol** | Frontend Developer | |
| **GitHub** | @jhonnyelithAZ | [Ver perfil](https://github.com/jhonnyelithAZ) |
| **Email** | jhonatanayala3478@gmail.com | [Enviar correo](mailto:jhonatanayala3478@gmail.com) |
| **Portafolio** | Demo en vivo | [jhonnyelithaz.github.io](https://jhonnyelithaz.github.io) |
| **Ubicación** | Barranquilla, Atlántico, Colombia | |
