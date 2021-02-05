module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/lib/style/themes/default.less":
/*!*********************************************************!*\
  !*** ./node_modules/antd/lib/style/themes/default.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/PageLayout */ "./src/components/PageLayout/index.ts");
/* harmony import */ var _pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/ProfilePage/ProfilePage */ "./src/pages/ProfilePage/ProfilePage.tsx");
/* harmony import */ var _pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/LoginPage/LoginPage */ "./src/pages/LoginPage/LoginPage.tsx");
/* harmony import */ var _pages_GamePage_GamePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/GamePage/GamePage */ "./src/pages/GamePage/GamePage.tsx");
/* harmony import */ var _pages_RegisterPage_RegistrationPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/RegisterPage/RegistrationPage */ "./src/pages/RegisterPage/RegistrationPage.tsx");
/* harmony import */ var _pages_LeaderboardPage_LeaderboardPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/LeaderboardPage/LeaderboardPage */ "./src/pages/LeaderboardPage/LeaderboardPage.tsx");
/* harmony import */ var _pages_ForumPage_Forum_ForumList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/ForumPage/Forum/ForumList */ "./src/pages/ForumPage/Forum/ForumList/index.tsx");
/* harmony import */ var _pages_ForumPage_ForumPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/ForumPage/ForumPage */ "./src/pages/ForumPage/ForumPage.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core

 // Components

 // Pages









var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    component: _pages_GamePage_GamePage__WEBPACK_IMPORTED_MODULE_5__["default"],
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    component: _pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_4__["default"],
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/register",
    component: _pages_RegisterPage_RegistrationPage__WEBPACK_IMPORTED_MODULE_6__["default"],
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/profile",
    component: _pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_3__["default"],
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/dashboard",
    component: _pages_LeaderboardPage_LeaderboardPage__WEBPACK_IMPORTED_MODULE_7__["default"],
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/forum",
    component: _pages_ForumPage_Forum_ForumList__WEBPACK_IMPORTED_MODULE_8__["default"],
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/forum-page/:id",
    component: _pages_ForumPage_ForumPage__WEBPACK_IMPORTED_MODULE_9__["default"],
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/login"
  })));
}; // Exports


var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\App.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\App.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/api/AuthApi.ts":
/*!****************************!*\
  !*** ./src/api/AuthApi.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/ApiHelpers */ "./src/helpers/ApiHelpers.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var AuthApi = function AuthApi() {
  _classCallCheck(this, AuthApi);
};

_defineProperty(AuthApi, "signUp", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = Object(_helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])('auth/signup');
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data);

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

_defineProperty(AuthApi, "signIn", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = Object(_helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])('auth/signin');
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data, {
              withCredentials: true
            });

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response.data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

_defineProperty(AuthApi, "getUser", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var url, response;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          url = Object(_helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])('auth/user');
          _context3.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
            withCredentials: true
          });

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));

_defineProperty(AuthApi, "logout", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  var url;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          url = Object(_helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])('auth/loguot');
          _context4.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url);

        case 3:
          return _context4.abrupt("return", _context4.sent);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
})));

var _default = AuthApi;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthApi, "AuthApi", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\api\\AuthApi.ts");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\api\\AuthApi.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/api/UserApi.ts":
/*!****************************!*\
  !*** ./src/api/UserApi.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/ApiHelpers */ "./src/helpers/ApiHelpers.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var UserApi = function UserApi() {
  _classCallCheck(this, UserApi);
};

_defineProperty(UserApi, "editProfile", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = Object(_helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])('user/profile');
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default()({
              method: 'put',
              url: url,
              withCredentials: true,
              data: data
            });

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

_defineProperty(UserApi, "uploadAvatar", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(avatar) {
    var url, formData, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = Object(_helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])('user/profile/avatar');
            formData = new FormData();
            formData.append('avatar', avatar);
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default()({
              method: 'put',
              headers: {
                'Content-Type': avatar.type
              },
              url: url,
              withCredentials: true,
              data: formData
            });

          case 5:
            response = _context2.sent;

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

_defineProperty(UserApi, "changePassword", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = Object(_helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])('user/password');
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default()({
              method: 'put',
              url: url,
              withCredentials: true,
              data: data
            });

          case 3:
            response = _context3.sent;

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}());

_defineProperty(UserApi, "getUser", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = Object(_helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])("user/".concat(id));
            _context4.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
              withCredentials: true
            });

          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", response.data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}());

_defineProperty(UserApi, "findUsers", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(login) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            url = Object(_helpers_ApiHelpers__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])('user/search');
            _context5.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, {
              login: login
            });

          case 3:
            response = _context5.sent;
            return _context5.abrupt("return", response.data);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x5) {
    return _ref5.apply(this, arguments);
  };
}());

var _default = UserApi;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserApi, "UserApi", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\api\\UserApi.ts");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\api\\UserApi.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/classes/Asteroid/Asteroid.ts":
/*!******************************************!*\
  !*** ./src/classes/Asteroid/Asteroid.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Asteroid; });
/* harmony import */ var _helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/GameHelper */ "./src/helpers/GameHelper.ts");
/* harmony import */ var _Particle_Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Particle/Particle */ "./src/classes/Particle/Particle.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var Asteroid = /*#__PURE__*/function () {
  function Asteroid(args) {
    _classCallCheck(this, Asteroid);

    _defineProperty(this, "position", void 0);

    _defineProperty(this, "velocity", void 0);

    _defineProperty(this, "args", void 0);

    _defineProperty(this, "rotation", void 0);

    _defineProperty(this, "radius", void 0);

    _defineProperty(this, "delete", void 0);

    _defineProperty(this, "score", void 0);

    _defineProperty(this, "rotationSpeed", void 0);

    _defineProperty(this, "create", void 0);

    _defineProperty(this, "addScore", void 0);

    _defineProperty(this, "vertices", void 0);

    this.radius = args.size;
    this.velocity = {
      x: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-3, 3),
      y: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-3, 3)
    };
    this.position = args.position;
    this.rotation = 0;
    this.rotationSpeed = Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-1, 1);
    this.score = 80 / this.radius * 5;
    this.vertices = Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["asteroidVertices"])(8, args.size);
    this.addScore = args.addScore;
    this.create = args.create;
    this["delete"] = false;
  }

  _createClass(Asteroid, [{
    key: "isDelete",
    value: function isDelete() {
      return this["delete"];
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this["delete"] = true;
      this.addScore(this.score);

      for (var i = 0; i < this.radius; i++) {
        var particle = new _Particle_Particle__WEBPACK_IMPORTED_MODULE_1__["default"]({
          lifeSpan: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(60, 100),
          size: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(1, 3),
          position: {
            x: this.position.x + Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-this.radius / 4, this.radius / 4),
            y: this.position.y + Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-this.radius / 4, this.radius / 4)
          },
          velocity: {
            x: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-1.5, 1.5),
            y: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-1.5, 1.5)
          }
        });
        this.create(particle, 'particles');
      }

      if (this.radius > 10) {
        for (var _i = 0; _i < 2; _i++) {
          var asteroid = new Asteroid({
            size: this.radius / 2,
            position: {
              x: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-10, 20) + this.position.x,
              y: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-10, 20) + this.position.y
            },
            create: this.create.bind(this),
            addScore: this.addScore.bind(this)
          });
          this.create(asteroid, 'asteroids');
        }
      }
    }
  }, {
    key: "render",
    value: function render(state) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.rotation += this.rotationSpeed;

      if (this.rotation >= 360) {
        this.rotation -= 360;
      }

      if (this.rotation < 0) {
        this.rotation += 360;
      }

      if (this.position.x > state.screen.width + this.radius) this.position.x = -this.radius;else if (this.position.x < -this.radius) this.position.x = state.screen.width + this.radius;
      if (this.position.y > state.screen.height + this.radius) this.position.y = -this.radius;else if (this.position.y < -this.radius) this.position.y = state.screen.height + this.radius;
      var context = state.context;
      context.save();
      context.translate(this.position.x, this.position.y);
      context.rotate(this.rotation * (Math.PI / 180));
      context.strokeStyle = '#FFF';
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(0, -this.radius);

      for (var i = 1; i < this.vertices.length; i++) {
        context.lineTo(this.vertices[i].x, this.vertices[i].y);
      }

      context.closePath();
      context.stroke();
      context.restore();
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Asteroid;
}();


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Asteroid, "Asteroid", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\classes\\Asteroid\\Asteroid.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/classes/Bullet/Bullet.ts":
/*!**************************************!*\
  !*** ./src/classes/Bullet/Bullet.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
/* harmony import */ var _helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/GameHelper */ "./src/helpers/GameHelper.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var Bullet = /*#__PURE__*/function () {
  function Bullet(args) {
    _classCallCheck(this, Bullet);

    _defineProperty(this, "position", void 0);

    _defineProperty(this, "velocity", void 0);

    _defineProperty(this, "args", void 0);

    _defineProperty(this, "rotation", void 0);

    _defineProperty(this, "radius", void 0);

    _defineProperty(this, "delete", void 0);

    var posDelta = Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["rotatePoint"])({
      x: 0,
      y: -20
    }, {
      x: 0,
      y: 0
    }, args.rotation * Math.PI / 180);
    this.position = {
      x: args.position.x + posDelta.x,
      y: args.position.y + posDelta.y
    };
    this.rotation = args.rotation;
    this.velocity = {
      x: posDelta.x / 2,
      y: posDelta.y / 2
    };
    this.radius = 3;
    this["delete"] = false;
  }

  _createClass(Bullet, [{
    key: "isDelete",
    value: function isDelete() {
      return this["delete"];
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this["delete"] = true;
    }
  }, {
    key: "render",
    value: function render(state) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.x < 0 || this.position.y < 0 || this.position.x > state.screen.width || this.position.y > state.screen.height) {
        this.destroy();
      }

      var context = state.context;
      context.save();
      context.translate(this.position.x, this.position.y);
      context.rotate(this.rotation * Math.PI / 180);
      context.fillStyle = '#FFF';
      context.beginPath();
      context.arc(0, 0, this.radius, 0, this.radius * Math.PI);
      context.closePath();
      context.fill();
      context.restore();
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Bullet;
}();


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Bullet, "Bullet", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\classes\\Bullet\\Bullet.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/classes/Particle/Particle.ts":
/*!******************************************!*\
  !*** ./src/classes/Particle/Particle.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Particle; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Particle = /*#__PURE__*/function () {
  function Particle(args) {
    _classCallCheck(this, Particle);

    _defineProperty(this, "position", void 0);

    _defineProperty(this, "velocity", void 0);

    _defineProperty(this, "radius", void 0);

    _defineProperty(this, "lifeSpan", void 0);

    _defineProperty(this, "inertia", void 0);

    _defineProperty(this, "delete", void 0);

    this.position = args.position;
    this.velocity = args.velocity;
    this.radius = args.size;
    this.lifeSpan = args.lifeSpan;
    this.inertia = 0.98;
    this["delete"] = false;
  }

  _createClass(Particle, [{
    key: "isDelete",
    value: function isDelete() {
      return this["delete"];
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this["delete"] = true;
    }
  }, {
    key: "render",
    value: function render(state) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.x *= this.inertia;
      this.velocity.y *= this.inertia;
      this.radius -= 0.1;

      if (this.radius < 0.1) {
        this.radius = 0.1;
      }

      if (this.lifeSpan-- < 0) {
        this.destroy();
      }

      var context = state.context;
      context.save();
      context.translate(this.position.x, this.position.y);
      context.fillStyle = '#ffffff';
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(0, -this.radius);
      context.arc(0, 0, this.radius, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.restore();
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Particle;
}();


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Particle, "Particle", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\classes\\Particle\\Particle.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/classes/Ship/Ship.tsx":
/*!***********************************!*\
  !*** ./src/classes/Ship/Ship.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ship; });
/* harmony import */ var _helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @helpers/GameHelper */ "./src/helpers/GameHelper.ts");
/* harmony import */ var _Particle_Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Particle/Particle */ "./src/classes/Particle/Particle.ts");
/* harmony import */ var _Bullet_Bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Bullet/Bullet */ "./src/classes/Bullet/Bullet.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var Ship = /*#__PURE__*/function () {
  function Ship(args) {
    var _this = this;

    _classCallCheck(this, Ship);

    _defineProperty(this, "position", void 0);

    _defineProperty(this, "velocity", void 0);

    _defineProperty(this, "args", void 0);

    _defineProperty(this, "rotation", void 0);

    _defineProperty(this, "rotationSpeed", void 0);

    _defineProperty(this, "speed", void 0);

    _defineProperty(this, "inertia", void 0);

    _defineProperty(this, "radius", void 0);

    _defineProperty(this, "lastShot", void 0);

    _defineProperty(this, "create", void 0);

    _defineProperty(this, "onDie", void 0);

    _defineProperty(this, "delete", void 0);

    _defineProperty(this, "accelerate", function () {
      _this.velocity.x -= Math.sin(-_this.rotation * (Math.PI / 180)) * _this.speed;
      _this.velocity.y -= Math.cos(-_this.rotation * (Math.PI / 180)) * _this.speed;
      var posDelta = Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["rotatePoint"])({
        x: 0,
        y: -10
      }, {
        x: 0,
        y: 0
      }, (_this.rotation - 180) * (Math.PI / 180));
      var particle = new _Particle_Particle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        lifeSpan: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(20, 40),
        size: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(1, 3),
        position: {
          x: _this.position.x + posDelta.x + Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-2, 2),
          y: _this.position.y + posDelta.y + Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(-2, 2)
        },
        velocity: {
          x: posDelta.x / Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(3, 5),
          y: posDelta.y / Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_0__["randomNumBetween"])(3, 5)
        }
      });

      _this.create(particle, 'particles');
    });

    this.args = args;
    this.position = args.position;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.rotation = 0;
    this.rotationSpeed = 6;
    this.speed = 0.15;
    this.inertia = 0.99;
    this.radius = 20;
    this.lastShot = 0;
    this.create = args.create;
    this.onDie = args.onDie;
    this["delete"] = false;
  }

  _createClass(Ship, [{
    key: "rotate",
    value: function rotate(dir) {
      if (dir === 'LEFT') {
        this.rotation -= this.rotationSpeed;
      }

      if (dir === 'RIGHT') {
        this.rotation += this.rotationSpeed;
      }
    }
  }, {
    key: "isDelete",
    value: function isDelete() {
      return this["delete"];
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this["delete"] = true;
      this.onDie();
    }
  }, {
    key: "render",
    value: function render(state) {
      if (state.keys.up) {
        this.accelerate();
      }

      if (state.keys.left) {
        this.rotate('LEFT');
      }

      if (state.keys.right) {
        this.rotate('RIGHT');
      }

      if (state.keys.space) {
        if (this.lastShot === 0 || Date.now() - this.lastShot > 200) {
          var bullet = new _Bullet_Bullet__WEBPACK_IMPORTED_MODULE_2__["default"]({
            position: this.position,
            rotation: this.rotation
          });
          this.velocity.x += Math.sin(-this.rotation * (Math.PI / 180)) * 0.1;
          this.velocity.y += Math.cos(-this.rotation * (Math.PI / 180)) * 0.1;
          this.create(bullet, 'bullets');
          this.lastShot = Date.now();
        }
      }

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.x *= this.inertia;
      this.velocity.y *= this.inertia;

      if (this.rotation >= 360) {
        this.rotation -= 360;
      }

      if (this.rotation < 0) {
        this.rotation += 360;
      }

      if (this.position.x > state.screen.width) this.position.x = 0;else if (this.position.x < 0) this.position.x = state.screen.width;
      if (this.position.y > state.screen.height) this.position.y = 0;else if (this.position.y < 0) this.position.y = state.screen.height;
      var context = state.context;
      context.save();
      context.translate(this.position.x, this.position.y);
      context.rotate(this.rotation * (Math.PI / 180));
      context.strokeStyle = '#ffffff';
      context.fillStyle = '#000000';
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(0, -15);
      context.lineTo(10, 10);
      context.lineTo(5, 7);
      context.lineTo(-5, 7);
      context.lineTo(-10, 10);
      context.closePath();
      context.fill();
      context.stroke();
      context.restore();
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Ship;
}();


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Ship, "Ship", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\classes\\Ship\\Ship.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/classes/index.ts":
/*!******************************!*\
  !*** ./src/classes/index.ts ***!
  \******************************/
/*! exports provided: Asteroid, Ship, Bullet, Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asteroid_Asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asteroid/Asteroid */ "./src/classes/Asteroid/Asteroid.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Asteroid", function() { return _Asteroid_Asteroid__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Ship_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship/Ship */ "./src/classes/Ship/Ship.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ship", function() { return _Ship_Ship__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Bullet_Bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bullet/Bullet */ "./src/classes/Bullet/Bullet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bullet", function() { return _Bullet_Bullet__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Particle_Particle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Particle/Particle */ "./src/classes/Particle/Particle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return _Particle_Particle__WEBPACK_IMPORTED_MODULE_3__["default"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







/***/ }),

/***/ "./src/components/Game/Game.tsx":
/*!**************************************!*\
  !*** ./src/components/Game/Game.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.less */ "./src/components/Game/game.less");
/* harmony import */ var _game_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes */ "./src/classes/index.ts");
/* harmony import */ var _helpers_GameHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helpers/GameHelper */ "./src/helpers/GameHelper.ts");
/* harmony import */ var _helpers_Timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/Timer */ "./src/helpers/Timer.ts");
/* harmony import */ var _GameTotal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameTotal */ "./src/components/Game/GameTotal.tsx");
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameOver */ "./src/components/Game/GameOver.tsx");
/* harmony import */ var _GamePause__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GamePause */ "./src/components/Game/GamePause.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var KEY = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  UP: 'ArrowUp',
  A: 'KeyA',
  D: 'KeyD',
  W: 'KeyW',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ENTER: 'Enter',
  F: ['f', 'а']
};

var Game = function Game() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      score = _useState2[0],
      setScore = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isGameOver = _useState4[0],
      setIsGameOver = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isPause = _useState6[0],
      setIsPause = _useState6[1]; // похоже рефов много, как по другому запомнить состояние не разобрался


  var stopGame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var endGame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var scoreRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  var animationId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  var screen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    width: window.innerWidth,
    height: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_3__["maxGameHeight"])(),
    ratio: window.devicePixelRatio || 1
  });
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    left: false,
    right: false,
    up: false,
    down: false,
    space: false,
    f: false
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      keys = _useState8[0],
      setKeys = _useState8[1];

  var timer = Object(_helpers_Timer__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var asteroidsCount = 2;
  var objects = {
    ships: [],
    bullets: [],
    asteroids: [],
    particles: []
  };

  var handleKeys = function handleKeys(event, value) {
    var keysVal = keys;
    if (event.key === KEY.LEFT || event.key === KEY.A) keysVal.left = value;
    if (event.key === KEY.RIGHT || event.key === KEY.D) keysVal.right = value;
    if (event.key === KEY.UP || event.key === KEY.W) keysVal.up = value;
    if (event.key === KEY.SPACE) keysVal.space = value;
    setKeys(keysVal);
  };

  var handleKeyDown = function handleKeyDown(event) {
    handleKeys(event, true);

    if (event.key === KEY.ESCAPE || event.key === KEY.ENTER) {
      pause();
    }

    if (KEY.F.includes(event.key)) {
      toggleFullScreen();
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    handleKeys(event, false);
  };

  var addScore = function addScore(s) {
    // не нашел простого способа запомнить счет
    scoreRef.current += s;
    setScore(scoreRef.current);
  };

  var generateAsteroids = function generateAsteroids(count) {
    for (var i = 0; i < count; i++) {
      var asteroid = new _classes__WEBPACK_IMPORTED_MODULE_2__["Asteroid"]({
        size: 80,
        position: {
          x: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_3__["randomNumBetween"])(0, screen.current.width),
          y: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_3__["randomNumBetween"])(0, screen.current.height)
        },
        create: createObject,
        addScore: addScore
      });
      createObject(asteroid, 'asteroids');
    }
  };

  var restart = function restart() {
    cancelAnimationFrame(animationId.current);
    start();
    animationId.current = requestAnimationFrame(function () {
      update();
    });
  };

  var start = function start() {
    setIsPause(false);
    setIsGameOver(false);
    stopGame.current = false;
    endGame.current = false;
    scoreRef.current = 0;
    setScore(scoreRef.current);
    timer.reset();
    timer.start();
    var ship = new _classes__WEBPACK_IMPORTED_MODULE_2__["Ship"]({
      position: {
        x: screen.current.width / 2,
        y: screen.current.height / 2
      },
      create: createObject,
      onDie: gameOver
    });
    createObject(ship, 'ships');
    generateAsteroids(asteroidsCount);
  };

  var pause = function pause() {
    if (!endGame.current) {
      stopGame.current = !stopGame.current;
      setIsPause(stopGame.current);

      if (stopGame.current) {
        timer.pause();
      } else {
        timer.start();
      }
    }
  };

  var gameOver = function gameOver() {
    setIsGameOver(true);
    setIsPause(false);
    endGame.current = true;
    stopGame.current = false;
    timer.pause();
  };

  var update = function update() {
    var _canvasRef$current;

    var context = (_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.getContext('2d');

    if (!stopGame.current && context !== undefined && context !== null) {
      context.save();
      context.scale(screen.current.ratio, screen.current.ratio);
      context.fillStyle = '#000';
      context.globalAlpha = 0.4;
      context.fillRect(0, 0, screen.current.width, screen.current.height);
      context.globalAlpha = 1;

      if (objects.asteroids.length === 0) {
        asteroidsCount++;
        generateAsteroids(asteroidsCount);
      }

      updateObjects(objects.ships, 'ships');
      updateObjects(objects.asteroids, 'asteroids');
      updateObjects(objects.bullets, 'bullets');
      updateObjects(objects.particles, 'particles');
      checkCollisionsWith(objects.bullets, objects.asteroids);
      checkCollisionsWith(objects.ships, objects.asteroids);
      context.restore();
    }

    animationId.current = requestAnimationFrame(function () {
      update();
    });
  };

  var updateObjects = function updateObjects(items, group) {
    var _canvasRef$current2;

    var index = 0;
    var context = (_canvasRef$current2 = canvasRef.current) === null || _canvasRef$current2 === void 0 ? void 0 : _canvasRef$current2.getContext('2d');

    var _iterator = _createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (item.isDelete()) {
          objects[group].splice(index, 1);
        } else if (context) {
          var tmp = screen.current;
          items[index].render({
            screen: tmp,
            context: context,
            keys: keys
          });
        }

        index++;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }; // тут не смог указать gameObjects typescript говорит что тип never


  var createObject = function createObject(item, group) {
    objects[group].push(item);
  };

  var checkCollisionsWith = function checkCollisionsWith(items1, items2) {
    for (var i = 0; i < items1.length; i++) {
      for (var j = 0; j < items2.length; j++) {
        var item1 = items1[i];
        var item2 = items2[j];

        if (checkCollision(item1, item2)) {
          item1.destroy();
          item2.destroy();
        }
      }
    }
  };

  var checkCollision = function checkCollision(obj1, obj2) {
    var vx = obj1.position.x - obj2.position.x;
    var vy = obj1.position.y - obj2.position.y;
    var length = Math.sqrt(vx * vx + vy * vy);

    if (length < obj1.radius + obj2.radius) {
      return true;
    }

    return false;
  };

  var resize = function resize() {
    screen.current = {
      width: window.innerWidth,
      height: Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_3__["maxGameHeight"])(),
      ratio: window.devicePixelRatio || 1
    };
  };

  var toggleFullScreen = function toggleFullScreen() {
    var gameBlock = document.querySelector('.game');

    if (!document.fullscreenElement) {
      if (gameBlock) {
        gameBlock.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  };

  var resizeThrottle = Object(_helpers_GameHelper__WEBPACK_IMPORTED_MODULE_3__["throttle"])(resize, 1000);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', resizeThrottle);
    return function () {
      return window.removeEventListener('resize', resizeThrottle);
    };
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    start();
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    animationId.current = requestAnimationFrame(function () {
      update();
    });
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      window.cancelAnimationFrame(animationId.current);
      animationId.current = 0;
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game"
  }, isPause && !isGameOver ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GamePause__WEBPACK_IMPORTED_MODULE_7__["default"], null) : '', isGameOver ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameOver__WEBPACK_IMPORTED_MODULE_6__["default"], {
    score: score,
    handlerStart: restart
  }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "score-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameTotal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    score: score,
    seconds: timer.seconds
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    ref: canvasRef,
    tabIndex: 0,
    width: screen.current.width * screen.current.ratio,
    height: screen.current.height * screen.current.ratio
  }));
};

__signature__(Game, "useState{[score, setScore](0)}\nuseState{[isGameOver, setIsGameOver](false)}\nuseState{[isPause, setIsPause](false)}\nuseRef{stopGame}\nuseRef{endGame}\nuseRef{scoreRef}\nuseRef{animationId}\nuseRef{screen}\nuseRef{canvasRef}\nuseState{[keys, setKeys]({\r\n    left: false,\r\n    right: false,\r\n    up: false,\r\n    down: false,\r\n    space: false,\r\n    f: false,\r\n  })}\nuseTimer{timer}\nuseEffect{}\nuseEffect{}", function () {
  return [_helpers_Timer__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

var _default = Game;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(KEY, "KEY", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\Game\\Game.tsx");
  reactHotLoader.register(Game, "Game", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\Game\\Game.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\Game\\Game.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Game/GameOver.tsx":
/*!******************************************!*\
  !*** ./src/components/Game/GameOver.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var GameOver = function GameOver(props) {
  var score = props.score,
      handlerStart = props.handlerStart;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game__message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "game__message--title"
  }, "GAME OVER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "game__message--text"
  }, "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C! \u0412\u0430\u0448 \u0441\u0447\u0435\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game__message--score"
  }, score), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "game__message--start",
    type: "button",
    onClick: handlerStart
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0432\u0441\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430")));
};

var _default = GameOver;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GameOver, "GameOver", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\Game\\GameOver.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\Game\\GameOver.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Game/GamePause.tsx":
/*!*******************************************!*\
  !*** ./src/components/Game/GamePause.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var GamePause = function GamePause() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game__message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "game__message--title"
  }, "\u041F\u0430\u0443\u0437\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "game__message--text"
  }, "\u0414\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F \u043D\u0430\u0436\u043C\u0438\u0442\u0435 ENTER")));
};

var _default = GamePause;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GamePause, "GamePause", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\Game\\GamePause.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\Game\\GamePause.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Game/GameTotal.tsx":
/*!*******************************************!*\
  !*** ./src/components/Game/GameTotal.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @helpers/TimeHelper */ "./src/helpers/TimeHelper.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var GameTotal = function GameTotal(props) {
  var score = props.score,
      seconds = props.seconds;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "score-right__timer"
  }, Object(_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_1__["timeFormat"])(seconds)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "score-right__score"
  }, score.toString().padStart(8, '0')));
};

var _default = GameTotal;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GameTotal, "GameTotal", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\Game\\GameTotal.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\Game\\GameTotal.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Game/game.less":
/*!***************************************!*\
  !*** ./src/components/Game/game.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Game/index.ts":
/*!**************************************!*\
  !*** ./src/components/Game/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/components/Game/Game.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Game__WEBPACK_IMPORTED_MODULE_0__["default"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



/***/ }),

/***/ "./src/components/PageLayout/PageLayout.tsx":
/*!**************************************************!*\
  !*** ./src/components/PageLayout/PageLayout.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/layout/layout */ "antd/es/layout/layout");
/* harmony import */ var antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_IsAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/IsAuth */ "./src/helpers/IsAuth.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var PageLayout = function PageLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    offset: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_3__["Header"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['1']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1"
  }, "\u0418\u0433\u0440\u0430\u0442\u044C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  })), !Object(_helpers_IsAuth__WEBPACK_IMPORTED_MODULE_4__["default"])() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "2"
  }, "\u0412\u0445\u043E\u0434", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/login"
  })), !Object(_helpers_IsAuth__WEBPACK_IMPORTED_MODULE_4__["default"])() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "3"
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/register"
  })), Object(_helpers_IsAuth__WEBPACK_IMPORTED_MODULE_4__["default"])() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "4"
  }, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/profile"
  })), Object(_helpers_IsAuth__WEBPACK_IMPORTED_MODULE_4__["default"])() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "5"
  }, "\u0414\u043E\u0441\u043A\u0430 \u043F\u043E\u0447\u0435\u0442\u0430", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/dashboard"
  })), Object(_helpers_IsAuth__WEBPACK_IMPORTED_MODULE_4__["default"])() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "6"
  }, "\u0424\u043E\u0440\u0443\u043C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/forum"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_3__["Content"], null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
    style: {
      textAlign: 'center'
    }
  }, "Game \xA9 2020 Created by Helsinki"));
}; // Exports


var _default = PageLayout;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageLayout, "PageLayout", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\PageLayout\\PageLayout.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\PageLayout\\PageLayout.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/PageLayout/index.ts":
/*!********************************************!*\
  !*** ./src/components/PageLayout/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageLayout */ "./src/components/PageLayout/PageLayout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PageLayout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



/***/ }),

/***/ "./src/components/PhonePrefixSelector/PhonePrefixSelector.tsx":
/*!********************************************************************!*\
  !*** ./src/components/PhonePrefixSelector/PhonePrefixSelector.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core
 // Components


var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

var PhonePrefixSelector = function PhonePrefixSelector() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    style: {
      width: 100
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "375"
  }, "+375"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "7"
  }, "+7"));
}; // Exports


var _default = PhonePrefixSelector;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\PhonePrefixSelector\\PhonePrefixSelector.tsx");
  reactHotLoader.register(PhonePrefixSelector, "PhonePrefixSelector", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\PhonePrefixSelector\\PhonePrefixSelector.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\components\\PhonePrefixSelector\\PhonePrefixSelector.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/PhonePrefixSelector/index.ts":
/*!*****************************************************!*\
  !*** ./src/components/PhonePrefixSelector/index.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhonePrefixSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhonePrefixSelector */ "./src/components/PhonePrefixSelector/PhonePrefixSelector.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PhonePrefixSelector__WEBPACK_IMPORTED_MODULE_0__["default"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



/***/ }),

/***/ "./src/helpers/ApiHelpers.ts":
/*!***********************************!*\
  !*** ./src/helpers/ApiHelpers.ts ***!
  \***********************************/
/*! exports provided: buildUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return buildUrl; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var basePath = 'https://ya-praktikum.tech/api/v2/';
var buildUrl = function buildUrl(path) {
  return basePath + path;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(basePath, "basePath", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\ApiHelpers.ts");
  reactHotLoader.register(buildUrl, "buildUrl", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\ApiHelpers.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/helpers/GameHelper.ts":
/*!***********************************!*\
  !*** ./src/helpers/GameHelper.ts ***!
  \***********************************/
/*! exports provided: rotatePoint, randomNumBetween, asteroidVertices, throttle, maxGameHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotatePoint", function() { return rotatePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNumBetween", function() { return randomNumBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asteroidVertices", function() { return asteroidVertices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxGameHeight", function() { return maxGameHeight; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

function rotatePoint(p, center, angle) {
  return {
    x: (p.x - center.x) * Math.cos(angle) - (p.y - center.y) * Math.sin(angle) + center.x,
    y: (p.x - center.x) * Math.sin(angle) + (p.y - center.y) * Math.cos(angle) + center.y
  };
}
function randomNumBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
}
function asteroidVertices(count, rad) {
  var p = [];

  for (var i = 0; i < count; i++) {
    p[i] = {
      x: (-Math.sin(360 / count * i * (Math.PI / 180)) + Math.round(Math.random() * 2 - 1) * (Math.random() / 3)) * rad,
      y: (-Math.cos(360 / count * i * (Math.PI / 180)) + Math.round(Math.random() * 2 - 1) * (Math.random() / 3)) * rad
    };
  }

  return p;
}
function throttle(func, ms) {
  var isThrottled = false;
  var savedArgs;
  var savedThis;

  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;

      if (savedArgs && savedThis) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
function maxGameHeight() {
  return document.fullscreenElement ? window.innerHeight : window.innerHeight - 150;
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rotatePoint, "rotatePoint", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\GameHelper.ts");
  reactHotLoader.register(randomNumBetween, "randomNumBetween", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\GameHelper.ts");
  reactHotLoader.register(asteroidVertices, "asteroidVertices", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\GameHelper.ts");
  reactHotLoader.register(throttle, "throttle", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\GameHelper.ts");
  reactHotLoader.register(maxGameHeight, "maxGameHeight", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\GameHelper.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/helpers/IsAuth.ts":
/*!*******************************!*\
  !*** ./src/helpers/IsAuth.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IsAuth; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_selectors_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/selectors/auth */ "./src/store/selectors/auth.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



function IsAuth() {
  var selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return selector.isUserInfo;
}

__signature__(IsAuth, "useSelector{selector}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IsAuth, "IsAuth", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\IsAuth.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/helpers/NotificationHelper.ts":
/*!*******************************************!*\
  !*** ./src/helpers/NotificationHelper.ts ***!
  \*******************************************/
/*! exports provided: openNotificationWithIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openNotificationWithIcon", function() { return openNotificationWithIcon; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var openNotificationWithIcon = function openNotificationWithIcon(type, message, description) {
  // @ts-ignore
  antd__WEBPACK_IMPORTED_MODULE_0__["notification"][type]({
    message: message,
    description: description
  });
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(openNotificationWithIcon, "openNotificationWithIcon", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\NotificationHelper.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/helpers/TimeHelper.ts":
/*!***********************************!*\
  !*** ./src/helpers/TimeHelper.ts ***!
  \***********************************/
/*! exports provided: timeFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

function timeFormat(s) {
  var str = '';
  var m = Math.floor(s / 60);
  var second = Math.floor(s - m * 60);
  str += m < 10 ? "0".concat(m.toString()) : m.toString();
  str += ':';
  str += second < 10 ? "0".concat(second.toString()) : second.toString();
  return str;
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(timeFormat, "timeFormat", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\TimeHelper.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/helpers/Timer.ts":
/*!******************************!*\
  !*** ./src/helpers/Timer.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function useTimer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      seconds = _useState2[0],
      setSeconds = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isRunning = _useState4[0],
      setIsRunning = _useState4[1];

  var intervalRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);

  var clearIntervalRef = function clearIntervalRef() {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = 0;
  };

  var start = function start() {
    if (intervalRef.current === 0) {
      setIsRunning(true);
      intervalRef.current = window.setInterval(function () {
        return setSeconds(function (s) {
          return s + 1;
        });
      }, 1000);
    }
  };

  var pause = function pause() {
    setIsRunning(false);
    clearIntervalRef();
  };

  var reset = function reset() {
    clearIntervalRef();
    setSeconds(0);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    start();
    return clearIntervalRef;
  }, []);
  return {
    seconds: seconds,
    start: start,
    pause: pause,
    reset: reset,
    isRunning: isRunning
  };
}

__signature__(useTimer, "useState{[seconds, setSeconds](0)}\nuseState{[isRunning, setIsRunning](true)}\nuseRef{intervalRef}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useTimer, "useTimer", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\helpers\\Timer.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/hooks/useAuth.ts":
/*!******************************!*\
  !*** ./src/hooks/useAuth.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_NotificationHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @helpers/NotificationHelper */ "./src/helpers/NotificationHelper.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actionCreators/auth */ "./src/store/actionCreators/auth.ts");
/* harmony import */ var _store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/selectors/auth */ "./src/store/selectors/auth.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







function useAuth() {
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__["default"]);

  var authUser = function authUser() {
    if (!selector.isUserInfo && !selector.error && !selector.loading) {
      dispatch(Object(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_4__["getUser"])());
    }

    if (selector.isAuth && selector.isUserInfo) {
      Object(_helpers_NotificationHelper__WEBPACK_IMPORTED_MODULE_2__["openNotificationWithIcon"])('success', 'Пользователь авторизован', '');
      history.push('/');
    }

    if (selector.error) {
      var _selector$errorData$r, _selector$errorData$r2;

      setError((_selector$errorData$r = selector.errorData.response) === null || _selector$errorData$r === void 0 ? void 0 : _selector$errorData$r.data);
      Object(_helpers_NotificationHelper__WEBPACK_IMPORTED_MODULE_2__["openNotificationWithIcon"])('error', 'Ошибка', (_selector$errorData$r2 = selector.errorData.response) === null || _selector$errorData$r2 === void 0 ? void 0 : _selector$errorData$r2.data.reason);
      history.push('/login');
    }
  };

  return [authUser, error];
}

__signature__(useAuth, "useHistory{history}\nuseState{[error, setError]}\nuseDispatch{dispatch}\nuseSelector{selector}", function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_1__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useAuth, "useAuth", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\hooks\\useAuth.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/ForumPage/Forum/ForumList/ForumList.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/ForumPage/Forum/ForumList/ForumList.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_style_themes_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/style/themes/default.less */ "./node_modules/antd/lib/style/themes/default.less");
/* harmony import */ var antd_lib_style_themes_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_style_themes_default_less__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var data = [{
  id: 1,
  title: 'Тема заголовок',
  description: 'Описание первой темы'
}, {
  id: 2,
  title: 'Тема заголовок',
  description: 'Описание второй темы'
}, {
  id: 3,
  title: 'Тема заголовок',
  description: 'Описание третей темы'
}, {
  id: 4,
  title: 'Тема заголовок',
  description: 'Описание четвёртой темы'
}];

var ForumList = function ForumList() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    offset: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/forum-page/".concat(item.id)
        }, item.title),
        description: item.description
      }));
    }
  })));
};

var _default = ForumList;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(data, "data", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ForumPage\\Forum\\ForumList\\ForumList.tsx");
  reactHotLoader.register(ForumList, "ForumList", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ForumPage\\Forum\\ForumList\\ForumList.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ForumPage\\Forum\\ForumList\\ForumList.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/ForumPage/Forum/ForumList/index.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/ForumPage/Forum/ForumList/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForumList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumList */ "./src/pages/ForumPage/Forum/ForumList/ForumList.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ForumList__WEBPACK_IMPORTED_MODULE_0__["default"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



/***/ }),

/***/ "./src/pages/ForumPage/ForumPage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/ForumPage/ForumPage.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_es_form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/form/Form */ "antd/es/form/Form");
/* harmony import */ var antd_es_form_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_es_form_Form__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var TextArea = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea;
var data = [{
  id: 1,
  text: 'Сообщение пользателя холивар холивар холивар.'
}, {
  id: 2,
  text: 'Сообщение пользателя холивар холивар холивар.'
}, {
  id: 3,
  text: 'Сообщение пользателя холивар холивар холивар.'
}];

var ForumPage = function ForumPage() {
  var _useForm = Object(antd_es_form_Form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      _useForm2 = _slicedToArray(_useForm, 1),
      form = _useForm2[0];

  var onFinish = function onFinish(values) {
    console.log('Success:', values);
  };

  var renderData = function renderData() {
    return data.map(function (message) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: message.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, message.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    offset: 6
  }, renderData(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "basic",
    onFinish: onFinish,
    layout: "vertical",
    hideRequiredMark: true,
    form: form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
    rows: 4
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")))));
};

__signature__(ForumPage, "useForm{[form]}", function () {
  return [antd_es_form_Form__WEBPACK_IMPORTED_MODULE_2__["useForm"]];
});

var _default = ForumPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, "TextArea", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ForumPage\\ForumPage.tsx");
  reactHotLoader.register(data, "data", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ForumPage\\ForumPage.tsx");
  reactHotLoader.register(ForumPage, "ForumPage", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ForumPage\\ForumPage.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ForumPage\\ForumPage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/GamePage/GamePage.tsx":
/*!*****************************************!*\
  !*** ./src/pages/GamePage/GamePage.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Game */ "./src/components/Game/index.ts");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useAuth */ "./src/hooks/useAuth.ts");
/* harmony import */ var _store_selectors_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/selectors/auth */ "./src/store/selectors/auth.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core


 // Helpers




var GamePage = function GamePage() {
  var _useAuth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      _useAuth2 = _slicedToArray(_useAuth, 1),
      authUser = _useAuth2[0];

  var selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_4__["default"]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    authUser();
  }, [selector]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Game__WEBPACK_IMPORTED_MODULE_2__["default"], null);
}; // Exports


__signature__(GamePage, "useAuth{[authUser]}\nuseSelector{selector}\nuseEffect{}", function () {
  return [_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__["default"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

var _default = GamePage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GamePage, "GamePage", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\GamePage\\GamePage.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\GamePage\\GamePage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/LeaderboardPage/LeaderboardPage.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/LeaderboardPage/LeaderboardPage.tsx ***!
  \*******************************************************/
/*! exports provided: leaderboardRequestData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaderboardRequestData", function() { return leaderboardRequestData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_NotificationHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/NotificationHelper */ "./src/helpers/NotificationHelper.ts");
/* harmony import */ var _store_actionCreators_leaderboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actionCreators/leaderboard */ "./src/store/actionCreators/leaderboard.ts");
/* harmony import */ var _Table_LeaderboardTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Table/LeaderboardTable */ "./src/pages/LeaderboardPage/Table/LeaderboardTable.tsx");
/* harmony import */ var _store_selectors_leaderboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/selectors/leaderboard */ "./src/store/selectors/leaderboard.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core








var leaderboardRequestData = {
  ratingFieldName: 'points',
  cursor: 0,
  limit: 10
};

var LeaderboardPage = function LeaderboardPage() {
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_selectors_leaderboard__WEBPACK_IMPORTED_MODULE_7__["default"]);

  if (selector.error) {
    var _selector$errorData$r;

    if (((_selector$errorData$r = selector.errorData.response) === null || _selector$errorData$r === void 0 ? void 0 : _selector$errorData$r.status) === 401) {
      history.push('/login');
    } else {
      Object(_helpers_NotificationHelper__WEBPACK_IMPORTED_MODULE_4__["openNotificationWithIcon"])('error', 'Ошибка', 'Что-то пошло не так');
    }
  }

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    dispatch(Object(_store_actionCreators_leaderboard__WEBPACK_IMPORTED_MODULE_5__["gotLeaderboard"])(leaderboardRequestData));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    offset: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Table_LeaderboardTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: selector.data
  })));
}; // Exports


__signature__(LeaderboardPage, "useHistory{history}\nuseSelector{selector}\nuseDispatch{dispatch}\nuseEffect{}", function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_1__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

var _default = LeaderboardPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(leaderboardRequestData, "leaderboardRequestData", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\LeaderboardPage\\LeaderboardPage.tsx");
  reactHotLoader.register(LeaderboardPage, "LeaderboardPage", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\LeaderboardPage\\LeaderboardPage.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\LeaderboardPage\\LeaderboardPage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/LeaderboardPage/Table/LeaderboardTable.tsx":
/*!**************************************************************!*\
  !*** ./src/pages/LeaderboardPage/Table/LeaderboardTable.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core
 // Components

 // Types

var columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Points',
  dataIndex: 'points',
  sorter: {
    compare: function compare(a, b) {
      return a.points - b.points;
    },
    multiple: 2
  }
}, {
  title: 'Date',
  dataIndex: 'date',
  sorter: {
    compare: function compare(a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    },
    multiple: 1
  }
}, {
  title: 'Country',
  dataIndex: 'country'
}];

var LeaderboardTable = function LeaderboardTable(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data
  });
}; // Exports


var _default = LeaderboardTable;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(columns, "columns", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\LeaderboardPage\\Table\\LeaderboardTable.tsx");
  reactHotLoader.register(LeaderboardTable, "LeaderboardTable", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\LeaderboardPage\\Table\\LeaderboardTable.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\LeaderboardPage\\Table\\LeaderboardTable.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/LoginPage/LoginForm/LoginForm.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/LoginPage/LoginForm/LoginForm.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core
 // Components



var LoginForm = function LoginForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u041B\u043E\u0433\u0438\u043D",
    name: "login",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u041F\u0430\u0440\u043E\u043B\u044C",
    name: "password",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, null)));
}; // Exports


var _default = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginForm, "LoginForm", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\LoginPage\\LoginForm\\LoginForm.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\LoginPage\\LoginForm\\LoginForm.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/LoginPage/LoginPage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/LoginPage/LoginPage.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_es_form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/form/Form */ "antd/es/form/Form");
/* harmony import */ var antd_es_form_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_es_form_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm/LoginForm */ "./src/pages/LoginPage/LoginForm/LoginForm.tsx");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useAuth */ "./src/hooks/useAuth.ts");
/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actionCreators/auth */ "./src/store/actionCreators/auth.ts");
/* harmony import */ var _store_selectors_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/selectors/auth */ "./src/store/selectors/auth.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core

 // Components




 // Types

// Helpers




var LoginPage = function LoginPage() {
  var _useForm = Object(antd_es_form_Form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      _useForm2 = _slicedToArray(_useForm, 1),
      form = _useForm2[0];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useAuth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      _useAuth2 = _slicedToArray(_useAuth, 1),
      authUser = _useAuth2[0];

  var selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_8__["default"]);

  var onFinish = function onFinish(values) {
    dispatch(Object(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_7__["login"])(values));
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    authUser();
  }, [selector]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "basic",
    onFinish: onFinish,
    layout: "vertical",
    hideRequiredMark: true,
    form: form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    offset: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    htmlType: "button"
  }, "\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "\u0412\u043E\u0439\u0442\u0438"))))));
}; // Exports


__signature__(LoginPage, "useForm{[form]}\nuseDispatch{dispatch}\nuseAuth{[authUser]}\nuseSelector{selector}\nuseEffect{}", function () {
  return [antd_es_form_Form__WEBPACK_IMPORTED_MODULE_2__["useForm"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__["default"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

var _default = LoginPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginPage, "LoginPage", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\LoginPage\\LoginPage.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\LoginPage\\LoginPage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/ProfilePage/ProfileForm/ProfileForm.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/ProfilePage/ProfileForm/ProfileForm.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_UserApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/UserApi */ "./src/api/UserApi.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core
 // Components


 // Api

 // Types

var ProfileForm = function ProfileForm(_ref) {
  var avatar = _ref.avatar;

  var onAvatarUpload = function onAvatarUpload(e) {
    if (e.target.files) {
      _api_UserApi__WEBPACK_IMPORTED_MODULE_3__["default"].uploadAvatar(e.target.files[0]);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, avatar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    shape: "square",
    size: 64,
    src: avatar
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    shape: "square",
    size: 64,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u0410\u0432\u0430\u0442\u0430\u0440",
    name: "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "file",
    onChange: onAvatarUpload
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0435 \u0438\u043C\u044F",
    name: "display_name",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u0418\u043C\u044F",
    name: "first_name",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
    name: "second_name",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u041B\u043E\u0433\u0438\u043D",
    name: "login",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u041F\u043E\u0447\u0442\u0430",
    name: "email",
    rules: [{
      required: true,
      type: 'email',
      message: 'Неверный email'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    name: "phone",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    maxLength: 12
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    name: "oldPassword"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    name: "newPassword"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, null)));
};

var _default = ProfileForm;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProfileForm, "ProfileForm", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ProfilePage\\ProfileForm\\ProfileForm.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ProfilePage\\ProfileForm\\ProfileForm.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.tsx":
/*!***********************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_es_form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/form/Form */ "antd/es/form/Form");
/* harmony import */ var antd_es_form_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_es_form_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProfileForm_ProfileForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileForm/ProfileForm */ "./src/pages/ProfilePage/ProfileForm/ProfileForm.tsx");
/* harmony import */ var _api_AuthApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/AuthApi */ "./src/api/AuthApi.ts");
/* harmony import */ var _api_UserApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/UserApi */ "./src/api/UserApi.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core

 // Components



 // Types

// Api



var ProfilePage = function ProfilePage() {
  var _useForm = Object(antd_es_form_Form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      _useForm2 = _slicedToArray(_useForm, 1),
      form = _useForm2[0];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      avatar = _React$useState2[0],
      setAvatar = _React$useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _api_AuthApi__WEBPACK_IMPORTED_MODULE_5__["default"].getUser().then(function (user) {
      setAvatar("https://ya-praktikum.tech".concat(user.avatar));
      form.setFieldsValue({
        first_name: user.first_name,
        second_name: user.second_name,
        display_name: user.display_name,
        login: user.login,
        phone: user.phone,
        email: user.email
      });
    })["catch"](function (error) {
      console.log(error);
    });
  });
  var handleOk = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (values) {
    _api_UserApi__WEBPACK_IMPORTED_MODULE_6__["default"].editProfile(values);

    if (values.oldPassword && values.newPassword) {
      _api_UserApi__WEBPACK_IMPORTED_MODULE_6__["default"].changePassword({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword
      });
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    name: "basic",
    onFinish: handleOk,
    layout: "vertical",
    hideRequiredMark: true,
    form: form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    offset: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileForm_ProfileForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    avatar: avatar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    htmlType: "button"
  }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")))))));
}; // Exports


__signature__(ProfilePage, "useForm{[form]}\nuseState{[avatar, setAvatar]('')}\nuseEffect{}\nuseCallback{handleOk}", function () {
  return [antd_es_form_Form__WEBPACK_IMPORTED_MODULE_3__["useForm"]];
});

var _default = ProfilePage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProfilePage, "ProfilePage", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ProfilePage\\ProfilePage.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\ProfilePage\\ProfilePage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/RegisterPage/RegistrationForm/RegistrationForm.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages/RegisterPage/RegistrationForm/RegistrationForm.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PhonePrefixSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/PhonePrefixSelector */ "./src/components/PhonePrefixSelector/index.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core
 // Components



var PrefixSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "prefix",
  noStyle: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhonePrefixSelector__WEBPACK_IMPORTED_MODULE_2__["default"], null));

var RegistrationForm = function RegistrationForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u0418\u043C\u044F",
    name: "first_name",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
    name: "second_name",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u041B\u043E\u0433\u0438\u043D",
    name: "login",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u041F\u043E\u0447\u0442\u0430",
    name: "email",
    rules: [{
      required: true,
      type: 'email',
      message: 'Неверный email'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    name: "phone",
    rules: [{
      required: true,
      message: 'Заполните поле!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    maxLength: 9,
    addonBefore: PrefixSelector
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\u041F\u0430\u0440\u043E\u043B\u044C",
    name: "password",
    rules: [{
      required: true,
      message: 'Введите пароль!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, null)));
}; // Exports


var _default = RegistrationForm;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PrefixSelector, "PrefixSelector", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\RegisterPage\\RegistrationForm\\RegistrationForm.tsx");
  reactHotLoader.register(RegistrationForm, "RegistrationForm", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\RegisterPage\\RegistrationForm\\RegistrationForm.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\RegisterPage\\RegistrationForm\\RegistrationForm.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/RegisterPage/RegistrationPage.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/RegisterPage/RegistrationPage.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_es_form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/form/Form */ "antd/es/form/Form");
/* harmony import */ var antd_es_form_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_es_form_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_NotificationHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/NotificationHelper */ "./src/helpers/NotificationHelper.ts");
/* harmony import */ var _RegistrationForm_RegistrationForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RegistrationForm/RegistrationForm */ "./src/pages/RegisterPage/RegistrationForm/RegistrationForm.tsx");
/* harmony import */ var _api_AuthApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/AuthApi */ "./src/api/AuthApi.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Core


 // Components




 // Types

// Api
 // Helpers

var RegistrationPage = function RegistrationPage() {
  var _useForm = Object(antd_es_form_Form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      _useForm2 = _slicedToArray(_useForm, 1),
      form = _useForm2[0];

  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var onFinish = function onFinish(values) {
    _api_AuthApi__WEBPACK_IMPORTED_MODULE_7__["default"].signUp(values).then(function () {
      Object(_helpers_NotificationHelper__WEBPACK_IMPORTED_MODULE_5__["openNotificationWithIcon"])('success', 'Успех', 'Пользователь успешно создан!');
      history.push('/');
    })["catch"](function (err) {
      Object(_helpers_NotificationHelper__WEBPACK_IMPORTED_MODULE_5__["openNotificationWithIcon"])('error', 'Ошибка', err.response.data.reason);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    name: "basic",
    onFinish: onFinish,
    layout: "vertical",
    hideRequiredMark: true,
    form: form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 12,
    offset: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    title: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegistrationForm_RegistrationForm__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Space"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "./login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    htmlType: "button"
  }, "\u0412\u043E\u0439\u0442\u0438")))))));
}; // Exports


__signature__(RegistrationPage, "useForm{[form]}\nuseHistory{history}", function () {
  return [antd_es_form_Form__WEBPACK_IMPORTED_MODULE_3__["useForm"], react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

var _default = RegistrationPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RegistrationPage, "RegistrationPage", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\RegisterPage\\RegistrationPage.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\pages\\RegisterPage\\RegistrationPage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/server-render-middleware.tsx":
/*!******************************************!*\
  !*** ./src/server-render-middleware.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var _default = function _default(req, res) {
  var jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  var reactHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(jsx);
  res.send(getHtml(reactHtml));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);

function getHtml(reactHtml) {
  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        <link rel=\"shortcut icon\" type=\"image/png\" href=\"/images/favicon.jpg\">\n        <title>Sneakers shop</title>\n        <link href=\"/main.css\" rel=\"stylesheet\">\n    </head>\n    <body>\n        <div id=\"root\">".concat(reactHtml, "</div>\n        <script src=\"/main.js\"></script>\n    </body>\n    </html>\n    ");
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getHtml, "getHtml", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\server-render-middleware.tsx");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\server-render-middleware.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, __dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_render_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-render-middleware */ "./src/server-render-middleware.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var app = express__WEBPACK_IMPORTED_MODULE_1___default()(); // Рекомендую использовать только для разработки
// А в production раздавать статику через Nginx или CDN

app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a["static"](path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '../public'))).use(express__WEBPACK_IMPORTED_MODULE_1___default.a["static"](path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '../build')));
app.get('/*', _server_render_middleware__WEBPACK_IMPORTED_MODULE_3__["default"]);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\server.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), "/"))

/***/ }),

/***/ "./src/store/actionCreators/auth.ts":
/*!******************************************!*\
  !*** ./src/store/actionCreators/auth.ts ***!
  \******************************************/
/*! exports provided: requestAuth, requestAuthSuccess, requestAuthError, login, getUser, getUserSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAuth", function() { return requestAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAuthSuccess", function() { return requestAuthSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAuthError", function() { return requestAuthError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserSuccess", function() { return getUserSuccess; });
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth */ "./src/store/actions/auth.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var requestAuth = function requestAuth() {
  return {
    type: _actions_auth__WEBPACK_IMPORTED_MODULE_0__["default"].requested
  };
};
var requestAuthSuccess = function requestAuthSuccess(isAuth) {
  return {
    type: _actions_auth__WEBPACK_IMPORTED_MODULE_0__["default"].succeeded,
    isAuth: isAuth
  };
};
var requestAuthError = function requestAuthError(error) {
  return {
    type: _actions_auth__WEBPACK_IMPORTED_MODULE_0__["default"].failed,
    error: error
  };
};
var login = function login(values) {
  return {
    type: _actions_auth__WEBPACK_IMPORTED_MODULE_0__["default"].login,
    values: values
  };
};
var getUser = function getUser() {
  return {
    type: _actions_auth__WEBPACK_IMPORTED_MODULE_0__["default"].getUser
  };
};
var getUserSuccess = function getUserSuccess(isAuth, userData) {
  return {
    type: _actions_auth__WEBPACK_IMPORTED_MODULE_0__["default"].getUserSucceeded,
    isAuth: isAuth,
    userData: userData
  };
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(requestAuth, "requestAuth", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actionCreators\\auth.ts");
  reactHotLoader.register(requestAuthSuccess, "requestAuthSuccess", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actionCreators\\auth.ts");
  reactHotLoader.register(requestAuthError, "requestAuthError", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actionCreators\\auth.ts");
  reactHotLoader.register(login, "login", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actionCreators\\auth.ts");
  reactHotLoader.register(getUser, "getUser", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actionCreators\\auth.ts");
  reactHotLoader.register(getUserSuccess, "getUserSuccess", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actionCreators\\auth.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/actionCreators/leaderboard.ts":
/*!*************************************************!*\
  !*** ./src/store/actionCreators/leaderboard.ts ***!
  \*************************************************/
/*! exports provided: requestLeaderboard, requestLeaderboardSuccess, requestLeaderboardError, gotLeaderboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestLeaderboard", function() { return requestLeaderboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestLeaderboardSuccess", function() { return requestLeaderboardSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestLeaderboardError", function() { return requestLeaderboardError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gotLeaderboard", function() { return gotLeaderboard; });
/* harmony import */ var _actions_leaderboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/leaderboard */ "./src/store/actions/leaderboard.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var requestLeaderboard = function requestLeaderboard() {
  return {
    type: _actions_leaderboard__WEBPACK_IMPORTED_MODULE_0__["default"].requested
  };
};
var requestLeaderboardSuccess = function requestLeaderboardSuccess(data) {
  return {
    type: _actions_leaderboard__WEBPACK_IMPORTED_MODULE_0__["default"].succeeded,
    data: data
  };
};
var requestLeaderboardError = function requestLeaderboardError(error) {
  return {
    type: _actions_leaderboard__WEBPACK_IMPORTED_MODULE_0__["default"].failed,
    error: error
  };
};
var gotLeaderboard = function gotLeaderboard(leaderboardRequestData) {
  return {
    type: _actions_leaderboard__WEBPACK_IMPORTED_MODULE_0__["default"].got_leaderboard,
    leaderboardRequestData: leaderboardRequestData
  };
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(requestLeaderboard, "requestLeaderboard", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actionCreators\\leaderboard.ts");
  reactHotLoader.register(requestLeaderboardSuccess, "requestLeaderboardSuccess", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actionCreators\\leaderboard.ts");
  reactHotLoader.register(requestLeaderboardError, "requestLeaderboardError", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actionCreators\\leaderboard.ts");
  reactHotLoader.register(gotLeaderboard, "gotLeaderboard", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actionCreators\\leaderboard.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/actions/auth.ts":
/*!***********************************!*\
  !*** ./src/store/actions/auth.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var authActions;

(function (authActions) {
  authActions["requested"] = "REQUESTED_AUTH";
  authActions["succeeded"] = "REQUESTED_AUTH_SUCCEEDED";
  authActions["failed"] = "REQUESTED_AUTH_FAILED";
  authActions["login"] = "LOGIN";
  authActions["getUser"] = "GET_USER";
  authActions["getUserSucceeded"] = "GET_USER_SUCCEEDED";
})(authActions || (authActions = {}));

var _default = authActions;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actions\\auth.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/actions/leaderboard.ts":
/*!******************************************!*\
  !*** ./src/store/actions/leaderboard.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var leaderboardActions;

(function (leaderboardActions) {
  leaderboardActions["requested"] = "REQUESTED_LEADERBOARD";
  leaderboardActions["succeeded"] = "REQUESTED_LEADERBOARD_SUCCEEDED";
  leaderboardActions["failed"] = "REQUESTED_LEADERBOARD_FAILED";
  leaderboardActions["got_leaderboard"] = "GOT_LEADERBOARD";
})(leaderboardActions || (leaderboardActions = {}));

var _default = leaderboardActions;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\actions\\leaderboard.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/selectors/auth.ts":
/*!*************************************!*\
  !*** ./src/store/selectors/auth.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var authSelector = function authSelector(state) {
  return state.auth;
};

var _default = authSelector;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(authSelector, "authSelector", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\selectors\\auth.ts");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\selectors\\auth.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/selectors/leaderboard.ts":
/*!********************************************!*\
  !*** ./src/store/selectors/leaderboard.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var leaderboardSelector = function leaderboardSelector(state) {
  return state.leaderboard;
};

var _default = leaderboardSelector;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(leaderboardSelector, "leaderboardSelector", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\selectors\\leaderboard.ts");
  reactHotLoader.register(_default, "default", "G:\\work\\WebServers\\home\\praktikum\\Asteroids\\src\\store\\selectors\\leaderboard.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/es/form/Form":
/*!************************************!*\
  !*** external "antd/es/form/Form" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/form/Form");

/***/ }),

/***/ "antd/es/layout/layout":
/*!****************************************!*\
  !*** external "antd/es/layout/layout" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/layout/layout");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGkvQXV0aEFwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL1VzZXJBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXN0ZXJvaWQvQXN0ZXJvaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQnVsbGV0L0J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9QYXJ0aWNsZS9QYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9TaGlwL1NoaXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lT3Zlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lUGF1c2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZVRvdGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlTGF5b3V0L1BhZ2VMYXlvdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Bob25lUHJlZml4U2VsZWN0b3IvUGhvbmVQcmVmaXhTZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvQXBpSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9HYW1lSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL0lzQXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9Ob3RpZmljYXRpb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvVGltZUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9UaW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlQXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRm9ydW1QYWdlL0ZvcnVtL0ZvcnVtTGlzdC9Gb3J1bUxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Gb3J1bVBhZ2UvRm9ydW1QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvR2FtZVBhZ2UvR2FtZVBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9MZWFkZXJib2FyZFBhZ2UvTGVhZGVyYm9hcmRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTGVhZGVyYm9hcmRQYWdlL1RhYmxlL0xlYWRlcmJvYXJkVGFibGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Mb2dpblBhZ2UvTG9naW5Gb3JtL0xvZ2luRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0xvZ2luUGFnZS9Mb2dpblBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Qcm9maWxlUGFnZS9Qcm9maWxlRm9ybS9Qcm9maWxlRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1Byb2ZpbGVQYWdlL1Byb2ZpbGVQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlL1JlZ2lzdHJhdGlvbkZvcm0vUmVnaXN0cmF0aW9uRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS9SZWdpc3RyYXRpb25QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLXJlbmRlci1taWRkbGV3YXJlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25DcmVhdG9ycy9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25DcmVhdG9ycy9sZWFkZXJib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL2xlYWRlcmJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zZWxlY3RvcnMvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc2VsZWN0b3JzL2xlYWRlcmJvYXJkLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvZXMvZm9ybS9Gb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9lcy9sYXlvdXQvbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiXSwibmFtZXMiOlsiQXBwIiwiR2FtZVBhZ2UiLCJMb2dpblBhZ2UiLCJSZWdpc3RyYXRpb25QYWdlIiwiUHJvZmlsZVBhZ2UiLCJMZWFkZXJib2FyZFRhYmxlIiwiRm9ydW1MaXN0IiwiRm9ydW1QYWdlIiwiQXV0aEFwaSIsImRhdGEiLCJ1cmwiLCJidWlsZFVybCIsImF4aW9zIiwicG9zdCIsInJlc3BvbnNlIiwid2l0aENyZWRlbnRpYWxzIiwiZ2V0IiwiVXNlckFwaSIsIm1ldGhvZCIsImF2YXRhciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJoZWFkZXJzIiwidHlwZSIsImlkIiwibG9naW4iLCJBc3Rlcm9pZCIsImFyZ3MiLCJyYWRpdXMiLCJzaXplIiwidmVsb2NpdHkiLCJ4IiwicmFuZG9tTnVtQmV0d2VlbiIsInkiLCJwb3NpdGlvbiIsInJvdGF0aW9uIiwicm90YXRpb25TcGVlZCIsInNjb3JlIiwidmVydGljZXMiLCJhc3Rlcm9pZFZlcnRpY2VzIiwiYWRkU2NvcmUiLCJjcmVhdGUiLCJpIiwicGFydGljbGUiLCJQYXJ0aWNsZSIsImxpZmVTcGFuIiwiYXN0ZXJvaWQiLCJiaW5kIiwic3RhdGUiLCJzY3JlZW4iLCJ3aWR0aCIsImhlaWdodCIsImNvbnRleHQiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsZW5ndGgiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJyZXN0b3JlIiwiQnVsbGV0IiwicG9zRGVsdGEiLCJyb3RhdGVQb2ludCIsImRlc3Ryb3kiLCJmaWxsU3R5bGUiLCJhcmMiLCJmaWxsIiwiaW5lcnRpYSIsIlNoaXAiLCJzaW4iLCJzcGVlZCIsImNvcyIsImxhc3RTaG90Iiwib25EaWUiLCJkaXIiLCJrZXlzIiwidXAiLCJhY2NlbGVyYXRlIiwibGVmdCIsInJpZ2h0Iiwic3BhY2UiLCJEYXRlIiwibm93IiwiYnVsbGV0IiwiS0VZIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJBIiwiRCIsIlciLCJTUEFDRSIsIkVTQ0FQRSIsIkVOVEVSIiwiRiIsIkdhbWUiLCJ1c2VTdGF0ZSIsInNldFNjb3JlIiwiaXNHYW1lT3ZlciIsInNldElzR2FtZU92ZXIiLCJpc1BhdXNlIiwic2V0SXNQYXVzZSIsInN0b3BHYW1lIiwidXNlUmVmIiwiZW5kR2FtZSIsInNjb3JlUmVmIiwiYW5pbWF0aW9uSWQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWF4R2FtZUhlaWdodCIsInJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImNhbnZhc1JlZiIsImRvd24iLCJmIiwic2V0S2V5cyIsInRpbWVyIiwidXNlVGltZXIiLCJhc3Rlcm9pZHNDb3VudCIsIm9iamVjdHMiLCJzaGlwcyIsImJ1bGxldHMiLCJhc3Rlcm9pZHMiLCJwYXJ0aWNsZXMiLCJoYW5kbGVLZXlzIiwiZXZlbnQiLCJ2YWx1ZSIsImtleXNWYWwiLCJrZXkiLCJoYW5kbGVLZXlEb3duIiwicGF1c2UiLCJpbmNsdWRlcyIsInRvZ2dsZUZ1bGxTY3JlZW4iLCJoYW5kbGVLZXlVcCIsInMiLCJjdXJyZW50IiwiZ2VuZXJhdGVBc3Rlcm9pZHMiLCJjb3VudCIsImNyZWF0ZU9iamVjdCIsInJlc3RhcnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwicmVzZXQiLCJzaGlwIiwiZ2FtZU92ZXIiLCJnZXRDb250ZXh0IiwidW5kZWZpbmVkIiwic2NhbGUiLCJnbG9iYWxBbHBoYSIsImZpbGxSZWN0IiwidXBkYXRlT2JqZWN0cyIsImNoZWNrQ29sbGlzaW9uc1dpdGgiLCJpdGVtcyIsImdyb3VwIiwiaW5kZXgiLCJpdGVtIiwiaXNEZWxldGUiLCJzcGxpY2UiLCJ0bXAiLCJyZW5kZXIiLCJwdXNoIiwiaXRlbXMxIiwiaXRlbXMyIiwiaiIsIml0ZW0xIiwiaXRlbTIiLCJjaGVja0NvbGxpc2lvbiIsIm9iajEiLCJvYmoyIiwidngiLCJ2eSIsInNxcnQiLCJyZXNpemUiLCJnYW1lQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmdWxsc2NyZWVuRWxlbWVudCIsInJlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJyZXNpemVUaHJvdHRsZSIsInRocm90dGxlIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWNvbmRzIiwiR2FtZU92ZXIiLCJwcm9wcyIsImhhbmRsZXJTdGFydCIsIkdhbWVQYXVzZSIsIkdhbWVUb3RhbCIsInRpbWVGb3JtYXQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiUGFnZUxheW91dCIsImNoaWxkcmVuIiwiSXNBdXRoIiwidGV4dEFsaWduIiwiT3B0aW9uIiwiU2VsZWN0IiwiUGhvbmVQcmVmaXhTZWxlY3RvciIsImJhc2VQYXRoIiwicGF0aCIsInAiLCJjZW50ZXIiLCJhbmdsZSIsIm1pbiIsIm1heCIsInJhbmRvbSIsInJhZCIsInJvdW5kIiwiZnVuYyIsIm1zIiwiaXNUaHJvdHRsZWQiLCJzYXZlZEFyZ3MiLCJzYXZlZFRoaXMiLCJ3cmFwcGVyIiwiYXBwbHkiLCJzZXRUaW1lb3V0IiwiaW5uZXJIZWlnaHQiLCJzZWxlY3RvciIsInVzZVNlbGVjdG9yIiwiYXV0aFNlbGVjdG9yIiwiaXNVc2VySW5mbyIsIm9wZW5Ob3RpZmljYXRpb25XaXRoSWNvbiIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsIm5vdGlmaWNhdGlvbiIsInN0ciIsIm0iLCJmbG9vciIsInNlY29uZCIsInNldFNlY29uZHMiLCJpc1J1bm5pbmciLCJzZXRJc1J1bm5pbmciLCJpbnRlcnZhbFJlZiIsImNsZWFySW50ZXJ2YWxSZWYiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ1c2VBdXRoIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJlcnJvciIsInNldEVycm9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImF1dGhVc2VyIiwibG9hZGluZyIsImdldFVzZXIiLCJpc0F1dGgiLCJlcnJvckRhdGEiLCJyZWFzb24iLCJ0aXRsZSIsIlRleHRBcmVhIiwiSW5wdXQiLCJ0ZXh0IiwidXNlRm9ybSIsImZvcm0iLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJEYXRhIiwibWFwIiwiUmVhY3QiLCJsZWFkZXJib2FyZFJlcXVlc3REYXRhIiwicmF0aW5nRmllbGROYW1lIiwiY3Vyc29yIiwibGltaXQiLCJMZWFkZXJib2FyZFBhZ2UiLCJsZWFkZXJib2FyZFNlbGVjdG9yIiwic3RhdHVzIiwiZ290TGVhZGVyYm9hcmQiLCJjb2x1bW5zIiwiZGF0YUluZGV4Iiwic29ydGVyIiwiY29tcGFyZSIsImEiLCJiIiwicG9pbnRzIiwibXVsdGlwbGUiLCJkYXRlIiwiZ2V0VGltZSIsIkxvZ2luRm9ybSIsInJlcXVpcmVkIiwiUHJvZmlsZUZvcm0iLCJvbkF2YXRhclVwbG9hZCIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsInVwbG9hZEF2YXRhciIsInNldEF2YXRhciIsInRoZW4iLCJ1c2VyIiwic2V0RmllbGRzVmFsdWUiLCJmaXJzdF9uYW1lIiwic2Vjb25kX25hbWUiLCJkaXNwbGF5X25hbWUiLCJwaG9uZSIsImVtYWlsIiwiaGFuZGxlT2siLCJ1c2VDYWxsYmFjayIsImVkaXRQcm9maWxlIiwib2xkUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImNoYW5nZVBhc3N3b3JkIiwiUHJlZml4U2VsZWN0b3IiLCJSZWdpc3RyYXRpb25Gb3JtIiwic2lnblVwIiwiZXJyIiwicmVxIiwicmVzIiwianN4IiwicmVhY3RIdG1sIiwicmVuZGVyVG9TdHJpbmciLCJzZW5kIiwiZ2V0SHRtbCIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwic2VydmVyUmVuZGVyTWlkZGxld2FyZSIsInJlcXVlc3RBdXRoIiwiYXV0aEFjdGlvbnMiLCJyZXF1ZXN0ZWQiLCJyZXF1ZXN0QXV0aFN1Y2Nlc3MiLCJzdWNjZWVkZWQiLCJyZXF1ZXN0QXV0aEVycm9yIiwiZmFpbGVkIiwiZ2V0VXNlclN1Y2Nlc3MiLCJ1c2VyRGF0YSIsImdldFVzZXJTdWNjZWVkZWQiLCJyZXF1ZXN0TGVhZGVyYm9hcmQiLCJsZWFkZXJib2FyZEFjdGlvbnMiLCJyZXF1ZXN0TGVhZGVyYm9hcmRTdWNjZXNzIiwicmVxdWVzdExlYWRlcmJvYXJkRXJyb3IiLCJnb3RfbGVhZGVyYm9hcmQiLCJhdXRoIiwibGVhZGVyYm9hcmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFhLEdBQUcsU0FBaEJBLEdBQWdCO0FBQUEsc0JBQ3BCLDJEQUFDLDhEQUFELHFCQUNFLDJEQUFDLHVEQUFELHFCQUNFLDJEQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBZ0IsYUFBUyxFQUFFQyxnRUFBM0I7QUFBcUMsU0FBSztBQUExQyxJQURGLGVBRUUsMkRBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFTLEVBQUVDLGtFQUFoQztBQUEyQyxTQUFLO0FBQWhELElBRkYsZUFHRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQyxXQUFaO0FBQXdCLGFBQVMsRUFBRUMsNEVBQW5DO0FBQXFELFNBQUs7QUFBMUQsSUFIRixlQUlFLDJEQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsYUFBUyxFQUFFQyxzRUFBbEM7QUFBK0MsU0FBSztBQUFwRCxJQUpGLGVBS0UsMkRBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsWUFBWjtBQUF5QixhQUFTLEVBQUVDLDhFQUFwQztBQUFzRCxTQUFLO0FBQTNELElBTEYsZUFNRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLGFBQVMsRUFBRUMsd0VBQWhDO0FBQTJDLFNBQUs7QUFBaEQsSUFORixlQU9FLDJEQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLGlCQUFaO0FBQThCLGFBQVMsRUFBRUMsa0VBQXpDO0FBQW9ELFNBQUs7QUFBekQsSUFQRixlQVFFLDJEQUFDLHlEQUFEO0FBQVUsTUFBRSxFQUFDO0FBQWIsSUFSRixDQURGLENBRG9CO0FBQUEsQ0FBdEIsQyxDQWVBOzs7ZUFDZVAsRztBQUFBOzs7Ozs7Ozs7OzBCQWhCVEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTjtBQUVBOztJQUVNUSxPOzs7O2dCQUFBQSxPO3FFQUNjLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxlQURRLEdBQ0ZDLG9FQUFRLENBQUMsYUFBRCxDQUROO0FBQUE7QUFBQSxtQkFFU0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXSCxHQUFYLEVBQWdCRCxJQUFoQixDQUZUOztBQUFBO0FBRVJLLG9CQUZRO0FBQUEsNkNBSVBBLFFBQVEsQ0FBQ0wsSUFKRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7O2dCQURkRCxPO3NFQVFjLGtCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxlQURRLEdBQ0ZDLG9FQUFRLENBQUMsYUFBRCxDQUROO0FBQUE7QUFBQSxtQkFFU0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXSCxHQUFYLEVBQWdCRCxJQUFoQixFQUFzQjtBQUFFTSw2QkFBZSxFQUFFO0FBQW5CLGFBQXRCLENBRlQ7O0FBQUE7QUFFUkQsb0JBRlE7QUFBQSw4Q0FJUEEsUUFBUSxDQUFDTCxJQUpGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Z0JBUmRELE8sa0ZBZWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RFLGFBRFMsR0FDSEMsb0VBQVEsQ0FBQyxXQUFELENBREw7QUFBQTtBQUFBLGlCQUVRQyw0Q0FBSyxDQUFDSSxHQUFOLENBQVVOLEdBQVYsRUFBZTtBQUFFSywyQkFBZSxFQUFFO0FBQW5CLFdBQWYsQ0FGUjs7QUFBQTtBQUVURCxrQkFGUztBQUFBLDRDQUlSQSxRQUFRLENBQUNMLElBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQzs7Z0JBZmZELE8saUZBc0JjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSRSxhQURRLEdBQ0ZDLG9FQUFRLENBQUMsYUFBRCxDQUROO0FBQUE7QUFBQSxpQkFHREMsNENBQUssQ0FBQ0MsSUFBTixDQUFXSCxHQUFYLENBSEM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDOztlQU9MRixPO0FBQUE7Ozs7Ozs7Ozs7MEJBN0JUQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSk47QUFFQTs7SUFFTVMsTzs7OztnQkFBQUEsTztxRUFDbUIsaUJBQU9SLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLGVBRGEsR0FDUEMsb0VBQVEsQ0FBQyxjQUFELENBREQ7QUFBQTtBQUFBLG1CQUdJQyw0Q0FBSyxDQUFDO0FBQzNCTSxvQkFBTSxFQUFFLEtBRG1CO0FBRTNCUixpQkFBRyxFQUFIQSxHQUYyQjtBQUczQkssNkJBQWUsRUFBRSxJQUhVO0FBSTNCTixrQkFBSSxFQUFKQTtBQUoyQixhQUFELENBSFQ7O0FBQUE7QUFHYkssb0JBSGE7QUFBQSw2Q0FVWkEsUUFBUSxDQUFDTCxJQVZHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Z0JBRG5CUSxPO3NFQWNvQixrQkFBT0UsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZFQsZUFEYyxHQUNSQyxvRUFBUSxDQUFDLHFCQUFELENBREE7QUFHZFMsb0JBSGMsR0FHSCxJQUFJQyxRQUFKLEVBSEc7QUFJcEJELG9CQUFRLENBQUNFLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEJILE1BQTFCO0FBSm9CO0FBQUEsbUJBTUdQLDRDQUFLLENBQUM7QUFDM0JNLG9CQUFNLEVBQUUsS0FEbUI7QUFFM0JLLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0JKLE1BQU0sQ0FBQ0s7QUFEaEIsZUFGa0I7QUFLM0JkLGlCQUFHLEVBQUhBLEdBTDJCO0FBTTNCSyw2QkFBZSxFQUFFLElBTlU7QUFPM0JOLGtCQUFJLEVBQUVXO0FBUHFCLGFBQUQsQ0FOUjs7QUFBQTtBQU1kTixvQkFOYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7O2dCQWRwQkcsTztzRUErQnNCLGtCQUFPUixJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkMsZUFEZ0IsR0FDVkMsb0VBQVEsQ0FBQyxlQUFELENBREU7QUFBQTtBQUFBLG1CQUdDQyw0Q0FBSyxDQUFDO0FBQzNCTSxvQkFBTSxFQUFFLEtBRG1CO0FBRTNCUixpQkFBRyxFQUFIQSxHQUYyQjtBQUczQkssNkJBQWUsRUFBRSxJQUhVO0FBSTNCTixrQkFBSSxFQUFKQTtBQUoyQixhQUFELENBSE47O0FBQUE7QUFHaEJLLG9CQUhnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7O2dCQS9CdEJHLE87c0VBMENlLGtCQUFPUSxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUZixlQURTLEdBQ0hDLG9FQUFRLGdCQUFTYyxFQUFULEVBREw7QUFBQTtBQUFBLG1CQUVRYiw0Q0FBSyxDQUFDSSxHQUFOLENBQVVOLEdBQVYsRUFBZTtBQUFFSyw2QkFBZSxFQUFFO0FBQW5CLGFBQWYsQ0FGUjs7QUFBQTtBQUVURCxvQkFGUztBQUFBLDhDQUlSQSxRQUFRLENBQUNMLElBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7OztnQkExQ2ZRLE87c0VBaURpQixrQkFBT1MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWGhCLGVBRFcsR0FDTEMsb0VBQVEsQ0FBQyxhQUFELENBREg7QUFBQTtBQUFBLG1CQUVNQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdILEdBQVgsRUFBZ0I7QUFBRWdCLG1CQUFLLEVBQUxBO0FBQUYsYUFBaEIsQ0FGTjs7QUFBQTtBQUVYWixvQkFGVztBQUFBLDhDQUlWQSxRQUFRLENBQUNMLElBSkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7OztlQVFSUSxPO0FBQUE7Ozs7Ozs7Ozs7MEJBekRUQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSk47QUFDQTs7SUFLcUJVLFE7QUF1Qm5CLG9CQUFZQyxJQUFaLEVBQWtDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2hDLFNBQUtDLE1BQUwsR0FBY0QsSUFBSSxDQUFDRSxJQUFuQjtBQUVBLFNBQUtDLFFBQUwsR0FBZ0I7QUFDZEMsT0FBQyxFQUFFQyw0RUFBZ0IsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLENBREw7QUFFZEMsT0FBQyxFQUFFRCw0RUFBZ0IsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMO0FBRkwsS0FBaEI7QUFLQSxTQUFLRSxRQUFMLEdBQWdCUCxJQUFJLENBQUNPLFFBQXJCO0FBRUEsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJKLDRFQUFnQixDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsQ0FBckM7QUFFQSxTQUFLSyxLQUFMLEdBQWMsS0FBSyxLQUFLVCxNQUFYLEdBQXFCLENBQWxDO0FBQ0EsU0FBS1UsUUFBTCxHQUFnQkMsNEVBQWdCLENBQUMsQ0FBRCxFQUFJWixJQUFJLENBQUNFLElBQVQsQ0FBaEM7QUFFQSxTQUFLVyxRQUFMLEdBQWdCYixJQUFJLENBQUNhLFFBQXJCO0FBRUEsU0FBS0MsTUFBTCxHQUFjZCxJQUFJLENBQUNjLE1BQW5CO0FBRUEscUJBQWMsS0FBZDtBQUNEOzs7O1dBRUQsb0JBQW9CO0FBQ2xCLGFBQU8sY0FBUDtBQUNEOzs7V0FFRCxtQkFBZ0I7QUFDZCx1QkFBYyxJQUFkO0FBRUEsV0FBS0QsUUFBTCxDQUFjLEtBQUtILEtBQW5COztBQUVBLFdBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLZCxNQUF6QixFQUFpQ2MsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQyxZQUFNQyxRQUFRLEdBQUcsSUFBSUMsMERBQUosQ0FBYTtBQUM1QkMsa0JBQVEsRUFBRWIsNEVBQWdCLENBQUMsRUFBRCxFQUFLLEdBQUwsQ0FERTtBQUU1QkgsY0FBSSxFQUFFRyw0RUFBZ0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZNO0FBRzVCRSxrQkFBUSxFQUFFO0FBQ1JILGFBQUMsRUFBRSxLQUFLRyxRQUFMLENBQWNILENBQWQsR0FBa0JDLDRFQUFnQixDQUFDLENBQUMsS0FBS0osTUFBTixHQUFlLENBQWhCLEVBQW1CLEtBQUtBLE1BQUwsR0FBYyxDQUFqQyxDQUQ3QjtBQUVSSyxhQUFDLEVBQUUsS0FBS0MsUUFBTCxDQUFjRCxDQUFkLEdBQWtCRCw0RUFBZ0IsQ0FBQyxDQUFDLEtBQUtKLE1BQU4sR0FBZSxDQUFoQixFQUFtQixLQUFLQSxNQUFMLEdBQWMsQ0FBakM7QUFGN0IsV0FIa0I7QUFPNUJFLGtCQUFRLEVBQUU7QUFDUkMsYUFBQyxFQUFFQyw0RUFBZ0IsQ0FBQyxDQUFDLEdBQUYsRUFBTyxHQUFQLENBRFg7QUFFUkMsYUFBQyxFQUFFRCw0RUFBZ0IsQ0FBQyxDQUFDLEdBQUYsRUFBTyxHQUFQO0FBRlg7QUFQa0IsU0FBYixDQUFqQjtBQVlBLGFBQUtTLE1BQUwsQ0FBWUUsUUFBWixFQUFzQixXQUF0QjtBQUNEOztBQUVELFVBQUksS0FBS2YsTUFBTCxHQUFjLEVBQWxCLEVBQXNCO0FBQ3BCLGFBQUssSUFBSWMsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxDQUFwQixFQUF1QkEsRUFBQyxFQUF4QixFQUE0QjtBQUMxQixjQUFNSSxRQUFRLEdBQUcsSUFBSXBCLFFBQUosQ0FBYTtBQUU1QkcsZ0JBQUksRUFBRSxLQUFLRCxNQUFMLEdBQWMsQ0FGUTtBQUc1Qk0sb0JBQVEsRUFBRTtBQUNSSCxlQUFDLEVBQUVDLDRFQUFnQixDQUFDLENBQUMsRUFBRixFQUFNLEVBQU4sQ0FBaEIsR0FBNEIsS0FBS0UsUUFBTCxDQUFjSCxDQURyQztBQUVSRSxlQUFDLEVBQUVELDRFQUFnQixDQUFDLENBQUMsRUFBRixFQUFNLEVBQU4sQ0FBaEIsR0FBNEIsS0FBS0UsUUFBTCxDQUFjRDtBQUZyQyxhQUhrQjtBQU81QlEsa0JBQU0sRUFBRSxLQUFLQSxNQUFMLENBQVlNLElBQVosQ0FBaUIsSUFBakIsQ0FQb0I7QUFRNUJQLG9CQUFRLEVBQUUsS0FBS0EsUUFBTCxDQUFjTyxJQUFkLENBQW1CLElBQW5CO0FBUmtCLFdBQWIsQ0FBakI7QUFVQSxlQUFLTixNQUFMLENBQVlLLFFBQVosRUFBc0IsV0FBdEI7QUFDRDtBQUNGO0FBQ0Y7OztXQUVELGdCQUFPRSxLQUFQLEVBQWlDO0FBQy9CLFdBQUtkLFFBQUwsQ0FBY0gsQ0FBZCxJQUFtQixLQUFLRCxRQUFMLENBQWNDLENBQWpDO0FBQ0EsV0FBS0csUUFBTCxDQUFjRCxDQUFkLElBQW1CLEtBQUtILFFBQUwsQ0FBY0csQ0FBakM7QUFFQSxXQUFLRSxRQUFMLElBQWlCLEtBQUtDLGFBQXRCOztBQUNBLFVBQUksS0FBS0QsUUFBTCxJQUFpQixHQUFyQixFQUEwQjtBQUN4QixhQUFLQSxRQUFMLElBQWlCLEdBQWpCO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLQSxRQUFMLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGFBQUtBLFFBQUwsSUFBaUIsR0FBakI7QUFDRDs7QUFFRCxVQUFJLEtBQUtELFFBQUwsQ0FBY0gsQ0FBZCxHQUFrQmlCLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLEdBQXFCLEtBQUt0QixNQUFoRCxFQUF3RCxLQUFLTSxRQUFMLENBQWNILENBQWQsR0FBa0IsQ0FBQyxLQUFLSCxNQUF4QixDQUF4RCxLQUNLLElBQUksS0FBS00sUUFBTCxDQUFjSCxDQUFkLEdBQWtCLENBQUMsS0FBS0gsTUFBNUIsRUFBb0MsS0FBS00sUUFBTCxDQUFjSCxDQUFkLEdBQWtCaUIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsR0FBcUIsS0FBS3RCLE1BQTVDO0FBQ3pDLFVBQUksS0FBS00sUUFBTCxDQUFjRCxDQUFkLEdBQWtCZSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsTUFBYixHQUFzQixLQUFLdkIsTUFBakQsRUFBeUQsS0FBS00sUUFBTCxDQUFjRCxDQUFkLEdBQWtCLENBQUMsS0FBS0wsTUFBeEIsQ0FBekQsS0FDSyxJQUFJLEtBQUtNLFFBQUwsQ0FBY0QsQ0FBZCxHQUFrQixDQUFDLEtBQUtMLE1BQTVCLEVBQW9DLEtBQUtNLFFBQUwsQ0FBY0QsQ0FBZCxHQUFrQmUsS0FBSyxDQUFDQyxNQUFOLENBQWFFLE1BQWIsR0FBc0IsS0FBS3ZCLE1BQTdDO0FBZlYsVUFpQnZCd0IsT0FqQnVCLEdBaUJYSixLQWpCVyxDQWlCdkJJLE9BakJ1QjtBQWtCL0JBLGFBQU8sQ0FBQ0MsSUFBUjtBQUNBRCxhQUFPLENBQUNFLFNBQVIsQ0FBa0IsS0FBS3BCLFFBQUwsQ0FBY0gsQ0FBaEMsRUFBbUMsS0FBS0csUUFBTCxDQUFjRCxDQUFqRDtBQUNBbUIsYUFBTyxDQUFDRyxNQUFSLENBQWUsS0FBS3BCLFFBQUwsSUFBaUJxQixJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUEzQixDQUFmO0FBQ0FMLGFBQU8sQ0FBQ00sV0FBUixHQUFzQixNQUF0QjtBQUNBTixhQUFPLENBQUNPLFNBQVIsR0FBb0IsQ0FBcEI7QUFDQVAsYUFBTyxDQUFDUSxTQUFSO0FBQ0FSLGFBQU8sQ0FBQ1MsTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBQyxLQUFLakMsTUFBeEI7O0FBQ0EsV0FBSyxJQUFJYyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtKLFFBQUwsQ0FBY3dCLE1BQWxDLEVBQTBDcEIsQ0FBQyxFQUEzQyxFQUErQztBQUM3Q1UsZUFBTyxDQUFDVyxNQUFSLENBQWUsS0FBS3pCLFFBQUwsQ0FBY0ksQ0FBZCxFQUFpQlgsQ0FBaEMsRUFBbUMsS0FBS08sUUFBTCxDQUFjSSxDQUFkLEVBQWlCVCxDQUFwRDtBQUNEOztBQUNEbUIsYUFBTyxDQUFDWSxTQUFSO0FBQ0FaLGFBQU8sQ0FBQ2EsTUFBUjtBQUNBYixhQUFPLENBQUNjLE9BQVI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBdkhrQnhDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOztJQUVxQnlDLE07QUFhbkIsa0JBQVl4QyxJQUFaLEVBQWdDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQzlCLFFBQU15QyxRQUFRLEdBQUdDLHVFQUFXLENBQzFCO0FBQUV0QyxPQUFDLEVBQUUsQ0FBTDtBQUFRRSxPQUFDLEVBQUUsQ0FBQztBQUFaLEtBRDBCLEVBRTFCO0FBQUVGLE9BQUMsRUFBRSxDQUFMO0FBQVFFLE9BQUMsRUFBRTtBQUFYLEtBRjBCLEVBR3pCTixJQUFJLENBQUNRLFFBQUwsR0FBZ0JxQixJQUFJLENBQUNDLEVBQXRCLEdBQTRCLEdBSEYsQ0FBNUI7QUFNQSxTQUFLdkIsUUFBTCxHQUFnQjtBQUNkSCxPQUFDLEVBQUVKLElBQUksQ0FBQ08sUUFBTCxDQUFjSCxDQUFkLEdBQWtCcUMsUUFBUSxDQUFDckMsQ0FEaEI7QUFFZEUsT0FBQyxFQUFFTixJQUFJLENBQUNPLFFBQUwsQ0FBY0QsQ0FBZCxHQUFrQm1DLFFBQVEsQ0FBQ25DO0FBRmhCLEtBQWhCO0FBS0EsU0FBS0UsUUFBTCxHQUFnQlIsSUFBSSxDQUFDUSxRQUFyQjtBQUVBLFNBQUtMLFFBQUwsR0FBZ0I7QUFDZEMsT0FBQyxFQUFFcUMsUUFBUSxDQUFDckMsQ0FBVCxHQUFhLENBREY7QUFFZEUsT0FBQyxFQUFFbUMsUUFBUSxDQUFDbkMsQ0FBVCxHQUFhO0FBRkYsS0FBaEI7QUFLQSxTQUFLTCxNQUFMLEdBQWMsQ0FBZDtBQUVBLHFCQUFjLEtBQWQ7QUFDRDs7OztXQUVELG9CQUFvQjtBQUNsQixhQUFPLGNBQVA7QUFDRDs7O1dBRUQsbUJBQWdCO0FBQ2QsdUJBQWMsSUFBZDtBQUNEOzs7V0FFRCxnQkFBT29CLEtBQVAsRUFBaUM7QUFDL0IsV0FBS2QsUUFBTCxDQUFjSCxDQUFkLElBQW1CLEtBQUtELFFBQUwsQ0FBY0MsQ0FBakM7QUFDQSxXQUFLRyxRQUFMLENBQWNELENBQWQsSUFBbUIsS0FBS0gsUUFBTCxDQUFjRyxDQUFqQzs7QUFFQSxVQUFJLEtBQUtDLFFBQUwsQ0FBY0gsQ0FBZCxHQUFrQixDQUFsQixJQUNDLEtBQUtHLFFBQUwsQ0FBY0QsQ0FBZCxHQUFrQixDQURuQixJQUVDLEtBQUtDLFFBQUwsQ0FBY0gsQ0FBZCxHQUFrQmlCLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUZoQyxJQUdDLEtBQUtoQixRQUFMLENBQWNELENBQWQsR0FBa0JlLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxNQUhwQyxFQUc0QztBQUMxQyxhQUFLbUIsT0FBTDtBQUNEOztBQVQ4QixVQVd2QmxCLE9BWHVCLEdBV1hKLEtBWFcsQ0FXdkJJLE9BWHVCO0FBWS9CQSxhQUFPLENBQUNDLElBQVI7QUFDQUQsYUFBTyxDQUFDRSxTQUFSLENBQWtCLEtBQUtwQixRQUFMLENBQWNILENBQWhDLEVBQW1DLEtBQUtHLFFBQUwsQ0FBY0QsQ0FBakQ7QUFDQW1CLGFBQU8sQ0FBQ0csTUFBUixDQUFnQixLQUFLcEIsUUFBTCxHQUFnQnFCLElBQUksQ0FBQ0MsRUFBdEIsR0FBNEIsR0FBM0M7QUFDQUwsYUFBTyxDQUFDbUIsU0FBUixHQUFvQixNQUFwQjtBQUNBbkIsYUFBTyxDQUFDUSxTQUFSO0FBQ0FSLGFBQU8sQ0FBQ29CLEdBQVIsQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixLQUFLNUMsTUFBdkIsRUFBK0IsQ0FBL0IsRUFBa0MsS0FBS0EsTUFBTCxHQUFjNEIsSUFBSSxDQUFDQyxFQUFyRDtBQUNBTCxhQUFPLENBQUNZLFNBQVI7QUFDQVosYUFBTyxDQUFDcUIsSUFBUjtBQUNBckIsYUFBTyxDQUFDYyxPQUFSO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWxFa0JDLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNEQXZCLFE7QUFhbkIsb0JBQVlqQixJQUFaLEVBQWtDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2hDLFNBQUtPLFFBQUwsR0FBZ0JQLElBQUksQ0FBQ08sUUFBckI7QUFDQSxTQUFLSixRQUFMLEdBQWdCSCxJQUFJLENBQUNHLFFBQXJCO0FBQ0EsU0FBS0YsTUFBTCxHQUFjRCxJQUFJLENBQUNFLElBQW5CO0FBQ0EsU0FBS2dCLFFBQUwsR0FBZ0JsQixJQUFJLENBQUNrQixRQUFyQjtBQUNBLFNBQUs2QixPQUFMLEdBQWUsSUFBZjtBQUNBLHFCQUFjLEtBQWQ7QUFDRDs7OztXQUVELG9CQUFvQjtBQUNsQixhQUFPLGNBQVA7QUFDRDs7O1dBRUQsbUJBQWdCO0FBQ2QsdUJBQWMsSUFBZDtBQUNEOzs7V0FFRCxnQkFBTzFCLEtBQVAsRUFBaUM7QUFDL0IsV0FBS2QsUUFBTCxDQUFjSCxDQUFkLElBQW1CLEtBQUtELFFBQUwsQ0FBY0MsQ0FBakM7QUFDQSxXQUFLRyxRQUFMLENBQWNELENBQWQsSUFBbUIsS0FBS0gsUUFBTCxDQUFjRyxDQUFqQztBQUNBLFdBQUtILFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQixLQUFLMkMsT0FBeEI7QUFDQSxXQUFLNUMsUUFBTCxDQUFjRyxDQUFkLElBQW1CLEtBQUt5QyxPQUF4QjtBQUVBLFdBQUs5QyxNQUFMLElBQWUsR0FBZjs7QUFDQSxVQUFJLEtBQUtBLE1BQUwsR0FBYyxHQUFsQixFQUF1QjtBQUNyQixhQUFLQSxNQUFMLEdBQWMsR0FBZDtBQUNEOztBQUNELFVBQUksS0FBS2lCLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsYUFBS3lCLE9BQUw7QUFDRDs7QUFaOEIsVUFjdkJsQixPQWR1QixHQWNYSixLQWRXLENBY3ZCSSxPQWR1QjtBQWUvQkEsYUFBTyxDQUFDQyxJQUFSO0FBQ0FELGFBQU8sQ0FBQ0UsU0FBUixDQUFrQixLQUFLcEIsUUFBTCxDQUFjSCxDQUFoQyxFQUFtQyxLQUFLRyxRQUFMLENBQWNELENBQWpEO0FBQ0FtQixhQUFPLENBQUNtQixTQUFSLEdBQW9CLFNBQXBCO0FBQ0FuQixhQUFPLENBQUNPLFNBQVIsR0FBb0IsQ0FBcEI7QUFDQVAsYUFBTyxDQUFDUSxTQUFSO0FBQ0FSLGFBQU8sQ0FBQ1MsTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBQyxLQUFLakMsTUFBeEI7QUFDQXdCLGFBQU8sQ0FBQ29CLEdBQVIsQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixLQUFLNUMsTUFBdkIsRUFBK0IsQ0FBL0IsRUFBa0MsSUFBSTRCLElBQUksQ0FBQ0MsRUFBM0M7QUFDQUwsYUFBTyxDQUFDWSxTQUFSO0FBQ0FaLGFBQU8sQ0FBQ3FCLElBQVI7QUFDQXJCLGFBQU8sQ0FBQ2MsT0FBUjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkF2RGtCdEIsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjtBQUlBO0FBQ0E7O0lBRXFCK0IsSTtBQXlCbkIsZ0JBQVloRCxJQUFaLEVBQThCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsd0NBb0NqQixZQUFZO0FBQ3ZCLFdBQUksQ0FBQ0csUUFBTCxDQUFjQyxDQUFkLElBQW1CeUIsSUFBSSxDQUFDb0IsR0FBTCxDQUFTLENBQUMsS0FBSSxDQUFDekMsUUFBTixJQUFrQnFCLElBQUksQ0FBQ0MsRUFBTCxHQUFVLEdBQTVCLENBQVQsSUFBNkMsS0FBSSxDQUFDb0IsS0FBckU7QUFDQSxXQUFJLENBQUMvQyxRQUFMLENBQWNHLENBQWQsSUFBbUJ1QixJQUFJLENBQUNzQixHQUFMLENBQVMsQ0FBQyxLQUFJLENBQUMzQyxRQUFOLElBQWtCcUIsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBNUIsQ0FBVCxJQUE2QyxLQUFJLENBQUNvQixLQUFyRTtBQUVBLFVBQU1ULFFBQVEsR0FBR0MsdUVBQVcsQ0FDMUI7QUFBRXRDLFNBQUMsRUFBRSxDQUFMO0FBQVFFLFNBQUMsRUFBRSxDQUFDO0FBQVosT0FEMEIsRUFFMUI7QUFBRUYsU0FBQyxFQUFFLENBQUw7QUFBUUUsU0FBQyxFQUFFO0FBQVgsT0FGMEIsRUFHMUIsQ0FBQyxLQUFJLENBQUNFLFFBQUwsR0FBZ0IsR0FBakIsS0FBeUJxQixJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUFuQyxDQUgwQixDQUE1QjtBQUtBLFVBQU1kLFFBQVEsR0FBRyxJQUFJQywwREFBSixDQUFhO0FBQzVCQyxnQkFBUSxFQUFFYiw0RUFBZ0IsQ0FBQyxFQUFELEVBQUssRUFBTCxDQURFO0FBRTVCSCxZQUFJLEVBQUVHLDRFQUFnQixDQUFDLENBQUQsRUFBSSxDQUFKLENBRk07QUFHNUJFLGdCQUFRLEVBQUU7QUFDUkgsV0FBQyxFQUFFLEtBQUksQ0FBQ0csUUFBTCxDQUFjSCxDQUFkLEdBQWtCcUMsUUFBUSxDQUFDckMsQ0FBM0IsR0FBK0JDLDRFQUFnQixDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsQ0FEMUM7QUFFUkMsV0FBQyxFQUFFLEtBQUksQ0FBQ0MsUUFBTCxDQUFjRCxDQUFkLEdBQWtCbUMsUUFBUSxDQUFDbkMsQ0FBM0IsR0FBK0JELDRFQUFnQixDQUFDLENBQUMsQ0FBRixFQUFLLENBQUw7QUFGMUMsU0FIa0I7QUFPNUJGLGdCQUFRLEVBQUU7QUFDUkMsV0FBQyxFQUFFcUMsUUFBUSxDQUFDckMsQ0FBVCxHQUFhQyw0RUFBZ0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUR4QjtBQUVSQyxXQUFDLEVBQUVtQyxRQUFRLENBQUNuQyxDQUFULEdBQWFELDRFQUFnQixDQUFDLENBQUQsRUFBSSxDQUFKO0FBRnhCO0FBUGtCLE9BQWIsQ0FBakI7O0FBWUEsV0FBSSxDQUFDUyxNQUFMLENBQVlFLFFBQVosRUFBc0IsV0FBdEI7QUFDRCxLQTFENkI7O0FBQzVCLFNBQUtoQixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLTyxRQUFMLEdBQWdCUCxJQUFJLENBQUNPLFFBQXJCO0FBQ0EsU0FBS0osUUFBTCxHQUFnQjtBQUNkQyxPQUFDLEVBQUUsQ0FEVztBQUVkRSxPQUFDLEVBQUU7QUFGVyxLQUFoQjtBQUlBLFNBQUtFLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsU0FBS3lDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0gsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLOUMsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLbUQsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUt0QyxNQUFMLEdBQWNkLElBQUksQ0FBQ2MsTUFBbkI7QUFDQSxTQUFLdUMsS0FBTCxHQUFhckQsSUFBSSxDQUFDcUQsS0FBbEI7QUFDQSxxQkFBYyxLQUFkO0FBQ0Q7Ozs7V0FFRCxnQkFBT0MsR0FBUCxFQUEwQjtBQUN4QixVQUFJQSxHQUFHLEtBQUssTUFBWixFQUFvQjtBQUNsQixhQUFLOUMsUUFBTCxJQUFpQixLQUFLQyxhQUF0QjtBQUNEOztBQUNELFVBQUk2QyxHQUFHLEtBQUssT0FBWixFQUFxQjtBQUNuQixhQUFLOUMsUUFBTCxJQUFpQixLQUFLQyxhQUF0QjtBQUNEO0FBQ0Y7OztXQUVELG9CQUFvQjtBQUNsQixhQUFPLGNBQVA7QUFDRDs7O1dBRUQsbUJBQWdCO0FBQ2QsdUJBQWMsSUFBZDtBQUNBLFdBQUs0QyxLQUFMO0FBQ0Q7OztXQTBCRCxnQkFBT2hDLEtBQVAsRUFBaUM7QUFDL0IsVUFBSUEsS0FBSyxDQUFDa0MsSUFBTixDQUFXQyxFQUFmLEVBQW1CO0FBQ2pCLGFBQUtDLFVBQUw7QUFDRDs7QUFFRCxVQUFJcEMsS0FBSyxDQUFDa0MsSUFBTixDQUFXRyxJQUFmLEVBQXFCO0FBQ25CLGFBQUs5QixNQUFMLENBQVksTUFBWjtBQUNEOztBQUNELFVBQUlQLEtBQUssQ0FBQ2tDLElBQU4sQ0FBV0ksS0FBZixFQUFzQjtBQUNwQixhQUFLL0IsTUFBTCxDQUFZLE9BQVo7QUFDRDs7QUFFRCxVQUFJUCxLQUFLLENBQUNrQyxJQUFOLENBQVdLLEtBQWYsRUFBc0I7QUFDcEIsWUFBSSxLQUFLUixRQUFMLEtBQWtCLENBQWxCLElBQXVCUyxJQUFJLENBQUNDLEdBQUwsS0FBYSxLQUFLVixRQUFsQixHQUE2QixHQUF4RCxFQUE2RDtBQUMzRCxjQUFNVyxNQUFNLEdBQUcsSUFBSXZCLHNEQUFKLENBQVc7QUFBRWpDLG9CQUFRLEVBQUUsS0FBS0EsUUFBakI7QUFBMkJDLG9CQUFRLEVBQUUsS0FBS0E7QUFBMUMsV0FBWCxDQUFmO0FBRUEsZUFBS0wsUUFBTCxDQUFjQyxDQUFkLElBQW1CeUIsSUFBSSxDQUFDb0IsR0FBTCxDQUFTLENBQUMsS0FBS3pDLFFBQU4sSUFBa0JxQixJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUE1QixDQUFULElBQTZDLEdBQWhFO0FBQ0EsZUFBSzNCLFFBQUwsQ0FBY0csQ0FBZCxJQUFtQnVCLElBQUksQ0FBQ3NCLEdBQUwsQ0FBUyxDQUFDLEtBQUszQyxRQUFOLElBQWtCcUIsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBNUIsQ0FBVCxJQUE2QyxHQUFoRTtBQUVBLGVBQUtoQixNQUFMLENBQVlpRCxNQUFaLEVBQW9CLFNBQXBCO0FBRUEsZUFBS1gsUUFBTCxHQUFnQlMsSUFBSSxDQUFDQyxHQUFMLEVBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLdkQsUUFBTCxDQUFjSCxDQUFkLElBQW1CLEtBQUtELFFBQUwsQ0FBY0MsQ0FBakM7QUFDQSxXQUFLRyxRQUFMLENBQWNELENBQWQsSUFBbUIsS0FBS0gsUUFBTCxDQUFjRyxDQUFqQztBQUNBLFdBQUtILFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQixLQUFLMkMsT0FBeEI7QUFDQSxXQUFLNUMsUUFBTCxDQUFjRyxDQUFkLElBQW1CLEtBQUt5QyxPQUF4Qjs7QUFFQSxVQUFJLEtBQUt2QyxRQUFMLElBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCLGFBQUtBLFFBQUwsSUFBaUIsR0FBakI7QUFDRDs7QUFDRCxVQUFJLEtBQUtBLFFBQUwsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsYUFBS0EsUUFBTCxJQUFpQixHQUFqQjtBQUNEOztBQUVELFVBQUksS0FBS0QsUUFBTCxDQUFjSCxDQUFkLEdBQWtCaUIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQW5DLEVBQTBDLEtBQUtoQixRQUFMLENBQWNILENBQWQsR0FBa0IsQ0FBbEIsQ0FBMUMsS0FDSyxJQUFJLEtBQUtHLFFBQUwsQ0FBY0gsQ0FBZCxHQUFrQixDQUF0QixFQUF5QixLQUFLRyxRQUFMLENBQWNILENBQWQsR0FBa0JpQixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBL0I7QUFDOUIsVUFBSSxLQUFLaEIsUUFBTCxDQUFjRCxDQUFkLEdBQWtCZSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsTUFBbkMsRUFBMkMsS0FBS2pCLFFBQUwsQ0FBY0QsQ0FBZCxHQUFrQixDQUFsQixDQUEzQyxLQUNLLElBQUksS0FBS0MsUUFBTCxDQUFjRCxDQUFkLEdBQWtCLENBQXRCLEVBQXlCLEtBQUtDLFFBQUwsQ0FBY0QsQ0FBZCxHQUFrQmUsS0FBSyxDQUFDQyxNQUFOLENBQWFFLE1BQS9CO0FBeENDLFVBMEN2QkMsT0ExQ3VCLEdBMENYSixLQTFDVyxDQTBDdkJJLE9BMUN1QjtBQTJDL0JBLGFBQU8sQ0FBQ0MsSUFBUjtBQUNBRCxhQUFPLENBQUNFLFNBQVIsQ0FBa0IsS0FBS3BCLFFBQUwsQ0FBY0gsQ0FBaEMsRUFBbUMsS0FBS0csUUFBTCxDQUFjRCxDQUFqRDtBQUNBbUIsYUFBTyxDQUFDRyxNQUFSLENBQWUsS0FBS3BCLFFBQUwsSUFBaUJxQixJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUEzQixDQUFmO0FBQ0FMLGFBQU8sQ0FBQ00sV0FBUixHQUFzQixTQUF0QjtBQUNBTixhQUFPLENBQUNtQixTQUFSLEdBQW9CLFNBQXBCO0FBQ0FuQixhQUFPLENBQUNPLFNBQVIsR0FBb0IsQ0FBcEI7QUFDQVAsYUFBTyxDQUFDUSxTQUFSO0FBQ0FSLGFBQU8sQ0FBQ1MsTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBQyxFQUFuQjtBQUNBVCxhQUFPLENBQUNXLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLEVBQW5CO0FBQ0FYLGFBQU8sQ0FBQ1csTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBbEI7QUFDQVgsYUFBTyxDQUFDVyxNQUFSLENBQWUsQ0FBQyxDQUFoQixFQUFtQixDQUFuQjtBQUNBWCxhQUFPLENBQUNXLE1BQVIsQ0FBZSxDQUFDLEVBQWhCLEVBQW9CLEVBQXBCO0FBQ0FYLGFBQU8sQ0FBQ1ksU0FBUjtBQUNBWixhQUFPLENBQUNxQixJQUFSO0FBQ0FyQixhQUFPLENBQUNhLE1BQVI7QUFDQWIsYUFBTyxDQUFDYyxPQUFSO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWhKa0JTLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHJCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNZ0IsR0FBRyxHQUFHO0FBQ1ZDLE1BQUksRUFBRSxXQURJO0FBRVZDLE9BQUssRUFBRSxZQUZHO0FBR1ZDLElBQUUsRUFBRSxTQUhNO0FBSVZDLEdBQUMsRUFBRSxNQUpPO0FBS1ZDLEdBQUMsRUFBRSxNQUxPO0FBTVZDLEdBQUMsRUFBRSxNQU5PO0FBT1ZDLE9BQUssRUFBRSxHQVBHO0FBUVZDLFFBQU0sRUFBRSxRQVJFO0FBU1ZDLE9BQUssRUFBRSxPQVRHO0FBVVZDLEdBQUMsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOO0FBVk8sQ0FBWjs7QUFhQSxJQUFNQyxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxDQUFELENBRFA7QUFBQTtBQUFBLE1BQ3BCbEUsS0FEb0I7QUFBQSxNQUNibUUsUUFEYTs7QUFBQSxtQkFFU0Qsc0RBQVEsQ0FBQyxLQUFELENBRmpCO0FBQUE7QUFBQSxNQUVwQkUsVUFGb0I7QUFBQSxNQUVSQyxhQUZROztBQUFBLG1CQUlHSCxzREFBUSxDQUFDLEtBQUQsQ0FKWDtBQUFBO0FBQUEsTUFJcEJJLE9BSm9CO0FBQUEsTUFJWEMsVUFKVyxrQkFNM0I7OztBQUNBLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxLQUFELENBQXZCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCxvREFBTSxDQUFDLEtBQUQsQ0FBdEI7QUFFQSxNQUFNRSxRQUFRLEdBQUdGLG9EQUFNLENBQUMsQ0FBRCxDQUF2QjtBQUNBLE1BQU1HLFdBQVcsR0FBR0gsb0RBQU0sQ0FBQyxDQUFELENBQTFCO0FBRUEsTUFBTTdELE1BQU0sR0FBRzZELG9EQUFNLENBQWE7QUFDaEM1RCxTQUFLLEVBQUVnRSxNQUFNLENBQUNDLFVBRGtCO0FBRWhDaEUsVUFBTSxFQUFFaUUseUVBQWEsRUFGVztBQUdoQ0MsU0FBSyxFQUFFSCxNQUFNLENBQUNJLGdCQUFQLElBQTJCO0FBSEYsR0FBYixDQUFyQjtBQU1BLE1BQU1DLFNBQVMsR0FBR1Qsb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBeEI7O0FBbkIyQixtQkFvQkhQLHNEQUFRLENBQUM7QUFDL0JsQixRQUFJLEVBQUUsS0FEeUI7QUFFL0JDLFNBQUssRUFBRSxLQUZ3QjtBQUcvQkgsTUFBRSxFQUFFLEtBSDJCO0FBSS9CcUMsUUFBSSxFQUFFLEtBSnlCO0FBSy9CakMsU0FBSyxFQUFFLEtBTHdCO0FBTS9Ca0MsS0FBQyxFQUFFO0FBTjRCLEdBQUQsQ0FwQkw7QUFBQTtBQUFBLE1Bb0JwQnZDLElBcEJvQjtBQUFBLE1Bb0Jkd0MsT0FwQmM7O0FBNkIzQixNQUFNQyxLQUFLLEdBQUdDLDhEQUFRLEVBQXRCO0FBRUEsTUFBSUMsY0FBYyxHQUFHLENBQXJCO0FBRUEsTUFBTUMsT0FBbUIsR0FBRztBQUMxQkMsU0FBSyxFQUFFLEVBRG1CO0FBRTFCQyxXQUFPLEVBQUUsRUFGaUI7QUFHMUJDLGFBQVMsRUFBRSxFQUhlO0FBSTFCQyxhQUFTLEVBQUU7QUFKZSxHQUE1Qjs7QUFPQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQXVCQyxLQUF2QixFQUEwQztBQUMzRCxRQUFNQyxPQUFPLEdBQUdwRCxJQUFoQjtBQUVBLFFBQUlrRCxLQUFLLENBQUNHLEdBQU4sS0FBYzVDLEdBQUcsQ0FBQ0MsSUFBbEIsSUFBMEJ3QyxLQUFLLENBQUNHLEdBQU4sS0FBYzVDLEdBQUcsQ0FBQ0ksQ0FBaEQsRUFBbUR1QyxPQUFPLENBQUNqRCxJQUFSLEdBQWVnRCxLQUFmO0FBQ25ELFFBQUlELEtBQUssQ0FBQ0csR0FBTixLQUFjNUMsR0FBRyxDQUFDRSxLQUFsQixJQUEyQnVDLEtBQUssQ0FBQ0csR0FBTixLQUFjNUMsR0FBRyxDQUFDSyxDQUFqRCxFQUFvRHNDLE9BQU8sQ0FBQ2hELEtBQVIsR0FBZ0IrQyxLQUFoQjtBQUNwRCxRQUFJRCxLQUFLLENBQUNHLEdBQU4sS0FBYzVDLEdBQUcsQ0FBQ0csRUFBbEIsSUFBd0JzQyxLQUFLLENBQUNHLEdBQU4sS0FBYzVDLEdBQUcsQ0FBQ00sQ0FBOUMsRUFBaURxQyxPQUFPLENBQUNuRCxFQUFSLEdBQWFrRCxLQUFiO0FBQ2pELFFBQUlELEtBQUssQ0FBQ0csR0FBTixLQUFjNUMsR0FBRyxDQUFDTyxLQUF0QixFQUE2Qm9DLE9BQU8sQ0FBQy9DLEtBQVIsR0FBZ0I4QyxLQUFoQjtBQUM3QlgsV0FBTyxDQUFDWSxPQUFELENBQVA7QUFDRCxHQVJEOztBQVVBLE1BQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0osS0FBRCxFQUEwQjtBQUM5Q0QsY0FBVSxDQUFDQyxLQUFELEVBQVEsSUFBUixDQUFWOztBQUVBLFFBQUlBLEtBQUssQ0FBQ0csR0FBTixLQUFjNUMsR0FBRyxDQUFDUSxNQUFsQixJQUE0QmlDLEtBQUssQ0FBQ0csR0FBTixLQUFjNUMsR0FBRyxDQUFDUyxLQUFsRCxFQUF5RDtBQUN2RHFDLFdBQUs7QUFDTjs7QUFDRCxRQUFJOUMsR0FBRyxDQUFDVSxDQUFKLENBQU1xQyxRQUFOLENBQWVOLEtBQUssQ0FBQ0csR0FBckIsQ0FBSixFQUErQjtBQUM3Qkksc0JBQWdCO0FBQ2pCO0FBQ0YsR0FURDs7QUFXQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDUixLQUFELEVBQTBCO0FBQzVDRCxjQUFVLENBQUNDLEtBQUQsRUFBUSxLQUFSLENBQVY7QUFDRCxHQUZEOztBQUlBLE1BQU01RixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDcUcsQ0FBRCxFQUFxQjtBQUNwQztBQUNBN0IsWUFBUSxDQUFDOEIsT0FBVCxJQUFvQkQsQ0FBcEI7QUFDQXJDLFlBQVEsQ0FBQ1EsUUFBUSxDQUFDOEIsT0FBVixDQUFSO0FBQ0QsR0FKRDs7QUFNQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBeUI7QUFDakQsU0FBSyxJQUFJdEcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NHLEtBQXBCLEVBQTJCdEcsQ0FBQyxFQUE1QixFQUFnQztBQUM5QixVQUFNSSxRQUFRLEdBQUcsSUFBSXBCLGlEQUFKLENBQWE7QUFDNUJHLFlBQUksRUFBRSxFQURzQjtBQUU1QkssZ0JBQVEsRUFBRTtBQUNSSCxXQUFDLEVBQUVDLDRFQUFnQixDQUFDLENBQUQsRUFBSWlCLE1BQU0sQ0FBQzZGLE9BQVAsQ0FBZTVGLEtBQW5CLENBRFg7QUFFUmpCLFdBQUMsRUFBRUQsNEVBQWdCLENBQUMsQ0FBRCxFQUFJaUIsTUFBTSxDQUFDNkYsT0FBUCxDQUFlM0YsTUFBbkI7QUFGWCxTQUZrQjtBQU01QlYsY0FBTSxFQUFFd0csWUFOb0I7QUFPNUJ6RyxnQkFBUSxFQUFSQTtBQVA0QixPQUFiLENBQWpCO0FBU0F5RyxrQkFBWSxDQUFDbkcsUUFBRCxFQUFXLFdBQVgsQ0FBWjtBQUNEO0FBQ0YsR0FiRDs7QUFlQSxNQUFNb0csT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkMsd0JBQW9CLENBQUNsQyxXQUFXLENBQUM2QixPQUFiLENBQXBCO0FBQ0FNLFNBQUs7QUFFTG5DLGVBQVcsQ0FBQzZCLE9BQVosR0FBc0JPLHFCQUFxQixDQUFDLFlBQU07QUFDaERDLFlBQU07QUFDUCxLQUYwQyxDQUEzQztBQUdELEdBUEQ7O0FBU0EsTUFBTUYsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQnhDLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDQUYsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUcsWUFBUSxDQUFDaUMsT0FBVCxHQUFtQixLQUFuQjtBQUNBL0IsV0FBTyxDQUFDK0IsT0FBUixHQUFrQixLQUFsQjtBQUVBOUIsWUFBUSxDQUFDOEIsT0FBVCxHQUFtQixDQUFuQjtBQUNBdEMsWUFBUSxDQUFDUSxRQUFRLENBQUM4QixPQUFWLENBQVI7QUFFQW5CLFNBQUssQ0FBQzRCLEtBQU47QUFDQTVCLFNBQUssQ0FBQ3lCLEtBQU47QUFFQSxRQUFNSSxJQUFJLEdBQUcsSUFBSTdFLDZDQUFKLENBQVM7QUFDcEJ6QyxjQUFRLEVBQUU7QUFDUkgsU0FBQyxFQUFFa0IsTUFBTSxDQUFDNkYsT0FBUCxDQUFlNUYsS0FBZixHQUF1QixDQURsQjtBQUVSakIsU0FBQyxFQUFFZ0IsTUFBTSxDQUFDNkYsT0FBUCxDQUFlM0YsTUFBZixHQUF3QjtBQUZuQixPQURVO0FBS3BCVixZQUFNLEVBQUV3RyxZQUxZO0FBTXBCakUsV0FBSyxFQUFFeUU7QUFOYSxLQUFULENBQWI7QUFRQVIsZ0JBQVksQ0FBQ08sSUFBRCxFQUFPLE9BQVAsQ0FBWjtBQUNBVCxxQkFBaUIsQ0FBQ2xCLGNBQUQsQ0FBakI7QUFDRCxHQXRCRDs7QUF3QkEsTUFBTVksS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBWTtBQUN4QixRQUFJLENBQUMxQixPQUFPLENBQUMrQixPQUFiLEVBQXNCO0FBQ3BCakMsY0FBUSxDQUFDaUMsT0FBVCxHQUFtQixDQUFDakMsUUFBUSxDQUFDaUMsT0FBN0I7QUFDQWxDLGdCQUFVLENBQUNDLFFBQVEsQ0FBQ2lDLE9BQVYsQ0FBVjs7QUFFQSxVQUFJakMsUUFBUSxDQUFDaUMsT0FBYixFQUFzQjtBQUNwQm5CLGFBQUssQ0FBQ2MsS0FBTjtBQUNELE9BRkQsTUFFTztBQUNMZCxhQUFLLENBQUN5QixLQUFOO0FBQ0Q7QUFDRjtBQUNGLEdBWEQ7O0FBYUEsTUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQi9DLGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FFLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDQUcsV0FBTyxDQUFDK0IsT0FBUixHQUFrQixJQUFsQjtBQUNBakMsWUFBUSxDQUFDaUMsT0FBVCxHQUFtQixLQUFuQjtBQUNBbkIsU0FBSyxDQUFDYyxLQUFOO0FBQ0QsR0FORDs7QUFRQSxNQUFNYSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLFFBQU1sRyxPQUFPLHlCQUFHbUUsU0FBUyxDQUFDdUIsT0FBYix1REFBRyxtQkFBbUJZLFVBQW5CLENBQThCLElBQTlCLENBQWhCOztBQUVBLFFBQUksQ0FBQzdDLFFBQVEsQ0FBQ2lDLE9BQVYsSUFBcUIxRixPQUFPLEtBQUt1RyxTQUFqQyxJQUE4Q3ZHLE9BQU8sS0FBSyxJQUE5RCxFQUFvRTtBQUNsRUEsYUFBTyxDQUFDQyxJQUFSO0FBQ0FELGFBQU8sQ0FBQ3dHLEtBQVIsQ0FBYzNHLE1BQU0sQ0FBQzZGLE9BQVAsQ0FBZXpCLEtBQTdCLEVBQW9DcEUsTUFBTSxDQUFDNkYsT0FBUCxDQUFlekIsS0FBbkQ7QUFFQWpFLGFBQU8sQ0FBQ21CLFNBQVIsR0FBb0IsTUFBcEI7QUFDQW5CLGFBQU8sQ0FBQ3lHLFdBQVIsR0FBc0IsR0FBdEI7QUFDQXpHLGFBQU8sQ0FBQzBHLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUI3RyxNQUFNLENBQUM2RixPQUFQLENBQWU1RixLQUF0QyxFQUE2Q0QsTUFBTSxDQUFDNkYsT0FBUCxDQUFlM0YsTUFBNUQ7QUFDQUMsYUFBTyxDQUFDeUcsV0FBUixHQUFzQixDQUF0Qjs7QUFFQSxVQUFJL0IsT0FBTyxDQUFDRyxTQUFSLENBQWtCbkUsTUFBbEIsS0FBNkIsQ0FBakMsRUFBb0M7QUFDbEMrRCxzQkFBYztBQUVka0IseUJBQWlCLENBQUNsQixjQUFELENBQWpCO0FBQ0Q7O0FBRURrQyxtQkFBYSxDQUFDakMsT0FBTyxDQUFDQyxLQUFULEVBQWdCLE9BQWhCLENBQWI7QUFDQWdDLG1CQUFhLENBQUNqQyxPQUFPLENBQUNHLFNBQVQsRUFBb0IsV0FBcEIsQ0FBYjtBQUNBOEIsbUJBQWEsQ0FBQ2pDLE9BQU8sQ0FBQ0UsT0FBVCxFQUFrQixTQUFsQixDQUFiO0FBQ0ErQixtQkFBYSxDQUFDakMsT0FBTyxDQUFDSSxTQUFULEVBQW9CLFdBQXBCLENBQWI7QUFFQThCLHlCQUFtQixDQUFDbEMsT0FBTyxDQUFDRSxPQUFULEVBQWtCRixPQUFPLENBQUNHLFNBQTFCLENBQW5CO0FBQ0ErQix5QkFBbUIsQ0FBQ2xDLE9BQU8sQ0FBQ0MsS0FBVCxFQUFnQkQsT0FBTyxDQUFDRyxTQUF4QixDQUFuQjtBQUVBN0UsYUFBTyxDQUFDYyxPQUFSO0FBQ0Q7O0FBRUQrQyxlQUFXLENBQUM2QixPQUFaLEdBQXNCTyxxQkFBcUIsQ0FBQyxZQUFNO0FBQ2hEQyxZQUFNO0FBQ1AsS0FGMEMsQ0FBM0M7QUFHRCxHQWhDRDs7QUFrQ0EsTUFBTVMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRSxLQUFELEVBQXVCQyxLQUF2QixFQUErQztBQUFBOztBQUNuRSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFFBQU0vRyxPQUFPLDBCQUFHbUUsU0FBUyxDQUFDdUIsT0FBYix3REFBRyxvQkFBbUJZLFVBQW5CLENBQThCLElBQTlCLENBQWhCOztBQUZtRSwrQ0FJaERPLEtBSmdEO0FBQUE7O0FBQUE7QUFJbkUsMERBQTBCO0FBQUEsWUFBZkcsSUFBZTs7QUFDeEIsWUFBSUEsSUFBSSxDQUFDQyxRQUFMLEVBQUosRUFBcUI7QUFDbkJ2QyxpQkFBTyxDQUFDb0MsS0FBRCxDQUFQLENBQWVJLE1BQWYsQ0FBc0JILEtBQXRCLEVBQTZCLENBQTdCO0FBQ0QsU0FGRCxNQUVPLElBQUkvRyxPQUFKLEVBQWE7QUFDbEIsY0FBTW1ILEdBQUcsR0FBR3RILE1BQU0sQ0FBQzZGLE9BQW5CO0FBQ0FtQixlQUFLLENBQUNFLEtBQUQsQ0FBTCxDQUFhSyxNQUFiLENBQW9CO0FBQUV2SCxrQkFBTSxFQUFFc0gsR0FBVjtBQUFlbkgsbUJBQU8sRUFBUEEsT0FBZjtBQUF3QjhCLGdCQUFJLEVBQUpBO0FBQXhCLFdBQXBCO0FBQ0Q7O0FBQ0RpRixhQUFLO0FBQ047QUFaa0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFwRSxHQWJELENBOUsyQixDQTZMM0I7OztBQUNBLE1BQU1sQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDbUIsSUFBRCxFQUFZRixLQUFaLEVBQTBDO0FBQzdEcEMsV0FBTyxDQUFDb0MsS0FBRCxDQUFQLENBQWVPLElBQWYsQ0FBb0JMLElBQXBCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNVLE1BQUQsRUFBd0JDLE1BQXhCLEVBQWtEO0FBQzVFLFNBQUssSUFBSWpJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdnSSxNQUFNLENBQUM1RyxNQUEzQixFQUFtQ3BCLENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsV0FBSyxJQUFJa0ksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsTUFBTSxDQUFDN0csTUFBM0IsRUFBbUM4RyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLFlBQU1DLEtBQUssR0FBR0gsTUFBTSxDQUFDaEksQ0FBRCxDQUFwQjtBQUNBLFlBQU1vSSxLQUFLLEdBQUdILE1BQU0sQ0FBQ0MsQ0FBRCxDQUFwQjs7QUFFQSxZQUFJRyxjQUFjLENBQUNGLEtBQUQsRUFBUUMsS0FBUixDQUFsQixFQUFrQztBQUNoQ0QsZUFBSyxDQUFDdkcsT0FBTjtBQUNBd0csZUFBSyxDQUFDeEcsT0FBTjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBWkQ7O0FBY0EsTUFBTXlHLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFvQkMsSUFBcEIsRUFBMEM7QUFDL0QsUUFBTUMsRUFBRSxHQUFHRixJQUFJLENBQUM5SSxRQUFMLENBQWNILENBQWQsR0FBa0JrSixJQUFJLENBQUMvSSxRQUFMLENBQWNILENBQTNDO0FBQ0EsUUFBTW9KLEVBQUUsR0FBR0gsSUFBSSxDQUFDOUksUUFBTCxDQUFjRCxDQUFkLEdBQWtCZ0osSUFBSSxDQUFDL0ksUUFBTCxDQUFjRCxDQUEzQztBQUNBLFFBQU02QixNQUFNLEdBQUdOLElBQUksQ0FBQzRILElBQUwsQ0FBVUYsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBZjs7QUFDQSxRQUFJckgsTUFBTSxHQUFHa0gsSUFBSSxDQUFDcEosTUFBTCxHQUFjcUosSUFBSSxDQUFDckosTUFBaEMsRUFBd0M7QUFDdEMsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFQO0FBQ0QsR0FSRDs7QUFVQSxNQUFNeUosTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQnBJLFVBQU0sQ0FBQzZGLE9BQVAsR0FBaUI7QUFDZjVGLFdBQUssRUFBRWdFLE1BQU0sQ0FBQ0MsVUFEQztBQUVmaEUsWUFBTSxFQUFFaUUseUVBQWEsRUFGTjtBQUdmQyxXQUFLLEVBQUVILE1BQU0sQ0FBQ0ksZ0JBQVAsSUFBMkI7QUFIbkIsS0FBakI7QUFLRCxHQU5EOztBQVFBLE1BQU1xQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQVk7QUFDbkMsUUFBTTJDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWxCOztBQUNBLFFBQUksQ0FBQ0QsUUFBUSxDQUFDRSxpQkFBZCxFQUFpQztBQUMvQixVQUFJSCxTQUFKLEVBQWU7QUFDYkEsaUJBQVMsQ0FBQ0ksaUJBQVY7QUFDRDtBQUNGLEtBSkQsTUFJTztBQUNMSCxjQUFRLENBQUNJLGNBQVQ7QUFDRDtBQUNGLEdBVEQ7O0FBV0EsTUFBTUMsY0FBYyxHQUFHQyxvRUFBUSxDQUFDUixNQUFELEVBQVMsSUFBVCxDQUEvQjtBQUVBUyx5REFBUyxDQUFDLFlBQU07QUFDZDVFLFVBQU0sQ0FBQzZFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxjQUFsQztBQUVBLFdBQU87QUFBQSxhQUFNMUUsTUFBTSxDQUFDOEUsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNKLGNBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FKUSxDQUFUO0FBTUFFLHlEQUFTLENBQUMsWUFBTTtBQUNkMUMsU0FBSztBQUVMbEMsVUFBTSxDQUFDNkUsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUN2RCxhQUFuQztBQUNBdEIsVUFBTSxDQUFDNkUsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNuRCxXQUFqQztBQUVBM0IsZUFBVyxDQUFDNkIsT0FBWixHQUFzQk8scUJBQXFCLENBQUMsWUFBTTtBQUNoREMsWUFBTTtBQUNQLEtBRjBDLENBQTNDO0FBSUEsV0FBTyxZQUFNO0FBQ1hwQyxZQUFNLENBQUM4RSxtQkFBUCxDQUEyQixTQUEzQixFQUFzQ3hELGFBQXRDO0FBQ0F0QixZQUFNLENBQUM2RSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ25ELFdBQWpDO0FBQ0ExQixZQUFNLENBQUNpQyxvQkFBUCxDQUE0QmxDLFdBQVcsQ0FBQzZCLE9BQXhDO0FBQ0E3QixpQkFBVyxDQUFDNkIsT0FBWixHQUFzQixDQUF0QjtBQUNELEtBTEQ7QUFNRCxHQWhCUSxFQWdCTixFQWhCTSxDQUFUO0FBa0JBLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR25DLE9BQU8sSUFBSSxDQUFDRixVQUFaLGdCQUF5QiwyREFBQyxrREFBRCxPQUF6QixHQUF5QyxFQUQ1QyxFQUVHQSxVQUFVLGdCQUFHLDJEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFcEUsS0FBakI7QUFBd0IsZ0JBQVksRUFBRTZHO0FBQXRDLElBQUgsR0FBdUQsRUFGcEUsZUFHRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLDJEQUFDLGtEQUFEO0FBQVcsU0FBSyxFQUFFN0csS0FBbEI7QUFBeUIsV0FBTyxFQUFFc0YsS0FBSyxDQUFDc0U7QUFBeEMsSUFERixDQUhGLGVBT0U7QUFDRSxPQUFHLEVBQUUxRSxTQURQO0FBRUUsWUFBUSxFQUFFLENBRlo7QUFHRSxTQUFLLEVBQUV0RSxNQUFNLENBQUM2RixPQUFQLENBQWU1RixLQUFmLEdBQXVCRCxNQUFNLENBQUM2RixPQUFQLENBQWV6QixLQUgvQztBQUlFLFVBQU0sRUFBRXBFLE1BQU0sQ0FBQzZGLE9BQVAsQ0FBZTNGLE1BQWYsR0FBd0JGLE1BQU0sQ0FBQzZGLE9BQVAsQ0FBZXpCO0FBSmpELElBUEYsQ0FERjtBQWlCRCxDQXhSRDs7Y0FBTWYsSTtVQTZCVXNCLHNEOzs7ZUE0UER0QixJO0FBQUE7Ozs7Ozs7Ozs7MEJBdFNUWCxHOzBCQWFBVyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JOOztBQU9BLElBQU00RixRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxDQUFDQyxLQUFELEVBQTBCO0FBQUEsTUFDMUQ5SixLQUQwRCxHQUNsQzhKLEtBRGtDLENBQzFEOUosS0FEMEQ7QUFBQSxNQUNuRCtKLFlBRG1ELEdBQ2xDRCxLQURrQyxDQUNuREMsWUFEbUQ7QUFHbEUsc0JBQ0UscUlBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFJLGFBQVMsRUFBQztBQUFkLGlCQURGLGVBRUU7QUFBSSxhQUFTLEVBQUM7QUFBZCx1SEFGRixlQUdFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBdUMvSixLQUF2QyxDQUhGLGVBSUU7QUFBUSxhQUFTLEVBQUMsc0JBQWxCO0FBQXlDLFFBQUksRUFBQyxRQUE5QztBQUF1RCxXQUFPLEVBQUUrSjtBQUFoRSwyR0FKRixDQURGLENBREY7QUFVRCxDQWJEOztlQWVlRixRO0FBQUE7Ozs7Ozs7Ozs7MEJBZlRBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQTjs7QUFFQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLHNCQUNoQixxSUFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsc0NBREYsZUFFRTtBQUFJLGFBQVMsRUFBQztBQUFkLDhJQUZGLENBREYsQ0FEZ0I7QUFBQSxDQUFsQjs7ZUFTZUEsUztBQUFBOzs7Ozs7Ozs7OzBCQVRUQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZOO0FBRUE7O0FBT0EsSUFBTUMsU0FBb0MsR0FBRyxTQUF2Q0EsU0FBdUMsQ0FBQ0gsS0FBRCxFQUEwQjtBQUFBLE1BQzdEOUosS0FENkQsR0FDMUM4SixLQUQwQyxDQUM3RDlKLEtBRDZEO0FBQUEsTUFDdEQ0SixPQURzRCxHQUMxQ0UsS0FEMEMsQ0FDdERGLE9BRHNEO0FBRXJFLHNCQUNFLHFJQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBcUNNLHNFQUFVLENBQUNOLE9BQUQsQ0FBL0MsQ0FERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBcUM1SixLQUFLLENBQUNtSyxRQUFOLEdBQWlCQyxRQUFqQixDQUEwQixDQUExQixFQUE2QixHQUE3QixDQUFyQyxDQUZGLENBREY7QUFNRCxDQVJEOztlQVVlSCxTO0FBQUE7Ozs7Ozs7Ozs7MEJBVlRBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ROO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksVUFBb0IsR0FBRyxTQUF2QkEsVUFBdUI7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxzQkFDM0IsMkRBQUMsMkNBQUQscUJBQ0UsMkRBQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsRUFBWDtBQUFlLFVBQU0sRUFBRTtBQUF2QixrQkFDRSwyREFBQyw0REFBRCxxQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBREYsZUFFRSwyREFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxZQUF4QjtBQUFxQyx1QkFBbUIsRUFBRSxDQUFDLEdBQUQ7QUFBMUQsa0JBQ0UsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsMERBRUUsMkRBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxJQUZGLENBREYsRUFLRyxDQUFDQywrREFBTSxFQUFQLGlCQUVDLDJEQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLDhDQUVFLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsSUFGRixDQVBKLEVBWUcsQ0FBQ0EsK0RBQU0sRUFBUCxpQkFFQywyREFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZix3RkFFRSwyREFBQyxxREFBRDtBQUFNLE1BQUUsRUFBQztBQUFULElBRkYsQ0FkSixFQW1CR0EsK0RBQU0sbUJBRUwsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsZ0VBRUUsMkRBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxJQUZGLENBckJKLEVBMEJHQSwrREFBTSxtQkFFTCwyREFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZix5RkFFRSwyREFBQyxxREFBRDtBQUFNLE1BQUUsRUFBQztBQUFULElBRkYsQ0E1QkosRUFpQ0dBLCtEQUFNLG1CQUVMLDJEQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLG9EQUVFLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsSUFGRixDQW5DSixDQUZGLENBREYsQ0FERixlQStDRSwyREFBQyw2REFBRCxRQUNHRCxRQURILENBL0NGLGVBbURFLDJEQUFDLDREQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUVFLGVBQVMsRUFBRTtBQUFiO0FBQWYsMENBbkRGLENBRDJCO0FBQUEsQ0FBN0IsQyxDQXdEQTs7O2VBQ2VILFU7QUFBQTs7Ozs7Ozs7OzswQkF6RFRBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk47Q0FHQTs7QUFDQTtJQUVRSSxNLEdBQVdDLDJDLENBQVhELE07O0FBQ1IsSUFBTUUsbUJBQTZCLEdBQUcsU0FBaENBLG1CQUFnQztBQUFBLHNCQUNwQywyREFBQywyQ0FBRDtBQUFRLFNBQUssRUFBRTtBQUFFOUosV0FBSyxFQUFFO0FBQVQ7QUFBZixrQkFDRSwyREFBQyxNQUFEO0FBQVEsU0FBSyxFQUFDO0FBQWQsWUFERixlQUVFLDJEQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUM7QUFBZCxVQUZGLENBRG9DO0FBQUEsQ0FBdEMsQyxDQU9BOzs7ZUFDZThKLG1CO0FBQUE7Ozs7Ozs7Ozs7MEJBVFBGLE07MEJBQ0ZFLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BOLElBQU1DLFFBQVEsR0FBRyxtQ0FBakI7QUFFTyxJQUFNdk0sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3dNLElBQUQ7QUFBQSxTQUEwQkQsUUFBUSxHQUFHQyxJQUFyQztBQUFBLENBQWpCOzs7Ozs7Ozs7OzBCQUZERCxROzBCQUVPdk0sUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU4sU0FBUzJELFdBQVQsQ0FBcUI4SSxDQUFyQixFQUErQkMsTUFBL0IsRUFBOENDLEtBQTlDLEVBQW9FO0FBQ3pFLFNBQU87QUFDTHRMLEtBQUMsRUFBRyxDQUFDb0wsQ0FBQyxDQUFDcEwsQ0FBRixHQUFNcUwsTUFBTSxDQUFDckwsQ0FBZCxJQUFtQnlCLElBQUksQ0FBQ3NCLEdBQUwsQ0FBU3VJLEtBQVQsQ0FBbkIsR0FBcUMsQ0FBQ0YsQ0FBQyxDQUFDbEwsQ0FBRixHQUFNbUwsTUFBTSxDQUFDbkwsQ0FBZCxJQUFtQnVCLElBQUksQ0FBQ29CLEdBQUwsQ0FBU3lJLEtBQVQsQ0FBekQsR0FBNEVELE1BQU0sQ0FBQ3JMLENBRGpGO0FBRUxFLEtBQUMsRUFBRyxDQUFDa0wsQ0FBQyxDQUFDcEwsQ0FBRixHQUFNcUwsTUFBTSxDQUFDckwsQ0FBZCxJQUFtQnlCLElBQUksQ0FBQ29CLEdBQUwsQ0FBU3lJLEtBQVQsQ0FBbkIsR0FBcUMsQ0FBQ0YsQ0FBQyxDQUFDbEwsQ0FBRixHQUFNbUwsTUFBTSxDQUFDbkwsQ0FBZCxJQUFtQnVCLElBQUksQ0FBQ3NCLEdBQUwsQ0FBU3VJLEtBQVQsQ0FBekQsR0FBNEVELE1BQU0sQ0FBQ25MO0FBRmpGLEdBQVA7QUFJRDtBQUVNLFNBQVNELGdCQUFULENBQTBCc0wsR0FBMUIsRUFBdUNDLEdBQXZDLEVBQTREO0FBQ2pFLFNBQU8vSixJQUFJLENBQUNnSyxNQUFMLE1BQWlCRCxHQUFHLEdBQUdELEdBQU4sR0FBWSxDQUE3QixJQUFrQ0EsR0FBekM7QUFDRDtBQUVNLFNBQVMvSyxnQkFBVCxDQUEwQnlHLEtBQTFCLEVBQXlDeUUsR0FBekMsRUFBK0Q7QUFDcEUsTUFBTU4sQ0FBVSxHQUFHLEVBQW5COztBQUVBLE9BQUssSUFBSXpLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzRyxLQUFwQixFQUEyQnRHLENBQUMsRUFBNUIsRUFBZ0M7QUFDOUJ5SyxLQUFDLENBQUN6SyxDQUFELENBQUQsR0FBTztBQUNMWCxPQUFDLEVBQUUsQ0FDRCxDQUFDeUIsSUFBSSxDQUFDb0IsR0FBTCxDQUFVLE1BQU1vRSxLQUFQLEdBQWdCdEcsQ0FBaEIsSUFBcUJjLElBQUksQ0FBQ0MsRUFBTCxHQUFVLEdBQS9CLENBQVQsQ0FBRCxHQUNFRCxJQUFJLENBQUNrSyxLQUFMLENBQVdsSyxJQUFJLENBQUNnSyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLENBQS9CLEtBQXFDaEssSUFBSSxDQUFDZ0ssTUFBTCxLQUFnQixDQUFyRCxDQUZELElBR0NDLEdBSkM7QUFLTHhMLE9BQUMsRUFBRSxDQUNELENBQUN1QixJQUFJLENBQUNzQixHQUFMLENBQVUsTUFBTWtFLEtBQVAsR0FBZ0J0RyxDQUFoQixJQUFxQmMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBL0IsQ0FBVCxDQUFELEdBQ0VELElBQUksQ0FBQ2tLLEtBQUwsQ0FBV2xLLElBQUksQ0FBQ2dLLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBL0IsS0FBcUNoSyxJQUFJLENBQUNnSyxNQUFMLEtBQWdCLENBQXJELENBRkQsSUFHQ0M7QUFSQyxLQUFQO0FBVUQ7O0FBQ0QsU0FBT04sQ0FBUDtBQUNEO0FBRU0sU0FBU3RCLFFBQVQsQ0FBa0I4QixJQUFsQixFQUFvQ0MsRUFBcEMsRUFBNEQ7QUFDakUsTUFBSUMsV0FBVyxHQUFHLEtBQWxCO0FBQ0EsTUFBSUMsU0FBSjtBQUNBLE1BQUlDLFNBQUo7O0FBRUEsV0FBU0MsT0FBVCxHQUFvRDtBQUFBLHNDQUFoQnJNLElBQWdCO0FBQWhCQSxVQUFnQjtBQUFBOztBQUNsRCxRQUFJa00sV0FBSixFQUFpQjtBQUNmQyxlQUFTLEdBQUduTSxJQUFaO0FBQ0FvTSxlQUFTLEdBQUcsSUFBWjtBQUNBO0FBQ0Q7O0FBRURKLFFBQUksQ0FBQ00sS0FBTCxDQUFXLElBQVgsRUFBaUJ0TSxJQUFqQjtBQUVBa00sZUFBVyxHQUFHLElBQWQ7QUFFQUssY0FBVSxDQUFDLFlBQU07QUFDZkwsaUJBQVcsR0FBRyxLQUFkOztBQUNBLFVBQUlDLFNBQVMsSUFBSUMsU0FBakIsRUFBNEI7QUFDMUJDLGVBQU8sQ0FBQ0MsS0FBUixDQUFjRixTQUFkLEVBQXlCRCxTQUF6QjtBQUNBQSxpQkFBUyxHQUFHLElBQVo7QUFDQUMsaUJBQVMsR0FBRyxJQUFaO0FBQ0Q7QUFDRixLQVBTLEVBT1BILEVBUE8sQ0FBVjtBQVFEOztBQUVELFNBQU9JLE9BQVA7QUFDRDtBQUVNLFNBQVM1RyxhQUFULEdBQWlDO0FBQ3RDLFNBQU9tRSxRQUFRLENBQUNFLGlCQUFULEdBQTZCdkUsTUFBTSxDQUFDaUgsV0FBcEMsR0FBa0RqSCxNQUFNLENBQUNpSCxXQUFQLEdBQXFCLEdBQTlFO0FBQ0Q7Ozs7Ozs7Ozs7MEJBNURlOUosVzswQkFPQXJDLGdCOzBCQUlBTyxnQjswQkFrQkFzSixROzBCQTZCQXpFLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURoQjtBQUNBO0FBRWUsU0FBU3dGLE1BQVQsR0FBMkI7QUFDeEMsTUFBTXdCLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQ0MsNkRBQUQsQ0FBNUI7QUFFQSxTQUFPRixRQUFRLENBQUNHLFVBQWhCO0FBQ0Q7O2NBSnVCM0IsTTtVQUNMeUIsdUQ7Ozs7Ozs7Ozs7OzswQkFES3pCLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7QUFFTyxJQUFNNEIsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDak4sSUFBRCxFQUFla04sT0FBZixFQUFnQ0MsV0FBaEMsRUFBOEQ7QUFDcEc7QUFDQUMsbURBQVksQ0FBQ3BOLElBQUQsQ0FBWixDQUFtQjtBQUNqQmtOLFdBQU8sRUFBUEEsT0FEaUI7QUFFakJDLGVBQVcsRUFBWEE7QUFGaUIsR0FBbkI7QUFJRCxDQU5NOzs7Ozs7Ozs7OzBCQUFNRix3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTixTQUFTakMsVUFBVCxDQUFvQjFELENBQXBCLEVBQXVDO0FBQzVDLE1BQUkrRixHQUFHLEdBQUcsRUFBVjtBQUVBLE1BQU1DLENBQUMsR0FBR3JMLElBQUksQ0FBQ3NMLEtBQUwsQ0FBV2pHLENBQUMsR0FBRyxFQUFmLENBQVY7QUFDQSxNQUFNa0csTUFBTSxHQUFHdkwsSUFBSSxDQUFDc0wsS0FBTCxDQUFXakcsQ0FBQyxHQUFHZ0csQ0FBQyxHQUFHLEVBQW5CLENBQWY7QUFFQUQsS0FBRyxJQUFJQyxDQUFDLEdBQUcsRUFBSixjQUFhQSxDQUFDLENBQUNyQyxRQUFGLEVBQWIsSUFBOEJxQyxDQUFDLENBQUNyQyxRQUFGLEVBQXJDO0FBQ0FvQyxLQUFHLElBQUksR0FBUDtBQUNBQSxLQUFHLElBQUlHLE1BQU0sR0FBRyxFQUFULGNBQWtCQSxNQUFNLENBQUN2QyxRQUFQLEVBQWxCLElBQXdDdUMsTUFBTSxDQUFDdkMsUUFBUCxFQUEvQztBQUVBLFNBQU9vQyxHQUFQO0FBQ0Q7Ozs7Ozs7Ozs7MEJBWGVyQyxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWhCO0FBRWUsU0FBUzNFLFFBQVQsR0FBb0I7QUFBQSxrQkFDSHJCLHNEQUFRLENBQUMsQ0FBRCxDQURMO0FBQUE7QUFBQSxNQUMxQjBGLE9BRDBCO0FBQUEsTUFDakIrQyxVQURpQjs7QUFBQSxtQkFFQ3pJLHNEQUFRLENBQUMsSUFBRCxDQUZUO0FBQUE7QUFBQSxNQUUxQjBJLFNBRjBCO0FBQUEsTUFFZkMsWUFGZTs7QUFJakMsTUFBTUMsV0FBVyxHQUFHckksb0RBQU0sQ0FBQyxDQUFELENBQTFCOztBQUVBLE1BQU1zSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JGLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FHLGlCQUFhLENBQUNGLFdBQVcsQ0FBQ3JHLE9BQWIsQ0FBYjtBQUNBcUcsZUFBVyxDQUFDckcsT0FBWixHQUFzQixDQUF0QjtBQUNELEdBSkQ7O0FBTUEsTUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixRQUFJK0YsV0FBVyxDQUFDckcsT0FBWixLQUF3QixDQUE1QixFQUErQjtBQUM3Qm9HLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FDLGlCQUFXLENBQUNyRyxPQUFaLEdBQXNCNUIsTUFBTSxDQUFDb0ksV0FBUCxDQUFtQjtBQUFBLGVBQU1OLFVBQVUsQ0FBQyxVQUFDbkcsQ0FBRDtBQUFBLGlCQUFRQSxDQUFDLEdBQUcsQ0FBWjtBQUFBLFNBQUQsQ0FBaEI7QUFBQSxPQUFuQixFQUFxRCxJQUFyRCxDQUF0QjtBQUNEO0FBQ0YsR0FMRDs7QUFPQSxNQUFNSixLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCeUcsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUUsb0JBQWdCO0FBQ2pCLEdBSEQ7O0FBS0EsTUFBTTdGLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEI2RixvQkFBZ0I7QUFDaEJKLGNBQVUsQ0FBQyxDQUFELENBQVY7QUFDRCxHQUhEOztBQUtBbEQseURBQVMsQ0FBQyxZQUFNO0FBQ2QxQyxTQUFLO0FBQ0wsV0FBT2dHLGdCQUFQO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLFNBQU87QUFDTG5ELFdBQU8sRUFBUEEsT0FESztBQUNJN0MsU0FBSyxFQUFMQSxLQURKO0FBQ1dYLFNBQUssRUFBTEEsS0FEWDtBQUNrQmMsU0FBSyxFQUFMQSxLQURsQjtBQUN5QjBGLGFBQVMsRUFBVEE7QUFEekIsR0FBUDtBQUdEOztjQXJDdUJySCxROzs7Ozs7Ozs7OzswQkFBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBUzJILE9BQVQsR0FBa0U7QUFDL0UsTUFBTUMsT0FBTyxHQUFHQywrREFBVSxFQUExQjs7QUFEK0Usa0JBRXJEbEosc0RBQVEsRUFGNkM7QUFBQTtBQUFBLE1BRXhFbUosS0FGd0U7QUFBQSxNQUVqRUMsUUFGaUU7O0FBRy9FLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNekIsUUFBUSxHQUFHQywrREFBVyxDQUFDQyw2REFBRCxDQUE1Qjs7QUFDQSxNQUFNd0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBWTtBQUMzQixRQUFJLENBQUMxQixRQUFRLENBQUNHLFVBQVYsSUFBd0IsQ0FBQ0gsUUFBUSxDQUFDc0IsS0FBbEMsSUFBMkMsQ0FBQ3RCLFFBQVEsQ0FBQzJCLE9BQXpELEVBQWtFO0FBQ2hFSCxjQUFRLENBQUNJLDBFQUFPLEVBQVIsQ0FBUjtBQUNEOztBQUNELFFBQUk1QixRQUFRLENBQUM2QixNQUFULElBQW1CN0IsUUFBUSxDQUFDRyxVQUFoQyxFQUE0QztBQUMxQ0Msa0dBQXdCLENBQUMsU0FBRCxFQUFZLDBCQUFaLEVBQXdDLEVBQXhDLENBQXhCO0FBQ0FnQixhQUFPLENBQUMvRSxJQUFSLENBQWEsR0FBYjtBQUNEOztBQUNELFFBQUkyRCxRQUFRLENBQUNzQixLQUFiLEVBQW9CO0FBQUE7O0FBQ2xCQyxjQUFRLDBCQUFDdkIsUUFBUSxDQUFDOEIsU0FBVCxDQUFtQnJQLFFBQXBCLDBEQUFDLHNCQUE2QkwsSUFBOUIsQ0FBUjtBQUNBZ08sa0dBQXdCLENBQUMsT0FBRCxFQUFVLFFBQVYsNEJBQW9CSixRQUFRLENBQUM4QixTQUFULENBQW1CclAsUUFBdkMsMkRBQW9CLHVCQUE2QkwsSUFBN0IsQ0FBa0MyUCxNQUF0RCxDQUF4QjtBQUNBWCxhQUFPLENBQUMvRSxJQUFSLENBQWEsUUFBYjtBQUNEO0FBQ0YsR0FiRDs7QUFjQSxTQUFPLENBQUNxRixRQUFELEVBQVdKLEtBQVgsQ0FBUDtBQUNEOztjQXJCdUJILE87VUFDTkUsdUQsRUFFQ0ksdUQsRUFFQXhCLHVEOzs7Ozs7Ozs7Ozs7MEJBTEtrQixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQeEI7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNL08sSUFBSSxHQUFHLENBQ1g7QUFDRWdCLElBQUUsRUFBRSxDQUROO0FBRUU0TyxPQUFLLEVBQUUsZ0JBRlQ7QUFHRTFCLGFBQVcsRUFBRTtBQUhmLENBRFcsRUFNWDtBQUNFbE4sSUFBRSxFQUFFLENBRE47QUFFRTRPLE9BQUssRUFBRSxnQkFGVDtBQUdFMUIsYUFBVyxFQUFFO0FBSGYsQ0FOVyxFQVdYO0FBQ0VsTixJQUFFLEVBQUUsQ0FETjtBQUVFNE8sT0FBSyxFQUFFLGdCQUZUO0FBR0UxQixhQUFXLEVBQUU7QUFIZixDQVhXLEVBZ0JYO0FBQ0VsTixJQUFFLEVBQUUsQ0FETjtBQUVFNE8sT0FBSyxFQUFFLGdCQUZUO0FBR0UxQixhQUFXLEVBQUU7QUFIZixDQWhCVyxDQUFiOztBQXVCQSxJQUFNck8sU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0I7QUFBQSxzQkFDMUIsMkRBQUMsd0NBQUQscUJBQ0UsMkRBQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsRUFBWDtBQUFlLFVBQU0sRUFBRTtBQUF2QixrQkFDRSwyREFBQyx5Q0FBRDtBQUNFLGNBQVUsRUFBQyxZQURiO0FBRUUsY0FBVSxFQUFFRyxJQUZkO0FBR0UsY0FBVSxFQUFFLG9CQUFDNEosSUFBRDtBQUFBLDBCQUNWLDJEQUFDLHlDQUFELENBQU0sSUFBTixxQkFDRSwyREFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0UsYUFBSyxlQUFFLDJEQUFDLHFEQUFEO0FBQU0sWUFBRSx3QkFBaUJBLElBQUksQ0FBQzVJLEVBQXRCO0FBQVIsV0FBcUM0SSxJQUFJLENBQUNnRyxLQUExQyxDQURUO0FBRUUsbUJBQVcsRUFBRWhHLElBQUksQ0FBQ3NFO0FBRnBCLFFBREYsQ0FEVTtBQUFBO0FBSGQsSUFERixDQURGLENBRDBCO0FBQUEsQ0FBNUI7O2VBbUJlck8sUztBQUFBOzs7Ozs7Ozs7OzBCQTFDVEcsSTswQkF1QkFILFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qk47QUFDQTtBQUdBO0lBRVFnUSxRLEdBQWFDLDBDLENBQWJELFE7QUFFUixJQUFNN1AsSUFBSSxHQUFHLENBQ1g7QUFDRWdCLElBQUUsRUFBRSxDQUROO0FBRUUrTyxNQUFJLEVBQUU7QUFGUixDQURXLEVBS1g7QUFDRS9PLElBQUUsRUFBRSxDQUROO0FBRUUrTyxNQUFJLEVBQUU7QUFGUixDQUxXLEVBU1g7QUFDRS9PLElBQUUsRUFBRSxDQUROO0FBRUUrTyxNQUFJLEVBQUU7QUFGUixDQVRXLENBQWI7O0FBZUEsSUFBTWpRLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFBQSxpQkFDakJrUSxpRUFBTyxFQURVO0FBQUE7QUFBQSxNQUN6QkMsSUFEeUI7O0FBR2hDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLE1BQUQsRUFBaUI7QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLE1BQXhCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU10USxJQUFJLENBQUN1USxHQUFMLENBQVMsVUFBQ3RDLE9BQUQ7QUFBQSwwQkFDaEM7QUFBSyxXQUFHLEVBQUVBLE9BQU8sQ0FBQ2pOO0FBQWxCLHNCQUNFLHNFQUNHaU4sT0FBTyxDQUFDOEIsSUFEWCxDQURGLGVBSUUsMkRBQUMsNENBQUQsT0FKRixDQURnQztBQUFBLEtBQVQsQ0FBTjtBQUFBLEdBQW5COztBQVNBLHNCQUNFLDJEQUFDLHdDQUFELHFCQUNFLDJEQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBZSxVQUFNLEVBQUU7QUFBdkIsS0FDR08sVUFBVSxFQURiLGVBRUUsMkRBQUMseUNBQUQ7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFlBQVEsRUFBRUosUUFGWjtBQUdFLFVBQU0sRUFBQyxVQUhUO0FBSUUsb0JBQWdCLE1BSmxCO0FBS0UsUUFBSSxFQUFFRDtBQUxSLGtCQU9FLDJEQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFFBQUksRUFBQztBQUFoQixrQkFDRSwyREFBQyxRQUFEO0FBQVUsUUFBSSxFQUFFO0FBQWhCLElBREYsQ0FQRixlQVdFLDJEQUFDLHlDQUFELENBQU0sSUFBTixxQkFDRSwyREFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFlBQVEsRUFBQztBQUFoQyw4REFERixDQVhGLENBRkYsQ0FERixDQURGO0FBeUJELENBekNEOztjQUFNblEsUztVQUNXa1EseUQ7OztlQTBDRmxRLFM7QUFBQTs7Ozs7Ozs7OzswQkE1RFArUCxROzBCQUVGN1AsSTswQkFlQUYsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJOO0FBQ0E7QUFDQTtDQUlBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTU4sUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBLGlCQUNadVAsOERBQU8sRUFESztBQUFBO0FBQUEsTUFDeEJPLFFBRHdCOztBQUcvQixNQUFNMUIsUUFBUSxHQUFHQywrREFBVyxDQUFDQyw2REFBRCxDQUE1QjtBQUVBMEMsOENBQUssQ0FBQ2xGLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQmdFLFlBQVE7QUFDVCxHQUZELEVBRUcsQ0FBQzFCLFFBQUQsQ0FGSDtBQUlBLHNCQUFRLDJEQUFDLHdEQUFELE9BQVI7QUFDRCxDQVZELEMsQ0FZQTs7O2NBWk1wTyxRO1VBQ2V1UCxzRCxFQUVGbEIsdUQ7OztlQVVKck8sUTtBQUFBOzs7Ozs7Ozs7OzBCQWJUQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWTjtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRTyxJQUFNaVIsc0JBQTZDLEdBQUc7QUFDM0RDLGlCQUFlLEVBQUUsUUFEMEM7QUFFM0RDLFFBQU0sRUFBRSxDQUZtRDtBQUczREMsT0FBSyxFQUFFO0FBSG9ELENBQXREOztBQU1QLElBQU1DLGVBQXlCLEdBQUcsU0FBNUJBLGVBQTRCLEdBQU07QUFDdEMsTUFBTTdCLE9BQU8sR0FBR0MsK0RBQVUsRUFBMUI7QUFFQSxNQUFNckIsUUFBUSxHQUFHQywrREFBVyxDQUFDaUQsb0VBQUQsQ0FBNUI7O0FBRUEsTUFBSWxELFFBQVEsQ0FBQ3NCLEtBQWIsRUFBb0I7QUFBQTs7QUFDbEIsUUFBSSwwQkFBQXRCLFFBQVEsQ0FBQzhCLFNBQVQsQ0FBbUJyUCxRQUFuQixnRkFBNkIwUSxNQUE3QixNQUF3QyxHQUE1QyxFQUFpRDtBQUMvQy9CLGFBQU8sQ0FBQy9FLElBQVIsQ0FBYSxRQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0wrRCxrR0FBd0IsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixxQkFBcEIsQ0FBeEI7QUFDRDtBQUNGOztBQUVELE1BQU1vQixRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFtQiw4Q0FBSyxDQUFDbEYsU0FBTixDQUFnQixZQUFNO0FBQ3BCOEQsWUFBUSxDQUFDNEIsd0ZBQWMsQ0FBQ1Asc0JBQUQsQ0FBZixDQUFSO0FBQ0QsR0FGRCxFQUVHLEVBRkg7QUFJQSxzQkFDRSwyREFBQyx3Q0FBRCxxQkFDRSwyREFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxFQUFYO0FBQWUsVUFBTSxFQUFFO0FBQXZCLGtCQUNFLDJEQUFDLCtEQUFEO0FBQWtCLFFBQUksRUFBRTdDLFFBQVEsQ0FBQzVOO0FBQWpDLElBREYsQ0FERixDQURGO0FBT0QsQ0ExQkQsQyxDQTRCQTs7O2NBNUJNNlEsZTtVQUNZNUIsdUQsRUFFQ3BCLHVELEVBVUF3Qix1RDs7O2VBZ0JKd0IsZTtBQUFBOzs7Ozs7Ozs7OzBCQW5DRkosc0I7MEJBTVBJLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCTjtDQUdBOztDQUdBOztBQW1CQSxJQUFNSSxPQUFPLEdBQUcsQ0FDZDtBQUNFckIsT0FBSyxFQUFFLE1BRFQ7QUFFRXNCLFdBQVMsRUFBRTtBQUZiLENBRGMsRUFLZDtBQUNFdEIsT0FBSyxFQUFFLFFBRFQ7QUFFRXNCLFdBQVMsRUFBRSxRQUZiO0FBR0VDLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBZ0JDLENBQWhCO0FBQUEsYUFBa0NELENBQUMsQ0FBQ0UsTUFBRixHQUFXRCxDQUFDLENBQUNDLE1BQS9DO0FBQUEsS0FESDtBQUVOQyxZQUFRLEVBQUU7QUFGSjtBQUhWLENBTGMsRUFhZDtBQUNFNUIsT0FBSyxFQUFFLE1BRFQ7QUFFRXNCLFdBQVMsRUFBRSxNQUZiO0FBR0VDLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBZ0JDLENBQWhCO0FBQUEsYUFBa0MsSUFBSXRNLElBQUosQ0FBU3FNLENBQUMsQ0FBQ0ksSUFBWCxFQUFpQkMsT0FBakIsS0FBNkIsSUFBSTFNLElBQUosQ0FBU3NNLENBQUMsQ0FBQ0csSUFBWCxFQUFpQkMsT0FBakIsRUFBL0Q7QUFBQSxLQURIO0FBRU5GLFlBQVEsRUFBRTtBQUZKO0FBSFYsQ0FiYyxFQXFCZDtBQUNFNUIsT0FBSyxFQUFFLFNBRFQ7QUFFRXNCLFdBQVMsRUFBRTtBQUZiLENBckJjLENBQWhCOztBQTJCQSxJQUFNdFIsZ0JBQWlELEdBQUcsU0FBcERBLGdCQUFvRDtBQUFBLE1BQUdJLElBQUgsUUFBR0EsSUFBSDtBQUFBLHNCQUN4RCwyREFBQywwQ0FBRDtBQUFPLFdBQU8sRUFBRWlSLE9BQWhCO0FBQXlCLGNBQVUsRUFBRWpSO0FBQXJDLElBRHdEO0FBQUEsQ0FBMUQsQyxDQUlBOzs7ZUFDZUosZ0I7QUFBQTs7Ozs7Ozs7OzswQkFoQ1RxUixPOzBCQTJCQXJSLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRE47Q0FHQTs7QUFDQTs7QUFFQSxJQUFNK1IsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxzQkFDaEIscUlBQ0UsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLGdDQURSO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFQyxjQUFRLEVBQUUsSUFBWjtBQUFrQjNELGFBQU8sRUFBRTtBQUEzQixLQUFEO0FBSFQsa0JBS0UsMkRBQUMsMENBQUQsT0FMRixDQURGLGVBU0UsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLHNDQURSO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFMkQsY0FBUSxFQUFFLElBQVo7QUFBa0IzRCxhQUFPLEVBQUU7QUFBM0IsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFELENBQU8sUUFBUCxPQUxGLENBVEYsQ0FEZ0I7QUFBQSxDQUFsQixDLENBb0JBOzs7ZUFDZTBELFM7QUFBQTs7Ozs7Ozs7OzswQkFyQlRBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTjtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUdBO0NBR0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWxTLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFBQSxpQkFDakJ1USxpRUFBTyxFQURVO0FBQUE7QUFBQSxNQUN6QkMsSUFEeUI7O0FBR2hDLE1BQU1iLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBSGdDLGlCQUtiTiw4REFBTyxFQUxNO0FBQUE7QUFBQSxNQUt6Qk8sUUFMeUI7O0FBT2hDLE1BQU0xQixRQUFRLEdBQUdDLCtEQUFXLENBQUNDLDZEQUFELENBQTVCOztBQUVBLE1BQU1vQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQXNCO0FBQ3JDZixZQUFRLENBQUNuTyx3RUFBSyxDQUFDa1AsTUFBRCxDQUFOLENBQVI7QUFDRCxHQUZEOztBQUlBSyw4Q0FBSyxDQUFDbEYsU0FBTixDQUFnQixZQUFNO0FBQ3BCZ0UsWUFBUTtBQUNULEdBRkQsRUFFRyxDQUFDMUIsUUFBRCxDQUZIO0FBSUEsc0JBQ0UsMkRBQUMseUNBQUQ7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFlBQVEsRUFBRXNDLFFBRlo7QUFHRSxVQUFNLEVBQUMsVUFIVDtBQUlFLG9CQUFnQixNQUpsQjtBQUtFLFFBQUksRUFBRUQ7QUFMUixrQkFPRSwyREFBQyx3Q0FBRCxxQkFDRSwyREFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxFQUFYO0FBQWUsVUFBTSxFQUFFO0FBQXZCLGtCQUNFLDJEQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFDO0FBQVosa0JBQ0UsMkRBQUMsNERBQUQsT0FERixlQUVFLDJEQUFDLDBDQUFELHFCQUNFLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsa0JBQ0UsMkRBQUMsMkNBQUQ7QUFBUSxZQUFRLEVBQUM7QUFBakIsNEVBREYsQ0FERixlQU1FLDJEQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsWUFBUSxFQUFDO0FBQWhDLHNDQU5GLENBRkYsQ0FERixDQURGLENBUEYsQ0FERjtBQTJCRCxDQTVDRCxDLENBOENBOzs7Y0E5Q014USxTO1VBQ1d1USx5RCxFQUVFWCx1RCxFQUVFTixzRCxFQUVGbEIsdUQ7OztlQXdDSnBPLFM7QUFBQTs7Ozs7Ozs7OzswQkEvQ1RBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCTjtDQUdBOztBQUNBO0NBR0E7O0NBR0E7O0FBS0EsSUFBTW9TLFdBQXVDLEdBQUcsU0FBMUNBLFdBQTBDLE9BRTFDO0FBQUEsTUFESm5SLE1BQ0ksUUFESkEsTUFDSTs7QUFDSixNQUFNb1IsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQW1EO0FBQ3hFLFFBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFiLEVBQW9CO0FBQ2xCelIsMERBQU8sQ0FBQzBSLFlBQVIsQ0FBcUJILENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFyQjtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxzQkFDRSx3SEFDR3ZSLE1BQU0sZ0JBQUcsMkRBQUMsMkNBQUQ7QUFBUSxTQUFLLEVBQUMsUUFBZDtBQUF1QixRQUFJLEVBQUUsRUFBN0I7QUFBaUMsT0FBRyxFQUFFQTtBQUF0QyxJQUFILGdCQUFzRCwyREFBQywyQ0FBRDtBQUFRLFNBQUssRUFBQyxRQUFkO0FBQXVCLFFBQUksRUFBRSxFQUE3QjtBQUFpQyxRQUFJLGVBQUUsMkRBQUMsOERBQUQ7QUFBdkMsSUFEL0QsZUFFRSwyREFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxTQUFLLEVBQUMsc0NBRFI7QUFFRSxRQUFJLEVBQUM7QUFGUCxrQkFJRSwyREFBQywwQ0FBRDtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsRUFBRW9SO0FBQTdCLElBSkYsQ0FGRixlQVFFLDJEQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFNBQUssRUFBQyw2RkFEUjtBQUVFLFFBQUksRUFBQyxjQUZQO0FBR0UsU0FBSyxFQUFFLENBQUM7QUFBRUYsY0FBUSxFQUFFLElBQVo7QUFBa0IzRCxhQUFPLEVBQUU7QUFBM0IsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFELE9BTEYsQ0FSRixlQWVFLDJEQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFNBQUssRUFBQyxvQkFEUjtBQUVFLFFBQUksRUFBQyxZQUZQO0FBR0UsU0FBSyxFQUFFLENBQUM7QUFBRTJELGNBQVEsRUFBRSxJQUFaO0FBQWtCM0QsYUFBTyxFQUFFO0FBQTNCLEtBQUQ7QUFIVCxrQkFLRSwyREFBQywwQ0FBRCxPQUxGLENBZkYsZUF1QkUsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLDRDQURSO0FBRUUsUUFBSSxFQUFDLGFBRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFMkQsY0FBUSxFQUFFLElBQVo7QUFBa0IzRCxhQUFPLEVBQUU7QUFBM0IsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFELE9BTEYsQ0F2QkYsZUErQkUsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLGdDQURSO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFMkQsY0FBUSxFQUFFLElBQVo7QUFBa0IzRCxhQUFPLEVBQUU7QUFBM0IsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFELE9BTEYsQ0EvQkYsZUF1Q0UsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLGdDQURSO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFMkQsY0FBUSxFQUFFLElBQVo7QUFBa0I3USxVQUFJLEVBQUUsT0FBeEI7QUFBaUNrTixhQUFPLEVBQUU7QUFBMUMsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFELE9BTEYsQ0F2Q0YsZUErQ0UsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLDRDQURSO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFMkQsY0FBUSxFQUFFLElBQVo7QUFBa0IzRCxhQUFPLEVBQUU7QUFBM0IsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFEO0FBQU8sYUFBUyxFQUFFO0FBQWxCLElBTEYsQ0EvQ0YsZUF1REUsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLDJFQURSO0FBRUUsUUFBSSxFQUFDO0FBRlAsa0JBSUUsMkRBQUMsMENBQUQsQ0FBTyxRQUFQLE9BSkYsQ0F2REYsZUE4REUsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLHFFQURSO0FBRUUsUUFBSSxFQUFDO0FBRlAsa0JBSUUsMkRBQUMsMENBQUQsQ0FBTyxRQUFQLE9BSkYsQ0E5REYsQ0FERjtBQXVFRCxDQWhGRDs7ZUFrRmU0RCxXO0FBQUE7Ozs7Ozs7Ozs7MEJBbEZUQSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZk47QUFDQTtDQUdBOztBQUNBO0FBR0E7Q0FHQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWxTLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFBQSxpQkFDbkJxUSxpRUFBTyxFQURZO0FBQUE7QUFBQSxNQUMzQkMsSUFEMkI7O0FBQUEsd0JBRU5PLDRDQUFLLENBQUN6SyxRQUFOLENBQWUsRUFBZixDQUZNO0FBQUE7QUFBQSxNQUUzQnJGLE1BRjJCO0FBQUEsTUFFbkJ5UixTQUZtQjs7QUFJbEM3Ryx5REFBUyxDQUFDLFlBQU07QUFDZHZMLHdEQUFPLENBQUN5UCxPQUFSLEdBQWtCNEMsSUFBbEIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQy9CRixlQUFTLG9DQUE2QkUsSUFBSSxDQUFDM1IsTUFBbEMsRUFBVDtBQUVBdVAsVUFBSSxDQUFDcUMsY0FBTCxDQUFvQjtBQUNsQkMsa0JBQVUsRUFBRUYsSUFBSSxDQUFDRSxVQURDO0FBRWxCQyxtQkFBVyxFQUFFSCxJQUFJLENBQUNHLFdBRkE7QUFHbEJDLG9CQUFZLEVBQUVKLElBQUksQ0FBQ0ksWUFIRDtBQUlsQnhSLGFBQUssRUFBRW9SLElBQUksQ0FBQ3BSLEtBSk07QUFLbEJ5UixhQUFLLEVBQUVMLElBQUksQ0FBQ0ssS0FMTTtBQU1sQkMsYUFBSyxFQUFFTixJQUFJLENBQUNNO0FBTk0sT0FBcEI7QUFRRCxLQVhELFdBV1MsVUFBQ3pELEtBQUQsRUFBVztBQUNsQmtCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsS0FBWjtBQUNELEtBYkQ7QUFjRCxHQWZRLENBQVQ7QUFpQkEsTUFBTTBELFFBQVEsR0FBR3BDLDRDQUFLLENBQUNxQyxXQUFOLENBQWtCLFVBQUMxQyxNQUFELEVBQTRDO0FBQzdFM1Asd0RBQU8sQ0FBQ3NTLFdBQVIsQ0FBb0IzQyxNQUFwQjs7QUFFQSxRQUFJQSxNQUFNLENBQUM0QyxXQUFQLElBQXNCNUMsTUFBTSxDQUFDNkMsV0FBakMsRUFBOEM7QUFDNUN4UywwREFBTyxDQUFDeVMsY0FBUixDQUF1QjtBQUNyQkYsbUJBQVcsRUFBRTVDLE1BQU0sQ0FBQzRDLFdBREM7QUFFckJDLG1CQUFXLEVBQUU3QyxNQUFNLENBQUM2QztBQUZDLE9BQXZCO0FBSUQ7QUFDRixHQVRnQixFQVNkLEVBVGMsQ0FBakI7QUFXQSxzQkFDRSwyREFBQyx5Q0FBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsWUFBUSxFQUFFSixRQUZaO0FBR0UsVUFBTSxFQUFDLFVBSFQ7QUFJRSxvQkFBZ0IsTUFKbEI7QUFLRSxRQUFJLEVBQUUzQztBQUxSLGtCQU9FLDJEQUFDLHdDQUFELHFCQUNFLDJEQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBZSxVQUFNLEVBQUU7QUFBdkIsa0JBQ0UsMkRBQUMseUNBQUQ7QUFBTSxTQUFLLEVBQUM7QUFBWixrQkFDRSwyREFBQyxnRUFBRDtBQUFhLFVBQU0sRUFBRXZQO0FBQXJCLElBREYsZUFFRSwyREFBQywwQ0FBRCxxQkFDRSwyREFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFlBQVEsRUFBQztBQUFoQyw4REFERixlQUlFLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsa0JBQ0UsMkRBQUMsMkNBQUQ7QUFBUSxZQUFRLEVBQUM7QUFBakIsK0RBREYsQ0FKRixDQUZGLENBREYsQ0FERixDQVBGLENBREY7QUEyQkQsQ0EzREQsQyxDQTZEQTs7O2NBN0RNZixXO1VBQ1dxUSx5RDs7O2VBNkRGclEsVztBQUFBOzs7Ozs7Ozs7OzBCQTlEVEEsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCTjtDQUdBOztBQUNBO0FBQ0E7QUFFQSxJQUFNdVQsY0FBYyxnQkFDbEIsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsTUFBSSxFQUFDLFFBQWhCO0FBQXlCLFNBQU87QUFBaEMsZ0JBQ0UsMkRBQUMsdUVBQUQsT0FERixDQURGOztBQU1BLElBQU1DLGdCQUEwQixHQUFHLFNBQTdCQSxnQkFBNkI7QUFBQSxzQkFDakMscUlBQ0UsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLG9CQURSO0FBRUUsUUFBSSxFQUFDLFlBRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFdkIsY0FBUSxFQUFFLElBQVo7QUFBa0IzRCxhQUFPLEVBQUU7QUFBM0IsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFELE9BTEYsQ0FERixlQVNFLDJEQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFNBQUssRUFBQyw0Q0FEUjtBQUVFLFFBQUksRUFBQyxhQUZQO0FBR0UsU0FBSyxFQUFFLENBQUM7QUFBRTJELGNBQVEsRUFBRSxJQUFaO0FBQWtCM0QsYUFBTyxFQUFFO0FBQTNCLEtBQUQ7QUFIVCxrQkFLRSwyREFBQywwQ0FBRCxPQUxGLENBVEYsZUFpQkUsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLGdDQURSO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFMkQsY0FBUSxFQUFFLElBQVo7QUFBa0IzRCxhQUFPLEVBQUU7QUFBM0IsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFELE9BTEYsQ0FqQkYsZUF5QkUsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLGdDQURSO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFMkQsY0FBUSxFQUFFLElBQVo7QUFBa0I3USxVQUFJLEVBQUUsT0FBeEI7QUFBaUNrTixhQUFPLEVBQUU7QUFBMUMsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFELE9BTEYsQ0F6QkYsZUFpQ0UsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLDRDQURSO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFMkQsY0FBUSxFQUFFLElBQVo7QUFBa0IzRCxhQUFPLEVBQUU7QUFBM0IsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFEO0FBQU8sYUFBUyxFQUFFLENBQWxCO0FBQXFCLGVBQVcsRUFBRWlGO0FBQWxDLElBTEYsQ0FqQ0YsZUF5Q0UsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLHNDQURSO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxTQUFLLEVBQUUsQ0FBQztBQUFFdEIsY0FBUSxFQUFFLElBQVo7QUFBa0IzRCxhQUFPLEVBQUU7QUFBM0IsS0FBRDtBQUhULGtCQUtFLDJEQUFDLDBDQUFELENBQU8sUUFBUCxPQUxGLENBekNGLENBRGlDO0FBQUEsQ0FBbkMsQyxDQW9EQTs7O2VBQ2VrRixnQjtBQUFBOzs7Ozs7Ozs7OzBCQTNEVEQsYzswQkFNQUMsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JOO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFHQTtDQUdBOztBQUdBO0NBR0E7O0FBRUEsSUFBTXpULGdCQUEwQixHQUFHLFNBQTdCQSxnQkFBNkIsR0FBTTtBQUFBLGlCQUN4QnNRLGlFQUFPLEVBRGlCO0FBQUE7QUFBQSxNQUNoQ0MsSUFEZ0M7O0FBRXZDLE1BQU1qQixPQUFPLEdBQUdDLCtEQUFVLEVBQTFCOztBQUVBLE1BQU1pQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQTJCO0FBQzFDcFEsd0RBQU8sQ0FBQ3FULE1BQVIsQ0FBZWpELE1BQWYsRUFDR2lDLElBREgsQ0FDUSxZQUFNO0FBQ1ZwRSxrR0FBd0IsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQiw4QkFBckIsQ0FBeEI7QUFDQWdCLGFBQU8sQ0FBQy9FLElBQVIsQ0FBYSxHQUFiO0FBQ0QsS0FKSCxXQUtTLFVBQUNvSixHQUFELEVBQVM7QUFDZHJGLGtHQUF3QixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CcUYsR0FBRyxDQUFDaFQsUUFBSixDQUFhTCxJQUFiLENBQWtCMlAsTUFBdEMsQ0FBeEI7QUFDRCxLQVBIO0FBUUQsR0FURDs7QUFVQSxzQkFDRSwyREFBQyx5Q0FBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsWUFBUSxFQUFFTyxRQUZaO0FBR0UsVUFBTSxFQUFDLFVBSFQ7QUFJRSxvQkFBZ0IsTUFKbEI7QUFLRSxRQUFJLEVBQUVEO0FBTFIsa0JBT0UsMkRBQUMsd0NBQUQscUJBQ0UsMkRBQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsRUFBWDtBQUFlLFVBQU0sRUFBRTtBQUF2QixrQkFDRSwyREFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBQztBQUFaLGtCQUNFLDJEQUFDLDBFQUFELE9BREYsZUFFRSwyREFBQywwQ0FBRCxxQkFDRSwyREFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFlBQVEsRUFBQztBQUFoQywwRUFERixlQUlFLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsa0JBQ0UsMkRBQUMsMkNBQUQ7QUFBUSxZQUFRLEVBQUM7QUFBakIsc0NBREYsQ0FKRixDQUZGLENBREYsQ0FERixDQVBGLENBREY7QUEyQkQsQ0F6Q0QsQyxDQTJDQTs7O2NBM0NNdlEsZ0I7VUFDV3NRLHlELEVBQ0NmLHVEOzs7ZUEwQ0h2UCxnQjtBQUFBOzs7Ozs7Ozs7OzBCQTVDVEEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQk47QUFDQTtBQUVBOztlQUVlLGtCQUFDNFQsR0FBRCxFQUFlQyxHQUFmLEVBQWlDO0FBQzVDLE1BQU1DLEdBQUcsZ0JBQUksMkRBQUMsNENBQUQsT0FBYjtBQUNBLE1BQU1DLFNBQVMsR0FBR0MsdUVBQWMsQ0FBQ0YsR0FBRCxDQUFoQztBQUVBRCxLQUFHLENBQUNJLElBQUosQ0FBU0MsT0FBTyxDQUFDSCxTQUFELENBQWhCO0FBQ0gsQzs7QUFMYzs7QUFPZixTQUFTRyxPQUFULENBQWlCSCxTQUFqQixFQUFvQztBQUNoQywyZUFZcUJBLFNBWnJCO0FBaUJIOzs7Ozs7Ozs7OzswQkFsQlFHLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaVDtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLEdBQUcsR0FBR0MsOENBQU8sRUFBbkIsQyxDQUVBO0FBQ0E7O0FBQ0FELEdBQUcsQ0FDQUUsR0FESCxDQUNPRCw4Q0FBTyxVQUFQLENBQWVwSCwyQ0FBSSxDQUFDc0gsT0FBTCxDQUFhQyxTQUFiLEVBQXdCLFdBQXhCLENBQWYsQ0FEUCxFQUVHRixHQUZILENBRU9ELDhDQUFPLFVBQVAsQ0FBZXBILDJDQUFJLENBQUNzSCxPQUFMLENBQWFDLFNBQWIsRUFBd0IsVUFBeEIsQ0FBZixDQUZQO0FBSUFKLEdBQUcsQ0FBQ3RULEdBQUosQ0FBUSxJQUFSLEVBQWMyVCxpRUFBZDtBQUVBOzs7Ozs7Ozs7OzBCQVZNTCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pOO0FBS08sSUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUF5QjtBQUFFcFQsUUFBSSxFQUFFcVQscURBQVcsQ0FBQ0M7QUFBcEIsR0FBekI7QUFBQSxDQUFwQjtBQUVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQzdFLE1BQUQ7QUFBQSxTQUF5QztBQUN6RTFPLFFBQUksRUFBRXFULHFEQUFXLENBQUNHLFNBRHVEO0FBRXpFOUUsVUFBTSxFQUFOQTtBQUZ5RSxHQUF6QztBQUFBLENBQTNCO0FBS0EsSUFBTStFLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ3RGLEtBQUQ7QUFBQSxTQUM5QjtBQUFFbk8sUUFBSSxFQUFFcVQscURBQVcsQ0FBQ0ssTUFBcEI7QUFBNEJ2RixTQUFLLEVBQUxBO0FBQTVCLEdBRDhCO0FBQUEsQ0FBekI7QUFJQSxJQUFNak8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ2tQLE1BQUQ7QUFBQSxTQUFxQztBQUN4RHBQLFFBQUksRUFBRXFULHFEQUFXLENBQUNuVCxLQURzQztBQUV4RGtQLFVBQU0sRUFBTkE7QUFGd0QsR0FBckM7QUFBQSxDQUFkO0FBS0EsSUFBTVgsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUF5QjtBQUM5Q3pPLFFBQUksRUFBRXFULHFEQUFXLENBQUM1RTtBQUQ0QixHQUF6QjtBQUFBLENBQWhCO0FBSUEsSUFBTWtGLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2pGLE1BQUQsRUFBa0JrRixRQUFsQjtBQUFBLFNBQXVFO0FBQ25HNVQsUUFBSSxFQUFFcVQscURBQVcsQ0FBQ1EsZ0JBRGlGO0FBRW5HbkYsVUFBTSxFQUFOQSxNQUZtRztBQUduR2tGLFlBQVEsRUFBUkE7QUFIbUcsR0FBdkU7QUFBQSxDQUF2Qjs7Ozs7Ozs7OzswQkFwQk1SLFc7MEJBRUFHLGtCOzBCQUtBRSxnQjswQkFJQXZULEs7MEJBS0F1TyxPOzBCQUlBa0YsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJiO0FBR08sSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLFNBQXlCO0FBQUU5VCxRQUFJLEVBQUUrVCw0REFBa0IsQ0FBQ1Q7QUFBM0IsR0FBekI7QUFBQSxDQUEzQjtBQUVBLElBQU1VLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQy9VLElBQUQ7QUFBQSxTQUFnRDtBQUN2RmUsUUFBSSxFQUFFK1QsNERBQWtCLENBQUNQLFNBRDhEO0FBRXZGdlUsUUFBSSxFQUFKQTtBQUZ1RixHQUFoRDtBQUFBLENBQWxDO0FBS0EsSUFBTWdWLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQzlGLEtBQUQ7QUFBQSxTQUNyQztBQUFFbk8sUUFBSSxFQUFFK1QsNERBQWtCLENBQUNMLE1BQTNCO0FBQW1DdkYsU0FBSyxFQUFMQTtBQUFuQyxHQURxQztBQUFBLENBQWhDO0FBSUEsSUFBTThCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ1Asc0JBQUQ7QUFBQSxTQUE0RDtBQUN4RjFQLFFBQUksRUFBRStULDREQUFrQixDQUFDRyxlQUQrRDtBQUV4RnhFLDBCQUFzQixFQUF0QkE7QUFGd0YsR0FBNUQ7QUFBQSxDQUF2Qjs7Ozs7Ozs7OzswQkFYTW9FLGtCOzBCQUVBRSx5QjswQkFLQUMsdUI7MEJBSUFoRSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaEJSb0QsVzs7V0FBQUEsVztBQUFBQSxhO0FBQUFBLGE7QUFBQUEsYTtBQUFBQSxhO0FBQUFBLGE7QUFBQUEsYTtHQUFBQSxXLEtBQUFBLFc7O2VBU1VBLFc7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNUVlUsa0I7O1dBQUFBLGtCO0FBQUFBLG9CO0FBQUFBLG9CO0FBQUFBLG9CO0FBQUFBLG9CO0dBQUFBLGtCLEtBQUFBLGtCOztlQU9VQSxrQjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1FmLElBQU1oSCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDdEwsS0FBRDtBQUFBLFNBQTZCQSxLQUFLLENBQUMwUyxJQUFuQztBQUFBLENBQXJCOztlQUNlcEgsWTtBQUFBOzs7Ozs7Ozs7OzBCQURUQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZOLElBQU1nRCxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUN0TyxLQUFEO0FBQUEsU0FBb0NBLEtBQUssQ0FBQzJTLFdBQTFDO0FBQUEsQ0FBNUI7O2VBQ2VyRSxtQjtBQUFBOzs7Ozs7Ozs7OzBCQURUQSxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYk4sOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvc3RhdGljL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLy8gQ29yZVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICdAY29tcG9uZW50cy9QYWdlTGF5b3V0JztcclxuXHJcbi8vIFBhZ2VzXHJcbmltcG9ydCBQcm9maWxlUGFnZSBmcm9tICcuL3BhZ2VzL1Byb2ZpbGVQYWdlL1Byb2ZpbGVQYWdlJztcclxuaW1wb3J0IExvZ2luUGFnZSBmcm9tICcuL3BhZ2VzL0xvZ2luUGFnZS9Mb2dpblBhZ2UnO1xyXG5pbXBvcnQgR2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9HYW1lUGFnZS9HYW1lUGFnZSc7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25QYWdlIGZyb20gJy4vcGFnZXMvUmVnaXN0ZXJQYWdlL1JlZ2lzdHJhdGlvblBhZ2UnO1xyXG5pbXBvcnQgTGVhZGVyYm9hcmRUYWJsZSBmcm9tICcuL3BhZ2VzL0xlYWRlcmJvYXJkUGFnZS9MZWFkZXJib2FyZFBhZ2UnO1xyXG5pbXBvcnQgRm9ydW1MaXN0IGZyb20gJy4vcGFnZXMvRm9ydW1QYWdlL0ZvcnVtL0ZvcnVtTGlzdCc7XHJcbmltcG9ydCBGb3J1bVBhZ2UgZnJvbSAnLi9wYWdlcy9Gb3J1bVBhZ2UvRm9ydW1QYWdlJztcclxuXHJcbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiAoXHJcbiAgPFBhZ2VMYXlvdXQ+XHJcbiAgICA8U3dpdGNoPlxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0dhbWVQYWdlfSBleGFjdCAvPlxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW5QYWdlfSBleGFjdCAvPlxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGNvbXBvbmVudD17UmVnaXN0cmF0aW9uUGFnZX0gZXhhY3QgLz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZVwiIGNvbXBvbmVudD17UHJvZmlsZVBhZ2V9IGV4YWN0IC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGNvbXBvbmVudD17TGVhZGVyYm9hcmRUYWJsZX0gZXhhY3QgLz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ydW1cIiBjb21wb25lbnQ9e0ZvcnVtTGlzdH0gZXhhY3QgLz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ydW0tcGFnZS86aWRcIiBjb21wb25lbnQ9e0ZvcnVtUGFnZX0gZXhhY3QgLz5cclxuICAgICAgPFJlZGlyZWN0IHRvPVwiL2xvZ2luXCIgLz5cclxuICAgIDwvU3dpdGNoPlxyXG4gIDwvUGFnZUxheW91dD5cclxuKTtcclxuXHJcbi8vIEV4cG9ydHNcclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBTaWduVXBSZXF1ZXN0LCBTaWduVXNlciwgVXNlclJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBidWlsZFVybCB9IGZyb20gJy4uL2hlbHBlcnMvQXBpSGVscGVycyc7XHJcblxyXG5jbGFzcyBBdXRoQXBpIHtcclxuICAgIHN0YXRpYyBzaWduVXAgPSBhc3luYyAoZGF0YTogU2lnblVwUmVxdWVzdCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSBidWlsZFVybCgnYXV0aC9zaWdudXAnKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2lnbkluID0gYXN5bmMgKGRhdGE6IFNpZ25Vc2VyKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICAgIGNvbnN0IHVybCA9IGJ1aWxkVXJsKCdhdXRoL3NpZ25pbicpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRVc2VyID0gYXN5bmMgKCk6IFByb21pc2U8VXNlclJlc3BvbnNlPiA9PiB7XHJcbiAgICAgIGNvbnN0IHVybCA9IGJ1aWxkVXJsKCdhdXRoL3VzZXInKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2dvdXQgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICAgIGNvbnN0IHVybCA9IGJ1aWxkVXJsKCdhdXRoL2xvZ3VvdCcpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zLnBvc3QodXJsKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aEFwaTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgUGFzc3dvcmRSZXF1ZXN0LCBVc2VyUmVxdWVzdCwgVXNlclJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBidWlsZFVybCB9IGZyb20gJy4uL2hlbHBlcnMvQXBpSGVscGVycyc7XHJcblxyXG5jbGFzcyBVc2VyQXBpIHtcclxuICAgIHN0YXRpYyBlZGl0UHJvZmlsZSA9IGFzeW5jIChkYXRhOiBVc2VyUmVxdWVzdCk6IFByb21pc2U8VXNlclJlcXVlc3Q+ID0+IHtcclxuICAgICAgY29uc3QgdXJsID0gYnVpbGRVcmwoJ3VzZXIvcHJvZmlsZScpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiAncHV0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwbG9hZEF2YXRhciA9IGFzeW5jIChhdmF0YXI6IEZpbGUpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgICAgY29uc3QgdXJsID0gYnVpbGRVcmwoJ3VzZXIvcHJvZmlsZS9hdmF0YXInKTtcclxuXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXZhdGFyJywgYXZhdGFyKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogJ3B1dCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGF2YXRhci50eXBlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoYW5nZVBhc3N3b3JkID0gYXN5bmMgKGRhdGE6IFBhc3N3b3JkUmVxdWVzdCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSBidWlsZFVybCgndXNlci9wYXNzd29yZCcpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiAncHV0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRVc2VyID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJSZXNwb25zZT4gPT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSBidWlsZFVybChgdXNlci8ke2lkfWApO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpbmRVc2VycyA9IGFzeW5jIChsb2dpbjogc3RyaW5nKTogUHJvbWlzZTxVc2VyUmVzcG9uc2VbXT4gPT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSBidWlsZFVybCgndXNlci9zZWFyY2gnKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgeyBsb2dpbiB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQXBpO1xyXG4iLCJpbXBvcnQgeyByYW5kb21OdW1CZXR3ZWVuLCBhc3Rlcm9pZFZlcnRpY2VzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9HYW1lSGVscGVyJztcclxuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4uL1BhcnRpY2xlL1BhcnRpY2xlJztcclxuaW1wb3J0IHtcclxuICBDb29yZCwgVmVjdG9yLCByZW5kZXJTdGF0ZSwgSUFzdGVyb2lkUHJvcHMsXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMvZ2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3Rlcm9pZCB7XHJcbiAgcHVibGljIHBvc2l0aW9uOiBDb29yZDtcclxuXHJcbiAgcHJpdmF0ZSB2ZWxvY2l0eTogVmVjdG9yO1xyXG5cclxuICBwcml2YXRlIGFyZ3M6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSByb3RhdGlvbjogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgZGVsZXRlOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIHNjb3JlOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgcm90YXRpb25TcGVlZDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZTogYW55O1xyXG5cclxuICBwcml2YXRlIGFkZFNjb3JlOiAoc2NvcmU6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbiAgcHJpdmF0ZSB2ZXJ0aWNlczogQ29vcmRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoYXJnczogSUFzdGVyb2lkUHJvcHMpIHtcclxuICAgIHRoaXMucmFkaXVzID0gYXJncy5zaXplO1xyXG5cclxuICAgIHRoaXMudmVsb2NpdHkgPSB7XHJcbiAgICAgIHg6IHJhbmRvbU51bUJldHdlZW4oLTMsIDMpLFxyXG4gICAgICB5OiByYW5kb21OdW1CZXR3ZWVuKC0zLCAzKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGFyZ3MucG9zaXRpb247XHJcblxyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSByYW5kb21OdW1CZXR3ZWVuKC0xLCAxKTtcclxuXHJcbiAgICB0aGlzLnNjb3JlID0gKDgwIC8gdGhpcy5yYWRpdXMpICogNTtcclxuICAgIHRoaXMudmVydGljZXMgPSBhc3Rlcm9pZFZlcnRpY2VzKDgsIGFyZ3Muc2l6ZSk7XHJcblxyXG4gICAgdGhpcy5hZGRTY29yZSA9IGFyZ3MuYWRkU2NvcmU7XHJcblxyXG4gICAgdGhpcy5jcmVhdGUgPSBhcmdzLmNyZWF0ZTtcclxuXHJcbiAgICB0aGlzLmRlbGV0ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNEZWxldGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWxldGU7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZWxldGUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuYWRkU2NvcmUodGhpcy5zY29yZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJhZGl1czsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKHtcclxuICAgICAgICBsaWZlU3BhbjogcmFuZG9tTnVtQmV0d2Vlbig2MCwgMTAwKSxcclxuICAgICAgICBzaXplOiByYW5kb21OdW1CZXR3ZWVuKDEsIDMpLFxyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyByYW5kb21OdW1CZXR3ZWVuKC10aGlzLnJhZGl1cyAvIDQsIHRoaXMucmFkaXVzIC8gNCksXHJcbiAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyByYW5kb21OdW1CZXR3ZWVuKC10aGlzLnJhZGl1cyAvIDQsIHRoaXMucmFkaXVzIC8gNCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2ZWxvY2l0eToge1xyXG4gICAgICAgICAgeDogcmFuZG9tTnVtQmV0d2VlbigtMS41LCAxLjUpLFxyXG4gICAgICAgICAgeTogcmFuZG9tTnVtQmV0d2VlbigtMS41LCAxLjUpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNyZWF0ZShwYXJ0aWNsZSwgJ3BhcnRpY2xlcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnJhZGl1cyA+IDEwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYXN0ZXJvaWQgPSBuZXcgQXN0ZXJvaWQoe1xyXG5cclxuICAgICAgICAgIHNpemU6IHRoaXMucmFkaXVzIC8gMixcclxuICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHg6IHJhbmRvbU51bUJldHdlZW4oLTEwLCAyMCkgKyB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHJhbmRvbU51bUJldHdlZW4oLTEwLCAyMCkgKyB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY3JlYXRlOiB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgYWRkU2NvcmU6IHRoaXMuYWRkU2NvcmUuYmluZCh0aGlzKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZShhc3Rlcm9pZCwgJ2FzdGVyb2lkcycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoc3RhdGU6IHJlbmRlclN0YXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcclxuXHJcbiAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgIGlmICh0aGlzLnJvdGF0aW9uID49IDM2MCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uIC09IDM2MDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnJvdGF0aW9uIDwgMCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gc3RhdGUuc2NyZWVuLndpZHRoICsgdGhpcy5yYWRpdXMpIHRoaXMucG9zaXRpb24ueCA9IC10aGlzLnJhZGl1cztcclxuICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IC10aGlzLnJhZGl1cykgdGhpcy5wb3NpdGlvbi54ID0gc3RhdGUuc2NyZWVuLndpZHRoICsgdGhpcy5yYWRpdXM7XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ID4gc3RhdGUuc2NyZWVuLmhlaWdodCArIHRoaXMucmFkaXVzKSB0aGlzLnBvc2l0aW9uLnkgPSAtdGhpcy5yYWRpdXM7XHJcbiAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPCAtdGhpcy5yYWRpdXMpIHRoaXMucG9zaXRpb24ueSA9IHN0YXRlLnNjcmVlbi5oZWlnaHQgKyB0aGlzLnJhZGl1cztcclxuXHJcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IHN0YXRlO1xyXG4gICAgY29udGV4dC5zYXZlKCk7XHJcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICBjb250ZXh0LnJvdGF0ZSh0aGlzLnJvdGF0aW9uICogKE1hdGguUEkgLyAxODApKTtcclxuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnI0ZGRic7XHJcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDI7XHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5tb3ZlVG8oMCwgLXRoaXMucmFkaXVzKTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb250ZXh0LmxpbmVUbyh0aGlzLnZlcnRpY2VzW2ldLngsIHRoaXMudmVydGljZXNbaV0ueSk7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvb3JkLCBWZWN0b3IsIHJlbmRlclN0YXRlLCBJQnVsbGV0UHJvcHMsXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMvZ2FtZSc7XHJcbmltcG9ydCB7IHJvdGF0ZVBvaW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9HYW1lSGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCB7XHJcbiAgcHVibGljIHBvc2l0aW9uOiBDb29yZDtcclxuXHJcbiAgcHJpdmF0ZSB2ZWxvY2l0eTogVmVjdG9yO1xyXG5cclxuICBwcml2YXRlIGFyZ3M/OiBJQnVsbGV0UHJvcHM7XHJcblxyXG4gIHByaXZhdGUgcm90YXRpb246IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHJhZGl1czogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGRlbGV0ZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoYXJnczogSUJ1bGxldFByb3BzKSB7XHJcbiAgICBjb25zdCBwb3NEZWx0YSA9IHJvdGF0ZVBvaW50KFxyXG4gICAgICB7IHg6IDAsIHk6IC0yMCB9LFxyXG4gICAgICB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgKGFyZ3Mucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcclxuICAgICAgeDogYXJncy5wb3NpdGlvbi54ICsgcG9zRGVsdGEueCxcclxuICAgICAgeTogYXJncy5wb3NpdGlvbi55ICsgcG9zRGVsdGEueSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yb3RhdGlvbiA9IGFyZ3Mucm90YXRpb247XHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcclxuICAgICAgeDogcG9zRGVsdGEueCAvIDIsXHJcbiAgICAgIHk6IHBvc0RlbHRhLnkgLyAyLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJhZGl1cyA9IDM7XHJcblxyXG4gICAgdGhpcy5kZWxldGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzRGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVsZXRlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihzdGF0ZTogcmVuZGVyU3RhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG5cclxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwXHJcbiAgICAgIHx8IHRoaXMucG9zaXRpb24ueSA8IDBcclxuICAgICAgfHwgdGhpcy5wb3NpdGlvbi54ID4gc3RhdGUuc2NyZWVuLndpZHRoXHJcbiAgICAgIHx8IHRoaXMucG9zaXRpb24ueSA+IHN0YXRlLnNjcmVlbi5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSBzdGF0ZTtcclxuICAgIGNvbnRleHQuc2F2ZSgpO1xyXG4gICAgY29udGV4dC50cmFuc2xhdGUodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xyXG4gICAgY29udGV4dC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjRkZGJztcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0LmFyYygwLCAwLCB0aGlzLnJhZGl1cywgMCwgdGhpcy5yYWRpdXMgKiBNYXRoLlBJKTtcclxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvb3JkLCBWZWN0b3IsIHJlbmRlclN0YXRlLCBJUGFydGljbGVQcm9wcyxcclxufSBmcm9tICcuLi8uLi90eXBlcy9nYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlIHtcclxuICBwdWJsaWMgcG9zaXRpb246IENvb3JkO1xyXG5cclxuICBwcml2YXRlIHZlbG9jaXR5OiBWZWN0b3I7XHJcblxyXG4gIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBsaWZlU3BhbjogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGluZXJ0aWE6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBkZWxldGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IElQYXJ0aWNsZVByb3BzKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gYXJncy5wb3NpdGlvbjtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBhcmdzLnZlbG9jaXR5O1xyXG4gICAgdGhpcy5yYWRpdXMgPSBhcmdzLnNpemU7XHJcbiAgICB0aGlzLmxpZmVTcGFuID0gYXJncy5saWZlU3BhbjtcclxuICAgIHRoaXMuaW5lcnRpYSA9IDAuOTg7XHJcbiAgICB0aGlzLmRlbGV0ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNEZWxldGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWxldGU7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZWxldGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHN0YXRlOiByZW5kZXJTdGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcclxuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5pbmVydGlhO1xyXG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuaW5lcnRpYTtcclxuXHJcbiAgICB0aGlzLnJhZGl1cyAtPSAwLjE7XHJcbiAgICBpZiAodGhpcy5yYWRpdXMgPCAwLjEpIHtcclxuICAgICAgdGhpcy5yYWRpdXMgPSAwLjE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5saWZlU3Bhbi0tIDwgMCkge1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IHN0YXRlO1xyXG4gICAgY29udGV4dC5zYXZlKCk7XHJcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcclxuICAgIGNvbnRleHQubGluZVdpZHRoID0gMjtcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0Lm1vdmVUbygwLCAtdGhpcy5yYWRpdXMpO1xyXG4gICAgY29udGV4dC5hcmMoMCwgMCwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyByYW5kb21OdW1CZXR3ZWVuLCByb3RhdGVQb2ludCB9IGZyb20gJ0BoZWxwZXJzL0dhbWVIZWxwZXInO1xyXG5pbXBvcnQge1xyXG4gIENvb3JkLCBWZWN0b3IsIHJlbmRlclN0YXRlLCBJU2hpcFByb3BzLCBvYmplY3RHcm91cHMsXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMvZ2FtZSc7XHJcbmltcG9ydCBQYXJ0aWNsZSBmcm9tICcuLi9QYXJ0aWNsZS9QYXJ0aWNsZSc7XHJcbmltcG9ydCBCdWxsZXQgZnJvbSAnLi4vQnVsbGV0L0J1bGxldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcclxuICBwdWJsaWMgcG9zaXRpb246IENvb3JkO1xyXG5cclxuICBwcml2YXRlIHZlbG9jaXR5OiBWZWN0b3I7XHJcblxyXG4gIHByaXZhdGUgYXJncz86IElTaGlwUHJvcHM7XHJcblxyXG4gIHByaXZhdGUgcm90YXRpb246IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSByb3RhdGlvblNwZWVkOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3BlZWQ6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbmVydGlhOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBsYXN0U2hvdDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZTogKGl0ZW06IGFueSwgZ3JvdXA6IG9iamVjdEdyb3VwcykgPT4gdm9pZDtcclxuXHJcbiAgcHJpdmF0ZSBvbkRpZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgcHJpdmF0ZSBkZWxldGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IElTaGlwUHJvcHMpIHtcclxuICAgIHRoaXMuYXJncyA9IGFyZ3M7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gYXJncy5wb3NpdGlvbjtcclxuICAgIHRoaXMudmVsb2NpdHkgPSB7XHJcbiAgICAgIHg6IDAsXHJcbiAgICAgIHk6IDAsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSA2O1xyXG4gICAgdGhpcy5zcGVlZCA9IDAuMTU7XHJcbiAgICB0aGlzLmluZXJ0aWEgPSAwLjk5O1xyXG4gICAgdGhpcy5yYWRpdXMgPSAyMDtcclxuICAgIHRoaXMubGFzdFNob3QgPSAwO1xyXG4gICAgdGhpcy5jcmVhdGUgPSBhcmdzLmNyZWF0ZTtcclxuICAgIHRoaXMub25EaWUgPSBhcmdzLm9uRGllO1xyXG4gICAgdGhpcy5kZWxldGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJvdGF0ZShkaXI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGRpciA9PT0gJ0xFRlQnKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gLT0gdGhpcy5yb3RhdGlvblNwZWVkO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpciA9PT0gJ1JJR0hUJykge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVsZXRlID0gdHJ1ZTtcclxuICAgIHRoaXMub25EaWUoKTtcclxuICB9XHJcblxyXG4gIGFjY2VsZXJhdGUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnggLT0gTWF0aC5zaW4oLXRoaXMucm90YXRpb24gKiAoTWF0aC5QSSAvIDE4MCkpICogdGhpcy5zcGVlZDtcclxuICAgIHRoaXMudmVsb2NpdHkueSAtPSBNYXRoLmNvcygtdGhpcy5yb3RhdGlvbiAqIChNYXRoLlBJIC8gMTgwKSkgKiB0aGlzLnNwZWVkO1xyXG5cclxuICAgIGNvbnN0IHBvc0RlbHRhID0gcm90YXRlUG9pbnQoXHJcbiAgICAgIHsgeDogMCwgeTogLTEwIH0sXHJcbiAgICAgIHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAodGhpcy5yb3RhdGlvbiAtIDE4MCkgKiAoTWF0aC5QSSAvIDE4MCksXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGFydGljbGUgPSBuZXcgUGFydGljbGUoe1xyXG4gICAgICBsaWZlU3BhbjogcmFuZG9tTnVtQmV0d2VlbigyMCwgNDApLFxyXG4gICAgICBzaXplOiByYW5kb21OdW1CZXR3ZWVuKDEsIDMpLFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHBvc0RlbHRhLnggKyByYW5kb21OdW1CZXR3ZWVuKC0yLCAyKSxcclxuICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyBwb3NEZWx0YS55ICsgcmFuZG9tTnVtQmV0d2VlbigtMiwgMiksXHJcbiAgICAgIH0sXHJcbiAgICAgIHZlbG9jaXR5OiB7XHJcbiAgICAgICAgeDogcG9zRGVsdGEueCAvIHJhbmRvbU51bUJldHdlZW4oMywgNSksXHJcbiAgICAgICAgeTogcG9zRGVsdGEueSAvIHJhbmRvbU51bUJldHdlZW4oMywgNSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY3JlYXRlKHBhcnRpY2xlLCAncGFydGljbGVzJyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoc3RhdGU6IHJlbmRlclN0YXRlKTogdm9pZCB7XHJcbiAgICBpZiAoc3RhdGUua2V5cy51cCkge1xyXG4gICAgICB0aGlzLmFjY2VsZXJhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdGUua2V5cy5sZWZ0KSB7XHJcbiAgICAgIHRoaXMucm90YXRlKCdMRUZUJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdGUua2V5cy5yaWdodCkge1xyXG4gICAgICB0aGlzLnJvdGF0ZSgnUklHSFQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdGUua2V5cy5zcGFjZSkge1xyXG4gICAgICBpZiAodGhpcy5sYXN0U2hvdCA9PT0gMCB8fCBEYXRlLm5vdygpIC0gdGhpcy5sYXN0U2hvdCA+IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGJ1bGxldCA9IG5ldyBCdWxsZXQoeyBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiwgcm90YXRpb246IHRoaXMucm90YXRpb24gfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCArPSBNYXRoLnNpbigtdGhpcy5yb3RhdGlvbiAqIChNYXRoLlBJIC8gMTgwKSkgKiAwLjE7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IE1hdGguY29zKC10aGlzLnJvdGF0aW9uICogKE1hdGguUEkgLyAxODApKSAqIDAuMTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGUoYnVsbGV0LCAnYnVsbGV0cycpO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3RTaG90ID0gRGF0ZS5ub3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuaW5lcnRpYTtcclxuICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmluZXJ0aWE7XHJcblxyXG4gICAgaWYgKHRoaXMucm90YXRpb24gPj0gMzYwKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gLT0gMzYwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucm90YXRpb24gPCAwKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gKz0gMzYwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiBzdGF0ZS5zY3JlZW4ud2lkdGgpIHRoaXMucG9zaXRpb24ueCA9IDA7XHJcbiAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB0aGlzLnBvc2l0aW9uLnggPSBzdGF0ZS5zY3JlZW4ud2lkdGg7XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ID4gc3RhdGUuc2NyZWVuLmhlaWdodCkgdGhpcy5wb3NpdGlvbi55ID0gMDtcclxuICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA8IDApIHRoaXMucG9zaXRpb24ueSA9IHN0YXRlLnNjcmVlbi5oZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSBzdGF0ZTtcclxuICAgIGNvbnRleHQuc2F2ZSgpO1xyXG4gICAgY29udGV4dC50cmFuc2xhdGUodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xyXG4gICAgY29udGV4dC5yb3RhdGUodGhpcy5yb3RhdGlvbiAqIChNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyNmZmZmZmYnO1xyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDI7XHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5tb3ZlVG8oMCwgLTE1KTtcclxuICAgIGNvbnRleHQubGluZVRvKDEwLCAxMCk7XHJcbiAgICBjb250ZXh0LmxpbmVUbyg1LCA3KTtcclxuICAgIGNvbnRleHQubGluZVRvKC01LCA3KTtcclxuICAgIGNvbnRleHQubGluZVRvKC0xMCwgMTApO1xyXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQXN0ZXJvaWQgZnJvbSAnLi9Bc3Rlcm9pZC9Bc3Rlcm9pZCc7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcC9TaGlwJztcclxuaW1wb3J0IEJ1bGxldCBmcm9tICcuL0J1bGxldC9CdWxsZXQnO1xyXG5pbXBvcnQgUGFydGljbGUgZnJvbSAnLi9QYXJ0aWNsZS9QYXJ0aWNsZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIEFzdGVyb2lkLCBTaGlwLCBCdWxsZXQsIFBhcnRpY2xlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0ICcuL2dhbWUubGVzcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFzdGVyb2lkLCBTaGlwLFxyXG59IGZyb20gJ0BjbGFzc2VzJztcclxuXHJcbmltcG9ydCB7IHJhbmRvbU51bUJldHdlZW4sIHRocm90dGxlLCBtYXhHYW1lSGVpZ2h0IH0gZnJvbSAnQGhlbHBlcnMvR2FtZUhlbHBlcic7XHJcbmltcG9ydCB1c2VUaW1lciBmcm9tICdAaGVscGVycy9UaW1lcic7XHJcbmltcG9ydCBHYW1lVG90YWwgZnJvbSAnLi9HYW1lVG90YWwnO1xyXG5pbXBvcnQgR2FtZU92ZXIgZnJvbSAnLi9HYW1lT3Zlcic7XHJcbmltcG9ydCBHYW1lUGF1c2UgZnJvbSAnLi9HYW1lUGF1c2UnO1xyXG5cclxuaW1wb3J0IHtcclxuICBvYmplY3RzTWFwLCBnYW1lT2JqZWN0cywgb2JqZWN0R3JvdXBzLCBzY3JlZW5UeXBlLFxyXG59IGZyb20gJy4uLy4uL3R5cGVzL2dhbWUnO1xyXG5cclxuY29uc3QgS0VZID0ge1xyXG4gIExFRlQ6ICdBcnJvd0xlZnQnLFxyXG4gIFJJR0hUOiAnQXJyb3dSaWdodCcsXHJcbiAgVVA6ICdBcnJvd1VwJyxcclxuICBBOiAnS2V5QScsXHJcbiAgRDogJ0tleUQnLFxyXG4gIFc6ICdLZXlXJyxcclxuICBTUEFDRTogJyAnLFxyXG4gIEVTQ0FQRTogJ0VzY2FwZScsXHJcbiAgRU5URVI6ICdFbnRlcicsXHJcbiAgRjogWydmJywgJ9CwJ10sXHJcbn07XHJcblxyXG5jb25zdCBHYW1lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc0dhbWVPdmVyLCBzZXRJc0dhbWVPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lzUGF1c2UsIHNldElzUGF1c2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyDQv9C+0YXQvtC20LUg0YDQtdGE0L7QsiDQvNC90L7Qs9C+LCDQutCw0Log0L/QviDQtNGA0YPQs9C+0LzRgyDQt9Cw0L/QvtC80L3QuNGC0Ywg0YHQvtGB0YLQvtGP0L3QuNC1INC90LUg0YDQsNC30L7QsdGA0LDQu9GB0Y9cclxuICBjb25zdCBzdG9wR2FtZSA9IHVzZVJlZihmYWxzZSk7XHJcbiAgY29uc3QgZW5kR2FtZSA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNjb3JlUmVmID0gdXNlUmVmKDApO1xyXG4gIGNvbnN0IGFuaW1hdGlvbklkID0gdXNlUmVmKDApO1xyXG5cclxuICBjb25zdCBzY3JlZW4gPSB1c2VSZWY8c2NyZWVuVHlwZT4oe1xyXG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgaGVpZ2h0OiBtYXhHYW1lSGVpZ2h0KCksXHJcbiAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBba2V5cywgc2V0S2V5c10gPSB1c2VTdGF0ZSh7XHJcbiAgICBsZWZ0OiBmYWxzZSxcclxuICAgIHJpZ2h0OiBmYWxzZSxcclxuICAgIHVwOiBmYWxzZSxcclxuICAgIGRvd246IGZhbHNlLFxyXG4gICAgc3BhY2U6IGZhbHNlLFxyXG4gICAgZjogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRpbWVyID0gdXNlVGltZXIoKTtcclxuXHJcbiAgbGV0IGFzdGVyb2lkc0NvdW50ID0gMjtcclxuXHJcbiAgY29uc3Qgb2JqZWN0czogb2JqZWN0c01hcCA9IHtcclxuICAgIHNoaXBzOiBbXSxcclxuICAgIGJ1bGxldHM6IFtdLFxyXG4gICAgYXN0ZXJvaWRzOiBbXSxcclxuICAgIHBhcnRpY2xlczogW10sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5cyA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgdmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIGNvbnN0IGtleXNWYWwgPSBrZXlzO1xyXG5cclxuICAgIGlmIChldmVudC5rZXkgPT09IEtFWS5MRUZUIHx8IGV2ZW50LmtleSA9PT0gS0VZLkEpIGtleXNWYWwubGVmdCA9IHZhbHVlO1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gS0VZLlJJR0hUIHx8IGV2ZW50LmtleSA9PT0gS0VZLkQpIGtleXNWYWwucmlnaHQgPSB2YWx1ZTtcclxuICAgIGlmIChldmVudC5rZXkgPT09IEtFWS5VUCB8fCBldmVudC5rZXkgPT09IEtFWS5XKSBrZXlzVmFsLnVwID0gdmFsdWU7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBLRVkuU1BBQ0UpIGtleXNWYWwuc3BhY2UgPSB2YWx1ZTtcclxuICAgIHNldEtleXMoa2V5c1ZhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgaGFuZGxlS2V5cyhldmVudCwgdHJ1ZSk7XHJcblxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gS0VZLkVTQ0FQRSB8fCBldmVudC5rZXkgPT09IEtFWS5FTlRFUikge1xyXG4gICAgICBwYXVzZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKEtFWS5GLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcclxuICAgICAgdG9nZ2xlRnVsbFNjcmVlbigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleVVwID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBoYW5kbGVLZXlzKGV2ZW50LCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkU2NvcmUgPSAoczogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAvLyDQvdC1INC90LDRiNC10Lsg0L/RgNC+0YHRgtC+0LPQviDRgdC/0L7RgdC+0LHQsCDQt9Cw0L/QvtC80L3QuNGC0Ywg0YHRh9C10YJcclxuICAgIHNjb3JlUmVmLmN1cnJlbnQgKz0gcztcclxuICAgIHNldFNjb3JlKHNjb3JlUmVmLmN1cnJlbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlQXN0ZXJvaWRzID0gKGNvdW50OiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBhc3Rlcm9pZCA9IG5ldyBBc3Rlcm9pZCh7XHJcbiAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgIHg6IHJhbmRvbU51bUJldHdlZW4oMCwgc2NyZWVuLmN1cnJlbnQud2lkdGgpLFxyXG4gICAgICAgICAgeTogcmFuZG9tTnVtQmV0d2VlbigwLCBzY3JlZW4uY3VycmVudC5oZWlnaHQpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlOiBjcmVhdGVPYmplY3QsXHJcbiAgICAgICAgYWRkU2NvcmUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjcmVhdGVPYmplY3QoYXN0ZXJvaWQsICdhc3Rlcm9pZHMnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZXN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQuY3VycmVudCk7XHJcbiAgICBzdGFydCgpO1xyXG5cclxuICAgIGFuaW1hdGlvbklkLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICB1cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNQYXVzZShmYWxzZSk7XHJcbiAgICBzZXRJc0dhbWVPdmVyKGZhbHNlKTtcclxuICAgIHN0b3BHYW1lLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIGVuZEdhbWUuY3VycmVudCA9IGZhbHNlO1xyXG5cclxuICAgIHNjb3JlUmVmLmN1cnJlbnQgPSAwO1xyXG4gICAgc2V0U2NvcmUoc2NvcmVSZWYuY3VycmVudCk7XHJcblxyXG4gICAgdGltZXIucmVzZXQoKTtcclxuICAgIHRpbWVyLnN0YXJ0KCk7XHJcblxyXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiBzY3JlZW4uY3VycmVudC53aWR0aCAvIDIsXHJcbiAgICAgICAgeTogc2NyZWVuLmN1cnJlbnQuaGVpZ2h0IC8gMixcclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlOiBjcmVhdGVPYmplY3QsXHJcbiAgICAgIG9uRGllOiBnYW1lT3ZlcixcclxuICAgIH0pO1xyXG4gICAgY3JlYXRlT2JqZWN0KHNoaXAsICdzaGlwcycpO1xyXG4gICAgZ2VuZXJhdGVBc3Rlcm9pZHMoYXN0ZXJvaWRzQ291bnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhdXNlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKCFlbmRHYW1lLmN1cnJlbnQpIHtcclxuICAgICAgc3RvcEdhbWUuY3VycmVudCA9ICFzdG9wR2FtZS5jdXJyZW50O1xyXG4gICAgICBzZXRJc1BhdXNlKHN0b3BHYW1lLmN1cnJlbnQpO1xyXG5cclxuICAgICAgaWYgKHN0b3BHYW1lLmN1cnJlbnQpIHtcclxuICAgICAgICB0aW1lci5wYXVzZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcclxuICAgIHNldElzR2FtZU92ZXIodHJ1ZSk7XHJcbiAgICBzZXRJc1BhdXNlKGZhbHNlKTtcclxuICAgIGVuZEdhbWUuY3VycmVudCA9IHRydWU7XHJcbiAgICBzdG9wR2FtZS5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB0aW1lci5wYXVzZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXNSZWYuY3VycmVudD8uZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBpZiAoIXN0b3BHYW1lLmN1cnJlbnQgJiYgY29udGV4dCAhPT0gdW5kZWZpbmVkICYmIGNvbnRleHQgIT09IG51bGwpIHtcclxuICAgICAgY29udGV4dC5zYXZlKCk7XHJcbiAgICAgIGNvbnRleHQuc2NhbGUoc2NyZWVuLmN1cnJlbnQucmF0aW8sIHNjcmVlbi5jdXJyZW50LnJhdGlvKTtcclxuXHJcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMwMDAnO1xyXG4gICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gMC40O1xyXG4gICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHNjcmVlbi5jdXJyZW50LndpZHRoLCBzY3JlZW4uY3VycmVudC5oZWlnaHQpO1xyXG4gICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcclxuXHJcbiAgICAgIGlmIChvYmplY3RzLmFzdGVyb2lkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBhc3Rlcm9pZHNDb3VudCsrO1xyXG5cclxuICAgICAgICBnZW5lcmF0ZUFzdGVyb2lkcyhhc3Rlcm9pZHNDb3VudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVwZGF0ZU9iamVjdHMob2JqZWN0cy5zaGlwcywgJ3NoaXBzJyk7XHJcbiAgICAgIHVwZGF0ZU9iamVjdHMob2JqZWN0cy5hc3Rlcm9pZHMsICdhc3Rlcm9pZHMnKTtcclxuICAgICAgdXBkYXRlT2JqZWN0cyhvYmplY3RzLmJ1bGxldHMsICdidWxsZXRzJyk7XHJcbiAgICAgIHVwZGF0ZU9iamVjdHMob2JqZWN0cy5wYXJ0aWNsZXMsICdwYXJ0aWNsZXMnKTtcclxuXHJcbiAgICAgIGNoZWNrQ29sbGlzaW9uc1dpdGgob2JqZWN0cy5idWxsZXRzLCBvYmplY3RzLmFzdGVyb2lkcyk7XHJcbiAgICAgIGNoZWNrQ29sbGlzaW9uc1dpdGgob2JqZWN0cy5zaGlwcywgb2JqZWN0cy5hc3Rlcm9pZHMpO1xyXG5cclxuICAgICAgY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uSWQuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgIHVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlT2JqZWN0cyA9IChpdGVtczogZ2FtZU9iamVjdHNbXSwgZ3JvdXA6IG9iamVjdEdyb3VwcykgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXNSZWYuY3VycmVudD8uZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgaWYgKGl0ZW0uaXNEZWxldGUoKSkge1xyXG4gICAgICAgIG9iamVjdHNbZ3JvdXBdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHRtcCA9IHNjcmVlbi5jdXJyZW50O1xyXG4gICAgICAgIGl0ZW1zW2luZGV4XS5yZW5kZXIoeyBzY3JlZW46IHRtcCwgY29udGV4dCwga2V5cyB9KTtcclxuICAgICAgfVxyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vINGC0YPRgiDQvdC1INGB0LzQvtCzINGD0LrQsNC30LDRgtGMIGdhbWVPYmplY3RzIHR5cGVzY3JpcHQg0LPQvtCy0L7RgNC40YIg0YfRgtC+INGC0LjQvyBuZXZlclxyXG4gIGNvbnN0IGNyZWF0ZU9iamVjdCA9IChpdGVtOiBhbnksIGdyb3VwOiBvYmplY3RHcm91cHMpOiB2b2lkID0+IHtcclxuICAgIG9iamVjdHNbZ3JvdXBdLnB1c2goaXRlbSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tDb2xsaXNpb25zV2l0aCA9IChpdGVtczE6IGdhbWVPYmplY3RzW10sIGl0ZW1zMjogZ2FtZU9iamVjdHNbXSkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtczEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtczIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBjb25zdCBpdGVtMSA9IGl0ZW1zMVtpXTtcclxuICAgICAgICBjb25zdCBpdGVtMiA9IGl0ZW1zMltqXTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrQ29sbGlzaW9uKGl0ZW0xLCBpdGVtMikpIHtcclxuICAgICAgICAgIGl0ZW0xLmRlc3Ryb3koKTtcclxuICAgICAgICAgIGl0ZW0yLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja0NvbGxpc2lvbiA9IChvYmoxOiBnYW1lT2JqZWN0cywgb2JqMjogZ2FtZU9iamVjdHMpID0+IHtcclxuICAgIGNvbnN0IHZ4ID0gb2JqMS5wb3NpdGlvbi54IC0gb2JqMi5wb3NpdGlvbi54O1xyXG4gICAgY29uc3QgdnkgPSBvYmoxLnBvc2l0aW9uLnkgLSBvYmoyLnBvc2l0aW9uLnk7XHJcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQodnggKiB2eCArIHZ5ICogdnkpO1xyXG4gICAgaWYgKGxlbmd0aCA8IG9iajEucmFkaXVzICsgb2JqMi5yYWRpdXMpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xyXG4gICAgc2NyZWVuLmN1cnJlbnQgPSB7XHJcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgaGVpZ2h0OiBtYXhHYW1lSGVpZ2h0KCksXHJcbiAgICAgIHJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVGdWxsU2NyZWVuID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgZ2FtZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcclxuICAgIGlmICghZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgaWYgKGdhbWVCbG9jaykge1xyXG4gICAgICAgIGdhbWVCbG9jay5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2l6ZVRocm90dGxlID0gdGhyb3R0bGUocmVzaXplLCAxMDAwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVUaHJvdHRsZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVUaHJvdHRsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdGFydCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVLZXlVcCk7XHJcblxyXG4gICAgYW5pbWF0aW9uSWQuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgIHVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5VXApO1xyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQuY3VycmVudCk7XHJcbiAgICAgIGFuaW1hdGlvbklkLmN1cnJlbnQgPSAwO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cclxuICAgICAge2lzUGF1c2UgJiYgIWlzR2FtZU92ZXIgPyA8R2FtZVBhdXNlIC8+IDogJycgfVxyXG4gICAgICB7aXNHYW1lT3ZlciA/IDxHYW1lT3ZlciBzY29yZT17c2NvcmV9IGhhbmRsZXJTdGFydD17cmVzdGFydH0gLz4gOiAnJ31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1yaWdodFwiPlxyXG4gICAgICAgIDxHYW1lVG90YWwgc2NvcmU9e3Njb3JlfSBzZWNvbmRzPXt0aW1lci5zZWNvbmRzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxjYW52YXNcclxuICAgICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgICB0YWJJbmRleD17MH1cclxuICAgICAgICB3aWR0aD17c2NyZWVuLmN1cnJlbnQud2lkdGggKiBzY3JlZW4uY3VycmVudC5yYXRpb31cclxuICAgICAgICBoZWlnaHQ9e3NjcmVlbi5jdXJyZW50LmhlaWdodCAqIHNjcmVlbi5jdXJyZW50LnJhdGlvfVxyXG4gICAgICAvPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIEdhbWVPdmVyUHJvcHMgPSB7XHJcbiAgc2NvcmU6IG51bWJlcjtcclxuICBoYW5kbGVyU3RhcnQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEdhbWVPdmVyOiBSZWFjdC5GQzxHYW1lT3ZlclByb3BzPiA9IChwcm9wczogR2FtZU92ZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc2NvcmUsIGhhbmRsZXJTdGFydCB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVfX21lc3NhZ2VcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZ2FtZV9fbWVzc2FnZS0tdGl0bGVcIj5HQU1FIE9WRVI8L2gxPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJnYW1lX19tZXNzYWdlLS10ZXh0XCI+0J/QvtC30LTRgNCw0LLQu9GP0LXQvCEg0JLQsNGIINGB0YfQtdGCPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVfX21lc3NhZ2UtLXNjb3JlXCI+e3Njb3JlfTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2FtZV9fbWVzc2FnZS0tc3RhcnRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlclN0YXJ0fT7QndCw0YfQsNGC0Ywg0LLRgdC1INGBINC90LDRh9Cw0LvQsDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lT3ZlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEdhbWVQYXVzZSA9ICgpOiBKU1guRWxlbWVudCA9PiAoXHJcbiAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZV9fbWVzc2FnZVwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZ2FtZV9fbWVzc2FnZS0tdGl0bGVcIj7Qn9Cw0YPQt9CwPC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImdhbWVfX21lc3NhZ2UtLXRleHRcIj7QlNC70Y8g0L/RgNC+0LTQvtC70LbQtdC90LjRjyDQvdCw0LbQvNC40YLQtSBFTlRFUjwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVQYXVzZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHRpbWVGb3JtYXQgfSBmcm9tICdAaGVscGVycy9UaW1lSGVscGVyJztcclxuXHJcbnR5cGUgR2FtZVRvdGFsUHJvcHMgPSB7XHJcbiAgc2Vjb25kczogbnVtYmVyO1xyXG4gIHNjb3JlOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEdhbWVUb3RhbCA6IFJlYWN0LkZDPEdhbWVUb3RhbFByb3BzPiA9IChwcm9wczpHYW1lVG90YWxQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc2NvcmUsIHNlY29uZHMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLXJpZ2h0X190aW1lclwiPnt0aW1lRm9ybWF0KHNlY29uZHMpfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLXJpZ2h0X19zY29yZVwiPntzY29yZS50b1N0cmluZygpLnBhZFN0YXJ0KDgsICcwJyl9PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVRvdGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb2wsIExheW91dCwgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDb250ZW50LCBGb290ZXIsIEhlYWRlciB9IGZyb20gJ2FudGQvZXMvbGF5b3V0L2xheW91dCc7XHJcbmltcG9ydCBJc0F1dGggZnJvbSAnQGhlbHBlcnMvSXNBdXRoJztcclxuXHJcbmNvbnN0IFBhZ2VMYXlvdXQ6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8Q29sIHNwYW49ezEyfSBvZmZzZXQ9ezZ9PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgPE1lbnUgdGhlbWU9XCJkYXJrXCIgbW9kZT1cImhvcml6b250YWxcIiBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzEnXX0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cclxuICAgICAgICAgICAg0JjQs9GA0LDRgtGMXHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIC8+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIHshSXNBdXRoKClcclxuICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAg0JLRhdC+0LRcclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIC8+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHshSXNBdXRoKClcclxuICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+XHJcbiAgICAgICAgICAgICAg0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1xyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgLz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAge0lzQXV0aCgpXHJcbiAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPlxyXG4gICAgICAgICAgICAgINCf0YDQvtGE0LjQu9GMXHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZmlsZVwiIC8+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHtJc0F1dGgoKVxyXG4gICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjVcIj5cclxuICAgICAgICAgICAgICDQlNC+0YHQutCwINC/0L7Rh9C10YLQsFxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Rhc2hib2FyZFwiIC8+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHtJc0F1dGgoKVxyXG4gICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjZcIj5cclxuICAgICAgICAgICAgICDQpNC+0YDRg9C8XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiAvPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgIDwvQ29sPlxyXG4gICAgPENvbnRlbnQ+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICA8L0NvbnRlbnQ+XHJcbiAgICA8Rm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+R2FtZSAmY29weTsgMjAyMCBDcmVhdGVkIGJ5IEhlbHNpbmtpPC9Gb290ZXI+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG4vLyBFeHBvcnRzXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VMYXlvdXQ7XHJcbiIsIi8vIENvcmVcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCBQaG9uZVByZWZpeFNlbGVjdG9yOiBSZWFjdC5GQyA9ICgpID0+IChcclxuICA8U2VsZWN0IHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0+XHJcbiAgICA8T3B0aW9uIHZhbHVlPVwiMzc1XCI+KzM3NTwvT3B0aW9uPlxyXG4gICAgPE9wdGlvbiB2YWx1ZT1cIjdcIj4rNzwvT3B0aW9uPlxyXG4gIDwvU2VsZWN0PlxyXG4pO1xyXG5cclxuLy8gRXhwb3J0c1xyXG5leHBvcnQgZGVmYXVsdCBQaG9uZVByZWZpeFNlbGVjdG9yO1xyXG4iLCJjb25zdCBiYXNlUGF0aCA9ICdodHRwczovL3lhLXByYWt0aWt1bS50ZWNoL2FwaS92Mi8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkVXJsID0gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiBiYXNlUGF0aCArIHBhdGg7XHJcbiIsImltcG9ydCB7IENvb3JkIH0gZnJvbSAnLi4vdHlwZXMvZ2FtZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlUG9pbnQocDogQ29vcmQsIGNlbnRlcjogQ29vcmQsIGFuZ2xlOiBudW1iZXIpOiBDb29yZCB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6ICgocC54IC0gY2VudGVyLngpICogTWF0aC5jb3MoYW5nbGUpIC0gKHAueSAtIGNlbnRlci55KSAqIE1hdGguc2luKGFuZ2xlKSkgKyBjZW50ZXIueCxcclxuICAgIHk6ICgocC54IC0gY2VudGVyLngpICogTWF0aC5zaW4oYW5nbGUpICsgKHAueSAtIGNlbnRlci55KSAqIE1hdGguY29zKGFuZ2xlKSkgKyBjZW50ZXIueSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tTnVtQmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXN0ZXJvaWRWZXJ0aWNlcyhjb3VudDogbnVtYmVyLCByYWQ6IG51bWJlcik6IENvb3JkW10ge1xyXG4gIGNvbnN0IHA6IENvb3JkW10gPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICBwW2ldID0ge1xyXG4gICAgICB4OiAoXHJcbiAgICAgICAgLU1hdGguc2luKCgzNjAgLyBjb3VudCkgKiBpICogKE1hdGguUEkgLyAxODApKVxyXG4gICAgICAgICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMiAtIDEpICogKE1hdGgucmFuZG9tKCkgLyAzKVxyXG4gICAgICApICogcmFkLFxyXG4gICAgICB5OiAoXHJcbiAgICAgICAgLU1hdGguY29zKCgzNjAgLyBjb3VudCkgKiBpICogKE1hdGguUEkgLyAxODApKVxyXG4gICAgICAgICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMiAtIDEpICogKE1hdGgucmFuZG9tKCkgLyAzKVxyXG4gICAgICApICogcmFkLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jOiAoKSA9PiB2b2lkLCBtczogbnVtYmVyKTogKCkgPT4gdm9pZCB7XHJcbiAgbGV0IGlzVGhyb3R0bGVkID0gZmFsc2U7XHJcbiAgbGV0IHNhdmVkQXJnczogW10gfCBudWxsO1xyXG4gIGxldCBzYXZlZFRoaXM6IEZ1bmN0aW9uIHwgbnVsbDtcclxuXHJcbiAgZnVuY3Rpb24gd3JhcHBlcih0aGlzOiBGdW5jdGlvbiwgLi4uYXJnczogW10pOiB2b2lkIHtcclxuICAgIGlmIChpc1Rocm90dGxlZCkge1xyXG4gICAgICBzYXZlZEFyZ3MgPSBhcmdzO1xyXG4gICAgICBzYXZlZFRoaXMgPSB0aGlzO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHJcbiAgICBpc1Rocm90dGxlZCA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlzVGhyb3R0bGVkID0gZmFsc2U7XHJcbiAgICAgIGlmIChzYXZlZEFyZ3MgJiYgc2F2ZWRUaGlzKSB7XHJcbiAgICAgICAgd3JhcHBlci5hcHBseShzYXZlZFRoaXMsIHNhdmVkQXJncyk7XHJcbiAgICAgICAgc2F2ZWRBcmdzID0gbnVsbDtcclxuICAgICAgICBzYXZlZFRoaXMgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9LCBtcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1heEdhbWVIZWlnaHQoKTogbnVtYmVyIHtcclxuICByZXR1cm4gZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxNTA7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhdXRoU2VsZWN0b3IgZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2F1dGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXNBdXRoKCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHNlbGVjdG9yID0gdXNlU2VsZWN0b3IoYXV0aFNlbGVjdG9yKTtcclxuXHJcbiAgcmV0dXJuIHNlbGVjdG9yLmlzVXNlckluZm87XHJcbn1cclxuIiwiaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5leHBvcnQgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbldpdGhJY29uID0gKHR5cGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIG5vdGlmaWNhdGlvblt0eXBlXSh7XHJcbiAgICBtZXNzYWdlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB0aW1lRm9ybWF0KHM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG5cclxuICBjb25zdCBtID0gTWF0aC5mbG9vcihzIC8gNjApO1xyXG4gIGNvbnN0IHNlY29uZCA9IE1hdGguZmxvb3IocyAtIG0gKiA2MCk7XHJcblxyXG4gIHN0ciArPSBtIDwgMTAgPyBgMCR7bS50b1N0cmluZygpfWAgOiBtLnRvU3RyaW5nKCk7XHJcbiAgc3RyICs9ICc6JztcclxuICBzdHIgKz0gc2Vjb25kIDwgMTAgPyBgMCR7c2Vjb25kLnRvU3RyaW5nKCl9YCA6IHNlY29uZC50b1N0cmluZygpO1xyXG5cclxuICByZXR1cm4gc3RyO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRpbWVyKCkge1xyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaW50ZXJ2YWxSZWYgPSB1c2VSZWYoMCk7XHJcblxyXG4gIGNvbnN0IGNsZWFySW50ZXJ2YWxSZWYgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xyXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcclxuICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSAwO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGludGVydmFsUmVmLmN1cnJlbnQgPT09IDApIHtcclxuICAgICAgc2V0SXNSdW5uaW5nKHRydWUpO1xyXG4gICAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHNldFNlY29uZHMoKHMpID0+IChzICsgMSkpLCAxMDAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwYXVzZSA9ICgpID0+IHtcclxuICAgIHNldElzUnVubmluZyhmYWxzZSk7XHJcbiAgICBjbGVhckludGVydmFsUmVmKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBjbGVhckludGVydmFsUmVmKCk7XHJcbiAgICBzZXRTZWNvbmRzKDApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdGFydCgpO1xyXG4gICAgcmV0dXJuIGNsZWFySW50ZXJ2YWxSZWY7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2Vjb25kcywgc3RhcnQsIHBhdXNlLCByZXNldCwgaXNSdW5uaW5nLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBvcGVuTm90aWZpY2F0aW9uV2l0aEljb24gfSBmcm9tICdAaGVscGVycy9Ob3RpZmljYXRpb25IZWxwZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25DcmVhdG9ycy9hdXRoJztcclxuaW1wb3J0IGF1dGhTZWxlY3RvciBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvYXV0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBdXRoKCk6IFsoKSA9PiB2b2lkLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPnx1bmtub3duXSB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBzZWxlY3RvciA9IHVzZVNlbGVjdG9yKGF1dGhTZWxlY3Rvcik7XHJcbiAgY29uc3QgYXV0aFVzZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoIXNlbGVjdG9yLmlzVXNlckluZm8gJiYgIXNlbGVjdG9yLmVycm9yICYmICFzZWxlY3Rvci5sb2FkaW5nKSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldFVzZXIoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0b3IuaXNBdXRoICYmIHNlbGVjdG9yLmlzVXNlckluZm8pIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbldpdGhJY29uKCdzdWNjZXNzJywgJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQsNCy0YLQvtGA0LjQt9C+0LLQsNC9JywgJycpO1xyXG4gICAgICBoaXN0b3J5LnB1c2goJy8nKTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3Rvci5lcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihzZWxlY3Rvci5lcnJvckRhdGEucmVzcG9uc2U/LmRhdGEpO1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uV2l0aEljb24oJ2Vycm9yJywgJ9Ce0YjQuNCx0LrQsCcsIHNlbGVjdG9yLmVycm9yRGF0YS5yZXNwb25zZT8uZGF0YS5yZWFzb24pO1xyXG4gICAgICBoaXN0b3J5LnB1c2goJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIFthdXRoVXNlciwgZXJyb3JdO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpc3QsIENvbCwgUm93IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICdhbnRkL2xpYi9zdHlsZS90aGVtZXMvZGVmYXVsdC5sZXNzJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ9Ci0LXQvNCwINC30LDQs9C+0LvQvtCy0L7QuicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ9Ce0L/QuNGB0LDQvdC40LUg0L/QtdGA0LLQvtC5INGC0LXQvNGLJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICfQotC10LzQsCDQt9Cw0LPQvtC70L7QstC+0LonLFxyXG4gICAgZGVzY3JpcHRpb246ICfQntC/0LjRgdCw0L3QuNC1INCy0YLQvtGA0L7QuSDRgtC10LzRiycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAn0KLQtdC80LAg0LfQsNCz0L7Qu9C+0LLQvtC6JyxcclxuICAgIGRlc2NyaXB0aW9uOiAn0J7Qv9C40YHQsNC90LjQtSDRgtGA0LXRgtC10Lkg0YLQtdC80YsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ9Ci0LXQvNCwINC30LDQs9C+0LvQvtCy0L7QuicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ9Ce0L/QuNGB0LDQvdC40LUg0YfQtdGC0LLRkdGA0YLQvtC5INGC0LXQvNGLJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgRm9ydW1MaXN0OiBSZWFjdC5GQyA9ICgpID0+IChcclxuICA8Um93PlxyXG4gICAgPENvbCBzcGFuPXsxMn0gb2Zmc2V0PXs2fT5cclxuICAgICAgPExpc3RcclxuICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgdGl0bGU9ezxMaW5rIHRvPXtgL2ZvcnVtLXBhZ2UvJHtpdGVtLmlkfWB9PntpdGVtLnRpdGxlfTwvTGluaz59XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9Db2w+XHJcbiAgPC9Sb3c+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3J1bUxpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ29sLCBEaXZpZGVyLCBSb3csIElucHV0LCBGb3JtLCBCdXR0b24sXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdhbnRkL2VzL2Zvcm0vRm9ybSc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0ZXh0OiAn0KHQvtC+0LHRidC10L3QuNC1INC/0L7Qu9GM0LfQsNGC0LXQu9GPINGF0L7Qu9C40LLQsNGAINGF0L7Qu9C40LLQsNGAINGF0L7Qu9C40LLQsNGALicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRleHQ6ICfQodC+0L7QsdGJ0LXQvdC40LUg0L/QvtC70YzQt9Cw0YLQtdC70Y8g0YXQvtC70LjQstCw0YAg0YXQvtC70LjQstCw0YAg0YXQvtC70LjQstCw0YAuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGV4dDogJ9Ch0L7QvtCx0YnQtdC90LjQtSDQv9C+0LvRjNC30LDRgtC10LvRjyDRhdC+0LvQuNCy0LDRgCDRhdC+0LvQuNCy0LDRgCDRhdC+0LvQuNCy0LDRgC4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBGb3J1bVBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtXSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzOiBhbnkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGF0YSA9ICgpID0+IGRhdGEubWFwKChtZXNzYWdlKTogSlNYLkVsZW1lbnQgPT4gKFxyXG4gICAgPGRpdiBrZXk9e21lc3NhZ2UuaWR9PlxyXG4gICAgICA8cD5cclxuICAgICAgICB7bWVzc2FnZS50ZXh0fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3c+XHJcbiAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0+XHJcbiAgICAgICAge3JlbmRlckRhdGEoKX1cclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIGhpZGVSZXF1aXJlZE1hcmtcclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgINCe0YLQv9GA0LDQstC40YLRjFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcnVtUGFnZTtcclxuIiwiLy8gQ29yZVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBHYW1lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2FtZSc7XHJcblxyXG4vLyBIZWxwZXJzXHJcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uLy4uL2hvb2tzL3VzZUF1dGgnO1xyXG5pbXBvcnQgYXV0aFNlbGVjdG9yIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycy9hdXRoJztcclxuXHJcbmNvbnN0IEdhbWVQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbYXV0aFVzZXJdID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBzZWxlY3RvciA9IHVzZVNlbGVjdG9yKGF1dGhTZWxlY3Rvcik7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhdXRoVXNlcigpO1xyXG4gIH0sIFtzZWxlY3Rvcl0pO1xyXG5cclxuICByZXR1cm4gKDxHYW1lIC8+KTtcclxufTtcclxuXHJcbi8vIEV4cG9ydHNcclxuZXhwb3J0IGRlZmF1bHQgR2FtZVBhZ2U7XHJcbiIsIi8vIENvcmVcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBvcGVuTm90aWZpY2F0aW9uV2l0aEljb24gfSBmcm9tICdAaGVscGVycy9Ob3RpZmljYXRpb25IZWxwZXInO1xyXG5pbXBvcnQgeyBnb3RMZWFkZXJib2FyZCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbkNyZWF0b3JzL2xlYWRlcmJvYXJkJztcclxuaW1wb3J0IExlYWRlcmJvYXJkVGFibGUgZnJvbSAnLi9UYWJsZS9MZWFkZXJib2FyZFRhYmxlJztcclxuaW1wb3J0IGxlYWRlcmJvYXJkU2VsZWN0b3IgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzL2xlYWRlcmJvYXJkJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxlYWRCb2FyZFJlcXVlc3REYXRhIHtcclxuICByYXRpbmdGaWVsZE5hbWU6IHN0cmluZyxcclxuICBjdXJzb3I6IG51bWJlcixcclxuICBsaW1pdDogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGVhZGVyYm9hcmRSZXF1ZXN0RGF0YTogSUxlYWRCb2FyZFJlcXVlc3REYXRhID0ge1xyXG4gIHJhdGluZ0ZpZWxkTmFtZTogJ3BvaW50cycsXHJcbiAgY3Vyc29yOiAwLFxyXG4gIGxpbWl0OiAxMCxcclxufTtcclxuXHJcbmNvbnN0IExlYWRlcmJvYXJkUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0b3IgPSB1c2VTZWxlY3RvcihsZWFkZXJib2FyZFNlbGVjdG9yKTtcclxuXHJcbiAgaWYgKHNlbGVjdG9yLmVycm9yKSB7XHJcbiAgICBpZiAoc2VsZWN0b3IuZXJyb3JEYXRhLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICBoaXN0b3J5LnB1c2goJy9sb2dpbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbldpdGhJY29uKCdlcnJvcicsICfQntGI0LjQsdC60LAnLCAn0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ290TGVhZGVyYm9hcmQobGVhZGVyYm9hcmRSZXF1ZXN0RGF0YSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3c+XHJcbiAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0+XHJcbiAgICAgICAgPExlYWRlcmJvYXJkVGFibGUgZGF0YT17c2VsZWN0b3IuZGF0YX0gLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRXhwb3J0c1xyXG5leHBvcnQgZGVmYXVsdCBMZWFkZXJib2FyZFBhZ2U7XHJcbiIsIi8vIENvcmVcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdhbnRkJztcclxuXHJcbi8vIFR5cGVzXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlcXVlc3REYXRhIHtcclxuICByYXRpbmdGaWVsZE5hbWU6IHN0cmluZyxcclxuICBjdXJzb3I6IG51bWJlcixcclxuICBsaW1pdDogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbHVtblR5cGUge1xyXG4gIGtleT86IG51bWJlcixcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcG9pbnRzOiBudW1iZXIsXHJcbiAgZGF0ZTogc3RyaW5nLFxyXG4gIGNvdW50cnk6IHN0cmluZyxcclxufVxyXG5cclxuaW50ZXJmYWNlIExlYWRlcmJvYXJkVGFibGVQcm9wcyB7XHJcbiAgZGF0YTogQ29sdW1uVHlwZVtdO1xyXG59XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTmFtZScsXHJcbiAgICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUG9pbnRzJyxcclxuICAgIGRhdGFJbmRleDogJ3BvaW50cycsXHJcbiAgICBzb3J0ZXI6IHtcclxuICAgICAgY29tcGFyZTogKGE6IENvbHVtblR5cGUsIGI6IENvbHVtblR5cGUpID0+IGEucG9pbnRzIC0gYi5wb2ludHMsXHJcbiAgICAgIG11bHRpcGxlOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRGF0ZScsXHJcbiAgICBkYXRhSW5kZXg6ICdkYXRlJyxcclxuICAgIHNvcnRlcjoge1xyXG4gICAgICBjb21wYXJlOiAoYTogQ29sdW1uVHlwZSwgYjogQ29sdW1uVHlwZSkgPT4gbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKSxcclxuICAgICAgbXVsdGlwbGU6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDb3VudHJ5JyxcclxuICAgIGRhdGFJbmRleDogJ2NvdW50cnknLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBMZWFkZXJib2FyZFRhYmxlOiBSZWFjdC5GQzxMZWFkZXJib2FyZFRhYmxlUHJvcHM+ID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9IC8+XHJcbik7XHJcblxyXG4vLyBFeHBvcnRzXHJcbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkVGFibGU7XHJcbiIsIi8vIENvcmVcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpOiBKU1guRWxlbWVudCA9PiAoXHJcbiAgPD5cclxuICAgIDxGb3JtLkl0ZW1cclxuICAgICAgbGFiZWw9XCLQm9C+0LPQuNC9XCJcclxuICAgICAgbmFtZT1cImxvZ2luXCJcclxuICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1IScgfV19XHJcbiAgICA+XHJcbiAgICAgIDxJbnB1dCAvPlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgPEZvcm0uSXRlbVxyXG4gICAgICBsYWJlbD1cItCf0LDRgNC+0LvRjFwiXHJcbiAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSEnIH1dfVxyXG4gICAgPlxyXG4gICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuLy8gRXhwb3J0c1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiIsIi8vIENvcmVcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnYW50ZC9lcy9mb3JtL0Zvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbiwgQ2FyZCwgQ29sLCBGb3JtLCBSb3csIFNwYWNlLFxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9Mb2dpbkZvcm0vTG9naW5Gb3JtJztcclxuXHJcbi8vIFR5cGVzXHJcbmltcG9ydCB7IFNpZ25Vc2VyIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5cclxuLy8gSGVscGVyc1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tICcuLi8uLi9ob29rcy91c2VBdXRoJztcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25DcmVhdG9ycy9hdXRoJztcclxuaW1wb3J0IGF1dGhTZWxlY3RvciBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMvYXV0aCc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtXSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbYXV0aFVzZXJdID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBzZWxlY3RvciA9IHVzZVNlbGVjdG9yKGF1dGhTZWxlY3Rvcik7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlczogU2lnblVzZXIpID0+IHtcclxuICAgIGRpc3BhdGNoKGxvZ2luKHZhbHVlcykpO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhdXRoVXNlcigpO1xyXG4gIH0sIFtzZWxlY3Rvcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgIGhpZGVSZXF1aXJlZE1hcmtcclxuICAgICAgZm9ybT17Zm9ybX1cclxuICAgID5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHNwYW49ezEyfSBvZmZzZXQ9ezZ9PlxyXG4gICAgICAgICAgPENhcmQgdGl0bGU9XCLQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPXCI+XHJcbiAgICAgICAgICAgIDxMb2dpbkZvcm0gLz5cclxuICAgICAgICAgICAgPFNwYWNlPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgINCd0LXRgiDQsNC60LrQsNGD0L3RgtCwP1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAg0JLQvtC50YLQuFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRXhwb3J0c1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XHJcbiIsIi8vIENvcmVcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHsgQXZhdGFyLCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG4vLyBBcGlcclxuaW1wb3J0IFVzZXJBcGkgZnJvbSAnLi4vLi4vLi4vYXBpL1VzZXJBcGknO1xyXG5cclxuLy8gVHlwZXNcclxuZXhwb3J0IGludGVyZmFjZSBQcm9maWxlRm9ybVByb3BzIHtcclxuICBhdmF0YXI6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUHJvZmlsZUZvcm06IFJlYWN0LkZDPFByb2ZpbGVGb3JtUHJvcHM+ID0gKHtcclxuICBhdmF0YXIsXHJcbn0pID0+IHtcclxuICBjb25zdCBvbkF2YXRhclVwbG9hZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgOiB2b2lkID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcykge1xyXG4gICAgICBVc2VyQXBpLnVwbG9hZEF2YXRhcihlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHthdmF0YXIgPyA8QXZhdGFyIHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NjR9IHNyYz17YXZhdGFyfSAvPiA6IDxBdmF0YXIgc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs2NH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gLz59XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBsYWJlbD1cItCQ0LLQsNGC0LDRgFwiXHJcbiAgICAgICAgbmFtZT1cImF2YXRhclwiXHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25BdmF0YXJVcGxvYWR9IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCLQntGC0L7QsdGA0LDQttCw0LXQvNC+0LUg0LjQvNGPXCJcclxuICAgICAgICBuYW1lPVwiZGlzcGxheV9uYW1lXCJcclxuICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUhJyB9XX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwi0JjQvNGPXCJcclxuICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1IScgfV19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCLQpNCw0LzQuNC70LjRj1wiXHJcbiAgICAgICAgbmFtZT1cInNlY29uZF9uYW1lXCJcclxuICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUhJyB9XX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBsYWJlbD1cItCb0L7Qs9C40L1cIlxyXG4gICAgICAgIG5hbWU9XCJsb2dpblwiXHJcbiAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1IScgfV19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCLQn9C+0YfRgtCwXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ2VtYWlsJywgbWVzc2FnZTogJ9Cd0LXQstC10YDQvdGL0LkgZW1haWwnIH1dfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwi0KLQtdC70LXRhNC+0L1cIlxyXG4gICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1IScgfV19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXsxMn0gLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCLQodGC0LDRgNGL0Lkg0L/QsNGA0L7Qu9GMXCJcclxuICAgICAgICBuYW1lPVwib2xkUGFzc3dvcmRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwi0J3QvtCy0YvQuSDQv9Cw0YDQvtC70YxcIlxyXG4gICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07XHJcbiIsIi8vIENvcmVcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbiwgQ2FyZCwgQ29sLCBGb3JtLCBSb3csIFNwYWNlLFxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnYW50ZC9lcy9mb3JtL0Zvcm0nO1xyXG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSAnLi9Qcm9maWxlRm9ybS9Qcm9maWxlRm9ybSc7XHJcblxyXG4vLyBUeXBlc1xyXG5pbXBvcnQgeyBQYXNzd29yZFJlcXVlc3QsIFVzZXJSZXNwb25zZSB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcclxuXHJcbi8vIEFwaVxyXG5pbXBvcnQgQXV0aEFwaSBmcm9tICcuLi8uLi9hcGkvQXV0aEFwaSc7XHJcbmltcG9ydCBVc2VyQXBpIGZyb20gJy4uLy4uL2FwaS9Vc2VyQXBpJztcclxuXHJcbmNvbnN0IFByb2ZpbGVQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSB1c2VGb3JtKCk7XHJcbiAgY29uc3QgW2F2YXRhciwgc2V0QXZhdGFyXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEF1dGhBcGkuZ2V0VXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgc2V0QXZhdGFyKGBodHRwczovL3lhLXByYWt0aWt1bS50ZWNoJHt1c2VyLmF2YXRhcn1gKTtcclxuXHJcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICAgIGZpcnN0X25hbWU6IHVzZXIuZmlyc3RfbmFtZSxcclxuICAgICAgICBzZWNvbmRfbmFtZTogdXNlci5zZWNvbmRfbmFtZSxcclxuICAgICAgICBkaXNwbGF5X25hbWU6IHVzZXIuZGlzcGxheV9uYW1lLFxyXG4gICAgICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgICAgIHBob25lOiB1c2VyLnBob25lLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICB9KTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT2sgPSBSZWFjdC51c2VDYWxsYmFjaygodmFsdWVzOiBVc2VyUmVzcG9uc2UgJiBQYXNzd29yZFJlcXVlc3QpID0+IHtcclxuICAgIFVzZXJBcGkuZWRpdFByb2ZpbGUodmFsdWVzKTtcclxuXHJcbiAgICBpZiAodmFsdWVzLm9sZFBhc3N3b3JkICYmIHZhbHVlcy5uZXdQYXNzd29yZCkge1xyXG4gICAgICBVc2VyQXBpLmNoYW5nZVBhc3N3b3JkKHtcclxuICAgICAgICBvbGRQYXNzd29yZDogdmFsdWVzLm9sZFBhc3N3b3JkLFxyXG4gICAgICAgIG5ld1Bhc3N3b3JkOiB2YWx1ZXMubmV3UGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgIG9uRmluaXNoPXtoYW5kbGVPa31cclxuICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICBoaWRlUmVxdWlyZWRNYXJrXHJcbiAgICAgIGZvcm09e2Zvcm19XHJcbiAgICA+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBzcGFuPXsxMn0gb2Zmc2V0PXs2fT5cclxuICAgICAgICAgIDxDYXJkIHRpdGxlPVwi0J/RgNC+0YTQuNC70Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCI+XHJcbiAgICAgICAgICAgIDxQcm9maWxlRm9ybSBhdmF0YXI9e2F2YXRhcn0gLz5cclxuICAgICAgICAgICAgPFNwYWNlPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgINCd0LAg0LPQu9Cw0LLQvdGD0Y5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydHNcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XHJcbiIsIi8vIENvcmVcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFBob25lUHJlZml4U2VsZWN0b3IgZnJvbSAnQGNvbXBvbmVudHMvUGhvbmVQcmVmaXhTZWxlY3Rvcic7XHJcblxyXG5jb25zdCBQcmVmaXhTZWxlY3RvciA9IChcclxuICA8Rm9ybS5JdGVtIG5hbWU9XCJwcmVmaXhcIiBub1N0eWxlPlxyXG4gICAgPFBob25lUHJlZml4U2VsZWN0b3IgLz5cclxuICA8L0Zvcm0uSXRlbT5cclxuKTtcclxuXHJcbmNvbnN0IFJlZ2lzdHJhdGlvbkZvcm06IFJlYWN0LkZDID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8Rm9ybS5JdGVtXHJcbiAgICAgIGxhYmVsPVwi0JjQvNGPXCJcclxuICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxyXG4gICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUhJyB9XX1cclxuICAgID5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICA8Rm9ybS5JdGVtXHJcbiAgICAgIGxhYmVsPVwi0KTQsNC80LjQu9C40Y9cIlxyXG4gICAgICBuYW1lPVwic2Vjb25kX25hbWVcIlxyXG4gICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUhJyB9XX1cclxuICAgID5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICA8Rm9ybS5JdGVtXHJcbiAgICAgIGxhYmVsPVwi0JvQvtCz0LjQvVwiXHJcbiAgICAgIG5hbWU9XCJsb2dpblwiXHJcbiAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSEnIH1dfVxyXG4gICAgPlxyXG4gICAgICA8SW5wdXQgLz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgIDxGb3JtLkl0ZW1cclxuICAgICAgbGFiZWw9XCLQn9C+0YfRgtCwXCJcclxuICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnZW1haWwnLCBtZXNzYWdlOiAn0J3QtdCy0LXRgNC90YvQuSBlbWFpbCcgfV19XHJcbiAgICA+XHJcbiAgICAgIDxJbnB1dCAvPlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgPEZvcm0uSXRlbVxyXG4gICAgICBsYWJlbD1cItCi0LXQu9C10YTQvtC9XCJcclxuICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1IScgfV19XHJcbiAgICA+XHJcbiAgICAgIDxJbnB1dCBtYXhMZW5ndGg9ezl9IGFkZG9uQmVmb3JlPXtQcmVmaXhTZWxlY3Rvcn0gLz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgIDxGb3JtLkl0ZW1cclxuICAgICAgbGFiZWw9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwhJyB9XX1cclxuICAgID5cclxuICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICA8Lz5cclxuKTtcclxuXHJcbi8vIEV4cG9ydHNcclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uRm9ybTtcclxuIiwiLy8gQ29yZVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnYW50ZC9lcy9mb3JtL0Zvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbiwgQ2FyZCwgQ29sLCBGb3JtLCBSb3csIFNwYWNlLFxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBvcGVuTm90aWZpY2F0aW9uV2l0aEljb24gfSBmcm9tICdAaGVscGVycy9Ob3RpZmljYXRpb25IZWxwZXInO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uRm9ybSBmcm9tICcuL1JlZ2lzdHJhdGlvbkZvcm0vUmVnaXN0cmF0aW9uRm9ybSc7XHJcblxyXG4vLyBUeXBlc1xyXG5pbXBvcnQgeyBTaWduVXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5cclxuLy8gQXBpXHJcbmltcG9ydCBBdXRoQXBpIGZyb20gJy4uLy4uL2FwaS9BdXRoQXBpJztcclxuXHJcbi8vIEhlbHBlcnNcclxuXHJcbmNvbnN0IFJlZ2lzdHJhdGlvblBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtXSA9IHVzZUZvcm0oKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXM6IFNpZ25VcFJlcXVlc3QpID0+IHtcclxuICAgIEF1dGhBcGkuc2lnblVwKHZhbHVlcylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIG9wZW5Ob3RpZmljYXRpb25XaXRoSWNvbignc3VjY2VzcycsICfQo9GB0L/QtdGFJywgJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRg9GB0L/QtdGI0L3QviDRgdC+0LfQtNCw0L0hJyk7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgb3Blbk5vdGlmaWNhdGlvbldpdGhJY29uKCdlcnJvcicsICfQntGI0LjQsdC60LAnLCBlcnIucmVzcG9uc2UuZGF0YS5yZWFzb24pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgaGlkZVJlcXVpcmVkTWFya1xyXG4gICAgICBmb3JtPXtmb3JtfVxyXG4gICAgPlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0+XHJcbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cItCg0LXQs9C40YHRgtGA0LDRhtC40Y9cIj5cclxuICAgICAgICAgICAgPFJlZ2lzdHJhdGlvbkZvcm0gLz5cclxuICAgICAgICAgICAgPFNwYWNlPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAg0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiLi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICDQktC+0LnRgtC4XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRzXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvblBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QganN4ID0gKDxBcHAgLz4pO1xyXG4gICAgY29uc3QgcmVhY3RIdG1sID0gcmVuZGVyVG9TdHJpbmcoanN4KTtcclxuXHJcbiAgICByZXMuc2VuZChnZXRIdG1sKHJlYWN0SHRtbCkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0SHRtbChyZWFjdEh0bWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDwhRE9DVFlQRSBodG1sPlxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxyXG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9pbWFnZXMvZmF2aWNvbi5qcGdcIj5cclxuICAgICAgICA8dGl0bGU+U25lYWtlcnMgc2hvcDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cIi9tYWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj5cclxuICAgIDwvaGVhZD5cclxuICAgIDxib2R5PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJyb290XCI+JHtyZWFjdEh0bWx9PC9kaXY+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvbWFpbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICAgYDtcclxufVxyXG4iLCJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xyXG5pbXBvcnQgc2VydmVyUmVuZGVyTWlkZGxld2FyZSBmcm9tICcuL3NlcnZlci1yZW5kZXItbWlkZGxld2FyZSc7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG4vLyDQoNC10LrQvtC80LXQvdC00YPRjiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YLQvtC70YzQutC+INC00LvRjyDRgNCw0LfRgNCw0LHQvtGC0LrQuFxyXG4vLyDQkCDQsiBwcm9kdWN0aW9uINGA0LDQt9C00LDQstCw0YLRjCDRgdGC0LDRgtC40LrRgyDRh9C10YDQtdC3IE5naW54INC40LvQuCBDRE5cclxuYXBwXHJcbiAgLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vcHVibGljJykpKVxyXG4gIC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2J1aWxkJykpKTtcclxuXHJcbmFwcC5nZXQoJy8qJywgc2VydmVyUmVuZGVyTWlkZGxld2FyZSk7XHJcblxyXG5leHBvcnQgeyBhcHAgfTtcclxuIiwiaW1wb3J0IHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGF1dGhBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7XHJcbiAgSUF1dGhTdWNjZXNzLCBJRXJyb3JUeXBlLCBJTG9naW5SZXN1bHQsIElMb2dpblN1Y2Nlc3NUeXBlLCBTaWduVXNlcixcclxufSBmcm9tICcuLi8uLi90eXBlcy90eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdEF1dGggPSAoKTogeyB0eXBlOiBzdHJpbmcgfSA9PiAoeyB0eXBlOiBhdXRoQWN0aW9ucy5yZXF1ZXN0ZWQgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdEF1dGhTdWNjZXNzID0gKGlzQXV0aDogYm9vbGVhbik6IElMb2dpblN1Y2Nlc3NUeXBlID0+ICh7XHJcbiAgdHlwZTogYXV0aEFjdGlvbnMuc3VjY2VlZGVkLFxyXG4gIGlzQXV0aCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdEF1dGhFcnJvciA9IChlcnJvcjogQXhpb3NFcnJvcik6IElFcnJvclR5cGUgPT4gKFxyXG4gIHsgdHlwZTogYXV0aEFjdGlvbnMuZmFpbGVkLCBlcnJvciB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAodmFsdWVzOiBTaWduVXNlcik6IElMb2dpblJlc3VsdCA9PiAoe1xyXG4gIHR5cGU6IGF1dGhBY3Rpb25zLmxvZ2luLFxyXG4gIHZhbHVlcyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9ICgpOiB7IHR5cGU6IHN0cmluZyB9ID0+ICh7XHJcbiAgdHlwZTogYXV0aEFjdGlvbnMuZ2V0VXNlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclN1Y2Nlc3MgPSAoaXNBdXRoOiBib29sZWFuLCB1c2VyRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBJQXV0aFN1Y2Nlc3MgPT4gKHtcclxuICB0eXBlOiBhdXRoQWN0aW9ucy5nZXRVc2VyU3VjY2VlZGVkLFxyXG4gIGlzQXV0aCxcclxuICB1c2VyRGF0YSxcclxufSk7XHJcbiIsImltcG9ydCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IENvbHVtblR5cGUsIElSZXF1ZXN0RGF0YSB9IGZyb20gJy4uLy4uL3BhZ2VzL0xlYWRlcmJvYXJkUGFnZS9UYWJsZS9MZWFkZXJib2FyZFRhYmxlJztcclxuaW1wb3J0IGxlYWRlcmJvYXJkQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2xlYWRlcmJvYXJkJztcclxuaW1wb3J0IHsgSUVycm9yVHlwZSwgSUdvdExlYWRlcmJvYXJkLCBJU3VjY2Vzc0xlYWRlcmJvYXJkVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0TGVhZGVyYm9hcmQgPSAoKTogeyB0eXBlOiBzdHJpbmcgfSA9PiAoeyB0eXBlOiBsZWFkZXJib2FyZEFjdGlvbnMucmVxdWVzdGVkIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RMZWFkZXJib2FyZFN1Y2Nlc3MgPSAoZGF0YTogQ29sdW1uVHlwZSk6IElTdWNjZXNzTGVhZGVyYm9hcmRUeXBlID0+ICh7XHJcbiAgdHlwZTogbGVhZGVyYm9hcmRBY3Rpb25zLnN1Y2NlZWRlZCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0TGVhZGVyYm9hcmRFcnJvciA9IChlcnJvcjogQXhpb3NFcnJvcik6IElFcnJvclR5cGUgPT4gKFxyXG4gIHsgdHlwZTogbGVhZGVyYm9hcmRBY3Rpb25zLmZhaWxlZCwgZXJyb3IgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdvdExlYWRlcmJvYXJkID0gKGxlYWRlcmJvYXJkUmVxdWVzdERhdGE6IElSZXF1ZXN0RGF0YSk6IElHb3RMZWFkZXJib2FyZCA9PiAoe1xyXG4gIHR5cGU6IGxlYWRlcmJvYXJkQWN0aW9ucy5nb3RfbGVhZGVyYm9hcmQsXHJcbiAgbGVhZGVyYm9hcmRSZXF1ZXN0RGF0YSxcclxufSk7XHJcbiIsImVudW0gYXV0aEFjdGlvbnMge1xyXG4gIHJlcXVlc3RlZCA9ICdSRVFVRVNURURfQVVUSCcsXHJcbiAgc3VjY2VlZGVkID0gJ1JFUVVFU1RFRF9BVVRIX1NVQ0NFRURFRCcsXHJcbiAgZmFpbGVkID0gJ1JFUVVFU1RFRF9BVVRIX0ZBSUxFRCcsXHJcbiAgbG9naW4gPSAnTE9HSU4nLFxyXG4gIGdldFVzZXIgPSAnR0VUX1VTRVInLFxyXG4gIGdldFVzZXJTdWNjZWVkZWQgPSAnR0VUX1VTRVJfU1VDQ0VFREVEJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aEFjdGlvbnM7XHJcbiIsImVudW0gbGVhZGVyYm9hcmRBY3Rpb25zIHtcclxuICByZXF1ZXN0ZWQgPSAnUkVRVUVTVEVEX0xFQURFUkJPQVJEJyxcclxuICBzdWNjZWVkZWQgPSAnUkVRVUVTVEVEX0xFQURFUkJPQVJEX1NVQ0NFRURFRCcsXHJcbiAgZmFpbGVkID0gJ1JFUVVFU1RFRF9MRUFERVJCT0FSRF9GQUlMRUQnLFxyXG4gIGdvdF9sZWFkZXJib2FyZCA9ICdHT1RfTEVBREVSQk9BUkQnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxlYWRlcmJvYXJkQWN0aW9ucztcclxuIiwiaW1wb3J0IHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcclxuXHJcbmludGVyZmFjZSBSb290U3RhdGUge1xyXG4gIGF1dGg6IElBdXRoXHJcbn1cclxuXHJcbmludGVyZmFjZSBJQXV0aCB7XHJcbiAgaXNBdXRoOiBib29sZWFuLFxyXG4gIGVycm9yOiBib29sZWFuLFxyXG4gIGVycm9yRGF0YTogQXhpb3NFcnJvclxyXG4gIGxvYWRpbmc6IGJvb2xlYW4sXHJcbiAgdXNlckRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxyXG4gIGlzVXNlckluZm86IGJvb2xlYW4sXHJcbn1cclxuXHJcbmNvbnN0IGF1dGhTZWxlY3RvciA9IChzdGF0ZTogUm9vdFN0YXRlKTogSUF1dGggPT4gc3RhdGUuYXV0aDtcclxuZXhwb3J0IGRlZmF1bHQgYXV0aFNlbGVjdG9yO1xyXG4iLCJpbXBvcnQgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBDb2x1bW5UeXBlIH0gZnJvbSAnLi4vLi4vcGFnZXMvTGVhZGVyYm9hcmRQYWdlL1RhYmxlL0xlYWRlcmJvYXJkVGFibGUnO1xyXG5cclxuaW50ZXJmYWNlIFJvb3RTdGF0ZSB7XHJcbiAgbGVhZGVyYm9hcmQ6IElMZWFkZXJib2FyZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUxlYWRlcmJvYXJkIHtcclxuICBkYXRhOiBDb2x1bW5UeXBlW10sXHJcbiAgZXJyb3I6IGJvb2xlYW4sXHJcbiAgZXJyb3JEYXRhOiBBeGlvc0Vycm9yXHJcbn1cclxuXHJcbmNvbnN0IGxlYWRlcmJvYXJkU2VsZWN0b3IgPSAoc3RhdGU6IFJvb3RTdGF0ZSk6IElMZWFkZXJib2FyZCA9PiBzdGF0ZS5sZWFkZXJib2FyZDtcclxuZXhwb3J0IGRlZmF1bHQgbGVhZGVyYm9hcmRTZWxlY3RvcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2VzL2Zvcm0vRm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2VzL2xheW91dC9sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==