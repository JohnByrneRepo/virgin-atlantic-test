// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9WNCQ":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b00f64485af36d7c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aub9U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FilterContext", ()=>FilterContext
);
var _preact = require("preact");
var _preactRouter = require("preact-router");
var _hooks = require("preact/hooks");
var _searchComponent = require("../components/search.component");
var _searchComponentDefault = parcelHelpers.interopDefault(_searchComponent);
var _holidayComponent = require("../components/holiday.component");
var _holidayComponentDefault = parcelHelpers.interopDefault(_holidayComponent);
var _httpService = require("../services/http.service");
var _luxon = require("luxon");
var _filterComponent = require("../components/filter.component");
var _filterComponentDefault = parcelHelpers.interopDefault(_filterComponent);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
};
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var FilterContext = _preact.createContext({
    filterOptions: {
        pricePerPerson: {
            min: 0,
            max: 0
        },
        starRating: {
            min: 0,
            max: 0
        },
        facilities: []
    },
    setFilterOptions: function(filterOptions) {}
});
var Container = _styledComponentsDefault.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([
    "\n  width: 100%;\n"
], [
    "\n  width: 100%;\n"
])));
var SidePanel = _styledComponentsDefault.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([
    "\n  display: inline-block;\n  width: 300px;\n  vertical-align: top;\n  padding: 20px;\n"
], [
    "\n  display: inline-block;\n  width: 300px;\n  vertical-align: top;\n  padding: 20px;\n"
])));
var MainPanel = _styledComponentsDefault.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject([
    "\n  display: inline-block;\n  padding: 30px;\n"
], [
    "\n  display: inline-block;\n  padding: 30px;\n"
])));
function ResultsRoute() {
    var _a1 = __read(_preactRouter.useRouter(), 1), searchParams = _a1[0];
    var _b1 = __read(_hooks.useState([]), 2), holidays = _b1[0], setHolidays = _b1[1];
    var _c1 = __read(_hooks.useState(0), 2), maxPrice = _c1[0], setMaxPrice = _c1[1];
    var _d1 = __read(_hooks.useState([]), 2), facilities = _d1[0], setFacilities = _d1[1];
    var _e1 = __read(_hooks.useState(false), 2), showFilters = _e1[0], setShowFilters = _e1[1];
    var _f = __read(_hooks.useState({
        pricePerPerson: {
            min: 0,
            max: 0
        },
        facilities: [],
        starRating: {
            min: 0,
            max: 0
        }
    }), 2), filterOptions = _f[0], setFilterOptions = _f[1];
    _hooks.useEffect(function() {
        var _a, _b, _c, _d, _e;
        if ((_a = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _a === void 0 ? void 0 : _a.departureDate) {
            var departureDate = _luxon.DateTime.fromFormat((_b = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _b === void 0 ? void 0 : _b.departureDate, "yyyy-MM-dd").toFormat("dd-MM-yyyy");
            var requestBody = {
                "bookingType": "holiday",
                "location": (_c = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _c === void 0 ? void 0 : _c.location,
                "departureDate": departureDate,
                "duration": (_d = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _d === void 0 ? void 0 : _d.duration,
                "gateway": "LHR",
                "partyCompositions": [
                    {
                        "adults": (_e = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _e === void 0 ? void 0 : _e.adults,
                        "childAges": [],
                        "infants": 0
                    }
                ]
            };
            _httpService.doRequest('POST', '/cjs-search-api/search', requestBody).then(function(response) {
                // console.log(response)
                setHolidays(response.holidays);
                // Get maximum total price
                var maxTotalPrice = 0;
                for(var i = 0; i < response.holidays.length; i++)if (maxTotalPrice == null || parseInt(response.holidays[i].totalPrice) > maxTotalPrice) maxTotalPrice = response.holidays[i].totalPrice;
                setMaxPrice(maxTotalPrice);
                // console.log('maxTotalPrice:' + maxTotalPrice);
                // Get facilities enumeration
                var facilityEnum = [];
                for(var i = 0; i < response.holidays.length; i++){
                    for(var j = 0; j < response.holidays[i].hotel.content.hotelFacilities.length; j++)if (facilityEnum.indexOf(response.holidays[i].hotel.content.hotelFacilities[j]) < 0) facilityEnum.push(response.holidays[i].hotel.content.hotelFacilities[j]);
                }
                setFacilities(facilityEnum);
                // console.log('facilityEnum:' + facilityEnum);
                setShowFilters(true);
            });
        }
    }, [
        searchParams
    ]);
    return _preact.h(FilterContext.Provider, {
        value: {
            filterOptions: filterOptions,
            setFilterOptions: setFilterOptions
        }
    }, _preact.h("section", null, _preact.h(_searchComponentDefault.default, null)), _preact.h(Container, null, _preact.h(SidePanel, null, showFilters && _preact.h(_filterComponentDefault.default, {
        maxPrice: maxPrice,
        facilities: facilities
    })), _preact.h(MainPanel, null, _preact.h(_holidayComponentDefault.default, {
        holidays: holidays
    }))));
}
exports.default = ResultsRoute;
var templateObject_1, templateObject_2, templateObject_3;

},{"preact":"26zcy","preact-router":"e4tGw","preact/hooks":"eZN76","../components/search.component":"dTUIm","../services/http.service":"afHpL","luxon":"dpK6X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../components/holiday.component":"9YeZ0","../components/filter.component":"dMRcV","styled-components":"1U3k6"}],"afHpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "doRequest", ()=>doRequest
);
var doRequest = function(method, url, body) {
    if (body === void 0) body = undefined;
    return new Promise(function(resolve, reject) {
        run(method, url, body, function(request) {
            if (request.readyState !== 4) return;
            switch(request.status){
                case 200:
                    resolve(JSON.parse(request.responseText));
                    break;
                case 204:
                    resolve(undefined);
                    break;
                case 500:
                    var isJson = request.getResponseHeader('content-type') === 'application/json';
                    reject(isJson ? JSON.parse(request.responseText) : undefined);
                default:
                    reject(undefined);
                    break;
            }
        });
    });
};
var run = function(method, url, body, stateChange) {
    if (body === void 0) body = undefined;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function() {
        return stateChange(xmlHttpRequest);
    };
    xmlHttpRequest.open(method, url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
    xmlHttpRequest.send(body != null ? JSON.stringify(body) : undefined);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YeZ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _resultsRoute = require("../routes/results.route");
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
};
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = undefined && undefined.__spread || function() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
};
var Container = _styledComponentsDefault.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([
    "\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  margin: 10px;\n  padding: 30px;\n  padding-top: 5px;\n  margin-bottom: 30px;\n  height: 530px;\n"
], [
    "\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  margin: 10px;\n  padding: 30px;\n  padding-top: 5px;\n  margin-bottom: 30px;\n  height: 530px;\n"
])));
function HolidayComponent(props) {
    var filterOptions = _hooks.useContext(_resultsRoute.FilterContext).filterOptions;
    var _a = __read(_hooks.useState(props.holidays), 2), holidayData = _a[0], setHolidayData = _a[1];
    _hooks.useEffect(function() {
        setHolidayData(props.holidays);
    }, []);
    _hooks.useEffect(function() {
        var data = __spread(props.holidays);
        if (data.length > 0) {
            var filteredData = data.filter(function(holidayItem) {
                var facilities = holidayItem.hotel.content.hotelFacilities;
                var facilitySelected = false;
                if (filterOptions.facilities.length === 0) facilitySelected = true;
                else for(var i = 0; i < filterOptions.facilities.length; i++){
                    var facility = filterOptions.facilities[i];
                    for(var j = 0; j < facilities.length; j++)if (facilities[j] === facility) facilitySelected = true;
                }
                var priceSelected = holidayItem.totalPrice >= filterOptions.pricePerPerson.min && holidayItem.totalPrice <= filterOptions.pricePerPerson.max || filterOptions.pricePerPerson.min === 0 && filterOptions.pricePerPerson.max === 0;
                var starSelected = holidayItem.hotel.content.starRating >= filterOptions.starRating.min && holidayItem.hotel.content.starRating <= filterOptions.starRating.max || filterOptions.starRating.min === 0 && filterOptions.starRating.max === 0;
                return priceSelected && starSelected && facilitySelected;
            });
            setHolidayData(filteredData);
        }
    }, [
        filterOptions,
        props.holidays
    ]);
    return _preact.h("div", null, holidayData.map(function(holiday) {
        return _preact.h(Container, null, _preact.h("div", null, _preact.h("h1", null, holiday.hotel.name), _preact.h("h3", null, "\u00A3", holiday.totalPrice), _preact.h("img", {
            src: holiday.hotel.content.images[0].RESULTS_CAROUSEL.url
        }), _preact.h("h3", null, "Airline: ", holiday.inboundFlight.airline), _preact.h("h3", null, "Departs from: ", holiday.inboundFlight.departureAirport)));
    }));
}
exports.default = HolidayComponent;
var templateObject_1;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","preact/hooks":"eZN76","../routes/results.route":"aub9U","styled-components":"1U3k6"}],"dMRcV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _filterSliderComponent = require("./filter-slider.component");
var _filterSliderComponentDefault = parcelHelpers.interopDefault(_filterSliderComponent);
var _filterCheckboxesComponent = require("./filter-checkboxes.component");
var _filterCheckboxesComponentDefault = parcelHelpers.interopDefault(_filterCheckboxesComponent);
var _hooks = require("preact/hooks");
var _resultsRoute = require("../routes/results.route");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function FilterComponent(props) {
    var _a = _hooks.useContext(_resultsRoute.FilterContext), filterOptions = _a.filterOptions, setFilterOptions = _a.setFilterOptions;
    var updateFilterOptions = function(type, data) {
        switch(type){
            case 'Price':
                setFilterOptions(__assign(__assign({}, filterOptions), {
                    pricePerPerson: {
                        min: data.min,
                        max: data.max
                    }
                }));
                break;
            case 'Facilities':
                setFilterOptions(__assign(__assign({}, filterOptions), {
                    facilities: data
                }));
                break;
            case 'Star rating':
                setFilterOptions(__assign(__assign({}, filterOptions), {
                    starRating: {
                        min: data.min,
                        max: data.max
                    }
                }));
                break;
        }
    };
    return _preact.h("section", null, _preact.h(_filterSliderComponentDefault.default, {
        onChange: updateFilterOptions,
        type: "Price",
        min: 0,
        max: props.maxPrice
    }), _preact.h(_filterCheckboxesComponentDefault.default, {
        onChange: updateFilterOptions,
        type: "Facilities",
        options: props.facilities
    }), _preact.h(_filterSliderComponentDefault.default, {
        onChange: updateFilterOptions,
        type: "Star rating",
        min: 1,
        max: 5
    }));
}
exports.default = FilterComponent;

},{"preact":"26zcy","./filter-slider.component":"377c7","./filter-checkboxes.component":"38wD1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","preact/hooks":"eZN76","../routes/results.route":"aub9U"}],"377c7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _reactSlider = require("react-slider");
var _reactSliderDefault = parcelHelpers.interopDefault(_reactSlider);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function FilterSlider(props1) {
    return _preact.h("div", null, _preact.h("h1", null, props1.type), _preact.h(_reactSliderDefault.default, {
        className: "horizontal-slider",
        thumbClassName: "example-thumb",
        trackClassName: "example-track",
        defaultValue: [
            props1.min,
            props1.max
        ],
        pearling: true,
        min: props1.min,
        max: props1.max,
        renderThumb: function(props, state) {
            return _preact.h("div", __assign({}, props), state.valueNow);
        },
        onChange: function(e) {
            props1.onChange(props1.type, {
                min: e[0],
                max: e[1]
            });
        }
    }));
}
exports.default = FilterSlider;

},{"preact":"26zcy","react-slider":"kvW8I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kvW8I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_reactSliderJsDefault.default
);
var _reactSliderJs = require("./components/ReactSlider/ReactSlider.js");
var _reactSliderJsDefault = parcelHelpers.interopDefault(_reactSliderJs);

},{"./components/ReactSlider/ReactSlider.js":"jpiVR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jpiVR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>u
);
var _inheritsLooseJs = require("../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
var _inheritsLooseJsDefault = parcelHelpers.interopDefault(_inheritsLooseJs);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function s(e) {
    return e && e.stopPropagation && e.stopPropagation(), e && e.preventDefault && e.preventDefault(), !1;
}
function n(e) {
    return null == e ? [] : Array.isArray(e) ? e.slice() : [
        e
    ];
}
function i(e) {
    return null !== e && 1 === e.length ? e[0] : e.slice();
}
function o(e) {
    Object.keys(e).forEach((t)=>{
        "undefined" != typeof document && document.addEventListener(t, e[t], !1);
    });
}
function r(e1, t1) {
    return a(function(e, t) {
        let s1 = e;
        s1 <= t.min && (s1 = t.min);
        s1 >= t.max && (s1 = t.max);
        return s1;
    }(e1, t1), t1);
}
function a(e, t) {
    const s2 = (e - t.min) % t.step;
    let n1 = e - s2;
    return 2 * Math.abs(s2) >= t.step && (n1 += s2 > 0 ? t.step : -t.step), parseFloat(n1.toFixed(5));
}
let p = function(p1) {
    function u1(e2) {
        var a1;
        (a1 = p1.call(this, e2) || this).onKeyUp = ()=>{
            a1.onEnd();
        }, a1.onMouseUp = ()=>{
            a1.onEnd(a1.getMouseEventMap());
        }, a1.onTouchEnd = ()=>{
            a1.onEnd(a1.getTouchEventMap());
        }, a1.onBlur = ()=>{
            a1.setState({
                index: -1
            }, a1.onEnd(a1.getKeyDownEventMap()));
        }, a1.onMouseMove = (e)=>{
            a1.setState({
                pending: !0
            });
            const t = a1.getMousePosition(e), s3 = a1.getDiffPosition(t[0]), n2 = a1.getValueFromPosition(s3);
            a1.move(n2);
        }, a1.onTouchMove = (e)=>{
            if (e.touches.length > 1) return;
            a1.setState({
                pending: !0
            });
            const t = a1.getTouchPosition(e);
            if (void 0 === a1.isScrolling) {
                const e = t[0] - a1.startPosition[0], s4 = t[1] - a1.startPosition[1];
                a1.isScrolling = Math.abs(s4) > Math.abs(e);
            }
            if (a1.isScrolling) return void a1.setState({
                index: -1
            });
            const s5 = a1.getDiffPosition(t[0]), n3 = a1.getValueFromPosition(s5);
            a1.move(n3);
        }, a1.onKeyDown = (e)=>{
            if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) switch(a1.setState({
                pending: !0
            }), e.key){
                case "ArrowLeft":
                case "ArrowDown":
                case "Left":
                case "Down":
                    e.preventDefault(), a1.moveDownByStep();
                    break;
                case "ArrowRight":
                case "ArrowUp":
                case "Right":
                case "Up":
                    e.preventDefault(), a1.moveUpByStep();
                    break;
                case "Home":
                    e.preventDefault(), a1.move(a1.props.min);
                    break;
                case "End":
                    e.preventDefault(), a1.move(a1.props.max);
                    break;
                case "PageDown":
                    e.preventDefault(), a1.moveDownByStep(a1.props.pageFn(a1.props.step));
                    break;
                case "PageUp":
                    e.preventDefault(), a1.moveUpByStep(a1.props.pageFn(a1.props.step));
            }
        }, a1.onSliderMouseDown = (e3)=>{
            if (!a1.props.disabled && 2 !== e3.button) {
                if (a1.setState({
                    pending: !0
                }), !a1.props.snapDragDisabled) {
                    const t = a1.getMousePosition(e3);
                    a1.forceValueFromPosition(t[0], (e)=>{
                        a1.start(e, t[0]), o(a1.getMouseEventMap());
                    });
                }
                s(e3);
            }
        }, a1.onSliderClick = (e)=>{
            if (!a1.props.disabled && a1.props.onSliderClick && !a1.hasMoved) {
                const t = a1.getMousePosition(e), s6 = r(a1.calcValue(a1.calcOffsetFromPosition(t[0])), a1.props);
                a1.props.onSliderClick(s6);
            }
        }, a1.createOnKeyDown = (e)=>(t)=>{
                a1.props.disabled || (a1.start(e), o(a1.getKeyDownEventMap()), s(t));
            }
        , a1.createOnMouseDown = (e)=>(t)=>{
                if (a1.props.disabled || 2 === t.button) return;
                a1.setState({
                    pending: !0
                });
                const n4 = a1.getMousePosition(t);
                a1.start(e, n4[0]), o(a1.getMouseEventMap()), s(t);
            }
        , a1.createOnTouchStart = (e4)=>(t)=>{
                if (a1.props.disabled || t.touches.length > 1) return;
                a1.setState({
                    pending: !0
                });
                const s7 = a1.getTouchPosition(t);
                a1.startPosition = s7, a1.isScrolling = void 0, a1.start(e4, s7[0]), o(a1.getTouchEventMap()), function(e) {
                    e.stopPropagation && e.stopPropagation();
                }(t);
            }
        , a1.handleResize = ()=>{
            const e = window.setTimeout(()=>{
                a1.pendingResizeTimeouts.shift(), a1.resize();
            }, 0);
            a1.pendingResizeTimeouts.push(e);
        }, a1.renderThumb = (e5, t)=>{
            const s8 = a1.props.thumbClassName + " " + a1.props.thumbClassName + "-" + t + " " + (a1.state.index === t ? a1.props.thumbActiveClassName : ""), n5 = {
                ref: (e)=>{
                    a1["thumb" + t] = e;
                },
                key: a1.props.thumbClassName + "-" + t,
                className: s8,
                style: e5,
                onMouseDown: a1.createOnMouseDown(t),
                onTouchStart: a1.createOnTouchStart(t),
                onFocus: a1.createOnKeyDown(t),
                tabIndex: 0,
                role: "slider",
                "aria-orientation": a1.props.orientation,
                "aria-valuenow": a1.state.value[t],
                "aria-valuemin": a1.props.min,
                "aria-valuemax": a1.props.max,
                "aria-label": Array.isArray(a1.props.ariaLabel) ? a1.props.ariaLabel[t] : a1.props.ariaLabel,
                "aria-labelledby": Array.isArray(a1.props.ariaLabelledby) ? a1.props.ariaLabelledby[t] : a1.props.ariaLabelledby
            }, o1 = {
                index: t,
                value: i(a1.state.value),
                valueNow: a1.state.value[t]
            };
            return a1.props.ariaValuetext && (n5["aria-valuetext"] = "string" == typeof a1.props.ariaValuetext ? a1.props.ariaValuetext : a1.props.ariaValuetext(o1)), a1.props.renderThumb(n5, o1);
        }, a1.renderTrack = (e, t, s9)=>{
            const n6 = {
                key: a1.props.trackClassName + "-" + e,
                className: a1.props.trackClassName + " " + a1.props.trackClassName + "-" + e,
                style: a1.buildTrackStyle(t, a1.state.upperBound - s9)
            }, o2 = {
                index: e,
                value: i(a1.state.value)
            };
            return a1.props.renderTrack(n6, o2);
        };
        let u2 = n(e2.value);
        u2.length || (u2 = n(e2.defaultValue)), a1.pendingResizeTimeouts = [];
        const h = [];
        for(let t2 = 0; t2 < u2.length; t2 += 1)u2[t2] = r(u2[t2], e2), h.push(t2);
        return a1.resizeObserver = null, a1.resizeElementRef = _reactDefault.default.createRef(), a1.state = {
            index: -1,
            upperBound: 0,
            sliderLength: 0,
            value: u2,
            zIndices: h
        }, a1;
    }
    _inheritsLooseJsDefault.default(u1, p1);
    var h1 = u1.prototype;
    return h1.componentDidMount = function() {
        "undefined" != typeof window && (this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this.resizeElementRef.current), this.resize());
    }, u1.getDerivedStateFromProps = function(e, t3) {
        const s10 = n(e.value);
        return s10.length ? t3.pending ? null : {
            value: s10.map((t)=>r(t, e)
            )
        } : null;
    }, h1.componentDidUpdate = function() {
        0 === this.state.upperBound && this.resize();
    }, h1.componentWillUnmount = function() {
        this.clearPendingResizeTimeouts(), this.resizeObserver && this.resizeObserver.disconnect();
    }, h1.onEnd = function(e6) {
        e6 && function(e) {
            Object.keys(e).forEach((t)=>{
                "undefined" != typeof document && document.removeEventListener(t, e[t], !1);
            });
        }(e6), this.hasMoved && this.fireChangeEvent("onAfterChange"), this.setState({
            pending: !1
        }), this.hasMoved = !1;
    }, h1.getValue = function() {
        return i(this.state.value);
    }, h1.getClosestIndex = function(e) {
        let t = Number.MAX_VALUE, s11 = -1;
        const { value: n7  } = this.state, i1 = n7.length;
        for(let o3 = 0; o3 < i1; o3 += 1){
            const i2 = this.calcOffset(n7[o3]), r1 = Math.abs(e - i2);
            r1 < t && (t = r1, s11 = o3);
        }
        return s11;
    }, h1.getMousePosition = function(e) {
        return [
            e["page" + this.axisKey()],
            e["page" + this.orthogonalAxisKey()]
        ];
    }, h1.getTouchPosition = function(e) {
        const t = e.touches[0];
        return [
            t["page" + this.axisKey()],
            t["page" + this.orthogonalAxisKey()]
        ];
    }, h1.getKeyDownEventMap = function() {
        return {
            keydown: this.onKeyDown,
            keyup: this.onKeyUp,
            focusout: this.onBlur
        };
    }, h1.getMouseEventMap = function() {
        return {
            mousemove: this.onMouseMove,
            mouseup: this.onMouseUp
        };
    }, h1.getTouchEventMap = function() {
        return {
            touchmove: this.onTouchMove,
            touchend: this.onTouchEnd
        };
    }, h1.getValueFromPosition = function(e) {
        const t = e / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
        return r(this.state.startValue + t, this.props);
    }, h1.getDiffPosition = function(e) {
        let t = e - this.state.startPosition;
        return this.props.invert && (t *= -1), t;
    }, h1.resize = function() {
        const { slider: e , thumb0: t  } = this;
        if (!e || !t) return;
        const s12 = this.sizeKey(), n8 = e.getBoundingClientRect(), i3 = e[s12], o4 = n8[this.posMaxKey()], r2 = n8[this.posMinKey()], a2 = t.getBoundingClientRect()[s12.replace("client", "").toLowerCase()], p2 = i3 - a2, u3 = Math.abs(o4 - r2);
        this.state.upperBound === p2 && this.state.sliderLength === u3 && this.state.thumbSize === a2 || this.setState({
            upperBound: p2,
            sliderLength: u3,
            thumbSize: a2
        });
    }, h1.calcOffset = function(e) {
        const t = this.props.max - this.props.min;
        if (0 === t) return 0;
        return (e - this.props.min) / t * this.state.upperBound;
    }, h1.calcValue = function(e) {
        return e / this.state.upperBound * (this.props.max - this.props.min) + this.props.min;
    }, h1.calcOffsetFromPosition = function(e) {
        const { slider: t  } = this, s13 = t.getBoundingClientRect(), n9 = s13[this.posMaxKey()], i4 = s13[this.posMinKey()];
        let o5 = e - (window["page" + this.axisKey() + "Offset"] + (this.props.invert ? n9 : i4));
        return this.props.invert && (o5 = this.state.sliderLength - o5), o5 -= this.state.thumbSize / 2, o5;
    }, h1.forceValueFromPosition = function(e, t) {
        const s14 = this.calcOffsetFromPosition(e), n10 = this.getClosestIndex(s14), i5 = r(this.calcValue(s14), this.props), o6 = this.state.value.slice();
        o6[n10] = i5;
        for(let e7 = 0; e7 < o6.length - 1; e7 += 1)if (o6[e7 + 1] - o6[e7] < this.props.minDistance) return;
        this.fireChangeEvent("onBeforeChange"), this.hasMoved = !0, this.setState({
            value: o6
        }, ()=>{
            t(n10), this.fireChangeEvent("onChange");
        });
    }, h1.clearPendingResizeTimeouts = function() {
        do {
            const e = this.pendingResizeTimeouts.shift();
            clearTimeout(e);
        }while (this.pendingResizeTimeouts.length)
    }, h1.start = function(e, t) {
        const s15 = this["thumb" + e];
        s15 && s15.focus();
        const { zIndices: n11  } = this.state;
        n11.splice(n11.indexOf(e), 1), n11.push(e), this.setState((s16)=>({
                startValue: s16.value[e],
                startPosition: void 0 !== t ? t : s16.startPosition,
                index: e,
                zIndices: n11
            })
        );
    }, h1.moveUpByStep = function(e) {
        void 0 === e && (e = this.props.step);
        const t = r(this.state.value[this.state.index] + e, this.props);
        this.move(Math.min(t, this.props.max));
    }, h1.moveDownByStep = function(e) {
        void 0 === e && (e = this.props.step);
        const t = r(this.state.value[this.state.index] - e, this.props);
        this.move(Math.max(t, this.props.min));
    }, h1.move = function(e8) {
        const { index: t4 , value: s17  } = this.state, { length: n13  } = s17, i6 = s17[t4];
        if (e8 === i6) return;
        this.hasMoved || this.fireChangeEvent("onBeforeChange"), this.hasMoved = !0;
        const { pearling: o7 , max: r3 , min: a3 , minDistance: p3  } = this.props;
        if (!o7) {
            if (t4 > 0) {
                const n12 = s17[t4 - 1];
                e8 < n12 + p3 && (e8 = n12 + p3);
            }
            if (t4 < n13 - 1) {
                const n14 = s17[t4 + 1];
                e8 > n14 - p3 && (e8 = n14 - p3);
            }
        }
        s17[t4] = e8, o7 && n13 > 1 && (e8 > i6 ? (this.pushSucceeding(s17, p3, t4), function(e, t, s18, n15) {
            for(let i7 = 0; i7 < e; i7 += 1){
                const o8 = n15 - i7 * s18;
                t[e - 1 - i7] > o8 && (t[e - 1 - i7] = o8);
            }
        }(n13, s17, p3, r3)) : e8 < i6 && (this.pushPreceding(s17, p3, t4), function(e, t, s19, n16) {
            for(let i8 = 0; i8 < e; i8 += 1){
                const e = n16 + i8 * s19;
                t[i8] < e && (t[i8] = e);
            }
        }(n13, s17, p3, a3))), this.setState({
            value: s17
        }, this.fireChangeEvent.bind(this, "onChange"));
    }, h1.pushSucceeding = function(e, t, s20) {
        let n17, i9;
        for(n17 = s20, i9 = e[n17] + t; null !== e[n17 + 1] && i9 > e[n17 + 1]; n17 += 1, i9 = e[n17] + t)e[n17 + 1] = a(i9, this.props);
    }, h1.pushPreceding = function(e, t, s21) {
        for(let n18 = s21, i10 = e[n18] - t; null !== e[n18 - 1] && i10 < e[n18 - 1]; n18 -= 1, i10 = e[n18] - t)e[n18 - 1] = a(i10, this.props);
    }, h1.axisKey = function() {
        return "vertical" === this.props.orientation ? "Y" : "X";
    }, h1.orthogonalAxisKey = function() {
        return "vertical" === this.props.orientation ? "X" : "Y";
    }, h1.posMinKey = function() {
        return "vertical" === this.props.orientation ? this.props.invert ? "bottom" : "top" : this.props.invert ? "right" : "left";
    }, h1.posMaxKey = function() {
        return "vertical" === this.props.orientation ? this.props.invert ? "top" : "bottom" : this.props.invert ? "left" : "right";
    }, h1.sizeKey = function() {
        return "vertical" === this.props.orientation ? "clientHeight" : "clientWidth";
    }, h1.fireChangeEvent = function(e) {
        this.props[e] && this.props[e](i(this.state.value), this.state.index);
    }, h1.buildThumbStyle = function(e, t) {
        const s22 = {
            position: "absolute",
            touchAction: "none",
            willChange: this.state.index >= 0 ? this.posMinKey() : "",
            zIndex: this.state.zIndices.indexOf(t) + 1
        };
        return s22[this.posMinKey()] = e + "px", s22;
    }, h1.buildTrackStyle = function(e, t) {
        const s23 = {
            position: "absolute",
            willChange: this.state.index >= 0 ? this.posMinKey() + "," + this.posMaxKey() : ""
        };
        return s23[this.posMinKey()] = e, s23[this.posMaxKey()] = t, s23;
    }, h1.buildMarkStyle = function(e) {
        var t;
        return (t = {
            position: "absolute"
        })[this.posMinKey()] = e, t;
    }, h1.renderThumbs = function(e) {
        const { length: t  } = e, s24 = [];
        for(let n20 = 0; n20 < t; n20 += 1)s24[n20] = this.buildThumbStyle(e[n20], n20);
        const n19 = [];
        for(let e9 = 0; e9 < t; e9 += 1)n19[e9] = this.renderThumb(s24[e9], e9);
        return n19;
    }, h1.renderTracks = function(e) {
        const t = [], s25 = e.length - 1;
        t.push(this.renderTrack(0, 0, e[0]));
        for(let n21 = 0; n21 < s25; n21 += 1)t.push(this.renderTrack(n21 + 1, e[n21], e[n21 + 1]));
        return t.push(this.renderTrack(s25 + 1, e[s25], this.state.upperBound)), t;
    }, h1.renderMarks = function() {
        let { marks: e10  } = this.props;
        const t5 = this.props.max - this.props.min + 1;
        return "boolean" == typeof e10 ? e10 = Array.from({
            length: t5
        }).map((e, t)=>t
        ) : "number" == typeof e10 && (e10 = Array.from({
            length: t5
        }).map((e, t)=>t
        ).filter((t)=>t % e10 == 0
        )), e10.map(parseFloat).sort((e, t)=>e - t
        ).map((e)=>{
            const t = this.calcOffset(e), s26 = {
                key: e,
                className: this.props.markClassName,
                style: this.buildMarkStyle(t)
            };
            return this.props.renderMark(s26);
        });
    }, h1.render = function() {
        const e11 = [], { value: s27  } = this.state, n22 = s27.length;
        for(let t = 0; t < n22; t += 1)e11[t] = this.calcOffset(s27[t], t);
        const i11 = this.props.withTracks ? this.renderTracks(e11) : null, o9 = this.renderThumbs(e11), r4 = this.props.marks ? this.renderMarks() : null;
        return _reactDefault.default.createElement("div", {
            ref: (e)=>{
                this.slider = e, this.resizeElementRef.current = e;
            },
            style: {
                position: "relative"
            },
            className: this.props.className + (this.props.disabled ? " disabled" : ""),
            onMouseDown: this.onSliderMouseDown,
            onClick: this.onSliderClick
        }, i11, o9, r4);
    }, u1;
}(_reactDefault.default.Component);
p.displayName = "ReactSlider", p.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    pageFn: (e)=>10 * e
    ,
    minDistance: 0,
    defaultValue: 0,
    orientation: "horizontal",
    className: "slider",
    thumbClassName: "thumb",
    thumbActiveClassName: "active",
    trackClassName: "track",
    markClassName: "mark",
    withTracks: !0,
    pearling: !1,
    disabled: !1,
    snapDragDisabled: !1,
    invert: !1,
    marks: [],
    renderThumb: (e)=>_reactDefault.default.createElement("div", e)
    ,
    renderTrack: (e)=>_reactDefault.default.createElement("div", e)
    ,
    renderMark: (e)=>_reactDefault.default.createElement("span", e)
};
var u = p;

},{"../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":"zNT4D","react":"aF0cT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"zNT4D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>o
);
var _setPrototypeOfJs = require("./setPrototypeOf.js");
var _setPrototypeOfJsDefault = parcelHelpers.interopDefault(_setPrototypeOfJs);
function o(o1, e) {
    o1.prototype = Object.create(e.prototype), o1.prototype.constructor = o1, _setPrototypeOfJsDefault.default(o1, e);
}

},{"./setPrototypeOf.js":"fxVjx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxVjx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>t
);
function t(e1, o) {
    return t = Object.setPrototypeOf || function(t1, e) {
        return t1.__proto__ = e, t1;
    }, t(e1, o);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38wD1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
};
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = undefined && undefined.__spread || function() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
};
var Container = _styledComponentsDefault.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([
    "\n  width: 350px;\n"
], [
    "\n  width: 350px;\n"
])));
var Label = _styledComponentsDefault.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject([
    "\n  width: 250px;\n  display: inline-block;\n"
], [
    "\n  width: 250px;\n  display: inline-block;\n"
])));
function FilterCheckboxes(props) {
    var _a = __read(_hooks.useState([]), 2), options = _a[0], setOptions = _a[1];
    var selectOption = function(event) {
        var selectedOption = event.target.value;
        if (options.includes(selectedOption)) {
            var newOptions = options.filter(function(option) {
                return option !== selectedOption;
            });
            setOptions(newOptions);
            props.onChange(props.type, newOptions);
        } else {
            var newOptions = __spread(options);
            newOptions.push(selectedOption);
            setOptions(newOptions);
            props.onChange(props.type, newOptions);
        }
    };
    return _preact.h("div", null, _preact.h("h1", null, props.type), props.options.length > 0 && props.options.map(function(option, index) {
        return _preact.h(Container, {
            key: index
        }, _preact.h(Label, null, option), _preact.h("span", null, _preact.h("input", {
            type: "checkbox",
            value: option,
            onChange: selectOption,
            checked: options.includes(option) ? true : false
        })));
    }));
}
exports.default = FilterCheckboxes;
var templateObject_1, templateObject_2;

},{"preact":"26zcy","preact/hooks":"eZN76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","styled-components":"1U3k6"}]},["9WNCQ"], null, "parcelRequired508")

//# sourceMappingURL=results.route.5af36d7c.js.map
