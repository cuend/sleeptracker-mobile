(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_log-sleep_log-sleep_module_ts"],{

/***/ 1010:
/*!*******************************************************!*\
  !*** ./src/app/log-sleep/log-sleep-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogSleepPageRoutingModule": () => (/* binding */ LogSleepPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _log_sleep_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-sleep.page */ 6981);




const routes = [{
  path: '',
  component: _log_sleep_page__WEBPACK_IMPORTED_MODULE_0__.LogSleepPage
}];
let LogSleepPageRoutingModule = class LogSleepPageRoutingModule {};
LogSleepPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LogSleepPageRoutingModule);


/***/ }),

/***/ 7696:
/*!***********************************************!*\
  !*** ./src/app/log-sleep/log-sleep.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogSleepPageModule": () => (/* binding */ LogSleepPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _log_sleep_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-sleep-routing.module */ 1010);
/* harmony import */ var _log_sleep_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-sleep.page */ 6981);
/* harmony import */ var _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/local-notifications/ngx */ 2832);








let LogSleepPageModule = class LogSleepPageModule {};
LogSleepPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _log_sleep_routing_module__WEBPACK_IMPORTED_MODULE_0__.LogSleepPageRoutingModule],
  declarations: [_log_sleep_page__WEBPACK_IMPORTED_MODULE_1__.LogSleepPage],
  providers: [_awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__.LocalNotifications]
})], LogSleepPageModule);


/***/ }),

/***/ 6981:
/*!*********************************************!*\
  !*** ./src/app/log-sleep/log-sleep.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogSleepPage": () => (/* binding */ LogSleepPage)
/* harmony export */ });
/* harmony import */ var _Users_davidcuen_Desktop_Computer_Science_INF_133_a4_sleeptracker_INF133_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _log_sleep_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-sleep.page.html?ngResource */ 2143);
/* harmony import */ var _log_sleep_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-sleep.page.scss?ngResource */ 1287);
/* harmony import */ var _log_sleep_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_log_sleep_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_sleep_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sleep.service */ 2517);
/* harmony import */ var _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/overnight-sleep-data */ 7212);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/local-notifications/ngx */ 2832);









let LogSleepPage = class LogSleepPage {
  constructor(sleepService, localNotifications, toastController) {
    this.localNotifications = localNotifications;
    this.toastController = toastController;
    this.currentlySleeping = false;
    this.isModalOpen = false;
    this.currentDateTime = new Date().toISOString();
    this.sleepService = sleepService;
    //sleepService.logOvernightData(new OvernightSleepData(new Date(), new Date()));
  }

  setOpen(isOpen) {
    this.isModalOpen = isOpen;
  }
  ngOnInit() {}
  addSleep() {
    this.sleepStart = new Date(this.startString);
    this.sleepEnd = new Date(this.endString);
    this.overNightSleep = new _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_4__.OvernightSleepData(this.sleepStart, this.sleepEnd);
    this.sleepService.logOvernightData(this.overNightSleep);
    console.log(this.overNightSleep);
    console.log(this.sleepStart);
    console.log(this.sleepEnd);
    console.log(this.startString);
    console.log(this.endString);
    console.log(this.currentDateTime);
  }
  startCurrentSleep() {
    this.sleepStart = new Date();
    this.currentlySleeping = true;
  }
  endCurrentSleep() {
    this.sleepEnd = new Date();
    this.overNightSleep = new _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_4__.OvernightSleepData(this.sleepStart, this.sleepEnd);
    this.currentlySleeping = false;
    this.sleepService.logOvernightData(new _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_4__.OvernightSleepData(this.sleepStart, this.sleepEnd));
  }
  startToast(position) {
    var _this = this;
    return (0,_Users_davidcuen_Desktop_Computer_Science_INF_133_a4_sleeptracker_INF133_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Goodnight!',
        duration: 1500,
        position: position
      });
      yield toast.present();
    })();
  }
  endToast(position) {
    var _this2 = this;
    return (0,_Users_davidcuen_Desktop_Computer_Science_INF_133_a4_sleeptracker_INF133_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: 'Welcome Back!',
        duration: 1500,
        position: position
      });
      yield toast.present();
    })();
  }
  simpleNotif() {
    this.localNotifications.schedule({
      text: 'Remember to track how sleepy you feel Today! 😴',
      trigger: {
        at: new Date(new Date().getTime() + 60000)
      },
      led: 'FF0000',
      sound: null
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_sleep_service__WEBPACK_IMPORTED_MODULE_3__.SleepService
  }, {
    type: _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__.LocalNotifications
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
  }];
};
LogSleepPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-log-sleep',
  template: _log_sleep_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_log_sleep_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LogSleepPage);


/***/ }),

/***/ 6881:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/awesome-cordova-plugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* binding */ AwesomeCordovaNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 2580);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 3627);


var AwesomeCordovaNativePlugin = /** @class */function () {
  function AwesomeCordovaNativePlugin() {}
  /**
   * Returns a boolean that indicates whether the plugin is installed
   *
   * @returns {boolean}
   */
  AwesomeCordovaNativePlugin.installed = function () {
    var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
    return isAvailable;
  };
  /**
   * Returns the original plugin object
   */
  AwesomeCordovaNativePlugin.getPlugin = function () {
    if (typeof window !== 'undefined') {
      return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
    }
    return null;
  };
  /**
   * Returns the plugin's name
   */
  AwesomeCordovaNativePlugin.getPluginName = function () {
    var pluginName = this.pluginName;
    return pluginName;
  };
  /**
   * Returns the plugin's reference
   */
  AwesomeCordovaNativePlugin.getPluginRef = function () {
    var pluginRef = this.pluginRef;
    return pluginRef;
  };
  /**
   * Returns the plugin's install name
   */
  AwesomeCordovaNativePlugin.getPluginInstallName = function () {
    var plugin = this.plugin;
    return plugin;
  };
  /**
   * Returns the plugin's supported platforms
   */
  AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
    var platform = this.platforms;
    return platform;
  };
  AwesomeCordovaNativePlugin.pluginName = '';
  AwesomeCordovaNativePlugin.pluginRef = '';
  AwesomeCordovaNativePlugin.plugin = '';
  AwesomeCordovaNativePlugin.repo = '';
  AwesomeCordovaNativePlugin.platforms = [];
  AwesomeCordovaNativePlugin.install = '';
  return AwesomeCordovaNativePlugin;
}();


/***/ }),

/***/ 5712:
/*!*****************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/bootstrap.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
/**
 *
 */
function checkReady() {
  if (typeof process === 'undefined') {
    var win_1 = typeof window !== 'undefined' ? window : {};
    var DEVICE_READY_TIMEOUT_1 = 5000;
    // To help developers using cordova, we listen for the device ready event and
    // log an error if it didn't fire in a reasonable amount of time. Generally,
    // when this happens, developers should remove and reinstall plugins, since
    // an inconsistent plugin is often the culprit.
    var before_1 = Date.now();
    var didFireReady_1 = false;
    win_1.document.addEventListener('deviceready', function () {
      console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
      didFireReady_1 = true;
    });
    setTimeout(function () {
      if (!didFireReady_1 && win_1.cordova) {
        console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
      }
    }, DEVICE_READY_TIMEOUT_1);
  }
}

/***/ }),

/***/ 2580:
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/common.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6312);

var ERR_CORDOVA_NOT_AVAILABLE = {
  error: 'cordova_not_available'
};
var ERR_PLUGIN_NOT_INSTALLED = {
  error: 'plugin_not_installed'
};
/**
 * @param callback
 */
function getPromise(callback) {
  var tryNativePromise = function () {
    if (Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };
  if (typeof window !== 'undefined' && window.angular) {
    var doc = window.document;
    var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();
    if (injector) {
      var $q = injector.get('$q');
      return $q(function (resolve, reject) {
        callback(resolve, reject);
      });
    }
    console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
  }
  return tryNativePromise();
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var pluginResult, rej;
  var p = getPromise(function (resolve, reject) {
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return resolve(args);
      }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return reject(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
    }
    rej = reject;
  });
  // Angular throws an error on unhandled rejection, but in this case we have already printed
  // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
  // to error
  if (pluginResult && pluginResult.error) {
    p.catch(function () {});
    typeof rej === 'function' && rej(pluginResult.error);
  }
  return p;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapOtherPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return getPromise(function (resolve, reject) {
    var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
    if (pluginResult) {
      if (pluginResult.error) {
        reject(pluginResult.error);
      } else if (pluginResult.then) {
        pluginResult.then(resolve).catch(reject);
      }
    } else {
      reject({
        error: 'unexpected_error'
      });
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapObservable(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
    var pluginResult;
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return observer.next(args);
      }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return observer.error(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
    }
    if (pluginResult && pluginResult.error) {
      observer.error(pluginResult.error);
      observer.complete();
    }
    return function () {
      try {
        if (opts.clearFunction) {
          if (opts.clearWithArgs) {
            return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
          }
          return callCordovaPlugin(pluginObj, opts.clearFunction, []);
        }
      } catch (e) {
        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
        console.warn(e);
      }
    };
  });
}
/**
 * Wrap the event with an observable
 *
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
  element = typeof window !== 'undefined' && element ? get(window, element) : element || (typeof window !== 'undefined' ? window : {});
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */
function checkAvailability(plugin, methodName, pluginName) {
  var pluginRef, pluginPackage;
  if (typeof plugin === 'string') {
    pluginRef = plugin;
  } else {
    pluginRef = plugin.constructor.getPluginRef();
    pluginName = plugin.constructor.getPluginName();
    pluginPackage = plugin.constructor.getPluginInstallName();
  }
  var pluginInstance = getPlugin(pluginRef);
  if (!pluginInstance || !!methodName && typeof pluginInstance[methodName] === 'undefined') {
    if (typeof window === 'undefined' || !window.cordova) {
      cordovaWarn(pluginName, methodName);
      return ERR_CORDOVA_NOT_AVAILABLE;
    }
    pluginWarn(pluginName, pluginPackage, methodName);
    return ERR_PLUGIN_NOT_INSTALLED;
  }
  return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
  return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function setIndex(args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }
  // ignore resolve and reject in case sync
  if (opts.sync) {
    return args;
  }
  // If the plugin method expects myMethod(success, err, options)
  if (opts.callbackOrder === 'reverse') {
    // Get those arguments in the order [resolve, reject, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if (opts.callbackStyle === 'node') {
    args.push(function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
    var obj = {};
    obj[opts.successName] = resolve;
    obj[opts.errorName] = reject;
    args.push(obj);
  } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
    var setSuccessIndex = function () {
      // If we've specified a success/error index
      if (opts.successIndex > args.length) {
        args[opts.successIndex] = resolve;
      } else {
        args.splice(opts.successIndex, 0, resolve);
      }
    };
    var setErrorIndex = function () {
      // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
      // defined and thus causing non expected behavior.
      if (opts.errorIndex > args.length) {
        args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
      } else {
        args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
      }
    };

    if (opts.successIndex > opts.errorIndex) {
      setErrorIndex();
      setSuccessIndex();
    } else {
      setSuccessIndex();
      setErrorIndex();
    }
  } else {
    // Otherwise, let's tack them on to the end of the argument list
    // which is 90% of cases
    args.push(resolve);
    args.push(reject);
  }
  return args;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }
  // Try to figure out where the success/error callbacks need to be bound
  // to our promise resolve/reject handlers.
  args = setIndex(args, opts, resolve, reject);
  var availabilityCheck = checkAvailability(pluginObj, methodName);
  if (availabilityCheck === true) {
    var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
    // eslint-disable-next-line prefer-spread
    return pluginInstance[methodName].apply(pluginInstance, args);
  } else {
    return availabilityCheck;
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }
  args = setIndex(args, opts, resolve, reject);
  if (instanceAvailability(pluginObj, methodName)) {
    // eslint-disable-next-line prefer-spread
    return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
  }
}
/**
 * @param pluginRef
 */
function getPlugin(pluginRef) {
  if (typeof window !== 'undefined') {
    return get(window, pluginRef);
  }
  return null;
}
/**
 * @param element
 * @param path
 */
function get(element, path) {
  var paths = path.split('.');
  var obj = element;
  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }
    obj = obj[paths[i]];
  }
  return obj;
}
/**
 * @param pluginName
 * @param plugin
 * @param method
 */
function pluginWarn(pluginName, plugin, method) {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
  } else {
    console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
  }
  if (plugin) {
    console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
  }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
  if (typeof process === 'undefined') {
    if (method) {
      console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    } else {
      console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event, opts.element);
    } else if (opts.otherPromise) {
      return wrapOtherPromise(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (opts.sync) {
      return callInstance(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;
        if (opts.destruct) {
          pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return observer.next(args);
          }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return observer.error(args);
          });
        } else {
          pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
          observer.error(pluginResult.error);
        }
        return function () {
          try {
            if (opts.clearWithArgs) {
              return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
            }
            return callInstance(pluginObj, opts.clearFunction, []);
          } catch (e) {
            console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
            console.warn(e);
          }
        };
      });
    } else if (opts.otherPromise) {
      return getPromise(function (resolve, reject) {
        var result;
        if (opts.destruct) {
          result = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return resolve(args);
          }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return reject(args);
          });
        } else {
          result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }
        if (result && result.then) {
          result.then(resolve, reject);
        } else {
          reject();
        }
      });
    } else {
      var pluginResult_1, rej_1;
      var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return resolve(args);
          }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return reject(args);
          });
        } else {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej_1 = reject;
      });
      // Angular throws an error on unhandled rejection, but in this case we have already printed
      // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
      // to error
      if (pluginResult_1 && pluginResult_1.error) {
        p.catch(function () {});
        typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
      }
      return p;
    }
  };
}

/***/ }),

/***/ 4479:
/*!********************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova-function-override.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2580);


/**
 * @param pluginObj
 * @param methodName
 */
function overrideFunction(pluginObj, methodName) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
    var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);
    if (availabilityCheck === true) {
      var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
      pluginInstance_1[methodName] = observer.next.bind(observer);
      return function () {
        return pluginInstance_1[methodName] = function () {};
      };
    } else {
      observer.error(availabilityCheck);
      observer.complete();
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 */
function cordovaFunctionOverride(pluginObj, methodName, args) {
  if (args === void 0) {
    args = [];
  }
  return overrideFunction(pluginObj, methodName);
}

/***/ }),

/***/ 5621:
/*!***********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova-instance.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2580);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordovaInstance(pluginObj, methodName, config, args) {
  args = Array.from(args);
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 8223:
/*!***********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova-property.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2580);

/**
 * @param pluginObj
 * @param key
 */
function cordovaPropertyGet(pluginObj, key) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
  }
  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function cordovaPropertySet(pluginObj, key, value) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
  }
}

/***/ }),

/***/ 2413:
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2580);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordova(pluginObj, methodName, config, args) {
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 9641:
/*!************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/instance-property.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
  if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
    return pluginObj._objectInstance[key];
  }
  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function instancePropertySet(pluginObj, key, value) {
  if (pluginObj._objectInstance) {
    pluginObj._objectInstance[key] = value;
  }
}

/***/ }),

/***/ 4230:
/*!*****************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/interfaces.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9471:
/*!*************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* reexport safe */ _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 5712);
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ 6881);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 2580);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 2413);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 4479);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 5621);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 8223);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 9641);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 4230);


// Decorators







(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

/***/ }),

/***/ 3627:
/*!************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/util.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
  var paths = path.split('.');
  var obj = element;
  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }
    obj = obj[paths[i]];
  }
  return obj;
}
/**
 * @param callback
 * @private
 */
function getPromise(callback) {
  if (callback === void 0) {
    callback = function () {};
  }
  var tryNativePromise = function () {
    if (typeof Promise === 'function' || typeof window !== 'undefined' && window.Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };
  return tryNativePromise();
}

/***/ }),

/***/ 2832:
/*!********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/local-notifications/ngx/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ELocalNotificationTriggerUnit": () => (/* binding */ ELocalNotificationTriggerUnit),
/* harmony export */   "ILocalNotificationActionType": () => (/* binding */ ILocalNotificationActionType),
/* harmony export */   "LocalNotifications": () => (/* binding */ LocalNotifications)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 9471);





var ELocalNotificationTriggerUnit;
(function (ELocalNotificationTriggerUnit) {
  ELocalNotificationTriggerUnit["SECOND"] = "second";
  ELocalNotificationTriggerUnit["MINUTE"] = "minute";
  ELocalNotificationTriggerUnit["HOUR"] = "hour";
  ELocalNotificationTriggerUnit["DAY"] = "day";
  ELocalNotificationTriggerUnit["WEEK"] = "week";
  ELocalNotificationTriggerUnit["MONTH"] = "month";
  ELocalNotificationTriggerUnit["QUARTER"] = "quarter";
  ELocalNotificationTriggerUnit["YEAR"] = "year";
  ELocalNotificationTriggerUnit["WEEKDAY"] = "weekday";
  ELocalNotificationTriggerUnit["WEEKDAY_ORDINAL"] = "weekdayOrdinal";
  ELocalNotificationTriggerUnit["WEEK_OF_MONTH"] = "weekOfMonth";
})(ELocalNotificationTriggerUnit || (ELocalNotificationTriggerUnit = {}));
var ILocalNotificationActionType;
(function (ILocalNotificationActionType) {
  ILocalNotificationActionType["INPUT"] = "input";
  ILocalNotificationActionType["BUTTON"] = "button";
})(ILocalNotificationActionType || (ILocalNotificationActionType = {}));
var LocalNotifications = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(LocalNotifications, _super);
  function LocalNotifications() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  LocalNotifications.prototype.hasPermission = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasPermission", {}, arguments);
  };
  LocalNotifications.prototype.requestPermission = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "requestPermission", {}, arguments);
  };
  LocalNotifications.prototype.schedule = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "schedule", {
      "sync": true
    }, arguments);
  };
  LocalNotifications.prototype.update = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "update", {
      "sync": true
    }, arguments);
  };
  LocalNotifications.prototype.clear = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "clear", {}, arguments);
  };
  LocalNotifications.prototype.clearAll = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "clearAll", {}, arguments);
  };
  LocalNotifications.prototype.cancel = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cancel", {}, arguments);
  };
  LocalNotifications.prototype.cancelAll = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cancelAll", {}, arguments);
  };
  LocalNotifications.prototype.isPresent = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isPresent", {}, arguments);
  };
  LocalNotifications.prototype.isScheduled = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isScheduled", {}, arguments);
  };
  LocalNotifications.prototype.isTriggered = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isTriggered", {}, arguments);
  };
  LocalNotifications.prototype.hasType = function (id, type) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasType", {}, arguments);
  };
  LocalNotifications.prototype.getType = function (id) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getType", {}, arguments);
  };
  LocalNotifications.prototype.getIds = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getIds", {}, arguments);
  };
  LocalNotifications.prototype.getScheduledIds = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getScheduledIds", {}, arguments);
  };
  LocalNotifications.prototype.getTriggeredIds = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getTriggeredIds", {}, arguments);
  };
  LocalNotifications.prototype.get = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "get", {}, arguments);
  };
  LocalNotifications.prototype.getAll = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getAll", {}, arguments);
  };
  LocalNotifications.prototype.getScheduled = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getScheduled", {}, arguments);
  };
  LocalNotifications.prototype.getTriggered = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getTriggered", {}, arguments);
  };
  LocalNotifications.prototype.addActions = function (groupId, actions) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addActions", {}, arguments);
  };
  LocalNotifications.prototype.removeActions = function (groupId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "removeActions", {}, arguments);
  };
  LocalNotifications.prototype.hasActions = function (groupId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasActions", {}, arguments);
  };
  LocalNotifications.prototype.getDefaults = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getDefaults", {
      "sync": true
    }, arguments);
  };
  LocalNotifications.prototype.setDefaults = function (defaults) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setDefaults", {
      "sync": true
    }, arguments);
  };
  LocalNotifications.prototype.getAllScheduled = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getAllScheduled", {}, arguments);
  };
  LocalNotifications.prototype.getAllTriggered = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getAllTriggered", {}, arguments);
  };
  LocalNotifications.prototype.on = function (eventName) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "on", {
      "observable": true,
      "clearFunction": "un",
      "clearWithArgs": true
    }, arguments);
  };
  LocalNotifications.prototype.fireEvent = function (eventName, args) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "fireEvent", {
      "sync": true
    }, arguments);
  };
  LocalNotifications.prototype.fireQueuedEvents = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "fireQueuedEvents", {}, arguments);
  };
  LocalNotifications.ɵfac = /* @__PURE__ */function () {
    let ɵLocalNotifications_BaseFactory;
    return function LocalNotifications_Factory(t) {
      return (ɵLocalNotifications_BaseFactory || (ɵLocalNotifications_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LocalNotifications)))(t || LocalNotifications);
    };
  }();
  LocalNotifications.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: LocalNotifications,
    factory: LocalNotifications.ɵfac
  });
  LocalNotifications.pluginName = "LocalNotifications";
  LocalNotifications.plugin = "cordova-plugin-local-notification";
  LocalNotifications.pluginRef = "cordova.plugins.notification.local";
  LocalNotifications.repo = "https://github.com/katzer/cordova-plugin-local-notifications";
  LocalNotifications.platforms = ["Android", "iOS", "Windows"];
  LocalNotifications = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([], LocalNotifications);
  return LocalNotifications;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LocalNotifications, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], null, {
    hasPermission: [],
    requestPermission: [],
    schedule: [],
    update: [],
    clear: [],
    clearAll: [],
    cancel: [],
    cancelAll: [],
    isPresent: [],
    isScheduled: [],
    isTriggered: [],
    hasType: [],
    getType: [],
    getIds: [],
    getScheduledIds: [],
    getTriggeredIds: [],
    get: [],
    getAll: [],
    getScheduled: [],
    getTriggered: [],
    addActions: [],
    removeActions: [],
    hasActions: [],
    getDefaults: [],
    setDefaults: [],
    getAllScheduled: [],
    getAllTriggered: [],
    on: [],
    fireEvent: [],
    fireQueuedEvents: []
  });
})();

/***/ }),

/***/ 1287:
/*!**********************************************************!*\
  !*** ./src/app/log-sleep/log-sleep.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2143:
/*!**********************************************************!*\
  !*** ./src/app/log-sleep/log-sleep.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>LogSleep</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<style>\n\n.menu {\n  --height: 50%;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n\nion-row {\nheight: auto;\nwidth: 100%;\nalign-items: center;\n}\n.design {\n  position: center;\n  width: 90%;\n  height: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.notice {\n  /* text-decoration-color: lightslategray; */\n  text-align: left;\n  font-size: 12px;\n  justify-content: center;\n  opacity: 0.5;\n}\n\n</style>\n\n<ion-content>\n\n  <ion-grid class=\"design\">\n\n    <ion-row style=\"height: 50%\">\n\n      <ion-col class=\"ion-align-items-start\">\n        <h1>Ready for Bed?</h1>\n      </ion-col>\n\n      <ion-row style=\"height: 50%\" class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-align-items-start\" size=\"12\" style=\"height: 10%\">\n          <label class=\"notice\">Previous Sleep Data:</label>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-align-items-stretch\" style=\"height: 50%\">\n          <p class=\"notice\" *ngIf=\"overNightSleep\">On the {{overNightSleep.dateString()}}. You slept a total of {{overNightSleep.summaryString()}} </p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"height: 25%\" class=\"ion-justify-content-center\">\n        <ion-icon size=\"large\" name=\"bed-outline\"></ion-icon>\n      </ion-row>\n\n    </ion-row>\n\n    <ion-row style=\"height: 50%\" class=\"ion-justify-content-center\">\n      <ion-button shape=\"round\" color=\"success\" (click)=\"startCurrentSleep();startToast('top');simpleNotif()\" *ngIf=\"!currentlySleeping\">Start Sleep</ion-button>\n      <ion-button shape=\"round\" color=\"warning\" (click)=\"endCurrentSleep();endToast('top')\" *ngIf=\"currentlySleeping\">End Sleep</ion-button>\n      <br>\n      <ion-button expand=\"block\" size=\"small\" shape=\"round\" (click)=\"setOpen(true)\">Log a Previous Night's Sleep</ion-button>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-modal class=\"menu\" [isOpen]=\"isModalOpen\">\n    <ng-template>\n  \n      <ion-content class=\"ion-padding\">\n        \n        <header>\n          <ion-toolbar>\n            <ion-title>Enter Sleep Log:</ion-title>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"setOpen(false)\">Close</ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </header>\n\n        <div class=\"ion-padding\">\n          <label>Start Date and Time:</label>\n          <br>\n          <ion-datetime-button datetime=\"datetime\"></ion-datetime-button>\n          <ion-modal [keepContentsMounted]=\"true\">\n            <ng-template>\n              <ion-datetime value=\"currentDateTime\" [(ngModel)]=\"startString\" presentation=\"date-time\" preferWheel=\"true\" id=\"datetime\"></ion-datetime>\n            </ng-template>\n          </ion-modal>\n        </div>\n\n        <div class=\"ion-padding\">\n          <label>End Date and Time:</label>\n          <br>\n          <ion-datetime-button datetime=\"datetime1\"></ion-datetime-button>\n          <ion-modal [keepContentsMounted]=\"true\">\n            <ng-template>\n              <ion-datetime value=\"currentDateTime\" [(ngModel)]=\"endString\" presentation=\"date-time\" preferWheel=\"true\" id=\"datetime1\"></ion-datetime>\n            </ng-template>\n          </ion-modal>\n        </div>\n\n        <ion-button expand=\"block\" shape=\"round\" color=\"success\" (click)=\"addSleep();setOpen(false)\">Log Sleep</ion-button>\n\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_log-sleep_log-sleep_module_ts.js.map