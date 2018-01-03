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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return patch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_snabbdom__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_snabbdom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_snabbdom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_snabbdom_modules_class__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_snabbdom_modules_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_snabbdom_modules_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_snabbdom_modules_attributes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_snabbdom_modules_attributes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_snabbdom_modules_attributes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_props__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_style__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_eventlisteners__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_eventlisteners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_eventlisteners__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_snabbdom__, "h")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_snabbdom__["h"]; });







var patch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_snabbdom__["init"])([__WEBPACK_IMPORTED_MODULE_1_snabbdom_modules_class___default.a, __WEBPACK_IMPORTED_MODULE_2_snabbdom_modules_attributes___default.a, __WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_props___default.a, __WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_style___default.a, __WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_eventlisteners___default.a]);



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["activeData"] = factory();
	else
		root["activeData"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatable", function() { return updatable; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Реактивный менеджер данных, следящий за изменениями данных
* и выполняющий действия в ответ на эти изменения
* Отслеживание происходит лениво, данные обновляются только когда они требуются
*
* @param {ManagerOptions} [options] Настройки менеджера
*/
var Manager = function () {
	function Manager(options) {
		_classCallCheck(this, Manager);

		this.$isObservableSymbol = Symbol("isObservable");
		this.$registerRead = Symbol("registerRead");
		this.$dataSource = Symbol("dataSource");
		this.observables = new WeakMap();
		this.cache = new WeakMap();
		this.options = {
			enabled: true,
			immediateReaction: false,
			watchKey: "$$watch",
			watchDeepKey: "$$watchDeep",
			dataSourceKey: "$$dataSource"
		};
		this.callStack = [];
		this.reactions = [];
		this.setOptions(options);

		this.observable = this.makeObservable.bind(this);
		this.reaction = this.makeReaction.bind(this);
		this.computed = this.makeComputed.bind(this);
		this.updatable = this.makeUpdatable.bind(this);
	}
	/**
 * Динамически устанавливает настройки работы менеджера данных
 *
 * @param {ManagerOptions} [options] Настройки менеджера
 */


	_createClass(Manager, [{
		key: "setOptions",
		value: function setOptions() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			this.options = Object.assign(this.options, options);
		}
		/**
  * Создает {@link Observable} объект для указанного источника данный
  *
  * @param {(Object|Array)} dataSource источник данных
  * @return {Observable} отслеживаемый объект
  */

	}, {
		key: "makeObservable",
		value: function makeObservable(dataSource) {
			var manager = this;
			if (!dataSource) {
				return dataSource;
			}
			if (manager.isObservable(dataSource)) {
				return dataSource;
			}
			var observable = manager.observables.get(dataSource);
			if (!observable) {
				var toUpdate = new Map();
				var invalidateDeps = function invalidateDeps(updatableState) {
					if (updatableState.valid) {
						updatableState.valid = false;
						updatableState.deps.forEach(function (updatableState) {
							return invalidateDeps(updatableState);
						});
					}
					updatableState.deps.clear();
				};

				var initUpdates = function initUpdates(key) {
					var updates = { updatableStates: new Set(), updatableStateMap: new WeakMap() };
					toUpdate.set(key, updates);
					return updates;
				};
				var watchDeepSection = false;
				var registerRead = function registerRead(updatableState, key, prototypes) {
					var currentKey = key;
					if (key === manager.options.watchDeepKey) {
						if (watchDeepSection) {
							return;
						}
						watchDeepSection = true;
						Object.keys(dataSource).forEach(function (key) {
							if (_typeof(dataSource[key]) === "object") {
								var obs = manager.makeObservable(dataSource[key]);
								obs[manager.options.watchDeepKey];
							}
						});
						currentKey = manager.options.watchKey;
						watchDeepSection = false;
					}

					var updates = toUpdate.get(currentKey);
					if (!updates) {
						updates = initUpdates(currentKey);
					}
					updates.updatableStates.add(updatableState);
					var updatableStateEx = updates.updatableStateMap.get(updatableState);
					if (!updatableStateEx) {
						updatableStateEx = {};
						updates.updatableStateMap.set(updatableState, updatableStateEx);
					}
					updatableState.uninit.set(dataSource, function (updatableState) {
						updates.updatableStates.delete(updatableState);
						updates.updatableStateMap.delete(updatableState);
						if (updates.updatableStates.size === 0) {
							toUpdate.delete(currentKey);
						}
					});
					var isRoot = !prototypes;
					if (isRoot) {
						prototypes = [dataSource];
						updatableStateEx.root = true;
					} else {
						var rootObj = prototypes[prototypes.length - 1];
						if (!updatableStateEx.prototypes) {
							updatableStateEx.prototypes = new Map();
						}
						var _prototypes = updatableStateEx.prototypes.get(rootObj);
						if (_prototypes) {
							return;
						}
						updatableStateEx.prototypes.set(rootObj, prototypes);
					}

					var proto = Object.getPrototypeOf(dataSource);
					while (proto != null && proto != Object.prototype) {
						var observableProto = manager.observables.get(proto);
						prototypes.unshift(proto);
						if (observableProto != null && observableProto !== Object.prototype) {
							observableProto[manager.$registerRead](updatableState, key, prototypes);
							break;
						}
						proto = Object.getPrototypeOf(proto);
					}
				};

				var updateProperty = function updateProperty(obj, key) {
					[key, manager.options.watchKey].forEach(function (updKey) {
						var updates = toUpdate.get(updKey);
						if (updates) {
							updates.updatableStates.forEach(function (updatableState) {
								var updatableStateEx = updates.updatableStateMap.get(updatableState);
								if (updatableStateEx.root) {
									invalidateDeps(updatableState);
								} else {
									var invalidateAll = Array.from(updatableStateEx.prototypes.values()).some(function (prototypes) {
										var idx = prototypes.indexOf(obj) + 1;
										var l = prototypes.length;
										var invalidate = true;
										for (var i = idx; i < l; i++) {
											if (prototypes[i].hasOwnProperty(key)) {
												invalidate = false;
												break;
											}
										}
										return invalidate;
									});
									if (invalidateAll) {
										invalidateDeps(updatableState);
									}
								}
							});
						}
					});

					if (!manager.inRunSection) {
						if (manager.options.immediateReaction) {
							manager.run();
						} else {
							manager.runDeferred();
						}
					}
				};

				observable = new Proxy(dataSource, {
					get: function get(obj, key, context) {
						if (key === manager.$isObservableSymbol) {
							return true;
						}
						if (key === manager.options.dataSourceKey) {
							return dataSource;
						}

						var propertyDescriptor = Object.getOwnPropertyDescriptor(obj, key);

						if (propertyDescriptor && typeof propertyDescriptor.get === "function") {
							return manager.makeUpdatable(propertyDescriptor.get, obj).call(obj);
						}

						if (manager.callStack.length) {
							if (key === manager.$registerRead) {
								return registerRead;
							}
							registerRead(manager.callStack[manager.callStack.length - 1].updatableState, key);
						}

						if (key === manager.options.watchKey || key === manager.options.watchDeepKey) {
							return context;
						}

						var val = obj[key];
						if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object") {
							return manager.makeObservable(val);
						}
						return val;
					},
					set: function set(obj, key, val) {
						if (manager.callStack && manager.callStack.length) {
							throw new Error("Changing observable objects is restricted inside computed properties and reaction functions!");
						}

						if (val !== obj[key] || Array.isArray(obj) && key === "length") {
							obj[key] = val;
							updateProperty(obj, key);
						}
						return true;
					},
					deleteProperty: function deleteProperty(obj, key) {
						updateProperty(obj, key);
						return true;
					}
				});
				manager.observables.set(dataSource, observable);
			}
			return observable;
		}
		/**
  * Создает {@link UpdatableFunction}
  * Используется в основном для внутренних целей
  *
  * @param {Function} call Функция для которой будет создана {@link UpdatableFunction}
  * @param {Object} obj Если `call` это метод объекта необходимо указать связанный объект
  * @return {UpdatableFunction}
  */

	}, {
		key: "makeUpdatable",
		value: function makeUpdatable(call) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			if (call.updatableCall) {
				return call;
			}
			var manager = this;
			if (obj == null) {
				obj = manager;
			}
			var updatableFunction = void 0;
			var objectCallCache = manager.cache.get(obj);

			if (objectCallCache) {
				updatableFunction = objectCallCache.get(call);
			} else {
				objectCallCache = new Map();
				manager.cache.set(obj, objectCallCache);
			}
			if (!updatableFunction) {
				var updatableState = { valid: false, value: undefined, deps: new Set(), uninit: new Map() };
				updatableFunction = function updatableFunction() {
					if (updatableState.computing) {
						console.warn("Detected cross reference inside computed properties!" + " \"undefined\" will be returned to prevent infinite loop");
						return undefined;
					}
					if (manager.callStack.length) {
						updatableState.deps.add(manager.callStack[manager.callStack.length - 1].updatableState);
					}

					if (updatableState.valid) {
						return updatableState.value;
					}
					updatableState.computing = true;
					updatableState.uninit.forEach(function (uninit) {
						return uninit(updatableState);
					});
					updatableState.uninit.clear();

					manager.callStack.push({ obj: obj, call: call, updatableState: updatableState });
					try {
						var context = void 0;
						if (this) {
							context = manager.observables.get(this);
						} else {
							context = manager;
						}
						var value = call.call(context, context);
						updatableState.valid = true;
						updatableState.value = value;
						return value;
					} finally {
						updatableState.computing = false;
						manager.callStack.pop();
					}
				};
				updatableFunction.updatableCall = call;
				objectCallCache.set(call, updatableFunction);
			}
			return updatableFunction;
		}
		/**
  * Создает вычисляемое свойство объекта
  *
  * @param {Object} obj Объект для которого будет создано вычисляемое свойство
  * @param {String} key Имя вычисляемого свойства свойства
  * @param {Function} callOnGet Функция которая будет вычислятся при доступе к свойству
  * @param {Function} [callOnSet] Функция которая будет выполнятся при установке значения свойства
  */

	}, {
		key: "makeComputed",
		value: function makeComputed(obj, key, callOnGet, callOnSet) {
			Object.defineProperty(obj, key, {
				enumerable: true,
				get: this.makeUpdatable(callOnGet, obj),
				set: callOnSet
			});
		}
		/**
  * Создает {@link UpdatableFunction} и помещает ее в список для проверки
  * на валидность при изменении данных. Менеджер автозапускает эту
  * функцию если ее результат стал невалидным
  *
  * @param {Function} call
  * Функция для которой будет создана {@link UpdatableFunction}
  * Она будет автозапускатся при изменении {@link Observable} данных использованых при ее вычислении
  * @param {Boolean} run
  * Выполнить первый запуск реации после ее регистрации.
  * В зависимости от указанной опции {@link ManagerOptions.immediateReaction}
  * будет запускатся либо сразу либо по таймауту.
  * Если {@link ManagerOptions.enabled} == false то реакция не будет
  * выполнятся даже при установленном параметре run
  * @return {ReactionHandler} Управляющий объект для зарегестрированной реакции
  */

	}, {
		key: "makeReaction",
		value: function makeReaction(call) {
			var run = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			var manager = this;
			var updatable = this.makeUpdatable(call);
			manager.reactions.push(updatable);
			if (run) {
				if (this.options.immediateReaction) {
					manager.run();
				} else {
					manager.runDeferred();
				}
			}
			return {
				unregister: function unregister() {
					var idx = manager.reactions.indexOf(updatable);
					if (idx >= 0) {
						manager.reactions.splice(idx, 1);
					}
				},

				reaction: updatable
			};
		}

		/**
  * Проверяет является ли объект наблюдаемым
  *
  * @param {(Observable|Object|Array)} obj
  */

	}, {
		key: "isObservable",
		value: function isObservable(obj) {
			return obj[this.$isObservableSymbol] === true;
		}
		/**
  * Запускает все автозапускаемые функции которые помечены как невалидные
  *
  * @param {Function} [action]
  * Действия выполняемые внутри вызова этой функции
  * не будут вызывать неотложный запуск реакций.
  * Реакции будут запущены только после выхода из функции action
  */

	}, {
		key: "run",
		value: function run(action) {
			if (!this.options.enabled) {
				return;
			}
			this.inRunSection = true;
			try {
				if (typeof action === "function") {
					action();
				}
				this.runScheduled = false;
				this.reactions.forEach(function (updatable) {
					return updatable();
				});
				typeof this.onAfterRun === "function" && this.onAfterRun();
			} finally {
				this.inRunSection = false;
			}
		}
		/**
  * Запускает все {@link UpdatableFunction} которые помечены как невалидные
  * В отличии от метода {@link run} запускает их не сразу а по указанному таймауту
  *
  * @param {Function} [action] Изменения {@link Observable} выполняемые внутри
  * вызова этой функции не будут вызывать неотложный запуск реакций.
  * Реакции будут запускатся после заданного таймаута
  * @param {Number} [timeout=0] Таймаут запуска выполнения очереди зарегестрированых реакций
  */

	}, {
		key: "runDeferred",
		value: function runDeferred(action) {
			var _this = this;

			if (!this.options.enabled) {
				return;
			}
			this.inRunSection = true;
			try {
				if (!this.runScheduled) {
					this.runScheduled = setTimeout(function () {
						return _this.run();
					});
				}
				if (typeof action === "function") {
					action();
				}
			} finally {
				this.inRunSection = false;
			}
		}
	}]);

	return Manager;
}();

Manager.default = new Manager();
Manager.default.Manager = Manager;

/* harmony default export */ __webpack_exports__["default"] = (Manager.default);
var observable = Manager.default.observable;
var reaction = Manager.default.reaction;
var computed = Manager.default.computed;
var updatable = Manager.default.updatable;

/**
 * @typedef ManagerOptions
 * @name ManagerOptions
 * @type {Object}
 * @property {Boolean} immediateReaction
 * Запускать реакции сразу после изменения
 * данных (по-умолчанию false - т.е. реакции выполняются по нулевому таймауту)
 * @property {Boolean} enabled - Активен ли менеджер данных (по-умолчнию true)
 */

/**
 * @typedef ReactionHandler
 * @name ReactionHandler
 * @type {Object}
 * @property {Function} unregister - Удалить реакцию из списка зарегестрированных реакций
 * @property {UpdatableFunction} reaction - Фунция реакции
 */

/**
 * @typedef Observable
 * @name Observable
 * @description Обьект или массив доступ к свойствам которого отслеживается.
 * При доступе к дочерним объектам или массивам также возвращается {@link Observable} объект
 */

/**
 * @typedef UpdatableFunction
 * @name UpdatableFunction
 * @description Функция которая кеширует результат своего выполнение и хранит состояние валидности результата
 *
 * При изменении {@link Observable} данных которые были использованы при вычилении этой функции ее кеш инвалидируется
 *
 * Внутри {@link UpdatableFunction} разрешено только чтение {@link Observable}, при записи будет брошено исключение
 *
 * Если внутри таких функций есть перекрестные ссылки то вычисление производится не будет, будет возвращено `undefined`
 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=active-data.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_active_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_active_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_active_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var View = function () {
	// Basic class
	function View() {
		var _this = this;

		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, View);

		this.options = options;
		this.model = options.model;
		this.init();
		var domNode = options.domNode || document.createElement("div");
		this.reactionCtrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_active_data__["reaction"])(function () {
			if (typeof options.onChange === "function") {
				options.onChange();
			}
			_this.vnode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["b" /* patch */])(_this.vnode || domNode, _this.render(_this.model));
		}, false);
		this.reactionCtrl.reaction();
	}

	_createClass(View, [{
		key: "init",
		value: function init() {}
	}, {
		key: "render",
		value: function render() {
			// abstract render
		}
	}, {
		key: "destroy",
		value: function destroy() {
			this.reactionCtrl.unregister();
		}
	}]);

	return View;
}();

/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11).default;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = __webpack_require__(6);
var is = __webpack_require__(5);
function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {}, children, text, i;
    if (c !== undefined) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i]))
                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i]);
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
        addNS(data, children, sel);
    }
    return vnode_1.vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
exports.default = h;
//# sourceMappingURL=h.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;
//# sourceMappingURL=is.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function vnode(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return { sel: sel, data: data, children: children,
        text: text, elm: elm, key: key };
}
exports.vnode = vnode;
exports.default = vnode;
//# sourceMappingURL=vnode.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_keycode_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_keycode_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_keycode_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cache__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_list_item_view__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TodoListView = function (_View) {
	_inherits(TodoListView, _View);

	function TodoListView() {
		_classCallCheck(this, TodoListView);

		return _possibleConstructorReturn(this, (TodoListView.__proto__ || Object.getPrototypeOf(TodoListView)).apply(this, arguments));
	}

	_createClass(TodoListView, [{
		key: "addItem",
		value: function addItem(title) {
			this.model.tasks.push({
				id: this.model.genId(),
				title: title,
				done: false,
				editing: false,
				editingValue: ""
			});
		}
	}, {
		key: "updateStorage",
		value: function updateStorage() {
			var _this2 = this;

			this._updateStorageTimeout && clearTimeout(this._updateStorageTimeout);
			this._updateStorageTimeout = setTimeout(function () {
				return localStorage.tasks = JSON.stringify(_this2.model.tasks);
			});
		}
	}, {
		key: "init",
		value: function init() {
			this.tasksCache = new __WEBPACK_IMPORTED_MODULE_2__cache__["a" /* default */]();
		}
	}, {
		key: "removeItem",
		value: function removeItem(id) {
			var idx = this.model.tasks.findIndex(function (task) {
				return task.id === id;
			});
			if (idx >= 0) {
				this.model.tasks.splice(idx, 1);
			}
		}
	}, {
		key: "toggleAll",
		value: function toggleAll(done) {
			this.model.tasks.forEach(function (task) {
				return task.done = done;
			});
		}
	}, {
		key: "clearCompleted",
		value: function clearCompleted() {
			this.model.tasks = this.model.tasks.filter(function (task) {
				return !task.done;
			});
		}
	}, {
		key: "render",
		value: function render(model) {
			var _this3 = this;

			this.updateStorage();
			console.log("TodoListView render");
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("section.todoapp", {
				hook: {
					destroy: function destroy() {
						return _this3.destroy();
					}
				}
			}, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("header.header", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("h1", "todos"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("input#new-todo.new-todo", {
				props: { placeholder: "What needs to be done?", value: model.editingTitle },
				on: { keydown: function keydown(event) {
						if (event.keyCode === __WEBPACK_IMPORTED_MODULE_0_keycode_js___default.a.KEY_RETURN && event.currentTarget.value) {
							_this3.addItem(event.currentTarget.value);
							event.currentTarget.value = "";
						}
					} }
			})]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("section.main", {
				style: { display: model.tasks.length ? "block" : "none" }
			}, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("input.toggle-all", {
				attrs: { id: "toggle-all" },
				props: { type: "checkbox", checked: model.remaining === 0 },
				on: {
					click: function click(event) {
						_this3.toggleAll(event.currentTarget.checked);
					}
				}
			}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("label", {
				attrs: { for: "toggle-all" }
			}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("ul.todo-list", {}, model.filtered.map(function (task) {
				return _this3.tasksCache.get(task.id, function () {
					return new __WEBPACK_IMPORTED_MODULE_4__todo_list_item_view__["a" /* default */]({
						model: task,
						key: task.id,
						onChange: function onChange() {
							return _this3.updateStorage();
						},
						onRemove: function onRemove(id) {
							return _this3.removeItem(id);
						},
						onDestroy: function onDestroy() {
							return _this3.tasksCache.remove(task.id);
						}
					}).vnode;
				});
			}))]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("footer.footer", {
				style: { display: model.tasks.length ? "block" : "none" }
			}, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("span.todo-count", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("strong", model.remaining), " item" + (model.remaining === 1 ? "" : "s") + " left"]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("ul.filters", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("li", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("a", { class: { selected: model.filter === "all" }, props: { href: "#/" } }, "All")]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("li", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("a", { class: { selected: model.filter === "active" }, props: { href: "#/active" } }, "Active")]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("li", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("a", { class: { selected: model.filter === "completed" }, props: { href: "#/completed" } }, "Completed")])]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("button.clear-completed", {
				style: { display: model.completed > 0 ? "" : "none" },
				on: { click: function click() {
						return _this3.clearCompleted();
					} }
			}, "Clear completed")])]);
		}
	}]);

	return TodoListView;
}(__WEBPACK_IMPORTED_MODULE_3__view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (TodoListView);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Cache;
function Cache() {
	var _ = {};

	return {
		get: function get(key, createNew) {
			if (_[key]) {
				return _[key];
			}
			return _[key] = createNew();
		},
		remove: function remove(key) {
			delete _[key];
		}
	};
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_active_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_active_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_active_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_list_view__ = __webpack_require__(7);



function getFilterMode() {
	return window.location.hash.substr(2) || "all";
}

var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_active_data__["observable"])({
	genId: function genId() {
		return this.tasks.reduce(function (max, i) {
			return Math.max(max, i.id);
		}, 0) + 1;
	},

	filter: getFilterMode(),
	tasks: localStorage.tasks ? JSON.parse(localStorage.tasks) : [],
	get filtered() {
		switch (this.filter) {
			case "completed":
				return this.tasks.filter(function (task) {
					return task.done;
				});
			case "active":
				return this.tasks.filter(function (task) {
					return !task.done;
				});
		}
		return this.tasks;
	},
	get remaining() {
		return this.tasks.reduce(function (res, task) {
			return task.done ? res : res + 1;
		}, 0);
	},
	get completed() {
		return this.tasks.reduce(function (res, task) {
			return task.done ? res + 1 : res;
		}, 0);
	}
});

window.addEventListener("hashchange", function () {
	return data.filter = getFilterMode();
});

new __WEBPACK_IMPORTED_MODULE_1__todo_list_view__["a" /* default */]({ domNode: document.querySelector(".todoapp"), model: data });

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_keycode_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_keycode_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_keycode_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TodoListItemView = function (_View) {
	_inherits(TodoListItemView, _View);

	function TodoListItemView() {
		_classCallCheck(this, TodoListItemView);

		return _possibleConstructorReturn(this, (TodoListItemView.__proto__ || Object.getPrototypeOf(TodoListItemView)).apply(this, arguments));
	}

	_createClass(TodoListItemView, [{
		key: "toggle",
		value: function toggle(done) {
			this.model.done = done;
		}
	}, {
		key: "startEdit",
		value: function startEdit() {
			this.model.editing = true;
			this.model.editingValue = this.model.title;
		}
	}, {
		key: "cancelEdit",
		value: function cancelEdit() {
			this.model.editing = false;
			this.model.editingValue = "";
		}
	}, {
		key: "submitEdit",
		value: function submitEdit(title) {
			this.model.title = title;
			this.model.editing = false;
			this.model.editingValue = "";
		}
	}, {
		key: "render",
		value: function render(model) {
			var _this2 = this;

			console.log("TodoListItemView render");
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("li", {
				class: {
					completed: !!model.done && !model.editing,
					editing: model.editing
				},
				hook: {
					destroy: function destroy() {
						_this2.destroy();
						if (typeof _this2.options.onDestroy === "function") {
							_this2.options.onDestroy();
						}
					}
				},
				key: this.options.key
			}, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("div.view", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("input.toggle", {
				props: {
					checked: !!model.done,
					type: "checkbox"
				},
				on: {
					click: function click(event) {
						return _this2.toggle(event.currentTarget.checked);
					}
				}
			}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("label", {
				on: {
					dblclick: function dblclick() {
						return _this2.startEdit();
					}
				}
			}, model.title), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("button.destroy", {
				on: {
					click: function click() {
						return _this2.options.onRemove(model.id);
					}
				}
			})]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vdom__["a" /* h */])("input.edit", {
				props: { value: model.title },
				on: {
					blur: function blur() {
						return _this2.cancelEdit();
					},
					keydown: function keydown(event) {
						if (event.keyCode === __WEBPACK_IMPORTED_MODULE_0_keycode_js___default.a.KEY_RETURN) {
							_this2.submitEdit(event.currentTarget.value);
							event.currentTarget.value = "";
						}
					}
				}
			})]);
		}
	}]);

	return TodoListItemView;
}(__WEBPACK_IMPORTED_MODULE_2__view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (TodoListItemView);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    var keys = {
        KEY_CANCEL: 3,
        KEY_HELP: 6,
        KEY_BACK_SPACE: 8,
        KEY_TAB: 9,
        KEY_CLEAR: 12,
        KEY_RETURN: 13,
        KEY_ENTER: 14,
        KEY_SHIFT: 16,
        KEY_CONTROL: 17,
        KEY_ALT: 18,
        KEY_PAUSE: 19,
        KEY_CAPS_LOCK: 20,
        KEY_ESCAPE: 27,
        KEY_SPACE: 32,
        KEY_PAGE_UP: 33,
        KEY_PAGE_DOWN: 34,
        KEY_END: 35,
        KEY_HOME: 36,
        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,
        KEY_PRINTSCREEN: 44,
        KEY_INSERT: 45,
        KEY_DELETE: 46,
        KEY_0: 48,
        KEY_1: 49,
        KEY_2: 50,
        KEY_3: 51,
        KEY_4: 52,
        KEY_5: 53,
        KEY_6: 54,
        KEY_7: 55,
        KEY_8: 56,
        KEY_9: 57,
        KEY_SEMICOLON: 59,
        KEY_EQUALS: 61,
        KEY_A: 65,
        KEY_B: 66,
        KEY_C: 67,
        KEY_D: 68,
        KEY_E: 69,
        KEY_F: 70,
        KEY_G: 71,
        KEY_H: 72,
        KEY_I: 73,
        KEY_J: 74,
        KEY_K: 75,
        KEY_L: 76,
        KEY_M: 77,
        KEY_N: 78,
        KEY_O: 79,
        KEY_P: 80,
        KEY_Q: 81,
        KEY_R: 82,
        KEY_S: 83,
        KEY_T: 84,
        KEY_U: 85,
        KEY_V: 86,
        KEY_W: 87,
        KEY_X: 88,
        KEY_Y: 89,
        KEY_Z: 90,
        KEY_CONTEXT_MENU: 93,
        KEY_NUMPAD0: 96,
        KEY_NUMPAD1: 97,
        KEY_NUMPAD2: 98,
        KEY_NUMPAD3: 99,
        KEY_NUMPAD4: 100,
        KEY_NUMPAD5: 101,
        KEY_NUMPAD6: 102,
        KEY_NUMPAD7: 103,
        KEY_NUMPAD8: 104,
        KEY_NUMPAD9: 105,
        KEY_MULTIPLY: 106,
        KEY_ADD: 107,
        KEY_SEPARATOR: 108,
        KEY_SUBTRACT: 109,
        KEY_DECIMAL: 110,
        KEY_DIVIDE: 111,
        KEY_F1: 112,
        KEY_F2: 113,
        KEY_F3: 114,
        KEY_F4: 115,
        KEY_F5: 116,
        KEY_F6: 117,
        KEY_F7: 118,
        KEY_F8: 119,
        KEY_F9: 120,
        KEY_F10: 121,
        KEY_F11: 122,
        KEY_F12: 123,
        KEY_F13: 124,
        KEY_F14: 125,
        KEY_F15: 126,
        KEY_F16: 127,
        KEY_F17: 128,
        KEY_F18: 129,
        KEY_F19: 130,
        KEY_F20: 131,
        KEY_F21: 132,
        KEY_F22: 133,
        KEY_F23: 134,
        KEY_F24: 135,
        KEY_NUM_LOCK: 144,
        KEY_SCROLL_LOCK: 145,
        KEY_COMMA: 188,
        KEY_PERIOD: 190,
        KEY_SLASH: 191,
        KEY_BACK_QUOTE: 192,
        KEY_OPEN_BRACKET: 219,
        KEY_BACK_SLASH: 220,
        KEY_CLOSE_BRACKET: 221,
        KEY_QUOTE: 222,
        KEY_META: 224
    };

    function KeyCode() {}

    Object.keys(keys).forEach(function (key) {
        KeyCode[key] = keys[key];
    });

    return KeyCode;
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createElement(tagName) {
    return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}
exports.htmlDomApi = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    getTextContent: getTextContent,
    isElement: isElement,
    isText: isText,
    isComment: isComment,
};
exports.default = exports.htmlDomApi;
//# sourceMappingURL=htmldomapi.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare",
    "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable",
    "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple",
    "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly",
    "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate",
    "truespeed", "typemustmatch", "visible"];
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var colonChar = 58;
var xChar = 120;
var booleanAttrsDict = Object.create(null);
for (var i = 0, len = booleanAttrs.length; i < len; i++) {
    booleanAttrsDict[booleanAttrs[i]] = true;
}
function updateAttrs(oldVnode, vnode) {
    var key, elm = vnode.elm, oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs;
    if (!oldAttrs && !attrs)
        return;
    if (oldAttrs === attrs)
        return;
    oldAttrs = oldAttrs || {};
    attrs = attrs || {};
    // update modified attributes, add new attributes
    for (key in attrs) {
        var cur = attrs[key];
        var old = oldAttrs[key];
        if (old !== cur) {
            if (booleanAttrsDict[key]) {
                if (cur) {
                    elm.setAttribute(key, "");
                }
                else {
                    elm.removeAttribute(key);
                }
            }
            else {
                if (key.charCodeAt(0) !== xChar) {
                    elm.setAttribute(key, cur);
                }
                else if (key.charCodeAt(3) === colonChar) {
                    // Assume xml namespace
                    elm.setAttributeNS(xmlNS, key, cur);
                }
                else if (key.charCodeAt(5) === colonChar) {
                    // Assume xlink namespace
                    elm.setAttributeNS(xlinkNS, key, cur);
                }
                else {
                    elm.setAttribute(key, cur);
                }
            }
        }
    }
    // remove removed attributes
    // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
    // the other option is to remove all attributes with value == undefined
    for (key in oldAttrs) {
        if (!(key in attrs)) {
            elm.removeAttribute(key);
        }
    }
}
exports.attributesModule = { create: updateAttrs, update: updateAttrs };
exports.default = exports.attributesModule;
//# sourceMappingURL=attributes.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function updateClass(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldClass = oldVnode.data.class, klass = vnode.data.class;
    if (!oldClass && !klass)
        return;
    if (oldClass === klass)
        return;
    oldClass = oldClass || {};
    klass = klass || {};
    for (name in oldClass) {
        if (!klass[name]) {
            elm.classList.remove(name);
        }
    }
    for (name in klass) {
        cur = klass[name];
        if (cur !== oldClass[name]) {
            elm.classList[cur ? 'add' : 'remove'](name);
        }
    }
}
exports.classModule = { create: updateClass, update: updateClass };
exports.default = exports.classModule;
//# sourceMappingURL=class.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function invokeHandler(handler, vnode, event) {
    if (typeof handler === "function") {
        // call function handler
        handler.call(vnode, event, vnode);
    }
    else if (typeof handler === "object") {
        // call handler with arguments
        if (typeof handler[0] === "function") {
            // special case for single argument for performance
            if (handler.length === 2) {
                handler[0].call(vnode, handler[1], event, vnode);
            }
            else {
                var args = handler.slice(1);
                args.push(event);
                args.push(vnode);
                handler[0].apply(vnode, args);
            }
        }
        else {
            // call multiple handlers
            for (var i = 0; i < handler.length; i++) {
                invokeHandler(handler[i]);
            }
        }
    }
}
function handleEvent(event, vnode) {
    var name = event.type, on = vnode.data.on;
    // call event handler(s) if exists
    if (on && on[name]) {
        invokeHandler(on[name], vnode, event);
    }
}
function createListener() {
    return function handler(event) {
        handleEvent(event, handler.vnode);
    };
}
function updateEventListeners(oldVnode, vnode) {
    var oldOn = oldVnode.data.on, oldListener = oldVnode.listener, oldElm = oldVnode.elm, on = vnode && vnode.data.on, elm = (vnode && vnode.elm), name;
    // optimization for reused immutable handlers
    if (oldOn === on) {
        return;
    }
    // remove existing listeners which no longer used
    if (oldOn && oldListener) {
        // if element changed or deleted we remove all existing listeners unconditionally
        if (!on) {
            for (name in oldOn) {
                // remove listener if element was changed or existing listeners removed
                oldElm.removeEventListener(name, oldListener, false);
            }
        }
        else {
            for (name in oldOn) {
                // remove listener if existing listener removed
                if (!on[name]) {
                    oldElm.removeEventListener(name, oldListener, false);
                }
            }
        }
    }
    // add new listeners which has not already attached
    if (on) {
        // reuse existing listener or create new
        var listener = vnode.listener = oldVnode.listener || createListener();
        // update vnode for listener
        listener.vnode = vnode;
        // if element changed or added we add all needed listeners unconditionally
        if (!oldOn) {
            for (name in on) {
                // add listener if element was changed or new listeners added
                elm.addEventListener(name, listener, false);
            }
        }
        else {
            for (name in on) {
                // add listener if new listener added
                if (!oldOn[name]) {
                    elm.addEventListener(name, listener, false);
                }
            }
        }
    }
}
exports.eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
};
exports.default = exports.eventListenersModule;
//# sourceMappingURL=eventlisteners.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function updateProps(oldVnode, vnode) {
    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
    if (!oldProps && !props)
        return;
    if (oldProps === props)
        return;
    oldProps = oldProps || {};
    props = props || {};
    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
            elm[key] = cur;
        }
    }
}
exports.propsModule = { create: updateProps, update: updateProps };
exports.default = exports.propsModule;
//# sourceMappingURL=props.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function (fn) { raf(function () { raf(fn); }); };
function setNextFrame(obj, prop, val) {
    nextFrame(function () { obj[prop] = val; });
}
function updateStyle(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
    if (!oldStyle && !style)
        return;
    if (oldStyle === style)
        return;
    oldStyle = oldStyle || {};
    style = style || {};
    var oldHasDel = 'delayed' in oldStyle;
    for (name in oldStyle) {
        if (!style[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.removeProperty(name);
            }
            else {
                elm.style[name] = '';
            }
        }
    }
    for (name in style) {
        cur = style[name];
        if (name === 'delayed' && style.delayed) {
            for (var name2 in style.delayed) {
                cur = style.delayed[name2];
                if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
                    setNextFrame(elm.style, name2, cur);
                }
            }
        }
        else if (name !== 'remove' && cur !== oldStyle[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.setProperty(name, cur);
            }
            else {
                elm.style[name] = cur;
            }
        }
    }
}
function applyDestroyStyle(vnode) {
    var style, name, elm = vnode.elm, s = vnode.data.style;
    if (!s || !(style = s.destroy))
        return;
    for (name in style) {
        elm.style[name] = style[name];
    }
}
function applyRemoveStyle(vnode, rm) {
    var s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];
    for (name in style) {
        applied.push(name);
        elm.style[name] = style[name];
    }
    compStyle = getComputedStyle(elm);
    var props = compStyle['transition-property'].split(', ');
    for (; i < props.length; ++i) {
        if (applied.indexOf(props[i]) !== -1)
            amount++;
    }
    elm.addEventListener('transitionend', function (ev) {
        if (ev.target === elm)
            --amount;
        if (amount === 0)
            rm();
    });
}
exports.styleModule = {
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};
exports.default = exports.styleModule;
//# sourceMappingURL=style.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = __webpack_require__(6);
var is = __webpack_require__(5);
var htmldomapi_1 = __webpack_require__(12);
function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }
var emptyNode = vnode_1.default('', {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVnode(vnode) {
    return vnode.sel !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, map = {}, key, ch;
    for (i = beginIdx; i <= endIdx; ++i) {
        ch = children[i];
        if (ch != null) {
            key = ch.key;
            if (key !== undefined)
                map[key] = i;
        }
    }
    return map;
}
var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
var h_1 = __webpack_require__(4);
exports.h = h_1.h;
var thunk_1 = __webpack_require__(19);
exports.thunk = thunk_1.thunk;
function init(modules, domApi) {
    var i, j, cbs = {};
    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            var hook = modules[j][hooks[i]];
            if (hook !== undefined) {
                cbs[hooks[i]].push(hook);
            }
        }
    }
    function emptyNodeAt(elm) {
        var id = elm.id ? '#' + elm.id : '';
        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
        return vnode_1.default(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if (--listeners === 0) {
                var parent_1 = api.parentNode(childElm);
                api.removeChild(parent_1, childElm);
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var i, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
                i(vnode);
                data = vnode.data;
            }
        }
        var children = vnode.children, sel = vnode.sel;
        if (sel === '!') {
            if (isUndef(vnode.text)) {
                vnode.text = '';
            }
            vnode.elm = api.createComment(vnode.text);
        }
        else if (sel !== undefined) {
            // Parse selector
            var hashIdx = sel.indexOf('#');
            var dotIdx = sel.indexOf('.', hashIdx);
            var hash = hashIdx > 0 ? hashIdx : sel.length;
            var dot = dotIdx > 0 ? dotIdx : sel.length;
            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                : api.createElement(tag);
            if (hash < dot)
                elm.setAttribute('id', sel.slice(hash + 1, dot));
            if (dotIdx > 0)
                elm.setAttribute('class', sel.slice(dot + 1).replace(/\./g, ' '));
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyNode, vnode);
            if (is.array(children)) {
                for (i = 0; i < children.length; ++i) {
                    var ch = children[i];
                    if (ch != null) {
                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
                    }
                }
            }
            else if (is.primitive(vnode.text)) {
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
            i = vnode.data.hook; // Reuse variable
            if (isDef(i)) {
                if (i.create)
                    i.create(emptyNode, vnode);
                if (i.insert)
                    insertedVnodeQueue.push(vnode);
            }
        }
        else {
            vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (ch != null) {
                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
            }
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.destroy))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
            if (vnode.children !== undefined) {
                for (j = 0; j < vnode.children.length; ++j) {
                    i = vnode.children[j];
                    if (i != null && typeof i !== "string") {
                        invokeDestroyHook(i);
                    }
                }
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
            if (ch != null) {
                if (isDef(ch.sel)) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    rm = createRmCb(ch.elm, listeners);
                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
                        cbs.remove[i_1](ch, rm);
                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
                        i_1(ch, rm);
                    }
                    else {
                        rm();
                    }
                }
                else {
                    api.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        var oldStartIdx = 0, newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx;
        var idxInOld;
        var elmToMove;
        var before;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            }
            else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            }
            else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (isUndef(idxInOld)) {
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
                else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    }
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (oldStartIdx > oldEndIdx) {
            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var i, hook;
        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
            i(oldVnode, vnode);
        }
        var elm = vnode.elm = oldVnode.elm;
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (oldVnode === vnode)
            return;
        if (vnode.data !== undefined) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            i = vnode.data.hook;
            if (isDef(i) && isDef(i = i.update))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            else if (isDef(ch)) {
                if (isDef(oldVnode.text))
                    api.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                api.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            api.setTextContent(elm, vnode.text);
        }
        if (isDef(hook) && isDef(i = hook.postpatch)) {
            i(oldVnode, vnode);
        }
    }
    return function patch(oldVnode, vnode) {
        var i, elm, parent;
        var insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();
        if (!isVnode(oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode);
        }
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue);
        }
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        for (i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        }
        for (i = 0; i < cbs.post.length; ++i)
            cbs.post[i]();
        return vnode;
    };
}
exports.init = init;
//# sourceMappingURL=snabbdom.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var h_1 = __webpack_require__(4);
function copyToThunk(vnode, thunk) {
    thunk.elm = vnode.elm;
    vnode.data.fn = thunk.data.fn;
    vnode.data.args = thunk.data.args;
    thunk.data = vnode.data;
    thunk.children = vnode.children;
    thunk.text = vnode.text;
    thunk.elm = vnode.elm;
}
function init(thunk) {
    var cur = thunk.data;
    var vnode = cur.fn.apply(undefined, cur.args);
    copyToThunk(vnode, thunk);
}
function prepatch(oldVnode, thunk) {
    var i, old = oldVnode.data, cur = thunk.data;
    var oldArgs = old.args, args = cur.args;
    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
        copyToThunk(cur.fn.apply(undefined, args), thunk);
        return;
    }
    for (i = 0; i < args.length; ++i) {
        if (oldArgs[i] !== args[i]) {
            copyToThunk(cur.fn.apply(undefined, args), thunk);
            return;
        }
    }
    copyToThunk(oldVnode, thunk);
}
exports.thunk = function thunk(sel, key, fn, args) {
    if (args === undefined) {
        args = fn;
        fn = key;
        key = undefined;
    }
    return h_1.h(sel, {
        key: key,
        hook: { init: init, prepatch: prepatch },
        fn: fn,
        args: args
    });
};
exports.default = exports.thunk;
//# sourceMappingURL=thunk.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map