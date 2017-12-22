(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("APICLIENT", [], factory);
	else if(typeof exports === 'object')
		exports["APICLIENT"] = factory();
	else
		root["APICLIENT"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(11);
var isBuffer = __webpack_require__(35);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validation types.
 */
var ValidationTypes = (function () {
    function ValidationTypes() {
    }
    /**
     * Checks if validation type is valid.
     */
    ValidationTypes.isValid = function (type) {
        var _this = this;
        return type !== "isValid" &&
            type !== "getMessage" &&
            Object.keys(this).map(function (key) { return _this[key]; }).indexOf(type) !== -1;
    };
    /**
     * Gets default validation error message for the given validation type.
     */
    ValidationTypes.getMessage = function (type, isEach) {
        var eachPrefix = isEach ? "each value in " : "";
        switch (type) {
            /* common checkers */
            case this.IS_DEFINED:
                return eachPrefix + "$property should not be null or undefined";
            case this.EQUALS:
                return eachPrefix + "$property must be equal to $constraint1";
            case this.NOT_EQUALS:
                return eachPrefix + "$property should not be equal to $constraint1";
            case this.IS_EMPTY:
                return eachPrefix + "$property must be empty";
            case this.IS_NOT_EMPTY:
                return eachPrefix + "$property should not be empty";
            case this.IS_IN:
                return eachPrefix + "$property must be one of the following values: $constraint1";
            case this.IS_NOT_IN:
                return eachPrefix + "$property should not be one of the following values: $constraint1";
            /* type checkers */
            case this.IS_BOOLEAN:
                return eachPrefix + "$property must be a boolean value";
            case this.IS_DATE:
                return eachPrefix + "$property must be a Date instance";
            case this.IS_NUMBER:
                return eachPrefix + "$property must be a number";
            case this.IS_INT:
                return eachPrefix + "$property must be an integer number";
            case this.IS_STRING:
                return eachPrefix + "$property must be a string";
            case this.IS_DATE_STRING:
                return eachPrefix + "$property must be a ISOString";
            case this.IS_ARRAY:
                return eachPrefix + "$property must be an array";
            case this.IS_ENUM:
                return eachPrefix + "$property must be a valid enum value";
            /* number checkers */
            case this.IS_DIVISIBLE_BY:
                return eachPrefix + "$property must be divisible by $constraint1";
            case this.IS_POSITIVE:
                return eachPrefix + "$property must be a positive number";
            case this.IS_NEGATIVE:
                return eachPrefix + "$property must be a negative number";
            case this.MIN:
                return eachPrefix + "$property must be greater than $constraint1";
            case this.MAX:
                return eachPrefix + "$property must be less than $constraint1";
            /* date checkers */
            case this.MIN_DATE:
                return "minimal allowed date for " + eachPrefix + "$property is $constraint1";
            case this.MAX_DATE:
                return "maximal allowed date for " + eachPrefix + "$property is $constraint1";
            /* string-as-type checkers */
            case this.IS_BOOLEAN_STRING:
                return eachPrefix + "$property must be a boolean string";
            case this.IS_NUMBER_STRING:
                return eachPrefix + "$property must be a number string";
            /* string checkers */
            case this.CONTAINS:
                return eachPrefix + "$property must contain a $constraint1 string";
            case this.NOT_CONTAINS:
                return eachPrefix + "$property should not contain a $constraint1 string";
            case this.IS_ALPHA:
                return eachPrefix + "$property must contain only letters (a-zA-Z)";
            case this.IS_ALPHANUMERIC:
                return eachPrefix + "$property must contain only letters and numbers";
            case this.IS_ASCII:
                return eachPrefix + "$property must contain only ASCII characters";
            case this.IS_BASE64:
                return eachPrefix + "$property must be base64 encoded";
            case this.IS_BYTE_LENGTH:
                return eachPrefix + "$property's byte length must fall into ($constraint1, $constraint2) range";
            case this.IS_CREDIT_CARD:
                return eachPrefix + "$property must be a credit card";
            case this.IS_CURRENCY:
                return eachPrefix + "$property must be a currency";
            case this.IS_EMAIL:
                return eachPrefix + "$property must be an email";
            case this.IS_FQDN:
                return eachPrefix + "$property must be a valid domain name";
            case this.IS_FULL_WIDTH:
                return eachPrefix + "$property must contain a full-width characters";
            case this.IS_HALF_WIDTH:
                return eachPrefix + "$property must contain a half-width characters";
            case this.IS_VARIABLE_WIDTH:
                return eachPrefix + "$property must contain a full-width and half-width characters";
            case this.IS_HEX_COLOR:
                return eachPrefix + "$property must be a hexadecimal color";
            case this.IS_HEXADECIMAL:
                return eachPrefix + "$property must be a hexadecimal number";
            case this.IS_IP:
                return eachPrefix + "$property must be an ip address";
            case this.IS_ISBN:
                return eachPrefix + "$property must be an ISBN";
            case this.IS_ISIN:
                return eachPrefix + "$property must be an ISIN (stock/security identifier)";
            case this.IS_ISO8601:
                return eachPrefix + "$property must be a valid ISO 8601 date string";
            case this.IS_JSON:
                return eachPrefix + "$property must be a json string";
            case this.IS_LOWERCASE:
                return eachPrefix + "$property must be a lowercase string";
            case this.IS_MOBILE_PHONE:
                return eachPrefix + "$property must be a phone number";
            case this.IS_MONGO_ID:
                return eachPrefix + "$property must be a mongodb id";
            case this.IS_MULTIBYTE:
                return eachPrefix + "$property must contain one or more multibyte chars";
            case this.IS_SURROGATE_PAIR:
                return eachPrefix + "$property must contain any surrogate pairs chars";
            case this.IS_URL:
                return eachPrefix + "$property must be an URL address";
            case this.IS_UUID:
                return eachPrefix + "$property must be an UUID";
            case this.IS_UPPERCASE:
                return eachPrefix + "$property must be uppercase";
            case this.LENGTH:
                return function (args) {
                    var isMinLength = args.constraints[0] !== null && args.constraints[0] !== undefined;
                    var isMaxLength = args.constraints[1] !== null && args.constraints[1] !== undefined;
                    if (isMinLength && (!args.value || args.value.length < args.constraints[0])) {
                        return eachPrefix + "$property must be longer than $constraint1 characters";
                    }
                    else if (isMaxLength && (args.value.length > args.constraints[1])) {
                        return eachPrefix + "$property must be shorter than $constraint2 characters";
                    }
                    return eachPrefix + "$property must be longer than $constraint1 and shorter than $constraint2 characters";
                };
            case this.MIN_LENGTH:
                return eachPrefix + "$property must be longer than or equal to $constraint1 characters";
            case this.MAX_LENGTH:
                return eachPrefix + "$property must be shorter than or equal to $constraint1 characters";
            case this.MATCHES:
                return eachPrefix + "$property must match $constraint1 regular expression";
            /* array checkers */
            case this.ARRAY_CONTAINS:
                return eachPrefix + "$property must contain $constraint1 values";
            case this.ARRAY_NOT_CONTAINS:
                return eachPrefix + "$property should not contain $constraint1 values";
            case this.ARRAY_NOT_EMPTY:
                return eachPrefix + "$property should not be empty";
            case this.ARRAY_MIN_SIZE:
                return eachPrefix + "$property must contain at least $constraint1 elements";
            case this.ARRAY_MAX_SIZE:
                return eachPrefix + "$property must contain not more than $constraint1 elements";
            case this.ARRAY_UNIQUE:
                return eachPrefix + "All $property's elements must be unique";
        }
        return "";
    };
    return ValidationTypes;
}());
/* system */
ValidationTypes.CUSTOM_VALIDATION = "customValidation";
ValidationTypes.NESTED_VALIDATION = "nestedValidation";
ValidationTypes.CONDITIONAL_VALIDATION = "conditionalValidation";
/* common checkers */
ValidationTypes.IS_DEFINED = "isDefined";
ValidationTypes.EQUALS = "equals";
ValidationTypes.NOT_EQUALS = "notEquals";
ValidationTypes.IS_EMPTY = "isEmpty";
ValidationTypes.IS_NOT_EMPTY = "isNotEmpty";
ValidationTypes.IS_IN = "isIn";
ValidationTypes.IS_NOT_IN = "isNotIn";
/* type checkers */
ValidationTypes.IS_BOOLEAN = "isBoolean";
ValidationTypes.IS_DATE = "isDate";
ValidationTypes.IS_NUMBER = "isNumber";
ValidationTypes.IS_STRING = "isString";
ValidationTypes.IS_DATE_STRING = "isDateString";
ValidationTypes.IS_ARRAY = "isArray";
ValidationTypes.IS_INT = "isInt";
ValidationTypes.IS_ENUM = "isEnum";
/* number checkers */
ValidationTypes.IS_DIVISIBLE_BY = "isDivisibleBy";
ValidationTypes.IS_POSITIVE = "isPositive";
ValidationTypes.IS_NEGATIVE = "isNegative";
ValidationTypes.MIN = "min";
ValidationTypes.MAX = "max";
/* date checkers */
ValidationTypes.MIN_DATE = "minDate";
ValidationTypes.MAX_DATE = "maxDate";
/* string-as-type checkers */
ValidationTypes.IS_BOOLEAN_STRING = "isBooleanString";
ValidationTypes.IS_NUMBER_STRING = "isNumberString";
/* string checkers */
ValidationTypes.CONTAINS = "contains";
ValidationTypes.NOT_CONTAINS = "notContains";
ValidationTypes.IS_ALPHA = "isAlpha";
ValidationTypes.IS_ALPHANUMERIC = "isAlphanumeric";
ValidationTypes.IS_ASCII = "isAscii";
ValidationTypes.IS_BASE64 = "isBase64";
ValidationTypes.IS_BYTE_LENGTH = "isByteLength";
ValidationTypes.IS_CREDIT_CARD = "isCreditCard";
ValidationTypes.IS_CURRENCY = "isCurrency";
ValidationTypes.IS_EMAIL = "isEmail";
ValidationTypes.IS_FQDN = "isFqdn";
ValidationTypes.IS_FULL_WIDTH = "isFullWidth";
ValidationTypes.IS_HALF_WIDTH = "isHalfWidth";
ValidationTypes.IS_VARIABLE_WIDTH = "isVariableWidth";
ValidationTypes.IS_HEX_COLOR = "isHexColor";
ValidationTypes.IS_HEXADECIMAL = "isHexadecimal";
ValidationTypes.IS_IP = "isIp";
ValidationTypes.IS_ISBN = "isIsbn";
ValidationTypes.IS_ISIN = "isIsin";
ValidationTypes.IS_ISO8601 = "isIso8601";
ValidationTypes.IS_JSON = "isJson";
ValidationTypes.IS_LOWERCASE = "isLowercase";
ValidationTypes.IS_MOBILE_PHONE = "isMobilePhone";
ValidationTypes.IS_MONGO_ID = "isMongoId";
ValidationTypes.IS_MULTIBYTE = "isMultibyte";
ValidationTypes.IS_SURROGATE_PAIR = "isSurrogatePair";
ValidationTypes.IS_URL = "isUrl";
ValidationTypes.IS_UUID = "isUuid";
ValidationTypes.LENGTH = "length";
ValidationTypes.IS_UPPERCASE = "isUppercase";
ValidationTypes.MIN_LENGTH = "minLength";
ValidationTypes.MAX_LENGTH = "maxLength";
ValidationTypes.MATCHES = "matches";
ValidationTypes.IS_MILITARY_TIME = "isMilitaryTime";
/* array checkers */
ValidationTypes.ARRAY_CONTAINS = "arrayContains";
ValidationTypes.ARRAY_NOT_CONTAINS = "arrayNotContains";
ValidationTypes.ARRAY_NOT_EMPTY = "arrayNotEmpty";
ValidationTypes.ARRAY_MIN_SIZE = "arrayMinSize";
ValidationTypes.ARRAY_MAX_SIZE = "arrayMaxSize";
ValidationTypes.ARRAY_UNIQUE = "arrayUnique";
exports.ValidationTypes = ValidationTypes;

//# sourceMappingURL=ValidationTypes.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Container to be used by this library for inversion control. If container was not implicitly set then by default
 * container simply creates a new instance of the given class.
 */
var defaultContainer = new ((function () {
    function class_1() {
        this.instances = [];
    }
    class_1.prototype.get = function (someClass) {
        var instance = this.instances.find(function (instance) { return instance.type === someClass; });
        if (!instance) {
            instance = { type: someClass, object: new someClass() };
            this.instances.push(instance);
        }
        return instance.object;
    };
    return class_1;
}()))();
var userContainer;
var userContainerOptions;
/**
 * Sets container to be used by this library.
 */
function useContainer(iocContainer, options) {
    userContainer = iocContainer;
    userContainerOptions = options;
}
exports.useContainer = useContainer;
/**
 * Gets the IOC container used by this library.
 */
function getFromContainer(someClass) {
    if (userContainer) {
        try {
            var instance = userContainer.get(someClass);
            if (instance)
                return instance;
            if (!userContainerOptions || !userContainerOptions.fallback)
                return instance;
        }
        catch (error) {
            if (!userContainerOptions || !userContainerOptions.fallbackOnErrors)
                throw error;
        }
    }
    return defaultContainer.get(someClass);
}
exports.getFromContainer = getFromContainer;

//# sourceMappingURL=container.js.map


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ValidationSchemaToMetadataTransformer_1 = __webpack_require__(53);
/**
 * Storage all metadatas.
 */
var MetadataStorage = (function () {
    function MetadataStorage() {
        // -------------------------------------------------------------------------
        // Private properties
        // -------------------------------------------------------------------------
        this.validationMetadatas = [];
        this.constraintMetadatas = [];
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Adds a new validation metadata.
     */
    MetadataStorage.prototype.addValidationSchema = function (schema) {
        var _this = this;
        var validationMetadatas = new ValidationSchemaToMetadataTransformer_1.ValidationSchemaToMetadataTransformer().transform(schema);
        validationMetadatas.forEach(function (validationMetadata) { return _this.addValidationMetadata(validationMetadata); });
    };
    /**
     * Adds a new validation metadata.
     */
    MetadataStorage.prototype.addValidationMetadata = function (metadata) {
        this.validationMetadatas.push(metadata);
    };
    /**
     * Adds a new constraint metadata.
     */
    MetadataStorage.prototype.addConstraintMetadata = function (metadata) {
        this.constraintMetadatas.push(metadata);
    };
    /**
     * Groups metadata by their property names.
     */
    MetadataStorage.prototype.groupByPropertyName = function (metadata) {
        var grouped = {};
        metadata.forEach(function (metadata) {
            if (!grouped[metadata.propertyName])
                grouped[metadata.propertyName] = [];
            grouped[metadata.propertyName].push(metadata);
        });
        return grouped;
    };
    /**
     * Gets all validation metadatas for the given object with the given groups.
     */
    MetadataStorage.prototype.getTargetValidationMetadatas = function (targetConstructor, targetSchema, groups) {
        // get directly related to a target metadatas
        var originalMetadatas = this.validationMetadatas.filter(function (metadata) {
            if (metadata.target !== targetConstructor && metadata.target !== targetSchema)
                return false;
            if (metadata.always)
                return true;
            if (groups && groups.length > 0)
                return metadata.groups && !!metadata.groups.find(function (group) { return groups.indexOf(group) !== -1; });
            return true;
        });
        // get metadatas for inherited classes
        var inheritedMetadatas = this.validationMetadatas.filter(function (metadata) {
            if (metadata.target === targetConstructor)
                return false;
            if (metadata.target instanceof Function &&
                !(targetConstructor.prototype instanceof metadata.target))
                return false;
            if (metadata.always)
                return true;
            if (groups && groups.length > 0)
                return metadata.groups && !!metadata.groups.find(function (group) { return groups.indexOf(group) !== -1; });
            return true;
        });
        // filter out duplicate metadatas, prefer original metadatas instead of inherited metadatas
        var uniqueInheritedMetadatas = inheritedMetadatas.filter(function (inheritedMetadata) {
            return !originalMetadatas.find(function (originalMetadata) {
                return originalMetadata.propertyName === inheritedMetadata.propertyName &&
                    originalMetadata.type === inheritedMetadata.type;
            });
        });
        return originalMetadatas.concat(uniqueInheritedMetadatas);
    };
    /**
     * Gets all validator constraints for the given object.
     */
    MetadataStorage.prototype.getTargetValidatorConstraints = function (target) {
        return this.constraintMetadatas.filter(function (metadata) { return metadata.target === target; });
    };
    return MetadataStorage;
}());
exports.MetadataStorage = MetadataStorage;

//# sourceMappingURL=MetadataStorage.js.map


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var normalizeHeaderName = __webpack_require__(37);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(13);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(13);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This metadata contains validation rules.
 */
var ValidationMetadata = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ValidationMetadata(args) {
        /**
         * Validation groups used for this validation.
         */
        this.groups = [];
        /**
         * Indicates if validation must be performed always, no matter of validation groups used.
         */
        this.always = false;
        /**
         * Specifies if validated value is an array and each of its item must be validated.
         */
        this.each = false;
        this.type = args.type;
        this.target = args.target;
        this.propertyName = args.propertyName;
        this.constraints = args.constraints;
        this.constraintCls = args.constraintCls;
        this.validationTypeOptions = args.validationTypeOptions;
        if (args.validationOptions) {
            this.message = args.validationOptions.message;
            this.groups = args.validationOptions.groups;
            this.always = args.validationOptions.always;
            this.each = args.validationOptions.each;
        }
    }
    return ValidationMetadata;
}());
exports.ValidationMetadata = ValidationMetadata;

//# sourceMappingURL=ValidationMetadata.js.map


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString2.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toString;
function toString(input) {
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }
  return String(input);
}
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var settle = __webpack_require__(38);
var buildURL = __webpack_require__(40);
var parseHeaders = __webpack_require__(41);
var isURLSameOrigin = __webpack_require__(42);
var createError = __webpack_require__(14);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(43);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(44);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(39);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var MetadataStorage_1 = __webpack_require__(4);
var Validator_1 = __webpack_require__(18);
var container_1 = __webpack_require__(3);
// -------------------------------------------------------------------------
// Export everything api users needs
// -------------------------------------------------------------------------
__export(__webpack_require__(3));
__export(__webpack_require__(105));
__export(__webpack_require__(19));
__export(__webpack_require__(2));
__export(__webpack_require__(18));
__export(__webpack_require__(106));
__export(__webpack_require__(4));
/**
 * Validates given object by object's decorators or given validation schema.
 */
function validate(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === "string") {
        return container_1.getFromContainer(Validator_1.Validator).validate(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return container_1.getFromContainer(Validator_1.Validator).validate(schemaNameOrObject, objectOrValidationOptions);
    }
}
exports.validate = validate;
/**
 * Validates given object by object's decorators or given validation schema and reject on error.
 */
function validateOrReject(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === "string") {
        return container_1.getFromContainer(Validator_1.Validator).validateOrReject(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return container_1.getFromContainer(Validator_1.Validator).validateOrReject(schemaNameOrObject, objectOrValidationOptions);
    }
}
exports.validateOrReject = validateOrReject;
/**
 * Validates given object by object's decorators or given validation schema.
 * Note that this method completely ignores async validations.
 * If you want to properly perform validation you need to call validate method instead.
 */
function validateSync(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === "string") {
        return container_1.getFromContainer(Validator_1.Validator).validateSync(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return container_1.getFromContainer(Validator_1.Validator).validateSync(schemaNameOrObject, objectOrValidationOptions);
    }
}
exports.validateSync = validateSync;
/**
 * Registers a new validation schema.
 */
function registerSchema(schema) {
    container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationSchema(schema);
}
exports.registerSchema = registerSchema;

//# sourceMappingURL=index.js.map


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationTypes_1 = __webpack_require__(2);
var ValidationExecutor_1 = __webpack_require__(54);
/**
 * Validator performs validation of the given object based on its metadata.
 */
var Validator = (function () {
    function Validator() {
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        this.validatorJs = __webpack_require__(56);
    }
    /**
     * Performs validation of the given object based on decorators or validation schema.
     * Common method for `validateOrReject` and `validate` methods.
     */
    Validator.prototype.coreValidate = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        var object = typeof objectOrSchemaName === "string" ? objectOrValidationOptions : objectOrSchemaName;
        var options = typeof objectOrSchemaName === "string" ? maybeValidatorOptions : objectOrValidationOptions;
        var schema = typeof objectOrSchemaName === "string" ? objectOrSchemaName : undefined;
        var executor = new ValidationExecutor_1.ValidationExecutor(this, options);
        var validationErrors = [];
        executor.execute(object, schema, validationErrors);
        return Promise.all(executor.awaitingPromises).then(function () {
            return executor.stripEmptyErrors(validationErrors);
        });
    };
    /**
     * Performs validation of the given object based on decorators or validation schema.
     */
    Validator.prototype.validate = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        return this.coreValidate(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions);
    };
    /**
     * Performs validation of the given object based on decorators or validation schema and reject on error.
     */
    Validator.prototype.validateOrReject = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var errors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.coreValidate(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length)
                            return [2 /*return*/, Promise.reject(errors)];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Performs validation of the given object based on decorators or validation schema.
     */
    Validator.prototype.validateSync = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        var object = typeof objectOrSchemaName === "string" ? objectOrValidationOptions : objectOrSchemaName;
        var options = typeof objectOrSchemaName === "string" ? maybeValidatorOptions : objectOrValidationOptions;
        var schema = typeof objectOrSchemaName === "string" ? objectOrSchemaName : undefined;
        var executor = new ValidationExecutor_1.ValidationExecutor(this, options);
        executor.ignoreAsyncValidations = true;
        var validationErrors = [];
        executor.execute(object, schema, validationErrors);
        return executor.stripEmptyErrors(validationErrors);
    };
    /**
     * Performs validation of the given object based on the given ValidationMetadata object.
     */
    Validator.prototype.validateValueByMetadata = function (value, metadata) {
        switch (metadata.type) {
            /* common checkers */
            case ValidationTypes_1.ValidationTypes.IS_DEFINED:
                return this.isDefined(value);
            case ValidationTypes_1.ValidationTypes.EQUALS:
                return this.equals(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.NOT_EQUALS:
                return this.notEquals(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_EMPTY:
                return this.isEmpty(value);
            case ValidationTypes_1.ValidationTypes.IS_NOT_EMPTY:
                return this.isNotEmpty(value);
            case ValidationTypes_1.ValidationTypes.IS_IN:
                return this.isIn(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_NOT_IN:
                return this.isNotIn(value, metadata.constraints[0]);
            /* type checkers */
            case ValidationTypes_1.ValidationTypes.IS_BOOLEAN:
                return this.isBoolean(value);
            case ValidationTypes_1.ValidationTypes.IS_DATE:
                return this.isDate(value);
            case ValidationTypes_1.ValidationTypes.IS_STRING:
                return this.isString(value);
            case ValidationTypes_1.ValidationTypes.IS_DATE_STRING:
                return this.isDateString(value);
            case ValidationTypes_1.ValidationTypes.IS_ARRAY:
                return this.isArray(value);
            case ValidationTypes_1.ValidationTypes.IS_NUMBER:
                return this.isNumber(value);
            case ValidationTypes_1.ValidationTypes.IS_INT:
                return this.isInt(value);
            case ValidationTypes_1.ValidationTypes.IS_ENUM:
                return this.isEnum(value, metadata.constraints[0]);
            /* number checkers */
            case ValidationTypes_1.ValidationTypes.IS_DIVISIBLE_BY:
                return this.isDivisibleBy(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_POSITIVE:
                return this.isPositive(value);
            case ValidationTypes_1.ValidationTypes.IS_NEGATIVE:
                return this.isNegative(value);
            case ValidationTypes_1.ValidationTypes.MIN:
                return this.min(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.MAX:
                return this.max(value, metadata.constraints[0]);
            /* date checkers */
            case ValidationTypes_1.ValidationTypes.MIN_DATE:
                return this.minDate(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.MAX_DATE:
                return this.maxDate(value, metadata.constraints[0]);
            /* string-as-type checkers */
            case ValidationTypes_1.ValidationTypes.IS_BOOLEAN_STRING:
                return this.isBooleanString(value);
            case ValidationTypes_1.ValidationTypes.IS_NUMBER_STRING:
                return this.isNumberString(value);
            /* string checkers */
            case ValidationTypes_1.ValidationTypes.CONTAINS:
                return this.contains(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.NOT_CONTAINS:
                return this.notContains(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_ALPHA:
                return this.isAlpha(value);
            case ValidationTypes_1.ValidationTypes.IS_ALPHANUMERIC:
                return this.isAlphanumeric(value);
            case ValidationTypes_1.ValidationTypes.IS_ASCII:
                return this.isAscii(value);
            case ValidationTypes_1.ValidationTypes.IS_BASE64:
                return this.isBase64(value);
            case ValidationTypes_1.ValidationTypes.IS_BYTE_LENGTH:
                return this.isByteLength(value, metadata.constraints[0], metadata.constraints[1]);
            case ValidationTypes_1.ValidationTypes.IS_CREDIT_CARD:
                return this.isCreditCard(value);
            case ValidationTypes_1.ValidationTypes.IS_CURRENCY:
                return this.isCurrency(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_EMAIL:
                return this.isEmail(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_FQDN:
                return this.isFQDN(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_FULL_WIDTH:
                return this.isFullWidth(value);
            case ValidationTypes_1.ValidationTypes.IS_HALF_WIDTH:
                return this.isHalfWidth(value);
            case ValidationTypes_1.ValidationTypes.IS_VARIABLE_WIDTH:
                return this.isVariableWidth(value);
            case ValidationTypes_1.ValidationTypes.IS_HEX_COLOR:
                return this.isHexColor(value);
            case ValidationTypes_1.ValidationTypes.IS_HEXADECIMAL:
                return this.isHexadecimal(value);
            case ValidationTypes_1.ValidationTypes.IS_IP:
                return this.isIP(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_ISBN:
                return this.isISBN(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_ISIN:
                return this.isISIN(value);
            case ValidationTypes_1.ValidationTypes.IS_ISO8601:
                return this.isISO8601(value);
            case ValidationTypes_1.ValidationTypes.IS_JSON:
                return this.isJSON(value);
            case ValidationTypes_1.ValidationTypes.IS_LOWERCASE:
                return this.isLowercase(value);
            case ValidationTypes_1.ValidationTypes.IS_MOBILE_PHONE:
                return this.isMobilePhone(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_MONGO_ID:
                return this.isMongoId(value);
            case ValidationTypes_1.ValidationTypes.IS_MULTIBYTE:
                return this.isMultibyte(value);
            case ValidationTypes_1.ValidationTypes.IS_SURROGATE_PAIR:
                return this.isSurrogatePair(value);
            case ValidationTypes_1.ValidationTypes.IS_URL:
                return this.isURL(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_UUID:
                return this.isUUID(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.IS_UPPERCASE:
                return this.isUppercase(value);
            case ValidationTypes_1.ValidationTypes.LENGTH:
                return this.length(value, metadata.constraints[0], metadata.constraints[1]);
            case ValidationTypes_1.ValidationTypes.MIN_LENGTH:
                return this.minLength(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.MAX_LENGTH:
                return this.maxLength(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.MATCHES:
                return this.matches(value, metadata.constraints[0], metadata.constraints[1]);
            case ValidationTypes_1.ValidationTypes.IS_MILITARY_TIME:
                return this.isMilitaryTime(value);
            /* array checkers */
            case ValidationTypes_1.ValidationTypes.ARRAY_CONTAINS:
                return this.arrayContains(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.ARRAY_NOT_CONTAINS:
                return this.arrayNotContains(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.ARRAY_NOT_EMPTY:
                return this.arrayNotEmpty(value);
            case ValidationTypes_1.ValidationTypes.ARRAY_MIN_SIZE:
                return this.arrayMinSize(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.ARRAY_MAX_SIZE:
                return this.arrayMaxSize(value, metadata.constraints[0]);
            case ValidationTypes_1.ValidationTypes.ARRAY_UNIQUE:
                return this.arrayUnique(value);
        }
        return true;
    };
    // -------------------------------------------------------------------------
    // Validation Methods: common checkers
    // -------------------------------------------------------------------------
    /**
     * Checks if value is defined (!== undefined, !== null).
     */
    Validator.prototype.isDefined = function (value) {
        return value !== undefined && value !== null;
    };
    /**
     * Checks if value matches ("===") the comparison.
     */
    Validator.prototype.equals = function (value, comparison) {
        return value === comparison;
    };
    /**
     * Checks if value does not match ("!==") the comparison.
     */
    Validator.prototype.notEquals = function (value, comparison) {
        return value !== comparison;
    };
    /**
     * Checks if given value is empty (=== '', === null, === undefined).
     */
    Validator.prototype.isEmpty = function (value) {
        return value === "" || value === null || value === undefined;
    };
    /**
     * Checks if given value is not empty (!== '', !== null, !== undefined).
     */
    Validator.prototype.isNotEmpty = function (value) {
        return value !== "" && value !== null && value !== undefined;
    };
    /**
     * Checks if given value is in a array of allowed values.
     */
    Validator.prototype.isIn = function (value, possibleValues) {
        return !(possibleValues instanceof Array) || possibleValues.some(function (possibleValue) { return possibleValue === value; });
    };
    /**
     * Checks if given value not in a array of allowed values.
     */
    Validator.prototype.isNotIn = function (value, possibleValues) {
        return !(possibleValues instanceof Array) || !possibleValues.some(function (possibleValue) { return possibleValue === value; });
    };
    // -------------------------------------------------------------------------
    // Validation Methods: type checkers
    // -------------------------------------------------------------------------
    /**
     * Checks if a given value is a real boolean.
     */
    Validator.prototype.isBoolean = function (value) {
        return value instanceof Boolean || typeof value === "boolean";
    };
    /**
     * Checks if a given value is a real date.
     */
    Validator.prototype.isDate = function (value) {
        return value instanceof Date;
    };
    /**
     * Checks if a given value is a real string.
     */
    Validator.prototype.isString = function (value) {
        return value instanceof String || typeof value === "string";
    };
    /**
     * Checks if a given value is a ISOString date.
     */
    Validator.prototype.isDateString = function (value) {
        var regex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+Z?/g;
        return this.isString(value) && regex.test(value);
    };
    /**
     * Checks if a given value is an array
     */
    Validator.prototype.isArray = function (value) {
        return value instanceof Array;
    };
    /**
     * Checks if a given value is an enum
     */
    Validator.prototype.isEnum = function (value, entity) {
        var enumValues = Object.keys(entity)
            .map(function (k) { return entity[k]; });
        return enumValues.indexOf(value) >= 0;
    };
    /**
     * Checks if a given value is a real number.
     */
    Validator.prototype.isNumber = function (value) {
        return value instanceof Number || typeof value === "number";
    };
    /**
     * Checks if value is an integer.
     */
    Validator.prototype.isInt = function (val) {
        if (!this.isNumber(val))
            return false;
        var numberString = String(val); // fix it
        return this.validatorJs.isInt(numberString);
    };
    // -------------------------------------------------------------------------
    // Validation Methods: number checkers
    // -------------------------------------------------------------------------
    /**
     * Checks if value is a number that's divisible by another.
     */
    Validator.prototype.isDivisibleBy = function (value, num) {
        return typeof value === "number" &&
            typeof num === "number" &&
            this.validatorJs.isDivisibleBy(String(value), num);
    };
    /**
     * Checks if the value is a positive number.
     */
    Validator.prototype.isPositive = function (value) {
        return typeof value === "number" && value > 0;
    };
    /**
     * Checks if the value is a negative number.
     */
    Validator.prototype.isNegative = function (value) {
        return typeof value === "number" && value < 0;
    };
    /**
     * Checks if the first number is greater than second.
     */
    Validator.prototype.min = function (num, min) {
        return typeof num === "number" && typeof min === "number" && num >= min;
    };
    /**
     * Checks if the first number is less than second.
     */
    Validator.prototype.max = function (num, max) {
        return typeof num === "number" && typeof max === "number" && num <= max;
    };
    // -------------------------------------------------------------------------
    // Validation Methods: date checkers
    // -------------------------------------------------------------------------
    /**
     * Checks if the value is a date that's after the specified date.
     */
    Validator.prototype.minDate = function (date, minDate) {
        return date && date.getTime() >= minDate.getTime();
    };
    /**
     * Checks if the value is a date that's before the specified date.
     */
    Validator.prototype.maxDate = function (date, maxDate) {
        return date && date.getTime() <= maxDate.getTime();
    };
    // -------------------------------------------------------------------------
    // Validation Methods: string-as-type checkers
    // -------------------------------------------------------------------------
    /**
     * Checks if a string is a boolean.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isBooleanString = function (value) {
        return typeof value === "string" && this.validatorJs.isBoolean(value);
    };
    /**
     * Checks if the string is numeric.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isNumberString = function (value) {
        return typeof value === "string" && this.validatorJs.isNumeric(value);
    };
    // -------------------------------------------------------------------------
    // Validation Methods: string checkers
    // -------------------------------------------------------------------------
    /**
     * Checks if the string contains the seed.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.contains = function (value, seed) {
        return typeof value === "string" && this.validatorJs.contains(value, seed);
    };
    /**
     * Checks if the string does not contain the seed.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.notContains = function (value, seed) {
        return typeof value === "string" && !this.validatorJs.contains(value, seed);
    };
    /**
     * Checks if the string contains only letters (a-zA-Z).
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isAlpha = function (value) {
        return typeof value === "string" && this.validatorJs.isAlpha(value);
    };
    /**
     * Checks if the string contains only letters and numbers.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isAlphanumeric = function (value) {
        return typeof value === "string" && this.validatorJs.isAlphanumeric(value);
    };
    /**
     * Checks if the string contains ASCII chars only.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isAscii = function (value) {
        return typeof value === "string" && this.validatorJs.isAscii(value);
    };
    /**
     * Checks if a string is base64 encoded.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isBase64 = function (value) {
        return typeof value === "string" && this.validatorJs.isBase64(value);
    };
    /**
     * Checks if the string's length (in bytes) falls in a range.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isByteLength = function (value, min, max) {
        return typeof value === "string" && this.validatorJs.isByteLength(value, min, max);
    };
    /**
     * Checks if the string is a credit card.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isCreditCard = function (value) {
        return typeof value === "string" && this.validatorJs.isCreditCard(value);
    };
    /**
     * Checks if the string is a valid currency amount.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isCurrency = function (value, options) {
        return typeof value === "string" && this.validatorJs.isCurrency(value, options);
    };
    /**
     * Checks if the string is an email.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isEmail = function (value, options) {
        return typeof value === "string" && this.validatorJs.isEmail(value, options);
    };
    /**
     * Checks if the string is a fully qualified domain name (e.g. domain.com).
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isFQDN = function (value, options) {
        return typeof value === "string" && this.validatorJs.isFQDN(value, options);
    };
    /**
     * Checks if the string contains any full-width chars.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isFullWidth = function (value) {
        return typeof value === "string" && this.validatorJs.isFullWidth(value);
    };
    /**
     * Checks if the string contains any half-width chars.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isHalfWidth = function (value) {
        return typeof value === "string" && this.validatorJs.isHalfWidth(value);
    };
    /**
     * Checks if the string contains variable-width chars.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isVariableWidth = function (value) {
        return typeof value === "string" && this.validatorJs.isVariableWidth(value);
    };
    /**
     * Checks if the string is a hexadecimal color.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isHexColor = function (value) {
        return typeof value === "string" && this.validatorJs.isHexColor(value);
    };
    /**
     * Checks if the string is a hexadecimal number.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isHexadecimal = function (value) {
        return typeof value === "string" && this.validatorJs.isHexadecimal(value);
    };
    /**
     * Checks if the string is an IP (version 4 or 6).
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isIP = function (value, version) {
        return typeof value === "string" && this.validatorJs.isIP(value, version);
    };
    /**
     * Checks if the string is an ISBN (version 10 or 13).
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isISBN = function (value, version) {
        return typeof value === "string" && this.validatorJs.isISBN(value, version);
    };
    /**
     * Checks if the string is an ISIN (stock/security identifier).
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isISIN = function (value) {
        return typeof value === "string" && this.validatorJs.isISIN(value);
    };
    /**
     * Checks if the string is a valid ISO 8601 date.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isISO8601 = function (value) {
        return typeof value === "string" && this.validatorJs.isISO8601(value);
    };
    /**
     * Checks if the string is valid JSON (note: uses JSON.parse).
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isJSON = function (value) {
        return typeof value === "string" && this.validatorJs.isJSON(value);
    };
    /**
     * Checks if the string is lowercase.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isLowercase = function (value) {
        return typeof value === "string" && this.validatorJs.isLowercase(value);
    };
    /**
     * Checks if the string is a mobile phone number (locale is one of ['zh-CN', 'zh-TW', 'en-ZA', 'en-AU', 'en-HK',
     * 'pt-PT', 'fr-FR', 'el-GR', 'en-GB', 'en-US', 'en-ZM', 'ru-RU', 'nb-NO', 'nn-NO', 'vi-VN', 'en-NZ']).
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isMobilePhone = function (value, locale) {
        return typeof value === "string" && this.validatorJs.isMobilePhone(value, locale);
    };
    /**
     * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isMongoId = function (value) {
        return typeof value === "string" && this.validatorJs.isMongoId(value);
    };
    /**
     * Checks if the string contains one or more multibyte chars.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isMultibyte = function (value) {
        return typeof value === "string" && this.validatorJs.isMultibyte(value);
    };
    /**
     * Checks if the string contains any surrogate pairs chars.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isSurrogatePair = function (value) {
        return typeof value === "string" && this.validatorJs.isSurrogatePair(value);
    };
    /**
     * Checks if the string is an url.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isURL = function (value, options) {
        return typeof value === "string" && this.validatorJs.isURL(value, options);
    };
    /**
     * Checks if the string is a UUID (version 3, 4 or 5).
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isUUID = function (value, version) {
        return typeof value === "string" && this.validatorJs.isUUID(value, version);
    };
    /**
     * Checks if the string is uppercase.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.isUppercase = function (value) {
        return typeof value === "string" && this.validatorJs.isUppercase(value);
    };
    /**
     * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.length = function (value, min, max) {
        return typeof value === "string" && this.validatorJs.isLength(value, min, max);
    };
    /**
     * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.minLength = function (value, min) {
        return typeof value === "string" && this.length(value, min);
    };
    /**
     * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.maxLength = function (value, max) {
        return typeof value === "string" && this.length(value, 0, max);
    };
    /**
     * Checks if string matches the pattern. Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
     * If given value is not a string, then it returns false.
     */
    Validator.prototype.matches = function (value, pattern, modifiers) {
        return typeof value === "string" && this.validatorJs.matches(value, pattern, modifiers);
    };
    /**
     * Checks if the string represents a time without a given timezone in the format HH:MM (military)
     * If the given value does not match the pattern HH:MM, then it returns false.
     */
    Validator.prototype.isMilitaryTime = function (value) {
        return this.matches(value, /^([01]\d|2[0-3]):?([0-5]\d)$/);
    };
    // -------------------------------------------------------------------------
    // Validation Methods: array checkers
    // -------------------------------------------------------------------------
    /**
     * Checks if array contains all values from the given array of values.
     * If null or undefined is given then this function returns false.
     */
    Validator.prototype.arrayContains = function (array, values) {
        if (!(array instanceof Array))
            return false;
        return !array || values.every(function (value) { return array.indexOf(value) !== -1; });
    };
    /**
     * Checks if array does not contain any of the given values.
     * If null or undefined is given then this function returns false.
     */
    Validator.prototype.arrayNotContains = function (array, values) {
        if (!(array instanceof Array))
            return false;
        return !array || values.every(function (value) { return array.indexOf(value) === -1; });
    };
    /**
     * Checks if given array is not empty.
     * If null or undefined is given then this function returns false.
     */
    Validator.prototype.arrayNotEmpty = function (array) {
        if (!(array instanceof Array))
            return false;
        return array instanceof Array && array.length > 0;
    };
    /**
     * Checks if array's length is as minimal this number.
     * If null or undefined is given then this function returns false.
     */
    Validator.prototype.arrayMinSize = function (array, min) {
        if (!(array instanceof Array))
            return false;
        return array instanceof Array && array.length >= min;
    };
    /**
     * Checks if array's length is as maximal this number.
     * If null or undefined is given then this function returns false.
     */
    Validator.prototype.arrayMaxSize = function (array, max) {
        if (!(array instanceof Array))
            return false;
        return array instanceof Array && array.length <= max;
    };
    /**
     * Checks if all array's values are unique. Comparison for objects is reference-based.
     * If null or undefined is given then this function returns false.
     */
    Validator.prototype.arrayUnique = function (array) {
        if (!(array instanceof Array))
            return false;
        var uniqueItems = array.filter(function (a, b, c) { return c.indexOf(a) === b; });
        return array.length === uniqueItems.length;
    };
    return Validator;
}());
exports.Validator = Validator;

//# sourceMappingURL=Validator.js.map


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validation error description.
 */
var ValidationError = (function () {
    function ValidationError() {
    }
    return ValidationError;
}());
exports.ValidationError = ValidationError;

//# sourceMappingURL=ValidationError.js.map


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  (0, _assertString2.default)(str);
  return parseFloat(str);
}
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = __webpack_require__(22);

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = __webpack_require__(10);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var alpha = exports.alpha = {
  'en-US': /^[A-Z]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'nl-NL': /^[A-ZÉËÏÓÖÜ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphanumeric = exports.alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nl-NL': /^[0-9A-ZÉËÏÓÖÜ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var englishLocales = exports.englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = 'en-' + englishLocales[i];
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];

// Source: http://www.localeplanet.com/java/
var arabicLocales = exports.arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = 'ar-' + arabicLocales[_i];
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullWidth = undefined;
exports.default = isFullWidth;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isFullWidth(str) {
  (0, _assertString2.default)(str);
  return fullWidth.test(str);
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.halfWidth = undefined;
exports.default = isHalfWidth;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isHalfWidth(str) {
  (0, _assertString2.default)(str);
  return halfWidth.test(str);
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString2.default)(str);
  return hexadecimal.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
  return str.replace(pattern, '');
}
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

  var idx = str.length - 1;
  while (idx >= 0 && pattern.test(str[idx])) {
    idx--;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(3);
/**
 * This metadata interface contains information for custom validators.
 */
var ConstraintMetadata = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ConstraintMetadata(target, name, async) {
        if (async === void 0) { async = false; }
        this.target = target;
        this.name = name;
        this.async = async;
    }
    Object.defineProperty(ConstraintMetadata.prototype, "instance", {
        // -------------------------------------------------------------------------
        // Accessors
        // -------------------------------------------------------------------------
        /**
         * Instance of the target custom validation class which performs validation.
         */
        get: function () {
            return container_1.getFromContainer(this.target);
        },
        enumerable: true,
        configurable: true
    });
    return ConstraintMetadata;
}());
exports.ConstraintMetadata = ConstraintMetadata;

//# sourceMappingURL=ConstraintMetadata.js.map


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const axios = __webpack_require__(33);
const children_1 = __webpack_require__(52);
const observation_1 = __webpack_require__(107);
class APIClient {
    constructor(baseUrl) {
        this.client = axios.default.create({
            baseURL: baseUrl,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Client-Version": "0.1.0",
            },
            timeout: 1000,
        });
        this.children = new children_1.ChildrenResource(this.client);
        this.observation = new observation_1.ObservationResource(this.client);
    }
}
exports.default = APIClient;
//# sourceMappingURL=client.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var bind = __webpack_require__(11);
var Axios = __webpack_require__(36);
var defaults = __webpack_require__(6);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(16);
axios.CancelToken = __webpack_require__(50);
axios.isCancel = __webpack_require__(15);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(51);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(6);
var utils = __webpack_require__(1);
var InterceptorManager = __webpack_require__(45);
var dispatchRequest = __webpack_require__(46);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(14);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var transformData = __webpack_require__(47);
var isCancel = __webpack_require__(15);
var defaults = __webpack_require__(6);
var isAbsoluteURL = __webpack_require__(48);
var combineURLs = __webpack_require__(49);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(16);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
class ChildrenResource {
    constructor(client) {
        this.client = client;
    }
    getAll(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(`/getChildrenProfiles/?${uid}`);
        });
    }
    create(create) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield class_validator_1.validate(create);
            if (errors.length > 0) {
                throw new Error("Problem with request body, had errors: " + errors);
            }
            return yield this.client.post("/children/profiles", create);
        });
    }
    update(id, update) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield class_validator_1.validate(update);
            if (errors.length > 0) {
                throw new Error("Problem with request body, had errors: " + errors);
            }
            return yield this.client.patch(`/children/profiles/${id}`, update);
        });
    }
}
exports.ChildrenResource = ChildrenResource;
//# sourceMappingURL=children.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ValidationMetadata_1 = __webpack_require__(7);
var ValidationTypes_1 = __webpack_require__(2);
/**
 * Used to transform validation schemas to validation metadatas.
 */
var ValidationSchemaToMetadataTransformer = (function () {
    function ValidationSchemaToMetadataTransformer() {
    }
    ValidationSchemaToMetadataTransformer.prototype.transform = function (schema) {
        var metadatas = [];
        Object.keys(schema.properties).forEach(function (property) {
            schema.properties[property].forEach(function (validation) {
                if (!ValidationTypes_1.ValidationTypes.isValid(validation.type))
                    throw new Error("Validation schema " + schema.name + "#" + property + " as incorrect type " + validation.type);
                var validationOptions = {
                    message: validation.message,
                    groups: validation.groups,
                    always: validation.always,
                    each: validation.each
                };
                var args = {
                    type: validation.type,
                    target: schema.name,
                    propertyName: property,
                    constraints: validation.constraints,
                    validationTypeOptions: validation.options,
                    validationOptions: validationOptions
                };
                metadatas.push(new ValidationMetadata_1.ValidationMetadata(args));
            });
        });
        return metadatas;
    };
    return ValidationSchemaToMetadataTransformer;
}());
exports.ValidationSchemaToMetadataTransformer = ValidationSchemaToMetadataTransformer;

//# sourceMappingURL=ValidationSchemaToMetadataTransformer.js.map


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ValidationError_1 = __webpack_require__(19);
var MetadataStorage_1 = __webpack_require__(4);
var container_1 = __webpack_require__(3);
var ValidationTypes_1 = __webpack_require__(2);
var ValidationUtils_1 = __webpack_require__(55);
/**
 * Executes validation over given object.
 */
var ValidationExecutor = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ValidationExecutor(validator, validatorOptions) {
        this.validator = validator;
        this.validatorOptions = validatorOptions;
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this.awaitingPromises = [];
        this.ignoreAsyncValidations = false;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        this.metadataStorage = container_1.getFromContainer(MetadataStorage_1.MetadataStorage);
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    ValidationExecutor.prototype.execute = function (object, targetSchema, validationErrors) {
        var _this = this;
        var groups = this.validatorOptions ? this.validatorOptions.groups : undefined;
        var targetMetadatas = this.metadataStorage.getTargetValidationMetadatas(object.constructor, targetSchema, groups);
        var groupedMetadatas = this.metadataStorage.groupByPropertyName(targetMetadatas);
        Object.keys(groupedMetadatas).forEach(function (propertyName) {
            var value = object[propertyName];
            var definedMetadatas = groupedMetadatas[propertyName].filter(function (metadata) { return metadata.type === ValidationTypes_1.ValidationTypes.IS_DEFINED; });
            var metadatas = groupedMetadatas[propertyName].filter(function (metadata) { return metadata.type !== ValidationTypes_1.ValidationTypes.IS_DEFINED; });
            var customValidationMetadatas = metadatas.filter(function (metadata) { return metadata.type === ValidationTypes_1.ValidationTypes.CUSTOM_VALIDATION; });
            var nestedValidationMetadatas = metadatas.filter(function (metadata) { return metadata.type === ValidationTypes_1.ValidationTypes.NESTED_VALIDATION; });
            var conditionalValidationMetadatas = metadatas.filter(function (metadata) { return metadata.type === ValidationTypes_1.ValidationTypes.CONDITIONAL_VALIDATION; });
            var validationError = _this.generateValidationError(object, value, propertyName);
            validationErrors.push(validationError);
            var canValidate = _this.conditionalValidations(object, value, conditionalValidationMetadatas);
            if (!canValidate) {
                return;
            }
            // handle IS_DEFINED validation type the special way - it should work no matter skipMissingProperties is set or not
            _this.defaultValidations(object, value, definedMetadatas, validationError.constraints);
            if ((value === null || value === undefined) && _this.validatorOptions && _this.validatorOptions.skipMissingProperties === true) {
                return;
            }
            _this.defaultValidations(object, value, metadatas, validationError.constraints);
            _this.customValidations(object, value, customValidationMetadatas, validationError.constraints);
            _this.nestedValidations(value, nestedValidationMetadatas, validationError.children);
        });
    };
    ValidationExecutor.prototype.stripEmptyErrors = function (errors) {
        var _this = this;
        return errors.filter(function (error) {
            if (error.children) {
                error.children = _this.stripEmptyErrors(error.children);
            }
            if (Object.keys(error.constraints).length === 0) {
                if (error.children.length === 0) {
                    return false;
                }
                else {
                    delete error.constraints;
                }
            }
            return true;
        });
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    ValidationExecutor.prototype.generateValidationError = function (object, value, propertyName) {
        var validationError = new ValidationError_1.ValidationError();
        if (!this.validatorOptions ||
            !this.validatorOptions.validationError ||
            this.validatorOptions.validationError.target === undefined ||
            this.validatorOptions.validationError.target === true)
            validationError.target = object;
        if (!this.validatorOptions ||
            !this.validatorOptions.validationError ||
            this.validatorOptions.validationError.value === undefined ||
            this.validatorOptions.validationError.value === true)
            validationError.value = value;
        validationError.property = propertyName;
        validationError.children = [];
        validationError.constraints = {};
        return validationError;
    };
    ValidationExecutor.prototype.conditionalValidations = function (object, value, metadatas) {
        return metadatas
            .map(function (metadata) { return metadata.constraints[0](object, value); })
            .reduce(function (resultA, resultB) { return resultA && resultB; }, true);
    };
    ValidationExecutor.prototype.defaultValidations = function (object, value, metadatas, errorMap) {
        var _this = this;
        return metadatas
            .filter(function (metadata) {
            if (metadata.each) {
                if (value instanceof Array) {
                    return !value.every(function (subValue) { return _this.validator.validateValueByMetadata(subValue, metadata); });
                }
            }
            else {
                return !_this.validator.validateValueByMetadata(value, metadata);
            }
        })
            .forEach(function (metadata) {
            var _a = _this.createValidationError(object, value, metadata), key = _a[0], message = _a[1];
            errorMap[key] = message;
        });
    };
    ValidationExecutor.prototype.customValidations = function (object, value, metadatas, errorMap) {
        var _this = this;
        metadatas.forEach(function (metadata) {
            container_1.getFromContainer(MetadataStorage_1.MetadataStorage)
                .getTargetValidatorConstraints(metadata.constraintCls)
                .forEach(function (customConstraintMetadata) {
                if (customConstraintMetadata.async && _this.ignoreAsyncValidations)
                    return;
                var validationArguments = {
                    targetName: object.constructor ? object.constructor.name : undefined,
                    property: metadata.propertyName,
                    object: object,
                    value: value,
                    constraints: metadata.constraints
                };
                var validatedValue = customConstraintMetadata.instance.validate(value, validationArguments);
                if (validatedValue instanceof Promise) {
                    var promise = validatedValue.then(function (isValid) {
                        if (!isValid) {
                            var _a = _this.createValidationError(object, value, metadata, customConstraintMetadata), type = _a[0], message = _a[1];
                            errorMap[type] = message;
                        }
                    });
                    _this.awaitingPromises.push(promise);
                }
                else {
                    if (!validatedValue) {
                        var _a = _this.createValidationError(object, value, metadata, customConstraintMetadata), type = _a[0], message = _a[1];
                        errorMap[type] = message;
                    }
                }
            });
        });
    };
    ValidationExecutor.prototype.nestedValidations = function (value, metadatas, errors) {
        var _this = this;
        if (value === void 0) {
            return;
        }
        metadatas.forEach(function (metadata) {
            if (metadata.type !== ValidationTypes_1.ValidationTypes.NESTED_VALIDATION)
                return;
            var targetSchema = typeof metadata.target === "string" ? metadata.target : undefined;
            if (value instanceof Array) {
                value.forEach(function (subValue, index) {
                    var validationError = _this.generateValidationError(value, subValue, index.toString());
                    errors.push(validationError);
                    _this.execute(subValue, targetSchema, validationError.children);
                });
            }
            else if (value instanceof Object) {
                _this.execute(value, targetSchema, errors);
            }
            else {
                throw new Error("Only objects and arrays are supported to nested validation");
            }
        });
    };
    ValidationExecutor.prototype.createValidationError = function (object, value, metadata, customValidatorMetadata) {
        var targetName = object.constructor ? object.constructor.name : undefined;
        var type = customValidatorMetadata && customValidatorMetadata.name ? customValidatorMetadata.name : metadata.type;
        var validationArguments = {
            targetName: targetName,
            property: metadata.propertyName,
            object: object,
            value: value,
            constraints: metadata.constraints
        };
        var message = metadata.message;
        if (!metadata.message &&
            (!this.validatorOptions || (this.validatorOptions && !this.validatorOptions.dismissDefaultMessages))) {
            if (customValidatorMetadata && customValidatorMetadata.instance.defaultMessage instanceof Function) {
                message = customValidatorMetadata.instance.defaultMessage(validationArguments);
            }
            if (!message)
                message = ValidationTypes_1.ValidationTypes.getMessage(type, metadata.each);
        }
        var messageString = ValidationUtils_1.ValidationUtils.replaceMessageSpecialTokens(message, validationArguments);
        return [type, messageString];
    };
    return ValidationExecutor;
}());
exports.ValidationExecutor = ValidationExecutor;

//# sourceMappingURL=ValidationExecutor.js.map


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ValidationUtils = (function () {
    function ValidationUtils() {
    }
    ValidationUtils.replaceMessageSpecialTokens = function (message, validationArguments) {
        var messageString;
        if (message instanceof Function) {
            messageString = message(validationArguments);
        }
        else if (typeof message === "string") {
            messageString = message;
        }
        if (messageString && validationArguments.constraints instanceof Array) {
            validationArguments.constraints.forEach(function (constraint, index) {
                messageString = messageString.replace(new RegExp("\\$constraint" + (index + 1), "g"), constraint);
            });
        }
        if (messageString && validationArguments.value !== undefined && validationArguments.value !== null)
            messageString = messageString.replace(/\$value/g, validationArguments.value);
        if (messageString)
            messageString = messageString.replace(/\$property/g, validationArguments.property);
        if (messageString)
            messageString = messageString.replace(/\$target/g, validationArguments.targetName);
        return messageString;
    };
    return ValidationUtils;
}());
exports.ValidationUtils = ValidationUtils;

//# sourceMappingURL=ValidationUtils.js.map


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toDate = __webpack_require__(8);

var _toDate2 = _interopRequireDefault(_toDate);

var _toFloat = __webpack_require__(20);

var _toFloat2 = _interopRequireDefault(_toFloat);

var _toInt = __webpack_require__(57);

var _toInt2 = _interopRequireDefault(_toInt);

var _toBoolean = __webpack_require__(58);

var _toBoolean2 = _interopRequireDefault(_toBoolean);

var _equals = __webpack_require__(59);

var _equals2 = _interopRequireDefault(_equals);

var _contains = __webpack_require__(60);

var _contains2 = _interopRequireDefault(_contains);

var _matches = __webpack_require__(61);

var _matches2 = _interopRequireDefault(_matches);

var _isEmail = __webpack_require__(21);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = __webpack_require__(62);

var _isURL2 = _interopRequireDefault(_isURL);

var _isMACAddress = __webpack_require__(63);

var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

var _isIP = __webpack_require__(23);

var _isIP2 = _interopRequireDefault(_isIP);

var _isFQDN = __webpack_require__(10);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isBoolean = __webpack_require__(64);

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isAlpha = __webpack_require__(65);

var _isAlpha2 = _interopRequireDefault(_isAlpha);

var _isAlphanumeric = __webpack_require__(66);

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

var _isNumeric = __webpack_require__(67);

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _isLowercase = __webpack_require__(68);

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isUppercase = __webpack_require__(69);

var _isUppercase2 = _interopRequireDefault(_isUppercase);

var _isAscii = __webpack_require__(70);

var _isAscii2 = _interopRequireDefault(_isAscii);

var _isFullWidth = __webpack_require__(25);

var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

var _isHalfWidth = __webpack_require__(26);

var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

var _isVariableWidth = __webpack_require__(71);

var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

var _isMultibyte = __webpack_require__(72);

var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

var _isSurrogatePair = __webpack_require__(73);

var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

var _isInt = __webpack_require__(74);

var _isInt2 = _interopRequireDefault(_isInt);

var _isFloat = __webpack_require__(75);

var _isFloat2 = _interopRequireDefault(_isFloat);

var _isDecimal = __webpack_require__(76);

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isHexadecimal = __webpack_require__(27);

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isDivisibleBy = __webpack_require__(77);

var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

var _isHexColor = __webpack_require__(78);

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isISRC = __webpack_require__(79);

var _isISRC2 = _interopRequireDefault(_isISRC);

var _isMD = __webpack_require__(80);

var _isMD2 = _interopRequireDefault(_isMD);

var _isJSON = __webpack_require__(81);

var _isJSON2 = _interopRequireDefault(_isJSON);

var _isEmpty = __webpack_require__(82);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isLength = __webpack_require__(83);

var _isLength2 = _interopRequireDefault(_isLength);

var _isByteLength = __webpack_require__(22);

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isUUID = __webpack_require__(84);

var _isUUID2 = _interopRequireDefault(_isUUID);

var _isMongoId = __webpack_require__(85);

var _isMongoId2 = _interopRequireDefault(_isMongoId);

var _isAfter = __webpack_require__(86);

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = __webpack_require__(87);

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isIn = __webpack_require__(88);

var _isIn2 = _interopRequireDefault(_isIn);

var _isCreditCard = __webpack_require__(89);

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isISIN = __webpack_require__(90);

var _isISIN2 = _interopRequireDefault(_isISIN);

var _isISBN = __webpack_require__(91);

var _isISBN2 = _interopRequireDefault(_isISBN);

var _isISSN = __webpack_require__(92);

var _isISSN2 = _interopRequireDefault(_isISSN);

var _isMobilePhone = __webpack_require__(93);

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _isCurrency = __webpack_require__(94);

var _isCurrency2 = _interopRequireDefault(_isCurrency);

var _isISO = __webpack_require__(95);

var _isISO2 = _interopRequireDefault(_isISO);

var _isBase = __webpack_require__(96);

var _isBase2 = _interopRequireDefault(_isBase);

var _isDataURI = __webpack_require__(97);

var _isDataURI2 = _interopRequireDefault(_isDataURI);

var _ltrim = __webpack_require__(28);

var _ltrim2 = _interopRequireDefault(_ltrim);

var _rtrim = __webpack_require__(29);

var _rtrim2 = _interopRequireDefault(_rtrim);

var _trim = __webpack_require__(98);

var _trim2 = _interopRequireDefault(_trim);

var _escape = __webpack_require__(99);

var _escape2 = _interopRequireDefault(_escape);

var _unescape = __webpack_require__(100);

var _unescape2 = _interopRequireDefault(_unescape);

var _stripLow = __webpack_require__(101);

var _stripLow2 = _interopRequireDefault(_stripLow);

var _whitelist = __webpack_require__(102);

var _whitelist2 = _interopRequireDefault(_whitelist);

var _blacklist = __webpack_require__(30);

var _blacklist2 = _interopRequireDefault(_blacklist);

var _isWhitelisted = __webpack_require__(103);

var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

var _normalizeEmail = __webpack_require__(104);

var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

var _toString = __webpack_require__(9);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '7.2.0';

var validator = {
  version: version,
  toDate: _toDate2.default,
  toFloat: _toFloat2.default,
  toInt: _toInt2.default,
  toBoolean: _toBoolean2.default,
  equals: _equals2.default,
  contains: _contains2.default,
  matches: _matches2.default,
  isEmail: _isEmail2.default,
  isURL: _isURL2.default,
  isMACAddress: _isMACAddress2.default,
  isIP: _isIP2.default,
  isFQDN: _isFQDN2.default,
  isBoolean: _isBoolean2.default,
  isAlpha: _isAlpha2.default,
  isAlphanumeric: _isAlphanumeric2.default,
  isNumeric: _isNumeric2.default,
  isLowercase: _isLowercase2.default,
  isUppercase: _isUppercase2.default,
  isAscii: _isAscii2.default,
  isFullWidth: _isFullWidth2.default,
  isHalfWidth: _isHalfWidth2.default,
  isVariableWidth: _isVariableWidth2.default,
  isMultibyte: _isMultibyte2.default,
  isSurrogatePair: _isSurrogatePair2.default,
  isInt: _isInt2.default,
  isFloat: _isFloat2.default,
  isDecimal: _isDecimal2.default,
  isHexadecimal: _isHexadecimal2.default,
  isDivisibleBy: _isDivisibleBy2.default,
  isHexColor: _isHexColor2.default,
  isISRC: _isISRC2.default,
  isMD5: _isMD2.default,
  isJSON: _isJSON2.default,
  isEmpty: _isEmpty2.default,
  isLength: _isLength2.default,
  isByteLength: _isByteLength2.default,
  isUUID: _isUUID2.default,
  isMongoId: _isMongoId2.default,
  isAfter: _isAfter2.default,
  isBefore: _isBefore2.default,
  isIn: _isIn2.default,
  isCreditCard: _isCreditCard2.default,
  isISIN: _isISIN2.default,
  isISBN: _isISBN2.default,
  isISSN: _isISSN2.default,
  isMobilePhone: _isMobilePhone2.default,
  isCurrency: _isCurrency2.default,
  isISO8601: _isISO2.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI2.default,
  ltrim: _ltrim2.default,
  rtrim: _rtrim2.default,
  trim: _trim2.default,
  escape: _escape2.default,
  unescape: _unescape2.default,
  stripLow: _stripLow2.default,
  whitelist: _whitelist2.default,
  blacklist: _blacklist2.default,
  isWhitelisted: _isWhitelisted2.default,
  normalizeEmail: _normalizeEmail2.default,
  toString: _toString2.default
};

exports.default = validator;
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString2.default)(str);
  return parseInt(str, radix || 10);
}
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString2.default)(str);
  if (strict) {
    return str === '1' || str === 'true';
  }
  return str !== '0' && str !== 'false' && str !== '';
}
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString2.default)(str);
  return str === comparison;
}
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = __webpack_require__(9);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, elem) {
  (0, _assertString2.default)(str);
  return str.indexOf((0, _toString2.default)(elem)) >= 0;
}
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString2.default)(str);
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _isFQDN = __webpack_require__(10);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isIP = __webpack_require__(23);

var _isIP2 = _interopRequireDefault(_isIP);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6)) && host !== 'localhost') {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

function isMACAddress(str) {
  (0, _assertString2.default)(str);
  return macAddress.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString2.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}
module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[-+]?[0-9]+$/;

function isNumeric(str) {
  (0, _assertString2.default)(str);
  return numeric.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toLowerCase();
}
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toUpperCase();
}
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString2.default)(str);
  return ascii.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _isFullWidth = __webpack_require__(25);

var _isHalfWidth = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString2.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString2.default)(str);
  return multibyte.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString2.default)(str);
  return surrogatePair.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

  // Check min/max/lt/gt
  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var float = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;

function isFloat(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};
  if (str === '' || str === '.') {
    return false;
  }
  return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max) && (!options.hasOwnProperty('lt') || str < options.lt) && (!options.hasOwnProperty('gt') || str > options.gt);
}
module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;

function isDecimal(str) {
  (0, _assertString2.default)(str);
  return str !== '' && decimal.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _toFloat = __webpack_require__(20);

var _toFloat2 = _interopRequireDefault(_toFloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString2.default)(str);
  return (0, _toFloat2.default)(str) % parseInt(num, 10) === 0;
}
module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
  (0, _assertString2.default)(str);
  return hexcolor.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  (0, _assertString2.default)(str);
  return isrc.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString2.default)(str);
  return md5.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isJSON;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isJSON(str) {
  (0, _assertString2.default)(str);
  try {
    var obj = JSON.parse(str);
    return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  } catch (e) {/* ignore */}
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmpty(str) {
  (0, _assertString2.default)(str);
  return str.length === 0;
}
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isLength;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

  (0, _assertString2.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _isHexadecimal = __webpack_require__(27);

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString2.default)(str);
  return (0, _isHexadecimal2.default)(str) && str.length === 24;
}
module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = __webpack_require__(8);

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original > comparison);
}
module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = __webpack_require__(8);

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original < comparison);
}
module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isIn;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = __webpack_require__(9);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isIn(str, options) {
  (0, _assertString2.default)(str);
  var i = void 0;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];
    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString2.default)(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString2.default)(str);
  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });

  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = true;
  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}
module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }
  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i = void 0;
  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }
    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }
    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }
    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _assertString2.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(str)) {
    return false;
  }
  var issnDigits = str.replace('-', '');
  var position = 8;
  var checksum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = issnDigits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var digit = _step.value;

      var digitValue = digit.toUpperCase() === 'X' ? 10 : +digit;
      checksum += digitValue * position;
      --position;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return checksum % 11 === 0;
}
module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
  'da-DK': /^(\+?45)?(\d{8})$/,
  'el-GR': /^(\+?30)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
  'en-IN': /^(\+?91|0)?[789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)2\d{7,9}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'id-ID': /^(\+?62|0[1-9])[\s|\d]+$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'ja-JP': /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale) {
  (0, _assertString2.default)(str);
  if (locale in phones) {
    return phones[locale].test(str);
  } else if (locale === 'any') {
    return !!Object.values(phones).find(function (phone) {
      return phone.test(str);
    });
  }
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
      decimal_amount = '(\\' + options.decimal_separator + '\\d{2})?';
  var pattern = whole_dollar_amount + decimal_amount;

  // default is negative sign before symbol, but there are two other options (besides parens)
  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  }

  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
  if (options.allow_negative_sign_placeholder) {
    pattern = '( (?!\\-))?' + pattern;
  } else if (options.allow_space_after_symbol) {
    pattern = ' ?' + pattern;
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  }

  // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space
  return new RegExp('^(?!-? )(?=.*\\d)' + pattern + '$');
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}
module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iso8601 = undefined;

exports.default = function (str) {
  (0, _assertString2.default)(str);
  return iso8601.test(str);
};

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = exports.iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString2.default)(str);
  var len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}
module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len

function isDataURI(str) {
  (0, _assertString2.default)(str);
  return dataURI.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = __webpack_require__(29);

var _rtrim2 = _interopRequireDefault(_rtrim);

var _ltrim = __webpack_require__(28);

var _ltrim2 = _interopRequireDefault(_ltrim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim2.default)((0, _ltrim2.default)(str, chars), chars);
}
module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
  (0, _assertString2.default)(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}
module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
  (0, _assertString2.default)(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#96;/g, '`');
}
module.exports = exports['default'];

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _blacklist = __webpack_require__(30);

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString2.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist2.default)(str, chars);
}
module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString2.default)(str);
  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _isEmail = __webpack_require__(21);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,

  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,

  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,

  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,

  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
};

// List of domains used by iCloud
var icloud_domains = ['icloud.com', 'me.com'];

// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];

// List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

function normalizeEmail(email, options) {
  options = (0, _merge2.default)(options, default_normalize_email_options);

  if (!(0, _isEmail2.default)(email)) {
    return false;
  }

  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain];

  // The domain is always lowercased, as it's case-insensitive per RFC 1035
  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (options.gmail_remove_dots) {
      parts[0] = parts[0].replace(/\./g, '');
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (~icloud_domains.indexOf(parts[1])) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~outlookdotcom_domains.indexOf(parts[1])) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~yahoo_domains.indexOf(parts[1])) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }
  return parts.join('@');
}
module.exports = exports['default'];

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ValidationTypes_1 = __webpack_require__(2);
var ValidationMetadata_1 = __webpack_require__(7);
var ConstraintMetadata_1 = __webpack_require__(31);
var container_1 = __webpack_require__(3);
var MetadataStorage_1 = __webpack_require__(4);
// -------------------------------------------------------------------------
// System
// -------------------------------------------------------------------------
/**
 * Registers custom validator class.
 */
function ValidatorConstraint(options) {
    return function (target) {
        var isAsync = options && options.async ? true : false;
        var name = options && options.name ? options.name : "";
        if (!name) {
            name = target.name;
            if (!name)
                name = name.replace(/\.?([A-Z]+)/g, function (x, y) { return "_" + y.toLowerCase(); }).replace(/^_/, "");
        }
        var metadata = new ConstraintMetadata_1.ConstraintMetadata(target, name, isAsync);
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addConstraintMetadata(metadata);
    };
}
exports.ValidatorConstraint = ValidatorConstraint;
function Validate(constraintClass, constraintsOrValidationOptions, maybeValidationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.CUSTOM_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            constraintCls: constraintClass,
            constraints: constraintsOrValidationOptions instanceof Array ? constraintsOrValidationOptions : undefined,
            validationOptions: !(constraintsOrValidationOptions instanceof Array) ? constraintsOrValidationOptions : maybeValidationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.Validate = Validate;
/**
 * Objects / object arrays marked with this decorator will also be validated.
 */
function ValidateNested(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.NESTED_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.ValidateNested = ValidateNested;
/**
 * Objects / object arrays marked with this decorator will also be validated.
 */
function ValidateIf(condition, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.CONDITIONAL_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [condition],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.ValidateIf = ValidateIf;
// -------------------------------------------------------------------------
// Common checkers
// -------------------------------------------------------------------------
/**
 * Checks if given value is defined (!== undefined, !== null).
 */
function IsDefined(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_DEFINED,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsDefined = IsDefined;
/**
 * Checks if the value match ("===") the comparison.
 */
function Equals(comparison, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.EQUALS,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [comparison],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.Equals = Equals;
/**
 * Checks if the value does not match ("!==") the comparison.
 */
function NotEquals(comparison, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.NOT_EQUALS,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [comparison],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.NotEquals = NotEquals;
/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
function IsEmpty(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_EMPTY,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsEmpty = IsEmpty;
/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
function IsNotEmpty(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_NOT_EMPTY,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsNotEmpty = IsNotEmpty;
/**
 * Checks if value is in a array of allowed values.
 */
function IsIn(values, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_IN,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [values],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsIn = IsIn;
/**
 * Checks if value is not in a array of disallowed values.
 */
function IsNotIn(values, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_NOT_IN,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [values],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsNotIn = IsNotIn;
/**
 * Checks if value is missing and if so, ignores all validators.
 */
function IsOptional(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.CONDITIONAL_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [function (object, value) {
                    return object[propertyName] !== null && object[propertyName] !== undefined;
                }],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsOptional = IsOptional;
// -------------------------------------------------------------------------
// Type checkers
// -------------------------------------------------------------------------
/**
 * Checks if a value is a boolean.
 */
function IsBoolean(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_BOOLEAN,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsBoolean = IsBoolean;
/**
 * Checks if a value is a date.
 */
function IsDate(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_DATE,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsDate = IsDate;
/**
 * Checks if a value is a number.
 */
function IsNumber(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_NUMBER,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsNumber = IsNumber;
/**
 * Checks if the value is an integer number.
 */
function IsInt(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_INT,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsInt = IsInt;
/**
 * Checks if a value is a string.
 */
function IsString(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_STRING,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsString = IsString;
function IsDateString(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_DATE_STRING,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsDateString = IsDateString;
/**
 * Checks if a value is an array.
 */
function IsArray(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_ARRAY,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsArray = IsArray;
/**
 * Checks if a value is a number enum.
 */
function IsEnum(entity, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_ENUM,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [entity],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsEnum = IsEnum;
// -------------------------------------------------------------------------
// Number checkers
// -------------------------------------------------------------------------
/**
 * Checks if the value is a number that's divisible by another.
 */
function IsDivisibleBy(num, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_DIVISIBLE_BY,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [num],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsDivisibleBy = IsDivisibleBy;
/**
 * Checks if the value is a positive number.
 */
function IsPositive(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_POSITIVE,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsPositive = IsPositive;
/**
 * Checks if the value is a negative number.
 */
function IsNegative(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_NEGATIVE,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsNegative = IsNegative;
/**
 * Checks if the given number is greater than given number.
 */
function Min(min, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.MIN,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [min],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.Min = Min;
/**
 * Checks if the given number is less than given number.
 */
function Max(max, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.MAX,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [max],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.Max = Max;
// -------------------------------------------------------------------------
// Date checkers
// -------------------------------------------------------------------------
/**
 * Checks if the value is a date that's after the specified date.
 */
function MinDate(date, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.MIN_DATE,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [date],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.MinDate = MinDate;
/**
 * Checks if the value is a date that's before the specified date.
 */
function MaxDate(date, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.MAX_DATE,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [date],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.MaxDate = MaxDate;
// -------------------------------------------------------------------------
// String-as-types checkers
// -------------------------------------------------------------------------
/**
 * Checks if a string is a boolean.
 */
function IsBooleanString(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_BOOLEAN_STRING,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsBooleanString = IsBooleanString;
/**
 * Checks if the string is a number.
 */
function IsNumberString(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_NUMBER_STRING,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsNumberString = IsNumberString;
// -------------------------------------------------------------------------
// String checkers
// -------------------------------------------------------------------------
/**
 * Checks if the string contains the seed.
 */
function Contains(seed, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.CONTAINS,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [seed],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.Contains = Contains;
/**
 * Checks if the string does not contain the seed.
 */
function NotContains(seed, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.NOT_CONTAINS,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [seed],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.NotContains = NotContains;
/**
 * Checks if the string contains only letters (a-zA-Z).
 */
function IsAlpha(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_ALPHA,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsAlpha = IsAlpha;
/**
 * Checks if the string contains only letters and numbers.
 */
function IsAlphanumeric(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_ALPHANUMERIC,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsAlphanumeric = IsAlphanumeric;
/**
 * Checks if the string contains ASCII chars only.
 */
function IsAscii(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_ASCII,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsAscii = IsAscii;
/**
 * Checks if a string is base64 encoded.
 */
function IsBase64(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_BASE64,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsBase64 = IsBase64;
/**
 * Checks if the string's length (in bytes) falls in a range.
 */
function IsByteLength(min, max, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_BYTE_LENGTH,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [min, max],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsByteLength = IsByteLength;
/**
 * Checks if the string is a credit card.
 */
function IsCreditCard(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_CREDIT_CARD,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsCreditCard = IsCreditCard;
/**
 * Checks if the string is a valid currency amount.
 */
function IsCurrency(options, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_CURRENCY,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [options],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsCurrency = IsCurrency;
/**
 * Checks if the string is an email.
 */
function IsEmail(options, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_EMAIL,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [options],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsEmail = IsEmail;
/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 */
function IsFQDN(options, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_FQDN,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [options],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsFQDN = IsFQDN;
/**
 * Checks if the string contains any full-width chars.
 */
function IsFullWidth(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_FULL_WIDTH,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsFullWidth = IsFullWidth;
/**
 * Checks if the string contains any half-width chars.
 */
function IsHalfWidth(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_HALF_WIDTH,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsHalfWidth = IsHalfWidth;
/**
 * Checks if the string contains a mixture of full and half-width chars.
 */
function IsVariableWidth(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_VARIABLE_WIDTH,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsVariableWidth = IsVariableWidth;
/**
 * Checks if the string is a hexadecimal color.
 */
function IsHexColor(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_HEX_COLOR,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsHexColor = IsHexColor;
/**
 * Checks if the string is a hexadecimal number.
 */
function IsHexadecimal(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_HEXADECIMAL,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsHexadecimal = IsHexadecimal;
/**
 * Checks if the string is an IP (version 4 or 6).
 */
function IsIP(version, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_IP,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [version],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsIP = IsIP;
/**
 * Checks if the string is an ISBN (version 10 or 13).
 */
function IsISBN(version, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_ISBN,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [version],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsISBN = IsISBN;
/**
 * Checks if the string is an ISIN (stock/security identifier).
 */
function IsISIN(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_ISIN,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsISIN = IsISIN;
/**
 * Checks if the string is a valid ISO 8601 date.
 */
function IsISO8601(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_ISO8601,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsISO8601 = IsISO8601;
/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 */
function IsJSON(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_JSON,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsJSON = IsJSON;
/**
 * Checks if the string is lowercase.
 */
function IsLowercase(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_LOWERCASE,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsLowercase = IsLowercase;
/**
 * Checks if the string is a mobile phone number (locale is one of ['zh-CN', 'zh-TW', 'en-ZA', 'en-AU', 'en-HK',
 * 'pt-PT', 'fr-FR', 'el-GR', 'en-GB', 'en-US', 'en-ZM', 'ru-RU', 'nb-NO', 'nn-NO', 'vi-VN', 'en-NZ']).
 */
function IsMobilePhone(locale, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_MOBILE_PHONE,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [locale],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsMobilePhone = IsMobilePhone;
/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 */
function IsMongoId(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_MONGO_ID,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsMongoId = IsMongoId;
/**
 * Checks if the string contains one or more multibyte chars.
 */
function IsMultibyte(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_MULTIBYTE,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsMultibyte = IsMultibyte;
/**
 * Checks if the string contains any surrogate pairs chars.
 */
function IsSurrogatePair(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_SURROGATE_PAIR,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsSurrogatePair = IsSurrogatePair;
/**
 * Checks if the string is an url.
 */
function IsUrl(options, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_URL,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [options],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsUrl = IsUrl;
/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 */
function IsUUID(version, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_UUID,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [version],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsUUID = IsUUID;
/**
 * Checks if the string is uppercase.
 */
function IsUppercase(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_UPPERCASE,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsUppercase = IsUppercase;
/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 */
function Length(min, max, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.LENGTH,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [min, max],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.Length = Length;
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 */
function MinLength(min, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.MIN_LENGTH,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [min],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.MinLength = MinLength;
/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 */
function MaxLength(max, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.MAX_LENGTH,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [max],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.MaxLength = MaxLength;
function Matches(pattern, modifiersOrAnnotationOptions, validationOptions) {
    var modifiers;
    if (modifiersOrAnnotationOptions && modifiersOrAnnotationOptions instanceof Object && !validationOptions) {
        validationOptions = modifiersOrAnnotationOptions;
    }
    else {
        modifiers = modifiersOrAnnotationOptions;
    }
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.MATCHES,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [pattern, modifiers],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.Matches = Matches;
/**
 * Checks if the string correctly represents a time in the format HH:MM
 */
function IsMilitaryTime(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.IS_MILITARY_TIME,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsMilitaryTime = IsMilitaryTime;
// -------------------------------------------------------------------------
// Array checkers
// -------------------------------------------------------------------------
/**
 * Checks if array contains all values from the given array of values.
 */
function ArrayContains(values, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.ARRAY_CONTAINS,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [values],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.ArrayContains = ArrayContains;
/**
 * Checks if array does not contain any of the given values.
 */
function ArrayNotContains(values, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.ARRAY_NOT_CONTAINS,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [values],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.ArrayNotContains = ArrayNotContains;
/**
 * Checks if given array is not empty.
 */
function ArrayNotEmpty(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.ARRAY_NOT_EMPTY,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.ArrayNotEmpty = ArrayNotEmpty;
/**
 * Checks if array's length is as minimal this number.
 */
function ArrayMinSize(min, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.ARRAY_MIN_SIZE,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [min],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.ArrayMinSize = ArrayMinSize;
/**
 * Checks if array's length is as maximal this number.
 */
function ArrayMaxSize(max, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.ARRAY_MAX_SIZE,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [max],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.ArrayMaxSize = ArrayMaxSize;
/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 */
function ArrayUnique(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.ARRAY_UNIQUE,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.ArrayUnique = ArrayUnique;

//# sourceMappingURL=decorators.js.map


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MetadataStorage_1 = __webpack_require__(4);
var ConstraintMetadata_1 = __webpack_require__(31);
var ValidationMetadata_1 = __webpack_require__(7);
var ValidationTypes_1 = __webpack_require__(2);
var container_1 = __webpack_require__(3);
/**
 * Registers a custom validation decorator.
 */
function registerDecorator(options) {
    var constraintCls;
    if (options.validator instanceof Function) {
        constraintCls = options.validator;
    }
    else {
        var validator_1 = options.validator;
        constraintCls = (function () {
            function CustomConstraint() {
            }
            CustomConstraint.prototype.validate = function (value, validationArguments) {
                return validator_1.validate(value, validationArguments);
            };
            CustomConstraint.prototype.defaultMessage = function (validationArguments) {
                if (validator_1.defaultMessage) {
                    return validator_1.defaultMessage(validationArguments);
                }
                return "";
            };
            return CustomConstraint;
        }());
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addConstraintMetadata(new ConstraintMetadata_1.ConstraintMetadata(constraintCls, options.name, options.async));
    }
    var validationMetadataArgs = {
        type: ValidationTypes_1.ValidationTypes.CUSTOM_VALIDATION,
        target: options.target,
        propertyName: options.propertyName,
        validationOptions: options.options,
        constraintCls: constraintCls,
        constraints: options.constraints
    };
    container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(validationMetadataArgs));
}
exports.registerDecorator = registerDecorator;

//# sourceMappingURL=register-decorator.js.map


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
class ObservationResource {
    constructor(client) {
        this.client = client;
    }
    getAll(isFlattenend) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get("/observations/", { params: { flattened: isFlattenend } });
        });
    }
    create(student, create) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield class_validator_1.validate(create);
            if (errors.length > 0) {
                throw new Error("Problem with request body, had errors: " + errors);
            }
            console.log("obs: ", create);
            return yield this.client.post(`/observation/${student}`, create);
        });
    }
    update(id, update) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield class_validator_1.validate(update);
            if (errors.length > 0) {
                throw new Error("Problem with request body, had errors: " + errors);
            }
            return yield this.client.patch(`/children/profiles/${id}`, update);
        });
    }
}
exports.ObservationResource = ObservationResource;
//# sourceMappingURL=observation.js.map

/***/ })
/******/ ]);
});
