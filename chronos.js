System.register("Config/ConfigInterface", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Di/InjectionAwareInterface", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Di/Container", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Container;
    return {
        setters: [],
        execute: function () {
            Container = class Container {
                constructor() {
                }
                /**
                  * Set value to container
                 * @param key
                 * @param value
                 */
                set(key, value) {
                    this.container[key] = value;
                }
                /**
                 * Get value from container
                 * @param key
                 */
                get(key) {
                    return this.container[key];
                }
            };
            exports_3("Container", Container);
        }
    };
});
System.register("Di/DependencyInjectorInterface", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Di/Di", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var Di;
    return {
        setters: [],
        execute: function () {
            /**
             * Dependency injector
             */
            Di = class Di {
                /**
                 * Inject value to dependency injector
                 * @param  String key
                 * @param  Any    value
                 * @return Void
                 */
                static set(key, value) {
                    if (key == "" || typeof key == "undefined" || value == "" || typeof value == "undefined") {
                        throw "Key and value must not be empty in \"Di\"";
                    }
                    Di.di[key] = value;
                }
                /**
                 * Get value from dependency injector
                 * @param  String key
                 * @return Any
                 */
                static get(key) {
                    if (key == "" || typeof key == "undefined") {
                        throw "Key must not be empty in \"Di\"";
                    }
                    return Di.di[key];
                }
            };
            /**
             * Dependency injector container
             */
            Di.di = {};
            exports_5("Di", Di);
        }
    };
});
System.register("Di/Service", ["Di/Di"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var Di_1, Service;
    return {
        setters: [
            function (Di_1_1) {
                Di_1 = Di_1_1;
            }
        ],
        execute: function () {
            /**
             * Wrapper to dependency injector class
             */
            Service = class Service {
                /**
                 *
                 */
                constructor() {
                    this.di = Di_1.Di;
                }
                /**
                 * Set value to static dependency injector
                 * @param key
                 * @param value
                 */
                set(key, value) {
                    this.di.set(key, value);
                }
                /**
                 * Get value from static dependency injector
                 * @param key
                 */
                get(key) {
                    return this.di.get(key);
                }
            };
            exports_6("Service", Service);
        }
    };
});
System.register("Di/Injectable", ["Di/Service"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var Service_1, Injectable;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }
        ],
        execute: function () {
            Injectable = class Injectable {
                /**
                 *
                 */
                getValidator(resolveProperties = null) {
                    let validator = {
                        get: function (target, name) {
                            switch (name) {
                                case "em":
                                    return this.getDi().get("em");
                                case "ajax":
                                    return this.getDi().get("ajax");
                                case "dom":
                                    return this.getDi().get("dom");
                                case "eventManager":
                                    return this.getDi().get("eventManager");
                                case "uuid":
                                    return this.getDi().get("uuid");
                                case "url":
                                    return this.getDi().get("url");
                                case "setViewModel":
                                    return target[name];
                                case "getViewModel":
                                    return target[name];
                                default:
                                    return target[name];
                            }
                        }
                    };
                    return validator;
                }
                getDi() {
                    return new Service_1.Service();
                }
                /**
                 *
                 * @param obj
                 */
                inject(obj, fn = null) {
                    return new Proxy(obj, this.getValidator(fn));
                }
            };
            exports_7("Injectable", Injectable);
        }
    };
});
System.register("Di/LocalStorage", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var LocalStorage;
    return {
        setters: [],
        execute: function () {
            /**
             * Wrapper to local storage
             */
            LocalStorage = class LocalStorage {
                constructor() {
                }
                /**
                 * Set item in local storage
                 * @param key string
                 * @param value string
                 * @returns void
                 */
                set(key, value) {
                    localStorage.setItem(key, value);
                    return;
                }
                /**
                 * Get item from local storage
                 * @param key string
                 * @returns any
                 */
                get(key) {
                    return localStorage.getItem(key);
                }
            };
            exports_8("LocalStorage", LocalStorage);
        }
    };
});
System.register("Di/SessionStorage", [], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var SessionStorage;
    return {
        setters: [],
        execute: function () {
            /**
             * wrapper to session storage
             */
            SessionStorage = class SessionStorage {
                constructor() {
                }
                /**
                 * Set item in session storage
                 * @param key string
                 * @param value string
                 * @returns void
                 */
                set(key, value) {
                    sessionStorage.setItem(key, value);
                    return;
                }
                /**
                 * Get item from session storage
                 * @param key string
                 * @returns any
                 */
                get(key) {
                    return sessionStorage.getItem(key);
                }
            };
            exports_9("SessionStorage", SessionStorage);
        }
    };
});
System.register("Environment/Scope", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var Scope;
    return {
        setters: [],
        execute: function () {
            Scope = class Scope {
            };
            Scope.LOCAL = 0;
            Scope.DEV = 1;
            Scope.TEST = 2;
            Scope.QA = 3;
            Scope.STAGING = 4;
            Scope.PRODUCTION = 5;
            exports_10("Scope", Scope);
        }
    };
});
System.register("Environment/Config", ["Environment/Scope"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var Scope_1, Config;
    return {
        setters: [
            function (Scope_1_1) {
                Scope_1 = Scope_1_1;
            }
        ],
        execute: function () {
            Config = class Config {
                constructor() {
                    /**
                     *
                     */
                    this.config = {};
                }
                /**
                 * Set general config and environment
                 *
                 * @param Object config
                 * @param Number env = Scope.Local
                 */
                setConfig(config, env = Scope_1.Scope.LOCAL) {
                    this.config[env] = config;
                }
                /**
                 * Get config was assigned
                 *
                 * @param Number env = Garlic.Environment.Scope.Local
                 * @return Object
                 */
                getConfig(env = Scope_1.Scope.LOCAL) {
                    return this.config[env];
                }
            };
            exports_11("Config", Config);
        }
    };
});
System.register("Errors/MessageCode", [], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var MessageCode;
    return {
        setters: [],
        execute: function () {
            MessageCode = class MessageCode {
            };
            MessageCode.NOT_VALID_ARRAY = 1;
            MessageCode.NOT_VALID_ARRAY_OBJECT = 2;
            MessageCode.NOT_VALID_OBJECT = 3;
            exports_12("MessageCode", MessageCode);
        }
    };
});
System.register("Errors/Message", ["Errors/MessageCode"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var MessageCode_1, Message;
    return {
        setters: [
            function (MessageCode_1_1) {
                MessageCode_1 = MessageCode_1_1;
            }
        ],
        execute: function () {
            Message = class Message {
                /**
                 *
                 * @param code
                 * @param custom
                 */
                static getCodeMessage(code, custom) {
                    var custom = " => " + custom;
                    switch (code) {
                        case MessageCode_1.MessageCode.NOT_VALID_ARRAY:
                            return Message.NOT_VALID_ARRAY + custom;
                        case MessageCode_1.MessageCode.NOT_VALID_ARRAY_OBJECT:
                            return Message.NOT_VALID_ARRAY_OBJECT + custom;
                        case MessageCode_1.MessageCode.NOT_VALID_OBJECT:
                            return Message.NOT_VALID_OBJECT + custom;
                    }
                }
            };
            /**
             *
             */
            Message.NOT_VALID_ARRAY = "The object returned in the transaction is not array";
            /**
             *
             */
            Message.NOT_VALID_ARRAY_OBJECT = "The objects returned in the transaction into array are not objects, every row must be object key, value";
            /**
             *
             */
            Message.NOT_VALID_OBJECT = "The received variable is not an object";
            exports_13("Message", Message);
        }
    };
});
System.register("Helper/ArrayHelper", [], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var ArrayHelper;
    return {
        setters: [],
        execute: function () {
            ArrayHelper = class ArrayHelper {
                constructor() {
                }
                static inArray(container, element) {
                    for (var key in container) {
                        if (container[key] == element) {
                            return true;
                        }
                    }
                    return false;
                }
            };
            exports_14("ArrayHelper", ArrayHelper);
        }
    };
});
System.register("Helper/MathHelper", [], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var MathHelper;
    return {
        setters: [],
        execute: function () {
            MathHelper = class MathHelper {
                constructor() {
                }
                static getRandom(init, last) {
                    return Math.floor((Math.random() * last) + init);
                }
                static getUUID() {
                    return this.getS4() + this.getS4() + '-' +
                        this.getS4() + '-' + this.getS4() + '-' +
                        this.getS4() + '-' + this.getS4() +
                        this.getS4() + this.getS4();
                }
                static getS4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
            };
            exports_15("MathHelper", MathHelper);
        }
    };
});
System.register("Helper/StringHelper", [], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var StringHelper;
    return {
        setters: [],
        execute: function () {
            StringHelper = class StringHelper {
                constructor() {
                }
                /**
                 * [sanitizeString description]
                 * @param  {string} str [description]
                 * @return {[type]}     [description]
                 */
                static sanitizeString(str) {
                    let idTr = str.replace(/[`~!@#$%^&*()_|+\-=?;:"",.<>\{\}\[\]\\\/]/gi, "").toLowerCase();
                    idTr = idTr.toString().replace(/\s/g, "");
                    return idTr;
                }
                /**
                 * [capitalize description]
                 * @param  {[type]} str [description]
                 * @return {[type]}     [description]
                 */
                static capitalize(str) {
                    return str.charAt(0).toUpperCase() + str.slice(1);
                }
            };
            exports_16("StringHelper", StringHelper);
        }
    };
});
System.register("Helper/Uuid", ["Helper/MathHelper"], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var MathHelper_1, Uuid;
    return {
        setters: [
            function (MathHelper_1_1) {
                MathHelper_1 = MathHelper_1_1;
            }
        ],
        execute: function () {
            Uuid = class Uuid {
                constructor() {
                }
                static get() {
                    return MathHelper_1.MathHelper.getS4() + MathHelper_1.MathHelper.getS4() + '-' +
                        MathHelper_1.MathHelper.getS4() + '-' + MathHelper_1.MathHelper.getS4() + '-' +
                        MathHelper_1.MathHelper.getS4() + '-' + MathHelper_1.MathHelper.getS4() +
                        MathHelper_1.MathHelper.getS4() + MathHelper_1.MathHelper.getS4();
                }
            };
            exports_17("Uuid", Uuid);
        }
    };
});
System.register("Helper/Validator", ["Errors/Message"], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var Message_1, Validator;
    return {
        setters: [
            function (Message_1_1) {
                Message_1 = Message_1_1;
            }
        ],
        execute: function () {
            Validator = class Validator {
                static validStructArray(data) {
                    try {
                        if (Array.isArray(data)) {
                            var firstPosition = data[0];
                            if (typeof firstPosition == "object") {
                                return true;
                            }
                            else {
                                throw Message_1.Message.NOT_VALID_ARRAY_OBJECT;
                            }
                        }
                        else {
                            throw Message_1.Message.NOT_VALID_ARRAY;
                        }
                    }
                    catch (e) {
                    }
                }
            };
            exports_18("Validator", Validator);
        }
    };
});
System.register("Loader/Loader", [], function (exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Mvc/Controller", ["Di/Service", "Di/Injectable"], function (exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var Service_2, Injectable_1, Controller;
    return {
        setters: [
            function (Service_2_1) {
                Service_2 = Service_2_1;
            },
            function (Injectable_1_1) {
                Injectable_1 = Injectable_1_1;
            }
        ],
        execute: function () {
            Controller = class Controller {
                /**
                 *
                 */
                constructor(resolveProperties = null) {
                    this.di = new Service_2.Service;
                    this.viewModel = {};
                    let injectable = new Injectable_1.Injectable();
                    return injectable.inject(this, resolveProperties);
                }
                /**
                 *
                 */
                initialize() {
                }
                /**
                 *
                 * @param key
                 * @param viewModel
                 */
                setViewModel(viewModel) {
                    this.viewModel = viewModel;
                }
                /**
                 *
                 * @param key
                 */
                getViewModel() {
                    return this.viewModel;
                }
                /**
                 *
                 */
                getDi() {
                    return this.di;
                }
                /**
                 *
                 * @param di
                 */
                setDi(di) {
                    this.di = di;
                }
            };
            exports_20("Controller", Controller);
        }
    };
});
/*function View(options) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("@View(): called", target, propertyKey, descriptor);
    }
}*/
function View(obj) {
    return (target, key, descriptor) => {
        var originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let viewModel = args[0];
            viewModel.setElements(obj.elements);
            return originalMethod.apply(this, [viewModel]);
        };
        return descriptor;
    };
}
System.register("Mvc/Builder/Transaction", [], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var Transaction;
    return {
        setters: [],
        execute: function () {
            Transaction = class Transaction {
                constructor() {
                }
                get(row) {
                }
            };
            exports_21("Transaction", Transaction);
        }
    };
});
System.register("Mvc/Builder/And", ["Mvc/Builder/Transaction"], function (exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var Transaction_1, And;
    return {
        setters: [
            function (Transaction_1_1) {
                Transaction_1 = Transaction_1_1;
            }
        ],
        execute: function () {
            And = class And extends Transaction_1.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.condition = {};
                    if (typeof condition == "object") {
                        this.condition = condition;
                    }
                    else {
                        throw "And condition must be an object";
                    }
                }
                /**
                 *
                 */
                get(row) {
                    var result = new Array();
                    var size = Object.keys(this.condition).length;
                    for (var key in row) {
                        if (row[key] == this.condition[key]) {
                            result.push(true);
                        }
                    }
                    if (result.length != size) {
                        return false;
                    }
                    for (var i = 1; i <= size; i++) {
                        if (result[i] == false) {
                            return false;
                        }
                    }
                    return true;
                }
            };
            exports_22("And", And);
        }
    };
});
System.register("Mvc/Builder/ComparisonOperators", [], function (exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var ComparisonOperators;
    return {
        setters: [],
        execute: function () {
            ComparisonOperators = class ComparisonOperators {
            };
            ComparisonOperators.AND = "&&";
            ComparisonOperators.OR = "||";
            ComparisonOperators.EQUAL = "==";
            ComparisonOperators.DIFFERENT = "!=";
            exports_23("ComparisonOperators", ComparisonOperators);
        }
    };
});
System.register("Mvc/Builder/DataType", [], function (exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var DataType;
    return {
        setters: [],
        execute: function () {
            DataType = class DataType {
                /**
                 *
                 */
                static getValueByType(value) {
                    var tyof = typeof value;
                    switch (tyof) {
                        case DataType.STRING_TYPE:
                            value = "\"" + value + "\"";
                            break;
                    }
                    return value;
                }
            };
            DataType.BOOLEAN = 1;
            DataType.INTEGER = 2;
            DataType.STRING = 3;
            DataType.OBJECT = 4;
            DataType.ARRAY = 5;
            DataType.CLASS = 6;
            DataType.BOOLEAN_TYPE = "boolean";
            DataType.INTEGER_TYPE = "number";
            DataType.STRING_TYPE = "string";
            DataType.OBJECT_TYPE = "object";
            exports_24("DataType", DataType);
        }
    };
});
System.register("Mvc/Builder/Group", ["Mvc/Builder/Transaction"], function (exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var Transaction_2, Group;
    return {
        setters: [
            function (Transaction_2_1) {
                Transaction_2 = Transaction_2_1;
            }
        ],
        execute: function () {
            Group = class Group extends Transaction_2.Transaction {
                constructor() {
                    super();
                }
                get() {
                }
            };
            exports_25("Group", Group);
        }
    };
});
System.register("Mvc/Builder/Gt", ["Mvc/Builder/Transaction"], function (exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var Transaction_3, Gt;
    return {
        setters: [
            function (Transaction_3_1) {
                Transaction_3 = Transaction_3_1;
            }
        ],
        execute: function () {
            Gt = class Gt extends Transaction_3.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.condition = {};
                    if (typeof condition == "object") {
                        this.condition = condition;
                    }
                    else {
                        throw "And condition must be an object";
                    }
                }
                /**
                 *
                 */
                get(row) {
                    var result = new Array();
                    var size = Object.keys(this.condition).length;
                    for (var key in row) {
                        if (row[key] > this.condition[key]) {
                            result.push(true);
                        }
                    }
                    if (result.length != size) {
                        return false;
                    }
                    for (var i = 1; i <= size; i++) {
                        if (result[i] == false) {
                            return false;
                        }
                    }
                    return true;
                }
            };
            exports_26("Gt", Gt);
        }
    };
});
System.register("Mvc/Builder/Gte", ["Mvc/Builder/Transaction"], function (exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var Transaction_4, Gte;
    return {
        setters: [
            function (Transaction_4_1) {
                Transaction_4 = Transaction_4_1;
            }
        ],
        execute: function () {
            Gte = class Gte extends Transaction_4.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.condition = {};
                    if (typeof condition == "object") {
                        this.condition = condition;
                    }
                    else {
                        throw "And condition must be an object";
                    }
                }
                /**
                 *
                 */
                get(row) {
                    var result = new Array();
                    var size = Object.keys(this.condition).length;
                    for (var key in row) {
                        if (row[key] >= this.condition[key]) {
                            result.push(true);
                        }
                    }
                    if (result.length != size) {
                        return false;
                    }
                    for (var i = 1; i <= size; i++) {
                        if (result[i] == false) {
                            return false;
                        }
                    }
                    return true;
                }
            };
            exports_27("Gte", Gte);
        }
    };
});
System.register("Mvc/Builder/In", ["Mvc/Builder/DataType", "Mvc/Builder/Transaction"], function (exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var DataType_1, Transaction_5, In;
    return {
        setters: [
            function (DataType_1_1) {
                DataType_1 = DataType_1_1;
            },
            function (Transaction_5_1) {
                Transaction_5 = Transaction_5_1;
            }
        ],
        execute: function () {
            In = class In extends Transaction_5.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.conditions = new Array;
                    if (typeof condition == "object") {
                        for (var key in condition) {
                            if (condition[key] instanceof Array) {
                                var row = condition[key];
                                for (var key2 in row) {
                                    var value2 = DataType_1.DataType.getValueByType(row[key2]);
                                    this.conditions.push("row[\"" + key + "\"]" + " == " + value2);
                                }
                            }
                            else {
                                throw "Not in value should be array";
                            }
                        }
                    }
                    else {
                        throw "Not condition must be an object";
                    }
                }
                get() {
                    return "(" + this.conditions.join(" || ") + ")";
                }
            };
            exports_28("In", In);
        }
    };
});
System.register("Mvc/Builder/Like", ["Mvc/Builder/Transaction"], function (exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    var Transaction_6, Like;
    return {
        setters: [
            function (Transaction_6_1) {
                Transaction_6 = Transaction_6_1;
            }
        ],
        execute: function () {
            Like = class Like extends Transaction_6.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.condition = {};
                    if (typeof condition == "object") {
                        this.condition = condition;
                        return;
                    }
                    throw "And condition must be an object";
                }
                /**
                 *
                 */
                get(row) {
                    var result = new Array();
                    var size = Object.keys(this.condition).length;
                    for (var key in this.condition) {
                        if (this.condition[key] != "" && typeof row[key] == "string") {
                            //console.log("->", row[key], this.condition[key], this.condition[key].replace(/[^A-Za-z0-9\s]/g, ""));
                            var regexp = new RegExp(this.condition[key], "i");
                            if (regexp.test(row[key].replace(/([^a-z_0-9\s]+)/gi, ''))) {
                                return true;
                            }
                            return false;
                        }
                    }
                    return false;
                }
            };
            exports_29("Like", Like);
        }
    };
});
System.register("Mvc/Builder/Lt", ["Mvc/Builder/Transaction"], function (exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var Transaction_7, Lt;
    return {
        setters: [
            function (Transaction_7_1) {
                Transaction_7 = Transaction_7_1;
            }
        ],
        execute: function () {
            Lt = class Lt extends Transaction_7.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.condition = {};
                    if (typeof condition == "object") {
                        this.condition = condition;
                    }
                    else {
                        throw "And condition must be an object";
                    }
                }
                /**
                 *
                 */
                get(row) {
                    var result = new Array();
                    var size = Object.keys(this.condition).length;
                    for (var key in row) {
                        if (row[key] < this.condition[key]) {
                            result.push(true);
                        }
                    }
                    if (result.length != size) {
                        return false;
                    }
                    for (var i = 1; i <= size; i++) {
                        if (result[i] == false) {
                            return false;
                        }
                    }
                    return true;
                }
            };
            exports_30("Lt", Lt);
        }
    };
});
System.register("Mvc/Builder/Lte", ["Mvc/Builder/Transaction"], function (exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var Transaction_8, Lte;
    return {
        setters: [
            function (Transaction_8_1) {
                Transaction_8 = Transaction_8_1;
            }
        ],
        execute: function () {
            Lte = class Lte extends Transaction_8.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.condition = {};
                    if (typeof condition == "object") {
                        this.condition = condition;
                    }
                    else {
                        throw "And condition must be an object";
                    }
                }
                /**
                 *
                 */
                get(row) {
                    var result = new Array();
                    var size = Object.keys(this.condition).length;
                    for (var key in row) {
                        if (row[key] <= this.condition[key]) {
                            result.push(true);
                        }
                    }
                    if (result.length != size) {
                        return false;
                    }
                    for (var i = 1; i <= size; i++) {
                        if (result[i] == false) {
                            return false;
                        }
                    }
                    return true;
                }
            };
            exports_31("Lte", Lte);
        }
    };
});
System.register("Mvc/Builder/Not", ["Mvc/Builder/Transaction"], function (exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    var Transaction_9, Not;
    return {
        setters: [
            function (Transaction_9_1) {
                Transaction_9 = Transaction_9_1;
            }
        ],
        execute: function () {
            Not = class Not extends Transaction_9.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.condition = {};
                    if (typeof condition == "object") {
                        this.condition = condition;
                    }
                    else {
                        throw "And condition must be an object";
                    }
                }
                /**
                 *
                 */
                get(row) {
                    var result = new Array();
                    var size = Object.keys(this.condition).length;
                    for (var key in row) {
                        if (row[key] == this.condition[key]) {
                            result.push(true);
                        }
                    }
                    for (var i = 0; i < size; i++) {
                        if (result[i] == true) {
                            return false;
                        }
                    }
                    return true;
                }
            };
            exports_32("Not", Not);
        }
    };
});
System.register("Mvc/Builder/NotIn", ["Mvc/Builder/DataType", "Mvc/Builder/Transaction"], function (exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var DataType_2, Transaction_10, NotIn;
    return {
        setters: [
            function (DataType_2_1) {
                DataType_2 = DataType_2_1;
            },
            function (Transaction_10_1) {
                Transaction_10 = Transaction_10_1;
            }
        ],
        execute: function () {
            NotIn = class NotIn extends Transaction_10.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.conditions = new Array;
                    if (typeof condition == "object") {
                        for (var key in condition) {
                            if (condition[key] instanceof Array) {
                                var row = condition[key];
                                for (var key2 in row) {
                                    var value2 = DataType_2.DataType.getValueByType(row[key2]);
                                    this.conditions.push("row[\"" + key + "\"]" + " != " + value2);
                                }
                            }
                            else {
                                throw "Not in value should be array";
                            }
                        }
                    }
                    else {
                        throw "Not condition must be an object";
                    }
                }
                get() {
                    return "(" + this.conditions.join(" && ") + ")";
                }
            };
            exports_33("NotIn", NotIn);
        }
    };
});
System.register("Mvc/Builder/Operators", [], function (exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    var Operators;
    return {
        setters: [],
        execute: function () {
            Operators = class Operators {
            };
            Operators.OR = "$or";
            Operators.AND = "$and";
            Operators.SORT = "$sort";
            Operators.IS_NOT = "$isNot";
            Operators.LIMIT = "$limit";
            Operators.COLUMNS = "$columns";
            Operators.CONDITIONAL = "$conditions";
            exports_34("Operators", Operators);
        }
    };
});
System.register("Mvc/Builder/Or", ["Mvc/Builder/Transaction"], function (exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    var Transaction_11, Or;
    return {
        setters: [
            function (Transaction_11_1) {
                Transaction_11 = Transaction_11_1;
            }
        ],
        execute: function () {
            Or = class Or extends Transaction_11.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.condition = {};
                    if (typeof condition == "object") {
                        this.condition = condition;
                    }
                    else {
                        throw "And condition must be an object";
                    }
                }
                /**
                 *
                 */
                get(row) {
                    var result = new Array();
                    var size = Object.keys(this.condition).length;
                    if (this.condition instanceof Transaction_11.Transaction) {
                        result.push(this.condition.get(row));
                    }
                    for (var key in row) {
                        if (this.condition[key] instanceof Transaction_11.Transaction) {
                            result.push(this.condition[key].get(row));
                        }
                        else {
                            if (row[key] == this.condition[key]) {
                                result.push(true);
                            }
                        }
                    }
                    for (let i = 0; i < size; i++) {
                        if (result[i] == true) {
                            return true;
                        }
                    }
                    return false;
                }
            };
            exports_35("Or", Or);
        }
    };
});
System.register("Mvc/Builder/Sort", [], function (exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    var Sort;
    return {
        setters: [],
        execute: function () {
            Sort = class Sort {
                static sortByField(data, field) {
                    var arr = [];
                    for (var prop in data) {
                        if (data.hasOwnProperty(prop)) {
                            var obj = {};
                            obj[prop] = data[prop];
                            obj.tempSortName = data[prop][field].toLowerCase();
                            arr.push(obj);
                        }
                    }
                    arr.sort(function (a, b) {
                        var at = a.tempSortName, bt = b.tempSortName;
                        return at > bt ? 1 : (at < bt ? -1 : 0);
                    });
                    var result = [];
                    for (var i = 0, l = arr.length; i < l; i++) {
                        var obj = arr[i];
                        delete obj.tempSortName;
                        for (var prop in obj) {
                            if (obj.hasOwnProperty(prop)) {
                                var id = prop;
                            }
                        }
                        var item = obj[id];
                        result.push(item);
                    }
                    return result;
                }
            };
            Sort.ASC = 1;
            Sort.DESC = -1;
            exports_36("Sort", Sort);
        }
    };
});
System.register("Mvc/Builder/Query", ["Mvc/Builder/Transaction", "Mvc/Builder/Not", "Mvc/Builder/NotIn", "Mvc/Builder/Sort", "Mvc/Builder/DataType"], function (exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    var Transaction_12, Not_1, NotIn_1, Sort_1, DataType_3, Query;
    return {
        setters: [
            function (Transaction_12_1) {
                Transaction_12 = Transaction_12_1;
            },
            function (Not_1_1) {
                Not_1 = Not_1_1;
            },
            function (NotIn_1_1) {
                NotIn_1 = NotIn_1_1;
            },
            function (Sort_1_1) {
                Sort_1 = Sort_1_1;
            },
            function (DataType_3_1) {
                DataType_3 = DataType_3_1;
            }
        ],
        execute: function () {
            Query = class Query {
                /**
                 *
                 * @param data
                 */
                constructor(data = false) {
                    this.lim = null;
                    this.sort = new Array;
                    this.data = false;
                    this.cols = new Array;
                    this.conds = null;
                    this.sortConds = false;
                    this.transactions = new Array;
                    this.negativeConds = null;
                    this.negativeTransactions = new Array();
                    this.data = data;
                }
                /**
                 *
                 */
                columns(cols) {
                    if (typeof cols == "object") {
                        this.cols = cols;
                    }
                    else {
                        throw "Column param must be an object";
                    }
                    return this;
                }
                /**
                 *
                 */
                getColumns() {
                    return Object.keys(this.data[0]);
                }
                /**
                 *
                 * @param row
                 */
                resolveColumns(row) {
                    var newRow = {};
                    if (Object.keys(this.cols).length > 0) {
                        for (let key in this.cols) {
                            newRow[this.cols[key]] = row[this.cols[key]];
                        }
                    }
                    else {
                        newRow = Object.keys(row);
                    }
                    return newRow;
                }
                /**
                 *
                 * @param condClass
                 */
                where(conditions) {
                    if (conditions instanceof Transaction_12.Transaction) {
                        if (conditions instanceof Not_1.Not || conditions instanceof NotIn_1.NotIn) {
                            this.negativeTransactions.push(conditions);
                            this.negativeConds++;
                        }
                        else {
                            this.transactions.push(conditions);
                            this.conds++;
                        }
                    }
                    return this;
                }
                limit(limit) {
                    if (typeof limit == "number") {
                        this.lim = limit;
                    }
                    else {
                        throw "limit must be number";
                    }
                    return this;
                }
                addOperator(length, operator) {
                    var cond = "";
                    if (length > 0) {
                        cond = operator + " ";
                    }
                    return cond;
                }
                /**
                 *
                 * @param conditions
                 */
                orderBy(sortContent) {
                    this.sort = sortContent;
                    this.sortConds = true;
                }
                /**
                 *
                 */
                resolveSort(results) {
                    switch (typeof this.sort) {
                        case DataType_3.DataType.STRING_TYPE:
                            results = Sort_1.Sort.sortByField(results, this.sort);
                            break;
                        case DataType_3.DataType.OBJECT_TYPE:
                            if (this.sort instanceof Array) {
                                for (let sortKey in this.sort) {
                                    let sortValue = this.sort[sortKey];
                                    results = Sort_1.Sort.sortByField(results, sortValue);
                                }
                            }
                            else {
                                for (let sortKey in this.sort) {
                                    let sortType = this.sort[sortKey];
                                    results = Sort_1.Sort.sortByField(results, sortKey);
                                    if (this.sort[sortKey] == Sort_1.Sort.DESC) {
                                        results = results.reverse();
                                    }
                                }
                            }
                            break;
                    }
                    return results;
                }
                /**
                 *
                 * @param row
                 */
                miniChecksum(row) {
                    var str = JSON.stringify(row);
                    var hash = 0;
                    var char = 0;
                    if (str.length == 0)
                        return hash;
                    for (var i = 0; i < str.length; i++) {
                        char = str.charCodeAt(i);
                        hash = ((hash << 5) - hash) + char;
                        hash = hash & hash; // Convert to 32bit integer
                    }
                    return hash;
                }
                /**
                 *
                 * @param result
                 * @param row
                 */
                ifExistOnResult(result, row) {
                    for (var key in result) {
                        if (this.miniChecksum(result[key]) == this.miniChecksum(row)) {
                            return false;
                        }
                    }
                    return true;
                }
                /**
                 *
                 */
                get() {
                    var results = new Array;
                    var limit = 1;
                    for (var key in this.data) {
                        var row = this.data[key];
                        if (this.cols != null && this.cols.length > 0) {
                            row = this.resolveColumns(row);
                        }
                        if (this.conds > 0) {
                            for (var key in this.transactions) {
                                var result = this.transactions[key].get(row);
                                if (result) {
                                    if (this.ifExistOnResult(results, row)) {
                                        results.push(row);
                                    }
                                }
                            }
                        }
                        else {
                            results.push(row);
                        }
                        if (this.lim != null) {
                            if (limit == this.lim) {
                                break;
                            }
                        }
                        limit++;
                    }
                    var newResults = new Array();
                    for (var key in results) {
                        var row = results[key];
                        if (this.negativeConds > 0) {
                            for (var key in this.negativeTransactions) {
                                var result = this.negativeTransactions[key].get(row);
                                if (result) {
                                    if (this.ifExistOnResult(newResults, row)) {
                                        newResults.push(row);
                                    }
                                }
                            }
                        }
                        else {
                            newResults.push(row);
                        }
                    }
                    if (this.sortConds) {
                        newResults = this.resolveSort(newResults);
                    }
                    return newResults;
                }
            };
            exports_37("Query", Query);
        }
    };
});
System.register("Mvc/Components/Component", ["Mvc/Controller"], function (exports_38, context_38) {
    "use strict";
    var __moduleName = context_38 && context_38.id;
    var Controller_1, Component;
    return {
        setters: [
            function (Controller_1_1) {
                Controller_1 = Controller_1_1;
            }
        ],
        execute: function () {
            Component = class Component extends Controller_1.Controller {
                constructor(context = false) {
                    super();
                }
            };
            exports_38("Component", Component);
        }
    };
});
System.register("Mvc/Model/RawModel", ["Helper/Uuid"], function (exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    var Uuid_1, RawModel;
    return {
        setters: [
            function (Uuid_1_1) {
                Uuid_1 = Uuid_1_1;
            }
        ],
        execute: function () {
            RawModel = class RawModel {
                constructor() {
                    this.state = 1;
                    this.identify = Uuid_1.Uuid.get();
                }
                /**
                 *
                 */
                initialize() {
                }
                /**
                 *
                 */
                beforeInsert() {
                }
                /**
                 *
                 */
                beforeFind() {
                }
                /**
                 *
                 */
                beforeUpdate() {
                }
                /**
                 *
                 */
                beforeDelete() {
                }
                /**
                 * [getClassName description]
                 * @return {[type]} [description]
                 */
                getClassName() {
                    let funcNameRegex = /function (.{1,})\(/;
                    let results = (funcNameRegex).exec(this["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                }
                /**
                 *
                 */
                getIdentify() {
                    return this.identify;
                }
            };
            exports_39("RawModel", RawModel);
        }
    };
});
System.register("Mvc/Model/ModelInterface", [], function (exports_40, context_40) {
    "use strict";
    var __moduleName = context_40 && context_40.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Mvc/Model/AjaxModel", ["Mvc/Model/RawModel"], function (exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    var RawModel_1, AjaxModel;
    return {
        setters: [
            function (RawModel_1_1) {
                RawModel_1 = RawModel_1_1;
            }
        ],
        execute: function () {
            AjaxModel = class AjaxModel extends RawModel_1.RawModel {
                constructor() {
                    super();
                    this.insertUrl = null;
                    this.deleteUrl = null;
                    this.updateUrl = null;
                    this.findUrl = null;
                    this.findOneUrl = null;
                    this.countUrl = null;
                    this.method = "POST";
                    this.initialize();
                }
                setSource(data) {
                    this.setInsertUrl(data.insert);
                    this.setUpdateUrl(data.update);
                    this.setInsertUrl(data.insert);
                    this.setCountUrl(data.count);
                    this.setFindOneUrl(data.findOne);
                    this.setFindUrl(data.find);
                }
                setInsertUrl(url) {
                    this.insertUrl = url;
                }
                setFindUrl(url) {
                    this.findUrl = url;
                }
                setFindOneUrl(url) {
                    this.findOneUrl = url;
                }
                setCountUrl(url) {
                    this.countUrl = url;
                }
                setDeleteUrl(url) {
                    this.deleteUrl = url;
                }
                setUpdateUrl(url) {
                    this.updateUrl = url;
                }
                getInsertUrl() {
                    return this.insertUrl;
                }
                getFindUrl() {
                    return this.findUrl;
                }
                getDeleteUrl() {
                    return this.deleteUrl;
                }
                getUpdateUrl() {
                    return this.updateUrl;
                }
                setParams(params) {
                    this.params = params;
                }
                getParams() {
                    return this.params;
                }
                setMethod(method) {
                    this.method = method;
                }
                getMethod() {
                    return this.method;
                }
            };
            exports_41("AjaxModel", AjaxModel);
        }
    };
});
System.register("Mvc/Model/StaticModel", ["Mvc/Model/RawModel", "Di/SessionStorage"], function (exports_42, context_42) {
    "use strict";
    var __moduleName = context_42 && context_42.id;
    var RawModel_2, SessionStorage_1, StaticModel;
    return {
        setters: [
            function (RawModel_2_1) {
                RawModel_2 = RawModel_2_1;
            },
            function (SessionStorage_1_1) {
                SessionStorage_1 = SessionStorage_1_1;
            }
        ],
        execute: function () {
            StaticModel = class StaticModel extends RawModel_2.RawModel {
                /**
                 *
                 */
                constructor(di) {
                    super();
                    this.storage = new SessionStorage_1.SessionStorage;
                    this.initialize();
                }
                /**
                 *
                 */
                setData(data) {
                    this.storage.set("Models_Identify_" + this.getClassName(), JSON.stringify(data));
                }
                /**
                 *
                 */
                getData() {
                    let data = this.storage.get("Models_Identify_" + this.getClassName());
                    return data;
                }
                /**
                 *
                 */
                getObjectData() {
                    return JSON.parse(this.storage.get("Models_Identify_" + this.getClassName()));
                }
                /**
                 *
                 */
                setIndex(index) {
                    this.index = index;
                }
                /**
                 *
                 */
                getIndex() {
                    return this.index;
                }
            };
            exports_42("StaticModel", StaticModel);
        }
    };
});
System.register("Mvc/Model/AjaxModelPersistent", ["Mvc/Model/StaticModel", "Di/SessionStorage"], function (exports_43, context_43) {
    "use strict";
    var __moduleName = context_43 && context_43.id;
    var StaticModel_1, SessionStorage_2, AjaxModelPersistent;
    return {
        setters: [
            function (StaticModel_1_1) {
                StaticModel_1 = StaticModel_1_1;
            },
            function (SessionStorage_2_1) {
                SessionStorage_2 = SessionStorage_2_1;
            }
        ],
        execute: function () {
            AjaxModelPersistent = class AjaxModelPersistent extends StaticModel_1.StaticModel {
                constructor() {
                    super(...arguments);
                    this.container = new SessionStorage_2.SessionStorage;
                    this.insertUrl = null;
                    this.deleteUrl = null;
                    this.updateUrl = null;
                    this.findUrl = null;
                    this.method = "POST";
                }
                setSource(data) {
                    this.setInsertUrl(data.find);
                    this.setUpdateUrl(data.update);
                    this.setInsertUrl(data.insert);
                    this.setFindUrl(data.insert);
                }
                setAjaxInit(value) {
                    this.container.set("ajaxInit_" + this.getClassName(), value);
                }
                getAjaxInit() {
                    return this.container.get("ajaxInit_" + this.getClassName());
                }
                setInsertUrl(url) {
                    this.insertUrl = url;
                }
                setFindUrl(url) {
                    this.findUrl = url;
                }
                setDeleteUrl(url) {
                    this.deleteUrl = url;
                }
                setUpdateUrl(url) {
                    this.updateUrl = url;
                }
                getInsertUrl() {
                    return this.insertUrl;
                }
                getFindUrl() {
                    return this.findUrl;
                }
                getDeleteUrl() {
                    return this.deleteUrl;
                }
                getUpdateUrl() {
                    return this.updateUrl;
                }
                setParams(params) {
                    this.params = params;
                }
                getParams() {
                    return this.params;
                }
                setMethod(method) {
                    this.method = method;
                }
                getMethod() {
                    return this.method;
                }
            };
            exports_43("AjaxModelPersistent", AjaxModelPersistent);
        }
    };
});
System.register("Mvc/Model/Deny", [], function (exports_44, context_44) {
    "use strict";
    var __moduleName = context_44 && context_44.id;
    var Deny;
    return {
        setters: [],
        execute: function () {
            Deny = class Deny {
                /**
                 * Get deny methods
                 */
                static getDeny() {
                    return [
                        "state",
                        "source",
                        "insertUrl",
                        "deleteUrl",
                        "updateUrl",
                        "findUrl",
                        "params",
                        "internalId",
                        "method"
                    ];
                }
            };
            exports_44("Deny", Deny);
        }
    };
});
System.register("Mvc/View/ViewModel", [], function (exports_45, context_45) {
    "use strict";
    var __moduleName = context_45 && context_45.id;
    var ViewModel;
    return {
        setters: [],
        execute: function () {
            ViewModel = class ViewModel {
                constructor(data) {
                    this.data = {};
                    this.data = data;
                    console.log(data, ViewModel.getElements());
                }
                static setElements(views) {
                    ViewModel.views = views;
                }
                static getElements() {
                    return ViewModel.views;
                }
                get(key) {
                    this.data[key];
                }
            };
            ViewModel.views = [];
            exports_45("ViewModel", ViewModel);
        }
    };
});
System.register("Mvc/View/Html/Dom/ElementInterface", [], function (exports_46, context_46) {
    "use strict";
    var __moduleName = context_46 && context_46.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Mvc/View/Html/Dom/CssManager", [], function (exports_47, context_47) {
    "use strict";
    var __moduleName = context_47 && context_47.id;
    var CssManager;
    return {
        setters: [],
        execute: function () {
            CssManager = class CssManager {
                /**
                 *
                 * @param element
                 */
                constructor() {
                }
                /**
                 *
                 * @param element
                 */
                setElement(element) {
                    this.element = element;
                    return this;
                }
                /**
                 *
                 */
                getElement() {
                    return this.element;
                }
                /**
                 * Handle style through javascript
                 *
                 * @param  String key, css propertie
                 * @param String|Object value
                 * @return this
                 */
                css(key, value = null) {
                    if (typeof key == "object") {
                        for (let keyItem in key) {
                            this.element.style[key] = key[keyItem];
                        }
                    }
                    else if (typeof key == "string" && value != null) {
                        this.element.style[key] = value;
                    }
                    else if (typeof key == "string" && value == null) {
                        return this.element.style[key];
                    }
                    return this;
                }
                /**
                 * Handle style through javascript
                 *
                 * @param  String key, css propertie
                 * @param String|Object value
                 * @return this
                 */
                setStyle(key, value = null) {
                    if (typeof key == "object") {
                        for (let keyItem in key) {
                            this.element.style[key] = key[keyItem];
                        }
                    }
                    else if (typeof key == "string" && value != null) {
                        this.element.style[key] = value;
                    }
                    else if (typeof key == "string" && value == null) {
                        return this.element.style[key];
                    }
                    return this;
                }
                /**
                 * Set class attribute
                 *
                 * @param  String attrClass
                 * @return this
                 */
                class(attrClass) {
                    this.element.setAttribute("class", attrClass);
                    return this;
                }
                /**
                 * Set new class but deletes previous classes added
                 *
                 * @param String attrClass
                 */
                setClass(attrClass) {
                    this.element.setAttribute("class", attrClass);
                    return this;
                }
                /**
                 * Concat class to element
                 *
                 * @param  String attrClass
                 * @return
                 */
                addClass(attrClass) {
                    let strClass = this.element.getAttribute("class");
                    strClass += " " + attrClass;
                    this.element.setAttribute("class", strClass);
                    return this;
                }
                /**
                 * Set childs as append does
                 *
                 * @return Object this
                 */
                addChild(element) {
                    this.element.append(element);
                    return this;
                }
                /**
                 *
                 */
                show() {
                    this.element.style.display = "";
                    return this;
                }
                /**
                 *
                 */
                hide() {
                    this.element.style.display = "none";
                    return this;
                }
            };
            exports_47("CssManager", CssManager);
        }
    };
});
System.register("Mvc/View/Html/Dom/EventManager", [], function (exports_48, context_48) {
    "use strict";
    var __moduleName = context_48 && context_48.id;
    var EventManager;
    return {
        setters: [],
        execute: function () {
            EventManager = class EventManager {
                /**
                 *
                 * @param element
                 */
                constructor() {
                }
                setEventToElement(eventName, fn) {
                    if (Array.isArray(this.element)) {
                        for (let item of this.element) {
                            this.element.addEventListener(eventName, fn.bind(this));
                        }
                    }
                    else {
                        this.element.addEventListener(eventName, fn.bind(this));
                    }
                    return this;
                }
                /**
                 *
                 * @param  {Function} fn [description]
                 * @return {[type]}      [description]
                 */
                click(fn) {
                    this.setEventToElement("click", fn);
                    return this;
                }
                /**
                 *
                 */
                doubleClick(fn) {
                    this.setEventToElement("dblclick", fn);
                    return this;
                }
                /**
                 *
                 * @return {[type]} [description]
                 */
                change(fn) {
                    this.setEventToElement("change", fn);
                    return this;
                }
                /**
                 * [change description]
                 * @return {[type]} [description]
                 */
                keypress(fn) {
                    this.setEventToElement("keypress", fn);
                    return this;
                }
                /**
                 * [change description]
                 * @return {[type]} [description]
                 */
                keydown(fn) {
                    this.setEventToElement("keydown", fn);
                    return this;
                }
                /**
                 * [change description]
                 * @return {[type]} [description]
                 */
                keyup(fn) {
                    this.setEventToElement("keyup", fn);
                    return this;
                }
                paste(fn) {
                    this.setEventToElement("paste", fn);
                    return this;
                }
                /**
                 * [change description]
                 * @return {[type]} [description]
                 */
                blur(fn) {
                    this.setEventToElement("blur", fn);
                    return this;
                }
                /**
                 * [change description]
                 * @return {[type]} [description]
                 */
                focus(fn) {
                    this.setEventToElement("focus", fn);
                    return this;
                }
                /**
                 *
                 * @param fn
                 */
                submit(fn) {
                    this.setEventToElement("submit", fn);
                    return this;
                }
            };
            exports_48("EventManager", EventManager);
        }
    };
});
System.register("Mvc/View/Html/Dom/ParentManager", ["Mvc/View/Html/Dom/Adapter/ElementAdapter"], function (exports_49, context_49) {
    "use strict";
    var __moduleName = context_49 && context_49.id;
    var ElementAdapter_1, ParentManager;
    return {
        setters: [
            function (ElementAdapter_1_1) {
                ElementAdapter_1 = ElementAdapter_1_1;
            }
        ],
        execute: function () {
            ParentManager = class ParentManager {
                constructor() {
                }
                getParent() {
                    let parent = this.element.parentElement;
                    if (parent.nodeType == 1) {
                        let adapter = new ElementAdapter_1.ElementAdapter(parent);
                        let tagObject = adapter.get();
                        return tagObject;
                    }
                    return false;
                }
                getSiblings() {
                    let siblings = this.getParent().getChilds();
                    if (siblings.length > 0) {
                        let aux = new Array;
                        for (let item of siblings) {
                            if (item.getElement() != this.getElement()) {
                                aux.push(item);
                            }
                        }
                        return aux;
                    }
                    return false;
                }
                getChilds() {
                    let childNodes = this.element.childNodes;
                    let childs = new Array();
                    for (let key in childNodes) {
                        if (childNodes[key].nodeType == 1) {
                            let adapter = new ElementAdapter_1.ElementAdapter(childNodes[key]);
                            let tagObject = adapter.get();
                            childs.push(tagObject);
                        }
                    }
                    return childs;
                }
                /**
                 *
                 */
                setElement(element) {
                    this.element = element;
                    return this;
                }
                /**
                 *
                 */
                getElement() {
                    return this.element;
                }
            };
            exports_49("ParentManager", ParentManager);
        }
    };
});
System.register("Mvc/View/Html/Dom/ElementManager", ["Mvc/View/Html/Dom/Adapter/ElementAdapter"], function (exports_50, context_50) {
    "use strict";
    var __moduleName = context_50 && context_50.id;
    var ElementAdapter_2, ElementManager;
    return {
        setters: [
            function (ElementAdapter_2_1) {
                ElementAdapter_2 = ElementAdapter_2_1;
            }
        ],
        execute: function () {
            /**
             *
             */
            ElementManager = class ElementManager {
                /**
                 *
                 * @param element
                 */
                constructor() {
                }
                /**
                 *
                 * @param element
                 */
                setElement(element) {
                    this.element = element;
                }
                /**
                 * Get document element
                 * @return {document} element
                 */
                getElement() {
                    return this.element;
                }
                /**
                 *
                 * @return
                 */
                getClassName() {
                    let funcNameRegex = /function (.{1,})\(/;
                    let results = (funcNameRegex).exec(this["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                }
                /**
                 * Set id attribute
                 * @param {String} id
                 * @return this
                 */
                setId(id) {
                    this.attr("id", id);
                    return this;
                }
                /**
                 * Get id attribute
                 * @return {String}
                 */
                getId() {
                    return this.attr("id");
                }
                /**
                 * Set required attribute
                 * å
                 */
                setRequired(req) {
                    this.element.required = req;
                    return this;
                }
                /**
                 * Get required attribute
                 * @return {Boolean}
                 */
                getRequired() {
                    return this.element.required;
                }
                /**
                 *
                 * @param append
                 */
                checkAppendValue(append) {
                    switch (typeof append) {
                        case "string":
                            this.element.appendChild(document.createTextNode(append));
                            break;
                        case "number":
                            this.element.appendChild(document.createTextNode(append.toString()));
                            break;
                        case "object":
                            if (typeof append.getElement() != "undefined") {
                                this.verifyElement(append.getElement());
                            }
                            else {
                                this.verifyElement(append);
                            }
                            break;
                        default:
                            break;
                    }
                }
                /**
                 *
                 * @param append
                 * @param type
                 */
                verifyElement(append, type = "append") {
                    if (this.element instanceof HTMLCollection) {
                        for (let key in this.element) {
                            if (typeof this.element[key].nodeType != "undefined") {
                                if (this.element[key].nodeType == 1) {
                                    this.element[key].appendChild(append);
                                }
                            }
                        }
                    }
                    else {
                        this.element.appendChild(append);
                    }
                }
                /**
                 *
                 * @param append
                 */
                append(append) {
                    if (Array.isArray(append) || (append instanceof HTMLCollection)) {
                        for (let key in append) {
                            this.checkAppendValue(append[key]);
                        }
                    }
                    else {
                        this.checkAppendValue(append);
                    }
                    return this;
                }
                /**
                 * Set class
                 * @param  { String } attrClass
                 * @return this
                 */
                class(attrClass) {
                    this.element.setAttribute("class", attrClass);
                    return this;
                }
                /**
                 *
                 * @param  { String } cssClass
                 * @return
                 */
                addClass(attrClass) {
                    let strClass = this.element.getAttribute("class");
                    strClass += " " + attrClass;
                    this.element.setAttribute("class", strClass);
                    return this;
                }
                /**
                 *
                 * @param  { String } attribute
                 * @return { this | attribute}
                 */
                attr(attr, value = false) {
                    if (typeof attr == "object" && value == false) {
                        for (let key in attr) {
                            this.element.setAttribute(key, attr[key]);
                        }
                    }
                    else if (typeof attr == "string" && value != false) {
                        this.element.setAttribute(attr, value);
                    }
                    else if (typeof attr == "string" && value == false) {
                        return this.element.getAttribute(attr);
                    }
                    return this;
                }
                /**
                 *
                 * @param {String} attribute
                 */
                removeAttr(attr) {
                    this.element.removeAttribute(attr);
                    return this;
                }
                /**
                 *
                 * @param
                 * @return
                 */
                html(html = null) {
                    if (html != null) {
                        this.removeChildNodes();
                        this.append(html);
                        return this;
                    }
                    else {
                        return this.element.innerHTML;
                    }
                }
                /**
                 *
                 * @param html
                 */
                setHtml(html = null) {
                    if (html = null) {
                        this.removeChildNodes();
                        this.append(html);
                        return this;
                    }
                    else {
                        return this.element.innerHTML;
                    }
                }
                /**
                 *
                 */
                removeChildNodes() {
                    if (this.element instanceof HTMLCollection) {
                        for (let key in this.element) {
                            this.removeChilds(this.element[key], this.element[key].childNodes);
                        }
                    }
                    else {
                        this.removeChilds(this.element, this.element.childNodes);
                    }
                }
                /**
                 *
                 */
                removeChilds(element, childs) {
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                }
                /**
                 *
                 * @param  {any = null}        val [description]
                 * @return {[type]}   [description]
                 */
                val(val = false) {
                    if (val || typeof val == "string") {
                        this.element.value = val;
                        this.attr("value", val);
                        return this;
                    }
                    else {
                        return this.element.value;
                    }
                }
                /**
                 *
                 * @param  {any = null}        val [description]
                 * @return {[type]}   [description]
                 */
                getValue(val = false) {
                    if (val || typeof val == "string") {
                        this.element.value = val;
                        this.attr("value", val);
                        return this;
                    }
                    else {
                        return this.element.value;
                    }
                }
                /**
                 *
                 */
                valAsInt() {
                    return parseInt(this.val());
                }
                /**
                 *
                 * @param  {any = null}        text [description]
                 * @return {[type]}   [description]
                 */
                text(text = false) {
                    if (text) {
                        this.element.innerHtml = text;
                        return this;
                    }
                    else {
                        return this.element.innerHtml;
                    }
                }
                /**
                 *
                 */
                empty() {
                    this.removeChildNodes();
                    return this;
                }
                /**
                 *
                 * @param element
                 */
                remove(element = false) {
                    if (element) {
                        this.getElement().removeChild(element);
                    }
                    else {
                        this.getElement().parentElement.removeChild(this.getElement());
                    }
                }
                /**
                 *
                 */
                getAsObject() {
                    let childs = this.element.childNodes;
                    let obj = new Array();
                    if (childs instanceof NodeList) {
                        for (let key in childs) {
                            if (typeof childs[key].nodeType != "undefined") {
                                switch (childs[key].nodeType) {
                                    case Node.ELEMENT_NODE:
                                        let adapter = new ElementAdapter_2.ElementAdapter(childs[key]);
                                        let auxElement = adapter.get();
                                        let finalObj = {};
                                        let auxObject = auxElement.getAsObject();
                                        finalObj[auxElement.getClassName().toLowerCase()] = auxObject;
                                        if (auxObject.length > 0) {
                                            obj.push(finalObj);
                                        }
                                        break;
                                    case Node.TEXT_NODE:
                                        obj.push(childs[key].nodeValue);
                                        break;
                                }
                            }
                        }
                    }
                    return obj;
                }
                /**
                 *
                 */
                getAsJson() {
                    let objects = this.getAsObject();
                    return JSON.stringify(objects);
                }
            };
            exports_50("ElementManager", ElementManager);
        }
    };
});
System.register("Mvc/View/Html/Dom/Wrappers/HtmlElement", [], function (exports_51, context_51) {
    "use strict";
    var __moduleName = context_51 && context_51.id;
    var HtmlElement;
    return {
        setters: [],
        execute: function () {
            HtmlElement = class HtmlElement {
                /**
                 *
                 * @param tagName
                 */
                constructor() {
                    this.CSS_MANAGER = "Chronos.Dom.CssManager";
                    this.PARENT_MANAGER = "Chronos.Dom.DomManager";
                    this.ELEMENT_MANAGER = "Chronos.Dom.ElementManager";
                    let localDecorator = new Proxy(this, this.getValidator());
                    return localDecorator;
                }
                initialize(args = {}) {
                }
                /**
                 *
                 */
                setElement(element) {
                    this.element = element;
                    return this;
                }
                /**
                 *
                 */
                getElement() {
                    return this.element;
                }
                /**
                 *
                 */
                getCss() {
                    let css = this.getDi().get(this.CSS_MANAGER);
                    css.setElement(this.getElement());
                    return css;
                }
                /**
                 *
                 */
                getElementManager() {
                    let em = this.getDi().get(this.ELEMENT_MANAGER);
                    em.setElement(this.getElement());
                    return em;
                }
                /**
                 *
                 */
                getParentManager() {
                    let pm = this.getDi().get(this.PARENT_MANAGER);
                    pm.setElement(this.getElement());
                    return pm;
                }
                getEventManager() {
                    let em = this.getDi().get("eventManager");
                    em.setElement(this.getElement());
                    return em;
                }
                /**
                 *
                 * @param tagName
                 */
                create(tagName) {
                    this.element = document.createElement(tagName);
                    return this;
                }
                /**
                 * [getClassName description]
                 * @return {[type]} [description]
                 */
                getClassName() {
                    let funcNameRegex = /function (.{1,})\(/;
                    let results = (funcNameRegex).exec(this["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                }
                /**
                 *
                 */
                getChecksum() {
                    let str = this.getClassName() + JSON.stringify(this);
                    return window.btoa(encodeURIComponent(str));
                }
                /**
                 *
                 */
                getValidator() {
                    let validator = {
                        get: function get(obj, prop) {
                            switch (prop) {
                                case "append":
                                    return this.getElementManager().append;
                                case "attr":
                                    return this.getElementManager().attr;
                                case "setAttribute":
                                    return this.getElementManager().setAttribute;
                                case "removeAttribute":
                                    return this.getElementManager().removeAttribute;
                                case "class":
                                    return this.getElementManager().class;
                                case "addClass":
                                    return this.getElementManager().addClass;
                                case "removeClass":
                                    return this.getElementManager().removeClass;
                                case "setId":
                                    return this.getElementManager().setId;
                                case "getId":
                                    return this.getElementManager().getId;
                                case "setRequired":
                                    return this.getElementManager().setRequired;
                                case "getRequired":
                                    return this.getElementManager().getRequired;
                                case "html":
                                    return this.getElementManager().html;
                                case "setHtml":
                                    return this.getElementManager().setHtml;
                                case "setValue":
                                    return this.getElementManager().setValue;
                                case "val":
                                    return this.getElementManager().val;
                                case "getValue":
                                    return this.getElementManager().getValue;
                                case "valAsInt":
                                    return this.getElementManager().valAsInt;
                                case "text":
                                    return this.getElementManager().text;
                                case "empty":
                                    return this.getElementManager().empty;
                                case "remove":
                                    return this.getElementManager().remove;
                                case "getAsObject":
                                    return this.getElementManager().getAsObject;
                                case "getAsJson":
                                    return this.getElementManager().getAsJson;
                                case "getSibilings":
                                    return this.getParentManager().getSiblings;
                                case "getParent":
                                    return this.getParentManager().getParent;
                                case "getChilds":
                                    return this.getParentManager().getChilds;
                                case "click":
                                    return this.getParentManager().click;
                                case "doubleClick":
                                    return this.getParentManager().doubleClick;
                                case "change":
                                    return this.getParentManager().change;
                                case "keypress":
                                    return this.getParentManager().keypress;
                                case "keydown":
                                    return this.getParentManager().keydown;
                                case "keyup":
                                    return this.getParentManager().keyup;
                                case "paste":
                                    return this.getParentManager().paste;
                                case "blur":
                                    return this.getParentManager().blur;
                                case "focus":
                                    return this.getParentManager().focus;
                                case "submit":
                                    return this.getParentManager().submit;
                                case "show":
                                    return this.getCss().show;
                                case "hide":
                                    return this.getCss().hide;
                                case "css":
                                    return this.getCss().css;
                                case "setStyle":
                                    return this.getCss().setStyle;
                                default:
                                    return obj[name];
                            }
                        }
                    };
                    return validator;
                }
                /**
                 *
                 * @param di
                 */
                setDi(di) {
                    this.di = di;
                    return this;
                }
                /**
                 *
                 */
                getDi() {
                    return this.di;
                }
            };
            exports_51("HtmlElement", HtmlElement);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/I", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_52, context_52) {
    "use strict";
    var __moduleName = context_52 && context_52.id;
    var Service_3, HtmlElement_1, I;
    return {
        setters: [
            function (Service_3_1) {
                Service_3 = Service_3_1;
            },
            function (HtmlElement_1_1) {
                HtmlElement_1 = HtmlElement_1_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            I = class I extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("I"));
                    this.setDi(new Service_3.Service);
                    this.initialize(args);
                }
            };
            exports_52("I", I);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/A", ["Mvc/View/Html/Dom/Elements/I", "Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_53, context_53) {
    "use strict";
    var __moduleName = context_53 && context_53.id;
    var I_1, Service_4, HtmlElement_2, A;
    return {
        setters: [
            function (I_1_1) {
                I_1 = I_1_1;
            },
            function (Service_4_1) {
                Service_4 = Service_4_1;
            },
            function (HtmlElement_2_1) {
                HtmlElement_2 = HtmlElement_2_1;
            }
        ],
        execute: function () {
            /**
             *
             */
            A = class A extends HtmlElement_2.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("A"));
                    this.setDi(new Service_4.Service);
                    this.initialize(args);
                }
                /**
                 * [favIcon description]
                 * @return {[type]} [description]
                 */
                favIcon(favIcon) {
                    let icon = new I_1.I()
                        .class(favIcon);
                    this.append(icon.getElement());
                    return this;
                }
                /**
                 * [href description]
                 * @param  {[type]} href [description]
                 * @return {[type]}      [description]
                 */
                href(href) {
                    this.attr("href", href);
                    return this;
                }
            };
            exports_53("A", A);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Abbr", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Di/Service"], function (exports_54, context_54) {
    "use strict";
    var __moduleName = context_54 && context_54.id;
    var HtmlElement_3, Service_5, Abbr;
    return {
        setters: [
            function (HtmlElement_3_1) {
                HtmlElement_3 = HtmlElement_3_1;
            },
            function (Service_5_1) {
                Service_5 = Service_5_1;
            }
        ],
        execute: function () {
            Abbr = class Abbr extends HtmlElement_3.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("ABBR"));
                    this.setDi(new Service_5.Service);
                    this.initialize(args);
                }
            };
            exports_54("Abbr", Abbr);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Address", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Di/Service"], function (exports_55, context_55) {
    "use strict";
    var __moduleName = context_55 && context_55.id;
    var HtmlElement_4, Service_6, Address;
    return {
        setters: [
            function (HtmlElement_4_1) {
                HtmlElement_4 = HtmlElement_4_1;
            },
            function (Service_6_1) {
                Service_6 = Service_6_1;
            }
        ],
        execute: function () {
            Address = class Address extends HtmlElement_4.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("ADDRESS"));
                    this.setDi(new Service_6.Service);
                    this.initialize(args);
                }
            };
            exports_55("Address", Address);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Area", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Di/Service"], function (exports_56, context_56) {
    "use strict";
    var __moduleName = context_56 && context_56.id;
    var HtmlElement_5, Service_7, Area;
    return {
        setters: [
            function (HtmlElement_5_1) {
                HtmlElement_5 = HtmlElement_5_1;
            },
            function (Service_7_1) {
                Service_7 = Service_7_1;
            }
        ],
        execute: function () {
            Area = class Area extends HtmlElement_5.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("AREA"));
                    this.setDi(new Service_7.Service);
                    this.initialize(args);
                }
            };
            exports_56("Area", Area);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Article", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Di/Service"], function (exports_57, context_57) {
    "use strict";
    var __moduleName = context_57 && context_57.id;
    var HtmlElement_6, Service_8, Article;
    return {
        setters: [
            function (HtmlElement_6_1) {
                HtmlElement_6 = HtmlElement_6_1;
            },
            function (Service_8_1) {
                Service_8 = Service_8_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Article = class Article extends HtmlElement_6.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("ARTICLE"));
                    this.setDi(new Service_8.Service);
                    this.initialize(args);
                }
            };
            exports_57("Article", Article);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Aside", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Di/Service"], function (exports_58, context_58) {
    "use strict";
    var __moduleName = context_58 && context_58.id;
    var HtmlElement_7, Service_9, Aside;
    return {
        setters: [
            function (HtmlElement_7_1) {
                HtmlElement_7 = HtmlElement_7_1;
            },
            function (Service_9_1) {
                Service_9 = Service_9_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Aside = class Aside extends HtmlElement_7.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DB"));
                    this.setDi(new Service_9.Service);
                    this.initialize(args);
                }
            };
            exports_58("Aside", Aside);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/B", ["Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_59, context_59) {
    "use strict";
    var __moduleName = context_59 && context_59.id;
    var HtmlElement_8, B;
    return {
        setters: [
            function (HtmlElement_8_1) {
                HtmlElement_8 = HtmlElement_8_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            B = class B extends HtmlElement_8.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("B"));
                }
            };
            exports_59("B", B);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Base", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Di/Service"], function (exports_60, context_60) {
    "use strict";
    var __moduleName = context_60 && context_60.id;
    var HtmlElement_9, Service_10, Base;
    return {
        setters: [
            function (HtmlElement_9_1) {
                HtmlElement_9 = HtmlElement_9_1;
            },
            function (Service_10_1) {
                Service_10 = Service_10_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Base = class Base extends HtmlElement_9.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("BASE"));
                    this.setDi(new Service_10.Service);
                    this.initialize(args);
                }
            };
            exports_60("Base", Base);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Bdi", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Di/Service"], function (exports_61, context_61) {
    "use strict";
    var __moduleName = context_61 && context_61.id;
    var HtmlElement_10, Service_11, Bdi;
    return {
        setters: [
            function (HtmlElement_10_1) {
                HtmlElement_10 = HtmlElement_10_1;
            },
            function (Service_11_1) {
                Service_11 = Service_11_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Bdi = class Bdi extends HtmlElement_10.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("BDI"));
                    this.setDi(new Service_11.Service);
                    this.initialize(args);
                }
            };
            exports_61("Bdi", Bdi);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Bdo", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_62, context_62) {
    "use strict";
    var __moduleName = context_62 && context_62.id;
    var Service_12, HtmlElement_11, Bdo;
    return {
        setters: [
            function (Service_12_1) {
                Service_12 = Service_12_1;
            },
            function (HtmlElement_11_1) {
                HtmlElement_11 = HtmlElement_11_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Bdo = class Bdo extends HtmlElement_11.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("BDO"));
                    this.setDi(new Service_12.Service);
                    this.initialize(args);
                }
            };
            exports_62("Bdo", Bdo);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Blockquote", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Di/Service"], function (exports_63, context_63) {
    "use strict";
    var __moduleName = context_63 && context_63.id;
    var HtmlElement_12, Service_13, Blockquote;
    return {
        setters: [
            function (HtmlElement_12_1) {
                HtmlElement_12 = HtmlElement_12_1;
            },
            function (Service_13_1) {
                Service_13 = Service_13_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Blockquote = class Blockquote extends HtmlElement_12.HtmlElement {
                /**
                 *
                 */
                constructor(args) {
                    super();
                    this.setElement(document.createElement("BLOCKQUOTE"));
                    this.setDi(new Service_13.Service);
                    this.initialize(args);
                }
            };
            exports_63("Blockquote", Blockquote);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Body", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Di/Service"], function (exports_64, context_64) {
    "use strict";
    var __moduleName = context_64 && context_64.id;
    var HtmlElement_13, Service_14, Body;
    return {
        setters: [
            function (HtmlElement_13_1) {
                HtmlElement_13 = HtmlElement_13_1;
            },
            function (Service_14_1) {
                Service_14 = Service_14_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Body = class Body extends HtmlElement_13.HtmlElement {
                constructor(args = {}) {
                    super();
                    this.setElement(document.body);
                    this.setDi(new Service_14.Service);
                    this.initialize(args);
                }
            };
            exports_64("Body", Body);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Br", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_65, context_65) {
    "use strict";
    var __moduleName = context_65 && context_65.id;
    var Service_15, HtmlElement_14, Br;
    return {
        setters: [
            function (Service_15_1) {
                Service_15 = Service_15_1;
            },
            function (HtmlElement_14_1) {
                HtmlElement_14 = HtmlElement_14_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Br = class Br extends HtmlElement_14.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("BR"));
                    this.setDi(new Service_15.Service);
                    this.initialize(args);
                }
            };
            exports_65("Br", Br);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Button", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement", "Mvc/View/Html/Dom/Elements/I"], function (exports_66, context_66) {
    "use strict";
    var __moduleName = context_66 && context_66.id;
    var Service_16, HtmlElement_15, I_2, Button;
    return {
        setters: [
            function (Service_16_1) {
                Service_16 = Service_16_1;
            },
            function (HtmlElement_15_1) {
                HtmlElement_15 = HtmlElement_15_1;
            },
            function (I_2_1) {
                I_2 = I_2_1;
            }
        ],
        execute: function () {
            /**
             *
             */
            Button = class Button extends HtmlElement_15.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("BUTTON"));
                    this.setDi(new Service_16.Service);
                    this.initialize(args);
                }
                /**
                 *
                 * @param
                 * @return
                 */
                type(type) {
                    this.attr("type", type);
                    return this;
                }
                /**
                 *
                 * @return
                 */
                favIcon(favIcon) {
                    let icon = new I_2.I()
                        .class(favIcon);
                    this.append(icon);
                    return this;
                }
                /**
                 *
                 * @return
                 */
                success() {
                    this.addClass("btn btn-success");
                    return this;
                }
                /**
                 *
                 * @return
                 */
                notice() {
                    this.addClass("btn btn-notice");
                    return this;
                }
                /**
                 *
                 * @return
                 */
                default() {
                    this.addClass("btn btn-default");
                    return this;
                }
                /**
                 *
                 * @return
                 */
                primary() {
                    this.addClass("btn btn-primary");
                    return this;
                }
                /**
                 * [warning description]
                 * @return {[type]} [description]
                 */
                warning() {
                    this.addClass("btn btn-warning");
                    return this;
                }
                /**
                 * [danger description]
                 * @return {[type]} [description]
                 */
                danger() {
                    this.addClass("btn btn-danger");
                    return this;
                }
            };
            exports_66("Button", Button);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Canvas", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_67, context_67) {
    "use strict";
    var __moduleName = context_67 && context_67.id;
    var Service_17, HtmlElement_16, Canvas;
    return {
        setters: [
            function (Service_17_1) {
                Service_17 = Service_17_1;
            },
            function (HtmlElement_16_1) {
                HtmlElement_16 = HtmlElement_16_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Canvas = class Canvas extends HtmlElement_16.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("CANVAS"));
                    this.setDi(new Service_17.Service);
                    this.initialize(args);
                }
            };
            exports_67("Canvas", Canvas);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Caption", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_68, context_68) {
    "use strict";
    var __moduleName = context_68 && context_68.id;
    var Service_18, HtmlElement_17, Caption;
    return {
        setters: [
            function (Service_18_1) {
                Service_18 = Service_18_1;
            },
            function (HtmlElement_17_1) {
                HtmlElement_17 = HtmlElement_17_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Caption = class Caption extends HtmlElement_17.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("CAPTION"));
                    this.setDi(new Service_18.Service);
                    this.initialize(args);
                }
            };
            exports_68("Caption", Caption);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Cite", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_69, context_69) {
    "use strict";
    var __moduleName = context_69 && context_69.id;
    var Service_19, HtmlElement_18, Cite;
    return {
        setters: [
            function (Service_19_1) {
                Service_19 = Service_19_1;
            },
            function (HtmlElement_18_1) {
                HtmlElement_18 = HtmlElement_18_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Cite = class Cite extends HtmlElement_18.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("CITE"));
                    this.setDi(new Service_19.Service);
                    this.initialize(args);
                }
            };
            exports_69("Cite", Cite);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Code", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_70, context_70) {
    "use strict";
    var __moduleName = context_70 && context_70.id;
    var Service_20, HtmlElement_19, Code;
    return {
        setters: [
            function (Service_20_1) {
                Service_20 = Service_20_1;
            },
            function (HtmlElement_19_1) {
                HtmlElement_19 = HtmlElement_19_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Code = class Code extends HtmlElement_19.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("CODE"));
                    this.setDi(new Service_20.Service);
                    this.initialize(args);
                }
            };
            exports_70("Code", Code);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Col", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_71, context_71) {
    "use strict";
    var __moduleName = context_71 && context_71.id;
    var Service_21, HtmlElement_20, Col;
    return {
        setters: [
            function (Service_21_1) {
                Service_21 = Service_21_1;
            },
            function (HtmlElement_20_1) {
                HtmlElement_20 = HtmlElement_20_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Col = class Col extends HtmlElement_20.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("COL"));
                    this.setDi(new Service_21.Service);
                    this.initialize(args);
                }
            };
            exports_71("Col", Col);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/ColGroup", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_72, context_72) {
    "use strict";
    var __moduleName = context_72 && context_72.id;
    var Service_22, HtmlElement_21, ColGroup;
    return {
        setters: [
            function (Service_22_1) {
                Service_22 = Service_22_1;
            },
            function (HtmlElement_21_1) {
                HtmlElement_21 = HtmlElement_21_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            ColGroup = class ColGroup extends HtmlElement_21.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("COLGROUP"));
                    this.setDi(new Service_22.Service);
                    this.initialize(args);
                }
            };
            exports_72("ColGroup", ColGroup);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Datalist", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_73, context_73) {
    "use strict";
    var __moduleName = context_73 && context_73.id;
    var Service_23, HtmlElement_22, Datalist;
    return {
        setters: [
            function (Service_23_1) {
                Service_23 = Service_23_1;
            },
            function (HtmlElement_22_1) {
                HtmlElement_22 = HtmlElement_22_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Datalist = class Datalist extends HtmlElement_22.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DATALIST"));
                    this.setDi(new Service_23.Service);
                    this.initialize(args);
                }
            };
            exports_73("Datalist", Datalist);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Db", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_74, context_74) {
    "use strict";
    var __moduleName = context_74 && context_74.id;
    var Service_24, HtmlElement_23, Db;
    return {
        setters: [
            function (Service_24_1) {
                Service_24 = Service_24_1;
            },
            function (HtmlElement_23_1) {
                HtmlElement_23 = HtmlElement_23_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Db = class Db extends HtmlElement_23.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DB"));
                    this.setDi(new Service_24.Service);
                    this.initialize(args);
                }
            };
            exports_74("Db", Db);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Del", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_75, context_75) {
    "use strict";
    var __moduleName = context_75 && context_75.id;
    var Service_25, HtmlElement_24, Del;
    return {
        setters: [
            function (Service_25_1) {
                Service_25 = Service_25_1;
            },
            function (HtmlElement_24_1) {
                HtmlElement_24 = HtmlElement_24_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Del = class Del extends HtmlElement_24.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("BR"));
                    this.setDi(new Service_25.Service);
                    this.initialize(args);
                }
            };
            exports_75("Del", Del);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Details", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_76, context_76) {
    "use strict";
    var __moduleName = context_76 && context_76.id;
    var Service_26, HtmlElement_25, Details;
    return {
        setters: [
            function (Service_26_1) {
                Service_26 = Service_26_1;
            },
            function (HtmlElement_25_1) {
                HtmlElement_25 = HtmlElement_25_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Details = class Details extends HtmlElement_25.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DETAILS"));
                    this.setDi(new Service_26.Service);
                    this.initialize(args);
                }
            };
            exports_76("Details", Details);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Dfn", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_77, context_77) {
    "use strict";
    var __moduleName = context_77 && context_77.id;
    var Service_27, HtmlElement_26, Dfn;
    return {
        setters: [
            function (Service_27_1) {
                Service_27 = Service_27_1;
            },
            function (HtmlElement_26_1) {
                HtmlElement_26 = HtmlElement_26_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Dfn = class Dfn extends HtmlElement_26.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DFN"));
                    this.setDi(new Service_27.Service);
                    this.initialize(args);
                }
            };
            exports_77("Dfn", Dfn);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Dialog", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_78, context_78) {
    "use strict";
    var __moduleName = context_78 && context_78.id;
    var Service_28, HtmlElement_27, Dialog;
    return {
        setters: [
            function (Service_28_1) {
                Service_28 = Service_28_1;
            },
            function (HtmlElement_27_1) {
                HtmlElement_27 = HtmlElement_27_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Dialog = class Dialog extends HtmlElement_27.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DIALOG"));
                    this.setDi(new Service_28.Service);
                    this.initialize(args);
                }
            };
            exports_78("Dialog", Dialog);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Div", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_79, context_79) {
    "use strict";
    var __moduleName = context_79 && context_79.id;
    var Service_29, HtmlElement_28, Div;
    return {
        setters: [
            function (Service_29_1) {
                Service_29 = Service_29_1;
            },
            function (HtmlElement_28_1) {
                HtmlElement_28 = HtmlElement_28_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Div = class Div extends HtmlElement_28.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DIV"));
                    this.setDi(new Service_29.Service);
                    this.initialize(args);
                }
            };
            exports_79("Div", Div);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Dl", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_80, context_80) {
    "use strict";
    var __moduleName = context_80 && context_80.id;
    var Service_30, HtmlElement_29, Dl;
    return {
        setters: [
            function (Service_30_1) {
                Service_30 = Service_30_1;
            },
            function (HtmlElement_29_1) {
                HtmlElement_29 = HtmlElement_29_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Dl = class Dl extends HtmlElement_29.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DL"));
                    this.setDi(new Service_30.Service);
                    this.initialize(args);
                }
            };
            exports_80("Dl", Dl);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Dt", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_81, context_81) {
    "use strict";
    var __moduleName = context_81 && context_81.id;
    var Service_31, HtmlElement_30, Dt;
    return {
        setters: [
            function (Service_31_1) {
                Service_31 = Service_31_1;
            },
            function (HtmlElement_30_1) {
                HtmlElement_30 = HtmlElement_30_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Dt = class Dt extends HtmlElement_30.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DT"));
                    this.setDi(new Service_31.Service);
                    this.initialize(args);
                }
            };
            exports_81("Dt", Dt);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Em", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_82, context_82) {
    "use strict";
    var __moduleName = context_82 && context_82.id;
    var Service_32, HtmlElement_31, Em;
    return {
        setters: [
            function (Service_32_1) {
                Service_32 = Service_32_1;
            },
            function (HtmlElement_31_1) {
                HtmlElement_31 = HtmlElement_31_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Em = class Em extends HtmlElement_31.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("EM"));
                    this.setDi(new Service_32.Service);
                    this.initialize(args);
                }
            };
            exports_82("Em", Em);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Embed", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_83, context_83) {
    "use strict";
    var __moduleName = context_83 && context_83.id;
    var Service_33, HtmlElement_32, Embed;
    return {
        setters: [
            function (Service_33_1) {
                Service_33 = Service_33_1;
            },
            function (HtmlElement_32_1) {
                HtmlElement_32 = HtmlElement_32_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Embed = class Embed extends HtmlElement_32.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("EMBED"));
                    this.setDi(new Service_33.Service);
                    this.initialize(args);
                }
            };
            exports_83("Embed", Embed);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Fieldset", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_84, context_84) {
    "use strict";
    var __moduleName = context_84 && context_84.id;
    var Service_34, HtmlElement_33, Fieldset;
    return {
        setters: [
            function (Service_34_1) {
                Service_34 = Service_34_1;
            },
            function (HtmlElement_33_1) {
                HtmlElement_33 = HtmlElement_33_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Fieldset = class Fieldset extends HtmlElement_33.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("FIELDSET"));
                    this.setDi(new Service_34.Service);
                    this.initialize(args);
                }
            };
            exports_84("Fieldset", Fieldset);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Figcaption", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_85, context_85) {
    "use strict";
    var __moduleName = context_85 && context_85.id;
    var Service_35, HtmlElement_34, Figcaption;
    return {
        setters: [
            function (Service_35_1) {
                Service_35 = Service_35_1;
            },
            function (HtmlElement_34_1) {
                HtmlElement_34 = HtmlElement_34_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Figcaption = class Figcaption extends HtmlElement_34.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("FIGCAPTION"));
                    this.setDi(new Service_35.Service);
                    this.initialize(args);
                }
            };
            exports_85("Figcaption", Figcaption);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Figure", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_86, context_86) {
    "use strict";
    var __moduleName = context_86 && context_86.id;
    var Service_36, HtmlElement_35, Figure;
    return {
        setters: [
            function (Service_36_1) {
                Service_36 = Service_36_1;
            },
            function (HtmlElement_35_1) {
                HtmlElement_35 = HtmlElement_35_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Figure = class Figure extends HtmlElement_35.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("FIGURE"));
                    this.setDi(new Service_36.Service);
                    this.initialize(args);
                }
            };
            exports_86("Figure", Figure);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Footer", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_87, context_87) {
    "use strict";
    var __moduleName = context_87 && context_87.id;
    var Service_37, HtmlElement_36, Footer;
    return {
        setters: [
            function (Service_37_1) {
                Service_37 = Service_37_1;
            },
            function (HtmlElement_36_1) {
                HtmlElement_36 = HtmlElement_36_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Footer = class Footer extends HtmlElement_36.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("FOOTER"));
                    this.setDi(new Service_37.Service);
                    this.initialize(args);
                }
            };
            exports_87("Footer", Footer);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Form", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement", "Mvc/View/Html/Dom/Adapter/ElementAdapter"], function (exports_88, context_88) {
    "use strict";
    var __moduleName = context_88 && context_88.id;
    var Service_38, HtmlElement_37, ElementAdapter_3, Form;
    return {
        setters: [
            function (Service_38_1) {
                Service_38 = Service_38_1;
            },
            function (HtmlElement_37_1) {
                HtmlElement_37 = HtmlElement_37_1;
            },
            function (ElementAdapter_3_1) {
                ElementAdapter_3 = ElementAdapter_3_1;
            }
        ],
        execute: function () {
            /**
             *
             * @type
             */
            Form = class Form extends HtmlElement_37.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    /**
                     *
                     */
                    this.invalidElements = new Array;
                    this.setElement(document.createElement("FORM"));
                    this.setDi(new Service_38.Service);
                    this.initialize(args);
                }
                /**
                 * @param {Function} fn
                 */
                submit(fn) {
                    this.getElement().addEventListener("submit", function (event) {
                        let returnCallback = fn.bind(this)(event);
                        if (returnCallback == false || typeof returnCallback == "undefined") {
                            event.preventDefault();
                        }
                        return true;
                    }.bind(this));
                }
                /**
                 *
                 */
                getInvalidElements() {
                    return this.invalidElements;
                }
                /**
                 *
                 */
                validate(fn) {
                    let elements = this.getFormElements();
                    this.invalidElements = new Array;
                    if (elements.length > 0) {
                        for (let item of elements) {
                            if (item.val() == "") {
                                this.invalidElements.push(item);
                            }
                        }
                        if (this.invalidElements.length == 0) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    return false;
                }
                /**
                 *
                 */
                getFormElements() {
                    let northwindElements = new Array;
                    let elements = this.getElement().elements;
                    for (let item of elements) {
                        let aux = new ElementAdapter_3.ElementAdapter(item);
                        let element = aux.get();
                        if (element != false) {
                            northwindElements.push(element);
                        }
                    }
                    return northwindElements;
                }
                /**
                 *
                 */
                setAutoComplete(data) {
                    if (data) {
                        this.attr("autocomplete", "on");
                    }
                    else {
                        this.attr("autocomplete", "off");
                    }
                    return this;
                }
                /**
                 *
                 */
                getAutoComplete() {
                    return this.attr("autocomplete");
                }
            };
            exports_88("Form", Form);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/H1", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_89, context_89) {
    "use strict";
    var __moduleName = context_89 && context_89.id;
    var Service_39, HtmlElement_38, H1;
    return {
        setters: [
            function (Service_39_1) {
                Service_39 = Service_39_1;
            },
            function (HtmlElement_38_1) {
                HtmlElement_38 = HtmlElement_38_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            H1 = class H1 extends HtmlElement_38.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("H1"));
                    this.setDi(new Service_39.Service);
                    this.initialize(args);
                }
            };
            exports_89("H1", H1);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/H2", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_90, context_90) {
    "use strict";
    var __moduleName = context_90 && context_90.id;
    var Service_40, HtmlElement_39, H2;
    return {
        setters: [
            function (Service_40_1) {
                Service_40 = Service_40_1;
            },
            function (HtmlElement_39_1) {
                HtmlElement_39 = HtmlElement_39_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            H2 = class H2 extends HtmlElement_39.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("H2"));
                    this.setDi(new Service_40.Service);
                    this.initialize(args);
                }
            };
            exports_90("H2", H2);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/H3", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_91, context_91) {
    "use strict";
    var __moduleName = context_91 && context_91.id;
    var Service_41, HtmlElement_40, H3;
    return {
        setters: [
            function (Service_41_1) {
                Service_41 = Service_41_1;
            },
            function (HtmlElement_40_1) {
                HtmlElement_40 = HtmlElement_40_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            H3 = class H3 extends HtmlElement_40.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("H3"));
                    this.setDi(new Service_41.Service);
                    this.initialize(args);
                }
            };
            exports_91("H3", H3);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/H4", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_92, context_92) {
    "use strict";
    var __moduleName = context_92 && context_92.id;
    var Service_42, HtmlElement_41, H4;
    return {
        setters: [
            function (Service_42_1) {
                Service_42 = Service_42_1;
            },
            function (HtmlElement_41_1) {
                HtmlElement_41 = HtmlElement_41_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            H4 = class H4 extends HtmlElement_41.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("H4"));
                    this.setDi(new Service_42.Service);
                    this.initialize(args);
                }
            };
            exports_92("H4", H4);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/H5", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_93, context_93) {
    "use strict";
    var __moduleName = context_93 && context_93.id;
    var Service_43, HtmlElement_42, H5;
    return {
        setters: [
            function (Service_43_1) {
                Service_43 = Service_43_1;
            },
            function (HtmlElement_42_1) {
                HtmlElement_42 = HtmlElement_42_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            H5 = class H5 extends HtmlElement_42.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("H5"));
                    this.setDi(new Service_43.Service);
                    this.initialize(args);
                }
            };
            exports_93("H5", H5);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/H6", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_94, context_94) {
    "use strict";
    var __moduleName = context_94 && context_94.id;
    var Service_44, HtmlElement_43, H6;
    return {
        setters: [
            function (Service_44_1) {
                Service_44 = Service_44_1;
            },
            function (HtmlElement_43_1) {
                HtmlElement_43 = HtmlElement_43_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            H6 = class H6 extends HtmlElement_43.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("BR"));
                    this.setDi(new Service_44.Service);
                    this.initialize(args);
                }
            };
            exports_94("H6", H6);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Head", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_95, context_95) {
    "use strict";
    var __moduleName = context_95 && context_95.id;
    var Service_45, HtmlElement_44, Head;
    return {
        setters: [
            function (Service_45_1) {
                Service_45 = Service_45_1;
            },
            function (HtmlElement_44_1) {
                HtmlElement_44 = HtmlElement_44_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Head = class Head extends HtmlElement_44.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("HEAD"));
                    this.setDi(new Service_45.Service);
                    this.initialize(args);
                }
            };
            exports_95("Head", Head);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Header", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_96, context_96) {
    "use strict";
    var __moduleName = context_96 && context_96.id;
    var Service_46, HtmlElement_45, Header;
    return {
        setters: [
            function (Service_46_1) {
                Service_46 = Service_46_1;
            },
            function (HtmlElement_45_1) {
                HtmlElement_45 = HtmlElement_45_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Header = class Header extends HtmlElement_45.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("HEADER"));
                    this.setDi(new Service_46.Service);
                    this.initialize(args);
                }
            };
            exports_96("Header", Header);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Iframe", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_97, context_97) {
    "use strict";
    var __moduleName = context_97 && context_97.id;
    var Service_47, HtmlElement_46, Iframe;
    return {
        setters: [
            function (Service_47_1) {
                Service_47 = Service_47_1;
            },
            function (HtmlElement_46_1) {
                HtmlElement_46 = HtmlElement_46_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Iframe = class Iframe extends HtmlElement_46.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("IFRAME"));
                    this.setDi(new Service_47.Service);
                    this.initialize(args);
                }
            };
            exports_97("Iframe", Iframe);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Img", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_98, context_98) {
    "use strict";
    var __moduleName = context_98 && context_98.id;
    var Service_48, HtmlElement_47, Img;
    return {
        setters: [
            function (Service_48_1) {
                Service_48 = Service_48_1;
            },
            function (HtmlElement_47_1) {
                HtmlElement_47 = HtmlElement_47_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Img = class Img extends HtmlElement_47.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("IMG"));
                    this.setDi(new Service_48.Service);
                    this.initialize(args);
                }
                width(width) {
                    this.getElement().style.width = width;
                    return this;
                }
                height(height) {
                    this.getElement().style.width = height;
                    return this;
                }
                src(src) {
                    this.attr("src", src);
                    return this;
                }
            };
            exports_98("Img", Img);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/forms/FormTag", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Mvc/View/Html/Dom/Elements/Input"], function (exports_99, context_99) {
    "use strict";
    var __moduleName = context_99 && context_99.id;
    var HtmlElement_48, Input_1, FormTag;
    return {
        setters: [
            function (HtmlElement_48_1) {
                HtmlElement_48 = HtmlElement_48_1;
            },
            function (Input_1_1) {
                Input_1 = Input_1_1;
            }
        ],
        execute: function () {
            FormTag = class FormTag extends HtmlElement_48.HtmlElement {
                /**
                 * Set form element property readonly
                 * @param {Boolean} readOnly
                 */
                setReadOnly(readOnly) {
                    this.getElement().readOnly = readOnly;
                    return this;
                }
                /**
                 * Get form read only
                 */
                getReadOnly() {
                    return this.getElement().readOnly;
                }
                /**
                 * Set disabled
                 * @param {Boolean} disabled
                 */
                setDisabled(disabled) {
                    this.getElement().disabled = disabled;
                    return this;
                }
                getDisabled() {
                    return this.getElement().disabled;
                }
                setSize(size) {
                    this.attr("size", size);
                    return this;
                }
                getSize() {
                    return this.attr("size");
                }
                setMaxLength(max) {
                    this.attr("maxlength", max);
                    return this;
                }
                getMaxLength() {
                    return this.attr("maxlength");
                }
                setAutoFocus(data) {
                    this.getElement().autofocus = data;
                    return this;
                }
                getAutoFocus() {
                    return this.getElement().autofocus;
                }
                setMin(min) {
                    this.attr("min", min);
                    return this;
                }
                getMin() {
                    return parseInt(this.attr("min"));
                }
                setMax(max) {
                    this.attr("max", max);
                    return this;
                }
                getMax() {
                    return parseInt(this.attr("max"));
                }
                /**
                 *
                 */
                setAlt(alt) {
                    this.attr("alt", alt);
                    return this;
                }
                /**
                 *
                 */
                getAlt() {
                    return this.attr("alt");
                }
                /**
                 *
                 */
                setPlaceholder(placeholder) {
                    this.attr("placeholder", placeholder);
                    return this;
                }
                /**
                 *
                 */
                getPlaceholder() {
                    return this.attr("placeholder");
                }
                /**
                 *
                 */
                setTitle(title) {
                    this.attr("title", title);
                    return this;
                }
                /**
                 *
                 */
                getTitle() {
                    return this.attr("title");
                }
                /**
                 *
                 */
                setPattern(pattern) {
                    switch (pattern) {
                        case Input_1.Input.NUMBERS:
                            this.attr("pattern", "[0-9]");
                            break;
                        case Input_1.Input.TEXT:
                            this.attr("pattern", "[A-Za-z]{3}");
                            break;
                        case Input_1.Input.NO_SPECIAL_CHARACTERS:
                            this.attr("pattern", "{3}");
                            break;
                        case Input_1.Input.NUMBERS_NO_SPECIAL_CHARACTERS:
                            this.attr("pattern", "[0-9]{3}");
                            break;
                        case Input_1.Input.TEXT_NO_SPECIAL_CHARACTERS:
                            this.attr("pattern", "[A-Za-z]{3}");
                            break;
                        default:
                            this.attr("pattern", pattern);
                            break;
                    }
                    return this;
                }
                /**
                 *
                 */
                getPattern() {
                    return this.attr("pattern");
                }
                /**
                 *
                 */
                setName(name) {
                    this.attr("name", name);
                    return this;
                }
                /**
                 *
                 */
                getName() {
                    return this.attr("name");
                }
                /**
                 *
                 */
                setStep(num) {
                    this.attr("step", num);
                    return this;
                }
                /**
                 *
                 */
                getStep() {
                    return this.attr("step");
                }
                /**
                 *
                 */
                validate(fn = false) {
                    if (this.val() == "" || typeof this.val() == "undefined") {
                        return false;
                    }
                }
                isChecked() {
                    return this.getElement().checked;
                }
                check() {
                    this.getElement().checked = true;
                    return this;
                }
                unCheck() {
                    this.getElement().checked = false;
                    return this;
                }
            };
            exports_99("FormTag", FormTag);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Input", ["Di/Service", "Mvc/View/Html/Dom/Elements/forms/FormTag"], function (exports_100, context_100) {
    "use strict";
    var __moduleName = context_100 && context_100.id;
    var Service_49, FormTag_1, Input;
    return {
        setters: [
            function (Service_49_1) {
                Service_49 = Service_49_1;
            },
            function (FormTag_1_1) {
                FormTag_1 = FormTag_1_1;
            }
        ],
        execute: function () {
            /**
             *
             * @type
             */
            Input = class Input extends FormTag_1.FormTag {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("INPUT"));
                    this.setDi(new Service_49.Service);
                    this.initialize(args);
                }
                /**
                 * [type description]
                 * @param  {[type]} type [description]
                 * @return {[type]}      [description]
                 */
                type(type) {
                    this.attr("type", type);
                    return this;
                }
                /**
                 *
                 */
                setText() {
                    this.attr("type", "text");
                    return this;
                }
                /**
                 *
                 */
                setHidden() {
                    this.attr("type", "hidden");
                    return this;
                }
                /**
                 *
                 */
                setNumber() {
                    this.attr("type", "number");
                    return this;
                }
                /**
                 *
                 */
                setDate() {
                    this.attr("type", "number");
                    return this;
                }
                /**
                 *
                 */
                setFile() {
                    this.attr("type", "file");
                    return this;
                }
            };
            Input.NUMBERS = 0;
            Input.TEXT = 1;
            Input.NO_SPECIAL_CHARACTERS = 2;
            Input.TEXT_NO_SPECIAL_CHARACTERS = 3;
            Input.NUMBERS_NO_SPECIAL_CHARACTERS = 4;
            exports_100("Input", Input);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Ins", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_101, context_101) {
    "use strict";
    var __moduleName = context_101 && context_101.id;
    var Service_50, HtmlElement_49, Ins;
    return {
        setters: [
            function (Service_50_1) {
                Service_50 = Service_50_1;
            },
            function (HtmlElement_49_1) {
                HtmlElement_49 = HtmlElement_49_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Ins = class Ins extends HtmlElement_49.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("INS"));
                    this.setDi(new Service_50.Service);
                    this.initialize(args);
                }
            };
            exports_101("Ins", Ins);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Kbd", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_102, context_102) {
    "use strict";
    var __moduleName = context_102 && context_102.id;
    var Service_51, HtmlElement_50, Kbd;
    return {
        setters: [
            function (Service_51_1) {
                Service_51 = Service_51_1;
            },
            function (HtmlElement_50_1) {
                HtmlElement_50 = HtmlElement_50_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Kbd = class Kbd extends HtmlElement_50.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("KBD"));
                    this.setDi(new Service_51.Service);
                    this.initialize(args);
                }
            };
            exports_102("Kbd", Kbd);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Keygen", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_103, context_103) {
    "use strict";
    var __moduleName = context_103 && context_103.id;
    var Service_52, HtmlElement_51, Keygen;
    return {
        setters: [
            function (Service_52_1) {
                Service_52 = Service_52_1;
            },
            function (HtmlElement_51_1) {
                HtmlElement_51 = HtmlElement_51_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Keygen = class Keygen extends HtmlElement_51.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("KEYGEN"));
                    this.setDi(new Service_52.Service);
                    this.initialize(args);
                }
            };
            exports_103("Keygen", Keygen);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Label", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_104, context_104) {
    "use strict";
    var __moduleName = context_104 && context_104.id;
    var Service_53, HtmlElement_52, Label;
    return {
        setters: [
            function (Service_53_1) {
                Service_53 = Service_53_1;
            },
            function (HtmlElement_52_1) {
                HtmlElement_52 = HtmlElement_52_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Label = class Label extends HtmlElement_52.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("LABEL"));
                    this.setDi(new Service_53.Service);
                    this.initialize(args);
                }
            };
            exports_104("Label", Label);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Leyend", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_105, context_105) {
    "use strict";
    var __moduleName = context_105 && context_105.id;
    var Service_54, HtmlElement_53, Leyend;
    return {
        setters: [
            function (Service_54_1) {
                Service_54 = Service_54_1;
            },
            function (HtmlElement_53_1) {
                HtmlElement_53 = HtmlElement_53_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Leyend = class Leyend extends HtmlElement_53.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("LEYEND"));
                    this.setDi(new Service_54.Service);
                    this.initialize(args);
                }
            };
            exports_105("Leyend", Leyend);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Li", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_106, context_106) {
    "use strict";
    var __moduleName = context_106 && context_106.id;
    var Service_55, HtmlElement_54, Li;
    return {
        setters: [
            function (Service_55_1) {
                Service_55 = Service_55_1;
            },
            function (HtmlElement_54_1) {
                HtmlElement_54 = HtmlElement_54_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Li = class Li extends HtmlElement_54.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("LI"));
                    this.setDi(new Service_55.Service);
                    this.initialize(args);
                }
            };
            exports_106("Li", Li);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Link", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_107, context_107) {
    "use strict";
    var __moduleName = context_107 && context_107.id;
    var Service_56, HtmlElement_55, Link;
    return {
        setters: [
            function (Service_56_1) {
                Service_56 = Service_56_1;
            },
            function (HtmlElement_55_1) {
                HtmlElement_55 = HtmlElement_55_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Link = class Link extends HtmlElement_55.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("LINK"));
                    this.setDi(new Service_56.Service);
                    this.initialize(args);
                }
            };
            exports_107("Link", Link);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Main", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_108, context_108) {
    "use strict";
    var __moduleName = context_108 && context_108.id;
    var Service_57, HtmlElement_56, Main;
    return {
        setters: [
            function (Service_57_1) {
                Service_57 = Service_57_1;
            },
            function (HtmlElement_56_1) {
                HtmlElement_56 = HtmlElement_56_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Main = class Main extends HtmlElement_56.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("MAIN"));
                    this.setDi(new Service_57.Service);
                    this.initialize(args);
                }
            };
            exports_108("Main", Main);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Menu", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_109, context_109) {
    "use strict";
    var __moduleName = context_109 && context_109.id;
    var Service_58, HtmlElement_57, Menu;
    return {
        setters: [
            function (Service_58_1) {
                Service_58 = Service_58_1;
            },
            function (HtmlElement_57_1) {
                HtmlElement_57 = HtmlElement_57_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Menu = class Menu extends HtmlElement_57.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("MENU"));
                    this.setDi(new Service_58.Service);
                    this.initialize(args);
                }
            };
            exports_109("Menu", Menu);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Menuitem", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_110, context_110) {
    "use strict";
    var __moduleName = context_110 && context_110.id;
    var Service_59, HtmlElement_58, Menuitem;
    return {
        setters: [
            function (Service_59_1) {
                Service_59 = Service_59_1;
            },
            function (HtmlElement_58_1) {
                HtmlElement_58 = HtmlElement_58_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Menuitem = class Menuitem extends HtmlElement_58.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("MENUITEM"));
                    this.setDi(new Service_59.Service);
                    this.initialize(args);
                }
            };
            exports_110("Menuitem", Menuitem);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Meta", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_111, context_111) {
    "use strict";
    var __moduleName = context_111 && context_111.id;
    var Service_60, HtmlElement_59, Meta;
    return {
        setters: [
            function (Service_60_1) {
                Service_60 = Service_60_1;
            },
            function (HtmlElement_59_1) {
                HtmlElement_59 = HtmlElement_59_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Meta = class Meta extends HtmlElement_59.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("META"));
                    this.setDi(new Service_60.Service);
                    this.initialize(args);
                }
            };
            exports_111("Meta", Meta);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Meter", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_112, context_112) {
    "use strict";
    var __moduleName = context_112 && context_112.id;
    var Service_61, HtmlElement_60, Meter;
    return {
        setters: [
            function (Service_61_1) {
                Service_61 = Service_61_1;
            },
            function (HtmlElement_60_1) {
                HtmlElement_60 = HtmlElement_60_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Meter = class Meter extends HtmlElement_60.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("METER"));
                    this.setDi(new Service_61.Service);
                    this.initialize(args);
                }
            };
            exports_112("Meter", Meter);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Nav", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_113, context_113) {
    "use strict";
    var __moduleName = context_113 && context_113.id;
    var Service_62, HtmlElement_61, Nav;
    return {
        setters: [
            function (Service_62_1) {
                Service_62 = Service_62_1;
            },
            function (HtmlElement_61_1) {
                HtmlElement_61 = HtmlElement_61_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Nav = class Nav extends HtmlElement_61.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("NAV"));
                    this.setDi(new Service_62.Service);
                    this.initialize(args);
                }
            };
            exports_113("Nav", Nav);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Noscrip", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_114, context_114) {
    "use strict";
    var __moduleName = context_114 && context_114.id;
    var Service_63, HtmlElement_62, Noscrip;
    return {
        setters: [
            function (Service_63_1) {
                Service_63 = Service_63_1;
            },
            function (HtmlElement_62_1) {
                HtmlElement_62 = HtmlElement_62_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Noscrip = class Noscrip extends HtmlElement_62.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("NOSCRIP"));
                    this.setDi(new Service_63.Service);
                    this.initialize(args);
                }
            };
            exports_114("Noscrip", Noscrip);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Obj", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_115, context_115) {
    "use strict";
    var __moduleName = context_115 && context_115.id;
    var Service_64, HtmlElement_63, Obj;
    return {
        setters: [
            function (Service_64_1) {
                Service_64 = Service_64_1;
            },
            function (HtmlElement_63_1) {
                HtmlElement_63 = HtmlElement_63_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Obj = class Obj extends HtmlElement_63.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("OBJ"));
                    this.setDi(new Service_64.Service);
                    this.initialize(args);
                }
            };
            exports_115("Obj", Obj);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Ol", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_116, context_116) {
    "use strict";
    var __moduleName = context_116 && context_116.id;
    var Service_65, HtmlElement_64, Ol;
    return {
        setters: [
            function (Service_65_1) {
                Service_65 = Service_65_1;
            },
            function (HtmlElement_64_1) {
                HtmlElement_64 = HtmlElement_64_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Ol = class Ol extends HtmlElement_64.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("OL"));
                    this.setDi(new Service_65.Service);
                    this.initialize(args);
                }
            };
            exports_116("Ol", Ol);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Optgroup", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_117, context_117) {
    "use strict";
    var __moduleName = context_117 && context_117.id;
    var Service_66, HtmlElement_65, Optgroup;
    return {
        setters: [
            function (Service_66_1) {
                Service_66 = Service_66_1;
            },
            function (HtmlElement_65_1) {
                HtmlElement_65 = HtmlElement_65_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Optgroup = class Optgroup extends HtmlElement_65.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("OPTGROUP"));
                    this.setDi(new Service_66.Service);
                    this.initialize(args);
                }
            };
            exports_117("Optgroup", Optgroup);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/P", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_118, context_118) {
    "use strict";
    var __moduleName = context_118 && context_118.id;
    var Service_67, HtmlElement_66, P;
    return {
        setters: [
            function (Service_67_1) {
                Service_67 = Service_67_1;
            },
            function (HtmlElement_66_1) {
                HtmlElement_66 = HtmlElement_66_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            P = class P extends HtmlElement_66.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("P"));
                    this.setDi(new Service_67.Service);
                    this.initialize(args);
                }
            };
            exports_118("P", P);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Param", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_119, context_119) {
    "use strict";
    var __moduleName = context_119 && context_119.id;
    var Service_68, HtmlElement_67, Param;
    return {
        setters: [
            function (Service_68_1) {
                Service_68 = Service_68_1;
            },
            function (HtmlElement_67_1) {
                HtmlElement_67 = HtmlElement_67_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Param = class Param extends HtmlElement_67.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("PARAM"));
                    this.setDi(new Service_68.Service);
                    this.initialize(args);
                }
            };
            exports_119("Param", Param);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Pre", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_120, context_120) {
    "use strict";
    var __moduleName = context_120 && context_120.id;
    var Service_69, HtmlElement_68, Pre;
    return {
        setters: [
            function (Service_69_1) {
                Service_69 = Service_69_1;
            },
            function (HtmlElement_68_1) {
                HtmlElement_68 = HtmlElement_68_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Pre = class Pre extends HtmlElement_68.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("PRE"));
                    this.setDi(new Service_69.Service);
                    this.initialize(args);
                }
            };
            exports_120("Pre", Pre);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Progress", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_121, context_121) {
    "use strict";
    var __moduleName = context_121 && context_121.id;
    var Service_70, HtmlElement_69, Progress;
    return {
        setters: [
            function (Service_70_1) {
                Service_70 = Service_70_1;
            },
            function (HtmlElement_69_1) {
                HtmlElement_69 = HtmlElement_69_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Progress = class Progress extends HtmlElement_69.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("PROGRESS"));
                    this.setDi(new Service_70.Service);
                    this.initialize(args);
                }
            };
            exports_121("Progress", Progress);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Q", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_122, context_122) {
    "use strict";
    var __moduleName = context_122 && context_122.id;
    var Service_71, HtmlElement_70, Q;
    return {
        setters: [
            function (Service_71_1) {
                Service_71 = Service_71_1;
            },
            function (HtmlElement_70_1) {
                HtmlElement_70 = HtmlElement_70_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Q = class Q extends HtmlElement_70.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("Q"));
                    this.setDi(new Service_71.Service);
                    this.initialize(args);
                }
            };
            exports_122("Q", Q);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Rp", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_123, context_123) {
    "use strict";
    var __moduleName = context_123 && context_123.id;
    var Service_72, HtmlElement_71, Rp;
    return {
        setters: [
            function (Service_72_1) {
                Service_72 = Service_72_1;
            },
            function (HtmlElement_71_1) {
                HtmlElement_71 = HtmlElement_71_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Rp = class Rp extends HtmlElement_71.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("RP"));
                    this.setDi(new Service_72.Service);
                    this.initialize(args);
                }
            };
            exports_123("Rp", Rp);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Rt", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_124, context_124) {
    "use strict";
    var __moduleName = context_124 && context_124.id;
    var Service_73, HtmlElement_72, Rt;
    return {
        setters: [
            function (Service_73_1) {
                Service_73 = Service_73_1;
            },
            function (HtmlElement_72_1) {
                HtmlElement_72 = HtmlElement_72_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Rt = class Rt extends HtmlElement_72.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("RT"));
                    this.setDi(new Service_73.Service);
                    this.initialize(args);
                }
            };
            exports_124("Rt", Rt);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Ruby", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_125, context_125) {
    "use strict";
    var __moduleName = context_125 && context_125.id;
    var Service_74, HtmlElement_73, Ruby;
    return {
        setters: [
            function (Service_74_1) {
                Service_74 = Service_74_1;
            },
            function (HtmlElement_73_1) {
                HtmlElement_73 = HtmlElement_73_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Ruby = class Ruby extends HtmlElement_73.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("RUBY"));
                    this.setDi(new Service_74.Service);
                    this.initialize(args);
                }
            };
            exports_125("Ruby", Ruby);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/S", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_126, context_126) {
    "use strict";
    var __moduleName = context_126 && context_126.id;
    var Service_75, HtmlElement_74, S;
    return {
        setters: [
            function (Service_75_1) {
                Service_75 = Service_75_1;
            },
            function (HtmlElement_74_1) {
                HtmlElement_74 = HtmlElement_74_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            S = class S extends HtmlElement_74.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("BR"));
                    this.setDi(new Service_75.Service);
                    this.initialize(args);
                }
            };
            exports_126("S", S);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Samp", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_127, context_127) {
    "use strict";
    var __moduleName = context_127 && context_127.id;
    var Service_76, HtmlElement_75, Samp;
    return {
        setters: [
            function (Service_76_1) {
                Service_76 = Service_76_1;
            },
            function (HtmlElement_75_1) {
                HtmlElement_75 = HtmlElement_75_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Samp = class Samp extends HtmlElement_75.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("SAMP"));
                    this.setDi(new Service_76.Service);
                    this.initialize(args);
                }
            };
            exports_127("Samp", Samp);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Script", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_128, context_128) {
    "use strict";
    var __moduleName = context_128 && context_128.id;
    var Service_77, HtmlElement_76, Script;
    return {
        setters: [
            function (Service_77_1) {
                Service_77 = Service_77_1;
            },
            function (HtmlElement_76_1) {
                HtmlElement_76 = HtmlElement_76_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Script = class Script extends HtmlElement_76.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("SCRIPT"));
                    this.setDi(new Service_77.Service);
                    this.initialize(args);
                }
            };
            exports_128("Script", Script);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Section", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_129, context_129) {
    "use strict";
    var __moduleName = context_129 && context_129.id;
    var Service_78, HtmlElement_77, Section;
    return {
        setters: [
            function (Service_78_1) {
                Service_78 = Service_78_1;
            },
            function (HtmlElement_77_1) {
                HtmlElement_77 = HtmlElement_77_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Section = class Section extends HtmlElement_77.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("SECTION"));
                    this.setDi(new Service_78.Service);
                    this.initialize(args);
                }
            };
            exports_129("Section", Section);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Option", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_130, context_130) {
    "use strict";
    var __moduleName = context_130 && context_130.id;
    var Service_79, HtmlElement_78, Option;
    return {
        setters: [
            function (Service_79_1) {
                Service_79 = Service_79_1;
            },
            function (HtmlElement_78_1) {
                HtmlElement_78 = HtmlElement_78_1;
            }
        ],
        execute: function () {
            /**
             *
             * @type
             */
            Option = class Option extends HtmlElement_78.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("OPTION"));
                    this.setDi(new Service_79.Service);
                    this.initialize(args);
                }
                setValue(val) {
                    this.attr("value", val);
                    return this;
                }
                /**
                 *
                 */
                getValue() {
                    return this.attr("value");
                }
                /**
                 *
                 */
                setContent(content) {
                    this.append(content);
                    return this;
                }
                /**
                 *
                 */
                getContent() {
                    return this.getElement().text;
                }
            };
            exports_130("Option", Option);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Select", ["Di/Service", "Mvc/View/Html/Dom/Elements/forms/FormTag", "Mvc/View/Html/Dom/Elements/Option", "Mvc/Model/StaticModel"], function (exports_131, context_131) {
    "use strict";
    var __moduleName = context_131 && context_131.id;
    var Service_80, FormTag_2, Option_1, StaticModel_2, Select;
    return {
        setters: [
            function (Service_80_1) {
                Service_80 = Service_80_1;
            },
            function (FormTag_2_1) {
                FormTag_2 = FormTag_2_1;
            },
            function (Option_1_1) {
                Option_1 = Option_1_1;
            },
            function (StaticModel_2_1) {
                StaticModel_2 = StaticModel_2_1;
            }
        ],
        execute: function () {
            Select = class Select extends FormTag_2.FormTag {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.choose = "Choose...";
                    this.setElement(document.createElement("SELECT"));
                    this.setDi(new Service_80.Service);
                    this.initialize(args);
                }
                /**
                 *
                 */
                getSelected() {
                    var option = new Option_1.Option();
                    option.setElement(this.getElement().options[this.getElement().selectedIndex]);
                    return option;
                }
                /**
                 *
                 * @param fn
                 */
                iterate(fn) {
                    var childs = this.getChilds();
                    for (var key in childs) {
                        fn(childs[key]);
                    }
                    return this;
                }
                /**
                 *
                 */
                setChoose(choose) {
                    this.choose = choose;
                }
                /**
                 *
                 */
                select(value) {
                    var childs = this.getElement().childNodes;
                    for (var key in childs) {
                        if (childs[key].value == value) {
                            childs[key].setAttribute("selected", "selected");
                        }
                    }
                }
                /**
                 *
                 * @param  content
                 * @return
                 */
                build(content, fields) {
                    if (content instanceof StaticModel_2.StaticModel) {
                        content = JSON.parse(content.getData());
                    }
                    var i = 0;
                    for (let key in content) {
                        let option = new Option_1.Option();
                        let id = content[key][fields[0]];
                        if (id === "") {
                            id = content[key][fields[1]];
                        }
                        option.attr({
                            "value": id
                        });
                        option.append(content[key][fields[1]]);
                        this.append([
                            option
                        ]);
                        i++;
                    }
                    return this;
                }
            };
            exports_131("Select", Select);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Small", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_132, context_132) {
    "use strict";
    var __moduleName = context_132 && context_132.id;
    var Service_81, HtmlElement_79, Small;
    return {
        setters: [
            function (Service_81_1) {
                Service_81 = Service_81_1;
            },
            function (HtmlElement_79_1) {
                HtmlElement_79 = HtmlElement_79_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Small = class Small extends HtmlElement_79.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("small"));
                    this.setDi(new Service_81.Service);
                    this.initialize(args);
                }
            };
            exports_132("Small", Small);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Source", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_133, context_133) {
    "use strict";
    var __moduleName = context_133 && context_133.id;
    var Service_82, HtmlElement_80, Source;
    return {
        setters: [
            function (Service_82_1) {
                Service_82 = Service_82_1;
            },
            function (HtmlElement_80_1) {
                HtmlElement_80 = HtmlElement_80_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Source = class Source extends HtmlElement_80.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("SOURCE"));
                    this.setDi(new Service_82.Service);
                    this.initialize(args);
                }
            };
            exports_133("Source", Source);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Span", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_134, context_134) {
    "use strict";
    var __moduleName = context_134 && context_134.id;
    var Service_83, HtmlElement_81, Span;
    return {
        setters: [
            function (Service_83_1) {
                Service_83 = Service_83_1;
            },
            function (HtmlElement_81_1) {
                HtmlElement_81 = HtmlElement_81_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Span = class Span extends HtmlElement_81.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("SPAN"));
                    this.setDi(new Service_83.Service);
                    this.initialize(args);
                }
            };
            exports_134("Span", Span);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Strong", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_135, context_135) {
    "use strict";
    var __moduleName = context_135 && context_135.id;
    var Service_84, HtmlElement_82, Strong;
    return {
        setters: [
            function (Service_84_1) {
                Service_84 = Service_84_1;
            },
            function (HtmlElement_82_1) {
                HtmlElement_82 = HtmlElement_82_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Strong = class Strong extends HtmlElement_82.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("STRONG"));
                    this.setDi(new Service_84.Service);
                    this.initialize(args);
                }
            };
            exports_135("Strong", Strong);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Style", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_136, context_136) {
    "use strict";
    var __moduleName = context_136 && context_136.id;
    var Service_85, HtmlElement_83, Style;
    return {
        setters: [
            function (Service_85_1) {
                Service_85 = Service_85_1;
            },
            function (HtmlElement_83_1) {
                HtmlElement_83 = HtmlElement_83_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Style = class Style extends HtmlElement_83.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("STYLE"));
                    this.setDi(new Service_85.Service);
                    this.initialize(args);
                }
            };
            exports_136("Style", Style);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Sub", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_137, context_137) {
    "use strict";
    var __moduleName = context_137 && context_137.id;
    var Service_86, HtmlElement_84, Sub;
    return {
        setters: [
            function (Service_86_1) {
                Service_86 = Service_86_1;
            },
            function (HtmlElement_84_1) {
                HtmlElement_84 = HtmlElement_84_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Sub = class Sub extends HtmlElement_84.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("SUB"));
                    this.setDi(new Service_86.Service);
                    this.initialize(args);
                }
            };
            exports_137("Sub", Sub);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Summary", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_138, context_138) {
    "use strict";
    var __moduleName = context_138 && context_138.id;
    var Service_87, HtmlElement_85, Summary;
    return {
        setters: [
            function (Service_87_1) {
                Service_87 = Service_87_1;
            },
            function (HtmlElement_85_1) {
                HtmlElement_85 = HtmlElement_85_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Summary = class Summary extends HtmlElement_85.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("SUMMARY"));
                    this.setDi(new Service_87.Service);
                    this.initialize(args);
                }
            };
            exports_138("Summary", Summary);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Sup", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_139, context_139) {
    "use strict";
    var __moduleName = context_139 && context_139.id;
    var Service_88, HtmlElement_86, Sup;
    return {
        setters: [
            function (Service_88_1) {
                Service_88 = Service_88_1;
            },
            function (HtmlElement_86_1) {
                HtmlElement_86 = HtmlElement_86_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Sup = class Sup extends HtmlElement_86.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("SUP"));
                    this.setDi(new Service_88.Service);
                    this.initialize(args);
                }
            };
            exports_139("Sup", Sup);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Td", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_140, context_140) {
    "use strict";
    var __moduleName = context_140 && context_140.id;
    var Service_89, HtmlElement_87, Td;
    return {
        setters: [
            function (Service_89_1) {
                Service_89 = Service_89_1;
            },
            function (HtmlElement_87_1) {
                HtmlElement_87 = HtmlElement_87_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Td = class Td extends HtmlElement_87.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("TD"));
                    this.setDi(new Service_89.Service);
                    this.initialize(args);
                }
                /**
                 *
                 * @param  {[type]} num [description]
                 * @return {[type]}     [description]
                 */
                colspan(cols) {
                    this.attr({
                        "colspan": cols
                    });
                    return this;
                }
                /** no pedi las hamburguesas soy un mk acompalene a comprar
             * @param  {[type]} row [description]
             * @return {[type]}     [description]
             */
                rowspan(rows) {
                    this.attr({
                        "rowspan": rows
                    });
                    return this;
                }
            };
            exports_140("Td", Td);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Thead", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_141, context_141) {
    "use strict";
    var __moduleName = context_141 && context_141.id;
    var Service_90, HtmlElement_88, Thead;
    return {
        setters: [
            function (Service_90_1) {
                Service_90 = Service_90_1;
            },
            function (HtmlElement_88_1) {
                HtmlElement_88 = HtmlElement_88_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Thead = class Thead extends HtmlElement_88.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("THEAD"));
                    this.setDi(new Service_90.Service);
                    this.initialize(args);
                }
            };
            exports_141("Thead", Thead);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Tbody", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_142, context_142) {
    "use strict";
    var __moduleName = context_142 && context_142.id;
    var Service_91, HtmlElement_89, Tbody;
    return {
        setters: [
            function (Service_91_1) {
                Service_91 = Service_91_1;
            },
            function (HtmlElement_89_1) {
                HtmlElement_89 = HtmlElement_89_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Tbody = class Tbody extends HtmlElement_89.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("TBODY"));
                    this.setDi(new Service_91.Service);
                    this.initialize(args);
                }
            };
            exports_142("Tbody", Tbody);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Tfoot", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_143, context_143) {
    "use strict";
    var __moduleName = context_143 && context_143.id;
    var Service_92, HtmlElement_90, Tfoot;
    return {
        setters: [
            function (Service_92_1) {
                Service_92 = Service_92_1;
            },
            function (HtmlElement_90_1) {
                HtmlElement_90 = HtmlElement_90_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Tfoot = class Tfoot extends HtmlElement_90.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("TFOOT"));
                    this.setDi(new Service_92.Service);
                    this.initialize(args);
                }
            };
            exports_143("Tfoot", Tfoot);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Tr", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_144, context_144) {
    "use strict";
    var __moduleName = context_144 && context_144.id;
    var Service_93, HtmlElement_91, Tr;
    return {
        setters: [
            function (Service_93_1) {
                Service_93 = Service_93_1;
            },
            function (HtmlElement_91_1) {
                HtmlElement_91 = HtmlElement_91_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Tr = class Tr extends HtmlElement_91.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("TR"));
                    this.setDi(new Service_93.Service);
                    this.initialize(args);
                }
            };
            exports_144("Tr", Tr);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Table", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement", "Mvc/View/Html/Dom/Elements/Thead", "Mvc/View/Html/Dom/Elements/Tbody", "Mvc/View/Html/Dom/Elements/Tfoot", "Mvc/View/Html/Dom/Elements/Tr"], function (exports_145, context_145) {
    "use strict";
    var __moduleName = context_145 && context_145.id;
    var Service_94, HtmlElement_92, Thead_1, Tbody_1, Tfoot_1, Tr_1, Table;
    return {
        setters: [
            function (Service_94_1) {
                Service_94 = Service_94_1;
            },
            function (HtmlElement_92_1) {
                HtmlElement_92 = HtmlElement_92_1;
            },
            function (Thead_1_1) {
                Thead_1 = Thead_1_1;
            },
            function (Tbody_1_1) {
                Tbody_1 = Tbody_1_1;
            },
            function (Tfoot_1_1) {
                Tfoot_1 = Tfoot_1_1;
            },
            function (Tr_1_1) {
                Tr_1 = Tr_1_1;
            }
        ],
        execute: function () {
            /**
             * [Table description]
             * @type {[type]}
             */
            Table = class Table extends HtmlElement_92.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.header = false;
                    this.setElement(document.createElement("BR"));
                    this.setDi(new Service_94.Service);
                    this.thead = new Thead_1.Thead();
                    this.tbody = new Tbody_1.Tbody();
                    this.tfoot = new Tfoot_1.Tfoot();
                    this.initialize(args);
                }
                /**
                 *
                 */
                getThead() {
                    return this.thead;
                }
                /**
                 *
                 */
                getTbody() {
                    return this.tbody;
                }
                /**
                 *
                 */
                toHead(component) {
                    this.thead.append(component);
                    this.append(this.thead);
                    return this;
                }
                /**
                 *
                 */
                toHeadTr(component) {
                    let tr = new Tr_1.Tr();
                    tr.append(component);
                    this.thead.append(tr);
                    this.append(this.thead);
                    return this;
                }
                /**
                 *
                 */
                toBody(component) {
                    this.tbody.append(component);
                    this.append(this.tbody);
                    return this;
                }
                /**
                 *
                 */
                toFoot(component) {
                    this.tfoot.append(component);
                    this.append(this.tfoot);
                    return this;
                }
                /**
                 *
                 */
                toBodyTr(component) {
                    let tr = new Tr_1.Tr();
                    tr.append(component);
                    this.tbody.append(tr);
                    this.append(this.tbody);
                    return this;
                }
                /**
                 *
                 */
                toFootTr(component) {
                    let tr = new Tr_1.Tr();
                    tr.append(component);
                    this.tfoot.append(tr);
                    this.append(this.tfoot);
                    return this;
                }
            };
            exports_145("Table", Table);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Textarea", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_146, context_146) {
    "use strict";
    var __moduleName = context_146 && context_146.id;
    var Service_95, HtmlElement_93, Textarea;
    return {
        setters: [
            function (Service_95_1) {
                Service_95 = Service_95_1;
            },
            function (HtmlElement_93_1) {
                HtmlElement_93 = HtmlElement_93_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Textarea = class Textarea extends HtmlElement_93.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("TEXTAREA"));
                    this.setDi(new Service_95.Service);
                    this.initialize(args);
                }
            };
            exports_146("Textarea", Textarea);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Th", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_147, context_147) {
    "use strict";
    var __moduleName = context_147 && context_147.id;
    var Service_96, HtmlElement_94, Th;
    return {
        setters: [
            function (Service_96_1) {
                Service_96 = Service_96_1;
            },
            function (HtmlElement_94_1) {
                HtmlElement_94 = HtmlElement_94_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Th = class Th extends HtmlElement_94.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("TH"));
                    this.setDi(new Service_96.Service);
                    this.initialize(args);
                }
                /*
                    *
                    * @param  {[type]} num [description]
                    * @return {[type]}     [description]
                    */
                colspan(cols) {
                    this.attr({
                        "colspan": cols
                    });
                    return this;
                }
                /**
                 *
                 * @param  {[type]} row [description]
                 * @return {[type]}     [description]
                 */
                rowspan(rows) {
                    this.attr({
                        "rowspan": rows
                    });
                    return this;
                }
            };
            exports_147("Th", Th);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Time", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_148, context_148) {
    "use strict";
    var __moduleName = context_148 && context_148.id;
    var Service_97, HtmlElement_95, Time;
    return {
        setters: [
            function (Service_97_1) {
                Service_97 = Service_97_1;
            },
            function (HtmlElement_95_1) {
                HtmlElement_95 = HtmlElement_95_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Time = class Time extends HtmlElement_95.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("TIME"));
                    this.setDi(new Service_97.Service);
                    this.initialize(args);
                }
            };
            exports_148("Time", Time);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Title", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_149, context_149) {
    "use strict";
    var __moduleName = context_149 && context_149.id;
    var Service_98, HtmlElement_96, Title;
    return {
        setters: [
            function (Service_98_1) {
                Service_98 = Service_98_1;
            },
            function (HtmlElement_96_1) {
                HtmlElement_96 = HtmlElement_96_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Title = class Title extends HtmlElement_96.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("TITLE"));
                    this.setDi(new Service_98.Service);
                    this.initialize(args);
                }
            };
            exports_149("Title", Title);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Track", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_150, context_150) {
    "use strict";
    var __moduleName = context_150 && context_150.id;
    var Service_99, HtmlElement_97, Track;
    return {
        setters: [
            function (Service_99_1) {
                Service_99 = Service_99_1;
            },
            function (HtmlElement_97_1) {
                HtmlElement_97 = HtmlElement_97_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Track = class Track extends HtmlElement_97.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("TRACK"));
                    this.setDi(new Service_99.Service);
                    this.initialize(args);
                }
            };
            exports_150("Track", Track);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/U", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_151, context_151) {
    "use strict";
    var __moduleName = context_151 && context_151.id;
    var Service_100, HtmlElement_98, U;
    return {
        setters: [
            function (Service_100_1) {
                Service_100 = Service_100_1;
            },
            function (HtmlElement_98_1) {
                HtmlElement_98 = HtmlElement_98_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            U = class U extends HtmlElement_98.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("U"));
                    this.setDi(new Service_100.Service);
                    this.initialize(args);
                }
            };
            exports_151("U", U);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Ul", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_152, context_152) {
    "use strict";
    var __moduleName = context_152 && context_152.id;
    var Service_101, HtmlElement_99, Ul;
    return {
        setters: [
            function (Service_101_1) {
                Service_101 = Service_101_1;
            },
            function (HtmlElement_99_1) {
                HtmlElement_99 = HtmlElement_99_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Ul = class Ul extends HtmlElement_99.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("UL"));
                    this.setDi(new Service_101.Service);
                    this.initialize(args);
                }
            };
            exports_152("Ul", Ul);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Var", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_153, context_153) {
    "use strict";
    var __moduleName = context_153 && context_153.id;
    var Service_102, HtmlElement_100, Var;
    return {
        setters: [
            function (Service_102_1) {
                Service_102 = Service_102_1;
            },
            function (HtmlElement_100_1) {
                HtmlElement_100 = HtmlElement_100_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Var = class Var extends HtmlElement_100.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("VAR"));
                    this.setDi(new Service_102.Service);
                    this.initialize(args);
                }
            };
            exports_153("Var", Var);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Video", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_154, context_154) {
    "use strict";
    var __moduleName = context_154 && context_154.id;
    var Service_103, HtmlElement_101, Video;
    return {
        setters: [
            function (Service_103_1) {
                Service_103 = Service_103_1;
            },
            function (HtmlElement_101_1) {
                HtmlElement_101 = HtmlElement_101_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Video = class Video extends HtmlElement_101.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("VIDEO"));
                    this.setDi(new Service_103.Service);
                    this.initialize(args);
                }
            };
            exports_154("Video", Video);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Wbr", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_155, context_155) {
    "use strict";
    var __moduleName = context_155 && context_155.id;
    var Service_104, HtmlElement_102, Wbr;
    return {
        setters: [
            function (Service_104_1) {
                Service_104 = Service_104_1;
            },
            function (HtmlElement_102_1) {
                HtmlElement_102 = HtmlElement_102_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Wbr = class Wbr extends HtmlElement_102.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("SELECT"));
                    this.setDi(new Service_104.Service);
                    this.initialize(args);
                }
            };
            exports_155("Wbr", Wbr);
        }
    };
});
System.register("Mvc/View/Html/Dom/Adapter/ElementAdapter", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Mvc/View/Html/Dom/Elements/A", "Mvc/View/Html/Dom/Elements/Abbr", "Mvc/View/Html/Dom/Elements/Address", "Mvc/View/Html/Dom/Elements/Area", "Mvc/View/Html/Dom/Elements/Article", "Mvc/View/Html/Dom/Elements/Aside", "Mvc/View/Html/Dom/Elements/B", "Mvc/View/Html/Dom/Elements/Base", "Mvc/View/Html/Dom/Elements/Bdi", "Mvc/View/Html/Dom/Elements/Bdo", "Mvc/View/Html/Dom/Elements/Blockquote", "Mvc/View/Html/Dom/Elements/Body", "Mvc/View/Html/Dom/Elements/Br", "Mvc/View/Html/Dom/Elements/Button", "Mvc/View/Html/Dom/Elements/Canvas", "Mvc/View/Html/Dom/Elements/Caption", "Mvc/View/Html/Dom/Elements/Cite", "Mvc/View/Html/Dom/Elements/Code", "Mvc/View/Html/Dom/Elements/Col", "Mvc/View/Html/Dom/Elements/ColGroup", "Mvc/View/Html/Dom/Elements/Datalist", "Mvc/View/Html/Dom/Elements/Db", "Mvc/View/Html/Dom/Elements/Del", "Mvc/View/Html/Dom/Elements/Details", "Mvc/View/Html/Dom/Elements/Dfn", "Mvc/View/Html/Dom/Elements/Dialog", "Mvc/View/Html/Dom/Elements/Div", "Mvc/View/Html/Dom/Elements/Dl", "Mvc/View/Html/Dom/Elements/Dt", "Mvc/View/Html/Dom/Elements/Em", "Mvc/View/Html/Dom/Elements/Embed", "Mvc/View/Html/Dom/Elements/Fieldset", "Mvc/View/Html/Dom/Elements/Figcaption", "Mvc/View/Html/Dom/Elements/Figure", "Mvc/View/Html/Dom/Elements/Footer", "Mvc/View/Html/Dom/Elements/Form", "Mvc/View/Html/Dom/Elements/H1", "Mvc/View/Html/Dom/Elements/H2", "Mvc/View/Html/Dom/Elements/H3", "Mvc/View/Html/Dom/Elements/H4", "Mvc/View/Html/Dom/Elements/H5", "Mvc/View/Html/Dom/Elements/H6", "Mvc/View/Html/Dom/Elements/Head", "Mvc/View/Html/Dom/Elements/Header", "Mvc/View/Html/Dom/Elements/I", "Mvc/View/Html/Dom/Elements/Iframe", "Mvc/View/Html/Dom/Elements/Img", "Mvc/View/Html/Dom/Elements/Input", "Mvc/View/Html/Dom/Elements/Ins", "Mvc/View/Html/Dom/Elements/Kbd", "Mvc/View/Html/Dom/Elements/Keygen", "Mvc/View/Html/Dom/Elements/Label", "Mvc/View/Html/Dom/Elements/Leyend", "Mvc/View/Html/Dom/Elements/Li", "Mvc/View/Html/Dom/Elements/Link", "Mvc/View/Html/Dom/Elements/Main", "Mvc/View/Html/Dom/Elements/Menu", "Mvc/View/Html/Dom/Elements/Menuitem", "Mvc/View/Html/Dom/Elements/Meta", "Mvc/View/Html/Dom/Elements/Meter", "Mvc/View/Html/Dom/Elements/Nav", "Mvc/View/Html/Dom/Elements/Noscrip", "Mvc/View/Html/Dom/Elements/Obj", "Mvc/View/Html/Dom/Elements/Ol", "Mvc/View/Html/Dom/Elements/Optgroup", "Mvc/View/Html/Dom/Elements/P", "Mvc/View/Html/Dom/Elements/Param", "Mvc/View/Html/Dom/Elements/Pre", "Mvc/View/Html/Dom/Elements/Progress", "Mvc/View/Html/Dom/Elements/Q", "Mvc/View/Html/Dom/Elements/Rp", "Mvc/View/Html/Dom/Elements/Rt", "Mvc/View/Html/Dom/Elements/Ruby", "Mvc/View/Html/Dom/Elements/S", "Mvc/View/Html/Dom/Elements/Samp", "Mvc/View/Html/Dom/Elements/Script", "Mvc/View/Html/Dom/Elements/Section", "Mvc/View/Html/Dom/Elements/Select", "Mvc/View/Html/Dom/Elements/Small", "Mvc/View/Html/Dom/Elements/Source", "Mvc/View/Html/Dom/Elements/Span", "Mvc/View/Html/Dom/Elements/Strong", "Mvc/View/Html/Dom/Elements/Style", "Mvc/View/Html/Dom/Elements/Sub", "Mvc/View/Html/Dom/Elements/Summary", "Mvc/View/Html/Dom/Elements/Sup", "Mvc/View/Html/Dom/Elements/Td", "Mvc/View/Html/Dom/Elements/Table", "Mvc/View/Html/Dom/Elements/Tbody", "Mvc/View/Html/Dom/Elements/Textarea", "Mvc/View/Html/Dom/Elements/Tfoot", "Mvc/View/Html/Dom/Elements/Th", "Mvc/View/Html/Dom/Elements/Thead", "Mvc/View/Html/Dom/Elements/Time", "Mvc/View/Html/Dom/Elements/Title", "Mvc/View/Html/Dom/Elements/Tr", "Mvc/View/Html/Dom/Elements/Track", "Mvc/View/Html/Dom/Elements/U", "Mvc/View/Html/Dom/Elements/Ul", "Mvc/View/Html/Dom/Elements/Var", "Mvc/View/Html/Dom/Elements/Video", "Mvc/View/Html/Dom/Elements/Wbr"], function (exports_156, context_156) {
    "use strict";
    var __moduleName = context_156 && context_156.id;
    var HtmlElement_103, A_1, Abbr_1, Address_1, Area_1, Article_1, Aside_1, B_1, Base_1, Bdi_1, Bdo_1, Blockquote_1, Body_1, Br_1, Button_1, Canvas_1, Caption_1, Cite_1, Code_1, Col_1, ColGroup_1, Datalist_1, Db_1, Del_1, Details_1, Dfn_1, Dialog_1, Div_1, Dl_1, Dt_1, Em_1, Embed_1, Fieldset_1, Figcaption_1, Figure_1, Footer_1, Form_1, H1_1, H2_1, H3_1, H4_1, H5_1, H6_1, Head_1, Header_1, I_3, Iframe_1, Img_1, Input_2, Ins_1, Kbd_1, Keygen_1, Label_1, Leyend_1, Li_1, Link_1, Main_1, Menu_1, Menuitem_1, Meta_1, Meter_1, Nav_1, Noscrip_1, Obj_1, Ol_1, Optgroup_1, P_1, Param_1, Pre_1, Progress_1, Q_1, Rp_1, Rt_1, Ruby_1, S_1, Samp_1, Script_1, Section_1, Select_1, Small_1, Source_1, Span_1, Strong_1, Style_1, Sub_1, Summary_1, Sup_1, Td_1, Table_1, Tbody_2, Textarea_1, Tfoot_2, Th_1, Thead_2, Time_1, Title_1, Tr_2, Track_1, U_1, Ul_1, Var_1, Video_1, Wbr_1, ElementAdapter;
    return {
        setters: [
            function (HtmlElement_103_1) {
                HtmlElement_103 = HtmlElement_103_1;
            },
            function (A_1_1) {
                A_1 = A_1_1;
            },
            function (Abbr_1_1) {
                Abbr_1 = Abbr_1_1;
            },
            function (Address_1_1) {
                Address_1 = Address_1_1;
            },
            function (Area_1_1) {
                Area_1 = Area_1_1;
            },
            function (Article_1_1) {
                Article_1 = Article_1_1;
            },
            function (Aside_1_1) {
                Aside_1 = Aside_1_1;
            },
            function (B_1_1) {
                B_1 = B_1_1;
            },
            function (Base_1_1) {
                Base_1 = Base_1_1;
            },
            function (Bdi_1_1) {
                Bdi_1 = Bdi_1_1;
            },
            function (Bdo_1_1) {
                Bdo_1 = Bdo_1_1;
            },
            function (Blockquote_1_1) {
                Blockquote_1 = Blockquote_1_1;
            },
            function (Body_1_1) {
                Body_1 = Body_1_1;
            },
            function (Br_1_1) {
                Br_1 = Br_1_1;
            },
            function (Button_1_1) {
                Button_1 = Button_1_1;
            },
            function (Canvas_1_1) {
                Canvas_1 = Canvas_1_1;
            },
            function (Caption_1_1) {
                Caption_1 = Caption_1_1;
            },
            function (Cite_1_1) {
                Cite_1 = Cite_1_1;
            },
            function (Code_1_1) {
                Code_1 = Code_1_1;
            },
            function (Col_1_1) {
                Col_1 = Col_1_1;
            },
            function (ColGroup_1_1) {
                ColGroup_1 = ColGroup_1_1;
            },
            function (Datalist_1_1) {
                Datalist_1 = Datalist_1_1;
            },
            function (Db_1_1) {
                Db_1 = Db_1_1;
            },
            function (Del_1_1) {
                Del_1 = Del_1_1;
            },
            function (Details_1_1) {
                Details_1 = Details_1_1;
            },
            function (Dfn_1_1) {
                Dfn_1 = Dfn_1_1;
            },
            function (Dialog_1_1) {
                Dialog_1 = Dialog_1_1;
            },
            function (Div_1_1) {
                Div_1 = Div_1_1;
            },
            function (Dl_1_1) {
                Dl_1 = Dl_1_1;
            },
            function (Dt_1_1) {
                Dt_1 = Dt_1_1;
            },
            function (Em_1_1) {
                Em_1 = Em_1_1;
            },
            function (Embed_1_1) {
                Embed_1 = Embed_1_1;
            },
            function (Fieldset_1_1) {
                Fieldset_1 = Fieldset_1_1;
            },
            function (Figcaption_1_1) {
                Figcaption_1 = Figcaption_1_1;
            },
            function (Figure_1_1) {
                Figure_1 = Figure_1_1;
            },
            function (Footer_1_1) {
                Footer_1 = Footer_1_1;
            },
            function (Form_1_1) {
                Form_1 = Form_1_1;
            },
            function (H1_1_1) {
                H1_1 = H1_1_1;
            },
            function (H2_1_1) {
                H2_1 = H2_1_1;
            },
            function (H3_1_1) {
                H3_1 = H3_1_1;
            },
            function (H4_1_1) {
                H4_1 = H4_1_1;
            },
            function (H5_1_1) {
                H5_1 = H5_1_1;
            },
            function (H6_1_1) {
                H6_1 = H6_1_1;
            },
            function (Head_1_1) {
                Head_1 = Head_1_1;
            },
            function (Header_1_1) {
                Header_1 = Header_1_1;
            },
            function (I_3_1) {
                I_3 = I_3_1;
            },
            function (Iframe_1_1) {
                Iframe_1 = Iframe_1_1;
            },
            function (Img_1_1) {
                Img_1 = Img_1_1;
            },
            function (Input_2_1) {
                Input_2 = Input_2_1;
            },
            function (Ins_1_1) {
                Ins_1 = Ins_1_1;
            },
            function (Kbd_1_1) {
                Kbd_1 = Kbd_1_1;
            },
            function (Keygen_1_1) {
                Keygen_1 = Keygen_1_1;
            },
            function (Label_1_1) {
                Label_1 = Label_1_1;
            },
            function (Leyend_1_1) {
                Leyend_1 = Leyend_1_1;
            },
            function (Li_1_1) {
                Li_1 = Li_1_1;
            },
            function (Link_1_1) {
                Link_1 = Link_1_1;
            },
            function (Main_1_1) {
                Main_1 = Main_1_1;
            },
            function (Menu_1_1) {
                Menu_1 = Menu_1_1;
            },
            function (Menuitem_1_1) {
                Menuitem_1 = Menuitem_1_1;
            },
            function (Meta_1_1) {
                Meta_1 = Meta_1_1;
            },
            function (Meter_1_1) {
                Meter_1 = Meter_1_1;
            },
            function (Nav_1_1) {
                Nav_1 = Nav_1_1;
            },
            function (Noscrip_1_1) {
                Noscrip_1 = Noscrip_1_1;
            },
            function (Obj_1_1) {
                Obj_1 = Obj_1_1;
            },
            function (Ol_1_1) {
                Ol_1 = Ol_1_1;
            },
            function (Optgroup_1_1) {
                Optgroup_1 = Optgroup_1_1;
            },
            function (P_1_1) {
                P_1 = P_1_1;
            },
            function (Param_1_1) {
                Param_1 = Param_1_1;
            },
            function (Pre_1_1) {
                Pre_1 = Pre_1_1;
            },
            function (Progress_1_1) {
                Progress_1 = Progress_1_1;
            },
            function (Q_1_1) {
                Q_1 = Q_1_1;
            },
            function (Rp_1_1) {
                Rp_1 = Rp_1_1;
            },
            function (Rt_1_1) {
                Rt_1 = Rt_1_1;
            },
            function (Ruby_1_1) {
                Ruby_1 = Ruby_1_1;
            },
            function (S_1_1) {
                S_1 = S_1_1;
            },
            function (Samp_1_1) {
                Samp_1 = Samp_1_1;
            },
            function (Script_1_1) {
                Script_1 = Script_1_1;
            },
            function (Section_1_1) {
                Section_1 = Section_1_1;
            },
            function (Select_1_1) {
                Select_1 = Select_1_1;
            },
            function (Small_1_1) {
                Small_1 = Small_1_1;
            },
            function (Source_1_1) {
                Source_1 = Source_1_1;
            },
            function (Span_1_1) {
                Span_1 = Span_1_1;
            },
            function (Strong_1_1) {
                Strong_1 = Strong_1_1;
            },
            function (Style_1_1) {
                Style_1 = Style_1_1;
            },
            function (Sub_1_1) {
                Sub_1 = Sub_1_1;
            },
            function (Summary_1_1) {
                Summary_1 = Summary_1_1;
            },
            function (Sup_1_1) {
                Sup_1 = Sup_1_1;
            },
            function (Td_1_1) {
                Td_1 = Td_1_1;
            },
            function (Table_1_1) {
                Table_1 = Table_1_1;
            },
            function (Tbody_2_1) {
                Tbody_2 = Tbody_2_1;
            },
            function (Textarea_1_1) {
                Textarea_1 = Textarea_1_1;
            },
            function (Tfoot_2_1) {
                Tfoot_2 = Tfoot_2_1;
            },
            function (Th_1_1) {
                Th_1 = Th_1_1;
            },
            function (Thead_2_1) {
                Thead_2 = Thead_2_1;
            },
            function (Time_1_1) {
                Time_1 = Time_1_1;
            },
            function (Title_1_1) {
                Title_1 = Title_1_1;
            },
            function (Tr_2_1) {
                Tr_2 = Tr_2_1;
            },
            function (Track_1_1) {
                Track_1 = Track_1_1;
            },
            function (U_1_1) {
                U_1 = U_1_1;
            },
            function (Ul_1_1) {
                Ul_1 = Ul_1_1;
            },
            function (Var_1_1) {
                Var_1 = Var_1_1;
            },
            function (Video_1_1) {
                Video_1 = Video_1_1;
            },
            function (Wbr_1_1) {
                Wbr_1 = Wbr_1_1;
            }
        ],
        execute: function () {
            ElementAdapter = class ElementAdapter {
                /**
                 *
                 * @param element
                 * @param tagName
                 */
                constructor(element) {
                    /**
                     *
                     */
                    this.element = false;
                    this.element = element;
                }
                /**
                 *
                 * @param element
                 */
                setElement(element) {
                    this.element = element;
                    return this;
                }
                /**
                 *
                 */
                get() {
                    let elem;
                    if (typeof this.element != "string") {
                        if (typeof this.element.nodeName == "undefined") {
                            return false;
                        }
                        else {
                            elem = this.element.nodeName;
                        }
                    }
                    else {
                        elem = this.element;
                    }
                    let instance = false;
                    switch (elem) {
                        case "A":
                            instance = new A_1.A();
                            break;
                        case "ABBR":
                            instance = new Abbr_1.Abbr();
                            break;
                        case "ADDRESS":
                            instance = new Address_1.Address();
                            break;
                        case "AREA":
                            instance = new Area_1.Area();
                            break;
                        case "ARTICLE":
                            instance = new Article_1.Article();
                            break;
                        case "ASIDE":
                            instance = new Aside_1.Aside();
                            break;
                        case "AUDIO":
                            instance = new Audio();
                            break;
                        case "B":
                            instance = new B_1.B();
                            break;
                        case "BASE":
                            instance = new Base_1.Base();
                            break;
                        case "BDI":
                            instance = new Bdi_1.Bdi();
                            break;
                        case "BDO":
                            instance = new Bdo_1.Bdo();
                            break;
                        case "BLOCKQUOTE":
                            instance = new Blockquote_1.Blockquote();
                            break;
                        case "BODY":
                            instance = new Body_1.Body();
                            break;
                        case "BR":
                            instance = new Br_1.Br();
                            break;
                        case "BUTTON":
                            instance = new Button_1.Button();
                            break;
                        case "CANVAS":
                            instance = new Canvas_1.Canvas();
                            break;
                        case "CAPTION":
                            instance = new Caption_1.Caption();
                            break;
                        case "CITE":
                            instance = new Cite_1.Cite();
                            break;
                        case "CODE":
                            instance = new Code_1.Code();
                            break;
                        case "COL":
                            instance = new Col_1.Col();
                            break;
                        case "COLGROUP":
                            instance = new ColGroup_1.ColGroup();
                            break;
                        case "DATALIST":
                            instance = new Datalist_1.Datalist();
                            break;
                        case "DB":
                            instance = new Db_1.Db();
                            break;
                        case "DEL":
                            instance = new Del_1.Del();
                            break;
                        case "DETAILS":
                            instance = new Details_1.Details();
                            break;
                        case "DFN":
                            instance = new Dfn_1.Dfn();
                            break;
                        case "DIALOG":
                            instance = new Dialog_1.Dialog();
                            break;
                        case "DIV":
                            instance = new Div_1.Div();
                            break;
                        case "DL":
                            instance = new Dl_1.Dl();
                            break;
                        case "DT":
                            instance = new Dt_1.Dt();
                            break;
                        case "EM":
                            instance = new Em_1.Em();
                            break;
                        case "EMBED":
                            instance = new Embed_1.Embed();
                            break;
                        case "FIELDSET":
                            instance = new Fieldset_1.Fieldset();
                            break;
                        case "FIGCAPTION":
                            instance = new Figcaption_1.Figcaption();
                            break;
                        case "FIGURE":
                            instance = new Figure_1.Figure();
                            break;
                        case "FOOTER":
                            instance = new Footer_1.Footer();
                            break;
                        case "FORM":
                            instance = new Form_1.Form();
                            break;
                        case "H1":
                            instance = new H1_1.H1();
                            break;
                        case "H2":
                            instance = new H2_1.H2();
                            break;
                        case "H3":
                            instance = new H3_1.H3();
                            break;
                        case "H4":
                            instance = new H4_1.H4();
                            break;
                        case "H5":
                            instance = new H5_1.H5();
                            break;
                        case "H6":
                            instance = new H6_1.H6();
                            break;
                        case "HEAD":
                            instance = new Head_1.Head();
                            break;
                        case "HEADER":
                            instance = new Header_1.Header();
                            break;
                        case "I":
                            instance = new I_3.I();
                            break;
                        case "IFRAME":
                            instance = new Iframe_1.Iframe();
                            break;
                        case "IMG":
                            instance = new Img_1.Img();
                            break;
                        case "INPUT":
                            instance = new Input_2.Input();
                            break;
                        case "INS":
                            instance = new Ins_1.Ins();
                            break;
                        case "KBD":
                            instance = new Kbd_1.Kbd();
                            break;
                        case "KEYGEN":
                            instance = new Keygen_1.Keygen();
                            break;
                        case "LABEL":
                            instance = new Label_1.Label();
                            break;
                        case "LEYEND":
                            instance = new Leyend_1.Leyend();
                            break;
                        case "LI":
                            instance = new Li_1.Li();
                            break;
                        case "LINK":
                            instance = new Link_1.Link();
                            break;
                        case "MAIN":
                            instance = new Main_1.Main();
                            break;
                        //case "MAP":
                        //instance = new Map();
                        //break;
                        case "MENU":
                            instance = new Menu_1.Menu();
                            break;
                        case "MENUITEM":
                            instance = new Menuitem_1.Menuitem();
                            break;
                        case "META":
                            instance = new Meta_1.Meta();
                            break;
                        case "METER":
                            instance = new Meter_1.Meter();
                            break;
                        case "NAV":
                            instance = new Nav_1.Nav();
                            break;
                        case "NOSCRIP":
                            instance = new Noscrip_1.Noscrip();
                            break;
                        case "OBJECT":
                            instance = new Obj_1.Obj();
                            break;
                        case "OL":
                            instance = new Ol_1.Ol();
                            break;
                        case "OPTGROUP":
                            instance = new Optgroup_1.Optgroup();
                            break;
                        case "P":
                            instance = new P_1.P();
                            break;
                        case "PARAM":
                            instance = new Param_1.Param();
                            break;
                        case "PRE":
                            instance = new Pre_1.Pre();
                            break;
                        case "PROGRESS":
                            instance = new Progress_1.Progress();
                            break;
                        case "Q":
                            instance = new Q_1.Q();
                            break;
                        case "RP":
                            instance = new Rp_1.Rp();
                            break;
                        case "RT":
                            instance = new Rt_1.Rt();
                            break;
                        case "RUBY":
                            instance = new Ruby_1.Ruby();
                            break;
                        case "S":
                            instance = new S_1.S();
                            break;
                        case "SAMP":
                            instance = new Samp_1.Samp();
                            break;
                        case "SCRIPT":
                            instance = new Script_1.Script();
                            break;
                        case "SECTION":
                            instance = new Section_1.Section();
                            break;
                        case "SELECT":
                            instance = new Select_1.Select();
                            break;
                        case "SMALL":
                            instance = new Small_1.Small();
                            break;
                        case "SOURCE":
                            instance = new Source_1.Source();
                            break;
                        case "SPAN":
                            instance = new Span_1.Span();
                            break;
                        case "STRONG":
                            instance = new Strong_1.Strong();
                            break;
                        case "STYLE":
                            instance = new Style_1.Style();
                            break;
                        case "SUB":
                            instance = new Sub_1.Sub();
                            break;
                        case "SUMMARY":
                            instance = new Summary_1.Summary();
                            break;
                        case "SUP":
                            instance = new Sup_1.Sup();
                            break;
                        case "TABLE":
                            instance = new Table_1.Table();
                            break;
                        case "TBODY":
                            instance = new Tbody_2.Tbody();
                            break;
                        case "TD":
                            instance = new Td_1.Td();
                            break;
                        case "TEXTAREA":
                            instance = new Textarea_1.Textarea();
                            break;
                        case "TFOOT":
                            instance = new Tfoot_2.Tfoot();
                            break;
                        case "TH":
                            instance = new Th_1.Th();
                            break;
                        case "THEAD":
                            instance = new Thead_2.Thead();
                            break;
                        case "TIME":
                            instance = new Time_1.Time();
                            break;
                        case "TITLE":
                            instance = new Title_1.Title();
                            break;
                        case "TR":
                            instance = new Tr_2.Tr();
                            break;
                        case "TRACK":
                            instance = new Track_1.Track();
                            break;
                        case "U":
                            instance = new U_1.U();
                            break;
                        case "UL":
                            instance = new Ul_1.Ul();
                            break;
                        case "VAR":
                            instance = new Var_1.Var();
                            break;
                        case "VIDEO":
                            instance = new Video_1.Video();
                            break;
                        case "WBR":
                            instance = new Wbr_1.Wbr();
                            break;
                        default:
                            instance = new HtmlElement_103.HtmlElement;
                            instance.create(this.element);
                            break;
                    }
                    if (typeof this.element.nodeName != "undefined") {
                        instance.setElement(this.element);
                    }
                    return instance;
                }
            };
            exports_156("ElementAdapter", ElementAdapter);
        }
    };
});
System.register("Mvc/View/Html/Dom/DomManager", ["Mvc/View/Html/Dom/Adapter/ElementAdapter"], function (exports_157, context_157) {
    "use strict";
    var __moduleName = context_157 && context_157.id;
    var ElementAdapter_4, DomManager;
    return {
        setters: [
            function (ElementAdapter_4_1) {
                ElementAdapter_4 = ElementAdapter_4_1;
            }
        ],
        execute: function () {
            DomManager = class DomManager {
                /**
                 *
                 * @param element
                 */
                constructor() {
                }
                /**
                 *
                 * @param id
                 */
                getById(id, context = null) {
                    let adapter = new ElementAdapter_4.ElementAdapter(document.getElementById(id));
                    return adapter.get();
                }
                /**
                 *
                 */
                getByTag(name) {
                    let elements = document.getElementsByTagName(name);
                    let result = new Array();
                    for (let key in elements) {
                        if (typeof elements[key].nodeName == "string") {
                            let adapter = new ElementAdapter_4.ElementAdapter(elements[key]);
                            result.push(adapter.get());
                        }
                    }
                    if (result.length == 0) {
                        return false;
                    }
                    if (result.length == 1) {
                        return result[0];
                    }
                    return result;
                }
                /**
                 *
                 */
                getByClass(name, context = null) {
                    let elements = document.getElementsByClassName(name);
                    let result = new Array();
                    for (let key in elements) {
                        if (typeof elements[key].nodeName == "string") {
                            let adapter = new ElementAdapter_4.ElementAdapter(elements[key]);
                            result.push(adapter.get());
                        }
                    }
                    if (result.length == 0) {
                        return false;
                    }
                    if (result.length == 1) {
                        return result[0];
                    }
                    return this;
                }
                /**
                 *
                 */
                getByName(name, context = null) {
                    let elements = document.getElementsByName(name);
                    let result = new Array();
                    for (let key in elements) {
                        if (typeof elements[key].nodeName == "string") {
                            let adapter = new ElementAdapter_4.ElementAdapter(elements[key]);
                            result.push(adapter.get());
                        }
                    }
                    if (result.length == 0) {
                        return false;
                    }
                    if (result.length == 1) {
                        return result[0];
                    }
                    return result;
                }
                /**
                 *
                 */
                setElement(element) {
                    this.element = element;
                    return this;
                }
                /**
                 *
                 */
                getElement() {
                    return this.element;
                }
                /**
                 * [getClassName description]
                 * @return {[type]} [description]
                 */
                getClassName() {
                    let funcNameRegex = /function (.{1,})\(/;
                    let results = (funcNameRegex).exec(this["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                }
            };
            exports_157("DomManager", DomManager);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Audio", ["Mvc/View/Html/Dom/Wrappers/HtmlElement", "Di/Service"], function (exports_158, context_158) {
    "use strict";
    var __moduleName = context_158 && context_158.id;
    var HtmlElement_104, Service_105, Audio;
    return {
        setters: [
            function (HtmlElement_104_1) {
                HtmlElement_104 = HtmlElement_104_1;
            },
            function (Service_105_1) {
                Service_105 = Service_105_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Audio = class Audio extends HtmlElement_104.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DB"));
                    this.setDi(new Service_105.Service);
                    this.initialize(args);
                }
            };
            exports_158("Audio", Audio);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Hidden", ["Mvc/View/Html/Dom/Elements/Input"], function (exports_159, context_159) {
    "use strict";
    var __moduleName = context_159 && context_159.id;
    var Input_3, Northwind;
    return {
        setters: [
            function (Input_3_1) {
                Input_3 = Input_3_1;
            }
        ],
        execute: function () {
            (function (Northwind) {
                var Tag;
                (function (Tag) {
                    /**
                     * [Input description]
                     * @type {[type]}
                     */
                    class Hidden extends Input_3.Input {
                        constructor(args = {}) {
                            super();
                            this.setHidden();
                        }
                    }
                    Tag.Hidden = Hidden;
                })(Tag = Northwind.Tag || (Northwind.Tag = {}));
            })(Northwind || (Northwind = {}));
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Hr", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_160, context_160) {
    "use strict";
    var __moduleName = context_160 && context_160.id;
    var Service_106, HtmlElement_105, Hr;
    return {
        setters: [
            function (Service_106_1) {
                Service_106 = Service_106_1;
            },
            function (HtmlElement_105_1) {
                HtmlElement_105 = HtmlElement_105_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Hr = class Hr extends HtmlElement_105.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("HR"));
                    this.setDi(new Service_106.Service);
                    this.initialize(args);
                }
            };
            exports_160("Hr", Hr);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Map", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_161, context_161) {
    "use strict";
    var __moduleName = context_161 && context_161.id;
    var Service_107, HtmlElement_106, Map;
    return {
        setters: [
            function (Service_107_1) {
                Service_107 = Service_107_1;
            },
            function (HtmlElement_106_1) {
                HtmlElement_106 = HtmlElement_106_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Map = class Map extends HtmlElement_106.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("MAP"));
                    this.setDi(new Service_107.Service);
                    this.initialize(args);
                }
            };
            exports_161("Map", Map);
        }
    };
});
System.register("Mvc/View/Html/Dom/Elements/Output", ["Di/Service", "Mvc/View/Html/Dom/Wrappers/HtmlElement"], function (exports_162, context_162) {
    "use strict";
    var __moduleName = context_162 && context_162.id;
    var Service_108, HtmlElement_107, Output;
    return {
        setters: [
            function (Service_108_1) {
                Service_108 = Service_108_1;
            },
            function (HtmlElement_107_1) {
                HtmlElement_107 = HtmlElement_107_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Output = class Output extends HtmlElement_107.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("OUTPUT"));
                    this.setDi(new Service_108.Service);
                    this.initialize(args);
                }
            };
            exports_162("Output", Output);
        }
    };
});
System.register("Network/Ajax", [], function (exports_163, context_163) {
    "use strict";
    var __moduleName = context_163 && context_163.id;
    var Ajax;
    return {
        setters: [],
        execute: function () {
            Ajax = class Ajax {
                /**
                 *
                 */
                constructor() {
                    this.context = {};
                    this.method = "POST";
                    this.parameters = "";
                    this.container = [];
                    this.responseFn = function () { };
                    this.bfSendFn = function () { }.bind(this);
                    this.httpRequest = new XMLHttpRequest();
                }
                /**
                 *
                 */
                setContext(ctx) {
                    this.context = ctx;
                }
                /**
                 *
                 */
                getContext() {
                    return this.context;
                }
                /**
                 *
                 */
                setUrl(url) {
                    this.url = url;
                    return this;
                }
                /**
                 *
                 */
                getUrl() {
                    return this.url;
                }
                /**
                 *
                 */
                set(key, value) {
                    this.container[key] = value;
                }
                /**
                 *
                 */
                get(key) {
                    return this.container[key];
                }
                /**
                 *
                 */
                setParams(params, value = false) {
                    if (typeof params == "object") {
                        var i = 0;
                        for (var key in params) {
                            var ampersand = "";
                            if (i < Object.keys(params).length) {
                                ampersand = "&";
                            }
                            this.parameters += key + "=" + encodeURIComponent(params[key]) + ampersand;
                            i++;
                        }
                    }
                    else if (value) {
                        this.parameters = params + "=" + encodeURIComponent(value);
                    }
                    return this;
                }
                /**
                 *
                 */
                POST() {
                    this.setMethod("POST");
                    return this;
                }
                /**
                 *
                 */
                PUT() {
                    this.setMethod("PUT");
                    return this;
                }
                /**
                 *
                 */
                DELETE() {
                    this.setMethod("DELETE");
                    return this;
                }
                /**
                 *
                 */
                GET() {
                    this.setMethod("GET");
                    return this;
                }
                /**
                 *
                 */
                setMethod(method) {
                    this.method = method;
                    return this;
                }
                addContext() {
                    this.httpRequest.context = this.getContext();
                    this.httpRequest.getContext = function () {
                        return this.context;
                    };
                }
                /**
                 *
                 */
                response(responseFunction) {
                    this.responseFn = responseFunction;
                    try {
                        this.bfSendFn();
                        this.addContext();
                        this.httpRequest.onreadystatechange = function () {
                            if (this.httpRequest.readyState === this.httpRequest.DONE) {
                                if (this.httpRequest.status === 200) {
                                    if (typeof this.httpRequest.response != "undefined") {
                                        if (typeof this.responseFn != "undefined") {
                                            this.responseFn(this.httpRequest.response);
                                        }
                                    }
                                }
                                else {
                                    this.error = "ajax status" + this.httpRequest.status + " " + this.httpRequest.statusText;
                                }
                            }
                        }.bind(this);
                    }
                    catch (e) {
                        console.log("Network.AJax.Exception", e);
                    }
                    return this;
                }
                /**
                 *
                 */
                beforeSend(fn) {
                    this.bfSendFn = fn;
                }
                /**
                 *
                 */
                setHeaders() {
                    this.httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                }
                /**
                 *
                 */
                getError(errorFunction) {
                    errorFunction(this.error);
                }
                clear() {
                    this.method = "GET";
                    this.parameters = "";
                    this.error = null;
                    this.url = "";
                    this.bfSendFn = function () { };
                    this.responseFn = function () { };
                    this.container = [];
                }
                /**
                 *
                 */
                send(fn = false) {
                    if (typeof fn == "function") {
                        this.response(fn.bind(this));
                    }
                    this.httpRequest.open(this.method, this.url);
                    this.setHeaders();
                    this.httpRequest.send(this.parameters);
                }
                /**
                 * [getClassName description]
                 * @return {[type]} [description]
                 */
                getClassName() {
                    let funcNameRegex = /function (.{1,})\(/;
                    let results = (funcNameRegex).exec(this["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                }
            };
            exports_163("Ajax", Ajax);
        }
    };
});
System.register("Network/MethodType", [], function (exports_164, context_164) {
    "use strict";
    var __moduleName = context_164 && context_164.id;
    var MethodType;
    return {
        setters: [],
        execute: function () {
            MethodType = class MethodType {
            };
            MethodType.POST = "POST";
            MethodType.GET = "GET";
            MethodType.PUT = "PUT";
            MethodType.DELETE = "DELETE";
            exports_164("MethodType", MethodType);
        }
    };
});
System.register("Persistence/ComparisonOperators", [], function (exports_165, context_165) {
    "use strict";
    var __moduleName = context_165 && context_165.id;
    var ComparisonOperators;
    return {
        setters: [],
        execute: function () {
            ComparisonOperators = class ComparisonOperators {
            };
            ComparisonOperators.AND = "&&";
            ComparisonOperators.OR = "||";
            ComparisonOperators.EQUAL = "==";
            ComparisonOperators.DIFFERENT = "!=";
            exports_165("ComparisonOperators", ComparisonOperators);
        }
    };
});
System.register("Persistence/DatamapperOperators", [], function (exports_166, context_166) {
    "use strict";
    var __moduleName = context_166 && context_166.id;
    var DatamapperOperators;
    return {
        setters: [],
        execute: function () {
            DatamapperOperators = class DatamapperOperators {
            };
            DatamapperOperators.OR = "$or";
            DatamapperOperators.AND = "$and";
            DatamapperOperators.SORT = "$sort";
            DatamapperOperators.IS_NOT = "$isNot";
            DatamapperOperators.LIMIT = "$limit";
            DatamapperOperators.COLUMNS = "$columns";
            DatamapperOperators.CONDITIONAL = "$conditions";
            exports_166("DatamapperOperators", DatamapperOperators);
        }
    };
});
System.register("Persistence/DataType", [], function (exports_167, context_167) {
    "use strict";
    var __moduleName = context_167 && context_167.id;
    var DataType;
    return {
        setters: [],
        execute: function () {
            DataType = class DataType {
                /**
                 *
                 */
                static getValueByType(value) {
                    var tyof = typeof value;
                    switch (tyof) {
                        case DataType.STRING_TYPE:
                            value = "\"" + value + "\"";
                            break;
                    }
                    return value;
                }
            };
            DataType.BOOLEAN = 1;
            DataType.INTEGER = 2;
            DataType.STRING = 3;
            DataType.OBJECT = 4;
            DataType.ARRAY = 5;
            DataType.CLASS = 6;
            DataType.BOOLEAN_TYPE = "boolean";
            DataType.INTEGER_TYPE = "number";
            DataType.STRING_TYPE = "string";
            DataType.OBJECT_TYPE = "object";
            exports_167("DataType", DataType);
        }
    };
});
System.register("Persistence/Sort", [], function (exports_168, context_168) {
    "use strict";
    var __moduleName = context_168 && context_168.id;
    var Sort;
    return {
        setters: [],
        execute: function () {
            Sort = class Sort {
                static sortByField(data, field) {
                    var arr = [];
                    for (var prop in data) {
                        if (data.hasOwnProperty(prop)) {
                            var obj = {};
                            obj[prop] = data[prop];
                            obj.tempSortName = data[prop][field].toLowerCase();
                            arr.push(obj);
                        }
                    }
                    arr.sort(function (a, b) {
                        var at = a.tempSortName, bt = b.tempSortName;
                        return at > bt ? 1 : (at < bt ? -1 : 0);
                    });
                    var result = [];
                    for (var i = 0, l = arr.length; i < l; i++) {
                        var obj = arr[i];
                        delete obj.tempSortName;
                        for (var prop in obj) {
                            if (obj.hasOwnProperty(prop)) {
                                var id = prop;
                            }
                        }
                        var item = obj[id];
                        result.push(item);
                    }
                    return result;
                }
            };
            Sort.ASC = 1;
            Sort.DESC = -1;
            exports_168("Sort", Sort);
        }
    };
});
System.register("Persistence/Filter", ["Persistence/DatamapperOperators", "Persistence/ComparisonOperators", "Errors/MessageCode", "Errors/Message", "Persistence/DataType", "Persistence/Sort"], function (exports_169, context_169) {
    "use strict";
    var __moduleName = context_169 && context_169.id;
    var DatamapperOperators_1, ComparisonOperators_1, MessageCode_2, Message_2, DataType_4, Sort_2, Filter;
    return {
        setters: [
            function (DatamapperOperators_1_1) {
                DatamapperOperators_1 = DatamapperOperators_1_1;
            },
            function (ComparisonOperators_1_1) {
                ComparisonOperators_1 = ComparisonOperators_1_1;
            },
            function (MessageCode_2_1) {
                MessageCode_2 = MessageCode_2_1;
            },
            function (Message_2_1) {
                Message_2 = Message_2_1;
            },
            function (DataType_4_1) {
                DataType_4 = DataType_4_1;
            },
            function (Sort_2_1) {
                Sort_2 = Sort_2_1;
            }
        ],
        execute: function () {
            Filter = class Filter {
                constructor() {
                    this.first = "";
                    this.final = [];
                    this.init = false;
                    this.sort = new Array();
                    this.limit = null;
                    this.columns = {};
                }
                buildCondition(params) {
                    var index = 1;
                    var length = Object.keys(params).length;
                    for (var key in params) {
                        switch (key) {
                            case DatamapperOperators_1.DatamapperOperators.CONDITIONAL:
                                let conditional = params[key];
                                for (var keyConditional in conditional) {
                                    switch (keyConditional) {
                                        case DatamapperOperators_1.DatamapperOperators.AND:
                                            let iAnd = 1;
                                            let andContent = conditional[keyConditional];
                                            let andLength = Object.keys(andContent).length;
                                            for (let keyAnd in andContent) {
                                                this.getExpression(keyAnd, andContent[keyAnd], ComparisonOperators_1.ComparisonOperators.AND, iAnd, andLength);
                                                iAnd++;
                                            }
                                            break;
                                        case DatamapperOperators_1.DatamapperOperators.OR:
                                            let iOr = 1;
                                            let orContent = conditional[keyConditional];
                                            let orLength = Object.keys(orContent).length;
                                            for (let keyOr in orContent) {
                                                this.getExpression(keyOr, orContent[keyOr], ComparisonOperators_1.ComparisonOperators.OR, iOr, orLength);
                                                iOr++;
                                            }
                                            break;
                                        case DatamapperOperators_1.DatamapperOperators.IS_NOT:
                                            let iIsNot = 1;
                                            let isNotContent = conditional[keyConditional];
                                            let isNotLength = Object.keys(isNotContent).length;
                                            for (let keyIsNot in isNotContent) {
                                                this.getExpression(keyIsNot, isNotContent[keyIsNot], ComparisonOperators_1.ComparisonOperators.AND, iIsNot, isNotLength, ComparisonOperators_1.ComparisonOperators.DIFFERENT);
                                                iIsNot++;
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                break;
                            case DatamapperOperators_1.DatamapperOperators.SORT:
                                this.getSort(params[key]);
                                break;
                            case DatamapperOperators_1.DatamapperOperators.LIMIT:
                                this.getLimit(params[key]);
                                break;
                            case DatamapperOperators_1.DatamapperOperators.COLUMNS:
                                this.columns = params[key];
                                if (typeof params[key] != "object") {
                                    throw Message_2.Message.getCodeMessage(MessageCode_2.MessageCode.NOT_VALID_OBJECT, "$columns option");
                                }
                                break;
                            default:
                                this.getExpression(key, params[key], ComparisonOperators_1.ComparisonOperators.AND, index, length);
                                index++;
                                break;
                        }
                    }
                }
                getSort(sortContent) {
                    switch (typeof sortContent) {
                        case DataType_4.DataType.STRING_TYPE:
                            this.sort.push("data = Sort.sortByField('" + sortContent + "');");
                            break;
                        case DataType_4.DataType.OBJECT_TYPE:
                            if (Array.isArray(sortContent)) {
                                for (let sortKey in sortContent) {
                                    let sortValue = sortContent[sortKey];
                                    this.sort.push("data = Sort.sortByField(data, '" + sortValue + "')");
                                }
                            }
                            else {
                                for (let sortKey in sortContent) {
                                    let sortType = sortContent[sortKey];
                                    this.sort.push("data = Sort.sortByField(data, '" + sortKey + "');");
                                    if (sortContent[sortKey] == Sort_2.Sort.DESC) {
                                        this.sort.push("data = data.reverse();");
                                    }
                                }
                            }
                            break;
                    }
                }
                getLimit(limit) {
                    if (typeof limit == "string") {
                        limit = parseInt(limit);
                    }
                    this.limit = "data = data.slice(0, " + limit + ") ";
                }
                getExpression(key, content, operator, index, length, comparison = "==") {
                    var condition = "";
                    var finalOperator = "";
                    if (this.init) {
                        finalOperator = operator;
                    }
                    if (Array.isArray(content)) {
                        var newVal = content;
                        for (var j = 0; j < newVal.length; j++) {
                            let operatorStr = "";
                            if (j < (newVal.length - 1)) {
                                operatorStr = operator;
                            }
                            let valueByType = DataType_4.DataType.getValueByType(newVal[j]);
                            condition += "row[\"" + key + "\"] " + comparison + " " + newVal[j] + " " + operatorStr + " ";
                        }
                    }
                    else {
                        let operatorStr = "";
                        let valueByType = DataType_4.DataType.getValueByType(content);
                        condition += "row[\"" + key + "\"] " + comparison + " " + valueByType + " " + operatorStr + " ";
                    }
                    this.first += finalOperator + " ( " + condition + " ) ";
                    this.init = true;
                }
                /**
                 *
                 */
                getColumns(row) {
                    var newRow = {};
                    if (Object.keys(this.columns).length > 0) {
                        for (let key in this.columns) {
                            newRow[this.columns[key]] = row[this.columns[key]];
                        }
                    }
                    else {
                        newRow = row;
                    }
                    return newRow;
                }
                /**
                 *
                 */
                getMultipleRowValues(rsp, conds = true) {
                    var response = JSON.parse(rsp);
                    if (typeof response == "string") {
                        response = JSON.parse(response);
                    }
                    if (this.first == "") {
                        this.first = "true";
                    }
                    var data = new Array();
                    if (Array.isArray(response)) {
                        var conditions = this.first;
                        var evalValue = "if (" + conditions + ") { data.push(this.getColumns(row)); }";
                        for (let key in response) {
                            let row = response[key];
                            if (conds) {
                                eval(evalValue);
                            }
                            else {
                                data.push(this.getColumns(row));
                            }
                        }
                        if (this.sort.length > 0) {
                            var i = 0;
                            for (let key in this.sort) {
                                eval(this.sort[key]);
                                i++;
                            }
                        }
                        if (this.limit != null) {
                            eval(this.limit);
                        }
                    }
                    else {
                        if (typeof response == "object") {
                            data.push(this.getColumns(response));
                        }
                        else {
                            console.log("Response is not an object");
                        }
                    }
                    return data;
                }
                getOneRowValue(data) {
                }
            };
            exports_169("Filter", Filter);
        }
    };
});
System.register("Reflection/Reflection", ["Mvc/Model/RawModel", "Mvc/Model/Deny"], function (exports_170, context_170) {
    "use strict";
    var __moduleName = context_170 && context_170.id;
    var RawModel_3, Deny_1, Reflection;
    return {
        setters: [
            function (RawModel_3_1) {
                RawModel_3 = RawModel_3_1;
            },
            function (Deny_1_1) {
                Deny_1 = Deny_1_1;
            }
        ],
        execute: function () {
            Reflection = class Reflection {
                /**
                 * Make reflection to objects
                 */
                constructor() {
                    this.methods = new Array();
                    this.attributes = new Array();
                    this.deny = {};
                    this.deny = {
                        "insertUrl": true,
                        "deleteUrl": true,
                        "updateUrl": true,
                        "findUrl": true
                    };
                }
                /**
                 * Get object class
                 * @param Object obj
                 */
                getName(obj) {
                    let funcNameRegex = /function (.{1,})\(/;
                    let results = (funcNameRegex).exec(obj["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                }
                /**
                 * Read and get methods and properties
                 * @param  Object obj
                 * @return String
                 */
                read(obj) {
                    if (typeof obj !== 'object') {
                        console.log('Not an object');
                        return;
                    }
                    let output = '';
                    for (let i in obj) {
                        let propName = i;
                        let propValue = obj[i];
                        let type = (typeof propValue);
                        switch (type) {
                            case 'function':
                                output += ' [method] ' + propName + '\n\n';
                                this.methods.push();
                                break;
                            case 'object':
                                output += '\t[object] ' + propName + ' ' + this.read(propValue) + '\n\n';
                                break;
                            default:
                                output += ' [property] ' + propName + ' ' + propValue + '\n\n';
                                this.attributes.push({
                                    propName: propValue
                                });
                                break;
                        }
                    }
                    return output;
                }
                /**
                 * Return methods and properties as objects
                 * @param  Object obj
                 * @return Object
                 */
                getAtttributeAsObjects(obj) {
                    if (typeof obj !== 'object') {
                        console.log('Not an object');
                        return;
                    }
                    let output = '';
                    let dataAttributes = {};
                    for (let i in obj) {
                        let propName = i;
                        let propValue = obj[i];
                        let type = (typeof propValue);
                        switch (type) {
                            case 'function':
                                break;
                            case 'object':
                                if (propValue instanceof RawModel_3.RawModel) {
                                    dataAttributes[propName] = this.getAtttributeAsObjects(propValue);
                                }
                                else {
                                    if (propValue != null) {
                                        if (Object.keys(propValue).length > 0) {
                                            if (this.checkDataObject(propName)) {
                                                dataAttributes[propName] = propValue;
                                            }
                                        }
                                    }
                                }
                                break;
                            default:
                                var deny = Deny_1.Deny.getDeny();
                                if (deny.indexOf(propName) == -1) {
                                    dataAttributes[propName] = propValue;
                                }
                                break;
                        }
                    }
                    return dataAttributes;
                }
                /**
                 * Check if the key is valid
                 * @param  String key
                 * @return Boolean
                 */
                checkDataObject(key) {
                    if (this.deny[key] != true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                /**
                 * Get class methods
                 * @return Array
                 */
                getMethods() {
                    return this.methods;
                }
                /**
                 * Get properties or class attributes
                 * @return Array
                 */
                getAttributes() {
                    return this.attributes;
                }
            };
            exports_170("Reflection", Reflection);
        }
    };
});
System.register("Persistence/UnitOfWork", [], function (exports_171, context_171) {
    "use strict";
    var __moduleName = context_171 && context_171.id;
    var UnitOfWork;
    return {
        setters: [],
        execute: function () {
            UnitOfWork = class UnitOfWork {
                constructor() {
                }
            };
            UnitOfWork.NEW = 1;
            UnitOfWork.CREATED = 2;
            UnitOfWork.DELETED = 3;
            exports_171("UnitOfWork", UnitOfWork);
        }
    };
});
System.register("Persistence/Hydrator", ["Persistence/UnitOfWork", "Mvc/Model/RawModel"], function (exports_172, context_172) {
    "use strict";
    var __moduleName = context_172 && context_172.id;
    var UnitOfWork_1, RawModel_4, Hydrator;
    return {
        setters: [
            function (UnitOfWork_1_1) {
                UnitOfWork_1 = UnitOfWork_1_1;
            },
            function (RawModel_4_1) {
                RawModel_4 = RawModel_4_1;
            }
        ],
        execute: function () {
            Hydrator = class Hydrator {
                constructor() {
                }
                hydrate(model, data) {
                    var newModel = new model();
                    newModel.state = UnitOfWork_1.UnitOfWork.CREATED;
                    for (let key in data) {
                        switch (typeof newModel[key]) {
                            case "function":
                                var auxPropNested = new newModel[key];
                                if (auxPropNested instanceof RawModel_4.RawModel) {
                                    newModel[key] = this.hydrate(newModel[key], data[key]);
                                }
                                else {
                                    newModel[key] = data[key];
                                }
                                break;
                            default:
                                var dataArray = new Array();
                                if (Array.isArray(newModel[key])) {
                                    switch (typeof newModel[key][0]) {
                                        case "function":
                                            if (typeof data[key].length != "undefined") {
                                                if (data[key].length > 0) {
                                                    var auxSubModel = new newModel[key][0];
                                                    var arrayData = new Array();
                                                    if (auxSubModel instanceof RawModel_4.RawModel) {
                                                        for (let subModelKey in data[key]) {
                                                            arrayData.push(this.hydrate(newModel[key][0], data[key][subModelKey]));
                                                        }
                                                        newModel[key] = arrayData;
                                                    }
                                                }
                                            }
                                            break;
                                        default:
                                            newModel[key] = data[key];
                                            break;
                                    }
                                }
                                else {
                                    newModel[key] = data[key];
                                }
                                break;
                        }
                        if (Array.isArray(newModel[key])) {
                            if (typeof newModel[key][0] == "function") {
                                newModel[key] = new Array();
                            }
                        }
                    }
                    return newModel;
                }
            };
            exports_172("Hydrator", Hydrator);
        }
    };
});
System.register("Persistence/EntityManager", ["Persistence/Filter", "Persistence/Hydrator", "Network/Ajax", "Di/Service", "Persistence/UnitOfWork", "Di/Container", "Mvc/Model/RawModel", "Mvc/Model/AjaxModel", "Reflection/Reflection", "Mvc/Model/StaticModel", "Mvc/Model/AjaxModelPersistent"], function (exports_173, context_173) {
    "use strict";
    var __moduleName = context_173 && context_173.id;
    var Filter_1, Hydrator_1, Ajax_1, Service_109, UnitOfWork_2, Container_1, RawModel_5, AjaxModel_1, Reflection_1, StaticModel_3, AjaxModelPersistent_1, EntityManager;
    return {
        setters: [
            function (Filter_1_1) {
                Filter_1 = Filter_1_1;
            },
            function (Hydrator_1_1) {
                Hydrator_1 = Hydrator_1_1;
            },
            function (Ajax_1_1) {
                Ajax_1 = Ajax_1_1;
            },
            function (Service_109_1) {
                Service_109 = Service_109_1;
            },
            function (UnitOfWork_2_1) {
                UnitOfWork_2 = UnitOfWork_2_1;
            },
            function (Container_1_1) {
                Container_1 = Container_1_1;
            },
            function (RawModel_5_1) {
                RawModel_5 = RawModel_5_1;
            },
            function (AjaxModel_1_1) {
                AjaxModel_1 = AjaxModel_1_1;
            },
            function (Reflection_1_1) {
                Reflection_1 = Reflection_1_1;
            },
            function (StaticModel_3_1) {
                StaticModel_3 = StaticModel_3_1;
            },
            function (AjaxModelPersistent_1_1) {
                AjaxModelPersistent_1 = AjaxModelPersistent_1_1;
            }
        ],
        execute: function () {
            EntityManager = class EntityManager {
                /**
                 * Entity manager is a class
                 */
                constructor() {
                    this.ajax = null;
                    this.hydrator = null;
                    this.container = new Container_1.Container();
                    this.uow = new UnitOfWork_2.UnitOfWork;
                    this.di = new Service_109.Service;
                }
                /**
                 *
                 */
                getContainer() {
                    return this.container;
                }
                /**
                 *
                 * @param model
                 * @param params
                 */
                find(model, params = {}) {
                    this.setWhenIsModel(model, params, "find");
                    return this;
                }
                /**
                 *
                 * @param model
                 * @param params
                 */
                findOne(model, params = {}) {
                    this.setWhenIsModel(model, params, "findOne");
                    return this;
                }
                /**
                 *
                 * @param model
                 * @param params
                 */
                count(model, params = {}) {
                    this.setWhenIsModel(model, params, "count");
                    return this;
                }
                /**
                 *
                 */
                setWhenIsModel(model, params, type) {
                    let objModel = new model();
                    this.getContainer()
                        .set("transactionModel", model);
                    this.getContainer()
                        .set("transactionObjModel", objModel);
                    this.getContainer()
                        .set("transactionParams", params);
                    this.getContainer()
                        .set("transactionType", type);
                    if (objModel instanceof RawModel_5.RawModel) {
                        let callAjax = false;
                        if (objModel instanceof AjaxModelPersistent_1.AjaxModelPersistent) {
                            if (objModel.getAjaxInit() === null) {
                                this.callAjax(objModel, type, params);
                            }
                        }
                        else if (objModel instanceof AjaxModel_1.AjaxModel) {
                            this.callAjax(objModel, type, params);
                        }
                    }
                    else {
                        throw "Model must be instance of RawModel";
                    }
                }
                callAjax(objModel, type, params) {
                    this.ajax = new Ajax_1.Ajax();
                    var url = null;
                    switch (type) {
                        case "find":
                            url = objModel.getFindUrl();
                            break;
                        case "findOne":
                            url = objModel.getFindOneUrl();
                            break;
                        case "insert":
                            url = objModel.getInsertUrl();
                            break;
                        case "update":
                            url = objModel.getUpdateUrl();
                            break;
                        case "delete":
                            url = objModel.getDeleteUrl();
                            break;
                        case "count":
                            url = objModel.getCountUrl();
                            break;
                    }
                    if (url == null) {
                        url = this.getDi().get("url").get("baseUrl") +
                            this.lcfirst(objModel.getClassName()) +
                            this.ucfirst(type);
                    }
                    this.ajax.setUrl(url);
                    this.ajax.setParams(params);
                    this.ajax.setMethod(objModel.getMethod());
                }
                /**
                 *
                 */
                ucfirst(str) {
                    return str.charAt(0).toUpperCase() + str.slice(1);
                }
                /**
                 *
                 */
                lcfirst(str) {
                    return str.charAt(0).toLowerCase() + str.slice(1);
                }
                /**
                 *
                 */
                save(model) {
                    this.getContainer()
                        .set("transactionModel", model);
                    this.getContainer()
                        .set("transactionObjectModel", model);
                    this.getContainer()
                        .set("transactionType", "save");
                    if (model instanceof AjaxModel_1.AjaxModel) {
                        this.ajax = new Ajax_1.Ajax();
                        var modelName = model.getClassName();
                        switch (model.state) {
                            case UnitOfWork_2.UnitOfWork.NEW:
                                var url = model.getInsertUrl();
                                if (url == null) {
                                    url = this.getDi().get("url").get("baseUrl") +
                                        this.lcfirst(modelName) +
                                        "Insert";
                                }
                                this.ajax.setUrl(url);
                                break;
                            case UnitOfWork_2.UnitOfWork.CREATED:
                                var url = model.getUpdateUrl();
                                if (url == null) {
                                    url = this.getDi().get("url").get("baseUrl") +
                                        this.lcfirst(modelName) +
                                        "Update";
                                }
                                this.ajax.setUrl(url);
                                break;
                        }
                        var reflection = new Reflection_1.Reflection();
                        var attrsAsString = JSON.stringify(reflection.getAtttributeAsObjects(model));
                        var objParams = {};
                        objParams[modelName] = attrsAsString;
                        this.ajax.setParams(objParams);
                        this.ajax.setMethod(model.getMethod());
                    }
                    else if (model instanceof StaticModel_3.StaticModel) {
                        switch (model.state) {
                            case UnitOfWork_2.UnitOfWork.NEW:
                                let tempData = model.getData();
                                break;
                            case UnitOfWork_2.UnitOfWork.CREATED:
                                break;
                        }
                    }
                    return this;
                }
                /**
                 *
                 */
                delete(model) {
                    this.getContainer()
                        .set("transactionModel", model);
                    this.getContainer()
                        .set("transactionObjectModel", model);
                    this.getContainer()
                        .set("transactionType", "delete");
                    if (model instanceof AjaxModel_1.AjaxModel) {
                        this.ajax = new Ajax_1.Ajax();
                        var modelName = model.getClassName();
                        var url = model.getDeleteUrl();
                        if (url == null) {
                            url = this.getDi().get("url").get("baseUrl") +
                                this.lcfirst(modelName) +
                                "Delete";
                        }
                        this.ajax.setUrl(url);
                        var reflection = new Reflection_1.Reflection();
                        var attrsAsString = JSON.stringify(reflection.getAtttributeAsObjects(model));
                        var objParams = {};
                        objParams[modelName] = attrsAsString;
                        this.ajax.setParams(objParams);
                        this.ajax.setMethod(model.getMethod());
                    }
                    else if (model instanceof StaticModel_3.StaticModel) {
                        switch (model.state) {
                            case UnitOfWork_2.UnitOfWork.NEW:
                                let tempData = model.getData();
                                break;
                            case UnitOfWork_2.UnitOfWork.CREATED:
                                break;
                        }
                    }
                    return this;
                }
                /**
                 *
                 */
                response(fn) {
                    var model = this.getContainer()
                        .get("transactionModel");
                    var objModel = this.getContainer()
                        .get("transactionObjModel");
                    var type = this.getContainer()
                        .get("transactionType");
                    if (type == "save" || type == "delete") {
                        this.ajax.response(function (response) {
                            return fn(this.setResponse(response, objModel, type, model));
                        }.bind(this));
                        this.ajax.send();
                    }
                    else {
                        if (type == "find" || type == "findOne" || type == "count") {
                            var params = this.getContainer()
                                .get("transactionParams");
                        }
                        this.checkModel(fn, type, model, objModel, params);
                    }
                    return this;
                }
                /**
                 *
                 */
                checkModel(fn, type, model, objModel, params) {
                    if (objModel instanceof AjaxModelPersistent_1.AjaxModelPersistent) {
                        let data = objModel.getData();
                        if (objModel.getAjaxInit() == null) {
                            this.setResponseAjax(fn, type, model, objModel, params);
                        }
                        else {
                            this.setResponseStatic(fn, objModel, type, model, params);
                        }
                    }
                    else {
                        if (objModel instanceof AjaxModel_1.AjaxModel) {
                            this.setResponseAjax(fn, type, model, objModel, params);
                        }
                        else {
                            if (objModel instanceof StaticModel_3.StaticModel) {
                                this.setResponseStatic(fn, objModel, type, model, params);
                            }
                        }
                    }
                }
                /**
                 *
                 */
                setResponseAjax(fn, type, model, objModel, params) {
                    this.ajax.response(function (response) {
                        return fn(this.setResponse(response, objModel, type, model, params));
                    }.bind(this));
                    this.ajax.send();
                }
                /**
                 *
                 */
                setResponseStatic(fn, objModel, type, model, params) {
                    fn(this.setResponse(objModel.getData(), objModel, type, model, params));
                }
                /**
                 *
                 */
                setResponse(data, objModel, type, model, params) {
                    let resultSet = new Array();
                    switch (type) {
                        case "count":
                        case "findOne":
                            resultSet = this.getResultSet(data, params, model, objModel);
                            if (resultSet != false) {
                                resultSet = resultSet[0];
                            }
                            break;
                        case "find":
                            resultSet = this.getResultSet(data, params, model, objModel);
                            break;
                        case "delete":
                        case "save":
                            resultSet = data;
                            break;
                    }
                    return resultSet;
                }
                /**
                 *
                 */
                getResultSet(response, params, model, objModel) {
                    let resultSet = new Array();
                    let hydrator = new Hydrator_1.Hydrator;
                    let filters = new Filter_1.Filter;
                    filters.buildCondition(params);
                    var data = new Array();
                    if (objModel instanceof AjaxModelPersistent_1.AjaxModelPersistent) {
                        if (objModel.getAjaxInit() == null) {
                            objModel.setAjaxInit(true);
                            objModel.setData(response);
                        }
                        data = filters.getMultipleRowValues(response, false);
                    }
                    else if (objModel instanceof AjaxModel_1.AjaxModel) {
                        data = filters.getMultipleRowValues(response, false);
                    }
                    else {
                        data = filters.getMultipleRowValues(response);
                    }
                    var i = 0;
                    for (let key in data) {
                        let newModel = hydrator.hydrate(model, data[key]);
                        if (newModel instanceof StaticModel_3.StaticModel) {
                            newModel.setIndex(i);
                        }
                        resultSet.push(newModel);
                        i++;
                    }
                    if (resultSet.length == 0) {
                        resultSet = false;
                    }
                    return resultSet;
                }
                /**
                 *
                 */
                flush() {
                    return false;
                }
                /**
                 *
                 */
                reset() {
                    return false;
                }
                /**
                 *
                 */
                group() {
                    return {};
                }
                /**
                 *
                 */
                distinct() {
                    return {};
                }
                /**
                 *
                 */
                purge() {
                    return false;
                }
                /**
                 *
                 */
                forget() {
                    return false;
                }
                checksum(obj) {
                    var keys = Object.keys(obj).sort();
                    var output = [], prop;
                    for (var i = 0; i < keys.length; i++) {
                        prop = keys[i];
                        output.push(prop);
                        output.push(obj[prop]);
                    }
                    return JSON.stringify(output);
                }
                /**
                 * [getClassName description]
                 * @return {[type]} [description]
                 */
                getClassName() {
                    let funcNameRegex = /function (.{1,})\(/;
                    let results = (funcNameRegex).exec(this["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                }
                setDi(di) {
                    this.di = di;
                }
                /**
                 *
                 */
                getDi() {
                    return this.di;
                }
            };
            exports_173("EntityManager", EntityManager);
        }
    };
});
System.register("Reflection/Checksum", ["Reflection/Reflection"], function (exports_174, context_174) {
    "use strict";
    var __moduleName = context_174 && context_174.id;
    var Reflection_2, Checksum;
    return {
        setters: [
            function (Reflection_2_1) {
                Reflection_2 = Reflection_2_1;
            }
        ],
        execute: function () {
            Checksum = class Checksum {
                /**
                 * Build checksum of any javascript object
                 * @param Object obj
                 */
                constructor(obj = false) {
                    /**
                     * Object become to string
                     */
                    this.stringObject = "";
                    if (typeof obj == "object") {
                        this.set(obj);
                    }
                }
                /**
                 *
                 * @param obj
                 */
                set(obj) {
                    let reflection = new Reflection_2.Reflection();
                    this.stringObject = reflection.read(obj);
                }
                /**
                 * Get base 64 from string
                 * @param String str
                 */
                utf8ToBase64(str) {
                    return window.btoa(encodeURIComponent(str));
                }
                /**
                 * Get checksum
                 * @return String
                 */
                getChecksum() {
                    return this.utf8ToBase64(this.stringObject);
                }
            };
            exports_174("Checksum", Checksum);
        }
    };
});
System.register("Starter/Restricted", [], function (exports_175, context_175) {
    "use strict";
    var __moduleName = context_175 && context_175.id;
    var Restricted;
    return {
        setters: [],
        execute: function () {
            Restricted = class Restricted {
                static get() {
                    let restricted = [
                        "constructor",
                        "initialize",
                        "getById",
                        "getByTag",
                        "getByClass",
                        "getDi",
                        "hasKey",
                        "setPersistent",
                        "getPersistent",
                        "get",
                        "set",
                        "setDi",
                        "getUrl",
                        "setUrl",
                        "getAjax",
                        "setAjax",
                        "getDom",
                        "setDom",
                        "setEm",
                        "getEm",
                        "setEntityManager",
                        "getEntityManager",
                        "setContainer",
                        "getContainer",
                        "setTag",
                        "getTag",
                        "setEvent",
                        "getEvent",
                        "setGlobals",
                        "getGlobals"
                    ];
                    return restricted;
                }
            };
            exports_175("Restricted", Restricted);
        }
    };
});
System.register("Starter/ResolveController", ["Di/Service", "Starter/Restricted", "Mvc/Controller", "Helper/ArrayHelper", "Mvc/View/ViewModel"], function (exports_176, context_176) {
    "use strict";
    var __moduleName = context_176 && context_176.id;
    var Service_110, Restricted_1, Controller_2, ArrayHelper_1, ViewModel_1, ResolveController;
    return {
        setters: [
            function (Service_110_1) {
                Service_110 = Service_110_1;
            },
            function (Restricted_1_1) {
                Restricted_1 = Restricted_1_1;
            },
            function (Controller_2_1) {
                Controller_2 = Controller_2_1;
            },
            function (ArrayHelper_1_1) {
                ArrayHelper_1 = ArrayHelper_1_1;
            },
            function (ViewModel_1_1) {
                ViewModel_1 = ViewModel_1_1;
            }
        ],
        execute: function () {
            ResolveController = class ResolveController {
                /**
                 *
                 * @param controllers
                 */
                constructor(controllers) {
                    this.controllers = controllers;
                    this.di = new Service_110.Service;
                }
                /**
                 *
                 * @param controller
                 * @param key
                 */
                resolveProperties(controller) {
                    let methods = Object.getOwnPropertyNames(Object.getPrototypeOf(controller));
                    for (let key of methods) {
                        switch (typeof controller[key]) {
                            case "function":
                                if (!ArrayHelper_1.ArrayHelper.inArray(Restricted_1.Restricted.get(), key)) {
                                    controller[key](ViewModel_1.ViewModel);
                                }
                                break;
                        }
                    }
                }
                /**
                 *
                 */
                resolve() {
                    if (Array.isArray(this.controllers)) {
                        for (let key in this.controllers) {
                            let instance = new this.controllers[key](this.resolveProperties);
                            instance.initialize();
                            if (instance instanceof Controller_2.Controller) {
                                this.resolveProperties(instance);
                            }
                        }
                    }
                }
            };
            exports_176("ResolveController", ResolveController);
        }
    };
});
System.register("Url/Url", ["Di/Service"], function (exports_177, context_177) {
    "use strict";
    var __moduleName = context_177 && context_177.id;
    var Service_111, Url;
    return {
        setters: [
            function (Service_111_1) {
                Service_111 = Service_111_1;
            }
        ],
        execute: function () {
            Url = class Url extends Service_111.Service {
                constructor() {
                    super();
                }
                /**
                 *
                 * @param url
                 */
                getQuery(url = false) {
                    if (url == false) {
                        url = document.URL;
                    }
                    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
                    var obj = {};
                    if (queryString) {
                        queryString = queryString.split('#')[0];
                        var arr = queryString.split('&');
                        for (var i = 0; i < arr.length; i++) {
                            var a = arr[i].split('=');
                            var paramNum = undefined;
                            var paramName = a[0].replace(/\[\d*\]/, function (v) {
                                paramNum = v.slice(1, -1);
                                return '';
                            });
                            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
                            if (obj[paramName]) {
                                if (typeof obj[paramName] === 'string') {
                                    obj[paramName] = [obj[paramName]];
                                }
                                if (typeof paramNum === 'undefined') {
                                    obj[paramName].push(paramValue);
                                }
                                else {
                                    obj[paramName][paramNum] = paramValue;
                                }
                            }
                            else {
                                obj[paramName] = paramValue;
                            }
                        }
                    }
                    return obj;
                }
            };
            exports_177("Url", Url);
        }
    };
});
System.register("Starter/ResolvePaths", ["Di/Service"], function (exports_178, context_178) {
    "use strict";
    var __moduleName = context_178 && context_178.id;
    var Service_112, ResolvePaths;
    return {
        setters: [
            function (Service_112_1) {
                Service_112 = Service_112_1;
            }
        ],
        execute: function () {
            ResolvePaths = class ResolvePaths {
                /**
                 *
                 * @param paths
                 */
                constructor(paths) {
                    this.paths = paths;
                    this.di = new Service_112.Service;
                }
                /**
                 *
                 */
                resolve() {
                    for (let key in this.paths) {
                        this.di.get("url").set(key, this.paths[key]);
                    }
                }
            };
            exports_178("ResolvePaths", ResolvePaths);
        }
    };
});
System.register("Starter/ResolveService", ["Di/Di"], function (exports_179, context_179) {
    "use strict";
    var __moduleName = context_179 && context_179.id;
    var Di_2, ResolveService;
    return {
        setters: [
            function (Di_2_1) {
                Di_2 = Di_2_1;
            }
        ],
        execute: function () {
            ResolveService = class ResolveService {
                /**
                 *
                 */
                constructor(service = false) {
                    if (service == false) {
                        throw "Config : Service must be a json object";
                    }
                    ;
                    this.service = new service;
                }
                /**
                 *
                 */
                resolve() {
                    this.service.initialize(new Di_2.Di);
                }
            };
            exports_179("ResolveService", ResolveService);
        }
    };
});
System.register("Starter/Starter", ["Environment/Scope", "Starter/ResolveController", "Starter/ResolvePaths", "Starter/ResolveService"], function (exports_180, context_180) {
    "use strict";
    var __moduleName = context_180 && context_180.id;
    var Scope_2, ResolveController_1, ResolvePaths_1, ResolveService_1, Starter;
    return {
        setters: [
            function (Scope_2_1) {
                Scope_2 = Scope_2_1;
            },
            function (ResolveController_1_1) {
                ResolveController_1 = ResolveController_1_1;
            },
            function (ResolvePaths_1_1) {
                ResolvePaths_1 = ResolvePaths_1_1;
            },
            function (ResolveService_1_1) {
                ResolveService_1 = ResolveService_1_1;
            }
        ],
        execute: function () {
            Starter = class Starter {
                /**
                 *
                 */
                constructor() {
                    /**
                     *
                     */
                    this.scope = Scope_2.Scope.DEV;
                }
                /**
                 *
                 * @param scope
                 */
                setScope(scope) {
                    this.scope = scope;
                }
                /**
                 *
                 */
                getScope() {
                    return this.scope;
                }
                /**
                 *
                 */
                setControllers(controllers) {
                    this.controllers = controllers;
                }
                /**
                 *
                 */
                getControllers() {
                    return this.controllers;
                }
                /**
                 *
                 * @param config
                 */
                setConfig(config) {
                    this.config = config;
                }
                /**
                 *
                 */
                getConfig() {
                    return this.config.get();
                }
                /**
                 *
                 * @param data
                 */
                setData(data) {
                    this.data = data;
                }
                /**
                 *
                 */
                getData() {
                    return this.data;
                }
                /**
                 *
                 */
                resolvePath() {
                    let config = this.getConfig();
                    if (typeof config["paths"] == "undefined") {
                        throw "Config: item paths must be mandatory.";
                    }
                    new ResolvePaths_1.ResolvePaths(config["paths"]).resolve();
                }
                /**
                 *
                 */
                resolveService() {
                    let config = this.getConfig();
                    if (typeof config["service"] != "undefined") {
                        new ResolveService_1.ResolveService(config["service"]).resolve();
                    }
                }
                /**
                 *
                 */
                resolveControllers() {
                    let config = this.getConfig();
                    if (typeof config["controllers"] == "undefined") {
                        throw "Config: item controllers must be mandatory.";
                    }
                    new ResolveController_1.ResolveController(config["controllers"]).resolve();
                }
                /**
                 *
                 */
                start() {
                    this.resolvePath();
                    this.resolveService();
                    this.resolveControllers();
                }
            };
            exports_180("Starter", Starter);
        }
    };
});
System.register("Starter/Injector/InitializeComponents", ["Url/Url", "Helper/Uuid", "Network/Ajax", "Persistence/EntityManager", "Mvc/View/Html/Dom/CssManager", "Mvc/View/Html/Dom/DomManager", "Mvc/View/Html/Dom/EventManager", "Mvc/View/Html/Dom/ParentManager", "Mvc/View/Html/Dom/ElementManager"], function (exports_181, context_181) {
    "use strict";
    var __moduleName = context_181 && context_181.id;
    var Url_1, Uuid_2, Ajax_2, EntityManager_1, CssManager_1, DomManager_1, EventManager_1, ParentManager_1, ElementManager_1, InitializeComponents;
    return {
        setters: [
            function (Url_1_1) {
                Url_1 = Url_1_1;
            },
            function (Uuid_2_1) {
                Uuid_2 = Uuid_2_1;
            },
            function (Ajax_2_1) {
                Ajax_2 = Ajax_2_1;
            },
            function (EntityManager_1_1) {
                EntityManager_1 = EntityManager_1_1;
            },
            function (CssManager_1_1) {
                CssManager_1 = CssManager_1_1;
            },
            function (DomManager_1_1) {
                DomManager_1 = DomManager_1_1;
            },
            function (EventManager_1_1) {
                EventManager_1 = EventManager_1_1;
            },
            function (ParentManager_1_1) {
                ParentManager_1 = ParentManager_1_1;
            },
            function (ElementManager_1_1) {
                ElementManager_1 = ElementManager_1_1;
            }
        ],
        execute: function () {
            InitializeComponents = class InitializeComponents {
                /**
                 *
                 * @param di
                 */
                constructor(di) {
                    this.di = di;
                }
                /**
                 *
                 */
                inject() {
                    this.di.set("Chronos.Dom.CssManager", new CssManager_1.CssManager);
                    this.di.set("Chronos.Dom.ParentManager", new ParentManager_1.ParentManager);
                    this.di.set("Chronos.Dom.ElementManager", new ElementManager_1.ElementManager);
                    this.di.set("dom", new DomManager_1.DomManager);
                    this.di.set("eventManager", new EventManager_1.EventManager);
                    this.di.set("ajax", new Ajax_2.Ajax);
                    this.di.set("em", new EntityManager_1.EntityManager);
                    this.di.set("uuid", new Uuid_2.Uuid);
                    this.di.set("url", new Url_1.Url);
                }
            };
            exports_181("InitializeComponents", InitializeComponents);
        }
    };
});
System.register("Starter/Application", ["Starter/Starter", "Di/Service", "Starter/Injector/InitializeComponents"], function (exports_182, context_182) {
    "use strict";
    var __moduleName = context_182 && context_182.id;
    var Starter_1, Service_113, InitializeComponents_1, Application;
    return {
        setters: [
            function (Starter_1_1) {
                Starter_1 = Starter_1_1;
            },
            function (Service_113_1) {
                Service_113 = Service_113_1;
            },
            function (InitializeComponents_1_1) {
                InitializeComponents_1 = InitializeComponents_1_1;
            }
        ],
        execute: function () {
            Application = class Application {
                /**
                 *
                 */
                constructor(config) {
                    this.config = config;
                    this.fetchDi();
                    window.onbeforeunload = function () {
                        sessionStorage.clear();
                    };
                }
                /**
                 *
                 */
                fetchDi() {
                    let injector = new InitializeComponents_1.InitializeComponents(new Service_113.Service);
                    injector.inject();
                }
                /**
                 *
                 */
                start() {
                    let starter = new Starter_1.Starter;
                    starter.setConfig(this.config);
                    starter.start();
                }
            };
            exports_182("Application", Application);
        }
    };
});
