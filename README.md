# Angular 19 Boilerplate 🚀

Este proyecto es un **boilerplate** base en Angular 19, configurado para iniciar rápidamente nuevos proyectos con buenas prácticas, estructura limpia y herramientas modernas.

## Requisitos

- [Node.js](https://nodejs.org/) ^18.19.1 || ^20.11.1 || ^22.0.0
- [Angular CLI](https://angular.io/cli) >= 19.0.0
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Pasos para la creación del boilerplate

# 🚀 Configuración de Node.js con NVM

Esta guía te ayudará a instalar **NVM (Node Version Manager)** y usar **Node.js 22.16.0**.

## 📥 Instalar NVM

> **NVM** te permite instalar y gestionar múltiples versiones de Node.js fácilmente.

### Linux / macOS

Abre tu terminal y ejecuta:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### Instalar Angular CLI 19

```bash
npm install -g @angular/cli@19
```

Creación de template en angular 19

```bash
npx @angular/cli@19 new boilerplate-angular-19
```

Configuración prettier

```bash
"singleQuote": true: Usa comillas simples ' en lugar de dobles " (Angular CLI lo suele preferir).

"semi": true: Siempre termina las líneas con ;.

"printWidth": 100: Límite de ancho de línea más legible, Angular recomienda 100.

"tabWidth": 2: Dos espacios por tabulación (standard en Angular).

"trailingComma": "all": Comas al final de objetos y arreglos multilínea (más limpio para diffs).

"bracketSpacing": true: Espacio dentro de llaves { foo: bar }.

"arrowParens": "always": Siempre poner paréntesis en funciones flecha (x) => x.

"endOfLine": "lf": Unix-style line endings (evita problemas en Git).

"htmlWhitespaceSensitivity": "ignore": Evita que Prettier reordene espacios sensibles en HTML (útil para Angular templates).

"embeddedLanguageFormatting": "auto": Deja que Prettier decida cómo formatear el código embebido (por ejemplo en templates).
```


## Instalación

Clona el repositorio y ejecuta:

```bash
npm install
```

o si prefieres usar yarn:

```bash
yarn install
```

## Comandos disponibles

- `npm start` / `ng serve`: Levanta el servidor de desarrollo en `http://localhost:4200/`.
- `npm run build` / `ng build`: Compila el proyecto para producción.
- `npm run lint`: Ejecuta el linter con ESLint.
- `npm run test`: Ejecuta los tests unitarios con Karma.
- `npm run e2e`: Ejecuta tests End-to-End con Cypress o Protractor (según configuración).

## Estructura del proyecto

```bash
src/
├── app/
│   ├── core/        # Servicios y configuraciones principales
│   ├── shared/      # Componentes y módulos compartidos
│   ├── features/    # Módulos de características
│   └── app.module.ts
├── assets/          # Archivos estáticos
├── environments/    # Configuraciones de entorno
├── styles/          # Estilos globales
└── index.html
```

## Características

- Angular 19 listo para producción
- Arquitectura modular y escalable
- Lazy loading por módulos
- Soporte para Signals (Angular 19)
- Manejo de rutas avanzado
- Uso de Standalone Components (opcional)
- ESLint configurado
- Prettier integrado para formateo automático
- Soporte opcional para internacionalización (i18n)
- Tests unitarios y E2E básicos configurados

## Configuración adicional

### Cambiar puerto del servidor

```bash
ng serve --port 4300
```

### Compilación para producción

```bash
ng build --configuration production
```

### Instalación de dependencias adicionales

```bash
npm install <package-name>
```

## Deployment

Compila la app para producción y sirve el contenido del directorio `dist/`:

```bash
ng build --configuration production
```

Puedes desplegar fácilmente en plataformas como **Vercel**, **Netlify**, **Firebase Hosting**, etc.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor abre un issue o un pull request para mejoras, sugerencias o correcciones.

## Licencia

MIT © [UPDEV]

---

Hecho con ❤️ en Angular
