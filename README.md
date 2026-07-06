# Curso Frontend G26-S1

Aplicación web desarrollada con React y Vite para mostrar el temario del curso de frontend, junto con enlaces a diapositivas, tareas, ayudantías y recursos complementarios de cada clase.

Esta interfaz está pensada para ser sencilla, visual y fácil de mantener. El contenido de las clases se administra desde un archivo JSON, lo que permite actualizar el temario sin modificar la lógica de la aplicación.

## Demo

[https://san-nico.github.io/G26-S1-temario-react/](https://san-nico.github.io/G26-S1-temario-react/)

## Características

- Vista general del temario organizada por clases
- Tarjetas visuales para cada clase con enlaces a:
  - diapositivas
  - formularios de entrega
  - bloques de apoyo
  - ayudantías
- Diseño responsive y moderno
- Fácil actualización del contenido desde un único archivo JSON
- Preparada para desplegarse en GitHub Pages

## Tecnologías usadas

- React 19
- Vite 8
- Linaria para estilos
- ESLint para calidad de código
- gh-pages para despliegue

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd G26-S1-temario-react
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Scripts disponibles

- npm run dev: inicia el entorno de desarrollo
- npm run build: genera la versión lista para producción
- npm run preview: sirve la build localmente
- npm run lint: revisa el código con ESLint
- npm run deploy: publica la carpeta dist en GitHub Pages
- npm run redeploy: construye y despliega la aplicación

## Despliegue en GitHub Pages

1. Asegúrate de tener el repositorio remoto configurado en GitHub.
2. Genera la versión de producción:
   ```bash
   npm run build
   ```
3. Publica el contenido en GitHub Pages:
   ```bash
   npm run deploy
   ```

Si prefieres un despliegue completo en un solo paso, puedes usar:

```bash
npm run redeploy
```

## Actualizar el contenido

El contenido de las clases se encuentra en [src/contenido/contenido.json](src/contenido/contenido.json). Puedes editar ese archivo para agregar, modificar o eliminar clases y sus recursos sin cambiar la estructura principal de la aplicación.

## Contribuir

Las contribuciones son bienvenidas. Si deseas mejorar la interfaz, agregar nuevas secciones o corregir contenido, abre un pull request con tus cambios.
