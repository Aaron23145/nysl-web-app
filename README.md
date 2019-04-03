# NYSL Web App

A web app that consumes the [NYSL Rest API](https://github.com/Aaron23145/nysl-rest-api) and shows game info. Only works on mobile sized screens and on portrait mode. Try it live here: [NYSL Web App on Heroku](https://nysl-web-app.herokuapp.com/).

It's recommended to install the app on the mobile when entering it for the first time for a better experience, because it has a little PWA support (not offline mode though).

## Install

To run it locally you will need Node and NPM (or Yarn) installed. Then, run the following commands:

```sh
npm install
npm run serve
```

or if you're using Yarn:

```sh
yarn
yarn serve
```

## Deployment

To deploy it you need Node and NPM (or Yarn) installed and just run the following commands:

```sh
npm install
npm run build
npm run production
```

or if you're using Yarn:

```sh
yarn
yarn build
yarn production
```

No previous configuration is needed.

## Production Dependencies

| Name | Version | Use |
| ---- | ------- | --- |
| Vue | 2.6.6 | Template system, components definition and DOM manipulation. |
| Vue CLI | 3.5.4 | Webpack configuration and base project template. |
| Vuex | 3.0.1 | To store breadcrumb state and game data. |
| Vue Router | 3.0.1 | To make it SPA and feel like a native app. |
| vue2-filters | 0.5.1 | Capitalize filter. |
| Axios | 0.18.0 | AJAX Requests at the loading view. |
| Lodash | 4.17.11 | Comparing objects. |
| Express | 4.16.4 | Production server. |
