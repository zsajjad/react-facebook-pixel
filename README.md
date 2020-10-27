# React Facebook Pixel

[![npm](https://img.shields.io/npm/dm/react-facebook-pixel.svg)](https://www.npmjs.com/package/react-facebook-pixel)

> React JS wrapper for [Facebook's Pixel](https://developers.facebook.com/docs/facebook-pixel)

## Install

```bash
npm install --save react-facebook-pixel

```

or

```bash
yarn add react-facebook-pixel

```

## Sponsors

React Facebook Pixel is being sponsored by the following tool; please help to support us by taking a look and signing up to a free trial

<a href="https://tracking.gitads.io/?repo=react-facebook-pixel" target="_blank">
 <img src="https://images.gitads.io/react-facebook-pixel" alt="GitAds"/>
</a>

## How to use

```js
import ReactPixel from 'react-facebook-pixel';

const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init('yourPixelIdGoesHere', advancedMatching, options);

ReactPixel.pageView(); // For tracking page view
ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
ReactPixel.trackSingle('PixelId', event, data); // For tracking default events.
ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
ReactPixel.trackSingleCustom('PixelId', event, data); // For tracking custom events.
```

if you're bundling in CI

```js
  ...
  componentDidMount() {
    const ReactPixel =  require('react-facebook-pixel');
    ReactPixel.default.init('yourPixelIdGoesHere');
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
