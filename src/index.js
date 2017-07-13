/**
 * React Facebook Pixel Module
 *
 * @package react-facebook-pixel
 * @author  Zain Sajjad <zsajjad@fetchsky.com>
 */

var initialized = false

/** 
 * Utilities
 */

var _verifyInit = function () {
  if (!initialized) {
    console.warn('Pixel not initialized before using call ReactPixel.init with required params');
  }
  return initialized;
}

var ReactPixel = {
  init: function (pixelId) {
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */

    if (!pixelId) {
      console.warn('Please insert pixel id for initializing');
      return;
    } else {
      fbq('init', pixelId);
      initialized = true;
    }
  },

  pageView: function () {
    if (!_verifyInit()) {
      return;
    }
    fbq('track', 'PageView');
  },

  track: function (title, data) {
    if (!_verifyInit()) {
      return;
    }
    fbq('track', title, data);
  },

  trackCustom: function (event, data) {
    if (!_verifyInit()) {
      return;
    }
    fbq('trackCustom', event, data);
  },

  fbq: function () {
    if (!_verifyInit()) {
      return;
    }
    return fbq
  },
}
module.exports = ReactPixel;
