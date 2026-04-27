# El Asesor - Portal Corporativo

Sitio web corporativo moderno y profesional desarrollado para la firma legal y contable "El Asesor". Este proyecto está diseñado para ofrecer una experiencia de usuario de alta calidad (Premium), con tiempos de carga rápidos, animaciones fluidas y un diseño completamente responsivo.

## 🚀 Tecnologías y Herramientas Utilizadas

Este proyecto fue construido utilizando un stack moderno enfocado en el rendimiento y la estética UI/UX.

### Core
- **[React 19](https://react.dev/)**: Biblioteca principal para la construcción de interfaces de usuario.
- **[Vite 8](https://vitejs.dev/)**: Entorno de desarrollo ultrarrápido y empaquetador moderno.
- **[React Router DOM 7](https://reactrouter.com/)**: Gestión de rutas y navegación en la aplicación (SPA).

### Estilos y Diseño
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Framework de CSS basado en utilidades para el diseño rápido, sistema de diseño responsivo y efectos modernos (como *glassmorphism*).
- **PostCSS & Autoprefixer**: Herramientas para optimizar el CSS y asegurar compatibilidad cross-browser.

### Animaciones e Íconos
- **[Framer Motion 12](https://www.framer.com/motion/)**: Biblioteca de animaciones para React, utilizada para entradas, transiciones de página, efectos *hover* e interacciones fluidas.
- **[Lucide React](https://lucide.dev/)**: Colección de íconos vectoriales minimalistas y elegantes.

## 🌟 Características Principales

1. **Diseño Premium y Moderno:** Interfaz de usuario rica con paletas de colores corporativas, contrastes de alta calidad y efectos visuales modernos (desenfoque de fondo/glassmorphism).
2. **Animaciones Dinámicas:** Secuencias de entrada escalonadas, micro-interacciones suaves y animaciones de scroll impulsadas por Framer Motion.
3. **Navegación Intuitiva:** Barra de navegación adaptable (Navbar) que modifica su aspecto elegantemente al hacer scroll.
4. **Integración con WhatsApp:** Formulario de contacto conectado directamente para comunicación rápida vía WhatsApp.
5. **Mapa Interactivo:** Integración con Google Maps para ubicación de la firma (Abancay).
6. **Estructura Modular:** Componentes reutilizables como Navbar, Footer, Cards de Servicios, etc.
7. **Responsivo:** Perfecta adaptación a dispositivos móviles, tablets y monitores de escritorio.

## 📂 Estructura del Proyecto

```text
c:\EL ASESOR\
├── src/
│   ├── assets/       # Imágenes, logos y recursos estáticos
│   ├── components/   # Componentes reutilizables (Navbar, Footer, Layout, etc.)
│   ├── pages/        # Vistas de la aplicación (Inicio, Nosotros, Servicios, Contacto)
│   ├── App.jsx       # Configuración principal de enrutamiento
│   ├── index.css     # Estilos globales y configuración de Tailwind
│   └── main.jsx      # Punto de entrada de la aplicación
├── package.json      # Dependencias y scripts
├── vite.config.js    # Configuración del empaquetador
└── eslint.config.js  # Reglas de linter de código
```

## 🛠️ Instalación y Uso Local

Para ejecutar el proyecto en un entorno local, sigue estos pasos:

1. Clona o descarga el repositorio.
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
4. Abre tu navegador y dirígete a `http://localhost:5173` (o el puerto que indique Vite).

Para construir la versión de producción:
```bash
npm run build
```

## 🎨 Notas de Diseño UI/UX
El diseño general del sitio se enfocó en transmitir confianza, experiencia y profesionalismo:
- **Tipografía fina y legible**.
- **Colores:** Se implementaron colores de llamado a la acción (CTA) fuertes combinados con fondos y textos de alto contraste para visibilidad óptima.
- **Micro-interacciones:** Los botones y enlaces responden con sutiles sombras y movimientos para indicar interactividad de inmediato.
