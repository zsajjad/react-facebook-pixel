# React Facebook Pixel

[![npm](https://img.shields.io/npm/dm/react-facebook-pixel.svg)](https://www.npmjs.com/package/react-facebook-pixel)

> React JS wrapper for [Facebook's Pixel](https://developers.facebook.com/docs/facebook-pixel)

## Install

```bash
npm install react-facebook-pixel

```

or

```bash
yarn add react-facebook-pixel

```

## How to use

```js
import ReactPixel from 'react-facebook-pixel';

const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('yourPixelIdGoesHere', advancedMatching, options);

ReactPixel.pageView(); // For tracking page view
ReactPixel.track(event, data); // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
ReactPixel.trackSingle('PixelId', event, data); // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
ReactPixel.trackCustom(event, data); // For tracking custom events
ReactPixel.trackSingleCustom('PixelId', event, data); // For tracking custom events
```

if you're bundling in CI

```js
  ...
  componentDidMount() {
    const ReactPixel =  require('react-facebook-pixel');
    ReactPixel.init('yourPixelIdGoesHere');
  }
  ...
```

otherwise CI will complain there's no `window`.

## GDPR Compliance

To be GDPR compliant, revoke the consent right after init and grant it when the user accepts to be tracked

```js
  ...
  ReactPixel.init('yourPixelIdGoesHere', advancedMatching, options);
  ReactPixel.revokeConsent();
  ...

  ...
  <button onClick={ReactPixel.grantConsent}>Accept cookies</button>.
  ...
```

## Dev Server

```bash
npm run start

```

Default dev server runs at localhost:8080 in browser.
You can set IP and PORT in webpack.config.dev.js

## Production Bundle

```bash
npm run bundle
```

### Follow me on Twitter: [@zsajjad93](https://twitter.com/zsajjad93)
