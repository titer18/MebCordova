webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(93);

var _assign2 = _interopRequireDefault(_assign);

var _axios = __webpack_require__(145);

var _axios2 = _interopRequireDefault(_axios);

var _auth = __webpack_require__(92);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultHeaders = function defaultHeaders() {

    if (!window.cordova) {
        // return {
        //     "UserToken": "bZuKHnGUCAQyCUIDxy2jnuMYk%2fdmEg9ZRjhofq7hfXYsdo38DmPfUU6k9mqwNomlpTIdkmrOFPU4LF" +
        //             "Rs4xH5%2fQZ8%2bUJ34XEHshH70UBYwSZUKU0gZsxvRENE51Jerwnt",
        //     "MebDeviceId": '651DE7BF-329D-4C2C-A750-24D6F78593BA'
        // };
        return {
            "UserToken": "vRY7jc%2b%2byebA44XMeKwT%2fJoMh94yLgw%2bSvYRbr8uaF2gvC7Qy2ZSUZQYOsT0ur8zXVRFBcdUFY1T46a%2fXvjzaNB6IccoyQD6ezXabxIPYSDWvJHotH0AZSHOhXG2edJi",
            "MebDeviceId": '651DE7BF-329D-4C2C-A750-24D6F78593BA'
        };
    }

    var headers = {
        "DevicePlatform": device.platform,
        "DeviceBrand": device.manufacturer,
        "DeviceModel": device.model,
        "DeviceVersion": device.version,
        "IosIDFA": device.serial,
        "IosUUID": device.uuid,
        "AndroidId": device.serial,
        "AndroidDeviceId": device.uuid,

        "MebDeviceId": _auth2.default.deviceId,
        "MebAppName": _auth2.default.appName,
        "MebVersion": _auth2.default.appVersionCode || "000",
        "MebChannel": _auth2.default.channelName || "",
        "UserToken": _auth2.default.userToken || "",
        "UserLongitude": _auth2.default.longitude || "",
        "UserLatitude": _auth2.default.latitude || "",
        "PushId": _auth2.default.pushId || ""
    };
    return headers;
};

var options = {};

if (true) {
    options.baseURL = 'https://api.meb.com';
}

var instance = _axios2.default.create((0, _assign2.default)({
    // baseURL: 'https://api.meb.com',
    baseURL: 'http://api.test.meb.com',
    headers: {},
    /* `paramsSerializer`是一个可选的函数，负责序列化`params`*/
    // paramsSerializer: (params) => { }, transformRequest: [],//
    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外
    // 安 装） transformResponse: [], // 这里提前处理返回的数据 params: !accessToken ? {} : {
    // access_token: accessToken },
    params: {},
    data: {}
    // timeout: 1000,//设置超时时间 responseType: 'default', // json//返回数据类型
}, options));

instance.interceptors.request.use(function (request) {

    request.headers = (0, _assign2.default)(request.headers, defaultHeaders());

    return request;
});
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                if (window.cordova) {
                    cordova.exec(function () {
                        cordova.exec(function () {}, function () {}, 'nativeJs', 'view', [{
                            name: 'close'
                        }]);
                    }, function () {}, 'nativeJs', 'view', [{
                        name: 'goLogin'
                    }]);
                }
        }
    }
    return _promise2.default.reject(error.response && error.response.data); // 返回接口返回的错误信息
});
exports.default = instance;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(68);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperties = __webpack_require__(293);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Auth(options) {
    var self = this;
    this.install = function (Vue, options) {
        (0, _defineProperties2.default)(Vue.prototype, {
            $auth: {
                get: function get() {
                    return self;
                }
            }
        });
    };
    this.checkToken = function () {
        return new _promise2.default(function (resolve, reject) {
            if (!window.cordova) return resolve();
            getSession().then(resolve).catch(reject);
        });
    };
}

(0, _defineProperties2.default)(Auth.prototype, {

    userId: {
        get: function get() {
            return JSON.parse(window.localStorage.getItem("auth_access_user"));
        },
        set: function set(v) {

            if (v && v != null) {
                window.localStorage.setItem("auth_access_user", (0, _stringify2.default)(v));
            } else {
                window.localStorage.removeItem("auth_access_user");
            }
        }
    },
    token: {
        get: function get() {
            if (this.userToken) return this.userToken;

            return JSON.parse(window.localStorage.getItem("auth_access_token"));
        },
        set: function set(v) {
            if (v && v != null) {
                window.localStorage.setItem("auth_access_token", (0, _stringify2.default)(v));
            } else {
                window.localStorage.removeItem("auth_access_token");
            }
        }
    },
    isAuthenticated: {
        get: function get() {
            var accesstoken = this.token;

            return accesstoken ? true : false;
        }
    },
    isExpired: {
        get: function get() {
            var accesstoken = this.token;

            return accesstoken && accesstoken.now + accesstoken.expiresIn * 1000 < Date.now();
        }
    }
});

var auth = new Auth();

function getSession() {

    return new _promise2.default(function (resolve, reject) {
        cordova.exec(function (q) {
            auth.appName = q.appName;
            auth.appVersion = q.appVersion;
            auth.channelName = q.channelName;
            auth.pushId = q.pushId;
            auth.token = auth.userToken = q.userToken;
            auth.latitude = q.latitude;
            auth.longitude = q.longitude;
            auth.deviceId = q.deviceId;
            auth.appVersionCode = q.appVersionCode;
            auth.avatarUrl = q.avatarUrl;
            auth.userId = q.userId;
            if (q.userToken == '') return reject();
            resolve();
        }, function () {
            reject();
        }, 'nativeJs', 'session', []);
    });
}

if (window.cordova) {
    var channel = cordova.require('cordova/channel');

    channel.createSticky('onCordovaAuthReady');
    // Tell cordova channel to wait on the CordovaInfoReady event
    channel.waitForInitialization('onCordovaAuthReady');

    channel.onCordovaReady.subscribe(function () {

        getSession().then(function () {
            channel.onCordovaAuthReady.fire();
        }, function () {
            channel.onCordovaAuthReady.fire();
        });
    });
}

exports.default = auth;

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(60);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(595);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _routes = __webpack_require__(288);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({ linkActiveClass: 'active', routes: _routes2.default });

router["_push"] = router["push"];
router["_back"] = router["back"];
router['action'] = true;

var step = 0;

if (window.plugins) window.plugins.nativepagetransitions.globalOptions.iosdelay = 70;

router["push"] = function (target, ext) {

    setTimeout(function () {
        router['_push'](target);
    });

    if (window.plugins) window.plugins.nativepagetransitions.slide({
        "direction": "left"
    }, function (msg) {
        step += 1;
    });else step += 1;

    router['action'] = ext === undefined ? true : ext;
};
var time;
router.back = function (ext) {
    var lazyTime = 500;
    if (time && time + lazyTime >= Date.now()) {
        return;
    }
    time = Date.now();
    setTimeout(function () {
        router['_back']();
    });

    if (window.plugins) window.plugins.nativepagetransitions.slide({
        "direction": "right"
    }, function (msg) {
        step -= 1;
    });else step -= 1;

    //进入跳转步骤小于0，则关闭当前页面回到原生
    if (window.cordova && step <= 0) return cordova.exec(function () {}, function () {}, 'nativeJs', 'view', [{
        name: 'close'
    }]);

    router['action'] = ext === undefined ? false : ext;
};

router.beforeHooks.unshift(function (to, from, next) {
    next();
});

router.beforeEach(function (to, from, next) {
    next();
});

router.afterEach(function (to, from) {});

exports.default = router;

/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/no-net.png?126f25bf";

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(530)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(253),
  /* template */
  __webpack_require__(578),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1dd3588c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\mSpinner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mSpinner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dd3588c", Component.options)
  } else {
    hotAPI.reload("data-v-1dd3588c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 198 */,
/* 199 */,
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(60);

var _vue2 = _interopRequireDefault(_vue);

var _mContainer = __webpack_require__(552);

var _mContainer2 = _interopRequireDefault(_mContainer);

var _mCenter = __webpack_require__(551);

var _mCenter2 = _interopRequireDefault(_mCenter);

var _mHeader = __webpack_require__(556);

var _mHeader2 = _interopRequireDefault(_mHeader);

var _mFooter = __webpack_require__(553);

var _mFooter2 = _interopRequireDefault(_mFooter);

var _mList = __webpack_require__(557);

var _mList2 = _interopRequireDefault(_mList);

var _mListCell = __webpack_require__(558);

var _mListCell2 = _interopRequireDefault(_mListCell);

var _mGrid = __webpack_require__(266);

var _mSpinner = __webpack_require__(197);

var _mSpinner2 = _interopRequireDefault(_mSpinner);

var _scrollers = __webpack_require__(559);

var _scrollers2 = _interopRequireDefault(_scrollers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component('m-container', _mContainer2.default);
// import { mList, mListCell} from 'components/mList';

_vue2.default.component('m-center', _mCenter2.default);
_vue2.default.component('m-header', _mHeader2.default);
_vue2.default.component('m-footer', _mFooter2.default);
_vue2.default.component('m-list', _mList2.default);
_vue2.default.component('m-list-cell', _mListCell2.default);
_vue2.default.component('m-grid', _mGrid.mGrid);
_vue2.default.component('m-grid-item', _mGrid.mGridItem);
_vue2.default.component('m-spinner', _mSpinner2.default);
_vue2.default.component('m-scroller', _scrollers2.default);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/** 
 * 字符串的第一个字母大写 
 */
var capitalize = function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
};

/** 
 * 将字符串全部转为大写字母 
 */
var uppercase = function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
};

/** 
 * 将字符串全部转为小写字母 
 */
var lowercase = function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
};

/**
 * 保留小数点后N位
 * @param {*} value 
 * @param {*} n 
 */
var fixed = function fixed(value) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var f = parseFloat(value);

    if (!f) return 0.0.toFixed(n);

    return f.toFixed(n);
};

/**
 * 格式化日期
 * @param {*} value 
 * @param {*} fmt 
 */
var dateTime = function dateTime(value) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd hh:mm:ss';

    if (!value) return '';
    // var date = (typeof value === 'number') ? new Date(value) : new Date((value || '').replace(/-/g, '/'))
    var date = typeof value === 'number' ? new Date(value) : new Date(value.replace(/\./g, '/').replace(/-/g, '/'));
    var o = {
        "M+": date.getMonth() + 1, //月份           
        "d+": date.getDate(), //日           
        "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时           
        "H+": date.getHours(), //小时           
        "m+": date.getMinutes(), //分           
        "s+": date.getSeconds(), //秒           
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度           
        "S": date.getMilliseconds() //毫秒           
    };
    var week = {
        "0": '\u65E5',
        "1": '\u4E00',
        "2": '\u4E8C',
        "3": '\u4E09',
        "4": '\u56DB',
        "5": '\u4E94',
        "6": '\u516D'
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? '\u661F\u671F' : '\u5468' : "") + week[date.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

var starsText = function starsText(value) {
    var str = '';
    switch (value) {
        case 1:
            str = '很差';
            break;
        case 2:
            str = '差';
            break;
        case 3:
            str = '一般';
            break;
        case 4:
            str = '赞';
            break;
        case 5:
            str = '超赞';
            break;
    }
    return str;
};
var priceI = function priceI(value) {
    return value.split('.')[0];
};
var priceF = function priceF(value) {
    return value.split('.')[1];
};
var priceO = function priceO(value) {
    return value.split('￥')[1];
};
var priceM = function priceM(value) {
    return (parseInt(value) * 0.2).toFixed(2).split('.')[0];
};
var priceX = function priceX(value) {

    return (parseInt(value) * 0.2).toFixed(2).split('.')[1];
};
var priceT = function priceT(value) {
    if (value.match('￥')) {
        value = value.split('￥')[1].split('.')[0];
    } else {
        value = value.split('.')[0];
    }

    return value;
};
var priceTT = function priceTT(value) {
    value = value.split('￥')[1];
    return value.split('.')[1];
};
var array2string = function array2string(arry) {
    return array.length === 1 ? array[0] : array.join(' ');
};
var contentP = function contentP(value) {
    return value.substring(0, 2);
};
var sup = function sup(value) {
    if (value.indexOf('平方米') > -1 || value.indexOf('平米') > -1 || value.indexOf('亩') > -1) {
        if (value.indexOf('平方米') > -1) {
            value = value.replace("平方米", '㎡');
        }
        if (value.indexOf('平米') > -1) {
            value = value.replace("平米", '㎡');
        }
        if (value.indexOf('亩') > -1) {
            var number = value.split("亩");
            number = parseInt(number[0]) * 666;
            value = number + "㎡";
        }
    } else {
        value = value + "㎡";
    }
    return value;
};
exports.default = {
    capitalize: capitalize,
    uppercase: uppercase,
    lowercase: lowercase,
    fixed: fixed,
    dateTime: dateTime,
    starsText: starsText,
    priceI: priceI,
    priceF: priceF,
    priceO: priceO,
    priceM: priceM,
    priceX: priceX,
    priceT: priceT,
    priceTT: priceTT,
    array2string: array2string,
    contentP: contentP,
    sup: sup
};

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _native = __webpack_require__(270);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_native).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 提取数组对象
 * @param {*} n 
 * @param {*} offset 
 */
function limitBy(n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = parseInt(n);
  return typeof n === 'number' ? this.slice(offset, offset + n) : this;
}

/**
 * 跳过数组N个，取之后所有
 * @param {*} n 
 */
function skipBy(n) {
  n = parseInt(n);
  return typeof n === 'number' ? this.slice(n) : this;
}

Array.prototype.skip = skipBy;
Array.prototype.limit = limitBy;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _router = __webpack_require__(133);

var _router2 = _interopRequireDefault(_router);

var _api = __webpack_require__(209);

var _api2 = _interopRequireDefault(_api);

var _auth = __webpack_require__(92);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router2.default.beforeEach(function (to, from, next) {
    var filters = {};

    filters.userId = _auth2.default.userId;

    if (to.query.id) filters.id = to.query.id;

    switch (to.name) {
        case 'prod.details':
            filters.type = 2;
            break;
        case 'doctor.detail':
            filters.type = 3;
            break;
        case 'hospital.detail':
            filters.type = 4;
            break;
        case 'activity.detail':
            filters.type = 12;
            break;
        case 'advertisement.detail':
            filters.type = 13;
            break;
        case 'wiki.detail':
            filters.type = 19;
            break;
        case 'custom.detail':
            filters.type = 20;
            break;
        default:
            filters.id = void 0;
            filters.type = void 0;
            break;

    }
    next();
    if (!window.cordova) return;
    if (!filters.type) return;
    _api2.default.statistics.get(filters).then(function (q) {});
}); /**
        统计访问文件
     */

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(60);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(198);

var _vuex2 = _interopRequireDefault(_vuex);

var _modules = __webpack_require__(291);

var _modules2 = _interopRequireDefault(_modules);

var _getters = __webpack_require__(290);

var getters = _interopRequireWildcard(_getters);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var store = new _vuex2.default.Store({
    actions: {
        network: function network(_ref, model) {
            var commit = _ref.commit,
                state = _ref.state;

            commit('network_update', model);
        }
    },
    mutations: {
        network_update: function network_update(state, data) {
            state.onLine = data.onLine;
        }
    },
    state: {
        onLine: true
    },
    modules: _modules2.default,
    getters: getters
});

exports.default = store;

/***/ }),
/* 206 */,
/* 207 */,
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(534)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(246),
  /* template */
  __webpack_require__(584),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-472f83d4", Component.options)
  } else {
    hotAPI.reload("data-v-472f83d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _themes = __webpack_require__(285);

var _themes2 = _interopRequireDefault(_themes);

var _subject = __webpack_require__(284);

var _subject2 = _interopRequireDefault(_subject);

var _activity = __webpack_require__(271);

var _activity2 = _interopRequireDefault(_activity);

var _prod = __webpack_require__(278);

var _prod2 = _interopRequireDefault(_prod);

var _order = __webpack_require__(277);

var _order2 = _interopRequireDefault(_order);

var _qiniu = __webpack_require__(279);

var _qiniu2 = _interopRequireDefault(_qiniu);

var _refund = __webpack_require__(280);

var _refund2 = _interopRequireDefault(_refund);

var _user = __webpack_require__(286);

var _user2 = _interopRequireDefault(_user);

var _custom = __webpack_require__(273);

var _custom2 = _interopRequireDefault(_custom);

var _search = __webpack_require__(281);

var _search2 = _interopRequireDefault(_search);

var _wiki = __webpack_require__(287);

var _wiki2 = _interopRequireDefault(_wiki);

var _advertisement = __webpack_require__(272);

var _advertisement2 = _interopRequireDefault(_advertisement);

var _sign = __webpack_require__(282);

var _sign2 = _interopRequireDefault(_sign);

var _instalment = __webpack_require__(276);

var _instalment2 = _interopRequireDefault(_instalment);

var _hospital = __webpack_require__(275);

var _hospital2 = _interopRequireDefault(_hospital);

var _doctor = __webpack_require__(274);

var _doctor2 = _interopRequireDefault(_doctor);

var _statistics = __webpack_require__(283);

var _statistics2 = _interopRequireDefault(_statistics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    themes: _themes2.default,
    subject: _subject2.default,
    activity: _activity2.default,
    prod: _prod2.default,
    order: _order2.default,
    qiniu: _qiniu2.default,
    refund: _refund2.default,
    user: _user2.default,
    custom: _custom2.default,
    search: _search2.default,
    wiki: _wiki2.default,
    advertisement: _advertisement2.default,
    sign: _sign2.default,
    instalment: _instalment2.default,
    hospital: _hospital2.default,
    doctor: _doctor2.default,
    statistics: _statistics2.default
};

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/no-data.png?0b2c2bc4";

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mActionItem = exports.Actionsheet = undefined;

var _actionsheet = __webpack_require__(549);

var _actionsheet2 = _interopRequireDefault(_actionsheet);

var _mActionItem = __webpack_require__(550);

var _mActionItem2 = _interopRequireDefault(_mActionItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Actionsheet = _actionsheet2.default;
exports.mActionItem = _mActionItem2.default;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabContent = exports.TabContents = exports.Tabs = exports.Tab = undefined;

var _tab = __webpack_require__(568);

var _tab2 = _interopRequireDefault(_tab);

var _tabs = __webpack_require__(569);

var _tabs2 = _interopRequireDefault(_tabs);

var _tabContents = __webpack_require__(567);

var _tabContents2 = _interopRequireDefault(_tabContents);

var _tabContent = __webpack_require__(566);

var _tabContent2 = _interopRequireDefault(_tabContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tab = _tab2.default;
exports.Tabs = _tabs2.default;
exports.TabContents = _tabContents2.default;
exports.TabContent = _tabContent2.default;

/***/ }),
/* 213 */,
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwipeItem = exports.Swipe = undefined;

var _swipe = __webpack_require__(560);

var _swipe2 = _interopRequireDefault(_swipe);

var _swipeItem = __webpack_require__(561);

var _swipeItem2 = _interopRequireDefault(_swipeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Swipe = _swipe2.default;
exports.SwipeItem = _swipeItem2.default;

/***/ }),
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwipeoutButton = exports.SwipeoutItem = exports.Swipeout = undefined;

var _swipeout = __webpack_require__(564);

var _swipeout2 = _interopRequireDefault(_swipeout);

var _swipeoutItem = __webpack_require__(563);

var _swipeoutItem2 = _interopRequireDefault(_swipeoutItem);

var _swipeoutButton = __webpack_require__(562);

var _swipeoutButton2 = _interopRequireDefault(_swipeoutButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Swipeout = _swipeout2.default;
exports.SwipeoutItem = _swipeoutItem2.default;
exports.SwipeoutButton = _swipeoutButton2.default; /**
                                                   * Thanks to: http://jdc.jd.com/demo/slide_to_remove/
                                                   */

/***/ }),
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/loading.gif?39deec37";

/***/ }),
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mounted: function mounted() {
        if (!window.cordova) return;
        if (navigator.userAgent.indexOf('Android') > -1) {
            if (!chcp) return;
            chcp.fetchUpdate(this.fetchUpdateCallback);
        }
    },

    methods: {
        installationCallback: function installationCallback(error) {
            if (error) {
                console.log('Failed to install the update with error code: ' + error.code);
                console.log(error.description);
            } else {
                console.log('Update installed!');
            }
        },
        fetchUpdateCallback: function fetchUpdateCallback(error, data) {
            if (error) {
                console.log('Failed to load the update with error code: ' + error.code);
                console.log(error.description);
                return;
            }
            console.log('Update is loaded, running the installation');
            chcp.installUpdate(this.installationCallback);
        }
    }
};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  created: function created() {
    this.propsShow = this.show;
    if (this.value) this.propsShow = this.value;
  },
  mounted: function mounted() {
    this.$tabbar = document.querySelector('.weui_tabbar');
  },

  props: {
    show: Boolean,
    value: {
      type: Boolean,
      default: false
    },
    showCancel: Boolean,
    cancelText: String,
    onChange: {
      type: Function,
      default: null
    },
    menus: {
      type: String,
      default: ""
    }
  },
  data: function data() {
    return {
      propsShow: false
    };
  },

  methods: {
    emitEvent: function emitEvent(menu) {
      if (!/.noop/.test(menu)) {
        this.$emit('onChange', menu);
        this.propsShow = false;
      }
    },
    fixIos: function fixIos(zIndex) {
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex;
      }
    }
  },
  watch: {
    value: function value(val) {
      this.propsShow = val;
    },
    propsShow: function propsShow(val) {
      var _this = this;

      if (val) {
        this.fixIos(-1);
      } else {
        setTimeout(function () {
          _this.fixIos(100);
        }, 200);
      }
      this.$emit('input', val);
    },
    show: function show(val) {
      this.propsShow = val;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.fixIos(100);
  }
};

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  created: function created() {},
  mounted: function mounted() {},

  props: {
    value: {
      type: String,
      default: ""
    },
    checked: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    emitEvent: function emitEvent(menu) {
      this.$emit('checked', menu);
    }
  },
  watch: {}
};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(151);

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = __webpack_require__(198);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        pageStatus: {
            type: Number,
            default: 0
        }
    },
    computed: (0, _extends3.default)({}, (0, _vuex.mapState)(['onLine']))
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        col: {
            type: Number,
            default: 0
        }
    },
    beforeCreate: function beforeCreate() {},
    created: function created() {
        // debugger;

    },
    beforeMount: function beforeMount() {},
    mounted: function mounted() {},
    activated: function activated() {},
    deactivated: function deactivated() {},

    beforeUpdate: function beforeUpdate() {},
    updated: function updated() {},
    beforeDestroy: function beforeDestroy() {},
    destroyed: function destroyed() {},
    methods: {}
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * m-header
 * @module components/mContainer
 * @desc 顶部导航
 *
 * @example
    <m-header>
        <div slot="left">返回</div>
        <h1 slot="title" class="m-header-title">首页</h1>
        <div slot="right">分享</div> 
    </m-header>
 */


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        icon: String,
        title: String,
        label: String,
        content: String,
        margin: {
            type: Number,
            default: 0
        },
        tapEvent: {
            type: Function,
            default: null
        }
    },
    methods: {}
};

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//

exports.default = {
    props: {
        status: ''
    },
    mounted: function mounted() {
        this.refreshAnimation();
        this.sysTime = this.formatHourT012();
    },
    destroyed: function destroyed() {
        this.refreshAnimationEnd();
    },
    data: function data() {
        return {
            sysTime: '',
            Animation: null
        };
    },

    methods: {
        formatHourT012: function formatHourT012() {
            var d = new Date();
            var H = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
            if (H - 12 <= 0) {
                H = 'AM ' + H;
            } else if (H - 12 > 0 && H - 24 < 0) {
                H = H - 12;
                H = 'PM ' + H;
            } else if (H - 24 == 0) {
                H = 'PM ' + '00';
            }
            var m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
            return H + ':' + m;
        },
        refreshAnimation: function refreshAnimation() {
            var that = this;
            var refreshImage = this.$refs.refreshDom;
            this.translateY = 0;
            this.Animation = requestAnimationFrame(function fn() {
                if (that.translateY >= 1650) {
                    that.translateY = 50;
                } else {
                    that.translateY += 50;
                }
                refreshImage.style.webkitTransform = "translateY(-" + that.translateY + "px)";
                that.Animation = setTimeout(fn, 50);
            });
        },
        refreshAnimationEnd: function refreshAnimationEnd() {
            var that = this;
            var refreshImage = this.$refs.refreshDom;
            if (refreshImage) {
                clearInterval(that.Animation);
                refreshImage.style.webkitTransform = "translateY(0px)";
            }
        }
    }
};

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(151);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(93);

var _assign2 = _interopRequireDefault(_assign);

var _iscroll = __webpack_require__(267);

var _mSpinner = __webpack_require__(197);

var _mSpinner2 = _interopRequireDefault(_mSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'scroller',

    props: {
        options: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        useReset: {
            type: Boolean,
            default: false
        },
        useMore: {
            type: Boolean,
            default: false
        },
        loadText: {
            type: String,
            default: 'spinner'
        }
    },
    data: function data() {
        return {
            isReset: false,
            isMore: false,
            state: null
        };
    },

    components: {
        'spinner': _mSpinner2.default
    },
    created: function created() {
        this.isReset = this.useReset;
        this.isMore = this.useMore;
    },
    mounted: function mounted() {
        var that = this;
        var onScrollEnd = function onScrollEnd() {
            var _this = this;

            var y = this.y;
            if (that.isReset && y >= 0) {
                //刷新
                that.isReset = false;
                that.$emit('reset', function () {
                    _this.refresh();
                    that.isReset = true;
                    that.state = 'off';
                });
            } else if (that.isMore && y + this.distY <= this.maxScrollY + (-this.options.bottomOffset || 0)) {
                //上拉
                that.isMore = false;
                that.$emit('more', function () {
                    _this.refresh();
                    that.isMore = true;
                });
            }
        },
            _onScrollMove = function _onScrollMove() {
            var y = this.y;
            if (!that.isReset) return;

            if (y > 0) {
                this.minScrollY = 0;
                that.state = 'pull';
            } else {
                this.minScrollY = -this.options.topOffset || 0;
            }
        },
            onRefresh = function onRefresh() {

            console.log('refresh');
            // if (that.state == 'pull') {
            //     that.state = 'drop';
            // }
            // if (that.usePullUp && that.pullUpIconClass.match('loading')) {
            //     that.pullUpIconClass = 'pullUpIcon';
            //     that.usePullUpIcon = false;
            //     that.usePullLabel = true;
            // }
        };

        var exceptions = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ };

        var events = {
            'onBeforeScrollStart': function onBeforeScrollStart(e) {
                for (var i in exceptions) {
                    if (!exceptions[i].test(e.target[i])) {
                        e.preventDefault();
                    }
                }

                that.$nextTick(function () {
                    that.$emit('beforeScrollStart', that.iscroll, e);
                });
            },
            'onScrollStart': function onScrollStart(e) {
                that.$nextTick(function () {
                    that.$emit('scrollStart', that.iscroll, e);
                });
            },
            'onBeforeScrollEnd': function onBeforeScrollEnd(e) {
                for (var i in exceptions) {
                    if (!exceptions[i].test(e.target[i])) {
                        e.preventDefault();
                    }
                }
                onScrollEnd.call(that.iscroll);
                // that.$nextTick(() => { that.$emit('scrollEnd', that.iscroll, e) });
            },
            'onBeforeScrollMove': function onBeforeScrollMove(e) {
                that.$nextTick(function () {
                    that.$emit('beforeScroll', that.iscroll, e);
                });
            },
            'onScrollEnd': function onScrollEnd() {

                that.$nextTick(function () {
                    that.$emit('scrollEnd', that.iscroll);
                });
            },
            'onScrollMove': function onScrollMove(e) {
                _onScrollMove.call(that.iscroll, e);
                that.$nextTick(function () {
                    that.$emit('scroll', that.iscroll);
                });
            },
            // 'flick': function () { that.$nextTick(() => { that.$emit('onBeforeScrollStart', this) }); },
            'onZoomStart': function onZoomStart() {
                that.$nextTick(function () {
                    that.$emit('zoomStart', that.iscroll);
                });
            },

            'onZoom': function onZoom() {
                that.$nextTick(function () {
                    that.$emit('zoom', that.iscroll);
                });
            },

            'onZoomEnd': function onZoomEnd() {
                that.$nextTick(function () {
                    that.$emit('zoomEnd', that.iscroll);
                });
            },
            'onRefresh': function onRefresh() {
                that.$nextTick(function () {
                    that.$emit('refresh', that.iscroll);
                });
            },
            'onDestroy': function onDestroy() {
                that.$nextTick(function () {
                    that.$emit('destroy', that.iscroll);
                });
            }
            // 'scrollCancel': function () { that.$nextTick(() => { that.$emit('onTouchEnd', this) }); },
        };

        var options = (0, _assign2.default)((0, _extends3.default)({
            hScrollbar: false,
            vScrollbar: false,
            checkDOMChanges: !this.useReset && !this.useMore,
            topOffset: that.$refs.header.offsetHeight || 0
        }, events), this.options);

        that.iscroll = new _iscroll.iScroll(that.$refs.container, options);
    },
    beforeDestroy: function beforeDestroy() {
        this.iscroll && this.iscroll.destroy();
        this.iscroll = null;
    },

    methods: {
        zoom: function zoom() {
            var _this2 = this,
                _arguments = arguments;

            this.$nextTick(function () {
                return _this2.iscroll.zoom.apply(_this2.iscroll, _arguments);
            });
        },
        goToPage: function goToPage() {
            var _this3 = this,
                _arguments2 = arguments;

            this.$nextTick(function () {
                return _this3.iscroll.goToPage.apply(_this3.iscroll, _arguments2);
            });
        },
        next: function next() {
            var _this4 = this,
                _arguments3 = arguments;

            this.$nextTick(function () {
                return _this4.iscroll.next.apply(_this4.iscroll, _arguments3);
            });
        },
        prev: function prev() {
            var _this5 = this,
                _arguments4 = arguments;

            this.$nextTick(function () {
                return _this5.iscroll.prev.apply(_this5.iscroll, _arguments4);
            });
        },
        scrollToElement: function scrollToElement() {
            var _this6 = this,
                _arguments5 = arguments;

            this.$nextTick(function () {
                return _this6.iscroll.scrollToElement.apply(_this6.iscroll, _arguments5);
            });
        },
        scrollBy: function scrollBy() {
            var _this7 = this,
                _arguments6 = arguments;

            this.$nextTick(function () {
                return _this7.iscroll.scrollBy.apply(_this7.iscroll, _arguments6);
            });
        },
        scrollTo: function scrollTo() {
            var _this8 = this,
                _arguments7 = arguments;

            this.$nextTick(function () {
                return _this8.iscroll.scrollTo.apply(_this8.iscroll, _arguments7);
            });
        },
        refresh: function refresh() {
            var _this9 = this,
                _arguments8 = arguments;

            this.$nextTick(function () {
                return _this9.iscroll.refresh.apply(_this9.iscroll, _arguments8);
            });
        }
    }
};

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(268);

//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  created: function created() {
    this.dragState = {};
  },
  data: function data() {
    return {
      ready: false,
      dragging: false,
      userScrolling: false,
      animating: false,
      index: 0,
      pages: [],
      timer: null,
      reInitTimer: null,
      noDrag: false,
      isDone: false
    };
  },


  props: {
    speed: {
      type: Number,
      default: 300
    },
    //默认显示页码
    defaultIndex: {
      type: Number,
      default: 0
    },
    //自动播放时间
    auto: {
      type: Number,
      default: 3000
    },
    //是否循环
    continuous: {
      type: Boolean,
      default: true
    },
    //控制焦点显示
    showIndicators: {
      type: Boolean,
      default: true
    },
    //只有一页时禁止拖动
    noDragWhenSingle: {
      type: Boolean,
      default: true
    },

    prevent: {
      type: Boolean,
      default: false
    },

    stopPropagation: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    index: function index(newIndex) {
      this.$emit('change', newIndex);
    }
  },

  methods: {
    swipeItemCreated: function swipeItemCreated() {
      var _this = this;

      if (!this.ready) return;

      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(function () {
        _this.reInitPages();
      }, 100);
    },
    swipeItemDestroyed: function swipeItemDestroyed() {
      var _this2 = this;

      if (!this.ready) return;

      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(function () {
        _this2.reInitPages();
      }, 100);
    },
    translate: function translate(element, offset, speed, callback) {
      var _this3 = this,
          _arguments = arguments;

      if (speed) {
        this.animating = true;
        element.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out';
        setTimeout(function () {
          element.style.webkitTransform = 'translate3d(' + offset + 'px, 0, 0)';
        }, 50);

        var called = false;

        var transitionEndCallback = function transitionEndCallback() {
          if (called) return;
          called = true;
          _this3.animating = false;
          element.style.webkitTransition = '';
          element.style.webkitTransform = '';
          if (callback) {
            callback.apply(_this3, _arguments);
          }
        };

        (0, _dom.once)(element, 'webkitTransitionEnd', transitionEndCallback);
        setTimeout(transitionEndCallback, speed + 100); // webkitTransitionEnd maybe not fire on lower version android.
      } else {
        element.style.webkitTransition = '';
        element.style.webkitTransform = 'translate3d(' + offset + 'px, 0, 0)';
      }
    },
    reInitPages: function reInitPages() {
      var children = this.$children;
      this.noDrag = children.length === 1 && this.noDragWhenSingle;

      var pages = [];
      var intDefaultIndex = Math.floor(this.defaultIndex);
      var defaultIndex = intDefaultIndex >= 0 && intDefaultIndex < children.length ? intDefaultIndex : 0;
      this.index = defaultIndex;

      children.forEach(function (child, index) {
        pages.push(child.$el);

        (0, _dom.removeClass)(child.$el, 'is-active');

        if (index === defaultIndex) {
          (0, _dom.addClass)(child.$el, 'is-active');
        }
      });

      this.pages = pages;
    },
    doAnimate: function doAnimate(towards, options) {
      var _this4 = this;

      if (this.$children.length === 0) return;
      if (!options && this.$children.length < 2) return;

      var prevPage, nextPage, currentPage, pageWidth, offsetLeft;
      var speed = this.speed || 300;
      var index = this.index;
      var pages = this.pages;
      var pageCount = pages.length;

      if (!options) {
        pageWidth = this.$el.clientWidth;
        currentPage = pages[index];
        prevPage = pages[index - 1];
        nextPage = pages[index + 1];
        if (this.continuous && pages.length > 1) {
          if (!prevPage) {
            prevPage = pages[pages.length - 1];
          }
          if (!nextPage) {
            nextPage = pages[0];
          }
        }
        if (prevPage) {
          prevPage.style.display = 'block';
          this.translate(prevPage, -pageWidth);
        }
        if (nextPage) {
          nextPage.style.display = 'block';
          this.translate(nextPage, pageWidth);
        }
      } else {
        prevPage = options.prevPage;
        currentPage = options.currentPage;
        nextPage = options.nextPage;
        pageWidth = options.pageWidth;
        offsetLeft = options.offsetLeft;
      }

      var newIndex;

      var oldPage = this.$children[index].$el;

      if (towards === 'prev') {
        if (index > 0) {
          newIndex = index - 1;
        }
        if (this.continuous && index === 0) {
          newIndex = pageCount - 1;
        }
      } else if (towards === 'next') {
        if (index < pageCount - 1) {
          newIndex = index + 1;
        }
        if (this.continuous && index === pageCount - 1) {
          newIndex = 0;
        }
      }

      var callback = function callback() {
        if (newIndex !== undefined) {
          var newPage = _this4.$children[newIndex].$el;
          (0, _dom.removeClass)(oldPage, 'is-active');
          (0, _dom.addClass)(newPage, 'is-active');

          _this4.index = newIndex;
        }
        if (_this4.isDone) {
          _this4.end();
        }

        if (prevPage) {
          prevPage.style.display = '';
        }

        if (nextPage) {
          nextPage.style.display = '';
        }
      };

      setTimeout(function () {
        if (towards === 'next') {
          _this4.isDone = true;
          _this4.before(currentPage);
          _this4.translate(currentPage, -pageWidth, speed, callback);
          if (nextPage) {
            _this4.translate(nextPage, 0, speed);
          }
        } else if (towards === 'prev') {
          _this4.isDone = true;
          _this4.before(currentPage);
          _this4.translate(currentPage, pageWidth, speed, callback);
          if (prevPage) {
            _this4.translate(prevPage, 0, speed);
          }
        } else {
          _this4.isDone = false;
          _this4.translate(currentPage, 0, speed, callback);
          if (typeof offsetLeft !== 'undefined') {
            if (prevPage && offsetLeft > 0) {
              _this4.translate(prevPage, pageWidth * -1, speed);
            }
            if (nextPage && offsetLeft < 0) {
              _this4.translate(nextPage, pageWidth, speed);
            }
          } else {
            if (prevPage) {
              _this4.translate(prevPage, pageWidth * -1, speed);
            }
            if (nextPage) {
              _this4.translate(nextPage, pageWidth, speed);
            }
          }
        }
      }, 10);
    },
    next: function next() {
      this.doAnimate('next');
    },
    prev: function prev() {
      this.doAnimate('prev');
    },
    before: function before() {
      this.$emit('before', this.index);
    },
    end: function end() {
      this.$emit('end', this.index);
    },
    doOnTouchStart: function doOnTouchStart(event) {
      if (this.noDrag) return;

      var element = this.$el;
      var dragState = this.dragState;
      var touch = event.touches[0];

      dragState.startTime = new Date();
      dragState.startLeft = touch.pageX;
      dragState.startTop = touch.pageY;
      dragState.startTopAbsolute = touch.clientY;

      dragState.pageWidth = element.offsetWidth;
      dragState.pageHeight = element.offsetHeight;

      var prevPage = this.$children[this.index - 1];
      var dragPage = this.$children[this.index];
      var nextPage = this.$children[this.index + 1];

      if (this.continuous && this.pages.length > 1) {
        if (!prevPage) {
          prevPage = this.$children[this.$children.length - 1];
        }
        if (!nextPage) {
          nextPage = this.$children[0];
        }
      }

      dragState.prevPage = prevPage ? prevPage.$el : null;
      dragState.dragPage = dragPage ? dragPage.$el : null;
      dragState.nextPage = nextPage ? nextPage.$el : null;

      if (dragState.prevPage) {
        dragState.prevPage.style.display = 'block';
      }

      if (dragState.nextPage) {
        dragState.nextPage.style.display = 'block';
      }
    },
    doOnTouchMove: function doOnTouchMove(event) {
      if (this.noDrag) return;

      var dragState = this.dragState;
      var touch = event.touches[0];

      dragState.currentLeft = touch.pageX;
      dragState.currentTop = touch.pageY;
      dragState.currentTopAbsolute = touch.clientY;

      var offsetLeft = dragState.currentLeft - dragState.startLeft;
      var offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute;

      var distanceX = Math.abs(offsetLeft);
      var distanceY = Math.abs(offsetTop);
      if (distanceX < 5 || distanceX >= 5 && distanceY >= 1.73 * distanceX) {
        this.userScrolling = true;
        return;
      } else {
        this.userScrolling = false;
        event.preventDefault();
      }
      offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1);

      var towards = offsetLeft < 0 ? 'next' : 'prev';

      if (dragState.prevPage && towards === 'prev') {
        this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth);
      }
      this.translate(dragState.dragPage, offsetLeft);
      if (dragState.nextPage && towards === 'next') {
        this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth);
      }
    },
    doOnTouchEnd: function doOnTouchEnd() {
      if (this.noDrag) return;

      var dragState = this.dragState;

      var dragDuration = new Date() - dragState.startTime;
      var towards = null;

      var offsetLeft = dragState.currentLeft - dragState.startLeft;
      var offsetTop = dragState.currentTop - dragState.startTop;
      var pageWidth = dragState.pageWidth;
      var index = this.index;
      var pageCount = this.pages.length;

      if (dragDuration < 300) {
        var fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5;
        if (isNaN(offsetLeft) || isNaN(offsetTop)) {
          fireTap = true;
        }
        if (fireTap) {
          this.$children[this.index].$emit('tap');
        }
      }

      if (dragDuration < 300 && dragState.currentLeft === undefined) return;

      if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
        towards = offsetLeft < 0 ? 'next' : 'prev';
      }

      if (!this.continuous) {
        if (index === 0 && towards === 'prev' || index === pageCount - 1 && towards === 'next') {
          towards = null;
        }
      }

      if (this.$children.length < 2) {
        towards = null;
      }

      this.doAnimate(towards, {
        offsetLeft: offsetLeft,
        pageWidth: dragState.pageWidth,
        prevPage: dragState.prevPage,
        currentPage: dragState.dragPage,
        nextPage: dragState.nextPage
      });

      this.dragState = {};
    },
    initTimer: function initTimer() {
      var _this5 = this;

      if (this.auto > 0 && !this.timer) {
        this.timer = setInterval(function () {
          if (!_this5.continuous && _this5.index >= _this5.pages.length - 1) {
            return _this5.clearTimer();
          }
          if (!_this5.dragging && !_this5.animating) {
            _this5.next();
          }
        }, this.auto);
      }
    },
    clearTimer: function clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  destroyed: function destroyed() {
    if (this.timer) {
      this.clearTimer();
    }
    if (this.reInitTimer) {
      clearTimeout(this.reInitTimer);
      this.reInitTimer = null;
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    this.ready = true;

    this.initTimer();

    this.reInitPages();

    var element = this.$el;

    element.addEventListener('touchstart', function (event) {
      if (_this6.prevent) event.preventDefault();
      if (_this6.stopPropagation) event.stopPropagation();
      if (_this6.animating) return;
      _this6.dragging = true;
      _this6.userScrolling = false;
      _this6.doOnTouchStart(event);
    });

    element.addEventListener('touchmove', function (event) {
      if (!_this6.dragging) return;
      if (_this6.timer) _this6.clearTimer();
      _this6.doOnTouchMove(event);
    });

    element.addEventListener('touchend', function (event) {
      if (_this6.userScrolling) {
        _this6.dragging = false;
        _this6.dragState = {};
        return;
      }
      if (!_this6.dragging) return;
      _this6.initTimer();
      _this6.doOnTouchEnd(event);
      _this6.dragging = false;
    });
  }
};

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  mounted: function mounted() {
    this.$parent && this.$parent.swipeItemCreated(this);
  },
  destroyed: function destroyed() {
    this.$parent && this.$parent.swipeItemDestroyed(this);
  }
};

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  name: 'swipeout-button',
  props: {
    text: String,
    backgroundColor: String,
    type: String,
    width: {
      type: String,
      default: '1.1rem'
    }
  },
  methods: {
    onButtonClick: function onButtonClick() {
      if (this.$parent.$options._componentTag === 'swipeout-item') {
        this.$parent.onItemClick(this.text);
      }
    }
  }
};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(68);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'swipeout-item',
  props: {
    sensitivity: {
      type: Number,
      default: 0
    },
    autoCloseOnButtonClick: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    threshold: {
      type: Number,
      default: 0.3
    },
    underlayColor: String,
    transitionMode: {
      type: String,
      default: 'reveal'
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.target = _this.$refs.content;
      if (_this.$slots['left-menu']) {
        _this.hasLeftMenu = true;
        _this.caculateMenuWidth('left');
      }
      if (_this.$slots['right-menu']) {
        _this.hasRightMenu = true;
        _this.caculateMenuWidth('right');
      }
    });
  },

  methods: {
    caculateMenuWidth: function caculateMenuWidth(direction) {
      var list = this.$slots[direction + '-menu'][0].children.filter(function (one) {
        return one.tag;
      });
      var width = 0;
      list.forEach(function (one) {
        var propsData = one.componentOptions ? one.componentOptions.propsData : {};
        width += propsData.width || 80;
      });
      this[direction + 'MenuWidth'] = width;
    },
    onContentClick: function onContentClick() {
      if (this.styles.transform.indexOf('(0px, 0, 0)') === -1) {
        this._setClose(200);
      }
    },
    onItemClick: function onItemClick() {
      if (this.autoCloseOnButtonClick) {
        this._setClose();
      }
    },
    start: function start(ev) {
      if (this.disabled || this.isOpen || ev.target.nodeName.toLowerCase() === 'button') {
        return;
      }
      if (this.$parent.$options._componentTag === 'swipeout') {
        var openItems = this.$parent.$children.filter(function (item) {
          return item.$data.styles.transform.indexOf('(0px, 0, 0)') === -1;
        });
        if (openItems.length > 0) {
          openItems.forEach(function (item) {
            item.setOffset(0, true);
          });
          ev.preventDefault();
          return;
        }
      }
      var touch = ev.touches ? ev.touches[0] : ev;
      this.pageX = touch.pageX;
      this.pageY = touch.pageY;
    },
    move: function move(ev) {
      if (this.disabled) {
        return;
      }
      if (ev.target.nodeName.toLowerCase() === 'button') {
        ev.preventDefault();
        return;
      }
      if (this.pageX === undefined) {
        ev.preventDefault();
        return;
      }

      var touch = ev.touches ? ev.touches[0] : ev;
      this.distX = touch.pageX - this.pageX;
      this.distY = touch.pageY - this.pageY;
      if (!this.direction) {
        this.direction = this.distX > 0 ? 'left' : 'right';
      }

      if (this.direction === 'right' && this.distX > 0 && this.hasRightMenu || this.direction === 'left' && this.distX < 0 && this.hasLeftMenu) {
        this.valid = true;
        ev.preventDefault();
      }

      if (this.valid === undefined) {
        if (this.distX > 0 && this.hasLeftMenu === false) {
          this.valid = false;
        } else if (this.distX < 0 && this.hasRightMenu === false) {
          this.valid = false;
        } else if (Math.abs(this.distX) > this.sensitivity || Math.abs(this.distY) > this.sensitivity) {
          this.valid = Math.abs(this.distX) > Math.abs(this.distY);
        } else {
          ev.preventDefault();
        }
      }

      if (this.valid === true) {
        if (Math.abs(this.distX) <= this.menuWidth) {
          this.setOffset(this.distX, false);
        } else {
          var extra = (Math.abs(this.distX) - this.menuWidth) * 0.5;
          var offset = (this.menuWidth + extra) * (this.distX < 0 ? -1 : 1);
          this.setOffset(offset, false);
        }
        ev.preventDefault();
      }
    },
    end: function end(ev) {
      if (this.disabled) {
        return;
      }
      if (ev.target.nodeName.toLowerCase() === 'button') {
        return;
      }
      if (this.valid === true) {
        if (this.distX < 0 && this.direction === 'right') {
          var threshold = this.threshold <= 1 ? this.rightMenuWidth * this.threshold : this.threshold;

          if (this.distX < -threshold) {
            this.setOffset(-this.rightMenuWidth, true);
            this.$emit('on-open');
            this.isOpen = true;
          } else {
            this._setClose();
          }
        } else if (this.distX > 0 && this.direction === 'left') {
          var _threshold = this.threshold <= 1 ? this.leftMenuWidth * this.threshold : this.threshold;

          if (this.distX > _threshold) {
            this.setOffset(this.leftMenuWidth, true);
            this.$emit('on-open');
            this.isOpen = true;
          } else {
            this._setClose();
          }
        }
      } else if (this.pageX !== undefined) {}

      this.pageX = this.pageY = this.valid = undefined;
      this.direction = '';
    },
    setOffset: function setOffset(x) {
      var _this2 = this;

      var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var force = arguments[2];

      this.isAnimated = animated;
      if (this.disabled && !force) {
        return;
      }
      if (this.direction === 'right' && x > 0 || this.direction === 'left' && x < 0) {
        x = 0;
      }

      if (x === 0) {
        setTimeout(function () {
          _this2.isOpen = false;
        }, 300);
      }

      if (x < 0 && Math.abs(x) === this.rightMenuWidth) {
        this.distX = -this.rightMenuWidth;
      } else if (x > 0 && Math.abs(x) === this.leftMenuWidth) {
        this.distX = this.leftMenuWidth;
      }
      if (animated && this.target) {
        this.target && this.target.classList.add('vux-swipeout-content-animated');
        var cb = function (self, target) {
          return function () {
            target.classList.remove('vux-swipeout-content-animated');
            self.isAnimated = false;
            target.removeEventListener('webkitTransitionEnd', cb);
            target.removeEventListener('transitionend', cb);
          };
        }(this, this.target);

        this.target.addEventListener('webkitTransitionEnd', cb);
        this.target.addEventListener('transitionend', cb);
      }
      this.styles.transform = 'translate3d(' + x + 'px, 0, 0)';
    },
    _setClose: function _setClose() {
      var _this3 = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.setOffset(0, true);
      this.$emit('on-close');
      if (!delay) {
        this.isOpen = false;
      } else {
        setTimeout(function () {
          _this3.isOpen = false;
        }, delay);
      }
      this.distX = 0;
    },
    open: function open() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'right';

      this.setOffset(position === 'right' ? -this.rightMenuWidth : this.leftMenuWidth, true, true);
    },
    close: function close() {
      this.setOffset(0, true, true);
    }
  },
  computed: {
    menuWidth: function menuWidth() {
      if (!this.hasLeftMenu && this.hasRightMenu) {
        return this.rightMenuWidth;
      }
      if (this.hasLeftMenu && !this.hasRightMenu) {
        return this.leftMenuWidth;
      }
      if (this.hasLeftMenu && this.hasRightMenu) {
        return this.distX < 0 ? this.rightMenuWidth : this.leftMenuWidth;
      }
    },
    buttonBoxStyle: function buttonBoxStyle() {
      return {
        backgroundColor: this.underlayColor
      };
    },
    leftButtonBoxStyle: function leftButtonBoxStyle() {
      var styles = JSON.parse((0, _stringify2.default)(this.buttonBoxStyle));
      if (this.transitionMode === 'follow') {
        var offset = this.styles.transform.indexOf('(0px, 0, 0)') === -1 ? this.leftMenuWidth - this.distX : this.leftMenuWidth;
        styles.transform = 'translate3d(-' + offset + 'px, 0, 0)';
      }
      return styles;
    },
    rightButtonBoxStyle: function rightButtonBoxStyle() {
      var styles = JSON.parse((0, _stringify2.default)(this.buttonBoxStyle));
      if (this.transitionMode === 'follow') {
        var offset = this.styles.transform.indexOf('(0px, 0, 0)') === -1 ? this.rightMenuWidth - Math.abs(this.distX) : this.rightMenuWidth;
        if (offset < 0) {
          offset = 0;
        }
        if (this.isAnimated) {
          styles.transition = 'transform 0.2s';
        }
        styles.transform = 'translate3d(' + offset + 'px, 0, 0)';
      }
      return styles;
    }
  },
  data: function data() {
    return {
      pageX: undefined,
      pageY: undefined,
      distX: 0,
      distY: 0,
      hasLeftMenu: false,
      hasRightMenu: false,
      animated: false,
      isAnimated: false,
      isOpen: false,
      styles: {
        transform: 'translate3d(0px, 0, 0)'
      },
      direction: '',
      leftMenuWidth: 160,
      rightMenuWidth: 160
    };
  },

  watch: {
    disabled: function disabled(newVal, oldVal) {
      if (newVal === true && !oldVal) {
        this.setOffset(0, true, true);
      }
    }
  }
};

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'swipeout'
};

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'm-switch',

    props: {
        value: Boolean,
        disabled: {
            type: Boolean,
            default: false
        },
        onChange: {
            type: Function,
            default: null
        }
    },
    created: function created() {},

    computed: {
        currentValue: {
            get: function get() {
                return this.value;
            },
            set: function set(val) {
                this.$emit('input', val);
            }
        }
    }
};

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'm-tab',
    data: function data() {
        return {
            start: { x: 0, y: 0 },
            pageWidth: 0,
            index: parseInt(this.value.substring(this.value.length - 1, this.value.length)),
            currentIndex: parseInt(this.value.substring(this.value.length - 1, this.value.length)) - 1
        };
    },

    props: {
        icon: {
            type: String,
            default: ''
        },
        iconClass: {
            type: [String, Object, Array]
        },
        title: {
            type: String,
            default: ''
        },
        titleClass: {
            type: [String, Object, Array]
        },
        href: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        value: {
            type: String
        }
    },
    computed: {
        active: function active() {
            return this.isNotNull(this.value) && this.$parent.value === this.value;
        },
        textClass: function textClass() {
            var icon = this.icon,
                titleClass = this.titleClass;

            var classNames = [];
            if (icon) classNames.push('has-icon');
            return classNames.concat(this.convertClass(titleClass));
        }
    },
    mounted: function mounted() {

        this.pageWidth = this.$parent.$refs.wrap.clientWidth;
        this.limitWidth = this.pageWidth / 4;
    },
    updated: function updated() {
        this.index = parseInt(this.value.substring(this.value.length - 1, this.value.length));
        this.currentIndex = this.index - 1;
    },

    methods: {
        startDrag: function startDrag(e) {
            return;
            if (!this.active) return;
            e = e.changedTouches ? e.changedTouches[0] : e;
            this.start.x = e.pageX;
            this.start.y = e.pageY;
        },
        tabClick: function tabClick(e) {
            return;
            if (!this.active) return;
            var swiping = void 0;
            var evt = e.changedTouches ? e.changedTouches[0] : e;
            var len = this.$parent.$children.length;
            var offsetTop = evt.pageY - this.start.y;
            var offsetLeft = evt.pageX - this.start.x;
            var currentPageOffset = this.currentIndex * this.pageWidth;
            var offset = offsetLeft - currentPageOffset;
            var y = Math.abs(offsetTop);
            var x = Math.abs(offsetLeft);
            var absOffset = Math.abs(offset);

            swiping = !(y < 5 && x > 1.73 || x >= 5 && x >= y * 1.73);

            if (swiping) return;

            if (offsetLeft > 0) {

                this.index = this.index - 1;
                this.currentIndex = this.currentIndex - 1;
                if (this.index <= 1 || this.currentIndex <= 0) {
                    this.index = 1;
                    this.currentIndex = 0;
                }
            } else {
                this.index = this.index + 1;
                this.currentIndex = this.currentIndex + 1;
                if (this.index >= len || this.currentIndex >= this.$parent.$children.length - 1) {
                    this.index = len;
                    this.currentIndex = this.$parent.$children.length - 1;
                }
            }
            var value = "tab" + this.index;
            if (this.$parent.handleTabClick) this.$parent.handleTabClick(value, this.$parent.$children[this.currentIndex]);
            this.$parent.$parent.$children[0].$children[this.currentIndex].tabClick();
        },
        convertClass: function convertClass(classes) {
            var newClasses = [];
            if (!classes) return newClasses;
            if (classes instanceof Array) {
                newClasses = newClasses.concat(classes);
            } else if (classes instanceof Object) {
                for (var name in classes) {
                    if (classes[name]) newClasses.push(name);
                }
            } else {
                newClasses = newClasses.concat(classes.split(' '));
            }
            return newClasses;
        }
    },
    watch: {
        active: function active(val, oldVal) {
            if (val === oldVal) return;
            if (val) this.$emit('active');
        }
    }
};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'm-tab-container',
  props: {
    lineClass: {
      type: [String, Object, Array]
    },
    value: {}
  },
  data: function data() {
    return {
      tabLightStyle: {
        width: '0%',
        transform: 'translate3d(0, 0, 0)'
      }
    };
  },
  updated: function updated() {},

  methods: {
    handleTabClick: function handleTabClick(value, tab) {
      if (this.value !== value) {
        this.$emit('change', value);
      }
    },
    getActiveIndex: function getActiveIndex() {
      var _this = this;

      if (!this.$children || this.$children.length === 0) return -1;
      var currentIndex = -1;
      this.$children.forEach(function (tab, i) {
        if (tab.value === _this.value) {
          currentIndex = i;
          return false;
        }
      });
      return currentIndex;
    }
  },
  mounted: function mounted() {}
};

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'm-tab',
    props: {
        icon: {
            type: String,
            default: ''
        },
        iconClass: {
            type: [String, Object, Array]
        },
        title: {
            type: String,
            default: ''
        },
        titleClass: {
            type: [String, Object, Array]
        },
        href: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        value: {
            type: String
        }
    },
    computed: {
        active: function active() {
            return this.isNotNull(this.value) && this.$parent.value === this.value;
        },
        textClass: function textClass() {
            var icon = this.icon,
                titleClass = this.titleClass;

            var classNames = [];
            if (icon) classNames.push('has-icon');
            return classNames.concat(this.convertClass(titleClass));
        }
    },
    methods: {
        tabClick: function tabClick(e) {
            if (this.$parent.handleTabClick) this.$parent.handleTabClick(this.value, this);
            this.$emit('click', e);
        },
        convertClass: function convertClass(classes) {
            var newClasses = [];
            if (!classes) return newClasses;
            if (classes instanceof Array) {
                newClasses = newClasses.concat(classes);
            } else if (classes instanceof Object) {
                for (var name in classes) {
                    if (classes[name]) newClasses.push(name);
                }
            } else {
                newClasses = newClasses.concat(classes.split(' '));
            }
            return newClasses;
        }
    },
    watch: {
        active: function active(val, oldVal) {
            if (val === oldVal) return;
            if (val) this.$emit('active');
        }
    }
};

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  name: 'm-tabs',
  props: {
    lineClass: {
      type: [String, Object, Array]
    },
    value: {}
  },
  data: function data() {
    return {
      tabLightStyle: {
        transform: 'translate3d(0, 0, 0)'
      }
    };
  },
  updated: function updated() {
    this.setTabLightStyle();
  },

  methods: {
    handleTabClick: function handleTabClick(value, tab) {
      if (this.value !== value) {
        this.$emit('change', value);
      }
    },
    getActiveIndex: function getActiveIndex() {
      var _this = this;

      if (!this.$children || this.$children.length === 0) return -1;
      var activeIndex = -1;
      this.$children.forEach(function (tab, i) {
        if (tab.value === _this.value) {
          activeIndex = i;
          return false;
        }
      });
      return activeIndex;
    },
    setTabLightStyle: function setTabLightStyle() {
      var x = void 0;
      // let x = Math.abs(parseInt(this.getActiveIndex()+1) * 20)-10;
      //let x = Math.abs(parseInt(this.getActiveIndex()+1) * 33.33)-16.665;
      var len = this.$children.length;
      if (len == 2) {

        if (parseInt(this.getActiveIndex() + 1) == len) {
          x = Math.abs(parseInt(this.getActiveIndex() + 1) * 33.33) + 8;
        } else {
          x = Math.abs(parseInt(this.getActiveIndex() + 1) * 33.33) - 10;
        }
      }
      if (len == 3) {
        x = Math.abs(parseInt(this.getActiveIndex() + 1) * 33.33) - 16.665;
      }
      if (len == 5) {
        x = Math.abs(parseInt(this.getActiveIndex() + 1) * 20) - 10;
      }
      var el = this.$refs.highlight;
      el.style.left = x + '%';
    }
  },
  mounted: function mounted() {
    this.setTabLightStyle();
  }
};

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(215);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _methods; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _actionsheet = __webpack_require__(211);

var _swipe = __webpack_require__(214);

var _tab = __webpack_require__(212);

var _switch = __webpack_require__(269);

var _switch2 = _interopRequireDefault(_switch);

var _swipeout = __webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            title: '列表',
            showActionsheet: false,
            isShare: false,
            selectValue: "",
            propsShow: false,
            topStatus: '',
            loading: false,
            value4: true,
            active: 'tab1',
            viewTop: 0,
            value1: true,
            page: 1,
            infiniteText: '上拉去第二页面',
            loadText: 'spinner'
        };
    },

    components: {
        'actionsheet': _actionsheet.Actionsheet,
        'm-action-item': _actionsheet.mActionItem,
        'm-swipe': _swipe.Swipe,
        'm-swipe-item': _swipe.SwipeItem,
        'm-tabs': _tab.Tabs,
        'm-tab': _tab.Tab,
        'm-tab-container': _tab.TabContents,
        'm-tab-content': _tab.TabContent,
        'm-switch': _switch2.default,
        'm-swipeout': _swipeout.Swipeout,
        'm-swipeoutItem': _swipeout.SwipeoutItem,
        'm-swipeoutButton': _swipeout.SwipeoutButton
    },
    created: function created() {},
    mounted: function mounted() {
        console.log();
    },

    methods: (_methods = {
        loadTop: function loadTop() {
            var _this = this;

            setTimeout(function (one) {
                _this.$refs.loadmore.onTopLoaded();
            }, 1500);
        },
        infinite: function infinite() {
            Toast('触发加载更多');
        },
        handleTopChange: function handleTopChange(status) {
            this.topStatus = status;
        },
        actionsheetChange: function actionsheetChange() {
            this.showActionsheet = true;
        },
        share: function share() {
            this.isShare = true;
        },
        alert: function (_alert) {
            function alert() {
                return _alert.apply(this, arguments);
            }

            alert.toString = function () {
                return _alert.toString();
            };

            return alert;
        }(function () {
            alert(11);
        }),
        checked: function checked(menu) {
            this.propsShow = false;
            this.selectValue = menu;
            this.$refs.actionsheet.propsShow = false;
            this.$refs.actionsheets.propsShow = false;
        },
        onChange: function onChange(value) {
            this.selectValue = value;
        },
        handleChange: function handleChange(event) {
            console.log(event);
        },
        handleSwitch: function handleSwitch(event) {
            console.log(event);
        },
        handleTabChange: function handleTabChange(val) {
            this.active = val;
        }
    }, (0, _defineProperty3.default)(_methods, 'handleTabChange', function handleTabChange(val) {
        this.active = val;
    }), (0, _defineProperty3.default)(_methods, 'refresh', function refresh() {
        console.log('刷新');
    }), (0, _defineProperty3.default)(_methods, 'toal', function toal(e) {
        this.viewTop = e.y;
    }), (0, _defineProperty3.default)(_methods, 'handleEvents', function handleEvents() {}), (0, _defineProperty3.default)(_methods, 'onButtonClick', function onButtonClick(type) {
        alert(type);
    }), (0, _defineProperty3.default)(_methods, 'onReset', function onReset(done) {
        var _this2 = this;

        if (this.page == 2) {
            this.page = 1;
            setTimeout(function (one) {
                _this2.$refs.scroller.refresh();
                var bottom = _this2.$refs.scroller.iscroll.maxScrollY;
                _this2.$refs.scroller.scrollTo(0, bottom, 0);
                _this2.infiniteText = '上拉去第二页';
                _this2.loadText = 'spinner';
                done();
            }, 100);
        } else if (this.page == 1) {
            done();
        }
    }), (0, _defineProperty3.default)(_methods, 'onMore', function onMore(done) {
        if (this.page == 1) {
            this.page = 2;
            this.$refs.scroller.refresh();
            this.$refs.scroller.scrollTo(0, 0, 0);
            this.infiniteText = '没有更多数据啦';
            this.loadText = 'resetText';
            done();
        } else if (this.page == 2) {
            done();
        }
    }), _methods),
    watch: {}
};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mGridItem = exports.mGrid = undefined;

var _mGrid = __webpack_require__(554);

var _mGrid2 = _interopRequireDefault(_mGrid);

var _mGridItem = __webpack_require__(555);

var _mGridItem2 = _interopRequireDefault(_mGridItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.mGrid = _mGrid2.default;
exports.mGridItem = _mGridItem2.default;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(135);

var _typeof3 = _interopRequireDefault(_typeof2);

var _timers = __webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (window, doc) {
    var m = Math,
        dummyStyle = doc.createElement('div').style,
        vendor = function () {
        var vendors = 't,webkitT,MozT,msT,OT'.split(','),
            t,
            i = 0,
            l = vendors.length;

        for (; i < l; i++) {
            t = vendors[i] + 'ransform';
            if (t in dummyStyle) {
                return vendors[i].substr(0, vendors[i].length - 1);
            }
        }

        return false;
    }(),
        cssVendor = vendor ? '-' + vendor.toLowerCase() + '-' : '',


    // Style properties
    transform = prefixStyle('transform'),
        transitionProperty = prefixStyle('transitionProperty'),
        transitionDuration = prefixStyle('transitionDuration'),
        transformOrigin = prefixStyle('transformOrigin'),
        transitionTimingFunction = prefixStyle('transitionTimingFunction'),
        transitionDelay = prefixStyle('transitionDelay'),


    // Browser capabilities
    isAndroid = /android/gi.test(navigator.appVersion),
        isIDevice = /iphone|ipad/gi.test(navigator.appVersion),
        isTouchPad = /hp-tablet/gi.test(navigator.appVersion),
        has3d = prefixStyle('perspective') in dummyStyle,
        hasTouch = 'ontouchstart' in window && !isTouchPad,
        hasTransform = vendor !== false,
        hasTransitionEnd = prefixStyle('transition') in dummyStyle,
        RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
        START_EV = hasTouch ? 'touchstart' : 'mousedown',
        MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
        END_EV = hasTouch ? 'touchend' : 'mouseup',
        CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
        TRNEND_EV = function () {
        if (vendor === false) return false;

        var transitionEnd = {
            '': 'transitionend',
            'webkit': 'webkitTransitionEnd',
            'Moz': 'transitionend',
            'O': 'otransitionend',
            'ms': 'MSTransitionEnd'
        };

        return transitionEnd[vendor];
    }(),
        nextFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            return (0, _timers.setTimeout)(callback, 1);
        };
    }(),
        cancelFrame = function () {
        return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    }(),


    // Helpers
    translateZ = has3d ? ' translateZ(0)' : '',


    // Constructor
    iScroll = function iScroll(el, options) {
        var that = this,
            i;

        that.wrapper = (typeof el === 'undefined' ? 'undefined' : (0, _typeof3.default)(el)) == 'object' ? el : doc.getElementById(el);
        that.wrapper.style.overflow = 'hidden';
        that.scroller = that.wrapper.children[0];

        // Default options
        that.options = {
            hScroll: true,
            vScroll: true,
            x: 0,
            y: 0,
            bounce: true,
            bounceLock: false,
            momentum: true,
            lockDirection: true,
            useTransform: true,
            useTransition: false,
            topOffset: 0,
            checkDOMChanges: false, // Experimental
            handleClick: true,

            // Scrollbar
            hScrollbar: true,
            vScrollbar: true,
            fixedScrollbar: isAndroid,
            hideScrollbar: isIDevice,
            fadeScrollbar: isIDevice && has3d,
            scrollbarClass: '',

            // Zoom
            zoom: false,
            zoomMin: 1,
            zoomMax: 4,
            doubleTapZoom: 2,
            wheelAction: 'scroll',

            // Snap
            snap: false,
            snapThreshold: 1,

            // Events
            onRefresh: null,
            onBeforeScrollStart: function onBeforeScrollStart(e) {
                e.preventDefault();
            },
            onScrollStart: null,
            onBeforeScrollMove: null,
            onScrollMove: null,
            onBeforeScrollEnd: null,
            onScrollEnd: null,
            onTouchEnd: null,
            onDestroy: null,
            onZoomStart: null,
            onZoom: null,
            onZoomEnd: null
        };

        // User defined options
        for (i in options) {
            that.options[i] = options[i];
        } // Set starting position
        that.x = that.options.x;
        that.y = that.options.y;

        // Normalize options
        that.options.useTransform = hasTransform && that.options.useTransform;
        that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
        that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
        that.options.zoom = that.options.useTransform && that.options.zoom;
        that.options.useTransition = hasTransitionEnd && that.options.useTransition;

        // Helpers FIX ANDROID BUG!
        // translate3d and scale doesn't work together!
        // Ignoring 3d ONLY WHEN YOU SET that.options.zoom
        if (that.options.zoom && isAndroid) {
            translateZ = '';
        }

        // Set some default styles
        that.scroller.style[transitionProperty] = that.options.useTransform ? cssVendor + 'transform' : 'top left';
        that.scroller.style[transitionDuration] = '0';
        that.scroller.style[transformOrigin] = '0 0';
        if (that.options.useTransition) that.scroller.style[transitionTimingFunction] = 'cubic-bezier(0.33,0.66,0.66,1)';

        if (that.options.useTransform) that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px)' + translateZ;else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

        if (that.options.useTransition) that.options.fixedScrollbar = true;

        that.refresh();

        that._bind(RESIZE_EV, window);
        that._bind(START_EV);
        if (!hasTouch) {
            if (that.options.wheelAction != 'none') {
                that._bind('DOMMouseScroll');
                that._bind('mousewheel');
            }
        }

        if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
            that._checkDOMChanges();
        }, 500);
    };

    // Prototype
    iScroll.prototype = {
        enabled: true,
        x: 0,
        y: 0,
        steps: [],
        scale: 1,
        currPageX: 0,
        currPageY: 0,
        pagesX: [],
        pagesY: [],
        aniTime: null,
        wheelZoomCount: 0,

        handleEvent: function handleEvent(e) {
            var that = this;
            switch (e.type) {
                case START_EV:
                    if (!hasTouch && e.button !== 0) return;
                    that._start(e);
                    break;
                case MOVE_EV:
                    that._move(e);
                    break;
                case END_EV:
                case CANCEL_EV:
                    that._end(e);
                    break;
                case RESIZE_EV:
                    that._resize();
                    break;
                case 'DOMMouseScroll':
                case 'mousewheel':
                    that._wheel(e);
                    break;
                case TRNEND_EV:
                    that._transitionEnd(e);
                    break;
            }
        },

        _checkDOMChanges: function _checkDOMChanges() {
            if (this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale) return;

            this.refresh();
        },

        _scrollbar: function _scrollbar(dir) {
            var that = this,
                bar;

            if (!that[dir + 'Scrollbar']) {
                if (that[dir + 'ScrollbarWrapper']) {
                    if (hasTransform) that[dir + 'ScrollbarIndicator'].style[transform] = '';
                    that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
                    that[dir + 'ScrollbarWrapper'] = null;
                    that[dir + 'ScrollbarIndicator'] = null;
                }

                return;
            }

            if (!that[dir + 'ScrollbarWrapper']) {
                // Create the scrollbar wrapper
                bar = doc.createElement('div');

                if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

                bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:opacity;' + cssVendor + 'transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

                that.wrapper.appendChild(bar);
                that[dir + 'ScrollbarWrapper'] = bar;

                // Create the scrollbar indicator
                bar = doc.createElement('div');
                if (!that.options.scrollbarClass) {
                    bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);' + cssVendor + 'background-clip:padding-box;' + cssVendor + 'box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';' + cssVendor + 'border-radius:3px;border-radius:3px';
                }
                bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:' + cssVendor + 'transform;' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);' + cssVendor + 'transition-duration:0;' + cssVendor + 'transform: translate(0,0)' + translateZ;
                if (that.options.useTransition) bar.style.cssText += ';' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

                that[dir + 'ScrollbarWrapper'].appendChild(bar);
                that[dir + 'ScrollbarIndicator'] = bar;
            }

            if (dir == 'h') {
                that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
                that.hScrollbarIndicatorSize = m.max(m.round(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
                that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
                that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
                that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
            } else {
                that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
                that.vScrollbarIndicatorSize = m.max(m.round(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
                that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
                that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
                that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
            }

            // Reset position
            that._scrollbarPos(dir, true);
        },

        _resize: function _resize() {
            var that = this;
            (0, _timers.setTimeout)(function () {
                that.refresh();
            }, isAndroid ? 200 : 0);
        },

        _pos: function _pos(x, y) {
            if (this.zoomed) return;

            x = this.hScroll ? x : 0;
            y = this.vScroll ? y : 0;

            if (this.options.useTransform) {
                this.scroller.style[transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ')' + translateZ;
            } else {
                x = m.round(x);
                y = m.round(y);
                this.scroller.style.left = x + 'px';
                this.scroller.style.top = y + 'px';
            }

            this.x = x;
            this.y = y;

            this._scrollbarPos('h');
            this._scrollbarPos('v');
        },

        _scrollbarPos: function _scrollbarPos(dir, hidden) {
            var that = this,
                pos = dir == 'h' ? that.x : that.y,
                size;

            if (!that[dir + 'Scrollbar']) return;

            pos = that[dir + 'ScrollbarProp'] * pos;

            if (pos < 0) {
                if (!that.options.fixedScrollbar) {
                    size = that[dir + 'ScrollbarIndicatorSize'] + m.round(pos * 3);
                    if (size < 8) size = 8;
                    that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
                }
                pos = 0;
            } else if (pos > that[dir + 'ScrollbarMaxScroll']) {
                if (!that.options.fixedScrollbar) {
                    size = that[dir + 'ScrollbarIndicatorSize'] - m.round((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
                    if (size < 8) size = 8;
                    that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
                    pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
                } else {
                    pos = that[dir + 'ScrollbarMaxScroll'];
                }
            }

            that[dir + 'ScrollbarWrapper'].style[transitionDelay] = '0';
            that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
            that[dir + 'ScrollbarIndicator'].style[transform] = 'translate(' + (dir == 'h' ? pos + 'px,0)' : '0,' + pos + 'px)') + translateZ;
        },

        _start: function _start(e) {
            // e.preventDefault();
            var that = this,
                point = hasTouch ? e.touches[0] : e,
                matrix,
                x,
                y,
                c1,
                c2;
            that.options.handleClick = false;
            if (!that.enabled) return;

            if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);

            if (that.options.useTransition || that.options.zoom) that._transitionTime(0);

            that.moved = false;
            that.animating = false;
            that.zoomed = false;
            that.distX = 0;
            that.distY = 0;
            that.absDistX = 0;
            that.absDistY = 0;
            that.dirX = 0;
            that.dirY = 0;

            // Gesture start
            if (that.options.zoom && hasTouch && e.touches.length > 1) {
                c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
                c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
                that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

                that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
                that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

                if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
            }
            if (that.options.momentum) {
                if (that.options.useTransform) {
                    // Very lame general purpose alternative to CSSMatrix
                    matrix = getComputedStyle(that.scroller, null)[transform].replace(/[^0-9\-.,]/g, '').split(',');
                    x = +(matrix[12] || matrix[4]);
                    y = +(matrix[13] || matrix[5]);
                } else {
                    x = +getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '');
                    y = +getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '');
                }

                if (x != that.x || y != that.y) {
                    if (that.options.useTransition) that._unbind(TRNEND_EV);else cancelFrame(that.aniTime);
                    that.steps = [];
                    that._pos(x, y);
                    if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);
                }
            }

            that.absStartX = that.x; // Needed by snap threshold
            that.absStartY = that.y;

            that.startX = that.x;
            that.startY = that.y;
            that.pointX = point.pageX;
            that.pointY = point.pageY;

            that.startTime = e.timeStamp || Date.now();

            if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

            that._bind(MOVE_EV, window);
            that._bind(END_EV, window);
            that._bind(CANCEL_EV, window);
        },

        _move: function _move(e) {
            var that = this,
                point = hasTouch ? e.touches[0] : e,
                deltaX = point.pageX - that.pointX,
                deltaY = point.pageY - that.pointY,
                newX = that.x + deltaX,
                newY = that.y + deltaY,
                c1,
                c2,
                scale,
                timestamp = e.timeStamp || Date.now();
            that.options.handleClick = false;
            if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

            // Zoom
            if (that.options.zoom && hasTouch && e.touches.length > 1) {
                c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
                c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
                that.touchesDist = m.sqrt(c1 * c1 + c2 * c2);

                that.zoomed = true;

                scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;

                if (scale < that.options.zoomMin) scale = 0.5 * that.options.zoomMin * Math.pow(2.0, scale / that.options.zoomMin);else if (scale > that.options.zoomMax) scale = 2.0 * that.options.zoomMax * Math.pow(0.5, that.options.zoomMax / scale);

                that.lastScale = scale / this.scale;

                newX = this.originX - this.originX * that.lastScale + this.x, newY = this.originY - this.originY * that.lastScale + this.y;

                this.scroller.style[transform] = 'translate(' + newX + 'px,' + newY + 'px) scale(' + scale + ')' + translateZ;

                if (that.options.onZoom) that.options.onZoom.call(that, e);
                return;
            }

            that.pointX = point.pageX;
            that.pointY = point.pageY;

            // Slow down if outside of the boundaries
            if (newX > 0 || newX < that.maxScrollX) {
                newX = that.options.bounce ? that.x + deltaX / 2 : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
            }
            if (newY > that.minScrollY || newY < that.maxScrollY) {
                newY = that.options.bounce ? that.y + deltaY / 2 : newY >= that.minScrollY || that.maxScrollY >= 0 ? that.minScrollY : that.maxScrollY;
            }

            that.distX += deltaX;
            that.distY += deltaY;
            that.absDistX = m.abs(that.distX);
            that.absDistY = m.abs(that.distY);

            if (that.absDistX < 6 && that.absDistY < 6) {
                return;
            }

            // Lock direction
            if (that.options.lockDirection) {
                if (that.absDistX > that.absDistY + 5) {
                    newY = that.y;
                    deltaY = 0;
                } else if (that.absDistY > that.absDistX + 5) {
                    newX = that.x;
                    deltaX = 0;
                }
            }
            that.moved = true;

            that._pos(newX, newY);
            that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
            that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

            if (timestamp - that.startTime > 300) {
                that.startTime = timestamp;
                that.startX = that.x;
                that.startY = that.y;
            }

            if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
        },

        _end: function _end(e) {
            if (hasTouch && e.touches.length !== 0) return;

            var that = this,
                point = hasTouch ? e.changedTouches[0] : e,
                target,
                ev,
                momentumX = { dist: 0, time: 0 },
                momentumY = { dist: 0, time: 0 },
                duration = (e.timeStamp || Date.now()) - that.startTime,
                newPosX = that.x,
                newPosY = that.y,
                distX,
                distY,
                newDuration,
                snap,
                scale;

            that._unbind(MOVE_EV, window);
            that._unbind(END_EV, window);
            that._unbind(CANCEL_EV, window);

            if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

            if (that.zoomed) {
                scale = that.scale * that.lastScale;
                scale = Math.max(that.options.zoomMin, scale);
                scale = Math.min(that.options.zoomMax, scale);
                that.lastScale = scale / that.scale;
                that.scale = scale;

                that.x = that.originX - that.originX * that.lastScale + that.x;
                that.y = that.originY - that.originY * that.lastScale + that.y;

                that.scroller.style[transitionDuration] = '200ms';
                that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + that.scale + ')' + translateZ;

                that.zoomed = false;
                that.refresh();

                if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
                return;
            }
            if (!that.moved) {
                that.options.handleClick = true;
                if (hasTouch) {
                    if (that.doubleTapTimer && that.options.zoom) {
                        // Double tapped
                        clearTimeout(that.doubleTapTimer);
                        that.doubleTapTimer = null;
                        if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
                        that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
                        if (that.options.onZoomEnd) {
                            (0, _timers.setTimeout)(function () {
                                that.options.onZoomEnd.call(that, e);
                            }, 200); // 200 is default zoom duration
                        }
                    } else if (this.options.handleClick) {
                        that.doubleTapTimer = (0, _timers.setTimeout)(function () {
                            that.doubleTapTimer = null;

                            // Find the last touched element
                            target = point.target;
                            while (target.nodeType != 1) {
                                target = target.parentNode;
                            }if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
                                ev = doc.createEvent('MouseEvents');
                                ev.initMouseEvent('click', true, true, e.view, 1, point.screenX, point.screenY, point.clientX, point.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                                ev._fake = true;
                                target.dispatchEvent(ev);
                            }
                        }, that.options.zoom ? 250 : 0);
                    }
                }

                that._resetPos(400);

                if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
                return;
            }

            if (duration < 300 && that.options.momentum) {
                momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
                momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y - that.minScrollY : 0, that.options.bounce ? that.wrapperH : 0) : momentumY;

                newPosX = that.x + momentumX.dist;
                newPosY = that.y + momentumY.dist;

                if (that.x > 0 && newPosX > 0 || that.x < that.maxScrollX && newPosX < that.maxScrollX) momentumX = { dist: 0, time: 0 };
                if (that.y > that.minScrollY && newPosY > that.minScrollY || that.y < that.maxScrollY && newPosY < that.maxScrollY) momentumY = { dist: 0, time: 0 };
            }

            if (momentumX.dist || momentumY.dist) {
                newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

                // Do we need to snap?
                if (that.options.snap) {
                    distX = newPosX - that.absStartX;
                    distY = newPosY - that.absStartY;
                    if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) {
                        that.scrollTo(that.absStartX, that.absStartY, 200);
                    } else {
                        snap = that._snap(newPosX, newPosY);
                        newPosX = snap.x;
                        newPosY = snap.y;
                        newDuration = m.max(snap.time, newDuration);
                    }
                }

                that.scrollTo(m.round(newPosX), m.round(newPosY), newDuration);

                if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
                return;
            }

            // Do we need to snap?
            if (that.options.snap) {
                distX = newPosX - that.absStartX;
                distY = newPosY - that.absStartY;
                if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);else {
                    snap = that._snap(that.x, that.y);
                    if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
                }

                if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
                return;
            }

            that._resetPos(200);
            if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
        },

        _resetPos: function _resetPos(time) {
            var that = this,
                resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
                resetY = that.y >= that.minScrollY || that.maxScrollY > 0 ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;
            if (resetX == that.x && resetY == that.y) {
                if (that.moved) {
                    (0, _timers.setTimeout)(function () {
                        that.moved = false;
                        if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);
                    }, 2000);
                    // ;
                    // Execute custom code on scroll end
                }
                if (that.hScrollbar && that.options.hideScrollbar) {
                    if (vendor == 'webkit') that.hScrollbarWrapper.style[transitionDelay] = '300ms';
                    that.hScrollbarWrapper.style.opacity = '0';
                }
                if (that.vScrollbar && that.options.hideScrollbar) {
                    if (vendor == 'webkit') that.vScrollbarWrapper.style[transitionDelay] = '300ms';
                    that.vScrollbarWrapper.style.opacity = '0';
                }

                return;
            }

            that.scrollTo(resetX, resetY, time || 0);
        },

        _wheel: function _wheel(e) {
            var that = this,
                wheelDeltaX,
                wheelDeltaY,
                deltaX,
                deltaY,
                deltaScale;

            if ('wheelDeltaX' in e) {
                wheelDeltaX = e.wheelDeltaX / 12;
                wheelDeltaY = e.wheelDeltaY / 12;
            } else if ('wheelDelta' in e) {
                wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
            } else if ('detail' in e) {
                wheelDeltaX = wheelDeltaY = -e.detail * 3;
            } else {
                return;
            }

            if (that.options.wheelAction == 'zoom') {
                deltaScale = that.scale * Math.pow(2, 1 / 3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
                if (deltaScale < that.options.zoomMin) deltaScale = that.options.zoomMin;
                if (deltaScale > that.options.zoomMax) deltaScale = that.options.zoomMax;

                if (deltaScale != that.scale) {
                    if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
                    that.wheelZoomCount++;

                    that.zoom(e.pageX, e.pageY, deltaScale, 400);

                    (0, _timers.setTimeout)(function () {
                        that.wheelZoomCount--;
                        if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
                    }, 400);
                }

                return;
            }

            deltaX = that.x + wheelDeltaX;
            deltaY = that.y + wheelDeltaY;

            if (deltaX > 0) deltaX = 0;else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;

            if (deltaY > that.minScrollY) deltaY = that.minScrollY;else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;

            if (that.maxScrollY < 0) {
                that.scrollTo(deltaX, deltaY, 0);
            }
        },

        _transitionEnd: function _transitionEnd(e) {
            var that = this;
            if (e.target != that.scroller) return;

            that._unbind(TRNEND_EV);

            that._startAni();
        },

        /**
         *
         * Utilities
         *
         */
        _startAni: function _startAni() {
            var that = this,
                startX = that.x,
                startY = that.y,
                startTime = Date.now(),
                step,
                easeOut,
                _animate;

            if (that.animating) return;

            if (!that.steps.length) {
                that._resetPos(400);
                return;
            }

            step = that.steps.shift();

            if (step.x == startX && step.y == startY) step.time = 0;

            that.animating = true;
            that.moved = true;

            if (that.options.useTransition) {
                that._transitionTime(step.time);
                that._pos(step.x, step.y);
                that.animating = false;
                if (step.time) that._bind(TRNEND_EV);else that._resetPos(0);
                return;
            }

            _animate = function animate() {
                var now = Date.now(),
                    newX,
                    newY;

                if (now >= startTime + step.time) {
                    that._pos(step.x, step.y);
                    that.animating = false;
                    if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that); // Execute custom code on animation end
                    that._startAni();
                    return;
                }

                now = (now - startTime) / step.time - 1;
                easeOut = m.sqrt(1 - now * now);
                newX = (step.x - startX) * easeOut + startX;
                newY = (step.y - startY) * easeOut + startY;
                that._pos(newX, newY);
                if (that.animating) that.aniTime = nextFrame(_animate);
            };

            _animate();
        },

        _transitionTime: function _transitionTime(time) {
            time += 'ms';
            this.scroller.style[transitionDuration] = time;
            if (this.hScrollbar) this.hScrollbarIndicator.style[transitionDuration] = time;
            if (this.vScrollbar) this.vScrollbarIndicator.style[transitionDuration] = time;
        },
        _momentum: function _momentum(dist, time, maxDistUpper, maxDistLower, size) {
            var deceleration = 0.001,
                speed = m.abs(dist) / time,
                newDist = speed * speed / (2 * deceleration),
                newTime = 0,
                outsideDist = 0;
            // Proportinally reduce speed if we are outside of the boundaries
            if (dist > 0 && newDist > maxDistUpper) {
                outsideDist = size / (6 / (newDist / speed * deceleration));
                maxDistUpper = maxDistUpper + outsideDist;
                speed = speed * maxDistUpper / newDist;
                newDist = maxDistUpper;
            } else if (dist < 0 && newDist > maxDistLower) {
                outsideDist = size / (6 / (newDist / speed * deceleration));
                maxDistLower = maxDistLower + outsideDist;
                speed = speed * maxDistLower / newDist;
                newDist = maxDistLower;
            }
            newDist = newDist * (dist < 0 ? -1 : 1);
            newTime = speed / deceleration;
            return { dist: newDist, time: m.round(newTime) };
        },

        _offset: function _offset(el) {
            var left = -el.offsetLeft,
                top = -el.offsetTop;

            while (el = el.offsetParent) {
                left -= el.offsetLeft;
                top -= el.offsetTop;
            }

            if (el != this.wrapper) {
                left *= this.scale;
                top *= this.scale;
            }

            return { left: left, top: top };
        },

        _snap: function _snap(x, y) {
            var that = this,
                i,
                l,
                page,
                time,
                sizeX,
                sizeY;

            // Check page X
            page = that.pagesX.length - 1;
            for (i = 0, l = that.pagesX.length; i < l; i++) {
                if (x >= that.pagesX[i]) {
                    page = i;
                    break;
                }
            }
            if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
            x = that.pagesX[page];
            sizeX = m.abs(x - that.pagesX[that.currPageX]);
            sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
            that.currPageX = page;

            // Check page Y
            page = that.pagesY.length - 1;
            for (i = 0; i < page; i++) {
                if (y >= that.pagesY[i]) {
                    page = i;
                    break;
                }
            }
            if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
            y = that.pagesY[page];
            sizeY = m.abs(y - that.pagesY[that.currPageY]);
            sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
            that.currPageY = page;

            // Snap with constant speed (proportional duration)
            time = m.round(m.max(sizeX, sizeY)) || 200;

            return { x: x, y: y, time: time };
        },

        _bind: function _bind(type, el, bubble) {
            (el || this.scroller).addEventListener(type, this, !!bubble);
        },

        _unbind: function _unbind(type, el, bubble) {
            (el || this.scroller).removeEventListener(type, this, !!bubble);
        },

        /**
         *
         * Public methods
         *
         */
        destroy: function destroy() {
            var that = this;

            that.scroller.style[transform] = '';

            // Remove the scrollbars
            that.hScrollbar = false;
            that.vScrollbar = false;
            that._scrollbar('h');
            that._scrollbar('v');

            // Remove the event listeners
            that._unbind(RESIZE_EV, window);
            that._unbind(START_EV);
            that._unbind(MOVE_EV, window);
            that._unbind(END_EV, window);
            that._unbind(CANCEL_EV, window);

            if (!that.options.hasTouch) {
                that._unbind('DOMMouseScroll');
                that._unbind('mousewheel');
            }

            if (that.options.useTransition) that._unbind(TRNEND_EV);

            if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);

            if (that.options.onDestroy) that.options.onDestroy.call(that);
        },

        refresh: function refresh() {
            var that = this,
                offset,
                i,
                l,
                els,
                pos = 0,
                page = 0;

            if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
            that.wrapperW = that.wrapper.clientWidth || 1;
            that.wrapperH = that.wrapper.clientHeight || 1;

            that.minScrollY = -that.options.topOffset || 0;
            that.scrollerW = m.round(that.scroller.offsetWidth * that.scale);
            that.scrollerH = m.round((that.scroller.offsetHeight + that.minScrollY) * that.scale);
            that.maxScrollX = that.wrapperW - that.scrollerW;
            that.maxScrollY = that.wrapperH - that.scrollerH + that.minScrollY;
            that.dirX = 0;
            that.dirY = 0;

            if (that.options.onRefresh) that.options.onRefresh.call(that);

            that.hScroll = that.options.hScroll && that.maxScrollX < 0;
            that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

            that.hScrollbar = that.hScroll && that.options.hScrollbar;
            that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;

            offset = that._offset(that.wrapper);
            that.wrapperOffsetLeft = -offset.left;
            that.wrapperOffsetTop = -offset.top;

            // Prepare snap
            if (typeof that.options.snap == 'string') {
                that.pagesX = [];
                that.pagesY = [];
                els = that.scroller.querySelectorAll(that.options.snap);
                for (i = 0, l = els.length; i < l; i++) {
                    pos = that._offset(els[i]);
                    pos.left += that.wrapperOffsetLeft;
                    pos.top += that.wrapperOffsetTop;
                    that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
                    that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
                }
            } else if (that.options.snap) {
                that.pagesX = [];
                while (pos >= that.maxScrollX) {
                    that.pagesX[page] = pos;
                    pos = pos - that.wrapperW;
                    page++;
                }
                if (that.maxScrollX % that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length - 1] + that.pagesX[that.pagesX.length - 1];

                pos = 0;
                page = 0;
                that.pagesY = [];
                while (pos >= that.maxScrollY) {
                    that.pagesY[page] = pos;
                    pos = pos - that.wrapperH;
                    page++;
                }
                if (that.maxScrollY % that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length - 1] + that.pagesY[that.pagesY.length - 1];
            }

            // Prepare the scrollbars
            that._scrollbar('h');
            that._scrollbar('v');

            if (!that.zoomed) {
                that.scroller.style[transitionDuration] = '0';
                that._resetPos(400);
            }
        },

        scrollTo: function scrollTo(x, y, time, relative) {
            var that = this,
                step = x,
                i,
                l;

            that.stop();

            if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];

            for (i = 0, l = step.length; i < l; i++) {
                if (step[i].relative) {
                    step[i].x = that.x - step[i].x;
                    step[i].y = that.y - step[i].y;
                }
                that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
            }

            that._startAni();
        },

        scrollToElement: function scrollToElement(el, time) {
            var that = this,
                pos;
            el = el.nodeType ? el : that.scroller.querySelector(el);
            if (!el) return;

            pos = that._offset(el);
            pos.left += that.wrapperOffsetLeft;
            pos.top += that.wrapperOffsetTop;

            pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
            pos.top = pos.top > that.minScrollY ? that.minScrollY : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
            time = time === undefined ? m.max(m.abs(pos.left) * 2, m.abs(pos.top) * 2) : time;

            that.scrollTo(pos.left, pos.top, time);
        },

        scrollToPage: function scrollToPage(pageX, pageY, time) {
            var that = this,
                x,
                y;

            time = time === undefined ? 400 : time;

            if (that.options.onScrollStart) that.options.onScrollStart.call(that);

            if (that.options.snap) {
                pageX = pageX == 'next' ? that.currPageX + 1 : pageX == 'prev' ? that.currPageX - 1 : pageX;
                pageY = pageY == 'next' ? that.currPageY + 1 : pageY == 'prev' ? that.currPageY - 1 : pageY;

                pageX = pageX < 0 ? 0 : pageX > that.pagesX.length - 1 ? that.pagesX.length - 1 : pageX;
                pageY = pageY < 0 ? 0 : pageY > that.pagesY.length - 1 ? that.pagesY.length - 1 : pageY;

                that.currPageX = pageX;
                that.currPageY = pageY;
                x = that.pagesX[pageX];
                y = that.pagesY[pageY];
            } else {
                x = -that.wrapperW * pageX;
                y = -that.wrapperH * pageY;
                if (x < that.maxScrollX) x = that.maxScrollX;
                if (y < that.maxScrollY) y = that.maxScrollY;
            }

            that.scrollTo(x, y, time);
        },

        disable: function disable() {
            this.stop();
            this._resetPos(0);
            this.enabled = false;

            // If disabled after touchstart we make sure that there are no left over events
            this._unbind(MOVE_EV, window);
            this._unbind(END_EV, window);
            this._unbind(CANCEL_EV, window);
        },

        enable: function enable() {
            this.enabled = true;
        },

        stop: function stop() {
            if (this.options.useTransition) this._unbind(TRNEND_EV);else cancelFrame(this.aniTime);
            this.steps = [];
            this.moved = false;
            this.animating = false;
        },

        zoom: function zoom(x, y, scale, time) {
            var that = this,
                relScale = scale / that.scale;

            if (!that.options.useTransform) return;

            that.zoomed = true;
            time = time === undefined ? 200 : time;
            x = x - that.wrapperOffsetLeft - that.x;
            y = y - that.wrapperOffsetTop - that.y;
            that.x = x - x * relScale + that.x;
            that.y = y - y * relScale + that.y;

            that.scale = scale;
            that.refresh();

            that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
            that.y = that.y > that.minScrollY ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

            that.scroller.style[transitionDuration] = time + 'ms';
            that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + scale + ')' + translateZ;
            that.zoomed = false;
        },

        isReady: function isReady() {
            return !this.moved && !this.zoomed && !this.animating;
        }
    };

    function prefixStyle(style) {
        if (vendor === '') return style;

        style = style.charAt(0).toUpperCase() + style.substr(1);
        return vendor + style;
    }

    dummyStyle = null; // for the sake of it

    if (true) exports.iScroll = iScroll;else window.iScroll = iScroll;
})(window, document); /*!
                       * iScroll v4.2.5 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
                       * Released under MIT license, http://cubiq.org/license
                       */

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = exports.once = exports.off = exports.on = undefined;

var _typeof2 = __webpack_require__(135);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.setStyle = setStyle;

var _vue = __webpack_require__(60);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer; /* istanbul ignore next */

var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = exports.on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = exports.off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var once = exports.once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/* istanbul ignore next */
var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : (0, _typeof3.default)(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = __webpack_require__(565);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_switch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(68);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {};
    },

    methods: {
        back: function back() {
            this.$router.back();
        },
        jumpN: function jumpN(url) {
            console.log(url);
            if (!window.cordova) return;
            cordova.exec(function () {}, function () {}, 'nativeJs', 'jump', [{ url: url }]);
        },
        closeN: function closeN() {
            if (!window.cordova) return;
            cordova.exec(function () {}, function () {}, 'nativeJs', 'view', [{ name: 'close' }]);
        },
        goLogin: function goLogin() {
            if (!window.cordova) return;
            cordova.exec(function () {}, function () {}, 'nativeJs', 'view', [{ name: 'goLogin' }]);
        },
        copyN: function copyN(str) {
            return new _promise2.default(function (resolve, reject) {
                if (!window.cordova) {
                    return reject();
                }
                cordova.exec(resolve, reject, 'nativeJs', 'copy', [str]);
            });
        },
        goHomeN: function goHomeN() {
            return new _promise2.default(function (resolve, reject) {
                if (!window.cordova) {
                    return reject();
                }
                cordova.exec(resolve, reject, 'nativeJs', 'goHome', []);
            });
        },
        defBackgorund: function defBackgorund(index) {
            var Arr = ['rgb(248,243,235)', 'rgb(227,208,205)', 'rgb(212,220,217)', 'rgb(232,212,209)', 'rgb(233,230,210)', 'rgb(211,210,219)'];
            if (index) {
                var indexNow = (index + 1) % Arr.length;
            } else {
                var indexNow = Math.floor(Math.random() * Arr.length);
            }
            return Arr[indexNow];
        },
        payN: function payN(_ref) {
            var type = _ref.type,
                data = _ref.data;

            return new _promise2.default(function (resolve, reject) {
                if (!window.cordova) {
                    return reject();
                }
                cordova.exec(resolve, reject, 'nativeJs', 'pay', [{ type: type, data: data }]);
            });
        },
        shareN: function shareN(shares) {
            return new _promise2.default(function (resolve, reject) {
                if (!window.cordova) {
                    return reject();
                }
                cordova.exec(resolve, reject, 'nativeJs', 'share', [shares]);
            });
        },
        isNotNull: function isNotNull(val) {
            return val !== undefined && val !== null;
        },
        prviewImage: function prviewImage(e) {
            return new _promise2.default(function (resolve, reject) {
                var file = e.target.files[0];
                var size = (file.size / 1024 / 1024).toFixed(2);
                if (!/image\/\w+/.test(file.type)) {
                    return reject('请选择图片文件');
                }
                if (size > 4) {
                    return reject('文件过大,不超过4MB');
                };
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    return resolve(this.result);
                };
            });
        },
        setStorage: function setStorage(key, model) {
            return new _promise2.default(function (resolve, reject) {

                if (!model || !(model instanceof Array)) return reject();

                model = (0, _stringify2.default)(model);

                localStorage.setItem(key, model);

                resolve();
            });
        },
        getStorage: function getStorage(key) {
            return new _promise2.default(function (resolve, reject) {

                var json = localStorage.getItem(key);

                if (!json) {

                    return reject();
                }

                resolve(JSON.parse(json));
            });
        }
    }
};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var activity = {
    getActivityDetail: function getActivityDetail(id) {
        return _http2.default.get('/Js/v7/Activity/ActivityDetails?id=' + id);
    },
    getSignDetails: function getSignDetails(id) {
        return _http2.default.get('/Js/v7/Activity/SignDetails?id=' + id);
    },
    myList: function myList(filters) {
        return _http2.default.get('/Js/v7/Activity/MyActivity', { params: filters });
    },

    list: function list(filters) {
        return _http2.default.get('/js/V7/Activity/GetActivity', { params: filters });
    },
    sign: function sign(id, phone) {
        return _http2.default.post('/js/V7/Activity/Sign', { activityId: id, userPhone: phone });
    },
    complaint: function complaint(type, content, objId, name, contact) {
        return _http2.default.post('/js/V7/Suggest/UserSuggest', { type: type, content: content, objId: objId, name: name, contact: contact });
    },
    areaList: function areaList() {
        return _http2.default.get('/JS/v7/area/getlist');
    },
    projectList: function projectList() {
        return _http2.default.get('/JS/v7/project/getlist');
    }
};
exports.default = activity;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var advertisement = {
    //术后恢复手册
    handbook: function handbook() {
        return _http2.default.get('/js/v7/Knowledge/GetOperationRecoveryManual');
    },

    /**
     * 广告详情
     * @param {*} id 
     */
    getDetail: function getDetail(id) {
        return _http2.default.get('js/v7/Advertisement/detail?id=' + id);
    }
};
exports.default = advertisement;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var custom = {
    getAdviser: function getAdviser() {
        return _http2.default.get('/Js/v7/UserCustomization/GetAdviserList');
    },
    getTarget: function getTarget(filters) {
        return _http2.default.get('Js/v7/UserCustomization/GetTemplate');
    },
    getProject: function getProject(id) {
        return _http2.default.get('Js/v7/UserCustomization/GetProjectByTemplateId?id=' + id);
    },
    getArea: function getArea() {
        return _http2.default.get('Js/v7/UserCustomization/GetData');
    },
    confirm: function confirm(model) {
        return _http2.default.post('Js/v7/UserCustomization/Save', model);
    },
    'getOne_project': function getOne_project() {
        return _http2.default.get('Js/v7/UserCustomization/GetLevelOneProject');
    },
    'getTwo_project': function getTwo_project(id) {
        return _http2.default.get('Js/v7/UserCustomization/GetProjectById?id=' + id);
    },
    getUserCustomzation: function getUserCustomzation(id) {
        return _http2.default.get('Js/v7/UserCustomization/GetUserCustomzationById?id=' + id);
    },
    getSuccess: function getSuccess(id) {
        return _http2.default.get('Js/v7/UserCustomization/GetProductByUserCustomId?id=' + id);
    }
};
exports.default = custom;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doctor = {
   get: function get(id) {
      return _http2.default.get('/js/v7/doctor/getdoctor?id=' + id);
   },
   prodList: function prodList(filters) {
      return _http2.default.get('/js/v7/doctor/getdoctorproducts', { params: filters });
   },
   diaryList: function diaryList(filters) {
      return _http2.default.get('/js/v7/doctor/getdoctordiaries', { params: filters });
   },
   otherList: function otherList(filters) {
      return _http2.default.get('/js/v7/Doctor/GetDoctorByAreaId', { params: filters });
   },
   docProject: function docProject(id) {
      return _http2.default.get('/js/v7/doctor/GetDoctorProjects?doctorId=' + id);
   },
   diary: function diary(filters) {
      return _http2.default.get('/js/v7/doctor/getdoctordiaries', { params: filters });
   }
};
exports.default = doctor;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hospital = {
    get: function get(id) {
        return _http2.default.get('/js/v7/hospital/gethospital?id=' + id);
    },
    getOther: function getOther(filters) {
        return _http2.default.get('/Js/v7/Hospital/GetHospitalByAreaId', { params: filters });
    }
};

exports.default = hospital;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instalment = {
    /**
     * 获取分期列表
     * @param {*}
     */
    getList: function getList(id) {
        return _http2.default.get('/Js/v7/xyqb/GetInstalmentsType');
    },

    /**
     * 花呗分期
     */
    getHb: function getHb(id) {
        return _http2.default.get('/Js/v7/Xyqb/GetHuaBeiFqNum?id=' + id);
    },

    /**
     *尾款分期
     *param modle
     */
    getRetainage: function getRetainage(modle) {
        return _http2.default.post('/Js/v7/Xyqb/PayXyqb', modle);
    }
};
exports.default = instalment;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var order = {
    getOrders: function getOrders(filters) {
        //获取购物车
        return _http2.default.get('js/v7/EcOrder/MyOrder', { params: filters });
    },
    getOrderDetail: function getOrderDetail(filters) {
        return _http2.default.get('js/v7/ecorder/Detail', { params: filters });
    },
    creatComment: function creatComment(modle) {
        return _http2.default.post('/js/v7/appraise/create', modle);
    },
    viewComment: function viewComment(id) {
        return _http2.default.get('/js/v7/appraise/GetAppraise?orderId=' + id);
    },
    deleOrder: function deleOrder(id) {
        return _http2.default.post('/js/v7/ecorder/Delete', { paymentId: '' + id });
    },
    OrderNewList: function OrderNewList(filters) {
        return _http2.default.get('/js/v7/EcOrder/MyOrderForNew', { params: filters });
    },
    OrderNewDetail: function OrderNewDetail(filters) {
        return _http2.default.get('/js/v7/ecorder/DetailForNew', { params: filters });
    },
    OrderserviceCard: function OrderserviceCard(model) {
        return _http2.default.get('/js/v7/EcOrder/GetSecurityCard', { params: model });
    },
    detailCrmForNew: function detailCrmForNew(filters) {
        return _http2.default.get('/js/v7/EcOrder/DetailCrmForNew', { params: filters });
    },
    hideOrder: function hideOrder(modle) {
        return _http2.default.post('/js/v7/ecorder/CrmOrderDelete', modle);
    }
};
exports.default = order;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(68);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prod = {
    getCarts: function getCarts() {
        //获取购物车
        return _http2.default.get('JS/v7/ShoppingCart/MyShopCart');
    },
    deleteCart: function deleteCart(id) {
        //删除商品
        return _http2.default.get('JS/v7/ShoppingCart/Del?id=' + id);
    },
    deleteShelfGoods: function deleteShelfGoods() {
        //删除下架商品
        return _http2.default.get('JS/v7/ShoppingCart/ReMoveOffline');
    },
    getDetails: function getDetails(id) {
        //获取商品详情
        return _http2.default.get('/js/v7/product/detail?id=' + id);
    },
    getCard: function getCard(id) {
        //获取商品对应卡券
        return _http2.default.get('/js/v7/Coupon/GetHospitalCouponsByHospitalId?id=' + id);
    },
    postCarts: function postCarts(model) {
        //加入购物车
        return _http2.default.post('/JS/v7/ShoppingCart/Add', model);
    },
    postCard: function postCard(model) {
        //商品详情领取医院卡券
        return _http2.default.post('/js/v7/Coupon/ReceiveCoupon', model);
    },
    getComment: function getComment(id) {
        //获取商品对应评论
        return _http2.default.get('/js/v7/Product/GetProductAppraise?productid=' + id);
    },
    getDiary: function getDiary(filters) {
        return _http2.default.get('/js/v7/product/GetProductDiary', { params: filters });
    },
    postConfirm: function postConfirm(model) {
        //确认订单
        return _http2.default.post('js/v7/EcOrder/ConfirmOrder', model);
    },
    generateOrder: function generateOrder(model) {
        //生成订单
        return _http2.default.post('js/v7/EcOrder/CreateOrder', model);
    },
    payMoney: function payMoney(model) {
        //支付
        return _http2.default.post('js/v7/EcOrder/GetPaymentMessage', model);
    },
    paySuccess: function paySuccess(id) {
        //支付成功后获取订单信息
        return _http2.default.get('js/v7/EcOrder/GetOrderMessage?paymentId=' + id);
    },
    myCoupon: function myCoupon(model) {
        //获取我的优惠券
        return _http2.default.post('/js/v7/Coupon/SelectCoupon', model);
    },
    preSetOrder: function preSetOrder(model) {
        return new _promise2.default(function (resolve, reject) {

            if (!model || !(model instanceof Array)) return reject();

            model = (0, _stringify2.default)(model);

            localStorage.setItem("pre-orders", model);
            resolve();
        });
    },
    preGetOrder: function preGetOrder() {
        return new _promise2.default(function (resolve, reject) {

            var json = localStorage.getItem("pre-orders");
            // localStorage.removeItem("pre-orders");
            if (!json) return reject();
            resolve(JSON.parse(json));
        });
    },
    changeNumber: function changeNumber(model) {
        //更改购物车数量
        return _http2.default.post('JS/v7/ShoppingCart/ModNumber', model);
    }
};
exports.default = prod;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

var _axios = __webpack_require__(145);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var qiniu = {
    getToken: function getToken() {
        return _http2.default.get('http://api.meb.com/app/v5/home/getqiniutoken?' + (Date.now() + Math.random(99)));
    },
    upload: function upload(model) {
        return _axios2.default.post('https://up.qbox.me', model, { headers: { 'Content-Types': 'multipart/form-data' } });
    }
};
exports.default = qiniu;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refund = {
    getRefund: function getRefund(model) {
        //订单退款
        return _http2.default.post('/js/v7/EcOrder/Refund', model);
    }
};
exports.default = refund;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = {
    /**
    * 下拉联想
    * keyword 关键字
    * Size 返回条数(取值范围1-10，也就是最多返回10条记录，该字段可不传则默认10条)
    */
    suggestion: function suggestion(queryFilters) {
        return _http2.default.get('js/v7/search/Suggestion', { params: queryFilters });
    },


    /**
    * 综合搜索
    */
    query: function query(queryFilters) {
        return _http2.default.get('js/v7/search/SearchAll', { params: queryFilters });
    },


    /**
     * 搜索热词
     */
    hots: function hots() {
        return _http2.default.get('js/v7/search/HotKeywords');
    },

    /**
     * 获取地区
     */
    areas: function areas() {
        return _http2.default.get('js/v7/area/getlist');
    },

    /**
     * 获取项目
     */
    projects: function projects() {
        return _http2.default.get('js/v7/project/getlist');
    },

    /**
     * 搜索商品 
     */
    prod: function prod(queryFilters) {
        return _http2.default.get('js/v7/search/ProductSearch', { params: queryFilters });
    },

    /**
     * 搜索医院 
     */
    hospital: function hospital(queryFilters) {
        return _http2.default.get('Js/v7/search/HospitalSearch', { params: queryFilters });
    },

    /**
     * 搜索医生
     */
    doctor: function doctor(queryFilters) {
        return _http2.default.get('Js/v7/search/DoctorSearch', { params: queryFilters });
    },

    /**
     * 搜索日记
     */
    diary: function diary(queryFilters) {
        return _http2.default.get('Js/v7/search/DiarySearch', { params: queryFilters });
    },

    /**
     * 搜索知识
     */
    article: function article(queryFilters) {
        return _http2.default.get('Js/v7/search/ArticleSearch', { params: queryFilters });
    },

    /**
     * 搜索用户
     */
    users: function users(queryFilters) {
        return _http2.default.get('Js/v7/search/UserSearch', { params: queryFilters });
    },

    /**
     * 搜索标签
     */
    tags: function tags(queryFilters) {
        return _http2.default.get('Js/v7/search/TagSearch', { params: queryFilters });
    },

    /**
     * 关注
     */
    follow: function follow(queryFilters) {
        return _http2.default.post('Js/v7/user/clickfollow', queryFilters);
    }
};

exports.default = search;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sign = {
    /**
     * 获取用户抽奖次数和中奖列表
     * @param {*}
     */
    getInfoList: function getInfoList(id) {
        // return http.get(`js/v7/Prize/GetUserSignPrize`,{headers:{sign:`${id}`}});
        return _http2.default.get('js/v7/Prize/GetUserSignPrize');
    },

    /**
     * 抽奖
     * @param {*} type
     */
    getDraw: function getDraw(type) {
        return _http2.default.post('js/v7/Prize/Lottery', { type: '' + type });
    },

    /**
     * 填写中奖信息(实物奖品)
     * @param {*} model
     */
    getFill: function getFill(model) {
        return _http2.default.post('js/v7/Prize/FillInInformation', model);
    }
};
exports.default = sign;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    get: function get(queryFilters) {
        return _http2.default.get('/js/v7/Item/SetItem', { params: queryFilters });
    }
};

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by meb on 2017/7/11.
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subject = {
    get: function get(filters) {
        return _http2.default.get('/js/v7/Special/Detail', { params: filters });
    },
    list: function list(filters) {
        return _http2.default.get('/js/v7/Special/DetailProducts', { params: filters });
    }
};

exports.default = subject;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themes = {
    get: function get(id) {
        return _http2.default.get('/api/v1/themes/' + id);
    },

    update: function update(id, model) {
        return _http2.default.put('/api/v1/themes/' + id, model);
    },
    list: function list(filters) {
        return _http2.default.get('/api/v1/themes/list', { params: filters });
    }
};

exports.default = themes;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
    follow: function follow(model) {
        //关注
        return _http2.default.post('Js/v7/user/clickfollow', model);
    },
    likes: function likes(model) {
        return _http2.default.post('Js/v7/user/clicklike', model);
    }
}; // 用户相关操作 关注用户 点赞用户帖子
exports.default = user;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(11);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wiki = {
    /**
     * 获取商品聚合/百科详情
     * @param {*} id 
     */
    getWikiDetail: function getWikiDetail(filters) {
        //return http.get(`Js/v6/wiki/details?id=${filters.id}&projectId=${filters.projectId}&areaId=${filters.areaId}`);
        return _http2.default.get('Js/v7/Advertisement/ProductAdvertsementDetail?id=' + filters.id);
    },
    getProduct: function getProduct(filters) {
        return _http2.default.get('Js/v7/Advertisement/GetAdvertisementProductsPage', { params: filters });
    }
};
exports.default = wiki;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _list = __webpack_require__(570);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import index from '../views/index';

//subject
// import subject from '../views/subject/index';

var index = function index(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(619));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
//subject
// const dev = q => require.ensure([], () => q(require('../views/dev')), 'bundle');


// example
var subject = function subject(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(653));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

//activity
var activityIndex = function activityIndex(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(601));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var activityList = function activityList(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(602));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var activityDetail = function activityDetail(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(600));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var activitySign = function activitySign(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(603));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var activityComplaint = function activityComplaint(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(599));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/* 
 ***************电商项目页面***************
 */
// product
var prodDetails = function prodDetails(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(638));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var prodCarts = function prodCarts(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(637));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
// const prodCoupon = q => require.ensure([], () => q(require('../views/prod/coupon')), 'bundle');
var prodNotice = function prodNotice(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(639));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
// order
var orderMaster = function orderMaster(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(629));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var orderAll = function orderAll(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(621));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var orderWaitPay = function orderWaitPay(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(634));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var orderWaitCharge = function orderWaitCharge(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(633));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var orderAlreadyConsumed = function orderAlreadyConsumed(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(622));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var orderRefund = function orderRefund(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(631));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var orderCreate = function orderCreate(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(625));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var orderDetails = function orderDetails(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(627));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var orderPay = function orderPay(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(630));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var paySuccess = function paySuccess(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(632));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var payfail = function payfail(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(628));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var orderComment = function orderComment(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(624));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var alredyComment = function alredyComment(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(623));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
//refund
var refund = function refund(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(640));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
    搜索
=========*/
var search = function search(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(645));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var searchMaster = function searchMaster(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(647));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var searchAll = function searchAll(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(641));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var searcDiary = function searcDiary(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(642));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var searcDoctor = function searcDoctor(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(643));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var searcHospital = function searcHospital(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(644));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var searcKnow = function searcKnow(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(646));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var searcPord = function searcPord(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(648));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var searcTag = function searcTag(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(649));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var searcUser = function searcUser(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(650));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
    定制
=========*/
var schemeIndex = function schemeIndex(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(608));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var schemeGroup = function schemeGroup(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(607));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var schemeItem = function schemeItem(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(610));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var schemeItemAll = function schemeItemAll(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(611));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var schemeInfo = function schemeInfo(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(609));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var schemeTel = function schemeTel(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(613));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var schemeAdviser = function schemeAdviser(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(605));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var schemeDetails = function schemeDetails(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(606));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var schemeSuccess = function schemeSuccess(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(612));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
    签到
=========*/
var sign = function sign(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(652));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
    商品聚合
=========*/
var wikiDetail = function wikiDetail(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(654));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
    积分规则、用户协议
=========*/
var pointRule = function pointRule(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(636));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var agreement = function agreement(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(635));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
    广告详情
=========*/
var advDetail = function advDetail(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(604));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
    分期
=========*/
var stages = function stages(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(620));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
   医院详情
=========*/
var hosptailDetail = function hosptailDetail(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(618));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
   医生详情
=========*/
var doctorDetail = function doctorDetail(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(614));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var doctorProd = function doctorProd(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(616));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var doctorDiary = function doctorDiary(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(615));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
   售后服务卡
=========*/
var service = function service(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(651));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
  转诊订单详情
=========*/
var orderForCrm = function orderForCrm(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(626));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/**========
  转诊订单详情
=========*/
var handBook = function handBook(q) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return q(__webpack_require__(617));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var routes = [{
    name: 'home',
    path: '/',
    component: index
}, {
    name: 'list',
    path: '/list',
    component: _list2.default
}, {
    name: 'activity',
    path: '/activity',
    component: activityIndex
}, {
    name: 'activity.list',
    path: '/activity/list',
    component: activityList
}, {
    name: 'activity.detail',
    path: '/activity/detail',
    component: activityDetail
}, {
    name: 'activity.sign',
    path: '/activity/sign',
    component: activitySign
}, {
    name: 'activity.complaint',
    path: '/activity/complaint',
    component: activityComplaint
}, {
    name: 'subject',
    path: '/subject',
    component: subject
}, {
    name: 'prod.details',
    path: '/prod/details',
    component: prodDetails

}, {
    name: 'prod.carts',
    path: '/prod/carts',
    component: prodCarts
}, {
    name: 'orders.createByCart',
    path: '/orders/createByCart',
    component: orderCreate
}, {
    path: '/orders',
    component: orderMaster,
    children: [{ path: '', redirect: { name: 'orders' } }, {
        name: 'orders',
        path: 'all',
        component: orderAll
    }, {
        name: 'orders.waitPay',
        path: 'waitPay',
        component: orderWaitPay
    }, {
        name: 'orders.waitCharge',
        path: 'waitCharge',
        component: orderWaitCharge
    }, {
        name: 'orders.alreadyConsumed',
        path: 'alreadyConsumed',
        component: orderAlreadyConsumed
    }, {
        name: 'orders.refundOrder',
        path: 'refundOrder',
        component: orderRefund
    }]
}, {
    name: 'search',
    path: '/search',
    component: searchMaster,
    children: [{ path: '', redirect: { name: 'search.all' } }, {
        name: 'search.all',
        path: 'all',
        component: searchAll
    }, {
        name: 'search.diary',
        path: 'diary',
        component: searcDiary
    }, {
        name: 'search.doctor',
        path: 'doctor',
        component: searcDoctor
    }, {
        name: 'search.hospital',
        path: 'hospital',
        component: searcHospital
    }, {
        name: 'search.know',
        path: 'know',
        component: searcKnow
    }, {
        name: 'search.prod',
        path: 'prod',
        component: searcPord
    }, {
        name: 'search.tag',
        path: 'tag',
        component: searcTag
    }, {
        name: 'search.user',
        path: 'user',
        component: searcUser
    }]

}, {
    name: 'orders.details',
    path: '/orders/details',
    component: orderDetails
}, {
    name: 'orders.orderForCrm',
    path: '/orders/orderForCrm',
    component: orderForCrm
}, {
    name: 'orders.pay',
    path: '/orders/pay',
    component: orderPay
}, {
    name: 'orders.paySuccess',
    path: '/orders/paySuccess',
    component: paySuccess
}, {
    name: 'orders.payfail',
    path: '/orders/payfail',
    component: payfail
}, {
    name: 'orders.comment',
    path: '/orders/comment',
    component: orderComment
}, {
    name: 'orders.alredyComment',
    path: '/orders/alredyComment',
    component: alredyComment
}, {
    name: 'refund',
    path: '/refund',
    component: refund
}, {
    name: 'custom.res',
    path: '/custom/',
    component: schemeIndex,
    children: [{ path: '', redirect: { name: 'custom.adviser' } }, {
        name: 'custom.adviser',
        path: 'adviser',
        component: schemeAdviser
    }, {
        name: 'custom.group',
        path: 'group',
        component: schemeGroup
    }, {
        name: 'custom.item',
        path: 'item',
        component: schemeItem
    }, {
        name: 'custom.itemAll',
        path: 'itemAll',
        component: schemeItemAll
    }, {
        name: 'custom.info',
        path: 'info',
        component: schemeInfo
    }, {
        name: 'custom.tel',
        path: 'tel',
        component: schemeTel
    }, {
        name: 'custom.detail',
        path: 'detail',
        component: schemeDetails
    }, {
        name: 'custom.success',
        path: 'success',
        component: schemeSuccess
    }]

},
// {
//     name: 'prod.coupon',
//     path: '/prod/coupon',
//     component: prodCoupon
// },
{
    name: 'prod.notice',
    path: '/prod/notice',
    component: prodNotice
}, {
    name: 'sign',
    path: '/sign',
    component: sign
}, {
    name: 'wiki.detail',
    path: '/wiki/detail',
    component: wikiDetail
}, {
    name: 'points.rules',
    path: '/points/rules',
    component: pointRule
}, {
    name: 'user.agreement',
    path: '/user/agreement',
    component: agreement
}, {
    name: 'advertisement.detail',
    path: '/advertisement/detail',
    component: advDetail
}, {
    name: 'instalment',
    path: '/instalment',
    component: stages
}, {
    name: 'hospital.detail',
    path: '/hospital/detail',
    component: hosptailDetail
}, {
    name: 'doctor.detail',
    path: '/doctor/detail',
    component: doctorDetail
}, {
    name: 'doctor.prod',
    path: '/doctor/prod',
    component: doctorProd
}, {
    name: 'doctor.diary',
    path: '/doctor/diary',
    component: doctorDiary
}, {
    name: 'service',
    path: '/service',
    component: service
}, {
    name: 'handBook',
    path: '/handBook',
    component: handBook
}];
exports.default = routes;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(60);

var _vue2 = _interopRequireDefault(_vue);

__webpack_require__(206);

var _auth = __webpack_require__(92);

var _auth2 = _interopRequireDefault(_auth);

var _router = __webpack_require__(133);

var _router2 = _interopRequireDefault(_router);

var _app = __webpack_require__(208);

var _app2 = _interopRequireDefault(_app);

var _store = __webpack_require__(205);

var _store2 = _interopRequireDefault(_store);

var _filters = __webpack_require__(201);

var _filters2 = _interopRequireDefault(_filters);

var _mixins = __webpack_require__(202);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueLazyload = __webpack_require__(207);

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

__webpack_require__(204);

__webpack_require__(203);

__webpack_require__(200);

var _assert = __webpack_require__(199);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_auth2.default);
_vue2.default.mixin(_mixins2.default);
_vue2.default.use(_vueLazyload2.default);

for (var key in _filters2.default) {
    _vue2.default.filter(key, _filters2.default[key]);
}

_vue2.default.prototype.iphoneX = false;

if (window.innerWidth == 375 && window.innerHeight == 812) {
    _vue2.default.prototype.iphoneX = true;
}

var onReady = function onReady(e) {

    new _vue2.default({
        el: '#app',
        store: _store2.default,
        router: _router2.default,
        render: function render(h) {
            return h(_app2.default);
        },
        data: {
            eventHub: new _vue2.default()
        }
    });

    document.addEventListener("backbutton", function (e) {
        _router2.default.back();
    }, false);
};

if (window.cordova) document.addEventListener("deviceready", onReady, false);else document.addEventListener('DOMContentLoaded', onReady, false);
window.addEventListener('online', function () {
    // document.body.classList.remove("active");
    _store2.default.dispatch('network', {
        onLine: true
    });
});
window.addEventListener('offline', function () {

    // document.body.classList.add("active");
    _store2.default.dispatch('network', {
        onLine: false
    });
});

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var order = function order(state) {
    return state.order;
};

exports.order = order;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _order = __webpack_require__(292);

var _order2 = _interopRequireDefault(_order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    order: _order2.default
};

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var state = {
    orderId: ''
};
var actions = {
    'orderId_update': function orderId_update(_ref, model) {
        var commit = _ref.commit,
            state = _ref.state;

        commit('ORDER_RESET', model);
    }
};

var mutations = {
    'ORDER_RESET': function ORDER_RESET(state, data) {
        state.orderId = data;
    }
};
var getters = {};

exports.default = {
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
};

/***/ }),
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 526 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 527 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 528 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 529 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 530 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 531 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 532 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 533 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 534 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 535 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 536 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 537 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 538 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 539 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 540 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 541 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 542 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(536)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(247),
  /* template */
  __webpack_require__(588),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\actionsheet\\actionsheet.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] actionsheet.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f137ce5", Component.options)
  } else {
    hotAPI.reload("data-v-5f137ce5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(531)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(248),
  /* template */
  __webpack_require__(580),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\actionsheet\\mActionItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mActionItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a43d832", Component.options)
  } else {
    hotAPI.reload("data-v-2a43d832", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(249),
  /* template */
  __webpack_require__(585),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\mCenter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mCenter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-474ed878", Component.options)
  } else {
    hotAPI.reload("data-v-474ed878", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  null,
  /* template */
  __webpack_require__(586),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\mContainer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mContainer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5912bbe2", Component.options)
  } else {
    hotAPI.reload("data-v-5912bbe2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  null,
  /* template */
  __webpack_require__(579),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\mFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-287b2bec", Component.options)
  } else {
    hotAPI.reload("data-v-287b2bec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(526)
}
var Component = __webpack_require__(6)(
  /* script */
  null,
  /* template */
  __webpack_require__(574),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-121b06b9",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\mGrid\\mGrid.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mGrid.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-121b06b9", Component.options)
  } else {
    hotAPI.reload("data-v-121b06b9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(535)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(250),
  /* template */
  __webpack_require__(587),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5b842bec",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\mGrid\\mGridItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mGridItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b842bec", Component.options)
  } else {
    hotAPI.reload("data-v-5b842bec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(251),
  /* template */
  __webpack_require__(573),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\mHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cf4cdfc", Component.options)
  } else {
    hotAPI.reload("data-v-0cf4cdfc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(529)
}
var Component = __webpack_require__(6)(
  /* script */
  null,
  /* template */
  __webpack_require__(577),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1d5fd12e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\mList\\mList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d5fd12e", Component.options)
  } else {
    hotAPI.reload("data-v-1d5fd12e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(525)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(252),
  /* template */
  __webpack_require__(572),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0680b36b",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\mList\\mListCell.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mListCell.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0680b36b", Component.options)
  } else {
    hotAPI.reload("data-v-0680b36b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(533)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(254),
  /* template */
  __webpack_require__(583),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-45af5c5e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\scrollers\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45af5c5e", Component.options)
  } else {
    hotAPI.reload("data-v-45af5c5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(540)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(255),
  /* template */
  __webpack_require__(592),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\swipe\\src\\swipe.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swipe.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a2f81548", Component.options)
  } else {
    hotAPI.reload("data-v-a2f81548", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(542)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(256),
  /* template */
  __webpack_require__(594),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b281dde2",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\swipe\\src\\swipeItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swipeItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b281dde2", Component.options)
  } else {
    hotAPI.reload("data-v-b281dde2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(257),
  /* template */
  __webpack_require__(571),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\swipeout\\swipeout-button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swipeout-button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04b6bfde", Component.options)
  } else {
    hotAPI.reload("data-v-04b6bfde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(258),
  /* template */
  __webpack_require__(582),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\swipeout\\swipeout-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swipeout-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dd7f03f", Component.options)
  } else {
    hotAPI.reload("data-v-3dd7f03f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(541)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(259),
  /* template */
  __webpack_require__(593),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\swipeout\\swipeout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swipeout.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aaf9055e", Component.options)
  } else {
    hotAPI.reload("data-v-aaf9055e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(528)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(260),
  /* template */
  __webpack_require__(576),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\switch\\switch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] switch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15b33dde", Component.options)
  } else {
    hotAPI.reload("data-v-15b33dde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(539)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(261),
  /* template */
  __webpack_require__(591),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\tab\\tab-content.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tab-content.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-987d1a2e", Component.options)
  } else {
    hotAPI.reload("data-v-987d1a2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(538)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(262),
  /* template */
  __webpack_require__(590),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\tab\\tab-contents.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tab-contents.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fcee94c", Component.options)
  } else {
    hotAPI.reload("data-v-6fcee94c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(532)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(263),
  /* template */
  __webpack_require__(581),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\tab\\tab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a48863d", Component.options)
  } else {
    hotAPI.reload("data-v-3a48863d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(527)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(264),
  /* template */
  __webpack_require__(575),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\components\\tab\\tabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1273e286", Component.options)
  } else {
    hotAPI.reload("data-v-1273e286", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(537)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(265),
  /* template */
  __webpack_require__(589),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-63bb9a3a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\meb-app-cordova\\src\\views\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63bb9a3a", Component.options)
  } else {
    hotAPI.reload("data-v-63bb9a3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "vux-swipeout-button",
    class: {
      'vux-swipeout-button-primary': _vm.type === 'primary', 'vux-swipeout-button-warn': _vm.type === 'warn', 'vux-swipeout-button-default': _vm.type === 'default'
    },
    style: ({
      width: ("" + _vm.width),
      backgroundColor: _vm.backgroundColor
    }),
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.onButtonClick
    }
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-04b6bfde", module.exports)
  }
}

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-list-cell"
  }, [(_vm.icon) ? _c('div', {
    staticClass: "m-icon",
    class: 'm-' + _vm.icon
  }, [_vm._t("icon"), _vm._v(" "), _vm._t("title", [(_vm.label) ? _c('span', {
    class: ['m-cell-label', ("m-cell-" + _vm.margin)],
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "m-cell-left"
  }, [_vm._t("left")], 2), _vm._v(" "), (_vm.content) ? _c('div', {
    staticClass: "m-cell-wrap"
  }, [_c('div', {
    class: ['m-cell-text', ("m-cell-" + _vm.margin)]
  }, [_vm._t("content")], 2)]) : _vm._e(), _vm._v(" "), _vm._t("right"), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0680b36b", module.exports)
  }
}

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "m-header"
  }, [_c('div', {
    staticClass: "m-header-button header-is-left"
  }, [_vm._t("left")], 2), _vm._v(" "), _c('div', {
    staticClass: "m-header-title"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "m-header-button header-is-right"
  }, [_vm._t("right")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0cf4cdfc", module.exports)
  }
}

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-grid"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-121b06b9", module.exports)
  }
}

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "tabs",
    staticClass: "m-tab"
  }, [_vm._t("default"), _vm._v(" "), _c('span', {
    ref: "highlight",
    staticClass: "m-tab-link-highlight",
    class: _vm.lineClass,
    staticStyle: {
      "transition": "all .3s"
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1273e286", module.exports)
  }
}

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "m-switch"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    staticClass: "m-switch-input",
    attrs: {
      "disabled": _vm.disabled,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.currentValue) ? _vm._i(_vm.currentValue, null) > -1 : (_vm.currentValue)
    },
    on: {
      "change": [function($event) {
        var $$a = _vm.currentValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.currentValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.currentValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.currentValue = $$c
        }
      }, function($event) {
        _vm.$emit('change', _vm.currentValue)
      }]
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "m-switch-core"
  }), _vm._v(" "), _c('div', {
    staticClass: "m-switch-label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-15b33dde", module.exports)
  }
}

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-list"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1d5fd12e", module.exports)
  }
}

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "refresh-container"
  }, [_c('div', {
    ref: "refreshDom",
    staticClass: "refreshImage"
  }), _vm._v(" "), _c('span', {
    staticClass: "sysTime"
  }, [_vm._v(_vm._s(_vm.sysTime))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1dd3588c", module.exports)
  }
}

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "m-footer"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, [_c('div', [_vm._v("首页")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": {
        name: 'subject',
        query: {
          id: '10420E94-8378-4E36-B5C9-750B8EEF0227'
        }
      }
    }
  }, [_c('div', [_vm._v("专题馆")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": {
        name: 'activity'
      }
    }
  }, [_c('div', [_vm._v("活动列表")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": {
        name: 'activity.list'
      }
    }
  }, [_c('div', [_vm._v("我的个人活动")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-287b2bec", module.exports)
  }
}

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-actionsheet-cell",
    on: {
      "click": function($event) {
        _vm.emitEvent(_vm.value)
      }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2a43d832", module.exports)
  }
}

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-tab-link",
    class: {
      'm-tab-active': _vm.active
    },
    attrs: {
      "href": _vm.href,
      "disabled": _vm.disabled,
      "center-ripple": false
    },
    on: {
      "click": _vm.tabClick
    }
  }, [(_vm.icon) ? _c('div', {
    class: _vm.iconClass
  }, [_vm._t("icon")], 2) : _vm._e(), _vm._v(" "), (_vm.title) ? _c('div', {
    staticClass: "m-tab-text",
    class: _vm.textClass
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3a48863d", module.exports)
  }
}

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-swipeout-item",
    on: {
      "touchstart": _vm.start,
      "mousedown": _vm.start,
      "touchmove": _vm.move,
      "mousemove": _vm.move,
      "touchend": _vm.end,
      "mouseup": _vm.end,
      "touchcancel": _vm.end
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.distX >= 0),
      expression: "distX >= 0"
    }],
    staticClass: "vux-swipeout-button-box vux-swipeout-button-box-left",
    style: (_vm.leftButtonBoxStyle)
  }, [_vm._t("left-menu")], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.distX <= 0),
      expression: "distX <= 0"
    }],
    staticClass: "vux-swipeout-button-box",
    style: (_vm.rightButtonBoxStyle)
  }, [_vm._t("right-menu")], 2), _vm._v(" "), _c('div', {
    ref: "content",
    staticClass: "vux-swipeout-content",
    style: (_vm.styles),
    on: {
      "mousedown": _vm.onContentClick,
      "touchstart": _vm.onContentClick
    }
  }, [_vm._t("content")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3dd7f03f", module.exports)
  }
}

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "scroller-container",
    staticStyle: {
      "width": "100%",
      "height": "100%"
    }
  }, [_c('div', {
    ref: "wrapper",
    staticClass: "scroller-wrapper"
  }, [_c('div', {
    ref: "header",
    staticClass: "scroller-header"
  }, [_vm._t("header", [(_vm.useReset) ? _c('div', {
    staticClass: "reset-container"
  }, [(_vm.state == 'pull' && _vm.loadText == 'spinner') ? _c('spinner') : _vm._e(), _vm._v(" "), (_vm.loadText == 'resetText') ? _c('span', {
    staticClass: "resetText",
    staticStyle: {
      "font-size": "3.12vw"
    }
  }, [_vm._v("下拉返回商品介绍")]) : _vm._e()], 1) : _vm._e()])], 2), _vm._v(" "), _c('div', {
    staticClass: "scroller-body"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "scroller-footer scroller-infininte"
  }, [_vm._t("infinite-spinner", [(_vm.useMore) ? _c('div', [_vm._v("加载更多...")]) : _vm._e()])], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-45af5c5e", module.exports)
  }
}

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-wrap"
  }, [_c('keep-alive', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-472f83d4", module.exports)
  }
}

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "m-center"
  }, [(_vm.pageStatus == 0) ? _c('div', {
    staticClass: "cover"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), (_vm.pageStatus == 1) ? _c('div', {
    staticClass: "cover"
  }, [_c('div', {
    staticClass: "noData"
  }, [_vm._t("empty", [_c('img', {
    attrs: {
      "src": __webpack_require__(210)
    }
  })])], 2)]) : _vm._e(), _vm._v(" "), (!_vm.onLine) ? _c('div', {
    staticClass: "cover"
  }, [_vm._m(1)]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loadinging"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(228)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "noData"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(196)
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-474ed878", module.exports)
  }
}

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-container"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5912bbe2", module.exports)
  }
}

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['m-list-grid', ("col-" + _vm.col)]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5b842bec", module.exports)
  }
}

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-actionsheet"
  }, [_c('div', {
    staticClass: "m-mask-transition",
    class: {
      'm-fade-toggle': _vm.propsShow
    },
    style: ({
      display: _vm.propsShow ? 'block' : 'none'
    }),
    on: {
      "click": function($event) {
        _vm.emitEvent(("" + _vm.cancelText))
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "m-actionsheet",
    class: {
      'm-actionsheet-toggle': _vm.propsShow
    }
  }, [_c('div', {
    staticClass: "m-actionsheet-menu"
  }, [_c('div', {
    staticClass: "m-actionsheet-container"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.showCancel) ? _c('div', {
    staticClass: "m-actionsheet-cell m-actionsheet-cancel",
    on: {
      "click": function($event) {
        _vm.emitEvent(("" + _vm.cancelText))
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5f137ce5", module.exports)
  }
}

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('m-container', [_c('m-header', [_c('div', {
    attrs: {
      "slot": "left"
    },
    on: {
      "click": _vm.back
    },
    slot: "left"
  }, [_c('i', {
    staticClass: "icon iconfont icon-back"
  })]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "right"
    },
    on: {
      "click": _vm.share
    },
    slot: "right"
  }, [_vm._v("分享")]), _vm._v(" "), _c('h1', {
    staticClass: "m-header-title iconfont"
  }, [_vm._v(_vm._s(_vm.title) + " ")])]), _vm._v(" "), _c('m-footer', [_vm._v("2")]), _vm._v(" "), _c('m-center', {
    attrs: {
      "pageStatus": 3
    }
  }, [_c('m-scroller', {
    ref: "scroller",
    attrs: {
      "useReset": "",
      "useMore": "",
      "loadText": _vm.loadText,
      "options": {
        bottomOffset: 200,
        checkDOMChanges: true
      }
    },
    on: {
      "reset": _vm.onReset,
      "more": _vm.onMore
    }
  }, [_c('transition', {
    attrs: {
      "name": "page1"
    }
  }, [(_vm.page == 1) ? _c('div', [_c('div', [_vm._v("这里是第一个页面")]), _vm._v(" "), _c('m-swipeout', [_c('m-swipeoutItem', {
    attrs: {
      "transition-mode": "follow"
    },
    on: {
      "on-close": function($event) {
        _vm.handleEvents('on-close')
      },
      "on-open": function($event) {
        _vm.handleEvents('on-open')
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "right-menu"
    },
    slot: "right-menu"
  }, [_c('m-swipeoutButton', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.onButtonClick('收藏')
      }
    }
  }, [_vm._v("收藏")]), _vm._v(" "), _c('m-swipeoutButton', {
    attrs: {
      "type": "warn"
    },
    nativeOn: {
      "click": function($event) {
        _vm.onButtonClick('删除')
      }
    }
  }, [_vm._v("删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "demo-content vux-1px-t",
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._v("swipeOut")])])], 1), _vm._v(" "), _c('m-list', [_c('m-list-cell', [_c('div', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }, [_vm._v("item1")])]), _vm._v(" "), _c('m-list-cell', {
    attrs: {
      "margin": 2
    }
  }, [_c('div', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }, [_vm._v("标题")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._v("描述")])]), _vm._v(" "), _c('m-list-cell', {
    attrs: {
      "icon": "more",
      "label": "item2",
      "margin": 2
    }
  }, [_c('img', {
    attrs: {
      "slot": "icon",
      "src": __webpack_require__(196),
      "width": "24",
      "height": "24"
    },
    slot: "icon"
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_c('i', {
    staticClass: "icon iconfont icon-more"
  })])]), _vm._v(" "), _c('m-list-cell', {
    attrs: {
      "margin": 2
    }
  }, [_c('div', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }, [_vm._v("标题")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._v("描述")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_c('i', {
    staticClass: "icon iconfont icon-more"
  })])]), _vm._v(" "), _c('m-list-cell', {
    attrs: {
      "margin": 3
    }
  }, [_c('div', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }, [_vm._v("item4")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('div', {
    staticClass: "m-header-title"
  }, [_vm._v("item4-1")]), _vm._v(" "), _c('div', {
    staticClass: "m-header-title"
  }, [_vm._v("item4-2")])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_c('i', {
    staticClass: "icon iconfont icon-more"
  })])]), _vm._v(" "), _c('m-list-cell', [_c('div', {
    attrs: {
      "slot": "left"
    },
    on: {
      "click": _vm.actionsheetChange
    },
    slot: "left"
  }, [_vm._v("actionsheet")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_vm._v("你选择的是:" + _vm._s(_vm.selectValue))])])], 1), _vm._v(" "), _c('m-switch', {
    on: {
      "change": _vm.handleSwitch
    },
    model: {
      value: (_vm.value1),
      callback: function($$v) {
        _vm.value1 = $$v
      },
      expression: "value1"
    }
  }, [_c('label', {
    domProps: {
      "textContent": _vm._s(_vm.value1)
    }
  })]), _vm._v(" "), _c('m-grid', [_c('m-grid-item', {
    attrs: {
      "col": 1
    }
  }, [_vm._v("\n                            item1\n                        ")]), _vm._v(" "), _c('m-grid-item', {
    attrs: {
      "col": 2
    }
  }, [_vm._v("\n                            item2\n                        ")]), _vm._v(" "), _c('m-grid-item', {
    attrs: {
      "col": 1
    }
  }, [_vm._v("\n                            item1\n                        ")]), _vm._v(" "), _c('m-grid-item', {
    attrs: {
      "col": 4
    }
  }, [_vm._v("\n                            item4\n                        ")]), _vm._v(" "), _c('m-grid-item', {
    attrs: {
      "col": 2
    }
  }, [_vm._v("\n                            item2\n                        ")]), _vm._v(" "), _c('m-grid-item', {
    attrs: {
      "col": 5
    }
  }, [_vm._v("\n                            item5\n                        ")])], 1), _vm._v(" "), _c('m-swipe', {
    attrs: {
      "auto": 0,
      "defaultIndex": 1,
      "show-indicators": true,
      "continuous": true
    }
  }, [_c('m-swipe-item', {
    staticClass: "slide1"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0958405777-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide2"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0939335995-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide3"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0948207403-banner"
    }
  })])], 1), _vm._v(" "), _c('m-tabs', [_c('m-tabs', {
    staticClass: "m-tab",
    attrs: {
      "value": _vm.active
    },
    on: {
      "change": _vm.handleTabChange
    }
  }, [_c('m-tab', {
    attrs: {
      "value": "tab1",
      "title": "item1"
    }
  }), _vm._v(" "), _c('m-tab', {
    attrs: {
      "value": "tab2",
      "title": "item2"
    }
  }), _vm._v(" "), _c('m-tab', {
    attrs: {
      "value": "tab3",
      "title": "item3"
    }
  })], 1), _vm._v(" "), _c('m-tab-container', {
    attrs: {
      "value": _vm.active
    },
    model: {
      value: (_vm.active),
      callback: function($$v) {
        _vm.active = $$v
      },
      expression: "active"
    }
  }, [_c('m-tab-content', {
    attrs: {
      "value": "tab1",
      "title": "item1"
    }
  }, [_c('h2', [_vm._v("Tab One")]), _vm._v(" "), _c('p', [_vm._v("\n                                    这是第一个 tab\n                                ")])]), _vm._v(" "), _c('m-tab-content', {
    attrs: {
      "value": "tab2",
      "title": "item2"
    }
  }, [_c('h2', [_vm._v("Tab Two")]), _vm._v(" "), _c('p', [_vm._v("\n                                    这是第二个 tab\n                                ")])]), _vm._v(" "), _c('m-tab-content', {
    attrs: {
      "value": "tab3",
      "title": "item3"
    }
  }, [_c('h2', [_vm._v("Tab Three")]), _vm._v(" "), _c('p', [_vm._v("\n                                    这是第三个 tab\n                                ")])])], 1)], 1)], 1) : _vm._e()]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "page2"
    }
  }, [(_vm.page == 2) ? _c('div', [_c('div', [_vm._v("这里是第二个页面")]), _vm._v(" "), _c('m-swipe', {
    attrs: {
      "auto": 0,
      "defaultIndex": 1,
      "show-indicators": true,
      "continuous": true
    }
  }, [_c('m-swipe-item', {
    staticClass: "slide1"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0958405777-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide2"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0939335995-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide3"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0948207403-banner"
    }
  })])], 1), _vm._v(" "), _c('m-swipe', {
    attrs: {
      "auto": 0,
      "defaultIndex": 1,
      "show-indicators": true,
      "continuous": true
    }
  }, [_c('m-swipe-item', {
    staticClass: "slide1"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0958405777-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide2"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0939335995-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide3"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0948207403-banner"
    }
  })])], 1), _vm._v(" "), _c('m-swipe', {
    attrs: {
      "auto": 0,
      "defaultIndex": 1,
      "show-indicators": true,
      "continuous": true
    }
  }, [_c('m-swipe-item', {
    staticClass: "slide1"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0958405777-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide2"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0939335995-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide3"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0948207403-banner"
    }
  })])], 1), _vm._v(" "), _c('m-swipe', {
    attrs: {
      "auto": 0,
      "defaultIndex": 1,
      "show-indicators": true,
      "continuous": true
    }
  }, [_c('m-swipe-item', {
    staticClass: "slide1"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0958405777-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide2"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0939335995-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide3"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0948207403-banner"
    }
  })])], 1), _vm._v(" "), _c('m-swipe', {
    attrs: {
      "auto": 0,
      "defaultIndex": 1,
      "show-indicators": true,
      "continuous": true
    }
  }, [_c('m-swipe-item', {
    staticClass: "slide1"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0958405777-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide2"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0939335995-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide3"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0948207403-banner"
    }
  })])], 1), _vm._v(" "), _c('m-swipe', {
    attrs: {
      "auto": 0,
      "defaultIndex": 1,
      "show-indicators": true,
      "continuous": true
    }
  }, [_c('m-swipe-item', {
    staticClass: "slide1"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0958405777-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide2"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0939335995-banner"
    }
  })]), _vm._v(" "), _c('m-swipe-item', {
    staticClass: "slide3"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn-ssl.meb.com/2017/07/28/0948207403-banner"
    }
  })])], 1)], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "infinite-spinner"
    },
    slot: "infinite-spinner"
  }, [_vm._v(_vm._s(_vm.infiniteText))])], 1), _vm._v(" "), _c('actionsheet', {
    ref: "actionsheet",
    attrs: {
      "propsShow": _vm.propsShow,
      "showCancel": true,
      "cancelText": '取消'
    },
    on: {
      "onChange": _vm.onChange
    },
    model: {
      value: (_vm.showActionsheet),
      callback: function($$v) {
        _vm.showActionsheet = $$v
      },
      expression: "showActionsheet"
    }
  }, [_c('m-action-item', {
    attrs: {
      "value": "测试1"
    },
    on: {
      "checked": _vm.checked
    }
  }, [_vm._v("测试1")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('m-action-item', {
    attrs: {
      "value": "测试2"
    },
    on: {
      "checked": _vm.checked
    }
  }, [_vm._v("测试2")])], 1), _vm._v(" "), _c('actionsheet', {
    ref: "actionsheets",
    attrs: {
      "propsShow": _vm.propsShow,
      "showCancel": true,
      "cancelText": '取消'
    },
    on: {
      "onChange": _vm.onChange
    },
    model: {
      value: (_vm.isShare),
      callback: function($$v) {
        _vm.isShare = $$v
      },
      expression: "isShare"
    }
  }, [_c('m-action-item', {
    attrs: {
      "value": "qq"
    },
    on: {
      "checked": _vm.checked
    }
  }, [_vm._v("分享到QQ")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('m-action-item', {
    attrs: {
      "value": "微信"
    },
    on: {
      "checked": _vm.checked
    }
  }, [_vm._v("分享到微信")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-63bb9a3a", module.exports)
  }
}

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "wrap",
    staticClass: "tab-container"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6fcee94c", module.exports)
  }
}

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    staticClass: "tab-content",
    class: {
      'tab-content-active': _vm.active
    },
    attrs: {
      "disabled": _vm.disabled,
      "center-ripple": false
    },
    on: {
      "touchstart": _vm.startDrag,
      "mousedown": _vm.startDrag,
      "touchmove": _vm.tabClick,
      "mousemove": _vm.tabClick
    }
  }, [_c('div', {
    staticClass: "m-tab-text"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-987d1a2e", module.exports)
  }
}

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-swipe"
  }, [_c('div', {
    ref: "wrap",
    staticClass: "m-swipe-items-wrap"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showIndicators),
      expression: "showIndicators"
    }],
    staticClass: "m-swipe-indicators"
  }, _vm._l((_vm.pages), function(page, $index) {
    return _c('div', {
      key: $index,
      staticClass: "m-swipe-indicator",
      class: {
        'is-active': $index === _vm.index
      }
    })
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a2f81548", module.exports)
  }
}

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-swipeout"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-aaf9055e", module.exports)
  }
}

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-swipe-item"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b281dde2", module.exports)
  }
}

/***/ })
],[289]);