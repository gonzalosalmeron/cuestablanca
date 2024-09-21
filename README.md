## 📋 Table de contenidos

- [¿Qué es cuestablanca?](#-qué-es-cuesta-blanca-visitar-aquí)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [¿Cómo usar la app?](#-cómo-usar-la-app)
- [Plataformas](#-plataformas)
- [Stack usado](#-tecnologías-usadas)

## 👀 Qué es cuesta blanca? [Visitar aquí](https://gonzalosalmeron.github.io/cuestablanca/)

Cuesta Blanca es una aplicación web diseñada para mostrar una UI intuitiva y agradable sobre datos de red eléctica.

El usuario debe rellenar los campos y pulsar un botón para mostrar una gráfica.

La aplicación incluye botones en la UI que no serán usables debido a que la finalidad principal es la de mostrar la generación de la gráfica y el resto es simplemente decorativo a modo de DEMO.

## 📂 Estructura del proyecto

Linters como ESLint y Prettier se han implementado.

Aunque no fueran un requisito, implementar linters como los mencionados anteriomente, son esenciales para cualquier proyecto. Estos aseguran una calidad del código y consistencia, identificando errores y problemas de indentaciones en tiempo real.

```text
cuestablanca/
├── .vscode/
├── tests/ <- e2e tests
├── public <- archivos públicos
├── src/
│   ├── assets/          <- incluye "dummy data" para usar en desarrollo
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── libs/            <- incluye útiles para la app
│   └── index.d.ts       <- incluye tipos usados en la app
├── package.json
└── README.md
└── ...
```

## 🎮 ¿Cómo usar la app?

Clona el proyecto:

```
git clone https://github.com/gonzalosalmeron/cuestablanca.git
```

Instala las dependencias:

```
npm i
```

Comandos predefinidos:

```
- npm run dev            <- inicia el servidor de desarrollo
- npm run build          <- compila el proyecto
- npm run preview        <- inicia el servidor con los archivos compilados
- npm run deploy         <- compila y sube el proyecto a github pages
- npm run test:e2e       <- abre Playwright visualmente para ejecutar tests
```

## 📱 Plataformas

Es una aplicación web adaptada para dispositivos de escritorio y móviles.

## 🤖 Tecnologías usadas

<a href="https://react.dev/">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" width="100" height="100" style="object-fit: cover">
</a>
<a href="https://tailwindcss.com/">
    <img src="https://www.solucionex.com/sites/default/files/posts/imagen/tailwindcss-1633184775.jpeg" width="200" height="100" style="object-fit: cover">
</a>
<a href="https://vitejs.dev/">
    <img src="https://vitejs.dev/logo.svg" width="100" height="100" style="object-fit: cover">
</a>
<a href="https://playwright.dev/">
    <img src="https://playwright.dev/img/playwright-logo.svg" width="100" height="100" style="object-fit: contain">
</a>
