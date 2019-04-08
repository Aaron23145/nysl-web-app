# NYSL Web App

A web app that consumes the [NYSL Rest API](https://github.com/Aaron23145/nysl-rest-api) and shows game info. Only works on mobile sized screens and on portrait mode. Try it live here: [NYSL Web App on Heroku](https://nysl-web-app.herokuapp.com/).

It's recommended to install the app on the mobile when entering it for the first time for a better experience, because it has a little PWA support (not offline mode though).

## How to install the NYSL app in mobile devices?

In Google Chrome, you have to [enter the App](https://nysl-web-app.herokuapp.com/) and open the options inside it (by pressing the three vertical points button located in the upper right corner). Then, just press the "Add to Home Screen" option and accept the installation. Now you can access the NYSL App through your home screen menu.

## Features

- View NYSL games information comfortably. You can look for games selecting by team, location or day.
- Single Page Application to reduce the loading times.
- UI designed for mobile devices to provide a good user experience, with portrait and landscape mode.
- Installable in mobile devices to make it look like a native app.
- Authentication system (WIP).
- Chat to comunicate between the NYSL users (WIP).

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
