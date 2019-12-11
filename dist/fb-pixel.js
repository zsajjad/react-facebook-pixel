!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.ReactPixel = e())
    : (t.ReactPixel = e());
})(window, function() {
  return (function(t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function(e) {
                return t[e];
              }.bind(null, o),
            );
        return r;
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })([
    function(t, e, n) {
      t.exports = n(1);
    },
    function(t, e, n) {
      'use strict';
      function r(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = new Array(t.length); e < t.length; e++)
                n[e] = t[e];
              return n;
            }
          })(t) ||
          (function(t) {
            if (
              Symbol.iterator in Object(t) ||
              '[object Arguments]' === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance',
            );
          })()
        );
      }
      n.r(e);
      var o = !1,
        i = !1,
        a = function() {
          var t;
          if (i) {
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            (t = console).info.apply(
              t,
              r(['[react-facebook-pixel]'].concat(n)),
            );
          }
        },
        c = function() {
          var t;
          if (i) {
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            (t = console).info.apply(
              t,
              r(['[react-facebook-pixel]'].concat(n)),
            );
          }
        },
        f = function() {
          return (
            o ||
              a(
                'Pixel not initialized before using call ReactPixel.init with required params',
              ),
            o
          );
        },
        u = { autoConfig: !0, debug: !1 };
      e.default = {
        init: function(t) {
          var e,
            n,
            r,
            c,
            f,
            l,
            d =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            p =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : u;
          (e = window),
            (n = document),
            (r = 'script'),
            e.fbq ||
              ((c = e.fbq = function() {
                c.callMethod
                  ? c.callMethod.apply(c, arguments)
                  : c.queue.push(arguments);
              }),
              e._fbq || (e._fbq = c),
              (c.push = c),
              (c.loaded = !0),
              (c.version = '2.0'),
              (c.queue = []),
              ((f = n.createElement(r)).async = !0),
              (f.src = 'https://connect.facebook.net/en_US/fbevents.js'),
              (l = n.getElementsByTagName(r)[0]).parentNode.insertBefore(f, l)),
            t
              ? (!1 === p.autoConfig && fbq('set', 'autoConfig', !1, t),
                fbq('init', t, d),
                (o = !0),
                (i = p.debug))
              : a('Please insert pixel id for initializing');
        },
        pageView: function() {
          f() &&
            (fbq('track', 'PageView'),
            i && c("called fbq('track', 'PageView');"));
        },
        track: function(t, e) {
          f() &&
            (fbq('track', t, e),
            i &&
              (c("called fbq('track', '".concat(t, "');")),
              e && c('with data', e)));
        },
        trackSingle: function(t, e, n) {
          f() &&
            (fbq('trackSingle', t, e, n),
            i &&
              (c(
                "called fbq('trackSingle', '"
                  .concat(t, "', '")
                  .concat(e, "');"),
              ),
              n && c('with data', n)));
        },
        trackCustom: function(t, e) {
          f() &&
            (fbq('trackCustom', t, e),
            i &&
              (c("called fbq('trackCustom', '".concat(t, "');")),
              e && c('with data', e)));
        },
        trackSingleCustom: function(t, e, n) {
          f() &&
            (fbq('trackSingle', t, e, n),
            i &&
              (c(
                "called fbq('trackSingleCustom', '"
                  .concat(t, "', '")
                  .concat(e, "');"),
              ),
              n && c('with data', n)));
        },
        fbq: (function(t) {
          function e() {
            return t.apply(this, arguments);
          }
          return (
            (e.toString = function() {
              return t.toString();
            }),
            e
          );
        })(function() {
          if (f()) {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            fbq.apply(void 0, e),
              i &&
                (c("called fbq('".concat(e.slice(0, 2).join("', '"), "')")),
                e[2] && c('with data', e[2]));
          }
        }),
      };
    },
  ]);
});
//# sourceMappingURL=fb-pixel.js.map
