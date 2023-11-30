var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(Fe) {
  return Fe && Fe.__esModule && Object.prototype.hasOwnProperty.call(Fe, "default") ? Fe.default : Fe;
}
var htmx_min = { exports: {} };
(function(module) {
  (function(Fe, Qr) {
    module.exports ? module.exports = Qr() : Fe.htmx = Fe.htmx || Qr();
  })(typeof self < "u" ? self : commonjsGlobal, function() {
    return function() {
      var Q = { onLoad: t, process: Bt, on: Z, off: K, trigger: ce, ajax: Or, find: C, findAll: f, closest: v, values: function(Fe, Qr) {
        var Fr = ur(Fe, Qr || "post");
        return Fr.values;
      }, remove: B, addClass: F, removeClass: n, toggleClass: V, takeClass: j, defineExtension: kr, removeExtension: Pr, logAll: X, logNone: U, logger: null, config: { historyEnabled: !0, historyCacheSize: 10, refreshOnHistoryMiss: !1, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: !0, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: !0, allowScriptTags: !0, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: !1, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: !1, scrollBehavior: "smooth", defaultFocusScroll: !1, getCacheBusterParam: !1, globalViewTransitions: !1, methodsThatUseUrlParams: ["get"], selfRequestsOnly: !1, ignoreTitle: !1, scrollIntoViewOnBoost: !0 }, parseInterval: d, _: e, createEventSource: function(Fe) {
        return new EventSource(Fe, { withCredentials: !0 });
      }, createWebSocket: function(Fe) {
        var Qr = new WebSocket(Fe, []);
        return Qr.binaryType = Q.config.wsBinaryType, Qr;
      }, version: "1.9.9" }, r = { addTriggerHandler: Tt, bodyContains: se, canAccessLocalStorage: M, findThisElement: de, filterValues: dr, hasAttribute: o, getAttributeValue: te, getClosestAttributeValue: ne, getClosestMatch: c, getExpressionVars: Cr, getHeaders: vr, getInputValues: ur, getInternalData: ae, getSwapSpecification: mr, getTriggerSpecs: Qe, getTarget: ge, makeFragment: l, mergeObjects: le, makeSettleInfo: R, oobSwap: xe, querySelectorExt: ue, selectAndSwap: Ue, settleImmediately: Yt, shouldCancel: it, triggerEvent: ce, triggerErrorEvent: fe, withExtensions: T }, b = ["get", "post", "put", "delete", "patch"], w = b.map(function(Fe) {
        return "[hx-" + Fe + "], [data-hx-" + Fe + "]";
      }).join(", ");
      function d(Fe) {
        if (Fe != null)
          return Fe.slice(-2) == "ms" ? parseFloat(Fe.slice(0, -2)) || void 0 : Fe.slice(-1) == "s" ? parseFloat(Fe.slice(0, -1)) * 1e3 || void 0 : Fe.slice(-1) == "m" ? parseFloat(Fe.slice(0, -1)) * 1e3 * 60 || void 0 : parseFloat(Fe) || void 0;
      }
      function ee(Fe, Qr) {
        return Fe.getAttribute && Fe.getAttribute(Qr);
      }
      function o(Fe, Qr) {
        return Fe.hasAttribute && (Fe.hasAttribute(Qr) || Fe.hasAttribute("data-" + Qr));
      }
      function te(Fe, Qr) {
        return ee(Fe, Qr) || ee(Fe, "data-" + Qr);
      }
      function u(Fe) {
        return Fe.parentElement;
      }
      function re() {
        return document;
      }
      function c(Fe, Qr) {
        for (; Fe && !Qr(Fe); )
          Fe = u(Fe);
        return Fe || null;
      }
      function S(Fe, Qr, Fr) {
        var _r = te(Qr, Fr), Vr = te(Qr, "hx-disinherit");
        return Fe !== Qr && Vr && (Vr === "*" || Vr.split(" ").indexOf(Fr) >= 0) ? "unset" : _r;
      }
      function ne(Fe, Qr) {
        var Fr = null;
        if (c(Fe, function(_r) {
          return Fr = S(Fe, _r, Qr);
        }), Fr !== "unset")
          return Fr;
      }
      function h(Fe, Qr) {
        var Fr = Fe.matches || Fe.matchesSelector || Fe.msMatchesSelector || Fe.mozMatchesSelector || Fe.webkitMatchesSelector || Fe.oMatchesSelector;
        return Fr && Fr.call(Fe, Qr);
      }
      function q(Fe) {
        var Qr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Fr = Qr.exec(Fe);
        return Fr ? Fr[1].toLowerCase() : "";
      }
      function i(Fe, Qr) {
        for (var Fr = new DOMParser(), _r = Fr.parseFromString(Fe, "text/html"), Vr = _r.body; Qr > 0; )
          Qr--, Vr = Vr.firstChild;
        return Vr == null && (Vr = re().createDocumentFragment()), Vr;
      }
      function H(Fe) {
        return Fe.match(/<body/);
      }
      function l(Fe) {
        var Qr = !H(Fe);
        if (Q.config.useTemplateFragments && Qr) {
          var Fr = i("<body><template>" + Fe + "</template></body>", 0);
          return Fr.querySelector("template").content;
        } else {
          var _r = q(Fe);
          switch (_r) {
            case "thead":
            case "tbody":
            case "tfoot":
            case "colgroup":
            case "caption":
              return i("<table>" + Fe + "</table>", 1);
            case "col":
              return i("<table><colgroup>" + Fe + "</colgroup></table>", 2);
            case "tr":
              return i("<table><tbody>" + Fe + "</tbody></table>", 2);
            case "td":
            case "th":
              return i("<table><tbody><tr>" + Fe + "</tr></tbody></table>", 3);
            case "script":
            case "style":
              return i("<div>" + Fe + "</div>", 1);
            default:
              return i(Fe, 0);
          }
        }
      }
      function ie(Fe) {
        Fe && Fe();
      }
      function L(Fe, Qr) {
        return Object.prototype.toString.call(Fe) === "[object " + Qr + "]";
      }
      function A(Fe) {
        return L(Fe, "Function");
      }
      function N(Fe) {
        return L(Fe, "Object");
      }
      function ae(Fe) {
        var Qr = "htmx-internal-data", Fr = Fe[Qr];
        return Fr || (Fr = Fe[Qr] = {}), Fr;
      }
      function I(Fe) {
        var Qr = [];
        if (Fe)
          for (var Fr = 0; Fr < Fe.length; Fr++)
            Qr.push(Fe[Fr]);
        return Qr;
      }
      function oe(Fe, Qr) {
        if (Fe)
          for (var Fr = 0; Fr < Fe.length; Fr++)
            Qr(Fe[Fr]);
      }
      function k(Fe) {
        var Qr = Fe.getBoundingClientRect(), Fr = Qr.top, _r = Qr.bottom;
        return Fr < window.innerHeight && _r >= 0;
      }
      function se(Fe) {
        return Fe.getRootNode && Fe.getRootNode() instanceof window.ShadowRoot ? re().body.contains(Fe.getRootNode().host) : re().body.contains(Fe);
      }
      function P(Fe) {
        return Fe.trim().split(/\s+/);
      }
      function le(Fe, Qr) {
        for (var Fr in Qr)
          Qr.hasOwnProperty(Fr) && (Fe[Fr] = Qr[Fr]);
        return Fe;
      }
      function E(Fe) {
        try {
          return JSON.parse(Fe);
        } catch (Qr) {
          return x(Qr), null;
        }
      }
      function M() {
        var Fe = "htmx:localStorageTest";
        try {
          return localStorage.setItem(Fe, Fe), localStorage.removeItem(Fe), !0;
        } catch {
          return !1;
        }
      }
      function D(Fe) {
        try {
          var Qr = new URL(Fe);
          return Qr && (Fe = Qr.pathname + Qr.search), Fe.match("^/$") || (Fe = Fe.replace(/\/+$/, "")), Fe;
        } catch {
          return Fe;
        }
      }
      function e(e) {
        return wr(re().body, function() {
          return eval(e);
        });
      }
      function t(Fe) {
        var Qr = Q.on("htmx:load", function(Fr) {
          Fe(Fr.detail.elt);
        });
        return Qr;
      }
      function X() {
        Q.logger = function(Fe, Qr, Fr) {
          console && console.log(Qr, Fe, Fr);
        };
      }
      function U() {
        Q.logger = null;
      }
      function C(Fe, Qr) {
        return Qr ? Fe.querySelector(Qr) : C(re(), Fe);
      }
      function f(Fe, Qr) {
        return Qr ? Fe.querySelectorAll(Qr) : f(re(), Fe);
      }
      function B(Fe, Qr) {
        Fe = s(Fe), Qr ? setTimeout(function() {
          B(Fe), Fe = null;
        }, Qr) : Fe.parentElement.removeChild(Fe);
      }
      function F(Fe, Qr, Fr) {
        Fe = s(Fe), Fr ? setTimeout(function() {
          F(Fe, Qr), Fe = null;
        }, Fr) : Fe.classList && Fe.classList.add(Qr);
      }
      function n(Fe, Qr, Fr) {
        Fe = s(Fe), Fr ? setTimeout(function() {
          n(Fe, Qr), Fe = null;
        }, Fr) : Fe.classList && (Fe.classList.remove(Qr), Fe.classList.length === 0 && Fe.removeAttribute("class"));
      }
      function V(Fe, Qr) {
        Fe = s(Fe), Fe.classList.toggle(Qr);
      }
      function j(Fe, Qr) {
        Fe = s(Fe), oe(Fe.parentElement.children, function(Fr) {
          n(Fr, Qr);
        }), F(Fe, Qr);
      }
      function v(Fe, Qr) {
        if (Fe = s(Fe), Fe.closest)
          return Fe.closest(Qr);
        do
          if (Fe == null || h(Fe, Qr))
            return Fe;
        while (Fe = Fe && u(Fe));
        return null;
      }
      function g(Fe, Qr) {
        return Fe.substring(0, Qr.length) === Qr;
      }
      function _(Fe, Qr) {
        return Fe.substring(Fe.length - Qr.length) === Qr;
      }
      function z(Fe) {
        var Qr = Fe.trim();
        return g(Qr, "<") && _(Qr, "/>") ? Qr.substring(1, Qr.length - 2) : Qr;
      }
      function W(Fe, Qr) {
        return Qr.indexOf("closest ") === 0 ? [v(Fe, z(Qr.substr(8)))] : Qr.indexOf("find ") === 0 ? [C(Fe, z(Qr.substr(5)))] : Qr === "next" ? [Fe.nextElementSibling] : Qr.indexOf("next ") === 0 ? [$(Fe, z(Qr.substr(5)))] : Qr === "previous" ? [Fe.previousElementSibling] : Qr.indexOf("previous ") === 0 ? [G(Fe, z(Qr.substr(9)))] : Qr === "document" ? [document] : Qr === "window" ? [window] : Qr === "body" ? [document.body] : re().querySelectorAll(z(Qr));
      }
      var $ = function(Fe, Qr) {
        for (var Fr = re().querySelectorAll(Qr), _r = 0; _r < Fr.length; _r++) {
          var Vr = Fr[_r];
          if (Vr.compareDocumentPosition(Fe) === Node.DOCUMENT_POSITION_PRECEDING)
            return Vr;
        }
      }, G = function(Fe, Qr) {
        for (var Fr = re().querySelectorAll(Qr), _r = Fr.length - 1; _r >= 0; _r--) {
          var Vr = Fr[_r];
          if (Vr.compareDocumentPosition(Fe) === Node.DOCUMENT_POSITION_FOLLOWING)
            return Vr;
        }
      };
      function ue(Fe, Qr) {
        return Qr ? W(Fe, Qr)[0] : W(re().body, Fe)[0];
      }
      function s(Fe) {
        return L(Fe, "String") ? C(Fe) : Fe;
      }
      function J(Fe, Qr, Fr) {
        return A(Qr) ? { target: re().body, event: Fe, listener: Qr } : { target: s(Fe), event: Qr, listener: Fr };
      }
      function Z(Fe, Qr, Fr) {
        Dr(function() {
          var Vr = J(Fe, Qr, Fr);
          Vr.target.addEventListener(Vr.event, Vr.listener);
        });
        var _r = A(Qr);
        return _r ? Qr : Fr;
      }
      function K(Fe, Qr, Fr) {
        return Dr(function() {
          var _r = J(Fe, Qr, Fr);
          _r.target.removeEventListener(_r.event, _r.listener);
        }), A(Qr) ? Qr : Fr;
      }
      var ve = re().createElement("output");
      function Y(Fe, Qr) {
        var Fr = ne(Fe, Qr);
        if (Fr) {
          if (Fr === "this")
            return [de(Fe, Qr)];
          var _r = W(Fe, Fr);
          return _r.length === 0 ? (x('The selector "' + Fr + '" on ' + Qr + " returned no matches!"), [ve]) : _r;
        }
      }
      function de(Fe, Qr) {
        return c(Fe, function(Fr) {
          return te(Fr, Qr) != null;
        });
      }
      function ge(Fe) {
        var Qr = ne(Fe, "hx-target");
        if (Qr)
          return Qr === "this" ? de(Fe, "hx-target") : ue(Fe, Qr);
        var Fr = ae(Fe);
        return Fr.boosted ? re().body : Fe;
      }
      function me(Fe) {
        for (var Qr = Q.config.attributesToSettle, Fr = 0; Fr < Qr.length; Fr++)
          if (Fe === Qr[Fr])
            return !0;
        return !1;
      }
      function pe(Fe, Qr) {
        oe(Fe.attributes, function(Fr) {
          !Qr.hasAttribute(Fr.name) && me(Fr.name) && Fe.removeAttribute(Fr.name);
        }), oe(Qr.attributes, function(Fr) {
          me(Fr.name) && Fe.setAttribute(Fr.name, Fr.value);
        });
      }
      function ye(Fe, Qr) {
        for (var Fr = Mr(Qr), _r = 0; _r < Fr.length; _r++) {
          var Vr = Fr[_r];
          try {
            if (Vr.isInlineSwap(Fe))
              return !0;
          } catch (jr) {
            x(jr);
          }
        }
        return Fe === "outerHTML";
      }
      function xe(Fe, Qr, Fr) {
        var _r = "#" + ee(Qr, "id"), Vr = "outerHTML";
        Fe === "true" || (Fe.indexOf(":") > 0 ? (Vr = Fe.substr(0, Fe.indexOf(":")), _r = Fe.substr(Fe.indexOf(":") + 1, Fe.length)) : Vr = Fe);
        var jr = re().querySelectorAll(_r);
        return jr ? (oe(jr, function(zr) {
          var Wr, Yr = Qr.cloneNode(!0);
          Wr = re().createDocumentFragment(), Wr.appendChild(Yr), ye(Vr, zr) || (Wr = Yr);
          var Gr = { shouldSwap: !0, target: zr, fragment: Wr };
          ce(zr, "htmx:oobBeforeSwap", Gr) && (zr = Gr.target, Gr.shouldSwap && De(Vr, zr, zr, Wr, Fr), oe(Fr.elts, function(Jr) {
            ce(Jr, "htmx:oobAfterSwap", Gr);
          }));
        }), Qr.parentNode.removeChild(Qr)) : (Qr.parentNode.removeChild(Qr), fe(re().body, "htmx:oobErrorNoTarget", { content: Qr })), Fe;
      }
      function be(Fe, Qr, Fr) {
        var _r = ne(Fe, "hx-select-oob");
        if (_r) {
          var Vr = _r.split(",");
          for (let Gr = 0; Gr < Vr.length; Gr++) {
            var jr = Vr[Gr].split(":", 2), zr = jr[0].trim();
            zr.indexOf("#") === 0 && (zr = zr.substring(1));
            var Wr = jr[1] || "true", Yr = Qr.querySelector("#" + zr);
            Yr && xe(Wr, Yr, Fr);
          }
        }
        oe(f(Qr, "[hx-swap-oob], [data-hx-swap-oob]"), function(Gr) {
          var Jr = te(Gr, "hx-swap-oob");
          Jr != null && xe(Jr, Gr, Fr);
        });
      }
      function we(Fe) {
        oe(f(Fe, "[hx-preserve], [data-hx-preserve]"), function(Qr) {
          var Fr = te(Qr, "id"), _r = re().getElementById(Fr);
          _r != null && Qr.parentNode.replaceChild(_r, Qr);
        });
      }
      function Se(Fe, Qr, Fr) {
        oe(Qr.querySelectorAll("[id]"), function(_r) {
          var Vr = ee(_r, "id");
          if (Vr && Vr.length > 0) {
            var jr = Vr.replace("'", "\\'"), zr = _r.tagName.replace(":", "\\:"), Wr = Fe.querySelector(zr + "[id='" + jr + "']");
            if (Wr && Wr !== Fe) {
              var Yr = _r.cloneNode();
              pe(_r, Wr), Fr.tasks.push(function() {
                pe(_r, Yr);
              });
            }
          }
        });
      }
      function Ee(Fe) {
        return function() {
          n(Fe, Q.config.addedClass), Bt(Fe), Ot(Fe), Ce(Fe), ce(Fe, "htmx:load");
        };
      }
      function Ce(Fe) {
        var Qr = "[autofocus]", Fr = h(Fe, Qr) ? Fe : Fe.querySelector(Qr);
        Fr != null && Fr.focus();
      }
      function a(Fe, Qr, Fr, _r) {
        for (Se(Fe, Fr, _r); Fr.childNodes.length > 0; ) {
          var Vr = Fr.firstChild;
          F(Vr, Q.config.addedClass), Fe.insertBefore(Vr, Qr), Vr.nodeType !== Node.TEXT_NODE && Vr.nodeType !== Node.COMMENT_NODE && _r.tasks.push(Ee(Vr));
        }
      }
      function Te(Fe, Qr) {
        for (var Fr = 0; Fr < Fe.length; )
          Qr = (Qr << 5) - Qr + Fe.charCodeAt(Fr++) | 0;
        return Qr;
      }
      function Re(Fe) {
        var Qr = 0;
        if (Fe.attributes)
          for (var Fr = 0; Fr < Fe.attributes.length; Fr++) {
            var _r = Fe.attributes[Fr];
            _r.value && (Qr = Te(_r.name, Qr), Qr = Te(_r.value, Qr));
          }
        return Qr;
      }
      function Oe(Fe) {
        var Qr = ae(Fe);
        if (Qr.onHandlers) {
          for (let Fr = 0; Fr < Qr.onHandlers.length; Fr++) {
            const _r = Qr.onHandlers[Fr];
            Fe.removeEventListener(_r.event, _r.listener);
          }
          delete Qr.onHandlers;
        }
      }
      function qe(Fe) {
        var Qr = ae(Fe);
        Qr.timeout && clearTimeout(Qr.timeout), Qr.webSocket && Qr.webSocket.close(), Qr.sseEventSource && Qr.sseEventSource.close(), Qr.listenerInfos && oe(Qr.listenerInfos, function(Fr) {
          Fr.on && Fr.on.removeEventListener(Fr.trigger, Fr.listener);
        }), Qr.initHash && (Qr.initHash = null), Oe(Fe);
      }
      function m(Fe) {
        ce(Fe, "htmx:beforeCleanupElement"), qe(Fe), Fe.children && oe(Fe.children, function(Qr) {
          m(Qr);
        });
      }
      function He(Fe, Qr, Fr) {
        if (Fe.tagName === "BODY")
          return Pe(Fe, Qr, Fr);
        var _r, Vr = Fe.previousSibling;
        for (a(u(Fe), Fe, Qr, Fr), Vr == null ? _r = u(Fe).firstChild : _r = Vr.nextSibling, ae(Fe).replacedWith = _r, Fr.elts = Fr.elts.filter(function(jr) {
          return jr != Fe;
        }); _r && _r !== Fe; )
          _r.nodeType === Node.ELEMENT_NODE && Fr.elts.push(_r), _r = _r.nextElementSibling;
        m(Fe), u(Fe).removeChild(Fe);
      }
      function Le(Fe, Qr, Fr) {
        return a(Fe, Fe.firstChild, Qr, Fr);
      }
      function Ae(Fe, Qr, Fr) {
        return a(u(Fe), Fe, Qr, Fr);
      }
      function Ne(Fe, Qr, Fr) {
        return a(Fe, null, Qr, Fr);
      }
      function Ie(Fe, Qr, Fr) {
        return a(u(Fe), Fe.nextSibling, Qr, Fr);
      }
      function ke(Fe, Qr, Fr) {
        return m(Fe), u(Fe).removeChild(Fe);
      }
      function Pe(Fe, Qr, Fr) {
        var _r = Fe.firstChild;
        if (a(Fe, _r, Qr, Fr), _r) {
          for (; _r.nextSibling; )
            m(_r.nextSibling), Fe.removeChild(_r.nextSibling);
          m(_r), Fe.removeChild(_r);
        }
      }
      function Me(Fe, Qr, Fr) {
        var _r = Fr || ne(Fe, "hx-select");
        if (_r) {
          var Vr = re().createDocumentFragment();
          oe(Qr.querySelectorAll(_r), function(jr) {
            Vr.appendChild(jr);
          }), Qr = Vr;
        }
        return Qr;
      }
      function De(Fe, Qr, Fr, _r, Vr) {
        switch (Fe) {
          case "none":
            return;
          case "outerHTML":
            He(Fr, _r, Vr);
            return;
          case "afterbegin":
            Le(Fr, _r, Vr);
            return;
          case "beforebegin":
            Ae(Fr, _r, Vr);
            return;
          case "beforeend":
            Ne(Fr, _r, Vr);
            return;
          case "afterend":
            Ie(Fr, _r, Vr);
            return;
          case "delete":
            ke(Fr);
            return;
          default:
            for (var jr = Mr(Qr), zr = 0; zr < jr.length; zr++) {
              var Wr = jr[zr];
              try {
                var Yr = Wr.handleSwap(Fe, Fr, _r, Vr);
                if (Yr) {
                  if (typeof Yr.length < "u")
                    for (var Gr = 0; Gr < Yr.length; Gr++) {
                      var Jr = Yr[Gr];
                      Jr.nodeType !== Node.TEXT_NODE && Jr.nodeType !== Node.COMMENT_NODE && Vr.tasks.push(Ee(Jr));
                    }
                  return;
                }
              } catch ($r) {
                x($r);
              }
            }
            Fe === "innerHTML" ? Pe(Fr, _r, Vr) : De(Q.config.defaultSwapStyle, Qr, Fr, _r, Vr);
        }
      }
      function Xe(Fe) {
        if (Fe.indexOf("<title") > -1) {
          var Qr = Fe.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, ""), Fr = Qr.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
          if (Fr)
            return Fr[2];
        }
      }
      function Ue(Fe, Qr, Fr, _r, Vr, jr) {
        Vr.title = Xe(_r);
        var zr = l(_r);
        if (zr)
          return be(Fr, zr, Vr), zr = Me(Fr, zr, jr), we(zr), De(Fe, Fr, Qr, zr, Vr);
      }
      function Be(Fe, Qr, Fr) {
        var _r = Fe.getResponseHeader(Qr);
        if (_r.indexOf("{") === 0) {
          var Vr = E(_r);
          for (var jr in Vr)
            if (Vr.hasOwnProperty(jr)) {
              var zr = Vr[jr];
              N(zr) || (zr = { value: zr }), ce(Fr, jr, zr);
            }
        } else
          for (var Wr = _r.split(","), Yr = 0; Yr < Wr.length; Yr++)
            ce(Fr, Wr[Yr].trim(), []);
      }
      var p = /[\s,]/, Ve = /[_$a-zA-Z]/, je = /[_$a-zA-Z0-9]/, _e = ['"', "'", "/"], ze = /[^\s]/, We = /[{(]/, $e = /[})]/;
      function Ge(Fe) {
        for (var Qr = [], Fr = 0; Fr < Fe.length; ) {
          if (Ve.exec(Fe.charAt(Fr))) {
            for (var _r = Fr; je.exec(Fe.charAt(Fr + 1)); )
              Fr++;
            Qr.push(Fe.substr(_r, Fr - _r + 1));
          } else if (_e.indexOf(Fe.charAt(Fr)) !== -1) {
            var Vr = Fe.charAt(Fr), _r = Fr;
            for (Fr++; Fr < Fe.length && Fe.charAt(Fr) !== Vr; )
              Fe.charAt(Fr) === "\\" && Fr++, Fr++;
            Qr.push(Fe.substr(_r, Fr - _r + 1));
          } else {
            var jr = Fe.charAt(Fr);
            Qr.push(jr);
          }
          Fr++;
        }
        return Qr;
      }
      function Je(Fe, Qr, Fr) {
        return Ve.exec(Fe.charAt(0)) && Fe !== "true" && Fe !== "false" && Fe !== "this" && Fe !== Fr && Qr !== ".";
      }
      function Ze(Fe, Qr, Fr) {
        if (Qr[0] === "[") {
          Qr.shift();
          for (var _r = 1, Vr = " return (function(" + Fr + "){ return (", jr = null; Qr.length > 0; ) {
            var zr = Qr[0];
            if (zr === "]") {
              if (_r--, _r === 0) {
                jr === null && (Vr = Vr + "true"), Qr.shift(), Vr += ")})";
                try {
                  var Wr = wr(Fe, function() {
                    return Function(Vr)();
                  }, function() {
                    return !0;
                  });
                  return Wr.source = Vr, Wr;
                } catch (Yr) {
                  return fe(re().body, "htmx:syntax:error", { error: Yr, source: Vr }), null;
                }
              }
            } else
              zr === "[" && _r++;
            Je(zr, jr, Fr) ? Vr += "((" + Fr + "." + zr + ") ? (" + Fr + "." + zr + ") : (window." + zr + "))" : Vr = Vr + zr, jr = Qr.shift();
          }
        }
      }
      function y(Fe, Qr) {
        for (var Fr = ""; Fe.length > 0 && !Fe[0].match(Qr); )
          Fr += Fe.shift();
        return Fr;
      }
      function Ke(Fe) {
        var Qr;
        return Fe.length > 0 && We.test(Fe[0]) ? (Fe.shift(), Qr = y(Fe, $e).trim(), Fe.shift()) : Qr = y(Fe, p), Qr;
      }
      var Ye = "input, textarea, select";
      function Qe(Fe) {
        var Qr = te(Fe, "hx-trigger"), Fr = [];
        if (Qr) {
          var _r = Ge(Qr);
          do {
            y(_r, ze);
            var Vr = _r.length, jr = y(_r, /[,\[\s]/);
            if (jr !== "")
              if (jr === "every") {
                var zr = { trigger: "every" };
                y(_r, ze), zr.pollInterval = d(y(_r, /[,\[\s]/)), y(_r, ze);
                var Wr = Ze(Fe, _r, "event");
                Wr && (zr.eventFilter = Wr), Fr.push(zr);
              } else if (jr.indexOf("sse:") === 0)
                Fr.push({ trigger: "sse", sseEvent: jr.substr(4) });
              else {
                var Yr = { trigger: jr }, Wr = Ze(Fe, _r, "event");
                for (Wr && (Yr.eventFilter = Wr); _r.length > 0 && _r[0] !== ","; ) {
                  y(_r, ze);
                  var Gr = _r.shift();
                  if (Gr === "changed")
                    Yr.changed = !0;
                  else if (Gr === "once")
                    Yr.once = !0;
                  else if (Gr === "consume")
                    Yr.consume = !0;
                  else if (Gr === "delay" && _r[0] === ":")
                    _r.shift(), Yr.delay = d(y(_r, p));
                  else if (Gr === "from" && _r[0] === ":") {
                    if (_r.shift(), We.test(_r[0]))
                      var Jr = Ke(_r);
                    else {
                      var Jr = y(_r, p);
                      if (Jr === "closest" || Jr === "find" || Jr === "next" || Jr === "previous") {
                        _r.shift();
                        var $r = Ke(_r);
                        $r.length > 0 && (Jr += " " + $r);
                      }
                    }
                    Yr.from = Jr;
                  } else
                    Gr === "target" && _r[0] === ":" ? (_r.shift(), Yr.target = Ke(_r)) : Gr === "throttle" && _r[0] === ":" ? (_r.shift(), Yr.throttle = d(y(_r, p))) : Gr === "queue" && _r[0] === ":" ? (_r.shift(), Yr.queue = y(_r, p)) : Gr === "root" && _r[0] === ":" ? (_r.shift(), Yr[Gr] = Ke(_r)) : Gr === "threshold" && _r[0] === ":" ? (_r.shift(), Yr[Gr] = y(_r, p)) : fe(Fe, "htmx:syntax:error", { token: _r.shift() });
                }
                Fr.push(Yr);
              }
            _r.length === Vr && fe(Fe, "htmx:syntax:error", { token: _r.shift() }), y(_r, ze);
          } while (_r[0] === "," && _r.shift());
        }
        return Fr.length > 0 ? Fr : h(Fe, "form") ? [{ trigger: "submit" }] : h(Fe, 'input[type="button"], input[type="submit"]') ? [{ trigger: "click" }] : h(Fe, Ye) ? [{ trigger: "change" }] : [{ trigger: "click" }];
      }
      function et(Fe) {
        ae(Fe).cancelled = !0;
      }
      function tt(Fe, Qr, Fr) {
        var _r = ae(Fe);
        _r.timeout = setTimeout(function() {
          se(Fe) && _r.cancelled !== !0 && (ot(Fr, Fe, Vt("hx:poll:trigger", { triggerSpec: Fr, target: Fe })) || Qr(Fe), tt(Fe, Qr, Fr));
        }, Fr.pollInterval);
      }
      function rt(Fe) {
        return location.hostname === Fe.hostname && ee(Fe, "href") && ee(Fe, "href").indexOf("#") !== 0;
      }
      function nt(Fe, Qr, Fr) {
        if (Fe.tagName === "A" && rt(Fe) && (Fe.target === "" || Fe.target === "_self") || Fe.tagName === "FORM") {
          Qr.boosted = !0;
          var _r, Vr;
          if (Fe.tagName === "A")
            _r = "get", Vr = ee(Fe, "href");
          else {
            var jr = ee(Fe, "method");
            _r = jr ? jr.toLowerCase() : "get", Vr = ee(Fe, "action");
          }
          Fr.forEach(function(zr) {
            st(Fe, function(Wr, Yr) {
              if (v(Wr, Q.config.disableSelector)) {
                m(Wr);
                return;
              }
              he(_r, Vr, Wr, Yr);
            }, Qr, zr, !0);
          });
        }
      }
      function it(Fe, Qr) {
        return !!((Fe.type === "submit" || Fe.type === "click") && (Qr.tagName === "FORM" || h(Qr, 'input[type="submit"], button') && v(Qr, "form") !== null || Qr.tagName === "A" && Qr.href && (Qr.getAttribute("href") === "#" || Qr.getAttribute("href").indexOf("#") !== 0)));
      }
      function at(Fe, Qr) {
        return ae(Fe).boosted && Fe.tagName === "A" && Qr.type === "click" && (Qr.ctrlKey || Qr.metaKey);
      }
      function ot(Fe, Qr, Fr) {
        var _r = Fe.eventFilter;
        if (_r)
          try {
            return _r.call(Qr, Fr) !== !0;
          } catch (Vr) {
            return fe(re().body, "htmx:eventFilter:error", { error: Vr, source: _r.source }), !0;
          }
        return !1;
      }
      function st(Fe, Qr, Fr, _r, Vr) {
        var jr = ae(Fe), zr;
        _r.from ? zr = W(Fe, _r.from) : zr = [Fe], _r.changed && zr.forEach(function(Wr) {
          var Yr = ae(Wr);
          Yr.lastValue = Wr.value;
        }), oe(zr, function(Wr) {
          var Yr = function(Gr) {
            if (!se(Fe)) {
              Wr.removeEventListener(_r.trigger, Yr);
              return;
            }
            if (!at(Fe, Gr) && ((Vr || it(Gr, Fe)) && Gr.preventDefault(), !ot(_r, Fe, Gr))) {
              var Jr = ae(Gr);
              if (Jr.triggerSpec = _r, Jr.handledFor == null && (Jr.handledFor = []), Jr.handledFor.indexOf(Fe) < 0) {
                if (Jr.handledFor.push(Fe), _r.consume && Gr.stopPropagation(), _r.target && Gr.target && !h(Gr.target, _r.target))
                  return;
                if (_r.once) {
                  if (jr.triggeredOnce)
                    return;
                  jr.triggeredOnce = !0;
                }
                if (_r.changed) {
                  var $r = ae(Wr);
                  if ($r.lastValue === Wr.value)
                    return;
                  $r.lastValue = Wr.value;
                }
                if (jr.delayed && clearTimeout(jr.delayed), jr.throttle)
                  return;
                _r.throttle ? jr.throttle || (Qr(Fe, Gr), jr.throttle = setTimeout(function() {
                  jr.throttle = null;
                }, _r.throttle)) : _r.delay ? jr.delayed = setTimeout(function() {
                  Qr(Fe, Gr);
                }, _r.delay) : (ce(Fe, "htmx:trigger"), Qr(Fe, Gr));
              }
            }
          };
          Fr.listenerInfos == null && (Fr.listenerInfos = []), Fr.listenerInfos.push({ trigger: _r.trigger, listener: Yr, on: Wr }), Wr.addEventListener(_r.trigger, Yr);
        });
      }
      var lt = !1, ut = null;
      function ft() {
        ut || (ut = function() {
          lt = !0;
        }, window.addEventListener("scroll", ut), setInterval(function() {
          lt && (lt = !1, oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(Fe) {
            ct(Fe);
          }));
        }, 200));
      }
      function ct(Fe) {
        if (!o(Fe, "data-hx-revealed") && k(Fe)) {
          Fe.setAttribute("data-hx-revealed", "true");
          var Qr = ae(Fe);
          Qr.initHash ? ce(Fe, "revealed") : Fe.addEventListener("htmx:afterProcessNode", function(Fr) {
            ce(Fe, "revealed");
          }, { once: !0 });
        }
      }
      function ht(Fe, Qr, Fr) {
        for (var _r = P(Fr), Vr = 0; Vr < _r.length; Vr++) {
          var jr = _r[Vr].split(/:(.+)/);
          jr[0] === "connect" && vt(Fe, jr[1], 0), jr[0] === "send" && gt(Fe);
        }
      }
      function vt(Fe, Qr, Fr) {
        if (se(Fe)) {
          if (Qr.indexOf("/") == 0) {
            var _r = location.hostname + (location.port ? ":" + location.port : "");
            location.protocol == "https:" ? Qr = "wss://" + _r + Qr : location.protocol == "http:" && (Qr = "ws://" + _r + Qr);
          }
          var Vr = Q.createWebSocket(Qr);
          Vr.onerror = function(jr) {
            fe(Fe, "htmx:wsError", { error: jr, socket: Vr }), dt(Fe);
          }, Vr.onclose = function(jr) {
            if ([1006, 1012, 1013].indexOf(jr.code) >= 0) {
              var zr = mt(Fr);
              setTimeout(function() {
                vt(Fe, Qr, Fr + 1);
              }, zr);
            }
          }, Vr.onopen = function(jr) {
            Fr = 0;
          }, ae(Fe).webSocket = Vr, Vr.addEventListener("message", function(jr) {
            if (!dt(Fe)) {
              var zr = jr.data;
              T(Fe, function(Zr) {
                zr = Zr.transformResponse(zr, null, Fe);
              });
              for (var Wr = R(Fe), Yr = l(zr), Gr = I(Yr.children), Jr = 0; Jr < Gr.length; Jr++) {
                var $r = Gr[Jr];
                xe(te($r, "hx-swap-oob") || "true", $r, Wr);
              }
              Yt(Wr.tasks);
            }
          });
        }
      }
      function dt(Fe) {
        if (!se(Fe))
          return ae(Fe).webSocket.close(), !0;
      }
      function gt(Fe) {
        var Qr = c(Fe, function(Fr) {
          return ae(Fr).webSocket != null;
        });
        Qr ? Fe.addEventListener(Qe(Fe)[0].trigger, function(Fr) {
          var _r = ae(Qr).webSocket, Vr = vr(Fe, Qr), jr = ur(Fe, "post"), zr = jr.errors, Wr = jr.values, Yr = Cr(Fe), Gr = le(Wr, Yr), Jr = dr(Gr, Fe);
          if (Jr.HEADERS = Vr, zr && zr.length > 0) {
            ce(Fe, "htmx:validation:halted", zr);
            return;
          }
          _r.send(JSON.stringify(Jr)), it(Fr, Fe) && Fr.preventDefault();
        }) : fe(Fe, "htmx:noWebSocketSourceError");
      }
      function mt(Fe) {
        var Qr = Q.config.wsReconnectDelay;
        if (typeof Qr == "function")
          return Qr(Fe);
        if (Qr === "full-jitter") {
          var Fr = Math.min(Fe, 6), _r = 1e3 * Math.pow(2, Fr);
          return _r * Math.random();
        }
        x('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
      }
      function pt(Fe, Qr, Fr) {
        for (var _r = P(Fr), Vr = 0; Vr < _r.length; Vr++) {
          var jr = _r[Vr].split(/:(.+)/);
          jr[0] === "connect" && yt(Fe, jr[1]), jr[0] === "swap" && xt(Fe, jr[1]);
        }
      }
      function yt(Fe, Qr) {
        var Fr = Q.createEventSource(Qr);
        Fr.onerror = function(_r) {
          fe(Fe, "htmx:sseError", { error: _r, source: Fr }), wt(Fe);
        }, ae(Fe).sseEventSource = Fr;
      }
      function xt(Fe, Qr) {
        var Fr = c(Fe, St);
        if (Fr) {
          var _r = ae(Fr).sseEventSource, Vr = function(jr) {
            if (!wt(Fr)) {
              if (!se(Fe)) {
                _r.removeEventListener(Qr, Vr);
                return;
              }
              var zr = jr.data;
              T(Fe, function(Jr) {
                zr = Jr.transformResponse(zr, null, Fe);
              });
              var Wr = mr(Fe), Yr = ge(Fe), Gr = R(Fe);
              Ue(Wr.swapStyle, Yr, Fe, zr, Gr), Yt(Gr.tasks), ce(Fe, "htmx:sseMessage", jr);
            }
          };
          ae(Fe).sseListener = Vr, _r.addEventListener(Qr, Vr);
        } else
          fe(Fe, "htmx:noSSESourceError");
      }
      function bt(Fe, Qr, Fr) {
        var _r = c(Fe, St);
        if (_r) {
          var Vr = ae(_r).sseEventSource, jr = function() {
            wt(_r) || (se(Fe) ? Qr(Fe) : Vr.removeEventListener(Fr, jr));
          };
          ae(Fe).sseListener = jr, Vr.addEventListener(Fr, jr);
        } else
          fe(Fe, "htmx:noSSESourceError");
      }
      function wt(Fe) {
        if (!se(Fe))
          return ae(Fe).sseEventSource.close(), !0;
      }
      function St(Fe) {
        return ae(Fe).sseEventSource != null;
      }
      function Et(Fe, Qr, Fr, _r) {
        var Vr = function() {
          Fr.loaded || (Fr.loaded = !0, Qr(Fe));
        };
        _r ? setTimeout(Vr, _r) : Vr();
      }
      function Ct(Fe, Qr, Fr) {
        var _r = !1;
        return oe(b, function(Vr) {
          if (o(Fe, "hx-" + Vr)) {
            var jr = te(Fe, "hx-" + Vr);
            _r = !0, Qr.path = jr, Qr.verb = Vr, Fr.forEach(function(zr) {
              Tt(Fe, zr, Qr, function(Wr, Yr) {
                if (v(Wr, Q.config.disableSelector)) {
                  m(Wr);
                  return;
                }
                he(Vr, jr, Wr, Yr);
              });
            });
          }
        }), _r;
      }
      function Tt(Fe, Qr, Fr, _r) {
        if (Qr.sseEvent)
          bt(Fe, _r, Qr.sseEvent);
        else if (Qr.trigger === "revealed")
          ft(), st(Fe, _r, Fr, Qr), ct(Fe);
        else if (Qr.trigger === "intersect") {
          var Vr = {};
          Qr.root && (Vr.root = ue(Fe, Qr.root)), Qr.threshold && (Vr.threshold = parseFloat(Qr.threshold));
          var jr = new IntersectionObserver(function(zr) {
            for (var Wr = 0; Wr < zr.length; Wr++) {
              var Yr = zr[Wr];
              if (Yr.isIntersecting) {
                ce(Fe, "intersect");
                break;
              }
            }
          }, Vr);
          jr.observe(Fe), st(Fe, _r, Fr, Qr);
        } else
          Qr.trigger === "load" ? ot(Qr, Fe, Vt("load", { elt: Fe })) || Et(Fe, _r, Fr, Qr.delay) : Qr.pollInterval ? (Fr.polling = !0, tt(Fe, _r, Qr)) : st(Fe, _r, Fr, Qr);
      }
      function Rt(Fe) {
        if (Q.config.allowScriptTags && (Fe.type === "text/javascript" || Fe.type === "module" || Fe.type === "")) {
          var Qr = re().createElement("script");
          oe(Fe.attributes, function(_r) {
            Qr.setAttribute(_r.name, _r.value);
          }), Qr.textContent = Fe.textContent, Qr.async = !1, Q.config.inlineScriptNonce && (Qr.nonce = Q.config.inlineScriptNonce);
          var Fr = Fe.parentElement;
          try {
            Fr.insertBefore(Qr, Fe);
          } catch (_r) {
            x(_r);
          } finally {
            Fe.parentElement && Fe.parentElement.removeChild(Fe);
          }
        }
      }
      function Ot(Fe) {
        h(Fe, "script") && Rt(Fe), oe(f(Fe, "script"), function(Qr) {
          Rt(Qr);
        });
      }
      function qt() {
        return document.querySelector("[hx-boost], [data-hx-boost]");
      }
      function Ht(Fe) {
        var Qr = null, Fr = [];
        if (document.evaluate)
          for (var _r = document.evaluate('//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") ]]', Fe); Qr = _r.iterateNext(); )
            Fr.push(Qr);
        else
          for (var Vr = document.getElementsByTagName("*"), jr = 0; jr < Vr.length; jr++)
            for (var zr = Vr[jr].attributes, Wr = 0; Wr < zr.length; Wr++) {
              var Yr = zr[Wr].name;
              (g(Yr, "hx-on:") || g(Yr, "data-hx-on:")) && Fr.push(Vr[jr]);
            }
        return Fr;
      }
      function Lt(Fe) {
        if (Fe.querySelectorAll) {
          var Qr = qt() ? ", a" : "", Fr = Fe.querySelectorAll(w + Qr + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
          return Fr;
        } else
          return [];
      }
      function At(Fe) {
        var Qr = v(Fe.target, "button, input[type='submit']"), Fr = It(Fe);
        Fr && (Fr.lastButtonClicked = Qr);
      }
      function Nt(Fe) {
        var Qr = It(Fe);
        Qr && (Qr.lastButtonClicked = null);
      }
      function It(Fe) {
        var Qr = v(Fe.target, "button, input[type='submit']");
        if (Qr) {
          var Fr = s("#" + ee(Qr, "form")) || v(Qr, "form");
          if (Fr)
            return ae(Fr);
        }
      }
      function kt(Fe) {
        Fe.addEventListener("click", At), Fe.addEventListener("focusin", At), Fe.addEventListener("focusout", Nt);
      }
      function Pt(Fe) {
        var Qr = Ge(Fe), Fr = 0;
        for (let _r = 0; _r < Qr.length; _r++) {
          const Vr = Qr[_r];
          Vr === "{" ? Fr++ : Vr === "}" && Fr--;
        }
        return Fr;
      }
      function Mt(Fe, Qr, Fr) {
        var _r = ae(Fe);
        Array.isArray(_r.onHandlers) || (_r.onHandlers = []);
        var Vr, jr = function(zr) {
          return wr(Fe, function() {
            Vr || (Vr = new Function("event", Fr)), Vr.call(Fe, zr);
          });
        };
        Fe.addEventListener(Qr, jr), _r.onHandlers.push({ event: Qr, listener: jr });
      }
      function Dt(Fe) {
        var Qr = te(Fe, "hx-on");
        if (Qr) {
          for (var Fr = {}, _r = Qr.split(`
`), Vr = null, jr = 0; _r.length > 0; ) {
            var zr = _r.shift(), Wr = zr.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
            jr === 0 && Wr ? (zr.split(":"), Vr = Wr[1].slice(0, -1), Fr[Vr] = Wr[2]) : Fr[Vr] += zr, jr += Pt(zr);
          }
          for (var Yr in Fr)
            Mt(Fe, Yr, Fr[Yr]);
        }
      }
      function Xt(Fe) {
        Oe(Fe);
        for (var Qr = 0; Qr < Fe.attributes.length; Qr++) {
          var Fr = Fe.attributes[Qr].name, _r = Fe.attributes[Qr].value;
          if (g(Fr, "hx-on:") || g(Fr, "data-hx-on:")) {
            let Vr = Fr.slice(Fr.indexOf(":") + 1);
            g(Vr, ":") && (Vr = "htmx" + Vr), Mt(Fe, Vr, _r);
          }
        }
      }
      function Ut(Fe) {
        if (v(Fe, Q.config.disableSelector)) {
          m(Fe);
          return;
        }
        var Qr = ae(Fe);
        if (Qr.initHash !== Re(Fe)) {
          qe(Fe), Qr.initHash = Re(Fe), Dt(Fe), ce(Fe, "htmx:beforeProcessNode"), Fe.value && (Qr.lastValue = Fe.value);
          var Fr = Qe(Fe), _r = Ct(Fe, Qr, Fr);
          _r || (ne(Fe, "hx-boost") === "true" ? nt(Fe, Qr, Fr) : o(Fe, "hx-trigger") && Fr.forEach(function(zr) {
            Tt(Fe, zr, Qr, function() {
            });
          })), (Fe.tagName === "FORM" || ee(Fe, "type") === "submit" && o(Fe, "form")) && kt(Fe);
          var Vr = te(Fe, "hx-sse");
          Vr && pt(Fe, Qr, Vr);
          var jr = te(Fe, "hx-ws");
          jr && ht(Fe, Qr, jr), ce(Fe, "htmx:afterProcessNode");
        }
      }
      function Bt(Fe) {
        if (Fe = s(Fe), v(Fe, Q.config.disableSelector)) {
          m(Fe);
          return;
        }
        Ut(Fe), oe(Lt(Fe), function(Qr) {
          Ut(Qr);
        }), oe(Ht(Fe), Xt);
      }
      function Ft(Fe) {
        return Fe.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function Vt(Fe, Qr) {
        var Fr;
        return window.CustomEvent && typeof window.CustomEvent == "function" ? Fr = new CustomEvent(Fe, { bubbles: !0, cancelable: !0, detail: Qr }) : (Fr = re().createEvent("CustomEvent"), Fr.initCustomEvent(Fe, !0, !0, Qr)), Fr;
      }
      function fe(Fe, Qr, Fr) {
        ce(Fe, Qr, le({ error: Qr }, Fr));
      }
      function jt(Fe) {
        return Fe === "htmx:afterProcessNode";
      }
      function T(Fe, Qr) {
        oe(Mr(Fe), function(Fr) {
          try {
            Qr(Fr);
          } catch (_r) {
            x(_r);
          }
        });
      }
      function x(Fe) {
        console.error ? console.error(Fe) : console.log && console.log("ERROR: ", Fe);
      }
      function ce(Fe, Qr, Fr) {
        Fe = s(Fe), Fr == null && (Fr = {}), Fr.elt = Fe;
        var _r = Vt(Qr, Fr);
        Q.logger && !jt(Qr) && Q.logger(Fe, Qr, Fr), Fr.error && (x(Fr.error), ce(Fe, "htmx:error", { errorInfo: Fr }));
        var Vr = Fe.dispatchEvent(_r), jr = Ft(Qr);
        if (Vr && jr !== Qr) {
          var zr = Vt(jr, _r.detail);
          Vr = Vr && Fe.dispatchEvent(zr);
        }
        return T(Fe, function(Wr) {
          Vr = Vr && Wr.onEvent(Qr, _r) !== !1 && !_r.defaultPrevented;
        }), Vr;
      }
      var _t = location.pathname + location.search;
      function zt() {
        var Fe = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
        return Fe || re().body;
      }
      function Wt(Fe, Qr, Fr, _r) {
        if (M()) {
          if (Q.config.historyCacheSize <= 0) {
            localStorage.removeItem("htmx-history-cache");
            return;
          }
          Fe = D(Fe);
          for (var Vr = E(localStorage.getItem("htmx-history-cache")) || [], jr = 0; jr < Vr.length; jr++)
            if (Vr[jr].url === Fe) {
              Vr.splice(jr, 1);
              break;
            }
          var zr = { url: Fe, content: Qr, title: Fr, scroll: _r };
          for (ce(re().body, "htmx:historyItemCreated", { item: zr, cache: Vr }), Vr.push(zr); Vr.length > Q.config.historyCacheSize; )
            Vr.shift();
          for (; Vr.length > 0; )
            try {
              localStorage.setItem("htmx-history-cache", JSON.stringify(Vr));
              break;
            } catch (Wr) {
              fe(re().body, "htmx:historyCacheError", { cause: Wr, cache: Vr }), Vr.shift();
            }
        }
      }
      function $t(Fe) {
        if (!M())
          return null;
        Fe = D(Fe);
        for (var Qr = E(localStorage.getItem("htmx-history-cache")) || [], Fr = 0; Fr < Qr.length; Fr++)
          if (Qr[Fr].url === Fe)
            return Qr[Fr];
        return null;
      }
      function Gt(Fe) {
        var Qr = Q.config.requestClass, Fr = Fe.cloneNode(!0);
        return oe(f(Fr, "." + Qr), function(_r) {
          n(_r, Qr);
        }), Fr.innerHTML;
      }
      function Jt() {
        var Fe = zt(), Qr = _t || location.pathname + location.search, Fr;
        try {
          Fr = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
        } catch {
          Fr = re().querySelector('[hx-history="false"],[data-hx-history="false"]');
        }
        Fr || (ce(re().body, "htmx:beforeHistorySave", { path: Qr, historyElt: Fe }), Wt(Qr, Gt(Fe), re().title, window.scrollY)), Q.config.historyEnabled && history.replaceState({ htmx: !0 }, re().title, window.location.href);
      }
      function Zt(Fe) {
        Q.config.getCacheBusterParam && (Fe = Fe.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""), (_(Fe, "&") || _(Fe, "?")) && (Fe = Fe.slice(0, -1))), Q.config.historyEnabled && history.pushState({ htmx: !0 }, "", Fe), _t = Fe;
      }
      function Kt(Fe) {
        Q.config.historyEnabled && history.replaceState({ htmx: !0 }, "", Fe), _t = Fe;
      }
      function Yt(Fe) {
        oe(Fe, function(Qr) {
          Qr.call();
        });
      }
      function Qt(Fe) {
        var Qr = new XMLHttpRequest(), Fr = { path: Fe, xhr: Qr };
        ce(re().body, "htmx:historyCacheMiss", Fr), Qr.open("GET", Fe, !0), Qr.setRequestHeader("HX-History-Restore-Request", "true"), Qr.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            ce(re().body, "htmx:historyCacheMissLoad", Fr);
            var _r = l(this.response);
            _r = _r.querySelector("[hx-history-elt],[data-hx-history-elt]") || _r;
            var Vr = zt(), jr = R(Vr), zr = Xe(this.response);
            if (zr) {
              var Wr = C("title");
              Wr ? Wr.innerHTML = zr : window.document.title = zr;
            }
            Pe(Vr, _r, jr), Yt(jr.tasks), _t = Fe, ce(re().body, "htmx:historyRestore", { path: Fe, cacheMiss: !0, serverResponse: this.response });
          } else
            fe(re().body, "htmx:historyCacheMissLoadError", Fr);
        }, Qr.send();
      }
      function er(Fe) {
        Jt(), Fe = Fe || location.pathname + location.search;
        var Qr = $t(Fe);
        if (Qr) {
          var Fr = l(Qr.content), _r = zt(), Vr = R(_r);
          Pe(_r, Fr, Vr), Yt(Vr.tasks), document.title = Qr.title, setTimeout(function() {
            window.scrollTo(0, Qr.scroll);
          }, 0), _t = Fe, ce(re().body, "htmx:historyRestore", { path: Fe, item: Qr });
        } else
          Q.config.refreshOnHistoryMiss ? window.location.reload(!0) : Qt(Fe);
      }
      function tr(Fe) {
        var Qr = Y(Fe, "hx-indicator");
        return Qr == null && (Qr = [Fe]), oe(Qr, function(Fr) {
          var _r = ae(Fr);
          _r.requestCount = (_r.requestCount || 0) + 1, Fr.classList.add.call(Fr.classList, Q.config.requestClass);
        }), Qr;
      }
      function rr(Fe) {
        var Qr = Y(Fe, "hx-disabled-elt");
        return Qr == null && (Qr = []), oe(Qr, function(Fr) {
          var _r = ae(Fr);
          _r.requestCount = (_r.requestCount || 0) + 1, Fr.setAttribute("disabled", "");
        }), Qr;
      }
      function nr(Fe, Qr) {
        oe(Fe, function(Fr) {
          var _r = ae(Fr);
          _r.requestCount = (_r.requestCount || 0) - 1, _r.requestCount === 0 && Fr.classList.remove.call(Fr.classList, Q.config.requestClass);
        }), oe(Qr, function(Fr) {
          var _r = ae(Fr);
          _r.requestCount = (_r.requestCount || 0) - 1, _r.requestCount === 0 && Fr.removeAttribute("disabled");
        });
      }
      function ir(Fe, Qr) {
        for (var Fr = 0; Fr < Fe.length; Fr++) {
          var _r = Fe[Fr];
          if (_r.isSameNode(Qr))
            return !0;
        }
        return !1;
      }
      function ar(Fe) {
        return Fe.name === "" || Fe.name == null || Fe.disabled || Fe.type === "button" || Fe.type === "submit" || Fe.tagName === "image" || Fe.tagName === "reset" || Fe.tagName === "file" ? !1 : Fe.type === "checkbox" || Fe.type === "radio" ? Fe.checked : !0;
      }
      function or(Fe, Qr, Fr) {
        if (Fe != null && Qr != null) {
          var _r = Fr[Fe];
          _r === void 0 ? Fr[Fe] = Qr : Array.isArray(_r) ? Array.isArray(Qr) ? Fr[Fe] = _r.concat(Qr) : _r.push(Qr) : Array.isArray(Qr) ? Fr[Fe] = [_r].concat(Qr) : Fr[Fe] = [_r, Qr];
        }
      }
      function sr(Fe, Qr, Fr, _r, Vr) {
        if (!(_r == null || ir(Fe, _r))) {
          if (Fe.push(_r), ar(_r)) {
            var jr = ee(_r, "name"), zr = _r.value;
            _r.multiple && _r.tagName === "SELECT" && (zr = I(_r.querySelectorAll("option:checked")).map(function(Yr) {
              return Yr.value;
            })), _r.files && (zr = I(_r.files)), or(jr, zr, Qr), Vr && lr(_r, Fr);
          }
          if (h(_r, "form")) {
            var Wr = _r.elements;
            oe(Wr, function(Yr) {
              sr(Fe, Qr, Fr, Yr, Vr);
            });
          }
        }
      }
      function lr(Fe, Qr) {
        Fe.willValidate && (ce(Fe, "htmx:validation:validate"), Fe.checkValidity() || (Qr.push({ elt: Fe, message: Fe.validationMessage, validity: Fe.validity }), ce(Fe, "htmx:validation:failed", { message: Fe.validationMessage, validity: Fe.validity })));
      }
      function ur(Fe, Qr) {
        var Fr = [], _r = {}, Vr = {}, jr = [], zr = ae(Fe);
        zr.lastButtonClicked && !se(zr.lastButtonClicked) && (zr.lastButtonClicked = null);
        var Wr = h(Fe, "form") && Fe.noValidate !== !0 || te(Fe, "hx-validate") === "true";
        if (zr.lastButtonClicked && (Wr = Wr && zr.lastButtonClicked.formNoValidate !== !0), Qr !== "get" && sr(Fr, Vr, jr, v(Fe, "form"), Wr), sr(Fr, _r, jr, Fe, Wr), zr.lastButtonClicked || Fe.tagName === "BUTTON" || Fe.tagName === "INPUT" && ee(Fe, "type") === "submit") {
          var Yr = zr.lastButtonClicked || Fe, Gr = ee(Yr, "name");
          or(Gr, Yr.value, Vr);
        }
        var Jr = Y(Fe, "hx-include");
        return oe(Jr, function($r) {
          sr(Fr, _r, jr, $r, Wr), h($r, "form") || oe($r.querySelectorAll(Ye), function(Zr) {
            sr(Fr, _r, jr, Zr, Wr);
          });
        }), _r = le(_r, Vr), { errors: jr, values: _r };
      }
      function fr(Fe, Qr, Fr) {
        Fe !== "" && (Fe += "&"), String(Fr) === "[object Object]" && (Fr = JSON.stringify(Fr));
        var _r = encodeURIComponent(Fr);
        return Fe += encodeURIComponent(Qr) + "=" + _r, Fe;
      }
      function cr(Fe) {
        var Qr = "";
        for (var Fr in Fe)
          if (Fe.hasOwnProperty(Fr)) {
            var _r = Fe[Fr];
            Array.isArray(_r) ? oe(_r, function(Vr) {
              Qr = fr(Qr, Fr, Vr);
            }) : Qr = fr(Qr, Fr, _r);
          }
        return Qr;
      }
      function hr(Fe) {
        var Qr = new FormData();
        for (var Fr in Fe)
          if (Fe.hasOwnProperty(Fr)) {
            var _r = Fe[Fr];
            Array.isArray(_r) ? oe(_r, function(Vr) {
              Qr.append(Fr, Vr);
            }) : Qr.append(Fr, _r);
          }
        return Qr;
      }
      function vr(Fe, Qr, Fr) {
        var _r = { "HX-Request": "true", "HX-Trigger": ee(Fe, "id"), "HX-Trigger-Name": ee(Fe, "name"), "HX-Target": te(Qr, "id"), "HX-Current-URL": re().location.href };
        return br(Fe, "hx-headers", !1, _r), Fr !== void 0 && (_r["HX-Prompt"] = Fr), ae(Fe).boosted && (_r["HX-Boosted"] = "true"), _r;
      }
      function dr(Fe, Qr) {
        var Fr = ne(Qr, "hx-params");
        if (Fr) {
          if (Fr === "none")
            return {};
          if (Fr === "*")
            return Fe;
          if (Fr.indexOf("not ") === 0)
            return oe(Fr.substr(4).split(","), function(Vr) {
              Vr = Vr.trim(), delete Fe[Vr];
            }), Fe;
          var _r = {};
          return oe(Fr.split(","), function(Vr) {
            Vr = Vr.trim(), _r[Vr] = Fe[Vr];
          }), _r;
        } else
          return Fe;
      }
      function gr(Fe) {
        return ee(Fe, "href") && ee(Fe, "href").indexOf("#") >= 0;
      }
      function mr(Fe, Qr) {
        var Fr = Qr || ne(Fe, "hx-swap"), _r = { swapStyle: ae(Fe).boosted ? "innerHTML" : Q.config.defaultSwapStyle, swapDelay: Q.config.defaultSwapDelay, settleDelay: Q.config.defaultSettleDelay };
        if (Q.config.scrollIntoViewOnBoost && ae(Fe).boosted && !gr(Fe) && (_r.show = "top"), Fr) {
          var Vr = P(Fr);
          if (Vr.length > 0)
            for (var jr = 0; jr < Vr.length; jr++) {
              var zr = Vr[jr];
              if (zr.indexOf("swap:") === 0)
                _r.swapDelay = d(zr.substr(5));
              else if (zr.indexOf("settle:") === 0)
                _r.settleDelay = d(zr.substr(7));
              else if (zr.indexOf("transition:") === 0)
                _r.transition = zr.substr(11) === "true";
              else if (zr.indexOf("ignoreTitle:") === 0)
                _r.ignoreTitle = zr.substr(12) === "true";
              else if (zr.indexOf("scroll:") === 0) {
                var Wr = zr.substr(7), Yr = Wr.split(":"), Gr = Yr.pop(), Jr = Yr.length > 0 ? Yr.join(":") : null;
                _r.scroll = Gr, _r.scrollTarget = Jr;
              } else if (zr.indexOf("show:") === 0) {
                var $r = zr.substr(5), Yr = $r.split(":"), Zr = Yr.pop(), Jr = Yr.length > 0 ? Yr.join(":") : null;
                _r.show = Zr, _r.showTarget = Jr;
              } else if (zr.indexOf("focus-scroll:") === 0) {
                var un = zr.substr(13);
                _r.focusScroll = un == "true";
              } else
                jr == 0 ? _r.swapStyle = zr : x("Unknown modifier in hx-swap: " + zr);
            }
        }
        return _r;
      }
      function pr(Fe) {
        return ne(Fe, "hx-encoding") === "multipart/form-data" || h(Fe, "form") && ee(Fe, "enctype") === "multipart/form-data";
      }
      function yr(Fe, Qr, Fr) {
        var _r = null;
        return T(Qr, function(Vr) {
          _r == null && (_r = Vr.encodeParameters(Fe, Fr, Qr));
        }), _r ?? (pr(Qr) ? hr(Fr) : cr(Fr));
      }
      function R(Fe) {
        return { tasks: [], elts: [Fe] };
      }
      function xr(Fe, Qr) {
        var Fr = Fe[0], _r = Fe[Fe.length - 1];
        if (Qr.scroll) {
          var Vr = null;
          Qr.scrollTarget && (Vr = ue(Fr, Qr.scrollTarget)), Qr.scroll === "top" && (Fr || Vr) && (Vr = Vr || Fr, Vr.scrollTop = 0), Qr.scroll === "bottom" && (_r || Vr) && (Vr = Vr || _r, Vr.scrollTop = Vr.scrollHeight);
        }
        if (Qr.show) {
          var Vr = null;
          if (Qr.showTarget) {
            var jr = Qr.showTarget;
            Qr.showTarget === "window" && (jr = "body"), Vr = ue(Fr, jr);
          }
          Qr.show === "top" && (Fr || Vr) && (Vr = Vr || Fr, Vr.scrollIntoView({ block: "start", behavior: Q.config.scrollBehavior })), Qr.show === "bottom" && (_r || Vr) && (Vr = Vr || _r, Vr.scrollIntoView({ block: "end", behavior: Q.config.scrollBehavior }));
        }
      }
      function br(Fe, Qr, Fr, _r) {
        if (_r == null && (_r = {}), Fe == null)
          return _r;
        var Vr = te(Fe, Qr);
        if (Vr) {
          var jr = Vr.trim(), zr = Fr;
          if (jr === "unset")
            return null;
          jr.indexOf("javascript:") === 0 ? (jr = jr.substr(11), zr = !0) : jr.indexOf("js:") === 0 && (jr = jr.substr(3), zr = !0), jr.indexOf("{") !== 0 && (jr = "{" + jr + "}");
          var Wr;
          zr ? Wr = wr(Fe, function() {
            return Function("return (" + jr + ")")();
          }, {}) : Wr = E(jr);
          for (var Yr in Wr)
            Wr.hasOwnProperty(Yr) && _r[Yr] == null && (_r[Yr] = Wr[Yr]);
        }
        return br(u(Fe), Qr, Fr, _r);
      }
      function wr(Fe, Qr, Fr) {
        return Q.config.allowEval ? Qr() : (fe(Fe, "htmx:evalDisallowedError"), Fr);
      }
      function Sr(Fe, Qr) {
        return br(Fe, "hx-vars", !0, Qr);
      }
      function Er(Fe, Qr) {
        return br(Fe, "hx-vals", !1, Qr);
      }
      function Cr(Fe) {
        return le(Sr(Fe), Er(Fe));
      }
      function Tr(Fe, Qr, Fr) {
        if (Fr !== null)
          try {
            Fe.setRequestHeader(Qr, Fr);
          } catch {
            Fe.setRequestHeader(Qr, encodeURIComponent(Fr)), Fe.setRequestHeader(Qr + "-URI-AutoEncoded", "true");
          }
      }
      function Rr(Fe) {
        if (Fe.responseURL && typeof URL < "u")
          try {
            var Qr = new URL(Fe.responseURL);
            return Qr.pathname + Qr.search;
          } catch {
            fe(re().body, "htmx:badResponseUrl", { url: Fe.responseURL });
          }
      }
      function O(Fe, Qr) {
        return Fe.getAllResponseHeaders().match(Qr);
      }
      function Or(Fe, Qr, Fr) {
        return Fe = Fe.toLowerCase(), Fr ? Fr instanceof Element || L(Fr, "String") ? he(Fe, Qr, null, null, { targetOverride: s(Fr), returnPromise: !0 }) : he(Fe, Qr, s(Fr.source), Fr.event, { handler: Fr.handler, headers: Fr.headers, values: Fr.values, targetOverride: s(Fr.target), swapOverride: Fr.swap, select: Fr.select, returnPromise: !0 }) : he(Fe, Qr, null, null, { returnPromise: !0 });
      }
      function qr(Fe) {
        for (var Qr = []; Fe; )
          Qr.push(Fe), Fe = Fe.parentElement;
        return Qr;
      }
      function Hr(Fe, Qr, Fr) {
        var _r, Vr;
        if (typeof URL == "function") {
          Vr = new URL(Qr, document.location.href);
          var jr = document.location.origin;
          _r = jr === Vr.origin;
        } else
          Vr = Qr, _r = g(Qr, document.location.origin);
        return Q.config.selfRequestsOnly && !_r ? !1 : ce(Fe, "htmx:validateUrl", le({ url: Vr, sameHost: _r }, Fr));
      }
      function he(Fe, Qr, Fr, _r, Vr, jr) {
        var zr = null, Wr = null;
        if (Vr = Vr ?? {}, Vr.returnPromise && typeof Promise < "u")
          var Yr = new Promise(function(ln, gn) {
            zr = ln, Wr = gn;
          });
        Fr == null && (Fr = re().body);
        var Gr = Vr.handler || Ar, Jr = Vr.select || null;
        if (!se(Fr))
          return ie(zr), Yr;
        var $r = Vr.targetOverride || ge(Fr);
        if ($r == null || $r == ve)
          return fe(Fr, "htmx:targetError", { target: te(Fr, "hx-target") }), ie(Wr), Yr;
        var Zr = ae(Fr), un = Zr.lastButtonClicked;
        if (un) {
          var hn = ee(un, "formaction");
          hn != null && (Qr = hn);
          var yn = ee(un, "formmethod");
          yn != null && yn.toLowerCase() !== "dialog" && (Fe = yn);
        }
        var xn = ne(Fr, "hx-confirm");
        if (jr === void 0) {
          var Rn = function(ln) {
            return he(Fe, Qr, Fr, _r, Vr, !!ln);
          }, bn = { target: $r, elt: Fr, path: Qr, verb: Fe, triggeringEvent: _r, etc: Vr, issueRequest: Rn, question: xn };
          if (ce(Fr, "htmx:confirm", bn) === !1)
            return ie(zr), Yr;
        }
        var mn = Fr, fn = ne(Fr, "hx-sync"), cn = null, Pn = !1;
        if (fn) {
          var an = fn.split(":"), rn = an[0].trim();
          if (rn === "this" ? mn = de(Fr, "hx-sync") : mn = ue(Fr, rn), fn = (an[1] || "drop").trim(), Zr = ae(mn), fn === "drop" && Zr.xhr && Zr.abortable !== !0)
            return ie(zr), Yr;
          if (fn === "abort") {
            if (Zr.xhr)
              return ie(zr), Yr;
            Pn = !0;
          } else if (fn === "replace")
            ce(mn, "htmx:abort");
          else if (fn.indexOf("queue") === 0) {
            var Cn = fn.split(" ");
            cn = (Cn[1] || "last").trim();
          }
        }
        if (Zr.xhr)
          if (Zr.abortable)
            ce(mn, "htmx:abort");
          else {
            if (cn == null) {
              if (_r) {
                var nn = ae(_r);
                nn && nn.triggerSpec && nn.triggerSpec.queue && (cn = nn.triggerSpec.queue);
              }
              cn == null && (cn = "last");
            }
            return Zr.queuedRequests == null && (Zr.queuedRequests = []), cn === "first" && Zr.queuedRequests.length === 0 ? Zr.queuedRequests.push(function() {
              he(Fe, Qr, Fr, _r, Vr);
            }) : cn === "all" ? Zr.queuedRequests.push(function() {
              he(Fe, Qr, Fr, _r, Vr);
            }) : cn === "last" && (Zr.queuedRequests = [], Zr.queuedRequests.push(function() {
              he(Fe, Qr, Fr, _r, Vr);
            })), ie(zr), Yr;
          }
        var Kr = new XMLHttpRequest();
        Zr.xhr = Kr, Zr.abortable = Pn;
        var sn = function() {
          if (Zr.xhr = null, Zr.abortable = !1, Zr.queuedRequests != null && Zr.queuedRequests.length > 0) {
            var ln = Zr.queuedRequests.shift();
            ln();
          }
        }, On = ne(Fr, "hx-prompt");
        if (On) {
          var wn = prompt(On);
          if (wn === null || !ce(Fr, "htmx:prompt", { prompt: wn, target: $r }))
            return ie(zr), sn(), Yr;
        }
        if (xn && !jr && !confirm(xn))
          return ie(zr), sn(), Yr;
        var en = vr(Fr, $r, wn);
        Fe !== "get" && !pr(Fr) && (en["Content-Type"] = "application/x-www-form-urlencoded"), Vr.headers && (en = le(en, Vr.headers));
        var Tn = ur(Fr, Fe), pn = Tn.errors, dn = Tn.values;
        Vr.values && (dn = le(dn, Vr.values));
        var Xn = Cr(Fr), Qn = le(dn, Xn), Sn = dr(Qn, Fr);
        Q.config.getCacheBusterParam && Fe === "get" && (Sn["org.htmx.cache-buster"] = ee($r, "id") || "true"), (Qr == null || Qr === "") && (Qr = re().location.href);
        var An = br(Fr, "hx-request"), kn = ae(Fr).boosted, qn = Q.config.methodsThatUseUrlParams.indexOf(Fe) >= 0, on = { boosted: kn, useUrlParams: qn, parameters: Sn, unfilteredParameters: Qn, headers: en, target: $r, verb: Fe, errors: pn, withCredentials: Vr.credentials || An.credentials || Q.config.withCredentials, timeout: Vr.timeout || An.timeout || Q.config.timeout, path: Qr, triggeringEvent: _r };
        if (!ce(Fr, "htmx:configRequest", on))
          return ie(zr), sn(), Yr;
        if (Qr = on.path, Fe = on.verb, en = on.headers, Sn = on.parameters, pn = on.errors, qn = on.useUrlParams, pn && pn.length > 0)
          return ce(Fr, "htmx:validation:halted", on), ie(zr), sn(), Yr;
        var Mn = Qr.split("#"), Bn = Mn[0], Nn = Mn[1], vn = Qr;
        if (qn) {
          vn = Bn;
          var Un = Object.keys(Sn).length !== 0;
          Un && (vn.indexOf("?") < 0 ? vn += "?" : vn += "&", vn += cr(Sn), Nn && (vn += "#" + Nn));
        }
        if (!Hr(Fr, vn, on))
          return fe(Fr, "htmx:invalidPath", on), ie(Wr), Yr;
        if (Kr.open(Fe.toUpperCase(), vn, !0), Kr.overrideMimeType("text/html"), Kr.withCredentials = on.withCredentials, Kr.timeout = on.timeout, !An.noHeaders) {
          for (var In in en)
            if (en.hasOwnProperty(In)) {
              var Fn = en[In];
              Tr(Kr, In, Fn);
            }
        }
        var tn = { xhr: Kr, target: $r, requestConfig: on, etc: Vr, boosted: kn, select: Jr, pathInfo: { requestPath: Qr, finalRequestPath: vn, anchor: Nn } };
        if (Kr.onload = function() {
          try {
            var ln = qr(Fr);
            if (tn.pathInfo.responsePath = Rr(Kr), Gr(Fr, tn), nr(Hn, Ln), ce(Fr, "htmx:afterRequest", tn), ce(Fr, "htmx:afterOnLoad", tn), !se(Fr)) {
              for (var gn = null; ln.length > 0 && gn == null; ) {
                var En = ln.shift();
                se(En) && (gn = En);
              }
              gn && (ce(gn, "htmx:afterRequest", tn), ce(gn, "htmx:afterOnLoad", tn));
            }
            ie(zr), sn();
          } catch (Dn) {
            throw fe(Fr, "htmx:onLoadError", le({ error: Dn }, tn)), Dn;
          }
        }, Kr.onerror = function() {
          nr(Hn, Ln), fe(Fr, "htmx:afterRequest", tn), fe(Fr, "htmx:sendError", tn), ie(Wr), sn();
        }, Kr.onabort = function() {
          nr(Hn, Ln), fe(Fr, "htmx:afterRequest", tn), fe(Fr, "htmx:sendAbort", tn), ie(Wr), sn();
        }, Kr.ontimeout = function() {
          nr(Hn, Ln), fe(Fr, "htmx:afterRequest", tn), fe(Fr, "htmx:timeout", tn), ie(Wr), sn();
        }, !ce(Fr, "htmx:beforeRequest", tn))
          return ie(zr), sn(), Yr;
        var Hn = tr(Fr), Ln = rr(Fr);
        oe(["loadstart", "loadend", "progress", "abort"], function(ln) {
          oe([Kr, Kr.upload], function(gn) {
            gn.addEventListener(ln, function(En) {
              ce(Fr, "htmx:xhr:" + ln, { lengthComputable: En.lengthComputable, loaded: En.loaded, total: En.total });
            });
          });
        }), ce(Fr, "htmx:beforeSend", tn);
        var _n = qn ? null : yr(Kr, Fr, Sn);
        return Kr.send(_n), Yr;
      }
      function Lr(Fe, Qr) {
        var Fr = Qr.xhr, _r = null, Vr = null;
        if (O(Fr, /HX-Push:/i) ? (_r = Fr.getResponseHeader("HX-Push"), Vr = "push") : O(Fr, /HX-Push-Url:/i) ? (_r = Fr.getResponseHeader("HX-Push-Url"), Vr = "push") : O(Fr, /HX-Replace-Url:/i) && (_r = Fr.getResponseHeader("HX-Replace-Url"), Vr = "replace"), _r)
          return _r === "false" ? {} : { type: Vr, path: _r };
        var jr = Qr.pathInfo.finalRequestPath, zr = Qr.pathInfo.responsePath, Wr = ne(Fe, "hx-push-url"), Yr = ne(Fe, "hx-replace-url"), Gr = ae(Fe).boosted, Jr = null, $r = null;
        return Wr ? (Jr = "push", $r = Wr) : Yr ? (Jr = "replace", $r = Yr) : Gr && (Jr = "push", $r = zr || jr), $r ? $r === "false" ? {} : ($r === "true" && ($r = zr || jr), Qr.pathInfo.anchor && $r.indexOf("#") === -1 && ($r = $r + "#" + Qr.pathInfo.anchor), { type: Jr, path: $r }) : {};
      }
      function Ar(Fe, Qr) {
        var Fr = Qr.xhr, _r = Qr.target, Vr = Qr.etc;
        Qr.requestConfig;
        var jr = Qr.select;
        if (ce(Fe, "htmx:beforeOnLoad", Qr)) {
          if (O(Fr, /HX-Trigger:/i) && Be(Fr, "HX-Trigger", Fe), O(Fr, /HX-Location:/i)) {
            Jt();
            var zr = Fr.getResponseHeader("HX-Location"), Wr;
            zr.indexOf("{") === 0 && (Wr = E(zr), zr = Wr.path, delete Wr.path), Or("GET", zr, Wr).then(function() {
              Zt(zr);
            });
            return;
          }
          var Yr = O(Fr, /HX-Refresh:/i) && Fr.getResponseHeader("HX-Refresh") === "true";
          if (O(Fr, /HX-Redirect:/i)) {
            location.href = Fr.getResponseHeader("HX-Redirect"), Yr && location.reload();
            return;
          }
          if (Yr) {
            location.reload();
            return;
          }
          O(Fr, /HX-Retarget:/i) && (Qr.target = re().querySelector(Fr.getResponseHeader("HX-Retarget")));
          var Gr = Lr(Fe, Qr), Jr = Fr.status >= 200 && Fr.status < 400 && Fr.status !== 204, $r = Fr.response, Zr = Fr.status >= 400, un = Q.config.ignoreTitle, hn = le({ shouldSwap: Jr, serverResponse: $r, isError: Zr, ignoreTitle: un }, Qr);
          if (ce(_r, "htmx:beforeSwap", hn)) {
            if (_r = hn.target, $r = hn.serverResponse, Zr = hn.isError, un = hn.ignoreTitle, Qr.target = _r, Qr.failed = Zr, Qr.successful = !Zr, hn.shouldSwap) {
              Fr.status === 286 && et(Fe), T(Fe, function(an) {
                $r = an.transformResponse($r, Fr, Fe);
              }), Gr.type && Jt();
              var yn = Vr.swapOverride;
              O(Fr, /HX-Reswap:/i) && (yn = Fr.getResponseHeader("HX-Reswap"));
              var Wr = mr(Fe, yn);
              Wr.hasOwnProperty("ignoreTitle") && (un = Wr.ignoreTitle), _r.classList.add(Q.config.swappingClass);
              var xn = null, Rn = null, bn = function() {
                try {
                  var an = document.activeElement, rn = {};
                  try {
                    rn = { elt: an, start: an ? an.selectionStart : null, end: an ? an.selectionEnd : null };
                  } catch {
                  }
                  var Cn;
                  jr && (Cn = jr), O(Fr, /HX-Reselect:/i) && (Cn = Fr.getResponseHeader("HX-Reselect")), Gr.type && (ce(re().body, "htmx:beforeHistoryUpdate", le({ history: Gr }, Qr)), Gr.type === "push" ? (Zt(Gr.path), ce(re().body, "htmx:pushedIntoHistory", { path: Gr.path })) : (Kt(Gr.path), ce(re().body, "htmx:replacedInHistory", { path: Gr.path })));
                  var nn = R(_r);
                  if (Ue(Wr.swapStyle, _r, Fe, $r, nn, Cn), rn.elt && !se(rn.elt) && ee(rn.elt, "id")) {
                    var Kr = document.getElementById(ee(rn.elt, "id")), sn = { preventScroll: Wr.focusScroll !== void 0 ? !Wr.focusScroll : !Q.config.defaultFocusScroll };
                    if (Kr) {
                      if (rn.start && Kr.setSelectionRange)
                        try {
                          Kr.setSelectionRange(rn.start, rn.end);
                        } catch {
                        }
                      Kr.focus(sn);
                    }
                  }
                  if (_r.classList.remove(Q.config.swappingClass), oe(nn.elts, function(en) {
                    en.classList && en.classList.add(Q.config.settlingClass), ce(en, "htmx:afterSwap", Qr);
                  }), O(Fr, /HX-Trigger-After-Swap:/i)) {
                    var On = Fe;
                    se(Fe) || (On = re().body), Be(Fr, "HX-Trigger-After-Swap", On);
                  }
                  var wn = function() {
                    if (oe(nn.tasks, function(dn) {
                      dn.call();
                    }), oe(nn.elts, function(dn) {
                      dn.classList && dn.classList.remove(Q.config.settlingClass), ce(dn, "htmx:afterSettle", Qr);
                    }), Qr.pathInfo.anchor) {
                      var en = re().getElementById(Qr.pathInfo.anchor);
                      en && en.scrollIntoView({ block: "start", behavior: "auto" });
                    }
                    if (nn.title && !un) {
                      var Tn = C("title");
                      Tn ? Tn.innerHTML = nn.title : window.document.title = nn.title;
                    }
                    if (xr(nn.elts, Wr), O(Fr, /HX-Trigger-After-Settle:/i)) {
                      var pn = Fe;
                      se(Fe) || (pn = re().body), Be(Fr, "HX-Trigger-After-Settle", pn);
                    }
                    ie(xn);
                  };
                  Wr.settleDelay > 0 ? setTimeout(wn, Wr.settleDelay) : wn();
                } catch (en) {
                  throw fe(Fe, "htmx:swapError", Qr), ie(Rn), en;
                }
              }, mn = Q.config.globalViewTransitions;
              if (Wr.hasOwnProperty("transition") && (mn = Wr.transition), mn && ce(Fe, "htmx:beforeTransition", Qr) && typeof Promise < "u" && document.startViewTransition) {
                var fn = new Promise(function(an, rn) {
                  xn = an, Rn = rn;
                }), cn = bn;
                bn = function() {
                  document.startViewTransition(function() {
                    return cn(), fn;
                  });
                };
              }
              Wr.swapDelay > 0 ? setTimeout(bn, Wr.swapDelay) : bn();
            }
            Zr && fe(Fe, "htmx:responseError", le({ error: "Response Status Error Code " + Fr.status + " from " + Qr.pathInfo.requestPath }, Qr));
          }
        }
      }
      var Nr = {};
      function Ir() {
        return { init: function(Fe) {
          return null;
        }, onEvent: function(Fe, Qr) {
          return !0;
        }, transformResponse: function(Fe, Qr, Fr) {
          return Fe;
        }, isInlineSwap: function(Fe) {
          return !1;
        }, handleSwap: function(Fe, Qr, Fr, _r) {
          return !1;
        }, encodeParameters: function(Fe, Qr, Fr) {
          return null;
        } };
      }
      function kr(Fe, Qr) {
        Qr.init && Qr.init(r), Nr[Fe] = le(Ir(), Qr);
      }
      function Pr(Fe) {
        delete Nr[Fe];
      }
      function Mr(Fe, Qr, Fr) {
        if (Fe == null)
          return Qr;
        Qr == null && (Qr = []), Fr == null && (Fr = []);
        var _r = te(Fe, "hx-ext");
        return _r && oe(_r.split(","), function(Vr) {
          if (Vr = Vr.replace(/ /g, ""), Vr.slice(0, 7) == "ignore:") {
            Fr.push(Vr.slice(7));
            return;
          }
          if (Fr.indexOf(Vr) < 0) {
            var jr = Nr[Vr];
            jr && Qr.indexOf(jr) < 0 && Qr.push(jr);
          }
        }), Mr(u(Fe), Qr, Fr);
      }
      function Dr(Fe) {
        var Qr = function() {
          Fe && (Fe(), Fe = null);
        };
        re().readyState === "complete" ? Qr() : (re().addEventListener("DOMContentLoaded", function() {
          Qr();
        }), re().addEventListener("readystatechange", function() {
          re().readyState === "complete" && Qr();
        }));
      }
      function Xr() {
        Q.config.includeIndicatorStyles !== !1 && re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>");
      }
      function Ur() {
        var Fe = re().querySelector('meta[name="htmx-config"]');
        return Fe ? E(Fe.content) : null;
      }
      function Br() {
        var Fe = Ur();
        Fe && (Q.config = le(Q.config, Fe));
      }
      return Dr(function() {
        Br(), Xr();
        var Fe = re().body;
        Bt(Fe);
        var Qr = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
        Fe.addEventListener("htmx:abort", function(_r) {
          var Vr = _r.target, jr = ae(Vr);
          jr && jr.xhr && jr.xhr.abort();
        });
        var Fr = window.onpopstate;
        window.onpopstate = function(_r) {
          _r.state && _r.state.htmx ? (er(), oe(Qr, function(Vr) {
            ce(Vr, "htmx:restored", { document: re(), triggerEvent: ce });
          })) : Fr && Fr(_r);
        }, setTimeout(function() {
          ce(Fe, "htmx:load", {}), Fe = null;
        }, 0);
      }), Q;
    }();
  });
})(htmx_min);
var htmx_minExports = htmx_min.exports;
const htmx = /* @__PURE__ */ getDefaultExportFromCjs(htmx_minExports);
window.htmx = htmx;
