/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/broker-factory/build/es2019/guards/message-port.js":
/*!*************************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/guards/message-port.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMessagePort: () => (/* binding */ isMessagePort)
/* harmony export */ });
const isMessagePort = (sender) => {
    return typeof sender.start === 'function';
};
//# sourceMappingURL=message-port.js.map

/***/ }),

/***/ "./node_modules/broker-factory/build/es2019/helpers/extend-broker-implementation.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/helpers/extend-broker-implementation.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extendBrokerImplementation: () => (/* binding */ extendBrokerImplementation)
/* harmony export */ });
/* harmony import */ var _port_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./port-map */ "./node_modules/broker-factory/build/es2019/helpers/port-map.js");

const extendBrokerImplementation = (partialBrokerImplementation) => ({
    ...partialBrokerImplementation,
    connect: ({ call }) => {
        return async () => {
            const { port1, port2 } = new MessageChannel();
            const portId = await call('connect', { port: port1 }, [port1]);
            _port_map__WEBPACK_IMPORTED_MODULE_0__.PORT_MAP.set(port2, portId);
            return port2;
        };
    },
    disconnect: ({ call }) => {
        return async (port) => {
            const portId = _port_map__WEBPACK_IMPORTED_MODULE_0__.PORT_MAP.get(port);
            if (portId === undefined) {
                throw new Error('The given port is not connected.');
            }
            await call('disconnect', { portId });
        };
    },
    isSupported: ({ call }) => {
        return () => call('isSupported');
    }
});
//# sourceMappingURL=extend-broker-implementation.js.map

/***/ }),

/***/ "./node_modules/broker-factory/build/es2019/helpers/port-map.js":
/*!**********************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/helpers/port-map.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PORT_MAP: () => (/* binding */ PORT_MAP)
/* harmony export */ });
const PORT_MAP = new WeakMap();
//# sourceMappingURL=port-map.js.map

/***/ }),

/***/ "./node_modules/broker-factory/build/es2019/interfaces/broker-actions.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/interfaces/broker-actions.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=broker-actions.js.map

/***/ }),

/***/ "./node_modules/broker-factory/build/es2019/interfaces/broker-definition.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/interfaces/broker-definition.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=broker-definition.js.map

/***/ }),

/***/ "./node_modules/broker-factory/build/es2019/interfaces/default-broker-definition.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/interfaces/default-broker-definition.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=default-broker-definition.js.map

/***/ }),

/***/ "./node_modules/broker-factory/build/es2019/interfaces/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/interfaces/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _broker_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broker-actions */ "./node_modules/broker-factory/build/es2019/interfaces/broker-actions.js");
/* harmony import */ var _broker_definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broker-definition */ "./node_modules/broker-factory/build/es2019/interfaces/broker-definition.js");
/* harmony import */ var _default_broker_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-broker-definition */ "./node_modules/broker-factory/build/es2019/interfaces/default-broker-definition.js");
/* harmony import */ var _worker_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./worker-event */ "./node_modules/broker-factory/build/es2019/interfaces/worker-event.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/broker-factory/build/es2019/interfaces/worker-event.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/interfaces/worker-event.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=worker-event.js.map

/***/ }),

/***/ "./node_modules/broker-factory/build/es2019/module.js":
/*!************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/module.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBroker: () => (/* binding */ createBroker)
/* harmony export */ });
/* harmony import */ var fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-unique-numbers */ "./node_modules/fast-unique-numbers/build/es5/bundle.js");
/* harmony import */ var fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _guards_message_port__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/message-port */ "./node_modules/broker-factory/build/es2019/guards/message-port.js");
/* harmony import */ var _helpers_extend_broker_implementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/extend-broker-implementation */ "./node_modules/broker-factory/build/es2019/helpers/extend-broker-implementation.js");
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces/index */ "./node_modules/broker-factory/build/es2019/interfaces/index.js");
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/index */ "./node_modules/broker-factory/build/es2019/types/index.js");



/*
 * @todo Explicitly referencing the barrel file seems to be necessary when enabling the
 * isolatedModules compiler option.
 */


const ONGOING_REQUESTS = new WeakMap();
const createOrGetOngoingRequests = (sender) => {
    if (ONGOING_REQUESTS.has(sender)) {
        // @todo TypeScript needs to be convinced that has() works as expected.
        return ONGOING_REQUESTS.get(sender);
    }
    const ongoingRequests = new Map();
    ONGOING_REQUESTS.set(sender, ongoingRequests);
    return ongoingRequests;
};
const createBroker = (brokerImplementation) => {
    const fullBrokerImplementation = (0,_helpers_extend_broker_implementation__WEBPACK_IMPORTED_MODULE_2__.extendBrokerImplementation)(brokerImplementation);
    return (sender) => {
        const ongoingRequests = createOrGetOngoingRequests(sender);
        sender.addEventListener('message', (({ data: message }) => {
            const { id } = message;
            if (id !== null && ongoingRequests.has(id)) {
                const { reject, resolve } = ongoingRequests.get(id);
                ongoingRequests.delete(id);
                if (message.error === undefined) {
                    resolve(message.result);
                }
                else {
                    reject(new Error(message.error.message));
                }
            }
        }));
        if ((0,_guards_message_port__WEBPACK_IMPORTED_MODULE_1__.isMessagePort)(sender)) {
            sender.start();
        }
        const call = (method, params = null, transferables = []) => {
            return new Promise((resolve, reject) => {
                const id = (0,fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0__.generateUniqueNumber)(ongoingRequests);
                ongoingRequests.set(id, { reject, resolve });
                if (params === null) {
                    sender.postMessage({ id, method }, transferables);
                }
                else {
                    sender.postMessage({ id, method, params }, transferables);
                }
            });
        };
        const notify = (method, params, transferables = []) => {
            sender.postMessage({ id: null, method, params }, transferables);
        };
        let functions = {};
        for (const [key, handler] of Object.entries(fullBrokerImplementation)) {
            functions = { ...functions, [key]: handler({ call, notify }) };
        }
        return { ...functions };
    };
};
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/broker-factory/build/es2019/types/broker-implementation.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/types/broker-implementation.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=broker-implementation.js.map

/***/ }),

/***/ "./node_modules/broker-factory/build/es2019/types/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/broker-factory/build/es2019/types/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _broker_implementation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broker-implementation */ "./node_modules/broker-factory/build/es2019/types/broker-implementation.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/fast-unique-numbers/build/es5/bundle.js":
/*!**************************************************************!*\
  !*** ./node_modules/fast-unique-numbers/build/es5/bundle.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    var createAddUniqueNumber = function createAddUniqueNumber(generateUniqueNumber) {
      return function (set) {
        var number = generateUniqueNumber(set);
        set.add(number);
        return number;
      };
    };

    var createCache = function createCache(lastNumberWeakMap) {
      return function (collection, nextNumber) {
        lastNumberWeakMap.set(collection, nextNumber);
        return nextNumber;
      };
    };

    /*
     * The value of the constant Number.MAX_SAFE_INTEGER equals (2 ** 53 - 1) but it
     * is fairly new.
     */
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER === undefined ? 9007199254740991 : Number.MAX_SAFE_INTEGER;
    var TWO_TO_THE_POWER_OF_TWENTY_NINE = 536870912;
    var TWO_TO_THE_POWER_OF_THIRTY = TWO_TO_THE_POWER_OF_TWENTY_NINE * 2;
    var createGenerateUniqueNumber = function createGenerateUniqueNumber(cache, lastNumberWeakMap) {
      return function (collection) {
        var lastNumber = lastNumberWeakMap.get(collection);
        /*
         * Let's try the cheapest algorithm first. It might fail to produce a new
         * number, but it is so cheap that it is okay to take the risk. Just
         * increase the last number by one or reset it to 0 if we reached the upper
         * bound of SMIs (which stands for small integers). When the last number is
         * unknown it is assumed that the collection contains zero based consecutive
         * numbers.
         */
        var nextNumber = lastNumber === undefined ? collection.size : lastNumber < TWO_TO_THE_POWER_OF_THIRTY ? lastNumber + 1 : 0;
        if (!collection.has(nextNumber)) {
          return cache(collection, nextNumber);
        }
        /*
         * If there are less than half of 2 ** 30 numbers stored in the collection,
         * the chance to generate a new random number in the range from 0 to 2 ** 30
         * is at least 50%. It's benifitial to use only SMIs because they perform
         * much better in any environment based on V8.
         */
        if (collection.size < TWO_TO_THE_POWER_OF_TWENTY_NINE) {
          while (collection.has(nextNumber)) {
            nextNumber = Math.floor(Math.random() * TWO_TO_THE_POWER_OF_THIRTY);
          }
          return cache(collection, nextNumber);
        }
        // Quickly check if there is a theoretical chance to generate a new number.
        if (collection.size > MAX_SAFE_INTEGER) {
          throw new Error('Congratulations, you created a collection of unique numbers which uses all available integers!');
        }
        // Otherwise use the full scale of safely usable integers.
        while (collection.has(nextNumber)) {
          nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
        }
        return cache(collection, nextNumber);
      };
    };

    var LAST_NUMBER_WEAK_MAP = new WeakMap();
    var cache = createCache(LAST_NUMBER_WEAK_MAP);
    var generateUniqueNumber = createGenerateUniqueNumber(cache, LAST_NUMBER_WEAK_MAP);
    var addUniqueNumber = createAddUniqueNumber(generateUniqueNumber);

    exports.addUniqueNumber = addUniqueNumber;
    exports.generateUniqueNumber = generateUniqueNumber;

}));


/***/ }),

/***/ "./node_modules/midi-json-parser-broker/build/es2019/interfaces/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/midi-json-parser-broker/build/es2019/interfaces/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _midi_json_parser_broker_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./midi-json-parser-broker-definition */ "./node_modules/midi-json-parser-broker/build/es2019/interfaces/midi-json-parser-broker-definition.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/midi-json-parser-broker/build/es2019/interfaces/midi-json-parser-broker-definition.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/midi-json-parser-broker/build/es2019/interfaces/midi-json-parser-broker-definition.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=midi-json-parser-broker-definition.js.map

/***/ }),

/***/ "./node_modules/midi-json-parser-broker/build/es2019/module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/midi-json-parser-broker/build/es2019/module.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   wrap: () => (/* binding */ wrap)
/* harmony export */ });
/* harmony import */ var broker_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! broker-factory */ "./node_modules/broker-factory/build/es2019/module.js");
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces/index */ "./node_modules/midi-json-parser-broker/build/es2019/interfaces/index.js");
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/index */ "./node_modules/midi-json-parser-broker/build/es2019/types/index.js");

/*
 * @todo Explicitly referencing the barrel file seems to be necessary when enabling the
 * isolatedModules compiler option.
 */


const wrap = (0,broker_factory__WEBPACK_IMPORTED_MODULE_0__.createBroker)({
    parseArrayBuffer: ({ call }) => {
        return async (arrayBuffer) => {
            return call('parse', { arrayBuffer }, [arrayBuffer]);
        };
    }
});
const load = (url) => {
    const worker = new Worker(url);
    return wrap(worker);
};
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/midi-json-parser-broker/build/es2019/types/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/midi-json-parser-broker/build/es2019/types/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _midi_json_parser_broker_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./midi-json-parser-broker-loader */ "./node_modules/midi-json-parser-broker/build/es2019/types/midi-json-parser-broker-loader.js");
/* harmony import */ var _midi_json_parser_broker_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./midi-json-parser-broker-wrapper */ "./node_modules/midi-json-parser-broker/build/es2019/types/midi-json-parser-broker-wrapper.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/midi-json-parser-broker/build/es2019/types/midi-json-parser-broker-loader.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/midi-json-parser-broker/build/es2019/types/midi-json-parser-broker-loader.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=midi-json-parser-broker-loader.js.map

/***/ }),

/***/ "./node_modules/midi-json-parser-broker/build/es2019/types/midi-json-parser-broker-wrapper.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/midi-json-parser-broker/build/es2019/types/midi-json-parser-broker-wrapper.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=midi-json-parser-broker-wrapper.js.map

/***/ }),

/***/ "./node_modules/midi-json-parser/build/es2019/module.js":
/*!**************************************************************!*\
  !*** ./node_modules/midi-json-parser/build/es2019/module.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connect: () => (/* binding */ connect),
/* harmony export */   disconnect: () => (/* binding */ disconnect),
/* harmony export */   isSupported: () => (/* binding */ isSupported),
/* harmony export */   parseArrayBuffer: () => (/* binding */ parseArrayBuffer)
/* harmony export */ });
/* harmony import */ var midi_json_parser_broker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! midi-json-parser-broker */ "./node_modules/midi-json-parser-broker/build/es2019/module.js");
/* harmony import */ var _worker_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker/worker */ "./node_modules/midi-json-parser/build/es2019/worker/worker.js");


const blob = new Blob([_worker_worker__WEBPACK_IMPORTED_MODULE_1__.worker], { type: 'application/javascript; charset=utf-8' });
const url = URL.createObjectURL(blob);
const midiJsonParser = (0,midi_json_parser_broker__WEBPACK_IMPORTED_MODULE_0__.load)(url);
const connect = midiJsonParser.connect;
const disconnect = midiJsonParser.disconnect;
const isSupported = midiJsonParser.isSupported;
// @todo Remove type annotation when possible.
const parseArrayBuffer = midiJsonParser.parseArrayBuffer;
URL.revokeObjectURL(url);
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/midi-json-parser/build/es2019/worker/worker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/midi-json-parser/build/es2019/worker/worker.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   worker: () => (/* binding */ worker)
/* harmony export */ });
// This is the minified and stringified code of the midi-json-parser-worker package.
const worker = `(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var n=e(t);return t.add(n),n}},n=function(e){return function(t,n){return e.set(t,n),n}},r=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,i=function(e,t){return function(n){var i=t.get(n),a=void 0===i?n.size:i<s?i+1:0;if(!n.has(a))return e(n,a);if(n.size<o){for(;n.has(a);)a=Math.floor(Math.random()*s);return e(n,a)}if(n.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;n.has(a);)a=Math.floor(Math.random()*r);return e(n,a)}},a=new WeakMap,f=n(a),c=i(f,a),u=t(c);e.addUniqueNumber=u,e.generateUniqueNumber=c}(t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}(()=>{"use strict";const e=-32603,t=-32602,r=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),i=(t,n)=>async({data:{id:i,method:a,params:f}})=>{const c=n[a];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),r))(a);const n=void 0===f?c():c(f);if(void 0===n)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(a);const u=n instanceof Promise?await n:n;if(null===i){if(void 0!==u.result)throw s(a)}else{if(void 0===u.result)throw s(a);const{result:e,transferables:n=[]}=u;t.postMessage({id:i,result:e},n)}}catch(e){const{message:n,status:r=-32603}=e;t.postMessage({error:{code:r,message:n},id:i})}};var a=n(455);const f=new Map,c=(e,n,r)=>({...n,connect:({port:t})=>{t.start();const r=e(t,n),o=(0,a.generateUniqueNumber)(f);return f.set(o,(()=>{r(),t.close(),f.delete(o)})),{result:o}},disconnect:({portId:e})=>{const n=f.get(e);if(void 0===n)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return n(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:n,port2:r}=new MessageChannel;n.onmessage=({data:t})=>e(null!==t),r.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),u=(e,t,n=()=>!0)=>{const r=c(u,t,n),o=i(e,r);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},l=e=>e.toString(16).toUpperCase().padStart(2,"0"),d=(e,t=0,n=e.byteLength-(t-e.byteOffset))=>{const r=t+e.byteOffset,o=[],s=new Uint8Array(e.buffer,r,n);for(let e=0;e<n;e+=1)o[e]=l(s[e]);return o.join("")},g=(e,t=0,n=e.byteLength-(t-e.byteOffset))=>{const r=t+e.byteOffset,o=new Uint8Array(e.buffer,r,n);return String.fromCharCode.apply(null,o)},h=(e,t,n)=>{let r;const{offset:o,value:s}=y(e,t),i=e.getUint8(o);return r=240===i?U(e,o+1):255===i?p(e,o+1):v(i,e,o+1,n),{...r,event:{...r.event,delta:s},eventTypeByte:i}},m=e=>{if(e.byteLength<14)throw new Error("Expected at least 14 bytes instead of ".concat(e.byteLength));if("MThd"!==g(e,0,4))throw new Error('Unexpected characters "'.concat(g(e,0,4),'" found instead of "MThd"'));if(6!==e.getUint32(4))throw new Error("The header has an unexpected length of ".concat(e.getUint32(4)," instead of 6"));const t=e.getUint16(8),n=e.getUint16(10);return{division:e.getUint16(12),format:t,numberOfTracks:n}},p=(e,t)=>{let n;const r=e.getUint8(t),{offset:o,value:s}=y(e,t+1);if(1===r)n={text:g(e,o,s)};else if(2===r)n={copyrightNotice:g(e,o,s)};else if(3===r)n={trackName:g(e,o,s)};else if(4===r)n={instrumentName:g(e,o,s)};else if(5===r)n={lyric:g(e,o,s)};else if(6===r)n={marker:g(e,o,s)};else if(7===r)n={cuePoint:g(e,o,s)};else if(8===r)n={programName:g(e,o,s)};else if(9===r)n={deviceName:g(e,o,s)};else if(10===r||11===r||12===r||13===r||14===r||15===r)n={metaTypeByte:l(r),text:g(e,o,s)};else if(32===r)n={channelPrefix:e.getUint8(o)};else if(33===r)n={midiPort:e.getUint8(o)};else if(47===r)n={endOfTrack:!0};else if(81===r)n={setTempo:{microsecondsPerQuarter:(e.getUint8(o)<<16)+(e.getUint8(o+1)<<8)+e.getUint8(o+2)}};else if(84===r){let t;const r=e.getUint8(o);96&r?32==(96&r)?t=25:64==(96&r)?t=29:96&~r||(t=30):t=24,n={smpteOffset:{frame:e.getUint8(o+3),frameRate:t,hour:31&r,minutes:e.getUint8(o+1),seconds:e.getUint8(o+2),subFrame:e.getUint8(o+4)}}}else if(88===r)n={timeSignature:{denominator:Math.pow(2,e.getUint8(o+1)),metronome:e.getUint8(o+2),numerator:e.getUint8(o),thirtyseconds:e.getUint8(o+3)}};else if(89===r)n={keySignature:{key:e.getInt8(o),scale:e.getInt8(o+1)}};else{if(127!==r)throw new Error('Cannot parse a meta event with a type of "'.concat(l(r),'"'));n={sequencerSpecificData:d(e,o,s)}}return{event:n,offset:o+s}},v=(e,t,n,r)=>{const o=128&e?null:r,s=(null===o?e:o)>>4;let i,a=null===o?n:n-1;if(8===s)i={noteOff:{noteNumber:t.getUint8(a),velocity:t.getUint8(a+1)}},a+=2;else if(9===s){const e=t.getUint8(a),n=t.getUint8(a+1);i=0===n?{noteOff:{noteNumber:e,velocity:n}}:{noteOn:{noteNumber:e,velocity:n}},a+=2}else if(10===s)i={keyPressure:{noteNumber:t.getUint8(a),pressure:t.getUint8(a+1)}},a+=2;else if(11===s)i={controlChange:{type:t.getUint8(a),value:t.getUint8(a+1)}},a+=2;else if(12===s)i={programChange:{programNumber:t.getUint8(a)}},a+=1;else if(13===s)i={channelPressure:{pressure:t.getUint8(a)}},a+=1;else{if(14!==s)throw new Error('Cannot parse a midi event with a type of "'.concat(l(s),'"'));i={pitchBend:t.getUint8(a)|t.getUint8(a+1)<<7},a+=2}return i.channel=15&(null===o?e:o),{event:i,offset:a}},U=(e,t)=>{const{offset:n,value:r}=y(e,t);return{event:{sysex:d(e,n,r)},offset:n+r}},w=(e,t)=>{if("MTrk"!==g(e,t,4))throw new Error('Unexpected characters "'.concat(g(e,t,4),'" found instead of "MTrk"'));const n=[],r=e.getUint32(t+4)+t+8;let o=null,s=t+8;for(;s<r;){const t=h(e,s,o),{event:r,eventTypeByte:i}=t;n.push(r),s=t.offset,void 0!==r.channel&&(128&i)>0&&(o=i)}return{offset:s,track:n}},y=(e,t)=>{let n=t,r=0;for(;;){const t=e.getUint8(n);if(n+=1,!(t>127))return r+=t,{offset:n,value:r};r+=127&t,r<<=7}};u(self,{parse:({arrayBuffer:e})=>{const t=(e=>{const t=new DataView(e),n=m(t);let r=14;const o=[];for(let e=0,s=n.numberOfTracks;e<s;e+=1){let e;({offset:r,track:e}=w(t,r)),o.push(e)}return{division:n.division,format:n.format,tracks:o}})(e);return{result:t}}})})()})();`; // tslint:disable-line:max-line-length
//# sourceMappingURL=worker.js.map

/***/ }),

/***/ "./node_modules/pako/index.js":
/*!************************************!*\
  !*** ./node_modules/pako/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Top level file is just a mixin of submodules & constants


const { Deflate, deflate, deflateRaw, gzip } = __webpack_require__(/*! ./lib/deflate */ "./node_modules/pako/lib/deflate.js");

const { Inflate, inflate, inflateRaw, ungzip } = __webpack_require__(/*! ./lib/inflate */ "./node_modules/pako/lib/inflate.js");

const constants = __webpack_require__(/*! ./lib/zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");

module.exports.Deflate = Deflate;
module.exports.deflate = deflate;
module.exports.deflateRaw = deflateRaw;
module.exports.gzip = gzip;
module.exports.Inflate = Inflate;
module.exports.inflate = inflate;
module.exports.inflateRaw = inflateRaw;
module.exports.ungzip = ungzip;
module.exports.constants = constants;


/***/ }),

/***/ "./node_modules/pako/lib/deflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/deflate.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



const zlib_deflate = __webpack_require__(/*! ./zlib/deflate */ "./node_modules/pako/lib/zlib/deflate.js");
const utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
const strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
const msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
const ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");

const toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH,
  Z_OK, Z_STREAM_END,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED
} = __webpack_require__(/*! ./zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY
  }, options || {});

  let opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  let status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    let dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  let status, _flush_mode;

  if (this.ended) { return false; }

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    // Make sure avail_out > 6 to avoid repeating markers
    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    status = zlib_deflate.deflate(strm, _flush_mode);

    // Ended => flush and finish
    if (status === Z_STREAM_END) {
      if (strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
      }
      status = zlib_deflate.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK;
    }

    // Flush if out buffer full
    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    }

    // Flush if requested and has data
    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    this.result = utils.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  const deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


module.exports.Deflate = Deflate;
module.exports.deflate = deflate;
module.exports.deflateRaw = deflateRaw;
module.exports.gzip = gzip;
module.exports.constants = __webpack_require__(/*! ./zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");


/***/ }),

/***/ "./node_modules/pako/lib/inflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/inflate.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



const zlib_inflate = __webpack_require__(/*! ./zlib/inflate */ "./node_modules/pako/lib/zlib/inflate.js");
const utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
const strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
const msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
const ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");
const GZheader     = __webpack_require__(/*! ./zlib/gzheader */ "./node_modules/pako/lib/zlib/gzheader.js");

const toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH, Z_FINISH,
  Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR
} = __webpack_require__(/*! ./zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");

/* ===========================================================================*/


/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  this.options = utils.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ''
  }, options || {});

  const opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  let status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  const dictionary = this.options.dictionary;
  let status, _flush_mode, last_avail_out;

  if (this.ended) return false;

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;

  // Convert data if needed
  if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, _flush_mode);

    if (status === Z_NEED_DICT && dictionary) {
      status = zlib_inflate.inflateSetDictionary(strm, dictionary);

      if (status === Z_OK) {
        status = zlib_inflate.inflate(strm, _flush_mode);
      } else if (status === Z_DATA_ERROR) {
        // Replace code with more verbose
        status = Z_NEED_DICT;
      }
    }

    // Skip snyc markers if more data follows and not raw mode
    while (strm.avail_in > 0 &&
           status === Z_STREAM_END &&
           strm.state.wrap > 0 &&
           data[strm.next_in] !== 0)
    {
      zlib_inflate.inflateReset(strm);
      status = zlib_inflate.inflate(strm, _flush_mode);
    }

    switch (status) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        this.onEnd(status);
        this.ended = true;
        return false;
    }

    // Remember real `avail_out` value, because we may patch out buffer content
    // to align utf8 strings boundaries.
    last_avail_out = strm.avail_out;

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END) {

        if (this.options.to === 'string') {

          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          let tail = strm.next_out - next_out_utf8;
          let utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail & realign counters
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);

          this.onData(utf8str);

        } else {
          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
        }
      }
    }

    // Must repeat iteration if out buffer is full
    if (status === Z_OK && last_avail_out === 0) continue;

    // Finalize if end of stream reached.
    if (status === Z_STREAM_END) {
      status = zlib_inflate.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return true;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  const inflator = new Inflate(options);

  inflator.push(input);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) throw inflator.msg || msg[inflator.err];

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


module.exports.Inflate = Inflate;
module.exports.inflate = inflate;
module.exports.inflateRaw = inflateRaw;
module.exports.ungzip = inflate;
module.exports.constants = __webpack_require__(/*! ./zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");


/***/ }),

/***/ "./node_modules/pako/lib/utils/common.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/utils/common.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";



const _has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

module.exports.assign = function (obj /*from1, from2, from3, ...*/) {
  const sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    const source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (const p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// Join array of chunks to single array.
module.exports.flattenChunks = (chunks) => {
  // calculate data length
  let len = 0;

  for (let i = 0, l = chunks.length; i < l; i++) {
    len += chunks[i].length;
  }

  // join chunks
  const result = new Uint8Array(len);

  for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos);
    pos += chunk.length;
  }

  return result;
};


/***/ }),

/***/ "./node_modules/pako/lib/utils/strings.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/utils/strings.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";
// String encode/decode helpers



// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256);
for (let q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
module.exports.string2buf = (str) => {
  if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(str);
  }

  let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new Uint8Array(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper
const buf2binstring = (buf, len) => {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK) {
      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
  }

  let result = '';
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
};


// convert array to string
module.exports.buf2string = (buf, max) => {
  const len = max || buf.length;

  if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(buf.subarray(0, max));
  }

  let i, out;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  const utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    let c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    let c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
module.exports.utf8border = (buf, max) => {

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  let pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/adler32.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/adler32.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const adler32 = (adler, buf, len, pos) => {
  let s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
};


module.exports = adler32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/pako/lib/zlib/constants.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  Z_MEM_ERROR:       -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/crc32.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/crc32.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
const makeTable = () => {
  let c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
};

// Create table on load. Just 255 signed longs. Not a problem.
const crcTable = new Uint32Array(makeTable());


const crc32 = (crc, buf, len, pos) => {
  const t = crcTable;
  const end = pos + len;

  crc ^= -1;

  for (let i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
};


module.exports = crc32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/deflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/deflate.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = __webpack_require__(/*! ./trees */ "./node_modules/pako/lib/zlib/trees.js");
const adler32 = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
const crc32   = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
const msg     = __webpack_require__(/*! ./messages */ "./node_modules/pako/lib/zlib/messages.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH, Z_PARTIAL_FLUSH, Z_FULL_FLUSH, Z_FINISH, Z_BLOCK,
  Z_OK, Z_STREAM_END, Z_STREAM_ERROR, Z_DATA_ERROR, Z_BUF_ERROR,
  Z_DEFAULT_COMPRESSION,
  Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY,
  Z_UNKNOWN,
  Z_DEFLATED
} = __webpack_require__(/*! ./constants */ "./node_modules/pako/lib/zlib/constants.js");

/*============================================================================*/


const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
const MAX_WBITS = 15;
/* 32K LZ77 window */
const DEF_MEM_LEVEL = 8;


const LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
const LITERALS      = 256;
/* number of literal bytes 0..255 */
const L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
const D_CODES       = 30;
/* number of distance codes */
const BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
const HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
const MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

const PRESET_DICT = 0x20;

const INIT_STATE    =  42;    /* zlib header -> BUSY_STATE */
//#ifdef GZIP
const GZIP_STATE    =  57;    /* gzip header -> BUSY_STATE | EXTRA_STATE */
//#endif
const EXTRA_STATE   =  69;    /* gzip extra block -> NAME_STATE */
const NAME_STATE    =  73;    /* gzip file name -> COMMENT_STATE */
const COMMENT_STATE =  91;    /* gzip comment -> HCRC_STATE */
const HCRC_STATE    = 103;    /* gzip header CRC -> BUSY_STATE */
const BUSY_STATE    = 113;    /* deflate -> FINISH_STATE */
const FINISH_STATE  = 666;    /* stream complete */

const BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
const BS_BLOCK_DONE     = 2; /* block flush performed */
const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
const BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

const err = (strm, errorCode) => {
  strm.msg = msg[errorCode];
  return errorCode;
};

const rank = (f) => {
  return ((f) * 2) - ((f) > 4 ? 9 : 0);
};

const zero = (buf) => {
  let len = buf.length; while (--len >= 0) { buf[len] = 0; }
};

/* ===========================================================================
 * Slide the hash table when sliding the window down (could be avoided with 32
 * bit values at the expense of memory usage). We slide even when level == 0 to
 * keep the hash table consistent if we switch back to level > 0 later.
 */
const slide_hash = (s) => {
  let n, m;
  let p;
  let wsize = s.w_size;

  n = s.hash_size;
  p = n;
  do {
    m = s.head[--p];
    s.head[p] = (m >= wsize ? m - wsize : 0);
  } while (--n);
  n = wsize;
//#ifndef FASTEST
  p = n;
  do {
    m = s.prev[--p];
    s.prev[p] = (m >= wsize ? m - wsize : 0);
    /* If n is not on any hash chain, prev[n] is garbage but
     * its value will never be used.
     */
  } while (--n);
//#endif
};

/* eslint-disable new-cap */
let HASH_ZLIB = (s, prev, data) => ((prev << s.hash_shift) ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH = HASH_ZLIB;


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output, except for
 * some deflate_stored() output, goes through this function so some
 * applications may wish to modify it to avoid allocating a large
 * strm->next_out buffer and copying into it. (See also read_buf()).
 */
const flush_pending = (strm) => {
  const s = strm.state;

  //_tr_flush_bits(s);
  let len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
  strm.next_out  += len;
  s.pending_out  += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending      -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
};


const flush_block_only = (s, last) => {
  _tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
};


const put_byte = (s, b) => {
  s.pending_buf[s.pending++] = b;
};


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
const putShortMSB = (s, b) => {

  //  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
};


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
const read_buf = (strm, buf, start, size) => {

  let len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
};


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
const longest_match = (s, cur_match) => {

  let chain_length = s.max_chain_length;      /* max hash chain length */
  let scan = s.strstart; /* current string */
  let match;                       /* matched string */
  let len;                           /* length of current match */
  let best_len = s.prev_length;              /* best match length so far */
  let nice_match = s.nice_match;             /* stop if match long enough */
  const limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  const _win = s.window; // shortcut

  const wmask = s.w_mask;
  const prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  const strend = s.strstart + MAX_MATCH;
  let scan_end1  = _win[scan + best_len - 1];
  let scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
};


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
const fill_window = (s) => {

  const _w_size = s.w_size;
  let n, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;
      if (s.insert > s.strstart) {
        s.insert = s.strstart;
      }
      slide_hash(s);
      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 *
 * In case deflateParams() is used to later switch to a non-zero compression
 * level, s->matches (otherwise unused when storing) keeps track of the number
 * of hash table slides to perform. If s->matches is 1, then one hash table
 * slide will be done when switching. If s->matches is 2, the maximum value
 * allowed here, then the hash table will be cleared, since two or more slides
 * is the same as a clear.
 *
 * deflate_stored() is written to minimize the number of times an input byte is
 * copied. It is most efficient with large input and output buffers, which
 * maximizes the opportunites to have a single copy from next_in to next_out.
 */
const deflate_stored = (s, flush) => {

  /* Smallest worthy block size when not flushing or finishing. By default
   * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
   * large input and output buffers, the stored block size will be larger.
   */
  let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;

  /* Copy as many min_block or larger stored blocks directly to next_out as
   * possible. If flushing, copy the remaining available input to next_out as
   * stored blocks, if there is enough space.
   */
  let len, left, have, last = 0;
  let used = s.strm.avail_in;
  do {
    /* Set len to the maximum size block that we can copy directly with the
     * available input data and output space. Set left to how much of that
     * would be copied from what's left in the window.
     */
    len = 65535/* MAX_STORED */;     /* maximum deflate stored block length */
    have = (s.bi_valid + 42) >> 3;     /* number of header bytes */
    if (s.strm.avail_out < have) {         /* need room for header */
      break;
    }
      /* maximum stored block length that will fit in avail_out: */
    have = s.strm.avail_out - have;
    left = s.strstart - s.block_start;  /* bytes left in window */
    if (len > left + s.strm.avail_in) {
      len = left + s.strm.avail_in;   /* limit len to the input */
    }
    if (len > have) {
      len = have;             /* limit len to the output */
    }

    /* If the stored block would be less than min_block in length, or if
     * unable to copy all of the available input when flushing, then try
     * copying to the window and the pending buffer instead. Also don't
     * write an empty block when flushing -- deflate() does that.
     */
    if (len < min_block && ((len === 0 && flush !== Z_FINISH) ||
                        flush === Z_NO_FLUSH ||
                        len !== left + s.strm.avail_in)) {
      break;
    }

    /* Make a dummy stored block in pending to get the header bytes,
     * including any pending bits. This also updates the debugging counts.
     */
    last = flush === Z_FINISH && len === left + s.strm.avail_in ? 1 : 0;
    _tr_stored_block(s, 0, 0, last);

    /* Replace the lengths in the dummy stored block with len. */
    s.pending_buf[s.pending - 4] = len;
    s.pending_buf[s.pending - 3] = len >> 8;
    s.pending_buf[s.pending - 2] = ~len;
    s.pending_buf[s.pending - 1] = ~len >> 8;

    /* Write the stored block header bytes. */
    flush_pending(s.strm);

//#ifdef ZLIB_DEBUG
//    /* Update debugging counts for the data about to be copied. */
//    s->compressed_len += len << 3;
//    s->bits_sent += len << 3;
//#endif

    /* Copy uncompressed bytes from the window to next_out. */
    if (left) {
      if (left > len) {
        left = len;
      }
      //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
      s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
      s.strm.next_out += left;
      s.strm.avail_out -= left;
      s.strm.total_out += left;
      s.block_start += left;
      len -= left;
    }

    /* Copy uncompressed bytes directly from next_in to next_out, updating
     * the check value.
     */
    if (len) {
      read_buf(s.strm, s.strm.output, s.strm.next_out, len);
      s.strm.next_out += len;
      s.strm.avail_out -= len;
      s.strm.total_out += len;
    }
  } while (last === 0);

  /* Update the sliding window with the last s->w_size bytes of the copied
   * data, or append all of the copied data to the existing window if less
   * than s->w_size bytes were copied. Also update the number of bytes to
   * insert in the hash tables, in the event that deflateParams() switches to
   * a non-zero compression level.
   */
  used -= s.strm.avail_in;    /* number of input bytes directly copied */
  if (used) {
    /* If any input was used, then no unused input remains in the window,
     * therefore s->block_start == s->strstart.
     */
    if (used >= s.w_size) {  /* supplant the previous history */
      s.matches = 2;     /* clear hash */
      //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
      s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
      s.strstart = s.w_size;
      s.insert = s.strstart;
    }
    else {
      if (s.window_size - s.strstart <= used) {
        /* Slide the window down. */
        s.strstart -= s.w_size;
        //zmemcpy(s->window, s->window + s->w_size, s->strstart);
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) {
          s.matches++;   /* add a pending slide_hash() */
        }
        if (s.insert > s.strstart) {
          s.insert = s.strstart;
        }
      }
      //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
      s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
      s.strstart += used;
      s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
    }
    s.block_start = s.strstart;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }

  /* If the last block was written to next_out, then done. */
  if (last) {
    return BS_FINISH_DONE;
  }

  /* If flushing and all input has been consumed, then done. */
  if (flush !== Z_NO_FLUSH && flush !== Z_FINISH &&
    s.strm.avail_in === 0 && s.strstart === s.block_start) {
    return BS_BLOCK_DONE;
  }

  /* Fill the window with any remaining input. */
  have = s.window_size - s.strstart;
  if (s.strm.avail_in > have && s.block_start >= s.w_size) {
    /* Slide the window down. */
    s.block_start -= s.w_size;
    s.strstart -= s.w_size;
    //zmemcpy(s->window, s->window + s->w_size, s->strstart);
    s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
    if (s.matches < 2) {
      s.matches++;       /* add a pending slide_hash() */
    }
    have += s.w_size;      /* more space now */
    if (s.insert > s.strstart) {
      s.insert = s.strstart;
    }
  }
  if (have > s.strm.avail_in) {
    have = s.strm.avail_in;
  }
  if (have) {
    read_buf(s.strm, s.window, s.strstart, have);
    s.strstart += have;
    s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }

  /* There was not enough avail_out to write a complete worthy or flushed
   * stored block to next_out. Write a stored block to pending instead, if we
   * have enough input for a worthy block, or if flushing and there is enough
   * room for the remaining input as a stored block in the pending buffer.
   */
  have = (s.bi_valid + 42) >> 3;     /* number of header bytes */
    /* maximum stored block length that will fit in pending: */
  have = s.pending_buf_size - have > 65535/* MAX_STORED */ ? 65535/* MAX_STORED */ : s.pending_buf_size - have;
  min_block = have > s.w_size ? s.w_size : have;
  left = s.strstart - s.block_start;
  if (left >= min_block ||
     ((left || flush === Z_FINISH) && flush !== Z_NO_FLUSH &&
     s.strm.avail_in === 0 && left <= have)) {
    len = left > have ? have : left;
    last = flush === Z_FINISH && s.strm.avail_in === 0 &&
         len === left ? 1 : 0;
    _tr_stored_block(s, s.block_start, len, last);
    s.block_start += len;
    flush_pending(s.strm);
  }

  /* We've done all we can with the available input and output. */
  return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};


/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
const deflate_fast = (s, flush) => {

  let hash_head;        /* head of the hash chain */
  let bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
const deflate_slow = (s, flush) => {

  let hash_head;          /* head of hash chain */
  let bflush;              /* set if current block must be flushed */

  let max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
};


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
const deflate_rle = (s, flush) => {

  let bflush;            /* set if current block must be flushed */
  let prev;              /* byte at distance one to match */
  let scan, strend;      /* scan goes up to strend for length of run */

  const _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
const deflate_huff = (s, flush) => {

  let bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {

  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

const configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
const lm_init = (s) => {

  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
};


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new Uint16Array(HEAP_SIZE * 2);
  this.dyn_dtree  = new Uint16Array((2 * D_CODES + 1) * 2);
  this.bl_tree    = new Uint16Array((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new Uint16Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new Uint16Array(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.sym_buf = 0;        /* buffer for distances and literals/lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.sym_next = 0;      /* running index in sym_buf */
  this.sym_end = 0;       /* symbol table full when sym_next reaches this */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


/* =========================================================================
 * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
 */
const deflateStateCheck = (strm) => {

  if (!strm) {
    return 1;
  }
  const s = strm.state;
  if (!s || s.strm !== strm || (s.status !== INIT_STATE &&
//#ifdef GZIP
                                s.status !== GZIP_STATE &&
//#endif
                                s.status !== EXTRA_STATE &&
                                s.status !== NAME_STATE &&
                                s.status !== COMMENT_STATE &&
                                s.status !== HCRC_STATE &&
                                s.status !== BUSY_STATE &&
                                s.status !== FINISH_STATE)) {
    return 1;
  }
  return 0;
};


const deflateResetKeep = (strm) => {

  if (deflateStateCheck(strm)) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  const s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status =
//#ifdef GZIP
    s.wrap === 2 ? GZIP_STATE :
//#endif
    s.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = -2;
  _tr_init(s);
  return Z_OK;
};


const deflateReset = (strm) => {

  const ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
};


const deflateSetHeader = (strm, head) => {

  if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
    return Z_STREAM_ERROR;
  }
  strm.state.gzhead = head;
  return Z_OK;
};


const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {

  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  let wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED || (windowBits === 8 && wrap !== 1)) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  const s = new DeflateState();

  strm.state = s;
  s.strm = strm;
  s.status = INIT_STATE;     /* to pass state test in deflateReset() */

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  /* We overlay pending_buf and sym_buf. This works since the average size
   * for length/distance pairs over any compressed block is assured to be 31
   * bits or less.
   *
   * Analysis: The longest fixed codes are a length code of 8 bits plus 5
   * extra bits, for lengths 131 to 257. The longest fixed distance codes are
   * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
   * possible fixed-codes length/distance pair is then 31 bits total.
   *
   * sym_buf starts one-fourth of the way into pending_buf. So there are
   * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
   * in sym_buf is three bytes -- two for the distance and one for the
   * literal/length. As each symbol is consumed, the pointer to the next
   * sym_buf value to read moves forward three bytes. From that symbol, up to
   * 31 bits are written to pending_buf. The closest the written pending_buf
   * bits gets to the next sym_buf symbol to read is just before the last
   * code is written. At that time, 31*(n-2) bits have been written, just
   * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
   * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
   * symbols are written.) The closest the writing gets to what is unread is
   * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
   * can range from 128 to 32768.
   *
   * Therefore, at a minimum, there are 142 bits of space between what is
   * written and what is read in the overlain buffers, so the symbols cannot
   * be overwritten by the compressed data. That space is actually 139 bits,
   * due to the three-bit fixed-code block header.
   *
   * That covers the case where either Z_FIXED is specified, forcing fixed
   * codes, or when the use of fixed codes is chosen, because that choice
   * results in a smaller compressed block than dynamic codes. That latter
   * condition then assures that the above analysis also covers all dynamic
   * blocks. A dynamic-code block will only be chosen to be emitted if it has
   * fewer bits than a fixed-code block would for the same set of symbols.
   * Therefore its average symbol length is assured to be less than 31. So
   * the compressed data for a dynamic block also cannot overwrite the
   * symbols from which it is being constructed.
   */

  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new Uint8Array(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->sym_buf = s->pending_buf + s->lit_bufsize;
  s.sym_buf = s.lit_bufsize;

  //s->sym_end = (s->lit_bufsize - 1) * 3;
  s.sym_end = (s.lit_bufsize - 1) * 3;
  /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
};

const deflateInit = (strm, level) => {

  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
};


/* ========================================================================= */
const deflate = (strm, flush) => {

  if (deflateStateCheck(strm) || flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  const s = strm.state;

  if (!strm.output ||
      (strm.avail_in !== 0 && !strm.input) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  const old_flush = s.last_flush;
  s.last_flush = flush;

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Write the header */
  if (s.status === INIT_STATE && s.wrap === 0) {
    s.status = BUSY_STATE;
  }
  if (s.status === INIT_STATE) {
    /* zlib header */
    let header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
    let level_flags = -1;

    if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
      level_flags = 0;
    } else if (s.level < 6) {
      level_flags = 1;
    } else if (s.level === 6) {
      level_flags = 2;
    } else {
      level_flags = 3;
    }
    header |= (level_flags << 6);
    if (s.strstart !== 0) { header |= PRESET_DICT; }
    header += 31 - (header % 31);

    putShortMSB(s, header);

    /* Save the adler32 of the preset dictionary: */
    if (s.strstart !== 0) {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 0xffff);
    }
    strm.adler = 1; // adler32(0L, Z_NULL, 0);
    s.status = BUSY_STATE;

    /* Compression must start with an empty pending buffer */
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK;
    }
  }
//#ifdef GZIP
  if (s.status === GZIP_STATE) {
    /* gzip header */
    strm.adler = 0;  //crc32(0L, Z_NULL, 0);
    put_byte(s, 31);
    put_byte(s, 139);
    put_byte(s, 8);
    if (!s.gzhead) { // s->gzhead == Z_NULL
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, s.level === 9 ? 2 :
                  (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                   4 : 0));
      put_byte(s, OS_CODE);
      s.status = BUSY_STATE;

      /* Compression must start with an empty pending buffer */
      flush_pending(strm);
      if (s.pending !== 0) {
        s.last_flush = -1;
        return Z_OK;
      }
    }
    else {
      put_byte(s, (s.gzhead.text ? 1 : 0) +
                  (s.gzhead.hcrc ? 2 : 0) +
                  (!s.gzhead.extra ? 0 : 4) +
                  (!s.gzhead.name ? 0 : 8) +
                  (!s.gzhead.comment ? 0 : 16)
      );
      put_byte(s, s.gzhead.time & 0xff);
      put_byte(s, (s.gzhead.time >> 8) & 0xff);
      put_byte(s, (s.gzhead.time >> 16) & 0xff);
      put_byte(s, (s.gzhead.time >> 24) & 0xff);
      put_byte(s, s.level === 9 ? 2 :
                  (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                   4 : 0));
      put_byte(s, s.gzhead.os & 0xff);
      if (s.gzhead.extra && s.gzhead.extra.length) {
        put_byte(s, s.gzhead.extra.length & 0xff);
        put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
      }
      if (s.gzhead.hcrc) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
      }
      s.gzindex = 0;
      s.status = EXTRA_STATE;
    }
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
      while (s.pending + left > s.pending_buf_size) {
        let copy = s.pending_buf_size - s.pending;
        // zmemcpy(s.pending_buf + s.pending,
        //    s.gzhead.extra + s.gzindex, copy);
        s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
        s.pending = s.pending_buf_size;
        //--- HCRC_UPDATE(beg) ---//
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        //---//
        s.gzindex += copy;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK;
        }
        beg = 0;
        left -= copy;
      }
      // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
      //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
      let gzhead_extra = new Uint8Array(s.gzhead.extra);
      // zmemcpy(s->pending_buf + s->pending,
      //     s->gzhead->extra + s->gzindex, left);
      s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
      s.pending += left;
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
      s.gzindex = 0;
    }
    s.status = NAME_STATE;
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          //--- HCRC_UPDATE(beg) ---//
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          //---//
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK;
          }
          beg = 0;
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
      s.gzindex = 0;
    }
    s.status = COMMENT_STATE;
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          //--- HCRC_UPDATE(beg) ---//
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          //---//
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK;
          }
          beg = 0;
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
    }
    s.status = HCRC_STATE;
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      }
      put_byte(s, strm.adler & 0xff);
      put_byte(s, (strm.adler >> 8) & 0xff);
      strm.adler = 0; //crc32(0L, Z_NULL, 0);
    }
    s.status = BUSY_STATE;

    /* Compression must start with an empty pending buffer */
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK;
    }
  }
//#endif

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    let bstate = s.level === 0 ? deflate_stored(s, flush) :
                 s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) :
                 s.strategy === Z_RLE ? deflate_rle(s, flush) :
                 configuration_table[s.level].func(s, flush);

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        _tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
};


const deflateEnd = (strm) => {

  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR;
  }

  const status = strm.state.status;

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
};


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
const deflateSetDictionary = (strm, dictionary) => {

  let dictLength = dictionary.length;

  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR;
  }

  const s = strm.state;
  const wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  const avail = strm.avail_in;
  const next = strm.next_in;
  const input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    let str = s.strstart;
    let n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
};


module.exports.deflateInit = deflateInit;
module.exports.deflateInit2 = deflateInit2;
module.exports.deflateReset = deflateReset;
module.exports.deflateResetKeep = deflateResetKeep;
module.exports.deflateSetHeader = deflateSetHeader;
module.exports.deflate = deflate;
module.exports.deflateEnd = deflateEnd;
module.exports.deflateSetDictionary = deflateSetDictionary;
module.exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateGetDictionary = deflateGetDictionary;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/gzheader.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/gzheader.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inffast.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inffast.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
const BAD = 16209;       /* got a data error -- remain here until reset */
const TYPE = 16191;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  let _in;                    /* local strm.input */
  let last;                   /* have enough input while in < last */
  let _out;                   /* local strm.output */
  let beg;                    /* inflate()'s initial strm.output */
  let end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  let dmax;                   /* maximum distance from zlib header */
//#endif
  let wsize;                  /* window size or zero if not using window */
  let whave;                  /* valid bytes in the window */
  let wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  let s_window;               /* allocated sliding window, if wsize != 0 */
  let hold;                   /* local strm.hold */
  let bits;                   /* local strm.bits */
  let lcode;                  /* local strm.lencode */
  let dcode;                  /* local strm.distcode */
  let lmask;                  /* mask for first level of length codes */
  let dmask;                  /* mask for first level of distance codes */
  let here;                   /* retrieved table entry */
  let op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  let len;                    /* match length, unused bytes */
  let dist;                   /* match distance */
  let from;                   /* where to copy match from */
  let from_source;


  let input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  const state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inflate.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const adler32       = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
const crc32         = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
const inflate_fast  = __webpack_require__(/*! ./inffast */ "./node_modules/pako/lib/zlib/inffast.js");
const inflate_table = __webpack_require__(/*! ./inftrees */ "./node_modules/pako/lib/zlib/inftrees.js");

const CODES = 0;
const LENS = 1;
const DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_FINISH, Z_BLOCK, Z_TREES,
  Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR, Z_BUF_ERROR,
  Z_DEFLATED
} = __webpack_require__(/*! ./constants */ "./node_modules/pako/lib/zlib/constants.js");


/* STATES ====================================================================*/
/* ===========================================================================*/


const    HEAD = 16180;       /* i: waiting for magic header */
const    FLAGS = 16181;      /* i: waiting for method and flags (gzip) */
const    TIME = 16182;       /* i: waiting for modification time (gzip) */
const    OS = 16183;         /* i: waiting for extra flags and operating system (gzip) */
const    EXLEN = 16184;      /* i: waiting for extra length (gzip) */
const    EXTRA = 16185;      /* i: waiting for extra bytes (gzip) */
const    NAME = 16186;       /* i: waiting for end of file name (gzip) */
const    COMMENT = 16187;    /* i: waiting for end of comment (gzip) */
const    HCRC = 16188;       /* i: waiting for header crc (gzip) */
const    DICTID = 16189;    /* i: waiting for dictionary check value */
const    DICT = 16190;      /* waiting for inflateSetDictionary() call */
const        TYPE = 16191;      /* i: waiting for type bits, including last-flag bit */
const        TYPEDO = 16192;    /* i: same, but skip check to exit inflate on new block */
const        STORED = 16193;    /* i: waiting for stored size (length and complement) */
const        COPY_ = 16194;     /* i/o: same as COPY below, but only first time in */
const        COPY = 16195;      /* i/o: waiting for input or output to copy stored block */
const        TABLE = 16196;     /* i: waiting for dynamic block table lengths */
const        LENLENS = 16197;   /* i: waiting for code length code lengths */
const        CODELENS = 16198;  /* i: waiting for length/lit and distance code lengths */
const            LEN_ = 16199;      /* i: same as LEN below, but only first time in */
const            LEN = 16200;       /* i: waiting for length/lit/eob code */
const            LENEXT = 16201;    /* i: waiting for length extra bits */
const            DIST = 16202;      /* i: waiting for distance code */
const            DISTEXT = 16203;   /* i: waiting for distance extra bits */
const            MATCH = 16204;     /* o: waiting for output space to copy string */
const            LIT = 16205;       /* o: waiting for output space to write literal */
const    CHECK = 16206;     /* i: waiting for 32-bit check value */
const    LENGTH = 16207;    /* i: waiting for 32-bit length (gzip) */
const    DONE = 16208;      /* finished check, done -- remain here until reset */
const    BAD = 16209;       /* got a data error -- remain here until reset */
const    MEM = 16210;       /* got an inflate() memory error -- remain here until reset */
const    SYNC = 16211;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

const MAX_WBITS = 15;
/* 32K LZ77 window */
const DEF_WBITS = MAX_WBITS;


const zswap32 = (q) => {

  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
};


function InflateState() {
  this.strm = null;           /* pointer back to this zlib stream */
  this.mode = 0;              /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip,
                                 bit 2 true to validate check value */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib), or
                                 -1 if raw or no header yet */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new Uint16Array(320); /* temporary storage for code lengths */
  this.work = new Uint16Array(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}


const inflateStateCheck = (strm) => {

  if (!strm) {
    return 1;
  }
  const state = strm.state;
  if (!state || state.strm !== strm ||
    state.mode < HEAD || state.mode > SYNC) {
    return 1;
  }
  return 0;
};


const inflateResetKeep = (strm) => {

  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR; }
  const state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.flags = -1;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
};


const inflateReset = (strm) => {

  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR; }
  const state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

};


const inflateReset2 = (strm, windowBits) => {
  let wrap;

  /* get the state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR; }
  const state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 5;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
};


const inflateInit2 = (strm, windowBits) => {

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  const state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.strm = strm;
  state.window = null/*Z_NULL*/;
  state.mode = HEAD;     /* to pass state test in inflateReset2() */
  const ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
};


const inflateInit = (strm) => {

  return inflateInit2(strm, DEF_WBITS);
};


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
let virgin = true;

let lenfix, distfix; // We have no pointers in JS, so keep tables separate


const fixedtables = (state) => {

  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    lenfix = new Int32Array(512);
    distfix = new Int32Array(32);

    /* literal/length table */
    let sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
};


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
const updatewindow = (strm, src, end, copy) => {

  let dist;
  const state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new Uint8Array(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    state.window.set(src.subarray(end - state.wsize, end), 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      state.window.set(src.subarray(end - copy, end), 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
};


const inflate = (strm, flush) => {

  let state;
  let input, output;          // input/output buffers
  let next;                   /* next input INDEX */
  let put;                    /* next output INDEX */
  let have, left;             /* available input and output */
  let hold;                   /* bit buffer */
  let bits;                   /* bits in bit buffer */
  let _in, _out;              /* save starting available input and output */
  let copy;                   /* number of stored or match bytes to copy */
  let from;                   /* where to copy match bytes from */
  let from_source;
  let here = 0;               /* current decoding table entry */
  let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //let last;                   /* parent table entry */
  let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  let len;                    /* length to copy for repeats, bits to drop */
  let ret;                    /* return code */
  const hbuf = new Uint8Array(4);    /* buffer for gzip header crc calculation */
  let opts;

  let n; // temporary variable for NEED_BITS

  const order = /* permutation of code lengths */
    new Uint8Array([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]);


  if (inflateStateCheck(strm) || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          if (state.wbits === 0) {
            state.wbits = 15;
          }
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        if (len > 15 || len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }

        // !!! pako patch. Force use `options.windowBits` if passed.
        // Required to always use max window size by default.
        state.dmax = 1 << state.wbits;
        //state.dmax = 1 << len;

        state.flags = 0;               /* indicate zlib header */
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Uint8Array(state.head.extra_len);
              }
              state.head.extra.set(
                input.subarray(
                  next,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  next + copy
                ),
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if ((state.flags & 0x0200) && (state.wrap & 4)) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((state.wrap & 4) && hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          output.set(input.subarray(next, next + copy), put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if ((state.wrap & 4) && _out) {
            strm.adler = state.check =
                /*UPDATE_CHECK(state.check, put - _out, _out);*/
                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.wrap & 4) && (state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((state.wrap & 4) && hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if ((state.wrap & 4) && _out) {
    strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
};


const inflateEnd = (strm) => {

  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR;
  }

  let state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
};


const inflateGetHeader = (strm, head) => {

  /* check state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR; }
  const state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
};


const inflateSetDictionary = (strm, dictionary) => {
  const dictLength = dictionary.length;

  let state;
  let dictid;
  let ret;

  /* check state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
};


module.exports.inflateReset = inflateReset;
module.exports.inflateReset2 = inflateReset2;
module.exports.inflateResetKeep = inflateResetKeep;
module.exports.inflateInit = inflateInit;
module.exports.inflateInit2 = inflateInit2;
module.exports.inflate = inflate;
module.exports.inflateEnd = inflateEnd;
module.exports.inflateGetHeader = inflateGetHeader;
module.exports.inflateSetDictionary = inflateSetDictionary;
module.exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
module.exports.inflateCodesUsed = inflateCodesUsed;
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
module.exports.inflateValidate = inflateValidate;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inftrees.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/inftrees.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const MAXBITS = 15;
const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

const CODES = 0;
const LENS = 1;
const DISTS = 2;

const lbase = new Uint16Array([ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
]);

const lext = new Uint8Array([ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
]);

const dbase = new Uint16Array([ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
]);

const dext = new Uint8Array([ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
]);

const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) =>
{
  const bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  let len = 0;               /* a code's length in bits */
  let sym = 0;               /* index of code symbols */
  let min = 0, max = 0;          /* minimum and maximum code lengths */
  let root = 0;              /* number of index bits for root table */
  let curr = 0;              /* number of index bits for current table */
  let drop = 0;              /* code bits to drop for sub-table */
  let left = 0;                   /* number of prefix codes available */
  let used = 0;              /* code entries in table used */
  let huff = 0;              /* Huffman code */
  let incr;              /* for incrementing code, index */
  let fill;              /* index for replicating entries */
  let low;               /* low bits for current root entry */
  let mask;              /* mask for low root bits */
  let next;             /* next available space in table */
  let base = null;     /* base value table to use */
//  let shoextra;    /* extra bits table to use */
  let match;                  /* use base and extra for symbol >= match */
  const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  let extra = null;

  let here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    match = 20;

  } else if (type === LENS) {
    base = lbase;
    extra = lext;
    match = 257;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    match = 0;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] + 1 < match) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] >= match) {
      here_op = extra[work[sym] - match];
      here_val = base[work[sym] - match];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


module.exports = inflate_table;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/messages.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/messages.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/trees.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/trees.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

/* Public constants ==========================================================*/
/* ===========================================================================*/


//const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
const Z_FIXED               = 4;
//const Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
const Z_BINARY              = 0;
const Z_TEXT                = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { let len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES    = 2;
/* The three kinds of block type */

const MIN_MATCH    = 3;
const MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

const LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

const LITERALS      = 256;
/* number of literal bytes 0..255 */

const L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

const D_CODES       = 30;
/* number of distance codes */

const BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

const HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

const MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

const Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

const END_BLOCK   = 256;
/* end of block literal code */

const REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

const REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
const extra_lbits =   /* extra bits for each length code */
  new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]);

const extra_dbits =   /* extra bits for each distance code */
  new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]);

const extra_blbits =  /* extra bits for each bit length code */
  new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]);

const bl_order =
  new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

const DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

const static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

const _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

const _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

const base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

const base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


let static_l_desc;
let static_d_desc;
let static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



const d_code = (dist) => {

  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
const put_short = (s, w) => {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
};


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
const send_bits = (s, value, length) => {

  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
};


const send_code = (s, c, tree) => {

  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
};


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
const bi_reverse = (code, len) => {

  let res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
};


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
const bi_flush = (s) => {

  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
};


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
const gen_bitlen = (s, desc) => {
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */

  const tree            = desc.dyn_tree;
  const max_code        = desc.max_code;
  const stree           = desc.stat_desc.static_tree;
  const has_stree       = desc.stat_desc.has_stree;
  const extra           = desc.stat_desc.extra_bits;
  const base            = desc.stat_desc.extra_base;
  const max_length      = desc.stat_desc.max_length;
  let h;              /* heap index */
  let n, m;           /* iterate over the tree elements */
  let bits;           /* bit length */
  let xbits;          /* extra bits */
  let f;              /* frequency */
  let overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Tracev((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
};


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
const gen_codes = (tree, max_code, bl_count) => {
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */

  const next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  let code = 0;              /* running code value */
  let bits;                  /* bit index */
  let n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    code = (code + bl_count[bits - 1]) << 1;
    next_code[bits] = code;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    let len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
};


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
const tr_static_init = () => {

  let n;        /* iterates over tree elements */
  let bits;     /* bit counter */
  let length;   /* length value */
  let code;     /* code value */
  let dist;     /* distance index */
  const bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
};


/* ===========================================================================
 * Initialize a new block.
 */
const init_block = (s) => {

  let n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.sym_next = s.matches = 0;
};


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
const bi_windup = (s) =>
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
};

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
const smaller = (tree, n, m, depth) => {

  const _n2 = n * 2;
  const _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
};

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
const pqdownheap = (s, tree, k) => {
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */

  const v = s.heap[k];
  let j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
};


// inlined manually
// const SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
const compress_block = (s, ltree, dtree) => {
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */

  let dist;           /* distance of matched string */
  let lc;             /* match length or unmatched char (if dist == 0) */
  let sx = 0;         /* running index in sym_buf */
  let code;           /* the code to send */
  let extra;          /* number of extra bits to send */

  if (s.sym_next !== 0) {
    do {
      dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
      dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
      lc = s.pending_buf[s.sym_buf + sx++];
      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and sym_buf is ok: */
      //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");

    } while (sx < s.sym_next);
  }

  send_code(s, END_BLOCK, ltree);
};


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
const build_tree = (s, desc) => {
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */

  const tree     = desc.dyn_tree;
  const stree    = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const elems    = desc.stat_desc.elems;
  let n, m;          /* iterate over heap elements */
  let max_code = -1; /* largest code with non zero frequency */
  let node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
};


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
const scan_tree = (s, tree, max_code) => {
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */

  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
const send_tree = (s, tree, max_code) => {
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */

  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
const build_bl_tree = (s) => {

  let max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
};


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
const send_all_trees = (s, lcodes, dcodes, blcodes) => {
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */

  let rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "block list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
const detect_data_type = (s) => {
  /* block_mask is the bit mask of block-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  let block_mask = 0xf3ffc07f;
  let n;

  /* Check for non-textual ("block-listed") bytes. */
  for (n = 0; n <= 31; n++, block_mask >>>= 1) {
    if ((block_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("allow-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "block-listed" or "allow-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
};


let static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
const _tr_init = (s) =>
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
};


/* ===========================================================================
 * Send a stored block
 */
const _tr_stored_block = (s, buf, stored_len, last) => {
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */

  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  bi_windup(s);        /* align on byte boundary */
  put_short(s, stored_len);
  put_short(s, ~stored_len);
  if (stored_len) {
    s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
  }
  s.pending += stored_len;
};


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
const _tr_align = (s) => {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
};


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and write out the encoded block.
 */
const _tr_flush_block = (s, buf, stored_len, last) => {
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */

  let opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  let max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->sym_next / 3));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
};

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
const _tr_tally = (s, dist, lc) => {
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */

  s.pending_buf[s.sym_buf + s.sym_next++] = dist;
  s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
  s.pending_buf[s.sym_buf + s.sym_next++] = lc;
  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

  return (s.sym_next === s.sym_end);
};

module.exports._tr_init  = _tr_init;
module.exports._tr_stored_block = _tr_stored_block;
module.exports._tr_flush_block  = _tr_flush_block;
module.exports._tr_tally = _tr_tally;
module.exports._tr_align = _tr_align;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/zstream.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/zstream.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;


/***/ }),

/***/ "./converter.ts":
/*!**********************!*\
  !*** ./converter.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.midiToBP = midiToBP;
const midi_json_parser_1 = __webpack_require__(/*! midi-json-parser */ "./node_modules/midi-json-parser/build/es2019/module.js");
const track_1 = __importDefault(__webpack_require__(/*! ./track */ "./track.ts"));
const factorio = __importStar(__webpack_require__(/*! ./factorio */ "./factorio.ts"));
const equalizer_1 = __webpack_require__(/*! ./equalizer */ "./equalizer.ts");
const music_box_bp_1 = __importDefault(__webpack_require__(/*! ./music-box.bp */ "./music-box.bp"));
const musicBoxBPTemplate = factorio.decodeBP(music_box_bp_1.default);
function midiToBP(data_1) {
    return __awaiter(this, arguments, void 0, function* (data, playbackMode = 'local', volume = 1.0, loop = true) {
        const musicBoxFilter = ['key', 'controller', 'controller-input', 'controller-misc'];
        if (loop)
            musicBoxFilter.push('controller-loop', 'controller-loop-port');
        const musicBoxBP = factorio.filterBP(musicBoxBPTemplate, ent => musicBoxFilter.includes(ent.player_description));
        let maxEntityID = 0;
        let playerCount = 0;
        let totalSignals = 0;
        const [keyCell, _] = factorio.genCell([...Array(2000)].map((_, i) => i + 1));
        const keyEnt = factorio.getEntityByDescription(musicBoxBP, 'key');
        keyEnt.control_behavior = keyCell;
        const loopEnt = factorio.getEntityByDescription(musicBoxBP, 'controller-loop-port');
        let lastKey = keyEnt;
        let lastControl = factorio.getEntityByDescription(musicBoxBP, 'controller');
        const midi = yield (0, midi_json_parser_1.parseArrayBuffer)(data);
        let tempo = 500000;
        const division = midi.division;
        // find tempo, assume single tempo for now
        for (let midiTrack of midi.tracks) {
            const tempoTrack = midiTrack.find(event => 'setTempo' in event);
            if (tempoTrack != null) {
                tempo = tempoTrack.setTempo.microsecondsPerQuarter;
            }
        }
        for (let [i, midiTrack] of midi.tracks.entries()) {
            const track = new track_1.default(tempo, midi.division);
            for (let event of midiTrack) {
                track.updateDelta(event.delta);
                if ('noteOn' in event) {
                    const note = event.noteOn.noteNumber;
                    track.pushNote(note);
                }
                if ('programChange' in event) {
                    const program = event.programChange.programNumber;
                    track.setMidiInstrument(program, event.channel);
                }
                if ('controlChange' in event) {
                    const { type, value } = event.controlChange;
                    if (type === 7) {
                        track.setMidiVolume(value);
                    }
                }
            }
            for (const data of track.data()) {
                const trackBP = factorio.filterBP(musicBoxBPTemplate, ent => ['rom', 'key-port', 'control-port', 'player'].includes(ent.player_description) || ent.name === 'programmable-speaker');
                const [cell, signalCount] = factorio.genCell(data);
                console.assert(data.length <= signalCount, `too many notes in a track ${data.length} / ${signalCount}`);
                const cellEnt = factorio.getEntityByDescription(trackBP, 'rom');
                cellEnt.control_behavior = cell;
                const speaker = trackBP.blueprint.entities.find((ent) => ent.name === 'programmable-speaker');
                speaker.control_behavior.circuit_parameters.instrument_id = track.getInstrumentID();
                speaker.parameters.playback_volume = track.getVolume();
                speaker.parameters.playback_mode = playbackMode;
                let maxTrackId = 0;
                for (const ent of trackBP.blueprint.entities) {
                    maxTrackId = Math.max(maxTrackId, ent.entity_number);
                    ent.entity_number += maxEntityID;
                    ent.position.x -= playerCount * 2;
                    musicBoxBP.blueprint.entities.push(ent);
                }
                for (const wire of trackBP.blueprint.wires) {
                    wire[0] += maxEntityID;
                    wire[2] += maxEntityID;
                    musicBoxBP.blueprint.wires.push(wire);
                }
                const keyPort = factorio.getEntityByDescription(trackBP, 'key-port');
                const controlPort = factorio.getEntityByDescription(trackBP, 'control-port');
                musicBoxBP.blueprint.wires.push([lastKey.entity_number, 1, keyPort.entity_number, 1], [lastControl.entity_number, 2, controlPort.entity_number, 2]);
                if (loop && playerCount === 0) {
                    musicBoxBP.blueprint.wires.push([loopEnt.entity_number, 1, keyPort.entity_number, 3]);
                }
                else {
                    musicBoxBP.blueprint.wires.push([lastKey.entity_number, 3, keyPort.entity_number, 3]);
                }
                lastKey = keyPort;
                lastControl = controlPort;
                maxEntityID += maxTrackId;
                totalSignals += signalCount;
                playerCount++;
            }
        }
        if (loop) {
            loopEnt.control_behavior.decider_conditions.conditions[0].constant = totalSignals + playerCount;
        }
        (0, equalizer_1.equalizeBP)(musicBoxBP, volume);
        return factorio.encodeBP(musicBoxBP);
    });
}


/***/ }),

/***/ "./equalizer.ts":
/*!**********************!*\
  !*** ./equalizer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.equalizeBP = equalizeBP;
const track_1 = __webpack_require__(/*! ./track */ "./track.ts");
const VOLUME_FACTOR = {
    [track_1.Instrument.Nothing]: 0.0,
    [track_1.Instrument.Piano]: 1.0,
    [track_1.Instrument.DrumKit]: 0.5,
    [track_1.Instrument.Bass]: 1.0,
    [track_1.Instrument.Lead]: 1.0,
    [track_1.Instrument.Sawtooth]: 1.0,
    [track_1.Instrument.Square]: 0.2,
    [track_1.Instrument.Celesta]: 1.0,
    [track_1.Instrument.Vibraphone]: 1.0,
    [track_1.Instrument.PluckedString]: 1.0,
    [track_1.Instrument.SteelDrum]: 1.0,
    [track_1.Instrument.WoodBlock]: 1.0,
    [track_1.Instrument.BassDrum]: 1.0,
};
function equalizeBP(bp, volume) {
    const speakers = bp.blueprint.entities.filter((ent) => ent.name === 'programmable-speaker');
    let maxVolume = 0.0;
    for (const speaker of speakers) {
        const factor = VOLUME_FACTOR[speaker.control_behavior.circuit_parameters.instrument_id];
        if (speaker.parameters.playback_volume === 0)
            speaker.parameters.playback_volume = 1.0;
        speaker.parameters.playback_volume *= factor;
        maxVolume = Math.max(maxVolume, speaker.parameters.playback_volume);
    }
    for (const speaker of speakers) {
        speaker.parameters.playback_volume *= volume / maxVolume;
    }
}


/***/ }),

/***/ "./factorio.ts":
/*!*********************!*\
  !*** ./factorio.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.genBPEntity = genBPEntity;
exports.genCell = genCell;
exports.getEntityByDescription = getEntityByDescription;
exports.filterBP = filterBP;
exports.encodeBP = encodeBP;
exports.decodeBP = decodeBP;
const pako_1 = __importDefault(__webpack_require__(/*! pako */ "./node_modules/pako/index.js"));
const signals_1 = __importDefault(__webpack_require__(/*! ./signals */ "./signals.ts"));
function genBPEntity(entities) {
    const blueprint = {
        "blueprint": {
            "icons": [
                {
                    "signal": {
                        "name": "constant-combinator"
                    },
                    "index": 1
                }
            ],
            "entities": [],
            "item": "blueprint"
        }
    };
    for (let [i, ent] of entities.entries()) {
        blueprint.blueprint.entities.push(Object.assign(Object.assign({}, ent), { index: i }));
    }
    return blueprint;
}
function genCell(content, ignore = {
    'virtual': [
        'signal-A',
        'signal-B',
    ],
}) {
    const keys = {
        "sections": {
            "sections": [
                {
                    "index": 1,
                    "filters": []
                }
            ]
        }
    };
    let index = 0;
    for (let signalType of Object.keys(signals_1.default)) {
        for (let signal of signals_1.default[signalType]) {
            if (ignore[signalType] && (ignore[signalType][0] == '*' || ignore[signalType].includes(signal))) {
                continue;
            }
            keys.sections.sections[0].filters.push({
                "index": index + 1,
                "type": signalType,
                "name": signal,
                "quality": "normal",
                "comparator": "=",
                "count": content[index],
            });
            index++;
            if (index >= content.length)
                break;
        }
        if (index >= content.length)
            break;
    }
    return [keys, index];
}
function getEntityByDescription(bp, name) {
    return bp.blueprint.entities.filter((ent) => ent.player_description == name)[0];
}
function filterBP(bp, filter) {
    const bpf = structuredClone(bp);
    if (filter == null)
        return bpf;
    bpf.blueprint.entities = bpf.blueprint.entities.filter(filter);
    const ids = bpf.blueprint.entities.map((ent) => ent.entity_number);
    bpf.blueprint.wires = bpf.blueprint.wires.filter((wire) => ids.includes(wire[0]) && ids.includes(wire[2]));
    return bpf;
}
function encodeBP(blueprint) {
    const compressed = pako_1.default.deflate(JSON.stringify(blueprint));
    const b64 = btoa(String.fromCodePoint.apply(null, compressed));
    return '0' + b64;
}
function decodeBP(blueprint) {
    const binary = atob(blueprint.slice(1));
    const compressed = Uint8Array.from(binary, c => c.charCodeAt(0));
    const inflated = pako_1.default.inflate(compressed);
    const decoded = new TextDecoder('UTF-8').decode(inflated);
    return JSON.parse(decoded);
}


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const converter_1 = __webpack_require__(/*! ./converter */ "./converter.ts");
function init() {
    const generateElement = document.getElementById('generate-button');
    const copyElement = document.getElementById('copy-button');
    const fileElement = document.getElementById('midi-upload');
    const outputElement = document.getElementById('bp-output');
    const modeElement = document.getElementById('speaker-mode');
    const volumeElement = document.getElementById('volume');
    const loopElement = document.getElementById('loop');
    if (fileElement instanceof HTMLInputElement &&
        modeElement instanceof HTMLSelectElement &&
        volumeElement instanceof HTMLInputElement &&
        outputElement instanceof HTMLElement &&
        loopElement instanceof HTMLSelectElement) {
        generateElement.onclick = () => __awaiter(this, void 0, void 0, function* () {
            if (fileElement.files.length > 0) {
                const file = fileElement.files[0];
                const bp = yield (0, converter_1.midiToBP)(yield file.arrayBuffer(), modeElement.value, volumeElement.valueAsNumber / +volumeElement.max, loopElement.value === 'forever');
                outputElement.textContent = bp;
                copyElement.textContent = "Copy";
            }
        });
    }
    if (copyElement instanceof HTMLButtonElement &&
        outputElement instanceof HTMLElement) {
        copyElement.addEventListener('click', () => {
            navigator.clipboard.writeText(outputElement.textContent);
            copyElement.textContent = "Copied";
        });
    }
}
window.onload = init;


/***/ }),

/***/ "./signals.ts":
/*!********************!*\
  !*** ./signals.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const signals = {
    'fluid': [
        'ammonia',
        'ammoniacal-solution',
        'crude-oil',
        'electrolyte',
        'fluorine',
        'fluoroketone-cold',
        'fluoroketone-hot',
        'fusion-plasma',
        'heavy-oil',
        'holmium-solution',
        'lava',
        'light-oil',
        'lithium-brine',
        'lubricant',
        'molten-copper',
        'molten-iron',
        'petroleum-gas',
        'steam',
        'sulfuric-acid',
        'thruster-fuel',
        'thruster-oxidizer',
        'water',
    ],
    'item': [
        'accumulator',
        'active-provider-chest',
        'advanced-circuit',
        'agricultural-tower',
        'arithmetic-combinator',
        'artificial-jellynut-soil',
        'artificial-yumako-soil',
        'artillery-turret',
        'assembling-machine-1',
        'assembling-machine-2',
        'assembling-machine-3',
        'asteroid-collector',
        'barrel',
        'battery',
        'battery-equipment',
        'battery-mk2-equipment',
        'battery-mk3-equipment',
        'beacon',
        'belt-immunity-equipment',
        'big-electric-pole',
        'big-mining-drill',
        'biochamber',
        'biolab',
        'biter-egg',
        'boiler',
        'buffer-chest',
        'bulk-inserter',
        'burner-generator',
        'burner-inserter',
        'burner-mining-drill',
        'calcite',
        'captive-biter-spawner',
        'carbon',
        'carbon-fiber',
        'carbonic-asteroid-chunk',
        'cargo-bay',
        'cargo-landing-pad',
        'centrifuge',
        'chemical-plant',
        'coal',
        'coin',
        'concrete',
        'constant-combinator',
        'construction-robot',
        'copper-bacteria',
        'copper-cable',
        'copper-ore',
        'copper-plate',
        'copper-wire',
        'crude-oil-barrel',
        'crusher',
        'cryogenic-plant',
        'decider-combinator',
        'depleted-uranium-fuel-cell',
        'discharge-defense-equipment',
        'display-panel',
        'electric-energy-interface',
        'electric-engine-unit',
        'electric-furnace',
        'electric-mining-drill',
        'electromagnetic-plant',
        'electronic-circuit',
        'empty-module-slot',
        'energy-shield-equipment',
        'energy-shield-mk2-equipment',
        'engine-unit',
        'exoskeleton-equipment',
        'explosives',
        'express-loader',
        'express-splitter',
        'express-transport-belt',
        'express-underground-belt',
        'fast-inserter',
        'fast-loader',
        'fast-splitter',
        'fast-transport-belt',
        'fast-underground-belt',
        'fission-reactor-equipment',
        'flamethrower-turret',
        'fluoroketone-cold-barrel',
        'fluoroketone-hot-barrel',
        'flying-robot-frame',
        'foundation',
        'foundry',
        'fusion-generator',
        'fusion-power-cell',
        'fusion-reactor',
        'fusion-reactor-equipment',
        'gate',
        'green-wire',
        'gun-turret',
        'hazard-concrete',
        'heat-exchanger',
        'heat-interface',
        'heat-pipe',
        'heating-tower',
        'heavy-oil-barrel',
        'holmium-ore',
        'holmium-plate',
        'ice',
        'ice-platform',
        'infinity-chest',
        'infinity-pipe',
        'inserter',
        'iron-bacteria',
        'iron-chest',
        'iron-gear-wheel',
        'iron-ore',
        'iron-plate',
        'iron-stick',
        'jellynut-seed',
        'lab',
        'land-mine',
        'landfill',
        'lane-splitter',
        'laser-turret',
        'light-oil-barrel',
        'lightning-collector',
        'lightning-rod',
        'linked-belt',
        'linked-chest',
        'lithium',
        'lithium-plate',
        'loader',
        'logistic-robot',
        'long-handed-inserter',
        'low-density-structure',
        'lubricant-barrel',
        'medium-electric-pole',
        'metallic-asteroid-chunk',
        'night-vision-equipment',
        'nuclear-fuel',
        'nuclear-reactor',
        'nutrients',
        'offshore-pump',
        'oil-refinery',
        'overgrowth-jellynut-soil',
        'overgrowth-yumako-soil',
        'oxide-asteroid-chunk',
        'passive-provider-chest',
        'pentapod-egg',
        'personal-laser-defense-equipment',
        'personal-roboport-equipment',
        'personal-roboport-mk2-equipment',
        'petroleum-gas-barrel',
        'pipe',
        'pipe-to-ground',
        'plastic-bar',
        'power-switch',
        'processing-unit',
        'programmable-speaker',
        'promethium-asteroid-chunk',
        'pump',
        'pumpjack',
        'quantum-processor',
        'radar',
        'rail-chain-signal',
        'rail-signal',
        'rail-support',
        'railgun-turret',
        'recycler',
        'red-wire',
        'refined-concrete',
        'refined-hazard-concrete',
        'requester-chest',
        'roboport',
        'rocket-fuel',
        'rocket-part',
        'rocket-silo',
        'rocket-turret',
        'science',
        'scrap',
        'selector-combinator',
        'simple-entity-with-force',
        'simple-entity-with-owner',
        'small-electric-pole',
        'small-lamp',
        'solar-panel',
        'solar-panel-equipment',
        'solid-fuel',
        'space-platform-foundation',
        'space-platform-hub',
        'splitter',
        'spoilage',
        'stack-inserter',
        'steam-engine',
        'steam-turbine',
        'steel-chest',
        'steel-furnace',
        'steel-plate',
        'stone',
        'stone-brick',
        'stone-furnace',
        'stone-wall',
        'storage-chest',
        'storage-tank',
        'substation',
        'sulfur',
        'sulfuric-acid-barrel',
        'supercapacitor',
        'superconductor',
        'tesla-turret',
        'thruster',
        'toolbelt-equipment',
        'train-stop',
        'transport-belt',
        'tree-seed',
        'tungsten-carbide',
        'tungsten-ore',
        'tungsten-plate',
        'turbo-loader',
        'turbo-splitter',
        'turbo-transport-belt',
        'turbo-underground-belt',
        'underground-belt',
        'uranium-235',
        'uranium-238',
        'uranium-fuel-cell',
        'uranium-ore',
        'water-barrel',
        'wood',
        'wooden-chest',
        'yumako-seed',
    ],
    'quality': [
        'epic',
        'legendary',
        'normal',
        'rare',
        'uncommon',
    ],
    'virtual': [
        'down-arrow',
        'down-left-arrow',
        'down-right-arrow',
        'left-arrow',
        'right-arrow',
        'shape-circle',
        'shape-corner',
        'shape-cross',
        'shape-curve',
        'shape-diagonal',
        'shape-diagonal-cross',
        'shape-horizontal',
        'shape-t',
        'shape-vertical',
        'signal-0',
        'signal-1',
        'signal-2',
        'signal-3',
        'signal-4',
        'signal-5',
        'signal-6',
        'signal-7',
        'signal-8',
        'signal-9',
        'signal-A',
        'signal-B',
        'signal-C',
        'signal-D',
        'signal-E',
        'signal-F',
        'signal-G',
        'signal-H',
        'signal-I',
        'signal-J',
        'signal-K',
        'signal-L',
        'signal-M',
        'signal-N',
        'signal-O',
        'signal-P',
        'signal-Q',
        'signal-R',
        'signal-S',
        'signal-T',
        'signal-U',
        'signal-V',
        'signal-W',
        'signal-X',
        'signal-Y',
        'signal-Z',
        'signal-any-quality',
        'signal-black',
        'signal-blue',
        'signal-check',
        'signal-cyan',
        'signal-deny',
        'signal-dot',
        'signal-ghost',
        'signal-green',
        'signal-grey',
        'signal-heart',
        'signal-info',
        'signal-pink',
        'signal-red',
        'signal-skull',
        'signal-stack-size',
        'signal-white',
        'signal-yellow',
        'up-arrow',
        'up-left-arrow',
        'up-right-arrow',
    ],
    'entity': [
        'behemoth-biter',
        'behemoth-spitter',
        'big-biter',
        'big-spitter',
        'big-wriggler-pentapod',
        'big-wriggler-pentapod-premature',
        'medium-biter',
        'medium-spitter',
        'medium-wriggler-pentapod',
        'medium-wriggler-pentapod-premature',
        'small-biter',
        'small-spitter',
        'small-wriggler-pentapod',
        'small-wriggler-pentapod-premature',
    ],
    'recipe': [
        'accumulator',
        'accumulator-recycling',
        'acid-neutralisation',
        'active-provider-chest',
        'active-provider-chest-recycling',
        'advanced-carbonic-asteroid-crushing',
        'advanced-circuit',
        'advanced-circuit-recycling',
        'advanced-metallic-asteroid-crushing',
        'advanced-oil-processing',
        'advanced-oxide-asteroid-crushing',
        'advanced-thruster-fuel',
        'advanced-thruster-oxidizer',
        'agricultural-science-pack',
        'agricultural-science-pack-recycling',
        'agricultural-tower',
        'agricultural-tower-recycling',
        'ammonia-rocket-fuel',
        'ammoniacal-solution-separation',
        'arithmetic-combinator',
        'arithmetic-combinator-recycling',
        'artificial-jellynut-soil',
        'artificial-jellynut-soil-recycling',
        'artificial-yumako-soil',
        'artificial-yumako-soil-recycling',
        'artillery-shell',
        'artillery-shell-recycling',
        'artillery-targeting-remote-recycling',
        'artillery-turret',
        'artillery-turret-recycling',
        'artillery-wagon',
        'artillery-wagon-cannon-recycling',
        'artillery-wagon-recycling',
        'assembling-machine-1',
        'assembling-machine-1-recycling',
        'assembling-machine-2',
        'assembling-machine-2-recycling',
        'assembling-machine-3',
        'assembling-machine-3-recycling',
        'asteroid-collector',
        'asteroid-collector-recycling',
        'atomic-bomb',
        'atomic-bomb-recycling',
        'automation-science-pack',
        'automation-science-pack-recycling',
        'barrel',
        'barrel-recycling',
        'basic-oil-processing',
        'battery',
        'battery-equipment',
        'battery-equipment-recycling',
        'battery-mk2-equipment',
        'battery-mk2-equipment-recycling',
        'battery-mk3-equipment',
        'battery-mk3-equipment-recycling',
        'battery-recycling',
        'beacon',
        'beacon-recycling',
        'belt-immunity-equipment',
        'belt-immunity-equipment-recycling',
        'big-electric-pole',
        'big-electric-pole-recycling',
        'big-mining-drill',
        'big-mining-drill-recycling',
        'biochamber',
        'biochamber-recycling',
        'bioflux',
        'bioflux-recycling',
        'biolab',
        'biolab-recycling',
        'biolubricant',
        'bioplastic',
        'biosulfur',
        'biter-egg',
        'biter-egg-recycling',
        'blueprint-book-recycling',
        'blueprint-recycling',
        'boiler',
        'boiler-recycling',
        'buffer-chest',
        'buffer-chest-recycling',
        'bulk-inserter',
        'bulk-inserter-recycling',
        'burner-generator-recycling',
        'burner-inserter',
        'burner-inserter-recycling',
        'burner-mining-drill',
        'burner-mining-drill-recycling',
        'burnt-spoilage',
        'calcite-recycling',
        'cannon-shell',
        'cannon-shell-recycling',
        'captive-biter-spawner',
        'captive-biter-spawner-recycling',
        'capture-robot-rocket',
        'capture-robot-rocket-recycling',
        'car',
        'car-recycling',
        'carbon',
        'carbon-fiber',
        'carbon-fiber-recycling',
        'carbon-recycling',
        'carbonic-asteroid-chunk-recycling',
        'carbonic-asteroid-crushing',
        'carbonic-asteroid-reprocessing',
        'cargo-bay',
        'cargo-bay-recycling',
        'cargo-landing-pad',
        'cargo-landing-pad-recycling',
        'cargo-wagon',
        'cargo-wagon-recycling',
        'casting-copper',
        'casting-copper-cable',
        'casting-iron',
        'casting-iron-gear-wheel',
        'casting-iron-stick',
        'casting-low-density-structure',
        'casting-pipe',
        'casting-pipe-to-ground',
        'casting-steel',
        'centrifuge',
        'centrifuge-recycling',
        'chemical-plant',
        'chemical-plant-recycling',
        'chemical-science-pack',
        'chemical-science-pack-recycling',
        'cliff-explosives',
        'cliff-explosives-recycling',
        'cluster-grenade',
        'cluster-grenade-recycling',
        'coal-liquefaction',
        'coal-recycling',
        'coal-synthesis',
        'coin-recycling',
        'combat-shotgun',
        'combat-shotgun-recycling',
        'concrete',
        'concrete-from-molten-iron',
        'concrete-recycling',
        'constant-combinator',
        'constant-combinator-recycling',
        'construction-robot',
        'construction-robot-recycling',
        'copper-bacteria',
        'copper-bacteria-cultivation',
        'copper-bacteria-recycling',
        'copper-cable',
        'copper-cable-recycling',
        'copper-ore-recycling',
        'copper-plate',
        'copper-plate-recycling',
        'copper-wire-recycling',
        'copy-paste-tool-recycling',
        'crude-oil-barrel',
        'crude-oil-barrel-recycling',
        'crusher',
        'crusher-recycling',
        'cryogenic-plant',
        'cryogenic-plant-recycling',
        'cryogenic-science-pack',
        'cryogenic-science-pack-recycling',
        'cut-paste-tool-recycling',
        'decider-combinator',
        'decider-combinator-recycling',
        'deconstruction-planner-recycling',
        'defender-capsule',
        'defender-capsule-recycling',
        'depleted-uranium-fuel-cell-recycling',
        'destroyer-capsule',
        'destroyer-capsule-recycling',
        'discharge-defense-equipment',
        'discharge-defense-equipment-recycling',
        'discharge-defense-remote-recycling',
        'display-panel',
        'display-panel-recycling',
        'distractor-capsule',
        'distractor-capsule-recycling',
        'efficiency-module',
        'efficiency-module-2',
        'efficiency-module-2-recycling',
        'efficiency-module-3',
        'efficiency-module-3-recycling',
        'efficiency-module-recycling',
        'electric-energy-interface-recycling',
        'electric-engine-unit',
        'electric-engine-unit-recycling',
        'electric-furnace',
        'electric-furnace-recycling',
        'electric-mining-drill',
        'electric-mining-drill-recycling',
        'electrolyte',
        'electromagnetic-plant',
        'electromagnetic-plant-recycling',
        'electromagnetic-science-pack',
        'electromagnetic-science-pack-recycling',
        'electronic-circuit',
        'electronic-circuit-recycling',
        'empty-crude-oil-barrel',
        'empty-fluoroketone-cold-barrel',
        'empty-fluoroketone-hot-barrel',
        'empty-heavy-oil-barrel',
        'empty-light-oil-barrel',
        'empty-lubricant-barrel',
        'empty-module-slot-recycling',
        'empty-petroleum-gas-barrel',
        'empty-sulfuric-acid-barrel',
        'empty-water-barrel',
        'energy-shield-equipment',
        'energy-shield-equipment-recycling',
        'energy-shield-mk2-equipment',
        'energy-shield-mk2-equipment-recycling',
        'engine-unit',
        'engine-unit-recycling',
        'exoskeleton-equipment',
        'exoskeleton-equipment-recycling',
        'explosive-cannon-shell',
        'explosive-cannon-shell-recycling',
        'explosive-rocket',
        'explosive-rocket-recycling',
        'explosive-uranium-cannon-shell',
        'explosive-uranium-cannon-shell-recycling',
        'explosives',
        'explosives-recycling',
        'express-loader',
        'express-loader-recycling',
        'express-splitter',
        'express-splitter-recycling',
        'express-transport-belt',
        'express-transport-belt-recycling',
        'express-underground-belt',
        'express-underground-belt-recycling',
        'fast-inserter',
        'fast-inserter-recycling',
        'fast-loader',
        'fast-loader-recycling',
        'fast-splitter',
        'fast-splitter-recycling',
        'fast-transport-belt',
        'fast-transport-belt-recycling',
        'fast-underground-belt',
        'fast-underground-belt-recycling',
        'firearm-magazine',
        'firearm-magazine-recycling',
        'fish-breeding',
        'fission-reactor-equipment',
        'fission-reactor-equipment-recycling',
        'flamethrower',
        'flamethrower-ammo',
        'flamethrower-ammo-recycling',
        'flamethrower-recycling',
        'flamethrower-turret',
        'flamethrower-turret-recycling',
        'fluid-wagon',
        'fluid-wagon-recycling',
        'fluoroketone',
        'fluoroketone-cold-barrel',
        'fluoroketone-cold-barrel-recycling',
        'fluoroketone-cooling',
        'fluoroketone-hot-barrel',
        'fluoroketone-hot-barrel-recycling',
        'flying-robot-frame',
        'flying-robot-frame-recycling',
        'foundation',
        'foundation-recycling',
        'foundry',
        'foundry-recycling',
        'fusion-generator',
        'fusion-generator-recycling',
        'fusion-power-cell',
        'fusion-power-cell-recycling',
        'fusion-reactor',
        'fusion-reactor-equipment',
        'fusion-reactor-equipment-recycling',
        'fusion-reactor-recycling',
        'gate',
        'gate-recycling',
        'green-wire-recycling',
        'grenade',
        'grenade-recycling',
        'gun-turret',
        'gun-turret-recycling',
        'hazard-concrete',
        'hazard-concrete-recycling',
        'heat-exchanger',
        'heat-exchanger-recycling',
        'heat-interface',
        'heat-interface-recycling',
        'heat-pipe',
        'heat-pipe-recycling',
        'heating-tower',
        'heating-tower-recycling',
        'heavy-armor',
        'heavy-armor-recycling',
        'heavy-oil-barrel',
        'heavy-oil-barrel-recycling',
        'heavy-oil-cracking',
        'holmium-ore-recycling',
        'holmium-plate',
        'holmium-plate-recycling',
        'holmium-solution',
        'ice-melting',
        'ice-platform',
        'ice-platform-recycling',
        'ice-recycling',
        'infinity-chest',
        'infinity-chest-recycling',
        'infinity-pipe',
        'infinity-pipe-recycling',
        'inserter',
        'inserter-recycling',
        'iron-bacteria',
        'iron-bacteria-cultivation',
        'iron-bacteria-recycling',
        'iron-chest',
        'iron-chest-recycling',
        'iron-gear-wheel',
        'iron-gear-wheel-recycling',
        'iron-ore-recycling',
        'iron-plate',
        'iron-plate-recycling',
        'iron-stick',
        'iron-stick-recycling',
        'jelly-recycling',
        'jellynut-processing',
        'jellynut-recycling',
        'jellynut-seed-recycling',
        'kovarex-enrichment-process',
        'lab',
        'lab-recycling',
        'land-mine',
        'land-mine-recycling',
        'landfill',
        'landfill-recycling',
        'lane-splitter-recycling',
        'laser-turret',
        'laser-turret-recycling',
        'light-armor',
        'light-armor-recycling',
        'light-oil-barrel',
        'light-oil-barrel-recycling',
        'light-oil-cracking',
        'lightning-collector',
        'lightning-collector-recycling',
        'lightning-rod',
        'lightning-rod-recycling',
        'linked-belt-recycling',
        'linked-chest-recycling',
        'lithium',
        'lithium-plate',
        'lithium-plate-recycling',
        'lithium-recycling',
        'loader',
        'loader-recycling',
        'locomotive',
        'locomotive-recycling',
        'logistic-robot',
        'logistic-robot-recycling',
        'logistic-science-pack',
        'logistic-science-pack-recycling',
        'long-handed-inserter',
        'long-handed-inserter-recycling',
        'low-density-structure',
        'low-density-structure-recycling',
        'lubricant',
        'lubricant-barrel',
        'lubricant-barrel-recycling',
        'mech-armor',
        'mech-armor-recycling',
        'medium-electric-pole',
        'medium-electric-pole-recycling',
        'metallic-asteroid-chunk-recycling',
        'metallic-asteroid-crushing',
        'metallic-asteroid-reprocessing',
        'metallurgic-science-pack',
        'metallurgic-science-pack-recycling',
        'military-science-pack',
        'military-science-pack-recycling',
        'modular-armor',
        'modular-armor-recycling',
        'molten-copper',
        'molten-copper-from-lava',
        'molten-iron',
        'molten-iron-from-lava',
        'night-vision-equipment',
        'night-vision-equipment-recycling',
        'nuclear-fuel',
        'nuclear-fuel-recycling',
        'nuclear-fuel-reprocessing',
        'nuclear-reactor',
        'nuclear-reactor-recycling',
        'nutrients-from-bioflux',
        'nutrients-from-biter-egg',
        'nutrients-from-fish',
        'nutrients-from-spoilage',
        'nutrients-from-yumako-mash',
        'nutrients-recycling',
        'offshore-pump',
        'offshore-pump-recycling',
        'oil-refinery',
        'oil-refinery-recycling',
        'overgrowth-jellynut-soil',
        'overgrowth-jellynut-soil-recycling',
        'overgrowth-yumako-soil',
        'overgrowth-yumako-soil-recycling',
        'oxide-asteroid-chunk-recycling',
        'oxide-asteroid-crushing',
        'oxide-asteroid-reprocessing',
        'passive-provider-chest',
        'passive-provider-chest-recycling',
        'pentapod-egg',
        'pentapod-egg-recycling',
        'personal-laser-defense-equipment',
        'personal-laser-defense-equipment-recycling',
        'personal-roboport-equipment',
        'personal-roboport-equipment-recycling',
        'personal-roboport-mk2-equipment',
        'personal-roboport-mk2-equipment-recycling',
        'petroleum-gas-barrel',
        'petroleum-gas-barrel-recycling',
        'piercing-rounds-magazine',
        'piercing-rounds-magazine-recycling',
        'piercing-shotgun-shell',
        'piercing-shotgun-shell-recycling',
        'pipe',
        'pipe-recycling',
        'pipe-to-ground',
        'pipe-to-ground-recycling',
        'pistol',
        'pistol-recycling',
        'plastic-bar',
        'plastic-bar-recycling',
        'poison-capsule',
        'poison-capsule-recycling',
        'power-armor',
        'power-armor-mk2',
        'power-armor-mk2-recycling',
        'power-armor-recycling',
        'power-switch',
        'power-switch-recycling',
        'processing-unit',
        'processing-unit-recycling',
        'production-science-pack',
        'production-science-pack-recycling',
        'productivity-module',
        'productivity-module-2',
        'productivity-module-2-recycling',
        'productivity-module-3',
        'productivity-module-3-recycling',
        'productivity-module-recycling',
        'programmable-speaker',
        'programmable-speaker-recycling',
        'promethium-asteroid-chunk-recycling',
        'promethium-science-pack',
        'promethium-science-pack-recycling',
        'pump',
        'pump-recycling',
        'pumpjack',
        'pumpjack-recycling',
        'quality-module',
        'quality-module-2',
        'quality-module-2-recycling',
        'quality-module-3',
        'quality-module-3-recycling',
        'quality-module-recycling',
        'quantum-processor',
        'quantum-processor-recycling',
        'radar',
        'radar-recycling',
        'rail',
        'rail-chain-signal',
        'rail-chain-signal-recycling',
        'rail-ramp',
        'rail-ramp-recycling',
        'rail-recycling',
        'rail-signal',
        'rail-signal-recycling',
        'rail-support',
        'rail-support-recycling',
        'railgun',
        'railgun-ammo',
        'railgun-ammo-recycling',
        'railgun-recycling',
        'railgun-turret',
        'railgun-turret-recycling',
        'raw-fish-recycling',
        'recycler',
        'recycler-recycling',
        'red-wire-recycling',
        'refined-concrete',
        'refined-concrete-recycling',
        'refined-hazard-concrete',
        'refined-hazard-concrete-recycling',
        'repair-pack',
        'repair-pack-recycling',
        'requester-chest',
        'requester-chest-recycling',
        'roboport',
        'roboport-recycling',
        'rocket',
        'rocket-fuel',
        'rocket-fuel-from-jelly',
        'rocket-fuel-recycling',
        'rocket-launcher',
        'rocket-launcher-recycling',
        'rocket-part',
        'rocket-part-recycling',
        'rocket-recycling',
        'rocket-silo',
        'rocket-silo-recycling',
        'rocket-turret',
        'rocket-turret-recycling',
        'science-recycling',
        'scrap-recycling',
        'selection-tool-recycling',
        'selector-combinator',
        'selector-combinator-recycling',
        'shotgun',
        'shotgun-recycling',
        'shotgun-shell',
        'shotgun-shell-recycling',
        'simple-coal-liquefaction',
        'simple-entity-with-force-recycling',
        'simple-entity-with-owner-recycling',
        'slowdown-capsule',
        'slowdown-capsule-recycling',
        'small-electric-pole',
        'small-electric-pole-recycling',
        'small-lamp',
        'small-lamp-recycling',
        'solar-panel',
        'solar-panel-equipment',
        'solar-panel-equipment-recycling',
        'solar-panel-recycling',
        'solid-fuel-from-ammonia',
        'solid-fuel-from-heavy-oil',
        'solid-fuel-from-light-oil',
        'solid-fuel-from-petroleum-gas',
        'solid-fuel-recycling',
        'space-platform-foundation',
        'space-platform-foundation-recycling',
        'space-platform-hub-recycling',
        'space-platform-starter-pack',
        'space-platform-starter-pack-recycling',
        'space-science-pack',
        'space-science-pack-recycling',
        'speed-module',
        'speed-module-2',
        'speed-module-2-recycling',
        'speed-module-3',
        'speed-module-3-recycling',
        'speed-module-recycling',
        'spidertron',
        'spidertron-recycling',
        'spidertron-remote-recycling',
        'spidertron-rocket-launcher-1-recycling',
        'spidertron-rocket-launcher-2-recycling',
        'spidertron-rocket-launcher-3-recycling',
        'spidertron-rocket-launcher-4-recycling',
        'splitter',
        'splitter-recycling',
        'spoilage-recycling',
        'stack-inserter',
        'stack-inserter-recycling',
        'steam-condensation',
        'steam-engine',
        'steam-engine-recycling',
        'steam-turbine',
        'steam-turbine-recycling',
        'steel-chest',
        'steel-chest-recycling',
        'steel-furnace',
        'steel-furnace-recycling',
        'steel-plate',
        'steel-plate-recycling',
        'stone-brick',
        'stone-brick-recycling',
        'stone-furnace',
        'stone-furnace-recycling',
        'stone-recycling',
        'stone-wall',
        'stone-wall-recycling',
        'storage-chest',
        'storage-chest-recycling',
        'storage-tank',
        'storage-tank-recycling',
        'submachine-gun',
        'submachine-gun-recycling',
        'substation',
        'substation-recycling',
        'sulfur',
        'sulfur-recycling',
        'sulfuric-acid',
        'sulfuric-acid-barrel',
        'sulfuric-acid-barrel-recycling',
        'supercapacitor',
        'supercapacitor-recycling',
        'superconductor',
        'superconductor-recycling',
        'tank',
        'tank-cannon-recycling',
        'tank-flamethrower-recycling',
        'tank-machine-gun-recycling',
        'tank-recycling',
        'tesla-ammo',
        'tesla-ammo-recycling',
        'tesla-turret',
        'tesla-turret-recycling',
        'teslagun',
        'teslagun-recycling',
        'thruster',
        'thruster-fuel',
        'thruster-oxidizer',
        'thruster-recycling',
        'toolbelt-equipment',
        'toolbelt-equipment-recycling',
        'train-stop',
        'train-stop-recycling',
        'transport-belt',
        'transport-belt-recycling',
        'tree-seed-recycling',
        'tungsten-carbide',
        'tungsten-carbide-recycling',
        'tungsten-ore-recycling',
        'tungsten-plate',
        'tungsten-plate-recycling',
        'turbo-loader',
        'turbo-loader-recycling',
        'turbo-splitter',
        'turbo-splitter-recycling',
        'turbo-transport-belt',
        'turbo-transport-belt-recycling',
        'turbo-underground-belt',
        'turbo-underground-belt-recycling',
        'underground-belt',
        'underground-belt-recycling',
        'upgrade-planner-recycling',
        'uranium-235-recycling',
        'uranium-238-recycling',
        'uranium-cannon-shell',
        'uranium-cannon-shell-recycling',
        'uranium-fuel-cell',
        'uranium-fuel-cell-recycling',
        'uranium-ore-recycling',
        'uranium-processing',
        'uranium-rounds-magazine',
        'uranium-rounds-magazine-recycling',
        'utility-science-pack',
        'utility-science-pack-recycling',
        'vehicle-machine-gun-recycling',
        'water-barrel',
        'water-barrel-recycling',
        'wood-processing',
        'wood-recycling',
        'wooden-chest',
        'wooden-chest-recycling',
        'yumako-mash-recycling',
        'yumako-processing',
        'yumako-recycling',
        'yumako-seed-recycling',
    ],
    'space-location': [
        'shattered-planet',
        'solar-system-edge',
    ],
    'asteroid-chunk': [
        'carbonic-asteroid-chunk',
        'metallic-asteroid-chunk',
        'oxide-asteroid-chunk',
        'promethium-asteroid-chunk',
    ]
};
exports["default"] = signals;


/***/ }),

/***/ "./track.ts":
/*!******************!*\
  !*** ./track.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Instrument = void 0;
const TICK_PER_US = 60 / 1000000;
const FACTORIO_PLAYER_DELAY = 3;
const FACTORIO_NOTE_OFFSET = -28;
var Instrument;
(function (Instrument) {
    Instrument[Instrument["Nothing"] = 0] = "Nothing";
    Instrument[Instrument["Piano"] = 1] = "Piano";
    Instrument[Instrument["DrumKit"] = 2] = "DrumKit";
    Instrument[Instrument["Bass"] = 3] = "Bass";
    Instrument[Instrument["Lead"] = 4] = "Lead";
    Instrument[Instrument["Sawtooth"] = 5] = "Sawtooth";
    Instrument[Instrument["Square"] = 6] = "Square";
    Instrument[Instrument["Celesta"] = 7] = "Celesta";
    Instrument[Instrument["Vibraphone"] = 8] = "Vibraphone";
    Instrument[Instrument["PluckedString"] = 9] = "PluckedString";
    Instrument[Instrument["SteelDrum"] = 10] = "SteelDrum";
    // Constant note drum kit
    Instrument[Instrument["WoodBlock"] = 11] = "WoodBlock";
    Instrument[Instrument["BassDrum"] = 12] = "BassDrum";
})(Instrument || (exports.Instrument = Instrument = {}));
const MAX_NOTE = {
    [Instrument.Nothing]: 12,
    [Instrument.Piano]: 48,
    [Instrument.DrumKit]: 17,
    [Instrument.Bass]: 36,
    [Instrument.Lead]: 36,
    [Instrument.Sawtooth]: 36,
    [Instrument.Square]: 36,
    [Instrument.Celesta]: 36,
    [Instrument.Vibraphone]: 36,
    [Instrument.PluckedString]: 36,
    [Instrument.SteelDrum]: 36,
    [Instrument.WoodBlock]: 17,
    [Instrument.BassDrum]: 17,
};
const FACTORIO_INSTRUMENT_ID = {
    [Instrument.Nothing]: 0,
    [Instrument.DrumKit]: 2,
    [Instrument.Piano]: 3,
    [Instrument.Bass]: 4,
    [Instrument.Lead]: 5,
    [Instrument.Sawtooth]: 6,
    [Instrument.Square]: 7,
    [Instrument.Celesta]: 8,
    [Instrument.Vibraphone]: 9,
    [Instrument.PluckedString]: 10,
    [Instrument.SteelDrum]: 11,
    [Instrument.WoodBlock]: 2,
    [Instrument.BassDrum]: 2,
};
class Track {
    constructor(tempo, division) {
        this.instrument = Instrument.Nothing;
        this.volume = 1;
        this.tempo = 500000;
        this.notes = [];
        this.totalTime = FACTORIO_NOTE_OFFSET + 1;
        this.tempo = tempo;
        this.division = division;
    }
    updateDelta(delta) {
        this.totalTime += delta;
    }
    pushNote(note) {
        this.notes.push([note, this.totalTime]);
    }
    data() {
        if (this.instrument == Instrument.Nothing)
            return [];
        const maxNote = MAX_NOTE[this.instrument];
        const deltaToTick = (delta) => {
            return Math.round(delta * this.tempo / this.division * TICK_PER_US) - FACTORIO_PLAYER_DELAY;
        };
        const trackData = [];
        const timeData = [];
        let noteShift = 0;
        for (let [note, time] of this.notes) {
            let trackIndex = 0;
            let delay;
            while (trackIndex < 100) {
                if (timeData[trackIndex] == null) {
                    trackData.push([]);
                    timeData.push(0);
                    delay = Math.max(deltaToTick(time), 1);
                }
                else {
                    delay = deltaToTick(time - timeData[trackIndex]);
                }
                if (delay > 0)
                    break;
                trackIndex++;
            }
            if (this.instrument == Instrument.WoodBlock) {
                note = 16;
            }
            else if (this.instrument == Instrument.BassDrum) {
                note = 2;
            }
            else if (this.instrument == Instrument.DrumKit) {
                note = midiToFactorioDrum(note);
            }
            else {
                note += FACTORIO_NOTE_OFFSET;
                while (note + noteShift > maxNote)
                    noteShift -= 12;
                while (note + noteShift < 1)
                    noteShift += 12;
            }
            trackData[trackIndex].push(delay << 8 | (note + noteShift));
            timeData[trackIndex] = time;
        }
        return trackData;
    }
    getInstrumentID() {
        return FACTORIO_INSTRUMENT_ID[this.instrument];
    }
    getVolume() {
        return this.volume;
    }
    setMidiInstrument(program, channel) {
        this.instrument = midiToFactorioInstrument(program, channel);
    }
    setMidiVolume(volume) {
        this.volume = volume / 127;
    }
}
exports["default"] = Track;
function midiToFactorioInstrument(program, channel) {
    if (channel == 9) {
        return Instrument.DrumKit;
    }
    switch (program) {
        case 0: // Acoustic Grand Piano
        case 1: // Bright Acoustic Piano
        case 2: // Electric Grand Piano
        case 3: // Honky-tonk Piano
            return Instrument.Piano;
        case 6: // Harpsichord
        case 7: // Clavinet
        case 15: // Dulcimer
        case 24: // Acoustic Guitar (nylon)
        case 25: // Acoustic Guitar (steel)
        case 26: // Electric Guitar (jazz)
        case 27: // Electric Guitar (clean)
        case 28: // Electric Guitar (muted)
        case 45: // Pizzicato Strings
        case 46: // Orchestral Harp
        case 104: // Sitar
        case 105: // Banjo
        case 106: // Shamisen
        case 107: // Koto
        case 108: // Kalimba
            return Instrument.PluckedString;
        case 8: // Celesta
        case 14: // Tubular Bells
            return Instrument.Celesta;
        case 9: // Glockenspiel
        case 10: // Music Box
        case 11: // Vibraphone
        case 12: // Marimba
        case 13: // Xylophone
        case 112: // Tinkle Bell
            return Instrument.Vibraphone;
        case 4: // Electric Piano case 0: //
        case 5: // Electric Piano case 1: //
        case 16: // Drawbar Organ
        case 17: // Percussive Organ
        case 18: // Rock Organ
        case 19: // Church Organ
        case 20: // Reed Organ
        case 32: // Acoustic Bass
        case 33: // Electric Bass (finger)
        case 34: // Electric Bass (pick)
        case 35: // Fretless Bass
        case 36: // Slap Bass case 0: //
        case 37: // Slap Bass case 1: //
        case 38: // Synth Bass case 0: //
        case 39: // Synth Bass case 1: //
        case 117: // Melodic Tom
        case 118: // Synth Drum
            return Instrument.Bass;
        case 40: // Violin
        case 41: // Viola
        case 42: // Cello
        case 43: // Contrabass
        case 44: // Tremolo Strings
        case 56: // Trumpet
        case 57: // Trombone
        case 58: // Tuba
        case 59: // Muted Trumpet
        case 60: // French Horn
        case 61: // Brass Section
        case 62: // Synth Brass case 0: //
        case 63: // Synth Brass case 1: //
        case 64: // Soprano Sax
        case 65: // Alto Sax
        case 66: // Tenor Sax
        case 67: // Baritone Sax
        case 68: // Oboe
        case 69: // English Horn
        case 70: // Bassoon
        case 71: // Clarinet
        case 80: // Lead case 0: // (square)
        case 109: // Bag pipe
        case 110: // Fiddle
            return Instrument.Square;
        case 29: // Overdriven Guitar
        case 30: // Distortion Guitar
        case 31: // Guitar harmonics
        case 82: // Lead case 2: // (calliope)
        case 83: // Lead case 3: // (chiff)
        case 84: // Lead case 4: // (charang)
        case 85: // Lead case 5: // (voice)
        case 86: // Lead case 6: // (fifths)
        case 87: // Lead case 7: // (bass + lead)
            return Instrument.Lead;
        case 47: // Timpani
        case 88: // Pad case 0: // (new age)
        case 89: // Pad case 1: // (warm)
        case 90: // Pad case 2: // (polysynth)
        case 91: // Pad case 3: // (choir)
        case 92: // Pad case 4: // (bowed)
        case 93: // Pad case 5: // (metallic)
        case 94: // Pad case 6: // (halo)
        case 95: // Pad case 7: // (sweep)
        case 98: // FX case 2: // (crystal)
        case 113: // Agogo
        case 114: // Steel Drums
            return Instrument.SteelDrum;
        case 21: // Accordion
        case 22: // Harmonica
        case 23: // Tango Accordion
        case 48: // String Ensemble case 0: //
        case 49: // String Ensemble case 1: //
        case 50: // Synth Strings case 0: //
        case 51: // Synth Strings case 1: //
        case 52: // Choir Aahs
        case 53: // Voice Oohs
        case 54: // Synth Voice
        case 55: // Orchestra Hit
        case 72: // Piccolo
        case 73: // Flute
        case 74: // Recorder
        case 75: // Pan Flute
        case 76: // Blown Bottle
        case 77: // Shakuhachi
        case 78: // Whistle
        case 79: // Ocarina
        case 81: // Lead case 1: // (sawtooth)
        case 111: // Shanai
            //return Instrument.Sawtooth;
            return Instrument.Square;
        case 115: // Woodblock
            return Instrument.WoodBlock;
        case 116: // Taiko Drum
            return Instrument.BassDrum;
        case 96: // FX case 0: // (rain)
        case 97: // FX case 1: // (soundtrack)
        case 99: // FX case 3: // (atmosphere)
        case 100: // FX case 4: // (brightness)
        case 101: // FX case 5: // (goblins)
        case 102: // FX case 6: // (echoes)
        case 103: // FX case 7: // (sci-fi)
        case 119: // Reverse Cymbal
        case 120: // Guitar Fret Noise
        case 121: // Breath Noise
        case 122: // Seashore
        case 123: // Bird Tweet
        case 124: // Telephone Ring
        case 125: // Helicopter
        case 126: // Applause
        case 127: // Gunshot
        default:
            return Instrument.Nothing;
    }
}
function midiToFactorioDrum(note) {
    switch (note) {
        case 36: // Bass Drum 1
            return 1;
        case 35: // Bass Drum 2
        case 41: // Low Tom 2
        case 43: // Low Tom 1
        case 45: // Mid Tom 2
        case 47: // Mid Tom 1
        case 48: // High Tom 2
        case 50: // High Tom 1
        case 60: // High Bongo
        case 61: // Low Bongo
        case 62: // Mute High Conga
        case 63: // Open High Conga
        case 64: // Low Conga
            return 2;
        case 38: // Snare Drum 1
            return 4;
        case 40: // Snare Drum 2
            return 5;
        case 44: // Pedal Hi-hat
            return 6;
        case 42: // Closed Hi-hat
            return 7;
        case 73: // Short Guiro
        case 74: // Long Guiro
            return 8;
        case 78: // Mute Cuica
        case 79: // Open Cuica
        case 71: // Short Whistle
        case 72: // Long Whistle
            return 9;
        case 56: // Cowbell
        case 53: // Ride Bell
            return 10;
        case 37: // Side Stick
            return 11;
        case 46: // Open Hi-hat
        case 49: // Crash Cymbal 1
        case 52: // Chinese Cymbal
        case 51: // Ride Cymbal 1
        case 55: // Splash Cymbal
        case 57: // Crash Cymbal 2
        case 59: // Ride Cymbal 2
            return 12;
        case 39: // Hand Clap
        case 75: // Claves
        case 58: // Vibra Slap
            return 14;
        case 70: // Maracas
        case 69: // Cabasa
            return 15;
        case 76: // High Wood Block
        case 77: // Low Wood Block
        case 65: // High Timbale
        case 66: // Low Timbale
        case 67: // High Agogo
        case 68: // Low Agogo
            return 16;
        case 54: // Tambourine
        case 80: // Mute Triangle
        case 81: // Open Triangle
            return 17;
        default:
            return 0;
    }
}


/***/ }),

/***/ "./music-box.bp":
/*!**********************!*\
  !*** ./music-box.bp ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = "0eNrlWt1uozgUfhdfrpxRDCF/mq2Udm+nV3tXVcgBt7FqMGtMOlGVB9i32GfbJ9ljQxpCIAkkaWdn1JuDsb9jfz7n8zHpG5qLjCWKxxpN3xAPZJyi6cMbSvlzTIVpi2nE0BSFLOAhU71ARnMeUy0VWmPE45B9R1OyxjVDqOJ6ETHNg/pRzvoRIxZrrjnLvdqHlR9n0ZwpgMUbKDMvTWNdBsIokSmMlbHxafDIFw+jFZr2JuMvHviBUVpJ4c/Zgi45DIF+KQvMkHTXBt+bpWD0xIVmqtqqV4mZyZPIeIjeJ0ajSMacQsNfGRUweWiLpYqACOM/Sqiyk52i321DZoi2dG1IOIIcUNFLpcjsOlt5cUpe3CYvgcpC1pNctMN2S9iDJmwmgF/gf6VZO/RBCd1rQodHCXHbEtorQQ8PQssXpmXMIOJE2M7HsORjdJKPhdTtXIxKLsaNLrIUgqaXCJpGLSN0XMKfNOEvGF2u2sfOpIRN+o3gUkQ8izrGPumXnTRmr6DLtqlL1o/wB+ICtK6Y8kOWBoonuQyhF7ZCxnNFyJx2QkYm70I2+rGFbDB0P0bMXLKzpRfXM9IfX1XSKg4urGoVdq4lbAPi9cn1xQ1WQ66sbxXCLi1xld2+lspZN4fkSMmoTo7cznVVLkchV7ng2M25hjgtudKZXXsx0by47N22LbQMO1Bwpr6Z7BMVKWviqliGgBqXx0mm64gb4APl8D5v/W09ehJrBagP70L+zl/5Cbh64irV/rbYPsIYo8HC1NywC4Bz+rgZWtfwWnbux0y/SvViJ6lYiKZaZQyjZ8VYiewdx/tjbLf3QQZhba4FMtOwB9W7yJE5fzNzPskDboE6q0WtWevhuqCXSFUbVB4+fGE6VB4MT4qrLW4ltFrG0qwUSBvlgFlA2sqEQZjka/0NbbavFXIjd3ljHXPDdulIWtJ2jXS83UurG9Q53oscTVa+1Tv/CfTez8WrCMnmiNzKXR2zo65C9/Mwe5y7xowen5HRgw/N6G+1Ge143m5Kz+7/6JDU952SetKWvFJefyx5t1eTw9sDzJXqlIinQR2Fpt7slr6DT0vfWU36Hi0eag/hjil/d0xMTywtHjvEPCFnKIbzAyjGeDfmb246BP2fneSCOGfohfNr6YWQMqnl0O2qF86n6cVdl0uNCTHczdWeNOUNzC8G0zhE52hPqyvJ3RmF34FU2l5vEyWfFY0iOheslyaMvrCDIjRu/sEl4CrIuN5ufofMuc/Xu0mZfmU7vtrXhR/TDMlqPy1sKPWXVGTM56mfcA334eLg4ACosgho8HmYfxaRmlm7b/nbgTLEzWnw4i+lyMzsCN62RTK0H5RlYKdPhZCvfiLFKlnIeFWcDaadqb0pLqCrffF+oNgmGfsRTTZzzUdGLE3ps/GUR0x1B8+5S/Y/VAzvO3+UOFcsu5WlpPNls//ZNdUmbUyVUfmi01mxbi9y9bQnUuM1inS+hfb/d8fSh3xrqx1Td461PyP3l/Dv3/9c+JScXeDUA9+vEBjG8wPBBA8wecQPDnbAcsBywRpaC57xCA+s5WJIf2JNGNC37z14Py4s1zSa99ALT7BrLQM0KKyR7QjP8NZYI+g3sv2MRXIT0Dbg1iSFCeieRZ+YVseCQj9odm0zdHQNhrXNUkju2Lw2fdzc3vYxSwNI28csg5h1AjNcswi42v5LCEaCzhnsDYqyFE6SufwObUs4uCyr3tCZDCYTz3O8oeuQ9fo/o1OknQ==\n";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGVBQWU7O0FBRWxCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLG1IQUFzRDs7Ozs7Ozs7Ozs7O0FDM1h6Qzs7O0FBR2IscUJBQXFCLG1CQUFPLENBQUMsK0RBQWdCO0FBQzdDLHFCQUFxQixtQkFBTyxDQUFDLCtEQUFnQjtBQUM3QyxxQkFBcUIsbUJBQU8sQ0FBQyxpRUFBaUI7QUFDOUMscUJBQXFCLG1CQUFPLENBQUMsaUVBQWlCO0FBQzlDLHFCQUFxQixtQkFBTyxDQUFDLCtEQUFnQjtBQUM3QyxxQkFBcUIsbUJBQU8sQ0FBQyxpRUFBaUI7O0FBRTlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxFQUFFLG1CQUFPLENBQUMsbUVBQWtCOztBQUU5Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZUFBZTs7QUFFbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsbUhBQXNEOzs7Ozs7Ozs7Ozs7QUNsYXpDOzs7QUFHYjtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sc0RBQXNELGFBQWE7OztBQUd6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQSxtQ0FBbUM7OztBQUduQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjs7QUFFekM7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEIsZ0JBQWdCOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwwQkFBMEI7O0FBRS9DO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBOzs7Ozs7Ozs7Ozs7QUM3S2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7O0FDbERhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCOzs7QUFHQTs7Ozs7Ozs7Ozs7O0FDMURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsb0VBQW9FLEVBQUUsbUJBQU8sQ0FBQyxzREFBUztBQUMvRixnQkFBZ0IsbUJBQU8sQ0FBQywwREFBVztBQUNuQyxnQkFBZ0IsbUJBQU8sQ0FBQyxzREFBUztBQUNqQyxnQkFBZ0IsbUJBQU8sQ0FBQyw0REFBWTs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsRUFBRSxtQkFBTyxDQUFDLDhEQUFhOztBQUV6Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7O0FBRTlCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDZCQUE2Qjs7QUFFN0Isc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0I7QUFDcEIsbUJBQW1COztBQUVuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5Qyx5QkFBeUI7QUFDekIsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDO0FBQ0E7O0FBRUEseUJBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHVDQUF1QztBQUN2QywyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4Qix3QkFBd0I7O0FBRXhCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTs7QUFFcEU7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQiwyQkFBMkI7O0FBRTNCOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVM7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix5QkFBeUI7O0FBRXpCOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7O0FBRTFCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0I7QUFDdEIsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwrQkFBK0I7QUFDL0IsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw0QkFBNEI7QUFDNUIsMEJBQTBCOztBQUUxQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCLHNCQUFzQjs7QUFFdEI7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCOztBQUVBOztBQUVBLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFDaEMsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDLGlEQUFpRDtBQUNqRDs7QUFFQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCLDBCQUEwQjs7QUFFMUIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsMEJBQTBCOzs7QUFHMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qjs7QUFFdkIsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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cUM7QUFDckM7O0FBRUEsU0FBUzs7QUFFVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QiwwQkFBMEI7OztBQUd2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7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QUUsQ0FBQyxDQUFDLGtCQUFrQjtRQUMzQixLQUFLLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQjtRQUMxQixLQUFLLEVBQUUsQ0FBQyxDQUFDLGVBQWU7UUFDeEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxjQUFjO1FBQ3ZCLEtBQUssRUFBRSxDQUFDLENBQUMsYUFBYTtRQUN0QixLQUFLLEVBQUUsRUFBRSxZQUFZO1lBQ2xCLE9BQU8sRUFBRSxDQUFDO1FBRWIsS0FBSyxFQUFFLENBQUMsQ0FBQyxhQUFhO1FBQ3RCLEtBQUssRUFBRSxDQUFDLENBQUMsZ0JBQWdCO1FBQ3pCLEtBQUssRUFBRSxFQUFFLGdCQUFnQjtZQUN0QixPQUFPLEVBQUUsQ0FBQztRQUViO1lBQ0csT0FBTyxDQUFDLENBQUM7SUFDZixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaFlEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvYnJva2VyLWZhY3RvcnkvYnVpbGQvZXMyMDE5L2d1YXJkcy9tZXNzYWdlLXBvcnQuanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvYnJva2VyLWZhY3RvcnkvYnVpbGQvZXMyMDE5L2hlbHBlcnMvZXh0ZW5kLWJyb2tlci1pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL25vZGVfbW9kdWxlcy9icm9rZXItZmFjdG9yeS9idWlsZC9lczIwMTkvaGVscGVycy9wb3J0LW1hcC5qcyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL25vZGVfbW9kdWxlcy9icm9rZXItZmFjdG9yeS9idWlsZC9lczIwMTkvaW50ZXJmYWNlcy9icm9rZXItYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL25vZGVfbW9kdWxlcy9icm9rZXItZmFjdG9yeS9idWlsZC9lczIwMTkvaW50ZXJmYWNlcy9icm9rZXItZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL25vZGVfbW9kdWxlcy9icm9rZXItZmFjdG9yeS9idWlsZC9lczIwMTkvaW50ZXJmYWNlcy9kZWZhdWx0LWJyb2tlci1kZWZpbml0aW9uLmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL2Jyb2tlci1mYWN0b3J5L2J1aWxkL2VzMjAxOS9pbnRlcmZhY2VzL2luZGV4LmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL2Jyb2tlci1mYWN0b3J5L2J1aWxkL2VzMjAxOS9pbnRlcmZhY2VzL3dvcmtlci1ldmVudC5qcyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL25vZGVfbW9kdWxlcy9icm9rZXItZmFjdG9yeS9idWlsZC9lczIwMTkvbW9kdWxlLmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL2Jyb2tlci1mYWN0b3J5L2J1aWxkL2VzMjAxOS90eXBlcy9icm9rZXItaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvYnJva2VyLWZhY3RvcnkvYnVpbGQvZXMyMDE5L3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL2Zhc3QtdW5pcXVlLW51bWJlcnMvYnVpbGQvZXM1L2J1bmRsZS5qcyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL25vZGVfbW9kdWxlcy9taWRpLWpzb24tcGFyc2VyLWJyb2tlci9idWlsZC9lczIwMTkvaW50ZXJmYWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL25vZGVfbW9kdWxlcy9taWRpLWpzb24tcGFyc2VyLWJyb2tlci9idWlsZC9lczIwMTkvaW50ZXJmYWNlcy9taWRpLWpzb24tcGFyc2VyLWJyb2tlci1kZWZpbml0aW9uLmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL21pZGktanNvbi1wYXJzZXItYnJva2VyL2J1aWxkL2VzMjAxOS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvbWlkaS1qc29uLXBhcnNlci1icm9rZXIvYnVpbGQvZXMyMDE5L3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL21pZGktanNvbi1wYXJzZXItYnJva2VyL2J1aWxkL2VzMjAxOS90eXBlcy9taWRpLWpzb24tcGFyc2VyLWJyb2tlci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvbWlkaS1qc29uLXBhcnNlci1icm9rZXIvYnVpbGQvZXMyMDE5L3R5cGVzL21pZGktanNvbi1wYXJzZXItYnJva2VyLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvbWlkaS1qc29uLXBhcnNlci9idWlsZC9lczIwMTkvbW9kdWxlLmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL21pZGktanNvbi1wYXJzZXIvYnVpbGQvZXMyMDE5L3dvcmtlci93b3JrZXIuanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvcGFrby9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi9kZWZsYXRlLmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL2luZmxhdGUuanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3V0aWxzL3N0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9hZGxlcjMyLmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvY3JjMzIuanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9kZWZsYXRlLmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvZ3poZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9pbmZmYXN0LmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvaW5mbGF0ZS5qcyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL2luZnRyZWVzLmpzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi90cmVlcy5qcyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL3pzdHJlYW0uanMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9jb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9lcXVhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvLi9mYWN0b3Jpby50cyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL2luZGV4LnRzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyLy4vc2lnbmFscy50cyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci8uL3RyYWNrLnRzIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZhY3RvcmlvLW1pZGktcGxheWVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9mYWN0b3Jpby1taWRpLXBsYXllci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmFjdG9yaW8tbWlkaS1wbGF5ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpc01lc3NhZ2VQb3J0ID0gKHNlbmRlcikgPT4ge1xuICAgIHJldHVybiB0eXBlb2Ygc2VuZGVyLnN0YXJ0ID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lc3NhZ2UtcG9ydC5qcy5tYXAiLCJpbXBvcnQgeyBQT1JUX01BUCB9IGZyb20gJy4vcG9ydC1tYXAnO1xuZXhwb3J0IGNvbnN0IGV4dGVuZEJyb2tlckltcGxlbWVudGF0aW9uID0gKHBhcnRpYWxCcm9rZXJJbXBsZW1lbnRhdGlvbikgPT4gKHtcbiAgICAuLi5wYXJ0aWFsQnJva2VySW1wbGVtZW50YXRpb24sXG4gICAgY29ubmVjdDogKHsgY2FsbCB9KSA9PiB7XG4gICAgICAgIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBvcnQxLCBwb3J0MiB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgICAgICBjb25zdCBwb3J0SWQgPSBhd2FpdCBjYWxsKCdjb25uZWN0JywgeyBwb3J0OiBwb3J0MSB9LCBbcG9ydDFdKTtcbiAgICAgICAgICAgIFBPUlRfTUFQLnNldChwb3J0MiwgcG9ydElkKTtcbiAgICAgICAgICAgIHJldHVybiBwb3J0MjtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGRpc2Nvbm5lY3Q6ICh7IGNhbGwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYXN5bmMgKHBvcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvcnRJZCA9IFBPUlRfTUFQLmdldChwb3J0KTtcbiAgICAgICAgICAgIGlmIChwb3J0SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGdpdmVuIHBvcnQgaXMgbm90IGNvbm5lY3RlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGNhbGwoJ2Rpc2Nvbm5lY3QnLCB7IHBvcnRJZCB9KTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGlzU3VwcG9ydGVkOiAoeyBjYWxsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbGwoJ2lzU3VwcG9ydGVkJyk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leHRlbmQtYnJva2VyLWltcGxlbWVudGF0aW9uLmpzLm1hcCIsImV4cG9ydCBjb25zdCBQT1JUX01BUCA9IG5ldyBXZWFrTWFwKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3J0LW1hcC5qcy5tYXAiLCJleHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm9rZXItYWN0aW9ucy5qcy5tYXAiLCJleHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm9rZXItZGVmaW5pdGlvbi5qcy5tYXAiLCJleHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0LWJyb2tlci1kZWZpbml0aW9uLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vYnJva2VyLWFjdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9icm9rZXItZGVmaW5pdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2RlZmF1bHQtYnJva2VyLWRlZmluaXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi93b3JrZXItZXZlbnQnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d29ya2VyLWV2ZW50LmpzLm1hcCIsImltcG9ydCB7IGdlbmVyYXRlVW5pcXVlTnVtYmVyIH0gZnJvbSAnZmFzdC11bmlxdWUtbnVtYmVycyc7XG5pbXBvcnQgeyBpc01lc3NhZ2VQb3J0IH0gZnJvbSAnLi9ndWFyZHMvbWVzc2FnZS1wb3J0JztcbmltcG9ydCB7IGV4dGVuZEJyb2tlckltcGxlbWVudGF0aW9uIH0gZnJvbSAnLi9oZWxwZXJzL2V4dGVuZC1icm9rZXItaW1wbGVtZW50YXRpb24nO1xuLypcbiAqIEB0b2RvIEV4cGxpY2l0bHkgcmVmZXJlbmNpbmcgdGhlIGJhcnJlbCBmaWxlIHNlZW1zIHRvIGJlIG5lY2Vzc2FyeSB3aGVuIGVuYWJsaW5nIHRoZVxuICogaXNvbGF0ZWRNb2R1bGVzIGNvbXBpbGVyIG9wdGlvbi5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMvaW5kZXgnO1xuY29uc3QgT05HT0lOR19SRVFVRVNUUyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBjcmVhdGVPckdldE9uZ29pbmdSZXF1ZXN0cyA9IChzZW5kZXIpID0+IHtcbiAgICBpZiAoT05HT0lOR19SRVFVRVNUUy5oYXMoc2VuZGVyKSkge1xuICAgICAgICAvLyBAdG9kbyBUeXBlU2NyaXB0IG5lZWRzIHRvIGJlIGNvbnZpbmNlZCB0aGF0IGhhcygpIHdvcmtzIGFzIGV4cGVjdGVkLlxuICAgICAgICByZXR1cm4gT05HT0lOR19SRVFVRVNUUy5nZXQoc2VuZGVyKTtcbiAgICB9XG4gICAgY29uc3Qgb25nb2luZ1JlcXVlc3RzID0gbmV3IE1hcCgpO1xuICAgIE9OR09JTkdfUkVRVUVTVFMuc2V0KHNlbmRlciwgb25nb2luZ1JlcXVlc3RzKTtcbiAgICByZXR1cm4gb25nb2luZ1JlcXVlc3RzO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVCcm9rZXIgPSAoYnJva2VySW1wbGVtZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBmdWxsQnJva2VySW1wbGVtZW50YXRpb24gPSBleHRlbmRCcm9rZXJJbXBsZW1lbnRhdGlvbihicm9rZXJJbXBsZW1lbnRhdGlvbik7XG4gICAgcmV0dXJuIChzZW5kZXIpID0+IHtcbiAgICAgICAgY29uc3Qgb25nb2luZ1JlcXVlc3RzID0gY3JlYXRlT3JHZXRPbmdvaW5nUmVxdWVzdHMoc2VuZGVyKTtcbiAgICAgICAgc2VuZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoKHsgZGF0YTogbWVzc2FnZSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBtZXNzYWdlO1xuICAgICAgICAgICAgaWYgKGlkICE9PSBudWxsICYmIG9uZ29pbmdSZXF1ZXN0cy5oYXMoaWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZWplY3QsIHJlc29sdmUgfSA9IG9uZ29pbmdSZXF1ZXN0cy5nZXQoaWQpO1xuICAgICAgICAgICAgICAgIG9uZ29pbmdSZXF1ZXN0cy5kZWxldGUoaWQpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVycm9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShtZXNzYWdlLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKG1lc3NhZ2UuZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAoaXNNZXNzYWdlUG9ydChzZW5kZXIpKSB7XG4gICAgICAgICAgICBzZW5kZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWxsID0gKG1ldGhvZCwgcGFyYW1zID0gbnVsbCwgdHJhbnNmZXJhYmxlcyA9IFtdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ2VuZXJhdGVVbmlxdWVOdW1iZXIob25nb2luZ1JlcXVlc3RzKTtcbiAgICAgICAgICAgICAgICBvbmdvaW5nUmVxdWVzdHMuc2V0KGlkLCB7IHJlamVjdCwgcmVzb2x2ZSB9KTtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRlci5wb3N0TWVzc2FnZSh7IGlkLCBtZXRob2QgfSwgdHJhbnNmZXJhYmxlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZW5kZXIucG9zdE1lc3NhZ2UoeyBpZCwgbWV0aG9kLCBwYXJhbXMgfSwgdHJhbnNmZXJhYmxlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5vdGlmeSA9IChtZXRob2QsIHBhcmFtcywgdHJhbnNmZXJhYmxlcyA9IFtdKSA9PiB7XG4gICAgICAgICAgICBzZW5kZXIucG9zdE1lc3NhZ2UoeyBpZDogbnVsbCwgbWV0aG9kLCBwYXJhbXMgfSwgdHJhbnNmZXJhYmxlcyk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBmdW5jdGlvbnMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBoYW5kbGVyXSBvZiBPYmplY3QuZW50cmllcyhmdWxsQnJva2VySW1wbGVtZW50YXRpb24pKSB7XG4gICAgICAgICAgICBmdW5jdGlvbnMgPSB7IC4uLmZ1bmN0aW9ucywgW2tleV06IGhhbmRsZXIoeyBjYWxsLCBub3RpZnkgfSkgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5mdW5jdGlvbnMgfTtcbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCJleHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm9rZXItaW1wbGVtZW50YXRpb24uanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9icm9rZXItaW1wbGVtZW50YXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5mYXN0VW5pcXVlTnVtYmVycyA9IHt9KSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGNyZWF0ZUFkZFVuaXF1ZU51bWJlciA9IGZ1bmN0aW9uIGNyZWF0ZUFkZFVuaXF1ZU51bWJlcihnZW5lcmF0ZVVuaXF1ZU51bWJlcikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZXQpIHtcbiAgICAgICAgdmFyIG51bWJlciA9IGdlbmVyYXRlVW5pcXVlTnVtYmVyKHNldCk7XG4gICAgICAgIHNldC5hZGQobnVtYmVyKTtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBjcmVhdGVDYWNoZSA9IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKGxhc3ROdW1iZXJXZWFrTWFwKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIG5leHROdW1iZXIpIHtcbiAgICAgICAgbGFzdE51bWJlcldlYWtNYXAuc2V0KGNvbGxlY3Rpb24sIG5leHROdW1iZXIpO1xuICAgICAgICByZXR1cm4gbmV4dE51bWJlcjtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBjb25zdGFudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiBlcXVhbHMgKDIgKiogNTMgLSAxKSBidXQgaXRcbiAgICAgKiBpcyBmYWlybHkgbmV3LlxuICAgICAqL1xuICAgIHZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgPT09IHVuZGVmaW5lZCA/IDkwMDcxOTkyNTQ3NDA5OTEgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICB2YXIgVFdPX1RPX1RIRV9QT1dFUl9PRl9UV0VOVFlfTklORSA9IDUzNjg3MDkxMjtcbiAgICB2YXIgVFdPX1RPX1RIRV9QT1dFUl9PRl9USElSVFkgPSBUV09fVE9fVEhFX1BPV0VSX09GX1RXRU5UWV9OSU5FICogMjtcbiAgICB2YXIgY3JlYXRlR2VuZXJhdGVVbmlxdWVOdW1iZXIgPSBmdW5jdGlvbiBjcmVhdGVHZW5lcmF0ZVVuaXF1ZU51bWJlcihjYWNoZSwgbGFzdE51bWJlcldlYWtNYXApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoY29sbGVjdGlvbikge1xuICAgICAgICB2YXIgbGFzdE51bWJlciA9IGxhc3ROdW1iZXJXZWFrTWFwLmdldChjb2xsZWN0aW9uKTtcbiAgICAgICAgLypcbiAgICAgICAgICogTGV0J3MgdHJ5IHRoZSBjaGVhcGVzdCBhbGdvcml0aG0gZmlyc3QuIEl0IG1pZ2h0IGZhaWwgdG8gcHJvZHVjZSBhIG5ld1xuICAgICAgICAgKiBudW1iZXIsIGJ1dCBpdCBpcyBzbyBjaGVhcCB0aGF0IGl0IGlzIG9rYXkgdG8gdGFrZSB0aGUgcmlzay4gSnVzdFxuICAgICAgICAgKiBpbmNyZWFzZSB0aGUgbGFzdCBudW1iZXIgYnkgb25lIG9yIHJlc2V0IGl0IHRvIDAgaWYgd2UgcmVhY2hlZCB0aGUgdXBwZXJcbiAgICAgICAgICogYm91bmQgb2YgU01JcyAod2hpY2ggc3RhbmRzIGZvciBzbWFsbCBpbnRlZ2VycykuIFdoZW4gdGhlIGxhc3QgbnVtYmVyIGlzXG4gICAgICAgICAqIHVua25vd24gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSBjb2xsZWN0aW9uIGNvbnRhaW5zIHplcm8gYmFzZWQgY29uc2VjdXRpdmVcbiAgICAgICAgICogbnVtYmVycy5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBuZXh0TnVtYmVyID0gbGFzdE51bWJlciA9PT0gdW5kZWZpbmVkID8gY29sbGVjdGlvbi5zaXplIDogbGFzdE51bWJlciA8IFRXT19UT19USEVfUE9XRVJfT0ZfVEhJUlRZID8gbGFzdE51bWJlciArIDEgOiAwO1xuICAgICAgICBpZiAoIWNvbGxlY3Rpb24uaGFzKG5leHROdW1iZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIGNhY2hlKGNvbGxlY3Rpb24sIG5leHROdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAqIElmIHRoZXJlIGFyZSBsZXNzIHRoYW4gaGFsZiBvZiAyICoqIDMwIG51bWJlcnMgc3RvcmVkIGluIHRoZSBjb2xsZWN0aW9uLFxuICAgICAgICAgKiB0aGUgY2hhbmNlIHRvIGdlbmVyYXRlIGEgbmV3IHJhbmRvbSBudW1iZXIgaW4gdGhlIHJhbmdlIGZyb20gMCB0byAyICoqIDMwXG4gICAgICAgICAqIGlzIGF0IGxlYXN0IDUwJS4gSXQncyBiZW5pZml0aWFsIHRvIHVzZSBvbmx5IFNNSXMgYmVjYXVzZSB0aGV5IHBlcmZvcm1cbiAgICAgICAgICogbXVjaCBiZXR0ZXIgaW4gYW55IGVudmlyb25tZW50IGJhc2VkIG9uIFY4LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGNvbGxlY3Rpb24uc2l6ZSA8IFRXT19UT19USEVfUE9XRVJfT0ZfVFdFTlRZX05JTkUpIHtcbiAgICAgICAgICB3aGlsZSAoY29sbGVjdGlvbi5oYXMobmV4dE51bWJlcikpIHtcbiAgICAgICAgICAgIG5leHROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBUV09fVE9fVEhFX1BPV0VSX09GX1RISVJUWSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjYWNoZShjb2xsZWN0aW9uLCBuZXh0TnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBRdWlja2x5IGNoZWNrIGlmIHRoZXJlIGlzIGEgdGhlb3JldGljYWwgY2hhbmNlIHRvIGdlbmVyYXRlIGEgbmV3IG51bWJlci5cbiAgICAgICAgaWYgKGNvbGxlY3Rpb24uc2l6ZSA+IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmdyYXR1bGF0aW9ucywgeW91IGNyZWF0ZWQgYSBjb2xsZWN0aW9uIG9mIHVuaXF1ZSBudW1iZXJzIHdoaWNoIHVzZXMgYWxsIGF2YWlsYWJsZSBpbnRlZ2VycyEnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBmdWxsIHNjYWxlIG9mIHNhZmVseSB1c2FibGUgaW50ZWdlcnMuXG4gICAgICAgIHdoaWxlIChjb2xsZWN0aW9uLmhhcyhuZXh0TnVtYmVyKSkge1xuICAgICAgICAgIG5leHROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfU0FGRV9JTlRFR0VSKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGUoY29sbGVjdGlvbiwgbmV4dE51bWJlcik7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgTEFTVF9OVU1CRVJfV0VBS19NQVAgPSBuZXcgV2Vha01hcCgpO1xuICAgIHZhciBjYWNoZSA9IGNyZWF0ZUNhY2hlKExBU1RfTlVNQkVSX1dFQUtfTUFQKTtcbiAgICB2YXIgZ2VuZXJhdGVVbmlxdWVOdW1iZXIgPSBjcmVhdGVHZW5lcmF0ZVVuaXF1ZU51bWJlcihjYWNoZSwgTEFTVF9OVU1CRVJfV0VBS19NQVApO1xuICAgIHZhciBhZGRVbmlxdWVOdW1iZXIgPSBjcmVhdGVBZGRVbmlxdWVOdW1iZXIoZ2VuZXJhdGVVbmlxdWVOdW1iZXIpO1xuXG4gICAgZXhwb3J0cy5hZGRVbmlxdWVOdW1iZXIgPSBhZGRVbmlxdWVOdW1iZXI7XG4gICAgZXhwb3J0cy5nZW5lcmF0ZVVuaXF1ZU51bWJlciA9IGdlbmVyYXRlVW5pcXVlTnVtYmVyO1xuXG59KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL21pZGktanNvbi1wYXJzZXItYnJva2VyLWRlZmluaXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWlkaS1qc29uLXBhcnNlci1icm9rZXItZGVmaW5pdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVCcm9rZXIgfSBmcm9tICdicm9rZXItZmFjdG9yeSc7XG4vKlxuICogQHRvZG8gRXhwbGljaXRseSByZWZlcmVuY2luZyB0aGUgYmFycmVsIGZpbGUgc2VlbXMgdG8gYmUgbmVjZXNzYXJ5IHdoZW4gZW5hYmxpbmcgdGhlXG4gKiBpc29sYXRlZE1vZHVsZXMgY29tcGlsZXIgb3B0aW9uLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcy9pbmRleCc7XG5leHBvcnQgY29uc3Qgd3JhcCA9IGNyZWF0ZUJyb2tlcih7XG4gICAgcGFyc2VBcnJheUJ1ZmZlcjogKHsgY2FsbCB9KSA9PiB7XG4gICAgICAgIHJldHVybiBhc3luYyAoYXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKCdwYXJzZScsIHsgYXJyYXlCdWZmZXIgfSwgW2FycmF5QnVmZmVyXSk7XG4gICAgICAgIH07XG4gICAgfVxufSk7XG5leHBvcnQgY29uc3QgbG9hZCA9ICh1cmwpID0+IHtcbiAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKHVybCk7XG4gICAgcmV0dXJuIHdyYXAod29ya2VyKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGUuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9taWRpLWpzb24tcGFyc2VyLWJyb2tlci1sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9taWRpLWpzb24tcGFyc2VyLWJyb2tlci13cmFwcGVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pZGktanNvbi1wYXJzZXItYnJva2VyLWxvYWRlci5qcy5tYXAiLCJleHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taWRpLWpzb24tcGFyc2VyLWJyb2tlci13cmFwcGVyLmpzLm1hcCIsImltcG9ydCB7IGxvYWQgfSBmcm9tICdtaWRpLWpzb24tcGFyc2VyLWJyb2tlcic7XG5pbXBvcnQgeyB3b3JrZXIgfSBmcm9tICcuL3dvcmtlci93b3JrZXInO1xuY29uc3QgYmxvYiA9IG5ldyBCbG9iKFt3b3JrZXJdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0OyBjaGFyc2V0PXV0Zi04JyB9KTtcbmNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5jb25zdCBtaWRpSnNvblBhcnNlciA9IGxvYWQodXJsKTtcbmV4cG9ydCBjb25zdCBjb25uZWN0ID0gbWlkaUpzb25QYXJzZXIuY29ubmVjdDtcbmV4cG9ydCBjb25zdCBkaXNjb25uZWN0ID0gbWlkaUpzb25QYXJzZXIuZGlzY29ubmVjdDtcbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRlZCA9IG1pZGlKc29uUGFyc2VyLmlzU3VwcG9ydGVkO1xuLy8gQHRvZG8gUmVtb3ZlIHR5cGUgYW5ub3RhdGlvbiB3aGVuIHBvc3NpYmxlLlxuZXhwb3J0IGNvbnN0IHBhcnNlQXJyYXlCdWZmZXIgPSBtaWRpSnNvblBhcnNlci5wYXJzZUFycmF5QnVmZmVyO1xuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcCIsIi8vIFRoaXMgaXMgdGhlIG1pbmlmaWVkIGFuZCBzdHJpbmdpZmllZCBjb2RlIG9mIHRoZSBtaWRpLWpzb24tcGFyc2VyLXdvcmtlciBwYWNrYWdlLlxuZXhwb3J0IGNvbnN0IHdvcmtlciA9IGAoKCk9Pnt2YXIgZT17NDU1OmZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciB0PWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj1lKHQpO3JldHVybiB0LmFkZChuKSxufX0sbj1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxuKXtyZXR1cm4gZS5zZXQodCxuKSxufX0scj12b2lkIDA9PT1OdW1iZXIuTUFYX1NBRkVfSU5URUdFUj85MDA3MTk5MjU0NzQwOTkxOk51bWJlci5NQVhfU0FGRV9JTlRFR0VSLG89NTM2ODcwOTEyLHM9MipvLGk9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24obil7dmFyIGk9dC5nZXQobiksYT12b2lkIDA9PT1pP24uc2l6ZTppPHM/aSsxOjA7aWYoIW4uaGFzKGEpKXJldHVybiBlKG4sYSk7aWYobi5zaXplPG8pe2Zvcig7bi5oYXMoYSk7KWE9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnMpO3JldHVybiBlKG4sYSl9aWYobi5zaXplPnIpdGhyb3cgbmV3IEVycm9yKFwiQ29uZ3JhdHVsYXRpb25zLCB5b3UgY3JlYXRlZCBhIGNvbGxlY3Rpb24gb2YgdW5pcXVlIG51bWJlcnMgd2hpY2ggdXNlcyBhbGwgYXZhaWxhYmxlIGludGVnZXJzIVwiKTtmb3IoO24uaGFzKGEpOylhPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpyKTtyZXR1cm4gZShuLGEpfX0sYT1uZXcgV2Vha01hcCxmPW4oYSksYz1pKGYsYSksdT10KGMpO2UuYWRkVW5pcXVlTnVtYmVyPXUsZS5nZW5lcmF0ZVVuaXF1ZU51bWJlcj1jfSh0KX19LHQ9e307ZnVuY3Rpb24gbihyKXt2YXIgbz10W3JdO2lmKHZvaWQgMCE9PW8pcmV0dXJuIG8uZXhwb3J0czt2YXIgcz10W3JdPXtleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKHMuZXhwb3J0cyxzLHMuZXhwb3J0cyxuKSxzLmV4cG9ydHN9KCgpPT57XCJ1c2Ugc3RyaWN0XCI7Y29uc3QgZT0tMzI2MDMsdD0tMzI2MDIscj0tMzI2MDEsbz0oZSx0KT0+T2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoZSkse3N0YXR1czp0fSkscz10PT5vKCdUaGUgaGFuZGxlciBvZiB0aGUgbWV0aG9kIGNhbGxlZCBcIicuY29uY2F0KHQsJ1wiIHJldHVybmVkIGFuIHVuZXhwZWN0ZWQgcmVzdWx0LicpLGUpLGk9KHQsbik9PmFzeW5jKHtkYXRhOntpZDppLG1ldGhvZDphLHBhcmFtczpmfX0pPT57Y29uc3QgYz1uW2FdO3RyeXtpZih2b2lkIDA9PT1jKXRocm93KGU9Pm8oJ1RoZSByZXF1ZXN0ZWQgbWV0aG9kIGNhbGxlZCBcIicuY29uY2F0KGUsJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJykscikpKGEpO2NvbnN0IG49dm9pZCAwPT09Zj9jKCk6YyhmKTtpZih2b2lkIDA9PT1uKXRocm93KHQ9Pm8oJ1RoZSBoYW5kbGVyIG9mIHRoZSBtZXRob2QgY2FsbGVkIFwiJy5jb25jYXQodCwnXCIgcmV0dXJuZWQgbm8gcmVxdWlyZWQgcmVzdWx0LicpLGUpKShhKTtjb25zdCB1PW4gaW5zdGFuY2VvZiBQcm9taXNlP2F3YWl0IG46bjtpZihudWxsPT09aSl7aWYodm9pZCAwIT09dS5yZXN1bHQpdGhyb3cgcyhhKX1lbHNle2lmKHZvaWQgMD09PXUucmVzdWx0KXRocm93IHMoYSk7Y29uc3R7cmVzdWx0OmUsdHJhbnNmZXJhYmxlczpuPVtdfT11O3QucG9zdE1lc3NhZ2Uoe2lkOmkscmVzdWx0OmV9LG4pfX1jYXRjaChlKXtjb25zdHttZXNzYWdlOm4sc3RhdHVzOnI9LTMyNjAzfT1lO3QucG9zdE1lc3NhZ2Uoe2Vycm9yOntjb2RlOnIsbWVzc2FnZTpufSxpZDppfSl9fTt2YXIgYT1uKDQ1NSk7Y29uc3QgZj1uZXcgTWFwLGM9KGUsbixyKT0+KHsuLi5uLGNvbm5lY3Q6KHtwb3J0OnR9KT0+e3Quc3RhcnQoKTtjb25zdCByPWUodCxuKSxvPSgwLGEuZ2VuZXJhdGVVbmlxdWVOdW1iZXIpKGYpO3JldHVybiBmLnNldChvLCgoKT0+e3IoKSx0LmNsb3NlKCksZi5kZWxldGUobyl9KSkse3Jlc3VsdDpvfX0sZGlzY29ubmVjdDooe3BvcnRJZDplfSk9Pntjb25zdCBuPWYuZ2V0KGUpO2lmKHZvaWQgMD09PW4pdGhyb3coZT0+bygnVGhlIHNwZWNpZmllZCBwYXJhbWV0ZXIgY2FsbGVkIFwicG9ydElkXCIgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUgXCInLmNvbmNhdChlLCdcIiBkb2VzIG5vdCBpZGVudGlmeSBhIHBvcnQgY29ubmVjdGVkIHRvIHRoaXMgd29ya2VyLicpLHQpKShlKTtyZXR1cm4gbigpLHtyZXN1bHQ6bnVsbH19LGlzU3VwcG9ydGVkOmFzeW5jKCk9PntpZihhd2FpdCBuZXcgUHJvbWlzZSgoZT0+e2NvbnN0IHQ9bmV3IEFycmF5QnVmZmVyKDApLHtwb3J0MTpuLHBvcnQyOnJ9PW5ldyBNZXNzYWdlQ2hhbm5lbDtuLm9ubWVzc2FnZT0oe2RhdGE6dH0pPT5lKG51bGwhPT10KSxyLnBvc3RNZXNzYWdlKHQsW3RdKX0pKSl7Y29uc3QgZT1yKCk7cmV0dXJue3Jlc3VsdDplIGluc3RhbmNlb2YgUHJvbWlzZT9hd2FpdCBlOmV9fXJldHVybntyZXN1bHQ6ITF9fX0pLHU9KGUsdCxuPSgpPT4hMCk9Pntjb25zdCByPWModSx0LG4pLG89aShlLHIpO3JldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbyksKCk9PmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixvKX0sbD1lPT5lLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpLnBhZFN0YXJ0KDIsXCIwXCIpLGQ9KGUsdD0wLG49ZS5ieXRlTGVuZ3RoLSh0LWUuYnl0ZU9mZnNldCkpPT57Y29uc3Qgcj10K2UuYnl0ZU9mZnNldCxvPVtdLHM9bmV3IFVpbnQ4QXJyYXkoZS5idWZmZXIscixuKTtmb3IobGV0IGU9MDtlPG47ZSs9MSlvW2VdPWwoc1tlXSk7cmV0dXJuIG8uam9pbihcIlwiKX0sZz0oZSx0PTAsbj1lLmJ5dGVMZW5ndGgtKHQtZS5ieXRlT2Zmc2V0KSk9Pntjb25zdCByPXQrZS5ieXRlT2Zmc2V0LG89bmV3IFVpbnQ4QXJyYXkoZS5idWZmZXIscixuKTtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLG8pfSxoPShlLHQsbik9PntsZXQgcjtjb25zdHtvZmZzZXQ6byx2YWx1ZTpzfT15KGUsdCksaT1lLmdldFVpbnQ4KG8pO3JldHVybiByPTI0MD09PWk/VShlLG8rMSk6MjU1PT09aT9wKGUsbysxKTp2KGksZSxvKzEsbiksey4uLnIsZXZlbnQ6ey4uLnIuZXZlbnQsZGVsdGE6c30sZXZlbnRUeXBlQnl0ZTppfX0sbT1lPT57aWYoZS5ieXRlTGVuZ3RoPDE0KXRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGF0IGxlYXN0IDE0IGJ5dGVzIGluc3RlYWQgb2YgXCIuY29uY2F0KGUuYnl0ZUxlbmd0aCkpO2lmKFwiTVRoZFwiIT09ZyhlLDAsNCkpdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcnMgXCInLmNvbmNhdChnKGUsMCw0KSwnXCIgZm91bmQgaW5zdGVhZCBvZiBcIk1UaGRcIicpKTtpZig2IT09ZS5nZXRVaW50MzIoNCkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGhlYWRlciBoYXMgYW4gdW5leHBlY3RlZCBsZW5ndGggb2YgXCIuY29uY2F0KGUuZ2V0VWludDMyKDQpLFwiIGluc3RlYWQgb2YgNlwiKSk7Y29uc3QgdD1lLmdldFVpbnQxNig4KSxuPWUuZ2V0VWludDE2KDEwKTtyZXR1cm57ZGl2aXNpb246ZS5nZXRVaW50MTYoMTIpLGZvcm1hdDp0LG51bWJlck9mVHJhY2tzOm59fSxwPShlLHQpPT57bGV0IG47Y29uc3Qgcj1lLmdldFVpbnQ4KHQpLHtvZmZzZXQ6byx2YWx1ZTpzfT15KGUsdCsxKTtpZigxPT09ciluPXt0ZXh0OmcoZSxvLHMpfTtlbHNlIGlmKDI9PT1yKW49e2NvcHlyaWdodE5vdGljZTpnKGUsbyxzKX07ZWxzZSBpZigzPT09ciluPXt0cmFja05hbWU6ZyhlLG8scyl9O2Vsc2UgaWYoND09PXIpbj17aW5zdHJ1bWVudE5hbWU6ZyhlLG8scyl9O2Vsc2UgaWYoNT09PXIpbj17bHlyaWM6ZyhlLG8scyl9O2Vsc2UgaWYoNj09PXIpbj17bWFya2VyOmcoZSxvLHMpfTtlbHNlIGlmKDc9PT1yKW49e2N1ZVBvaW50OmcoZSxvLHMpfTtlbHNlIGlmKDg9PT1yKW49e3Byb2dyYW1OYW1lOmcoZSxvLHMpfTtlbHNlIGlmKDk9PT1yKW49e2RldmljZU5hbWU6ZyhlLG8scyl9O2Vsc2UgaWYoMTA9PT1yfHwxMT09PXJ8fDEyPT09cnx8MTM9PT1yfHwxND09PXJ8fDE1PT09ciluPXttZXRhVHlwZUJ5dGU6bChyKSx0ZXh0OmcoZSxvLHMpfTtlbHNlIGlmKDMyPT09ciluPXtjaGFubmVsUHJlZml4OmUuZ2V0VWludDgobyl9O2Vsc2UgaWYoMzM9PT1yKW49e21pZGlQb3J0OmUuZ2V0VWludDgobyl9O2Vsc2UgaWYoNDc9PT1yKW49e2VuZE9mVHJhY2s6ITB9O2Vsc2UgaWYoODE9PT1yKW49e3NldFRlbXBvOnttaWNyb3NlY29uZHNQZXJRdWFydGVyOihlLmdldFVpbnQ4KG8pPDwxNikrKGUuZ2V0VWludDgobysxKTw8OCkrZS5nZXRVaW50OChvKzIpfX07ZWxzZSBpZig4ND09PXIpe2xldCB0O2NvbnN0IHI9ZS5nZXRVaW50OChvKTs5NiZyPzMyPT0oOTYmcik/dD0yNTo2ND09KDk2JnIpP3Q9Mjk6OTYmfnJ8fCh0PTMwKTp0PTI0LG49e3NtcHRlT2Zmc2V0OntmcmFtZTplLmdldFVpbnQ4KG8rMyksZnJhbWVSYXRlOnQsaG91cjozMSZyLG1pbnV0ZXM6ZS5nZXRVaW50OChvKzEpLHNlY29uZHM6ZS5nZXRVaW50OChvKzIpLHN1YkZyYW1lOmUuZ2V0VWludDgobys0KX19fWVsc2UgaWYoODg9PT1yKW49e3RpbWVTaWduYXR1cmU6e2Rlbm9taW5hdG9yOk1hdGgucG93KDIsZS5nZXRVaW50OChvKzEpKSxtZXRyb25vbWU6ZS5nZXRVaW50OChvKzIpLG51bWVyYXRvcjplLmdldFVpbnQ4KG8pLHRoaXJ0eXNlY29uZHM6ZS5nZXRVaW50OChvKzMpfX07ZWxzZSBpZig4OT09PXIpbj17a2V5U2lnbmF0dXJlOntrZXk6ZS5nZXRJbnQ4KG8pLHNjYWxlOmUuZ2V0SW50OChvKzEpfX07ZWxzZXtpZigxMjchPT1yKXRocm93IG5ldyBFcnJvcignQ2Fubm90IHBhcnNlIGEgbWV0YSBldmVudCB3aXRoIGEgdHlwZSBvZiBcIicuY29uY2F0KGwociksJ1wiJykpO249e3NlcXVlbmNlclNwZWNpZmljRGF0YTpkKGUsbyxzKX19cmV0dXJue2V2ZW50Om4sb2Zmc2V0Om8rc319LHY9KGUsdCxuLHIpPT57Y29uc3Qgbz0xMjgmZT9udWxsOnIscz0obnVsbD09PW8/ZTpvKT4+NDtsZXQgaSxhPW51bGw9PT1vP246bi0xO2lmKDg9PT1zKWk9e25vdGVPZmY6e25vdGVOdW1iZXI6dC5nZXRVaW50OChhKSx2ZWxvY2l0eTp0LmdldFVpbnQ4KGErMSl9fSxhKz0yO2Vsc2UgaWYoOT09PXMpe2NvbnN0IGU9dC5nZXRVaW50OChhKSxuPXQuZ2V0VWludDgoYSsxKTtpPTA9PT1uP3tub3RlT2ZmOntub3RlTnVtYmVyOmUsdmVsb2NpdHk6bn19Ontub3RlT246e25vdGVOdW1iZXI6ZSx2ZWxvY2l0eTpufX0sYSs9Mn1lbHNlIGlmKDEwPT09cylpPXtrZXlQcmVzc3VyZTp7bm90ZU51bWJlcjp0LmdldFVpbnQ4KGEpLHByZXNzdXJlOnQuZ2V0VWludDgoYSsxKX19LGErPTI7ZWxzZSBpZigxMT09PXMpaT17Y29udHJvbENoYW5nZTp7dHlwZTp0LmdldFVpbnQ4KGEpLHZhbHVlOnQuZ2V0VWludDgoYSsxKX19LGErPTI7ZWxzZSBpZigxMj09PXMpaT17cHJvZ3JhbUNoYW5nZTp7cHJvZ3JhbU51bWJlcjp0LmdldFVpbnQ4KGEpfX0sYSs9MTtlbHNlIGlmKDEzPT09cylpPXtjaGFubmVsUHJlc3N1cmU6e3ByZXNzdXJlOnQuZ2V0VWludDgoYSl9fSxhKz0xO2Vsc2V7aWYoMTQhPT1zKXRocm93IG5ldyBFcnJvcignQ2Fubm90IHBhcnNlIGEgbWlkaSBldmVudCB3aXRoIGEgdHlwZSBvZiBcIicuY29uY2F0KGwocyksJ1wiJykpO2k9e3BpdGNoQmVuZDp0LmdldFVpbnQ4KGEpfHQuZ2V0VWludDgoYSsxKTw8N30sYSs9Mn1yZXR1cm4gaS5jaGFubmVsPTE1JihudWxsPT09bz9lOm8pLHtldmVudDppLG9mZnNldDphfX0sVT0oZSx0KT0+e2NvbnN0e29mZnNldDpuLHZhbHVlOnJ9PXkoZSx0KTtyZXR1cm57ZXZlbnQ6e3N5c2V4OmQoZSxuLHIpfSxvZmZzZXQ6bityfX0sdz0oZSx0KT0+e2lmKFwiTVRya1wiIT09ZyhlLHQsNCkpdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcnMgXCInLmNvbmNhdChnKGUsdCw0KSwnXCIgZm91bmQgaW5zdGVhZCBvZiBcIk1UcmtcIicpKTtjb25zdCBuPVtdLHI9ZS5nZXRVaW50MzIodCs0KSt0Kzg7bGV0IG89bnVsbCxzPXQrODtmb3IoO3M8cjspe2NvbnN0IHQ9aChlLHMsbykse2V2ZW50OnIsZXZlbnRUeXBlQnl0ZTppfT10O24ucHVzaChyKSxzPXQub2Zmc2V0LHZvaWQgMCE9PXIuY2hhbm5lbCYmKDEyOCZpKT4wJiYobz1pKX1yZXR1cm57b2Zmc2V0OnMsdHJhY2s6bn19LHk9KGUsdCk9PntsZXQgbj10LHI9MDtmb3IoOzspe2NvbnN0IHQ9ZS5nZXRVaW50OChuKTtpZihuKz0xLCEodD4xMjcpKXJldHVybiByKz10LHtvZmZzZXQ6bix2YWx1ZTpyfTtyKz0xMjcmdCxyPDw9N319O3Uoc2VsZix7cGFyc2U6KHthcnJheUJ1ZmZlcjplfSk9Pntjb25zdCB0PShlPT57Y29uc3QgdD1uZXcgRGF0YVZpZXcoZSksbj1tKHQpO2xldCByPTE0O2NvbnN0IG89W107Zm9yKGxldCBlPTAscz1uLm51bWJlck9mVHJhY2tzO2U8cztlKz0xKXtsZXQgZTsoe29mZnNldDpyLHRyYWNrOmV9PXcodCxyKSksby5wdXNoKGUpfXJldHVybntkaXZpc2lvbjpuLmRpdmlzaW9uLGZvcm1hdDpuLmZvcm1hdCx0cmFja3M6b319KShlKTtyZXR1cm57cmVzdWx0OnR9fX0pfSkoKX0pKCk7YDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTptYXgtbGluZS1sZW5ndGhcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdvcmtlci5qcy5tYXAiLCIvLyBUb3AgbGV2ZWwgZmlsZSBpcyBqdXN0IGEgbWl4aW4gb2Ygc3VibW9kdWxlcyAmIGNvbnN0YW50c1xuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IERlZmxhdGUsIGRlZmxhdGUsIGRlZmxhdGVSYXcsIGd6aXAgfSA9IHJlcXVpcmUoJy4vbGliL2RlZmxhdGUnKTtcblxuY29uc3QgeyBJbmZsYXRlLCBpbmZsYXRlLCBpbmZsYXRlUmF3LCB1bmd6aXAgfSA9IHJlcXVpcmUoJy4vbGliL2luZmxhdGUnKTtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9saWIvemxpYi9jb25zdGFudHMnKTtcblxubW9kdWxlLmV4cG9ydHMuRGVmbGF0ZSA9IERlZmxhdGU7XG5tb2R1bGUuZXhwb3J0cy5kZWZsYXRlID0gZGVmbGF0ZTtcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVSYXcgPSBkZWZsYXRlUmF3O1xubW9kdWxlLmV4cG9ydHMuZ3ppcCA9IGd6aXA7XG5tb2R1bGUuZXhwb3J0cy5JbmZsYXRlID0gSW5mbGF0ZTtcbm1vZHVsZS5leHBvcnRzLmluZmxhdGUgPSBpbmZsYXRlO1xubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZVJhdyA9IGluZmxhdGVSYXc7XG5tb2R1bGUuZXhwb3J0cy51bmd6aXAgPSB1bmd6aXA7XG5tb2R1bGUuZXhwb3J0cy5jb25zdGFudHMgPSBjb25zdGFudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cblxuY29uc3QgemxpYl9kZWZsYXRlID0gcmVxdWlyZSgnLi96bGliL2RlZmxhdGUnKTtcbmNvbnN0IHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvY29tbW9uJyk7XG5jb25zdCBzdHJpbmdzICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL3N0cmluZ3MnKTtcbmNvbnN0IG1zZyAgICAgICAgICA9IHJlcXVpcmUoJy4vemxpYi9tZXNzYWdlcycpO1xuY29uc3QgWlN0cmVhbSAgICAgID0gcmVxdWlyZSgnLi96bGliL3pzdHJlYW0nKTtcblxuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiBQdWJsaWMgY29uc3RhbnRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuY29uc3Qge1xuICBaX05PX0ZMVVNILCBaX1NZTkNfRkxVU0gsIFpfRlVMTF9GTFVTSCwgWl9GSU5JU0gsXG4gIFpfT0ssIFpfU1RSRUFNX0VORCxcbiAgWl9ERUZBVUxUX0NPTVBSRVNTSU9OLFxuICBaX0RFRkFVTFRfU1RSQVRFR1ksXG4gIFpfREVGTEFURURcbn0gPSByZXF1aXJlKCcuL3psaWIvY29uc3RhbnRzJyk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuLyoqXG4gKiBjbGFzcyBEZWZsYXRlXG4gKlxuICogR2VuZXJpYyBKUy1zdHlsZSB3cmFwcGVyIGZvciB6bGliIGNhbGxzLiBJZiB5b3UgZG9uJ3QgbmVlZFxuICogc3RyZWFtaW5nIGJlaGF2aW91ciAtIHVzZSBtb3JlIHNpbXBsZSBmdW5jdGlvbnM6IFtbZGVmbGF0ZV1dLFxuICogW1tkZWZsYXRlUmF3XV0gYW5kIFtbZ3ppcF1dLlxuICoqL1xuXG4vKiBpbnRlcm5hbFxuICogRGVmbGF0ZS5jaHVua3MgLT4gQXJyYXlcbiAqXG4gKiBDaHVua3Mgb2Ygb3V0cHV0IGRhdGEsIGlmIFtbRGVmbGF0ZSNvbkRhdGFdXSBub3Qgb3ZlcnJpZGRlbi5cbiAqKi9cblxuLyoqXG4gKiBEZWZsYXRlLnJlc3VsdCAtPiBVaW50OEFycmF5XG4gKlxuICogQ29tcHJlc3NlZCByZXN1bHQsIGdlbmVyYXRlZCBieSBkZWZhdWx0IFtbRGVmbGF0ZSNvbkRhdGFdXVxuICogYW5kIFtbRGVmbGF0ZSNvbkVuZF1dIGhhbmRsZXJzLiBGaWxsZWQgYWZ0ZXIgeW91IHB1c2ggbGFzdCBjaHVua1xuICogKGNhbGwgW1tEZWZsYXRlI3B1c2hdXSB3aXRoIGBaX0ZJTklTSGAgLyBgdHJ1ZWAgcGFyYW0pLlxuICoqL1xuXG4vKipcbiAqIERlZmxhdGUuZXJyIC0+IE51bWJlclxuICpcbiAqIEVycm9yIGNvZGUgYWZ0ZXIgZGVmbGF0ZSBmaW5pc2hlZC4gMCAoWl9PSykgb24gc3VjY2Vzcy5cbiAqIFlvdSB3aWxsIG5vdCBuZWVkIGl0IGluIHJlYWwgbGlmZSwgYmVjYXVzZSBkZWZsYXRlIGVycm9yc1xuICogYXJlIHBvc3NpYmxlIG9ubHkgb24gd3Jvbmcgb3B0aW9ucyBvciBiYWQgYG9uRGF0YWAgLyBgb25FbmRgXG4gKiBjdXN0b20gaGFuZGxlcnMuXG4gKiovXG5cbi8qKlxuICogRGVmbGF0ZS5tc2cgLT4gU3RyaW5nXG4gKlxuICogRXJyb3IgbWVzc2FnZSwgaWYgW1tEZWZsYXRlLmVycl1dICE9IDBcbiAqKi9cblxuXG4vKipcbiAqIG5ldyBEZWZsYXRlKG9wdGlvbnMpXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgZGVmbGF0ZSBvcHRpb25zLlxuICpcbiAqIENyZWF0ZXMgbmV3IGRlZmxhdG9yIGluc3RhbmNlIHdpdGggc3BlY2lmaWVkIHBhcmFtcy4gVGhyb3dzIGV4Y2VwdGlvblxuICogb24gYmFkIHBhcmFtcy4gU3VwcG9ydGVkIG9wdGlvbnM6XG4gKlxuICogLSBgbGV2ZWxgXG4gKiAtIGB3aW5kb3dCaXRzYFxuICogLSBgbWVtTGV2ZWxgXG4gKiAtIGBzdHJhdGVneWBcbiAqIC0gYGRpY3Rpb25hcnlgXG4gKlxuICogW2h0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZF0oaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkKVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhlc2UuXG4gKlxuICogQWRkaXRpb25hbCBvcHRpb25zLCBmb3IgaW50ZXJuYWwgbmVlZHM6XG4gKlxuICogLSBgY2h1bmtTaXplYCAtIHNpemUgb2YgZ2VuZXJhdGVkIGRhdGEgY2h1bmtzICgxNksgYnkgZGVmYXVsdClcbiAqIC0gYHJhd2AgKEJvb2xlYW4pIC0gZG8gcmF3IGRlZmxhdGVcbiAqIC0gYGd6aXBgIChCb29sZWFuKSAtIGNyZWF0ZSBnemlwIHdyYXBwZXJcbiAqIC0gYGhlYWRlcmAgKE9iamVjdCkgLSBjdXN0b20gaGVhZGVyIGZvciBnemlwXG4gKiAgIC0gYHRleHRgIChCb29sZWFuKSAtIHRydWUgaWYgY29tcHJlc3NlZCBkYXRhIGJlbGlldmVkIHRvIGJlIHRleHRcbiAqICAgLSBgdGltZWAgKE51bWJlcikgLSBtb2RpZmljYXRpb24gdGltZSwgdW5peCB0aW1lc3RhbXBcbiAqICAgLSBgb3NgIChOdW1iZXIpIC0gb3BlcmF0aW9uIHN5c3RlbSBjb2RlXG4gKiAgIC0gYGV4dHJhYCAoQXJyYXkpIC0gYXJyYXkgb2YgYnl0ZXMgd2l0aCBleHRyYSBkYXRhIChtYXggNjU1MzYpXG4gKiAgIC0gYG5hbWVgIChTdHJpbmcpIC0gZmlsZSBuYW1lIChiaW5hcnkgc3RyaW5nKVxuICogICAtIGBjb21tZW50YCAoU3RyaW5nKSAtIGNvbW1lbnQgKGJpbmFyeSBzdHJpbmcpXG4gKiAgIC0gYGhjcmNgIChCb29sZWFuKSAtIHRydWUgaWYgaGVhZGVyIGNyYyBzaG91bGQgYmUgYWRkZWRcbiAqXG4gKiAjIyMjIyBFeGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHBha28gPSByZXF1aXJlKCdwYWtvJylcbiAqICAgLCBjaHVuazEgPSBuZXcgVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKVxuICogICAsIGNodW5rMiA9IG5ldyBVaW50OEFycmF5KFsxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOV0pO1xuICpcbiAqIGNvbnN0IGRlZmxhdGUgPSBuZXcgcGFrby5EZWZsYXRlKHsgbGV2ZWw6IDN9KTtcbiAqXG4gKiBkZWZsYXRlLnB1c2goY2h1bmsxLCBmYWxzZSk7XG4gKiBkZWZsYXRlLnB1c2goY2h1bmsyLCB0cnVlKTsgIC8vIHRydWUgLT4gbGFzdCBjaHVua1xuICpcbiAqIGlmIChkZWZsYXRlLmVycikgeyB0aHJvdyBuZXcgRXJyb3IoZGVmbGF0ZS5lcnIpOyB9XG4gKlxuICogY29uc29sZS5sb2coZGVmbGF0ZS5yZXN1bHQpO1xuICogYGBgXG4gKiovXG5mdW5jdGlvbiBEZWZsYXRlKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuYXNzaWduKHtcbiAgICBsZXZlbDogWl9ERUZBVUxUX0NPTVBSRVNTSU9OLFxuICAgIG1ldGhvZDogWl9ERUZMQVRFRCxcbiAgICBjaHVua1NpemU6IDE2Mzg0LFxuICAgIHdpbmRvd0JpdHM6IDE1LFxuICAgIG1lbUxldmVsOiA4LFxuICAgIHN0cmF0ZWd5OiBaX0RFRkFVTFRfU1RSQVRFR1lcbiAgfSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgbGV0IG9wdCA9IHRoaXMub3B0aW9ucztcblxuICBpZiAob3B0LnJhdyAmJiAob3B0LndpbmRvd0JpdHMgPiAwKSkge1xuICAgIG9wdC53aW5kb3dCaXRzID0gLW9wdC53aW5kb3dCaXRzO1xuICB9XG5cbiAgZWxzZSBpZiAob3B0Lmd6aXAgJiYgKG9wdC53aW5kb3dCaXRzID4gMCkgJiYgKG9wdC53aW5kb3dCaXRzIDwgMTYpKSB7XG4gICAgb3B0LndpbmRvd0JpdHMgKz0gMTY7XG4gIH1cblxuICB0aGlzLmVyciAgICA9IDA7ICAgICAgLy8gZXJyb3IgY29kZSwgaWYgaGFwcGVucyAoMCA9IFpfT0spXG4gIHRoaXMubXNnICAgID0gJyc7ICAgICAvLyBlcnJvciBtZXNzYWdlXG4gIHRoaXMuZW5kZWQgID0gZmFsc2U7ICAvLyB1c2VkIHRvIGF2b2lkIG11bHRpcGxlIG9uRW5kKCkgY2FsbHNcbiAgdGhpcy5jaHVua3MgPSBbXTsgICAgIC8vIGNodW5rcyBvZiBjb21wcmVzc2VkIGRhdGFcblxuICB0aGlzLnN0cm0gPSBuZXcgWlN0cmVhbSgpO1xuICB0aGlzLnN0cm0uYXZhaWxfb3V0ID0gMDtcblxuICBsZXQgc3RhdHVzID0gemxpYl9kZWZsYXRlLmRlZmxhdGVJbml0MihcbiAgICB0aGlzLnN0cm0sXG4gICAgb3B0LmxldmVsLFxuICAgIG9wdC5tZXRob2QsXG4gICAgb3B0LndpbmRvd0JpdHMsXG4gICAgb3B0Lm1lbUxldmVsLFxuICAgIG9wdC5zdHJhdGVneVxuICApO1xuXG4gIGlmIChzdGF0dXMgIT09IFpfT0spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnW3N0YXR1c10pO1xuICB9XG5cbiAgaWYgKG9wdC5oZWFkZXIpIHtcbiAgICB6bGliX2RlZmxhdGUuZGVmbGF0ZVNldEhlYWRlcih0aGlzLnN0cm0sIG9wdC5oZWFkZXIpO1xuICB9XG5cbiAgaWYgKG9wdC5kaWN0aW9uYXJ5KSB7XG4gICAgbGV0IGRpY3Q7XG4gICAgLy8gQ29udmVydCBkYXRhIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2Ygb3B0LmRpY3Rpb25hcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBJZiB3ZSBuZWVkIHRvIGNvbXByZXNzIHRleHQsIGNoYW5nZSBlbmNvZGluZyB0byB1dGY4LlxuICAgICAgZGljdCA9IHN0cmluZ3Muc3RyaW5nMmJ1ZihvcHQuZGljdGlvbmFyeSk7XG4gICAgfSBlbHNlIGlmICh0b1N0cmluZy5jYWxsKG9wdC5kaWN0aW9uYXJ5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuICAgICAgZGljdCA9IG5ldyBVaW50OEFycmF5KG9wdC5kaWN0aW9uYXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGljdCA9IG9wdC5kaWN0aW9uYXJ5O1xuICAgIH1cblxuICAgIHN0YXR1cyA9IHpsaWJfZGVmbGF0ZS5kZWZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sIGRpY3QpO1xuXG4gICAgaWYgKHN0YXR1cyAhPT0gWl9PSykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZ1tzdGF0dXNdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaWN0X3NldCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZsYXRlI3B1c2goZGF0YVssIGZsdXNoX21vZGVdKSAtPiBCb29sZWFuXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ8U3RyaW5nKTogaW5wdXQgZGF0YS4gU3RyaW5ncyB3aWxsIGJlXG4gKiAgIGNvbnZlcnRlZCB0byB1dGY4IGJ5dGUgc2VxdWVuY2UuXG4gKiAtIGZsdXNoX21vZGUgKE51bWJlcnxCb29sZWFuKTogMC4uNiBmb3IgY29ycmVzcG9uZGluZyBaX05PX0ZMVVNILi5aX1RSRUUgbW9kZXMuXG4gKiAgIFNlZSBjb25zdGFudHMuIFNraXBwZWQgb3IgYGZhbHNlYCBtZWFucyBaX05PX0ZMVVNILCBgdHJ1ZWAgbWVhbnMgWl9GSU5JU0guXG4gKlxuICogU2VuZHMgaW5wdXQgZGF0YSB0byBkZWZsYXRlIHBpcGUsIGdlbmVyYXRpbmcgW1tEZWZsYXRlI29uRGF0YV1dIGNhbGxzIHdpdGhcbiAqIG5ldyBjb21wcmVzc2VkIGNodW5rcy4gUmV0dXJucyBgdHJ1ZWAgb24gc3VjY2Vzcy4gVGhlIGxhc3QgZGF0YSBibG9jayBtdXN0XG4gKiBoYXZlIGBmbHVzaF9tb2RlYCBaX0ZJTklTSCAob3IgYHRydWVgKS4gVGhhdCB3aWxsIGZsdXNoIGludGVybmFsIHBlbmRpbmdcbiAqIGJ1ZmZlcnMgYW5kIGNhbGwgW1tEZWZsYXRlI29uRW5kXV0uXG4gKlxuICogT24gZmFpbCBjYWxsIFtbRGVmbGF0ZSNvbkVuZF1dIHdpdGggZXJyb3IgY29kZSBhbmQgcmV0dXJuIGZhbHNlLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwdXNoKGNodW5rLCBmYWxzZSk7IC8vIHB1c2ggb25lIG9mIGRhdGEgY2h1bmtzXG4gKiAuLi5cbiAqIHB1c2goY2h1bmssIHRydWUpOyAgLy8gcHVzaCBsYXN0IGNodW5rXG4gKiBgYGBcbiAqKi9cbkRlZmxhdGUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZGF0YSwgZmx1c2hfbW9kZSkge1xuICBjb25zdCBzdHJtID0gdGhpcy5zdHJtO1xuICBjb25zdCBjaHVua1NpemUgPSB0aGlzLm9wdGlvbnMuY2h1bmtTaXplO1xuICBsZXQgc3RhdHVzLCBfZmx1c2hfbW9kZTtcblxuICBpZiAodGhpcy5lbmRlZCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoZmx1c2hfbW9kZSA9PT0gfn5mbHVzaF9tb2RlKSBfZmx1c2hfbW9kZSA9IGZsdXNoX21vZGU7XG4gIGVsc2UgX2ZsdXNoX21vZGUgPSBmbHVzaF9tb2RlID09PSB0cnVlID8gWl9GSU5JU0ggOiBaX05PX0ZMVVNIO1xuXG4gIC8vIENvbnZlcnQgZGF0YSBpZiBuZWVkZWRcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIC8vIElmIHdlIG5lZWQgdG8gY29tcHJlc3MgdGV4dCwgY2hhbmdlIGVuY29kaW5nIHRvIHV0ZjguXG4gICAgc3RybS5pbnB1dCA9IHN0cmluZ3Muc3RyaW5nMmJ1ZihkYXRhKTtcbiAgfSBlbHNlIGlmICh0b1N0cmluZy5jYWxsKGRhdGEpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG4gICAgc3RybS5pbnB1dCA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHN0cm0uaW5wdXQgPSBkYXRhO1xuICB9XG5cbiAgc3RybS5uZXh0X2luID0gMDtcbiAgc3RybS5hdmFpbF9pbiA9IHN0cm0uaW5wdXQubGVuZ3RoO1xuXG4gIGZvciAoOzspIHtcbiAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHN0cm0ub3V0cHV0ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmtTaXplKTtcbiAgICAgIHN0cm0ubmV4dF9vdXQgPSAwO1xuICAgICAgc3RybS5hdmFpbF9vdXQgPSBjaHVua1NpemU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIGF2YWlsX291dCA+IDYgdG8gYXZvaWQgcmVwZWF0aW5nIG1hcmtlcnNcbiAgICBpZiAoKF9mbHVzaF9tb2RlID09PSBaX1NZTkNfRkxVU0ggfHwgX2ZsdXNoX21vZGUgPT09IFpfRlVMTF9GTFVTSCkgJiYgc3RybS5hdmFpbF9vdXQgPD0gNikge1xuICAgICAgdGhpcy5vbkRhdGEoc3RybS5vdXRwdXQuc3ViYXJyYXkoMCwgc3RybS5uZXh0X291dCkpO1xuICAgICAgc3RybS5hdmFpbF9vdXQgPSAwO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgc3RhdHVzID0gemxpYl9kZWZsYXRlLmRlZmxhdGUoc3RybSwgX2ZsdXNoX21vZGUpO1xuXG4gICAgLy8gRW5kZWQgPT4gZmx1c2ggYW5kIGZpbmlzaFxuICAgIGlmIChzdGF0dXMgPT09IFpfU1RSRUFNX0VORCkge1xuICAgICAgaWYgKHN0cm0ubmV4dF9vdXQgPiAwKSB7XG4gICAgICAgIHRoaXMub25EYXRhKHN0cm0ub3V0cHV0LnN1YmFycmF5KDAsIHN0cm0ubmV4dF9vdXQpKTtcbiAgICAgIH1cbiAgICAgIHN0YXR1cyA9IHpsaWJfZGVmbGF0ZS5kZWZsYXRlRW5kKHRoaXMuc3RybSk7XG4gICAgICB0aGlzLm9uRW5kKHN0YXR1cyk7XG4gICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdGF0dXMgPT09IFpfT0s7XG4gICAgfVxuXG4gICAgLy8gRmx1c2ggaWYgb3V0IGJ1ZmZlciBmdWxsXG4gICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICB0aGlzLm9uRGF0YShzdHJtLm91dHB1dCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBGbHVzaCBpZiByZXF1ZXN0ZWQgYW5kIGhhcyBkYXRhXG4gICAgaWYgKF9mbHVzaF9tb2RlID4gMCAmJiBzdHJtLm5leHRfb3V0ID4gMCkge1xuICAgICAgdGhpcy5vbkRhdGEoc3RybS5vdXRwdXQuc3ViYXJyYXkoMCwgc3RybS5uZXh0X291dCkpO1xuICAgICAgc3RybS5hdmFpbF9vdXQgPSAwO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHN0cm0uYXZhaWxfaW4gPT09IDApIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbi8qKlxuICogRGVmbGF0ZSNvbkRhdGEoY2h1bmspIC0+IFZvaWRcbiAqIC0gY2h1bmsgKFVpbnQ4QXJyYXkpOiBvdXRwdXQgZGF0YS5cbiAqXG4gKiBCeSBkZWZhdWx0LCBzdG9yZXMgZGF0YSBibG9ja3MgaW4gYGNodW5rc1tdYCBwcm9wZXJ0eSBhbmQgZ2x1ZVxuICogdGhvc2UgaW4gYG9uRW5kYC4gT3ZlcnJpZGUgdGhpcyBoYW5kbGVyLCBpZiB5b3UgbmVlZCBhbm90aGVyIGJlaGF2aW91ci5cbiAqKi9cbkRlZmxhdGUucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChjaHVuaykge1xuICB0aGlzLmNodW5rcy5wdXNoKGNodW5rKTtcbn07XG5cblxuLyoqXG4gKiBEZWZsYXRlI29uRW5kKHN0YXR1cykgLT4gVm9pZFxuICogLSBzdGF0dXMgKE51bWJlcik6IGRlZmxhdGUgc3RhdHVzLiAwIChaX09LKSBvbiBzdWNjZXNzLFxuICogICBvdGhlciBpZiBub3QuXG4gKlxuICogQ2FsbGVkIG9uY2UgYWZ0ZXIgeW91IHRlbGwgZGVmbGF0ZSB0aGF0IHRoZSBpbnB1dCBzdHJlYW0gaXNcbiAqIGNvbXBsZXRlIChaX0ZJTklTSCkuIEJ5IGRlZmF1bHQgLSBqb2luIGNvbGxlY3RlZCBjaHVua3MsXG4gKiBmcmVlIG1lbW9yeSBhbmQgZmlsbCBgcmVzdWx0c2AgLyBgZXJyYCBwcm9wZXJ0aWVzLlxuICoqL1xuRGVmbGF0ZS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIC8vIE9uIHN1Y2Nlc3MgLSBqb2luXG4gIGlmIChzdGF0dXMgPT09IFpfT0spIHtcbiAgICB0aGlzLnJlc3VsdCA9IHV0aWxzLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpO1xuICB9XG4gIHRoaXMuY2h1bmtzID0gW107XG4gIHRoaXMuZXJyID0gc3RhdHVzO1xuICB0aGlzLm1zZyA9IHRoaXMuc3RybS5tc2c7XG59O1xuXG5cbi8qKlxuICogZGVmbGF0ZShkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXlcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheUJ1ZmZlcnxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBDb21wcmVzcyBgZGF0YWAgd2l0aCBkZWZsYXRlIGFsZ29yaXRobSBhbmQgYG9wdGlvbnNgLlxuICpcbiAqIFN1cHBvcnRlZCBvcHRpb25zIGFyZTpcbiAqXG4gKiAtIGxldmVsXG4gKiAtIHdpbmRvd0JpdHNcbiAqIC0gbWVtTGV2ZWxcbiAqIC0gc3RyYXRlZ3lcbiAqIC0gZGljdGlvbmFyeVxuICpcbiAqIFtodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWRdKGh0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZClcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZXNlLlxuICpcbiAqIFN1Z2FyIChvcHRpb25zKTpcbiAqXG4gKiAtIGByYXdgIChCb29sZWFuKSAtIHNheSB0aGF0IHdlIHdvcmsgd2l0aCByYXcgc3RyZWFtLCBpZiB5b3UgZG9uJ3Qgd2lzaCB0byBzcGVjaWZ5XG4gKiAgIG5lZ2F0aXZlIHdpbmRvd0JpdHMgaW1wbGljaXRseS5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHBha28gPSByZXF1aXJlKCdwYWtvJylcbiAqIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhwYWtvLmRlZmxhdGUoZGF0YSkpO1xuICogYGBgXG4gKiovXG5mdW5jdGlvbiBkZWZsYXRlKGlucHV0LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmxhdG9yID0gbmV3IERlZmxhdGUob3B0aW9ucyk7XG5cbiAgZGVmbGF0b3IucHVzaChpbnB1dCwgdHJ1ZSk7XG5cbiAgLy8gVGhhdCB3aWxsIG5ldmVyIGhhcHBlbnMsIGlmIHlvdSBkb24ndCBjaGVhdCB3aXRoIG9wdGlvbnMgOilcbiAgaWYgKGRlZmxhdG9yLmVycikgeyB0aHJvdyBkZWZsYXRvci5tc2cgfHwgbXNnW2RlZmxhdG9yLmVycl07IH1cblxuICByZXR1cm4gZGVmbGF0b3IucmVzdWx0O1xufVxuXG5cbi8qKlxuICogZGVmbGF0ZVJhdyhkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXlcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheUJ1ZmZlcnxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBUaGUgc2FtZSBhcyBbW2RlZmxhdGVdXSwgYnV0IGNyZWF0ZXMgcmF3IGRhdGEsIHdpdGhvdXQgd3JhcHBlclxuICogKGhlYWRlciBhbmQgYWRsZXIzMiBjcmMpLlxuICoqL1xuZnVuY3Rpb24gZGVmbGF0ZVJhdyhpbnB1dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5yYXcgPSB0cnVlO1xuICByZXR1cm4gZGVmbGF0ZShpbnB1dCwgb3B0aW9ucyk7XG59XG5cblxuLyoqXG4gKiBnemlwKGRhdGFbLCBvcHRpb25zXSkgLT4gVWludDhBcnJheVxuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5QnVmZmVyfFN0cmluZyk6IGlucHV0IGRhdGEgdG8gY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgZGVmbGF0ZSBvcHRpb25zLlxuICpcbiAqIFRoZSBzYW1lIGFzIFtbZGVmbGF0ZV1dLCBidXQgY3JlYXRlIGd6aXAgd3JhcHBlciBpbnN0ZWFkIG9mXG4gKiBkZWZsYXRlIG9uZS5cbiAqKi9cbmZ1bmN0aW9uIGd6aXAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuZ3ppcCA9IHRydWU7XG4gIHJldHVybiBkZWZsYXRlKGlucHV0LCBvcHRpb25zKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5EZWZsYXRlID0gRGVmbGF0ZTtcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGUgPSBkZWZsYXRlO1xubW9kdWxlLmV4cG9ydHMuZGVmbGF0ZVJhdyA9IGRlZmxhdGVSYXc7XG5tb2R1bGUuZXhwb3J0cy5nemlwID0gZ3ppcDtcbm1vZHVsZS5leHBvcnRzLmNvbnN0YW50cyA9IHJlcXVpcmUoJy4vemxpYi9jb25zdGFudHMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG5jb25zdCB6bGliX2luZmxhdGUgPSByZXF1aXJlKCcuL3psaWIvaW5mbGF0ZScpO1xuY29uc3QgdXRpbHMgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9jb21tb24nKTtcbmNvbnN0IHN0cmluZ3MgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvc3RyaW5ncycpO1xuY29uc3QgbXNnICAgICAgICAgID0gcmVxdWlyZSgnLi96bGliL21lc3NhZ2VzJyk7XG5jb25zdCBaU3RyZWFtICAgICAgPSByZXF1aXJlKCcuL3psaWIvenN0cmVhbScpO1xuY29uc3QgR1poZWFkZXIgICAgID0gcmVxdWlyZSgnLi96bGliL2d6aGVhZGVyJyk7XG5cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyogUHVibGljIGNvbnN0YW50cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbmNvbnN0IHtcbiAgWl9OT19GTFVTSCwgWl9GSU5JU0gsXG4gIFpfT0ssIFpfU1RSRUFNX0VORCwgWl9ORUVEX0RJQ1QsIFpfU1RSRUFNX0VSUk9SLCBaX0RBVEFfRVJST1IsIFpfTUVNX0VSUk9SXG59ID0gcmVxdWlyZSgnLi96bGliL2NvbnN0YW50cycpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbi8qKlxuICogY2xhc3MgSW5mbGF0ZVxuICpcbiAqIEdlbmVyaWMgSlMtc3R5bGUgd3JhcHBlciBmb3IgemxpYiBjYWxscy4gSWYgeW91IGRvbid0IG5lZWRcbiAqIHN0cmVhbWluZyBiZWhhdmlvdXIgLSB1c2UgbW9yZSBzaW1wbGUgZnVuY3Rpb25zOiBbW2luZmxhdGVdXVxuICogYW5kIFtbaW5mbGF0ZVJhd11dLlxuICoqL1xuXG4vKiBpbnRlcm5hbFxuICogaW5mbGF0ZS5jaHVua3MgLT4gQXJyYXlcbiAqXG4gKiBDaHVua3Mgb2Ygb3V0cHV0IGRhdGEsIGlmIFtbSW5mbGF0ZSNvbkRhdGFdXSBub3Qgb3ZlcnJpZGRlbi5cbiAqKi9cblxuLyoqXG4gKiBJbmZsYXRlLnJlc3VsdCAtPiBVaW50OEFycmF5fFN0cmluZ1xuICpcbiAqIFVuY29tcHJlc3NlZCByZXN1bHQsIGdlbmVyYXRlZCBieSBkZWZhdWx0IFtbSW5mbGF0ZSNvbkRhdGFdXVxuICogYW5kIFtbSW5mbGF0ZSNvbkVuZF1dIGhhbmRsZXJzLiBGaWxsZWQgYWZ0ZXIgeW91IHB1c2ggbGFzdCBjaHVua1xuICogKGNhbGwgW1tJbmZsYXRlI3B1c2hdXSB3aXRoIGBaX0ZJTklTSGAgLyBgdHJ1ZWAgcGFyYW0pLlxuICoqL1xuXG4vKipcbiAqIEluZmxhdGUuZXJyIC0+IE51bWJlclxuICpcbiAqIEVycm9yIGNvZGUgYWZ0ZXIgaW5mbGF0ZSBmaW5pc2hlZC4gMCAoWl9PSykgb24gc3VjY2Vzcy5cbiAqIFNob3VsZCBiZSBjaGVja2VkIGlmIGJyb2tlbiBkYXRhIHBvc3NpYmxlLlxuICoqL1xuXG4vKipcbiAqIEluZmxhdGUubXNnIC0+IFN0cmluZ1xuICpcbiAqIEVycm9yIG1lc3NhZ2UsIGlmIFtbSW5mbGF0ZS5lcnJdXSAhPSAwXG4gKiovXG5cblxuLyoqXG4gKiBuZXcgSW5mbGF0ZShvcHRpb25zKVxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGluZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBDcmVhdGVzIG5ldyBpbmZsYXRvciBpbnN0YW5jZSB3aXRoIHNwZWNpZmllZCBwYXJhbXMuIFRocm93cyBleGNlcHRpb25cbiAqIG9uIGJhZCBwYXJhbXMuIFN1cHBvcnRlZCBvcHRpb25zOlxuICpcbiAqIC0gYHdpbmRvd0JpdHNgXG4gKiAtIGBkaWN0aW9uYXJ5YFxuICpcbiAqIFtodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWRdKGh0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZClcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZXNlLlxuICpcbiAqIEFkZGl0aW9uYWwgb3B0aW9ucywgZm9yIGludGVybmFsIG5lZWRzOlxuICpcbiAqIC0gYGNodW5rU2l6ZWAgLSBzaXplIG9mIGdlbmVyYXRlZCBkYXRhIGNodW5rcyAoMTZLIGJ5IGRlZmF1bHQpXG4gKiAtIGByYXdgIChCb29sZWFuKSAtIGRvIHJhdyBpbmZsYXRlXG4gKiAtIGB0b2AgKFN0cmluZykgLSBpZiBlcXVhbCB0byAnc3RyaW5nJywgdGhlbiByZXN1bHQgd2lsbCBiZSBjb252ZXJ0ZWRcbiAqICAgZnJvbSB1dGY4IHRvIHV0ZjE2IChqYXZhc2NyaXB0KSBzdHJpbmcuIFdoZW4gc3RyaW5nIG91dHB1dCByZXF1ZXN0ZWQsXG4gKiAgIGNodW5rIGxlbmd0aCBjYW4gZGlmZmVyIGZyb20gYGNodW5rU2l6ZWAsIGRlcGVuZGluZyBvbiBjb250ZW50LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHdoZW4gbm8gb3B0aW9ucyBzZXQsIGF1dG9kZXRlY3QgZGVmbGF0ZS9nemlwIGRhdGEgZm9ybWF0IHZpYVxuICogd3JhcHBlciBoZWFkZXIuXG4gKlxuICogIyMjIyMgRXhhbXBsZTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBwYWtvID0gcmVxdWlyZSgncGFrbycpXG4gKiBjb25zdCBjaHVuazEgPSBuZXcgVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKVxuICogY29uc3QgY2h1bmsyID0gbmV3IFVpbnQ4QXJyYXkoWzEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5XSk7XG4gKlxuICogY29uc3QgaW5mbGF0ZSA9IG5ldyBwYWtvLkluZmxhdGUoeyBsZXZlbDogM30pO1xuICpcbiAqIGluZmxhdGUucHVzaChjaHVuazEsIGZhbHNlKTtcbiAqIGluZmxhdGUucHVzaChjaHVuazIsIHRydWUpOyAgLy8gdHJ1ZSAtPiBsYXN0IGNodW5rXG4gKlxuICogaWYgKGluZmxhdGUuZXJyKSB7IHRocm93IG5ldyBFcnJvcihpbmZsYXRlLmVycik7IH1cbiAqXG4gKiBjb25zb2xlLmxvZyhpbmZsYXRlLnJlc3VsdCk7XG4gKiBgYGBcbiAqKi9cbmZ1bmN0aW9uIEluZmxhdGUob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSB1dGlscy5hc3NpZ24oe1xuICAgIGNodW5rU2l6ZTogMTAyNCAqIDY0LFxuICAgIHdpbmRvd0JpdHM6IDE1LFxuICAgIHRvOiAnJ1xuICB9LCBvcHRpb25zIHx8IHt9KTtcblxuICBjb25zdCBvcHQgPSB0aGlzLm9wdGlvbnM7XG5cbiAgLy8gRm9yY2Ugd2luZG93IHNpemUgZm9yIGByYXdgIGRhdGEsIGlmIG5vdCBzZXQgZGlyZWN0bHksXG4gIC8vIGJlY2F1c2Ugd2UgaGF2ZSBubyBoZWFkZXIgZm9yIGF1dG9kZXRlY3QuXG4gIGlmIChvcHQucmF3ICYmIChvcHQud2luZG93Qml0cyA+PSAwKSAmJiAob3B0LndpbmRvd0JpdHMgPCAxNikpIHtcbiAgICBvcHQud2luZG93Qml0cyA9IC1vcHQud2luZG93Qml0cztcbiAgICBpZiAob3B0LndpbmRvd0JpdHMgPT09IDApIHsgb3B0LndpbmRvd0JpdHMgPSAtMTU7IH1cbiAgfVxuXG4gIC8vIElmIGB3aW5kb3dCaXRzYCBub3QgZGVmaW5lZCAoYW5kIG1vZGUgbm90IHJhdykgLSBzZXQgYXV0b2RldGVjdCBmbGFnIGZvciBnemlwL2RlZmxhdGVcbiAgaWYgKChvcHQud2luZG93Qml0cyA+PSAwKSAmJiAob3B0LndpbmRvd0JpdHMgPCAxNikgJiZcbiAgICAgICEob3B0aW9ucyAmJiBvcHRpb25zLndpbmRvd0JpdHMpKSB7XG4gICAgb3B0LndpbmRvd0JpdHMgKz0gMzI7XG4gIH1cblxuICAvLyBHemlwIGhlYWRlciBoYXMgbm8gaW5mbyBhYm91dCB3aW5kb3dzIHNpemUsIHdlIGNhbiBkbyBhdXRvZGV0ZWN0IG9ubHlcbiAgLy8gZm9yIGRlZmxhdGUuIFNvLCBpZiB3aW5kb3cgc2l6ZSBub3Qgc2V0LCBmb3JjZSBpdCB0byBtYXggd2hlbiBnemlwIHBvc3NpYmxlXG4gIGlmICgob3B0LndpbmRvd0JpdHMgPiAxNSkgJiYgKG9wdC53aW5kb3dCaXRzIDwgNDgpKSB7XG4gICAgLy8gYml0IDMgKDE2KSAtPiBnemlwcGVkIGRhdGFcbiAgICAvLyBiaXQgNCAoMzIpIC0+IGF1dG9kZXRlY3QgZ3ppcC9kZWZsYXRlXG4gICAgaWYgKChvcHQud2luZG93Qml0cyAmIDE1KSA9PT0gMCkge1xuICAgICAgb3B0LndpbmRvd0JpdHMgfD0gMTU7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5lcnIgICAgPSAwOyAgICAgIC8vIGVycm9yIGNvZGUsIGlmIGhhcHBlbnMgKDAgPSBaX09LKVxuICB0aGlzLm1zZyAgICA9ICcnOyAgICAgLy8gZXJyb3IgbWVzc2FnZVxuICB0aGlzLmVuZGVkICA9IGZhbHNlOyAgLy8gdXNlZCB0byBhdm9pZCBtdWx0aXBsZSBvbkVuZCgpIGNhbGxzXG4gIHRoaXMuY2h1bmtzID0gW107ICAgICAvLyBjaHVua3Mgb2YgY29tcHJlc3NlZCBkYXRhXG5cbiAgdGhpcy5zdHJtICAgPSBuZXcgWlN0cmVhbSgpO1xuICB0aGlzLnN0cm0uYXZhaWxfb3V0ID0gMDtcblxuICBsZXQgc3RhdHVzICA9IHpsaWJfaW5mbGF0ZS5pbmZsYXRlSW5pdDIoXG4gICAgdGhpcy5zdHJtLFxuICAgIG9wdC53aW5kb3dCaXRzXG4gICk7XG5cbiAgaWYgKHN0YXR1cyAhPT0gWl9PSykge1xuICAgIHRocm93IG5ldyBFcnJvcihtc2dbc3RhdHVzXSk7XG4gIH1cblxuICB0aGlzLmhlYWRlciA9IG5ldyBHWmhlYWRlcigpO1xuXG4gIHpsaWJfaW5mbGF0ZS5pbmZsYXRlR2V0SGVhZGVyKHRoaXMuc3RybSwgdGhpcy5oZWFkZXIpO1xuXG4gIC8vIFNldHVwIGRpY3Rpb25hcnlcbiAgaWYgKG9wdC5kaWN0aW9uYXJ5KSB7XG4gICAgLy8gQ29udmVydCBkYXRhIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2Ygb3B0LmRpY3Rpb25hcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHQuZGljdGlvbmFyeSA9IHN0cmluZ3Muc3RyaW5nMmJ1ZihvcHQuZGljdGlvbmFyeSk7XG4gICAgfSBlbHNlIGlmICh0b1N0cmluZy5jYWxsKG9wdC5kaWN0aW9uYXJ5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuICAgICAgb3B0LmRpY3Rpb25hcnkgPSBuZXcgVWludDhBcnJheShvcHQuZGljdGlvbmFyeSk7XG4gICAgfVxuICAgIGlmIChvcHQucmF3KSB7IC8vSW4gcmF3IG1vZGUgd2UgbmVlZCB0byBzZXQgdGhlIGRpY3Rpb25hcnkgZWFybHlcbiAgICAgIHN0YXR1cyA9IHpsaWJfaW5mbGF0ZS5pbmZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sIG9wdC5kaWN0aW9uYXJ5KTtcbiAgICAgIGlmIChzdGF0dXMgIT09IFpfT0spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZ1tzdGF0dXNdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBJbmZsYXRlI3B1c2goZGF0YVssIGZsdXNoX21vZGVdKSAtPiBCb29sZWFuXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXIpOiBpbnB1dCBkYXRhXG4gKiAtIGZsdXNoX21vZGUgKE51bWJlcnxCb29sZWFuKTogMC4uNiBmb3IgY29ycmVzcG9uZGluZyBaX05PX0ZMVVNILi5aX1RSRUVcbiAqICAgZmx1c2ggbW9kZXMuIFNlZSBjb25zdGFudHMuIFNraXBwZWQgb3IgYGZhbHNlYCBtZWFucyBaX05PX0ZMVVNILFxuICogICBgdHJ1ZWAgbWVhbnMgWl9GSU5JU0guXG4gKlxuICogU2VuZHMgaW5wdXQgZGF0YSB0byBpbmZsYXRlIHBpcGUsIGdlbmVyYXRpbmcgW1tJbmZsYXRlI29uRGF0YV1dIGNhbGxzIHdpdGhcbiAqIG5ldyBvdXRwdXQgY2h1bmtzLiBSZXR1cm5zIGB0cnVlYCBvbiBzdWNjZXNzLiBJZiBlbmQgb2Ygc3RyZWFtIGRldGVjdGVkLFxuICogW1tJbmZsYXRlI29uRW5kXV0gd2lsbCBiZSBjYWxsZWQuXG4gKlxuICogYGZsdXNoX21vZGVgIGlzIG5vdCBuZWVkZWQgZm9yIG5vcm1hbCBvcGVyYXRpb24sIGJlY2F1c2UgZW5kIG9mIHN0cmVhbVxuICogZGV0ZWN0ZWQgYXV0b21hdGljYWxseS4gWW91IG1heSB0cnkgdG8gdXNlIGl0IGZvciBhZHZhbmNlZCB0aGluZ3MsIGJ1dFxuICogdGhpcyBmdW5jdGlvbmFsaXR5IHdhcyBub3QgdGVzdGVkLlxuICpcbiAqIE9uIGZhaWwgY2FsbCBbW0luZmxhdGUjb25FbmRdXSB3aXRoIGVycm9yIGNvZGUgYW5kIHJldHVybiBmYWxzZS5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogcHVzaChjaHVuaywgZmFsc2UpOyAvLyBwdXNoIG9uZSBvZiBkYXRhIGNodW5rc1xuICogLi4uXG4gKiBwdXNoKGNodW5rLCB0cnVlKTsgIC8vIHB1c2ggbGFzdCBjaHVua1xuICogYGBgXG4gKiovXG5JbmZsYXRlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGRhdGEsIGZsdXNoX21vZGUpIHtcbiAgY29uc3Qgc3RybSA9IHRoaXMuc3RybTtcbiAgY29uc3QgY2h1bmtTaXplID0gdGhpcy5vcHRpb25zLmNodW5rU2l6ZTtcbiAgY29uc3QgZGljdGlvbmFyeSA9IHRoaXMub3B0aW9ucy5kaWN0aW9uYXJ5O1xuICBsZXQgc3RhdHVzLCBfZmx1c2hfbW9kZSwgbGFzdF9hdmFpbF9vdXQ7XG5cbiAgaWYgKHRoaXMuZW5kZWQpIHJldHVybiBmYWxzZTtcblxuICBpZiAoZmx1c2hfbW9kZSA9PT0gfn5mbHVzaF9tb2RlKSBfZmx1c2hfbW9kZSA9IGZsdXNoX21vZGU7XG4gIGVsc2UgX2ZsdXNoX21vZGUgPSBmbHVzaF9tb2RlID09PSB0cnVlID8gWl9GSU5JU0ggOiBaX05PX0ZMVVNIO1xuXG4gIC8vIENvbnZlcnQgZGF0YSBpZiBuZWVkZWRcbiAgaWYgKHRvU3RyaW5nLmNhbGwoZGF0YSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcbiAgICBzdHJtLmlucHV0ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgc3RybS5pbnB1dCA9IGRhdGE7XG4gIH1cblxuICBzdHJtLm5leHRfaW4gPSAwO1xuICBzdHJtLmF2YWlsX2luID0gc3RybS5pbnB1dC5sZW5ndGg7XG5cbiAgZm9yICg7Oykge1xuICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgc3RybS5vdXRwdXQgPSBuZXcgVWludDhBcnJheShjaHVua1NpemUpO1xuICAgICAgc3RybS5uZXh0X291dCA9IDA7XG4gICAgICBzdHJtLmF2YWlsX291dCA9IGNodW5rU2l6ZTtcbiAgICB9XG5cbiAgICBzdGF0dXMgPSB6bGliX2luZmxhdGUuaW5mbGF0ZShzdHJtLCBfZmx1c2hfbW9kZSk7XG5cbiAgICBpZiAoc3RhdHVzID09PSBaX05FRURfRElDVCAmJiBkaWN0aW9uYXJ5KSB7XG4gICAgICBzdGF0dXMgPSB6bGliX2luZmxhdGUuaW5mbGF0ZVNldERpY3Rpb25hcnkoc3RybSwgZGljdGlvbmFyeSk7XG5cbiAgICAgIGlmIChzdGF0dXMgPT09IFpfT0spIHtcbiAgICAgICAgc3RhdHVzID0gemxpYl9pbmZsYXRlLmluZmxhdGUoc3RybSwgX2ZsdXNoX21vZGUpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFpfREFUQV9FUlJPUikge1xuICAgICAgICAvLyBSZXBsYWNlIGNvZGUgd2l0aCBtb3JlIHZlcmJvc2VcbiAgICAgICAgc3RhdHVzID0gWl9ORUVEX0RJQ1Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2tpcCBzbnljIG1hcmtlcnMgaWYgbW9yZSBkYXRhIGZvbGxvd3MgYW5kIG5vdCByYXcgbW9kZVxuICAgIHdoaWxlIChzdHJtLmF2YWlsX2luID4gMCAmJlxuICAgICAgICAgICBzdGF0dXMgPT09IFpfU1RSRUFNX0VORCAmJlxuICAgICAgICAgICBzdHJtLnN0YXRlLndyYXAgPiAwICYmXG4gICAgICAgICAgIGRhdGFbc3RybS5uZXh0X2luXSAhPT0gMClcbiAgICB7XG4gICAgICB6bGliX2luZmxhdGUuaW5mbGF0ZVJlc2V0KHN0cm0pO1xuICAgICAgc3RhdHVzID0gemxpYl9pbmZsYXRlLmluZmxhdGUoc3RybSwgX2ZsdXNoX21vZGUpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIFpfU1RSRUFNX0VSUk9SOlxuICAgICAgY2FzZSBaX0RBVEFfRVJST1I6XG4gICAgICBjYXNlIFpfTkVFRF9ESUNUOlxuICAgICAgY2FzZSBaX01FTV9FUlJPUjpcbiAgICAgICAgdGhpcy5vbkVuZChzdGF0dXMpO1xuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFJlbWVtYmVyIHJlYWwgYGF2YWlsX291dGAgdmFsdWUsIGJlY2F1c2Ugd2UgbWF5IHBhdGNoIG91dCBidWZmZXIgY29udGVudFxuICAgIC8vIHRvIGFsaWduIHV0Zjggc3RyaW5ncyBib3VuZGFyaWVzLlxuICAgIGxhc3RfYXZhaWxfb3V0ID0gc3RybS5hdmFpbF9vdXQ7XG5cbiAgICBpZiAoc3RybS5uZXh0X291dCkge1xuICAgICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwIHx8IHN0YXR1cyA9PT0gWl9TVFJFQU1fRU5EKSB7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50byA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICAgIGxldCBuZXh0X291dF91dGY4ID0gc3RyaW5ncy51dGY4Ym9yZGVyKHN0cm0ub3V0cHV0LCBzdHJtLm5leHRfb3V0KTtcblxuICAgICAgICAgIGxldCB0YWlsID0gc3RybS5uZXh0X291dCAtIG5leHRfb3V0X3V0Zjg7XG4gICAgICAgICAgbGV0IHV0ZjhzdHIgPSBzdHJpbmdzLmJ1ZjJzdHJpbmcoc3RybS5vdXRwdXQsIG5leHRfb3V0X3V0ZjgpO1xuXG4gICAgICAgICAgLy8gbW92ZSB0YWlsICYgcmVhbGlnbiBjb3VudGVyc1xuICAgICAgICAgIHN0cm0ubmV4dF9vdXQgPSB0YWlsO1xuICAgICAgICAgIHN0cm0uYXZhaWxfb3V0ID0gY2h1bmtTaXplIC0gdGFpbDtcbiAgICAgICAgICBpZiAodGFpbCkgc3RybS5vdXRwdXQuc2V0KHN0cm0ub3V0cHV0LnN1YmFycmF5KG5leHRfb3V0X3V0ZjgsIG5leHRfb3V0X3V0ZjggKyB0YWlsKSwgMCk7XG5cbiAgICAgICAgICB0aGlzLm9uRGF0YSh1dGY4c3RyKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25EYXRhKHN0cm0ub3V0cHV0Lmxlbmd0aCA9PT0gc3RybS5uZXh0X291dCA/IHN0cm0ub3V0cHV0IDogc3RybS5vdXRwdXQuc3ViYXJyYXkoMCwgc3RybS5uZXh0X291dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTXVzdCByZXBlYXQgaXRlcmF0aW9uIGlmIG91dCBidWZmZXIgaXMgZnVsbFxuICAgIGlmIChzdGF0dXMgPT09IFpfT0sgJiYgbGFzdF9hdmFpbF9vdXQgPT09IDApIGNvbnRpbnVlO1xuXG4gICAgLy8gRmluYWxpemUgaWYgZW5kIG9mIHN0cmVhbSByZWFjaGVkLlxuICAgIGlmIChzdGF0dXMgPT09IFpfU1RSRUFNX0VORCkge1xuICAgICAgc3RhdHVzID0gemxpYl9pbmZsYXRlLmluZmxhdGVFbmQodGhpcy5zdHJtKTtcbiAgICAgIHRoaXMub25FbmQoc3RhdHVzKTtcbiAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0cm0uYXZhaWxfaW4gPT09IDApIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbi8qKlxuICogSW5mbGF0ZSNvbkRhdGEoY2h1bmspIC0+IFZvaWRcbiAqIC0gY2h1bmsgKFVpbnQ4QXJyYXl8U3RyaW5nKTogb3V0cHV0IGRhdGEuIFdoZW4gc3RyaW5nIG91dHB1dCByZXF1ZXN0ZWQsXG4gKiAgIGVhY2ggY2h1bmsgd2lsbCBiZSBzdHJpbmcuXG4gKlxuICogQnkgZGVmYXVsdCwgc3RvcmVzIGRhdGEgYmxvY2tzIGluIGBjaHVua3NbXWAgcHJvcGVydHkgYW5kIGdsdWVcbiAqIHRob3NlIGluIGBvbkVuZGAuIE92ZXJyaWRlIHRoaXMgaGFuZGxlciwgaWYgeW91IG5lZWQgYW5vdGhlciBiZWhhdmlvdXIuXG4gKiovXG5JbmZsYXRlLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgdGhpcy5jaHVua3MucHVzaChjaHVuayk7XG59O1xuXG5cbi8qKlxuICogSW5mbGF0ZSNvbkVuZChzdGF0dXMpIC0+IFZvaWRcbiAqIC0gc3RhdHVzIChOdW1iZXIpOiBpbmZsYXRlIHN0YXR1cy4gMCAoWl9PSykgb24gc3VjY2VzcyxcbiAqICAgb3RoZXIgaWYgbm90LlxuICpcbiAqIENhbGxlZCBlaXRoZXIgYWZ0ZXIgeW91IHRlbGwgaW5mbGF0ZSB0aGF0IHRoZSBpbnB1dCBzdHJlYW0gaXNcbiAqIGNvbXBsZXRlIChaX0ZJTklTSCkuIEJ5IGRlZmF1bHQgLSBqb2luIGNvbGxlY3RlZCBjaHVua3MsXG4gKiBmcmVlIG1lbW9yeSBhbmQgZmlsbCBgcmVzdWx0c2AgLyBgZXJyYCBwcm9wZXJ0aWVzLlxuICoqL1xuSW5mbGF0ZS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIC8vIE9uIHN1Y2Nlc3MgLSBqb2luXG4gIGlmIChzdGF0dXMgPT09IFpfT0spIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRvID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLmNodW5rcy5qb2luKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXN1bHQgPSB1dGlscy5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5jaHVua3MgPSBbXTtcbiAgdGhpcy5lcnIgPSBzdGF0dXM7XG4gIHRoaXMubXNnID0gdGhpcy5zdHJtLm1zZztcbn07XG5cblxuLyoqXG4gKiBpbmZsYXRlKGRhdGFbLCBvcHRpb25zXSkgLT4gVWludDhBcnJheXxTdHJpbmdcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheUJ1ZmZlcik6IGlucHV0IGRhdGEgdG8gZGVjb21wcmVzcy5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBpbmZsYXRlIG9wdGlvbnMuXG4gKlxuICogRGVjb21wcmVzcyBgZGF0YWAgd2l0aCBpbmZsYXRlL3VuZ3ppcCBhbmQgYG9wdGlvbnNgLiBBdXRvZGV0ZWN0XG4gKiBmb3JtYXQgdmlhIHdyYXBwZXIgaGVhZGVyIGJ5IGRlZmF1bHQuIFRoYXQncyB3aHkgd2UgZG9uJ3QgcHJvdmlkZVxuICogc2VwYXJhdGUgYHVuZ3ppcGAgbWV0aG9kLlxuICpcbiAqIFN1cHBvcnRlZCBvcHRpb25zIGFyZTpcbiAqXG4gKiAtIHdpbmRvd0JpdHNcbiAqXG4gKiBbaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkXShodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWQpXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBTdWdhciAob3B0aW9ucyk6XG4gKlxuICogLSBgcmF3YCAoQm9vbGVhbikgLSBzYXkgdGhhdCB3ZSB3b3JrIHdpdGggcmF3IHN0cmVhbSwgaWYgeW91IGRvbid0IHdpc2ggdG8gc3BlY2lmeVxuICogICBuZWdhdGl2ZSB3aW5kb3dCaXRzIGltcGxpY2l0bHkuXG4gKiAtIGB0b2AgKFN0cmluZykgLSBpZiBlcXVhbCB0byAnc3RyaW5nJywgdGhlbiByZXN1bHQgd2lsbCBiZSBjb252ZXJ0ZWRcbiAqICAgZnJvbSB1dGY4IHRvIHV0ZjE2IChqYXZhc2NyaXB0KSBzdHJpbmcuIFdoZW4gc3RyaW5nIG91dHB1dCByZXF1ZXN0ZWQsXG4gKiAgIGNodW5rIGxlbmd0aCBjYW4gZGlmZmVyIGZyb20gYGNodW5rU2l6ZWAsIGRlcGVuZGluZyBvbiBjb250ZW50LlxuICpcbiAqXG4gKiAjIyMjIyBFeGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHBha28gPSByZXF1aXJlKCdwYWtvJyk7XG4gKiBjb25zdCBpbnB1dCA9IHBha28uZGVmbGF0ZShuZXcgVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKSk7XG4gKiBsZXQgb3V0cHV0O1xuICpcbiAqIHRyeSB7XG4gKiAgIG91dHB1dCA9IHBha28uaW5mbGF0ZShpbnB1dCk7XG4gKiB9IGNhdGNoIChlcnIpIHtcbiAqICAgY29uc29sZS5sb2coZXJyKTtcbiAqIH1cbiAqIGBgYFxuICoqL1xuZnVuY3Rpb24gaW5mbGF0ZShpbnB1dCwgb3B0aW9ucykge1xuICBjb25zdCBpbmZsYXRvciA9IG5ldyBJbmZsYXRlKG9wdGlvbnMpO1xuXG4gIGluZmxhdG9yLnB1c2goaW5wdXQpO1xuXG4gIC8vIFRoYXQgd2lsbCBuZXZlciBoYXBwZW5zLCBpZiB5b3UgZG9uJ3QgY2hlYXQgd2l0aCBvcHRpb25zIDopXG4gIGlmIChpbmZsYXRvci5lcnIpIHRocm93IGluZmxhdG9yLm1zZyB8fCBtc2dbaW5mbGF0b3IuZXJyXTtcblxuICByZXR1cm4gaW5mbGF0b3IucmVzdWx0O1xufVxuXG5cbi8qKlxuICogaW5mbGF0ZVJhdyhkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXIpOiBpbnB1dCBkYXRhIHRvIGRlY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgaW5mbGF0ZSBvcHRpb25zLlxuICpcbiAqIFRoZSBzYW1lIGFzIFtbaW5mbGF0ZV1dLCBidXQgY3JlYXRlcyByYXcgZGF0YSwgd2l0aG91dCB3cmFwcGVyXG4gKiAoaGVhZGVyIGFuZCBhZGxlcjMyIGNyYykuXG4gKiovXG5mdW5jdGlvbiBpbmZsYXRlUmF3KGlucHV0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLnJhdyA9IHRydWU7XG4gIHJldHVybiBpbmZsYXRlKGlucHV0LCBvcHRpb25zKTtcbn1cblxuXG4vKipcbiAqIHVuZ3ppcChkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXIpOiBpbnB1dCBkYXRhIHRvIGRlY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgaW5mbGF0ZSBvcHRpb25zLlxuICpcbiAqIEp1c3Qgc2hvcnRjdXQgdG8gW1tpbmZsYXRlXV0sIGJlY2F1c2UgaXQgYXV0b2RldGVjdHMgZm9ybWF0XG4gKiBieSBoZWFkZXIuY29udGVudC4gRG9uZSBmb3IgY29udmVuaWVuY2UuXG4gKiovXG5cblxubW9kdWxlLmV4cG9ydHMuSW5mbGF0ZSA9IEluZmxhdGU7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlID0gaW5mbGF0ZTtcbm1vZHVsZS5leHBvcnRzLmluZmxhdGVSYXcgPSBpbmZsYXRlUmF3O1xubW9kdWxlLmV4cG9ydHMudW5nemlwID0gaW5mbGF0ZTtcbm1vZHVsZS5leHBvcnRzLmNvbnN0YW50cyA9IHJlcXVpcmUoJy4vemxpYi9jb25zdGFudHMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG5jb25zdCBfaGFzID0gKG9iaiwga2V5KSA9PiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMuYXNzaWduID0gZnVuY3Rpb24gKG9iaiAvKmZyb20xLCBmcm9tMiwgZnJvbTMsIC4uLiovKSB7XG4gIGNvbnN0IHNvdXJjZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB3aGlsZSAoc291cmNlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKCFzb3VyY2UpIHsgY29udGludWU7IH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzb3VyY2UgKyAnbXVzdCBiZSBub24tb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwIGluIHNvdXJjZSkge1xuICAgICAgaWYgKF9oYXMoc291cmNlLCBwKSkge1xuICAgICAgICBvYmpbcF0gPSBzb3VyY2VbcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8gSm9pbiBhcnJheSBvZiBjaHVua3MgdG8gc2luZ2xlIGFycmF5LlxubW9kdWxlLmV4cG9ydHMuZmxhdHRlbkNodW5rcyA9IChjaHVua3MpID0+IHtcbiAgLy8gY2FsY3VsYXRlIGRhdGEgbGVuZ3RoXG4gIGxldCBsZW4gPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gY2h1bmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxlbiArPSBjaHVua3NbaV0ubGVuZ3RoO1xuICB9XG5cbiAgLy8gam9pbiBjaHVua3NcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcblxuICBmb3IgKGxldCBpID0gMCwgcG9zID0gMCwgbCA9IGNodW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY2h1bmsgPSBjaHVua3NbaV07XG4gICAgcmVzdWx0LnNldChjaHVuaywgcG9zKTtcbiAgICBwb3MgKz0gY2h1bmsubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBTdHJpbmcgZW5jb2RlL2RlY29kZSBoZWxwZXJzXG4ndXNlIHN0cmljdCc7XG5cblxuLy8gUXVpY2sgY2hlY2sgaWYgd2UgY2FuIHVzZSBmYXN0IGFycmF5IHRvIGJpbiBzdHJpbmcgY29udmVyc2lvblxuLy9cbi8vIC0gYXBwbHkoQXJyYXkpIGNhbiBmYWlsIG9uIEFuZHJvaWQgMi4yXG4vLyAtIGFwcGx5KFVpbnQ4QXJyYXkpIGNhbiBmYWlsIG9uIGlPUyA1LjEgU2FmYXJpXG4vL1xubGV0IFNUUl9BUFBMWV9VSUFfT0sgPSB0cnVlO1xuXG50cnkgeyBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KDEpKTsgfSBjYXRjaCAoX18pIHsgU1RSX0FQUExZX1VJQV9PSyA9IGZhbHNlOyB9XG5cblxuLy8gVGFibGUgd2l0aCB1dGY4IGxlbmd0aHMgKGNhbGN1bGF0ZWQgYnkgZmlyc3QgYnl0ZSBvZiBzZXF1ZW5jZSlcbi8vIE5vdGUsIHRoYXQgNSAmIDYtYnl0ZSB2YWx1ZXMgYW5kIHNvbWUgNC1ieXRlIHZhbHVlcyBjYW4gbm90IGJlIHJlcHJlc2VudGVkIGluIEpTLFxuLy8gYmVjYXVzZSBtYXggcG9zc2libGUgY29kZXBvaW50IGlzIDB4MTBmZmZmXG5jb25zdCBfdXRmOGxlbiA9IG5ldyBVaW50OEFycmF5KDI1Nik7XG5mb3IgKGxldCBxID0gMDsgcSA8IDI1NjsgcSsrKSB7XG4gIF91dGY4bGVuW3FdID0gKHEgPj0gMjUyID8gNiA6IHEgPj0gMjQ4ID8gNSA6IHEgPj0gMjQwID8gNCA6IHEgPj0gMjI0ID8gMyA6IHEgPj0gMTkyID8gMiA6IDEpO1xufVxuX3V0ZjhsZW5bMjU0XSA9IF91dGY4bGVuWzI1NF0gPSAxOyAvLyBJbnZhbGlkIHNlcXVlbmNlIHN0YXJ0XG5cblxuLy8gY29udmVydCBzdHJpbmcgdG8gYXJyYXkgKHR5cGVkLCB3aGVuIHBvc3NpYmxlKVxubW9kdWxlLmV4cG9ydHMuc3RyaW5nMmJ1ZiA9IChzdHIpID0+IHtcbiAgaWYgKHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyAmJiBUZXh0RW5jb2Rlci5wcm90b3R5cGUuZW5jb2RlKSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzdHIpO1xuICB9XG5cbiAgbGV0IGJ1ZiwgYywgYzIsIG1fcG9zLCBpLCBzdHJfbGVuID0gc3RyLmxlbmd0aCwgYnVmX2xlbiA9IDA7XG5cbiAgLy8gY291bnQgYmluYXJ5IHNpemVcbiAgZm9yIChtX3BvcyA9IDA7IG1fcG9zIDwgc3RyX2xlbjsgbV9wb3MrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChtX3Bvcyk7XG4gICAgaWYgKChjICYgMHhmYzAwKSA9PT0gMHhkODAwICYmIChtX3BvcyArIDEgPCBzdHJfbGVuKSkge1xuICAgICAgYzIgPSBzdHIuY2hhckNvZGVBdChtX3BvcyArIDEpO1xuICAgICAgaWYgKChjMiAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICBjID0gMHgxMDAwMCArICgoYyAtIDB4ZDgwMCkgPDwgMTApICsgKGMyIC0gMHhkYzAwKTtcbiAgICAgICAgbV9wb3MrKztcbiAgICAgIH1cbiAgICB9XG4gICAgYnVmX2xlbiArPSBjIDwgMHg4MCA/IDEgOiBjIDwgMHg4MDAgPyAyIDogYyA8IDB4MTAwMDAgPyAzIDogNDtcbiAgfVxuXG4gIC8vIGFsbG9jYXRlIGJ1ZmZlclxuICBidWYgPSBuZXcgVWludDhBcnJheShidWZfbGVuKTtcblxuICAvLyBjb252ZXJ0XG4gIGZvciAoaSA9IDAsIG1fcG9zID0gMDsgaSA8IGJ1Zl9sZW47IG1fcG9zKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQobV9wb3MpO1xuICAgIGlmICgoYyAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJiAobV9wb3MgKyAxIDwgc3RyX2xlbikpIHtcbiAgICAgIGMyID0gc3RyLmNoYXJDb2RlQXQobV9wb3MgKyAxKTtcbiAgICAgIGlmICgoYzIgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKGMgLSAweGQ4MDApIDw8IDEwKSArIChjMiAtIDB4ZGMwMCk7XG4gICAgICAgIG1fcG9zKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgLyogb25lIGJ5dGUgKi9cbiAgICAgIGJ1ZltpKytdID0gYztcbiAgICB9IGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgLyogdHdvIGJ5dGVzICovXG4gICAgICBidWZbaSsrXSA9IDB4QzAgfCAoYyA+Pj4gNik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyAmIDB4M2YpO1xuICAgIH0gZWxzZSBpZiAoYyA8IDB4MTAwMDApIHtcbiAgICAgIC8qIHRocmVlIGJ5dGVzICovXG4gICAgICBidWZbaSsrXSA9IDB4RTAgfCAoYyA+Pj4gMTIpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgPj4+IDYgJiAweDNmKTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjICYgMHgzZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIGZvdXIgYnl0ZXMgKi9cbiAgICAgIGJ1ZltpKytdID0gMHhmMCB8IChjID4+PiAxOCk7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyA+Pj4gMTIgJiAweDNmKTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjID4+PiA2ICYgMHgzZik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyAmIDB4M2YpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWY7XG59O1xuXG4vLyBIZWxwZXJcbmNvbnN0IGJ1ZjJiaW5zdHJpbmcgPSAoYnVmLCBsZW4pID0+IHtcbiAgLy8gT24gQ2hyb21lLCB0aGUgYXJndW1lbnRzIGluIGEgZnVuY3Rpb24gY2FsbCB0aGF0IGFyZSBhbGxvd2VkIGlzIGA2NTUzNGAuXG4gIC8vIElmIHRoZSBsZW5ndGggb2YgdGhlIGJ1ZmZlciBpcyBzbWFsbGVyIHRoYW4gdGhhdCwgd2UgY2FuIHVzZSB0aGlzIG9wdGltaXphdGlvbixcbiAgLy8gb3RoZXJ3aXNlIHdlIHdpbGwgdGFrZSBhIHNsb3dlciBwYXRoLlxuICBpZiAobGVuIDwgNjU1MzQpIHtcbiAgICBpZiAoYnVmLnN1YmFycmF5ICYmIFNUUl9BUFBMWV9VSUFfT0spIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGJ1Zi5sZW5ndGggPT09IGxlbiA/IGJ1ZiA6IGJ1Zi5zdWJhcnJheSgwLCBsZW4pKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vIGNvbnZlcnQgYXJyYXkgdG8gc3RyaW5nXG5tb2R1bGUuZXhwb3J0cy5idWYyc3RyaW5nID0gKGJ1ZiwgbWF4KSA9PiB7XG4gIGNvbnN0IGxlbiA9IG1heCB8fCBidWYubGVuZ3RoO1xuXG4gIGlmICh0eXBlb2YgVGV4dERlY29kZXIgPT09ICdmdW5jdGlvbicgJiYgVGV4dERlY29kZXIucHJvdG90eXBlLmRlY29kZSkge1xuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUoYnVmLnN1YmFycmF5KDAsIG1heCkpO1xuICB9XG5cbiAgbGV0IGksIG91dDtcblxuICAvLyBSZXNlcnZlIG1heCBwb3NzaWJsZSBsZW5ndGggKDIgd29yZHMgcGVyIGNoYXIpXG4gIC8vIE5COiBieSB1bmtub3duIHJlYXNvbnMsIEFycmF5IGlzIHNpZ25pZmljYW50bHkgZmFzdGVyIGZvclxuICAvLyAgICAgU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseSB0aGFuIFVpbnQxNkFycmF5LlxuICBjb25zdCB1dGYxNmJ1ZiA9IG5ldyBBcnJheShsZW4gKiAyKTtcblxuICBmb3IgKG91dCA9IDAsIGkgPSAwOyBpIDwgbGVuOykge1xuICAgIGxldCBjID0gYnVmW2krK107XG4gICAgLy8gcXVpY2sgcHJvY2VzcyBhc2NpaVxuICAgIGlmIChjIDwgMHg4MCkgeyB1dGYxNmJ1ZltvdXQrK10gPSBjOyBjb250aW51ZTsgfVxuXG4gICAgbGV0IGNfbGVuID0gX3V0ZjhsZW5bY107XG4gICAgLy8gc2tpcCA1ICYgNiBieXRlIGNvZGVzXG4gICAgaWYgKGNfbGVuID4gNCkgeyB1dGYxNmJ1ZltvdXQrK10gPSAweGZmZmQ7IGkgKz0gY19sZW4gLSAxOyBjb250aW51ZTsgfVxuXG4gICAgLy8gYXBwbHkgbWFzayBvbiBmaXJzdCBieXRlXG4gICAgYyAmPSBjX2xlbiA9PT0gMiA/IDB4MWYgOiBjX2xlbiA9PT0gMyA/IDB4MGYgOiAweDA3O1xuICAgIC8vIGpvaW4gdGhlIHJlc3RcbiAgICB3aGlsZSAoY19sZW4gPiAxICYmIGkgPCBsZW4pIHtcbiAgICAgIGMgPSAoYyA8PCA2KSB8IChidWZbaSsrXSAmIDB4M2YpO1xuICAgICAgY19sZW4tLTtcbiAgICB9XG5cbiAgICAvLyB0ZXJtaW5hdGVkIGJ5IGVuZCBvZiBzdHJpbmc/XG4gICAgaWYgKGNfbGVuID4gMSkgeyB1dGYxNmJ1ZltvdXQrK10gPSAweGZmZmQ7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoYyA8IDB4MTAwMDApIHtcbiAgICAgIHV0ZjE2YnVmW291dCsrXSA9IGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGMgLT0gMHgxMDAwMDtcbiAgICAgIHV0ZjE2YnVmW291dCsrXSA9IDB4ZDgwMCB8ICgoYyA+PiAxMCkgJiAweDNmZik7XG4gICAgICB1dGYxNmJ1ZltvdXQrK10gPSAweGRjMDAgfCAoYyAmIDB4M2ZmKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmMmJpbnN0cmluZyh1dGYxNmJ1Ziwgb3V0KTtcbn07XG5cblxuLy8gQ2FsY3VsYXRlIG1heCBwb3NzaWJsZSBwb3NpdGlvbiBpbiB1dGY4IGJ1ZmZlcixcbi8vIHRoYXQgd2lsbCBub3QgYnJlYWsgc2VxdWVuY2UuIElmIHRoYXQncyBub3QgcG9zc2libGVcbi8vIC0gKHZlcnkgc21hbGwgbGltaXRzKSByZXR1cm4gbWF4IHNpemUgYXMgaXMuXG4vL1xuLy8gYnVmW10gLSB1dGY4IGJ5dGVzIGFycmF5XG4vLyBtYXggICAtIGxlbmd0aCBsaW1pdCAobWFuZGF0b3J5KTtcbm1vZHVsZS5leHBvcnRzLnV0Zjhib3JkZXIgPSAoYnVmLCBtYXgpID0+IHtcblxuICBtYXggPSBtYXggfHwgYnVmLmxlbmd0aDtcbiAgaWYgKG1heCA+IGJ1Zi5sZW5ndGgpIHsgbWF4ID0gYnVmLmxlbmd0aDsgfVxuXG4gIC8vIGdvIGJhY2sgZnJvbSBsYXN0IHBvc2l0aW9uLCB1bnRpbCBzdGFydCBvZiBzZXF1ZW5jZSBmb3VuZFxuICBsZXQgcG9zID0gbWF4IC0gMTtcbiAgd2hpbGUgKHBvcyA+PSAwICYmIChidWZbcG9zXSAmIDB4QzApID09PSAweDgwKSB7IHBvcy0tOyB9XG5cbiAgLy8gVmVyeSBzbWFsbCBhbmQgYnJva2VuIHNlcXVlbmNlLFxuICAvLyByZXR1cm4gbWF4LCBiZWNhdXNlIHdlIHNob3VsZCByZXR1cm4gc29tZXRoaW5nIGFueXdheS5cbiAgaWYgKHBvcyA8IDApIHsgcmV0dXJuIG1heDsgfVxuXG4gIC8vIElmIHdlIGNhbWUgdG8gc3RhcnQgb2YgYnVmZmVyIC0gdGhhdCBtZWFucyBidWZmZXIgaXMgdG9vIHNtYWxsLFxuICAvLyByZXR1cm4gbWF4IHRvby5cbiAgaWYgKHBvcyA9PT0gMCkgeyByZXR1cm4gbWF4OyB9XG5cbiAgcmV0dXJuIChwb3MgKyBfdXRmOGxlbltidWZbcG9zXV0gPiBtYXgpID8gcG9zIDogbWF4O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gTm90ZTogYWRsZXIzMiB0YWtlcyAxMiUgZm9yIGxldmVsIDAgYW5kIDIlIGZvciBsZXZlbCA2LlxuLy8gSXQgaXNuJ3Qgd29ydGggaXQgdG8gbWFrZSBhZGRpdGlvbmFsIG9wdGltaXphdGlvbnMgYXMgaW4gb3JpZ2luYWwuXG4vLyBTbWFsbCBzaXplIGlzIHByZWZlcmFibGUuXG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuY29uc3QgYWRsZXIzMiA9IChhZGxlciwgYnVmLCBsZW4sIHBvcykgPT4ge1xuICBsZXQgczEgPSAoYWRsZXIgJiAweGZmZmYpIHwwLFxuICAgICAgczIgPSAoKGFkbGVyID4+PiAxNikgJiAweGZmZmYpIHwwLFxuICAgICAgbiA9IDA7XG5cbiAgd2hpbGUgKGxlbiAhPT0gMCkge1xuICAgIC8vIFNldCBsaW1pdCB+IHR3aWNlIGxlc3MgdGhhbiA1NTUyLCB0byBrZWVwXG4gICAgLy8gczIgaW4gMzEtYml0cywgYmVjYXVzZSB3ZSBmb3JjZSBzaWduZWQgaW50cy5cbiAgICAvLyBpbiBvdGhlciBjYXNlICU9IHdpbGwgZmFpbC5cbiAgICBuID0gbGVuID4gMjAwMCA/IDIwMDAgOiBsZW47XG4gICAgbGVuIC09IG47XG5cbiAgICBkbyB7XG4gICAgICBzMSA9IChzMSArIGJ1Zltwb3MrK10pIHwwO1xuICAgICAgczIgPSAoczIgKyBzMSkgfDA7XG4gICAgfSB3aGlsZSAoLS1uKTtcblxuICAgIHMxICU9IDY1NTIxO1xuICAgIHMyICU9IDY1NTIxO1xuICB9XG5cbiAgcmV0dXJuIChzMSB8IChzMiA8PCAxNikpIHwwO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkbGVyMzI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyogQWxsb3dlZCBmbHVzaCB2YWx1ZXM7IHNlZSBkZWZsYXRlKCkgYW5kIGluZmxhdGUoKSBiZWxvdyBmb3IgZGV0YWlscyAqL1xuICBaX05PX0ZMVVNIOiAgICAgICAgIDAsXG4gIFpfUEFSVElBTF9GTFVTSDogICAgMSxcbiAgWl9TWU5DX0ZMVVNIOiAgICAgICAyLFxuICBaX0ZVTExfRkxVU0g6ICAgICAgIDMsXG4gIFpfRklOSVNIOiAgICAgICAgICAgNCxcbiAgWl9CTE9DSzogICAgICAgICAgICA1LFxuICBaX1RSRUVTOiAgICAgICAgICAgIDYsXG5cbiAgLyogUmV0dXJuIGNvZGVzIGZvciB0aGUgY29tcHJlc3Npb24vZGVjb21wcmVzc2lvbiBmdW5jdGlvbnMuIE5lZ2F0aXZlIHZhbHVlc1xuICAqIGFyZSBlcnJvcnMsIHBvc2l0aXZlIHZhbHVlcyBhcmUgdXNlZCBmb3Igc3BlY2lhbCBidXQgbm9ybWFsIGV2ZW50cy5cbiAgKi9cbiAgWl9PSzogICAgICAgICAgICAgICAwLFxuICBaX1NUUkVBTV9FTkQ6ICAgICAgIDEsXG4gIFpfTkVFRF9ESUNUOiAgICAgICAgMixcbiAgWl9FUlJOTzogICAgICAgICAgIC0xLFxuICBaX1NUUkVBTV9FUlJPUjogICAgLTIsXG4gIFpfREFUQV9FUlJPUjogICAgICAtMyxcbiAgWl9NRU1fRVJST1I6ICAgICAgIC00LFxuICBaX0JVRl9FUlJPUjogICAgICAgLTUsXG4gIC8vWl9WRVJTSU9OX0VSUk9SOiAtNixcblxuICAvKiBjb21wcmVzc2lvbiBsZXZlbHMgKi9cbiAgWl9OT19DT01QUkVTU0lPTjogICAgICAgICAwLFxuICBaX0JFU1RfU1BFRUQ6ICAgICAgICAgICAgIDEsXG4gIFpfQkVTVF9DT01QUkVTU0lPTjogICAgICAgOSxcbiAgWl9ERUZBVUxUX0NPTVBSRVNTSU9OOiAgIC0xLFxuXG5cbiAgWl9GSUxURVJFRDogICAgICAgICAgICAgICAxLFxuICBaX0hVRkZNQU5fT05MWTogICAgICAgICAgIDIsXG4gIFpfUkxFOiAgICAgICAgICAgICAgICAgICAgMyxcbiAgWl9GSVhFRDogICAgICAgICAgICAgICAgICA0LFxuICBaX0RFRkFVTFRfU1RSQVRFR1k6ICAgICAgIDAsXG5cbiAgLyogUG9zc2libGUgdmFsdWVzIG9mIHRoZSBkYXRhX3R5cGUgZmllbGQgKHRob3VnaCBzZWUgaW5mbGF0ZSgpKSAqL1xuICBaX0JJTkFSWTogICAgICAgICAgICAgICAgIDAsXG4gIFpfVEVYVDogICAgICAgICAgICAgICAgICAgMSxcbiAgLy9aX0FTQ0lJOiAgICAgICAgICAgICAgICAxLCAvLyA9IFpfVEVYVCAoZGVwcmVjYXRlZClcbiAgWl9VTktOT1dOOiAgICAgICAgICAgICAgICAyLFxuXG4gIC8qIFRoZSBkZWZsYXRlIGNvbXByZXNzaW9uIG1ldGhvZCAqL1xuICBaX0RFRkxBVEVEOiAgICAgICAgICAgICAgIDhcbiAgLy9aX05VTEw6ICAgICAgICAgICAgICAgICBudWxsIC8vIFVzZSAtMSBvciBudWxsIGlubGluZSwgZGVwZW5kaW5nIG9uIHZhciB0eXBlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBOb3RlOiB3ZSBjYW4ndCBnZXQgc2lnbmlmaWNhbnQgc3BlZWQgYm9vc3QgaGVyZS5cbi8vIFNvIHdyaXRlIGNvZGUgdG8gbWluaW1pemUgc2l6ZSAtIG5vIHByZWdlbmVyYXRlZCB0YWJsZXNcbi8vIGFuZCBhcnJheSB0b29scyBkZXBlbmRlbmNpZXMuXG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuLy8gVXNlIG9yZGluYXJ5IGFycmF5LCBzaW5jZSB1bnR5cGVkIG1ha2VzIG5vIGJvb3N0IGhlcmVcbmNvbnN0IG1ha2VUYWJsZSA9ICgpID0+IHtcbiAgbGV0IGMsIHRhYmxlID0gW107XG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCAyNTY7IG4rKykge1xuICAgIGMgPSBuO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjID0gKChjICYgMSkgPyAoMHhFREI4ODMyMCBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuICAgIH1cbiAgICB0YWJsZVtuXSA9IGM7XG4gIH1cblxuICByZXR1cm4gdGFibGU7XG59O1xuXG4vLyBDcmVhdGUgdGFibGUgb24gbG9hZC4gSnVzdCAyNTUgc2lnbmVkIGxvbmdzLiBOb3QgYSBwcm9ibGVtLlxuY29uc3QgY3JjVGFibGUgPSBuZXcgVWludDMyQXJyYXkobWFrZVRhYmxlKCkpO1xuXG5cbmNvbnN0IGNyYzMyID0gKGNyYywgYnVmLCBsZW4sIHBvcykgPT4ge1xuICBjb25zdCB0ID0gY3JjVGFibGU7XG4gIGNvbnN0IGVuZCA9IHBvcyArIGxlbjtcblxuICBjcmMgXj0gLTE7XG5cbiAgZm9yIChsZXQgaSA9IHBvczsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY3JjID0gKGNyYyA+Pj4gOCkgXiB0WyhjcmMgXiBidWZbaV0pICYgMHhGRl07XG4gIH1cblxuICByZXR1cm4gKGNyYyBeICgtMSkpOyAvLyA+Pj4gMDtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjcmMzMjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5jb25zdCB7IF90cl9pbml0LCBfdHJfc3RvcmVkX2Jsb2NrLCBfdHJfZmx1c2hfYmxvY2ssIF90cl90YWxseSwgX3RyX2FsaWduIH0gPSByZXF1aXJlKCcuL3RyZWVzJyk7XG5jb25zdCBhZGxlcjMyID0gcmVxdWlyZSgnLi9hZGxlcjMyJyk7XG5jb25zdCBjcmMzMiAgID0gcmVxdWlyZSgnLi9jcmMzMicpO1xuY29uc3QgbXNnICAgICA9IHJlcXVpcmUoJy4vbWVzc2FnZXMnKTtcblxuLyogUHVibGljIGNvbnN0YW50cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbmNvbnN0IHtcbiAgWl9OT19GTFVTSCwgWl9QQVJUSUFMX0ZMVVNILCBaX0ZVTExfRkxVU0gsIFpfRklOSVNILCBaX0JMT0NLLFxuICBaX09LLCBaX1NUUkVBTV9FTkQsIFpfU1RSRUFNX0VSUk9SLCBaX0RBVEFfRVJST1IsIFpfQlVGX0VSUk9SLFxuICBaX0RFRkFVTFRfQ09NUFJFU1NJT04sXG4gIFpfRklMVEVSRUQsIFpfSFVGRk1BTl9PTkxZLCBaX1JMRSwgWl9GSVhFRCwgWl9ERUZBVUxUX1NUUkFURUdZLFxuICBaX1VOS05PV04sXG4gIFpfREVGTEFURURcbn0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbmNvbnN0IE1BWF9NRU1fTEVWRUwgPSA5O1xuLyogTWF4aW11bSB2YWx1ZSBmb3IgbWVtTGV2ZWwgaW4gZGVmbGF0ZUluaXQyICovXG5jb25zdCBNQVhfV0JJVFMgPSAxNTtcbi8qIDMySyBMWjc3IHdpbmRvdyAqL1xuY29uc3QgREVGX01FTV9MRVZFTCA9IDg7XG5cblxuY29uc3QgTEVOR1RIX0NPREVTICA9IDI5O1xuLyogbnVtYmVyIG9mIGxlbmd0aCBjb2Rlcywgbm90IGNvdW50aW5nIHRoZSBzcGVjaWFsIEVORF9CTE9DSyBjb2RlICovXG5jb25zdCBMSVRFUkFMUyAgICAgID0gMjU2O1xuLyogbnVtYmVyIG9mIGxpdGVyYWwgYnl0ZXMgMC4uMjU1ICovXG5jb25zdCBMX0NPREVTICAgICAgID0gTElURVJBTFMgKyAxICsgTEVOR1RIX0NPREVTO1xuLyogbnVtYmVyIG9mIExpdGVyYWwgb3IgTGVuZ3RoIGNvZGVzLCBpbmNsdWRpbmcgdGhlIEVORF9CTE9DSyBjb2RlICovXG5jb25zdCBEX0NPREVTICAgICAgID0gMzA7XG4vKiBudW1iZXIgb2YgZGlzdGFuY2UgY29kZXMgKi9cbmNvbnN0IEJMX0NPREVTICAgICAgPSAxOTtcbi8qIG51bWJlciBvZiBjb2RlcyB1c2VkIHRvIHRyYW5zZmVyIHRoZSBiaXQgbGVuZ3RocyAqL1xuY29uc3QgSEVBUF9TSVpFICAgICA9IDIgKiBMX0NPREVTICsgMTtcbi8qIG1heGltdW0gaGVhcCBzaXplICovXG5jb25zdCBNQVhfQklUUyAgPSAxNTtcbi8qIEFsbCBjb2RlcyBtdXN0IG5vdCBleGNlZWQgTUFYX0JJVFMgYml0cyAqL1xuXG5jb25zdCBNSU5fTUFUQ0ggPSAzO1xuY29uc3QgTUFYX01BVENIID0gMjU4O1xuY29uc3QgTUlOX0xPT0tBSEVBRCA9IChNQVhfTUFUQ0ggKyBNSU5fTUFUQ0ggKyAxKTtcblxuY29uc3QgUFJFU0VUX0RJQ1QgPSAweDIwO1xuXG5jb25zdCBJTklUX1NUQVRFICAgID0gIDQyOyAgICAvKiB6bGliIGhlYWRlciAtPiBCVVNZX1NUQVRFICovXG4vLyNpZmRlZiBHWklQXG5jb25zdCBHWklQX1NUQVRFICAgID0gIDU3OyAgICAvKiBnemlwIGhlYWRlciAtPiBCVVNZX1NUQVRFIHwgRVhUUkFfU1RBVEUgKi9cbi8vI2VuZGlmXG5jb25zdCBFWFRSQV9TVEFURSAgID0gIDY5OyAgICAvKiBnemlwIGV4dHJhIGJsb2NrIC0+IE5BTUVfU1RBVEUgKi9cbmNvbnN0IE5BTUVfU1RBVEUgICAgPSAgNzM7ICAgIC8qIGd6aXAgZmlsZSBuYW1lIC0+IENPTU1FTlRfU1RBVEUgKi9cbmNvbnN0IENPTU1FTlRfU1RBVEUgPSAgOTE7ICAgIC8qIGd6aXAgY29tbWVudCAtPiBIQ1JDX1NUQVRFICovXG5jb25zdCBIQ1JDX1NUQVRFICAgID0gMTAzOyAgICAvKiBnemlwIGhlYWRlciBDUkMgLT4gQlVTWV9TVEFURSAqL1xuY29uc3QgQlVTWV9TVEFURSAgICA9IDExMzsgICAgLyogZGVmbGF0ZSAtPiBGSU5JU0hfU1RBVEUgKi9cbmNvbnN0IEZJTklTSF9TVEFURSAgPSA2NjY7ICAgIC8qIHN0cmVhbSBjb21wbGV0ZSAqL1xuXG5jb25zdCBCU19ORUVEX01PUkUgICAgICA9IDE7IC8qIGJsb2NrIG5vdCBjb21wbGV0ZWQsIG5lZWQgbW9yZSBpbnB1dCBvciBtb3JlIG91dHB1dCAqL1xuY29uc3QgQlNfQkxPQ0tfRE9ORSAgICAgPSAyOyAvKiBibG9jayBmbHVzaCBwZXJmb3JtZWQgKi9cbmNvbnN0IEJTX0ZJTklTSF9TVEFSVEVEID0gMzsgLyogZmluaXNoIHN0YXJ0ZWQsIG5lZWQgb25seSBtb3JlIG91dHB1dCBhdCBuZXh0IGRlZmxhdGUgKi9cbmNvbnN0IEJTX0ZJTklTSF9ET05FICAgID0gNDsgLyogZmluaXNoIGRvbmUsIGFjY2VwdCBubyBtb3JlIGlucHV0IG9yIG91dHB1dCAqL1xuXG5jb25zdCBPU19DT0RFID0gMHgwMzsgLy8gVW5peCA6KSAuIERvbid0IGRldGVjdCwgdXNlIHRoaXMgZGVmYXVsdC5cblxuY29uc3QgZXJyID0gKHN0cm0sIGVycm9yQ29kZSkgPT4ge1xuICBzdHJtLm1zZyA9IG1zZ1tlcnJvckNvZGVdO1xuICByZXR1cm4gZXJyb3JDb2RlO1xufTtcblxuY29uc3QgcmFuayA9IChmKSA9PiB7XG4gIHJldHVybiAoKGYpICogMikgLSAoKGYpID4gNCA/IDkgOiAwKTtcbn07XG5cbmNvbnN0IHplcm8gPSAoYnVmKSA9PiB7XG4gIGxldCBsZW4gPSBidWYubGVuZ3RoOyB3aGlsZSAoLS1sZW4gPj0gMCkgeyBidWZbbGVuXSA9IDA7IH1cbn07XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2xpZGUgdGhlIGhhc2ggdGFibGUgd2hlbiBzbGlkaW5nIHRoZSB3aW5kb3cgZG93biAoY291bGQgYmUgYXZvaWRlZCB3aXRoIDMyXG4gKiBiaXQgdmFsdWVzIGF0IHRoZSBleHBlbnNlIG9mIG1lbW9yeSB1c2FnZSkuIFdlIHNsaWRlIGV2ZW4gd2hlbiBsZXZlbCA9PSAwIHRvXG4gKiBrZWVwIHRoZSBoYXNoIHRhYmxlIGNvbnNpc3RlbnQgaWYgd2Ugc3dpdGNoIGJhY2sgdG8gbGV2ZWwgPiAwIGxhdGVyLlxuICovXG5jb25zdCBzbGlkZV9oYXNoID0gKHMpID0+IHtcbiAgbGV0IG4sIG07XG4gIGxldCBwO1xuICBsZXQgd3NpemUgPSBzLndfc2l6ZTtcblxuICBuID0gcy5oYXNoX3NpemU7XG4gIHAgPSBuO1xuICBkbyB7XG4gICAgbSA9IHMuaGVhZFstLXBdO1xuICAgIHMuaGVhZFtwXSA9IChtID49IHdzaXplID8gbSAtIHdzaXplIDogMCk7XG4gIH0gd2hpbGUgKC0tbik7XG4gIG4gPSB3c2l6ZTtcbi8vI2lmbmRlZiBGQVNURVNUXG4gIHAgPSBuO1xuICBkbyB7XG4gICAgbSA9IHMucHJldlstLXBdO1xuICAgIHMucHJldltwXSA9IChtID49IHdzaXplID8gbSAtIHdzaXplIDogMCk7XG4gICAgLyogSWYgbiBpcyBub3Qgb24gYW55IGhhc2ggY2hhaW4sIHByZXZbbl0gaXMgZ2FyYmFnZSBidXRcbiAgICAgKiBpdHMgdmFsdWUgd2lsbCBuZXZlciBiZSB1c2VkLlxuICAgICAqL1xuICB9IHdoaWxlICgtLW4pO1xuLy8jZW5kaWZcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cbmxldCBIQVNIX1pMSUIgPSAocywgcHJldiwgZGF0YSkgPT4gKChwcmV2IDw8IHMuaGFzaF9zaGlmdCkgXiBkYXRhKSAmIHMuaGFzaF9tYXNrO1xuLy8gVGhpcyBoYXNoIGNhdXNlcyBsZXNzIGNvbGxpc2lvbnMsIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGFrby9pc3N1ZXMvMTM1XG4vLyBCdXQgYnJlYWtzIGJpbmFyeSBjb21wYXRpYmlsaXR5XG4vL2xldCBIQVNIX0ZBU1QgPSAocywgcHJldiwgZGF0YSkgPT4gKChwcmV2IDw8IDgpICsgKHByZXYgPj4gOCkgKyAoZGF0YSA8PCA0KSkgJiBzLmhhc2hfbWFzaztcbmxldCBIQVNIID0gSEFTSF9aTElCO1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZsdXNoIGFzIG11Y2ggcGVuZGluZyBvdXRwdXQgYXMgcG9zc2libGUuIEFsbCBkZWZsYXRlKCkgb3V0cHV0LCBleGNlcHQgZm9yXG4gKiBzb21lIGRlZmxhdGVfc3RvcmVkKCkgb3V0cHV0LCBnb2VzIHRocm91Z2ggdGhpcyBmdW5jdGlvbiBzbyBzb21lXG4gKiBhcHBsaWNhdGlvbnMgbWF5IHdpc2ggdG8gbW9kaWZ5IGl0IHRvIGF2b2lkIGFsbG9jYXRpbmcgYSBsYXJnZVxuICogc3RybS0+bmV4dF9vdXQgYnVmZmVyIGFuZCBjb3B5aW5nIGludG8gaXQuIChTZWUgYWxzbyByZWFkX2J1ZigpKS5cbiAqL1xuY29uc3QgZmx1c2hfcGVuZGluZyA9IChzdHJtKSA9PiB7XG4gIGNvbnN0IHMgPSBzdHJtLnN0YXRlO1xuXG4gIC8vX3RyX2ZsdXNoX2JpdHMocyk7XG4gIGxldCBsZW4gPSBzLnBlbmRpbmc7XG4gIGlmIChsZW4gPiBzdHJtLmF2YWlsX291dCkge1xuICAgIGxlbiA9IHN0cm0uYXZhaWxfb3V0O1xuICB9XG4gIGlmIChsZW4gPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgc3RybS5vdXRwdXQuc2V0KHMucGVuZGluZ19idWYuc3ViYXJyYXkocy5wZW5kaW5nX291dCwgcy5wZW5kaW5nX291dCArIGxlbiksIHN0cm0ubmV4dF9vdXQpO1xuICBzdHJtLm5leHRfb3V0ICArPSBsZW47XG4gIHMucGVuZGluZ19vdXQgICs9IGxlbjtcbiAgc3RybS50b3RhbF9vdXQgKz0gbGVuO1xuICBzdHJtLmF2YWlsX291dCAtPSBsZW47XG4gIHMucGVuZGluZyAgICAgIC09IGxlbjtcbiAgaWYgKHMucGVuZGluZyA9PT0gMCkge1xuICAgIHMucGVuZGluZ19vdXQgPSAwO1xuICB9XG59O1xuXG5cbmNvbnN0IGZsdXNoX2Jsb2NrX29ubHkgPSAocywgbGFzdCkgPT4ge1xuICBfdHJfZmx1c2hfYmxvY2socywgKHMuYmxvY2tfc3RhcnQgPj0gMCA/IHMuYmxvY2tfc3RhcnQgOiAtMSksIHMuc3Ryc3RhcnQgLSBzLmJsb2NrX3N0YXJ0LCBsYXN0KTtcbiAgcy5ibG9ja19zdGFydCA9IHMuc3Ryc3RhcnQ7XG4gIGZsdXNoX3BlbmRpbmcocy5zdHJtKTtcbn07XG5cblxuY29uc3QgcHV0X2J5dGUgPSAocywgYikgPT4ge1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IGI7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFB1dCBhIHNob3J0IGluIHRoZSBwZW5kaW5nIGJ1ZmZlci4gVGhlIDE2LWJpdCB2YWx1ZSBpcyBwdXQgaW4gTVNCIG9yZGVyLlxuICogSU4gYXNzZXJ0aW9uOiB0aGUgc3RyZWFtIHN0YXRlIGlzIGNvcnJlY3QgYW5kIHRoZXJlIGlzIGVub3VnaCByb29tIGluXG4gKiBwZW5kaW5nX2J1Zi5cbiAqL1xuY29uc3QgcHV0U2hvcnRNU0IgPSAocywgYikgPT4ge1xuXG4gIC8vICBwdXRfYnl0ZShzLCAoQnl0ZSkoYiA+PiA4KSk7XG4vLyAgcHV0X2J5dGUocywgKEJ5dGUpKGIgJiAweGZmKSk7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gKGIgPj4+IDgpICYgMHhmZjtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSBiICYgMHhmZjtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBSZWFkIGEgbmV3IGJ1ZmZlciBmcm9tIHRoZSBjdXJyZW50IGlucHV0IHN0cmVhbSwgdXBkYXRlIHRoZSBhZGxlcjMyXG4gKiBhbmQgdG90YWwgbnVtYmVyIG9mIGJ5dGVzIHJlYWQuICBBbGwgZGVmbGF0ZSgpIGlucHV0IGdvZXMgdGhyb3VnaFxuICogdGhpcyBmdW5jdGlvbiBzbyBzb21lIGFwcGxpY2F0aW9ucyBtYXkgd2lzaCB0byBtb2RpZnkgaXQgdG8gYXZvaWRcbiAqIGFsbG9jYXRpbmcgYSBsYXJnZSBzdHJtLT5pbnB1dCBidWZmZXIgYW5kIGNvcHlpbmcgZnJvbSBpdC5cbiAqIChTZWUgYWxzbyBmbHVzaF9wZW5kaW5nKCkpLlxuICovXG5jb25zdCByZWFkX2J1ZiA9IChzdHJtLCBidWYsIHN0YXJ0LCBzaXplKSA9PiB7XG5cbiAgbGV0IGxlbiA9IHN0cm0uYXZhaWxfaW47XG5cbiAgaWYgKGxlbiA+IHNpemUpIHsgbGVuID0gc2l6ZTsgfVxuICBpZiAobGVuID09PSAwKSB7IHJldHVybiAwOyB9XG5cbiAgc3RybS5hdmFpbF9pbiAtPSBsZW47XG5cbiAgLy8gem1lbWNweShidWYsIHN0cm0tPm5leHRfaW4sIGxlbik7XG4gIGJ1Zi5zZXQoc3RybS5pbnB1dC5zdWJhcnJheShzdHJtLm5leHRfaW4sIHN0cm0ubmV4dF9pbiArIGxlbiksIHN0YXJ0KTtcbiAgaWYgKHN0cm0uc3RhdGUud3JhcCA9PT0gMSkge1xuICAgIHN0cm0uYWRsZXIgPSBhZGxlcjMyKHN0cm0uYWRsZXIsIGJ1ZiwgbGVuLCBzdGFydCk7XG4gIH1cblxuICBlbHNlIGlmIChzdHJtLnN0YXRlLndyYXAgPT09IDIpIHtcbiAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgYnVmLCBsZW4sIHN0YXJ0KTtcbiAgfVxuXG4gIHN0cm0ubmV4dF9pbiArPSBsZW47XG4gIHN0cm0udG90YWxfaW4gKz0gbGVuO1xuXG4gIHJldHVybiBsZW47XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2V0IG1hdGNoX3N0YXJ0IHRvIHRoZSBsb25nZXN0IG1hdGNoIHN0YXJ0aW5nIGF0IHRoZSBnaXZlbiBzdHJpbmcgYW5kXG4gKiByZXR1cm4gaXRzIGxlbmd0aC4gTWF0Y2hlcyBzaG9ydGVyIG9yIGVxdWFsIHRvIHByZXZfbGVuZ3RoIGFyZSBkaXNjYXJkZWQsXG4gKiBpbiB3aGljaCBjYXNlIHRoZSByZXN1bHQgaXMgZXF1YWwgdG8gcHJldl9sZW5ndGggYW5kIG1hdGNoX3N0YXJ0IGlzXG4gKiBnYXJiYWdlLlxuICogSU4gYXNzZXJ0aW9uczogY3VyX21hdGNoIGlzIHRoZSBoZWFkIG9mIHRoZSBoYXNoIGNoYWluIGZvciB0aGUgY3VycmVudFxuICogICBzdHJpbmcgKHN0cnN0YXJ0KSBhbmQgaXRzIGRpc3RhbmNlIGlzIDw9IE1BWF9ESVNULCBhbmQgcHJldl9sZW5ndGggPj0gMVxuICogT1VUIGFzc2VydGlvbjogdGhlIG1hdGNoIGxlbmd0aCBpcyBub3QgZ3JlYXRlciB0aGFuIHMtPmxvb2thaGVhZC5cbiAqL1xuY29uc3QgbG9uZ2VzdF9tYXRjaCA9IChzLCBjdXJfbWF0Y2gpID0+IHtcblxuICBsZXQgY2hhaW5fbGVuZ3RoID0gcy5tYXhfY2hhaW5fbGVuZ3RoOyAgICAgIC8qIG1heCBoYXNoIGNoYWluIGxlbmd0aCAqL1xuICBsZXQgc2NhbiA9IHMuc3Ryc3RhcnQ7IC8qIGN1cnJlbnQgc3RyaW5nICovXG4gIGxldCBtYXRjaDsgICAgICAgICAgICAgICAgICAgICAgIC8qIG1hdGNoZWQgc3RyaW5nICovXG4gIGxldCBsZW47ICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbGVuZ3RoIG9mIGN1cnJlbnQgbWF0Y2ggKi9cbiAgbGV0IGJlc3RfbGVuID0gcy5wcmV2X2xlbmd0aDsgICAgICAgICAgICAgIC8qIGJlc3QgbWF0Y2ggbGVuZ3RoIHNvIGZhciAqL1xuICBsZXQgbmljZV9tYXRjaCA9IHMubmljZV9tYXRjaDsgICAgICAgICAgICAgLyogc3RvcCBpZiBtYXRjaCBsb25nIGVub3VnaCAqL1xuICBjb25zdCBsaW1pdCA9IChzLnN0cnN0YXJ0ID4gKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkpID9cbiAgICAgIHMuc3Ryc3RhcnQgLSAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSA6IDAvKk5JTCovO1xuXG4gIGNvbnN0IF93aW4gPSBzLndpbmRvdzsgLy8gc2hvcnRjdXRcblxuICBjb25zdCB3bWFzayA9IHMud19tYXNrO1xuICBjb25zdCBwcmV2ICA9IHMucHJldjtcblxuICAvKiBTdG9wIHdoZW4gY3VyX21hdGNoIGJlY29tZXMgPD0gbGltaXQuIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLFxuICAgKiB3ZSBwcmV2ZW50IG1hdGNoZXMgd2l0aCB0aGUgc3RyaW5nIG9mIHdpbmRvdyBpbmRleCAwLlxuICAgKi9cblxuICBjb25zdCBzdHJlbmQgPSBzLnN0cnN0YXJ0ICsgTUFYX01BVENIO1xuICBsZXQgc2Nhbl9lbmQxICA9IF93aW5bc2NhbiArIGJlc3RfbGVuIC0gMV07XG4gIGxldCBzY2FuX2VuZCAgID0gX3dpbltzY2FuICsgYmVzdF9sZW5dO1xuXG4gIC8qIFRoZSBjb2RlIGlzIG9wdGltaXplZCBmb3IgSEFTSF9CSVRTID49IDggYW5kIE1BWF9NQVRDSC0yIG11bHRpcGxlIG9mIDE2LlxuICAgKiBJdCBpcyBlYXN5IHRvIGdldCByaWQgb2YgdGhpcyBvcHRpbWl6YXRpb24gaWYgbmVjZXNzYXJ5LlxuICAgKi9cbiAgLy8gQXNzZXJ0KHMtPmhhc2hfYml0cyA+PSA4ICYmIE1BWF9NQVRDSCA9PSAyNTgsIFwiQ29kZSB0b28gY2xldmVyXCIpO1xuXG4gIC8qIERvIG5vdCB3YXN0ZSB0b28gbXVjaCB0aW1lIGlmIHdlIGFscmVhZHkgaGF2ZSBhIGdvb2QgbWF0Y2g6ICovXG4gIGlmIChzLnByZXZfbGVuZ3RoID49IHMuZ29vZF9tYXRjaCkge1xuICAgIGNoYWluX2xlbmd0aCA+Pj0gMjtcbiAgfVxuICAvKiBEbyBub3QgbG9vayBmb3IgbWF0Y2hlcyBiZXlvbmQgdGhlIGVuZCBvZiB0aGUgaW5wdXQuIFRoaXMgaXMgbmVjZXNzYXJ5XG4gICAqIHRvIG1ha2UgZGVmbGF0ZSBkZXRlcm1pbmlzdGljLlxuICAgKi9cbiAgaWYgKG5pY2VfbWF0Y2ggPiBzLmxvb2thaGVhZCkgeyBuaWNlX21hdGNoID0gcy5sb29rYWhlYWQ7IH1cblxuICAvLyBBc3NlcnQoKHVsZylzLT5zdHJzdGFydCA8PSBzLT53aW5kb3dfc2l6ZS1NSU5fTE9PS0FIRUFELCBcIm5lZWQgbG9va2FoZWFkXCIpO1xuXG4gIGRvIHtcbiAgICAvLyBBc3NlcnQoY3VyX21hdGNoIDwgcy0+c3Ryc3RhcnQsIFwibm8gZnV0dXJlXCIpO1xuICAgIG1hdGNoID0gY3VyX21hdGNoO1xuXG4gICAgLyogU2tpcCB0byBuZXh0IG1hdGNoIGlmIHRoZSBtYXRjaCBsZW5ndGggY2Fubm90IGluY3JlYXNlXG4gICAgICogb3IgaWYgdGhlIG1hdGNoIGxlbmd0aCBpcyBsZXNzIHRoYW4gMi4gIE5vdGUgdGhhdCB0aGUgY2hlY2tzIGJlbG93XG4gICAgICogZm9yIGluc3VmZmljaWVudCBsb29rYWhlYWQgb25seSBvY2N1ciBvY2Nhc2lvbmFsbHkgZm9yIHBlcmZvcm1hbmNlXG4gICAgICogcmVhc29ucy4gIFRoZXJlZm9yZSB1bmluaXRpYWxpemVkIG1lbW9yeSB3aWxsIGJlIGFjY2Vzc2VkLCBhbmRcbiAgICAgKiBjb25kaXRpb25hbCBqdW1wcyB3aWxsIGJlIG1hZGUgdGhhdCBkZXBlbmQgb24gdGhvc2UgdmFsdWVzLlxuICAgICAqIEhvd2V2ZXIgdGhlIGxlbmd0aCBvZiB0aGUgbWF0Y2ggaXMgbGltaXRlZCB0byB0aGUgbG9va2FoZWFkLCBzb1xuICAgICAqIHRoZSBvdXRwdXQgb2YgZGVmbGF0ZSBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIHVuaW5pdGlhbGl6ZWQgdmFsdWVzLlxuICAgICAqL1xuXG4gICAgaWYgKF93aW5bbWF0Y2ggKyBiZXN0X2xlbl0gICAgICE9PSBzY2FuX2VuZCAgfHxcbiAgICAgICAgX3dpblttYXRjaCArIGJlc3RfbGVuIC0gMV0gIT09IHNjYW5fZW5kMSB8fFxuICAgICAgICBfd2luW21hdGNoXSAgICAgICAgICAgICAgICAhPT0gX3dpbltzY2FuXSB8fFxuICAgICAgICBfd2luWysrbWF0Y2hdICAgICAgICAgICAgICAhPT0gX3dpbltzY2FuICsgMV0pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qIFRoZSBjaGVjayBhdCBiZXN0X2xlbi0xIGNhbiBiZSByZW1vdmVkIGJlY2F1c2UgaXQgd2lsbCBiZSBtYWRlXG4gICAgICogYWdhaW4gbGF0ZXIuIChUaGlzIGhldXJpc3RpYyBpcyBub3QgYWx3YXlzIGEgd2luLilcbiAgICAgKiBJdCBpcyBub3QgbmVjZXNzYXJ5IHRvIGNvbXBhcmUgc2NhblsyXSBhbmQgbWF0Y2hbMl0gc2luY2UgdGhleVxuICAgICAqIGFyZSBhbHdheXMgZXF1YWwgd2hlbiB0aGUgb3RoZXIgYnl0ZXMgbWF0Y2gsIGdpdmVuIHRoYXRcbiAgICAgKiB0aGUgaGFzaCBrZXlzIGFyZSBlcXVhbCBhbmQgdGhhdCBIQVNIX0JJVFMgPj0gOC5cbiAgICAgKi9cbiAgICBzY2FuICs9IDI7XG4gICAgbWF0Y2grKztcbiAgICAvLyBBc3NlcnQoKnNjYW4gPT0gKm1hdGNoLCBcIm1hdGNoWzJdP1wiKTtcblxuICAgIC8qIFdlIGNoZWNrIGZvciBpbnN1ZmZpY2llbnQgbG9va2FoZWFkIG9ubHkgZXZlcnkgOHRoIGNvbXBhcmlzb247XG4gICAgICogdGhlIDI1NnRoIGNoZWNrIHdpbGwgYmUgbWFkZSBhdCBzdHJzdGFydCsyNTguXG4gICAgICovXG4gICAgZG8ge1xuICAgICAgLypqc2hpbnQgbm9lbXB0eTpmYWxzZSovXG4gICAgfSB3aGlsZSAoX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJlxuICAgICAgICAgICAgIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJiBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiZcbiAgICAgICAgICAgICBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiYgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmXG4gICAgICAgICAgICAgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJlxuICAgICAgICAgICAgIHNjYW4gPCBzdHJlbmQpO1xuXG4gICAgLy8gQXNzZXJ0KHNjYW4gPD0gcy0+d2luZG93Kyh1bnNpZ25lZCkocy0+d2luZG93X3NpemUtMSksIFwid2lsZCBzY2FuXCIpO1xuXG4gICAgbGVuID0gTUFYX01BVENIIC0gKHN0cmVuZCAtIHNjYW4pO1xuICAgIHNjYW4gPSBzdHJlbmQgLSBNQVhfTUFUQ0g7XG5cbiAgICBpZiAobGVuID4gYmVzdF9sZW4pIHtcbiAgICAgIHMubWF0Y2hfc3RhcnQgPSBjdXJfbWF0Y2g7XG4gICAgICBiZXN0X2xlbiA9IGxlbjtcbiAgICAgIGlmIChsZW4gPj0gbmljZV9tYXRjaCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNjYW5fZW5kMSAgPSBfd2luW3NjYW4gKyBiZXN0X2xlbiAtIDFdO1xuICAgICAgc2Nhbl9lbmQgICA9IF93aW5bc2NhbiArIGJlc3RfbGVuXTtcbiAgICB9XG4gIH0gd2hpbGUgKChjdXJfbWF0Y2ggPSBwcmV2W2N1cl9tYXRjaCAmIHdtYXNrXSkgPiBsaW1pdCAmJiAtLWNoYWluX2xlbmd0aCAhPT0gMCk7XG5cbiAgaWYgKGJlc3RfbGVuIDw9IHMubG9va2FoZWFkKSB7XG4gICAgcmV0dXJuIGJlc3RfbGVuO1xuICB9XG4gIHJldHVybiBzLmxvb2thaGVhZDtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGaWxsIHRoZSB3aW5kb3cgd2hlbiB0aGUgbG9va2FoZWFkIGJlY29tZXMgaW5zdWZmaWNpZW50LlxuICogVXBkYXRlcyBzdHJzdGFydCBhbmQgbG9va2FoZWFkLlxuICpcbiAqIElOIGFzc2VydGlvbjogbG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRFxuICogT1VUIGFzc2VydGlvbnM6IHN0cnN0YXJ0IDw9IHdpbmRvd19zaXplLU1JTl9MT09LQUhFQURcbiAqICAgIEF0IGxlYXN0IG9uZSBieXRlIGhhcyBiZWVuIHJlYWQsIG9yIGF2YWlsX2luID09IDA7IHJlYWRzIGFyZVxuICogICAgcGVyZm9ybWVkIGZvciBhdCBsZWFzdCB0d28gYnl0ZXMgKHJlcXVpcmVkIGZvciB0aGUgemlwIHRyYW5zbGF0ZV9lb2xcbiAqICAgIG9wdGlvbiAtLSBub3Qgc3VwcG9ydGVkIGhlcmUpLlxuICovXG5jb25zdCBmaWxsX3dpbmRvdyA9IChzKSA9PiB7XG5cbiAgY29uc3QgX3dfc2l6ZSA9IHMud19zaXplO1xuICBsZXQgbiwgbW9yZSwgc3RyO1xuXG4gIC8vQXNzZXJ0KHMtPmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQsIFwiYWxyZWFkeSBlbm91Z2ggbG9va2FoZWFkXCIpO1xuXG4gIGRvIHtcbiAgICBtb3JlID0gcy53aW5kb3dfc2l6ZSAtIHMubG9va2FoZWFkIC0gcy5zdHJzdGFydDtcblxuICAgIC8vIEpTIGludHMgaGF2ZSAzMiBiaXQsIGJsb2NrIGJlbG93IG5vdCBuZWVkZWRcbiAgICAvKiBEZWFsIHdpdGggIUAjJCUgNjRLIGxpbWl0OiAqL1xuICAgIC8vaWYgKHNpemVvZihpbnQpIDw9IDIpIHtcbiAgICAvLyAgICBpZiAobW9yZSA9PSAwICYmIHMtPnN0cnN0YXJ0ID09IDAgJiYgcy0+bG9va2FoZWFkID09IDApIHtcbiAgICAvLyAgICAgICAgbW9yZSA9IHdzaXplO1xuICAgIC8vXG4gICAgLy8gIH0gZWxzZSBpZiAobW9yZSA9PSAodW5zaWduZWQpKC0xKSkge1xuICAgIC8vICAgICAgICAvKiBWZXJ5IHVubGlrZWx5LCBidXQgcG9zc2libGUgb24gMTYgYml0IG1hY2hpbmUgaWZcbiAgICAvLyAgICAgICAgICogc3Ryc3RhcnQgPT0gMCAmJiBsb29rYWhlYWQgPT0gMSAoaW5wdXQgZG9uZSBhIGJ5dGUgYXQgdGltZSlcbiAgICAvLyAgICAgICAgICovXG4gICAgLy8gICAgICAgIG1vcmUtLTtcbiAgICAvLyAgICB9XG4gICAgLy99XG5cblxuICAgIC8qIElmIHRoZSB3aW5kb3cgaXMgYWxtb3N0IGZ1bGwgYW5kIHRoZXJlIGlzIGluc3VmZmljaWVudCBsb29rYWhlYWQsXG4gICAgICogbW92ZSB0aGUgdXBwZXIgaGFsZiB0byB0aGUgbG93ZXIgb25lIHRvIG1ha2Ugcm9vbSBpbiB0aGUgdXBwZXIgaGFsZi5cbiAgICAgKi9cbiAgICBpZiAocy5zdHJzdGFydCA+PSBfd19zaXplICsgKF93X3NpemUgLSBNSU5fTE9PS0FIRUFEKSkge1xuXG4gICAgICBzLndpbmRvdy5zZXQocy53aW5kb3cuc3ViYXJyYXkoX3dfc2l6ZSwgX3dfc2l6ZSArIF93X3NpemUgLSBtb3JlKSwgMCk7XG4gICAgICBzLm1hdGNoX3N0YXJ0IC09IF93X3NpemU7XG4gICAgICBzLnN0cnN0YXJ0IC09IF93X3NpemU7XG4gICAgICAvKiB3ZSBub3cgaGF2ZSBzdHJzdGFydCA+PSBNQVhfRElTVCAqL1xuICAgICAgcy5ibG9ja19zdGFydCAtPSBfd19zaXplO1xuICAgICAgaWYgKHMuaW5zZXJ0ID4gcy5zdHJzdGFydCkge1xuICAgICAgICBzLmluc2VydCA9IHMuc3Ryc3RhcnQ7XG4gICAgICB9XG4gICAgICBzbGlkZV9oYXNoKHMpO1xuICAgICAgbW9yZSArPSBfd19zaXplO1xuICAgIH1cbiAgICBpZiAocy5zdHJtLmF2YWlsX2luID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvKiBJZiB0aGVyZSB3YXMgbm8gc2xpZGluZzpcbiAgICAgKiAgICBzdHJzdGFydCA8PSBXU0laRStNQVhfRElTVC0xICYmIGxvb2thaGVhZCA8PSBNSU5fTE9PS0FIRUFEIC0gMSAmJlxuICAgICAqICAgIG1vcmUgPT0gd2luZG93X3NpemUgLSBsb29rYWhlYWQgLSBzdHJzdGFydFxuICAgICAqID0+IG1vcmUgPj0gd2luZG93X3NpemUgLSAoTUlOX0xPT0tBSEVBRC0xICsgV1NJWkUgKyBNQVhfRElTVC0xKVxuICAgICAqID0+IG1vcmUgPj0gd2luZG93X3NpemUgLSAyKldTSVpFICsgMlxuICAgICAqIEluIHRoZSBCSUdfTUVNIG9yIE1NQVAgY2FzZSAobm90IHlldCBzdXBwb3J0ZWQpLFxuICAgICAqICAgd2luZG93X3NpemUgPT0gaW5wdXRfc2l6ZSArIE1JTl9MT09LQUhFQUQgICYmXG4gICAgICogICBzdHJzdGFydCArIHMtPmxvb2thaGVhZCA8PSBpbnB1dF9zaXplID0+IG1vcmUgPj0gTUlOX0xPT0tBSEVBRC5cbiAgICAgKiBPdGhlcndpc2UsIHdpbmRvd19zaXplID09IDIqV1NJWkUgc28gbW9yZSA+PSAyLlxuICAgICAqIElmIHRoZXJlIHdhcyBzbGlkaW5nLCBtb3JlID49IFdTSVpFLiBTbyBpbiBhbGwgY2FzZXMsIG1vcmUgPj0gMi5cbiAgICAgKi9cbiAgICAvL0Fzc2VydChtb3JlID49IDIsIFwibW9yZSA8IDJcIik7XG4gICAgbiA9IHJlYWRfYnVmKHMuc3RybSwgcy53aW5kb3csIHMuc3Ryc3RhcnQgKyBzLmxvb2thaGVhZCwgbW9yZSk7XG4gICAgcy5sb29rYWhlYWQgKz0gbjtcblxuICAgIC8qIEluaXRpYWxpemUgdGhlIGhhc2ggdmFsdWUgbm93IHRoYXQgd2UgaGF2ZSBzb21lIGlucHV0OiAqL1xuICAgIGlmIChzLmxvb2thaGVhZCArIHMuaW5zZXJ0ID49IE1JTl9NQVRDSCkge1xuICAgICAgc3RyID0gcy5zdHJzdGFydCAtIHMuaW5zZXJ0O1xuICAgICAgcy5pbnNfaCA9IHMud2luZG93W3N0cl07XG5cbiAgICAgIC8qIFVQREFURV9IQVNIKHMsIHMtPmluc19oLCBzLT53aW5kb3dbc3RyICsgMV0pOyAqL1xuICAgICAgcy5pbnNfaCA9IEhBU0gocywgcy5pbnNfaCwgcy53aW5kb3dbc3RyICsgMV0pO1xuLy8jaWYgTUlOX01BVENIICE9IDNcbi8vICAgICAgICBDYWxsIHVwZGF0ZV9oYXNoKCkgTUlOX01BVENILTMgbW9yZSB0aW1lc1xuLy8jZW5kaWZcbiAgICAgIHdoaWxlIChzLmluc2VydCkge1xuICAgICAgICAvKiBVUERBVEVfSEFTSChzLCBzLT5pbnNfaCwgcy0+d2luZG93W3N0ciArIE1JTl9NQVRDSC0xXSk7ICovXG4gICAgICAgIHMuaW5zX2ggPSBIQVNIKHMsIHMuaW5zX2gsIHMud2luZG93W3N0ciArIE1JTl9NQVRDSCAtIDFdKTtcblxuICAgICAgICBzLnByZXZbc3RyICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzdHI7XG4gICAgICAgIHN0cisrO1xuICAgICAgICBzLmluc2VydC0tO1xuICAgICAgICBpZiAocy5sb29rYWhlYWQgKyBzLmluc2VydCA8IE1JTl9NQVRDSCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qIElmIHRoZSB3aG9sZSBpbnB1dCBoYXMgbGVzcyB0aGFuIE1JTl9NQVRDSCBieXRlcywgaW5zX2ggaXMgZ2FyYmFnZSxcbiAgICAgKiBidXQgdGhpcyBpcyBub3QgaW1wb3J0YW50IHNpbmNlIG9ubHkgbGl0ZXJhbCBieXRlcyB3aWxsIGJlIGVtaXR0ZWQuXG4gICAgICovXG5cbiAgfSB3aGlsZSAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIHMuc3RybS5hdmFpbF9pbiAhPT0gMCk7XG5cbiAgLyogSWYgdGhlIFdJTl9JTklUIGJ5dGVzIGFmdGVyIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgZGF0YSBoYXZlIG5ldmVyIGJlZW5cbiAgICogd3JpdHRlbiwgdGhlbiB6ZXJvIHRob3NlIGJ5dGVzIGluIG9yZGVyIHRvIGF2b2lkIG1lbW9yeSBjaGVjayByZXBvcnRzIG9mXG4gICAqIHRoZSB1c2Ugb2YgdW5pbml0aWFsaXplZCAob3IgdW5pbml0aWFsaXNlZCBhcyBKdWxpYW4gd3JpdGVzKSBieXRlcyBieVxuICAgKiB0aGUgbG9uZ2VzdCBtYXRjaCByb3V0aW5lcy4gIFVwZGF0ZSB0aGUgaGlnaCB3YXRlciBtYXJrIGZvciB0aGUgbmV4dFxuICAgKiB0aW1lIHRocm91Z2ggaGVyZS4gIFdJTl9JTklUIGlzIHNldCB0byBNQVhfTUFUQ0ggc2luY2UgdGhlIGxvbmdlc3QgbWF0Y2hcbiAgICogcm91dGluZXMgYWxsb3cgc2Nhbm5pbmcgdG8gc3Ryc3RhcnQgKyBNQVhfTUFUQ0gsIGlnbm9yaW5nIGxvb2thaGVhZC5cbiAgICovXG4vLyAgaWYgKHMuaGlnaF93YXRlciA8IHMud2luZG93X3NpemUpIHtcbi8vICAgIGNvbnN0IGN1cnIgPSBzLnN0cnN0YXJ0ICsgcy5sb29rYWhlYWQ7XG4vLyAgICBsZXQgaW5pdCA9IDA7XG4vL1xuLy8gICAgaWYgKHMuaGlnaF93YXRlciA8IGN1cnIpIHtcbi8vICAgICAgLyogUHJldmlvdXMgaGlnaCB3YXRlciBtYXJrIGJlbG93IGN1cnJlbnQgZGF0YSAtLSB6ZXJvIFdJTl9JTklUXG4vLyAgICAgICAqIGJ5dGVzIG9yIHVwIHRvIGVuZCBvZiB3aW5kb3csIHdoaWNoZXZlciBpcyBsZXNzLlxuLy8gICAgICAgKi9cbi8vICAgICAgaW5pdCA9IHMud2luZG93X3NpemUgLSBjdXJyO1xuLy8gICAgICBpZiAoaW5pdCA+IFdJTl9JTklUKVxuLy8gICAgICAgIGluaXQgPSBXSU5fSU5JVDtcbi8vICAgICAgem1lbXplcm8ocy0+d2luZG93ICsgY3VyciwgKHVuc2lnbmVkKWluaXQpO1xuLy8gICAgICBzLT5oaWdoX3dhdGVyID0gY3VyciArIGluaXQ7XG4vLyAgICB9XG4vLyAgICBlbHNlIGlmIChzLT5oaWdoX3dhdGVyIDwgKHVsZyljdXJyICsgV0lOX0lOSVQpIHtcbi8vICAgICAgLyogSGlnaCB3YXRlciBtYXJrIGF0IG9yIGFib3ZlIGN1cnJlbnQgZGF0YSwgYnV0IGJlbG93IGN1cnJlbnQgZGF0YVxuLy8gICAgICAgKiBwbHVzIFdJTl9JTklUIC0tIHplcm8gb3V0IHRvIGN1cnJlbnQgZGF0YSBwbHVzIFdJTl9JTklULCBvciB1cFxuLy8gICAgICAgKiB0byBlbmQgb2Ygd2luZG93LCB3aGljaGV2ZXIgaXMgbGVzcy5cbi8vICAgICAgICovXG4vLyAgICAgIGluaXQgPSAodWxnKWN1cnIgKyBXSU5fSU5JVCAtIHMtPmhpZ2hfd2F0ZXI7XG4vLyAgICAgIGlmIChpbml0ID4gcy0+d2luZG93X3NpemUgLSBzLT5oaWdoX3dhdGVyKVxuLy8gICAgICAgIGluaXQgPSBzLT53aW5kb3dfc2l6ZSAtIHMtPmhpZ2hfd2F0ZXI7XG4vLyAgICAgIHptZW16ZXJvKHMtPndpbmRvdyArIHMtPmhpZ2hfd2F0ZXIsICh1bnNpZ25lZClpbml0KTtcbi8vICAgICAgcy0+aGlnaF93YXRlciArPSBpbml0O1xuLy8gICAgfVxuLy8gIH1cbi8vXG4vLyAgQXNzZXJ0KCh1bGcpcy0+c3Ryc3RhcnQgPD0gcy0+d2luZG93X3NpemUgLSBNSU5fTE9PS0FIRUFELFxuLy8gICAgXCJub3QgZW5vdWdoIHJvb20gZm9yIHNlYXJjaFwiKTtcbn07XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weSB3aXRob3V0IGNvbXByZXNzaW9uIGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSB0aGUgaW5wdXQgc3RyZWFtLCByZXR1cm5cbiAqIHRoZSBjdXJyZW50IGJsb2NrIHN0YXRlLlxuICpcbiAqIEluIGNhc2UgZGVmbGF0ZVBhcmFtcygpIGlzIHVzZWQgdG8gbGF0ZXIgc3dpdGNoIHRvIGEgbm9uLXplcm8gY29tcHJlc3Npb25cbiAqIGxldmVsLCBzLT5tYXRjaGVzIChvdGhlcndpc2UgdW51c2VkIHdoZW4gc3RvcmluZykga2VlcHMgdHJhY2sgb2YgdGhlIG51bWJlclxuICogb2YgaGFzaCB0YWJsZSBzbGlkZXMgdG8gcGVyZm9ybS4gSWYgcy0+bWF0Y2hlcyBpcyAxLCB0aGVuIG9uZSBoYXNoIHRhYmxlXG4gKiBzbGlkZSB3aWxsIGJlIGRvbmUgd2hlbiBzd2l0Y2hpbmcuIElmIHMtPm1hdGNoZXMgaXMgMiwgdGhlIG1heGltdW0gdmFsdWVcbiAqIGFsbG93ZWQgaGVyZSwgdGhlbiB0aGUgaGFzaCB0YWJsZSB3aWxsIGJlIGNsZWFyZWQsIHNpbmNlIHR3byBvciBtb3JlIHNsaWRlc1xuICogaXMgdGhlIHNhbWUgYXMgYSBjbGVhci5cbiAqXG4gKiBkZWZsYXRlX3N0b3JlZCgpIGlzIHdyaXR0ZW4gdG8gbWluaW1pemUgdGhlIG51bWJlciBvZiB0aW1lcyBhbiBpbnB1dCBieXRlIGlzXG4gKiBjb3BpZWQuIEl0IGlzIG1vc3QgZWZmaWNpZW50IHdpdGggbGFyZ2UgaW5wdXQgYW5kIG91dHB1dCBidWZmZXJzLCB3aGljaFxuICogbWF4aW1pemVzIHRoZSBvcHBvcnR1bml0ZXMgdG8gaGF2ZSBhIHNpbmdsZSBjb3B5IGZyb20gbmV4dF9pbiB0byBuZXh0X291dC5cbiAqL1xuY29uc3QgZGVmbGF0ZV9zdG9yZWQgPSAocywgZmx1c2gpID0+IHtcblxuICAvKiBTbWFsbGVzdCB3b3J0aHkgYmxvY2sgc2l6ZSB3aGVuIG5vdCBmbHVzaGluZyBvciBmaW5pc2hpbmcuIEJ5IGRlZmF1bHRcbiAgICogdGhpcyBpcyAzMksuIFRoaXMgY2FuIGJlIGFzIHNtYWxsIGFzIDUwNyBieXRlcyBmb3IgbWVtTGV2ZWwgPT0gMS4gRm9yXG4gICAqIGxhcmdlIGlucHV0IGFuZCBvdXRwdXQgYnVmZmVycywgdGhlIHN0b3JlZCBibG9jayBzaXplIHdpbGwgYmUgbGFyZ2VyLlxuICAgKi9cbiAgbGV0IG1pbl9ibG9jayA9IHMucGVuZGluZ19idWZfc2l6ZSAtIDUgPiBzLndfc2l6ZSA/IHMud19zaXplIDogcy5wZW5kaW5nX2J1Zl9zaXplIC0gNTtcblxuICAvKiBDb3B5IGFzIG1hbnkgbWluX2Jsb2NrIG9yIGxhcmdlciBzdG9yZWQgYmxvY2tzIGRpcmVjdGx5IHRvIG5leHRfb3V0IGFzXG4gICAqIHBvc3NpYmxlLiBJZiBmbHVzaGluZywgY29weSB0aGUgcmVtYWluaW5nIGF2YWlsYWJsZSBpbnB1dCB0byBuZXh0X291dCBhc1xuICAgKiBzdG9yZWQgYmxvY2tzLCBpZiB0aGVyZSBpcyBlbm91Z2ggc3BhY2UuXG4gICAqL1xuICBsZXQgbGVuLCBsZWZ0LCBoYXZlLCBsYXN0ID0gMDtcbiAgbGV0IHVzZWQgPSBzLnN0cm0uYXZhaWxfaW47XG4gIGRvIHtcbiAgICAvKiBTZXQgbGVuIHRvIHRoZSBtYXhpbXVtIHNpemUgYmxvY2sgdGhhdCB3ZSBjYW4gY29weSBkaXJlY3RseSB3aXRoIHRoZVxuICAgICAqIGF2YWlsYWJsZSBpbnB1dCBkYXRhIGFuZCBvdXRwdXQgc3BhY2UuIFNldCBsZWZ0IHRvIGhvdyBtdWNoIG9mIHRoYXRcbiAgICAgKiB3b3VsZCBiZSBjb3BpZWQgZnJvbSB3aGF0J3MgbGVmdCBpbiB0aGUgd2luZG93LlxuICAgICAqL1xuICAgIGxlbiA9IDY1NTM1LyogTUFYX1NUT1JFRCAqLzsgICAgIC8qIG1heGltdW0gZGVmbGF0ZSBzdG9yZWQgYmxvY2sgbGVuZ3RoICovXG4gICAgaGF2ZSA9IChzLmJpX3ZhbGlkICsgNDIpID4+IDM7ICAgICAvKiBudW1iZXIgb2YgaGVhZGVyIGJ5dGVzICovXG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPCBoYXZlKSB7ICAgICAgICAgLyogbmVlZCByb29tIGZvciBoZWFkZXIgKi9cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAgIC8qIG1heGltdW0gc3RvcmVkIGJsb2NrIGxlbmd0aCB0aGF0IHdpbGwgZml0IGluIGF2YWlsX291dDogKi9cbiAgICBoYXZlID0gcy5zdHJtLmF2YWlsX291dCAtIGhhdmU7XG4gICAgbGVmdCA9IHMuc3Ryc3RhcnQgLSBzLmJsb2NrX3N0YXJ0OyAgLyogYnl0ZXMgbGVmdCBpbiB3aW5kb3cgKi9cbiAgICBpZiAobGVuID4gbGVmdCArIHMuc3RybS5hdmFpbF9pbikge1xuICAgICAgbGVuID0gbGVmdCArIHMuc3RybS5hdmFpbF9pbjsgICAvKiBsaW1pdCBsZW4gdG8gdGhlIGlucHV0ICovXG4gICAgfVxuICAgIGlmIChsZW4gPiBoYXZlKSB7XG4gICAgICBsZW4gPSBoYXZlOyAgICAgICAgICAgICAvKiBsaW1pdCBsZW4gdG8gdGhlIG91dHB1dCAqL1xuICAgIH1cblxuICAgIC8qIElmIHRoZSBzdG9yZWQgYmxvY2sgd291bGQgYmUgbGVzcyB0aGFuIG1pbl9ibG9jayBpbiBsZW5ndGgsIG9yIGlmXG4gICAgICogdW5hYmxlIHRvIGNvcHkgYWxsIG9mIHRoZSBhdmFpbGFibGUgaW5wdXQgd2hlbiBmbHVzaGluZywgdGhlbiB0cnlcbiAgICAgKiBjb3B5aW5nIHRvIHRoZSB3aW5kb3cgYW5kIHRoZSBwZW5kaW5nIGJ1ZmZlciBpbnN0ZWFkLiBBbHNvIGRvbid0XG4gICAgICogd3JpdGUgYW4gZW1wdHkgYmxvY2sgd2hlbiBmbHVzaGluZyAtLSBkZWZsYXRlKCkgZG9lcyB0aGF0LlxuICAgICAqL1xuICAgIGlmIChsZW4gPCBtaW5fYmxvY2sgJiYgKChsZW4gPT09IDAgJiYgZmx1c2ggIT09IFpfRklOSVNIKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZmx1c2ggPT09IFpfTk9fRkxVU0ggfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbiAhPT0gbGVmdCArIHMuc3RybS5hdmFpbF9pbikpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8qIE1ha2UgYSBkdW1teSBzdG9yZWQgYmxvY2sgaW4gcGVuZGluZyB0byBnZXQgdGhlIGhlYWRlciBieXRlcyxcbiAgICAgKiBpbmNsdWRpbmcgYW55IHBlbmRpbmcgYml0cy4gVGhpcyBhbHNvIHVwZGF0ZXMgdGhlIGRlYnVnZ2luZyBjb3VudHMuXG4gICAgICovXG4gICAgbGFzdCA9IGZsdXNoID09PSBaX0ZJTklTSCAmJiBsZW4gPT09IGxlZnQgKyBzLnN0cm0uYXZhaWxfaW4gPyAxIDogMDtcbiAgICBfdHJfc3RvcmVkX2Jsb2NrKHMsIDAsIDAsIGxhc3QpO1xuXG4gICAgLyogUmVwbGFjZSB0aGUgbGVuZ3RocyBpbiB0aGUgZHVtbXkgc3RvcmVkIGJsb2NrIHdpdGggbGVuLiAqL1xuICAgIHMucGVuZGluZ19idWZbcy5wZW5kaW5nIC0gNF0gPSBsZW47XG4gICAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcgLSAzXSA9IGxlbiA+PiA4O1xuICAgIHMucGVuZGluZ19idWZbcy5wZW5kaW5nIC0gMl0gPSB+bGVuO1xuICAgIHMucGVuZGluZ19idWZbcy5wZW5kaW5nIC0gMV0gPSB+bGVuID4+IDg7XG5cbiAgICAvKiBXcml0ZSB0aGUgc3RvcmVkIGJsb2NrIGhlYWRlciBieXRlcy4gKi9cbiAgICBmbHVzaF9wZW5kaW5nKHMuc3RybSk7XG5cbi8vI2lmZGVmIFpMSUJfREVCVUdcbi8vICAgIC8qIFVwZGF0ZSBkZWJ1Z2dpbmcgY291bnRzIGZvciB0aGUgZGF0YSBhYm91dCB0byBiZSBjb3BpZWQuICovXG4vLyAgICBzLT5jb21wcmVzc2VkX2xlbiArPSBsZW4gPDwgMztcbi8vICAgIHMtPmJpdHNfc2VudCArPSBsZW4gPDwgMztcbi8vI2VuZGlmXG5cbiAgICAvKiBDb3B5IHVuY29tcHJlc3NlZCBieXRlcyBmcm9tIHRoZSB3aW5kb3cgdG8gbmV4dF9vdXQuICovXG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIGlmIChsZWZ0ID4gbGVuKSB7XG4gICAgICAgIGxlZnQgPSBsZW47XG4gICAgICB9XG4gICAgICAvL3ptZW1jcHkocy0+c3RybS0+bmV4dF9vdXQsIHMtPndpbmRvdyArIHMtPmJsb2NrX3N0YXJ0LCBsZWZ0KTtcbiAgICAgIHMuc3RybS5vdXRwdXQuc2V0KHMud2luZG93LnN1YmFycmF5KHMuYmxvY2tfc3RhcnQsIHMuYmxvY2tfc3RhcnQgKyBsZWZ0KSwgcy5zdHJtLm5leHRfb3V0KTtcbiAgICAgIHMuc3RybS5uZXh0X291dCArPSBsZWZ0O1xuICAgICAgcy5zdHJtLmF2YWlsX291dCAtPSBsZWZ0O1xuICAgICAgcy5zdHJtLnRvdGFsX291dCArPSBsZWZ0O1xuICAgICAgcy5ibG9ja19zdGFydCArPSBsZWZ0O1xuICAgICAgbGVuIC09IGxlZnQ7XG4gICAgfVxuXG4gICAgLyogQ29weSB1bmNvbXByZXNzZWQgYnl0ZXMgZGlyZWN0bHkgZnJvbSBuZXh0X2luIHRvIG5leHRfb3V0LCB1cGRhdGluZ1xuICAgICAqIHRoZSBjaGVjayB2YWx1ZS5cbiAgICAgKi9cbiAgICBpZiAobGVuKSB7XG4gICAgICByZWFkX2J1ZihzLnN0cm0sIHMuc3RybS5vdXRwdXQsIHMuc3RybS5uZXh0X291dCwgbGVuKTtcbiAgICAgIHMuc3RybS5uZXh0X291dCArPSBsZW47XG4gICAgICBzLnN0cm0uYXZhaWxfb3V0IC09IGxlbjtcbiAgICAgIHMuc3RybS50b3RhbF9vdXQgKz0gbGVuO1xuICAgIH1cbiAgfSB3aGlsZSAobGFzdCA9PT0gMCk7XG5cbiAgLyogVXBkYXRlIHRoZSBzbGlkaW5nIHdpbmRvdyB3aXRoIHRoZSBsYXN0IHMtPndfc2l6ZSBieXRlcyBvZiB0aGUgY29waWVkXG4gICAqIGRhdGEsIG9yIGFwcGVuZCBhbGwgb2YgdGhlIGNvcGllZCBkYXRhIHRvIHRoZSBleGlzdGluZyB3aW5kb3cgaWYgbGVzc1xuICAgKiB0aGFuIHMtPndfc2l6ZSBieXRlcyB3ZXJlIGNvcGllZC4gQWxzbyB1cGRhdGUgdGhlIG51bWJlciBvZiBieXRlcyB0b1xuICAgKiBpbnNlcnQgaW4gdGhlIGhhc2ggdGFibGVzLCBpbiB0aGUgZXZlbnQgdGhhdCBkZWZsYXRlUGFyYW1zKCkgc3dpdGNoZXMgdG9cbiAgICogYSBub24temVybyBjb21wcmVzc2lvbiBsZXZlbC5cbiAgICovXG4gIHVzZWQgLT0gcy5zdHJtLmF2YWlsX2luOyAgICAvKiBudW1iZXIgb2YgaW5wdXQgYnl0ZXMgZGlyZWN0bHkgY29waWVkICovXG4gIGlmICh1c2VkKSB7XG4gICAgLyogSWYgYW55IGlucHV0IHdhcyB1c2VkLCB0aGVuIG5vIHVudXNlZCBpbnB1dCByZW1haW5zIGluIHRoZSB3aW5kb3csXG4gICAgICogdGhlcmVmb3JlIHMtPmJsb2NrX3N0YXJ0ID09IHMtPnN0cnN0YXJ0LlxuICAgICAqL1xuICAgIGlmICh1c2VkID49IHMud19zaXplKSB7ICAvKiBzdXBwbGFudCB0aGUgcHJldmlvdXMgaGlzdG9yeSAqL1xuICAgICAgcy5tYXRjaGVzID0gMjsgICAgIC8qIGNsZWFyIGhhc2ggKi9cbiAgICAgIC8vem1lbWNweShzLT53aW5kb3csIHMtPnN0cm0tPm5leHRfaW4gLSBzLT53X3NpemUsIHMtPndfc2l6ZSk7XG4gICAgICBzLndpbmRvdy5zZXQocy5zdHJtLmlucHV0LnN1YmFycmF5KHMuc3RybS5uZXh0X2luIC0gcy53X3NpemUsIHMuc3RybS5uZXh0X2luKSwgMCk7XG4gICAgICBzLnN0cnN0YXJ0ID0gcy53X3NpemU7XG4gICAgICBzLmluc2VydCA9IHMuc3Ryc3RhcnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHMud2luZG93X3NpemUgLSBzLnN0cnN0YXJ0IDw9IHVzZWQpIHtcbiAgICAgICAgLyogU2xpZGUgdGhlIHdpbmRvdyBkb3duLiAqL1xuICAgICAgICBzLnN0cnN0YXJ0IC09IHMud19zaXplO1xuICAgICAgICAvL3ptZW1jcHkocy0+d2luZG93LCBzLT53aW5kb3cgKyBzLT53X3NpemUsIHMtPnN0cnN0YXJ0KTtcbiAgICAgICAgcy53aW5kb3cuc2V0KHMud2luZG93LnN1YmFycmF5KHMud19zaXplLCBzLndfc2l6ZSArIHMuc3Ryc3RhcnQpLCAwKTtcbiAgICAgICAgaWYgKHMubWF0Y2hlcyA8IDIpIHtcbiAgICAgICAgICBzLm1hdGNoZXMrKzsgICAvKiBhZGQgYSBwZW5kaW5nIHNsaWRlX2hhc2goKSAqL1xuICAgICAgICB9XG4gICAgICAgIGlmIChzLmluc2VydCA+IHMuc3Ryc3RhcnQpIHtcbiAgICAgICAgICBzLmluc2VydCA9IHMuc3Ryc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vem1lbWNweShzLT53aW5kb3cgKyBzLT5zdHJzdGFydCwgcy0+c3RybS0+bmV4dF9pbiAtIHVzZWQsIHVzZWQpO1xuICAgICAgcy53aW5kb3cuc2V0KHMuc3RybS5pbnB1dC5zdWJhcnJheShzLnN0cm0ubmV4dF9pbiAtIHVzZWQsIHMuc3RybS5uZXh0X2luKSwgcy5zdHJzdGFydCk7XG4gICAgICBzLnN0cnN0YXJ0ICs9IHVzZWQ7XG4gICAgICBzLmluc2VydCArPSB1c2VkID4gcy53X3NpemUgLSBzLmluc2VydCA/IHMud19zaXplIC0gcy5pbnNlcnQgOiB1c2VkO1xuICAgIH1cbiAgICBzLmJsb2NrX3N0YXJ0ID0gcy5zdHJzdGFydDtcbiAgfVxuICBpZiAocy5oaWdoX3dhdGVyIDwgcy5zdHJzdGFydCkge1xuICAgIHMuaGlnaF93YXRlciA9IHMuc3Ryc3RhcnQ7XG4gIH1cblxuICAvKiBJZiB0aGUgbGFzdCBibG9jayB3YXMgd3JpdHRlbiB0byBuZXh0X291dCwgdGhlbiBkb25lLiAqL1xuICBpZiAobGFzdCkge1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuXG4gIC8qIElmIGZsdXNoaW5nIGFuZCBhbGwgaW5wdXQgaGFzIGJlZW4gY29uc3VtZWQsIHRoZW4gZG9uZS4gKi9cbiAgaWYgKGZsdXNoICE9PSBaX05PX0ZMVVNIICYmIGZsdXNoICE9PSBaX0ZJTklTSCAmJlxuICAgIHMuc3RybS5hdmFpbF9pbiA9PT0gMCAmJiBzLnN0cnN0YXJ0ID09PSBzLmJsb2NrX3N0YXJ0KSB7XG4gICAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG4gIH1cblxuICAvKiBGaWxsIHRoZSB3aW5kb3cgd2l0aCBhbnkgcmVtYWluaW5nIGlucHV0LiAqL1xuICBoYXZlID0gcy53aW5kb3dfc2l6ZSAtIHMuc3Ryc3RhcnQ7XG4gIGlmIChzLnN0cm0uYXZhaWxfaW4gPiBoYXZlICYmIHMuYmxvY2tfc3RhcnQgPj0gcy53X3NpemUpIHtcbiAgICAvKiBTbGlkZSB0aGUgd2luZG93IGRvd24uICovXG4gICAgcy5ibG9ja19zdGFydCAtPSBzLndfc2l6ZTtcbiAgICBzLnN0cnN0YXJ0IC09IHMud19zaXplO1xuICAgIC8vem1lbWNweShzLT53aW5kb3csIHMtPndpbmRvdyArIHMtPndfc2l6ZSwgcy0+c3Ryc3RhcnQpO1xuICAgIHMud2luZG93LnNldChzLndpbmRvdy5zdWJhcnJheShzLndfc2l6ZSwgcy53X3NpemUgKyBzLnN0cnN0YXJ0KSwgMCk7XG4gICAgaWYgKHMubWF0Y2hlcyA8IDIpIHtcbiAgICAgIHMubWF0Y2hlcysrOyAgICAgICAvKiBhZGQgYSBwZW5kaW5nIHNsaWRlX2hhc2goKSAqL1xuICAgIH1cbiAgICBoYXZlICs9IHMud19zaXplOyAgICAgIC8qIG1vcmUgc3BhY2Ugbm93ICovXG4gICAgaWYgKHMuaW5zZXJ0ID4gcy5zdHJzdGFydCkge1xuICAgICAgcy5pbnNlcnQgPSBzLnN0cnN0YXJ0O1xuICAgIH1cbiAgfVxuICBpZiAoaGF2ZSA+IHMuc3RybS5hdmFpbF9pbikge1xuICAgIGhhdmUgPSBzLnN0cm0uYXZhaWxfaW47XG4gIH1cbiAgaWYgKGhhdmUpIHtcbiAgICByZWFkX2J1ZihzLnN0cm0sIHMud2luZG93LCBzLnN0cnN0YXJ0LCBoYXZlKTtcbiAgICBzLnN0cnN0YXJ0ICs9IGhhdmU7XG4gICAgcy5pbnNlcnQgKz0gaGF2ZSA+IHMud19zaXplIC0gcy5pbnNlcnQgPyBzLndfc2l6ZSAtIHMuaW5zZXJ0IDogaGF2ZTtcbiAgfVxuICBpZiAocy5oaWdoX3dhdGVyIDwgcy5zdHJzdGFydCkge1xuICAgIHMuaGlnaF93YXRlciA9IHMuc3Ryc3RhcnQ7XG4gIH1cblxuICAvKiBUaGVyZSB3YXMgbm90IGVub3VnaCBhdmFpbF9vdXQgdG8gd3JpdGUgYSBjb21wbGV0ZSB3b3J0aHkgb3IgZmx1c2hlZFxuICAgKiBzdG9yZWQgYmxvY2sgdG8gbmV4dF9vdXQuIFdyaXRlIGEgc3RvcmVkIGJsb2NrIHRvIHBlbmRpbmcgaW5zdGVhZCwgaWYgd2VcbiAgICogaGF2ZSBlbm91Z2ggaW5wdXQgZm9yIGEgd29ydGh5IGJsb2NrLCBvciBpZiBmbHVzaGluZyBhbmQgdGhlcmUgaXMgZW5vdWdoXG4gICAqIHJvb20gZm9yIHRoZSByZW1haW5pbmcgaW5wdXQgYXMgYSBzdG9yZWQgYmxvY2sgaW4gdGhlIHBlbmRpbmcgYnVmZmVyLlxuICAgKi9cbiAgaGF2ZSA9IChzLmJpX3ZhbGlkICsgNDIpID4+IDM7ICAgICAvKiBudW1iZXIgb2YgaGVhZGVyIGJ5dGVzICovXG4gICAgLyogbWF4aW11bSBzdG9yZWQgYmxvY2sgbGVuZ3RoIHRoYXQgd2lsbCBmaXQgaW4gcGVuZGluZzogKi9cbiAgaGF2ZSA9IHMucGVuZGluZ19idWZfc2l6ZSAtIGhhdmUgPiA2NTUzNS8qIE1BWF9TVE9SRUQgKi8gPyA2NTUzNS8qIE1BWF9TVE9SRUQgKi8gOiBzLnBlbmRpbmdfYnVmX3NpemUgLSBoYXZlO1xuICBtaW5fYmxvY2sgPSBoYXZlID4gcy53X3NpemUgPyBzLndfc2l6ZSA6IGhhdmU7XG4gIGxlZnQgPSBzLnN0cnN0YXJ0IC0gcy5ibG9ja19zdGFydDtcbiAgaWYgKGxlZnQgPj0gbWluX2Jsb2NrIHx8XG4gICAgICgobGVmdCB8fCBmbHVzaCA9PT0gWl9GSU5JU0gpICYmIGZsdXNoICE9PSBaX05PX0ZMVVNIICYmXG4gICAgIHMuc3RybS5hdmFpbF9pbiA9PT0gMCAmJiBsZWZ0IDw9IGhhdmUpKSB7XG4gICAgbGVuID0gbGVmdCA+IGhhdmUgPyBoYXZlIDogbGVmdDtcbiAgICBsYXN0ID0gZmx1c2ggPT09IFpfRklOSVNIICYmIHMuc3RybS5hdmFpbF9pbiA9PT0gMCAmJlxuICAgICAgICAgbGVuID09PSBsZWZ0ID8gMSA6IDA7XG4gICAgX3RyX3N0b3JlZF9ibG9jayhzLCBzLmJsb2NrX3N0YXJ0LCBsZW4sIGxhc3QpO1xuICAgIHMuYmxvY2tfc3RhcnQgKz0gbGVuO1xuICAgIGZsdXNoX3BlbmRpbmcocy5zdHJtKTtcbiAgfVxuXG4gIC8qIFdlJ3ZlIGRvbmUgYWxsIHdlIGNhbiB3aXRoIHRoZSBhdmFpbGFibGUgaW5wdXQgYW5kIG91dHB1dC4gKi9cbiAgcmV0dXJuIGxhc3QgPyBCU19GSU5JU0hfU1RBUlRFRCA6IEJTX05FRURfTU9SRTtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb21wcmVzcyBhcyBtdWNoIGFzIHBvc3NpYmxlIGZyb20gdGhlIGlucHV0IHN0cmVhbSwgcmV0dXJuIHRoZSBjdXJyZW50XG4gKiBibG9jayBzdGF0ZS5cbiAqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgcGVyZm9ybSBsYXp5IGV2YWx1YXRpb24gb2YgbWF0Y2hlcyBhbmQgaW5zZXJ0c1xuICogbmV3IHN0cmluZ3MgaW4gdGhlIGRpY3Rpb25hcnkgb25seSBmb3IgdW5tYXRjaGVkIHN0cmluZ3Mgb3IgZm9yIHNob3J0XG4gKiBtYXRjaGVzLiBJdCBpcyB1c2VkIG9ubHkgZm9yIHRoZSBmYXN0IGNvbXByZXNzaW9uIG9wdGlvbnMuXG4gKi9cbmNvbnN0IGRlZmxhdGVfZmFzdCA9IChzLCBmbHVzaCkgPT4ge1xuXG4gIGxldCBoYXNoX2hlYWQ7ICAgICAgICAvKiBoZWFkIG9mIHRoZSBoYXNoIGNoYWluICovXG4gIGxldCBiZmx1c2g7ICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cblxuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG4gICAgICogYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcbiAgICAgKiBmb3IgdGhlIG5leHQgbWF0Y2gsIHBsdXMgTUlOX01BVENIIGJ5dGVzIHRvIGluc2VydCB0aGVcbiAgICAgKiBzdHJpbmcgZm9sbG93aW5nIHRoZSBuZXh0IG1hdGNoLlxuICAgICAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQpIHtcbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCAmJiBmbHVzaCA9PT0gWl9OT19GTFVTSCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICAgIGJyZWFrOyAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEluc2VydCB0aGUgc3RyaW5nIHdpbmRvd1tzdHJzdGFydCAuLiBzdHJzdGFydCsyXSBpbiB0aGVcbiAgICAgKiBkaWN0aW9uYXJ5LCBhbmQgc2V0IGhhc2hfaGVhZCB0byB0aGUgaGVhZCBvZiB0aGUgaGFzaCBjaGFpbjpcbiAgICAgKi9cbiAgICBoYXNoX2hlYWQgPSAwLypOSUwqLztcbiAgICBpZiAocy5sb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG4gICAgICAvKioqIElOU0VSVF9TVFJJTkcocywgcy5zdHJzdGFydCwgaGFzaF9oZWFkKTsgKioqL1xuICAgICAgcy5pbnNfaCA9IEhBU0gocywgcy5pbnNfaCwgcy53aW5kb3dbcy5zdHJzdGFydCArIE1JTl9NQVRDSCAtIDFdKTtcbiAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgcy5oZWFkW3MuaW5zX2hdID0gcy5zdHJzdGFydDtcbiAgICAgIC8qKiovXG4gICAgfVxuXG4gICAgLyogRmluZCB0aGUgbG9uZ2VzdCBtYXRjaCwgZGlzY2FyZGluZyB0aG9zZSA8PSBwcmV2X2xlbmd0aC5cbiAgICAgKiBBdCB0aGlzIHBvaW50IHdlIGhhdmUgYWx3YXlzIG1hdGNoX2xlbmd0aCA8IE1JTl9NQVRDSFxuICAgICAqL1xuICAgIGlmIChoYXNoX2hlYWQgIT09IDAvKk5JTCovICYmICgocy5zdHJzdGFydCAtIGhhc2hfaGVhZCkgPD0gKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkpKSB7XG4gICAgICAvKiBUbyBzaW1wbGlmeSB0aGUgY29kZSwgd2UgcHJldmVudCBtYXRjaGVzIHdpdGggdGhlIHN0cmluZ1xuICAgICAgICogb2Ygd2luZG93IGluZGV4IDAgKGluIHBhcnRpY3VsYXIgd2UgaGF2ZSB0byBhdm9pZCBhIG1hdGNoXG4gICAgICAgKiBvZiB0aGUgc3RyaW5nIHdpdGggaXRzZWxmIGF0IHRoZSBzdGFydCBvZiB0aGUgaW5wdXQgZmlsZSkuXG4gICAgICAgKi9cbiAgICAgIHMubWF0Y2hfbGVuZ3RoID0gbG9uZ2VzdF9tYXRjaChzLCBoYXNoX2hlYWQpO1xuICAgICAgLyogbG9uZ2VzdF9tYXRjaCgpIHNldHMgbWF0Y2hfc3RhcnQgKi9cbiAgICB9XG4gICAgaWYgKHMubWF0Y2hfbGVuZ3RoID49IE1JTl9NQVRDSCkge1xuICAgICAgLy8gY2hlY2tfbWF0Y2gocywgcy5zdHJzdGFydCwgcy5tYXRjaF9zdGFydCwgcy5tYXRjaF9sZW5ndGgpOyAvLyBmb3IgZGVidWcgb25seVxuXG4gICAgICAvKioqIF90cl90YWxseV9kaXN0KHMsIHMuc3Ryc3RhcnQgLSBzLm1hdGNoX3N0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgcy5tYXRjaF9sZW5ndGggLSBNSU5fTUFUQ0gsIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IF90cl90YWxseShzLCBzLnN0cnN0YXJ0IC0gcy5tYXRjaF9zdGFydCwgcy5tYXRjaF9sZW5ndGggLSBNSU5fTUFUQ0gpO1xuXG4gICAgICBzLmxvb2thaGVhZCAtPSBzLm1hdGNoX2xlbmd0aDtcblxuICAgICAgLyogSW5zZXJ0IG5ldyBzdHJpbmdzIGluIHRoZSBoYXNoIHRhYmxlIG9ubHkgaWYgdGhlIG1hdGNoIGxlbmd0aFxuICAgICAgICogaXMgbm90IHRvbyBsYXJnZS4gVGhpcyBzYXZlcyB0aW1lIGJ1dCBkZWdyYWRlcyBjb21wcmVzc2lvbi5cbiAgICAgICAqL1xuICAgICAgaWYgKHMubWF0Y2hfbGVuZ3RoIDw9IHMubWF4X2xhenlfbWF0Y2gvKm1heF9pbnNlcnRfbGVuZ3RoKi8gJiYgcy5sb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG4gICAgICAgIHMubWF0Y2hfbGVuZ3RoLS07IC8qIHN0cmluZyBhdCBzdHJzdGFydCBhbHJlYWR5IGluIHRhYmxlICovXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgICAgICAgLyoqKiBJTlNFUlRfU1RSSU5HKHMsIHMuc3Ryc3RhcnQsIGhhc2hfaGVhZCk7ICoqKi9cbiAgICAgICAgICBzLmluc19oID0gSEFTSChzLCBzLmluc19oLCBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgTUlOX01BVENIIC0gMV0pO1xuICAgICAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAvKiBzdHJzdGFydCBuZXZlciBleGNlZWRzIFdTSVpFLU1BWF9NQVRDSCwgc28gdGhlcmUgYXJlXG4gICAgICAgICAgICogYWx3YXlzIE1JTl9NQVRDSCBieXRlcyBhaGVhZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgfSB3aGlsZSAoLS1zLm1hdGNoX2xlbmd0aCAhPT0gMCk7XG4gICAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICAgIH0gZWxzZVxuICAgICAge1xuICAgICAgICBzLnN0cnN0YXJ0ICs9IHMubWF0Y2hfbGVuZ3RoO1xuICAgICAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgICAgIHMuaW5zX2ggPSBzLndpbmRvd1tzLnN0cnN0YXJ0XTtcbiAgICAgICAgLyogVVBEQVRFX0hBU0gocywgcy5pbnNfaCwgcy53aW5kb3dbcy5zdHJzdGFydCsxXSk7ICovXG4gICAgICAgIHMuaW5zX2ggPSBIQVNIKHMsIHMuaW5zX2gsIHMud2luZG93W3Muc3Ryc3RhcnQgKyAxXSk7XG5cbi8vI2lmIE1JTl9NQVRDSCAhPSAzXG4vLyAgICAgICAgICAgICAgICBDYWxsIFVQREFURV9IQVNIKCkgTUlOX01BVENILTMgbW9yZSB0aW1lc1xuLy8jZW5kaWZcbiAgICAgICAgLyogSWYgbG9va2FoZWFkIDwgTUlOX01BVENILCBpbnNfaCBpcyBnYXJiYWdlLCBidXQgaXQgZG9lcyBub3RcbiAgICAgICAgICogbWF0dGVyIHNpbmNlIGl0IHdpbGwgYmUgcmVjb21wdXRlZCBhdCBuZXh0IGRlZmxhdGUgY2FsbC5cbiAgICAgICAgICovXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIE5vIG1hdGNoLCBvdXRwdXQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy53aW5kb3dbcy5zdHJzdGFydF0pKTtcbiAgICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnRdKTtcblxuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICB9XG4gICAgaWYgKGJmbHVzaCkge1xuICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgLyoqKi9cbiAgICB9XG4gIH1cbiAgcy5pbnNlcnQgPSAoKHMuc3Ryc3RhcnQgPCAoTUlOX01BVENIIC0gMSkpID8gcy5zdHJzdGFydCA6IE1JTl9NQVRDSCAtIDEpO1xuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cbiAgaWYgKHMuc3ltX25leHQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cbiAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG59O1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNhbWUgYXMgYWJvdmUsIGJ1dCBhY2hpZXZlcyBiZXR0ZXIgY29tcHJlc3Npb24uIFdlIHVzZSBhIGxhenlcbiAqIGV2YWx1YXRpb24gZm9yIG1hdGNoZXM6IGEgbWF0Y2ggaXMgZmluYWxseSBhZG9wdGVkIG9ubHkgaWYgdGhlcmUgaXNcbiAqIG5vIGJldHRlciBtYXRjaCBhdCB0aGUgbmV4dCB3aW5kb3cgcG9zaXRpb24uXG4gKi9cbmNvbnN0IGRlZmxhdGVfc2xvdyA9IChzLCBmbHVzaCkgPT4ge1xuXG4gIGxldCBoYXNoX2hlYWQ7ICAgICAgICAgIC8qIGhlYWQgb2YgaGFzaCBjaGFpbiAqL1xuICBsZXQgYmZsdXNoOyAgICAgICAgICAgICAgLyogc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkICovXG5cbiAgbGV0IG1heF9pbnNlcnQ7XG5cbiAgLyogUHJvY2VzcyB0aGUgaW5wdXQgYmxvY2suICovXG4gIGZvciAoOzspIHtcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCB3ZSBhbHdheXMgaGF2ZSBlbm91Z2ggbG9va2FoZWFkLCBleGNlcHRcbiAgICAgKiBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCBmaWxlLiBXZSBuZWVkIE1BWF9NQVRDSCBieXRlc1xuICAgICAqIGZvciB0aGUgbmV4dCBtYXRjaCwgcGx1cyBNSU5fTUFUQ0ggYnl0ZXMgdG8gaW5zZXJ0IHRoZVxuICAgICAqIHN0cmluZyBmb2xsb3dpbmcgdGhlIG5leHQgbWF0Y2guXG4gICAgICovXG4gICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCkge1xuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHsgYnJlYWs7IH0gLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICB9XG5cbiAgICAvKiBJbnNlcnQgdGhlIHN0cmluZyB3aW5kb3dbc3Ryc3RhcnQgLi4gc3Ryc3RhcnQrMl0gaW4gdGhlXG4gICAgICogZGljdGlvbmFyeSwgYW5kIHNldCBoYXNoX2hlYWQgdG8gdGhlIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW46XG4gICAgICovXG4gICAgaGFzaF9oZWFkID0gMC8qTklMKi87XG4gICAgaWYgKHMubG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuICAgICAgLyoqKiBJTlNFUlRfU1RSSU5HKHMsIHMuc3Ryc3RhcnQsIGhhc2hfaGVhZCk7ICoqKi9cbiAgICAgIHMuaW5zX2ggPSBIQVNIKHMsIHMuaW5zX2gsIHMud2luZG93W3Muc3Ryc3RhcnQgKyBNSU5fTUFUQ0ggLSAxXSk7XG4gICAgICBoYXNoX2hlYWQgPSBzLnByZXZbcy5zdHJzdGFydCAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcbiAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAvKioqL1xuICAgIH1cblxuICAgIC8qIEZpbmQgdGhlIGxvbmdlc3QgbWF0Y2gsIGRpc2NhcmRpbmcgdGhvc2UgPD0gcHJldl9sZW5ndGguXG4gICAgICovXG4gICAgcy5wcmV2X2xlbmd0aCA9IHMubWF0Y2hfbGVuZ3RoO1xuICAgIHMucHJldl9tYXRjaCA9IHMubWF0Y2hfc3RhcnQ7XG4gICAgcy5tYXRjaF9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuXG4gICAgaWYgKGhhc2hfaGVhZCAhPT0gMC8qTklMKi8gJiYgcy5wcmV2X2xlbmd0aCA8IHMubWF4X2xhenlfbWF0Y2ggJiZcbiAgICAgICAgcy5zdHJzdGFydCAtIGhhc2hfaGVhZCA8PSAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKS8qTUFYX0RJU1QocykqLykge1xuICAgICAgLyogVG8gc2ltcGxpZnkgdGhlIGNvZGUsIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmdcbiAgICAgICAqIG9mIHdpbmRvdyBpbmRleCAwIChpbiBwYXJ0aWN1bGFyIHdlIGhhdmUgdG8gYXZvaWQgYSBtYXRjaFxuICAgICAgICogb2YgdGhlIHN0cmluZyB3aXRoIGl0c2VsZiBhdCB0aGUgc3RhcnQgb2YgdGhlIGlucHV0IGZpbGUpLlxuICAgICAgICovXG4gICAgICBzLm1hdGNoX2xlbmd0aCA9IGxvbmdlc3RfbWF0Y2gocywgaGFzaF9oZWFkKTtcbiAgICAgIC8qIGxvbmdlc3RfbWF0Y2goKSBzZXRzIG1hdGNoX3N0YXJ0ICovXG5cbiAgICAgIGlmIChzLm1hdGNoX2xlbmd0aCA8PSA1ICYmXG4gICAgICAgICAocy5zdHJhdGVneSA9PT0gWl9GSUxURVJFRCB8fCAocy5tYXRjaF9sZW5ndGggPT09IE1JTl9NQVRDSCAmJiBzLnN0cnN0YXJ0IC0gcy5tYXRjaF9zdGFydCA+IDQwOTYvKlRPT19GQVIqLykpKSB7XG5cbiAgICAgICAgLyogSWYgcHJldl9tYXRjaCBpcyBhbHNvIE1JTl9NQVRDSCwgbWF0Y2hfc3RhcnQgaXMgZ2FyYmFnZVxuICAgICAgICAgKiBidXQgd2Ugd2lsbCBpZ25vcmUgdGhlIGN1cnJlbnQgbWF0Y2ggYW55d2F5LlxuICAgICAgICAgKi9cbiAgICAgICAgcy5tYXRjaF9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBJZiB0aGVyZSB3YXMgYSBtYXRjaCBhdCB0aGUgcHJldmlvdXMgc3RlcCBhbmQgdGhlIGN1cnJlbnRcbiAgICAgKiBtYXRjaCBpcyBub3QgYmV0dGVyLCBvdXRwdXQgdGhlIHByZXZpb3VzIG1hdGNoOlxuICAgICAqL1xuICAgIGlmIChzLnByZXZfbGVuZ3RoID49IE1JTl9NQVRDSCAmJiBzLm1hdGNoX2xlbmd0aCA8PSBzLnByZXZfbGVuZ3RoKSB7XG4gICAgICBtYXhfaW5zZXJ0ID0gcy5zdHJzdGFydCArIHMubG9va2FoZWFkIC0gTUlOX01BVENIO1xuICAgICAgLyogRG8gbm90IGluc2VydCBzdHJpbmdzIGluIGhhc2ggdGFibGUgYmV5b25kIHRoaXMuICovXG5cbiAgICAgIC8vY2hlY2tfbWF0Y2gocywgcy5zdHJzdGFydC0xLCBzLnByZXZfbWF0Y2gsIHMucHJldl9sZW5ndGgpO1xuXG4gICAgICAvKioqX3RyX3RhbGx5X2Rpc3Qocywgcy5zdHJzdGFydCAtIDEgLSBzLnByZXZfbWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICBzLnByZXZfbGVuZ3RoIC0gTUlOX01BVENILCBiZmx1c2gpOyoqKi9cbiAgICAgIGJmbHVzaCA9IF90cl90YWxseShzLCBzLnN0cnN0YXJ0IC0gMSAtIHMucHJldl9tYXRjaCwgcy5wcmV2X2xlbmd0aCAtIE1JTl9NQVRDSCk7XG4gICAgICAvKiBJbnNlcnQgaW4gaGFzaCB0YWJsZSBhbGwgc3RyaW5ncyB1cCB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaC5cbiAgICAgICAqIHN0cnN0YXJ0LTEgYW5kIHN0cnN0YXJ0IGFyZSBhbHJlYWR5IGluc2VydGVkLiBJZiB0aGVyZSBpcyBub3RcbiAgICAgICAqIGVub3VnaCBsb29rYWhlYWQsIHRoZSBsYXN0IHR3byBzdHJpbmdzIGFyZSBub3QgaW5zZXJ0ZWQgaW5cbiAgICAgICAqIHRoZSBoYXNoIHRhYmxlLlxuICAgICAgICovXG4gICAgICBzLmxvb2thaGVhZCAtPSBzLnByZXZfbGVuZ3RoIC0gMTtcbiAgICAgIHMucHJldl9sZW5ndGggLT0gMjtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKCsrcy5zdHJzdGFydCA8PSBtYXhfaW5zZXJ0KSB7XG4gICAgICAgICAgLyoqKiBJTlNFUlRfU1RSSU5HKHMsIHMuc3Ryc3RhcnQsIGhhc2hfaGVhZCk7ICoqKi9cbiAgICAgICAgICBzLmluc19oID0gSEFTSChzLCBzLmluc19oLCBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgTUlOX01BVENIIC0gMV0pO1xuICAgICAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoLS1zLnByZXZfbGVuZ3RoICE9PSAwKTtcbiAgICAgIHMubWF0Y2hfYXZhaWxhYmxlID0gMDtcbiAgICAgIHMubWF0Y2hfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgICAgIHMuc3Ryc3RhcnQrKztcblxuICAgICAgaWYgKGJmbHVzaCkge1xuICAgICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICAgIH1cbiAgICAgICAgLyoqKi9cbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAocy5tYXRjaF9hdmFpbGFibGUpIHtcbiAgICAgIC8qIElmIHRoZXJlIHdhcyBubyBtYXRjaCBhdCB0aGUgcHJldmlvdXMgcG9zaXRpb24sIG91dHB1dCBhXG4gICAgICAgKiBzaW5nbGUgbGl0ZXJhbC4gSWYgdGhlcmUgd2FzIGEgbWF0Y2ggYnV0IHRoZSBjdXJyZW50IG1hdGNoXG4gICAgICAgKiBpcyBsb25nZXIsIHRydW5jYXRlIHRoZSBwcmV2aW91cyBtYXRjaCB0byBhIHNpbmdsZSBsaXRlcmFsLlxuICAgICAgICovXG4gICAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMtPndpbmRvd1tzLT5zdHJzdGFydC0xXSkpO1xuICAgICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnQtMV0sIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IF90cl90YWxseShzLCAwLCBzLndpbmRvd1tzLnN0cnN0YXJ0IC0gMV0pO1xuXG4gICAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAgIC8qKiogRkxVU0hfQkxPQ0tfT05MWShzLCAwKSAqKiovXG4gICAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgICAvKioqL1xuICAgICAgfVxuICAgICAgcy5zdHJzdGFydCsrO1xuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIFRoZXJlIGlzIG5vIHByZXZpb3VzIG1hdGNoIHRvIGNvbXBhcmUgd2l0aCwgd2FpdCBmb3JcbiAgICAgICAqIHRoZSBuZXh0IHN0ZXAgdG8gZGVjaWRlLlxuICAgICAgICovXG4gICAgICBzLm1hdGNoX2F2YWlsYWJsZSA9IDE7XG4gICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAoZmx1c2ggIT0gWl9OT19GTFVTSCwgXCJubyBmbHVzaD9cIik7XG4gIGlmIChzLm1hdGNoX2F2YWlsYWJsZSkge1xuICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy0+d2luZG93W3MtPnN0cnN0YXJ0LTFdKSk7XG4gICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnQtMV0sIGJmbHVzaCk7ICoqKi9cbiAgICBiZmx1c2ggPSBfdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydCAtIDFdKTtcblxuICAgIHMubWF0Y2hfYXZhaWxhYmxlID0gMDtcbiAgfVxuICBzLmluc2VydCA9IHMuc3Ryc3RhcnQgPCBNSU5fTUFUQ0ggLSAxID8gcy5zdHJzdGFydCA6IE1JTl9NQVRDSCAtIDE7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuICBpZiAocy5zeW1fbmV4dCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuXG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZvciBaX1JMRSwgc2ltcGx5IGxvb2sgZm9yIHJ1bnMgb2YgYnl0ZXMsIGdlbmVyYXRlIG1hdGNoZXMgb25seSBvZiBkaXN0YW5jZVxuICogb25lLiAgRG8gbm90IG1haW50YWluIGEgaGFzaCB0YWJsZS4gIChJdCB3aWxsIGJlIHJlZ2VuZXJhdGVkIGlmIHRoaXMgcnVuIG9mXG4gKiBkZWZsYXRlIHN3aXRjaGVzIGF3YXkgZnJvbSBaX1JMRS4pXG4gKi9cbmNvbnN0IGRlZmxhdGVfcmxlID0gKHMsIGZsdXNoKSA9PiB7XG5cbiAgbGV0IGJmbHVzaDsgICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cbiAgbGV0IHByZXY7ICAgICAgICAgICAgICAvKiBieXRlIGF0IGRpc3RhbmNlIG9uZSB0byBtYXRjaCAqL1xuICBsZXQgc2Nhbiwgc3RyZW5kOyAgICAgIC8qIHNjYW4gZ29lcyB1cCB0byBzdHJlbmQgZm9yIGxlbmd0aCBvZiBydW4gKi9cblxuICBjb25zdCBfd2luID0gcy53aW5kb3c7XG5cbiAgZm9yICg7Oykge1xuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IHdlIGFsd2F5cyBoYXZlIGVub3VnaCBsb29rYWhlYWQsIGV4Y2VwdFxuICAgICAqIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IGZpbGUuIFdlIG5lZWQgTUFYX01BVENIIGJ5dGVzXG4gICAgICogZm9yIHRoZSBsb25nZXN0IHJ1biwgcGx1cyBvbmUgZm9yIHRoZSB1bnJvbGxlZCBsb29wLlxuICAgICAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA8PSBNQVhfTUFUQ0gpIHtcbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkIDw9IE1BWF9NQVRDSCAmJiBmbHVzaCA9PT0gWl9OT19GTFVTSCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7IGJyZWFrOyB9IC8qIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrICovXG4gICAgfVxuXG4gICAgLyogU2VlIGhvdyBtYW55IHRpbWVzIHRoZSBwcmV2aW91cyBieXRlIHJlcGVhdHMgKi9cbiAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgaWYgKHMubG9va2FoZWFkID49IE1JTl9NQVRDSCAmJiBzLnN0cnN0YXJ0ID4gMCkge1xuICAgICAgc2NhbiA9IHMuc3Ryc3RhcnQgLSAxO1xuICAgICAgcHJldiA9IF93aW5bc2Nhbl07XG4gICAgICBpZiAocHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0pIHtcbiAgICAgICAgc3RyZW5kID0gcy5zdHJzdGFydCArIE1BWF9NQVRDSDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIC8qanNoaW50IG5vZW1wdHk6ZmFsc2UqL1xuICAgICAgICB9IHdoaWxlIChwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmXG4gICAgICAgICAgICAgICAgIHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiZcbiAgICAgICAgICAgICAgICAgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJlxuICAgICAgICAgICAgICAgICBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmXG4gICAgICAgICAgICAgICAgIHNjYW4gPCBzdHJlbmQpO1xuICAgICAgICBzLm1hdGNoX2xlbmd0aCA9IE1BWF9NQVRDSCAtIChzdHJlbmQgLSBzY2FuKTtcbiAgICAgICAgaWYgKHMubWF0Y2hfbGVuZ3RoID4gcy5sb29rYWhlYWQpIHtcbiAgICAgICAgICBzLm1hdGNoX2xlbmd0aCA9IHMubG9va2FoZWFkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL0Fzc2VydChzY2FuIDw9IHMtPndpbmRvdysodUludCkocy0+d2luZG93X3NpemUtMSksIFwid2lsZCBzY2FuXCIpO1xuICAgIH1cblxuICAgIC8qIEVtaXQgbWF0Y2ggaWYgaGF2ZSBydW4gb2YgTUlOX01BVENIIG9yIGxvbmdlciwgZWxzZSBlbWl0IGxpdGVyYWwgKi9cbiAgICBpZiAocy5tYXRjaF9sZW5ndGggPj0gTUlOX01BVENIKSB7XG4gICAgICAvL2NoZWNrX21hdGNoKHMsIHMuc3Ryc3RhcnQsIHMuc3Ryc3RhcnQgLSAxLCBzLm1hdGNoX2xlbmd0aCk7XG5cbiAgICAgIC8qKiogX3RyX3RhbGx5X2Rpc3QocywgMSwgcy5tYXRjaF9sZW5ndGggLSBNSU5fTUFUQ0gsIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IF90cl90YWxseShzLCAxLCBzLm1hdGNoX2xlbmd0aCAtIE1JTl9NQVRDSCk7XG5cbiAgICAgIHMubG9va2FoZWFkIC09IHMubWF0Y2hfbGVuZ3RoO1xuICAgICAgcy5zdHJzdGFydCArPSBzLm1hdGNoX2xlbmd0aDtcbiAgICAgIHMubWF0Y2hfbGVuZ3RoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogTm8gbWF0Y2gsIG91dHB1dCBhIGxpdGVyYWwgYnl0ZSAqL1xuICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLT53aW5kb3dbcy0+c3Ryc3RhcnRdKSk7XG4gICAgICAvKioqIF90cl90YWxseV9saXQocywgcy53aW5kb3dbcy5zdHJzdGFydF0sIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IF90cl90YWxseShzLCAwLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSk7XG5cbiAgICAgIHMubG9va2FoZWFkLS07XG4gICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgfVxuICAgIGlmIChiZmx1c2gpIHtcbiAgICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIC8qKiovXG4gICAgfVxuICB9XG4gIHMuaW5zZXJ0ID0gMDtcbiAgaWYgKGZsdXNoID09PSBaX0ZJTklTSCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG4gIGlmIChzLnN5bV9uZXh0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGb3IgWl9IVUZGTUFOX09OTFksIGRvIG5vdCBsb29rIGZvciBtYXRjaGVzLiAgRG8gbm90IG1haW50YWluIGEgaGFzaCB0YWJsZS5cbiAqIChJdCB3aWxsIGJlIHJlZ2VuZXJhdGVkIGlmIHRoaXMgcnVuIG9mIGRlZmxhdGUgc3dpdGNoZXMgYXdheSBmcm9tIEh1ZmZtYW4uKVxuICovXG5jb25zdCBkZWZsYXRlX2h1ZmYgPSAocywgZmx1c2gpID0+IHtcblxuICBsZXQgYmZsdXNoOyAgICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cblxuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSBhIGxpdGVyYWwgdG8gd3JpdGUuICovXG4gICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICBmaWxsX3dpbmRvdyhzKTtcbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkge1xuICAgICAgICBpZiAoZmx1c2ggPT09IFpfTk9fRkxVU0gpIHtcbiAgICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrOyAgICAgIC8qIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrICovXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogT3V0cHV0IGEgbGl0ZXJhbCBieXRlICovXG4gICAgcy5tYXRjaF9sZW5ndGggPSAwO1xuICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy0+d2luZG93W3MtPnN0cnN0YXJ0XSkpO1xuICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSwgYmZsdXNoKTsgKioqL1xuICAgIGJmbHVzaCA9IF90cl90YWxseShzLCAwLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSk7XG4gICAgcy5sb29rYWhlYWQtLTtcbiAgICBzLnN0cnN0YXJ0Kys7XG4gICAgaWYgKGJmbHVzaCkge1xuICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgLyoqKi9cbiAgICB9XG4gIH1cbiAgcy5pbnNlcnQgPSAwO1xuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cbiAgaWYgKHMuc3ltX25leHQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cbiAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG59O1xuXG4vKiBWYWx1ZXMgZm9yIG1heF9sYXp5X21hdGNoLCBnb29kX21hdGNoIGFuZCBtYXhfY2hhaW5fbGVuZ3RoLCBkZXBlbmRpbmcgb25cbiAqIHRoZSBkZXNpcmVkIHBhY2sgbGV2ZWwgKDAuLjkpLiBUaGUgdmFsdWVzIGdpdmVuIGJlbG93IGhhdmUgYmVlbiB0dW5lZCB0b1xuICogZXhjbHVkZSB3b3JzdCBjYXNlIHBlcmZvcm1hbmNlIGZvciBwYXRob2xvZ2ljYWwgZmlsZXMuIEJldHRlciB2YWx1ZXMgbWF5IGJlXG4gKiBmb3VuZCBmb3Igc3BlY2lmaWMgZmlsZXMuXG4gKi9cbmZ1bmN0aW9uIENvbmZpZyhnb29kX2xlbmd0aCwgbWF4X2xhenksIG5pY2VfbGVuZ3RoLCBtYXhfY2hhaW4sIGZ1bmMpIHtcblxuICB0aGlzLmdvb2RfbGVuZ3RoID0gZ29vZF9sZW5ndGg7XG4gIHRoaXMubWF4X2xhenkgPSBtYXhfbGF6eTtcbiAgdGhpcy5uaWNlX2xlbmd0aCA9IG5pY2VfbGVuZ3RoO1xuICB0aGlzLm1heF9jaGFpbiA9IG1heF9jaGFpbjtcbiAgdGhpcy5mdW5jID0gZnVuYztcbn1cblxuY29uc3QgY29uZmlndXJhdGlvbl90YWJsZSA9IFtcbiAgLyogICAgICBnb29kIGxhenkgbmljZSBjaGFpbiAqL1xuICBuZXcgQ29uZmlnKDAsIDAsIDAsIDAsIGRlZmxhdGVfc3RvcmVkKSwgICAgICAgICAgLyogMCBzdG9yZSBvbmx5ICovXG4gIG5ldyBDb25maWcoNCwgNCwgOCwgNCwgZGVmbGF0ZV9mYXN0KSwgICAgICAgICAgICAvKiAxIG1heCBzcGVlZCwgbm8gbGF6eSBtYXRjaGVzICovXG4gIG5ldyBDb25maWcoNCwgNSwgMTYsIDgsIGRlZmxhdGVfZmFzdCksICAgICAgICAgICAvKiAyICovXG4gIG5ldyBDb25maWcoNCwgNiwgMzIsIDMyLCBkZWZsYXRlX2Zhc3QpLCAgICAgICAgICAvKiAzICovXG5cbiAgbmV3IENvbmZpZyg0LCA0LCAxNiwgMTYsIGRlZmxhdGVfc2xvdyksICAgICAgICAgIC8qIDQgbGF6eSBtYXRjaGVzICovXG4gIG5ldyBDb25maWcoOCwgMTYsIDMyLCAzMiwgZGVmbGF0ZV9zbG93KSwgICAgICAgICAvKiA1ICovXG4gIG5ldyBDb25maWcoOCwgMTYsIDEyOCwgMTI4LCBkZWZsYXRlX3Nsb3cpLCAgICAgICAvKiA2ICovXG4gIG5ldyBDb25maWcoOCwgMzIsIDEyOCwgMjU2LCBkZWZsYXRlX3Nsb3cpLCAgICAgICAvKiA3ICovXG4gIG5ldyBDb25maWcoMzIsIDEyOCwgMjU4LCAxMDI0LCBkZWZsYXRlX3Nsb3cpLCAgICAvKiA4ICovXG4gIG5ldyBDb25maWcoMzIsIDI1OCwgMjU4LCA0MDk2LCBkZWZsYXRlX3Nsb3cpICAgICAvKiA5IG1heCBjb21wcmVzc2lvbiAqL1xuXTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEluaXRpYWxpemUgdGhlIFwibG9uZ2VzdCBtYXRjaFwiIHJvdXRpbmVzIGZvciBhIG5ldyB6bGliIHN0cmVhbVxuICovXG5jb25zdCBsbV9pbml0ID0gKHMpID0+IHtcblxuICBzLndpbmRvd19zaXplID0gMiAqIHMud19zaXplO1xuXG4gIC8qKiogQ0xFQVJfSEFTSChzKTsgKioqL1xuICB6ZXJvKHMuaGVhZCk7IC8vIEZpbGwgd2l0aCBOSUwgKD0gMCk7XG5cbiAgLyogU2V0IHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyczpcbiAgICovXG4gIHMubWF4X2xhenlfbWF0Y2ggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLm1heF9sYXp5O1xuICBzLmdvb2RfbWF0Y2ggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLmdvb2RfbGVuZ3RoO1xuICBzLm5pY2VfbWF0Y2ggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLm5pY2VfbGVuZ3RoO1xuICBzLm1heF9jaGFpbl9sZW5ndGggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLm1heF9jaGFpbjtcblxuICBzLnN0cnN0YXJ0ID0gMDtcbiAgcy5ibG9ja19zdGFydCA9IDA7XG4gIHMubG9va2FoZWFkID0gMDtcbiAgcy5pbnNlcnQgPSAwO1xuICBzLm1hdGNoX2xlbmd0aCA9IHMucHJldl9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuICBzLm1hdGNoX2F2YWlsYWJsZSA9IDA7XG4gIHMuaW5zX2ggPSAwO1xufTtcblxuXG5mdW5jdGlvbiBEZWZsYXRlU3RhdGUoKSB7XG4gIHRoaXMuc3RybSA9IG51bGw7ICAgICAgICAgICAgLyogcG9pbnRlciBiYWNrIHRvIHRoaXMgemxpYiBzdHJlYW0gKi9cbiAgdGhpcy5zdGF0dXMgPSAwOyAgICAgICAgICAgIC8qIGFzIHRoZSBuYW1lIGltcGxpZXMgKi9cbiAgdGhpcy5wZW5kaW5nX2J1ZiA9IG51bGw7ICAgICAgLyogb3V0cHV0IHN0aWxsIHBlbmRpbmcgKi9cbiAgdGhpcy5wZW5kaW5nX2J1Zl9zaXplID0gMDsgIC8qIHNpemUgb2YgcGVuZGluZ19idWYgKi9cbiAgdGhpcy5wZW5kaW5nX291dCA9IDA7ICAgICAgIC8qIG5leHQgcGVuZGluZyBieXRlIHRvIG91dHB1dCB0byB0aGUgc3RyZWFtICovXG4gIHRoaXMucGVuZGluZyA9IDA7ICAgICAgICAgICAvKiBuYiBvZiBieXRlcyBpbiB0aGUgcGVuZGluZyBidWZmZXIgKi9cbiAgdGhpcy53cmFwID0gMDsgICAgICAgICAgICAgIC8qIGJpdCAwIHRydWUgZm9yIHpsaWIsIGJpdCAxIHRydWUgZm9yIGd6aXAgKi9cbiAgdGhpcy5nemhlYWQgPSBudWxsOyAgICAgICAgIC8qIGd6aXAgaGVhZGVyIGluZm9ybWF0aW9uIHRvIHdyaXRlICovXG4gIHRoaXMuZ3ppbmRleCA9IDA7ICAgICAgICAgICAvKiB3aGVyZSBpbiBleHRyYSwgbmFtZSwgb3IgY29tbWVudCAqL1xuICB0aGlzLm1ldGhvZCA9IFpfREVGTEFURUQ7IC8qIGNhbiBvbmx5IGJlIERFRkxBVEVEICovXG4gIHRoaXMubGFzdF9mbHVzaCA9IC0xOyAgIC8qIHZhbHVlIG9mIGZsdXNoIHBhcmFtIGZvciBwcmV2aW91cyBkZWZsYXRlIGNhbGwgKi9cblxuICB0aGlzLndfc2l6ZSA9IDA7ICAvKiBMWjc3IHdpbmRvdyBzaXplICgzMksgYnkgZGVmYXVsdCkgKi9cbiAgdGhpcy53X2JpdHMgPSAwOyAgLyogbG9nMih3X3NpemUpICAoOC4uMTYpICovXG4gIHRoaXMud19tYXNrID0gMDsgIC8qIHdfc2l6ZSAtIDEgKi9cblxuICB0aGlzLndpbmRvdyA9IG51bGw7XG4gIC8qIFNsaWRpbmcgd2luZG93LiBJbnB1dCBieXRlcyBhcmUgcmVhZCBpbnRvIHRoZSBzZWNvbmQgaGFsZiBvZiB0aGUgd2luZG93LFxuICAgKiBhbmQgbW92ZSB0byB0aGUgZmlyc3QgaGFsZiBsYXRlciB0byBrZWVwIGEgZGljdGlvbmFyeSBvZiBhdCBsZWFzdCB3U2l6ZVxuICAgKiBieXRlcy4gV2l0aCB0aGlzIG9yZ2FuaXphdGlvbiwgbWF0Y2hlcyBhcmUgbGltaXRlZCB0byBhIGRpc3RhbmNlIG9mXG4gICAqIHdTaXplLU1BWF9NQVRDSCBieXRlcywgYnV0IHRoaXMgZW5zdXJlcyB0aGF0IElPIGlzIGFsd2F5c1xuICAgKiBwZXJmb3JtZWQgd2l0aCBhIGxlbmd0aCBtdWx0aXBsZSBvZiB0aGUgYmxvY2sgc2l6ZS5cbiAgICovXG5cbiAgdGhpcy53aW5kb3dfc2l6ZSA9IDA7XG4gIC8qIEFjdHVhbCBzaXplIG9mIHdpbmRvdzogMip3U2l6ZSwgZXhjZXB0IHdoZW4gdGhlIHVzZXIgaW5wdXQgYnVmZmVyXG4gICAqIGlzIGRpcmVjdGx5IHVzZWQgYXMgc2xpZGluZyB3aW5kb3cuXG4gICAqL1xuXG4gIHRoaXMucHJldiA9IG51bGw7XG4gIC8qIExpbmsgdG8gb2xkZXIgc3RyaW5nIHdpdGggc2FtZSBoYXNoIGluZGV4LiBUbyBsaW1pdCB0aGUgc2l6ZSBvZiB0aGlzXG4gICAqIGFycmF5IHRvIDY0SywgdGhpcyBsaW5rIGlzIG1haW50YWluZWQgb25seSBmb3IgdGhlIGxhc3QgMzJLIHN0cmluZ3MuXG4gICAqIEFuIGluZGV4IGluIHRoaXMgYXJyYXkgaXMgdGh1cyBhIHdpbmRvdyBpbmRleCBtb2R1bG8gMzJLLlxuICAgKi9cblxuICB0aGlzLmhlYWQgPSBudWxsOyAgIC8qIEhlYWRzIG9mIHRoZSBoYXNoIGNoYWlucyBvciBOSUwuICovXG5cbiAgdGhpcy5pbnNfaCA9IDA7ICAgICAgIC8qIGhhc2ggaW5kZXggb2Ygc3RyaW5nIHRvIGJlIGluc2VydGVkICovXG4gIHRoaXMuaGFzaF9zaXplID0gMDsgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgaW4gaGFzaCB0YWJsZSAqL1xuICB0aGlzLmhhc2hfYml0cyA9IDA7ICAgLyogbG9nMihoYXNoX3NpemUpICovXG4gIHRoaXMuaGFzaF9tYXNrID0gMDsgICAvKiBoYXNoX3NpemUtMSAqL1xuXG4gIHRoaXMuaGFzaF9zaGlmdCA9IDA7XG4gIC8qIE51bWJlciBvZiBiaXRzIGJ5IHdoaWNoIGluc19oIG11c3QgYmUgc2hpZnRlZCBhdCBlYWNoIGlucHV0XG4gICAqIHN0ZXAuIEl0IG11c3QgYmUgc3VjaCB0aGF0IGFmdGVyIE1JTl9NQVRDSCBzdGVwcywgdGhlIG9sZGVzdFxuICAgKiBieXRlIG5vIGxvbmdlciB0YWtlcyBwYXJ0IGluIHRoZSBoYXNoIGtleSwgdGhhdCBpczpcbiAgICogICBoYXNoX3NoaWZ0ICogTUlOX01BVENIID49IGhhc2hfYml0c1xuICAgKi9cblxuICB0aGlzLmJsb2NrX3N0YXJ0ID0gMDtcbiAgLyogV2luZG93IHBvc2l0aW9uIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgb3V0cHV0IGJsb2NrLiBHZXRzXG4gICAqIG5lZ2F0aXZlIHdoZW4gdGhlIHdpbmRvdyBpcyBtb3ZlZCBiYWNrd2FyZHMuXG4gICAqL1xuXG4gIHRoaXMubWF0Y2hfbGVuZ3RoID0gMDsgICAgICAvKiBsZW5ndGggb2YgYmVzdCBtYXRjaCAqL1xuICB0aGlzLnByZXZfbWF0Y2ggPSAwOyAgICAgICAgLyogcHJldmlvdXMgbWF0Y2ggKi9cbiAgdGhpcy5tYXRjaF9hdmFpbGFibGUgPSAwOyAgIC8qIHNldCBpZiBwcmV2aW91cyBtYXRjaCBleGlzdHMgKi9cbiAgdGhpcy5zdHJzdGFydCA9IDA7ICAgICAgICAgIC8qIHN0YXJ0IG9mIHN0cmluZyB0byBpbnNlcnQgKi9cbiAgdGhpcy5tYXRjaF9zdGFydCA9IDA7ICAgICAgIC8qIHN0YXJ0IG9mIG1hdGNoaW5nIHN0cmluZyAqL1xuICB0aGlzLmxvb2thaGVhZCA9IDA7ICAgICAgICAgLyogbnVtYmVyIG9mIHZhbGlkIGJ5dGVzIGFoZWFkIGluIHdpbmRvdyAqL1xuXG4gIHRoaXMucHJldl9sZW5ndGggPSAwO1xuICAvKiBMZW5ndGggb2YgdGhlIGJlc3QgbWF0Y2ggYXQgcHJldmlvdXMgc3RlcC4gTWF0Y2hlcyBub3QgZ3JlYXRlciB0aGFuIHRoaXNcbiAgICogYXJlIGRpc2NhcmRlZC4gVGhpcyBpcyB1c2VkIGluIHRoZSBsYXp5IG1hdGNoIGV2YWx1YXRpb24uXG4gICAqL1xuXG4gIHRoaXMubWF4X2NoYWluX2xlbmd0aCA9IDA7XG4gIC8qIFRvIHNwZWVkIHVwIGRlZmxhdGlvbiwgaGFzaCBjaGFpbnMgYXJlIG5ldmVyIHNlYXJjaGVkIGJleW9uZCB0aGlzXG4gICAqIGxlbmd0aC4gIEEgaGlnaGVyIGxpbWl0IGltcHJvdmVzIGNvbXByZXNzaW9uIHJhdGlvIGJ1dCBkZWdyYWRlcyB0aGVcbiAgICogc3BlZWQuXG4gICAqL1xuXG4gIHRoaXMubWF4X2xhenlfbWF0Y2ggPSAwO1xuICAvKiBBdHRlbXB0IHRvIGZpbmQgYSBiZXR0ZXIgbWF0Y2ggb25seSB3aGVuIHRoZSBjdXJyZW50IG1hdGNoIGlzIHN0cmljdGx5XG4gICAqIHNtYWxsZXIgdGhhbiB0aGlzIHZhbHVlLiBUaGlzIG1lY2hhbmlzbSBpcyB1c2VkIG9ubHkgZm9yIGNvbXByZXNzaW9uXG4gICAqIGxldmVscyA+PSA0LlxuICAgKi9cbiAgLy8gVGhhdCdzIGFsaWFzIHRvIG1heF9sYXp5X21hdGNoLCBkb24ndCB1c2UgZGlyZWN0bHlcbiAgLy90aGlzLm1heF9pbnNlcnRfbGVuZ3RoID0gMDtcbiAgLyogSW5zZXJ0IG5ldyBzdHJpbmdzIGluIHRoZSBoYXNoIHRhYmxlIG9ubHkgaWYgdGhlIG1hdGNoIGxlbmd0aCBpcyBub3RcbiAgICogZ3JlYXRlciB0aGFuIHRoaXMgbGVuZ3RoLiBUaGlzIHNhdmVzIHRpbWUgYnV0IGRlZ3JhZGVzIGNvbXByZXNzaW9uLlxuICAgKiBtYXhfaW5zZXJ0X2xlbmd0aCBpcyB1c2VkIG9ubHkgZm9yIGNvbXByZXNzaW9uIGxldmVscyA8PSAzLlxuICAgKi9cblxuICB0aGlzLmxldmVsID0gMDsgICAgIC8qIGNvbXByZXNzaW9uIGxldmVsICgxLi45KSAqL1xuICB0aGlzLnN0cmF0ZWd5ID0gMDsgIC8qIGZhdm9yIG9yIGZvcmNlIEh1ZmZtYW4gY29kaW5nKi9cblxuICB0aGlzLmdvb2RfbWF0Y2ggPSAwO1xuICAvKiBVc2UgYSBmYXN0ZXIgc2VhcmNoIHdoZW4gdGhlIHByZXZpb3VzIG1hdGNoIGlzIGxvbmdlciB0aGFuIHRoaXMgKi9cblxuICB0aGlzLm5pY2VfbWF0Y2ggPSAwOyAvKiBTdG9wIHNlYXJjaGluZyB3aGVuIGN1cnJlbnQgbWF0Y2ggZXhjZWVkcyB0aGlzICovXG5cbiAgICAgICAgICAgICAgLyogdXNlZCBieSB0cmVlcy5jOiAqL1xuXG4gIC8qIERpZG4ndCB1c2UgY3RfZGF0YSB0eXBlZGVmIGJlbG93IHRvIHN1cHByZXNzIGNvbXBpbGVyIHdhcm5pbmcgKi9cblxuICAvLyBzdHJ1Y3QgY3RfZGF0YV9zIGR5bl9sdHJlZVtIRUFQX1NJWkVdOyAgIC8qIGxpdGVyYWwgYW5kIGxlbmd0aCB0cmVlICovXG4gIC8vIHN0cnVjdCBjdF9kYXRhX3MgZHluX2R0cmVlWzIqRF9DT0RFUysxXTsgLyogZGlzdGFuY2UgdHJlZSAqL1xuICAvLyBzdHJ1Y3QgY3RfZGF0YV9zIGJsX3RyZWVbMipCTF9DT0RFUysxXTsgIC8qIEh1ZmZtYW4gdHJlZSBmb3IgYml0IGxlbmd0aHMgKi9cblxuICAvLyBVc2UgZmxhdCBhcnJheSBvZiBET1VCTEUgc2l6ZSwgd2l0aCBpbnRlcmxlYXZlZCBmYXRhLFxuICAvLyBiZWNhdXNlIEpTIGRvZXMgbm90IHN1cHBvcnQgZWZmZWN0aXZlXG4gIHRoaXMuZHluX2x0cmVlICA9IG5ldyBVaW50MTZBcnJheShIRUFQX1NJWkUgKiAyKTtcbiAgdGhpcy5keW5fZHRyZWUgID0gbmV3IFVpbnQxNkFycmF5KCgyICogRF9DT0RFUyArIDEpICogMik7XG4gIHRoaXMuYmxfdHJlZSAgICA9IG5ldyBVaW50MTZBcnJheSgoMiAqIEJMX0NPREVTICsgMSkgKiAyKTtcbiAgemVybyh0aGlzLmR5bl9sdHJlZSk7XG4gIHplcm8odGhpcy5keW5fZHRyZWUpO1xuICB6ZXJvKHRoaXMuYmxfdHJlZSk7XG5cbiAgdGhpcy5sX2Rlc2MgICA9IG51bGw7ICAgICAgICAgLyogZGVzYy4gZm9yIGxpdGVyYWwgdHJlZSAqL1xuICB0aGlzLmRfZGVzYyAgID0gbnVsbDsgICAgICAgICAvKiBkZXNjLiBmb3IgZGlzdGFuY2UgdHJlZSAqL1xuICB0aGlzLmJsX2Rlc2MgID0gbnVsbDsgICAgICAgICAvKiBkZXNjLiBmb3IgYml0IGxlbmd0aCB0cmVlICovXG5cbiAgLy91c2ggYmxfY291bnRbTUFYX0JJVFMrMV07XG4gIHRoaXMuYmxfY291bnQgPSBuZXcgVWludDE2QXJyYXkoTUFYX0JJVFMgKyAxKTtcbiAgLyogbnVtYmVyIG9mIGNvZGVzIGF0IGVhY2ggYml0IGxlbmd0aCBmb3IgYW4gb3B0aW1hbCB0cmVlICovXG5cbiAgLy9pbnQgaGVhcFsyKkxfQ09ERVMrMV07ICAgICAgLyogaGVhcCB1c2VkIHRvIGJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzICovXG4gIHRoaXMuaGVhcCA9IG5ldyBVaW50MTZBcnJheSgyICogTF9DT0RFUyArIDEpOyAgLyogaGVhcCB1c2VkIHRvIGJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzICovXG4gIHplcm8odGhpcy5oZWFwKTtcblxuICB0aGlzLmhlYXBfbGVuID0gMDsgICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGhlYXAgKi9cbiAgdGhpcy5oZWFwX21heCA9IDA7ICAgICAgICAgICAgICAgLyogZWxlbWVudCBvZiBsYXJnZXN0IGZyZXF1ZW5jeSAqL1xuICAvKiBUaGUgc29ucyBvZiBoZWFwW25dIGFyZSBoZWFwWzIqbl0gYW5kIGhlYXBbMipuKzFdLiBoZWFwWzBdIGlzIG5vdCB1c2VkLlxuICAgKiBUaGUgc2FtZSBoZWFwIGFycmF5IGlzIHVzZWQgdG8gYnVpbGQgYWxsIHRyZWVzLlxuICAgKi9cblxuICB0aGlzLmRlcHRoID0gbmV3IFVpbnQxNkFycmF5KDIgKiBMX0NPREVTICsgMSk7IC8vdWNoIGRlcHRoWzIqTF9DT0RFUysxXTtcbiAgemVybyh0aGlzLmRlcHRoKTtcbiAgLyogRGVwdGggb2YgZWFjaCBzdWJ0cmVlIHVzZWQgYXMgdGllIGJyZWFrZXIgZm9yIHRyZWVzIG9mIGVxdWFsIGZyZXF1ZW5jeVxuICAgKi9cblxuICB0aGlzLnN5bV9idWYgPSAwOyAgICAgICAgLyogYnVmZmVyIGZvciBkaXN0YW5jZXMgYW5kIGxpdGVyYWxzL2xlbmd0aHMgKi9cblxuICB0aGlzLmxpdF9idWZzaXplID0gMDtcbiAgLyogU2l6ZSBvZiBtYXRjaCBidWZmZXIgZm9yIGxpdGVyYWxzL2xlbmd0aHMuICBUaGVyZSBhcmUgNCByZWFzb25zIGZvclxuICAgKiBsaW1pdGluZyBsaXRfYnVmc2l6ZSB0byA2NEs6XG4gICAqICAgLSBmcmVxdWVuY2llcyBjYW4gYmUga2VwdCBpbiAxNiBiaXQgY291bnRlcnNcbiAgICogICAtIGlmIGNvbXByZXNzaW9uIGlzIG5vdCBzdWNjZXNzZnVsIGZvciB0aGUgZmlyc3QgYmxvY2ssIGFsbCBpbnB1dFxuICAgKiAgICAgZGF0YSBpcyBzdGlsbCBpbiB0aGUgd2luZG93IHNvIHdlIGNhbiBzdGlsbCBlbWl0IGEgc3RvcmVkIGJsb2NrIGV2ZW5cbiAgICogICAgIHdoZW4gaW5wdXQgY29tZXMgZnJvbSBzdGFuZGFyZCBpbnB1dC4gIChUaGlzIGNhbiBhbHNvIGJlIGRvbmUgZm9yXG4gICAqICAgICBhbGwgYmxvY2tzIGlmIGxpdF9idWZzaXplIGlzIG5vdCBncmVhdGVyIHRoYW4gMzJLLilcbiAgICogICAtIGlmIGNvbXByZXNzaW9uIGlzIG5vdCBzdWNjZXNzZnVsIGZvciBhIGZpbGUgc21hbGxlciB0aGFuIDY0Sywgd2UgY2FuXG4gICAqICAgICBldmVuIGVtaXQgYSBzdG9yZWQgZmlsZSBpbnN0ZWFkIG9mIGEgc3RvcmVkIGJsb2NrIChzYXZpbmcgNSBieXRlcykuXG4gICAqICAgICBUaGlzIGlzIGFwcGxpY2FibGUgb25seSBmb3IgemlwIChub3QgZ3ppcCBvciB6bGliKS5cbiAgICogICAtIGNyZWF0aW5nIG5ldyBIdWZmbWFuIHRyZWVzIGxlc3MgZnJlcXVlbnRseSBtYXkgbm90IHByb3ZpZGUgZmFzdFxuICAgKiAgICAgYWRhcHRhdGlvbiB0byBjaGFuZ2VzIGluIHRoZSBpbnB1dCBkYXRhIHN0YXRpc3RpY3MuIChUYWtlIGZvclxuICAgKiAgICAgZXhhbXBsZSBhIGJpbmFyeSBmaWxlIHdpdGggcG9vcmx5IGNvbXByZXNzaWJsZSBjb2RlIGZvbGxvd2VkIGJ5XG4gICAqICAgICBhIGhpZ2hseSBjb21wcmVzc2libGUgc3RyaW5nIHRhYmxlLikgU21hbGxlciBidWZmZXIgc2l6ZXMgZ2l2ZVxuICAgKiAgICAgZmFzdCBhZGFwdGF0aW9uIGJ1dCBoYXZlIG9mIGNvdXJzZSB0aGUgb3ZlcmhlYWQgb2YgdHJhbnNtaXR0aW5nXG4gICAqICAgICB0cmVlcyBtb3JlIGZyZXF1ZW50bHkuXG4gICAqICAgLSBJIGNhbid0IGNvdW50IGFib3ZlIDRcbiAgICovXG5cbiAgdGhpcy5zeW1fbmV4dCA9IDA7ICAgICAgLyogcnVubmluZyBpbmRleCBpbiBzeW1fYnVmICovXG4gIHRoaXMuc3ltX2VuZCA9IDA7ICAgICAgIC8qIHN5bWJvbCB0YWJsZSBmdWxsIHdoZW4gc3ltX25leHQgcmVhY2hlcyB0aGlzICovXG5cbiAgdGhpcy5vcHRfbGVuID0gMDsgICAgICAgLyogYml0IGxlbmd0aCBvZiBjdXJyZW50IGJsb2NrIHdpdGggb3B0aW1hbCB0cmVlcyAqL1xuICB0aGlzLnN0YXRpY19sZW4gPSAwOyAgICAvKiBiaXQgbGVuZ3RoIG9mIGN1cnJlbnQgYmxvY2sgd2l0aCBzdGF0aWMgdHJlZXMgKi9cbiAgdGhpcy5tYXRjaGVzID0gMDsgICAgICAgLyogbnVtYmVyIG9mIHN0cmluZyBtYXRjaGVzIGluIGN1cnJlbnQgYmxvY2sgKi9cbiAgdGhpcy5pbnNlcnQgPSAwOyAgICAgICAgLyogYnl0ZXMgYXQgZW5kIG9mIHdpbmRvdyBsZWZ0IHRvIGluc2VydCAqL1xuXG5cbiAgdGhpcy5iaV9idWYgPSAwO1xuICAvKiBPdXRwdXQgYnVmZmVyLiBiaXRzIGFyZSBpbnNlcnRlZCBzdGFydGluZyBhdCB0aGUgYm90dG9tIChsZWFzdFxuICAgKiBzaWduaWZpY2FudCBiaXRzKS5cbiAgICovXG4gIHRoaXMuYmlfdmFsaWQgPSAwO1xuICAvKiBOdW1iZXIgb2YgdmFsaWQgYml0cyBpbiBiaV9idWYuICBBbGwgYml0cyBhYm92ZSB0aGUgbGFzdCB2YWxpZCBiaXRcbiAgICogYXJlIGFsd2F5cyB6ZXJvLlxuICAgKi9cblxuICAvLyBVc2VkIGZvciB3aW5kb3cgbWVtb3J5IGluaXQuIFdlIHNhZmVseSBpZ25vcmUgaXQgZm9yIEpTLiBUaGF0IG1ha2VzXG4gIC8vIHNlbnNlIG9ubHkgZm9yIHBvaW50ZXJzIGFuZCBtZW1vcnkgY2hlY2sgdG9vbHMuXG4gIC8vdGhpcy5oaWdoX3dhdGVyID0gMDtcbiAgLyogSGlnaCB3YXRlciBtYXJrIG9mZnNldCBpbiB3aW5kb3cgZm9yIGluaXRpYWxpemVkIGJ5dGVzIC0tIGJ5dGVzIGFib3ZlXG4gICAqIHRoaXMgYXJlIHNldCB0byB6ZXJvIGluIG9yZGVyIHRvIGF2b2lkIG1lbW9yeSBjaGVjayB3YXJuaW5ncyB3aGVuXG4gICAqIGxvbmdlc3QgbWF0Y2ggcm91dGluZXMgYWNjZXNzIGJ5dGVzIHBhc3QgdGhlIGlucHV0LiAgVGhpcyBpcyB0aGVuXG4gICAqIHVwZGF0ZWQgdG8gdGhlIG5ldyBoaWdoIHdhdGVyIG1hcmsuXG4gICAqL1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENoZWNrIGZvciBhIHZhbGlkIGRlZmxhdGUgc3RyZWFtIHN0YXRlLiBSZXR1cm4gMCBpZiBvaywgMSBpZiBub3QuXG4gKi9cbmNvbnN0IGRlZmxhdGVTdGF0ZUNoZWNrID0gKHN0cm0pID0+IHtcblxuICBpZiAoIXN0cm0pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBjb25zdCBzID0gc3RybS5zdGF0ZTtcbiAgaWYgKCFzIHx8IHMuc3RybSAhPT0gc3RybSB8fCAocy5zdGF0dXMgIT09IElOSVRfU1RBVEUgJiZcbi8vI2lmZGVmIEdaSVBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zdGF0dXMgIT09IEdaSVBfU1RBVEUgJiZcbi8vI2VuZGlmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc3RhdHVzICE9PSBFWFRSQV9TVEFURSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0YXR1cyAhPT0gTkFNRV9TVEFURSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0YXR1cyAhPT0gQ09NTUVOVF9TVEFURSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0YXR1cyAhPT0gSENSQ19TVEFURSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0YXR1cyAhPT0gQlVTWV9TVEFURSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0YXR1cyAhPT0gRklOSVNIX1NUQVRFKSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuXG5jb25zdCBkZWZsYXRlUmVzZXRLZWVwID0gKHN0cm0pID0+IHtcblxuICBpZiAoZGVmbGF0ZVN0YXRlQ2hlY2soc3RybSkpIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIFpfU1RSRUFNX0VSUk9SKTtcbiAgfVxuXG4gIHN0cm0udG90YWxfaW4gPSBzdHJtLnRvdGFsX291dCA9IDA7XG4gIHN0cm0uZGF0YV90eXBlID0gWl9VTktOT1dOO1xuXG4gIGNvbnN0IHMgPSBzdHJtLnN0YXRlO1xuICBzLnBlbmRpbmcgPSAwO1xuICBzLnBlbmRpbmdfb3V0ID0gMDtcblxuICBpZiAocy53cmFwIDwgMCkge1xuICAgIHMud3JhcCA9IC1zLndyYXA7XG4gICAgLyogd2FzIG1hZGUgbmVnYXRpdmUgYnkgZGVmbGF0ZSguLi4sIFpfRklOSVNIKTsgKi9cbiAgfVxuICBzLnN0YXR1cyA9XG4vLyNpZmRlZiBHWklQXG4gICAgcy53cmFwID09PSAyID8gR1pJUF9TVEFURSA6XG4vLyNlbmRpZlxuICAgIHMud3JhcCA/IElOSVRfU1RBVEUgOiBCVVNZX1NUQVRFO1xuICBzdHJtLmFkbGVyID0gKHMud3JhcCA9PT0gMikgP1xuICAgIDAgIC8vIGNyYzMyKDAsIFpfTlVMTCwgMClcbiAgOlxuICAgIDE7IC8vIGFkbGVyMzIoMCwgWl9OVUxMLCAwKVxuICBzLmxhc3RfZmx1c2ggPSAtMjtcbiAgX3RyX2luaXQocyk7XG4gIHJldHVybiBaX09LO1xufTtcblxuXG5jb25zdCBkZWZsYXRlUmVzZXQgPSAoc3RybSkgPT4ge1xuXG4gIGNvbnN0IHJldCA9IGRlZmxhdGVSZXNldEtlZXAoc3RybSk7XG4gIGlmIChyZXQgPT09IFpfT0spIHtcbiAgICBsbV9pbml0KHN0cm0uc3RhdGUpO1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5cbmNvbnN0IGRlZmxhdGVTZXRIZWFkZXIgPSAoc3RybSwgaGVhZCkgPT4ge1xuXG4gIGlmIChkZWZsYXRlU3RhdGVDaGVjayhzdHJtKSB8fCBzdHJtLnN0YXRlLndyYXAgIT09IDIpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cbiAgc3RybS5zdGF0ZS5nemhlYWQgPSBoZWFkO1xuICByZXR1cm4gWl9PSztcbn07XG5cblxuY29uc3QgZGVmbGF0ZUluaXQyID0gKHN0cm0sIGxldmVsLCBtZXRob2QsIHdpbmRvd0JpdHMsIG1lbUxldmVsLCBzdHJhdGVneSkgPT4ge1xuXG4gIGlmICghc3RybSkgeyAvLyA9PT0gWl9OVUxMXG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICB9XG4gIGxldCB3cmFwID0gMTtcblxuICBpZiAobGV2ZWwgPT09IFpfREVGQVVMVF9DT01QUkVTU0lPTikge1xuICAgIGxldmVsID0gNjtcbiAgfVxuXG4gIGlmICh3aW5kb3dCaXRzIDwgMCkgeyAvKiBzdXBwcmVzcyB6bGliIHdyYXBwZXIgKi9cbiAgICB3cmFwID0gMDtcbiAgICB3aW5kb3dCaXRzID0gLXdpbmRvd0JpdHM7XG4gIH1cblxuICBlbHNlIGlmICh3aW5kb3dCaXRzID4gMTUpIHtcbiAgICB3cmFwID0gMjsgICAgICAgICAgIC8qIHdyaXRlIGd6aXAgd3JhcHBlciBpbnN0ZWFkICovXG4gICAgd2luZG93Qml0cyAtPSAxNjtcbiAgfVxuXG5cbiAgaWYgKG1lbUxldmVsIDwgMSB8fCBtZW1MZXZlbCA+IE1BWF9NRU1fTEVWRUwgfHwgbWV0aG9kICE9PSBaX0RFRkxBVEVEIHx8XG4gICAgd2luZG93Qml0cyA8IDggfHwgd2luZG93Qml0cyA+IDE1IHx8IGxldmVsIDwgMCB8fCBsZXZlbCA+IDkgfHxcbiAgICBzdHJhdGVneSA8IDAgfHwgc3RyYXRlZ3kgPiBaX0ZJWEVEIHx8ICh3aW5kb3dCaXRzID09PSA4ICYmIHdyYXAgIT09IDEpKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX1NUUkVBTV9FUlJPUik7XG4gIH1cblxuXG4gIGlmICh3aW5kb3dCaXRzID09PSA4KSB7XG4gICAgd2luZG93Qml0cyA9IDk7XG4gIH1cbiAgLyogdW50aWwgMjU2LWJ5dGUgd2luZG93IGJ1ZyBmaXhlZCAqL1xuXG4gIGNvbnN0IHMgPSBuZXcgRGVmbGF0ZVN0YXRlKCk7XG5cbiAgc3RybS5zdGF0ZSA9IHM7XG4gIHMuc3RybSA9IHN0cm07XG4gIHMuc3RhdHVzID0gSU5JVF9TVEFURTsgICAgIC8qIHRvIHBhc3Mgc3RhdGUgdGVzdCBpbiBkZWZsYXRlUmVzZXQoKSAqL1xuXG4gIHMud3JhcCA9IHdyYXA7XG4gIHMuZ3poZWFkID0gbnVsbDtcbiAgcy53X2JpdHMgPSB3aW5kb3dCaXRzO1xuICBzLndfc2l6ZSA9IDEgPDwgcy53X2JpdHM7XG4gIHMud19tYXNrID0gcy53X3NpemUgLSAxO1xuXG4gIHMuaGFzaF9iaXRzID0gbWVtTGV2ZWwgKyA3O1xuICBzLmhhc2hfc2l6ZSA9IDEgPDwgcy5oYXNoX2JpdHM7XG4gIHMuaGFzaF9tYXNrID0gcy5oYXNoX3NpemUgLSAxO1xuICBzLmhhc2hfc2hpZnQgPSB+figocy5oYXNoX2JpdHMgKyBNSU5fTUFUQ0ggLSAxKSAvIE1JTl9NQVRDSCk7XG5cbiAgcy53aW5kb3cgPSBuZXcgVWludDhBcnJheShzLndfc2l6ZSAqIDIpO1xuICBzLmhlYWQgPSBuZXcgVWludDE2QXJyYXkocy5oYXNoX3NpemUpO1xuICBzLnByZXYgPSBuZXcgVWludDE2QXJyYXkocy53X3NpemUpO1xuXG4gIC8vIERvbid0IG5lZWQgbWVtIGluaXQgbWFnaWMgZm9yIEpTLlxuICAvL3MuaGlnaF93YXRlciA9IDA7ICAvKiBub3RoaW5nIHdyaXR0ZW4gdG8gcy0+d2luZG93IHlldCAqL1xuXG4gIHMubGl0X2J1ZnNpemUgPSAxIDw8IChtZW1MZXZlbCArIDYpOyAvKiAxNksgZWxlbWVudHMgYnkgZGVmYXVsdCAqL1xuXG4gIC8qIFdlIG92ZXJsYXkgcGVuZGluZ19idWYgYW5kIHN5bV9idWYuIFRoaXMgd29ya3Mgc2luY2UgdGhlIGF2ZXJhZ2Ugc2l6ZVxuICAgKiBmb3IgbGVuZ3RoL2Rpc3RhbmNlIHBhaXJzIG92ZXIgYW55IGNvbXByZXNzZWQgYmxvY2sgaXMgYXNzdXJlZCB0byBiZSAzMVxuICAgKiBiaXRzIG9yIGxlc3MuXG4gICAqXG4gICAqIEFuYWx5c2lzOiBUaGUgbG9uZ2VzdCBmaXhlZCBjb2RlcyBhcmUgYSBsZW5ndGggY29kZSBvZiA4IGJpdHMgcGx1cyA1XG4gICAqIGV4dHJhIGJpdHMsIGZvciBsZW5ndGhzIDEzMSB0byAyNTcuIFRoZSBsb25nZXN0IGZpeGVkIGRpc3RhbmNlIGNvZGVzIGFyZVxuICAgKiA1IGJpdHMgcGx1cyAxMyBleHRyYSBiaXRzLCBmb3IgZGlzdGFuY2VzIDE2Mzg1IHRvIDMyNzY4LiBUaGUgbG9uZ2VzdFxuICAgKiBwb3NzaWJsZSBmaXhlZC1jb2RlcyBsZW5ndGgvZGlzdGFuY2UgcGFpciBpcyB0aGVuIDMxIGJpdHMgdG90YWwuXG4gICAqXG4gICAqIHN5bV9idWYgc3RhcnRzIG9uZS1mb3VydGggb2YgdGhlIHdheSBpbnRvIHBlbmRpbmdfYnVmLiBTbyB0aGVyZSBhcmVcbiAgICogdGhyZWUgYnl0ZXMgaW4gc3ltX2J1ZiBmb3IgZXZlcnkgZm91ciBieXRlcyBpbiBwZW5kaW5nX2J1Zi4gRWFjaCBzeW1ib2xcbiAgICogaW4gc3ltX2J1ZiBpcyB0aHJlZSBieXRlcyAtLSB0d28gZm9yIHRoZSBkaXN0YW5jZSBhbmQgb25lIGZvciB0aGVcbiAgICogbGl0ZXJhbC9sZW5ndGguIEFzIGVhY2ggc3ltYm9sIGlzIGNvbnN1bWVkLCB0aGUgcG9pbnRlciB0byB0aGUgbmV4dFxuICAgKiBzeW1fYnVmIHZhbHVlIHRvIHJlYWQgbW92ZXMgZm9yd2FyZCB0aHJlZSBieXRlcy4gRnJvbSB0aGF0IHN5bWJvbCwgdXAgdG9cbiAgICogMzEgYml0cyBhcmUgd3JpdHRlbiB0byBwZW5kaW5nX2J1Zi4gVGhlIGNsb3Nlc3QgdGhlIHdyaXR0ZW4gcGVuZGluZ19idWZcbiAgICogYml0cyBnZXRzIHRvIHRoZSBuZXh0IHN5bV9idWYgc3ltYm9sIHRvIHJlYWQgaXMganVzdCBiZWZvcmUgdGhlIGxhc3RcbiAgICogY29kZSBpcyB3cml0dGVuLiBBdCB0aGF0IHRpbWUsIDMxKihuLTIpIGJpdHMgaGF2ZSBiZWVuIHdyaXR0ZW4sIGp1c3RcbiAgICogYWZ0ZXIgMjQqKG4tMikgYml0cyBoYXZlIGJlZW4gY29uc3VtZWQgZnJvbSBzeW1fYnVmLiBzeW1fYnVmIHN0YXJ0cyBhdFxuICAgKiA4Km4gYml0cyBpbnRvIHBlbmRpbmdfYnVmLiAoTm90ZSB0aGF0IHRoZSBzeW1ib2wgYnVmZmVyIGZpbGxzIHdoZW4gbi0xXG4gICAqIHN5bWJvbHMgYXJlIHdyaXR0ZW4uKSBUaGUgY2xvc2VzdCB0aGUgd3JpdGluZyBnZXRzIHRvIHdoYXQgaXMgdW5yZWFkIGlzXG4gICAqIHRoZW4gbisxNCBiaXRzLiBIZXJlIG4gaXMgbGl0X2J1ZnNpemUsIHdoaWNoIGlzIDE2Mzg0IGJ5IGRlZmF1bHQsIGFuZFxuICAgKiBjYW4gcmFuZ2UgZnJvbSAxMjggdG8gMzI3NjguXG4gICAqXG4gICAqIFRoZXJlZm9yZSwgYXQgYSBtaW5pbXVtLCB0aGVyZSBhcmUgMTQyIGJpdHMgb2Ygc3BhY2UgYmV0d2VlbiB3aGF0IGlzXG4gICAqIHdyaXR0ZW4gYW5kIHdoYXQgaXMgcmVhZCBpbiB0aGUgb3ZlcmxhaW4gYnVmZmVycywgc28gdGhlIHN5bWJvbHMgY2Fubm90XG4gICAqIGJlIG92ZXJ3cml0dGVuIGJ5IHRoZSBjb21wcmVzc2VkIGRhdGEuIFRoYXQgc3BhY2UgaXMgYWN0dWFsbHkgMTM5IGJpdHMsXG4gICAqIGR1ZSB0byB0aGUgdGhyZWUtYml0IGZpeGVkLWNvZGUgYmxvY2sgaGVhZGVyLlxuICAgKlxuICAgKiBUaGF0IGNvdmVycyB0aGUgY2FzZSB3aGVyZSBlaXRoZXIgWl9GSVhFRCBpcyBzcGVjaWZpZWQsIGZvcmNpbmcgZml4ZWRcbiAgICogY29kZXMsIG9yIHdoZW4gdGhlIHVzZSBvZiBmaXhlZCBjb2RlcyBpcyBjaG9zZW4sIGJlY2F1c2UgdGhhdCBjaG9pY2VcbiAgICogcmVzdWx0cyBpbiBhIHNtYWxsZXIgY29tcHJlc3NlZCBibG9jayB0aGFuIGR5bmFtaWMgY29kZXMuIFRoYXQgbGF0dGVyXG4gICAqIGNvbmRpdGlvbiB0aGVuIGFzc3VyZXMgdGhhdCB0aGUgYWJvdmUgYW5hbHlzaXMgYWxzbyBjb3ZlcnMgYWxsIGR5bmFtaWNcbiAgICogYmxvY2tzLiBBIGR5bmFtaWMtY29kZSBibG9jayB3aWxsIG9ubHkgYmUgY2hvc2VuIHRvIGJlIGVtaXR0ZWQgaWYgaXQgaGFzXG4gICAqIGZld2VyIGJpdHMgdGhhbiBhIGZpeGVkLWNvZGUgYmxvY2sgd291bGQgZm9yIHRoZSBzYW1lIHNldCBvZiBzeW1ib2xzLlxuICAgKiBUaGVyZWZvcmUgaXRzIGF2ZXJhZ2Ugc3ltYm9sIGxlbmd0aCBpcyBhc3N1cmVkIHRvIGJlIGxlc3MgdGhhbiAzMS4gU29cbiAgICogdGhlIGNvbXByZXNzZWQgZGF0YSBmb3IgYSBkeW5hbWljIGJsb2NrIGFsc28gY2Fubm90IG92ZXJ3cml0ZSB0aGVcbiAgICogc3ltYm9scyBmcm9tIHdoaWNoIGl0IGlzIGJlaW5nIGNvbnN0cnVjdGVkLlxuICAgKi9cblxuICBzLnBlbmRpbmdfYnVmX3NpemUgPSBzLmxpdF9idWZzaXplICogNDtcbiAgcy5wZW5kaW5nX2J1ZiA9IG5ldyBVaW50OEFycmF5KHMucGVuZGluZ19idWZfc2l6ZSk7XG5cbiAgLy8gSXQgaXMgb2Zmc2V0IGZyb20gYHMucGVuZGluZ19idWZgIChzaXplIGlzIGBzLmxpdF9idWZzaXplICogMmApXG4gIC8vcy0+c3ltX2J1ZiA9IHMtPnBlbmRpbmdfYnVmICsgcy0+bGl0X2J1ZnNpemU7XG4gIHMuc3ltX2J1ZiA9IHMubGl0X2J1ZnNpemU7XG5cbiAgLy9zLT5zeW1fZW5kID0gKHMtPmxpdF9idWZzaXplIC0gMSkgKiAzO1xuICBzLnN5bV9lbmQgPSAocy5saXRfYnVmc2l6ZSAtIDEpICogMztcbiAgLyogV2UgYXZvaWQgZXF1YWxpdHkgd2l0aCBsaXRfYnVmc2l6ZSozIGJlY2F1c2Ugb2Ygd3JhcGFyb3VuZCBhdCA2NEtcbiAgICogb24gMTYgYml0IG1hY2hpbmVzIGFuZCBiZWNhdXNlIHN0b3JlZCBibG9ja3MgYXJlIHJlc3RyaWN0ZWQgdG9cbiAgICogNjRLLTEgYnl0ZXMuXG4gICAqL1xuXG4gIHMubGV2ZWwgPSBsZXZlbDtcbiAgcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICBzLm1ldGhvZCA9IG1ldGhvZDtcblxuICByZXR1cm4gZGVmbGF0ZVJlc2V0KHN0cm0pO1xufTtcblxuY29uc3QgZGVmbGF0ZUluaXQgPSAoc3RybSwgbGV2ZWwpID0+IHtcblxuICByZXR1cm4gZGVmbGF0ZUluaXQyKHN0cm0sIGxldmVsLCBaX0RFRkxBVEVELCBNQVhfV0JJVFMsIERFRl9NRU1fTEVWRUwsIFpfREVGQVVMVF9TVFJBVEVHWSk7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmNvbnN0IGRlZmxhdGUgPSAoc3RybSwgZmx1c2gpID0+IHtcblxuICBpZiAoZGVmbGF0ZVN0YXRlQ2hlY2soc3RybSkgfHwgZmx1c2ggPiBaX0JMT0NLIHx8IGZsdXNoIDwgMCkge1xuICAgIHJldHVybiBzdHJtID8gZXJyKHN0cm0sIFpfU1RSRUFNX0VSUk9SKSA6IFpfU1RSRUFNX0VSUk9SO1xuICB9XG5cbiAgY29uc3QgcyA9IHN0cm0uc3RhdGU7XG5cbiAgaWYgKCFzdHJtLm91dHB1dCB8fFxuICAgICAgKHN0cm0uYXZhaWxfaW4gIT09IDAgJiYgIXN0cm0uaW5wdXQpIHx8XG4gICAgICAocy5zdGF0dXMgPT09IEZJTklTSF9TVEFURSAmJiBmbHVzaCAhPT0gWl9GSU5JU0gpKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCAoc3RybS5hdmFpbF9vdXQgPT09IDApID8gWl9CVUZfRVJST1IgOiBaX1NUUkVBTV9FUlJPUik7XG4gIH1cblxuICBjb25zdCBvbGRfZmx1c2ggPSBzLmxhc3RfZmx1c2g7XG4gIHMubGFzdF9mbHVzaCA9IGZsdXNoO1xuXG4gIC8qIEZsdXNoIGFzIG11Y2ggcGVuZGluZyBvdXRwdXQgYXMgcG9zc2libGUgKi9cbiAgaWYgKHMucGVuZGluZyAhPT0gMCkge1xuICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAvKiBTaW5jZSBhdmFpbF9vdXQgaXMgMCwgZGVmbGF0ZSB3aWxsIGJlIGNhbGxlZCBhZ2FpbiB3aXRoXG4gICAgICAgKiBtb3JlIG91dHB1dCBzcGFjZSwgYnV0IHBvc3NpYmx5IHdpdGggYm90aCBwZW5kaW5nIGFuZFxuICAgICAgICogYXZhaWxfaW4gZXF1YWwgdG8gemVyby4gVGhlcmUgd29uJ3QgYmUgYW55dGhpbmcgdG8gZG8sXG4gICAgICAgKiBidXQgdGhpcyBpcyBub3QgYW4gZXJyb3Igc2l0dWF0aW9uIHNvIG1ha2Ugc3VyZSB3ZVxuICAgICAgICogcmV0dXJuIE9LIGluc3RlYWQgb2YgQlVGX0VSUk9SIGF0IG5leHQgY2FsbCBvZiBkZWZsYXRlOlxuICAgICAgICovXG4gICAgICBzLmxhc3RfZmx1c2ggPSAtMTtcbiAgICAgIHJldHVybiBaX09LO1xuICAgIH1cblxuICAgIC8qIE1ha2Ugc3VyZSB0aGVyZSBpcyBzb21ldGhpbmcgdG8gZG8gYW5kIGF2b2lkIGR1cGxpY2F0ZSBjb25zZWN1dGl2ZVxuICAgICAqIGZsdXNoZXMuIEZvciByZXBlYXRlZCBhbmQgdXNlbGVzcyBjYWxscyB3aXRoIFpfRklOSVNILCB3ZSBrZWVwXG4gICAgICogcmV0dXJuaW5nIFpfU1RSRUFNX0VORCBpbnN0ZWFkIG9mIFpfQlVGX0VSUk9SLlxuICAgICAqL1xuICB9IGVsc2UgaWYgKHN0cm0uYXZhaWxfaW4gPT09IDAgJiYgcmFuayhmbHVzaCkgPD0gcmFuayhvbGRfZmx1c2gpICYmXG4gICAgZmx1c2ggIT09IFpfRklOSVNIKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX0JVRl9FUlJPUik7XG4gIH1cblxuICAvKiBVc2VyIG11c3Qgbm90IHByb3ZpZGUgbW9yZSBpbnB1dCBhZnRlciB0aGUgZmlyc3QgRklOSVNIOiAqL1xuICBpZiAocy5zdGF0dXMgPT09IEZJTklTSF9TVEFURSAmJiBzdHJtLmF2YWlsX2luICE9PSAwKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX0JVRl9FUlJPUik7XG4gIH1cblxuICAvKiBXcml0ZSB0aGUgaGVhZGVyICovXG4gIGlmIChzLnN0YXR1cyA9PT0gSU5JVF9TVEFURSAmJiBzLndyYXAgPT09IDApIHtcbiAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG4gIH1cbiAgaWYgKHMuc3RhdHVzID09PSBJTklUX1NUQVRFKSB7XG4gICAgLyogemxpYiBoZWFkZXIgKi9cbiAgICBsZXQgaGVhZGVyID0gKFpfREVGTEFURUQgKyAoKHMud19iaXRzIC0gOCkgPDwgNCkpIDw8IDg7XG4gICAgbGV0IGxldmVsX2ZsYWdzID0gLTE7XG5cbiAgICBpZiAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMikge1xuICAgICAgbGV2ZWxfZmxhZ3MgPSAwO1xuICAgIH0gZWxzZSBpZiAocy5sZXZlbCA8IDYpIHtcbiAgICAgIGxldmVsX2ZsYWdzID0gMTtcbiAgICB9IGVsc2UgaWYgKHMubGV2ZWwgPT09IDYpIHtcbiAgICAgIGxldmVsX2ZsYWdzID0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV2ZWxfZmxhZ3MgPSAzO1xuICAgIH1cbiAgICBoZWFkZXIgfD0gKGxldmVsX2ZsYWdzIDw8IDYpO1xuICAgIGlmIChzLnN0cnN0YXJ0ICE9PSAwKSB7IGhlYWRlciB8PSBQUkVTRVRfRElDVDsgfVxuICAgIGhlYWRlciArPSAzMSAtIChoZWFkZXIgJSAzMSk7XG5cbiAgICBwdXRTaG9ydE1TQihzLCBoZWFkZXIpO1xuXG4gICAgLyogU2F2ZSB0aGUgYWRsZXIzMiBvZiB0aGUgcHJlc2V0IGRpY3Rpb25hcnk6ICovXG4gICAgaWYgKHMuc3Ryc3RhcnQgIT09IDApIHtcbiAgICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgPj4+IDE2KTtcbiAgICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgJiAweGZmZmYpO1xuICAgIH1cbiAgICBzdHJtLmFkbGVyID0gMTsgLy8gYWRsZXIzMigwTCwgWl9OVUxMLCAwKTtcbiAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG5cbiAgICAvKiBDb21wcmVzc2lvbiBtdXN0IHN0YXJ0IHdpdGggYW4gZW1wdHkgcGVuZGluZyBidWZmZXIgKi9cbiAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgIGlmIChzLnBlbmRpbmcgIT09IDApIHtcbiAgICAgIHMubGFzdF9mbHVzaCA9IC0xO1xuICAgICAgcmV0dXJuIFpfT0s7XG4gICAgfVxuICB9XG4vLyNpZmRlZiBHWklQXG4gIGlmIChzLnN0YXR1cyA9PT0gR1pJUF9TVEFURSkge1xuICAgIC8qIGd6aXAgaGVhZGVyICovXG4gICAgc3RybS5hZGxlciA9IDA7ICAvL2NyYzMyKDBMLCBaX05VTEwsIDApO1xuICAgIHB1dF9ieXRlKHMsIDMxKTtcbiAgICBwdXRfYnl0ZShzLCAxMzkpO1xuICAgIHB1dF9ieXRlKHMsIDgpO1xuICAgIGlmICghcy5nemhlYWQpIHsgLy8gcy0+Z3poZWFkID09IFpfTlVMTFxuICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgIHB1dF9ieXRlKHMsIHMubGV2ZWwgPT09IDkgPyAyIDpcbiAgICAgICAgICAgICAgICAgIChzLnN0cmF0ZWd5ID49IFpfSFVGRk1BTl9PTkxZIHx8IHMubGV2ZWwgPCAyID9cbiAgICAgICAgICAgICAgICAgICA0IDogMCkpO1xuICAgICAgcHV0X2J5dGUocywgT1NfQ09ERSk7XG4gICAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG5cbiAgICAgIC8qIENvbXByZXNzaW9uIG11c3Qgc3RhcnQgd2l0aCBhbiBlbXB0eSBwZW5kaW5nIGJ1ZmZlciAqL1xuICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgIGlmIChzLnBlbmRpbmcgIT09IDApIHtcbiAgICAgICAgcy5sYXN0X2ZsdXNoID0gLTE7XG4gICAgICAgIHJldHVybiBaX09LO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50ZXh0ID8gMSA6IDApICtcbiAgICAgICAgICAgICAgICAgIChzLmd6aGVhZC5oY3JjID8gMiA6IDApICtcbiAgICAgICAgICAgICAgICAgICghcy5nemhlYWQuZXh0cmEgPyAwIDogNCkgK1xuICAgICAgICAgICAgICAgICAgKCFzLmd6aGVhZC5uYW1lID8gMCA6IDgpICtcbiAgICAgICAgICAgICAgICAgICghcy5nemhlYWQuY29tbWVudCA/IDAgOiAxNilcbiAgICAgICk7XG4gICAgICBwdXRfYnl0ZShzLCBzLmd6aGVhZC50aW1lICYgMHhmZik7XG4gICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQudGltZSA+PiA4KSAmIDB4ZmYpO1xuICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLnRpbWUgPj4gMTYpICYgMHhmZik7XG4gICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQudGltZSA+PiAyNCkgJiAweGZmKTtcbiAgICAgIHB1dF9ieXRlKHMsIHMubGV2ZWwgPT09IDkgPyAyIDpcbiAgICAgICAgICAgICAgICAgIChzLnN0cmF0ZWd5ID49IFpfSFVGRk1BTl9PTkxZIHx8IHMubGV2ZWwgPCAyID9cbiAgICAgICAgICAgICAgICAgICA0IDogMCkpO1xuICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQub3MgJiAweGZmKTtcbiAgICAgIGlmIChzLmd6aGVhZC5leHRyYSAmJiBzLmd6aGVhZC5leHRyYS5sZW5ndGgpIHtcbiAgICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQuZXh0cmEubGVuZ3RoICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC5leHRyYS5sZW5ndGggPj4gOCkgJiAweGZmKTtcbiAgICAgIH1cbiAgICAgIGlmIChzLmd6aGVhZC5oY3JjKSB7XG4gICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcsIDApO1xuICAgICAgfVxuICAgICAgcy5nemluZGV4ID0gMDtcbiAgICAgIHMuc3RhdHVzID0gRVhUUkFfU1RBVEU7XG4gICAgfVxuICB9XG4gIGlmIChzLnN0YXR1cyA9PT0gRVhUUkFfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQuZXh0cmEvKiAhPSBaX05VTEwqLykge1xuICAgICAgbGV0IGJlZyA9IHMucGVuZGluZzsgICAvKiBzdGFydCBvZiBieXRlcyB0byB1cGRhdGUgY3JjICovXG4gICAgICBsZXQgbGVmdCA9IChzLmd6aGVhZC5leHRyYS5sZW5ndGggJiAweGZmZmYpIC0gcy5nemluZGV4O1xuICAgICAgd2hpbGUgKHMucGVuZGluZyArIGxlZnQgPiBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgbGV0IGNvcHkgPSBzLnBlbmRpbmdfYnVmX3NpemUgLSBzLnBlbmRpbmc7XG4gICAgICAgIC8vIHptZW1jcHkocy5wZW5kaW5nX2J1ZiArIHMucGVuZGluZyxcbiAgICAgICAgLy8gICAgcy5nemhlYWQuZXh0cmEgKyBzLmd6aW5kZXgsIGNvcHkpO1xuICAgICAgICBzLnBlbmRpbmdfYnVmLnNldChzLmd6aGVhZC5leHRyYS5zdWJhcnJheShzLmd6aW5kZXgsIHMuZ3ppbmRleCArIGNvcHkpLCBzLnBlbmRpbmcpO1xuICAgICAgICBzLnBlbmRpbmcgPSBzLnBlbmRpbmdfYnVmX3NpemU7XG4gICAgICAgIC8vLS0tIEhDUkNfVVBEQVRFKGJlZykgLS0tLy9cbiAgICAgICAgaWYgKHMuZ3poZWFkLmhjcmMgJiYgcy5wZW5kaW5nID4gYmVnKSB7XG4gICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgICAgfVxuICAgICAgICAvLy0tLS8vXG4gICAgICAgIHMuZ3ppbmRleCArPSBjb3B5O1xuICAgICAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgICAgICBpZiAocy5wZW5kaW5nICE9PSAwKSB7XG4gICAgICAgICAgcy5sYXN0X2ZsdXNoID0gLTE7XG4gICAgICAgICAgcmV0dXJuIFpfT0s7XG4gICAgICAgIH1cbiAgICAgICAgYmVnID0gMDtcbiAgICAgICAgbGVmdCAtPSBjb3B5O1xuICAgICAgfVxuICAgICAgLy8gSlMgc3BlY2lmaWM6IHMuZ3poZWFkLmV4dHJhIG1heSBiZSBUeXBlZEFycmF5IG9yIEFycmF5IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICAvLyAgICAgICAgICAgICAgVHlwZWRBcnJheS5zbGljZSBhbmQgVHlwZWRBcnJheS5mcm9tIGRvbid0IGV4aXN0IGluIElFMTAtSUUxMVxuICAgICAgbGV0IGd6aGVhZF9leHRyYSA9IG5ldyBVaW50OEFycmF5KHMuZ3poZWFkLmV4dHJhKTtcbiAgICAgIC8vIHptZW1jcHkocy0+cGVuZGluZ19idWYgKyBzLT5wZW5kaW5nLFxuICAgICAgLy8gICAgIHMtPmd6aGVhZC0+ZXh0cmEgKyBzLT5nemluZGV4LCBsZWZ0KTtcbiAgICAgIHMucGVuZGluZ19idWYuc2V0KGd6aGVhZF9leHRyYS5zdWJhcnJheShzLmd6aW5kZXgsIHMuZ3ppbmRleCArIGxlZnQpLCBzLnBlbmRpbmcpO1xuICAgICAgcy5wZW5kaW5nICs9IGxlZnQ7XG4gICAgICAvLy0tLSBIQ1JDX1VQREFURShiZWcpIC0tLS8vXG4gICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgIH1cbiAgICAgIC8vLS0tLy9cbiAgICAgIHMuZ3ppbmRleCA9IDA7XG4gICAgfVxuICAgIHMuc3RhdHVzID0gTkFNRV9TVEFURTtcbiAgfVxuICBpZiAocy5zdGF0dXMgPT09IE5BTUVfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQubmFtZS8qICE9IFpfTlVMTCovKSB7XG4gICAgICBsZXQgYmVnID0gcy5wZW5kaW5nOyAgIC8qIHN0YXJ0IG9mIGJ5dGVzIHRvIHVwZGF0ZSBjcmMgKi9cbiAgICAgIGxldCB2YWw7XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgIC8vLS0tIEhDUkNfVVBEQVRFKGJlZykgLS0tLy9cbiAgICAgICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgICAgICAgIGlmIChzLnBlbmRpbmcgIT09IDApIHtcbiAgICAgICAgICAgIHMubGFzdF9mbHVzaCA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuIFpfT0s7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJlZyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSlMgc3BlY2lmaWM6IGxpdHRsZSBtYWdpYyB0byBhZGQgemVybyB0ZXJtaW5hdG9yIHRvIGVuZCBvZiBzdHJpbmdcbiAgICAgICAgaWYgKHMuZ3ppbmRleCA8IHMuZ3poZWFkLm5hbWUubGVuZ3RoKSB7XG4gICAgICAgICAgdmFsID0gcy5nemhlYWQubmFtZS5jaGFyQ29kZUF0KHMuZ3ppbmRleCsrKSAmIDB4ZmY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwdXRfYnl0ZShzLCB2YWwpO1xuICAgICAgfSB3aGlsZSAodmFsICE9PSAwKTtcbiAgICAgIC8vLS0tIEhDUkNfVVBEQVRFKGJlZykgLS0tLy9cbiAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgfVxuICAgICAgLy8tLS0vL1xuICAgICAgcy5nemluZGV4ID0gMDtcbiAgICB9XG4gICAgcy5zdGF0dXMgPSBDT01NRU5UX1NUQVRFO1xuICB9XG4gIGlmIChzLnN0YXR1cyA9PT0gQ09NTUVOVF9TVEFURSkge1xuICAgIGlmIChzLmd6aGVhZC5jb21tZW50LyogIT0gWl9OVUxMKi8pIHtcbiAgICAgIGxldCBiZWcgPSBzLnBlbmRpbmc7ICAgLyogc3RhcnQgb2YgYnl0ZXMgdG8gdXBkYXRlIGNyYyAqL1xuICAgICAgbGV0IHZhbDtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgLy8tLS0gSENSQ19VUERBVEUoYmVnKSAtLS0vL1xuICAgICAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgICAgICAgaWYgKHMucGVuZGluZyAhPT0gMCkge1xuICAgICAgICAgICAgcy5sYXN0X2ZsdXNoID0gLTE7XG4gICAgICAgICAgICByZXR1cm4gWl9PSztcbiAgICAgICAgICB9XG4gICAgICAgICAgYmVnID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBKUyBzcGVjaWZpYzogbGl0dGxlIG1hZ2ljIHRvIGFkZCB6ZXJvIHRlcm1pbmF0b3IgdG8gZW5kIG9mIHN0cmluZ1xuICAgICAgICBpZiAocy5nemluZGV4IDwgcy5nemhlYWQuY29tbWVudC5sZW5ndGgpIHtcbiAgICAgICAgICB2YWwgPSBzLmd6aGVhZC5jb21tZW50LmNoYXJDb2RlQXQocy5nemluZGV4KyspICYgMHhmZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHB1dF9ieXRlKHMsIHZhbCk7XG4gICAgICB9IHdoaWxlICh2YWwgIT09IDApO1xuICAgICAgLy8tLS0gSENSQ19VUERBVEUoYmVnKSAtLS0vL1xuICAgICAgaWYgKHMuZ3poZWFkLmhjcmMgJiYgcy5wZW5kaW5nID4gYmVnKSB7XG4gICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICB9XG4gICAgICAvLy0tLS8vXG4gICAgfVxuICAgIHMuc3RhdHVzID0gSENSQ19TVEFURTtcbiAgfVxuICBpZiAocy5zdGF0dXMgPT09IEhDUkNfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQuaGNyYykge1xuICAgICAgaWYgKHMucGVuZGluZyArIDIgPiBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgICAgaWYgKHMucGVuZGluZyAhPT0gMCkge1xuICAgICAgICAgIHMubGFzdF9mbHVzaCA9IC0xO1xuICAgICAgICAgIHJldHVybiBaX09LO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwdXRfYnl0ZShzLCBzdHJtLmFkbGVyICYgMHhmZik7XG4gICAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiA4KSAmIDB4ZmYpO1xuICAgICAgc3RybS5hZGxlciA9IDA7IC8vY3JjMzIoMEwsIFpfTlVMTCwgMCk7XG4gICAgfVxuICAgIHMuc3RhdHVzID0gQlVTWV9TVEFURTtcblxuICAgIC8qIENvbXByZXNzaW9uIG11c3Qgc3RhcnQgd2l0aCBhbiBlbXB0eSBwZW5kaW5nIGJ1ZmZlciAqL1xuICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgaWYgKHMucGVuZGluZyAhPT0gMCkge1xuICAgICAgcy5sYXN0X2ZsdXNoID0gLTE7XG4gICAgICByZXR1cm4gWl9PSztcbiAgICB9XG4gIH1cbi8vI2VuZGlmXG5cbiAgLyogU3RhcnQgYSBuZXcgYmxvY2sgb3IgY29udGludWUgdGhlIGN1cnJlbnQgb25lLlxuICAgKi9cbiAgaWYgKHN0cm0uYXZhaWxfaW4gIT09IDAgfHwgcy5sb29rYWhlYWQgIT09IDAgfHxcbiAgICAoZmx1c2ggIT09IFpfTk9fRkxVU0ggJiYgcy5zdGF0dXMgIT09IEZJTklTSF9TVEFURSkpIHtcbiAgICBsZXQgYnN0YXRlID0gcy5sZXZlbCA9PT0gMCA/IGRlZmxhdGVfc3RvcmVkKHMsIGZsdXNoKSA6XG4gICAgICAgICAgICAgICAgIHMuc3RyYXRlZ3kgPT09IFpfSFVGRk1BTl9PTkxZID8gZGVmbGF0ZV9odWZmKHMsIGZsdXNoKSA6XG4gICAgICAgICAgICAgICAgIHMuc3RyYXRlZ3kgPT09IFpfUkxFID8gZGVmbGF0ZV9ybGUocywgZmx1c2gpIDpcbiAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5mdW5jKHMsIGZsdXNoKTtcblxuICAgIGlmIChic3RhdGUgPT09IEJTX0ZJTklTSF9TVEFSVEVEIHx8IGJzdGF0ZSA9PT0gQlNfRklOSVNIX0RPTkUpIHtcbiAgICAgIHMuc3RhdHVzID0gRklOSVNIX1NUQVRFO1xuICAgIH1cbiAgICBpZiAoYnN0YXRlID09PSBCU19ORUVEX01PUkUgfHwgYnN0YXRlID09PSBCU19GSU5JU0hfU1RBUlRFRCkge1xuICAgICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHMubGFzdF9mbHVzaCA9IC0xO1xuICAgICAgICAvKiBhdm9pZCBCVUZfRVJST1IgbmV4dCBjYWxsLCBzZWUgYWJvdmUgKi9cbiAgICAgIH1cbiAgICAgIHJldHVybiBaX09LO1xuICAgICAgLyogSWYgZmx1c2ggIT0gWl9OT19GTFVTSCAmJiBhdmFpbF9vdXQgPT0gMCwgdGhlIG5leHQgY2FsbFxuICAgICAgICogb2YgZGVmbGF0ZSBzaG91bGQgdXNlIHRoZSBzYW1lIGZsdXNoIHBhcmFtZXRlciB0byBtYWtlIHN1cmVcbiAgICAgICAqIHRoYXQgdGhlIGZsdXNoIGlzIGNvbXBsZXRlLiBTbyB3ZSBkb24ndCBoYXZlIHRvIG91dHB1dCBhblxuICAgICAgICogZW1wdHkgYmxvY2sgaGVyZSwgdGhpcyB3aWxsIGJlIGRvbmUgYXQgbmV4dCBjYWxsLiBUaGlzIGFsc29cbiAgICAgICAqIGVuc3VyZXMgdGhhdCBmb3IgYSB2ZXJ5IHNtYWxsIG91dHB1dCBidWZmZXIsIHdlIGVtaXQgYXQgbW9zdFxuICAgICAgICogb25lIGVtcHR5IGJsb2NrLlxuICAgICAgICovXG4gICAgfVxuICAgIGlmIChic3RhdGUgPT09IEJTX0JMT0NLX0RPTkUpIHtcbiAgICAgIGlmIChmbHVzaCA9PT0gWl9QQVJUSUFMX0ZMVVNIKSB7XG4gICAgICAgIF90cl9hbGlnbihzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGZsdXNoICE9PSBaX0JMT0NLKSB7IC8qIEZVTExfRkxVU0ggb3IgU1lOQ19GTFVTSCAqL1xuXG4gICAgICAgIF90cl9zdG9yZWRfYmxvY2socywgMCwgMCwgZmFsc2UpO1xuICAgICAgICAvKiBGb3IgYSBmdWxsIGZsdXNoLCB0aGlzIGVtcHR5IGJsb2NrIHdpbGwgYmUgcmVjb2duaXplZFxuICAgICAgICAgKiBhcyBhIHNwZWNpYWwgbWFya2VyIGJ5IGluZmxhdGVfc3luYygpLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGZsdXNoID09PSBaX0ZVTExfRkxVU0gpIHtcbiAgICAgICAgICAvKioqIENMRUFSX0hBU0gocyk7ICoqKi8gICAgICAgICAgICAgLyogZm9yZ2V0IGhpc3RvcnkgKi9cbiAgICAgICAgICB6ZXJvKHMuaGVhZCk7IC8vIEZpbGwgd2l0aCBOSUwgKD0gMCk7XG5cbiAgICAgICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgICAgICAgIHMuc3Ryc3RhcnQgPSAwO1xuICAgICAgICAgICAgcy5ibG9ja19zdGFydCA9IDA7XG4gICAgICAgICAgICBzLmluc2VydCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHMubGFzdF9mbHVzaCA9IC0xOyAvKiBhdm9pZCBCVUZfRVJST1IgYXQgbmV4dCBjYWxsLCBzZWUgYWJvdmUgKi9cbiAgICAgICAgcmV0dXJuIFpfT0s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGZsdXNoICE9PSBaX0ZJTklTSCkgeyByZXR1cm4gWl9PSzsgfVxuICBpZiAocy53cmFwIDw9IDApIHsgcmV0dXJuIFpfU1RSRUFNX0VORDsgfVxuXG4gIC8qIFdyaXRlIHRoZSB0cmFpbGVyICovXG4gIGlmIChzLndyYXAgPT09IDIpIHtcbiAgICBwdXRfYnl0ZShzLCBzdHJtLmFkbGVyICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0uYWRsZXIgPj4gOCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiAxNikgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiAyNCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCBzdHJtLnRvdGFsX2luICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0udG90YWxfaW4gPj4gOCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS50b3RhbF9pbiA+PiAxNikgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS50b3RhbF9pbiA+PiAyNCkgJiAweGZmKTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBwdXRTaG9ydE1TQihzLCBzdHJtLmFkbGVyID4+PiAxNik7XG4gICAgcHV0U2hvcnRNU0Iocywgc3RybS5hZGxlciAmIDB4ZmZmZik7XG4gIH1cblxuICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAvKiBJZiBhdmFpbF9vdXQgaXMgemVybywgdGhlIGFwcGxpY2F0aW9uIHdpbGwgY2FsbCBkZWZsYXRlIGFnYWluXG4gICAqIHRvIGZsdXNoIHRoZSByZXN0LlxuICAgKi9cbiAgaWYgKHMud3JhcCA+IDApIHsgcy53cmFwID0gLXMud3JhcDsgfVxuICAvKiB3cml0ZSB0aGUgdHJhaWxlciBvbmx5IG9uY2UhICovXG4gIHJldHVybiBzLnBlbmRpbmcgIT09IDAgPyBaX09LIDogWl9TVFJFQU1fRU5EO1xufTtcblxuXG5jb25zdCBkZWZsYXRlRW5kID0gKHN0cm0pID0+IHtcblxuICBpZiAoZGVmbGF0ZVN0YXRlQ2hlY2soc3RybSkpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICBjb25zdCBzdGF0dXMgPSBzdHJtLnN0YXRlLnN0YXR1cztcblxuICBzdHJtLnN0YXRlID0gbnVsbDtcblxuICByZXR1cm4gc3RhdHVzID09PSBCVVNZX1NUQVRFID8gZXJyKHN0cm0sIFpfREFUQV9FUlJPUikgOiBaX09LO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplcyB0aGUgY29tcHJlc3Npb24gZGljdGlvbmFyeSBmcm9tIHRoZSBnaXZlbiBieXRlXG4gKiBzZXF1ZW5jZSB3aXRob3V0IHByb2R1Y2luZyBhbnkgY29tcHJlc3NlZCBvdXRwdXQuXG4gKi9cbmNvbnN0IGRlZmxhdGVTZXREaWN0aW9uYXJ5ID0gKHN0cm0sIGRpY3Rpb25hcnkpID0+IHtcblxuICBsZXQgZGljdExlbmd0aCA9IGRpY3Rpb25hcnkubGVuZ3RoO1xuXG4gIGlmIChkZWZsYXRlU3RhdGVDaGVjayhzdHJtKSkge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIGNvbnN0IHMgPSBzdHJtLnN0YXRlO1xuICBjb25zdCB3cmFwID0gcy53cmFwO1xuXG4gIGlmICh3cmFwID09PSAyIHx8ICh3cmFwID09PSAxICYmIHMuc3RhdHVzICE9PSBJTklUX1NUQVRFKSB8fCBzLmxvb2thaGVhZCkge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIC8qIHdoZW4gdXNpbmcgemxpYiB3cmFwcGVycywgY29tcHV0ZSBBZGxlci0zMiBmb3IgcHJvdmlkZWQgZGljdGlvbmFyeSAqL1xuICBpZiAod3JhcCA9PT0gMSkge1xuICAgIC8qIGFkbGVyMzIoc3RybS0+YWRsZXIsIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgpOyAqL1xuICAgIHN0cm0uYWRsZXIgPSBhZGxlcjMyKHN0cm0uYWRsZXIsIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgsIDApO1xuICB9XG5cbiAgcy53cmFwID0gMDsgICAvKiBhdm9pZCBjb21wdXRpbmcgQWRsZXItMzIgaW4gcmVhZF9idWYgKi9cblxuICAvKiBpZiBkaWN0aW9uYXJ5IHdvdWxkIGZpbGwgd2luZG93LCBqdXN0IHJlcGxhY2UgdGhlIGhpc3RvcnkgKi9cbiAgaWYgKGRpY3RMZW5ndGggPj0gcy53X3NpemUpIHtcbiAgICBpZiAod3JhcCA9PT0gMCkgeyAgICAgICAgICAgIC8qIGFscmVhZHkgZW1wdHkgb3RoZXJ3aXNlICovXG4gICAgICAvKioqIENMRUFSX0hBU0gocyk7ICoqKi9cbiAgICAgIHplcm8ocy5oZWFkKTsgLy8gRmlsbCB3aXRoIE5JTCAoPSAwKTtcbiAgICAgIHMuc3Ryc3RhcnQgPSAwO1xuICAgICAgcy5ibG9ja19zdGFydCA9IDA7XG4gICAgICBzLmluc2VydCA9IDA7XG4gICAgfVxuICAgIC8qIHVzZSB0aGUgdGFpbCAqL1xuICAgIC8vIGRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5LnNsaWNlKGRpY3RMZW5ndGggLSBzLndfc2l6ZSk7XG4gICAgbGV0IHRtcERpY3QgPSBuZXcgVWludDhBcnJheShzLndfc2l6ZSk7XG4gICAgdG1wRGljdC5zZXQoZGljdGlvbmFyeS5zdWJhcnJheShkaWN0TGVuZ3RoIC0gcy53X3NpemUsIGRpY3RMZW5ndGgpLCAwKTtcbiAgICBkaWN0aW9uYXJ5ID0gdG1wRGljdDtcbiAgICBkaWN0TGVuZ3RoID0gcy53X3NpemU7XG4gIH1cbiAgLyogaW5zZXJ0IGRpY3Rpb25hcnkgaW50byB3aW5kb3cgYW5kIGhhc2ggKi9cbiAgY29uc3QgYXZhaWwgPSBzdHJtLmF2YWlsX2luO1xuICBjb25zdCBuZXh0ID0gc3RybS5uZXh0X2luO1xuICBjb25zdCBpbnB1dCA9IHN0cm0uaW5wdXQ7XG4gIHN0cm0uYXZhaWxfaW4gPSBkaWN0TGVuZ3RoO1xuICBzdHJtLm5leHRfaW4gPSAwO1xuICBzdHJtLmlucHV0ID0gZGljdGlvbmFyeTtcbiAgZmlsbF93aW5kb3cocyk7XG4gIHdoaWxlIChzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcbiAgICBsZXQgc3RyID0gcy5zdHJzdGFydDtcbiAgICBsZXQgbiA9IHMubG9va2FoZWFkIC0gKE1JTl9NQVRDSCAtIDEpO1xuICAgIGRvIHtcbiAgICAgIC8qIFVQREFURV9IQVNIKHMsIHMtPmluc19oLCBzLT53aW5kb3dbc3RyICsgTUlOX01BVENILTFdKTsgKi9cbiAgICAgIHMuaW5zX2ggPSBIQVNIKHMsIHMuaW5zX2gsIHMud2luZG93W3N0ciArIE1JTl9NQVRDSCAtIDFdKTtcblxuICAgICAgcy5wcmV2W3N0ciAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcblxuICAgICAgcy5oZWFkW3MuaW5zX2hdID0gc3RyO1xuICAgICAgc3RyKys7XG4gICAgfSB3aGlsZSAoLS1uKTtcbiAgICBzLnN0cnN0YXJ0ID0gc3RyO1xuICAgIHMubG9va2FoZWFkID0gTUlOX01BVENIIC0gMTtcbiAgICBmaWxsX3dpbmRvdyhzKTtcbiAgfVxuICBzLnN0cnN0YXJ0ICs9IHMubG9va2FoZWFkO1xuICBzLmJsb2NrX3N0YXJ0ID0gcy5zdHJzdGFydDtcbiAgcy5pbnNlcnQgPSBzLmxvb2thaGVhZDtcbiAgcy5sb29rYWhlYWQgPSAwO1xuICBzLm1hdGNoX2xlbmd0aCA9IHMucHJldl9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuICBzLm1hdGNoX2F2YWlsYWJsZSA9IDA7XG4gIHN0cm0ubmV4dF9pbiA9IG5leHQ7XG4gIHN0cm0uaW5wdXQgPSBpbnB1dDtcbiAgc3RybS5hdmFpbF9pbiA9IGF2YWlsO1xuICBzLndyYXAgPSB3cmFwO1xuICByZXR1cm4gWl9PSztcbn07XG5cblxubW9kdWxlLmV4cG9ydHMuZGVmbGF0ZUluaXQgPSBkZWZsYXRlSW5pdDtcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVJbml0MiA9IGRlZmxhdGVJbml0Mjtcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVSZXNldCA9IGRlZmxhdGVSZXNldDtcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVSZXNldEtlZXAgPSBkZWZsYXRlUmVzZXRLZWVwO1xubW9kdWxlLmV4cG9ydHMuZGVmbGF0ZVNldEhlYWRlciA9IGRlZmxhdGVTZXRIZWFkZXI7XG5tb2R1bGUuZXhwb3J0cy5kZWZsYXRlID0gZGVmbGF0ZTtcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVFbmQgPSBkZWZsYXRlRW5kO1xubW9kdWxlLmV4cG9ydHMuZGVmbGF0ZVNldERpY3Rpb25hcnkgPSBkZWZsYXRlU2V0RGljdGlvbmFyeTtcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVJbmZvID0gJ3Bha28gZGVmbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdCknO1xuXG4vKiBOb3QgaW1wbGVtZW50ZWRcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVCb3VuZCA9IGRlZmxhdGVCb3VuZDtcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVDb3B5ID0gZGVmbGF0ZUNvcHk7XG5tb2R1bGUuZXhwb3J0cy5kZWZsYXRlR2V0RGljdGlvbmFyeSA9IGRlZmxhdGVHZXREaWN0aW9uYXJ5O1xubW9kdWxlLmV4cG9ydHMuZGVmbGF0ZVBhcmFtcyA9IGRlZmxhdGVQYXJhbXM7XG5tb2R1bGUuZXhwb3J0cy5kZWZsYXRlUGVuZGluZyA9IGRlZmxhdGVQZW5kaW5nO1xubW9kdWxlLmV4cG9ydHMuZGVmbGF0ZVByaW1lID0gZGVmbGF0ZVByaW1lO1xubW9kdWxlLmV4cG9ydHMuZGVmbGF0ZVR1bmUgPSBkZWZsYXRlVHVuZTtcbiovXG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuZnVuY3Rpb24gR1poZWFkZXIoKSB7XG4gIC8qIHRydWUgaWYgY29tcHJlc3NlZCBkYXRhIGJlbGlldmVkIHRvIGJlIHRleHQgKi9cbiAgdGhpcy50ZXh0ICAgICAgID0gMDtcbiAgLyogbW9kaWZpY2F0aW9uIHRpbWUgKi9cbiAgdGhpcy50aW1lICAgICAgID0gMDtcbiAgLyogZXh0cmEgZmxhZ3MgKG5vdCB1c2VkIHdoZW4gd3JpdGluZyBhIGd6aXAgZmlsZSkgKi9cbiAgdGhpcy54ZmxhZ3MgICAgID0gMDtcbiAgLyogb3BlcmF0aW5nIHN5c3RlbSAqL1xuICB0aGlzLm9zICAgICAgICAgPSAwO1xuICAvKiBwb2ludGVyIHRvIGV4dHJhIGZpZWxkIG9yIFpfTlVMTCBpZiBub25lICovXG4gIHRoaXMuZXh0cmEgICAgICA9IG51bGw7XG4gIC8qIGV4dHJhIGZpZWxkIGxlbmd0aCAodmFsaWQgaWYgZXh0cmEgIT0gWl9OVUxMKSAqL1xuICB0aGlzLmV4dHJhX2xlbiAgPSAwOyAvLyBBY3R1YWxseSwgd2UgZG9uJ3QgbmVlZCBpdCBpbiBKUyxcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGxlYXZlIGZvciBmZXcgY29kZSBtb2RpZmljYXRpb25zXG5cbiAgLy9cbiAgLy8gU2V0dXAgbGltaXRzIGlzIG5vdCBuZWNlc3NhcnkgYmVjYXVzZSBpbiBqcyB3ZSBzaG91bGQgbm90IHByZWFsbG9jYXRlIG1lbW9yeVxuICAvLyBmb3IgaW5mbGF0ZSB1c2UgY29uc3RhbnQgbGltaXQgaW4gNjU1MzYgYnl0ZXNcbiAgLy9cblxuICAvKiBzcGFjZSBhdCBleHRyYSAob25seSB3aGVuIHJlYWRpbmcgaGVhZGVyKSAqL1xuICAvLyB0aGlzLmV4dHJhX21heCAgPSAwO1xuICAvKiBwb2ludGVyIHRvIHplcm8tdGVybWluYXRlZCBmaWxlIG5hbWUgb3IgWl9OVUxMICovXG4gIHRoaXMubmFtZSAgICAgICA9ICcnO1xuICAvKiBzcGFjZSBhdCBuYW1lIChvbmx5IHdoZW4gcmVhZGluZyBoZWFkZXIpICovXG4gIC8vIHRoaXMubmFtZV9tYXggICA9IDA7XG4gIC8qIHBvaW50ZXIgdG8gemVyby10ZXJtaW5hdGVkIGNvbW1lbnQgb3IgWl9OVUxMICovXG4gIHRoaXMuY29tbWVudCAgICA9ICcnO1xuICAvKiBzcGFjZSBhdCBjb21tZW50IChvbmx5IHdoZW4gcmVhZGluZyBoZWFkZXIpICovXG4gIC8vIHRoaXMuY29tbV9tYXggICA9IDA7XG4gIC8qIHRydWUgaWYgdGhlcmUgd2FzIG9yIHdpbGwgYmUgYSBoZWFkZXIgY3JjICovXG4gIHRoaXMuaGNyYyAgICAgICA9IDA7XG4gIC8qIHRydWUgd2hlbiBkb25lIHJlYWRpbmcgZ3ppcCBoZWFkZXIgKG5vdCB1c2VkIHdoZW4gd3JpdGluZyBhIGd6aXAgZmlsZSkgKi9cbiAgdGhpcy5kb25lICAgICAgID0gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR1poZWFkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuLy8gU2VlIHN0YXRlIGRlZnMgZnJvbSBpbmZsYXRlLmpzXG5jb25zdCBCQUQgPSAxNjIwOTsgICAgICAgLyogZ290IGEgZGF0YSBlcnJvciAtLSByZW1haW4gaGVyZSB1bnRpbCByZXNldCAqL1xuY29uc3QgVFlQRSA9IDE2MTkxOyAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIHR5cGUgYml0cywgaW5jbHVkaW5nIGxhc3QtZmxhZyBiaXQgKi9cblxuLypcbiAgIERlY29kZSBsaXRlcmFsLCBsZW5ndGgsIGFuZCBkaXN0YW5jZSBjb2RlcyBhbmQgd3JpdGUgb3V0IHRoZSByZXN1bHRpbmdcbiAgIGxpdGVyYWwgYW5kIG1hdGNoIGJ5dGVzIHVudGlsIGVpdGhlciBub3QgZW5vdWdoIGlucHV0IG9yIG91dHB1dCBpc1xuICAgYXZhaWxhYmxlLCBhbiBlbmQtb2YtYmxvY2sgaXMgZW5jb3VudGVyZWQsIG9yIGEgZGF0YSBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAgIFdoZW4gbGFyZ2UgZW5vdWdoIGlucHV0IGFuZCBvdXRwdXQgYnVmZmVycyBhcmUgc3VwcGxpZWQgdG8gaW5mbGF0ZSgpLCBmb3JcbiAgIGV4YW1wbGUsIGEgMTZLIGlucHV0IGJ1ZmZlciBhbmQgYSA2NEsgb3V0cHV0IGJ1ZmZlciwgbW9yZSB0aGFuIDk1JSBvZiB0aGVcbiAgIGluZmxhdGUgZXhlY3V0aW9uIHRpbWUgaXMgc3BlbnQgaW4gdGhpcyByb3V0aW5lLlxuXG4gICBFbnRyeSBhc3N1bXB0aW9uczpcblxuICAgICAgICBzdGF0ZS5tb2RlID09PSBMRU5cbiAgICAgICAgc3RybS5hdmFpbF9pbiA+PSA2XG4gICAgICAgIHN0cm0uYXZhaWxfb3V0ID49IDI1OFxuICAgICAgICBzdGFydCA+PSBzdHJtLmF2YWlsX291dFxuICAgICAgICBzdGF0ZS5iaXRzIDwgOFxuXG4gICBPbiByZXR1cm4sIHN0YXRlLm1vZGUgaXMgb25lIG9mOlxuXG4gICAgICAgIExFTiAtLSByYW4gb3V0IG9mIGVub3VnaCBvdXRwdXQgc3BhY2Ugb3IgZW5vdWdoIGF2YWlsYWJsZSBpbnB1dFxuICAgICAgICBUWVBFIC0tIHJlYWNoZWQgZW5kIG9mIGJsb2NrIGNvZGUsIGluZmxhdGUoKSB0byBpbnRlcnByZXQgbmV4dCBibG9ja1xuICAgICAgICBCQUQgLS0gZXJyb3IgaW4gYmxvY2sgZGF0YVxuXG4gICBOb3RlczpcblxuICAgIC0gVGhlIG1heGltdW0gaW5wdXQgYml0cyB1c2VkIGJ5IGEgbGVuZ3RoL2Rpc3RhbmNlIHBhaXIgaXMgMTUgYml0cyBmb3IgdGhlXG4gICAgICBsZW5ndGggY29kZSwgNSBiaXRzIGZvciB0aGUgbGVuZ3RoIGV4dHJhLCAxNSBiaXRzIGZvciB0aGUgZGlzdGFuY2UgY29kZSxcbiAgICAgIGFuZCAxMyBiaXRzIGZvciB0aGUgZGlzdGFuY2UgZXh0cmEuICBUaGlzIHRvdGFscyA0OCBiaXRzLCBvciBzaXggYnl0ZXMuXG4gICAgICBUaGVyZWZvcmUgaWYgc3RybS5hdmFpbF9pbiA+PSA2LCB0aGVuIHRoZXJlIGlzIGVub3VnaCBpbnB1dCB0byBhdm9pZFxuICAgICAgY2hlY2tpbmcgZm9yIGF2YWlsYWJsZSBpbnB1dCB3aGlsZSBkZWNvZGluZy5cblxuICAgIC0gVGhlIG1heGltdW0gYnl0ZXMgdGhhdCBhIHNpbmdsZSBsZW5ndGgvZGlzdGFuY2UgcGFpciBjYW4gb3V0cHV0IGlzIDI1OFxuICAgICAgYnl0ZXMsIHdoaWNoIGlzIHRoZSBtYXhpbXVtIGxlbmd0aCB0aGF0IGNhbiBiZSBjb2RlZC4gIGluZmxhdGVfZmFzdCgpXG4gICAgICByZXF1aXJlcyBzdHJtLmF2YWlsX291dCA+PSAyNTggZm9yIGVhY2ggbG9vcCB0byBhdm9pZCBjaGVja2luZyBmb3JcbiAgICAgIG91dHB1dCBzcGFjZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmZsYXRlX2Zhc3Qoc3RybSwgc3RhcnQpIHtcbiAgbGV0IF9pbjsgICAgICAgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0uaW5wdXQgKi9cbiAgbGV0IGxhc3Q7ICAgICAgICAgICAgICAgICAgIC8qIGhhdmUgZW5vdWdoIGlucHV0IHdoaWxlIGluIDwgbGFzdCAqL1xuICBsZXQgX291dDsgICAgICAgICAgICAgICAgICAgLyogbG9jYWwgc3RybS5vdXRwdXQgKi9cbiAgbGV0IGJlZzsgICAgICAgICAgICAgICAgICAgIC8qIGluZmxhdGUoKSdzIGluaXRpYWwgc3RybS5vdXRwdXQgKi9cbiAgbGV0IGVuZDsgICAgICAgICAgICAgICAgICAgIC8qIHdoaWxlIG91dCA8IGVuZCwgZW5vdWdoIHNwYWNlIGF2YWlsYWJsZSAqL1xuLy8jaWZkZWYgSU5GTEFURV9TVFJJQ1RcbiAgbGV0IGRtYXg7ICAgICAgICAgICAgICAgICAgIC8qIG1heGltdW0gZGlzdGFuY2UgZnJvbSB6bGliIGhlYWRlciAqL1xuLy8jZW5kaWZcbiAgbGV0IHdzaXplOyAgICAgICAgICAgICAgICAgIC8qIHdpbmRvdyBzaXplIG9yIHplcm8gaWYgbm90IHVzaW5nIHdpbmRvdyAqL1xuICBsZXQgd2hhdmU7ICAgICAgICAgICAgICAgICAgLyogdmFsaWQgYnl0ZXMgaW4gdGhlIHdpbmRvdyAqL1xuICBsZXQgd25leHQ7ICAgICAgICAgICAgICAgICAgLyogd2luZG93IHdyaXRlIGluZGV4ICovXG4gIC8vIFVzZSBgc193aW5kb3dgIGluc3RlYWQgYHdpbmRvd2AsIGF2b2lkIGNvbmZsaWN0IHdpdGggaW5zdHJ1bWVudGF0aW9uIHRvb2xzXG4gIGxldCBzX3dpbmRvdzsgICAgICAgICAgICAgICAvKiBhbGxvY2F0ZWQgc2xpZGluZyB3aW5kb3csIGlmIHdzaXplICE9IDAgKi9cbiAgbGV0IGhvbGQ7ICAgICAgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0uaG9sZCAqL1xuICBsZXQgYml0czsgICAgICAgICAgICAgICAgICAgLyogbG9jYWwgc3RybS5iaXRzICovXG4gIGxldCBsY29kZTsgICAgICAgICAgICAgICAgICAvKiBsb2NhbCBzdHJtLmxlbmNvZGUgKi9cbiAgbGV0IGRjb2RlOyAgICAgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0uZGlzdGNvZGUgKi9cbiAgbGV0IGxtYXNrOyAgICAgICAgICAgICAgICAgIC8qIG1hc2sgZm9yIGZpcnN0IGxldmVsIG9mIGxlbmd0aCBjb2RlcyAqL1xuICBsZXQgZG1hc2s7ICAgICAgICAgICAgICAgICAgLyogbWFzayBmb3IgZmlyc3QgbGV2ZWwgb2YgZGlzdGFuY2UgY29kZXMgKi9cbiAgbGV0IGhlcmU7ICAgICAgICAgICAgICAgICAgIC8qIHJldHJpZXZlZCB0YWJsZSBlbnRyeSAqL1xuICBsZXQgb3A7ICAgICAgICAgICAgICAgICAgICAgLyogY29kZSBiaXRzLCBvcGVyYXRpb24sIGV4dHJhIGJpdHMsIG9yICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAgd2luZG93IHBvc2l0aW9uLCB3aW5kb3cgYnl0ZXMgdG8gY29weSAqL1xuICBsZXQgbGVuOyAgICAgICAgICAgICAgICAgICAgLyogbWF0Y2ggbGVuZ3RoLCB1bnVzZWQgYnl0ZXMgKi9cbiAgbGV0IGRpc3Q7ICAgICAgICAgICAgICAgICAgIC8qIG1hdGNoIGRpc3RhbmNlICovXG4gIGxldCBmcm9tOyAgICAgICAgICAgICAgICAgICAvKiB3aGVyZSB0byBjb3B5IG1hdGNoIGZyb20gKi9cbiAgbGV0IGZyb21fc291cmNlO1xuXG5cbiAgbGV0IGlucHV0LCBvdXRwdXQ7IC8vIEpTIHNwZWNpZmljLCBiZWNhdXNlIHdlIGhhdmUgbm8gcG9pbnRlcnNcblxuICAvKiBjb3B5IHN0YXRlIHRvIGxvY2FsIHZhcmlhYmxlcyAqL1xuICBjb25zdCBzdGF0ZSA9IHN0cm0uc3RhdGU7XG4gIC8vaGVyZSA9IHN0YXRlLmhlcmU7XG4gIF9pbiA9IHN0cm0ubmV4dF9pbjtcbiAgaW5wdXQgPSBzdHJtLmlucHV0O1xuICBsYXN0ID0gX2luICsgKHN0cm0uYXZhaWxfaW4gLSA1KTtcbiAgX291dCA9IHN0cm0ubmV4dF9vdXQ7XG4gIG91dHB1dCA9IHN0cm0ub3V0cHV0O1xuICBiZWcgPSBfb3V0IC0gKHN0YXJ0IC0gc3RybS5hdmFpbF9vdXQpO1xuICBlbmQgPSBfb3V0ICsgKHN0cm0uYXZhaWxfb3V0IC0gMjU3KTtcbi8vI2lmZGVmIElORkxBVEVfU1RSSUNUXG4gIGRtYXggPSBzdGF0ZS5kbWF4O1xuLy8jZW5kaWZcbiAgd3NpemUgPSBzdGF0ZS53c2l6ZTtcbiAgd2hhdmUgPSBzdGF0ZS53aGF2ZTtcbiAgd25leHQgPSBzdGF0ZS53bmV4dDtcbiAgc193aW5kb3cgPSBzdGF0ZS53aW5kb3c7XG4gIGhvbGQgPSBzdGF0ZS5ob2xkO1xuICBiaXRzID0gc3RhdGUuYml0cztcbiAgbGNvZGUgPSBzdGF0ZS5sZW5jb2RlO1xuICBkY29kZSA9IHN0YXRlLmRpc3Rjb2RlO1xuICBsbWFzayA9ICgxIDw8IHN0YXRlLmxlbmJpdHMpIC0gMTtcbiAgZG1hc2sgPSAoMSA8PCBzdGF0ZS5kaXN0Yml0cykgLSAxO1xuXG5cbiAgLyogZGVjb2RlIGxpdGVyYWxzIGFuZCBsZW5ndGgvZGlzdGFuY2VzIHVudGlsIGVuZC1vZi1ibG9jayBvciBub3QgZW5vdWdoXG4gICAgIGlucHV0IGRhdGEgb3Igb3V0cHV0IHNwYWNlICovXG5cbiAgdG9wOlxuICBkbyB7XG4gICAgaWYgKGJpdHMgPCAxNSkge1xuICAgICAgaG9sZCArPSBpbnB1dFtfaW4rK10gPDwgYml0cztcbiAgICAgIGJpdHMgKz0gODtcbiAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICBiaXRzICs9IDg7XG4gICAgfVxuXG4gICAgaGVyZSA9IGxjb2RlW2hvbGQgJiBsbWFza107XG5cbiAgICBkb2xlbjpcbiAgICBmb3IgKDs7KSB7IC8vIEdvdG8gZW11bGF0aW9uXG4gICAgICBvcCA9IGhlcmUgPj4+IDI0LypoZXJlLmJpdHMqLztcbiAgICAgIGhvbGQgPj4+PSBvcDtcbiAgICAgIGJpdHMgLT0gb3A7XG4gICAgICBvcCA9IChoZXJlID4+PiAxNikgJiAweGZmLypoZXJlLm9wKi87XG4gICAgICBpZiAob3AgPT09IDApIHsgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGxpdGVyYWwgKi9cbiAgICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsIGhlcmUudmFsID49IDB4MjAgJiYgaGVyZS52YWwgPCAweDdmID9cbiAgICAgICAgLy8gICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsICclYydcXG5cIiA6XG4gICAgICAgIC8vICAgICAgICBcImluZmxhdGU6ICAgICAgICAgbGl0ZXJhbCAweCUwMnhcXG5cIiwgaGVyZS52YWwpKTtcbiAgICAgICAgb3V0cHV0W19vdXQrK10gPSBoZXJlICYgMHhmZmZmLypoZXJlLnZhbCovO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob3AgJiAxNikgeyAgICAgICAgICAgICAgICAgICAgIC8qIGxlbmd0aCBiYXNlICovXG4gICAgICAgIGxlbiA9IGhlcmUgJiAweGZmZmYvKmhlcmUudmFsKi87XG4gICAgICAgIG9wICY9IDE1OyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBleHRyYSBiaXRzICovXG4gICAgICAgIGlmIChvcCkge1xuICAgICAgICAgIGlmIChiaXRzIDwgb3ApIHtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxlbiArPSBob2xkICYgKCgxIDw8IG9wKSAtIDEpO1xuICAgICAgICAgIGhvbGQgPj4+PSBvcDtcbiAgICAgICAgICBiaXRzIC09IG9wO1xuICAgICAgICB9XG4gICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgbGVuZ3RoICV1XFxuXCIsIGxlbikpO1xuICAgICAgICBpZiAoYml0cyA8IDE1KSB7XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtfaW4rK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtfaW4rK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgaGVyZSA9IGRjb2RlW2hvbGQgJiBkbWFza107XG5cbiAgICAgICAgZG9kaXN0OlxuICAgICAgICBmb3IgKDs7KSB7IC8vIGdvdG8gZW11bGF0aW9uXG4gICAgICAgICAgb3AgPSBoZXJlID4+PiAyNC8qaGVyZS5iaXRzKi87XG4gICAgICAgICAgaG9sZCA+Pj49IG9wO1xuICAgICAgICAgIGJpdHMgLT0gb3A7XG4gICAgICAgICAgb3AgPSAoaGVyZSA+Pj4gMTYpICYgMHhmZi8qaGVyZS5vcCovO1xuXG4gICAgICAgICAgaWYgKG9wICYgMTYpIHsgICAgICAgICAgICAgICAgICAgICAgLyogZGlzdGFuY2UgYmFzZSAqL1xuICAgICAgICAgICAgZGlzdCA9IGhlcmUgJiAweGZmZmYvKmhlcmUudmFsKi87XG4gICAgICAgICAgICBvcCAmPSAxNTsgICAgICAgICAgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBleHRyYSBiaXRzICovXG4gICAgICAgICAgICBpZiAoYml0cyA8IG9wKSB7XG4gICAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgICAgaWYgKGJpdHMgPCBvcCkge1xuICAgICAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXN0ICs9IGhvbGQgJiAoKDEgPDwgb3ApIC0gMSk7XG4vLyNpZmRlZiBJTkZMQVRFX1NUUklDVFxuICAgICAgICAgICAgaWYgKGRpc3QgPiBkbWF4KSB7XG4gICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrJztcbiAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgICAgYnJlYWsgdG9wO1xuICAgICAgICAgICAgfVxuLy8jZW5kaWZcbiAgICAgICAgICAgIGhvbGQgPj4+PSBvcDtcbiAgICAgICAgICAgIGJpdHMgLT0gb3A7XG4gICAgICAgICAgICAvL1RyYWNldnYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICAgIGRpc3RhbmNlICV1XFxuXCIsIGRpc3QpKTtcbiAgICAgICAgICAgIG9wID0gX291dCAtIGJlZzsgICAgICAgICAgICAgICAgLyogbWF4IGRpc3RhbmNlIGluIG91dHB1dCAqL1xuICAgICAgICAgICAgaWYgKGRpc3QgPiBvcCkgeyAgICAgICAgICAgICAgICAvKiBzZWUgaWYgY29weSBmcm9tIHdpbmRvdyAqL1xuICAgICAgICAgICAgICBvcCA9IGRpc3QgLSBvcDsgICAgICAgICAgICAgICAvKiBkaXN0YW5jZSBiYWNrIGluIHdpbmRvdyAqL1xuICAgICAgICAgICAgICBpZiAob3AgPiB3aGF2ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zYW5lKSB7XG4gICAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayc7XG4gICAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgICAgICAgYnJlYWsgdG9wO1xuICAgICAgICAgICAgICAgIH1cblxuLy8gKCEpIFRoaXMgYmxvY2sgaXMgZGlzYWJsZWQgaW4gemxpYiBkZWZhdWx0cyxcbi8vIGRvbid0IGVuYWJsZSBpdCBmb3IgYmluYXJ5IGNvbXBhdGliaWxpdHlcbi8vI2lmZGVmIElORkxBVEVfQUxMT1dfSU5WQUxJRF9ESVNUQU5DRV9UT09GQVJfQVJSUlxuLy8gICAgICAgICAgICAgICAgaWYgKGxlbiA8PSBvcCAtIHdoYXZlKSB7XG4vLyAgICAgICAgICAgICAgICAgIGRvIHtcbi8vICAgICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IDA7XG4vLyAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tbGVuKTtcbi8vICAgICAgICAgICAgICAgICAgY29udGludWUgdG9wO1xuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgbGVuIC09IG9wIC0gd2hhdmU7XG4vLyAgICAgICAgICAgICAgICBkbyB7XG4vLyAgICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gMDtcbi8vICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tb3AgPiB3aGF2ZSk7XG4vLyAgICAgICAgICAgICAgICBpZiAob3AgPT09IDApIHtcbi8vICAgICAgICAgICAgICAgICAgZnJvbSA9IF9vdXQgLSBkaXN0O1xuLy8gICAgICAgICAgICAgICAgICBkbyB7XG4vLyAgICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBvdXRwdXRbZnJvbSsrXTtcbi8vICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1sZW4pO1xuLy8gICAgICAgICAgICAgICAgICBjb250aW51ZSB0b3A7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyNlbmRpZlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZyb20gPSAwOyAvLyB3aW5kb3cgaW5kZXhcbiAgICAgICAgICAgICAgZnJvbV9zb3VyY2UgPSBzX3dpbmRvdztcbiAgICAgICAgICAgICAgaWYgKHduZXh0ID09PSAwKSB7ICAgICAgICAgICAvKiB2ZXJ5IGNvbW1vbiBjYXNlICovXG4gICAgICAgICAgICAgICAgZnJvbSArPSB3c2l6ZSAtIG9wO1xuICAgICAgICAgICAgICAgIGlmIChvcCA8IGxlbikgeyAgICAgICAgIC8qIHNvbWUgZnJvbSB3aW5kb3cgKi9cbiAgICAgICAgICAgICAgICAgIGxlbiAtPSBvcDtcbiAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBzX3dpbmRvd1tmcm9tKytdO1xuICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1vcCk7XG4gICAgICAgICAgICAgICAgICBmcm9tID0gX291dCAtIGRpc3Q7ICAvKiByZXN0IGZyb20gb3V0cHV0ICovXG4gICAgICAgICAgICAgICAgICBmcm9tX3NvdXJjZSA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZiAod25leHQgPCBvcCkgeyAgICAgIC8qIHdyYXAgYXJvdW5kIHdpbmRvdyAqL1xuICAgICAgICAgICAgICAgIGZyb20gKz0gd3NpemUgKyB3bmV4dCAtIG9wO1xuICAgICAgICAgICAgICAgIG9wIC09IHduZXh0O1xuICAgICAgICAgICAgICAgIGlmIChvcCA8IGxlbikgeyAgICAgICAgIC8qIHNvbWUgZnJvbSBlbmQgb2Ygd2luZG93ICovXG4gICAgICAgICAgICAgICAgICBsZW4gLT0gb3A7XG4gICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gc193aW5kb3dbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tb3ApO1xuICAgICAgICAgICAgICAgICAgZnJvbSA9IDA7XG4gICAgICAgICAgICAgICAgICBpZiAod25leHQgPCBsZW4pIHsgIC8qIHNvbWUgZnJvbSBzdGFydCBvZiB3aW5kb3cgKi9cbiAgICAgICAgICAgICAgICAgICAgb3AgPSB3bmV4dDtcbiAgICAgICAgICAgICAgICAgICAgbGVuIC09IG9wO1xuICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBzX3dpbmRvd1tmcm9tKytdO1xuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLW9wKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSA9IF9vdXQgLSBkaXN0OyAgICAgIC8qIHJlc3QgZnJvbSBvdXRwdXQgKi9cbiAgICAgICAgICAgICAgICAgICAgZnJvbV9zb3VyY2UgPSBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAvKiBjb250aWd1b3VzIGluIHdpbmRvdyAqL1xuICAgICAgICAgICAgICAgIGZyb20gKz0gd25leHQgLSBvcDtcbiAgICAgICAgICAgICAgICBpZiAob3AgPCBsZW4pIHsgICAgICAgICAvKiBzb21lIGZyb20gd2luZG93ICovXG4gICAgICAgICAgICAgICAgICBsZW4gLT0gb3A7XG4gICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gc193aW5kb3dbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tb3ApO1xuICAgICAgICAgICAgICAgICAgZnJvbSA9IF9vdXQgLSBkaXN0OyAgLyogcmVzdCBmcm9tIG91dHB1dCAqL1xuICAgICAgICAgICAgICAgICAgZnJvbV9zb3VyY2UgPSBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdoaWxlIChsZW4gPiAyKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBmcm9tX3NvdXJjZVtmcm9tKytdO1xuICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gZnJvbV9zb3VyY2VbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IGZyb21fc291cmNlW2Zyb20rK107XG4gICAgICAgICAgICAgICAgbGVuIC09IDM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gZnJvbV9zb3VyY2VbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBpZiAobGVuID4gMSkge1xuICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBmcm9tX3NvdXJjZVtmcm9tKytdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGZyb20gPSBfb3V0IC0gZGlzdDsgICAgICAgICAgLyogY29weSBkaXJlY3QgZnJvbSBvdXRwdXQgKi9cbiAgICAgICAgICAgICAgZG8geyAgICAgICAgICAgICAgICAgICAgICAgIC8qIG1pbmltdW0gbGVuZ3RoIGlzIHRocmVlICovXG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBvdXRwdXRbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IG91dHB1dFtmcm9tKytdO1xuICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gb3V0cHV0W2Zyb20rK107XG4gICAgICAgICAgICAgICAgbGVuIC09IDM7XG4gICAgICAgICAgICAgIH0gd2hpbGUgKGxlbiA+IDIpO1xuICAgICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBvdXRwdXRbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBpZiAobGVuID4gMSkge1xuICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBvdXRwdXRbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoKG9wICYgNjQpID09PSAwKSB7ICAgICAgICAgIC8qIDJuZCBsZXZlbCBkaXN0YW5jZSBjb2RlICovXG4gICAgICAgICAgICBoZXJlID0gZGNvZGVbKGhlcmUgJiAweGZmZmYpLypoZXJlLnZhbCovICsgKGhvbGQgJiAoKDEgPDwgb3ApIC0gMSkpXTtcbiAgICAgICAgICAgIGNvbnRpbnVlIGRvZGlzdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIGNvZGUnO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgIGJyZWFrIHRvcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhazsgLy8gbmVlZCB0byBlbXVsYXRlIGdvdG8gdmlhIFwiY29udGludWVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgob3AgJiA2NCkgPT09IDApIHsgICAgICAgICAgICAgIC8qIDJuZCBsZXZlbCBsZW5ndGggY29kZSAqL1xuICAgICAgICBoZXJlID0gbGNvZGVbKGhlcmUgJiAweGZmZmYpLypoZXJlLnZhbCovICsgKGhvbGQgJiAoKDEgPDwgb3ApIC0gMSkpXTtcbiAgICAgICAgY29udGludWUgZG9sZW47XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcCAmIDMyKSB7ICAgICAgICAgICAgICAgICAgICAgLyogZW5kLW9mLWJsb2NrICovXG4gICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgZW5kIG9mIGJsb2NrXFxuXCIpKTtcbiAgICAgICAgc3RhdGUubW9kZSA9IFRZUEU7XG4gICAgICAgIGJyZWFrIHRvcDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGUnO1xuICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICBicmVhayB0b3A7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrOyAvLyBuZWVkIHRvIGVtdWxhdGUgZ290byB2aWEgXCJjb250aW51ZVwiXG4gICAgfVxuICB9IHdoaWxlIChfaW4gPCBsYXN0ICYmIF9vdXQgPCBlbmQpO1xuXG4gIC8qIHJldHVybiB1bnVzZWQgYnl0ZXMgKG9uIGVudHJ5LCBiaXRzIDwgOCwgc28gaW4gd29uJ3QgZ28gdG9vIGZhciBiYWNrKSAqL1xuICBsZW4gPSBiaXRzID4+IDM7XG4gIF9pbiAtPSBsZW47XG4gIGJpdHMgLT0gbGVuIDw8IDM7XG4gIGhvbGQgJj0gKDEgPDwgYml0cykgLSAxO1xuXG4gIC8qIHVwZGF0ZSBzdGF0ZSBhbmQgcmV0dXJuICovXG4gIHN0cm0ubmV4dF9pbiA9IF9pbjtcbiAgc3RybS5uZXh0X291dCA9IF9vdXQ7XG4gIHN0cm0uYXZhaWxfaW4gPSAoX2luIDwgbGFzdCA/IDUgKyAobGFzdCAtIF9pbikgOiA1IC0gKF9pbiAtIGxhc3QpKTtcbiAgc3RybS5hdmFpbF9vdXQgPSAoX291dCA8IGVuZCA/IDI1NyArIChlbmQgLSBfb3V0KSA6IDI1NyAtIChfb3V0IC0gZW5kKSk7XG4gIHN0YXRlLmhvbGQgPSBob2xkO1xuICBzdGF0ZS5iaXRzID0gYml0cztcbiAgcmV0dXJuO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5jb25zdCBhZGxlcjMyICAgICAgID0gcmVxdWlyZSgnLi9hZGxlcjMyJyk7XG5jb25zdCBjcmMzMiAgICAgICAgID0gcmVxdWlyZSgnLi9jcmMzMicpO1xuY29uc3QgaW5mbGF0ZV9mYXN0ICA9IHJlcXVpcmUoJy4vaW5mZmFzdCcpO1xuY29uc3QgaW5mbGF0ZV90YWJsZSA9IHJlcXVpcmUoJy4vaW5mdHJlZXMnKTtcblxuY29uc3QgQ09ERVMgPSAwO1xuY29uc3QgTEVOUyA9IDE7XG5jb25zdCBESVNUUyA9IDI7XG5cbi8qIFB1YmxpYyBjb25zdGFudHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5jb25zdCB7XG4gIFpfRklOSVNILCBaX0JMT0NLLCBaX1RSRUVTLFxuICBaX09LLCBaX1NUUkVBTV9FTkQsIFpfTkVFRF9ESUNULCBaX1NUUkVBTV9FUlJPUiwgWl9EQVRBX0VSUk9SLCBaX01FTV9FUlJPUiwgWl9CVUZfRVJST1IsXG4gIFpfREVGTEFURURcbn0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5cbi8qIFNUQVRFUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbmNvbnN0ICAgIEhFQUQgPSAxNjE4MDsgICAgICAgLyogaTogd2FpdGluZyBmb3IgbWFnaWMgaGVhZGVyICovXG5jb25zdCAgICBGTEFHUyA9IDE2MTgxOyAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIG1ldGhvZCBhbmQgZmxhZ3MgKGd6aXApICovXG5jb25zdCAgICBUSU1FID0gMTYxODI7ICAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIG1vZGlmaWNhdGlvbiB0aW1lIChnemlwKSAqL1xuY29uc3QgICAgT1MgPSAxNjE4MzsgICAgICAgICAvKiBpOiB3YWl0aW5nIGZvciBleHRyYSBmbGFncyBhbmQgb3BlcmF0aW5nIHN5c3RlbSAoZ3ppcCkgKi9cbmNvbnN0ICAgIEVYTEVOID0gMTYxODQ7ICAgICAgLyogaTogd2FpdGluZyBmb3IgZXh0cmEgbGVuZ3RoIChnemlwKSAqL1xuY29uc3QgICAgRVhUUkEgPSAxNjE4NTsgICAgICAvKiBpOiB3YWl0aW5nIGZvciBleHRyYSBieXRlcyAoZ3ppcCkgKi9cbmNvbnN0ICAgIE5BTUUgPSAxNjE4NjsgICAgICAgLyogaTogd2FpdGluZyBmb3IgZW5kIG9mIGZpbGUgbmFtZSAoZ3ppcCkgKi9cbmNvbnN0ICAgIENPTU1FTlQgPSAxNjE4NzsgICAgLyogaTogd2FpdGluZyBmb3IgZW5kIG9mIGNvbW1lbnQgKGd6aXApICovXG5jb25zdCAgICBIQ1JDID0gMTYxODg7ICAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIGhlYWRlciBjcmMgKGd6aXApICovXG5jb25zdCAgICBESUNUSUQgPSAxNjE4OTsgICAgLyogaTogd2FpdGluZyBmb3IgZGljdGlvbmFyeSBjaGVjayB2YWx1ZSAqL1xuY29uc3QgICAgRElDVCA9IDE2MTkwOyAgICAgIC8qIHdhaXRpbmcgZm9yIGluZmxhdGVTZXREaWN0aW9uYXJ5KCkgY2FsbCAqL1xuY29uc3QgICAgICAgIFRZUEUgPSAxNjE5MTsgICAgICAvKiBpOiB3YWl0aW5nIGZvciB0eXBlIGJpdHMsIGluY2x1ZGluZyBsYXN0LWZsYWcgYml0ICovXG5jb25zdCAgICAgICAgVFlQRURPID0gMTYxOTI7ICAgIC8qIGk6IHNhbWUsIGJ1dCBza2lwIGNoZWNrIHRvIGV4aXQgaW5mbGF0ZSBvbiBuZXcgYmxvY2sgKi9cbmNvbnN0ICAgICAgICBTVE9SRUQgPSAxNjE5MzsgICAgLyogaTogd2FpdGluZyBmb3Igc3RvcmVkIHNpemUgKGxlbmd0aCBhbmQgY29tcGxlbWVudCkgKi9cbmNvbnN0ICAgICAgICBDT1BZXyA9IDE2MTk0OyAgICAgLyogaS9vOiBzYW1lIGFzIENPUFkgYmVsb3csIGJ1dCBvbmx5IGZpcnN0IHRpbWUgaW4gKi9cbmNvbnN0ICAgICAgICBDT1BZID0gMTYxOTU7ICAgICAgLyogaS9vOiB3YWl0aW5nIGZvciBpbnB1dCBvciBvdXRwdXQgdG8gY29weSBzdG9yZWQgYmxvY2sgKi9cbmNvbnN0ICAgICAgICBUQUJMRSA9IDE2MTk2OyAgICAgLyogaTogd2FpdGluZyBmb3IgZHluYW1pYyBibG9jayB0YWJsZSBsZW5ndGhzICovXG5jb25zdCAgICAgICAgTEVOTEVOUyA9IDE2MTk3OyAgIC8qIGk6IHdhaXRpbmcgZm9yIGNvZGUgbGVuZ3RoIGNvZGUgbGVuZ3RocyAqL1xuY29uc3QgICAgICAgIENPREVMRU5TID0gMTYxOTg7ICAvKiBpOiB3YWl0aW5nIGZvciBsZW5ndGgvbGl0IGFuZCBkaXN0YW5jZSBjb2RlIGxlbmd0aHMgKi9cbmNvbnN0ICAgICAgICAgICAgTEVOXyA9IDE2MTk5OyAgICAgIC8qIGk6IHNhbWUgYXMgTEVOIGJlbG93LCBidXQgb25seSBmaXJzdCB0aW1lIGluICovXG5jb25zdCAgICAgICAgICAgIExFTiA9IDE2MjAwOyAgICAgICAvKiBpOiB3YWl0aW5nIGZvciBsZW5ndGgvbGl0L2VvYiBjb2RlICovXG5jb25zdCAgICAgICAgICAgIExFTkVYVCA9IDE2MjAxOyAgICAvKiBpOiB3YWl0aW5nIGZvciBsZW5ndGggZXh0cmEgYml0cyAqL1xuY29uc3QgICAgICAgICAgICBESVNUID0gMTYyMDI7ICAgICAgLyogaTogd2FpdGluZyBmb3IgZGlzdGFuY2UgY29kZSAqL1xuY29uc3QgICAgICAgICAgICBESVNURVhUID0gMTYyMDM7ICAgLyogaTogd2FpdGluZyBmb3IgZGlzdGFuY2UgZXh0cmEgYml0cyAqL1xuY29uc3QgICAgICAgICAgICBNQVRDSCA9IDE2MjA0OyAgICAgLyogbzogd2FpdGluZyBmb3Igb3V0cHV0IHNwYWNlIHRvIGNvcHkgc3RyaW5nICovXG5jb25zdCAgICAgICAgICAgIExJVCA9IDE2MjA1OyAgICAgICAvKiBvOiB3YWl0aW5nIGZvciBvdXRwdXQgc3BhY2UgdG8gd3JpdGUgbGl0ZXJhbCAqL1xuY29uc3QgICAgQ0hFQ0sgPSAxNjIwNjsgICAgIC8qIGk6IHdhaXRpbmcgZm9yIDMyLWJpdCBjaGVjayB2YWx1ZSAqL1xuY29uc3QgICAgTEVOR1RIID0gMTYyMDc7ICAgIC8qIGk6IHdhaXRpbmcgZm9yIDMyLWJpdCBsZW5ndGggKGd6aXApICovXG5jb25zdCAgICBET05FID0gMTYyMDg7ICAgICAgLyogZmluaXNoZWQgY2hlY2ssIGRvbmUgLS0gcmVtYWluIGhlcmUgdW50aWwgcmVzZXQgKi9cbmNvbnN0ICAgIEJBRCA9IDE2MjA5OyAgICAgICAvKiBnb3QgYSBkYXRhIGVycm9yIC0tIHJlbWFpbiBoZXJlIHVudGlsIHJlc2V0ICovXG5jb25zdCAgICBNRU0gPSAxNjIxMDsgICAgICAgLyogZ290IGFuIGluZmxhdGUoKSBtZW1vcnkgZXJyb3IgLS0gcmVtYWluIGhlcmUgdW50aWwgcmVzZXQgKi9cbmNvbnN0ICAgIFNZTkMgPSAxNjIxMTsgICAgICAvKiBsb29raW5nIGZvciBzeW5jaHJvbml6YXRpb24gYnl0ZXMgdG8gcmVzdGFydCBpbmZsYXRlKCkgKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG5cbmNvbnN0IEVOT1VHSF9MRU5TID0gODUyO1xuY29uc3QgRU5PVUdIX0RJU1RTID0gNTkyO1xuLy9jb25zdCBFTk9VR0ggPSAgKEVOT1VHSF9MRU5TK0VOT1VHSF9ESVNUUyk7XG5cbmNvbnN0IE1BWF9XQklUUyA9IDE1O1xuLyogMzJLIExaNzcgd2luZG93ICovXG5jb25zdCBERUZfV0JJVFMgPSBNQVhfV0JJVFM7XG5cblxuY29uc3QgenN3YXAzMiA9IChxKSA9PiB7XG5cbiAgcmV0dXJuICAoKChxID4+PiAyNCkgJiAweGZmKSArXG4gICAgICAgICAgKChxID4+PiA4KSAmIDB4ZmYwMCkgK1xuICAgICAgICAgICgocSAmIDB4ZmYwMCkgPDwgOCkgK1xuICAgICAgICAgICgocSAmIDB4ZmYpIDw8IDI0KSk7XG59O1xuXG5cbmZ1bmN0aW9uIEluZmxhdGVTdGF0ZSgpIHtcbiAgdGhpcy5zdHJtID0gbnVsbDsgICAgICAgICAgIC8qIHBvaW50ZXIgYmFjayB0byB0aGlzIHpsaWIgc3RyZWFtICovXG4gIHRoaXMubW9kZSA9IDA7ICAgICAgICAgICAgICAvKiBjdXJyZW50IGluZmxhdGUgbW9kZSAqL1xuICB0aGlzLmxhc3QgPSBmYWxzZTsgICAgICAgICAgLyogdHJ1ZSBpZiBwcm9jZXNzaW5nIGxhc3QgYmxvY2sgKi9cbiAgdGhpcy53cmFwID0gMDsgICAgICAgICAgICAgIC8qIGJpdCAwIHRydWUgZm9yIHpsaWIsIGJpdCAxIHRydWUgZm9yIGd6aXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXQgMiB0cnVlIHRvIHZhbGlkYXRlIGNoZWNrIHZhbHVlICovXG4gIHRoaXMuaGF2ZWRpY3QgPSBmYWxzZTsgICAgICAvKiB0cnVlIGlmIGRpY3Rpb25hcnkgcHJvdmlkZWQgKi9cbiAgdGhpcy5mbGFncyA9IDA7ICAgICAgICAgICAgIC8qIGd6aXAgaGVhZGVyIG1ldGhvZCBhbmQgZmxhZ3MgKDAgaWYgemxpYiksIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSBpZiByYXcgb3Igbm8gaGVhZGVyIHlldCAqL1xuICB0aGlzLmRtYXggPSAwOyAgICAgICAgICAgICAgLyogemxpYiBoZWFkZXIgbWF4IGRpc3RhbmNlIChJTkZMQVRFX1NUUklDVCkgKi9cbiAgdGhpcy5jaGVjayA9IDA7ICAgICAgICAgICAgIC8qIHByb3RlY3RlZCBjb3B5IG9mIGNoZWNrIHZhbHVlICovXG4gIHRoaXMudG90YWwgPSAwOyAgICAgICAgICAgICAvKiBwcm90ZWN0ZWQgY29weSBvZiBvdXRwdXQgY291bnQgKi9cbiAgLy8gVE9ETzogbWF5IGJlIHt9XG4gIHRoaXMuaGVhZCA9IG51bGw7ICAgICAgICAgICAvKiB3aGVyZSB0byBzYXZlIGd6aXAgaGVhZGVyIGluZm9ybWF0aW9uICovXG5cbiAgLyogc2xpZGluZyB3aW5kb3cgKi9cbiAgdGhpcy53Yml0cyA9IDA7ICAgICAgICAgICAgIC8qIGxvZyBiYXNlIDIgb2YgcmVxdWVzdGVkIHdpbmRvdyBzaXplICovXG4gIHRoaXMud3NpemUgPSAwOyAgICAgICAgICAgICAvKiB3aW5kb3cgc2l6ZSBvciB6ZXJvIGlmIG5vdCB1c2luZyB3aW5kb3cgKi9cbiAgdGhpcy53aGF2ZSA9IDA7ICAgICAgICAgICAgIC8qIHZhbGlkIGJ5dGVzIGluIHRoZSB3aW5kb3cgKi9cbiAgdGhpcy53bmV4dCA9IDA7ICAgICAgICAgICAgIC8qIHdpbmRvdyB3cml0ZSBpbmRleCAqL1xuICB0aGlzLndpbmRvdyA9IG51bGw7ICAgICAgICAgLyogYWxsb2NhdGVkIHNsaWRpbmcgd2luZG93LCBpZiBuZWVkZWQgKi9cblxuICAvKiBiaXQgYWNjdW11bGF0b3IgKi9cbiAgdGhpcy5ob2xkID0gMDsgICAgICAgICAgICAgIC8qIGlucHV0IGJpdCBhY2N1bXVsYXRvciAqL1xuICB0aGlzLmJpdHMgPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGJpdHMgaW4gXCJpblwiICovXG5cbiAgLyogZm9yIHN0cmluZyBhbmQgc3RvcmVkIGJsb2NrIGNvcHlpbmcgKi9cbiAgdGhpcy5sZW5ndGggPSAwOyAgICAgICAgICAgIC8qIGxpdGVyYWwgb3IgbGVuZ3RoIG9mIGRhdGEgdG8gY29weSAqL1xuICB0aGlzLm9mZnNldCA9IDA7ICAgICAgICAgICAgLyogZGlzdGFuY2UgYmFjayB0byBjb3B5IHN0cmluZyBmcm9tICovXG5cbiAgLyogZm9yIHRhYmxlIGFuZCBjb2RlIGRlY29kaW5nICovXG4gIHRoaXMuZXh0cmEgPSAwOyAgICAgICAgICAgICAvKiBleHRyYSBiaXRzIG5lZWRlZCAqL1xuXG4gIC8qIGZpeGVkIGFuZCBkeW5hbWljIGNvZGUgdGFibGVzICovXG4gIHRoaXMubGVuY29kZSA9IG51bGw7ICAgICAgICAgIC8qIHN0YXJ0aW5nIHRhYmxlIGZvciBsZW5ndGgvbGl0ZXJhbCBjb2RlcyAqL1xuICB0aGlzLmRpc3Rjb2RlID0gbnVsbDsgICAgICAgICAvKiBzdGFydGluZyB0YWJsZSBmb3IgZGlzdGFuY2UgY29kZXMgKi9cbiAgdGhpcy5sZW5iaXRzID0gMDsgICAgICAgICAgIC8qIGluZGV4IGJpdHMgZm9yIGxlbmNvZGUgKi9cbiAgdGhpcy5kaXN0Yml0cyA9IDA7ICAgICAgICAgIC8qIGluZGV4IGJpdHMgZm9yIGRpc3Rjb2RlICovXG5cbiAgLyogZHluYW1pYyB0YWJsZSBidWlsZGluZyAqL1xuICB0aGlzLm5jb2RlID0gMDsgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGNvZGUgbGVuZ3RoIGNvZGUgbGVuZ3RocyAqL1xuICB0aGlzLm5sZW4gPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGxlbmd0aCBjb2RlIGxlbmd0aHMgKi9cbiAgdGhpcy5uZGlzdCA9IDA7ICAgICAgICAgICAgIC8qIG51bWJlciBvZiBkaXN0YW5jZSBjb2RlIGxlbmd0aHMgKi9cbiAgdGhpcy5oYXZlID0gMDsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBjb2RlIGxlbmd0aHMgaW4gbGVuc1tdICovXG4gIHRoaXMubmV4dCA9IG51bGw7ICAgICAgICAgICAgICAvKiBuZXh0IGF2YWlsYWJsZSBzcGFjZSBpbiBjb2Rlc1tdICovXG5cbiAgdGhpcy5sZW5zID0gbmV3IFVpbnQxNkFycmF5KDMyMCk7IC8qIHRlbXBvcmFyeSBzdG9yYWdlIGZvciBjb2RlIGxlbmd0aHMgKi9cbiAgdGhpcy53b3JrID0gbmV3IFVpbnQxNkFycmF5KDI4OCk7IC8qIHdvcmsgYXJlYSBmb3IgY29kZSB0YWJsZSBidWlsZGluZyAqL1xuXG4gIC8qXG4gICBiZWNhdXNlIHdlIGRvbid0IGhhdmUgcG9pbnRlcnMgaW4ganMsIHdlIHVzZSBsZW5jb2RlIGFuZCBkaXN0Y29kZSBkaXJlY3RseVxuICAgYXMgYnVmZmVycyBzbyB3ZSBkb24ndCBuZWVkIGNvZGVzXG4gICovXG4gIC8vdGhpcy5jb2RlcyA9IG5ldyBJbnQzMkFycmF5KEVOT1VHSCk7ICAgICAgIC8qIHNwYWNlIGZvciBjb2RlIHRhYmxlcyAqL1xuICB0aGlzLmxlbmR5biA9IG51bGw7ICAgICAgICAgICAgICAvKiBkeW5hbWljIHRhYmxlIGZvciBsZW5ndGgvbGl0ZXJhbCBjb2RlcyAoSlMgc3BlY2lmaWMpICovXG4gIHRoaXMuZGlzdGR5biA9IG51bGw7ICAgICAgICAgICAgIC8qIGR5bmFtaWMgdGFibGUgZm9yIGRpc3RhbmNlIGNvZGVzIChKUyBzcGVjaWZpYykgKi9cbiAgdGhpcy5zYW5lID0gMDsgICAgICAgICAgICAgICAgICAgLyogaWYgZmFsc2UsIGFsbG93IGludmFsaWQgZGlzdGFuY2UgdG9vIGZhciAqL1xuICB0aGlzLmJhY2sgPSAwOyAgICAgICAgICAgICAgICAgICAvKiBiaXRzIGJhY2sgb2YgbGFzdCB1bnByb2Nlc3NlZCBsZW5ndGgvbGl0ICovXG4gIHRoaXMud2FzID0gMDsgICAgICAgICAgICAgICAgICAgIC8qIGluaXRpYWwgbGVuZ3RoIG9mIG1hdGNoICovXG59XG5cblxuY29uc3QgaW5mbGF0ZVN0YXRlQ2hlY2sgPSAoc3RybSkgPT4ge1xuXG4gIGlmICghc3RybSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGNvbnN0IHN0YXRlID0gc3RybS5zdGF0ZTtcbiAgaWYgKCFzdGF0ZSB8fCBzdGF0ZS5zdHJtICE9PSBzdHJtIHx8XG4gICAgc3RhdGUubW9kZSA8IEhFQUQgfHwgc3RhdGUubW9kZSA+IFNZTkMpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cblxuY29uc3QgaW5mbGF0ZVJlc2V0S2VlcCA9IChzdHJtKSA9PiB7XG5cbiAgaWYgKGluZmxhdGVTdGF0ZUNoZWNrKHN0cm0pKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICBjb25zdCBzdGF0ZSA9IHN0cm0uc3RhdGU7XG4gIHN0cm0udG90YWxfaW4gPSBzdHJtLnRvdGFsX291dCA9IHN0YXRlLnRvdGFsID0gMDtcbiAgc3RybS5tc2cgPSAnJzsgLypaX05VTEwqL1xuICBpZiAoc3RhdGUud3JhcCkgeyAgICAgICAvKiB0byBzdXBwb3J0IGlsbC1jb25jZWl2ZWQgSmF2YSB0ZXN0IHN1aXRlICovXG4gICAgc3RybS5hZGxlciA9IHN0YXRlLndyYXAgJiAxO1xuICB9XG4gIHN0YXRlLm1vZGUgPSBIRUFEO1xuICBzdGF0ZS5sYXN0ID0gMDtcbiAgc3RhdGUuaGF2ZWRpY3QgPSAwO1xuICBzdGF0ZS5mbGFncyA9IC0xO1xuICBzdGF0ZS5kbWF4ID0gMzI3Njg7XG4gIHN0YXRlLmhlYWQgPSBudWxsLypaX05VTEwqLztcbiAgc3RhdGUuaG9sZCA9IDA7XG4gIHN0YXRlLmJpdHMgPSAwO1xuICAvL3N0YXRlLmxlbmNvZGUgPSBzdGF0ZS5kaXN0Y29kZSA9IHN0YXRlLm5leHQgPSBzdGF0ZS5jb2RlcztcbiAgc3RhdGUubGVuY29kZSA9IHN0YXRlLmxlbmR5biA9IG5ldyBJbnQzMkFycmF5KEVOT1VHSF9MRU5TKTtcbiAgc3RhdGUuZGlzdGNvZGUgPSBzdGF0ZS5kaXN0ZHluID0gbmV3IEludDMyQXJyYXkoRU5PVUdIX0RJU1RTKTtcblxuICBzdGF0ZS5zYW5lID0gMTtcbiAgc3RhdGUuYmFjayA9IC0xO1xuICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6IHJlc2V0XFxuXCIpKTtcbiAgcmV0dXJuIFpfT0s7XG59O1xuXG5cbmNvbnN0IGluZmxhdGVSZXNldCA9IChzdHJtKSA9PiB7XG5cbiAgaWYgKGluZmxhdGVTdGF0ZUNoZWNrKHN0cm0pKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICBjb25zdCBzdGF0ZSA9IHN0cm0uc3RhdGU7XG4gIHN0YXRlLndzaXplID0gMDtcbiAgc3RhdGUud2hhdmUgPSAwO1xuICBzdGF0ZS53bmV4dCA9IDA7XG4gIHJldHVybiBpbmZsYXRlUmVzZXRLZWVwKHN0cm0pO1xuXG59O1xuXG5cbmNvbnN0IGluZmxhdGVSZXNldDIgPSAoc3RybSwgd2luZG93Qml0cykgPT4ge1xuICBsZXQgd3JhcDtcblxuICAvKiBnZXQgdGhlIHN0YXRlICovXG4gIGlmIChpbmZsYXRlU3RhdGVDaGVjayhzdHJtKSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cbiAgY29uc3Qgc3RhdGUgPSBzdHJtLnN0YXRlO1xuXG4gIC8qIGV4dHJhY3Qgd3JhcCByZXF1ZXN0IGZyb20gd2luZG93Qml0cyBwYXJhbWV0ZXIgKi9cbiAgaWYgKHdpbmRvd0JpdHMgPCAwKSB7XG4gICAgd3JhcCA9IDA7XG4gICAgd2luZG93Qml0cyA9IC13aW5kb3dCaXRzO1xuICB9XG4gIGVsc2Uge1xuICAgIHdyYXAgPSAod2luZG93Qml0cyA+PiA0KSArIDU7XG4gICAgaWYgKHdpbmRvd0JpdHMgPCA0OCkge1xuICAgICAgd2luZG93Qml0cyAmPSAxNTtcbiAgICB9XG4gIH1cblxuICAvKiBzZXQgbnVtYmVyIG9mIHdpbmRvdyBiaXRzLCBmcmVlIHdpbmRvdyBpZiBkaWZmZXJlbnQgKi9cbiAgaWYgKHdpbmRvd0JpdHMgJiYgKHdpbmRvd0JpdHMgPCA4IHx8IHdpbmRvd0JpdHMgPiAxNSkpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cbiAgaWYgKHN0YXRlLndpbmRvdyAhPT0gbnVsbCAmJiBzdGF0ZS53Yml0cyAhPT0gd2luZG93Qml0cykge1xuICAgIHN0YXRlLndpbmRvdyA9IG51bGw7XG4gIH1cblxuICAvKiB1cGRhdGUgc3RhdGUgYW5kIHJlc2V0IHRoZSByZXN0IG9mIGl0ICovXG4gIHN0YXRlLndyYXAgPSB3cmFwO1xuICBzdGF0ZS53Yml0cyA9IHdpbmRvd0JpdHM7XG4gIHJldHVybiBpbmZsYXRlUmVzZXQoc3RybSk7XG59O1xuXG5cbmNvbnN0IGluZmxhdGVJbml0MiA9IChzdHJtLCB3aW5kb3dCaXRzKSA9PiB7XG5cbiAgaWYgKCFzdHJtKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICAvL3N0cm0ubXNnID0gWl9OVUxMOyAgICAgICAgICAgICAgICAgLyogaW4gY2FzZSB3ZSByZXR1cm4gYW4gZXJyb3IgKi9cblxuICBjb25zdCBzdGF0ZSA9IG5ldyBJbmZsYXRlU3RhdGUoKTtcblxuICAvL2lmIChzdGF0ZSA9PT0gWl9OVUxMKSByZXR1cm4gWl9NRU1fRVJST1I7XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogYWxsb2NhdGVkXFxuXCIpKTtcbiAgc3RybS5zdGF0ZSA9IHN0YXRlO1xuICBzdGF0ZS5zdHJtID0gc3RybTtcbiAgc3RhdGUud2luZG93ID0gbnVsbC8qWl9OVUxMKi87XG4gIHN0YXRlLm1vZGUgPSBIRUFEOyAgICAgLyogdG8gcGFzcyBzdGF0ZSB0ZXN0IGluIGluZmxhdGVSZXNldDIoKSAqL1xuICBjb25zdCByZXQgPSBpbmZsYXRlUmVzZXQyKHN0cm0sIHdpbmRvd0JpdHMpO1xuICBpZiAocmV0ICE9PSBaX09LKSB7XG4gICAgc3RybS5zdGF0ZSA9IG51bGwvKlpfTlVMTCovO1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5cbmNvbnN0IGluZmxhdGVJbml0ID0gKHN0cm0pID0+IHtcblxuICByZXR1cm4gaW5mbGF0ZUluaXQyKHN0cm0sIERFRl9XQklUUyk7XG59O1xuXG5cbi8qXG4gUmV0dXJuIHN0YXRlIHdpdGggbGVuZ3RoIGFuZCBkaXN0YW5jZSBkZWNvZGluZyB0YWJsZXMgYW5kIGluZGV4IHNpemVzIHNldCB0b1xuIGZpeGVkIGNvZGUgZGVjb2RpbmcuICBOb3JtYWxseSB0aGlzIHJldHVybnMgZml4ZWQgdGFibGVzIGZyb20gaW5mZml4ZWQuaC5cbiBJZiBCVUlMREZJWEVEIGlzIGRlZmluZWQsIHRoZW4gaW5zdGVhZCB0aGlzIHJvdXRpbmUgYnVpbGRzIHRoZSB0YWJsZXMgdGhlXG4gZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHJldHVybnMgdGhvc2UgdGFibGVzIHRoZSBmaXJzdCB0aW1lIGFuZFxuIHRoZXJlYWZ0ZXIuICBUaGlzIHJlZHVjZXMgdGhlIHNpemUgb2YgdGhlIGNvZGUgYnkgYWJvdXQgMksgYnl0ZXMsIGluXG4gZXhjaGFuZ2UgZm9yIGEgbGl0dGxlIGV4ZWN1dGlvbiB0aW1lLiAgSG93ZXZlciwgQlVJTERGSVhFRCBzaG91bGQgbm90IGJlXG4gdXNlZCBmb3IgdGhyZWFkZWQgYXBwbGljYXRpb25zLCBzaW5jZSB0aGUgcmV3cml0aW5nIG9mIHRoZSB0YWJsZXMgYW5kIHZpcmdpblxuIG1heSBub3QgYmUgdGhyZWFkLXNhZmUuXG4gKi9cbmxldCB2aXJnaW4gPSB0cnVlO1xuXG5sZXQgbGVuZml4LCBkaXN0Zml4OyAvLyBXZSBoYXZlIG5vIHBvaW50ZXJzIGluIEpTLCBzbyBrZWVwIHRhYmxlcyBzZXBhcmF0ZVxuXG5cbmNvbnN0IGZpeGVkdGFibGVzID0gKHN0YXRlKSA9PiB7XG5cbiAgLyogYnVpbGQgZml4ZWQgaHVmZm1hbiB0YWJsZXMgaWYgZmlyc3QgY2FsbCAobWF5IG5vdCBiZSB0aHJlYWQgc2FmZSkgKi9cbiAgaWYgKHZpcmdpbikge1xuICAgIGxlbmZpeCA9IG5ldyBJbnQzMkFycmF5KDUxMik7XG4gICAgZGlzdGZpeCA9IG5ldyBJbnQzMkFycmF5KDMyKTtcblxuICAgIC8qIGxpdGVyYWwvbGVuZ3RoIHRhYmxlICovXG4gICAgbGV0IHN5bSA9IDA7XG4gICAgd2hpbGUgKHN5bSA8IDE0NCkgeyBzdGF0ZS5sZW5zW3N5bSsrXSA9IDg7IH1cbiAgICB3aGlsZSAoc3ltIDwgMjU2KSB7IHN0YXRlLmxlbnNbc3ltKytdID0gOTsgfVxuICAgIHdoaWxlIChzeW0gPCAyODApIHsgc3RhdGUubGVuc1tzeW0rK10gPSA3OyB9XG4gICAgd2hpbGUgKHN5bSA8IDI4OCkgeyBzdGF0ZS5sZW5zW3N5bSsrXSA9IDg7IH1cblxuICAgIGluZmxhdGVfdGFibGUoTEVOUywgIHN0YXRlLmxlbnMsIDAsIDI4OCwgbGVuZml4LCAgIDAsIHN0YXRlLndvcmssIHsgYml0czogOSB9KTtcblxuICAgIC8qIGRpc3RhbmNlIHRhYmxlICovXG4gICAgc3ltID0gMDtcbiAgICB3aGlsZSAoc3ltIDwgMzIpIHsgc3RhdGUubGVuc1tzeW0rK10gPSA1OyB9XG5cbiAgICBpbmZsYXRlX3RhYmxlKERJU1RTLCBzdGF0ZS5sZW5zLCAwLCAzMiwgICBkaXN0Zml4LCAwLCBzdGF0ZS53b3JrLCB7IGJpdHM6IDUgfSk7XG5cbiAgICAvKiBkbyB0aGlzIGp1c3Qgb25jZSAqL1xuICAgIHZpcmdpbiA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGUubGVuY29kZSA9IGxlbmZpeDtcbiAgc3RhdGUubGVuYml0cyA9IDk7XG4gIHN0YXRlLmRpc3Rjb2RlID0gZGlzdGZpeDtcbiAgc3RhdGUuZGlzdGJpdHMgPSA1O1xufTtcblxuXG4vKlxuIFVwZGF0ZSB0aGUgd2luZG93IHdpdGggdGhlIGxhc3Qgd3NpemUgKG5vcm1hbGx5IDMySykgYnl0ZXMgd3JpdHRlbiBiZWZvcmVcbiByZXR1cm5pbmcuICBJZiB3aW5kb3cgZG9lcyBub3QgZXhpc3QgeWV0LCBjcmVhdGUgaXQuICBUaGlzIGlzIG9ubHkgY2FsbGVkXG4gd2hlbiBhIHdpbmRvdyBpcyBhbHJlYWR5IGluIHVzZSwgb3Igd2hlbiBvdXRwdXQgaGFzIGJlZW4gd3JpdHRlbiBkdXJpbmcgdGhpc1xuIGluZmxhdGUgY2FsbCwgYnV0IHRoZSBlbmQgb2YgdGhlIGRlZmxhdGUgc3RyZWFtIGhhcyBub3QgYmVlbiByZWFjaGVkIHlldC5cbiBJdCBpcyBhbHNvIGNhbGxlZCB0byBjcmVhdGUgYSB3aW5kb3cgZm9yIGRpY3Rpb25hcnkgZGF0YSB3aGVuIGEgZGljdGlvbmFyeVxuIGlzIGxvYWRlZC5cblxuIFByb3ZpZGluZyBvdXRwdXQgYnVmZmVycyBsYXJnZXIgdGhhbiAzMksgdG8gaW5mbGF0ZSgpIHNob3VsZCBwcm92aWRlIGEgc3BlZWRcbiBhZHZhbnRhZ2UsIHNpbmNlIG9ubHkgdGhlIGxhc3QgMzJLIG9mIG91dHB1dCBpcyBjb3BpZWQgdG8gdGhlIHNsaWRpbmcgd2luZG93XG4gdXBvbiByZXR1cm4gZnJvbSBpbmZsYXRlKCksIGFuZCBzaW5jZSBhbGwgZGlzdGFuY2VzIGFmdGVyIHRoZSBmaXJzdCAzMksgb2ZcbiBvdXRwdXQgd2lsbCBmYWxsIGluIHRoZSBvdXRwdXQgZGF0YSwgbWFraW5nIG1hdGNoIGNvcGllcyBzaW1wbGVyIGFuZCBmYXN0ZXIuXG4gVGhlIGFkdmFudGFnZSBtYXkgYmUgZGVwZW5kZW50IG9uIHRoZSBzaXplIG9mIHRoZSBwcm9jZXNzb3IncyBkYXRhIGNhY2hlcy5cbiAqL1xuY29uc3QgdXBkYXRld2luZG93ID0gKHN0cm0sIHNyYywgZW5kLCBjb3B5KSA9PiB7XG5cbiAgbGV0IGRpc3Q7XG4gIGNvbnN0IHN0YXRlID0gc3RybS5zdGF0ZTtcblxuICAvKiBpZiBpdCBoYXNuJ3QgYmVlbiBkb25lIGFscmVhZHksIGFsbG9jYXRlIHNwYWNlIGZvciB0aGUgd2luZG93ICovXG4gIGlmIChzdGF0ZS53aW5kb3cgPT09IG51bGwpIHtcbiAgICBzdGF0ZS53c2l6ZSA9IDEgPDwgc3RhdGUud2JpdHM7XG4gICAgc3RhdGUud25leHQgPSAwO1xuICAgIHN0YXRlLndoYXZlID0gMDtcblxuICAgIHN0YXRlLndpbmRvdyA9IG5ldyBVaW50OEFycmF5KHN0YXRlLndzaXplKTtcbiAgfVxuXG4gIC8qIGNvcHkgc3RhdGUtPndzaXplIG9yIGxlc3Mgb3V0cHV0IGJ5dGVzIGludG8gdGhlIGNpcmN1bGFyIHdpbmRvdyAqL1xuICBpZiAoY29weSA+PSBzdGF0ZS53c2l6ZSkge1xuICAgIHN0YXRlLndpbmRvdy5zZXQoc3JjLnN1YmFycmF5KGVuZCAtIHN0YXRlLndzaXplLCBlbmQpLCAwKTtcbiAgICBzdGF0ZS53bmV4dCA9IDA7XG4gICAgc3RhdGUud2hhdmUgPSBzdGF0ZS53c2l6ZTtcbiAgfVxuICBlbHNlIHtcbiAgICBkaXN0ID0gc3RhdGUud3NpemUgLSBzdGF0ZS53bmV4dDtcbiAgICBpZiAoZGlzdCA+IGNvcHkpIHtcbiAgICAgIGRpc3QgPSBjb3B5O1xuICAgIH1cbiAgICAvL3ptZW1jcHkoc3RhdGUtPndpbmRvdyArIHN0YXRlLT53bmV4dCwgZW5kIC0gY29weSwgZGlzdCk7XG4gICAgc3RhdGUud2luZG93LnNldChzcmMuc3ViYXJyYXkoZW5kIC0gY29weSwgZW5kIC0gY29weSArIGRpc3QpLCBzdGF0ZS53bmV4dCk7XG4gICAgY29weSAtPSBkaXN0O1xuICAgIGlmIChjb3B5KSB7XG4gICAgICAvL3ptZW1jcHkoc3RhdGUtPndpbmRvdywgZW5kIC0gY29weSwgY29weSk7XG4gICAgICBzdGF0ZS53aW5kb3cuc2V0KHNyYy5zdWJhcnJheShlbmQgLSBjb3B5LCBlbmQpLCAwKTtcbiAgICAgIHN0YXRlLnduZXh0ID0gY29weTtcbiAgICAgIHN0YXRlLndoYXZlID0gc3RhdGUud3NpemU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3RhdGUud25leHQgKz0gZGlzdDtcbiAgICAgIGlmIChzdGF0ZS53bmV4dCA9PT0gc3RhdGUud3NpemUpIHsgc3RhdGUud25leHQgPSAwOyB9XG4gICAgICBpZiAoc3RhdGUud2hhdmUgPCBzdGF0ZS53c2l6ZSkgeyBzdGF0ZS53aGF2ZSArPSBkaXN0OyB9XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufTtcblxuXG5jb25zdCBpbmZsYXRlID0gKHN0cm0sIGZsdXNoKSA9PiB7XG5cbiAgbGV0IHN0YXRlO1xuICBsZXQgaW5wdXQsIG91dHB1dDsgICAgICAgICAgLy8gaW5wdXQvb3V0cHV0IGJ1ZmZlcnNcbiAgbGV0IG5leHQ7ICAgICAgICAgICAgICAgICAgIC8qIG5leHQgaW5wdXQgSU5ERVggKi9cbiAgbGV0IHB1dDsgICAgICAgICAgICAgICAgICAgIC8qIG5leHQgb3V0cHV0IElOREVYICovXG4gIGxldCBoYXZlLCBsZWZ0OyAgICAgICAgICAgICAvKiBhdmFpbGFibGUgaW5wdXQgYW5kIG91dHB1dCAqL1xuICBsZXQgaG9sZDsgICAgICAgICAgICAgICAgICAgLyogYml0IGJ1ZmZlciAqL1xuICBsZXQgYml0czsgICAgICAgICAgICAgICAgICAgLyogYml0cyBpbiBiaXQgYnVmZmVyICovXG4gIGxldCBfaW4sIF9vdXQ7ICAgICAgICAgICAgICAvKiBzYXZlIHN0YXJ0aW5nIGF2YWlsYWJsZSBpbnB1dCBhbmQgb3V0cHV0ICovXG4gIGxldCBjb3B5OyAgICAgICAgICAgICAgICAgICAvKiBudW1iZXIgb2Ygc3RvcmVkIG9yIG1hdGNoIGJ5dGVzIHRvIGNvcHkgKi9cbiAgbGV0IGZyb207ICAgICAgICAgICAgICAgICAgIC8qIHdoZXJlIHRvIGNvcHkgbWF0Y2ggYnl0ZXMgZnJvbSAqL1xuICBsZXQgZnJvbV9zb3VyY2U7XG4gIGxldCBoZXJlID0gMDsgICAgICAgICAgICAgICAvKiBjdXJyZW50IGRlY29kaW5nIHRhYmxlIGVudHJ5ICovXG4gIGxldCBoZXJlX2JpdHMsIGhlcmVfb3AsIGhlcmVfdmFsOyAvLyBwYWtlZCBcImhlcmVcIiBkZW5vcm1hbGl6ZWQgKEpTIHNwZWNpZmljKVxuICAvL2xldCBsYXN0OyAgICAgICAgICAgICAgICAgICAvKiBwYXJlbnQgdGFibGUgZW50cnkgKi9cbiAgbGV0IGxhc3RfYml0cywgbGFzdF9vcCwgbGFzdF92YWw7IC8vIHBha2VkIFwibGFzdFwiIGRlbm9ybWFsaXplZCAoSlMgc3BlY2lmaWMpXG4gIGxldCBsZW47ICAgICAgICAgICAgICAgICAgICAvKiBsZW5ndGggdG8gY29weSBmb3IgcmVwZWF0cywgYml0cyB0byBkcm9wICovXG4gIGxldCByZXQ7ICAgICAgICAgICAgICAgICAgICAvKiByZXR1cm4gY29kZSAqL1xuICBjb25zdCBoYnVmID0gbmV3IFVpbnQ4QXJyYXkoNCk7ICAgIC8qIGJ1ZmZlciBmb3IgZ3ppcCBoZWFkZXIgY3JjIGNhbGN1bGF0aW9uICovXG4gIGxldCBvcHRzO1xuXG4gIGxldCBuOyAvLyB0ZW1wb3JhcnkgdmFyaWFibGUgZm9yIE5FRURfQklUU1xuXG4gIGNvbnN0IG9yZGVyID0gLyogcGVybXV0YXRpb24gb2YgY29kZSBsZW5ndGhzICovXG4gICAgbmV3IFVpbnQ4QXJyYXkoWyAxNiwgMTcsIDE4LCAwLCA4LCA3LCA5LCA2LCAxMCwgNSwgMTEsIDQsIDEyLCAzLCAxMywgMiwgMTQsIDEsIDE1IF0pO1xuXG5cbiAgaWYgKGluZmxhdGVTdGF0ZUNoZWNrKHN0cm0pIHx8ICFzdHJtLm91dHB1dCB8fFxuICAgICAgKCFzdHJtLmlucHV0ICYmIHN0cm0uYXZhaWxfaW4gIT09IDApKSB7XG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICB9XG5cbiAgc3RhdGUgPSBzdHJtLnN0YXRlO1xuICBpZiAoc3RhdGUubW9kZSA9PT0gVFlQRSkgeyBzdGF0ZS5tb2RlID0gVFlQRURPOyB9ICAgIC8qIHNraXAgY2hlY2sgKi9cblxuXG4gIC8vLS0tIExPQUQoKSAtLS1cbiAgcHV0ID0gc3RybS5uZXh0X291dDtcbiAgb3V0cHV0ID0gc3RybS5vdXRwdXQ7XG4gIGxlZnQgPSBzdHJtLmF2YWlsX291dDtcbiAgbmV4dCA9IHN0cm0ubmV4dF9pbjtcbiAgaW5wdXQgPSBzdHJtLmlucHV0O1xuICBoYXZlID0gc3RybS5hdmFpbF9pbjtcbiAgaG9sZCA9IHN0YXRlLmhvbGQ7XG4gIGJpdHMgPSBzdGF0ZS5iaXRzO1xuICAvLy0tLVxuXG4gIF9pbiA9IGhhdmU7XG4gIF9vdXQgPSBsZWZ0O1xuICByZXQgPSBaX09LO1xuXG4gIGluZl9sZWF2ZTogLy8gZ290byBlbXVsYXRpb25cbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoc3RhdGUubW9kZSkge1xuICAgICAgY2FzZSBIRUFEOlxuICAgICAgICBpZiAoc3RhdGUud3JhcCA9PT0gMCkge1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFRE87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0gTkVFREJJVFMoMTYpO1xuICAgICAgICB3aGlsZSAoYml0cyA8IDE2KSB7XG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgfVxuICAgICAgICAvLz09PS8vXG4gICAgICAgIGlmICgoc3RhdGUud3JhcCAmIDIpICYmIGhvbGQgPT09IDB4OGIxZikgeyAgLyogZ3ppcCBoZWFkZXIgKi9cbiAgICAgICAgICBpZiAoc3RhdGUud2JpdHMgPT09IDApIHtcbiAgICAgICAgICAgIHN0YXRlLndiaXRzID0gMTU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlLmNoZWNrID0gMC8qY3JjMzIoMEwsIFpfTlVMTCwgMCkqLztcbiAgICAgICAgICAvLz09PSBDUkMyKHN0YXRlLmNoZWNrLCBob2xkKTtcbiAgICAgICAgICBoYnVmWzBdID0gaG9sZCAmIDB4ZmY7XG4gICAgICAgICAgaGJ1ZlsxXSA9IChob2xkID4+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMihzdGF0ZS5jaGVjaywgaGJ1ZiwgMiwgMCk7XG4gICAgICAgICAgLy89PT0vL1xuXG4gICAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgICBob2xkID0gMDtcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgc3RhdGUubW9kZSA9IEZMQUdTO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoc3RhdGUud3JhcCAmIDEpIHx8ICAgLyogY2hlY2sgaWYgemxpYiBoZWFkZXIgYWxsb3dlZCAqL1xuICAgICAgICAgICgoKGhvbGQgJiAweGZmKS8qQklUUyg4KSovIDw8IDgpICsgKGhvbGQgPj4gOCkpICUgMzEpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgaGVhZGVyIGNoZWNrJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoaG9sZCAmIDB4MGYpLypCSVRTKDQpKi8gIT09IFpfREVGTEFURUQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICd1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZCc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLy0tLSBEUk9QQklUUyg0KSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gNDtcbiAgICAgICAgYml0cyAtPSA0O1xuICAgICAgICAvLy0tLS8vXG4gICAgICAgIGxlbiA9IChob2xkICYgMHgwZikvKkJJVFMoNCkqLyArIDg7XG4gICAgICAgIGlmIChzdGF0ZS53Yml0cyA9PT0gMCkge1xuICAgICAgICAgIHN0YXRlLndiaXRzID0gbGVuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZW4gPiAxNSB8fCBsZW4gPiBzdGF0ZS53Yml0cykge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgd2luZG93IHNpemUnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAhISEgcGFrbyBwYXRjaC4gRm9yY2UgdXNlIGBvcHRpb25zLndpbmRvd0JpdHNgIGlmIHBhc3NlZC5cbiAgICAgICAgLy8gUmVxdWlyZWQgdG8gYWx3YXlzIHVzZSBtYXggd2luZG93IHNpemUgYnkgZGVmYXVsdC5cbiAgICAgICAgc3RhdGUuZG1heCA9IDEgPDwgc3RhdGUud2JpdHM7XG4gICAgICAgIC8vc3RhdGUuZG1heCA9IDEgPDwgbGVuO1xuXG4gICAgICAgIHN0YXRlLmZsYWdzID0gMDsgICAgICAgICAgICAgICAvKiBpbmRpY2F0ZSB6bGliIGhlYWRlciAqL1xuICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgemxpYiBoZWFkZXIgb2tcXG5cIikpO1xuICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSAxLyphZGxlcjMyKDBMLCBaX05VTEwsIDApKi87XG4gICAgICAgIHN0YXRlLm1vZGUgPSBob2xkICYgMHgyMDAgPyBESUNUSUQgOiBUWVBFO1xuICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICBob2xkID0gMDtcbiAgICAgICAgYml0cyA9IDA7XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZMQUdTOlxuICAgICAgICAvLz09PSBORUVEQklUUygxNik7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMTYpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUuZmxhZ3MgPSBob2xkO1xuICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHhmZikgIT09IFpfREVGTEFURUQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICd1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZCc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweGUwMDApIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICd1bmtub3duIGhlYWRlciBmbGFncyBzZXQnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLnRleHQgPSAoKGhvbGQgPj4gOCkgJiAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHgwMjAwKSAmJiAoc3RhdGUud3JhcCAmIDQpKSB7XG4gICAgICAgICAgLy89PT0gQ1JDMihzdGF0ZS5jaGVjaywgaG9sZCk7XG4gICAgICAgICAgaGJ1ZlswXSA9IGhvbGQgJiAweGZmO1xuICAgICAgICAgIGhidWZbMV0gPSAoaG9sZCA+Pj4gOCkgJiAweGZmO1xuICAgICAgICAgIHN0YXRlLmNoZWNrID0gY3JjMzIoc3RhdGUuY2hlY2ssIGhidWYsIDIsIDApO1xuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgfVxuICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICBob2xkID0gMDtcbiAgICAgICAgYml0cyA9IDA7XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUubW9kZSA9IFRJTUU7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgVElNRTpcbiAgICAgICAgLy89PT0gTkVFREJJVFMoMzIpOyAqL1xuICAgICAgICB3aGlsZSAoYml0cyA8IDMyKSB7XG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgfVxuICAgICAgICAvLz09PS8vXG4gICAgICAgIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC50aW1lID0gaG9sZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHgwMjAwKSAmJiAoc3RhdGUud3JhcCAmIDQpKSB7XG4gICAgICAgICAgLy89PT0gQ1JDNChzdGF0ZS5jaGVjaywgaG9sZClcbiAgICAgICAgICBoYnVmWzBdID0gaG9sZCAmIDB4ZmY7XG4gICAgICAgICAgaGJ1ZlsxXSA9IChob2xkID4+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgaGJ1ZlsyXSA9IChob2xkID4+PiAxNikgJiAweGZmO1xuICAgICAgICAgIGhidWZbM10gPSAoaG9sZCA+Pj4gMjQpICYgMHhmZjtcbiAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBoYnVmLCA0LCAwKTtcbiAgICAgICAgICAvLz09PVxuICAgICAgICB9XG4gICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgIGhvbGQgPSAwO1xuICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5tb2RlID0gT1M7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgT1M6XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDE2KTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAxNikge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBpZiAoc3RhdGUuaGVhZCkge1xuICAgICAgICAgIHN0YXRlLmhlYWQueGZsYWdzID0gKGhvbGQgJiAweGZmKTtcbiAgICAgICAgICBzdGF0ZS5oZWFkLm9zID0gKGhvbGQgPj4gOCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzdGF0ZS5mbGFncyAmIDB4MDIwMCkgJiYgKHN0YXRlLndyYXAgJiA0KSkge1xuICAgICAgICAgIC8vPT09IENSQzIoc3RhdGUuY2hlY2ssIGhvbGQpO1xuICAgICAgICAgIGhidWZbMF0gPSBob2xkICYgMHhmZjtcbiAgICAgICAgICBoYnVmWzFdID0gKGhvbGQgPj4+IDgpICYgMHhmZjtcbiAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBoYnVmLCAyLCAwKTtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgIH1cbiAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAvLz09PS8vXG4gICAgICAgIHN0YXRlLm1vZGUgPSBFWExFTjtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBFWExFTjpcbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwNDAwKSB7XG4gICAgICAgICAgLy89PT0gTkVFREJJVFMoMTYpOyAqL1xuICAgICAgICAgIHdoaWxlIChiaXRzIDwgMTYpIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBzdGF0ZS5sZW5ndGggPSBob2xkO1xuICAgICAgICAgIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgICBzdGF0ZS5oZWFkLmV4dHJhX2xlbiA9IGhvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoc3RhdGUuZmxhZ3MgJiAweDAyMDApICYmIChzdGF0ZS53cmFwICYgNCkpIHtcbiAgICAgICAgICAgIC8vPT09IENSQzIoc3RhdGUuY2hlY2ssIGhvbGQpO1xuICAgICAgICAgICAgaGJ1ZlswXSA9IGhvbGQgJiAweGZmO1xuICAgICAgICAgICAgaGJ1ZlsxXSA9IChob2xkID4+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBoYnVmLCAyLCAwKTtcbiAgICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgICBob2xkID0gMDtcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUuaGVhZCkge1xuICAgICAgICAgIHN0YXRlLmhlYWQuZXh0cmEgPSBudWxsLypaX05VTEwqLztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5tb2RlID0gRVhUUkE7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgRVhUUkE6XG4gICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDQwMCkge1xuICAgICAgICAgIGNvcHkgPSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgICAgaWYgKGNvcHkgPiBoYXZlKSB7IGNvcHkgPSBoYXZlOyB9XG4gICAgICAgICAgaWYgKGNvcHkpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgICAgIGxlbiA9IHN0YXRlLmhlYWQuZXh0cmFfbGVuIC0gc3RhdGUubGVuZ3RoO1xuICAgICAgICAgICAgICBpZiAoIXN0YXRlLmhlYWQuZXh0cmEpIHtcbiAgICAgICAgICAgICAgICAvLyBVc2UgdW50eXBlZCBhcnJheSBmb3IgbW9yZSBjb252ZW5pZW50IHByb2Nlc3NpbmcgbGF0ZXJcbiAgICAgICAgICAgICAgICBzdGF0ZS5oZWFkLmV4dHJhID0gbmV3IFVpbnQ4QXJyYXkoc3RhdGUuaGVhZC5leHRyYV9sZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN0YXRlLmhlYWQuZXh0cmEuc2V0KFxuICAgICAgICAgICAgICAgIGlucHV0LnN1YmFycmF5KFxuICAgICAgICAgICAgICAgICAgbmV4dCxcbiAgICAgICAgICAgICAgICAgIC8vIGV4dHJhIGZpZWxkIGlzIGxpbWl0ZWQgdG8gNjU1MzYgYnl0ZXNcbiAgICAgICAgICAgICAgICAgIC8vIC0gbm8gbmVlZCBmb3IgYWRkaXRpb25hbCBzaXplIGNoZWNrXG4gICAgICAgICAgICAgICAgICBuZXh0ICsgY29weVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgLypsZW4gKyBjb3B5ID4gc3RhdGUuaGVhZC5leHRyYV9tYXggLSBsZW4gPyBzdGF0ZS5oZWFkLmV4dHJhX21heCA6IGNvcHksKi9cbiAgICAgICAgICAgICAgICBsZW5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgLy96bWVtY3B5KHN0YXRlLmhlYWQuZXh0cmEgKyBsZW4sIG5leHQsXG4gICAgICAgICAgICAgIC8vICAgICAgICBsZW4gKyBjb3B5ID4gc3RhdGUuaGVhZC5leHRyYV9tYXggP1xuICAgICAgICAgICAgICAvLyAgICAgICAgc3RhdGUuaGVhZC5leHRyYV9tYXggLSBsZW4gOiBjb3B5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoc3RhdGUuZmxhZ3MgJiAweDAyMDApICYmIChzdGF0ZS53cmFwICYgNCkpIHtcbiAgICAgICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMihzdGF0ZS5jaGVjaywgaW5wdXQsIGNvcHksIG5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGF2ZSAtPSBjb3B5O1xuICAgICAgICAgICAgbmV4dCArPSBjb3B5O1xuICAgICAgICAgICAgc3RhdGUubGVuZ3RoIC09IGNvcHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGF0ZS5sZW5ndGgpIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUubGVuZ3RoID0gMDtcbiAgICAgICAgc3RhdGUubW9kZSA9IE5BTUU7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgTkFNRTpcbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwODAwKSB7XG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgY29weSA9IDA7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgLy8gVE9ETzogMiBvciAxIGJ5dGVzP1xuICAgICAgICAgICAgbGVuID0gaW5wdXRbbmV4dCArIGNvcHkrK107XG4gICAgICAgICAgICAvKiB1c2UgY29uc3RhbnQgbGltaXQgYmVjYXVzZSBpbiBqcyB3ZSBzaG91bGQgbm90IHByZWFsbG9jYXRlIG1lbW9yeSAqL1xuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgJiYgbGVuICYmXG4gICAgICAgICAgICAgICAgKHN0YXRlLmxlbmd0aCA8IDY1NTM2IC8qc3RhdGUuaGVhZC5uYW1lX21heCovKSkge1xuICAgICAgICAgICAgICBzdGF0ZS5oZWFkLm5hbWUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShsZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gd2hpbGUgKGxlbiAmJiBjb3B5IDwgaGF2ZSk7XG5cbiAgICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHgwMjAwKSAmJiAoc3RhdGUud3JhcCAmIDQpKSB7XG4gICAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBpbnB1dCwgY29weSwgbmV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhhdmUgLT0gY29weTtcbiAgICAgICAgICBuZXh0ICs9IGNvcHk7XG4gICAgICAgICAgaWYgKGxlbikgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5uYW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5sZW5ndGggPSAwO1xuICAgICAgICBzdGF0ZS5tb2RlID0gQ09NTUVOVDtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBDT01NRU5UOlxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDEwMDApIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBjb3B5ID0gMDtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZW4gPSBpbnB1dFtuZXh0ICsgY29weSsrXTtcbiAgICAgICAgICAgIC8qIHVzZSBjb25zdGFudCBsaW1pdCBiZWNhdXNlIGluIGpzIHdlIHNob3VsZCBub3QgcHJlYWxsb2NhdGUgbWVtb3J5ICovXG4gICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAmJiBsZW4gJiZcbiAgICAgICAgICAgICAgICAoc3RhdGUubGVuZ3RoIDwgNjU1MzYgLypzdGF0ZS5oZWFkLmNvbW1fbWF4Ki8pKSB7XG4gICAgICAgICAgICAgIHN0YXRlLmhlYWQuY29tbWVudCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB3aGlsZSAobGVuICYmIGNvcHkgPCBoYXZlKTtcbiAgICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHgwMjAwKSAmJiAoc3RhdGUud3JhcCAmIDQpKSB7XG4gICAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBpbnB1dCwgY29weSwgbmV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhhdmUgLT0gY29weTtcbiAgICAgICAgICBuZXh0ICs9IGNvcHk7XG4gICAgICAgICAgaWYgKGxlbikgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5jb21tZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5tb2RlID0gSENSQztcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBIQ1JDOlxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDAyMDApIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUygxNik7ICovXG4gICAgICAgICAgd2hpbGUgKGJpdHMgPCAxNikge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIGlmICgoc3RhdGUud3JhcCAmIDQpICYmIGhvbGQgIT09IChzdGF0ZS5jaGVjayAmIDB4ZmZmZikpIHtcbiAgICAgICAgICAgIHN0cm0ubXNnID0gJ2hlYWRlciBjcmMgbWlzbWF0Y2gnO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICAgIGhvbGQgPSAwO1xuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuaGVhZCkge1xuICAgICAgICAgIHN0YXRlLmhlYWQuaGNyYyA9ICgoc3RhdGUuZmxhZ3MgPj4gOSkgJiAxKTtcbiAgICAgICAgICBzdGF0ZS5oZWFkLmRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHN0cm0uYWRsZXIgPSBzdGF0ZS5jaGVjayA9IDA7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRElDVElEOlxuICAgICAgICAvLz09PSBORUVEQklUUygzMik7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMzIpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID0genN3YXAzMihob2xkKTtcbiAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAvLz09PS8vXG4gICAgICAgIHN0YXRlLm1vZGUgPSBESUNUO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIERJQ1Q6XG4gICAgICAgIGlmIChzdGF0ZS5oYXZlZGljdCA9PT0gMCkge1xuICAgICAgICAgIC8vLS0tIFJFU1RPUkUoKSAtLS1cbiAgICAgICAgICBzdHJtLm5leHRfb3V0ID0gcHV0O1xuICAgICAgICAgIHN0cm0uYXZhaWxfb3V0ID0gbGVmdDtcbiAgICAgICAgICBzdHJtLm5leHRfaW4gPSBuZXh0O1xuICAgICAgICAgIHN0cm0uYXZhaWxfaW4gPSBoYXZlO1xuICAgICAgICAgIHN0YXRlLmhvbGQgPSBob2xkO1xuICAgICAgICAgIHN0YXRlLmJpdHMgPSBiaXRzO1xuICAgICAgICAgIC8vLS0tXG4gICAgICAgICAgcmV0dXJuIFpfTkVFRF9ESUNUO1xuICAgICAgICB9XG4gICAgICAgIHN0cm0uYWRsZXIgPSBzdGF0ZS5jaGVjayA9IDEvKmFkbGVyMzIoMEwsIFpfTlVMTCwgMCkqLztcbiAgICAgICAgc3RhdGUubW9kZSA9IFRZUEU7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgVFlQRTpcbiAgICAgICAgaWYgKGZsdXNoID09PSBaX0JMT0NLIHx8IGZsdXNoID09PSBaX1RSRUVTKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIFRZUEVETzpcbiAgICAgICAgaWYgKHN0YXRlLmxhc3QpIHtcbiAgICAgICAgICAvLy0tLSBCWVRFQklUUygpIC0tLS8vXG4gICAgICAgICAgaG9sZCA+Pj49IGJpdHMgJiA3O1xuICAgICAgICAgIGJpdHMgLT0gYml0cyAmIDc7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBDSEVDSztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLz09PSBORUVEQklUUygzKTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAzKSB7XG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgfVxuICAgICAgICAvLz09PS8vXG4gICAgICAgIHN0YXRlLmxhc3QgPSAoaG9sZCAmIDB4MDEpLypCSVRTKDEpKi87XG4gICAgICAgIC8vLS0tIERST1BCSVRTKDEpIC0tLS8vXG4gICAgICAgIGhvbGQgPj4+PSAxO1xuICAgICAgICBiaXRzIC09IDE7XG4gICAgICAgIC8vLS0tLy9cblxuICAgICAgICBzd2l0Y2ggKChob2xkICYgMHgwMykvKkJJVFMoMikqLykge1xuICAgICAgICAgIGNhc2UgMDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHN0b3JlZCBibG9jayAqL1xuICAgICAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgc3RvcmVkIGJsb2NrJXNcXG5cIixcbiAgICAgICAgICAgIC8vICAgICAgICBzdGF0ZS5sYXN0ID8gXCIgKGxhc3QpXCIgOiBcIlwiKSk7XG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gU1RPUkVEO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZml4ZWQgYmxvY2sgKi9cbiAgICAgICAgICAgIGZpeGVkdGFibGVzKHN0YXRlKTtcbiAgICAgICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgIGZpeGVkIGNvZGVzIGJsb2NrJXNcXG5cIixcbiAgICAgICAgICAgIC8vICAgICAgICBzdGF0ZS5sYXN0ID8gXCIgKGxhc3QpXCIgOiBcIlwiKSk7XG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gTEVOXzsgICAgICAgICAgICAgLyogZGVjb2RlIGNvZGVzICovXG4gICAgICAgICAgICBpZiAoZmx1c2ggPT09IFpfVFJFRVMpIHtcbiAgICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoMikgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IDI7XG4gICAgICAgICAgICAgIGJpdHMgLT0gMjtcbiAgICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgICBicmVhayBpbmZfbGVhdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBkeW5hbWljIGJsb2NrICovXG4gICAgICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICBkeW5hbWljIGNvZGVzIGJsb2NrJXNcXG5cIixcbiAgICAgICAgICAgIC8vICAgICAgICBzdGF0ZS5sYXN0ID8gXCIgKGxhc3QpXCIgOiBcIlwiKSk7XG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gVEFCTEU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGJsb2NrIHR5cGUnO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgfVxuICAgICAgICAvLy0tLSBEUk9QQklUUygyKSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gMjtcbiAgICAgICAgYml0cyAtPSAyO1xuICAgICAgICAvLy0tLS8vXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTVE9SRUQ6XG4gICAgICAgIC8vLS0tIEJZVEVCSVRTKCkgLS0tLy8gLyogZ28gdG8gYnl0ZSBib3VuZGFyeSAqL1xuICAgICAgICBob2xkID4+Pj0gYml0cyAmIDc7XG4gICAgICAgIGJpdHMgLT0gYml0cyAmIDc7XG4gICAgICAgIC8vLS0tLy9cbiAgICAgICAgLy89PT0gTkVFREJJVFMoMzIpOyAqL1xuICAgICAgICB3aGlsZSAoYml0cyA8IDMyKSB7XG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgfVxuICAgICAgICAvLz09PS8vXG4gICAgICAgIGlmICgoaG9sZCAmIDB4ZmZmZikgIT09ICgoaG9sZCA+Pj4gMTYpIF4gMHhmZmZmKSkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgc3RvcmVkIGJsb2NrIGxlbmd0aHMnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUubGVuZ3RoID0gaG9sZCAmIDB4ZmZmZjtcbiAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICBzdG9yZWQgbGVuZ3RoICV1XFxuXCIsXG4gICAgICAgIC8vICAgICAgICBzdGF0ZS5sZW5ndGgpKTtcbiAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAvLz09PS8vXG4gICAgICAgIHN0YXRlLm1vZGUgPSBDT1BZXztcbiAgICAgICAgaWYgKGZsdXNoID09PSBaX1RSRUVTKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIENPUFlfOlxuICAgICAgICBzdGF0ZS5tb2RlID0gQ09QWTtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBDT1BZOlxuICAgICAgICBjb3B5ID0gc3RhdGUubGVuZ3RoO1xuICAgICAgICBpZiAoY29weSkge1xuICAgICAgICAgIGlmIChjb3B5ID4gaGF2ZSkgeyBjb3B5ID0gaGF2ZTsgfVxuICAgICAgICAgIGlmIChjb3B5ID4gbGVmdCkgeyBjb3B5ID0gbGVmdDsgfVxuICAgICAgICAgIGlmIChjb3B5ID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIC8vLS0tIHptZW1jcHkocHV0LCBuZXh0LCBjb3B5KTsgLS0tXG4gICAgICAgICAgb3V0cHV0LnNldChpbnB1dC5zdWJhcnJheShuZXh0LCBuZXh0ICsgY29weSksIHB1dCk7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIGhhdmUgLT0gY29weTtcbiAgICAgICAgICBuZXh0ICs9IGNvcHk7XG4gICAgICAgICAgbGVmdCAtPSBjb3B5O1xuICAgICAgICAgIHB1dCArPSBjb3B5O1xuICAgICAgICAgIHN0YXRlLmxlbmd0aCAtPSBjb3B5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgc3RvcmVkIGVuZFxcblwiKSk7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVEFCTEU6XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDE0KTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAxNCkge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5ubGVuID0gKGhvbGQgJiAweDFmKS8qQklUUyg1KSovICsgMjU3O1xuICAgICAgICAvLy0tLSBEUk9QQklUUyg1KSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gNTtcbiAgICAgICAgYml0cyAtPSA1O1xuICAgICAgICAvLy0tLS8vXG4gICAgICAgIHN0YXRlLm5kaXN0ID0gKGhvbGQgJiAweDFmKS8qQklUUyg1KSovICsgMTtcbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoNSkgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IDU7XG4gICAgICAgIGJpdHMgLT0gNTtcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICBzdGF0ZS5uY29kZSA9IChob2xkICYgMHgwZikvKkJJVFMoNCkqLyArIDQ7XG4gICAgICAgIC8vLS0tIERST1BCSVRTKDQpIC0tLS8vXG4gICAgICAgIGhvbGQgPj4+PSA0O1xuICAgICAgICBiaXRzIC09IDQ7XG4gICAgICAgIC8vLS0tLy9cbi8vI2lmbmRlZiBQS1pJUF9CVUdfV09SS0FST1VORFxuICAgICAgICBpZiAoc3RhdGUubmxlbiA+IDI4NiB8fCBzdGF0ZS5uZGlzdCA+IDMwKSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAndG9vIG1hbnkgbGVuZ3RoIG9yIGRpc3RhbmNlIHN5bWJvbHMnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbi8vI2VuZGlmXG4gICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgdGFibGUgc2l6ZXMgb2tcXG5cIikpO1xuICAgICAgICBzdGF0ZS5oYXZlID0gMDtcbiAgICAgICAgc3RhdGUubW9kZSA9IExFTkxFTlM7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgTEVOTEVOUzpcbiAgICAgICAgd2hpbGUgKHN0YXRlLmhhdmUgPCBzdGF0ZS5uY29kZSkge1xuICAgICAgICAgIC8vPT09IE5FRURCSVRTKDMpO1xuICAgICAgICAgIHdoaWxlIChiaXRzIDwgMykge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIHN0YXRlLmxlbnNbb3JkZXJbc3RhdGUuaGF2ZSsrXV0gPSAoaG9sZCAmIDB4MDcpOy8vQklUUygzKTtcbiAgICAgICAgICAvLy0tLSBEUk9QQklUUygzKSAtLS0vL1xuICAgICAgICAgIGhvbGQgPj4+PSAzO1xuICAgICAgICAgIGJpdHMgLT0gMztcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHN0YXRlLmhhdmUgPCAxOSkge1xuICAgICAgICAgIHN0YXRlLmxlbnNbb3JkZXJbc3RhdGUuaGF2ZSsrXV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgc2VwYXJhdGUgdGFibGVzICYgbm8gcG9pbnRlcnMuIDIgY29tbWVudGVkIGxpbmVzIGJlbG93IG5vdCBuZWVkZWQuXG4gICAgICAgIC8vc3RhdGUubmV4dCA9IHN0YXRlLmNvZGVzO1xuICAgICAgICAvL3N0YXRlLmxlbmNvZGUgPSBzdGF0ZS5uZXh0O1xuICAgICAgICAvLyBTd2l0Y2ggdG8gdXNlIGR5bmFtaWMgdGFibGVcbiAgICAgICAgc3RhdGUubGVuY29kZSA9IHN0YXRlLmxlbmR5bjtcbiAgICAgICAgc3RhdGUubGVuYml0cyA9IDc7XG5cbiAgICAgICAgb3B0cyA9IHsgYml0czogc3RhdGUubGVuYml0cyB9O1xuICAgICAgICByZXQgPSBpbmZsYXRlX3RhYmxlKENPREVTLCBzdGF0ZS5sZW5zLCAwLCAxOSwgc3RhdGUubGVuY29kZSwgMCwgc3RhdGUud29yaywgb3B0cyk7XG4gICAgICAgIHN0YXRlLmxlbmJpdHMgPSBvcHRzLmJpdHM7XG5cbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgY29kZSBsZW5ndGhzIHNldCc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIGNvZGUgbGVuZ3RocyBva1xcblwiKSk7XG4gICAgICAgIHN0YXRlLmhhdmUgPSAwO1xuICAgICAgICBzdGF0ZS5tb2RlID0gQ09ERUxFTlM7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgQ09ERUxFTlM6XG4gICAgICAgIHdoaWxlIChzdGF0ZS5oYXZlIDwgc3RhdGUubmxlbiArIHN0YXRlLm5kaXN0KSB7XG4gICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgaGVyZSA9IHN0YXRlLmxlbmNvZGVbaG9sZCAmICgoMSA8PCBzdGF0ZS5sZW5iaXRzKSAtIDEpXTsvKkJJVFMoc3RhdGUubGVuYml0cykqL1xuICAgICAgICAgICAgaGVyZV9iaXRzID0gaGVyZSA+Pj4gMjQ7XG4gICAgICAgICAgICBoZXJlX29wID0gKGhlcmUgPj4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBoZXJlX3ZhbCA9IGhlcmUgJiAweGZmZmY7XG5cbiAgICAgICAgICAgIGlmICgoaGVyZV9iaXRzKSA8PSBiaXRzKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICAvLy0tLSBQVUxMQllURSgpIC0tLS8vXG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGVyZV92YWwgPCAxNikge1xuICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoaGVyZS5iaXRzKSAtLS0vL1xuICAgICAgICAgICAgaG9sZCA+Pj49IGhlcmVfYml0cztcbiAgICAgICAgICAgIGJpdHMgLT0gaGVyZV9iaXRzO1xuICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgc3RhdGUubGVuc1tzdGF0ZS5oYXZlKytdID0gaGVyZV92YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhlcmVfdmFsID09PSAxNikge1xuICAgICAgICAgICAgICAvLz09PSBORUVEQklUUyhoZXJlLmJpdHMgKyAyKTtcbiAgICAgICAgICAgICAgbiA9IGhlcmVfYml0cyArIDI7XG4gICAgICAgICAgICAgIHdoaWxlIChiaXRzIDwgbikge1xuICAgICAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy89PT0vL1xuICAgICAgICAgICAgICAvLy0tLSBEUk9QQklUUyhoZXJlLmJpdHMpIC0tLS8vXG4gICAgICAgICAgICAgIGhvbGQgPj4+PSBoZXJlX2JpdHM7XG4gICAgICAgICAgICAgIGJpdHMgLT0gaGVyZV9iaXRzO1xuICAgICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5oYXZlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdCc7XG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZW4gPSBzdGF0ZS5sZW5zW3N0YXRlLmhhdmUgLSAxXTtcbiAgICAgICAgICAgICAgY29weSA9IDMgKyAoaG9sZCAmIDB4MDMpOy8vQklUUygyKTtcbiAgICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoMikgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IDI7XG4gICAgICAgICAgICAgIGJpdHMgLT0gMjtcbiAgICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGVyZV92YWwgPT09IDE3KSB7XG4gICAgICAgICAgICAgIC8vPT09IE5FRURCSVRTKGhlcmUuYml0cyArIDMpO1xuICAgICAgICAgICAgICBuID0gaGVyZV9iaXRzICsgMztcbiAgICAgICAgICAgICAgd2hpbGUgKGJpdHMgPCBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKGhlcmUuYml0cykgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IGhlcmVfYml0cztcbiAgICAgICAgICAgICAgYml0cyAtPSBoZXJlX2JpdHM7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgICAgbGVuID0gMDtcbiAgICAgICAgICAgICAgY29weSA9IDMgKyAoaG9sZCAmIDB4MDcpOy8vQklUUygzKTtcbiAgICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoMykgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IDM7XG4gICAgICAgICAgICAgIGJpdHMgLT0gMztcbiAgICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIC8vPT09IE5FRURCSVRTKGhlcmUuYml0cyArIDcpO1xuICAgICAgICAgICAgICBuID0gaGVyZV9iaXRzICsgNztcbiAgICAgICAgICAgICAgd2hpbGUgKGJpdHMgPCBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKGhlcmUuYml0cykgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IGhlcmVfYml0cztcbiAgICAgICAgICAgICAgYml0cyAtPSBoZXJlX2JpdHM7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgICAgbGVuID0gMDtcbiAgICAgICAgICAgICAgY29weSA9IDExICsgKGhvbGQgJiAweDdmKTsvL0JJVFMoNyk7XG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKDcpIC0tLS8vXG4gICAgICAgICAgICAgIGhvbGQgPj4+PSA3O1xuICAgICAgICAgICAgICBiaXRzIC09IDc7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZS5oYXZlICsgY29weSA+IHN0YXRlLm5sZW4gKyBzdGF0ZS5uZGlzdCkge1xuICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0JztcbiAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoY29weS0tKSB7XG4gICAgICAgICAgICAgIHN0YXRlLmxlbnNbc3RhdGUuaGF2ZSsrXSA9IGxlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBoYW5kbGUgZXJyb3IgYnJlYWtzIGluIHdoaWxlICovXG4gICAgICAgIGlmIChzdGF0ZS5tb2RlID09PSBCQUQpIHsgYnJlYWs7IH1cblxuICAgICAgICAvKiBjaGVjayBmb3IgZW5kLW9mLWJsb2NrIGNvZGUgKGJldHRlciBoYXZlIG9uZSkgKi9cbiAgICAgICAgaWYgKHN0YXRlLmxlbnNbMjU2XSA9PT0gMCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgY29kZSAtLSBtaXNzaW5nIGVuZC1vZi1ibG9jayc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGJ1aWxkIGNvZGUgdGFibGVzIC0tIG5vdGU6IGRvIG5vdCBjaGFuZ2UgdGhlIGxlbmJpdHMgb3IgZGlzdGJpdHNcbiAgICAgICAgICAgdmFsdWVzIGhlcmUgKDkgYW5kIDYpIHdpdGhvdXQgcmVhZGluZyB0aGUgY29tbWVudHMgaW4gaW5mdHJlZXMuaFxuICAgICAgICAgICBjb25jZXJuaW5nIHRoZSBFTk9VR0ggY29uc3RhbnRzLCB3aGljaCBkZXBlbmQgb24gdGhvc2UgdmFsdWVzICovXG4gICAgICAgIHN0YXRlLmxlbmJpdHMgPSA5O1xuXG4gICAgICAgIG9wdHMgPSB7IGJpdHM6IHN0YXRlLmxlbmJpdHMgfTtcbiAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShMRU5TLCBzdGF0ZS5sZW5zLCAwLCBzdGF0ZS5ubGVuLCBzdGF0ZS5sZW5jb2RlLCAwLCBzdGF0ZS53b3JrLCBvcHRzKTtcbiAgICAgICAgLy8gV2UgaGF2ZSBzZXBhcmF0ZSB0YWJsZXMgJiBubyBwb2ludGVycy4gMiBjb21tZW50ZWQgbGluZXMgYmVsb3cgbm90IG5lZWRlZC5cbiAgICAgICAgLy8gc3RhdGUubmV4dF9pbmRleCA9IG9wdHMudGFibGVfaW5kZXg7XG4gICAgICAgIHN0YXRlLmxlbmJpdHMgPSBvcHRzLmJpdHM7XG4gICAgICAgIC8vIHN0YXRlLmxlbmNvZGUgPSBzdGF0ZS5uZXh0O1xuXG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGxpdGVyYWwvbGVuZ3RocyBzZXQnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5kaXN0Yml0cyA9IDY7XG4gICAgICAgIC8vc3RhdGUuZGlzdGNvZGUuY29weShzdGF0ZS5jb2Rlcyk7XG4gICAgICAgIC8vIFN3aXRjaCB0byB1c2UgZHluYW1pYyB0YWJsZVxuICAgICAgICBzdGF0ZS5kaXN0Y29kZSA9IHN0YXRlLmRpc3RkeW47XG4gICAgICAgIG9wdHMgPSB7IGJpdHM6IHN0YXRlLmRpc3RiaXRzIH07XG4gICAgICAgIHJldCA9IGluZmxhdGVfdGFibGUoRElTVFMsIHN0YXRlLmxlbnMsIHN0YXRlLm5sZW4sIHN0YXRlLm5kaXN0LCBzdGF0ZS5kaXN0Y29kZSwgMCwgc3RhdGUud29yaywgb3B0cyk7XG4gICAgICAgIC8vIFdlIGhhdmUgc2VwYXJhdGUgdGFibGVzICYgbm8gcG9pbnRlcnMuIDIgY29tbWVudGVkIGxpbmVzIGJlbG93IG5vdCBuZWVkZWQuXG4gICAgICAgIC8vIHN0YXRlLm5leHRfaW5kZXggPSBvcHRzLnRhYmxlX2luZGV4O1xuICAgICAgICBzdGF0ZS5kaXN0Yml0cyA9IG9wdHMuYml0cztcbiAgICAgICAgLy8gc3RhdGUuZGlzdGNvZGUgPSBzdGF0ZS5uZXh0O1xuXG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlcyBzZXQnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgJ2luZmxhdGU6ICAgICAgIGNvZGVzIG9rXFxuJykpO1xuICAgICAgICBzdGF0ZS5tb2RlID0gTEVOXztcbiAgICAgICAgaWYgKGZsdXNoID09PSBaX1RSRUVTKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIExFTl86XG4gICAgICAgIHN0YXRlLm1vZGUgPSBMRU47XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgTEVOOlxuICAgICAgICBpZiAoaGF2ZSA+PSA2ICYmIGxlZnQgPj0gMjU4KSB7XG4gICAgICAgICAgLy8tLS0gUkVTVE9SRSgpIC0tLVxuICAgICAgICAgIHN0cm0ubmV4dF9vdXQgPSBwdXQ7XG4gICAgICAgICAgc3RybS5hdmFpbF9vdXQgPSBsZWZ0O1xuICAgICAgICAgIHN0cm0ubmV4dF9pbiA9IG5leHQ7XG4gICAgICAgICAgc3RybS5hdmFpbF9pbiA9IGhhdmU7XG4gICAgICAgICAgc3RhdGUuaG9sZCA9IGhvbGQ7XG4gICAgICAgICAgc3RhdGUuYml0cyA9IGJpdHM7XG4gICAgICAgICAgLy8tLS1cbiAgICAgICAgICBpbmZsYXRlX2Zhc3Qoc3RybSwgX291dCk7XG4gICAgICAgICAgLy8tLS0gTE9BRCgpIC0tLVxuICAgICAgICAgIHB1dCA9IHN0cm0ubmV4dF9vdXQ7XG4gICAgICAgICAgb3V0cHV0ID0gc3RybS5vdXRwdXQ7XG4gICAgICAgICAgbGVmdCA9IHN0cm0uYXZhaWxfb3V0O1xuICAgICAgICAgIG5leHQgPSBzdHJtLm5leHRfaW47XG4gICAgICAgICAgaW5wdXQgPSBzdHJtLmlucHV0O1xuICAgICAgICAgIGhhdmUgPSBzdHJtLmF2YWlsX2luO1xuICAgICAgICAgIGhvbGQgPSBzdGF0ZS5ob2xkO1xuICAgICAgICAgIGJpdHMgPSBzdGF0ZS5iaXRzO1xuICAgICAgICAgIC8vLS0tXG5cbiAgICAgICAgICBpZiAoc3RhdGUubW9kZSA9PT0gVFlQRSkge1xuICAgICAgICAgICAgc3RhdGUuYmFjayA9IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5iYWNrID0gMDtcbiAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgIGhlcmUgPSBzdGF0ZS5sZW5jb2RlW2hvbGQgJiAoKDEgPDwgc3RhdGUubGVuYml0cykgLSAxKV07ICAvKkJJVFMoc3RhdGUubGVuYml0cykqL1xuICAgICAgICAgIGhlcmVfYml0cyA9IGhlcmUgPj4+IDI0O1xuICAgICAgICAgIGhlcmVfb3AgPSAoaGVyZSA+Pj4gMTYpICYgMHhmZjtcbiAgICAgICAgICBoZXJlX3ZhbCA9IGhlcmUgJiAweGZmZmY7XG5cbiAgICAgICAgICBpZiAoaGVyZV9iaXRzIDw9IGJpdHMpIHsgYnJlYWs7IH1cbiAgICAgICAgICAvLy0tLSBQVUxMQllURSgpIC0tLS8vXG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlcmVfb3AgJiYgKGhlcmVfb3AgJiAweGYwKSA9PT0gMCkge1xuICAgICAgICAgIGxhc3RfYml0cyA9IGhlcmVfYml0cztcbiAgICAgICAgICBsYXN0X29wID0gaGVyZV9vcDtcbiAgICAgICAgICBsYXN0X3ZhbCA9IGhlcmVfdmFsO1xuICAgICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgIGhlcmUgPSBzdGF0ZS5sZW5jb2RlW2xhc3RfdmFsICtcbiAgICAgICAgICAgICAgICAgICAgKChob2xkICYgKCgxIDw8IChsYXN0X2JpdHMgKyBsYXN0X29wKSkgLSAxKSkvKkJJVFMobGFzdC5iaXRzICsgbGFzdC5vcCkqLyA+PiBsYXN0X2JpdHMpXTtcbiAgICAgICAgICAgIGhlcmVfYml0cyA9IGhlcmUgPj4+IDI0O1xuICAgICAgICAgICAgaGVyZV9vcCA9IChoZXJlID4+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgaGVyZV92YWwgPSBoZXJlICYgMHhmZmZmO1xuXG4gICAgICAgICAgICBpZiAoKGxhc3RfYml0cyArIGhlcmVfYml0cykgPD0gYml0cykgeyBicmVhazsgfVxuICAgICAgICAgICAgLy8tLS0gUFVMTEJZVEUoKSAtLS0vL1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8tLS0gRFJPUEJJVFMobGFzdC5iaXRzKSAtLS0vL1xuICAgICAgICAgIGhvbGQgPj4+PSBsYXN0X2JpdHM7XG4gICAgICAgICAgYml0cyAtPSBsYXN0X2JpdHM7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIHN0YXRlLmJhY2sgKz0gbGFzdF9iaXRzO1xuICAgICAgICB9XG4gICAgICAgIC8vLS0tIERST1BCSVRTKGhlcmUuYml0cykgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IGhlcmVfYml0cztcbiAgICAgICAgYml0cyAtPSBoZXJlX2JpdHM7XG4gICAgICAgIC8vLS0tLy9cbiAgICAgICAgc3RhdGUuYmFjayArPSBoZXJlX2JpdHM7XG4gICAgICAgIHN0YXRlLmxlbmd0aCA9IGhlcmVfdmFsO1xuICAgICAgICBpZiAoaGVyZV9vcCA9PT0gMCkge1xuICAgICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBoZXJlLnZhbCA+PSAweDIwICYmIGhlcmUudmFsIDwgMHg3ZiA/XG4gICAgICAgICAgLy8gICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsICclYydcXG5cIiA6XG4gICAgICAgICAgLy8gICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsIDB4JTAyeFxcblwiLCBoZXJlLnZhbCkpO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBMSVQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlcmVfb3AgJiAzMikge1xuICAgICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgZW5kIG9mIGJsb2NrXFxuXCIpKTtcbiAgICAgICAgICBzdGF0ZS5iYWNrID0gLTE7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IFRZUEU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlcmVfb3AgJiA2NCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZSc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5leHRyYSA9IGhlcmVfb3AgJiAxNTtcbiAgICAgICAgc3RhdGUubW9kZSA9IExFTkVYVDtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBMRU5FWFQ6XG4gICAgICAgIGlmIChzdGF0ZS5leHRyYSkge1xuICAgICAgICAgIC8vPT09IE5FRURCSVRTKHN0YXRlLmV4dHJhKTtcbiAgICAgICAgICBuID0gc3RhdGUuZXh0cmE7XG4gICAgICAgICAgd2hpbGUgKGJpdHMgPCBuKSB7XG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgc3RhdGUubGVuZ3RoICs9IGhvbGQgJiAoKDEgPDwgc3RhdGUuZXh0cmEpIC0gMSkvKkJJVFMoc3RhdGUuZXh0cmEpKi87XG4gICAgICAgICAgLy8tLS0gRFJPUEJJVFMoc3RhdGUuZXh0cmEpIC0tLS8vXG4gICAgICAgICAgaG9sZCA+Pj49IHN0YXRlLmV4dHJhO1xuICAgICAgICAgIGJpdHMgLT0gc3RhdGUuZXh0cmE7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIHN0YXRlLmJhY2sgKz0gc3RhdGUuZXh0cmE7XG4gICAgICAgIH1cbiAgICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBsZW5ndGggJXVcXG5cIiwgc3RhdGUubGVuZ3RoKSk7XG4gICAgICAgIHN0YXRlLndhcyA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgc3RhdGUubW9kZSA9IERJU1Q7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgRElTVDpcbiAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgIGhlcmUgPSBzdGF0ZS5kaXN0Y29kZVtob2xkICYgKCgxIDw8IHN0YXRlLmRpc3RiaXRzKSAtIDEpXTsvKkJJVFMoc3RhdGUuZGlzdGJpdHMpKi9cbiAgICAgICAgICBoZXJlX2JpdHMgPSBoZXJlID4+PiAyNDtcbiAgICAgICAgICBoZXJlX29wID0gKGhlcmUgPj4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgaGVyZV92YWwgPSBoZXJlICYgMHhmZmZmO1xuXG4gICAgICAgICAgaWYgKChoZXJlX2JpdHMpIDw9IGJpdHMpIHsgYnJlYWs7IH1cbiAgICAgICAgICAvLy0tLSBQVUxMQllURSgpIC0tLS8vXG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgIH1cbiAgICAgICAgaWYgKChoZXJlX29wICYgMHhmMCkgPT09IDApIHtcbiAgICAgICAgICBsYXN0X2JpdHMgPSBoZXJlX2JpdHM7XG4gICAgICAgICAgbGFzdF9vcCA9IGhlcmVfb3A7XG4gICAgICAgICAgbGFzdF92YWwgPSBoZXJlX3ZhbDtcbiAgICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICBoZXJlID0gc3RhdGUuZGlzdGNvZGVbbGFzdF92YWwgK1xuICAgICAgICAgICAgICAgICAgICAoKGhvbGQgJiAoKDEgPDwgKGxhc3RfYml0cyArIGxhc3Rfb3ApKSAtIDEpKS8qQklUUyhsYXN0LmJpdHMgKyBsYXN0Lm9wKSovID4+IGxhc3RfYml0cyldO1xuICAgICAgICAgICAgaGVyZV9iaXRzID0gaGVyZSA+Pj4gMjQ7XG4gICAgICAgICAgICBoZXJlX29wID0gKGhlcmUgPj4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBoZXJlX3ZhbCA9IGhlcmUgJiAweGZmZmY7XG5cbiAgICAgICAgICAgIGlmICgobGFzdF9iaXRzICsgaGVyZV9iaXRzKSA8PSBiaXRzKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICAvLy0tLSBQVUxMQllURSgpIC0tLS8vXG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLy0tLSBEUk9QQklUUyhsYXN0LmJpdHMpIC0tLS8vXG4gICAgICAgICAgaG9sZCA+Pj49IGxhc3RfYml0cztcbiAgICAgICAgICBiaXRzIC09IGxhc3RfYml0cztcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgc3RhdGUuYmFjayArPSBsYXN0X2JpdHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoaGVyZS5iaXRzKSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gaGVyZV9iaXRzO1xuICAgICAgICBiaXRzIC09IGhlcmVfYml0cztcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICBzdGF0ZS5iYWNrICs9IGhlcmVfYml0cztcbiAgICAgICAgaWYgKGhlcmVfb3AgJiA2NCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgY29kZSc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5vZmZzZXQgPSBoZXJlX3ZhbDtcbiAgICAgICAgc3RhdGUuZXh0cmEgPSAoaGVyZV9vcCkgJiAxNTtcbiAgICAgICAgc3RhdGUubW9kZSA9IERJU1RFWFQ7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgRElTVEVYVDpcbiAgICAgICAgaWYgKHN0YXRlLmV4dHJhKSB7XG4gICAgICAgICAgLy89PT0gTkVFREJJVFMoc3RhdGUuZXh0cmEpO1xuICAgICAgICAgIG4gPSBzdGF0ZS5leHRyYTtcbiAgICAgICAgICB3aGlsZSAoYml0cyA8IG4pIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBzdGF0ZS5vZmZzZXQgKz0gaG9sZCAmICgoMSA8PCBzdGF0ZS5leHRyYSkgLSAxKS8qQklUUyhzdGF0ZS5leHRyYSkqLztcbiAgICAgICAgICAvLy0tLSBEUk9QQklUUyhzdGF0ZS5leHRyYSkgLS0tLy9cbiAgICAgICAgICBob2xkID4+Pj0gc3RhdGUuZXh0cmE7XG4gICAgICAgICAgYml0cyAtPSBzdGF0ZS5leHRyYTtcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgc3RhdGUuYmFjayArPSBzdGF0ZS5leHRyYTtcbiAgICAgICAgfVxuLy8jaWZkZWYgSU5GTEFURV9TVFJJQ1RcbiAgICAgICAgaWYgKHN0YXRlLm9mZnNldCA+IHN0YXRlLmRtYXgpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuLy8jZW5kaWZcbiAgICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBkaXN0YW5jZSAldVxcblwiLCBzdGF0ZS5vZmZzZXQpKTtcbiAgICAgICAgc3RhdGUubW9kZSA9IE1BVENIO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIE1BVENIOlxuICAgICAgICBpZiAobGVmdCA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgY29weSA9IF9vdXQgLSBsZWZ0O1xuICAgICAgICBpZiAoc3RhdGUub2Zmc2V0ID4gY29weSkgeyAgICAgICAgIC8qIGNvcHkgZnJvbSB3aW5kb3cgKi9cbiAgICAgICAgICBjb3B5ID0gc3RhdGUub2Zmc2V0IC0gY29weTtcbiAgICAgICAgICBpZiAoY29weSA+IHN0YXRlLndoYXZlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuc2FuZSkge1xuICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayc7XG4gICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuLy8gKCEpIFRoaXMgYmxvY2sgaXMgZGlzYWJsZWQgaW4gemxpYiBkZWZhdWx0cyxcbi8vIGRvbid0IGVuYWJsZSBpdCBmb3IgYmluYXJ5IGNvbXBhdGliaWxpdHlcbi8vI2lmZGVmIElORkxBVEVfQUxMT1dfSU5WQUxJRF9ESVNUQU5DRV9UT09GQVJfQVJSUlxuLy8gICAgICAgICAgVHJhY2UoKHN0ZGVyciwgXCJpbmZsYXRlLmMgdG9vIGZhclxcblwiKSk7XG4vLyAgICAgICAgICBjb3B5IC09IHN0YXRlLndoYXZlO1xuLy8gICAgICAgICAgaWYgKGNvcHkgPiBzdGF0ZS5sZW5ndGgpIHsgY29weSA9IHN0YXRlLmxlbmd0aDsgfVxuLy8gICAgICAgICAgaWYgKGNvcHkgPiBsZWZ0KSB7IGNvcHkgPSBsZWZ0OyB9XG4vLyAgICAgICAgICBsZWZ0IC09IGNvcHk7XG4vLyAgICAgICAgICBzdGF0ZS5sZW5ndGggLT0gY29weTtcbi8vICAgICAgICAgIGRvIHtcbi8vICAgICAgICAgICAgb3V0cHV0W3B1dCsrXSA9IDA7XG4vLyAgICAgICAgICB9IHdoaWxlICgtLWNvcHkpO1xuLy8gICAgICAgICAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgeyBzdGF0ZS5tb2RlID0gTEVOOyB9XG4vLyAgICAgICAgICBicmVhaztcbi8vI2VuZGlmXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUud25leHQpIHtcbiAgICAgICAgICAgIGNvcHkgLT0gc3RhdGUud25leHQ7XG4gICAgICAgICAgICBmcm9tID0gc3RhdGUud3NpemUgLSBjb3B5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZyb20gPSBzdGF0ZS53bmV4dCAtIGNvcHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUubGVuZ3RoKSB7IGNvcHkgPSBzdGF0ZS5sZW5ndGg7IH1cbiAgICAgICAgICBmcm9tX3NvdXJjZSA9IHN0YXRlLndpbmRvdztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBjb3B5IGZyb20gb3V0cHV0ICovXG4gICAgICAgICAgZnJvbV9zb3VyY2UgPSBvdXRwdXQ7XG4gICAgICAgICAgZnJvbSA9IHB1dCAtIHN0YXRlLm9mZnNldDtcbiAgICAgICAgICBjb3B5ID0gc3RhdGUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3B5ID4gbGVmdCkgeyBjb3B5ID0gbGVmdDsgfVxuICAgICAgICBsZWZ0IC09IGNvcHk7XG4gICAgICAgIHN0YXRlLmxlbmd0aCAtPSBjb3B5O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgb3V0cHV0W3B1dCsrXSA9IGZyb21fc291cmNlW2Zyb20rK107XG4gICAgICAgIH0gd2hpbGUgKC0tY29weSk7XG4gICAgICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHsgc3RhdGUubW9kZSA9IExFTjsgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElUOlxuICAgICAgICBpZiAobGVmdCA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgb3V0cHV0W3B1dCsrXSA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgbGVmdC0tO1xuICAgICAgICBzdGF0ZS5tb2RlID0gTEVOO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hFQ0s6XG4gICAgICAgIGlmIChzdGF0ZS53cmFwKSB7XG4gICAgICAgICAgLy89PT0gTkVFREJJVFMoMzIpO1xuICAgICAgICAgIHdoaWxlIChiaXRzIDwgMzIpIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgLy8gVXNlICd8JyBpbnN0ZWFkIG9mICcrJyB0byBtYWtlIHN1cmUgdGhhdCByZXN1bHQgaXMgc2lnbmVkXG4gICAgICAgICAgICBob2xkIHw9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIF9vdXQgLT0gbGVmdDtcbiAgICAgICAgICBzdHJtLnRvdGFsX291dCArPSBfb3V0O1xuICAgICAgICAgIHN0YXRlLnRvdGFsICs9IF9vdXQ7XG4gICAgICAgICAgaWYgKChzdGF0ZS53cmFwICYgNCkgJiYgX291dCkge1xuICAgICAgICAgICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID1cbiAgICAgICAgICAgICAgICAvKlVQREFURV9DSEVDSyhzdGF0ZS5jaGVjaywgcHV0IC0gX291dCwgX291dCk7Ki9cbiAgICAgICAgICAgICAgICAoc3RhdGUuZmxhZ3MgPyBjcmMzMihzdGF0ZS5jaGVjaywgb3V0cHV0LCBfb3V0LCBwdXQgLSBfb3V0KSA6IGFkbGVyMzIoc3RhdGUuY2hlY2ssIG91dHB1dCwgX291dCwgcHV0IC0gX291dCkpO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIF9vdXQgPSBsZWZ0O1xuICAgICAgICAgIC8vIE5COiBjcmMzMiBzdG9yZWQgYXMgc2lnbmVkIDMyLWJpdCBpbnQsIHpzd2FwMzIgcmV0dXJucyBzaWduZWQgdG9vXG4gICAgICAgICAgaWYgKChzdGF0ZS53cmFwICYgNCkgJiYgKHN0YXRlLmZsYWdzID8gaG9sZCA6IHpzd2FwMzIoaG9sZCkpICE9PSBzdGF0ZS5jaGVjaykge1xuICAgICAgICAgICAgc3RybS5tc2cgPSAnaW5jb3JyZWN0IGRhdGEgY2hlY2snO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICAgIGhvbGQgPSAwO1xuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgY2hlY2sgbWF0Y2hlcyB0cmFpbGVyXFxuXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5tb2RlID0gTEVOR1RIO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIExFTkdUSDpcbiAgICAgICAgaWYgKHN0YXRlLndyYXAgJiYgc3RhdGUuZmxhZ3MpIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUygzMik7XG4gICAgICAgICAgd2hpbGUgKGJpdHMgPCAzMikge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIGlmICgoc3RhdGUud3JhcCAmIDQpICYmIGhvbGQgIT09IChzdGF0ZS50b3RhbCAmIDB4ZmZmZmZmZmYpKSB7XG4gICAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgbGVuZ3RoIGNoZWNrJztcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgICBob2xkID0gMDtcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgIGxlbmd0aCBtYXRjaGVzIHRyYWlsZXJcXG5cIikpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLm1vZGUgPSBET05FO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIERPTkU6XG4gICAgICAgIHJldCA9IFpfU1RSRUFNX0VORDtcbiAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xuICAgICAgY2FzZSBCQUQ6XG4gICAgICAgIHJldCA9IFpfREFUQV9FUlJPUjtcbiAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xuICAgICAgY2FzZSBNRU06XG4gICAgICAgIHJldHVybiBaX01FTV9FUlJPUjtcbiAgICAgIGNhc2UgU1lOQzpcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluZl9sZWF2ZSA8LSBoZXJlIGlzIHJlYWwgcGxhY2UgZm9yIFwiZ290byBpbmZfbGVhdmVcIiwgZW11bGF0ZWQgdmlhIFwiYnJlYWsgaW5mX2xlYXZlXCJcblxuICAvKlxuICAgICBSZXR1cm4gZnJvbSBpbmZsYXRlKCksIHVwZGF0aW5nIHRoZSB0b3RhbCBjb3VudHMgYW5kIHRoZSBjaGVjayB2YWx1ZS5cbiAgICAgSWYgdGhlcmUgd2FzIG5vIHByb2dyZXNzIGR1cmluZyB0aGUgaW5mbGF0ZSgpIGNhbGwsIHJldHVybiBhIGJ1ZmZlclxuICAgICBlcnJvci4gIENhbGwgdXBkYXRld2luZG93KCkgdG8gY3JlYXRlIGFuZC9vciB1cGRhdGUgdGhlIHdpbmRvdyBzdGF0ZS5cbiAgICAgTm90ZTogYSBtZW1vcnkgZXJyb3IgZnJvbSBpbmZsYXRlKCkgaXMgbm9uLXJlY292ZXJhYmxlLlxuICAgKi9cblxuICAvLy0tLSBSRVNUT1JFKCkgLS0tXG4gIHN0cm0ubmV4dF9vdXQgPSBwdXQ7XG4gIHN0cm0uYXZhaWxfb3V0ID0gbGVmdDtcbiAgc3RybS5uZXh0X2luID0gbmV4dDtcbiAgc3RybS5hdmFpbF9pbiA9IGhhdmU7XG4gIHN0YXRlLmhvbGQgPSBob2xkO1xuICBzdGF0ZS5iaXRzID0gYml0cztcbiAgLy8tLS1cblxuICBpZiAoc3RhdGUud3NpemUgfHwgKF9vdXQgIT09IHN0cm0uYXZhaWxfb3V0ICYmIHN0YXRlLm1vZGUgPCBCQUQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUubW9kZSA8IENIRUNLIHx8IGZsdXNoICE9PSBaX0ZJTklTSCkpKSB7XG4gICAgaWYgKHVwZGF0ZXdpbmRvdyhzdHJtLCBzdHJtLm91dHB1dCwgc3RybS5uZXh0X291dCwgX291dCAtIHN0cm0uYXZhaWxfb3V0KSkge1xuICAgICAgc3RhdGUubW9kZSA9IE1FTTtcbiAgICAgIHJldHVybiBaX01FTV9FUlJPUjtcbiAgICB9XG4gIH1cbiAgX2luIC09IHN0cm0uYXZhaWxfaW47XG4gIF9vdXQgLT0gc3RybS5hdmFpbF9vdXQ7XG4gIHN0cm0udG90YWxfaW4gKz0gX2luO1xuICBzdHJtLnRvdGFsX291dCArPSBfb3V0O1xuICBzdGF0ZS50b3RhbCArPSBfb3V0O1xuICBpZiAoKHN0YXRlLndyYXAgJiA0KSAmJiBfb3V0KSB7XG4gICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID0gLypVUERBVEVfQ0hFQ0soc3RhdGUuY2hlY2ssIHN0cm0ubmV4dF9vdXQgLSBfb3V0LCBfb3V0KTsqL1xuICAgICAgKHN0YXRlLmZsYWdzID8gY3JjMzIoc3RhdGUuY2hlY2ssIG91dHB1dCwgX291dCwgc3RybS5uZXh0X291dCAtIF9vdXQpIDogYWRsZXIzMihzdGF0ZS5jaGVjaywgb3V0cHV0LCBfb3V0LCBzdHJtLm5leHRfb3V0IC0gX291dCkpO1xuICB9XG4gIHN0cm0uZGF0YV90eXBlID0gc3RhdGUuYml0cyArIChzdGF0ZS5sYXN0ID8gNjQgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tb2RlID09PSBUWVBFID8gMTI4IDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAoc3RhdGUubW9kZSA9PT0gTEVOXyB8fCBzdGF0ZS5tb2RlID09PSBDT1BZXyA/IDI1NiA6IDApO1xuICBpZiAoKChfaW4gPT09IDAgJiYgX291dCA9PT0gMCkgfHwgZmx1c2ggPT09IFpfRklOSVNIKSAmJiByZXQgPT09IFpfT0spIHtcbiAgICByZXQgPSBaX0JVRl9FUlJPUjtcbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxuXG5jb25zdCBpbmZsYXRlRW5kID0gKHN0cm0pID0+IHtcblxuICBpZiAoaW5mbGF0ZVN0YXRlQ2hlY2soc3RybSkpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICBsZXQgc3RhdGUgPSBzdHJtLnN0YXRlO1xuICBpZiAoc3RhdGUud2luZG93KSB7XG4gICAgc3RhdGUud2luZG93ID0gbnVsbDtcbiAgfVxuICBzdHJtLnN0YXRlID0gbnVsbDtcbiAgcmV0dXJuIFpfT0s7XG59O1xuXG5cbmNvbnN0IGluZmxhdGVHZXRIZWFkZXIgPSAoc3RybSwgaGVhZCkgPT4ge1xuXG4gIC8qIGNoZWNrIHN0YXRlICovXG4gIGlmIChpbmZsYXRlU3RhdGVDaGVjayhzdHJtKSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cbiAgY29uc3Qgc3RhdGUgPSBzdHJtLnN0YXRlO1xuICBpZiAoKHN0YXRlLndyYXAgJiAyKSA9PT0gMCkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cblxuICAvKiBzYXZlIGhlYWRlciBzdHJ1Y3R1cmUgKi9cbiAgc3RhdGUuaGVhZCA9IGhlYWQ7XG4gIGhlYWQuZG9uZSA9IGZhbHNlO1xuICByZXR1cm4gWl9PSztcbn07XG5cblxuY29uc3QgaW5mbGF0ZVNldERpY3Rpb25hcnkgPSAoc3RybSwgZGljdGlvbmFyeSkgPT4ge1xuICBjb25zdCBkaWN0TGVuZ3RoID0gZGljdGlvbmFyeS5sZW5ndGg7XG5cbiAgbGV0IHN0YXRlO1xuICBsZXQgZGljdGlkO1xuICBsZXQgcmV0O1xuXG4gIC8qIGNoZWNrIHN0YXRlICovXG4gIGlmIChpbmZsYXRlU3RhdGVDaGVjayhzdHJtKSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cbiAgc3RhdGUgPSBzdHJtLnN0YXRlO1xuXG4gIGlmIChzdGF0ZS53cmFwICE9PSAwICYmIHN0YXRlLm1vZGUgIT09IERJQ1QpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICAvKiBjaGVjayBmb3IgY29ycmVjdCBkaWN0aW9uYXJ5IGlkZW50aWZpZXIgKi9cbiAgaWYgKHN0YXRlLm1vZGUgPT09IERJQ1QpIHtcbiAgICBkaWN0aWQgPSAxOyAvKiBhZGxlcjMyKDAsIG51bGwsIDApKi9cbiAgICAvKiBkaWN0aWQgPSBhZGxlcjMyKGRpY3RpZCwgZGljdGlvbmFyeSwgZGljdExlbmd0aCk7ICovXG4gICAgZGljdGlkID0gYWRsZXIzMihkaWN0aWQsIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgsIDApO1xuICAgIGlmIChkaWN0aWQgIT09IHN0YXRlLmNoZWNrKSB7XG4gICAgICByZXR1cm4gWl9EQVRBX0VSUk9SO1xuICAgIH1cbiAgfVxuICAvKiBjb3B5IGRpY3Rpb25hcnkgdG8gd2luZG93IHVzaW5nIHVwZGF0ZXdpbmRvdygpLCB3aGljaCB3aWxsIGFtZW5kIHRoZVxuICAgZXhpc3RpbmcgZGljdGlvbmFyeSBpZiBhcHByb3ByaWF0ZSAqL1xuICByZXQgPSB1cGRhdGV3aW5kb3coc3RybSwgZGljdGlvbmFyeSwgZGljdExlbmd0aCwgZGljdExlbmd0aCk7XG4gIGlmIChyZXQpIHtcbiAgICBzdGF0ZS5tb2RlID0gTUVNO1xuICAgIHJldHVybiBaX01FTV9FUlJPUjtcbiAgfVxuICBzdGF0ZS5oYXZlZGljdCA9IDE7XG4gIC8vIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgZGljdGlvbmFyeSBzZXRcXG5cIikpO1xuICByZXR1cm4gWl9PSztcbn07XG5cblxubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZVJlc2V0ID0gaW5mbGF0ZVJlc2V0O1xubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZVJlc2V0MiA9IGluZmxhdGVSZXNldDI7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlUmVzZXRLZWVwID0gaW5mbGF0ZVJlc2V0S2VlcDtcbm1vZHVsZS5leHBvcnRzLmluZmxhdGVJbml0ID0gaW5mbGF0ZUluaXQ7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlSW5pdDIgPSBpbmZsYXRlSW5pdDI7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlID0gaW5mbGF0ZTtcbm1vZHVsZS5leHBvcnRzLmluZmxhdGVFbmQgPSBpbmZsYXRlRW5kO1xubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZUdldEhlYWRlciA9IGluZmxhdGVHZXRIZWFkZXI7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlU2V0RGljdGlvbmFyeSA9IGluZmxhdGVTZXREaWN0aW9uYXJ5O1xubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZUluZm8gPSAncGFrbyBpbmZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KSc7XG5cbi8qIE5vdCBpbXBsZW1lbnRlZFxubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZUNvZGVzVXNlZCA9IGluZmxhdGVDb2Rlc1VzZWQ7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlQ29weSA9IGluZmxhdGVDb3B5O1xubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZUdldERpY3Rpb25hcnkgPSBpbmZsYXRlR2V0RGljdGlvbmFyeTtcbm1vZHVsZS5leHBvcnRzLmluZmxhdGVNYXJrID0gaW5mbGF0ZU1hcms7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlUHJpbWUgPSBpbmZsYXRlUHJpbWU7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlU3luYyA9IGluZmxhdGVTeW5jO1xubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZVN5bmNQb2ludCA9IGluZmxhdGVTeW5jUG9pbnQ7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlVW5kZXJtaW5lID0gaW5mbGF0ZVVuZGVybWluZTtcbm1vZHVsZS5leHBvcnRzLmluZmxhdGVWYWxpZGF0ZSA9IGluZmxhdGVWYWxpZGF0ZTtcbiovXG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuY29uc3QgTUFYQklUUyA9IDE1O1xuY29uc3QgRU5PVUdIX0xFTlMgPSA4NTI7XG5jb25zdCBFTk9VR0hfRElTVFMgPSA1OTI7XG4vL2NvbnN0IEVOT1VHSCA9IChFTk9VR0hfTEVOUytFTk9VR0hfRElTVFMpO1xuXG5jb25zdCBDT0RFUyA9IDA7XG5jb25zdCBMRU5TID0gMTtcbmNvbnN0IERJU1RTID0gMjtcblxuY29uc3QgbGJhc2UgPSBuZXcgVWludDE2QXJyYXkoWyAvKiBMZW5ndGggY29kZXMgMjU3Li4yODUgYmFzZSAqL1xuICAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEzLCAxNSwgMTcsIDE5LCAyMywgMjcsIDMxLFxuICAzNSwgNDMsIDUxLCA1OSwgNjcsIDgzLCA5OSwgMTE1LCAxMzEsIDE2MywgMTk1LCAyMjcsIDI1OCwgMCwgMFxuXSk7XG5cbmNvbnN0IGxleHQgPSBuZXcgVWludDhBcnJheShbIC8qIExlbmd0aCBjb2RlcyAyNTcuLjI4NSBleHRyYSAqL1xuICAxNiwgMTYsIDE2LCAxNiwgMTYsIDE2LCAxNiwgMTYsIDE3LCAxNywgMTcsIDE3LCAxOCwgMTgsIDE4LCAxOCxcbiAgMTksIDE5LCAxOSwgMTksIDIwLCAyMCwgMjAsIDIwLCAyMSwgMjEsIDIxLCAyMSwgMTYsIDcyLCA3OFxuXSk7XG5cbmNvbnN0IGRiYXNlID0gbmV3IFVpbnQxNkFycmF5KFsgLyogRGlzdGFuY2UgY29kZXMgMC4uMjkgYmFzZSAqL1xuICAxLCAyLCAzLCA0LCA1LCA3LCA5LCAxMywgMTcsIDI1LCAzMywgNDksIDY1LCA5NywgMTI5LCAxOTMsXG4gIDI1NywgMzg1LCA1MTMsIDc2OSwgMTAyNSwgMTUzNywgMjA0OSwgMzA3MywgNDA5NywgNjE0NSxcbiAgODE5MywgMTIyODksIDE2Mzg1LCAyNDU3NywgMCwgMFxuXSk7XG5cbmNvbnN0IGRleHQgPSBuZXcgVWludDhBcnJheShbIC8qIERpc3RhbmNlIGNvZGVzIDAuLjI5IGV4dHJhICovXG4gIDE2LCAxNiwgMTYsIDE2LCAxNywgMTcsIDE4LCAxOCwgMTksIDE5LCAyMCwgMjAsIDIxLCAyMSwgMjIsIDIyLFxuICAyMywgMjMsIDI0LCAyNCwgMjUsIDI1LCAyNiwgMjYsIDI3LCAyNyxcbiAgMjgsIDI4LCAyOSwgMjksIDY0LCA2NFxuXSk7XG5cbmNvbnN0IGluZmxhdGVfdGFibGUgPSAodHlwZSwgbGVucywgbGVuc19pbmRleCwgY29kZXMsIHRhYmxlLCB0YWJsZV9pbmRleCwgd29yaywgb3B0cykgPT5cbntcbiAgY29uc3QgYml0cyA9IG9wdHMuYml0cztcbiAgICAgIC8vaGVyZSA9IG9wdHMuaGVyZTsgLyogdGFibGUgZW50cnkgZm9yIGR1cGxpY2F0aW9uICovXG5cbiAgbGV0IGxlbiA9IDA7ICAgICAgICAgICAgICAgLyogYSBjb2RlJ3MgbGVuZ3RoIGluIGJpdHMgKi9cbiAgbGV0IHN5bSA9IDA7ICAgICAgICAgICAgICAgLyogaW5kZXggb2YgY29kZSBzeW1ib2xzICovXG4gIGxldCBtaW4gPSAwLCBtYXggPSAwOyAgICAgICAgICAvKiBtaW5pbXVtIGFuZCBtYXhpbXVtIGNvZGUgbGVuZ3RocyAqL1xuICBsZXQgcm9vdCA9IDA7ICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgaW5kZXggYml0cyBmb3Igcm9vdCB0YWJsZSAqL1xuICBsZXQgY3VyciA9IDA7ICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgaW5kZXggYml0cyBmb3IgY3VycmVudCB0YWJsZSAqL1xuICBsZXQgZHJvcCA9IDA7ICAgICAgICAgICAgICAvKiBjb2RlIGJpdHMgdG8gZHJvcCBmb3Igc3ViLXRhYmxlICovXG4gIGxldCBsZWZ0ID0gMDsgICAgICAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIHByZWZpeCBjb2RlcyBhdmFpbGFibGUgKi9cbiAgbGV0IHVzZWQgPSAwOyAgICAgICAgICAgICAgLyogY29kZSBlbnRyaWVzIGluIHRhYmxlIHVzZWQgKi9cbiAgbGV0IGh1ZmYgPSAwOyAgICAgICAgICAgICAgLyogSHVmZm1hbiBjb2RlICovXG4gIGxldCBpbmNyOyAgICAgICAgICAgICAgLyogZm9yIGluY3JlbWVudGluZyBjb2RlLCBpbmRleCAqL1xuICBsZXQgZmlsbDsgICAgICAgICAgICAgIC8qIGluZGV4IGZvciByZXBsaWNhdGluZyBlbnRyaWVzICovXG4gIGxldCBsb3c7ICAgICAgICAgICAgICAgLyogbG93IGJpdHMgZm9yIGN1cnJlbnQgcm9vdCBlbnRyeSAqL1xuICBsZXQgbWFzazsgICAgICAgICAgICAgIC8qIG1hc2sgZm9yIGxvdyByb290IGJpdHMgKi9cbiAgbGV0IG5leHQ7ICAgICAgICAgICAgIC8qIG5leHQgYXZhaWxhYmxlIHNwYWNlIGluIHRhYmxlICovXG4gIGxldCBiYXNlID0gbnVsbDsgICAgIC8qIGJhc2UgdmFsdWUgdGFibGUgdG8gdXNlICovXG4vLyAgbGV0IHNob2V4dHJhOyAgICAvKiBleHRyYSBiaXRzIHRhYmxlIHRvIHVzZSAqL1xuICBsZXQgbWF0Y2g7ICAgICAgICAgICAgICAgICAgLyogdXNlIGJhc2UgYW5kIGV4dHJhIGZvciBzeW1ib2wgPj0gbWF0Y2ggKi9cbiAgY29uc3QgY291bnQgPSBuZXcgVWludDE2QXJyYXkoTUFYQklUUyArIDEpOyAvL1tNQVhCSVRTKzFdOyAgICAvKiBudW1iZXIgb2YgY29kZXMgb2YgZWFjaCBsZW5ndGggKi9cbiAgY29uc3Qgb2ZmcyA9IG5ldyBVaW50MTZBcnJheShNQVhCSVRTICsgMSk7IC8vW01BWEJJVFMrMV07ICAgICAvKiBvZmZzZXRzIGluIHRhYmxlIGZvciBlYWNoIGxlbmd0aCAqL1xuICBsZXQgZXh0cmEgPSBudWxsO1xuXG4gIGxldCBoZXJlX2JpdHMsIGhlcmVfb3AsIGhlcmVfdmFsO1xuXG4gIC8qXG4gICBQcm9jZXNzIGEgc2V0IG9mIGNvZGUgbGVuZ3RocyB0byBjcmVhdGUgYSBjYW5vbmljYWwgSHVmZm1hbiBjb2RlLiAgVGhlXG4gICBjb2RlIGxlbmd0aHMgYXJlIGxlbnNbMC4uY29kZXMtMV0uICBFYWNoIGxlbmd0aCBjb3JyZXNwb25kcyB0byB0aGVcbiAgIHN5bWJvbHMgMC4uY29kZXMtMS4gIFRoZSBIdWZmbWFuIGNvZGUgaXMgZ2VuZXJhdGVkIGJ5IGZpcnN0IHNvcnRpbmcgdGhlXG4gICBzeW1ib2xzIGJ5IGxlbmd0aCBmcm9tIHNob3J0IHRvIGxvbmcsIGFuZCByZXRhaW5pbmcgdGhlIHN5bWJvbCBvcmRlclxuICAgZm9yIGNvZGVzIHdpdGggZXF1YWwgbGVuZ3Rocy4gIFRoZW4gdGhlIGNvZGUgc3RhcnRzIHdpdGggYWxsIHplcm8gYml0c1xuICAgZm9yIHRoZSBmaXJzdCBjb2RlIG9mIHRoZSBzaG9ydGVzdCBsZW5ndGgsIGFuZCB0aGUgY29kZXMgYXJlIGludGVnZXJcbiAgIGluY3JlbWVudHMgZm9yIHRoZSBzYW1lIGxlbmd0aCwgYW5kIHplcm9zIGFyZSBhcHBlbmRlZCBhcyB0aGUgbGVuZ3RoXG4gICBpbmNyZWFzZXMuICBGb3IgdGhlIGRlZmxhdGUgZm9ybWF0LCB0aGVzZSBiaXRzIGFyZSBzdG9yZWQgYmFja3dhcmRzXG4gICBmcm9tIHRoZWlyIG1vcmUgbmF0dXJhbCBpbnRlZ2VyIGluY3JlbWVudCBvcmRlcmluZywgYW5kIHNvIHdoZW4gdGhlXG4gICBkZWNvZGluZyB0YWJsZXMgYXJlIGJ1aWx0IGluIHRoZSBsYXJnZSBsb29wIGJlbG93LCB0aGUgaW50ZWdlciBjb2Rlc1xuICAgYXJlIGluY3JlbWVudGVkIGJhY2t3YXJkcy5cblxuICAgVGhpcyByb3V0aW5lIGFzc3VtZXMsIGJ1dCBkb2VzIG5vdCBjaGVjaywgdGhhdCBhbGwgb2YgdGhlIGVudHJpZXMgaW5cbiAgIGxlbnNbXSBhcmUgaW4gdGhlIHJhbmdlIDAuLk1BWEJJVFMuICBUaGUgY2FsbGVyIG11c3QgYXNzdXJlIHRoaXMuXG4gICAxLi5NQVhCSVRTIGlzIGludGVycHJldGVkIGFzIHRoYXQgY29kZSBsZW5ndGguICB6ZXJvIG1lYW5zIHRoYXQgdGhhdFxuICAgc3ltYm9sIGRvZXMgbm90IG9jY3VyIGluIHRoaXMgY29kZS5cblxuICAgVGhlIGNvZGVzIGFyZSBzb3J0ZWQgYnkgY29tcHV0aW5nIGEgY291bnQgb2YgY29kZXMgZm9yIGVhY2ggbGVuZ3RoLFxuICAgY3JlYXRpbmcgZnJvbSB0aGF0IGEgdGFibGUgb2Ygc3RhcnRpbmcgaW5kaWNlcyBmb3IgZWFjaCBsZW5ndGggaW4gdGhlXG4gICBzb3J0ZWQgdGFibGUsIGFuZCB0aGVuIGVudGVyaW5nIHRoZSBzeW1ib2xzIGluIG9yZGVyIGluIHRoZSBzb3J0ZWRcbiAgIHRhYmxlLiAgVGhlIHNvcnRlZCB0YWJsZSBpcyB3b3JrW10sIHdpdGggdGhhdCBzcGFjZSBiZWluZyBwcm92aWRlZCBieVxuICAgdGhlIGNhbGxlci5cblxuICAgVGhlIGxlbmd0aCBjb3VudHMgYXJlIHVzZWQgZm9yIG90aGVyIHB1cnBvc2VzIGFzIHdlbGwsIGkuZS4gZmluZGluZ1xuICAgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gbGVuZ3RoIGNvZGVzLCBkZXRlcm1pbmluZyBpZiB0aGVyZSBhcmUgYW55XG4gICBjb2RlcyBhdCBhbGwsIGNoZWNraW5nIGZvciBhIHZhbGlkIHNldCBvZiBsZW5ndGhzLCBhbmQgbG9va2luZyBhaGVhZFxuICAgYXQgbGVuZ3RoIGNvdW50cyB0byBkZXRlcm1pbmUgc3ViLXRhYmxlIHNpemVzIHdoZW4gYnVpbGRpbmcgdGhlXG4gICBkZWNvZGluZyB0YWJsZXMuXG4gICAqL1xuXG4gIC8qIGFjY3VtdWxhdGUgbGVuZ3RocyBmb3IgY29kZXMgKGFzc3VtZXMgbGVuc1tdIGFsbCBpbiAwLi5NQVhCSVRTKSAqL1xuICBmb3IgKGxlbiA9IDA7IGxlbiA8PSBNQVhCSVRTOyBsZW4rKykge1xuICAgIGNvdW50W2xlbl0gPSAwO1xuICB9XG4gIGZvciAoc3ltID0gMDsgc3ltIDwgY29kZXM7IHN5bSsrKSB7XG4gICAgY291bnRbbGVuc1tsZW5zX2luZGV4ICsgc3ltXV0rKztcbiAgfVxuXG4gIC8qIGJvdW5kIGNvZGUgbGVuZ3RocywgZm9yY2Ugcm9vdCB0byBiZSB3aXRoaW4gY29kZSBsZW5ndGhzICovXG4gIHJvb3QgPSBiaXRzO1xuICBmb3IgKG1heCA9IE1BWEJJVFM7IG1heCA+PSAxOyBtYXgtLSkge1xuICAgIGlmIChjb3VudFttYXhdICE9PSAwKSB7IGJyZWFrOyB9XG4gIH1cbiAgaWYgKHJvb3QgPiBtYXgpIHtcbiAgICByb290ID0gbWF4O1xuICB9XG4gIGlmIChtYXggPT09IDApIHsgICAgICAgICAgICAgICAgICAgICAvKiBubyBzeW1ib2xzIHRvIGNvZGUgYXQgYWxsICovXG4gICAgLy90YWJsZS5vcFtvcHRzLnRhYmxlX2luZGV4XSA9IDY0OyAgLy9oZXJlLm9wID0gKHZhciBjaGFyKTY0OyAgICAvKiBpbnZhbGlkIGNvZGUgbWFya2VyICovXG4gICAgLy90YWJsZS5iaXRzW29wdHMudGFibGVfaW5kZXhdID0gMTsgICAvL2hlcmUuYml0cyA9ICh2YXIgY2hhcikxO1xuICAgIC8vdGFibGUudmFsW29wdHMudGFibGVfaW5kZXgrK10gPSAwOyAgIC8vaGVyZS52YWwgPSAodmFyIHNob3J0KTA7XG4gICAgdGFibGVbdGFibGVfaW5kZXgrK10gPSAoMSA8PCAyNCkgfCAoNjQgPDwgMTYpIHwgMDtcblxuXG4gICAgLy90YWJsZS5vcFtvcHRzLnRhYmxlX2luZGV4XSA9IDY0O1xuICAgIC8vdGFibGUuYml0c1tvcHRzLnRhYmxlX2luZGV4XSA9IDE7XG4gICAgLy90YWJsZS52YWxbb3B0cy50YWJsZV9pbmRleCsrXSA9IDA7XG4gICAgdGFibGVbdGFibGVfaW5kZXgrK10gPSAoMSA8PCAyNCkgfCAoNjQgPDwgMTYpIHwgMDtcblxuICAgIG9wdHMuYml0cyA9IDE7XG4gICAgcmV0dXJuIDA7ICAgICAvKiBubyBzeW1ib2xzLCBidXQgd2FpdCBmb3IgZGVjb2RpbmcgdG8gcmVwb3J0IGVycm9yICovXG4gIH1cbiAgZm9yIChtaW4gPSAxOyBtaW4gPCBtYXg7IG1pbisrKSB7XG4gICAgaWYgKGNvdW50W21pbl0gIT09IDApIHsgYnJlYWs7IH1cbiAgfVxuICBpZiAocm9vdCA8IG1pbikge1xuICAgIHJvb3QgPSBtaW47XG4gIH1cblxuICAvKiBjaGVjayBmb3IgYW4gb3Zlci1zdWJzY3JpYmVkIG9yIGluY29tcGxldGUgc2V0IG9mIGxlbmd0aHMgKi9cbiAgbGVmdCA9IDE7XG4gIGZvciAobGVuID0gMTsgbGVuIDw9IE1BWEJJVFM7IGxlbisrKSB7XG4gICAgbGVmdCA8PD0gMTtcbiAgICBsZWZ0IC09IGNvdW50W2xlbl07XG4gICAgaWYgKGxlZnQgPCAwKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSAgICAgICAgLyogb3Zlci1zdWJzY3JpYmVkICovXG4gIH1cbiAgaWYgKGxlZnQgPiAwICYmICh0eXBlID09PSBDT0RFUyB8fCBtYXggIT09IDEpKSB7XG4gICAgcmV0dXJuIC0xOyAgICAgICAgICAgICAgICAgICAgICAvKiBpbmNvbXBsZXRlIHNldCAqL1xuICB9XG5cbiAgLyogZ2VuZXJhdGUgb2Zmc2V0cyBpbnRvIHN5bWJvbCB0YWJsZSBmb3IgZWFjaCBsZW5ndGggZm9yIHNvcnRpbmcgKi9cbiAgb2Zmc1sxXSA9IDA7XG4gIGZvciAobGVuID0gMTsgbGVuIDwgTUFYQklUUzsgbGVuKyspIHtcbiAgICBvZmZzW2xlbiArIDFdID0gb2Zmc1tsZW5dICsgY291bnRbbGVuXTtcbiAgfVxuXG4gIC8qIHNvcnQgc3ltYm9scyBieSBsZW5ndGgsIGJ5IHN5bWJvbCBvcmRlciB3aXRoaW4gZWFjaCBsZW5ndGggKi9cbiAgZm9yIChzeW0gPSAwOyBzeW0gPCBjb2Rlczsgc3ltKyspIHtcbiAgICBpZiAobGVuc1tsZW5zX2luZGV4ICsgc3ltXSAhPT0gMCkge1xuICAgICAgd29ya1tvZmZzW2xlbnNbbGVuc19pbmRleCArIHN5bV1dKytdID0gc3ltO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICBDcmVhdGUgYW5kIGZpbGwgaW4gZGVjb2RpbmcgdGFibGVzLiAgSW4gdGhpcyBsb29wLCB0aGUgdGFibGUgYmVpbmdcbiAgIGZpbGxlZCBpcyBhdCBuZXh0IGFuZCBoYXMgY3VyciBpbmRleCBiaXRzLiAgVGhlIGNvZGUgYmVpbmcgdXNlZCBpcyBodWZmXG4gICB3aXRoIGxlbmd0aCBsZW4uICBUaGF0IGNvZGUgaXMgY29udmVydGVkIHRvIGFuIGluZGV4IGJ5IGRyb3BwaW5nIGRyb3BcbiAgIGJpdHMgb2ZmIG9mIHRoZSBib3R0b20uICBGb3IgY29kZXMgd2hlcmUgbGVuIGlzIGxlc3MgdGhhbiBkcm9wICsgY3VycixcbiAgIHRob3NlIHRvcCBkcm9wICsgY3VyciAtIGxlbiBiaXRzIGFyZSBpbmNyZW1lbnRlZCB0aHJvdWdoIGFsbCB2YWx1ZXMgdG9cbiAgIGZpbGwgdGhlIHRhYmxlIHdpdGggcmVwbGljYXRlZCBlbnRyaWVzLlxuXG4gICByb290IGlzIHRoZSBudW1iZXIgb2YgaW5kZXggYml0cyBmb3IgdGhlIHJvb3QgdGFibGUuICBXaGVuIGxlbiBleGNlZWRzXG4gICByb290LCBzdWItdGFibGVzIGFyZSBjcmVhdGVkIHBvaW50ZWQgdG8gYnkgdGhlIHJvb3QgZW50cnkgd2l0aCBhbiBpbmRleFxuICAgb2YgdGhlIGxvdyByb290IGJpdHMgb2YgaHVmZi4gIFRoaXMgaXMgc2F2ZWQgaW4gbG93IHRvIGNoZWNrIGZvciB3aGVuIGFcbiAgIG5ldyBzdWItdGFibGUgc2hvdWxkIGJlIHN0YXJ0ZWQuICBkcm9wIGlzIHplcm8gd2hlbiB0aGUgcm9vdCB0YWJsZSBpc1xuICAgYmVpbmcgZmlsbGVkLCBhbmQgZHJvcCBpcyByb290IHdoZW4gc3ViLXRhYmxlcyBhcmUgYmVpbmcgZmlsbGVkLlxuXG4gICBXaGVuIGEgbmV3IHN1Yi10YWJsZSBpcyBuZWVkZWQsIGl0IGlzIG5lY2Vzc2FyeSB0byBsb29rIGFoZWFkIGluIHRoZVxuICAgY29kZSBsZW5ndGhzIHRvIGRldGVybWluZSB3aGF0IHNpemUgc3ViLXRhYmxlIGlzIG5lZWRlZC4gIFRoZSBsZW5ndGhcbiAgIGNvdW50cyBhcmUgdXNlZCBmb3IgdGhpcywgYW5kIHNvIGNvdW50W10gaXMgZGVjcmVtZW50ZWQgYXMgY29kZXMgYXJlXG4gICBlbnRlcmVkIGluIHRoZSB0YWJsZXMuXG5cbiAgIHVzZWQga2VlcHMgdHJhY2sgb2YgaG93IG1hbnkgdGFibGUgZW50cmllcyBoYXZlIGJlZW4gYWxsb2NhdGVkIGZyb20gdGhlXG4gICBwcm92aWRlZCAqdGFibGUgc3BhY2UuICBJdCBpcyBjaGVja2VkIGZvciBMRU5TIGFuZCBESVNUIHRhYmxlcyBhZ2FpbnN0XG4gICB0aGUgY29uc3RhbnRzIEVOT1VHSF9MRU5TIGFuZCBFTk9VR0hfRElTVFMgdG8gZ3VhcmQgYWdhaW5zdCBjaGFuZ2VzIGluXG4gICB0aGUgaW5pdGlhbCByb290IHRhYmxlIHNpemUgY29uc3RhbnRzLiAgU2VlIHRoZSBjb21tZW50cyBpbiBpbmZ0cmVlcy5oXG4gICBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuICAgc3ltIGluY3JlbWVudHMgdGhyb3VnaCBhbGwgc3ltYm9scywgYW5kIHRoZSBsb29wIHRlcm1pbmF0ZXMgd2hlblxuICAgYWxsIGNvZGVzIG9mIGxlbmd0aCBtYXgsIGkuZS4gYWxsIGNvZGVzLCBoYXZlIGJlZW4gcHJvY2Vzc2VkLiAgVGhpc1xuICAgcm91dGluZSBwZXJtaXRzIGluY29tcGxldGUgY29kZXMsIHNvIGFub3RoZXIgbG9vcCBhZnRlciB0aGlzIG9uZSBmaWxsc1xuICAgaW4gdGhlIHJlc3Qgb2YgdGhlIGRlY29kaW5nIHRhYmxlcyB3aXRoIGludmFsaWQgY29kZSBtYXJrZXJzLlxuICAgKi9cblxuICAvKiBzZXQgdXAgZm9yIGNvZGUgdHlwZSAqL1xuICAvLyBwb29yIG1hbiBvcHRpbWl6YXRpb24gLSB1c2UgaWYtZWxzZSBpbnN0ZWFkIG9mIHN3aXRjaCxcbiAgLy8gdG8gYXZvaWQgZGVvcHRzIGluIG9sZCB2OFxuICBpZiAodHlwZSA9PT0gQ09ERVMpIHtcbiAgICBiYXNlID0gZXh0cmEgPSB3b3JrOyAgICAvKiBkdW1teSB2YWx1ZS0tbm90IHVzZWQgKi9cbiAgICBtYXRjaCA9IDIwO1xuXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gTEVOUykge1xuICAgIGJhc2UgPSBsYmFzZTtcbiAgICBleHRyYSA9IGxleHQ7XG4gICAgbWF0Y2ggPSAyNTc7XG5cbiAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgIC8qIERJU1RTICovXG4gICAgYmFzZSA9IGRiYXNlO1xuICAgIGV4dHJhID0gZGV4dDtcbiAgICBtYXRjaCA9IDA7XG4gIH1cblxuICAvKiBpbml0aWFsaXplIG9wdHMgZm9yIGxvb3AgKi9cbiAgaHVmZiA9IDA7ICAgICAgICAgICAgICAgICAgIC8qIHN0YXJ0aW5nIGNvZGUgKi9cbiAgc3ltID0gMDsgICAgICAgICAgICAgICAgICAgIC8qIHN0YXJ0aW5nIGNvZGUgc3ltYm9sICovXG4gIGxlbiA9IG1pbjsgICAgICAgICAgICAgICAgICAvKiBzdGFydGluZyBjb2RlIGxlbmd0aCAqL1xuICBuZXh0ID0gdGFibGVfaW5kZXg7ICAgICAgICAgICAgICAvKiBjdXJyZW50IHRhYmxlIHRvIGZpbGwgaW4gKi9cbiAgY3VyciA9IHJvb3Q7ICAgICAgICAgICAgICAgIC8qIGN1cnJlbnQgdGFibGUgaW5kZXggYml0cyAqL1xuICBkcm9wID0gMDsgICAgICAgICAgICAgICAgICAgLyogY3VycmVudCBiaXRzIHRvIGRyb3AgZnJvbSBjb2RlIGZvciBpbmRleCAqL1xuICBsb3cgPSAtMTsgICAgICAgICAgICAgICAgICAgLyogdHJpZ2dlciBuZXcgc3ViLXRhYmxlIHdoZW4gbGVuID4gcm9vdCAqL1xuICB1c2VkID0gMSA8PCByb290OyAgICAgICAgICAvKiB1c2Ugcm9vdCB0YWJsZSBlbnRyaWVzICovXG4gIG1hc2sgPSB1c2VkIC0gMTsgICAgICAgICAgICAvKiBtYXNrIGZvciBjb21wYXJpbmcgbG93ICovXG5cbiAgLyogY2hlY2sgYXZhaWxhYmxlIHRhYmxlIHNwYWNlICovXG4gIGlmICgodHlwZSA9PT0gTEVOUyAmJiB1c2VkID4gRU5PVUdIX0xFTlMpIHx8XG4gICAgKHR5cGUgPT09IERJU1RTICYmIHVzZWQgPiBFTk9VR0hfRElTVFMpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICAvKiBwcm9jZXNzIGFsbCBjb2RlcyBhbmQgbWFrZSB0YWJsZSBlbnRyaWVzICovXG4gIGZvciAoOzspIHtcbiAgICAvKiBjcmVhdGUgdGFibGUgZW50cnkgKi9cbiAgICBoZXJlX2JpdHMgPSBsZW4gLSBkcm9wO1xuICAgIGlmICh3b3JrW3N5bV0gKyAxIDwgbWF0Y2gpIHtcbiAgICAgIGhlcmVfb3AgPSAwO1xuICAgICAgaGVyZV92YWwgPSB3b3JrW3N5bV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHdvcmtbc3ltXSA+PSBtYXRjaCkge1xuICAgICAgaGVyZV9vcCA9IGV4dHJhW3dvcmtbc3ltXSAtIG1hdGNoXTtcbiAgICAgIGhlcmVfdmFsID0gYmFzZVt3b3JrW3N5bV0gLSBtYXRjaF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGVyZV9vcCA9IDMyICsgNjQ7ICAgICAgICAgLyogZW5kIG9mIGJsb2NrICovXG4gICAgICBoZXJlX3ZhbCA9IDA7XG4gICAgfVxuXG4gICAgLyogcmVwbGljYXRlIGZvciB0aG9zZSBpbmRpY2VzIHdpdGggbG93IGxlbiBiaXRzIGVxdWFsIHRvIGh1ZmYgKi9cbiAgICBpbmNyID0gMSA8PCAobGVuIC0gZHJvcCk7XG4gICAgZmlsbCA9IDEgPDwgY3VycjtcbiAgICBtaW4gPSBmaWxsOyAgICAgICAgICAgICAgICAgLyogc2F2ZSBvZmZzZXQgdG8gbmV4dCB0YWJsZSAqL1xuICAgIGRvIHtcbiAgICAgIGZpbGwgLT0gaW5jcjtcbiAgICAgIHRhYmxlW25leHQgKyAoaHVmZiA+PiBkcm9wKSArIGZpbGxdID0gKGhlcmVfYml0cyA8PCAyNCkgfCAoaGVyZV9vcCA8PCAxNikgfCBoZXJlX3ZhbCB8MDtcbiAgICB9IHdoaWxlIChmaWxsICE9PSAwKTtcblxuICAgIC8qIGJhY2t3YXJkcyBpbmNyZW1lbnQgdGhlIGxlbi1iaXQgY29kZSBodWZmICovXG4gICAgaW5jciA9IDEgPDwgKGxlbiAtIDEpO1xuICAgIHdoaWxlIChodWZmICYgaW5jcikge1xuICAgICAgaW5jciA+Pj0gMTtcbiAgICB9XG4gICAgaWYgKGluY3IgIT09IDApIHtcbiAgICAgIGh1ZmYgJj0gaW5jciAtIDE7XG4gICAgICBodWZmICs9IGluY3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGh1ZmYgPSAwO1xuICAgIH1cblxuICAgIC8qIGdvIHRvIG5leHQgc3ltYm9sLCB1cGRhdGUgY291bnQsIGxlbiAqL1xuICAgIHN5bSsrO1xuICAgIGlmICgtLWNvdW50W2xlbl0gPT09IDApIHtcbiAgICAgIGlmIChsZW4gPT09IG1heCkgeyBicmVhazsgfVxuICAgICAgbGVuID0gbGVuc1tsZW5zX2luZGV4ICsgd29ya1tzeW1dXTtcbiAgICB9XG5cbiAgICAvKiBjcmVhdGUgbmV3IHN1Yi10YWJsZSBpZiBuZWVkZWQgKi9cbiAgICBpZiAobGVuID4gcm9vdCAmJiAoaHVmZiAmIG1hc2spICE9PSBsb3cpIHtcbiAgICAgIC8qIGlmIGZpcnN0IHRpbWUsIHRyYW5zaXRpb24gdG8gc3ViLXRhYmxlcyAqL1xuICAgICAgaWYgKGRyb3AgPT09IDApIHtcbiAgICAgICAgZHJvcCA9IHJvb3Q7XG4gICAgICB9XG5cbiAgICAgIC8qIGluY3JlbWVudCBwYXN0IGxhc3QgdGFibGUgKi9cbiAgICAgIG5leHQgKz0gbWluOyAgICAgICAgICAgIC8qIGhlcmUgbWluIGlzIDEgPDwgY3VyciAqL1xuXG4gICAgICAvKiBkZXRlcm1pbmUgbGVuZ3RoIG9mIG5leHQgdGFibGUgKi9cbiAgICAgIGN1cnIgPSBsZW4gLSBkcm9wO1xuICAgICAgbGVmdCA9IDEgPDwgY3VycjtcbiAgICAgIHdoaWxlIChjdXJyICsgZHJvcCA8IG1heCkge1xuICAgICAgICBsZWZ0IC09IGNvdW50W2N1cnIgKyBkcm9wXTtcbiAgICAgICAgaWYgKGxlZnQgPD0gMCkgeyBicmVhazsgfVxuICAgICAgICBjdXJyKys7XG4gICAgICAgIGxlZnQgPDw9IDE7XG4gICAgICB9XG5cbiAgICAgIC8qIGNoZWNrIGZvciBlbm91Z2ggc3BhY2UgKi9cbiAgICAgIHVzZWQgKz0gMSA8PCBjdXJyO1xuICAgICAgaWYgKCh0eXBlID09PSBMRU5TICYmIHVzZWQgPiBFTk9VR0hfTEVOUykgfHxcbiAgICAgICAgKHR5cGUgPT09IERJU1RTICYmIHVzZWQgPiBFTk9VR0hfRElTVFMpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICAvKiBwb2ludCBlbnRyeSBpbiByb290IHRhYmxlIHRvIHN1Yi10YWJsZSAqL1xuICAgICAgbG93ID0gaHVmZiAmIG1hc2s7XG4gICAgICAvKnRhYmxlLm9wW2xvd10gPSBjdXJyO1xuICAgICAgdGFibGUuYml0c1tsb3ddID0gcm9vdDtcbiAgICAgIHRhYmxlLnZhbFtsb3ddID0gbmV4dCAtIG9wdHMudGFibGVfaW5kZXg7Ki9cbiAgICAgIHRhYmxlW2xvd10gPSAocm9vdCA8PCAyNCkgfCAoY3VyciA8PCAxNikgfCAobmV4dCAtIHRhYmxlX2luZGV4KSB8MDtcbiAgICB9XG4gIH1cblxuICAvKiBmaWxsIGluIHJlbWFpbmluZyB0YWJsZSBlbnRyeSBpZiBjb2RlIGlzIGluY29tcGxldGUgKGd1YXJhbnRlZWQgdG8gaGF2ZVxuICAgYXQgbW9zdCBvbmUgcmVtYWluaW5nIGVudHJ5LCBzaW5jZSBpZiB0aGUgY29kZSBpcyBpbmNvbXBsZXRlLCB0aGVcbiAgIG1heGltdW0gY29kZSBsZW5ndGggdGhhdCB3YXMgYWxsb3dlZCB0byBnZXQgdGhpcyBmYXIgaXMgb25lIGJpdCkgKi9cbiAgaWYgKGh1ZmYgIT09IDApIHtcbiAgICAvL3RhYmxlLm9wW25leHQgKyBodWZmXSA9IDY0OyAgICAgICAgICAgIC8qIGludmFsaWQgY29kZSBtYXJrZXIgKi9cbiAgICAvL3RhYmxlLmJpdHNbbmV4dCArIGh1ZmZdID0gbGVuIC0gZHJvcDtcbiAgICAvL3RhYmxlLnZhbFtuZXh0ICsgaHVmZl0gPSAwO1xuICAgIHRhYmxlW25leHQgKyBodWZmXSA9ICgobGVuIC0gZHJvcCkgPDwgMjQpIHwgKDY0IDw8IDE2KSB8MDtcbiAgfVxuXG4gIC8qIHNldCByZXR1cm4gcGFyYW1ldGVycyAqL1xuICAvL29wdHMudGFibGVfaW5kZXggKz0gdXNlZDtcbiAgb3B0cy5iaXRzID0gcm9vdDtcbiAgcmV0dXJuIDA7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gaW5mbGF0ZV90YWJsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgMjogICAgICAnbmVlZCBkaWN0aW9uYXJ5JywgICAgIC8qIFpfTkVFRF9ESUNUICAgICAgIDIgICovXG4gIDE6ICAgICAgJ3N0cmVhbSBlbmQnLCAgICAgICAgICAvKiBaX1NUUkVBTV9FTkQgICAgICAxICAqL1xuICAwOiAgICAgICcnLCAgICAgICAgICAgICAgICAgICAgLyogWl9PSyAgICAgICAgICAgICAgMCAgKi9cbiAgJy0xJzogICAnZmlsZSBlcnJvcicsICAgICAgICAgIC8qIFpfRVJSTk8gICAgICAgICAoLTEpICovXG4gICctMic6ICAgJ3N0cmVhbSBlcnJvcicsICAgICAgICAvKiBaX1NUUkVBTV9FUlJPUiAgKC0yKSAqL1xuICAnLTMnOiAgICdkYXRhIGVycm9yJywgICAgICAgICAgLyogWl9EQVRBX0VSUk9SICAgICgtMykgKi9cbiAgJy00JzogICAnaW5zdWZmaWNpZW50IG1lbW9yeScsIC8qIFpfTUVNX0VSUk9SICAgICAoLTQpICovXG4gICctNSc6ICAgJ2J1ZmZlciBlcnJvcicsICAgICAgICAvKiBaX0JVRl9FUlJPUiAgICAgKC01KSAqL1xuICAnLTYnOiAgICdpbmNvbXBhdGlibGUgdmVyc2lvbicgLyogWl9WRVJTSU9OX0VSUk9SICgtNikgKi9cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuLyogZXNsaW50LWRpc2FibGUgc3BhY2UtdW5hcnktb3BzICovXG5cbi8qIFB1YmxpYyBjb25zdGFudHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbi8vY29uc3QgWl9GSUxURVJFRCAgICAgICAgICA9IDE7XG4vL2NvbnN0IFpfSFVGRk1BTl9PTkxZICAgICAgPSAyO1xuLy9jb25zdCBaX1JMRSAgICAgICAgICAgICAgID0gMztcbmNvbnN0IFpfRklYRUQgICAgICAgICAgICAgICA9IDQ7XG4vL2NvbnN0IFpfREVGQVVMVF9TVFJBVEVHWSAgPSAwO1xuXG4vKiBQb3NzaWJsZSB2YWx1ZXMgb2YgdGhlIGRhdGFfdHlwZSBmaWVsZCAodGhvdWdoIHNlZSBpbmZsYXRlKCkpICovXG5jb25zdCBaX0JJTkFSWSAgICAgICAgICAgICAgPSAwO1xuY29uc3QgWl9URVhUICAgICAgICAgICAgICAgID0gMTtcbi8vY29uc3QgWl9BU0NJSSAgICAgICAgICAgICA9IDE7IC8vID0gWl9URVhUXG5jb25zdCBaX1VOS05PV04gICAgICAgICAgICAgPSAyO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbmZ1bmN0aW9uIHplcm8oYnVmKSB7IGxldCBsZW4gPSBidWYubGVuZ3RoOyB3aGlsZSAoLS1sZW4gPj0gMCkgeyBidWZbbGVuXSA9IDA7IH0gfVxuXG4vLyBGcm9tIHp1dGlsLmhcblxuY29uc3QgU1RPUkVEX0JMT0NLID0gMDtcbmNvbnN0IFNUQVRJQ19UUkVFUyA9IDE7XG5jb25zdCBEWU5fVFJFRVMgICAgPSAyO1xuLyogVGhlIHRocmVlIGtpbmRzIG9mIGJsb2NrIHR5cGUgKi9cblxuY29uc3QgTUlOX01BVENIICAgID0gMztcbmNvbnN0IE1BWF9NQVRDSCAgICA9IDI1ODtcbi8qIFRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIG1hdGNoIGxlbmd0aHMgKi9cblxuLy8gRnJvbSBkZWZsYXRlLmhcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW50ZXJuYWwgY29tcHJlc3Npb24gc3RhdGUuXG4gKi9cblxuY29uc3QgTEVOR1RIX0NPREVTICA9IDI5O1xuLyogbnVtYmVyIG9mIGxlbmd0aCBjb2Rlcywgbm90IGNvdW50aW5nIHRoZSBzcGVjaWFsIEVORF9CTE9DSyBjb2RlICovXG5cbmNvbnN0IExJVEVSQUxTICAgICAgPSAyNTY7XG4vKiBudW1iZXIgb2YgbGl0ZXJhbCBieXRlcyAwLi4yNTUgKi9cblxuY29uc3QgTF9DT0RFUyAgICAgICA9IExJVEVSQUxTICsgMSArIExFTkdUSF9DT0RFUztcbi8qIG51bWJlciBvZiBMaXRlcmFsIG9yIExlbmd0aCBjb2RlcywgaW5jbHVkaW5nIHRoZSBFTkRfQkxPQ0sgY29kZSAqL1xuXG5jb25zdCBEX0NPREVTICAgICAgID0gMzA7XG4vKiBudW1iZXIgb2YgZGlzdGFuY2UgY29kZXMgKi9cblxuY29uc3QgQkxfQ09ERVMgICAgICA9IDE5O1xuLyogbnVtYmVyIG9mIGNvZGVzIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGJpdCBsZW5ndGhzICovXG5cbmNvbnN0IEhFQVBfU0laRSAgICAgPSAyICogTF9DT0RFUyArIDE7XG4vKiBtYXhpbXVtIGhlYXAgc2l6ZSAqL1xuXG5jb25zdCBNQVhfQklUUyAgICAgID0gMTU7XG4vKiBBbGwgY29kZXMgbXVzdCBub3QgZXhjZWVkIE1BWF9CSVRTIGJpdHMgKi9cblxuY29uc3QgQnVmX3NpemUgICAgICA9IDE2O1xuLyogc2l6ZSBvZiBiaXQgYnVmZmVyIGluIGJpX2J1ZiAqL1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTUFYX0JMX0JJVFMgPSA3O1xuLyogQml0IGxlbmd0aCBjb2RlcyBtdXN0IG5vdCBleGNlZWQgTUFYX0JMX0JJVFMgYml0cyAqL1xuXG5jb25zdCBFTkRfQkxPQ0sgICA9IDI1Njtcbi8qIGVuZCBvZiBibG9jayBsaXRlcmFsIGNvZGUgKi9cblxuY29uc3QgUkVQXzNfNiAgICAgPSAxNjtcbi8qIHJlcGVhdCBwcmV2aW91cyBiaXQgbGVuZ3RoIDMtNiB0aW1lcyAoMiBiaXRzIG9mIHJlcGVhdCBjb3VudCkgKi9cblxuY29uc3QgUkVQWl8zXzEwICAgPSAxNztcbi8qIHJlcGVhdCBhIHplcm8gbGVuZ3RoIDMtMTAgdGltZXMgICgzIGJpdHMgb2YgcmVwZWF0IGNvdW50KSAqL1xuXG5jb25zdCBSRVBaXzExXzEzOCA9IDE4O1xuLyogcmVwZWF0IGEgemVybyBsZW5ndGggMTEtMTM4IHRpbWVzICAoNyBiaXRzIG9mIHJlcGVhdCBjb3VudCkgKi9cblxuLyogZXNsaW50LWRpc2FibGUgY29tbWEtc3BhY2luZyxhcnJheS1icmFja2V0LXNwYWNpbmcgKi9cbmNvbnN0IGV4dHJhX2xiaXRzID0gICAvKiBleHRyYSBiaXRzIGZvciBlYWNoIGxlbmd0aCBjb2RlICovXG4gIG5ldyBVaW50OEFycmF5KFswLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwyLDIsMiwyLDMsMywzLDMsNCw0LDQsNCw1LDUsNSw1LDBdKTtcblxuY29uc3QgZXh0cmFfZGJpdHMgPSAgIC8qIGV4dHJhIGJpdHMgZm9yIGVhY2ggZGlzdGFuY2UgY29kZSAqL1xuICBuZXcgVWludDhBcnJheShbMCwwLDAsMCwxLDEsMiwyLDMsMyw0LDQsNSw1LDYsNiw3LDcsOCw4LDksOSwxMCwxMCwxMSwxMSwxMiwxMiwxMywxM10pO1xuXG5jb25zdCBleHRyYV9ibGJpdHMgPSAgLyogZXh0cmEgYml0cyBmb3IgZWFjaCBiaXQgbGVuZ3RoIGNvZGUgKi9cbiAgbmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMiwzLDddKTtcblxuY29uc3QgYmxfb3JkZXIgPVxuICBuZXcgVWludDhBcnJheShbMTYsMTcsMTgsMCw4LDcsOSw2LDEwLDUsMTEsNCwxMiwzLDEzLDIsMTQsMSwxNV0pO1xuLyogZXNsaW50LWVuYWJsZSBjb21tYS1zcGFjaW5nLGFycmF5LWJyYWNrZXQtc3BhY2luZyAqL1xuXG4vKiBUaGUgbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aCBjb2RlcyBhcmUgc2VudCBpbiBvcmRlciBvZiBkZWNyZWFzaW5nXG4gKiBwcm9iYWJpbGl0eSwgdG8gYXZvaWQgdHJhbnNtaXR0aW5nIHRoZSBsZW5ndGhzIGZvciB1bnVzZWQgYml0IGxlbmd0aCBjb2Rlcy5cbiAqL1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIExvY2FsIGRhdGEuIFRoZXNlIGFyZSBpbml0aWFsaXplZCBvbmx5IG9uY2UuXG4gKi9cblxuLy8gV2UgcHJlLWZpbGwgYXJyYXlzIHdpdGggMCB0byBhdm9pZCB1bmluaXRpYWxpemVkIGdhcHNcblxuY29uc3QgRElTVF9DT0RFX0xFTiA9IDUxMjsgLyogc2VlIGRlZmluaXRpb24gb2YgYXJyYXkgZGlzdF9jb2RlIGJlbG93ICovXG5cbi8vICEhISEgVXNlIGZsYXQgYXJyYXkgaW5zdGVhZCBvZiBzdHJ1Y3R1cmUsIEZyZXEgPSBpKjIsIExlbiA9IGkqMisxXG5jb25zdCBzdGF0aWNfbHRyZWUgID0gbmV3IEFycmF5KChMX0NPREVTICsgMikgKiAyKTtcbnplcm8oc3RhdGljX2x0cmVlKTtcbi8qIFRoZSBzdGF0aWMgbGl0ZXJhbCB0cmVlLiBTaW5jZSB0aGUgYml0IGxlbmd0aHMgYXJlIGltcG9zZWQsIHRoZXJlIGlzIG5vXG4gKiBuZWVkIGZvciB0aGUgTF9DT0RFUyBleHRyYSBjb2RlcyB1c2VkIGR1cmluZyBoZWFwIGNvbnN0cnVjdGlvbi4gSG93ZXZlclxuICogVGhlIGNvZGVzIDI4NiBhbmQgMjg3IGFyZSBuZWVkZWQgdG8gYnVpbGQgYSBjYW5vbmljYWwgdHJlZSAoc2VlIF90cl9pbml0XG4gKiBiZWxvdykuXG4gKi9cblxuY29uc3Qgc3RhdGljX2R0cmVlICA9IG5ldyBBcnJheShEX0NPREVTICogMik7XG56ZXJvKHN0YXRpY19kdHJlZSk7XG4vKiBUaGUgc3RhdGljIGRpc3RhbmNlIHRyZWUuIChBY3R1YWxseSBhIHRyaXZpYWwgdHJlZSBzaW5jZSBhbGwgY29kZXMgdXNlXG4gKiA1IGJpdHMuKVxuICovXG5cbmNvbnN0IF9kaXN0X2NvZGUgICAgPSBuZXcgQXJyYXkoRElTVF9DT0RFX0xFTik7XG56ZXJvKF9kaXN0X2NvZGUpO1xuLyogRGlzdGFuY2UgY29kZXMuIFRoZSBmaXJzdCAyNTYgdmFsdWVzIGNvcnJlc3BvbmQgdG8gdGhlIGRpc3RhbmNlc1xuICogMyAuLiAyNTgsIHRoZSBsYXN0IDI1NiB2YWx1ZXMgY29ycmVzcG9uZCB0byB0aGUgdG9wIDggYml0cyBvZlxuICogdGhlIDE1IGJpdCBkaXN0YW5jZXMuXG4gKi9cblxuY29uc3QgX2xlbmd0aF9jb2RlICA9IG5ldyBBcnJheShNQVhfTUFUQ0ggLSBNSU5fTUFUQ0ggKyAxKTtcbnplcm8oX2xlbmd0aF9jb2RlKTtcbi8qIGxlbmd0aCBjb2RlIGZvciBlYWNoIG5vcm1hbGl6ZWQgbWF0Y2ggbGVuZ3RoICgwID09IE1JTl9NQVRDSCkgKi9cblxuY29uc3QgYmFzZV9sZW5ndGggICA9IG5ldyBBcnJheShMRU5HVEhfQ09ERVMpO1xuemVybyhiYXNlX2xlbmd0aCk7XG4vKiBGaXJzdCBub3JtYWxpemVkIGxlbmd0aCBmb3IgZWFjaCBjb2RlICgwID0gTUlOX01BVENIKSAqL1xuXG5jb25zdCBiYXNlX2Rpc3QgICAgID0gbmV3IEFycmF5KERfQ09ERVMpO1xuemVybyhiYXNlX2Rpc3QpO1xuLyogRmlyc3Qgbm9ybWFsaXplZCBkaXN0YW5jZSBmb3IgZWFjaCBjb2RlICgwID0gZGlzdGFuY2Ugb2YgMSkgKi9cblxuXG5mdW5jdGlvbiBTdGF0aWNUcmVlRGVzYyhzdGF0aWNfdHJlZSwgZXh0cmFfYml0cywgZXh0cmFfYmFzZSwgZWxlbXMsIG1heF9sZW5ndGgpIHtcblxuICB0aGlzLnN0YXRpY190cmVlICA9IHN0YXRpY190cmVlOyAgLyogc3RhdGljIHRyZWUgb3IgTlVMTCAqL1xuICB0aGlzLmV4dHJhX2JpdHMgICA9IGV4dHJhX2JpdHM7ICAgLyogZXh0cmEgYml0cyBmb3IgZWFjaCBjb2RlIG9yIE5VTEwgKi9cbiAgdGhpcy5leHRyYV9iYXNlICAgPSBleHRyYV9iYXNlOyAgIC8qIGJhc2UgaW5kZXggZm9yIGV4dHJhX2JpdHMgKi9cbiAgdGhpcy5lbGVtcyAgICAgICAgPSBlbGVtczsgICAgICAgIC8qIG1heCBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIHRyZWUgKi9cbiAgdGhpcy5tYXhfbGVuZ3RoICAgPSBtYXhfbGVuZ3RoOyAgIC8qIG1heCBiaXQgbGVuZ3RoIGZvciB0aGUgY29kZXMgKi9cblxuICAvLyBzaG93IGlmIGBzdGF0aWNfdHJlZWAgaGFzIGRhdGEgb3IgZHVtbXkgLSBuZWVkZWQgZm9yIG1vbm9tb3JwaGljIG9iamVjdHNcbiAgdGhpcy5oYXNfc3RyZWUgICAgPSBzdGF0aWNfdHJlZSAmJiBzdGF0aWNfdHJlZS5sZW5ndGg7XG59XG5cblxubGV0IHN0YXRpY19sX2Rlc2M7XG5sZXQgc3RhdGljX2RfZGVzYztcbmxldCBzdGF0aWNfYmxfZGVzYztcblxuXG5mdW5jdGlvbiBUcmVlRGVzYyhkeW5fdHJlZSwgc3RhdF9kZXNjKSB7XG4gIHRoaXMuZHluX3RyZWUgPSBkeW5fdHJlZTsgICAgIC8qIHRoZSBkeW5hbWljIHRyZWUgKi9cbiAgdGhpcy5tYXhfY29kZSA9IDA7ICAgICAgICAgICAgLyogbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5ICovXG4gIHRoaXMuc3RhdF9kZXNjID0gc3RhdF9kZXNjOyAgIC8qIHRoZSBjb3JyZXNwb25kaW5nIHN0YXRpYyB0cmVlICovXG59XG5cblxuXG5jb25zdCBkX2NvZGUgPSAoZGlzdCkgPT4ge1xuXG4gIHJldHVybiBkaXN0IDwgMjU2ID8gX2Rpc3RfY29kZVtkaXN0XSA6IF9kaXN0X2NvZGVbMjU2ICsgKGRpc3QgPj4+IDcpXTtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBPdXRwdXQgYSBzaG9ydCBMU0IgZmlyc3Qgb24gdGhlIHN0cmVhbS5cbiAqIElOIGFzc2VydGlvbjogdGhlcmUgaXMgZW5vdWdoIHJvb20gaW4gcGVuZGluZ0J1Zi5cbiAqL1xuY29uc3QgcHV0X3Nob3J0ID0gKHMsIHcpID0+IHtcbi8vICAgIHB1dF9ieXRlKHMsICh1Y2gpKCh3KSAmIDB4ZmYpKTtcbi8vICAgIHB1dF9ieXRlKHMsICh1Y2gpKCh1c2gpKHcpID4+IDgpKTtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSAodykgJiAweGZmO1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9ICh3ID4+PiA4KSAmIDB4ZmY7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBhIHZhbHVlIG9uIGEgZ2l2ZW4gbnVtYmVyIG9mIGJpdHMuXG4gKiBJTiBhc3NlcnRpb246IGxlbmd0aCA8PSAxNiBhbmQgdmFsdWUgZml0cyBpbiBsZW5ndGggYml0cy5cbiAqL1xuY29uc3Qgc2VuZF9iaXRzID0gKHMsIHZhbHVlLCBsZW5ndGgpID0+IHtcblxuICBpZiAocy5iaV92YWxpZCA+IChCdWZfc2l6ZSAtIGxlbmd0aCkpIHtcbiAgICBzLmJpX2J1ZiB8PSAodmFsdWUgPDwgcy5iaV92YWxpZCkgJiAweGZmZmY7XG4gICAgcHV0X3Nob3J0KHMsIHMuYmlfYnVmKTtcbiAgICBzLmJpX2J1ZiA9IHZhbHVlID4+IChCdWZfc2l6ZSAtIHMuYmlfdmFsaWQpO1xuICAgIHMuYmlfdmFsaWQgKz0gbGVuZ3RoIC0gQnVmX3NpemU7XG4gIH0gZWxzZSB7XG4gICAgcy5iaV9idWYgfD0gKHZhbHVlIDw8IHMuYmlfdmFsaWQpICYgMHhmZmZmO1xuICAgIHMuYmlfdmFsaWQgKz0gbGVuZ3RoO1xuICB9XG59O1xuXG5cbmNvbnN0IHNlbmRfY29kZSA9IChzLCBjLCB0cmVlKSA9PiB7XG5cbiAgc2VuZF9iaXRzKHMsIHRyZWVbYyAqIDJdLyouQ29kZSovLCB0cmVlW2MgKiAyICsgMV0vKi5MZW4qLyk7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmV2ZXJzZSB0aGUgZmlyc3QgbGVuIGJpdHMgb2YgYSBjb2RlLCB1c2luZyBzdHJhaWdodGZvcndhcmQgY29kZSAoYSBmYXN0ZXJcbiAqIG1ldGhvZCB3b3VsZCB1c2UgYSB0YWJsZSlcbiAqIElOIGFzc2VydGlvbjogMSA8PSBsZW4gPD0gMTVcbiAqL1xuY29uc3QgYmlfcmV2ZXJzZSA9IChjb2RlLCBsZW4pID0+IHtcblxuICBsZXQgcmVzID0gMDtcbiAgZG8ge1xuICAgIHJlcyB8PSBjb2RlICYgMTtcbiAgICBjb2RlID4+Pj0gMTtcbiAgICByZXMgPDw9IDE7XG4gIH0gd2hpbGUgKC0tbGVuID4gMCk7XG4gIHJldHVybiByZXMgPj4+IDE7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRmx1c2ggdGhlIGJpdCBidWZmZXIsIGtlZXBpbmcgYXQgbW9zdCA3IGJpdHMgaW4gaXQuXG4gKi9cbmNvbnN0IGJpX2ZsdXNoID0gKHMpID0+IHtcblxuICBpZiAocy5iaV92YWxpZCA9PT0gMTYpIHtcbiAgICBwdXRfc2hvcnQocywgcy5iaV9idWYpO1xuICAgIHMuYmlfYnVmID0gMDtcbiAgICBzLmJpX3ZhbGlkID0gMDtcblxuICB9IGVsc2UgaWYgKHMuYmlfdmFsaWQgPj0gOCkge1xuICAgIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gcy5iaV9idWYgJiAweGZmO1xuICAgIHMuYmlfYnVmID4+PSA4O1xuICAgIHMuYmlfdmFsaWQgLT0gODtcbiAgfVxufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbXB1dGUgdGhlIG9wdGltYWwgYml0IGxlbmd0aHMgZm9yIGEgdHJlZSBhbmQgdXBkYXRlIHRoZSB0b3RhbCBiaXQgbGVuZ3RoXG4gKiBmb3IgdGhlIGN1cnJlbnQgYmxvY2suXG4gKiBJTiBhc3NlcnRpb246IHRoZSBmaWVsZHMgZnJlcSBhbmQgZGFkIGFyZSBzZXQsIGhlYXBbaGVhcF9tYXhdIGFuZFxuICogICAgYWJvdmUgYXJlIHRoZSB0cmVlIG5vZGVzIHNvcnRlZCBieSBpbmNyZWFzaW5nIGZyZXF1ZW5jeS5cbiAqIE9VVCBhc3NlcnRpb25zOiB0aGUgZmllbGQgbGVuIGlzIHNldCB0byB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RoLCB0aGVcbiAqICAgICBhcnJheSBibF9jb3VudCBjb250YWlucyB0aGUgZnJlcXVlbmNpZXMgZm9yIGVhY2ggYml0IGxlbmd0aC5cbiAqICAgICBUaGUgbGVuZ3RoIG9wdF9sZW4gaXMgdXBkYXRlZDsgc3RhdGljX2xlbiBpcyBhbHNvIHVwZGF0ZWQgaWYgc3RyZWUgaXNcbiAqICAgICBub3QgbnVsbC5cbiAqL1xuY29uc3QgZ2VuX2JpdGxlbiA9IChzLCBkZXNjKSA9PiB7XG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgdHJlZV9kZXNjICpkZXNjOyAgICAvKiB0aGUgdHJlZSBkZXNjcmlwdG9yICovXG5cbiAgY29uc3QgdHJlZSAgICAgICAgICAgID0gZGVzYy5keW5fdHJlZTtcbiAgY29uc3QgbWF4X2NvZGUgICAgICAgID0gZGVzYy5tYXhfY29kZTtcbiAgY29uc3Qgc3RyZWUgICAgICAgICAgID0gZGVzYy5zdGF0X2Rlc2Muc3RhdGljX3RyZWU7XG4gIGNvbnN0IGhhc19zdHJlZSAgICAgICA9IGRlc2Muc3RhdF9kZXNjLmhhc19zdHJlZTtcbiAgY29uc3QgZXh0cmEgICAgICAgICAgID0gZGVzYy5zdGF0X2Rlc2MuZXh0cmFfYml0cztcbiAgY29uc3QgYmFzZSAgICAgICAgICAgID0gZGVzYy5zdGF0X2Rlc2MuZXh0cmFfYmFzZTtcbiAgY29uc3QgbWF4X2xlbmd0aCAgICAgID0gZGVzYy5zdGF0X2Rlc2MubWF4X2xlbmd0aDtcbiAgbGV0IGg7ICAgICAgICAgICAgICAvKiBoZWFwIGluZGV4ICovXG4gIGxldCBuLCBtOyAgICAgICAgICAgLyogaXRlcmF0ZSBvdmVyIHRoZSB0cmVlIGVsZW1lbnRzICovXG4gIGxldCBiaXRzOyAgICAgICAgICAgLyogYml0IGxlbmd0aCAqL1xuICBsZXQgeGJpdHM7ICAgICAgICAgIC8qIGV4dHJhIGJpdHMgKi9cbiAgbGV0IGY7ICAgICAgICAgICAgICAvKiBmcmVxdWVuY3kgKi9cbiAgbGV0IG92ZXJmbG93ID0gMDsgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgd2l0aCBiaXQgbGVuZ3RoIHRvbyBsYXJnZSAqL1xuXG4gIGZvciAoYml0cyA9IDA7IGJpdHMgPD0gTUFYX0JJVFM7IGJpdHMrKykge1xuICAgIHMuYmxfY291bnRbYml0c10gPSAwO1xuICB9XG5cbiAgLyogSW4gYSBmaXJzdCBwYXNzLCBjb21wdXRlIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhzICh3aGljaCBtYXlcbiAgICogb3ZlcmZsb3cgaW4gdGhlIGNhc2Ugb2YgdGhlIGJpdCBsZW5ndGggdHJlZSkuXG4gICAqL1xuICB0cmVlW3MuaGVhcFtzLmhlYXBfbWF4XSAqIDIgKyAxXS8qLkxlbiovID0gMDsgLyogcm9vdCBvZiB0aGUgaGVhcCAqL1xuXG4gIGZvciAoaCA9IHMuaGVhcF9tYXggKyAxOyBoIDwgSEVBUF9TSVpFOyBoKyspIHtcbiAgICBuID0gcy5oZWFwW2hdO1xuICAgIGJpdHMgPSB0cmVlW3RyZWVbbiAqIDIgKyAxXS8qLkRhZCovICogMiArIDFdLyouTGVuKi8gKyAxO1xuICAgIGlmIChiaXRzID4gbWF4X2xlbmd0aCkge1xuICAgICAgYml0cyA9IG1heF9sZW5ndGg7XG4gICAgICBvdmVyZmxvdysrO1xuICAgIH1cbiAgICB0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IGJpdHM7XG4gICAgLyogV2Ugb3ZlcndyaXRlIHRyZWVbbl0uRGFkIHdoaWNoIGlzIG5vIGxvbmdlciBuZWVkZWQgKi9cblxuICAgIGlmIChuID4gbWF4X2NvZGUpIHsgY29udGludWU7IH0gLyogbm90IGEgbGVhZiBub2RlICovXG5cbiAgICBzLmJsX2NvdW50W2JpdHNdKys7XG4gICAgeGJpdHMgPSAwO1xuICAgIGlmIChuID49IGJhc2UpIHtcbiAgICAgIHhiaXRzID0gZXh0cmFbbiAtIGJhc2VdO1xuICAgIH1cbiAgICBmID0gdHJlZVtuICogMl0vKi5GcmVxKi87XG4gICAgcy5vcHRfbGVuICs9IGYgKiAoYml0cyArIHhiaXRzKTtcbiAgICBpZiAoaGFzX3N0cmVlKSB7XG4gICAgICBzLnN0YXRpY19sZW4gKz0gZiAqIChzdHJlZVtuICogMiArIDFdLyouTGVuKi8gKyB4Yml0cyk7XG4gICAgfVxuICB9XG4gIGlmIChvdmVyZmxvdyA9PT0gMCkgeyByZXR1cm47IH1cblxuICAvLyBUcmFjZXYoKHN0ZGVycixcIlxcbmJpdCBsZW5ndGggb3ZlcmZsb3dcXG5cIikpO1xuICAvKiBUaGlzIGhhcHBlbnMgZm9yIGV4YW1wbGUgb24gb2JqMiBhbmQgcGljIG9mIHRoZSBDYWxnYXJ5IGNvcnB1cyAqL1xuXG4gIC8qIEZpbmQgdGhlIGZpcnN0IGJpdCBsZW5ndGggd2hpY2ggY291bGQgaW5jcmVhc2U6ICovXG4gIGRvIHtcbiAgICBiaXRzID0gbWF4X2xlbmd0aCAtIDE7XG4gICAgd2hpbGUgKHMuYmxfY291bnRbYml0c10gPT09IDApIHsgYml0cy0tOyB9XG4gICAgcy5ibF9jb3VudFtiaXRzXS0tOyAgICAgIC8qIG1vdmUgb25lIGxlYWYgZG93biB0aGUgdHJlZSAqL1xuICAgIHMuYmxfY291bnRbYml0cyArIDFdICs9IDI7IC8qIG1vdmUgb25lIG92ZXJmbG93IGl0ZW0gYXMgaXRzIGJyb3RoZXIgKi9cbiAgICBzLmJsX2NvdW50W21heF9sZW5ndGhdLS07XG4gICAgLyogVGhlIGJyb3RoZXIgb2YgdGhlIG92ZXJmbG93IGl0ZW0gYWxzbyBtb3ZlcyBvbmUgc3RlcCB1cCxcbiAgICAgKiBidXQgdGhpcyBkb2VzIG5vdCBhZmZlY3QgYmxfY291bnRbbWF4X2xlbmd0aF1cbiAgICAgKi9cbiAgICBvdmVyZmxvdyAtPSAyO1xuICB9IHdoaWxlIChvdmVyZmxvdyA+IDApO1xuXG4gIC8qIE5vdyByZWNvbXB1dGUgYWxsIGJpdCBsZW5ndGhzLCBzY2FubmluZyBpbiBpbmNyZWFzaW5nIGZyZXF1ZW5jeS5cbiAgICogaCBpcyBzdGlsbCBlcXVhbCB0byBIRUFQX1NJWkUuIChJdCBpcyBzaW1wbGVyIHRvIHJlY29uc3RydWN0IGFsbFxuICAgKiBsZW5ndGhzIGluc3RlYWQgb2YgZml4aW5nIG9ubHkgdGhlIHdyb25nIG9uZXMuIFRoaXMgaWRlYSBpcyB0YWtlblxuICAgKiBmcm9tICdhcicgd3JpdHRlbiBieSBIYXJ1aGlrbyBPa3VtdXJhLilcbiAgICovXG4gIGZvciAoYml0cyA9IG1heF9sZW5ndGg7IGJpdHMgIT09IDA7IGJpdHMtLSkge1xuICAgIG4gPSBzLmJsX2NvdW50W2JpdHNdO1xuICAgIHdoaWxlIChuICE9PSAwKSB7XG4gICAgICBtID0gcy5oZWFwWy0taF07XG4gICAgICBpZiAobSA+IG1heF9jb2RlKSB7IGNvbnRpbnVlOyB9XG4gICAgICBpZiAodHJlZVttICogMiArIDFdLyouTGVuKi8gIT09IGJpdHMpIHtcbiAgICAgICAgLy8gVHJhY2V2KChzdGRlcnIsXCJjb2RlICVkIGJpdHMgJWQtPiVkXFxuXCIsIG0sIHRyZWVbbV0uTGVuLCBiaXRzKSk7XG4gICAgICAgIHMub3B0X2xlbiArPSAoYml0cyAtIHRyZWVbbSAqIDIgKyAxXS8qLkxlbiovKSAqIHRyZWVbbSAqIDJdLyouRnJlcSovO1xuICAgICAgICB0cmVlW20gKiAyICsgMV0vKi5MZW4qLyA9IGJpdHM7XG4gICAgICB9XG4gICAgICBuLS07XG4gICAgfVxuICB9XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogR2VuZXJhdGUgdGhlIGNvZGVzIGZvciBhIGdpdmVuIHRyZWUgYW5kIGJpdCBjb3VudHMgKHdoaWNoIG5lZWQgbm90IGJlXG4gKiBvcHRpbWFsKS5cbiAqIElOIGFzc2VydGlvbjogdGhlIGFycmF5IGJsX2NvdW50IGNvbnRhaW5zIHRoZSBiaXQgbGVuZ3RoIHN0YXRpc3RpY3MgZm9yXG4gKiB0aGUgZ2l2ZW4gdHJlZSBhbmQgdGhlIGZpZWxkIGxlbiBpcyBzZXQgZm9yIGFsbCB0cmVlIGVsZW1lbnRzLlxuICogT1VUIGFzc2VydGlvbjogdGhlIGZpZWxkIGNvZGUgaXMgc2V0IGZvciBhbGwgdHJlZSBlbGVtZW50cyBvZiBub25cbiAqICAgICB6ZXJvIGNvZGUgbGVuZ3RoLlxuICovXG5jb25zdCBnZW5fY29kZXMgPSAodHJlZSwgbWF4X2NvZGUsIGJsX2NvdW50KSA9PiB7XG4vLyAgICBjdF9kYXRhICp0cmVlOyAgICAgICAgICAgICAvKiB0aGUgdHJlZSB0byBkZWNvcmF0ZSAqL1xuLy8gICAgaW50IG1heF9jb2RlOyAgICAgICAgICAgICAgLyogbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5ICovXG4vLyAgICB1c2hmICpibF9jb3VudDsgICAgICAgICAgICAvKiBudW1iZXIgb2YgY29kZXMgYXQgZWFjaCBiaXQgbGVuZ3RoICovXG5cbiAgY29uc3QgbmV4dF9jb2RlID0gbmV3IEFycmF5KE1BWF9CSVRTICsgMSk7IC8qIG5leHQgY29kZSB2YWx1ZSBmb3IgZWFjaCBiaXQgbGVuZ3RoICovXG4gIGxldCBjb2RlID0gMDsgICAgICAgICAgICAgIC8qIHJ1bm5pbmcgY29kZSB2YWx1ZSAqL1xuICBsZXQgYml0czsgICAgICAgICAgICAgICAgICAvKiBiaXQgaW5kZXggKi9cbiAgbGV0IG47ICAgICAgICAgICAgICAgICAgICAgLyogY29kZSBpbmRleCAqL1xuXG4gIC8qIFRoZSBkaXN0cmlidXRpb24gY291bnRzIGFyZSBmaXJzdCB1c2VkIHRvIGdlbmVyYXRlIHRoZSBjb2RlIHZhbHVlc1xuICAgKiB3aXRob3V0IGJpdCByZXZlcnNhbC5cbiAgICovXG4gIGZvciAoYml0cyA9IDE7IGJpdHMgPD0gTUFYX0JJVFM7IGJpdHMrKykge1xuICAgIGNvZGUgPSAoY29kZSArIGJsX2NvdW50W2JpdHMgLSAxXSkgPDwgMTtcbiAgICBuZXh0X2NvZGVbYml0c10gPSBjb2RlO1xuICB9XG4gIC8qIENoZWNrIHRoYXQgdGhlIGJpdCBjb3VudHMgaW4gYmxfY291bnQgYXJlIGNvbnNpc3RlbnQuIFRoZSBsYXN0IGNvZGVcbiAgICogbXVzdCBiZSBhbGwgb25lcy5cbiAgICovXG4gIC8vQXNzZXJ0IChjb2RlICsgYmxfY291bnRbTUFYX0JJVFNdLTEgPT0gKDE8PE1BWF9CSVRTKS0xLFxuICAvLyAgICAgICAgXCJpbmNvbnNpc3RlbnQgYml0IGNvdW50c1wiKTtcbiAgLy9UcmFjZXYoKHN0ZGVycixcIlxcbmdlbl9jb2RlczogbWF4X2NvZGUgJWQgXCIsIG1heF9jb2RlKSk7XG5cbiAgZm9yIChuID0gMDsgIG4gPD0gbWF4X2NvZGU7IG4rKykge1xuICAgIGxldCBsZW4gPSB0cmVlW24gKiAyICsgMV0vKi5MZW4qLztcbiAgICBpZiAobGVuID09PSAwKSB7IGNvbnRpbnVlOyB9XG4gICAgLyogTm93IHJldmVyc2UgdGhlIGJpdHMgKi9cbiAgICB0cmVlW24gKiAyXS8qLkNvZGUqLyA9IGJpX3JldmVyc2UobmV4dF9jb2RlW2xlbl0rKywgbGVuKTtcblxuICAgIC8vVHJhY2Vjdih0cmVlICE9IHN0YXRpY19sdHJlZSwgKHN0ZGVycixcIlxcbm4gJTNkICVjIGwgJTJkIGMgJTR4ICgleCkgXCIsXG4gICAgLy8gICAgIG4sIChpc2dyYXBoKG4pID8gbiA6ICcgJyksIGxlbiwgdHJlZVtuXS5Db2RlLCBuZXh0X2NvZGVbbGVuXS0xKSk7XG4gIH1cbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIHRoZSB2YXJpb3VzICdjb25zdGFudCcgdGFibGVzLlxuICovXG5jb25zdCB0cl9zdGF0aWNfaW5pdCA9ICgpID0+IHtcblxuICBsZXQgbjsgICAgICAgIC8qIGl0ZXJhdGVzIG92ZXIgdHJlZSBlbGVtZW50cyAqL1xuICBsZXQgYml0czsgICAgIC8qIGJpdCBjb3VudGVyICovXG4gIGxldCBsZW5ndGg7ICAgLyogbGVuZ3RoIHZhbHVlICovXG4gIGxldCBjb2RlOyAgICAgLyogY29kZSB2YWx1ZSAqL1xuICBsZXQgZGlzdDsgICAgIC8qIGRpc3RhbmNlIGluZGV4ICovXG4gIGNvbnN0IGJsX2NvdW50ID0gbmV3IEFycmF5KE1BWF9CSVRTICsgMSk7XG4gIC8qIG51bWJlciBvZiBjb2RlcyBhdCBlYWNoIGJpdCBsZW5ndGggZm9yIGFuIG9wdGltYWwgdHJlZSAqL1xuXG4gIC8vIGRvIGNoZWNrIGluIF90cl9pbml0KClcbiAgLy9pZiAoc3RhdGljX2luaXRfZG9uZSkgcmV0dXJuO1xuXG4gIC8qIEZvciBzb21lIGVtYmVkZGVkIHRhcmdldHMsIGdsb2JhbCB2YXJpYWJsZXMgYXJlIG5vdCBpbml0aWFsaXplZDogKi9cbi8qI2lmZGVmIE5PX0lOSVRfR0xPQkFMX1BPSU5URVJTXG4gIHN0YXRpY19sX2Rlc2Muc3RhdGljX3RyZWUgPSBzdGF0aWNfbHRyZWU7XG4gIHN0YXRpY19sX2Rlc2MuZXh0cmFfYml0cyA9IGV4dHJhX2xiaXRzO1xuICBzdGF0aWNfZF9kZXNjLnN0YXRpY190cmVlID0gc3RhdGljX2R0cmVlO1xuICBzdGF0aWNfZF9kZXNjLmV4dHJhX2JpdHMgPSBleHRyYV9kYml0cztcbiAgc3RhdGljX2JsX2Rlc2MuZXh0cmFfYml0cyA9IGV4dHJhX2JsYml0cztcbiNlbmRpZiovXG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgbWFwcGluZyBsZW5ndGggKDAuLjI1NSkgLT4gbGVuZ3RoIGNvZGUgKDAuLjI4KSAqL1xuICBsZW5ndGggPSAwO1xuICBmb3IgKGNvZGUgPSAwOyBjb2RlIDwgTEVOR1RIX0NPREVTIC0gMTsgY29kZSsrKSB7XG4gICAgYmFzZV9sZW5ndGhbY29kZV0gPSBsZW5ndGg7XG4gICAgZm9yIChuID0gMDsgbiA8ICgxIDw8IGV4dHJhX2xiaXRzW2NvZGVdKTsgbisrKSB7XG4gICAgICBfbGVuZ3RoX2NvZGVbbGVuZ3RoKytdID0gY29kZTtcbiAgICB9XG4gIH1cbiAgLy9Bc3NlcnQgKGxlbmd0aCA9PSAyNTYsIFwidHJfc3RhdGljX2luaXQ6IGxlbmd0aCAhPSAyNTZcIik7XG4gIC8qIE5vdGUgdGhhdCB0aGUgbGVuZ3RoIDI1NSAobWF0Y2ggbGVuZ3RoIDI1OCkgY2FuIGJlIHJlcHJlc2VudGVkXG4gICAqIGluIHR3byBkaWZmZXJlbnQgd2F5czogY29kZSAyODQgKyA1IGJpdHMgb3IgY29kZSAyODUsIHNvIHdlXG4gICAqIG92ZXJ3cml0ZSBsZW5ndGhfY29kZVsyNTVdIHRvIHVzZSB0aGUgYmVzdCBlbmNvZGluZzpcbiAgICovXG4gIF9sZW5ndGhfY29kZVtsZW5ndGggLSAxXSA9IGNvZGU7XG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgbWFwcGluZyBkaXN0ICgwLi4zMkspIC0+IGRpc3QgY29kZSAoMC4uMjkpICovXG4gIGRpc3QgPSAwO1xuICBmb3IgKGNvZGUgPSAwOyBjb2RlIDwgMTY7IGNvZGUrKykge1xuICAgIGJhc2VfZGlzdFtjb2RlXSA9IGRpc3Q7XG4gICAgZm9yIChuID0gMDsgbiA8ICgxIDw8IGV4dHJhX2RiaXRzW2NvZGVdKTsgbisrKSB7XG4gICAgICBfZGlzdF9jb2RlW2Rpc3QrK10gPSBjb2RlO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAoZGlzdCA9PSAyNTYsIFwidHJfc3RhdGljX2luaXQ6IGRpc3QgIT0gMjU2XCIpO1xuICBkaXN0ID4+PSA3OyAvKiBmcm9tIG5vdyBvbiwgYWxsIGRpc3RhbmNlcyBhcmUgZGl2aWRlZCBieSAxMjggKi9cbiAgZm9yICg7IGNvZGUgPCBEX0NPREVTOyBjb2RlKyspIHtcbiAgICBiYXNlX2Rpc3RbY29kZV0gPSBkaXN0IDw8IDc7XG4gICAgZm9yIChuID0gMDsgbiA8ICgxIDw8IChleHRyYV9kYml0c1tjb2RlXSAtIDcpKTsgbisrKSB7XG4gICAgICBfZGlzdF9jb2RlWzI1NiArIGRpc3QrK10gPSBjb2RlO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAoZGlzdCA9PSAyNTYsIFwidHJfc3RhdGljX2luaXQ6IDI1NitkaXN0ICE9IDUxMlwiKTtcblxuICAvKiBDb25zdHJ1Y3QgdGhlIGNvZGVzIG9mIHRoZSBzdGF0aWMgbGl0ZXJhbCB0cmVlICovXG4gIGZvciAoYml0cyA9IDA7IGJpdHMgPD0gTUFYX0JJVFM7IGJpdHMrKykge1xuICAgIGJsX2NvdW50W2JpdHNdID0gMDtcbiAgfVxuXG4gIG4gPSAwO1xuICB3aGlsZSAobiA8PSAxNDMpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gODtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOF0rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyNTUpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gOTtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOV0rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyNzkpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gNztcbiAgICBuKys7XG4gICAgYmxfY291bnRbN10rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyODcpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gODtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOF0rKztcbiAgfVxuICAvKiBDb2RlcyAyODYgYW5kIDI4NyBkbyBub3QgZXhpc3QsIGJ1dCB3ZSBtdXN0IGluY2x1ZGUgdGhlbSBpbiB0aGVcbiAgICogdHJlZSBjb25zdHJ1Y3Rpb24gdG8gZ2V0IGEgY2Fub25pY2FsIEh1ZmZtYW4gdHJlZSAobG9uZ2VzdCBjb2RlXG4gICAqIGFsbCBvbmVzKVxuICAgKi9cbiAgZ2VuX2NvZGVzKHN0YXRpY19sdHJlZSwgTF9DT0RFUyArIDEsIGJsX2NvdW50KTtcblxuICAvKiBUaGUgc3RhdGljIGRpc3RhbmNlIHRyZWUgaXMgdHJpdmlhbDogKi9cbiAgZm9yIChuID0gMDsgbiA8IERfQ09ERVM7IG4rKykge1xuICAgIHN0YXRpY19kdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA1O1xuICAgIHN0YXRpY19kdHJlZVtuICogMl0vKi5Db2RlKi8gPSBiaV9yZXZlcnNlKG4sIDUpO1xuICB9XG5cbiAgLy8gTm93IGRhdGEgcmVhZHkgYW5kIHdlIGNhbiBpbml0IHN0YXRpYyB0cmVlc1xuICBzdGF0aWNfbF9kZXNjID0gbmV3IFN0YXRpY1RyZWVEZXNjKHN0YXRpY19sdHJlZSwgZXh0cmFfbGJpdHMsIExJVEVSQUxTICsgMSwgTF9DT0RFUywgTUFYX0JJVFMpO1xuICBzdGF0aWNfZF9kZXNjID0gbmV3IFN0YXRpY1RyZWVEZXNjKHN0YXRpY19kdHJlZSwgZXh0cmFfZGJpdHMsIDAsICAgICAgICAgIERfQ09ERVMsIE1BWF9CSVRTKTtcbiAgc3RhdGljX2JsX2Rlc2MgPSBuZXcgU3RhdGljVHJlZURlc2MobmV3IEFycmF5KDApLCBleHRyYV9ibGJpdHMsIDAsICAgICAgICAgQkxfQ09ERVMsIE1BWF9CTF9CSVRTKTtcblxuICAvL3N0YXRpY19pbml0X2RvbmUgPSB0cnVlO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEluaXRpYWxpemUgYSBuZXcgYmxvY2suXG4gKi9cbmNvbnN0IGluaXRfYmxvY2sgPSAocykgPT4ge1xuXG4gIGxldCBuOyAvKiBpdGVyYXRlcyBvdmVyIHRyZWUgZWxlbWVudHMgKi9cblxuICAvKiBJbml0aWFsaXplIHRoZSB0cmVlcy4gKi9cbiAgZm9yIChuID0gMDsgbiA8IExfQ09ERVM7ICBuKyspIHsgcy5keW5fbHRyZWVbbiAqIDJdLyouRnJlcSovID0gMDsgfVxuICBmb3IgKG4gPSAwOyBuIDwgRF9DT0RFUzsgIG4rKykgeyBzLmR5bl9kdHJlZVtuICogMl0vKi5GcmVxKi8gPSAwOyB9XG4gIGZvciAobiA9IDA7IG4gPCBCTF9DT0RFUzsgbisrKSB7IHMuYmxfdHJlZVtuICogMl0vKi5GcmVxKi8gPSAwOyB9XG5cbiAgcy5keW5fbHRyZWVbRU5EX0JMT0NLICogMl0vKi5GcmVxKi8gPSAxO1xuICBzLm9wdF9sZW4gPSBzLnN0YXRpY19sZW4gPSAwO1xuICBzLnN5bV9uZXh0ID0gcy5tYXRjaGVzID0gMDtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGbHVzaCB0aGUgYml0IGJ1ZmZlciBhbmQgYWxpZ24gdGhlIG91dHB1dCBvbiBhIGJ5dGUgYm91bmRhcnlcbiAqL1xuY29uc3QgYmlfd2luZHVwID0gKHMpID0+XG57XG4gIGlmIChzLmJpX3ZhbGlkID4gOCkge1xuICAgIHB1dF9zaG9ydChzLCBzLmJpX2J1Zik7XG4gIH0gZWxzZSBpZiAocy5iaV92YWxpZCA+IDApIHtcbiAgICAvL3B1dF9ieXRlKHMsIChCeXRlKXMtPmJpX2J1Zik7XG4gICAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSBzLmJpX2J1ZjtcbiAgfVxuICBzLmJpX2J1ZiA9IDA7XG4gIHMuYmlfdmFsaWQgPSAwO1xufTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb21wYXJlcyB0byBzdWJ0cmVlcywgdXNpbmcgdGhlIHRyZWUgZGVwdGggYXMgdGllIGJyZWFrZXIgd2hlblxuICogdGhlIHN1YnRyZWVzIGhhdmUgZXF1YWwgZnJlcXVlbmN5LiBUaGlzIG1pbmltaXplcyB0aGUgd29yc3QgY2FzZSBsZW5ndGguXG4gKi9cbmNvbnN0IHNtYWxsZXIgPSAodHJlZSwgbiwgbSwgZGVwdGgpID0+IHtcblxuICBjb25zdCBfbjIgPSBuICogMjtcbiAgY29uc3QgX20yID0gbSAqIDI7XG4gIHJldHVybiAodHJlZVtfbjJdLyouRnJlcSovIDwgdHJlZVtfbTJdLyouRnJlcSovIHx8XG4gICAgICAgICAodHJlZVtfbjJdLyouRnJlcSovID09PSB0cmVlW19tMl0vKi5GcmVxKi8gJiYgZGVwdGhbbl0gPD0gZGVwdGhbbV0pKTtcbn07XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmVzdG9yZSB0aGUgaGVhcCBwcm9wZXJ0eSBieSBtb3ZpbmcgZG93biB0aGUgdHJlZSBzdGFydGluZyBhdCBub2RlIGssXG4gKiBleGNoYW5naW5nIGEgbm9kZSB3aXRoIHRoZSBzbWFsbGVzdCBvZiBpdHMgdHdvIHNvbnMgaWYgbmVjZXNzYXJ5LCBzdG9wcGluZ1xuICogd2hlbiB0aGUgaGVhcCBwcm9wZXJ0eSBpcyByZS1lc3RhYmxpc2hlZCAoZWFjaCBmYXRoZXIgc21hbGxlciB0aGFuIGl0c1xuICogdHdvIHNvbnMpLlxuICovXG5jb25zdCBwcWRvd25oZWFwID0gKHMsIHRyZWUsIGspID0+IHtcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICBjdF9kYXRhICp0cmVlOyAgLyogdGhlIHRyZWUgdG8gcmVzdG9yZSAqL1xuLy8gICAgaW50IGs7ICAgICAgICAgICAgICAgLyogbm9kZSB0byBtb3ZlIGRvd24gKi9cblxuICBjb25zdCB2ID0gcy5oZWFwW2tdO1xuICBsZXQgaiA9IGsgPDwgMTsgIC8qIGxlZnQgc29uIG9mIGsgKi9cbiAgd2hpbGUgKGogPD0gcy5oZWFwX2xlbikge1xuICAgIC8qIFNldCBqIHRvIHRoZSBzbWFsbGVzdCBvZiB0aGUgdHdvIHNvbnM6ICovXG4gICAgaWYgKGogPCBzLmhlYXBfbGVuICYmXG4gICAgICBzbWFsbGVyKHRyZWUsIHMuaGVhcFtqICsgMV0sIHMuaGVhcFtqXSwgcy5kZXB0aCkpIHtcbiAgICAgIGorKztcbiAgICB9XG4gICAgLyogRXhpdCBpZiB2IGlzIHNtYWxsZXIgdGhhbiBib3RoIHNvbnMgKi9cbiAgICBpZiAoc21hbGxlcih0cmVlLCB2LCBzLmhlYXBbal0sIHMuZGVwdGgpKSB7IGJyZWFrOyB9XG5cbiAgICAvKiBFeGNoYW5nZSB2IHdpdGggdGhlIHNtYWxsZXN0IHNvbiAqL1xuICAgIHMuaGVhcFtrXSA9IHMuaGVhcFtqXTtcbiAgICBrID0gajtcblxuICAgIC8qIEFuZCBjb250aW51ZSBkb3duIHRoZSB0cmVlLCBzZXR0aW5nIGogdG8gdGhlIGxlZnQgc29uIG9mIGsgKi9cbiAgICBqIDw8PSAxO1xuICB9XG4gIHMuaGVhcFtrXSA9IHY7XG59O1xuXG5cbi8vIGlubGluZWQgbWFudWFsbHlcbi8vIGNvbnN0IFNNQUxMRVNUID0gMTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIHRoZSBibG9jayBkYXRhIGNvbXByZXNzZWQgdXNpbmcgdGhlIGdpdmVuIEh1ZmZtYW4gdHJlZXNcbiAqL1xuY29uc3QgY29tcHJlc3NfYmxvY2sgPSAocywgbHRyZWUsIGR0cmVlKSA9PiB7XG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY29uc3QgY3RfZGF0YSAqbHRyZWU7IC8qIGxpdGVyYWwgdHJlZSAqL1xuLy8gICAgY29uc3QgY3RfZGF0YSAqZHRyZWU7IC8qIGRpc3RhbmNlIHRyZWUgKi9cblxuICBsZXQgZGlzdDsgICAgICAgICAgIC8qIGRpc3RhbmNlIG9mIG1hdGNoZWQgc3RyaW5nICovXG4gIGxldCBsYzsgICAgICAgICAgICAgLyogbWF0Y2ggbGVuZ3RoIG9yIHVubWF0Y2hlZCBjaGFyIChpZiBkaXN0ID09IDApICovXG4gIGxldCBzeCA9IDA7ICAgICAgICAgLyogcnVubmluZyBpbmRleCBpbiBzeW1fYnVmICovXG4gIGxldCBjb2RlOyAgICAgICAgICAgLyogdGhlIGNvZGUgdG8gc2VuZCAqL1xuICBsZXQgZXh0cmE7ICAgICAgICAgIC8qIG51bWJlciBvZiBleHRyYSBiaXRzIHRvIHNlbmQgKi9cblxuICBpZiAocy5zeW1fbmV4dCAhPT0gMCkge1xuICAgIGRvIHtcbiAgICAgIGRpc3QgPSBzLnBlbmRpbmdfYnVmW3Muc3ltX2J1ZiArIHN4KytdICYgMHhmZjtcbiAgICAgIGRpc3QgKz0gKHMucGVuZGluZ19idWZbcy5zeW1fYnVmICsgc3grK10gJiAweGZmKSA8PCA4O1xuICAgICAgbGMgPSBzLnBlbmRpbmdfYnVmW3Muc3ltX2J1ZiArIHN4KytdO1xuICAgICAgaWYgKGRpc3QgPT09IDApIHtcbiAgICAgICAgc2VuZF9jb2RlKHMsIGxjLCBsdHJlZSk7IC8qIHNlbmQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICAgICAgLy9UcmFjZWN2KGlzZ3JhcGgobGMpLCAoc3RkZXJyLFwiICclYycgXCIsIGxjKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBIZXJlLCBsYyBpcyB0aGUgbWF0Y2ggbGVuZ3RoIC0gTUlOX01BVENIICovXG4gICAgICAgIGNvZGUgPSBfbGVuZ3RoX2NvZGVbbGNdO1xuICAgICAgICBzZW5kX2NvZGUocywgY29kZSArIExJVEVSQUxTICsgMSwgbHRyZWUpOyAvKiBzZW5kIHRoZSBsZW5ndGggY29kZSAqL1xuICAgICAgICBleHRyYSA9IGV4dHJhX2xiaXRzW2NvZGVdO1xuICAgICAgICBpZiAoZXh0cmEgIT09IDApIHtcbiAgICAgICAgICBsYyAtPSBiYXNlX2xlbmd0aFtjb2RlXTtcbiAgICAgICAgICBzZW5kX2JpdHMocywgbGMsIGV4dHJhKTsgICAgICAgLyogc2VuZCB0aGUgZXh0cmEgbGVuZ3RoIGJpdHMgKi9cbiAgICAgICAgfVxuICAgICAgICBkaXN0LS07IC8qIGRpc3QgaXMgbm93IHRoZSBtYXRjaCBkaXN0YW5jZSAtIDEgKi9cbiAgICAgICAgY29kZSA9IGRfY29kZShkaXN0KTtcbiAgICAgICAgLy9Bc3NlcnQgKGNvZGUgPCBEX0NPREVTLCBcImJhZCBkX2NvZGVcIik7XG5cbiAgICAgICAgc2VuZF9jb2RlKHMsIGNvZGUsIGR0cmVlKTsgICAgICAgLyogc2VuZCB0aGUgZGlzdGFuY2UgY29kZSAqL1xuICAgICAgICBleHRyYSA9IGV4dHJhX2RiaXRzW2NvZGVdO1xuICAgICAgICBpZiAoZXh0cmEgIT09IDApIHtcbiAgICAgICAgICBkaXN0IC09IGJhc2VfZGlzdFtjb2RlXTtcbiAgICAgICAgICBzZW5kX2JpdHMocywgZGlzdCwgZXh0cmEpOyAgIC8qIHNlbmQgdGhlIGV4dHJhIGRpc3RhbmNlIGJpdHMgKi9cbiAgICAgICAgfVxuICAgICAgfSAvKiBsaXRlcmFsIG9yIG1hdGNoIHBhaXIgPyAqL1xuXG4gICAgICAvKiBDaGVjayB0aGF0IHRoZSBvdmVybGF5IGJldHdlZW4gcGVuZGluZ19idWYgYW5kIHN5bV9idWYgaXMgb2s6ICovXG4gICAgICAvL0Fzc2VydChzLT5wZW5kaW5nIDwgcy0+bGl0X2J1ZnNpemUgKyBzeCwgXCJwZW5kaW5nQnVmIG92ZXJmbG93XCIpO1xuXG4gICAgfSB3aGlsZSAoc3ggPCBzLnN5bV9uZXh0KTtcbiAgfVxuXG4gIHNlbmRfY29kZShzLCBFTkRfQkxPQ0ssIGx0cmVlKTtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb25zdHJ1Y3Qgb25lIEh1ZmZtYW4gdHJlZSBhbmQgYXNzaWducyB0aGUgY29kZSBiaXQgc3RyaW5ncyBhbmQgbGVuZ3Rocy5cbiAqIFVwZGF0ZSB0aGUgdG90YWwgYml0IGxlbmd0aCBmb3IgdGhlIGN1cnJlbnQgYmxvY2suXG4gKiBJTiBhc3NlcnRpb246IHRoZSBmaWVsZCBmcmVxIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMuXG4gKiBPVVQgYXNzZXJ0aW9uczogdGhlIGZpZWxkcyBsZW4gYW5kIGNvZGUgYXJlIHNldCB0byB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RoXG4gKiAgICAgYW5kIGNvcnJlc3BvbmRpbmcgY29kZS4gVGhlIGxlbmd0aCBvcHRfbGVuIGlzIHVwZGF0ZWQ7IHN0YXRpY19sZW4gaXNcbiAqICAgICBhbHNvIHVwZGF0ZWQgaWYgc3RyZWUgaXMgbm90IG51bGwuIFRoZSBmaWVsZCBtYXhfY29kZSBpcyBzZXQuXG4gKi9cbmNvbnN0IGJ1aWxkX3RyZWUgPSAocywgZGVzYykgPT4ge1xuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIHRyZWVfZGVzYyAqZGVzYzsgLyogdGhlIHRyZWUgZGVzY3JpcHRvciAqL1xuXG4gIGNvbnN0IHRyZWUgICAgID0gZGVzYy5keW5fdHJlZTtcbiAgY29uc3Qgc3RyZWUgICAgPSBkZXNjLnN0YXRfZGVzYy5zdGF0aWNfdHJlZTtcbiAgY29uc3QgaGFzX3N0cmVlID0gZGVzYy5zdGF0X2Rlc2MuaGFzX3N0cmVlO1xuICBjb25zdCBlbGVtcyAgICA9IGRlc2Muc3RhdF9kZXNjLmVsZW1zO1xuICBsZXQgbiwgbTsgICAgICAgICAgLyogaXRlcmF0ZSBvdmVyIGhlYXAgZWxlbWVudHMgKi9cbiAgbGV0IG1heF9jb2RlID0gLTE7IC8qIGxhcmdlc3QgY29kZSB3aXRoIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xuICBsZXQgbm9kZTsgICAgICAgICAgLyogbmV3IG5vZGUgYmVpbmcgY3JlYXRlZCAqL1xuXG4gIC8qIENvbnN0cnVjdCB0aGUgaW5pdGlhbCBoZWFwLCB3aXRoIGxlYXN0IGZyZXF1ZW50IGVsZW1lbnQgaW5cbiAgICogaGVhcFtTTUFMTEVTVF0uIFRoZSBzb25zIG9mIGhlYXBbbl0gYXJlIGhlYXBbMipuXSBhbmQgaGVhcFsyKm4rMV0uXG4gICAqIGhlYXBbMF0gaXMgbm90IHVzZWQuXG4gICAqL1xuICBzLmhlYXBfbGVuID0gMDtcbiAgcy5oZWFwX21heCA9IEhFQVBfU0laRTtcblxuICBmb3IgKG4gPSAwOyBuIDwgZWxlbXM7IG4rKykge1xuICAgIGlmICh0cmVlW24gKiAyXS8qLkZyZXEqLyAhPT0gMCkge1xuICAgICAgcy5oZWFwWysrcy5oZWFwX2xlbl0gPSBtYXhfY29kZSA9IG47XG4gICAgICBzLmRlcHRoW25dID0gMDtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyogVGhlIHBremlwIGZvcm1hdCByZXF1aXJlcyB0aGF0IGF0IGxlYXN0IG9uZSBkaXN0YW5jZSBjb2RlIGV4aXN0cyxcbiAgICogYW5kIHRoYXQgYXQgbGVhc3Qgb25lIGJpdCBzaG91bGQgYmUgc2VudCBldmVuIGlmIHRoZXJlIGlzIG9ubHkgb25lXG4gICAqIHBvc3NpYmxlIGNvZGUuIFNvIHRvIGF2b2lkIHNwZWNpYWwgY2hlY2tzIGxhdGVyIG9uIHdlIGZvcmNlIGF0IGxlYXN0XG4gICAqIHR3byBjb2RlcyBvZiBub24gemVybyBmcmVxdWVuY3kuXG4gICAqL1xuICB3aGlsZSAocy5oZWFwX2xlbiA8IDIpIHtcbiAgICBub2RlID0gcy5oZWFwWysrcy5oZWFwX2xlbl0gPSAobWF4X2NvZGUgPCAyID8gKyttYXhfY29kZSA6IDApO1xuICAgIHRyZWVbbm9kZSAqIDJdLyouRnJlcSovID0gMTtcbiAgICBzLmRlcHRoW25vZGVdID0gMDtcbiAgICBzLm9wdF9sZW4tLTtcblxuICAgIGlmIChoYXNfc3RyZWUpIHtcbiAgICAgIHMuc3RhdGljX2xlbiAtPSBzdHJlZVtub2RlICogMiArIDFdLyouTGVuKi87XG4gICAgfVxuICAgIC8qIG5vZGUgaXMgMCBvciAxIHNvIGl0IGRvZXMgbm90IGhhdmUgZXh0cmEgYml0cyAqL1xuICB9XG4gIGRlc2MubWF4X2NvZGUgPSBtYXhfY29kZTtcblxuICAvKiBUaGUgZWxlbWVudHMgaGVhcFtoZWFwX2xlbi8yKzEgLi4gaGVhcF9sZW5dIGFyZSBsZWF2ZXMgb2YgdGhlIHRyZWUsXG4gICAqIGVzdGFibGlzaCBzdWItaGVhcHMgb2YgaW5jcmVhc2luZyBsZW5ndGhzOlxuICAgKi9cbiAgZm9yIChuID0gKHMuaGVhcF9sZW4gPj4gMS8qaW50IC8yKi8pOyBuID49IDE7IG4tLSkgeyBwcWRvd25oZWFwKHMsIHRyZWUsIG4pOyB9XG5cbiAgLyogQ29uc3RydWN0IHRoZSBIdWZmbWFuIHRyZWUgYnkgcmVwZWF0ZWRseSBjb21iaW5pbmcgdGhlIGxlYXN0IHR3b1xuICAgKiBmcmVxdWVudCBub2Rlcy5cbiAgICovXG4gIG5vZGUgPSBlbGVtczsgICAgICAgICAgICAgIC8qIG5leHQgaW50ZXJuYWwgbm9kZSBvZiB0aGUgdHJlZSAqL1xuICBkbyB7XG4gICAgLy9wcXJlbW92ZShzLCB0cmVlLCBuKTsgIC8qIG4gPSBub2RlIG9mIGxlYXN0IGZyZXF1ZW5jeSAqL1xuICAgIC8qKiogcHFyZW1vdmUgKioqL1xuICAgIG4gPSBzLmhlYXBbMS8qU01BTExFU1QqL107XG4gICAgcy5oZWFwWzEvKlNNQUxMRVNUKi9dID0gcy5oZWFwW3MuaGVhcF9sZW4tLV07XG4gICAgcHFkb3duaGVhcChzLCB0cmVlLCAxLypTTUFMTEVTVCovKTtcbiAgICAvKioqL1xuXG4gICAgbSA9IHMuaGVhcFsxLypTTUFMTEVTVCovXTsgLyogbSA9IG5vZGUgb2YgbmV4dCBsZWFzdCBmcmVxdWVuY3kgKi9cblxuICAgIHMuaGVhcFstLXMuaGVhcF9tYXhdID0gbjsgLyoga2VlcCB0aGUgbm9kZXMgc29ydGVkIGJ5IGZyZXF1ZW5jeSAqL1xuICAgIHMuaGVhcFstLXMuaGVhcF9tYXhdID0gbTtcblxuICAgIC8qIENyZWF0ZSBhIG5ldyBub2RlIGZhdGhlciBvZiBuIGFuZCBtICovXG4gICAgdHJlZVtub2RlICogMl0vKi5GcmVxKi8gPSB0cmVlW24gKiAyXS8qLkZyZXEqLyArIHRyZWVbbSAqIDJdLyouRnJlcSovO1xuICAgIHMuZGVwdGhbbm9kZV0gPSAocy5kZXB0aFtuXSA+PSBzLmRlcHRoW21dID8gcy5kZXB0aFtuXSA6IHMuZGVwdGhbbV0pICsgMTtcbiAgICB0cmVlW24gKiAyICsgMV0vKi5EYWQqLyA9IHRyZWVbbSAqIDIgKyAxXS8qLkRhZCovID0gbm9kZTtcblxuICAgIC8qIGFuZCBpbnNlcnQgdGhlIG5ldyBub2RlIGluIHRoZSBoZWFwICovXG4gICAgcy5oZWFwWzEvKlNNQUxMRVNUKi9dID0gbm9kZSsrO1xuICAgIHBxZG93bmhlYXAocywgdHJlZSwgMS8qU01BTExFU1QqLyk7XG5cbiAgfSB3aGlsZSAocy5oZWFwX2xlbiA+PSAyKTtcblxuICBzLmhlYXBbLS1zLmhlYXBfbWF4XSA9IHMuaGVhcFsxLypTTUFMTEVTVCovXTtcblxuICAvKiBBdCB0aGlzIHBvaW50LCB0aGUgZmllbGRzIGZyZXEgYW5kIGRhZCBhcmUgc2V0LiBXZSBjYW4gbm93XG4gICAqIGdlbmVyYXRlIHRoZSBiaXQgbGVuZ3Rocy5cbiAgICovXG4gIGdlbl9iaXRsZW4ocywgZGVzYyk7XG5cbiAgLyogVGhlIGZpZWxkIGxlbiBpcyBub3cgc2V0LCB3ZSBjYW4gZ2VuZXJhdGUgdGhlIGJpdCBjb2RlcyAqL1xuICBnZW5fY29kZXModHJlZSwgbWF4X2NvZGUsIHMuYmxfY291bnQpO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNjYW4gYSBsaXRlcmFsIG9yIGRpc3RhbmNlIHRyZWUgdG8gZGV0ZXJtaW5lIHRoZSBmcmVxdWVuY2llcyBvZiB0aGUgY29kZXNcbiAqIGluIHRoZSBiaXQgbGVuZ3RoIHRyZWUuXG4gKi9cbmNvbnN0IHNjYW5fdHJlZSA9IChzLCB0cmVlLCBtYXhfY29kZSkgPT4ge1xuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGN0X2RhdGEgKnRyZWU7ICAgLyogdGhlIHRyZWUgdG8gYmUgc2Nhbm5lZCAqL1xuLy8gICAgaW50IG1heF9jb2RlOyAgICAvKiBhbmQgaXRzIGxhcmdlc3QgY29kZSBvZiBub24gemVybyBmcmVxdWVuY3kgKi9cblxuICBsZXQgbjsgICAgICAgICAgICAgICAgICAgICAvKiBpdGVyYXRlcyBvdmVyIGFsbCB0cmVlIGVsZW1lbnRzICovXG4gIGxldCBwcmV2bGVuID0gLTE7ICAgICAgICAgIC8qIGxhc3QgZW1pdHRlZCBsZW5ndGggKi9cbiAgbGV0IGN1cmxlbjsgICAgICAgICAgICAgICAgLyogbGVuZ3RoIG9mIGN1cnJlbnQgY29kZSAqL1xuXG4gIGxldCBuZXh0bGVuID0gdHJlZVswICogMiArIDFdLyouTGVuKi87IC8qIGxlbmd0aCBvZiBuZXh0IGNvZGUgKi9cblxuICBsZXQgY291bnQgPSAwOyAgICAgICAgICAgICAvKiByZXBlYXQgY291bnQgb2YgdGhlIGN1cnJlbnQgY29kZSAqL1xuICBsZXQgbWF4X2NvdW50ID0gNzsgICAgICAgICAvKiBtYXggcmVwZWF0IGNvdW50ICovXG4gIGxldCBtaW5fY291bnQgPSA0OyAgICAgICAgIC8qIG1pbiByZXBlYXQgY291bnQgKi9cblxuICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgIG1heF9jb3VudCA9IDEzODtcbiAgICBtaW5fY291bnQgPSAzO1xuICB9XG4gIHRyZWVbKG1heF9jb2RlICsgMSkgKiAyICsgMV0vKi5MZW4qLyA9IDB4ZmZmZjsgLyogZ3VhcmQgKi9cblxuICBmb3IgKG4gPSAwOyBuIDw9IG1heF9jb2RlOyBuKyspIHtcbiAgICBjdXJsZW4gPSBuZXh0bGVuO1xuICAgIG5leHRsZW4gPSB0cmVlWyhuICsgMSkgKiAyICsgMV0vKi5MZW4qLztcblxuICAgIGlmICgrK2NvdW50IDwgbWF4X2NvdW50ICYmIGN1cmxlbiA9PT0gbmV4dGxlbikge1xuICAgICAgY29udGludWU7XG5cbiAgICB9IGVsc2UgaWYgKGNvdW50IDwgbWluX2NvdW50KSB7XG4gICAgICBzLmJsX3RyZWVbY3VybGVuICogMl0vKi5GcmVxKi8gKz0gY291bnQ7XG5cbiAgICB9IGVsc2UgaWYgKGN1cmxlbiAhPT0gMCkge1xuXG4gICAgICBpZiAoY3VybGVuICE9PSBwcmV2bGVuKSB7IHMuYmxfdHJlZVtjdXJsZW4gKiAyXS8qLkZyZXEqLysrOyB9XG4gICAgICBzLmJsX3RyZWVbUkVQXzNfNiAqIDJdLyouRnJlcSovKys7XG5cbiAgICB9IGVsc2UgaWYgKGNvdW50IDw9IDEwKSB7XG4gICAgICBzLmJsX3RyZWVbUkVQWl8zXzEwICogMl0vKi5GcmVxKi8rKztcblxuICAgIH0gZWxzZSB7XG4gICAgICBzLmJsX3RyZWVbUkVQWl8xMV8xMzggKiAyXS8qLkZyZXEqLysrO1xuICAgIH1cblxuICAgIGNvdW50ID0gMDtcbiAgICBwcmV2bGVuID0gY3VybGVuO1xuXG4gICAgaWYgKG5leHRsZW4gPT09IDApIHtcbiAgICAgIG1heF9jb3VudCA9IDEzODtcbiAgICAgIG1pbl9jb3VudCA9IDM7XG5cbiAgICB9IGVsc2UgaWYgKGN1cmxlbiA9PT0gbmV4dGxlbikge1xuICAgICAgbWF4X2NvdW50ID0gNjtcbiAgICAgIG1pbl9jb3VudCA9IDM7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbWF4X2NvdW50ID0gNztcbiAgICAgIG1pbl9jb3VudCA9IDQ7XG4gICAgfVxuICB9XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBhIGxpdGVyYWwgb3IgZGlzdGFuY2UgdHJlZSBpbiBjb21wcmVzc2VkIGZvcm0sIHVzaW5nIHRoZSBjb2RlcyBpblxuICogYmxfdHJlZS5cbiAqL1xuY29uc3Qgc2VuZF90cmVlID0gKHMsIHRyZWUsIG1heF9jb2RlKSA9PiB7XG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY3RfZGF0YSAqdHJlZTsgLyogdGhlIHRyZWUgdG8gYmUgc2Nhbm5lZCAqL1xuLy8gICAgaW50IG1heF9jb2RlOyAgICAgICAvKiBhbmQgaXRzIGxhcmdlc3QgY29kZSBvZiBub24gemVybyBmcmVxdWVuY3kgKi9cblxuICBsZXQgbjsgICAgICAgICAgICAgICAgICAgICAvKiBpdGVyYXRlcyBvdmVyIGFsbCB0cmVlIGVsZW1lbnRzICovXG4gIGxldCBwcmV2bGVuID0gLTE7ICAgICAgICAgIC8qIGxhc3QgZW1pdHRlZCBsZW5ndGggKi9cbiAgbGV0IGN1cmxlbjsgICAgICAgICAgICAgICAgLyogbGVuZ3RoIG9mIGN1cnJlbnQgY29kZSAqL1xuXG4gIGxldCBuZXh0bGVuID0gdHJlZVswICogMiArIDFdLyouTGVuKi87IC8qIGxlbmd0aCBvZiBuZXh0IGNvZGUgKi9cblxuICBsZXQgY291bnQgPSAwOyAgICAgICAgICAgICAvKiByZXBlYXQgY291bnQgb2YgdGhlIGN1cnJlbnQgY29kZSAqL1xuICBsZXQgbWF4X2NvdW50ID0gNzsgICAgICAgICAvKiBtYXggcmVwZWF0IGNvdW50ICovXG4gIGxldCBtaW5fY291bnQgPSA0OyAgICAgICAgIC8qIG1pbiByZXBlYXQgY291bnQgKi9cblxuICAvKiB0cmVlW21heF9jb2RlKzFdLkxlbiA9IC0xOyAqLyAgLyogZ3VhcmQgYWxyZWFkeSBzZXQgKi9cbiAgaWYgKG5leHRsZW4gPT09IDApIHtcbiAgICBtYXhfY291bnQgPSAxMzg7XG4gICAgbWluX2NvdW50ID0gMztcbiAgfVxuXG4gIGZvciAobiA9IDA7IG4gPD0gbWF4X2NvZGU7IG4rKykge1xuICAgIGN1cmxlbiA9IG5leHRsZW47XG4gICAgbmV4dGxlbiA9IHRyZWVbKG4gKyAxKSAqIDIgKyAxXS8qLkxlbiovO1xuXG4gICAgaWYgKCsrY291bnQgPCBtYXhfY291bnQgJiYgY3VybGVuID09PSBuZXh0bGVuKSB7XG4gICAgICBjb250aW51ZTtcblxuICAgIH0gZWxzZSBpZiAoY291bnQgPCBtaW5fY291bnQpIHtcbiAgICAgIGRvIHsgc2VuZF9jb2RlKHMsIGN1cmxlbiwgcy5ibF90cmVlKTsgfSB3aGlsZSAoLS1jb3VudCAhPT0gMCk7XG5cbiAgICB9IGVsc2UgaWYgKGN1cmxlbiAhPT0gMCkge1xuICAgICAgaWYgKGN1cmxlbiAhPT0gcHJldmxlbikge1xuICAgICAgICBzZW5kX2NvZGUocywgY3VybGVuLCBzLmJsX3RyZWUpO1xuICAgICAgICBjb3VudC0tO1xuICAgICAgfVxuICAgICAgLy9Bc3NlcnQoY291bnQgPj0gMyAmJiBjb3VudCA8PSA2LCBcIiAzXzY/XCIpO1xuICAgICAgc2VuZF9jb2RlKHMsIFJFUF8zXzYsIHMuYmxfdHJlZSk7XG4gICAgICBzZW5kX2JpdHMocywgY291bnQgLSAzLCAyKTtcblxuICAgIH0gZWxzZSBpZiAoY291bnQgPD0gMTApIHtcbiAgICAgIHNlbmRfY29kZShzLCBSRVBaXzNfMTAsIHMuYmxfdHJlZSk7XG4gICAgICBzZW5kX2JpdHMocywgY291bnQgLSAzLCAzKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZW5kX2NvZGUocywgUkVQWl8xMV8xMzgsIHMuYmxfdHJlZSk7XG4gICAgICBzZW5kX2JpdHMocywgY291bnQgLSAxMSwgNyk7XG4gICAgfVxuXG4gICAgY291bnQgPSAwO1xuICAgIHByZXZsZW4gPSBjdXJsZW47XG4gICAgaWYgKG5leHRsZW4gPT09IDApIHtcbiAgICAgIG1heF9jb3VudCA9IDEzODtcbiAgICAgIG1pbl9jb3VudCA9IDM7XG5cbiAgICB9IGVsc2UgaWYgKGN1cmxlbiA9PT0gbmV4dGxlbikge1xuICAgICAgbWF4X2NvdW50ID0gNjtcbiAgICAgIG1pbl9jb3VudCA9IDM7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbWF4X2NvdW50ID0gNztcbiAgICAgIG1pbl9jb3VudCA9IDQ7XG4gICAgfVxuICB9XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29uc3RydWN0IHRoZSBIdWZmbWFuIHRyZWUgZm9yIHRoZSBiaXQgbGVuZ3RocyBhbmQgcmV0dXJuIHRoZSBpbmRleCBpblxuICogYmxfb3JkZXIgb2YgdGhlIGxhc3QgYml0IGxlbmd0aCBjb2RlIHRvIHNlbmQuXG4gKi9cbmNvbnN0IGJ1aWxkX2JsX3RyZWUgPSAocykgPT4ge1xuXG4gIGxldCBtYXhfYmxpbmRleDsgIC8qIGluZGV4IG9mIGxhc3QgYml0IGxlbmd0aCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXEgKi9cblxuICAvKiBEZXRlcm1pbmUgdGhlIGJpdCBsZW5ndGggZnJlcXVlbmNpZXMgZm9yIGxpdGVyYWwgYW5kIGRpc3RhbmNlIHRyZWVzICovXG4gIHNjYW5fdHJlZShzLCBzLmR5bl9sdHJlZSwgcy5sX2Rlc2MubWF4X2NvZGUpO1xuICBzY2FuX3RyZWUocywgcy5keW5fZHRyZWUsIHMuZF9kZXNjLm1heF9jb2RlKTtcblxuICAvKiBCdWlsZCB0aGUgYml0IGxlbmd0aCB0cmVlOiAqL1xuICBidWlsZF90cmVlKHMsIHMuYmxfZGVzYyk7XG4gIC8qIG9wdF9sZW4gbm93IGluY2x1ZGVzIHRoZSBsZW5ndGggb2YgdGhlIHRyZWUgcmVwcmVzZW50YXRpb25zLCBleGNlcHRcbiAgICogdGhlIGxlbmd0aHMgb2YgdGhlIGJpdCBsZW5ndGhzIGNvZGVzIGFuZCB0aGUgNSs1KzQgYml0cyBmb3IgdGhlIGNvdW50cy5cbiAgICovXG5cbiAgLyogRGV0ZXJtaW5lIHRoZSBudW1iZXIgb2YgYml0IGxlbmd0aCBjb2RlcyB0byBzZW5kLiBUaGUgcGt6aXAgZm9ybWF0XG4gICAqIHJlcXVpcmVzIHRoYXQgYXQgbGVhc3QgNCBiaXQgbGVuZ3RoIGNvZGVzIGJlIHNlbnQuIChhcHBub3RlLnR4dCBzYXlzXG4gICAqIDMgYnV0IHRoZSBhY3R1YWwgdmFsdWUgdXNlZCBpcyA0LilcbiAgICovXG4gIGZvciAobWF4X2JsaW5kZXggPSBCTF9DT0RFUyAtIDE7IG1heF9ibGluZGV4ID49IDM7IG1heF9ibGluZGV4LS0pIHtcbiAgICBpZiAocy5ibF90cmVlW2JsX29yZGVyW21heF9ibGluZGV4XSAqIDIgKyAxXS8qLkxlbiovICE9PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLyogVXBkYXRlIG9wdF9sZW4gdG8gaW5jbHVkZSB0aGUgYml0IGxlbmd0aCB0cmVlIGFuZCBjb3VudHMgKi9cbiAgcy5vcHRfbGVuICs9IDMgKiAobWF4X2JsaW5kZXggKyAxKSArIDUgKyA1ICsgNDtcbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5keW4gdHJlZXM6IGR5biAlbGQsIHN0YXQgJWxkXCIsXG4gIC8vICAgICAgICBzLT5vcHRfbGVuLCBzLT5zdGF0aWNfbGVuKSk7XG5cbiAgcmV0dXJuIG1heF9ibGluZGV4O1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgdGhlIGhlYWRlciBmb3IgYSBibG9jayB1c2luZyBkeW5hbWljIEh1ZmZtYW4gdHJlZXM6IHRoZSBjb3VudHMsIHRoZVxuICogbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aCBjb2RlcywgdGhlIGxpdGVyYWwgdHJlZSBhbmQgdGhlIGRpc3RhbmNlIHRyZWUuXG4gKiBJTiBhc3NlcnRpb246IGxjb2RlcyA+PSAyNTcsIGRjb2RlcyA+PSAxLCBibGNvZGVzID49IDQuXG4gKi9cbmNvbnN0IHNlbmRfYWxsX3RyZWVzID0gKHMsIGxjb2RlcywgZGNvZGVzLCBibGNvZGVzKSA9PiB7XG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgaW50IGxjb2RlcywgZGNvZGVzLCBibGNvZGVzOyAvKiBudW1iZXIgb2YgY29kZXMgZm9yIGVhY2ggdHJlZSAqL1xuXG4gIGxldCByYW5rOyAgICAgICAgICAgICAgICAgICAgLyogaW5kZXggaW4gYmxfb3JkZXIgKi9cblxuICAvL0Fzc2VydCAobGNvZGVzID49IDI1NyAmJiBkY29kZXMgPj0gMSAmJiBibGNvZGVzID49IDQsIFwibm90IGVub3VnaCBjb2Rlc1wiKTtcbiAgLy9Bc3NlcnQgKGxjb2RlcyA8PSBMX0NPREVTICYmIGRjb2RlcyA8PSBEX0NPREVTICYmIGJsY29kZXMgPD0gQkxfQ09ERVMsXG4gIC8vICAgICAgICBcInRvbyBtYW55IGNvZGVzXCIpO1xuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmJsIGNvdW50czogXCIpKTtcbiAgc2VuZF9iaXRzKHMsIGxjb2RlcyAtIDI1NywgNSk7IC8qIG5vdCArMjU1IGFzIHN0YXRlZCBpbiBhcHBub3RlLnR4dCAqL1xuICBzZW5kX2JpdHMocywgZGNvZGVzIC0gMSwgICA1KTtcbiAgc2VuZF9iaXRzKHMsIGJsY29kZXMgLSA0LCAgNCk7IC8qIG5vdCAtMyBhcyBzdGF0ZWQgaW4gYXBwbm90ZS50eHQgKi9cbiAgZm9yIChyYW5rID0gMDsgcmFuayA8IGJsY29kZXM7IHJhbmsrKykge1xuICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuYmwgY29kZSAlMmQgXCIsIGJsX29yZGVyW3JhbmtdKSk7XG4gICAgc2VuZF9iaXRzKHMsIHMuYmxfdHJlZVtibF9vcmRlcltyYW5rXSAqIDIgKyAxXS8qLkxlbiovLCAzKTtcbiAgfVxuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmJsIHRyZWU6IHNlbnQgJWxkXCIsIHMtPmJpdHNfc2VudCkpO1xuXG4gIHNlbmRfdHJlZShzLCBzLmR5bl9sdHJlZSwgbGNvZGVzIC0gMSk7IC8qIGxpdGVyYWwgdHJlZSAqL1xuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmxpdCB0cmVlOiBzZW50ICVsZFwiLCBzLT5iaXRzX3NlbnQpKTtcblxuICBzZW5kX3RyZWUocywgcy5keW5fZHRyZWUsIGRjb2RlcyAtIDEpOyAvKiBkaXN0YW5jZSB0cmVlICovXG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuZGlzdCB0cmVlOiBzZW50ICVsZFwiLCBzLT5iaXRzX3NlbnQpKTtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDaGVjayBpZiB0aGUgZGF0YSB0eXBlIGlzIFRFWFQgb3IgQklOQVJZLCB1c2luZyB0aGUgZm9sbG93aW5nIGFsZ29yaXRobTpcbiAqIC0gVEVYVCBpZiB0aGUgdHdvIGNvbmRpdGlvbnMgYmVsb3cgYXJlIHNhdGlzZmllZDpcbiAqICAgIGEpIFRoZXJlIGFyZSBubyBub24tcG9ydGFibGUgY29udHJvbCBjaGFyYWN0ZXJzIGJlbG9uZ2luZyB0byB0aGVcbiAqICAgICAgIFwiYmxvY2sgbGlzdFwiICgwLi42LCAxNC4uMjUsIDI4Li4zMSkuXG4gKiAgICBiKSBUaGVyZSBpcyBhdCBsZWFzdCBvbmUgcHJpbnRhYmxlIGNoYXJhY3RlciBiZWxvbmdpbmcgdG8gdGhlXG4gKiAgICAgICBcImFsbG93IGxpc3RcIiAoOSB7VEFCfSwgMTAge0xGfSwgMTMge0NSfSwgMzIuLjI1NSkuXG4gKiAtIEJJTkFSWSBvdGhlcndpc2UuXG4gKiAtIFRoZSBmb2xsb3dpbmcgcGFydGlhbGx5LXBvcnRhYmxlIGNvbnRyb2wgY2hhcmFjdGVycyBmb3JtIGFcbiAqICAgXCJncmF5IGxpc3RcIiB0aGF0IGlzIGlnbm9yZWQgaW4gdGhpcyBkZXRlY3Rpb24gYWxnb3JpdGhtOlxuICogICAoNyB7QkVMfSwgOCB7QlN9LCAxMSB7VlR9LCAxMiB7RkZ9LCAyNiB7U1VCfSwgMjcge0VTQ30pLlxuICogSU4gYXNzZXJ0aW9uOiB0aGUgZmllbGRzIEZyZXEgb2YgZHluX2x0cmVlIGFyZSBzZXQuXG4gKi9cbmNvbnN0IGRldGVjdF9kYXRhX3R5cGUgPSAocykgPT4ge1xuICAvKiBibG9ja19tYXNrIGlzIHRoZSBiaXQgbWFzayBvZiBibG9jay1saXN0ZWQgYnl0ZXNcbiAgICogc2V0IGJpdHMgMC4uNiwgMTQuLjI1LCBhbmQgMjguLjMxXG4gICAqIDB4ZjNmZmMwN2YgPSBiaW5hcnkgMTExMTAwMTExMTExMTExMTExMDAwMDAwMDExMTExMTFcbiAgICovXG4gIGxldCBibG9ja19tYXNrID0gMHhmM2ZmYzA3ZjtcbiAgbGV0IG47XG5cbiAgLyogQ2hlY2sgZm9yIG5vbi10ZXh0dWFsIChcImJsb2NrLWxpc3RlZFwiKSBieXRlcy4gKi9cbiAgZm9yIChuID0gMDsgbiA8PSAzMTsgbisrLCBibG9ja19tYXNrID4+Pj0gMSkge1xuICAgIGlmICgoYmxvY2tfbWFzayAmIDEpICYmIChzLmR5bl9sdHJlZVtuICogMl0vKi5GcmVxKi8gIT09IDApKSB7XG4gICAgICByZXR1cm4gWl9CSU5BUlk7XG4gICAgfVxuICB9XG5cbiAgLyogQ2hlY2sgZm9yIHRleHR1YWwgKFwiYWxsb3ctbGlzdGVkXCIpIGJ5dGVzLiAqL1xuICBpZiAocy5keW5fbHRyZWVbOSAqIDJdLyouRnJlcSovICE9PSAwIHx8IHMuZHluX2x0cmVlWzEwICogMl0vKi5GcmVxKi8gIT09IDAgfHxcbiAgICAgIHMuZHluX2x0cmVlWzEzICogMl0vKi5GcmVxKi8gIT09IDApIHtcbiAgICByZXR1cm4gWl9URVhUO1xuICB9XG4gIGZvciAobiA9IDMyOyBuIDwgTElURVJBTFM7IG4rKykge1xuICAgIGlmIChzLmR5bl9sdHJlZVtuICogMl0vKi5GcmVxKi8gIT09IDApIHtcbiAgICAgIHJldHVybiBaX1RFWFQ7XG4gICAgfVxuICB9XG5cbiAgLyogVGhlcmUgYXJlIG5vIFwiYmxvY2stbGlzdGVkXCIgb3IgXCJhbGxvdy1saXN0ZWRcIiBieXRlczpcbiAgICogdGhpcyBzdHJlYW0gZWl0aGVyIGlzIGVtcHR5IG9yIGhhcyB0b2xlcmF0ZWQgKFwiZ3JheS1saXN0ZWRcIikgYnl0ZXMgb25seS5cbiAgICovXG4gIHJldHVybiBaX0JJTkFSWTtcbn07XG5cblxubGV0IHN0YXRpY19pbml0X2RvbmUgPSBmYWxzZTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIHRoZSB0cmVlIGRhdGEgc3RydWN0dXJlcyBmb3IgYSBuZXcgemxpYiBzdHJlYW0uXG4gKi9cbmNvbnN0IF90cl9pbml0ID0gKHMpID0+XG57XG5cbiAgaWYgKCFzdGF0aWNfaW5pdF9kb25lKSB7XG4gICAgdHJfc3RhdGljX2luaXQoKTtcbiAgICBzdGF0aWNfaW5pdF9kb25lID0gdHJ1ZTtcbiAgfVxuXG4gIHMubF9kZXNjICA9IG5ldyBUcmVlRGVzYyhzLmR5bl9sdHJlZSwgc3RhdGljX2xfZGVzYyk7XG4gIHMuZF9kZXNjICA9IG5ldyBUcmVlRGVzYyhzLmR5bl9kdHJlZSwgc3RhdGljX2RfZGVzYyk7XG4gIHMuYmxfZGVzYyA9IG5ldyBUcmVlRGVzYyhzLmJsX3RyZWUsIHN0YXRpY19ibF9kZXNjKTtcblxuICBzLmJpX2J1ZiA9IDA7XG4gIHMuYmlfdmFsaWQgPSAwO1xuXG4gIC8qIEluaXRpYWxpemUgdGhlIGZpcnN0IGJsb2NrIG9mIHRoZSBmaXJzdCBmaWxlOiAqL1xuICBpbml0X2Jsb2NrKHMpO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgYSBzdG9yZWQgYmxvY2tcbiAqL1xuY29uc3QgX3RyX3N0b3JlZF9ibG9jayA9IChzLCBidWYsIHN0b3JlZF9sZW4sIGxhc3QpID0+IHtcbi8vRGVmbGF0ZVN0YXRlICpzO1xuLy9jaGFyZiAqYnVmOyAgICAgICAvKiBpbnB1dCBibG9jayAqL1xuLy91bGcgc3RvcmVkX2xlbjsgICAvKiBsZW5ndGggb2YgaW5wdXQgYmxvY2sgKi9cbi8vaW50IGxhc3Q7ICAgICAgICAgLyogb25lIGlmIHRoaXMgaXMgdGhlIGxhc3QgYmxvY2sgZm9yIGEgZmlsZSAqL1xuXG4gIHNlbmRfYml0cyhzLCAoU1RPUkVEX0JMT0NLIDw8IDEpICsgKGxhc3QgPyAxIDogMCksIDMpOyAgICAvKiBzZW5kIGJsb2NrIHR5cGUgKi9cbiAgYmlfd2luZHVwKHMpOyAgICAgICAgLyogYWxpZ24gb24gYnl0ZSBib3VuZGFyeSAqL1xuICBwdXRfc2hvcnQocywgc3RvcmVkX2xlbik7XG4gIHB1dF9zaG9ydChzLCB+c3RvcmVkX2xlbik7XG4gIGlmIChzdG9yZWRfbGVuKSB7XG4gICAgcy5wZW5kaW5nX2J1Zi5zZXQocy53aW5kb3cuc3ViYXJyYXkoYnVmLCBidWYgKyBzdG9yZWRfbGVuKSwgcy5wZW5kaW5nKTtcbiAgfVxuICBzLnBlbmRpbmcgKz0gc3RvcmVkX2xlbjtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIG9uZSBlbXB0eSBzdGF0aWMgYmxvY2sgdG8gZ2l2ZSBlbm91Z2ggbG9va2FoZWFkIGZvciBpbmZsYXRlLlxuICogVGhpcyB0YWtlcyAxMCBiaXRzLCBvZiB3aGljaCA3IG1heSByZW1haW4gaW4gdGhlIGJpdCBidWZmZXIuXG4gKi9cbmNvbnN0IF90cl9hbGlnbiA9IChzKSA9PiB7XG4gIHNlbmRfYml0cyhzLCBTVEFUSUNfVFJFRVMgPDwgMSwgMyk7XG4gIHNlbmRfY29kZShzLCBFTkRfQkxPQ0ssIHN0YXRpY19sdHJlZSk7XG4gIGJpX2ZsdXNoKHMpO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIERldGVybWluZSB0aGUgYmVzdCBlbmNvZGluZyBmb3IgdGhlIGN1cnJlbnQgYmxvY2s6IGR5bmFtaWMgdHJlZXMsIHN0YXRpY1xuICogdHJlZXMgb3Igc3RvcmUsIGFuZCB3cml0ZSBvdXQgdGhlIGVuY29kZWQgYmxvY2suXG4gKi9cbmNvbnN0IF90cl9mbHVzaF9ibG9jayA9IChzLCBidWYsIHN0b3JlZF9sZW4sIGxhc3QpID0+IHtcbi8vRGVmbGF0ZVN0YXRlICpzO1xuLy9jaGFyZiAqYnVmOyAgICAgICAvKiBpbnB1dCBibG9jaywgb3IgTlVMTCBpZiB0b28gb2xkICovXG4vL3VsZyBzdG9yZWRfbGVuOyAgIC8qIGxlbmd0aCBvZiBpbnB1dCBibG9jayAqL1xuLy9pbnQgbGFzdDsgICAgICAgICAvKiBvbmUgaWYgdGhpcyBpcyB0aGUgbGFzdCBibG9jayBmb3IgYSBmaWxlICovXG5cbiAgbGV0IG9wdF9sZW5iLCBzdGF0aWNfbGVuYjsgIC8qIG9wdF9sZW4gYW5kIHN0YXRpY19sZW4gaW4gYnl0ZXMgKi9cbiAgbGV0IG1heF9ibGluZGV4ID0gMDsgICAgICAgIC8qIGluZGV4IG9mIGxhc3QgYml0IGxlbmd0aCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXEgKi9cblxuICAvKiBCdWlsZCB0aGUgSHVmZm1hbiB0cmVlcyB1bmxlc3MgYSBzdG9yZWQgYmxvY2sgaXMgZm9yY2VkICovXG4gIGlmIChzLmxldmVsID4gMCkge1xuXG4gICAgLyogQ2hlY2sgaWYgdGhlIGZpbGUgaXMgYmluYXJ5IG9yIHRleHQgKi9cbiAgICBpZiAocy5zdHJtLmRhdGFfdHlwZSA9PT0gWl9VTktOT1dOKSB7XG4gICAgICBzLnN0cm0uZGF0YV90eXBlID0gZGV0ZWN0X2RhdGFfdHlwZShzKTtcbiAgICB9XG5cbiAgICAvKiBDb25zdHJ1Y3QgdGhlIGxpdGVyYWwgYW5kIGRpc3RhbmNlIHRyZWVzICovXG4gICAgYnVpbGRfdHJlZShzLCBzLmxfZGVzYyk7XG4gICAgLy8gVHJhY2V2KChzdGRlcnIsIFwiXFxubGl0IGRhdGE6IGR5biAlbGQsIHN0YXQgJWxkXCIsIHMtPm9wdF9sZW4sXG4gICAgLy8gICAgICAgIHMtPnN0YXRpY19sZW4pKTtcblxuICAgIGJ1aWxkX3RyZWUocywgcy5kX2Rlc2MpO1xuICAgIC8vIFRyYWNldigoc3RkZXJyLCBcIlxcbmRpc3QgZGF0YTogZHluICVsZCwgc3RhdCAlbGRcIiwgcy0+b3B0X2xlbixcbiAgICAvLyAgICAgICAgcy0+c3RhdGljX2xlbikpO1xuICAgIC8qIEF0IHRoaXMgcG9pbnQsIG9wdF9sZW4gYW5kIHN0YXRpY19sZW4gYXJlIHRoZSB0b3RhbCBiaXQgbGVuZ3RocyBvZlxuICAgICAqIHRoZSBjb21wcmVzc2VkIGJsb2NrIGRhdGEsIGV4Y2x1ZGluZyB0aGUgdHJlZSByZXByZXNlbnRhdGlvbnMuXG4gICAgICovXG5cbiAgICAvKiBCdWlsZCB0aGUgYml0IGxlbmd0aCB0cmVlIGZvciB0aGUgYWJvdmUgdHdvIHRyZWVzLCBhbmQgZ2V0IHRoZSBpbmRleFxuICAgICAqIGluIGJsX29yZGVyIG9mIHRoZSBsYXN0IGJpdCBsZW5ndGggY29kZSB0byBzZW5kLlxuICAgICAqL1xuICAgIG1heF9ibGluZGV4ID0gYnVpbGRfYmxfdHJlZShzKTtcblxuICAgIC8qIERldGVybWluZSB0aGUgYmVzdCBlbmNvZGluZy4gQ29tcHV0ZSB0aGUgYmxvY2sgbGVuZ3RocyBpbiBieXRlcy4gKi9cbiAgICBvcHRfbGVuYiA9IChzLm9wdF9sZW4gKyAzICsgNykgPj4+IDM7XG4gICAgc3RhdGljX2xlbmIgPSAocy5zdGF0aWNfbGVuICsgMyArIDcpID4+PiAzO1xuXG4gICAgLy8gVHJhY2V2KChzdGRlcnIsIFwiXFxub3B0ICVsdSglbHUpIHN0YXQgJWx1KCVsdSkgc3RvcmVkICVsdSBsaXQgJXUgXCIsXG4gICAgLy8gICAgICAgIG9wdF9sZW5iLCBzLT5vcHRfbGVuLCBzdGF0aWNfbGVuYiwgcy0+c3RhdGljX2xlbiwgc3RvcmVkX2xlbixcbiAgICAvLyAgICAgICAgcy0+c3ltX25leHQgLyAzKSk7XG5cbiAgICBpZiAoc3RhdGljX2xlbmIgPD0gb3B0X2xlbmIpIHsgb3B0X2xlbmIgPSBzdGF0aWNfbGVuYjsgfVxuXG4gIH0gZWxzZSB7XG4gICAgLy8gQXNzZXJ0KGJ1ZiAhPSAoY2hhciopMCwgXCJsb3N0IGJ1ZlwiKTtcbiAgICBvcHRfbGVuYiA9IHN0YXRpY19sZW5iID0gc3RvcmVkX2xlbiArIDU7IC8qIGZvcmNlIGEgc3RvcmVkIGJsb2NrICovXG4gIH1cblxuICBpZiAoKHN0b3JlZF9sZW4gKyA0IDw9IG9wdF9sZW5iKSAmJiAoYnVmICE9PSAtMSkpIHtcbiAgICAvKiA0OiB0d28gd29yZHMgZm9yIHRoZSBsZW5ndGhzICovXG5cbiAgICAvKiBUaGUgdGVzdCBidWYgIT0gTlVMTCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiBMSVRfQlVGU0laRSA+IFdTSVpFLlxuICAgICAqIE90aGVyd2lzZSB3ZSBjYW4ndCBoYXZlIHByb2Nlc3NlZCBtb3JlIHRoYW4gV1NJWkUgaW5wdXQgYnl0ZXMgc2luY2VcbiAgICAgKiB0aGUgbGFzdCBibG9jayBmbHVzaCwgYmVjYXVzZSBjb21wcmVzc2lvbiB3b3VsZCBoYXZlIGJlZW5cbiAgICAgKiBzdWNjZXNzZnVsLiBJZiBMSVRfQlVGU0laRSA8PSBXU0laRSwgaXQgaXMgbmV2ZXIgdG9vIGxhdGUgdG9cbiAgICAgKiB0cmFuc2Zvcm0gYSBibG9jayBpbnRvIGEgc3RvcmVkIGJsb2NrLlxuICAgICAqL1xuICAgIF90cl9zdG9yZWRfYmxvY2socywgYnVmLCBzdG9yZWRfbGVuLCBsYXN0KTtcblxuICB9IGVsc2UgaWYgKHMuc3RyYXRlZ3kgPT09IFpfRklYRUQgfHwgc3RhdGljX2xlbmIgPT09IG9wdF9sZW5iKSB7XG5cbiAgICBzZW5kX2JpdHMocywgKFNUQVRJQ19UUkVFUyA8PCAxKSArIChsYXN0ID8gMSA6IDApLCAzKTtcbiAgICBjb21wcmVzc19ibG9jayhzLCBzdGF0aWNfbHRyZWUsIHN0YXRpY19kdHJlZSk7XG5cbiAgfSBlbHNlIHtcbiAgICBzZW5kX2JpdHMocywgKERZTl9UUkVFUyA8PCAxKSArIChsYXN0ID8gMSA6IDApLCAzKTtcbiAgICBzZW5kX2FsbF90cmVlcyhzLCBzLmxfZGVzYy5tYXhfY29kZSArIDEsIHMuZF9kZXNjLm1heF9jb2RlICsgMSwgbWF4X2JsaW5kZXggKyAxKTtcbiAgICBjb21wcmVzc19ibG9jayhzLCBzLmR5bl9sdHJlZSwgcy5keW5fZHRyZWUpO1xuICB9XG4gIC8vIEFzc2VydCAocy0+Y29tcHJlc3NlZF9sZW4gPT0gcy0+Yml0c19zZW50LCBcImJhZCBjb21wcmVzc2VkIHNpemVcIik7XG4gIC8qIFRoZSBhYm92ZSBjaGVjayBpcyBtYWRlIG1vZCAyXjMyLCBmb3IgZmlsZXMgbGFyZ2VyIHRoYW4gNTEyIE1CXG4gICAqIGFuZCB1TG9uZyBpbXBsZW1lbnRlZCBvbiAzMiBiaXRzLlxuICAgKi9cbiAgaW5pdF9ibG9jayhzKTtcblxuICBpZiAobGFzdCkge1xuICAgIGJpX3dpbmR1cChzKTtcbiAgfVxuICAvLyBUcmFjZXYoKHN0ZGVycixcIlxcbmNvbXBybGVuICVsdSglbHUpIFwiLCBzLT5jb21wcmVzc2VkX2xlbj4+MyxcbiAgLy8gICAgICAgcy0+Y29tcHJlc3NlZF9sZW4tNypsYXN0KSk7XG59O1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNhdmUgdGhlIG1hdGNoIGluZm8gYW5kIHRhbGx5IHRoZSBmcmVxdWVuY3kgY291bnRzLiBSZXR1cm4gdHJ1ZSBpZlxuICogdGhlIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkLlxuICovXG5jb25zdCBfdHJfdGFsbHkgPSAocywgZGlzdCwgbGMpID0+IHtcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICB1bnNpZ25lZCBkaXN0OyAgLyogZGlzdGFuY2Ugb2YgbWF0Y2hlZCBzdHJpbmcgKi9cbi8vICAgIHVuc2lnbmVkIGxjOyAgICAvKiBtYXRjaCBsZW5ndGgtTUlOX01BVENIIG9yIHVubWF0Y2hlZCBjaGFyIChpZiBkaXN0PT0wKSAqL1xuXG4gIHMucGVuZGluZ19idWZbcy5zeW1fYnVmICsgcy5zeW1fbmV4dCsrXSA9IGRpc3Q7XG4gIHMucGVuZGluZ19idWZbcy5zeW1fYnVmICsgcy5zeW1fbmV4dCsrXSA9IGRpc3QgPj4gODtcbiAgcy5wZW5kaW5nX2J1ZltzLnN5bV9idWYgKyBzLnN5bV9uZXh0KytdID0gbGM7XG4gIGlmIChkaXN0ID09PSAwKSB7XG4gICAgLyogbGMgaXMgdGhlIHVubWF0Y2hlZCBjaGFyICovXG4gICAgcy5keW5fbHRyZWVbbGMgKiAyXS8qLkZyZXEqLysrO1xuICB9IGVsc2Uge1xuICAgIHMubWF0Y2hlcysrO1xuICAgIC8qIEhlcmUsIGxjIGlzIHRoZSBtYXRjaCBsZW5ndGggLSBNSU5fTUFUQ0ggKi9cbiAgICBkaXN0LS07ICAgICAgICAgICAgIC8qIGRpc3QgPSBtYXRjaCBkaXN0YW5jZSAtIDEgKi9cbiAgICAvL0Fzc2VydCgodXNoKWRpc3QgPCAodXNoKU1BWF9ESVNUKHMpICYmXG4gICAgLy8gICAgICAgKHVzaClsYyA8PSAodXNoKShNQVhfTUFUQ0gtTUlOX01BVENIKSAmJlxuICAgIC8vICAgICAgICh1c2gpZF9jb2RlKGRpc3QpIDwgKHVzaClEX0NPREVTLCAgXCJfdHJfdGFsbHk6IGJhZCBtYXRjaFwiKTtcblxuICAgIHMuZHluX2x0cmVlWyhfbGVuZ3RoX2NvZGVbbGNdICsgTElURVJBTFMgKyAxKSAqIDJdLyouRnJlcSovKys7XG4gICAgcy5keW5fZHRyZWVbZF9jb2RlKGRpc3QpICogMl0vKi5GcmVxKi8rKztcbiAgfVxuXG4gIHJldHVybiAocy5zeW1fbmV4dCA9PT0gcy5zeW1fZW5kKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLl90cl9pbml0ICA9IF90cl9pbml0O1xubW9kdWxlLmV4cG9ydHMuX3RyX3N0b3JlZF9ibG9jayA9IF90cl9zdG9yZWRfYmxvY2s7XG5tb2R1bGUuZXhwb3J0cy5fdHJfZmx1c2hfYmxvY2sgID0gX3RyX2ZsdXNoX2Jsb2NrO1xubW9kdWxlLmV4cG9ydHMuX3RyX3RhbGx5ID0gX3RyX3RhbGx5O1xubW9kdWxlLmV4cG9ydHMuX3RyX2FsaWduID0gX3RyX2FsaWduO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbmZ1bmN0aW9uIFpTdHJlYW0oKSB7XG4gIC8qIG5leHQgaW5wdXQgYnl0ZSAqL1xuICB0aGlzLmlucHV0ID0gbnVsbDsgLy8gSlMgc3BlY2lmaWMsIGJlY2F1c2Ugd2UgaGF2ZSBubyBwb2ludGVyc1xuICB0aGlzLm5leHRfaW4gPSAwO1xuICAvKiBudW1iZXIgb2YgYnl0ZXMgYXZhaWxhYmxlIGF0IGlucHV0ICovXG4gIHRoaXMuYXZhaWxfaW4gPSAwO1xuICAvKiB0b3RhbCBudW1iZXIgb2YgaW5wdXQgYnl0ZXMgcmVhZCBzbyBmYXIgKi9cbiAgdGhpcy50b3RhbF9pbiA9IDA7XG4gIC8qIG5leHQgb3V0cHV0IGJ5dGUgc2hvdWxkIGJlIHB1dCB0aGVyZSAqL1xuICB0aGlzLm91dHB1dCA9IG51bGw7IC8vIEpTIHNwZWNpZmljLCBiZWNhdXNlIHdlIGhhdmUgbm8gcG9pbnRlcnNcbiAgdGhpcy5uZXh0X291dCA9IDA7XG4gIC8qIHJlbWFpbmluZyBmcmVlIHNwYWNlIGF0IG91dHB1dCAqL1xuICB0aGlzLmF2YWlsX291dCA9IDA7XG4gIC8qIHRvdGFsIG51bWJlciBvZiBieXRlcyBvdXRwdXQgc28gZmFyICovXG4gIHRoaXMudG90YWxfb3V0ID0gMDtcbiAgLyogbGFzdCBlcnJvciBtZXNzYWdlLCBOVUxMIGlmIG5vIGVycm9yICovXG4gIHRoaXMubXNnID0gJycvKlpfTlVMTCovO1xuICAvKiBub3QgdmlzaWJsZSBieSBhcHBsaWNhdGlvbnMgKi9cbiAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gIC8qIGJlc3QgZ3Vlc3MgYWJvdXQgdGhlIGRhdGEgdHlwZTogYmluYXJ5IG9yIHRleHQgKi9cbiAgdGhpcy5kYXRhX3R5cGUgPSAyLypaX1VOS05PV04qLztcbiAgLyogYWRsZXIzMiB2YWx1ZSBvZiB0aGUgdW5jb21wcmVzc2VkIGRhdGEgKi9cbiAgdGhpcy5hZGxlciA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWlN0cmVhbTtcbiIsImltcG9ydCB7IHBhcnNlQXJyYXlCdWZmZXIgfSBmcm9tICdtaWRpLWpzb24tcGFyc2VyJztcbmltcG9ydCBUcmFjayBmcm9tICcuL3RyYWNrJztcbmltcG9ydCB7IElNaWRpU2V0VGVtcG9FdmVudCwgSU1pZGlOb3RlT25FdmVudCwgSU1pZGlQcm9ncmFtQ2hhbmdlRXZlbnQsIElNaWRpQ29udHJvbENoYW5nZUV2ZW50IH0gZnJvbSAnbWlkaS1qc29uLXBhcnNlci13b3JrZXInO1xuaW1wb3J0ICogYXMgZmFjdG9yaW8gZnJvbSAnLi9mYWN0b3Jpbyc7XG5pbXBvcnQgeyBlcXVhbGl6ZUJQIH0gZnJvbSAnLi9lcXVhbGl6ZXInO1xuaW1wb3J0IG11c2ljQm94QlBTdHJpbmcgZnJvbSAnLi9tdXNpYy1ib3guYnAnO1xuXG50eXBlIEJsdWVQcmludCA9IGZhY3RvcmlvLkJsdWVQcmludDtcblxuY29uc3QgbXVzaWNCb3hCUFRlbXBsYXRlID0gZmFjdG9yaW8uZGVjb2RlQlAobXVzaWNCb3hCUFN0cmluZyk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRpVG9CUChkYXRhOiBBcnJheUJ1ZmZlciwgcGxheWJhY2tNb2RlOiBzdHJpbmcgPSAnbG9jYWwnLCB2b2x1bWU6IG51bWJlciA9IDEuMCwgbG9vcDogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgY29uc3QgbXVzaWNCb3hGaWx0ZXIgPSBbJ2tleScsICdjb250cm9sbGVyJywgJ2NvbnRyb2xsZXItaW5wdXQnLCAnY29udHJvbGxlci1taXNjJ107XG4gICBpZihsb29wKSBtdXNpY0JveEZpbHRlci5wdXNoKCdjb250cm9sbGVyLWxvb3AnLCAnY29udHJvbGxlci1sb29wLXBvcnQnKTtcbiAgIGNvbnN0IG11c2ljQm94QlAgPSBmYWN0b3Jpby5maWx0ZXJCUChcbiAgICAgIG11c2ljQm94QlBUZW1wbGF0ZSxcbiAgICAgIGVudCA9PiBtdXNpY0JveEZpbHRlci5pbmNsdWRlcyhlbnQucGxheWVyX2Rlc2NyaXB0aW9uKSxcbiAgICk7XG5cbiAgIGxldCBtYXhFbnRpdHlJRCA9IDA7XG4gICBsZXQgcGxheWVyQ291bnQgPSAwO1xuICAgbGV0IHRvdGFsU2lnbmFscyA9IDA7XG5cbiAgIGNvbnN0IFtrZXlDZWxsLCBfXSA9IGZhY3RvcmlvLmdlbkNlbGwoWy4uLkFycmF5KDIwMDApXS5tYXAoKF8sIGkpID0+IGkrMSkpO1xuICAgY29uc3Qga2V5RW50ID0gZmFjdG9yaW8uZ2V0RW50aXR5QnlEZXNjcmlwdGlvbihtdXNpY0JveEJQLCAna2V5Jyk7XG4gICBrZXlFbnQuY29udHJvbF9iZWhhdmlvciA9IGtleUNlbGw7XG5cbiAgIGNvbnN0IGxvb3BFbnQgPSBmYWN0b3Jpby5nZXRFbnRpdHlCeURlc2NyaXB0aW9uKG11c2ljQm94QlAsICdjb250cm9sbGVyLWxvb3AtcG9ydCcpO1xuXG4gICBsZXQgbGFzdEtleSA9IGtleUVudDtcbiAgIGxldCBsYXN0Q29udHJvbCA9IGZhY3RvcmlvLmdldEVudGl0eUJ5RGVzY3JpcHRpb24obXVzaWNCb3hCUCwgJ2NvbnRyb2xsZXInKTtcblxuICAgY29uc3QgbWlkaSA9IGF3YWl0IHBhcnNlQXJyYXlCdWZmZXIoZGF0YSk7XG4gICBsZXQgdGVtcG8gPSA1MDAwMDA7XG4gICBjb25zdCBkaXZpc2lvbiA9IG1pZGkuZGl2aXNpb247XG5cbiAgIC8vIGZpbmQgdGVtcG8sIGFzc3VtZSBzaW5nbGUgdGVtcG8gZm9yIG5vd1xuICAgZm9yKGxldCBtaWRpVHJhY2sgb2YgbWlkaS50cmFja3MpIHtcbiAgICAgIGNvbnN0IHRlbXBvVHJhY2sgPSBtaWRpVHJhY2suZmluZChldmVudCA9PiAnc2V0VGVtcG8nIGluIGV2ZW50KSBhcyBJTWlkaVNldFRlbXBvRXZlbnQgfCBudWxsO1xuICAgICAgaWYodGVtcG9UcmFjayAhPSBudWxsKSB7XG4gICAgICAgICB0ZW1wbyA9IHRlbXBvVHJhY2suc2V0VGVtcG8ubWljcm9zZWNvbmRzUGVyUXVhcnRlcjtcbiAgICAgIH1cbiAgIH1cblxuICAgZm9yKGxldCBbaSwgbWlkaVRyYWNrXSBvZiBtaWRpLnRyYWNrcy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gbmV3IFRyYWNrKHRlbXBvLCBtaWRpLmRpdmlzaW9uKTtcbiAgICAgIGZvcihsZXQgZXZlbnQgb2YgbWlkaVRyYWNrKSB7XG4gICAgICAgICB0cmFjay51cGRhdGVEZWx0YShldmVudC5kZWx0YSlcblxuICAgICAgICAgaWYoJ25vdGVPbicgaW4gZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGUgPSAoZXZlbnQgYXMgSU1pZGlOb3RlT25FdmVudCkubm90ZU9uLm5vdGVOdW1iZXI7XG4gICAgICAgICAgICB0cmFjay5wdXNoTm90ZShub3RlKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYoJ3Byb2dyYW1DaGFuZ2UnIGluIGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9ncmFtID0gKGV2ZW50IGFzIElNaWRpUHJvZ3JhbUNoYW5nZUV2ZW50KS5wcm9ncmFtQ2hhbmdlLnByb2dyYW1OdW1iZXI7XG4gICAgICAgICAgICB0cmFjay5zZXRNaWRpSW5zdHJ1bWVudChwcm9ncmFtLCBldmVudC5jaGFubmVsIGFzIG51bWJlcik7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmKCdjb250cm9sQ2hhbmdlJyBpbiBldmVudCkge1xuICAgICAgICAgICAgY29uc3Qge3R5cGUsIHZhbHVlfSA9IChldmVudCBhcyBJTWlkaUNvbnRyb2xDaGFuZ2VFdmVudCkuY29udHJvbENoYW5nZTtcbiAgICAgICAgICAgIGlmKHR5cGUgPT09IDcpIHtcbiAgICAgICAgICAgICAgIHRyYWNrLnNldE1pZGlWb2x1bWUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IoY29uc3QgZGF0YSBvZiB0cmFjay5kYXRhKCkpIHtcbiAgICAgICAgIGNvbnN0IHRyYWNrQlAgPSBmYWN0b3Jpby5maWx0ZXJCUChcbiAgICAgICAgICAgIG11c2ljQm94QlBUZW1wbGF0ZSxcbiAgICAgICAgICAgIGVudCA9PiBbJ3JvbScsICdrZXktcG9ydCcsICdjb250cm9sLXBvcnQnLCAncGxheWVyJ10uaW5jbHVkZXMoZW50LnBsYXllcl9kZXNjcmlwdGlvbikgfHwgZW50Lm5hbWUgPT09ICdwcm9ncmFtbWFibGUtc3BlYWtlcidcbiAgICAgICAgICk7XG5cbiAgICAgICAgIGNvbnN0IFtjZWxsLCBzaWduYWxDb3VudF0gPSBmYWN0b3Jpby5nZW5DZWxsKGRhdGEpO1xuICAgICAgICAgY29uc29sZS5hc3NlcnQoZGF0YS5sZW5ndGggPD0gc2lnbmFsQ291bnQsIGB0b28gbWFueSBub3RlcyBpbiBhIHRyYWNrICR7ZGF0YS5sZW5ndGh9IC8gJHtzaWduYWxDb3VudH1gKTtcblxuICAgICAgICAgY29uc3QgY2VsbEVudCA9IGZhY3RvcmlvLmdldEVudGl0eUJ5RGVzY3JpcHRpb24odHJhY2tCUCwgJ3JvbScpO1xuICAgICAgICAgY2VsbEVudC5jb250cm9sX2JlaGF2aW9yID0gY2VsbDtcblxuICAgICAgICAgY29uc3Qgc3BlYWtlciA9IHRyYWNrQlAuYmx1ZXByaW50LmVudGl0aWVzLmZpbmQoKGVudDogQmx1ZVByaW50KSA9PiBlbnQubmFtZSA9PT0gJ3Byb2dyYW1tYWJsZS1zcGVha2VyJyk7XG4gICAgICAgICBzcGVha2VyLmNvbnRyb2xfYmVoYXZpb3IuY2lyY3VpdF9wYXJhbWV0ZXJzLmluc3RydW1lbnRfaWQgPSB0cmFjay5nZXRJbnN0cnVtZW50SUQoKTtcbiAgICAgICAgIHNwZWFrZXIucGFyYW1ldGVycy5wbGF5YmFja192b2x1bWUgPSB0cmFjay5nZXRWb2x1bWUoKTtcbiAgICAgICAgIHNwZWFrZXIucGFyYW1ldGVycy5wbGF5YmFja19tb2RlID0gcGxheWJhY2tNb2RlO1xuXG4gICAgICAgICBsZXQgbWF4VHJhY2tJZCA9IDA7XG4gICAgICAgICBmb3IoY29uc3QgZW50IG9mIHRyYWNrQlAuYmx1ZXByaW50LmVudGl0aWVzKSB7XG4gICAgICAgICAgICBtYXhUcmFja0lkID0gTWF0aC5tYXgobWF4VHJhY2tJZCwgZW50LmVudGl0eV9udW1iZXIpO1xuICAgICAgICAgICAgZW50LmVudGl0eV9udW1iZXIgKz0gbWF4RW50aXR5SUQ7XG4gICAgICAgICAgICBlbnQucG9zaXRpb24ueCAtPSBwbGF5ZXJDb3VudCAqIDI7XG4gICAgICAgICAgICBtdXNpY0JveEJQLmJsdWVwcmludC5lbnRpdGllcy5wdXNoKGVudCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGZvcihjb25zdCB3aXJlIG9mIHRyYWNrQlAuYmx1ZXByaW50LndpcmVzKSB7XG4gICAgICAgICAgICB3aXJlWzBdICs9IG1heEVudGl0eUlEO1xuICAgICAgICAgICAgd2lyZVsyXSArPSBtYXhFbnRpdHlJRDtcbiAgICAgICAgICAgIG11c2ljQm94QlAuYmx1ZXByaW50LndpcmVzLnB1c2god2lyZSk7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGNvbnN0IGtleVBvcnQgPSBmYWN0b3Jpby5nZXRFbnRpdHlCeURlc2NyaXB0aW9uKHRyYWNrQlAsICdrZXktcG9ydCcpO1xuICAgICAgICAgY29uc3QgY29udHJvbFBvcnQgPSBmYWN0b3Jpby5nZXRFbnRpdHlCeURlc2NyaXB0aW9uKHRyYWNrQlAsICdjb250cm9sLXBvcnQnKTtcblxuICAgICAgICAgbXVzaWNCb3hCUC5ibHVlcHJpbnQud2lyZXMucHVzaChcbiAgICAgICAgICAgIFtsYXN0S2V5LmVudGl0eV9udW1iZXIsIDEsIGtleVBvcnQuZW50aXR5X251bWJlciwgMV0sXG4gICAgICAgICAgICBbbGFzdENvbnRyb2wuZW50aXR5X251bWJlciwgMiwgY29udHJvbFBvcnQuZW50aXR5X251bWJlciwgMl0sXG4gICAgICAgICApO1xuXG4gICAgICAgICBpZihsb29wICYmIHBsYXllckNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBtdXNpY0JveEJQLmJsdWVwcmludC53aXJlcy5wdXNoKFxuICAgICAgICAgICAgICAgW2xvb3BFbnQuZW50aXR5X251bWJlciwgMSwga2V5UG9ydC5lbnRpdHlfbnVtYmVyLCAzXSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXVzaWNCb3hCUC5ibHVlcHJpbnQud2lyZXMucHVzaChcbiAgICAgICAgICAgICAgIFtsYXN0S2V5LmVudGl0eV9udW1iZXIsIDMsIGtleVBvcnQuZW50aXR5X251bWJlciwgM10sXG4gICAgICAgICAgICApO1xuICAgICAgICAgfVxuXG4gICAgICAgICBsYXN0S2V5ID0ga2V5UG9ydDtcbiAgICAgICAgIGxhc3RDb250cm9sID0gY29udHJvbFBvcnQ7XG5cbiAgICAgICAgIG1heEVudGl0eUlEICs9IG1heFRyYWNrSWQ7XG4gICAgICAgICB0b3RhbFNpZ25hbHMgKz0gc2lnbmFsQ291bnQ7XG4gICAgICAgICBwbGF5ZXJDb3VudCsrO1xuICAgICAgfVxuICAgfVxuXG4gICBpZihsb29wKSB7XG4gICAgICBsb29wRW50LmNvbnRyb2xfYmVoYXZpb3IuZGVjaWRlcl9jb25kaXRpb25zLmNvbmRpdGlvbnNbMF0uY29uc3RhbnQgPSB0b3RhbFNpZ25hbHMgKyBwbGF5ZXJDb3VudDtcbiAgIH1cblxuICAgZXF1YWxpemVCUChtdXNpY0JveEJQLCB2b2x1bWUpO1xuXG4gICByZXR1cm4gZmFjdG9yaW8uZW5jb2RlQlAobXVzaWNCb3hCUCk7XG59XG4iLCJpbXBvcnQgeyBJbnN0cnVtZW50IH0gZnJvbSAnLi90cmFjayc7XG5pbXBvcnQgeyBCbHVlUHJpbnQgfSBmcm9tICcuL2ZhY3RvcmlvJztcblxuY29uc3QgVk9MVU1FX0ZBQ1RPUjoge1tpbnN0cnVtZW50IGluIEluc3RydW1lbnRdOiBudW1iZXJ9ID0ge1xuICAgW0luc3RydW1lbnQuTm90aGluZ106ICAgICAgIDAuMCxcbiAgIFtJbnN0cnVtZW50LlBpYW5vXTogICAgICAgICAxLjAsXG4gICBbSW5zdHJ1bWVudC5EcnVtS2l0XTogICAgICAgMC41LFxuICAgW0luc3RydW1lbnQuQmFzc106ICAgICAgICAgIDEuMCxcbiAgIFtJbnN0cnVtZW50LkxlYWRdOiAgICAgICAgICAxLjAsXG4gICBbSW5zdHJ1bWVudC5TYXd0b290aF06ICAgICAgMS4wLFxuICAgW0luc3RydW1lbnQuU3F1YXJlXTogICAgICAgIDAuMixcbiAgIFtJbnN0cnVtZW50LkNlbGVzdGFdOiAgICAgICAxLjAsXG4gICBbSW5zdHJ1bWVudC5WaWJyYXBob25lXTogICAgMS4wLFxuICAgW0luc3RydW1lbnQuUGx1Y2tlZFN0cmluZ106IDEuMCxcbiAgIFtJbnN0cnVtZW50LlN0ZWVsRHJ1bV06ICAgICAxLjAsXG4gICBbSW5zdHJ1bWVudC5Xb29kQmxvY2tdOiAgICAgMS4wLFxuICAgW0luc3RydW1lbnQuQmFzc0RydW1dOiAgICAgIDEuMCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl6ZUJQKGJwOiBCbHVlUHJpbnQsIHZvbHVtZTogbnVtYmVyKSB7XG4gICBjb25zdCBzcGVha2VycyA9IGJwLmJsdWVwcmludC5lbnRpdGllcy5maWx0ZXIoKGVudDogQmx1ZVByaW50KSA9PiBlbnQubmFtZSA9PT0gJ3Byb2dyYW1tYWJsZS1zcGVha2VyJyk7XG4gICBsZXQgbWF4Vm9sdW1lID0gMC4wO1xuICAgZm9yKGNvbnN0IHNwZWFrZXIgb2Ygc3BlYWtlcnMpIHtcbiAgICAgIGNvbnN0IGZhY3RvciA9IFZPTFVNRV9GQUNUT1Jbc3BlYWtlci5jb250cm9sX2JlaGF2aW9yLmNpcmN1aXRfcGFyYW1ldGVycy5pbnN0cnVtZW50X2lkIGFzIEluc3RydW1lbnRdO1xuICAgICAgaWYoc3BlYWtlci5wYXJhbWV0ZXJzLnBsYXliYWNrX3ZvbHVtZSA9PT0gMClcbiAgICAgICAgIHNwZWFrZXIucGFyYW1ldGVycy5wbGF5YmFja192b2x1bWUgPSAxLjA7XG4gICAgICBzcGVha2VyLnBhcmFtZXRlcnMucGxheWJhY2tfdm9sdW1lICo9IGZhY3RvcjtcbiAgICAgIG1heFZvbHVtZSA9IE1hdGgubWF4KG1heFZvbHVtZSwgc3BlYWtlci5wYXJhbWV0ZXJzLnBsYXliYWNrX3ZvbHVtZSk7XG4gICB9XG4gICBmb3IoY29uc3Qgc3BlYWtlciBvZiBzcGVha2Vycykge1xuICAgICAgc3BlYWtlci5wYXJhbWV0ZXJzLnBsYXliYWNrX3ZvbHVtZSAqPSB2b2x1bWUgLyBtYXhWb2x1bWU7XG4gICB9XG59XG4iLCJpbXBvcnQgcGFrbyBmcm9tICdwYWtvJztcbmltcG9ydCBzaWduYWxzIGZyb20gJy4vc2lnbmFscyc7XG5cbmV4cG9ydCB0eXBlIEJsdWVQcmludCA9IGFueTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbkJQRW50aXR5KGVudGl0aWVzOiBCbHVlUHJpbnRbXSk6IEJsdWVQcmludCB7XG4gICBjb25zdCBibHVlcHJpbnQ6IEJsdWVQcmludCA9IHtcbiAgICAgIFwiYmx1ZXByaW50XCI6IHtcbiAgICAgICAgIFwiaWNvbnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgXCJzaWduYWxcIjoge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29uc3RhbnQtY29tYmluYXRvclwiXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgXCJpbmRleFwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICBdLFxuICAgICAgICAgXCJlbnRpdGllc1wiOiBbXG4gICAgICAgICBdLFxuICAgICAgICAgXCJpdGVtXCI6IFwiYmx1ZXByaW50XCJcbiAgICAgIH1cbiAgIH07XG4gICBmb3IobGV0IFtpLCBlbnRdIG9mIGVudGl0aWVzLmVudHJpZXMoKSkge1xuICAgICAgYmx1ZXByaW50LmJsdWVwcmludC5lbnRpdGllcy5wdXNoKHtcbiAgICAgICAgIC4uLmVudCxcbiAgICAgICAgIGluZGV4OiBpLFxuICAgICAgfSk7XG4gICB9XG4gICByZXR1cm4gYmx1ZXByaW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuQ2VsbChcbiAgIGNvbnRlbnQ6IG51bWJlcltdLFxuICAgaWdub3JlOiB7W3R5cGU6IHN0cmluZ106IHN0cmluZ1tdfSA9IHtcbiAgICAgICd2aXJ0dWFsJzogW1xuICAgICAgICAgJ3NpZ25hbC1BJyxcbiAgICAgICAgICdzaWduYWwtQicsXG4gICAgICBdLFxuICAgfVxuKTogW0JsdWVQcmludCwgbnVtYmVyXSB7XG4gICBjb25zdCBrZXlzOiBCbHVlUHJpbnQgPSB7XG4gICAgICBcInNlY3Rpb25zXCI6IHtcbiAgICAgICAgIFwic2VjdGlvbnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgXCJpbmRleFwiOiAxLFxuICAgICAgICAgICAgICAgXCJmaWx0ZXJzXCI6IFtcbiAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIF1cbiAgICAgIH1cbiAgIH07XG4gICBsZXQgaW5kZXggPSAwO1xuICAgZm9yKGxldCBzaWduYWxUeXBlIG9mIE9iamVjdC5rZXlzKHNpZ25hbHMpKSB7XG4gICAgICBmb3IobGV0IHNpZ25hbCBvZiBzaWduYWxzW3NpZ25hbFR5cGVdKSB7XG4gICAgICAgICBpZihpZ25vcmVbc2lnbmFsVHlwZV0gJiYgKGlnbm9yZVtzaWduYWxUeXBlXVswXSA9PSAnKicgfHwgaWdub3JlW3NpZ25hbFR5cGVdLmluY2x1ZGVzKHNpZ25hbCkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgIH1cbiAgICAgICAgIGtleXMuc2VjdGlvbnMuc2VjdGlvbnNbMF0uZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgIFwiaW5kZXhcIjogaW5kZXgrMSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBzaWduYWxUeXBlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IHNpZ25hbCxcbiAgICAgICAgICAgIFwicXVhbGl0eVwiOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgXCJjb21wYXJhdG9yXCI6IFwiPVwiLFxuICAgICAgICAgICAgXCJjb3VudFwiOiBjb250ZW50W2luZGV4XSxcbiAgICAgICAgIH0pO1xuICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgIGlmKGluZGV4ID49IGNvbnRlbnQubGVuZ3RoKSBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmKGluZGV4ID49IGNvbnRlbnQubGVuZ3RoKSBicmVhaztcbiAgIH1cbiAgIHJldHVybiBba2V5cywgaW5kZXhdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50aXR5QnlEZXNjcmlwdGlvbihicDogQmx1ZVByaW50LCBuYW1lOiBzdHJpbmcpOiBCbHVlUHJpbnQge1xuICAgcmV0dXJuIGJwLmJsdWVwcmludC5lbnRpdGllcy5maWx0ZXIoKGVudDogQmx1ZVByaW50KSA9PiBlbnQucGxheWVyX2Rlc2NyaXB0aW9uID09IG5hbWUpWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQlAoYnA6IEJsdWVQcmludCwgZmlsdGVyOiAoKGVudDogQmx1ZVByaW50KSA9PiBib29sZWFuKSB8IG51bGwpIHtcbiAgIGNvbnN0IGJwZiA9IHN0cnVjdHVyZWRDbG9uZShicCk7XG4gICBpZihmaWx0ZXIgPT0gbnVsbCkgcmV0dXJuIGJwZjtcblxuICAgYnBmLmJsdWVwcmludC5lbnRpdGllcyA9IGJwZi5ibHVlcHJpbnQuZW50aXRpZXMuZmlsdGVyKGZpbHRlcik7XG5cbiAgIGNvbnN0IGlkcyA9IGJwZi5ibHVlcHJpbnQuZW50aXRpZXMubWFwKChlbnQ6IEJsdWVQcmludCkgPT4gZW50LmVudGl0eV9udW1iZXIpO1xuICAgYnBmLmJsdWVwcmludC53aXJlcyA9IGJwZi5ibHVlcHJpbnQud2lyZXMuZmlsdGVyKCh3aXJlOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSkgPT5cbiAgICAgIGlkcy5pbmNsdWRlcyh3aXJlWzBdKSAmJiBpZHMuaW5jbHVkZXMod2lyZVsyXSkpO1xuXG4gICByZXR1cm4gYnBmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlQlAoYmx1ZXByaW50OiBCbHVlUHJpbnQpOiBzdHJpbmcge1xuICAgY29uc3QgY29tcHJlc3NlZCA9IHBha28uZGVmbGF0ZShKU09OLnN0cmluZ2lmeShibHVlcHJpbnQpKTtcbiAgIGNvbnN0IGI2NCA9IGJ0b2EoU3RyaW5nLmZyb21Db2RlUG9pbnQuYXBwbHkobnVsbCwgY29tcHJlc3NlZCkpO1xuICAgcmV0dXJuICcwJyArIGI2NDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUJQKGJsdWVwcmludDogc3RyaW5nKTogQmx1ZVByaW50IHtcbiAgIGNvbnN0IGJpbmFyeSA9IGF0b2IoYmx1ZXByaW50LnNsaWNlKDEpKTtcbiAgIGNvbnN0IGNvbXByZXNzZWQgPSBVaW50OEFycmF5LmZyb20oYmluYXJ5LCBjID0+IGMuY2hhckNvZGVBdCgwKSk7XG4gICBjb25zdCBpbmZsYXRlZCA9IHBha28uaW5mbGF0ZShjb21wcmVzc2VkKTtcbiAgIGNvbnN0IGRlY29kZWQgPSBuZXcgVGV4dERlY29kZXIoJ1VURi04JykuZGVjb2RlKGluZmxhdGVkKTtcbiAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWQpO1xufVxuIiwiaW1wb3J0IHsgbWlkaVRvQlAgfSBmcm9tICcuL2NvbnZlcnRlcic7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICBjb25zdCBnZW5lcmF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdGUtYnV0dG9uJyk7XG4gICBjb25zdCBjb3B5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5LWJ1dHRvbicpO1xuICAgY29uc3QgZmlsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkaS11cGxvYWQnKTtcbiAgIGNvbnN0IG91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnAtb3V0cHV0Jyk7XG4gICBjb25zdCBtb2RlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVha2VyLW1vZGUnKTtcbiAgIGNvbnN0IHZvbHVtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lJyk7XG4gICBjb25zdCBsb29wRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb29wJyk7XG5cbiAgIGlmKFxuICAgICAgZmlsZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXG4gICAgICBtb2RlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmXG4gICAgICB2b2x1bWVFbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJlxuICAgICAgb3V0cHV0RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmXG4gICAgICBsb29wRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50XG4gICApIHtcbiAgICAgIGdlbmVyYXRlRWxlbWVudC5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgaWYoZmlsZUVsZW1lbnQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVFbGVtZW50LmZpbGVzWzBdO1xuICAgICAgICAgICAgY29uc3QgYnAgPSBhd2FpdCBtaWRpVG9CUChcbiAgICAgICAgICAgICAgIGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSxcbiAgICAgICAgICAgICAgIG1vZGVFbGVtZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgdm9sdW1lRWxlbWVudC52YWx1ZUFzTnVtYmVyIC8gK3ZvbHVtZUVsZW1lbnQubWF4LFxuICAgICAgICAgICAgICAgbG9vcEVsZW1lbnQudmFsdWUgPT09ICdmb3JldmVyJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBvdXRwdXRFbGVtZW50LnRleHRDb250ZW50ID0gYnA7XG4gICAgICAgICAgICBjb3B5RWxlbWVudC50ZXh0Q29udGVudCA9IFwiQ29weVwiO1xuICAgICAgICAgfVxuICAgICAgfTtcbiAgIH1cblxuICAgaWYoXG4gICAgICBjb3B5RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50ICYmXG4gICAgICBvdXRwdXRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICkge1xuICAgICAgY29weUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChvdXRwdXRFbGVtZW50LnRleHRDb250ZW50KTtcbiAgICAgICAgIGNvcHlFbGVtZW50LnRleHRDb250ZW50ID0gXCJDb3BpZWRcIjtcbiAgICAgIH0pO1xuICAgfVxufVxuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbiIsImNvbnN0IHNpZ25hbHM6IHtbdHlwZTogc3RyaW5nXTogc3RyaW5nW119ID0ge1xuICAgJ2ZsdWlkJzogW1xuICAgICAgJ2FtbW9uaWEnLFxuICAgICAgJ2FtbW9uaWFjYWwtc29sdXRpb24nLFxuICAgICAgJ2NydWRlLW9pbCcsXG4gICAgICAnZWxlY3Ryb2x5dGUnLFxuICAgICAgJ2ZsdW9yaW5lJyxcbiAgICAgICdmbHVvcm9rZXRvbmUtY29sZCcsXG4gICAgICAnZmx1b3Jva2V0b25lLWhvdCcsXG4gICAgICAnZnVzaW9uLXBsYXNtYScsXG4gICAgICAnaGVhdnktb2lsJyxcbiAgICAgICdob2xtaXVtLXNvbHV0aW9uJyxcbiAgICAgICdsYXZhJyxcbiAgICAgICdsaWdodC1vaWwnLFxuICAgICAgJ2xpdGhpdW0tYnJpbmUnLFxuICAgICAgJ2x1YnJpY2FudCcsXG4gICAgICAnbW9sdGVuLWNvcHBlcicsXG4gICAgICAnbW9sdGVuLWlyb24nLFxuICAgICAgJ3BldHJvbGV1bS1nYXMnLFxuICAgICAgJ3N0ZWFtJyxcbiAgICAgICdzdWxmdXJpYy1hY2lkJyxcbiAgICAgICd0aHJ1c3Rlci1mdWVsJyxcbiAgICAgICd0aHJ1c3Rlci1veGlkaXplcicsXG4gICAgICAnd2F0ZXInLFxuICAgXSxcbiAgICdpdGVtJzogW1xuICAgICAgJ2FjY3VtdWxhdG9yJyxcbiAgICAgICdhY3RpdmUtcHJvdmlkZXItY2hlc3QnLFxuICAgICAgJ2FkdmFuY2VkLWNpcmN1aXQnLFxuICAgICAgJ2FncmljdWx0dXJhbC10b3dlcicsXG4gICAgICAnYXJpdGhtZXRpYy1jb21iaW5hdG9yJyxcbiAgICAgICdhcnRpZmljaWFsLWplbGx5bnV0LXNvaWwnLFxuICAgICAgJ2FydGlmaWNpYWwteXVtYWtvLXNvaWwnLFxuICAgICAgJ2FydGlsbGVyeS10dXJyZXQnLFxuICAgICAgJ2Fzc2VtYmxpbmctbWFjaGluZS0xJyxcbiAgICAgICdhc3NlbWJsaW5nLW1hY2hpbmUtMicsXG4gICAgICAnYXNzZW1ibGluZy1tYWNoaW5lLTMnLFxuICAgICAgJ2FzdGVyb2lkLWNvbGxlY3RvcicsXG4gICAgICAnYmFycmVsJyxcbiAgICAgICdiYXR0ZXJ5JyxcbiAgICAgICdiYXR0ZXJ5LWVxdWlwbWVudCcsXG4gICAgICAnYmF0dGVyeS1tazItZXF1aXBtZW50JyxcbiAgICAgICdiYXR0ZXJ5LW1rMy1lcXVpcG1lbnQnLFxuICAgICAgJ2JlYWNvbicsXG4gICAgICAnYmVsdC1pbW11bml0eS1lcXVpcG1lbnQnLFxuICAgICAgJ2JpZy1lbGVjdHJpYy1wb2xlJyxcbiAgICAgICdiaWctbWluaW5nLWRyaWxsJyxcbiAgICAgICdiaW9jaGFtYmVyJyxcbiAgICAgICdiaW9sYWInLFxuICAgICAgJ2JpdGVyLWVnZycsXG4gICAgICAnYm9pbGVyJyxcbiAgICAgICdidWZmZXItY2hlc3QnLFxuICAgICAgJ2J1bGstaW5zZXJ0ZXInLFxuICAgICAgJ2J1cm5lci1nZW5lcmF0b3InLFxuICAgICAgJ2J1cm5lci1pbnNlcnRlcicsXG4gICAgICAnYnVybmVyLW1pbmluZy1kcmlsbCcsXG4gICAgICAnY2FsY2l0ZScsXG4gICAgICAnY2FwdGl2ZS1iaXRlci1zcGF3bmVyJyxcbiAgICAgICdjYXJib24nLFxuICAgICAgJ2NhcmJvbi1maWJlcicsXG4gICAgICAnY2FyYm9uaWMtYXN0ZXJvaWQtY2h1bmsnLFxuICAgICAgJ2NhcmdvLWJheScsXG4gICAgICAnY2FyZ28tbGFuZGluZy1wYWQnLFxuICAgICAgJ2NlbnRyaWZ1Z2UnLFxuICAgICAgJ2NoZW1pY2FsLXBsYW50JyxcbiAgICAgICdjb2FsJyxcbiAgICAgICdjb2luJyxcbiAgICAgICdjb25jcmV0ZScsXG4gICAgICAnY29uc3RhbnQtY29tYmluYXRvcicsXG4gICAgICAnY29uc3RydWN0aW9uLXJvYm90JyxcbiAgICAgICdjb3BwZXItYmFjdGVyaWEnLFxuICAgICAgJ2NvcHBlci1jYWJsZScsXG4gICAgICAnY29wcGVyLW9yZScsXG4gICAgICAnY29wcGVyLXBsYXRlJyxcbiAgICAgICdjb3BwZXItd2lyZScsXG4gICAgICAnY3J1ZGUtb2lsLWJhcnJlbCcsXG4gICAgICAnY3J1c2hlcicsXG4gICAgICAnY3J5b2dlbmljLXBsYW50JyxcbiAgICAgICdkZWNpZGVyLWNvbWJpbmF0b3InLFxuICAgICAgJ2RlcGxldGVkLXVyYW5pdW0tZnVlbC1jZWxsJyxcbiAgICAgICdkaXNjaGFyZ2UtZGVmZW5zZS1lcXVpcG1lbnQnLFxuICAgICAgJ2Rpc3BsYXktcGFuZWwnLFxuICAgICAgJ2VsZWN0cmljLWVuZXJneS1pbnRlcmZhY2UnLFxuICAgICAgJ2VsZWN0cmljLWVuZ2luZS11bml0JyxcbiAgICAgICdlbGVjdHJpYy1mdXJuYWNlJyxcbiAgICAgICdlbGVjdHJpYy1taW5pbmctZHJpbGwnLFxuICAgICAgJ2VsZWN0cm9tYWduZXRpYy1wbGFudCcsXG4gICAgICAnZWxlY3Ryb25pYy1jaXJjdWl0JyxcbiAgICAgICdlbXB0eS1tb2R1bGUtc2xvdCcsXG4gICAgICAnZW5lcmd5LXNoaWVsZC1lcXVpcG1lbnQnLFxuICAgICAgJ2VuZXJneS1zaGllbGQtbWsyLWVxdWlwbWVudCcsXG4gICAgICAnZW5naW5lLXVuaXQnLFxuICAgICAgJ2V4b3NrZWxldG9uLWVxdWlwbWVudCcsXG4gICAgICAnZXhwbG9zaXZlcycsXG4gICAgICAnZXhwcmVzcy1sb2FkZXInLFxuICAgICAgJ2V4cHJlc3Mtc3BsaXR0ZXInLFxuICAgICAgJ2V4cHJlc3MtdHJhbnNwb3J0LWJlbHQnLFxuICAgICAgJ2V4cHJlc3MtdW5kZXJncm91bmQtYmVsdCcsXG4gICAgICAnZmFzdC1pbnNlcnRlcicsXG4gICAgICAnZmFzdC1sb2FkZXInLFxuICAgICAgJ2Zhc3Qtc3BsaXR0ZXInLFxuICAgICAgJ2Zhc3QtdHJhbnNwb3J0LWJlbHQnLFxuICAgICAgJ2Zhc3QtdW5kZXJncm91bmQtYmVsdCcsXG4gICAgICAnZmlzc2lvbi1yZWFjdG9yLWVxdWlwbWVudCcsXG4gICAgICAnZmxhbWV0aHJvd2VyLXR1cnJldCcsXG4gICAgICAnZmx1b3Jva2V0b25lLWNvbGQtYmFycmVsJyxcbiAgICAgICdmbHVvcm9rZXRvbmUtaG90LWJhcnJlbCcsXG4gICAgICAnZmx5aW5nLXJvYm90LWZyYW1lJyxcbiAgICAgICdmb3VuZGF0aW9uJyxcbiAgICAgICdmb3VuZHJ5JyxcbiAgICAgICdmdXNpb24tZ2VuZXJhdG9yJyxcbiAgICAgICdmdXNpb24tcG93ZXItY2VsbCcsXG4gICAgICAnZnVzaW9uLXJlYWN0b3InLFxuICAgICAgJ2Z1c2lvbi1yZWFjdG9yLWVxdWlwbWVudCcsXG4gICAgICAnZ2F0ZScsXG4gICAgICAnZ3JlZW4td2lyZScsXG4gICAgICAnZ3VuLXR1cnJldCcsXG4gICAgICAnaGF6YXJkLWNvbmNyZXRlJyxcbiAgICAgICdoZWF0LWV4Y2hhbmdlcicsXG4gICAgICAnaGVhdC1pbnRlcmZhY2UnLFxuICAgICAgJ2hlYXQtcGlwZScsXG4gICAgICAnaGVhdGluZy10b3dlcicsXG4gICAgICAnaGVhdnktb2lsLWJhcnJlbCcsXG4gICAgICAnaG9sbWl1bS1vcmUnLFxuICAgICAgJ2hvbG1pdW0tcGxhdGUnLFxuICAgICAgJ2ljZScsXG4gICAgICAnaWNlLXBsYXRmb3JtJyxcbiAgICAgICdpbmZpbml0eS1jaGVzdCcsXG4gICAgICAnaW5maW5pdHktcGlwZScsXG4gICAgICAnaW5zZXJ0ZXInLFxuICAgICAgJ2lyb24tYmFjdGVyaWEnLFxuICAgICAgJ2lyb24tY2hlc3QnLFxuICAgICAgJ2lyb24tZ2Vhci13aGVlbCcsXG4gICAgICAnaXJvbi1vcmUnLFxuICAgICAgJ2lyb24tcGxhdGUnLFxuICAgICAgJ2lyb24tc3RpY2snLFxuICAgICAgJ2plbGx5bnV0LXNlZWQnLFxuICAgICAgJ2xhYicsXG4gICAgICAnbGFuZC1taW5lJyxcbiAgICAgICdsYW5kZmlsbCcsXG4gICAgICAnbGFuZS1zcGxpdHRlcicsXG4gICAgICAnbGFzZXItdHVycmV0JyxcbiAgICAgICdsaWdodC1vaWwtYmFycmVsJyxcbiAgICAgICdsaWdodG5pbmctY29sbGVjdG9yJyxcbiAgICAgICdsaWdodG5pbmctcm9kJyxcbiAgICAgICdsaW5rZWQtYmVsdCcsXG4gICAgICAnbGlua2VkLWNoZXN0JyxcbiAgICAgICdsaXRoaXVtJyxcbiAgICAgICdsaXRoaXVtLXBsYXRlJyxcbiAgICAgICdsb2FkZXInLFxuICAgICAgJ2xvZ2lzdGljLXJvYm90JyxcbiAgICAgICdsb25nLWhhbmRlZC1pbnNlcnRlcicsXG4gICAgICAnbG93LWRlbnNpdHktc3RydWN0dXJlJyxcbiAgICAgICdsdWJyaWNhbnQtYmFycmVsJyxcbiAgICAgICdtZWRpdW0tZWxlY3RyaWMtcG9sZScsXG4gICAgICAnbWV0YWxsaWMtYXN0ZXJvaWQtY2h1bmsnLFxuICAgICAgJ25pZ2h0LXZpc2lvbi1lcXVpcG1lbnQnLFxuICAgICAgJ251Y2xlYXItZnVlbCcsXG4gICAgICAnbnVjbGVhci1yZWFjdG9yJyxcbiAgICAgICdudXRyaWVudHMnLFxuICAgICAgJ29mZnNob3JlLXB1bXAnLFxuICAgICAgJ29pbC1yZWZpbmVyeScsXG4gICAgICAnb3Zlcmdyb3d0aC1qZWxseW51dC1zb2lsJyxcbiAgICAgICdvdmVyZ3Jvd3RoLXl1bWFrby1zb2lsJyxcbiAgICAgICdveGlkZS1hc3Rlcm9pZC1jaHVuaycsXG4gICAgICAncGFzc2l2ZS1wcm92aWRlci1jaGVzdCcsXG4gICAgICAncGVudGFwb2QtZWdnJyxcbiAgICAgICdwZXJzb25hbC1sYXNlci1kZWZlbnNlLWVxdWlwbWVudCcsXG4gICAgICAncGVyc29uYWwtcm9ib3BvcnQtZXF1aXBtZW50JyxcbiAgICAgICdwZXJzb25hbC1yb2JvcG9ydC1tazItZXF1aXBtZW50JyxcbiAgICAgICdwZXRyb2xldW0tZ2FzLWJhcnJlbCcsXG4gICAgICAncGlwZScsXG4gICAgICAncGlwZS10by1ncm91bmQnLFxuICAgICAgJ3BsYXN0aWMtYmFyJyxcbiAgICAgICdwb3dlci1zd2l0Y2gnLFxuICAgICAgJ3Byb2Nlc3NpbmctdW5pdCcsXG4gICAgICAncHJvZ3JhbW1hYmxlLXNwZWFrZXInLFxuICAgICAgJ3Byb21ldGhpdW0tYXN0ZXJvaWQtY2h1bmsnLFxuICAgICAgJ3B1bXAnLFxuICAgICAgJ3B1bXBqYWNrJyxcbiAgICAgICdxdWFudHVtLXByb2Nlc3NvcicsXG4gICAgICAncmFkYXInLFxuICAgICAgJ3JhaWwtY2hhaW4tc2lnbmFsJyxcbiAgICAgICdyYWlsLXNpZ25hbCcsXG4gICAgICAncmFpbC1zdXBwb3J0JyxcbiAgICAgICdyYWlsZ3VuLXR1cnJldCcsXG4gICAgICAncmVjeWNsZXInLFxuICAgICAgJ3JlZC13aXJlJyxcbiAgICAgICdyZWZpbmVkLWNvbmNyZXRlJyxcbiAgICAgICdyZWZpbmVkLWhhemFyZC1jb25jcmV0ZScsXG4gICAgICAncmVxdWVzdGVyLWNoZXN0JyxcbiAgICAgICdyb2JvcG9ydCcsXG4gICAgICAncm9ja2V0LWZ1ZWwnLFxuICAgICAgJ3JvY2tldC1wYXJ0JyxcbiAgICAgICdyb2NrZXQtc2lsbycsXG4gICAgICAncm9ja2V0LXR1cnJldCcsXG4gICAgICAnc2NpZW5jZScsXG4gICAgICAnc2NyYXAnLFxuICAgICAgJ3NlbGVjdG9yLWNvbWJpbmF0b3InLFxuICAgICAgJ3NpbXBsZS1lbnRpdHktd2l0aC1mb3JjZScsXG4gICAgICAnc2ltcGxlLWVudGl0eS13aXRoLW93bmVyJyxcbiAgICAgICdzbWFsbC1lbGVjdHJpYy1wb2xlJyxcbiAgICAgICdzbWFsbC1sYW1wJyxcbiAgICAgICdzb2xhci1wYW5lbCcsXG4gICAgICAnc29sYXItcGFuZWwtZXF1aXBtZW50JyxcbiAgICAgICdzb2xpZC1mdWVsJyxcbiAgICAgICdzcGFjZS1wbGF0Zm9ybS1mb3VuZGF0aW9uJyxcbiAgICAgICdzcGFjZS1wbGF0Zm9ybS1odWInLFxuICAgICAgJ3NwbGl0dGVyJyxcbiAgICAgICdzcG9pbGFnZScsXG4gICAgICAnc3RhY2staW5zZXJ0ZXInLFxuICAgICAgJ3N0ZWFtLWVuZ2luZScsXG4gICAgICAnc3RlYW0tdHVyYmluZScsXG4gICAgICAnc3RlZWwtY2hlc3QnLFxuICAgICAgJ3N0ZWVsLWZ1cm5hY2UnLFxuICAgICAgJ3N0ZWVsLXBsYXRlJyxcbiAgICAgICdzdG9uZScsXG4gICAgICAnc3RvbmUtYnJpY2snLFxuICAgICAgJ3N0b25lLWZ1cm5hY2UnLFxuICAgICAgJ3N0b25lLXdhbGwnLFxuICAgICAgJ3N0b3JhZ2UtY2hlc3QnLFxuICAgICAgJ3N0b3JhZ2UtdGFuaycsXG4gICAgICAnc3Vic3RhdGlvbicsXG4gICAgICAnc3VsZnVyJyxcbiAgICAgICdzdWxmdXJpYy1hY2lkLWJhcnJlbCcsXG4gICAgICAnc3VwZXJjYXBhY2l0b3InLFxuICAgICAgJ3N1cGVyY29uZHVjdG9yJyxcbiAgICAgICd0ZXNsYS10dXJyZXQnLFxuICAgICAgJ3RocnVzdGVyJyxcbiAgICAgICd0b29sYmVsdC1lcXVpcG1lbnQnLFxuICAgICAgJ3RyYWluLXN0b3AnLFxuICAgICAgJ3RyYW5zcG9ydC1iZWx0JyxcbiAgICAgICd0cmVlLXNlZWQnLFxuICAgICAgJ3R1bmdzdGVuLWNhcmJpZGUnLFxuICAgICAgJ3R1bmdzdGVuLW9yZScsXG4gICAgICAndHVuZ3N0ZW4tcGxhdGUnLFxuICAgICAgJ3R1cmJvLWxvYWRlcicsXG4gICAgICAndHVyYm8tc3BsaXR0ZXInLFxuICAgICAgJ3R1cmJvLXRyYW5zcG9ydC1iZWx0JyxcbiAgICAgICd0dXJiby11bmRlcmdyb3VuZC1iZWx0JyxcbiAgICAgICd1bmRlcmdyb3VuZC1iZWx0JyxcbiAgICAgICd1cmFuaXVtLTIzNScsXG4gICAgICAndXJhbml1bS0yMzgnLFxuICAgICAgJ3VyYW5pdW0tZnVlbC1jZWxsJyxcbiAgICAgICd1cmFuaXVtLW9yZScsXG4gICAgICAnd2F0ZXItYmFycmVsJyxcbiAgICAgICd3b29kJyxcbiAgICAgICd3b29kZW4tY2hlc3QnLFxuICAgICAgJ3l1bWFrby1zZWVkJyxcbiAgIF0sXG4gICAncXVhbGl0eSc6IFtcbiAgICAgICdlcGljJyxcbiAgICAgICdsZWdlbmRhcnknLFxuICAgICAgJ25vcm1hbCcsXG4gICAgICAncmFyZScsXG4gICAgICAndW5jb21tb24nLFxuICAgXSxcbiAgICd2aXJ0dWFsJzogW1xuICAgICAgJ2Rvd24tYXJyb3cnLFxuICAgICAgJ2Rvd24tbGVmdC1hcnJvdycsXG4gICAgICAnZG93bi1yaWdodC1hcnJvdycsXG4gICAgICAnbGVmdC1hcnJvdycsXG4gICAgICAncmlnaHQtYXJyb3cnLFxuICAgICAgJ3NoYXBlLWNpcmNsZScsXG4gICAgICAnc2hhcGUtY29ybmVyJyxcbiAgICAgICdzaGFwZS1jcm9zcycsXG4gICAgICAnc2hhcGUtY3VydmUnLFxuICAgICAgJ3NoYXBlLWRpYWdvbmFsJyxcbiAgICAgICdzaGFwZS1kaWFnb25hbC1jcm9zcycsXG4gICAgICAnc2hhcGUtaG9yaXpvbnRhbCcsXG4gICAgICAnc2hhcGUtdCcsXG4gICAgICAnc2hhcGUtdmVydGljYWwnLFxuICAgICAgJ3NpZ25hbC0wJyxcbiAgICAgICdzaWduYWwtMScsXG4gICAgICAnc2lnbmFsLTInLFxuICAgICAgJ3NpZ25hbC0zJyxcbiAgICAgICdzaWduYWwtNCcsXG4gICAgICAnc2lnbmFsLTUnLFxuICAgICAgJ3NpZ25hbC02JyxcbiAgICAgICdzaWduYWwtNycsXG4gICAgICAnc2lnbmFsLTgnLFxuICAgICAgJ3NpZ25hbC05JyxcbiAgICAgICdzaWduYWwtQScsXG4gICAgICAnc2lnbmFsLUInLFxuICAgICAgJ3NpZ25hbC1DJyxcbiAgICAgICdzaWduYWwtRCcsXG4gICAgICAnc2lnbmFsLUUnLFxuICAgICAgJ3NpZ25hbC1GJyxcbiAgICAgICdzaWduYWwtRycsXG4gICAgICAnc2lnbmFsLUgnLFxuICAgICAgJ3NpZ25hbC1JJyxcbiAgICAgICdzaWduYWwtSicsXG4gICAgICAnc2lnbmFsLUsnLFxuICAgICAgJ3NpZ25hbC1MJyxcbiAgICAgICdzaWduYWwtTScsXG4gICAgICAnc2lnbmFsLU4nLFxuICAgICAgJ3NpZ25hbC1PJyxcbiAgICAgICdzaWduYWwtUCcsXG4gICAgICAnc2lnbmFsLVEnLFxuICAgICAgJ3NpZ25hbC1SJyxcbiAgICAgICdzaWduYWwtUycsXG4gICAgICAnc2lnbmFsLVQnLFxuICAgICAgJ3NpZ25hbC1VJyxcbiAgICAgICdzaWduYWwtVicsXG4gICAgICAnc2lnbmFsLVcnLFxuICAgICAgJ3NpZ25hbC1YJyxcbiAgICAgICdzaWduYWwtWScsXG4gICAgICAnc2lnbmFsLVonLFxuICAgICAgJ3NpZ25hbC1hbnktcXVhbGl0eScsXG4gICAgICAnc2lnbmFsLWJsYWNrJyxcbiAgICAgICdzaWduYWwtYmx1ZScsXG4gICAgICAnc2lnbmFsLWNoZWNrJyxcbiAgICAgICdzaWduYWwtY3lhbicsXG4gICAgICAnc2lnbmFsLWRlbnknLFxuICAgICAgJ3NpZ25hbC1kb3QnLFxuICAgICAgJ3NpZ25hbC1naG9zdCcsXG4gICAgICAnc2lnbmFsLWdyZWVuJyxcbiAgICAgICdzaWduYWwtZ3JleScsXG4gICAgICAnc2lnbmFsLWhlYXJ0JyxcbiAgICAgICdzaWduYWwtaW5mbycsXG4gICAgICAnc2lnbmFsLXBpbmsnLFxuICAgICAgJ3NpZ25hbC1yZWQnLFxuICAgICAgJ3NpZ25hbC1za3VsbCcsXG4gICAgICAnc2lnbmFsLXN0YWNrLXNpemUnLFxuICAgICAgJ3NpZ25hbC13aGl0ZScsXG4gICAgICAnc2lnbmFsLXllbGxvdycsXG4gICAgICAndXAtYXJyb3cnLFxuICAgICAgJ3VwLWxlZnQtYXJyb3cnLFxuICAgICAgJ3VwLXJpZ2h0LWFycm93JyxcbiAgIF0sXG4gICAnZW50aXR5JzogW1xuICAgICAgJ2JlaGVtb3RoLWJpdGVyJyxcbiAgICAgICdiZWhlbW90aC1zcGl0dGVyJyxcbiAgICAgICdiaWctYml0ZXInLFxuICAgICAgJ2JpZy1zcGl0dGVyJyxcbiAgICAgICdiaWctd3JpZ2dsZXItcGVudGFwb2QnLFxuICAgICAgJ2JpZy13cmlnZ2xlci1wZW50YXBvZC1wcmVtYXR1cmUnLFxuICAgICAgJ21lZGl1bS1iaXRlcicsXG4gICAgICAnbWVkaXVtLXNwaXR0ZXInLFxuICAgICAgJ21lZGl1bS13cmlnZ2xlci1wZW50YXBvZCcsXG4gICAgICAnbWVkaXVtLXdyaWdnbGVyLXBlbnRhcG9kLXByZW1hdHVyZScsXG4gICAgICAnc21hbGwtYml0ZXInLFxuICAgICAgJ3NtYWxsLXNwaXR0ZXInLFxuICAgICAgJ3NtYWxsLXdyaWdnbGVyLXBlbnRhcG9kJyxcbiAgICAgICdzbWFsbC13cmlnZ2xlci1wZW50YXBvZC1wcmVtYXR1cmUnLFxuICAgXSxcbiAgICdyZWNpcGUnOiBbXG4gICAgICAnYWNjdW11bGF0b3InLFxuICAgICAgJ2FjY3VtdWxhdG9yLXJlY3ljbGluZycsXG4gICAgICAnYWNpZC1uZXV0cmFsaXNhdGlvbicsXG4gICAgICAnYWN0aXZlLXByb3ZpZGVyLWNoZXN0JyxcbiAgICAgICdhY3RpdmUtcHJvdmlkZXItY2hlc3QtcmVjeWNsaW5nJyxcbiAgICAgICdhZHZhbmNlZC1jYXJib25pYy1hc3Rlcm9pZC1jcnVzaGluZycsXG4gICAgICAnYWR2YW5jZWQtY2lyY3VpdCcsXG4gICAgICAnYWR2YW5jZWQtY2lyY3VpdC1yZWN5Y2xpbmcnLFxuICAgICAgJ2FkdmFuY2VkLW1ldGFsbGljLWFzdGVyb2lkLWNydXNoaW5nJyxcbiAgICAgICdhZHZhbmNlZC1vaWwtcHJvY2Vzc2luZycsXG4gICAgICAnYWR2YW5jZWQtb3hpZGUtYXN0ZXJvaWQtY3J1c2hpbmcnLFxuICAgICAgJ2FkdmFuY2VkLXRocnVzdGVyLWZ1ZWwnLFxuICAgICAgJ2FkdmFuY2VkLXRocnVzdGVyLW94aWRpemVyJyxcbiAgICAgICdhZ3JpY3VsdHVyYWwtc2NpZW5jZS1wYWNrJyxcbiAgICAgICdhZ3JpY3VsdHVyYWwtc2NpZW5jZS1wYWNrLXJlY3ljbGluZycsXG4gICAgICAnYWdyaWN1bHR1cmFsLXRvd2VyJyxcbiAgICAgICdhZ3JpY3VsdHVyYWwtdG93ZXItcmVjeWNsaW5nJyxcbiAgICAgICdhbW1vbmlhLXJvY2tldC1mdWVsJyxcbiAgICAgICdhbW1vbmlhY2FsLXNvbHV0aW9uLXNlcGFyYXRpb24nLFxuICAgICAgJ2FyaXRobWV0aWMtY29tYmluYXRvcicsXG4gICAgICAnYXJpdGhtZXRpYy1jb21iaW5hdG9yLXJlY3ljbGluZycsXG4gICAgICAnYXJ0aWZpY2lhbC1qZWxseW51dC1zb2lsJyxcbiAgICAgICdhcnRpZmljaWFsLWplbGx5bnV0LXNvaWwtcmVjeWNsaW5nJyxcbiAgICAgICdhcnRpZmljaWFsLXl1bWFrby1zb2lsJyxcbiAgICAgICdhcnRpZmljaWFsLXl1bWFrby1zb2lsLXJlY3ljbGluZycsXG4gICAgICAnYXJ0aWxsZXJ5LXNoZWxsJyxcbiAgICAgICdhcnRpbGxlcnktc2hlbGwtcmVjeWNsaW5nJyxcbiAgICAgICdhcnRpbGxlcnktdGFyZ2V0aW5nLXJlbW90ZS1yZWN5Y2xpbmcnLFxuICAgICAgJ2FydGlsbGVyeS10dXJyZXQnLFxuICAgICAgJ2FydGlsbGVyeS10dXJyZXQtcmVjeWNsaW5nJyxcbiAgICAgICdhcnRpbGxlcnktd2Fnb24nLFxuICAgICAgJ2FydGlsbGVyeS13YWdvbi1jYW5ub24tcmVjeWNsaW5nJyxcbiAgICAgICdhcnRpbGxlcnktd2Fnb24tcmVjeWNsaW5nJyxcbiAgICAgICdhc3NlbWJsaW5nLW1hY2hpbmUtMScsXG4gICAgICAnYXNzZW1ibGluZy1tYWNoaW5lLTEtcmVjeWNsaW5nJyxcbiAgICAgICdhc3NlbWJsaW5nLW1hY2hpbmUtMicsXG4gICAgICAnYXNzZW1ibGluZy1tYWNoaW5lLTItcmVjeWNsaW5nJyxcbiAgICAgICdhc3NlbWJsaW5nLW1hY2hpbmUtMycsXG4gICAgICAnYXNzZW1ibGluZy1tYWNoaW5lLTMtcmVjeWNsaW5nJyxcbiAgICAgICdhc3Rlcm9pZC1jb2xsZWN0b3InLFxuICAgICAgJ2FzdGVyb2lkLWNvbGxlY3Rvci1yZWN5Y2xpbmcnLFxuICAgICAgJ2F0b21pYy1ib21iJyxcbiAgICAgICdhdG9taWMtYm9tYi1yZWN5Y2xpbmcnLFxuICAgICAgJ2F1dG9tYXRpb24tc2NpZW5jZS1wYWNrJyxcbiAgICAgICdhdXRvbWF0aW9uLXNjaWVuY2UtcGFjay1yZWN5Y2xpbmcnLFxuICAgICAgJ2JhcnJlbCcsXG4gICAgICAnYmFycmVsLXJlY3ljbGluZycsXG4gICAgICAnYmFzaWMtb2lsLXByb2Nlc3NpbmcnLFxuICAgICAgJ2JhdHRlcnknLFxuICAgICAgJ2JhdHRlcnktZXF1aXBtZW50JyxcbiAgICAgICdiYXR0ZXJ5LWVxdWlwbWVudC1yZWN5Y2xpbmcnLFxuICAgICAgJ2JhdHRlcnktbWsyLWVxdWlwbWVudCcsXG4gICAgICAnYmF0dGVyeS1tazItZXF1aXBtZW50LXJlY3ljbGluZycsXG4gICAgICAnYmF0dGVyeS1tazMtZXF1aXBtZW50JyxcbiAgICAgICdiYXR0ZXJ5LW1rMy1lcXVpcG1lbnQtcmVjeWNsaW5nJyxcbiAgICAgICdiYXR0ZXJ5LXJlY3ljbGluZycsXG4gICAgICAnYmVhY29uJyxcbiAgICAgICdiZWFjb24tcmVjeWNsaW5nJyxcbiAgICAgICdiZWx0LWltbXVuaXR5LWVxdWlwbWVudCcsXG4gICAgICAnYmVsdC1pbW11bml0eS1lcXVpcG1lbnQtcmVjeWNsaW5nJyxcbiAgICAgICdiaWctZWxlY3RyaWMtcG9sZScsXG4gICAgICAnYmlnLWVsZWN0cmljLXBvbGUtcmVjeWNsaW5nJyxcbiAgICAgICdiaWctbWluaW5nLWRyaWxsJyxcbiAgICAgICdiaWctbWluaW5nLWRyaWxsLXJlY3ljbGluZycsXG4gICAgICAnYmlvY2hhbWJlcicsXG4gICAgICAnYmlvY2hhbWJlci1yZWN5Y2xpbmcnLFxuICAgICAgJ2Jpb2ZsdXgnLFxuICAgICAgJ2Jpb2ZsdXgtcmVjeWNsaW5nJyxcbiAgICAgICdiaW9sYWInLFxuICAgICAgJ2Jpb2xhYi1yZWN5Y2xpbmcnLFxuICAgICAgJ2Jpb2x1YnJpY2FudCcsXG4gICAgICAnYmlvcGxhc3RpYycsXG4gICAgICAnYmlvc3VsZnVyJyxcbiAgICAgICdiaXRlci1lZ2cnLFxuICAgICAgJ2JpdGVyLWVnZy1yZWN5Y2xpbmcnLFxuICAgICAgJ2JsdWVwcmludC1ib29rLXJlY3ljbGluZycsXG4gICAgICAnYmx1ZXByaW50LXJlY3ljbGluZycsXG4gICAgICAnYm9pbGVyJyxcbiAgICAgICdib2lsZXItcmVjeWNsaW5nJyxcbiAgICAgICdidWZmZXItY2hlc3QnLFxuICAgICAgJ2J1ZmZlci1jaGVzdC1yZWN5Y2xpbmcnLFxuICAgICAgJ2J1bGstaW5zZXJ0ZXInLFxuICAgICAgJ2J1bGstaW5zZXJ0ZXItcmVjeWNsaW5nJyxcbiAgICAgICdidXJuZXItZ2VuZXJhdG9yLXJlY3ljbGluZycsXG4gICAgICAnYnVybmVyLWluc2VydGVyJyxcbiAgICAgICdidXJuZXItaW5zZXJ0ZXItcmVjeWNsaW5nJyxcbiAgICAgICdidXJuZXItbWluaW5nLWRyaWxsJyxcbiAgICAgICdidXJuZXItbWluaW5nLWRyaWxsLXJlY3ljbGluZycsXG4gICAgICAnYnVybnQtc3BvaWxhZ2UnLFxuICAgICAgJ2NhbGNpdGUtcmVjeWNsaW5nJyxcbiAgICAgICdjYW5ub24tc2hlbGwnLFxuICAgICAgJ2Nhbm5vbi1zaGVsbC1yZWN5Y2xpbmcnLFxuICAgICAgJ2NhcHRpdmUtYml0ZXItc3Bhd25lcicsXG4gICAgICAnY2FwdGl2ZS1iaXRlci1zcGF3bmVyLXJlY3ljbGluZycsXG4gICAgICAnY2FwdHVyZS1yb2JvdC1yb2NrZXQnLFxuICAgICAgJ2NhcHR1cmUtcm9ib3Qtcm9ja2V0LXJlY3ljbGluZycsXG4gICAgICAnY2FyJyxcbiAgICAgICdjYXItcmVjeWNsaW5nJyxcbiAgICAgICdjYXJib24nLFxuICAgICAgJ2NhcmJvbi1maWJlcicsXG4gICAgICAnY2FyYm9uLWZpYmVyLXJlY3ljbGluZycsXG4gICAgICAnY2FyYm9uLXJlY3ljbGluZycsXG4gICAgICAnY2FyYm9uaWMtYXN0ZXJvaWQtY2h1bmstcmVjeWNsaW5nJyxcbiAgICAgICdjYXJib25pYy1hc3Rlcm9pZC1jcnVzaGluZycsXG4gICAgICAnY2FyYm9uaWMtYXN0ZXJvaWQtcmVwcm9jZXNzaW5nJyxcbiAgICAgICdjYXJnby1iYXknLFxuICAgICAgJ2NhcmdvLWJheS1yZWN5Y2xpbmcnLFxuICAgICAgJ2NhcmdvLWxhbmRpbmctcGFkJyxcbiAgICAgICdjYXJnby1sYW5kaW5nLXBhZC1yZWN5Y2xpbmcnLFxuICAgICAgJ2NhcmdvLXdhZ29uJyxcbiAgICAgICdjYXJnby13YWdvbi1yZWN5Y2xpbmcnLFxuICAgICAgJ2Nhc3RpbmctY29wcGVyJyxcbiAgICAgICdjYXN0aW5nLWNvcHBlci1jYWJsZScsXG4gICAgICAnY2FzdGluZy1pcm9uJyxcbiAgICAgICdjYXN0aW5nLWlyb24tZ2Vhci13aGVlbCcsXG4gICAgICAnY2FzdGluZy1pcm9uLXN0aWNrJyxcbiAgICAgICdjYXN0aW5nLWxvdy1kZW5zaXR5LXN0cnVjdHVyZScsXG4gICAgICAnY2FzdGluZy1waXBlJyxcbiAgICAgICdjYXN0aW5nLXBpcGUtdG8tZ3JvdW5kJyxcbiAgICAgICdjYXN0aW5nLXN0ZWVsJyxcbiAgICAgICdjZW50cmlmdWdlJyxcbiAgICAgICdjZW50cmlmdWdlLXJlY3ljbGluZycsXG4gICAgICAnY2hlbWljYWwtcGxhbnQnLFxuICAgICAgJ2NoZW1pY2FsLXBsYW50LXJlY3ljbGluZycsXG4gICAgICAnY2hlbWljYWwtc2NpZW5jZS1wYWNrJyxcbiAgICAgICdjaGVtaWNhbC1zY2llbmNlLXBhY2stcmVjeWNsaW5nJyxcbiAgICAgICdjbGlmZi1leHBsb3NpdmVzJyxcbiAgICAgICdjbGlmZi1leHBsb3NpdmVzLXJlY3ljbGluZycsXG4gICAgICAnY2x1c3Rlci1ncmVuYWRlJyxcbiAgICAgICdjbHVzdGVyLWdyZW5hZGUtcmVjeWNsaW5nJyxcbiAgICAgICdjb2FsLWxpcXVlZmFjdGlvbicsXG4gICAgICAnY29hbC1yZWN5Y2xpbmcnLFxuICAgICAgJ2NvYWwtc3ludGhlc2lzJyxcbiAgICAgICdjb2luLXJlY3ljbGluZycsXG4gICAgICAnY29tYmF0LXNob3RndW4nLFxuICAgICAgJ2NvbWJhdC1zaG90Z3VuLXJlY3ljbGluZycsXG4gICAgICAnY29uY3JldGUnLFxuICAgICAgJ2NvbmNyZXRlLWZyb20tbW9sdGVuLWlyb24nLFxuICAgICAgJ2NvbmNyZXRlLXJlY3ljbGluZycsXG4gICAgICAnY29uc3RhbnQtY29tYmluYXRvcicsXG4gICAgICAnY29uc3RhbnQtY29tYmluYXRvci1yZWN5Y2xpbmcnLFxuICAgICAgJ2NvbnN0cnVjdGlvbi1yb2JvdCcsXG4gICAgICAnY29uc3RydWN0aW9uLXJvYm90LXJlY3ljbGluZycsXG4gICAgICAnY29wcGVyLWJhY3RlcmlhJyxcbiAgICAgICdjb3BwZXItYmFjdGVyaWEtY3VsdGl2YXRpb24nLFxuICAgICAgJ2NvcHBlci1iYWN0ZXJpYS1yZWN5Y2xpbmcnLFxuICAgICAgJ2NvcHBlci1jYWJsZScsXG4gICAgICAnY29wcGVyLWNhYmxlLXJlY3ljbGluZycsXG4gICAgICAnY29wcGVyLW9yZS1yZWN5Y2xpbmcnLFxuICAgICAgJ2NvcHBlci1wbGF0ZScsXG4gICAgICAnY29wcGVyLXBsYXRlLXJlY3ljbGluZycsXG4gICAgICAnY29wcGVyLXdpcmUtcmVjeWNsaW5nJyxcbiAgICAgICdjb3B5LXBhc3RlLXRvb2wtcmVjeWNsaW5nJyxcbiAgICAgICdjcnVkZS1vaWwtYmFycmVsJyxcbiAgICAgICdjcnVkZS1vaWwtYmFycmVsLXJlY3ljbGluZycsXG4gICAgICAnY3J1c2hlcicsXG4gICAgICAnY3J1c2hlci1yZWN5Y2xpbmcnLFxuICAgICAgJ2NyeW9nZW5pYy1wbGFudCcsXG4gICAgICAnY3J5b2dlbmljLXBsYW50LXJlY3ljbGluZycsXG4gICAgICAnY3J5b2dlbmljLXNjaWVuY2UtcGFjaycsXG4gICAgICAnY3J5b2dlbmljLXNjaWVuY2UtcGFjay1yZWN5Y2xpbmcnLFxuICAgICAgJ2N1dC1wYXN0ZS10b29sLXJlY3ljbGluZycsXG4gICAgICAnZGVjaWRlci1jb21iaW5hdG9yJyxcbiAgICAgICdkZWNpZGVyLWNvbWJpbmF0b3ItcmVjeWNsaW5nJyxcbiAgICAgICdkZWNvbnN0cnVjdGlvbi1wbGFubmVyLXJlY3ljbGluZycsXG4gICAgICAnZGVmZW5kZXItY2Fwc3VsZScsXG4gICAgICAnZGVmZW5kZXItY2Fwc3VsZS1yZWN5Y2xpbmcnLFxuICAgICAgJ2RlcGxldGVkLXVyYW5pdW0tZnVlbC1jZWxsLXJlY3ljbGluZycsXG4gICAgICAnZGVzdHJveWVyLWNhcHN1bGUnLFxuICAgICAgJ2Rlc3Ryb3llci1jYXBzdWxlLXJlY3ljbGluZycsXG4gICAgICAnZGlzY2hhcmdlLWRlZmVuc2UtZXF1aXBtZW50JyxcbiAgICAgICdkaXNjaGFyZ2UtZGVmZW5zZS1lcXVpcG1lbnQtcmVjeWNsaW5nJyxcbiAgICAgICdkaXNjaGFyZ2UtZGVmZW5zZS1yZW1vdGUtcmVjeWNsaW5nJyxcbiAgICAgICdkaXNwbGF5LXBhbmVsJyxcbiAgICAgICdkaXNwbGF5LXBhbmVsLXJlY3ljbGluZycsXG4gICAgICAnZGlzdHJhY3Rvci1jYXBzdWxlJyxcbiAgICAgICdkaXN0cmFjdG9yLWNhcHN1bGUtcmVjeWNsaW5nJyxcbiAgICAgICdlZmZpY2llbmN5LW1vZHVsZScsXG4gICAgICAnZWZmaWNpZW5jeS1tb2R1bGUtMicsXG4gICAgICAnZWZmaWNpZW5jeS1tb2R1bGUtMi1yZWN5Y2xpbmcnLFxuICAgICAgJ2VmZmljaWVuY3ktbW9kdWxlLTMnLFxuICAgICAgJ2VmZmljaWVuY3ktbW9kdWxlLTMtcmVjeWNsaW5nJyxcbiAgICAgICdlZmZpY2llbmN5LW1vZHVsZS1yZWN5Y2xpbmcnLFxuICAgICAgJ2VsZWN0cmljLWVuZXJneS1pbnRlcmZhY2UtcmVjeWNsaW5nJyxcbiAgICAgICdlbGVjdHJpYy1lbmdpbmUtdW5pdCcsXG4gICAgICAnZWxlY3RyaWMtZW5naW5lLXVuaXQtcmVjeWNsaW5nJyxcbiAgICAgICdlbGVjdHJpYy1mdXJuYWNlJyxcbiAgICAgICdlbGVjdHJpYy1mdXJuYWNlLXJlY3ljbGluZycsXG4gICAgICAnZWxlY3RyaWMtbWluaW5nLWRyaWxsJyxcbiAgICAgICdlbGVjdHJpYy1taW5pbmctZHJpbGwtcmVjeWNsaW5nJyxcbiAgICAgICdlbGVjdHJvbHl0ZScsXG4gICAgICAnZWxlY3Ryb21hZ25ldGljLXBsYW50JyxcbiAgICAgICdlbGVjdHJvbWFnbmV0aWMtcGxhbnQtcmVjeWNsaW5nJyxcbiAgICAgICdlbGVjdHJvbWFnbmV0aWMtc2NpZW5jZS1wYWNrJyxcbiAgICAgICdlbGVjdHJvbWFnbmV0aWMtc2NpZW5jZS1wYWNrLXJlY3ljbGluZycsXG4gICAgICAnZWxlY3Ryb25pYy1jaXJjdWl0JyxcbiAgICAgICdlbGVjdHJvbmljLWNpcmN1aXQtcmVjeWNsaW5nJyxcbiAgICAgICdlbXB0eS1jcnVkZS1vaWwtYmFycmVsJyxcbiAgICAgICdlbXB0eS1mbHVvcm9rZXRvbmUtY29sZC1iYXJyZWwnLFxuICAgICAgJ2VtcHR5LWZsdW9yb2tldG9uZS1ob3QtYmFycmVsJyxcbiAgICAgICdlbXB0eS1oZWF2eS1vaWwtYmFycmVsJyxcbiAgICAgICdlbXB0eS1saWdodC1vaWwtYmFycmVsJyxcbiAgICAgICdlbXB0eS1sdWJyaWNhbnQtYmFycmVsJyxcbiAgICAgICdlbXB0eS1tb2R1bGUtc2xvdC1yZWN5Y2xpbmcnLFxuICAgICAgJ2VtcHR5LXBldHJvbGV1bS1nYXMtYmFycmVsJyxcbiAgICAgICdlbXB0eS1zdWxmdXJpYy1hY2lkLWJhcnJlbCcsXG4gICAgICAnZW1wdHktd2F0ZXItYmFycmVsJyxcbiAgICAgICdlbmVyZ3ktc2hpZWxkLWVxdWlwbWVudCcsXG4gICAgICAnZW5lcmd5LXNoaWVsZC1lcXVpcG1lbnQtcmVjeWNsaW5nJyxcbiAgICAgICdlbmVyZ3ktc2hpZWxkLW1rMi1lcXVpcG1lbnQnLFxuICAgICAgJ2VuZXJneS1zaGllbGQtbWsyLWVxdWlwbWVudC1yZWN5Y2xpbmcnLFxuICAgICAgJ2VuZ2luZS11bml0JyxcbiAgICAgICdlbmdpbmUtdW5pdC1yZWN5Y2xpbmcnLFxuICAgICAgJ2V4b3NrZWxldG9uLWVxdWlwbWVudCcsXG4gICAgICAnZXhvc2tlbGV0b24tZXF1aXBtZW50LXJlY3ljbGluZycsXG4gICAgICAnZXhwbG9zaXZlLWNhbm5vbi1zaGVsbCcsXG4gICAgICAnZXhwbG9zaXZlLWNhbm5vbi1zaGVsbC1yZWN5Y2xpbmcnLFxuICAgICAgJ2V4cGxvc2l2ZS1yb2NrZXQnLFxuICAgICAgJ2V4cGxvc2l2ZS1yb2NrZXQtcmVjeWNsaW5nJyxcbiAgICAgICdleHBsb3NpdmUtdXJhbml1bS1jYW5ub24tc2hlbGwnLFxuICAgICAgJ2V4cGxvc2l2ZS11cmFuaXVtLWNhbm5vbi1zaGVsbC1yZWN5Y2xpbmcnLFxuICAgICAgJ2V4cGxvc2l2ZXMnLFxuICAgICAgJ2V4cGxvc2l2ZXMtcmVjeWNsaW5nJyxcbiAgICAgICdleHByZXNzLWxvYWRlcicsXG4gICAgICAnZXhwcmVzcy1sb2FkZXItcmVjeWNsaW5nJyxcbiAgICAgICdleHByZXNzLXNwbGl0dGVyJyxcbiAgICAgICdleHByZXNzLXNwbGl0dGVyLXJlY3ljbGluZycsXG4gICAgICAnZXhwcmVzcy10cmFuc3BvcnQtYmVsdCcsXG4gICAgICAnZXhwcmVzcy10cmFuc3BvcnQtYmVsdC1yZWN5Y2xpbmcnLFxuICAgICAgJ2V4cHJlc3MtdW5kZXJncm91bmQtYmVsdCcsXG4gICAgICAnZXhwcmVzcy11bmRlcmdyb3VuZC1iZWx0LXJlY3ljbGluZycsXG4gICAgICAnZmFzdC1pbnNlcnRlcicsXG4gICAgICAnZmFzdC1pbnNlcnRlci1yZWN5Y2xpbmcnLFxuICAgICAgJ2Zhc3QtbG9hZGVyJyxcbiAgICAgICdmYXN0LWxvYWRlci1yZWN5Y2xpbmcnLFxuICAgICAgJ2Zhc3Qtc3BsaXR0ZXInLFxuICAgICAgJ2Zhc3Qtc3BsaXR0ZXItcmVjeWNsaW5nJyxcbiAgICAgICdmYXN0LXRyYW5zcG9ydC1iZWx0JyxcbiAgICAgICdmYXN0LXRyYW5zcG9ydC1iZWx0LXJlY3ljbGluZycsXG4gICAgICAnZmFzdC11bmRlcmdyb3VuZC1iZWx0JyxcbiAgICAgICdmYXN0LXVuZGVyZ3JvdW5kLWJlbHQtcmVjeWNsaW5nJyxcbiAgICAgICdmaXJlYXJtLW1hZ2F6aW5lJyxcbiAgICAgICdmaXJlYXJtLW1hZ2F6aW5lLXJlY3ljbGluZycsXG4gICAgICAnZmlzaC1icmVlZGluZycsXG4gICAgICAnZmlzc2lvbi1yZWFjdG9yLWVxdWlwbWVudCcsXG4gICAgICAnZmlzc2lvbi1yZWFjdG9yLWVxdWlwbWVudC1yZWN5Y2xpbmcnLFxuICAgICAgJ2ZsYW1ldGhyb3dlcicsXG4gICAgICAnZmxhbWV0aHJvd2VyLWFtbW8nLFxuICAgICAgJ2ZsYW1ldGhyb3dlci1hbW1vLXJlY3ljbGluZycsXG4gICAgICAnZmxhbWV0aHJvd2VyLXJlY3ljbGluZycsXG4gICAgICAnZmxhbWV0aHJvd2VyLXR1cnJldCcsXG4gICAgICAnZmxhbWV0aHJvd2VyLXR1cnJldC1yZWN5Y2xpbmcnLFxuICAgICAgJ2ZsdWlkLXdhZ29uJyxcbiAgICAgICdmbHVpZC13YWdvbi1yZWN5Y2xpbmcnLFxuICAgICAgJ2ZsdW9yb2tldG9uZScsXG4gICAgICAnZmx1b3Jva2V0b25lLWNvbGQtYmFycmVsJyxcbiAgICAgICdmbHVvcm9rZXRvbmUtY29sZC1iYXJyZWwtcmVjeWNsaW5nJyxcbiAgICAgICdmbHVvcm9rZXRvbmUtY29vbGluZycsXG4gICAgICAnZmx1b3Jva2V0b25lLWhvdC1iYXJyZWwnLFxuICAgICAgJ2ZsdW9yb2tldG9uZS1ob3QtYmFycmVsLXJlY3ljbGluZycsXG4gICAgICAnZmx5aW5nLXJvYm90LWZyYW1lJyxcbiAgICAgICdmbHlpbmctcm9ib3QtZnJhbWUtcmVjeWNsaW5nJyxcbiAgICAgICdmb3VuZGF0aW9uJyxcbiAgICAgICdmb3VuZGF0aW9uLXJlY3ljbGluZycsXG4gICAgICAnZm91bmRyeScsXG4gICAgICAnZm91bmRyeS1yZWN5Y2xpbmcnLFxuICAgICAgJ2Z1c2lvbi1nZW5lcmF0b3InLFxuICAgICAgJ2Z1c2lvbi1nZW5lcmF0b3ItcmVjeWNsaW5nJyxcbiAgICAgICdmdXNpb24tcG93ZXItY2VsbCcsXG4gICAgICAnZnVzaW9uLXBvd2VyLWNlbGwtcmVjeWNsaW5nJyxcbiAgICAgICdmdXNpb24tcmVhY3RvcicsXG4gICAgICAnZnVzaW9uLXJlYWN0b3ItZXF1aXBtZW50JyxcbiAgICAgICdmdXNpb24tcmVhY3Rvci1lcXVpcG1lbnQtcmVjeWNsaW5nJyxcbiAgICAgICdmdXNpb24tcmVhY3Rvci1yZWN5Y2xpbmcnLFxuICAgICAgJ2dhdGUnLFxuICAgICAgJ2dhdGUtcmVjeWNsaW5nJyxcbiAgICAgICdncmVlbi13aXJlLXJlY3ljbGluZycsXG4gICAgICAnZ3JlbmFkZScsXG4gICAgICAnZ3JlbmFkZS1yZWN5Y2xpbmcnLFxuICAgICAgJ2d1bi10dXJyZXQnLFxuICAgICAgJ2d1bi10dXJyZXQtcmVjeWNsaW5nJyxcbiAgICAgICdoYXphcmQtY29uY3JldGUnLFxuICAgICAgJ2hhemFyZC1jb25jcmV0ZS1yZWN5Y2xpbmcnLFxuICAgICAgJ2hlYXQtZXhjaGFuZ2VyJyxcbiAgICAgICdoZWF0LWV4Y2hhbmdlci1yZWN5Y2xpbmcnLFxuICAgICAgJ2hlYXQtaW50ZXJmYWNlJyxcbiAgICAgICdoZWF0LWludGVyZmFjZS1yZWN5Y2xpbmcnLFxuICAgICAgJ2hlYXQtcGlwZScsXG4gICAgICAnaGVhdC1waXBlLXJlY3ljbGluZycsXG4gICAgICAnaGVhdGluZy10b3dlcicsXG4gICAgICAnaGVhdGluZy10b3dlci1yZWN5Y2xpbmcnLFxuICAgICAgJ2hlYXZ5LWFybW9yJyxcbiAgICAgICdoZWF2eS1hcm1vci1yZWN5Y2xpbmcnLFxuICAgICAgJ2hlYXZ5LW9pbC1iYXJyZWwnLFxuICAgICAgJ2hlYXZ5LW9pbC1iYXJyZWwtcmVjeWNsaW5nJyxcbiAgICAgICdoZWF2eS1vaWwtY3JhY2tpbmcnLFxuICAgICAgJ2hvbG1pdW0tb3JlLXJlY3ljbGluZycsXG4gICAgICAnaG9sbWl1bS1wbGF0ZScsXG4gICAgICAnaG9sbWl1bS1wbGF0ZS1yZWN5Y2xpbmcnLFxuICAgICAgJ2hvbG1pdW0tc29sdXRpb24nLFxuICAgICAgJ2ljZS1tZWx0aW5nJyxcbiAgICAgICdpY2UtcGxhdGZvcm0nLFxuICAgICAgJ2ljZS1wbGF0Zm9ybS1yZWN5Y2xpbmcnLFxuICAgICAgJ2ljZS1yZWN5Y2xpbmcnLFxuICAgICAgJ2luZmluaXR5LWNoZXN0JyxcbiAgICAgICdpbmZpbml0eS1jaGVzdC1yZWN5Y2xpbmcnLFxuICAgICAgJ2luZmluaXR5LXBpcGUnLFxuICAgICAgJ2luZmluaXR5LXBpcGUtcmVjeWNsaW5nJyxcbiAgICAgICdpbnNlcnRlcicsXG4gICAgICAnaW5zZXJ0ZXItcmVjeWNsaW5nJyxcbiAgICAgICdpcm9uLWJhY3RlcmlhJyxcbiAgICAgICdpcm9uLWJhY3RlcmlhLWN1bHRpdmF0aW9uJyxcbiAgICAgICdpcm9uLWJhY3RlcmlhLXJlY3ljbGluZycsXG4gICAgICAnaXJvbi1jaGVzdCcsXG4gICAgICAnaXJvbi1jaGVzdC1yZWN5Y2xpbmcnLFxuICAgICAgJ2lyb24tZ2Vhci13aGVlbCcsXG4gICAgICAnaXJvbi1nZWFyLXdoZWVsLXJlY3ljbGluZycsXG4gICAgICAnaXJvbi1vcmUtcmVjeWNsaW5nJyxcbiAgICAgICdpcm9uLXBsYXRlJyxcbiAgICAgICdpcm9uLXBsYXRlLXJlY3ljbGluZycsXG4gICAgICAnaXJvbi1zdGljaycsXG4gICAgICAnaXJvbi1zdGljay1yZWN5Y2xpbmcnLFxuICAgICAgJ2plbGx5LXJlY3ljbGluZycsXG4gICAgICAnamVsbHludXQtcHJvY2Vzc2luZycsXG4gICAgICAnamVsbHludXQtcmVjeWNsaW5nJyxcbiAgICAgICdqZWxseW51dC1zZWVkLXJlY3ljbGluZycsXG4gICAgICAna292YXJleC1lbnJpY2htZW50LXByb2Nlc3MnLFxuICAgICAgJ2xhYicsXG4gICAgICAnbGFiLXJlY3ljbGluZycsXG4gICAgICAnbGFuZC1taW5lJyxcbiAgICAgICdsYW5kLW1pbmUtcmVjeWNsaW5nJyxcbiAgICAgICdsYW5kZmlsbCcsXG4gICAgICAnbGFuZGZpbGwtcmVjeWNsaW5nJyxcbiAgICAgICdsYW5lLXNwbGl0dGVyLXJlY3ljbGluZycsXG4gICAgICAnbGFzZXItdHVycmV0JyxcbiAgICAgICdsYXNlci10dXJyZXQtcmVjeWNsaW5nJyxcbiAgICAgICdsaWdodC1hcm1vcicsXG4gICAgICAnbGlnaHQtYXJtb3ItcmVjeWNsaW5nJyxcbiAgICAgICdsaWdodC1vaWwtYmFycmVsJyxcbiAgICAgICdsaWdodC1vaWwtYmFycmVsLXJlY3ljbGluZycsXG4gICAgICAnbGlnaHQtb2lsLWNyYWNraW5nJyxcbiAgICAgICdsaWdodG5pbmctY29sbGVjdG9yJyxcbiAgICAgICdsaWdodG5pbmctY29sbGVjdG9yLXJlY3ljbGluZycsXG4gICAgICAnbGlnaHRuaW5nLXJvZCcsXG4gICAgICAnbGlnaHRuaW5nLXJvZC1yZWN5Y2xpbmcnLFxuICAgICAgJ2xpbmtlZC1iZWx0LXJlY3ljbGluZycsXG4gICAgICAnbGlua2VkLWNoZXN0LXJlY3ljbGluZycsXG4gICAgICAnbGl0aGl1bScsXG4gICAgICAnbGl0aGl1bS1wbGF0ZScsXG4gICAgICAnbGl0aGl1bS1wbGF0ZS1yZWN5Y2xpbmcnLFxuICAgICAgJ2xpdGhpdW0tcmVjeWNsaW5nJyxcbiAgICAgICdsb2FkZXInLFxuICAgICAgJ2xvYWRlci1yZWN5Y2xpbmcnLFxuICAgICAgJ2xvY29tb3RpdmUnLFxuICAgICAgJ2xvY29tb3RpdmUtcmVjeWNsaW5nJyxcbiAgICAgICdsb2dpc3RpYy1yb2JvdCcsXG4gICAgICAnbG9naXN0aWMtcm9ib3QtcmVjeWNsaW5nJyxcbiAgICAgICdsb2dpc3RpYy1zY2llbmNlLXBhY2snLFxuICAgICAgJ2xvZ2lzdGljLXNjaWVuY2UtcGFjay1yZWN5Y2xpbmcnLFxuICAgICAgJ2xvbmctaGFuZGVkLWluc2VydGVyJyxcbiAgICAgICdsb25nLWhhbmRlZC1pbnNlcnRlci1yZWN5Y2xpbmcnLFxuICAgICAgJ2xvdy1kZW5zaXR5LXN0cnVjdHVyZScsXG4gICAgICAnbG93LWRlbnNpdHktc3RydWN0dXJlLXJlY3ljbGluZycsXG4gICAgICAnbHVicmljYW50JyxcbiAgICAgICdsdWJyaWNhbnQtYmFycmVsJyxcbiAgICAgICdsdWJyaWNhbnQtYmFycmVsLXJlY3ljbGluZycsXG4gICAgICAnbWVjaC1hcm1vcicsXG4gICAgICAnbWVjaC1hcm1vci1yZWN5Y2xpbmcnLFxuICAgICAgJ21lZGl1bS1lbGVjdHJpYy1wb2xlJyxcbiAgICAgICdtZWRpdW0tZWxlY3RyaWMtcG9sZS1yZWN5Y2xpbmcnLFxuICAgICAgJ21ldGFsbGljLWFzdGVyb2lkLWNodW5rLXJlY3ljbGluZycsXG4gICAgICAnbWV0YWxsaWMtYXN0ZXJvaWQtY3J1c2hpbmcnLFxuICAgICAgJ21ldGFsbGljLWFzdGVyb2lkLXJlcHJvY2Vzc2luZycsXG4gICAgICAnbWV0YWxsdXJnaWMtc2NpZW5jZS1wYWNrJyxcbiAgICAgICdtZXRhbGx1cmdpYy1zY2llbmNlLXBhY2stcmVjeWNsaW5nJyxcbiAgICAgICdtaWxpdGFyeS1zY2llbmNlLXBhY2snLFxuICAgICAgJ21pbGl0YXJ5LXNjaWVuY2UtcGFjay1yZWN5Y2xpbmcnLFxuICAgICAgJ21vZHVsYXItYXJtb3InLFxuICAgICAgJ21vZHVsYXItYXJtb3ItcmVjeWNsaW5nJyxcbiAgICAgICdtb2x0ZW4tY29wcGVyJyxcbiAgICAgICdtb2x0ZW4tY29wcGVyLWZyb20tbGF2YScsXG4gICAgICAnbW9sdGVuLWlyb24nLFxuICAgICAgJ21vbHRlbi1pcm9uLWZyb20tbGF2YScsXG4gICAgICAnbmlnaHQtdmlzaW9uLWVxdWlwbWVudCcsXG4gICAgICAnbmlnaHQtdmlzaW9uLWVxdWlwbWVudC1yZWN5Y2xpbmcnLFxuICAgICAgJ251Y2xlYXItZnVlbCcsXG4gICAgICAnbnVjbGVhci1mdWVsLXJlY3ljbGluZycsXG4gICAgICAnbnVjbGVhci1mdWVsLXJlcHJvY2Vzc2luZycsXG4gICAgICAnbnVjbGVhci1yZWFjdG9yJyxcbiAgICAgICdudWNsZWFyLXJlYWN0b3ItcmVjeWNsaW5nJyxcbiAgICAgICdudXRyaWVudHMtZnJvbS1iaW9mbHV4JyxcbiAgICAgICdudXRyaWVudHMtZnJvbS1iaXRlci1lZ2cnLFxuICAgICAgJ251dHJpZW50cy1mcm9tLWZpc2gnLFxuICAgICAgJ251dHJpZW50cy1mcm9tLXNwb2lsYWdlJyxcbiAgICAgICdudXRyaWVudHMtZnJvbS15dW1ha28tbWFzaCcsXG4gICAgICAnbnV0cmllbnRzLXJlY3ljbGluZycsXG4gICAgICAnb2Zmc2hvcmUtcHVtcCcsXG4gICAgICAnb2Zmc2hvcmUtcHVtcC1yZWN5Y2xpbmcnLFxuICAgICAgJ29pbC1yZWZpbmVyeScsXG4gICAgICAnb2lsLXJlZmluZXJ5LXJlY3ljbGluZycsXG4gICAgICAnb3Zlcmdyb3d0aC1qZWxseW51dC1zb2lsJyxcbiAgICAgICdvdmVyZ3Jvd3RoLWplbGx5bnV0LXNvaWwtcmVjeWNsaW5nJyxcbiAgICAgICdvdmVyZ3Jvd3RoLXl1bWFrby1zb2lsJyxcbiAgICAgICdvdmVyZ3Jvd3RoLXl1bWFrby1zb2lsLXJlY3ljbGluZycsXG4gICAgICAnb3hpZGUtYXN0ZXJvaWQtY2h1bmstcmVjeWNsaW5nJyxcbiAgICAgICdveGlkZS1hc3Rlcm9pZC1jcnVzaGluZycsXG4gICAgICAnb3hpZGUtYXN0ZXJvaWQtcmVwcm9jZXNzaW5nJyxcbiAgICAgICdwYXNzaXZlLXByb3ZpZGVyLWNoZXN0JyxcbiAgICAgICdwYXNzaXZlLXByb3ZpZGVyLWNoZXN0LXJlY3ljbGluZycsXG4gICAgICAncGVudGFwb2QtZWdnJyxcbiAgICAgICdwZW50YXBvZC1lZ2ctcmVjeWNsaW5nJyxcbiAgICAgICdwZXJzb25hbC1sYXNlci1kZWZlbnNlLWVxdWlwbWVudCcsXG4gICAgICAncGVyc29uYWwtbGFzZXItZGVmZW5zZS1lcXVpcG1lbnQtcmVjeWNsaW5nJyxcbiAgICAgICdwZXJzb25hbC1yb2JvcG9ydC1lcXVpcG1lbnQnLFxuICAgICAgJ3BlcnNvbmFsLXJvYm9wb3J0LWVxdWlwbWVudC1yZWN5Y2xpbmcnLFxuICAgICAgJ3BlcnNvbmFsLXJvYm9wb3J0LW1rMi1lcXVpcG1lbnQnLFxuICAgICAgJ3BlcnNvbmFsLXJvYm9wb3J0LW1rMi1lcXVpcG1lbnQtcmVjeWNsaW5nJyxcbiAgICAgICdwZXRyb2xldW0tZ2FzLWJhcnJlbCcsXG4gICAgICAncGV0cm9sZXVtLWdhcy1iYXJyZWwtcmVjeWNsaW5nJyxcbiAgICAgICdwaWVyY2luZy1yb3VuZHMtbWFnYXppbmUnLFxuICAgICAgJ3BpZXJjaW5nLXJvdW5kcy1tYWdhemluZS1yZWN5Y2xpbmcnLFxuICAgICAgJ3BpZXJjaW5nLXNob3RndW4tc2hlbGwnLFxuICAgICAgJ3BpZXJjaW5nLXNob3RndW4tc2hlbGwtcmVjeWNsaW5nJyxcbiAgICAgICdwaXBlJyxcbiAgICAgICdwaXBlLXJlY3ljbGluZycsXG4gICAgICAncGlwZS10by1ncm91bmQnLFxuICAgICAgJ3BpcGUtdG8tZ3JvdW5kLXJlY3ljbGluZycsXG4gICAgICAncGlzdG9sJyxcbiAgICAgICdwaXN0b2wtcmVjeWNsaW5nJyxcbiAgICAgICdwbGFzdGljLWJhcicsXG4gICAgICAncGxhc3RpYy1iYXItcmVjeWNsaW5nJyxcbiAgICAgICdwb2lzb24tY2Fwc3VsZScsXG4gICAgICAncG9pc29uLWNhcHN1bGUtcmVjeWNsaW5nJyxcbiAgICAgICdwb3dlci1hcm1vcicsXG4gICAgICAncG93ZXItYXJtb3ItbWsyJyxcbiAgICAgICdwb3dlci1hcm1vci1tazItcmVjeWNsaW5nJyxcbiAgICAgICdwb3dlci1hcm1vci1yZWN5Y2xpbmcnLFxuICAgICAgJ3Bvd2VyLXN3aXRjaCcsXG4gICAgICAncG93ZXItc3dpdGNoLXJlY3ljbGluZycsXG4gICAgICAncHJvY2Vzc2luZy11bml0JyxcbiAgICAgICdwcm9jZXNzaW5nLXVuaXQtcmVjeWNsaW5nJyxcbiAgICAgICdwcm9kdWN0aW9uLXNjaWVuY2UtcGFjaycsXG4gICAgICAncHJvZHVjdGlvbi1zY2llbmNlLXBhY2stcmVjeWNsaW5nJyxcbiAgICAgICdwcm9kdWN0aXZpdHktbW9kdWxlJyxcbiAgICAgICdwcm9kdWN0aXZpdHktbW9kdWxlLTInLFxuICAgICAgJ3Byb2R1Y3Rpdml0eS1tb2R1bGUtMi1yZWN5Y2xpbmcnLFxuICAgICAgJ3Byb2R1Y3Rpdml0eS1tb2R1bGUtMycsXG4gICAgICAncHJvZHVjdGl2aXR5LW1vZHVsZS0zLXJlY3ljbGluZycsXG4gICAgICAncHJvZHVjdGl2aXR5LW1vZHVsZS1yZWN5Y2xpbmcnLFxuICAgICAgJ3Byb2dyYW1tYWJsZS1zcGVha2VyJyxcbiAgICAgICdwcm9ncmFtbWFibGUtc3BlYWtlci1yZWN5Y2xpbmcnLFxuICAgICAgJ3Byb21ldGhpdW0tYXN0ZXJvaWQtY2h1bmstcmVjeWNsaW5nJyxcbiAgICAgICdwcm9tZXRoaXVtLXNjaWVuY2UtcGFjaycsXG4gICAgICAncHJvbWV0aGl1bS1zY2llbmNlLXBhY2stcmVjeWNsaW5nJyxcbiAgICAgICdwdW1wJyxcbiAgICAgICdwdW1wLXJlY3ljbGluZycsXG4gICAgICAncHVtcGphY2snLFxuICAgICAgJ3B1bXBqYWNrLXJlY3ljbGluZycsXG4gICAgICAncXVhbGl0eS1tb2R1bGUnLFxuICAgICAgJ3F1YWxpdHktbW9kdWxlLTInLFxuICAgICAgJ3F1YWxpdHktbW9kdWxlLTItcmVjeWNsaW5nJyxcbiAgICAgICdxdWFsaXR5LW1vZHVsZS0zJyxcbiAgICAgICdxdWFsaXR5LW1vZHVsZS0zLXJlY3ljbGluZycsXG4gICAgICAncXVhbGl0eS1tb2R1bGUtcmVjeWNsaW5nJyxcbiAgICAgICdxdWFudHVtLXByb2Nlc3NvcicsXG4gICAgICAncXVhbnR1bS1wcm9jZXNzb3ItcmVjeWNsaW5nJyxcbiAgICAgICdyYWRhcicsXG4gICAgICAncmFkYXItcmVjeWNsaW5nJyxcbiAgICAgICdyYWlsJyxcbiAgICAgICdyYWlsLWNoYWluLXNpZ25hbCcsXG4gICAgICAncmFpbC1jaGFpbi1zaWduYWwtcmVjeWNsaW5nJyxcbiAgICAgICdyYWlsLXJhbXAnLFxuICAgICAgJ3JhaWwtcmFtcC1yZWN5Y2xpbmcnLFxuICAgICAgJ3JhaWwtcmVjeWNsaW5nJyxcbiAgICAgICdyYWlsLXNpZ25hbCcsXG4gICAgICAncmFpbC1zaWduYWwtcmVjeWNsaW5nJyxcbiAgICAgICdyYWlsLXN1cHBvcnQnLFxuICAgICAgJ3JhaWwtc3VwcG9ydC1yZWN5Y2xpbmcnLFxuICAgICAgJ3JhaWxndW4nLFxuICAgICAgJ3JhaWxndW4tYW1tbycsXG4gICAgICAncmFpbGd1bi1hbW1vLXJlY3ljbGluZycsXG4gICAgICAncmFpbGd1bi1yZWN5Y2xpbmcnLFxuICAgICAgJ3JhaWxndW4tdHVycmV0JyxcbiAgICAgICdyYWlsZ3VuLXR1cnJldC1yZWN5Y2xpbmcnLFxuICAgICAgJ3Jhdy1maXNoLXJlY3ljbGluZycsXG4gICAgICAncmVjeWNsZXInLFxuICAgICAgJ3JlY3ljbGVyLXJlY3ljbGluZycsXG4gICAgICAncmVkLXdpcmUtcmVjeWNsaW5nJyxcbiAgICAgICdyZWZpbmVkLWNvbmNyZXRlJyxcbiAgICAgICdyZWZpbmVkLWNvbmNyZXRlLXJlY3ljbGluZycsXG4gICAgICAncmVmaW5lZC1oYXphcmQtY29uY3JldGUnLFxuICAgICAgJ3JlZmluZWQtaGF6YXJkLWNvbmNyZXRlLXJlY3ljbGluZycsXG4gICAgICAncmVwYWlyLXBhY2snLFxuICAgICAgJ3JlcGFpci1wYWNrLXJlY3ljbGluZycsXG4gICAgICAncmVxdWVzdGVyLWNoZXN0JyxcbiAgICAgICdyZXF1ZXN0ZXItY2hlc3QtcmVjeWNsaW5nJyxcbiAgICAgICdyb2JvcG9ydCcsXG4gICAgICAncm9ib3BvcnQtcmVjeWNsaW5nJyxcbiAgICAgICdyb2NrZXQnLFxuICAgICAgJ3JvY2tldC1mdWVsJyxcbiAgICAgICdyb2NrZXQtZnVlbC1mcm9tLWplbGx5JyxcbiAgICAgICdyb2NrZXQtZnVlbC1yZWN5Y2xpbmcnLFxuICAgICAgJ3JvY2tldC1sYXVuY2hlcicsXG4gICAgICAncm9ja2V0LWxhdW5jaGVyLXJlY3ljbGluZycsXG4gICAgICAncm9ja2V0LXBhcnQnLFxuICAgICAgJ3JvY2tldC1wYXJ0LXJlY3ljbGluZycsXG4gICAgICAncm9ja2V0LXJlY3ljbGluZycsXG4gICAgICAncm9ja2V0LXNpbG8nLFxuICAgICAgJ3JvY2tldC1zaWxvLXJlY3ljbGluZycsXG4gICAgICAncm9ja2V0LXR1cnJldCcsXG4gICAgICAncm9ja2V0LXR1cnJldC1yZWN5Y2xpbmcnLFxuICAgICAgJ3NjaWVuY2UtcmVjeWNsaW5nJyxcbiAgICAgICdzY3JhcC1yZWN5Y2xpbmcnLFxuICAgICAgJ3NlbGVjdGlvbi10b29sLXJlY3ljbGluZycsXG4gICAgICAnc2VsZWN0b3ItY29tYmluYXRvcicsXG4gICAgICAnc2VsZWN0b3ItY29tYmluYXRvci1yZWN5Y2xpbmcnLFxuICAgICAgJ3Nob3RndW4nLFxuICAgICAgJ3Nob3RndW4tcmVjeWNsaW5nJyxcbiAgICAgICdzaG90Z3VuLXNoZWxsJyxcbiAgICAgICdzaG90Z3VuLXNoZWxsLXJlY3ljbGluZycsXG4gICAgICAnc2ltcGxlLWNvYWwtbGlxdWVmYWN0aW9uJyxcbiAgICAgICdzaW1wbGUtZW50aXR5LXdpdGgtZm9yY2UtcmVjeWNsaW5nJyxcbiAgICAgICdzaW1wbGUtZW50aXR5LXdpdGgtb3duZXItcmVjeWNsaW5nJyxcbiAgICAgICdzbG93ZG93bi1jYXBzdWxlJyxcbiAgICAgICdzbG93ZG93bi1jYXBzdWxlLXJlY3ljbGluZycsXG4gICAgICAnc21hbGwtZWxlY3RyaWMtcG9sZScsXG4gICAgICAnc21hbGwtZWxlY3RyaWMtcG9sZS1yZWN5Y2xpbmcnLFxuICAgICAgJ3NtYWxsLWxhbXAnLFxuICAgICAgJ3NtYWxsLWxhbXAtcmVjeWNsaW5nJyxcbiAgICAgICdzb2xhci1wYW5lbCcsXG4gICAgICAnc29sYXItcGFuZWwtZXF1aXBtZW50JyxcbiAgICAgICdzb2xhci1wYW5lbC1lcXVpcG1lbnQtcmVjeWNsaW5nJyxcbiAgICAgICdzb2xhci1wYW5lbC1yZWN5Y2xpbmcnLFxuICAgICAgJ3NvbGlkLWZ1ZWwtZnJvbS1hbW1vbmlhJyxcbiAgICAgICdzb2xpZC1mdWVsLWZyb20taGVhdnktb2lsJyxcbiAgICAgICdzb2xpZC1mdWVsLWZyb20tbGlnaHQtb2lsJyxcbiAgICAgICdzb2xpZC1mdWVsLWZyb20tcGV0cm9sZXVtLWdhcycsXG4gICAgICAnc29saWQtZnVlbC1yZWN5Y2xpbmcnLFxuICAgICAgJ3NwYWNlLXBsYXRmb3JtLWZvdW5kYXRpb24nLFxuICAgICAgJ3NwYWNlLXBsYXRmb3JtLWZvdW5kYXRpb24tcmVjeWNsaW5nJyxcbiAgICAgICdzcGFjZS1wbGF0Zm9ybS1odWItcmVjeWNsaW5nJyxcbiAgICAgICdzcGFjZS1wbGF0Zm9ybS1zdGFydGVyLXBhY2snLFxuICAgICAgJ3NwYWNlLXBsYXRmb3JtLXN0YXJ0ZXItcGFjay1yZWN5Y2xpbmcnLFxuICAgICAgJ3NwYWNlLXNjaWVuY2UtcGFjaycsXG4gICAgICAnc3BhY2Utc2NpZW5jZS1wYWNrLXJlY3ljbGluZycsXG4gICAgICAnc3BlZWQtbW9kdWxlJyxcbiAgICAgICdzcGVlZC1tb2R1bGUtMicsXG4gICAgICAnc3BlZWQtbW9kdWxlLTItcmVjeWNsaW5nJyxcbiAgICAgICdzcGVlZC1tb2R1bGUtMycsXG4gICAgICAnc3BlZWQtbW9kdWxlLTMtcmVjeWNsaW5nJyxcbiAgICAgICdzcGVlZC1tb2R1bGUtcmVjeWNsaW5nJyxcbiAgICAgICdzcGlkZXJ0cm9uJyxcbiAgICAgICdzcGlkZXJ0cm9uLXJlY3ljbGluZycsXG4gICAgICAnc3BpZGVydHJvbi1yZW1vdGUtcmVjeWNsaW5nJyxcbiAgICAgICdzcGlkZXJ0cm9uLXJvY2tldC1sYXVuY2hlci0xLXJlY3ljbGluZycsXG4gICAgICAnc3BpZGVydHJvbi1yb2NrZXQtbGF1bmNoZXItMi1yZWN5Y2xpbmcnLFxuICAgICAgJ3NwaWRlcnRyb24tcm9ja2V0LWxhdW5jaGVyLTMtcmVjeWNsaW5nJyxcbiAgICAgICdzcGlkZXJ0cm9uLXJvY2tldC1sYXVuY2hlci00LXJlY3ljbGluZycsXG4gICAgICAnc3BsaXR0ZXInLFxuICAgICAgJ3NwbGl0dGVyLXJlY3ljbGluZycsXG4gICAgICAnc3BvaWxhZ2UtcmVjeWNsaW5nJyxcbiAgICAgICdzdGFjay1pbnNlcnRlcicsXG4gICAgICAnc3RhY2staW5zZXJ0ZXItcmVjeWNsaW5nJyxcbiAgICAgICdzdGVhbS1jb25kZW5zYXRpb24nLFxuICAgICAgJ3N0ZWFtLWVuZ2luZScsXG4gICAgICAnc3RlYW0tZW5naW5lLXJlY3ljbGluZycsXG4gICAgICAnc3RlYW0tdHVyYmluZScsXG4gICAgICAnc3RlYW0tdHVyYmluZS1yZWN5Y2xpbmcnLFxuICAgICAgJ3N0ZWVsLWNoZXN0JyxcbiAgICAgICdzdGVlbC1jaGVzdC1yZWN5Y2xpbmcnLFxuICAgICAgJ3N0ZWVsLWZ1cm5hY2UnLFxuICAgICAgJ3N0ZWVsLWZ1cm5hY2UtcmVjeWNsaW5nJyxcbiAgICAgICdzdGVlbC1wbGF0ZScsXG4gICAgICAnc3RlZWwtcGxhdGUtcmVjeWNsaW5nJyxcbiAgICAgICdzdG9uZS1icmljaycsXG4gICAgICAnc3RvbmUtYnJpY2stcmVjeWNsaW5nJyxcbiAgICAgICdzdG9uZS1mdXJuYWNlJyxcbiAgICAgICdzdG9uZS1mdXJuYWNlLXJlY3ljbGluZycsXG4gICAgICAnc3RvbmUtcmVjeWNsaW5nJyxcbiAgICAgICdzdG9uZS13YWxsJyxcbiAgICAgICdzdG9uZS13YWxsLXJlY3ljbGluZycsXG4gICAgICAnc3RvcmFnZS1jaGVzdCcsXG4gICAgICAnc3RvcmFnZS1jaGVzdC1yZWN5Y2xpbmcnLFxuICAgICAgJ3N0b3JhZ2UtdGFuaycsXG4gICAgICAnc3RvcmFnZS10YW5rLXJlY3ljbGluZycsXG4gICAgICAnc3VibWFjaGluZS1ndW4nLFxuICAgICAgJ3N1Ym1hY2hpbmUtZ3VuLXJlY3ljbGluZycsXG4gICAgICAnc3Vic3RhdGlvbicsXG4gICAgICAnc3Vic3RhdGlvbi1yZWN5Y2xpbmcnLFxuICAgICAgJ3N1bGZ1cicsXG4gICAgICAnc3VsZnVyLXJlY3ljbGluZycsXG4gICAgICAnc3VsZnVyaWMtYWNpZCcsXG4gICAgICAnc3VsZnVyaWMtYWNpZC1iYXJyZWwnLFxuICAgICAgJ3N1bGZ1cmljLWFjaWQtYmFycmVsLXJlY3ljbGluZycsXG4gICAgICAnc3VwZXJjYXBhY2l0b3InLFxuICAgICAgJ3N1cGVyY2FwYWNpdG9yLXJlY3ljbGluZycsXG4gICAgICAnc3VwZXJjb25kdWN0b3InLFxuICAgICAgJ3N1cGVyY29uZHVjdG9yLXJlY3ljbGluZycsXG4gICAgICAndGFuaycsXG4gICAgICAndGFuay1jYW5ub24tcmVjeWNsaW5nJyxcbiAgICAgICd0YW5rLWZsYW1ldGhyb3dlci1yZWN5Y2xpbmcnLFxuICAgICAgJ3RhbmstbWFjaGluZS1ndW4tcmVjeWNsaW5nJyxcbiAgICAgICd0YW5rLXJlY3ljbGluZycsXG4gICAgICAndGVzbGEtYW1tbycsXG4gICAgICAndGVzbGEtYW1tby1yZWN5Y2xpbmcnLFxuICAgICAgJ3Rlc2xhLXR1cnJldCcsXG4gICAgICAndGVzbGEtdHVycmV0LXJlY3ljbGluZycsXG4gICAgICAndGVzbGFndW4nLFxuICAgICAgJ3Rlc2xhZ3VuLXJlY3ljbGluZycsXG4gICAgICAndGhydXN0ZXInLFxuICAgICAgJ3RocnVzdGVyLWZ1ZWwnLFxuICAgICAgJ3RocnVzdGVyLW94aWRpemVyJyxcbiAgICAgICd0aHJ1c3Rlci1yZWN5Y2xpbmcnLFxuICAgICAgJ3Rvb2xiZWx0LWVxdWlwbWVudCcsXG4gICAgICAndG9vbGJlbHQtZXF1aXBtZW50LXJlY3ljbGluZycsXG4gICAgICAndHJhaW4tc3RvcCcsXG4gICAgICAndHJhaW4tc3RvcC1yZWN5Y2xpbmcnLFxuICAgICAgJ3RyYW5zcG9ydC1iZWx0JyxcbiAgICAgICd0cmFuc3BvcnQtYmVsdC1yZWN5Y2xpbmcnLFxuICAgICAgJ3RyZWUtc2VlZC1yZWN5Y2xpbmcnLFxuICAgICAgJ3R1bmdzdGVuLWNhcmJpZGUnLFxuICAgICAgJ3R1bmdzdGVuLWNhcmJpZGUtcmVjeWNsaW5nJyxcbiAgICAgICd0dW5nc3Rlbi1vcmUtcmVjeWNsaW5nJyxcbiAgICAgICd0dW5nc3Rlbi1wbGF0ZScsXG4gICAgICAndHVuZ3N0ZW4tcGxhdGUtcmVjeWNsaW5nJyxcbiAgICAgICd0dXJiby1sb2FkZXInLFxuICAgICAgJ3R1cmJvLWxvYWRlci1yZWN5Y2xpbmcnLFxuICAgICAgJ3R1cmJvLXNwbGl0dGVyJyxcbiAgICAgICd0dXJiby1zcGxpdHRlci1yZWN5Y2xpbmcnLFxuICAgICAgJ3R1cmJvLXRyYW5zcG9ydC1iZWx0JyxcbiAgICAgICd0dXJiby10cmFuc3BvcnQtYmVsdC1yZWN5Y2xpbmcnLFxuICAgICAgJ3R1cmJvLXVuZGVyZ3JvdW5kLWJlbHQnLFxuICAgICAgJ3R1cmJvLXVuZGVyZ3JvdW5kLWJlbHQtcmVjeWNsaW5nJyxcbiAgICAgICd1bmRlcmdyb3VuZC1iZWx0JyxcbiAgICAgICd1bmRlcmdyb3VuZC1iZWx0LXJlY3ljbGluZycsXG4gICAgICAndXBncmFkZS1wbGFubmVyLXJlY3ljbGluZycsXG4gICAgICAndXJhbml1bS0yMzUtcmVjeWNsaW5nJyxcbiAgICAgICd1cmFuaXVtLTIzOC1yZWN5Y2xpbmcnLFxuICAgICAgJ3VyYW5pdW0tY2Fubm9uLXNoZWxsJyxcbiAgICAgICd1cmFuaXVtLWNhbm5vbi1zaGVsbC1yZWN5Y2xpbmcnLFxuICAgICAgJ3VyYW5pdW0tZnVlbC1jZWxsJyxcbiAgICAgICd1cmFuaXVtLWZ1ZWwtY2VsbC1yZWN5Y2xpbmcnLFxuICAgICAgJ3VyYW5pdW0tb3JlLXJlY3ljbGluZycsXG4gICAgICAndXJhbml1bS1wcm9jZXNzaW5nJyxcbiAgICAgICd1cmFuaXVtLXJvdW5kcy1tYWdhemluZScsXG4gICAgICAndXJhbml1bS1yb3VuZHMtbWFnYXppbmUtcmVjeWNsaW5nJyxcbiAgICAgICd1dGlsaXR5LXNjaWVuY2UtcGFjaycsXG4gICAgICAndXRpbGl0eS1zY2llbmNlLXBhY2stcmVjeWNsaW5nJyxcbiAgICAgICd2ZWhpY2xlLW1hY2hpbmUtZ3VuLXJlY3ljbGluZycsXG4gICAgICAnd2F0ZXItYmFycmVsJyxcbiAgICAgICd3YXRlci1iYXJyZWwtcmVjeWNsaW5nJyxcbiAgICAgICd3b29kLXByb2Nlc3NpbmcnLFxuICAgICAgJ3dvb2QtcmVjeWNsaW5nJyxcbiAgICAgICd3b29kZW4tY2hlc3QnLFxuICAgICAgJ3dvb2Rlbi1jaGVzdC1yZWN5Y2xpbmcnLFxuICAgICAgJ3l1bWFrby1tYXNoLXJlY3ljbGluZycsXG4gICAgICAneXVtYWtvLXByb2Nlc3NpbmcnLFxuICAgICAgJ3l1bWFrby1yZWN5Y2xpbmcnLFxuICAgICAgJ3l1bWFrby1zZWVkLXJlY3ljbGluZycsXG4gICBdLFxuICAgJ3NwYWNlLWxvY2F0aW9uJzogW1xuICAgICAgJ3NoYXR0ZXJlZC1wbGFuZXQnLFxuICAgICAgJ3NvbGFyLXN5c3RlbS1lZGdlJyxcbiAgIF0sXG4gICAnYXN0ZXJvaWQtY2h1bmsnOiBbXG4gICAgICAnY2FyYm9uaWMtYXN0ZXJvaWQtY2h1bmsnLFxuICAgICAgJ21ldGFsbGljLWFzdGVyb2lkLWNodW5rJyxcbiAgICAgICdveGlkZS1hc3Rlcm9pZC1jaHVuaycsXG4gICAgICAncHJvbWV0aGl1bS1hc3Rlcm9pZC1jaHVuaycsXG4gICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaWduYWxzO1xuIiwiY29uc3QgVElDS19QRVJfVVMgPSA2MCAvIDEwMDAwMDA7XG5jb25zdCBGQUNUT1JJT19QTEFZRVJfREVMQVkgPSAzO1xuY29uc3QgRkFDVE9SSU9fTk9URV9PRkZTRVQgPSAtMjg7XG5cbmV4cG9ydCBlbnVtIEluc3RydW1lbnQge1xuICAgTm90aGluZyxcbiAgIFBpYW5vLFxuICAgRHJ1bUtpdCxcbiAgIEJhc3MsXG4gICBMZWFkLFxuICAgU2F3dG9vdGgsXG4gICBTcXVhcmUsXG4gICBDZWxlc3RhLFxuICAgVmlicmFwaG9uZSxcbiAgIFBsdWNrZWRTdHJpbmcsXG4gICBTdGVlbERydW0sXG5cbiAgIC8vIENvbnN0YW50IG5vdGUgZHJ1bSBraXRcbiAgIFdvb2RCbG9jayxcbiAgIEJhc3NEcnVtLFxufVxuXG5jb25zdCBNQVhfTk9URToge1tpbnN0cnVtZW50IGluIEluc3RydW1lbnRdOiBudW1iZXJ9ID0ge1xuICAgW0luc3RydW1lbnQuTm90aGluZ106ICAgICAgICAxMixcbiAgIFtJbnN0cnVtZW50LlBpYW5vXTogICAgICAgICAgNDgsXG4gICBbSW5zdHJ1bWVudC5EcnVtS2l0XTogICAgICAgIDE3LFxuICAgW0luc3RydW1lbnQuQmFzc106ICAgICAgICAgICAzNixcbiAgIFtJbnN0cnVtZW50LkxlYWRdOiAgICAgICAgICAgMzYsXG4gICBbSW5zdHJ1bWVudC5TYXd0b290aF06ICAgICAgIDM2LFxuICAgW0luc3RydW1lbnQuU3F1YXJlXTogICAgICAgICAzNixcbiAgIFtJbnN0cnVtZW50LkNlbGVzdGFdOiAgICAgICAgMzYsXG4gICBbSW5zdHJ1bWVudC5WaWJyYXBob25lXTogICAgIDM2LFxuICAgW0luc3RydW1lbnQuUGx1Y2tlZFN0cmluZ106ICAzNixcbiAgIFtJbnN0cnVtZW50LlN0ZWVsRHJ1bV06ICAgICAgMzYsXG4gICBbSW5zdHJ1bWVudC5Xb29kQmxvY2tdOiAgICAgIDE3LFxuICAgW0luc3RydW1lbnQuQmFzc0RydW1dOiAgICAgICAxNyxcbn07XG5cbmNvbnN0IEZBQ1RPUklPX0lOU1RSVU1FTlRfSUQ6IHtbaW5zdHJ1bWVudCBpbiBJbnN0cnVtZW50XTogbnVtYmVyfSA9IHtcbiAgIFtJbnN0cnVtZW50Lk5vdGhpbmddOiAgICAgICAgIDAsXG4gICBbSW5zdHJ1bWVudC5EcnVtS2l0XTogICAgICAgICAyLFxuICAgW0luc3RydW1lbnQuUGlhbm9dOiAgICAgICAgICAgMyxcbiAgIFtJbnN0cnVtZW50LkJhc3NdOiAgICAgICAgICAgIDQsXG4gICBbSW5zdHJ1bWVudC5MZWFkXTogICAgICAgICAgICA1LFxuICAgW0luc3RydW1lbnQuU2F3dG9vdGhdOiAgICAgICAgNixcbiAgIFtJbnN0cnVtZW50LlNxdWFyZV06ICAgICAgICAgIDcsXG4gICBbSW5zdHJ1bWVudC5DZWxlc3RhXTogICAgICAgICA4LFxuICAgW0luc3RydW1lbnQuVmlicmFwaG9uZV06ICAgICAgOSxcbiAgIFtJbnN0cnVtZW50LlBsdWNrZWRTdHJpbmddOiAgMTAsXG4gICBbSW5zdHJ1bWVudC5TdGVlbERydW1dOiAgICAgIDExLFxuICAgW0luc3RydW1lbnQuV29vZEJsb2NrXTogICAgICAgMixcbiAgIFtJbnN0cnVtZW50LkJhc3NEcnVtXTogICAgICAgIDIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayB7XG4gICBpbnN0cnVtZW50ID0gSW5zdHJ1bWVudC5Ob3RoaW5nO1xuICAgdm9sdW1lID0gMTtcbiAgIHRlbXBvID0gNTAwMDAwO1xuICAgZGl2aXNpb246IG51bWJlcjtcblxuICAgbm90ZXM6IFtudW1iZXIsIG51bWJlcl1bXSA9IFtdO1xuICAgdG90YWxUaW1lID0gRkFDVE9SSU9fTk9URV9PRkZTRVQgKyAxO1xuXG4gICBjb25zdHJ1Y3Rvcih0ZW1wbzogbnVtYmVyLCBkaXZpc2lvbjogbnVtYmVyKSB7XG4gICAgICB0aGlzLnRlbXBvID0gdGVtcG87XG4gICAgICB0aGlzLmRpdmlzaW9uID0gZGl2aXNpb247XG4gICB9XG5cbiAgIHVwZGF0ZURlbHRhKGRlbHRhOiBudW1iZXIpIHtcbiAgICAgIHRoaXMudG90YWxUaW1lICs9IGRlbHRhO1xuICAgfVxuXG4gICBwdXNoTm90ZShub3RlOiBudW1iZXIpIHtcbiAgICAgIHRoaXMubm90ZXMucHVzaChbbm90ZSwgdGhpcy50b3RhbFRpbWVdKTtcbiAgIH1cblxuICAgZGF0YSgpOiBudW1iZXJbXVtdIHtcbiAgICAgIGlmKHRoaXMuaW5zdHJ1bWVudCA9PSBJbnN0cnVtZW50Lk5vdGhpbmcpIHJldHVybiBbXTtcbiAgICAgIGNvbnN0IG1heE5vdGUgPSBNQVhfTk9URVt0aGlzLmluc3RydW1lbnRdO1xuXG4gICAgICBjb25zdCBkZWx0YVRvVGljayA9IChkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChkZWx0YSAqIHRoaXMudGVtcG8gLyB0aGlzLmRpdmlzaW9uICogVElDS19QRVJfVVMpIC0gRkFDVE9SSU9fUExBWUVSX0RFTEFZO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgdHJhY2tEYXRhID0gW107XG4gICAgICBjb25zdCB0aW1lRGF0YSA9IFtdO1xuXG4gICAgICBsZXQgbm90ZVNoaWZ0ID0gMDtcbiAgICAgIGZvcihsZXQgW25vdGUsIHRpbWVdIG9mIHRoaXMubm90ZXMpIHtcbiAgICAgICAgIGxldCB0cmFja0luZGV4ID0gMDtcbiAgICAgICAgIGxldCBkZWxheTtcblxuICAgICAgICAgd2hpbGUodHJhY2tJbmRleCA8IDEwMCkge1xuICAgICAgICAgICAgaWYodGltZURhdGFbdHJhY2tJbmRleF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgdHJhY2tEYXRhLnB1c2goW10pXG4gICAgICAgICAgICAgICB0aW1lRGF0YS5wdXNoKDApO1xuICAgICAgICAgICAgICAgZGVsYXkgPSBNYXRoLm1heChkZWx0YVRvVGljayh0aW1lKSwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgZGVsYXkgPSBkZWx0YVRvVGljayh0aW1lIC0gdGltZURhdGFbdHJhY2tJbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGVsYXkgPiAwKSBicmVhaztcbiAgICAgICAgICAgIHRyYWNrSW5kZXgrKztcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYodGhpcy5pbnN0cnVtZW50ID09IEluc3RydW1lbnQuV29vZEJsb2NrKSB7XG4gICAgICAgICAgICBub3RlID0gMTY7XG4gICAgICAgICB9IGVsc2UgaWYodGhpcy5pbnN0cnVtZW50ID09IEluc3RydW1lbnQuQmFzc0RydW0pIHtcbiAgICAgICAgICAgIG5vdGUgPSAyO1xuICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaW5zdHJ1bWVudCA9PSBJbnN0cnVtZW50LkRydW1LaXQpIHtcbiAgICAgICAgICAgIG5vdGUgPSBtaWRpVG9GYWN0b3Jpb0RydW0obm90ZSk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm90ZSArPSBGQUNUT1JJT19OT1RFX09GRlNFVDtcbiAgICAgICAgICAgIHdoaWxlKG5vdGUgKyBub3RlU2hpZnQgPiBtYXhOb3RlKSBub3RlU2hpZnQgLT0gMTI7XG4gICAgICAgICAgICB3aGlsZShub3RlICsgbm90ZVNoaWZ0IDwgMSkgICAgICAgbm90ZVNoaWZ0ICs9IDEyO1xuICAgICAgICAgfVxuXG4gICAgICAgICB0cmFja0RhdGFbdHJhY2tJbmRleF0ucHVzaChkZWxheSA8PCA4IHwgKG5vdGUgKyBub3RlU2hpZnQpKTtcbiAgICAgICAgIHRpbWVEYXRhW3RyYWNrSW5kZXhdID0gdGltZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYWNrRGF0YTtcbiAgIH1cblxuICAgZ2V0SW5zdHJ1bWVudElEKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gRkFDVE9SSU9fSU5TVFJVTUVOVF9JRFt0aGlzLmluc3RydW1lbnRdO1xuICAgfVxuXG4gICBnZXRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLnZvbHVtZTtcbiAgIH1cblxuICAgc2V0TWlkaUluc3RydW1lbnQocHJvZ3JhbTogbnVtYmVyLCBjaGFubmVsOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuaW5zdHJ1bWVudCA9IG1pZGlUb0ZhY3RvcmlvSW5zdHJ1bWVudChwcm9ncmFtLCBjaGFubmVsKTtcbiAgIH1cblxuICAgc2V0TWlkaVZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xuICAgICAgdGhpcy52b2x1bWUgPSB2b2x1bWUgLyAxMjc7XG4gICB9XG59XG5cbmZ1bmN0aW9uIG1pZGlUb0ZhY3RvcmlvSW5zdHJ1bWVudChwcm9ncmFtOiBudW1iZXIsIGNoYW5uZWw6IG51bWJlcikge1xuICAgaWYoY2hhbm5lbCA9PSA5KSB7XG4gICAgICByZXR1cm4gSW5zdHJ1bWVudC5EcnVtS2l0O1xuICAgfVxuXG4gICBzd2l0Y2gocHJvZ3JhbSkge1xuICAgICAgY2FzZSAwOiAvLyBBY291c3RpYyBHcmFuZCBQaWFub1xuICAgICAgY2FzZSAxOiAvLyBCcmlnaHQgQWNvdXN0aWMgUGlhbm9cbiAgICAgIGNhc2UgMjogLy8gRWxlY3RyaWMgR3JhbmQgUGlhbm9cbiAgICAgIGNhc2UgMzogLy8gSG9ua3ktdG9uayBQaWFub1xuICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuUGlhbm87XG5cbiAgICAgIGNhc2UgNjogLy8gSGFycHNpY2hvcmRcbiAgICAgIGNhc2UgNzogLy8gQ2xhdmluZXRcbiAgICAgIGNhc2UgMTU6IC8vIER1bGNpbWVyXG4gICAgICBjYXNlIDI0OiAvLyBBY291c3RpYyBHdWl0YXIgKG55bG9uKVxuICAgICAgY2FzZSAyNTogLy8gQWNvdXN0aWMgR3VpdGFyIChzdGVlbClcbiAgICAgIGNhc2UgMjY6IC8vIEVsZWN0cmljIEd1aXRhciAoamF6eilcbiAgICAgIGNhc2UgMjc6IC8vIEVsZWN0cmljIEd1aXRhciAoY2xlYW4pXG4gICAgICBjYXNlIDI4OiAvLyBFbGVjdHJpYyBHdWl0YXIgKG11dGVkKVxuICAgICAgY2FzZSA0NTogLy8gUGl6emljYXRvIFN0cmluZ3NcbiAgICAgIGNhc2UgNDY6IC8vIE9yY2hlc3RyYWwgSGFycFxuICAgICAgY2FzZSAxMDQ6IC8vIFNpdGFyXG4gICAgICBjYXNlIDEwNTogLy8gQmFuam9cbiAgICAgIGNhc2UgMTA2OiAvLyBTaGFtaXNlblxuICAgICAgY2FzZSAxMDc6IC8vIEtvdG9cbiAgICAgIGNhc2UgMTA4OiAvLyBLYWxpbWJhXG4gICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5QbHVja2VkU3RyaW5nO1xuXG4gICAgICBjYXNlIDg6IC8vIENlbGVzdGFcbiAgICAgIGNhc2UgMTQ6IC8vIFR1YnVsYXIgQmVsbHNcbiAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LkNlbGVzdGE7XG5cbiAgICAgIGNhc2UgOTogLy8gR2xvY2tlbnNwaWVsXG4gICAgICBjYXNlIDEwOiAvLyBNdXNpYyBCb3hcbiAgICAgIGNhc2UgMTE6IC8vIFZpYnJhcGhvbmVcbiAgICAgIGNhc2UgMTI6IC8vIE1hcmltYmFcbiAgICAgIGNhc2UgMTM6IC8vIFh5bG9waG9uZVxuICAgICAgY2FzZSAxMTI6IC8vIFRpbmtsZSBCZWxsXG4gICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5WaWJyYXBob25lO1xuXG4gICAgICBjYXNlIDQ6IC8vIEVsZWN0cmljIFBpYW5vIGNhc2UgMDogLy9cbiAgICAgIGNhc2UgNTogLy8gRWxlY3RyaWMgUGlhbm8gY2FzZSAxOiAvL1xuICAgICAgY2FzZSAxNjogLy8gRHJhd2JhciBPcmdhblxuICAgICAgY2FzZSAxNzogLy8gUGVyY3Vzc2l2ZSBPcmdhblxuICAgICAgY2FzZSAxODogLy8gUm9jayBPcmdhblxuICAgICAgY2FzZSAxOTogLy8gQ2h1cmNoIE9yZ2FuXG4gICAgICBjYXNlIDIwOiAvLyBSZWVkIE9yZ2FuXG4gICAgICBjYXNlIDMyOiAvLyBBY291c3RpYyBCYXNzXG4gICAgICBjYXNlIDMzOiAvLyBFbGVjdHJpYyBCYXNzIChmaW5nZXIpXG4gICAgICBjYXNlIDM0OiAvLyBFbGVjdHJpYyBCYXNzIChwaWNrKVxuICAgICAgY2FzZSAzNTogLy8gRnJldGxlc3MgQmFzc1xuICAgICAgY2FzZSAzNjogLy8gU2xhcCBCYXNzIGNhc2UgMDogLy9cbiAgICAgIGNhc2UgMzc6IC8vIFNsYXAgQmFzcyBjYXNlIDE6IC8vXG4gICAgICBjYXNlIDM4OiAvLyBTeW50aCBCYXNzIGNhc2UgMDogLy9cbiAgICAgIGNhc2UgMzk6IC8vIFN5bnRoIEJhc3MgY2FzZSAxOiAvL1xuICAgICAgY2FzZSAxMTc6IC8vIE1lbG9kaWMgVG9tXG4gICAgICBjYXNlIDExODogLy8gU3ludGggRHJ1bVxuICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuQmFzcztcblxuICAgICAgY2FzZSA0MDogLy8gVmlvbGluXG4gICAgICBjYXNlIDQxOiAvLyBWaW9sYVxuICAgICAgY2FzZSA0MjogLy8gQ2VsbG9cbiAgICAgIGNhc2UgNDM6IC8vIENvbnRyYWJhc3NcbiAgICAgIGNhc2UgNDQ6IC8vIFRyZW1vbG8gU3RyaW5nc1xuICAgICAgY2FzZSA1NjogLy8gVHJ1bXBldFxuICAgICAgY2FzZSA1NzogLy8gVHJvbWJvbmVcbiAgICAgIGNhc2UgNTg6IC8vIFR1YmFcbiAgICAgIGNhc2UgNTk6IC8vIE11dGVkIFRydW1wZXRcbiAgICAgIGNhc2UgNjA6IC8vIEZyZW5jaCBIb3JuXG4gICAgICBjYXNlIDYxOiAvLyBCcmFzcyBTZWN0aW9uXG4gICAgICBjYXNlIDYyOiAvLyBTeW50aCBCcmFzcyBjYXNlIDA6IC8vXG4gICAgICBjYXNlIDYzOiAvLyBTeW50aCBCcmFzcyBjYXNlIDE6IC8vXG4gICAgICBjYXNlIDY0OiAvLyBTb3ByYW5vIFNheFxuICAgICAgY2FzZSA2NTogLy8gQWx0byBTYXhcbiAgICAgIGNhc2UgNjY6IC8vIFRlbm9yIFNheFxuICAgICAgY2FzZSA2NzogLy8gQmFyaXRvbmUgU2F4XG4gICAgICBjYXNlIDY4OiAvLyBPYm9lXG4gICAgICBjYXNlIDY5OiAvLyBFbmdsaXNoIEhvcm5cbiAgICAgIGNhc2UgNzA6IC8vIEJhc3Nvb25cbiAgICAgIGNhc2UgNzE6IC8vIENsYXJpbmV0XG4gICAgICBjYXNlIDgwOiAvLyBMZWFkIGNhc2UgMDogLy8gKHNxdWFyZSlcbiAgICAgIGNhc2UgMTA5OiAvLyBCYWcgcGlwZVxuICAgICAgY2FzZSAxMTA6IC8vIEZpZGRsZVxuICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuU3F1YXJlO1xuXG4gICAgICBjYXNlIDI5OiAvLyBPdmVyZHJpdmVuIEd1aXRhclxuICAgICAgY2FzZSAzMDogLy8gRGlzdG9ydGlvbiBHdWl0YXJcbiAgICAgIGNhc2UgMzE6IC8vIEd1aXRhciBoYXJtb25pY3NcbiAgICAgIGNhc2UgODI6IC8vIExlYWQgY2FzZSAyOiAvLyAoY2FsbGlvcGUpXG4gICAgICBjYXNlIDgzOiAvLyBMZWFkIGNhc2UgMzogLy8gKGNoaWZmKVxuICAgICAgY2FzZSA4NDogLy8gTGVhZCBjYXNlIDQ6IC8vIChjaGFyYW5nKVxuICAgICAgY2FzZSA4NTogLy8gTGVhZCBjYXNlIDU6IC8vICh2b2ljZSlcbiAgICAgIGNhc2UgODY6IC8vIExlYWQgY2FzZSA2OiAvLyAoZmlmdGhzKVxuICAgICAgY2FzZSA4NzogLy8gTGVhZCBjYXNlIDc6IC8vIChiYXNzICsgbGVhZClcbiAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LkxlYWQ7XG5cbiAgICAgIGNhc2UgNDc6IC8vIFRpbXBhbmlcbiAgICAgIGNhc2UgODg6IC8vIFBhZCBjYXNlIDA6IC8vIChuZXcgYWdlKVxuICAgICAgY2FzZSA4OTogLy8gUGFkIGNhc2UgMTogLy8gKHdhcm0pXG4gICAgICBjYXNlIDkwOiAvLyBQYWQgY2FzZSAyOiAvLyAocG9seXN5bnRoKVxuICAgICAgY2FzZSA5MTogLy8gUGFkIGNhc2UgMzogLy8gKGNob2lyKVxuICAgICAgY2FzZSA5MjogLy8gUGFkIGNhc2UgNDogLy8gKGJvd2VkKVxuICAgICAgY2FzZSA5MzogLy8gUGFkIGNhc2UgNTogLy8gKG1ldGFsbGljKVxuICAgICAgY2FzZSA5NDogLy8gUGFkIGNhc2UgNjogLy8gKGhhbG8pXG4gICAgICBjYXNlIDk1OiAvLyBQYWQgY2FzZSA3OiAvLyAoc3dlZXApXG4gICAgICBjYXNlIDk4OiAvLyBGWCBjYXNlIDI6IC8vIChjcnlzdGFsKVxuICAgICAgY2FzZSAxMTM6IC8vIEFnb2dvXG4gICAgICBjYXNlIDExNDogLy8gU3RlZWwgRHJ1bXNcbiAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LlN0ZWVsRHJ1bTtcblxuICAgICAgY2FzZSAyMTogLy8gQWNjb3JkaW9uXG4gICAgICBjYXNlIDIyOiAvLyBIYXJtb25pY2FcbiAgICAgIGNhc2UgMjM6IC8vIFRhbmdvIEFjY29yZGlvblxuICAgICAgY2FzZSA0ODogLy8gU3RyaW5nIEVuc2VtYmxlIGNhc2UgMDogLy9cbiAgICAgIGNhc2UgNDk6IC8vIFN0cmluZyBFbnNlbWJsZSBjYXNlIDE6IC8vXG4gICAgICBjYXNlIDUwOiAvLyBTeW50aCBTdHJpbmdzIGNhc2UgMDogLy9cbiAgICAgIGNhc2UgNTE6IC8vIFN5bnRoIFN0cmluZ3MgY2FzZSAxOiAvL1xuICAgICAgY2FzZSA1MjogLy8gQ2hvaXIgQWFoc1xuICAgICAgY2FzZSA1MzogLy8gVm9pY2UgT29oc1xuICAgICAgY2FzZSA1NDogLy8gU3ludGggVm9pY2VcbiAgICAgIGNhc2UgNTU6IC8vIE9yY2hlc3RyYSBIaXRcbiAgICAgIGNhc2UgNzI6IC8vIFBpY2NvbG9cbiAgICAgIGNhc2UgNzM6IC8vIEZsdXRlXG4gICAgICBjYXNlIDc0OiAvLyBSZWNvcmRlclxuICAgICAgY2FzZSA3NTogLy8gUGFuIEZsdXRlXG4gICAgICBjYXNlIDc2OiAvLyBCbG93biBCb3R0bGVcbiAgICAgIGNhc2UgNzc6IC8vIFNoYWt1aGFjaGlcbiAgICAgIGNhc2UgNzg6IC8vIFdoaXN0bGVcbiAgICAgIGNhc2UgNzk6IC8vIE9jYXJpbmFcbiAgICAgIGNhc2UgODE6IC8vIExlYWQgY2FzZSAxOiAvLyAoc2F3dG9vdGgpXG4gICAgICBjYXNlIDExMTogLy8gU2hhbmFpXG4gICAgICAgICAvL3JldHVybiBJbnN0cnVtZW50LlNhd3Rvb3RoO1xuICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuU3F1YXJlO1xuXG4gICAgICBjYXNlIDExNTogLy8gV29vZGJsb2NrXG4gICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5Xb29kQmxvY2s7XG5cbiAgICAgIGNhc2UgMTE2OiAvLyBUYWlrbyBEcnVtXG4gICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5CYXNzRHJ1bTtcblxuICAgICAgY2FzZSA5NjogLy8gRlggY2FzZSAwOiAvLyAocmFpbilcbiAgICAgIGNhc2UgOTc6IC8vIEZYIGNhc2UgMTogLy8gKHNvdW5kdHJhY2spXG4gICAgICBjYXNlIDk5OiAvLyBGWCBjYXNlIDM6IC8vIChhdG1vc3BoZXJlKVxuICAgICAgY2FzZSAxMDA6IC8vIEZYIGNhc2UgNDogLy8gKGJyaWdodG5lc3MpXG4gICAgICBjYXNlIDEwMTogLy8gRlggY2FzZSA1OiAvLyAoZ29ibGlucylcbiAgICAgIGNhc2UgMTAyOiAvLyBGWCBjYXNlIDY6IC8vIChlY2hvZXMpXG4gICAgICBjYXNlIDEwMzogLy8gRlggY2FzZSA3OiAvLyAoc2NpLWZpKVxuICAgICAgY2FzZSAxMTk6IC8vIFJldmVyc2UgQ3ltYmFsXG4gICAgICBjYXNlIDEyMDogLy8gR3VpdGFyIEZyZXQgTm9pc2VcbiAgICAgIGNhc2UgMTIxOiAvLyBCcmVhdGggTm9pc2VcbiAgICAgIGNhc2UgMTIyOiAvLyBTZWFzaG9yZVxuICAgICAgY2FzZSAxMjM6IC8vIEJpcmQgVHdlZXRcbiAgICAgIGNhc2UgMTI0OiAvLyBUZWxlcGhvbmUgUmluZ1xuICAgICAgY2FzZSAxMjU6IC8vIEhlbGljb3B0ZXJcbiAgICAgIGNhc2UgMTI2OiAvLyBBcHBsYXVzZVxuICAgICAgY2FzZSAxMjc6IC8vIEd1bnNob3RcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5Ob3RoaW5nO1xuICAgfVxufVxuXG5mdW5jdGlvbiBtaWRpVG9GYWN0b3Jpb0RydW0obm90ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgIHN3aXRjaChub3RlKSB7XG4gICAgICBjYXNlIDM2OiAvLyBCYXNzIERydW0gMVxuICAgICAgICAgcmV0dXJuIDE7XG5cbiAgICAgIGNhc2UgMzU6IC8vIEJhc3MgRHJ1bSAyXG4gICAgICBjYXNlIDQxOiAvLyBMb3cgVG9tIDJcbiAgICAgIGNhc2UgNDM6IC8vIExvdyBUb20gMVxuICAgICAgY2FzZSA0NTogLy8gTWlkIFRvbSAyXG4gICAgICBjYXNlIDQ3OiAvLyBNaWQgVG9tIDFcbiAgICAgIGNhc2UgNDg6IC8vIEhpZ2ggVG9tIDJcbiAgICAgIGNhc2UgNTA6IC8vIEhpZ2ggVG9tIDFcbiAgICAgIGNhc2UgNjA6IC8vIEhpZ2ggQm9uZ29cbiAgICAgIGNhc2UgNjE6IC8vIExvdyBCb25nb1xuICAgICAgY2FzZSA2MjogLy8gTXV0ZSBIaWdoIENvbmdhXG4gICAgICBjYXNlIDYzOiAvLyBPcGVuIEhpZ2ggQ29uZ2FcbiAgICAgIGNhc2UgNjQ6IC8vIExvdyBDb25nYVxuICAgICAgICAgcmV0dXJuIDI7XG5cbiAgICAgIGNhc2UgMzg6IC8vIFNuYXJlIERydW0gMVxuICAgICAgICAgcmV0dXJuIDQ7XG5cbiAgICAgIGNhc2UgNDA6IC8vIFNuYXJlIERydW0gMlxuICAgICAgICAgcmV0dXJuIDU7XG5cbiAgICAgIGNhc2UgNDQ6IC8vIFBlZGFsIEhpLWhhdFxuICAgICAgICAgcmV0dXJuIDY7XG5cbiAgICAgIGNhc2UgNDI6IC8vIENsb3NlZCBIaS1oYXRcbiAgICAgICAgIHJldHVybiA3O1xuXG4gICAgICBjYXNlIDczOiAvLyBTaG9ydCBHdWlyb1xuICAgICAgY2FzZSA3NDogLy8gTG9uZyBHdWlyb1xuICAgICAgICAgcmV0dXJuIDg7XG5cbiAgICAgIGNhc2UgNzg6IC8vIE11dGUgQ3VpY2FcbiAgICAgIGNhc2UgNzk6IC8vIE9wZW4gQ3VpY2FcbiAgICAgIGNhc2UgNzE6IC8vIFNob3J0IFdoaXN0bGVcbiAgICAgIGNhc2UgNzI6IC8vIExvbmcgV2hpc3RsZVxuICAgICAgICAgcmV0dXJuIDk7XG5cbiAgICAgIGNhc2UgNTY6IC8vIENvd2JlbGxcbiAgICAgIGNhc2UgNTM6IC8vIFJpZGUgQmVsbFxuICAgICAgICAgcmV0dXJuIDEwO1xuXG4gICAgICBjYXNlIDM3OiAvLyBTaWRlIFN0aWNrXG4gICAgICAgICByZXR1cm4gMTE7XG5cbiAgICAgIGNhc2UgNDY6IC8vIE9wZW4gSGktaGF0XG4gICAgICBjYXNlIDQ5OiAvLyBDcmFzaCBDeW1iYWwgMVxuICAgICAgY2FzZSA1MjogLy8gQ2hpbmVzZSBDeW1iYWxcbiAgICAgIGNhc2UgNTE6IC8vIFJpZGUgQ3ltYmFsIDFcbiAgICAgIGNhc2UgNTU6IC8vIFNwbGFzaCBDeW1iYWxcbiAgICAgIGNhc2UgNTc6IC8vIENyYXNoIEN5bWJhbCAyXG4gICAgICBjYXNlIDU5OiAvLyBSaWRlIEN5bWJhbCAyXG4gICAgICAgICByZXR1cm4gMTI7XG5cbiAgICAgIGNhc2UgMzk6IC8vIEhhbmQgQ2xhcFxuICAgICAgY2FzZSA3NTogLy8gQ2xhdmVzXG4gICAgICBjYXNlIDU4OiAvLyBWaWJyYSBTbGFwXG4gICAgICAgICByZXR1cm4gMTQ7XG5cbiAgICAgIGNhc2UgNzA6IC8vIE1hcmFjYXNcbiAgICAgIGNhc2UgNjk6IC8vIENhYmFzYVxuICAgICAgICAgcmV0dXJuIDE1O1xuXG4gICAgICBjYXNlIDc2OiAvLyBIaWdoIFdvb2QgQmxvY2tcbiAgICAgIGNhc2UgNzc6IC8vIExvdyBXb29kIEJsb2NrXG4gICAgICBjYXNlIDY1OiAvLyBIaWdoIFRpbWJhbGVcbiAgICAgIGNhc2UgNjY6IC8vIExvdyBUaW1iYWxlXG4gICAgICBjYXNlIDY3OiAvLyBIaWdoIEFnb2dvXG4gICAgICBjYXNlIDY4OiAvLyBMb3cgQWdvZ29cbiAgICAgICAgIHJldHVybiAxNjtcblxuICAgICAgY2FzZSA1NDogLy8gVGFtYm91cmluZVxuICAgICAgY2FzZSA4MDogLy8gTXV0ZSBUcmlhbmdsZVxuICAgICAgY2FzZSA4MTogLy8gT3BlbiBUcmlhbmdsZVxuICAgICAgICAgcmV0dXJuIDE3O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAgcmV0dXJuIDA7XG4gICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==