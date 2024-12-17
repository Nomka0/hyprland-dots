(function () {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("7RC8r", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $5b9b1078759df09a$export$6503ec6e8aabbaf; }, function (v) { return $5b9b1078759df09a$export$6503ec6e8aabbaf = v; });
var $5b9b1078759df09a$export$6503ec6e8aabbaf;
var $5b9b1078759df09a$export$f7ad0328861e2f03;
"use strict";
var $5b9b1078759df09a$var$mapping = new Map();
function $5b9b1078759df09a$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$5b9b1078759df09a$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $5b9b1078759df09a$var$resolve(id) {
    var resolved = $5b9b1078759df09a$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$5b9b1078759df09a$export$6503ec6e8aabbaf = $5b9b1078759df09a$var$register;
$5b9b1078759df09a$export$f7ad0328861e2f03 = $5b9b1078759df09a$var$resolve;

});

parcelRegister("UlLPT", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", function () { return $0a961e41376bbee5$export$bdfd709ae4826697; }, function (v) { return $0a961e41376bbee5$export$bdfd709ae4826697 = v; });
var $0a961e41376bbee5$export$bdfd709ae4826697;
var $0a961e41376bbee5$export$c9e73fbda7da57b6;
var $0a961e41376bbee5$export$5a759dc7a1cfb72a;
"use strict";
var $0a961e41376bbee5$var$bundleURL = {};
function $0a961e41376bbee5$var$getBundleURLCached(id) {
    var value = $0a961e41376bbee5$var$bundleURL[id];
    if (!value) {
        value = $0a961e41376bbee5$var$getBundleURL();
        $0a961e41376bbee5$var$bundleURL[id] = value;
    }
    return value;
}
function $0a961e41376bbee5$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $0a961e41376bbee5$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $0a961e41376bbee5$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $0a961e41376bbee5$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$0a961e41376bbee5$export$bdfd709ae4826697 = $0a961e41376bbee5$var$getBundleURLCached;
$0a961e41376bbee5$export$c9e73fbda7da57b6 = $0a961e41376bbee5$var$getBaseURL;
$0a961e41376bbee5$export$5a759dc7a1cfb72a = $0a961e41376bbee5$var$getOrigin;

});

var $753803d4c5406d9c$exports = {};


(parcelRequire("7RC8r")).register((parcelRequire("UlLPT")).getBundleURL("hHJAc"), JSON.parse('["hHJAc","w2gbundle.4bdb221b.js","gfpee","w2gbundle.e3489b8d.js","6NTKK","w2gbundle.a0c21fdc.css","ikr74","options.e75b6ed1.html","9fuQZ","w2g-logo.64e997da.svg","gliRP","w2gbundle.9a4931b4.css","gAQrq","w2gbundle.1417f5fe.css","hDxJN","w2gbundle.b09aa60e.css","gliRP","w2gbundle.9a4931b4.css","1WnhC","w2gbundle.15881722.js","hVn6N","w2gbundle.e0a1645d.js"]'));

var $a2022f58439c6bc1$exports = {};

$a2022f58439c6bc1$exports = (parcelRequire("UlLPT")).getBundleURL("hHJAc") + "w2gbundle.e3489b8d.js";


var $2ea98498d17af944$exports = {};

$2ea98498d17af944$exports = (parcelRequire("UlLPT")).getBundleURL("hHJAc") + "w2gbundle.a0c21fdc.css";


var $47e53c379236a76b$exports = {};

$47e53c379236a76b$exports = (parcelRequire("UlLPT")).getBundleURL("hHJAc") + "options.e75b6ed1.html";


let $e1f029f6ab2b9dc2$var$content_css = (0, (/*@__PURE__*/$parcel$interopDefault($2ea98498d17af944$exports))).split("/").slice(-1).pop().split("?")[0];
let $e1f029f6ab2b9dc2$var$content_js = (0, (/*@__PURE__*/$parcel$interopDefault($a2022f58439c6bc1$exports))).split("/").slice(-1).pop().split("?")[0];
const $e1f029f6ab2b9dc2$var$allowed_hosts = /^https:\/\/(?:(stage|rooms)\.)?w2g.tv(:|\/|$)/;
let $e1f029f6ab2b9dc2$var$db, $e1f029f6ab2b9dc2$var$db_promise = new Promise(function(resolve, reject) {
    chrome.storage.session.get([
        "db"
    ]).then(function(d) {
        $e1f029f6ab2b9dc2$var$db = d.db || {};
        resolve();
    });
});
chrome.runtime.onMessage.addListener(function(msg, sender) {
    $e1f029f6ab2b9dc2$var$db_promise.then(function() {
        if (sender.url.match($e1f029f6ab2b9dc2$var$allowed_hosts)) {
            if (msg.openSite) chrome.windows.create({
                left: 10,
                top: 10,
                width: 1024,
                height: 680,
                type: navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || navigator.userAgent.indexOf("OPR") > -1 ? "normal" : "popup",
                url: msg.openSite.url
            }).then(function(w) {
                $e1f029f6ab2b9dc2$var$db[sender.tab.id] = {
                    type: "window",
                    stab: w.tabs[w.tabs.length - 1].id,
                    tframe: null,
                    vframe: null,
                    vidscore: 0,
                    syncurl: msg.openSite.url
                };
                chrome.storage.session.set({
                    db: $e1f029f6ab2b9dc2$var$db
                }).then(function() {
                    chrome.tabs.sendMessage(sender.tab.id, {
                        "windowOpened": true
                    }, {
                        frameId: 0
                    });
                });
            });
            if ($e1f029f6ab2b9dc2$var$db[sender.tab.id]) {
                if ($e1f029f6ab2b9dc2$var$db[sender.tab.id].type === "window") {
                    if (msg.closeSite) $e1f029f6ab2b9dc2$var$_closeWindow(sender.tab.id);
                    else if (msg.focusSite) chrome.tabs.get($e1f029f6ab2b9dc2$var$db[sender.tab.id].stab).then(function(tab) {
                        chrome.windows.update(tab.windowId, {
                            focused: true
                        });
                    });
                }
                if (msg.urlok) {
                    msg.urlok.syncurl = $e1f029f6ab2b9dc2$var$db[sender.tab.id].syncurl;
                    chrome.tabs.sendMessage($e1f029f6ab2b9dc2$var$db[sender.tab.id].stab, msg);
                } else if ($e1f029f6ab2b9dc2$var$db[sender.tab.id].vframe !== null) chrome.tabs.sendMessage($e1f029f6ab2b9dc2$var$db[sender.tab.id].stab, msg, {
                    frameId: $e1f029f6ab2b9dc2$var$db[sender.tab.id].vframe
                });
            }
        } else if (sender.tab) {
            let m = $e1f029f6ab2b9dc2$var$_getKeyByTab(sender.tab.id);
            if (m) {
                if (msg.newurl && sender.frameId === $e1f029f6ab2b9dc2$var$db[m].tframe) chrome.tabs.get(sender.tab.id).then(function(controlledTab) {
                    chrome.tabs.sendMessage(m, {
                        "content_loaded": {
                            url: msg.newurl.url,
                            title: msg.newurl.title,
                            thumb: controlledTab.favIconUrl && controlledTab.favIconUrl.startsWith("http") ? controlledTab.favIconUrl : "https://w2g.tv/static/providers/10.png"
                        }
                    }, {
                        frameId: 0
                    });
                });
                else if (msg.checkurl) chrome.tabs.sendMessage(m, msg, {
                    frameId: 0
                });
                else if (msg.videofound) {
                    if (msg.videofound > $e1f029f6ab2b9dc2$var$db[m].vidscore) {
                        $e1f029f6ab2b9dc2$var$db[m].vidscore = msg.videofound;
                        $e1f029f6ab2b9dc2$var$db[m].vframe = sender.frameId;
                        chrome.storage.session.set({
                            db: $e1f029f6ab2b9dc2$var$db
                        });
                        if ($e1f029f6ab2b9dc2$var$db[m].type === "window" && $e1f029f6ab2b9dc2$var$db[m].tframe !== null) chrome.tabs.sendMessage($e1f029f6ab2b9dc2$var$db[m].stab, msg, {
                            frameId: $e1f029f6ab2b9dc2$var$db[m].tframe
                        });
                    }
                } else if ($e1f029f6ab2b9dc2$var$db[m].vframe === sender.frameId) {
                    if ($e1f029f6ab2b9dc2$var$db[m].type === "window" && $e1f029f6ab2b9dc2$var$db[m].tframe !== null) chrome.tabs.sendMessage($e1f029f6ab2b9dc2$var$db[m].stab, {
                        ui_update: msg
                    }, {
                        frameId: $e1f029f6ab2b9dc2$var$db[m].tframe
                    });
                    chrome.tabs.sendMessage(m, msg, {
                        frameId: 0
                    });
                } else if (sender.frameId === 0 && (msg.ui_seek !== undefined || msg.ui_toggle !== undefined || msg.checkurl !== undefined)) chrome.tabs.sendMessage(m, msg, {
                    frameId: 0
                });
            }
        }
    });
});
chrome.webNavigation.onDOMContentLoaded.addListener(function(detail) {
    $e1f029f6ab2b9dc2$var$db_promise.then(function() {
        let m = $e1f029f6ab2b9dc2$var$_getKeyByTab(detail.tabId);
        if (m) switch($e1f029f6ab2b9dc2$var$db[m].type){
            case "window":
                $e1f029f6ab2b9dc2$var$_insertContentScript(detail.tabId, detail.frameId);
                if (detail.frameType ? detail.frameType === "outermost_frame" : detail.frameId === 0) {
                    $e1f029f6ab2b9dc2$var$db[m].vidscore = 0;
                    $e1f029f6ab2b9dc2$var$db[m].tframe = detail.frameId;
                    chrome.storage.session.set({
                        db: $e1f029f6ab2b9dc2$var$db
                    });
                }
                break;
            case "embed":
                new Promise(function(resolve, reject) {
                    function traverse(id) {
                        if (id === 0) reject();
                        else if (id === $e1f029f6ab2b9dc2$var$db[m].tframe) resolve();
                        else chrome.webNavigation.getFrame({
                            tabId: detail.tabId,
                            frameId: id
                        }).then(function(frame) {
                            traverse(frame.parentFrameId);
                        });
                    }
                    if (detail.frameId !== $e1f029f6ab2b9dc2$var$db[m].tframe) traverse(detail.frameId);
                    else reject();
                }).then(function() {
                    $e1f029f6ab2b9dc2$var$_insertContentScript(detail.tabId, detail.frameId);
                }).catch(function() {});
                break;
        }
    });
});
chrome.webNavigation.onBeforeNavigate.addListener(function(detail) {
    if (detail.url.indexOf("https://mediaplay.cc/oembed.html?url=") === 0) $e1f029f6ab2b9dc2$var$db_promise.then(function() {
        chrome.webNavigation.getFrame({
            tabId: detail.tabId,
            frameId: 0
        }).then(function(f) {
            if (f.url.match($e1f029f6ab2b9dc2$var$allowed_hosts)) {
                $e1f029f6ab2b9dc2$var$db[detail.tabId] = {
                    type: "embed",
                    stab: detail.tabId,
                    tframe: detail.frameId,
                    vframe: null,
                    vidscore: 0,
                    syncurl: ""
                };
                chrome.storage.session.set({
                    db: $e1f029f6ab2b9dc2$var$db
                });
            }
        });
    });
    else if (detail.frameId === 0 && $e1f029f6ab2b9dc2$var$db[detail.tabId]) $e1f029f6ab2b9dc2$var$_closeWindow(detail.tabId);
});
chrome.tabs.onRemoved.addListener(function(id) {
    $e1f029f6ab2b9dc2$var$db_promise.then(function() {
        if ($e1f029f6ab2b9dc2$var$db[id]) $e1f029f6ab2b9dc2$var$_closeWindow(id);
        else {
            let m = $e1f029f6ab2b9dc2$var$_getKeyByTab(id);
            if (m) {
                chrome.tabs.sendMessage(m, {
                    "reset": true
                }, {
                    frameId: 0
                });
                chrome.tabs.sendMessage(m, {
                    "windowClosed": true
                }, {
                    frameId: 0
                });
            }
        }
    });
});
chrome.runtime.onInstalled.addListener(function(details) {
    if (chrome.declarativeNetRequest) {
        let url = chrome.runtime.getURL(".").match(/^moz-extension:\/\/(\S+)\/$/);
        url = url ? url[1] : chrome.runtime.id;
        const rules = [
            {
                id: 1,
                action: {
                    type: "modifyHeaders",
                    requestHeaders: [
                        {
                            header: "Origin",
                            operation: "set",
                            value: "https://w2g.tv"
                        },
                        {
                            header: "Referer",
                            operation: "set",
                            value: "https://w2g.tv/"
                        }
                    ]
                },
                condition: {
                    initiatorDomains: [
                        url
                    ],
                    requestMethods: [
                        "get",
                        "post",
                        "put"
                    ],
                    resourceTypes: [
                        "xmlhttprequest"
                    ]
                }
            }
        ];
        chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: rules.map((r)=>r.id),
            addRules: rules
        });
    }
    chrome.permissions.contains({
        origins: [
            "<all_urls>"
        ]
    }, (result)=>{
        if (result !== true) {
            if (details.reason === "install") chrome.tabs.create({
                url: (0, (/*@__PURE__*/$parcel$interopDefault($47e53c379236a76b$exports)))
            });
        }
    });
});
function $e1f029f6ab2b9dc2$var$_closeWindow(tab) {
    if ($e1f029f6ab2b9dc2$var$db[tab] && $e1f029f6ab2b9dc2$var$db[tab].type === "window") chrome.tabs.get($e1f029f6ab2b9dc2$var$db[tab].stab).then(function(t) {
        chrome.windows.remove(t.windowId);
        delete $e1f029f6ab2b9dc2$var$db[tab];
        chrome.storage.session.set({
            db: $e1f029f6ab2b9dc2$var$db
        });
    });
}
function $e1f029f6ab2b9dc2$var$_insertContentScript(tab, frame) {
    chrome.scripting.insertCSS({
        target: {
            tabId: tab,
            frameIds: [
                frame
            ]
        },
        files: [
            $e1f029f6ab2b9dc2$var$content_css
        ]
    }).catch(function(e) {
        console.log(e);
    });
    chrome.scripting.executeScript({
        target: {
            tabId: tab,
            frameIds: [
                frame
            ]
        },
        files: [
            $e1f029f6ab2b9dc2$var$content_js
        ]
    }).catch(function(e) {
        console.log(e);
    });
}
function $e1f029f6ab2b9dc2$var$_getKeyByTab(id) {
    for(const k in $e1f029f6ab2b9dc2$var$db)if (Object.hasOwn($e1f029f6ab2b9dc2$var$db, k)) {
        if ($e1f029f6ab2b9dc2$var$db[k].stab == id) return parseInt(k);
    }
    return null;
}

})();
