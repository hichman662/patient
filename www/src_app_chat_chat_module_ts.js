"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_chat_chat_module_ts"],{

/***/ 5058:
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/AbortController.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortController": () => (/* binding */ AbortController)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
class AbortController {
    constructor() {
        this._isAborted = false;
        this.onabort = null;
    }
    abort() {
        if (!this._isAborted) {
            this._isAborted = true;
            if (this.onabort) {
                this.onabort();
            }
        }
    }
    get signal() {
        return this;
    }
    get aborted() {
        return this._isAborted;
    }
}


/***/ }),

/***/ 2708:
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultHttpClient": () => (/* binding */ DefaultHttpClient)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ 8649);
/* harmony import */ var _FetchHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetchHttpClient */ 2078);
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ 2963);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 345);
/* harmony import */ var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XhrHttpClient */ 7962);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





/** Default implementation of {@link @microsoft/signalr.HttpClient}. */
class DefaultHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
    /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
    constructor(logger) {
        super();
        if (typeof fetch !== "undefined" || _Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode) {
            this._httpClient = new _FetchHttpClient__WEBPACK_IMPORTED_MODULE_2__.FetchHttpClient(logger);
        }
        else if (typeof XMLHttpRequest !== "undefined") {
            this._httpClient = new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__.XhrHttpClient(logger);
        }
        else {
            throw new Error("No usable HttpClient found.");
        }
    }
    /** @inheritDoc */
    send(request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_4__.AbortError());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return this._httpClient.send(request);
    }
    getCookieString(url) {
        return this._httpClient.getCookieString(url);
    }
}


/***/ }),

/***/ 5545:
/*!****************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultReconnectPolicy": () => (/* binding */ DefaultReconnectPolicy)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// 0, 2, 10, 30 second delays before reconnect attempts.
const DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];
/** @private */
class DefaultReconnectPolicy {
    constructor(retryDelays) {
        this._retryDelays = retryDelays !== undefined ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
    }
    nextRetryDelayInMilliseconds(retryContext) {
        return this._retryDelays[retryContext.previousRetryCount];
    }
}


/***/ }),

/***/ 8649:
/*!************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Errors.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpError": () => (/* binding */ HttpError),
/* harmony export */   "TimeoutError": () => (/* binding */ TimeoutError),
/* harmony export */   "AbortError": () => (/* binding */ AbortError),
/* harmony export */   "UnsupportedTransportError": () => (/* binding */ UnsupportedTransportError),
/* harmony export */   "DisabledTransportError": () => (/* binding */ DisabledTransportError),
/* harmony export */   "FailedToStartTransportError": () => (/* binding */ FailedToStartTransportError),
/* harmony export */   "FailedToNegotiateWithServerError": () => (/* binding */ FailedToNegotiateWithServerError),
/* harmony export */   "AggregateErrors": () => (/* binding */ AggregateErrors)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Error thrown when an HTTP request fails. */
class HttpError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
     *
     * @param {string} errorMessage A descriptive error message.
     * @param {number} statusCode The HTTP status code represented by this error.
     */
    constructor(errorMessage, statusCode) {
        const trueProto = new.target.prototype;
        super(`${errorMessage}: Status code '${statusCode}'`);
        this.statusCode = statusCode;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when a timeout elapses. */
class TimeoutError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    constructor(errorMessage = "A timeout occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when an action is aborted. */
class AbortError extends Error {
    /** Constructs a new instance of {@link AbortError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    constructor(errorMessage = "An abort occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the selected transport is unsupported by the browser. */
/** @private */
class UnsupportedTransportError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
     *
     * @param {string} message A descriptive error message.
     * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occured on.
     */
    constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = 'UnsupportedTransportError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the selected transport is disabled by the browser. */
/** @private */
class DisabledTransportError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
     *
     * @param {string} message A descriptive error message.
     * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occured on.
     */
    constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = 'DisabledTransportError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the selected transport cannot be started. */
/** @private */
class FailedToStartTransportError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
     *
     * @param {string} message A descriptive error message.
     * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occured on.
     */
    constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = 'FailedToStartTransportError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the negotiation with the server failed to complete. */
/** @private */
class FailedToNegotiateWithServerError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
     *
     * @param {string} message A descriptive error message.
     */
    constructor(message) {
        const trueProto = new.target.prototype;
        super(message);
        this.errorType = 'FailedToNegotiateWithServerError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when multiple errors have occured. */
/** @private */
class AggregateErrors extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
     *
     * @param {string} message A descriptive error message.
     * @param {Error[]} innerErrors The collection of errors this error is aggregating.
     */
    constructor(message, innerErrors) {
        const trueProto = new.target.prototype;
        super(message);
        this.innerErrors = innerErrors;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}


/***/ }),

/***/ 2078:
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchHttpClient": () => (/* binding */ FetchHttpClient)
/* harmony export */ });
/* harmony import */ var C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Errors */ 8649);
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ 2963);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ILogger */ 7863);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ 345);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.




class FetchHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_1__.HttpClient {
  constructor(logger) {
    super();
    this._logger = logger;

    if (typeof fetch === "undefined") {
      // In order to ignore the dynamic require in webpack builds we need to do this magic
      // @ts-ignore: TS doesn't know about these names
      const requireFunc =  true ? require : 0; // Cookies aren't automatically handled in Node so we need to add a CookieJar to preserve cookies across requests

      this._jar = new (requireFunc("tough-cookie").CookieJar)();
      this._fetchType = requireFunc("node-fetch"); // node-fetch doesn't have a nice API for getting and setting cookies
      // fetch-cookie will wrap a fetch implementation with a default CookieJar or a provided one

      this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
    } else {
      this._fetchType = fetch.bind((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getGlobalThis)());
    }

    if (typeof AbortController === "undefined") {
      // In order to ignore the dynamic require in webpack builds we need to do this magic
      // @ts-ignore: TS doesn't know about these names
      const requireFunc =  true ? require : 0; // Node needs EventListener methods on AbortController which our custom polyfill doesn't provide

      this._abortControllerType = requireFunc("abort-controller");
    } else {
      this._abortControllerType = AbortController;
    }
  }
  /** @inheritDoc */


  send(request) {
    var _this = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Check that abort was not signaled before calling send
      if (request.abortSignal && request.abortSignal.aborted) {
        throw new _Errors__WEBPACK_IMPORTED_MODULE_3__.AbortError();
      }

      if (!request.method) {
        throw new Error("No method defined.");
      }

      if (!request.url) {
        throw new Error("No url defined.");
      }

      const abortController = new _this._abortControllerType();
      let error; // Hook our abortSignal into the abort controller

      if (request.abortSignal) {
        request.abortSignal.onabort = () => {
          abortController.abort();
          error = new _Errors__WEBPACK_IMPORTED_MODULE_3__.AbortError();
        };
      } // If a timeout has been passed in, setup a timeout to call abort
      // Type needs to be any to fit window.setTimeout and NodeJS.setTimeout


      let timeoutId = null;

      if (request.timeout) {
        const msTimeout = request.timeout;
        timeoutId = setTimeout(() => {
          abortController.abort();

          _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Warning, `Timeout from HTTP request.`);

          error = new _Errors__WEBPACK_IMPORTED_MODULE_3__.TimeoutError();
        }, msTimeout);
      }

      let response;

      try {
        response = yield _this._fetchType(request.url, {
          body: request.content,
          cache: "no-cache",
          credentials: request.withCredentials === true ? "include" : "same-origin",
          headers: {
            "Content-Type": "text/plain;charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest",
            ...request.headers
          },
          method: request.method,
          mode: "cors",
          redirect: "follow",
          signal: abortController.signal
        });
      } catch (e) {
        if (error) {
          throw error;
        }

        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Warning, `Error from HTTP request. ${e}.`);

        throw e;
      } finally {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        if (request.abortSignal) {
          request.abortSignal.onabort = null;
        }
      }

      if (!response.ok) {
        const errorMessage = yield deserializeContent(response, "text");
        throw new _Errors__WEBPACK_IMPORTED_MODULE_3__.HttpError(errorMessage || response.statusText, response.status);
      }

      const content = deserializeContent(response, request.responseType);
      const payload = yield content;
      return new _HttpClient__WEBPACK_IMPORTED_MODULE_1__.HttpResponse(response.status, response.statusText, payload);
    })();
  }

  getCookieString(url) {
    let cookies = "";

    if (_Utils__WEBPACK_IMPORTED_MODULE_2__.Platform.isNode && this._jar) {
      // @ts-ignore: unused variable
      this._jar.getCookies(url, (e, c) => cookies = c.join("; "));
    }

    return cookies;
  }

}

function deserializeContent(response, responseType) {
  let content;

  switch (responseType) {
    case "arraybuffer":
      content = response.arrayBuffer();
      break;

    case "text":
      content = response.text();
      break;

    case "blob":
    case "document":
    case "json":
      throw new Error(`${responseType} is not supported.`);

    default:
      content = response.text();
      break;
  }

  return content;
}

/***/ }),

/***/ 4246:
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandshakeProtocol": () => (/* binding */ HandshakeProtocol)
/* harmony export */ });
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextMessageFormat */ 4444);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 345);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


/** @private */
class HandshakeProtocol {
    // Handshake request is always JSON
    writeHandshakeRequest(handshakeRequest) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.write(JSON.stringify(handshakeRequest));
    }
    parseHandshakeResponse(data) {
        let messageData;
        let remainingData;
        if ((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer)(data)) {
            // Format is binary but still need to read JSON text from handshake response
            const binaryData = new Uint8Array(data);
            const separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.RecordSeparatorCode);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            const responseLength = separatorIndex + 1;
            messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
            remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
        }
        else {
            const textData = data;
            const separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.RecordSeparator);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            const responseLength = separatorIndex + 1;
            messageData = textData.substring(0, responseLength);
            remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
        }
        // At this point we should have just the single handshake message
        const messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.parse(messageData);
        const response = JSON.parse(messages[0]);
        if (response.type) {
            throw new Error("Expected a handshake response from the server.");
        }
        const responseMessage = response;
        // multiple messages could have arrived with handshake
        // return additional data to be parsed as usual, or null if all parsed
        return [remainingData, responseMessage];
    }
}


/***/ }),

/***/ 8304:
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HeaderNames.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderNames": () => (/* binding */ HeaderNames)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
class HeaderNames {
}
HeaderNames.Authorization = "Authorization";
HeaderNames.Cookie = "Cookie";


/***/ }),

/***/ 2963:
/*!****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HttpClient.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpResponse": () => (/* binding */ HttpResponse),
/* harmony export */   "HttpClient": () => (/* binding */ HttpClient)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Represents an HTTP response. */
class HttpResponse {
    constructor(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
    }
}
/** Abstraction over an HTTP client.
 *
 * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
 */
class HttpClient {
    get(url, options) {
        return this.send({
            ...options,
            method: "GET",
            url,
        });
    }
    post(url, options) {
        return this.send({
            ...options,
            method: "POST",
            url,
        });
    }
    delete(url, options) {
        return this.send({
            ...options,
            method: "DELETE",
            url,
        });
    }
    /** Gets all cookies that apply to the specified URL.
     *
     * @param url The URL that the cookies are valid for.
     * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
     */
    // @ts-ignore
    getCookieString(url) {
        return "";
    }
}


/***/ }),

/***/ 8266:
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HttpConnection.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpConnection": () => (/* binding */ HttpConnection),
/* harmony export */   "TransportSendQueue": () => (/* binding */ TransportSendQueue)
/* harmony export */ });
/* harmony import */ var C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultHttpClient */ 2708);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Errors */ 8649);
/* harmony import */ var _HeaderNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderNames */ 8304);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ILogger */ 7863);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ITransport */ 4993);
/* harmony import */ var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LongPollingTransport */ 7239);
/* harmony import */ var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ServerSentEventsTransport */ 7347);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 345);
/* harmony import */ var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebSocketTransport */ 3567);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.









const MAX_REDIRECTS = 100;
/** @private */

class HttpConnection {
  constructor(url, options = {}) {
    this._stopPromiseResolver = () => {};

    this.features = {};
    this._negotiateVersion = 1;
    _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
    this._logger = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createLogger)(options.logger);
    this.baseUrl = this._resolveUrl(url);
    options = options || {};
    options.logMessageContent = options.logMessageContent === undefined ? false : options.logMessageContent;

    if (typeof options.withCredentials === "boolean" || options.withCredentials === undefined) {
      options.withCredentials = options.withCredentials === undefined ? true : options.withCredentials;
    } else {
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    }

    options.timeout = options.timeout === undefined ? 100 * 1000 : options.timeout;
    let webSocketModule = null;
    let eventSourceModule = null;

    if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && "function" !== "undefined") {
      // In order to ignore the dynamic require in webpack builds we need to do this magic
      // @ts-ignore: TS doesn't know about these names
      const requireFunc =  true ? require : 0;
      webSocketModule = requireFunc("ws");
      eventSourceModule = requireFunc("eventsource");
    }

    if (!_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
      options.WebSocket = WebSocket;
    } else if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && !options.WebSocket) {
      if (webSocketModule) {
        options.WebSocket = webSocketModule;
      }
    }

    if (!_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
      options.EventSource = EventSource;
    } else if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && !options.EventSource) {
      if (typeof eventSourceModule !== "undefined") {
        options.EventSource = eventSourceModule;
      }
    }

    this._httpClient = options.httpClient || new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__.DefaultHttpClient(this._logger);
    this._connectionState = "Disconnected"
    /* Disconnected */
    ;
    this._connectionStarted = false;
    this._options = options;
    this.onreceive = null;
    this.onclose = null;
  }

  start(transferFormat) {
    var _this = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat.Binary;
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat, "transferFormat");

      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Starting connection with transfer format '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat[transferFormat]}'.`);

      if (_this._connectionState !== "Disconnected"
      /* Disconnected */
      ) {
        return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
      }

      _this._connectionState = "Connecting"
      /* Connecting */
      ;
      _this._startInternalPromise = _this._startInternal(transferFormat);
      yield _this._startInternalPromise; // The TypeScript compiler thinks that connectionState must be Connecting here. The TypeScript compiler is wrong.

      if (_this._connectionState === "Disconnecting"
      /* Disconnecting */
      ) {
        // stop() was called and transitioned the client into the Disconnecting state.
        const message = "Failed to start the HttpConnection before stop() was called.";

        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, message); // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.


        yield _this._stopPromise;
        return Promise.reject(new Error(message));
      } else if (_this._connectionState !== "Connected"
      /* Connected */
      ) {
        // stop() was called and transitioned the client into the Disconnecting state.
        const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";

        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, message);

        return Promise.reject(new Error(message));
      }

      _this._connectionStarted = true;
    })();
  }

  send(data) {
    if (this._connectionState !== "Connected"
    /* Connected */
    ) {
      return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
    }

    if (!this._sendQueue) {
      this._sendQueue = new TransportSendQueue(this.transport);
    } // Transport will not be null if state is connected


    return this._sendQueue.send(data);
  }

  stop(error) {
    var _this2 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2._connectionState === "Disconnected"
      /* Disconnected */
      ) {
        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnected state.`);

        return Promise.resolve();
      }

      if (_this2._connectionState === "Disconnecting"
      /* Disconnecting */
      ) {
        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);

        return _this2._stopPromise;
      }

      _this2._connectionState = "Disconnecting"
      /* Disconnecting */
      ;
      _this2._stopPromise = new Promise(resolve => {
        // Don't complete stop() until stopConnection() completes.
        _this2._stopPromiseResolver = resolve;
      }); // stopInternal should never throw so just observe it.

      yield _this2._stopInternal(error);
      yield _this2._stopPromise;
    })();
  }

  _stopInternal(error) {
    var _this3 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set error as soon as possible otherwise there is a race between
      // the transport closing and providing an error and the error from a close message
      // We would prefer the close message error.
      _this3._stopError = error;

      try {
        yield _this3._startInternalPromise;
      } catch (e) {// This exception is returned to the user as a rejected Promise from the start method.
      } // The transport's onclose will trigger stopConnection which will run our onclose event.
      // The transport should always be set if currently connected. If it wasn't set, it's likely because
      // stop was called during start() and start() failed.


      if (_this3.transport) {
        try {
          yield _this3.transport.stop();
        } catch (e) {
          _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `HttpConnection.transport.stop() threw error '${e}'.`);

          _this3._stopConnection();
        }

        _this3.transport = undefined;
      } else {
        _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
      }
    })();
  }

  _startInternal(transferFormat) {
    var _this4 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Store the original base url and the access token factory since they may change
      // as part of negotiating
      let url = _this4.baseUrl;
      _this4._accessTokenFactory = _this4._options.accessTokenFactory;

      try {
        if (_this4._options.skipNegotiation) {
          if (_this4._options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.WebSockets) {
            // No need to add a connection ID in this case
            _this4.transport = _this4._constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.WebSockets); // We should just call connect directly in this case.
            // No fallback or negotiate in this case.

            yield _this4._startTransport(url, transferFormat);
          } else {
            throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
          }
        } else {
          let negotiateResponse = null;
          let redirects = 0;

          do {
            negotiateResponse = yield _this4._getNegotiationResponse(url); // the user tries to stop the connection when it is being started

            if (_this4._connectionState === "Disconnecting"
            /* Disconnecting */
            || _this4._connectionState === "Disconnected"
            /* Disconnected */
            ) {
              throw new Error("The connection was stopped during negotiation.");
            }

            if (negotiateResponse.error) {
              throw new Error(negotiateResponse.error);
            }

            if (negotiateResponse.ProtocolVersion) {
              throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
            }

            if (negotiateResponse.url) {
              url = negotiateResponse.url;
            }

            if (negotiateResponse.accessToken) {
              // Replace the current access token factory with one that uses
              // the returned access token
              const accessToken = negotiateResponse.accessToken;

              _this4._accessTokenFactory = () => accessToken;
            }

            redirects++;
          } while (negotiateResponse.url && redirects < MAX_REDIRECTS);

          if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
            throw new Error("Negotiate redirection limit exceeded.");
          }

          yield _this4._createTransport(url, _this4._options.transport, negotiateResponse, transferFormat);
        }

        if (_this4.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_5__.LongPollingTransport) {
          _this4.features.inherentKeepAlive = true;
        }

        if (_this4._connectionState === "Connecting"
        /* Connecting */
        ) {
          // Ensure the connection transitions to the connected state prior to completing this.startInternalPromise.
          // start() will handle the case when stop was called and startInternal exits still in the disconnecting state.
          _this4._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, "The HttpConnection connected successfully.");

          _this4._connectionState = "Connected"
          /* Connected */
          ;
        } // stop() is waiting on us via this.startInternalPromise so keep this.transport around so it can clean up.
        // This is the only case startInternal can exit in neither the connected nor disconnected state because stopConnection()
        // will transition to the disconnected state. start() will wait for the transition using the stopPromise.

      } catch (e) {
        _this4._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, "Failed to start the connection: " + e);

        _this4._connectionState = "Disconnected"
        /* Disconnected */
        ;
        _this4.transport = undefined; // if start fails, any active calls to stop assume that start will complete the stop promise

        _this4._stopPromiseResolver();

        return Promise.reject(e);
      }
    })();
  }

  _getNegotiationResponse(url) {
    var _this5 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = {};

      if (_this5._accessTokenFactory) {
        const token = yield _this5._accessTokenFactory();

        if (token) {
          headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_6__.HeaderNames.Authorization] = `Bearer ${token}`;
        }
      }

      const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
      headers[name] = value;

      const negotiateUrl = _this5._resolveNegotiateUrl(url);

      _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);

      try {
        const response = yield _this5._httpClient.post(negotiateUrl, {
          content: "",
          headers: { ...headers,
            ..._this5._options.headers
          },
          timeout: _this5._options.timeout,
          withCredentials: _this5._options.withCredentials
        });

        if (response.statusCode !== 200) {
          return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
        }

        const negotiateResponse = JSON.parse(response.content);

        if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
          // Negotiate version 0 doesn't use connectionToken
          // So we set it equal to connectionId so all our logic can use connectionToken without being aware of the negotiate version
          negotiateResponse.connectionToken = negotiateResponse.connectionId;
        }

        return negotiateResponse;
      } catch (e) {
        let errorMessage = "Failed to complete negotiation with the server: " + e;

        if (e instanceof _Errors__WEBPACK_IMPORTED_MODULE_7__.HttpError) {
          if (e.statusCode === 404) {
            errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
          }
        }

        _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, errorMessage);

        return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_7__.FailedToNegotiateWithServerError(errorMessage));
      }
    })();
  }

  _createConnectUrl(url, connectionToken) {
    if (!connectionToken) {
      return url;
    }

    return url + (url.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
  }

  _createTransport(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
    var _this6 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let connectUrl = _this6._createConnectUrl(url, negotiateResponse.connectionToken);

      if (_this6._isITransport(requestedTransport)) {
        _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");

        _this6.transport = requestedTransport;
        yield _this6._startTransport(connectUrl, requestedTransferFormat);
        _this6.connectionId = negotiateResponse.connectionId;
        return;
      }

      const transportExceptions = [];
      const transports = negotiateResponse.availableTransports || [];
      let negotiate = negotiateResponse;

      for (const endpoint of transports) {
        const transportOrError = _this6._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat);

        if (transportOrError instanceof Error) {
          // Store the error and continue, we don't want to cause a re-negotiate in these cases
          transportExceptions.push(`${endpoint.transport} failed:`);
          transportExceptions.push(transportOrError);
        } else if (_this6._isITransport(transportOrError)) {
          _this6.transport = transportOrError;

          if (!negotiate) {
            try {
              negotiate = yield _this6._getNegotiationResponse(url);
            } catch (ex) {
              return Promise.reject(ex);
            }

            connectUrl = _this6._createConnectUrl(url, negotiate.connectionToken);
          }

          try {
            yield _this6._startTransport(connectUrl, requestedTransferFormat);
            _this6.connectionId = negotiate.connectionId;
            return;
          } catch (ex) {
            _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);

            negotiate = undefined;
            transportExceptions.push(new _Errors__WEBPACK_IMPORTED_MODULE_7__.FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[endpoint.transport]));

            if (_this6._connectionState !== "Connecting"
            /* Connecting */
            ) {
              const message = "Failed to select transport before stop() was called.";

              _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, message);

              return Promise.reject(new Error(message));
            }
          }
        }
      }

      if (transportExceptions.length > 0) {
        return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_7__.AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
      }

      return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
    })();
  }

  _constructTransport(transport) {
    switch (transport) {
      case _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.WebSockets:
        if (!this._options.WebSocket) {
          throw new Error("'WebSocket' is not supported in your environment.");
        }

        return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_8__.WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});

      case _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.ServerSentEvents:
        if (!this._options.EventSource) {
          throw new Error("'EventSource' is not supported in your environment.");
        }

        return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_9__.ServerSentEventsTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options);

      case _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.LongPolling:
        return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_5__.LongPollingTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options);

      default:
        throw new Error(`Unknown transport: ${transport}.`);
    }
  }

  _startTransport(url, transferFormat) {
    this.transport.onreceive = this.onreceive;

    this.transport.onclose = e => this._stopConnection(e);

    return this.transport.connect(url, transferFormat);
  }

  _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat) {
    const transport = _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[endpoint.transport];

    if (transport === null || transport === undefined) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);

      return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
    } else {
      if (transportMatches(requestedTransport, transport)) {
        const transferFormats = endpoint.transferFormats.map(s => _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat[s]);

        if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
          if (transport === _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.WebSockets && !this._options.WebSocket || transport === _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.ServerSentEvents && !this._options.EventSource) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' because it is not supported in your environment.'`);

            return new _Errors__WEBPACK_IMPORTED_MODULE_7__.UnsupportedTransportError(`'${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' is not supported in your environment.`, transport);
          } else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Selecting transport '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}'.`);

            try {
              return this._constructTransport(transport);
            } catch (ex) {
              return ex;
            }
          }
        } else {
          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' because it does not support the requested transfer format '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat[requestedTransferFormat]}'.`);

          return new Error(`'${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' does not support ${_ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat[requestedTransferFormat]}.`);
        }
      } else {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' because it was disabled by the client.`);

        return new _Errors__WEBPACK_IMPORTED_MODULE_7__.DisabledTransportError(`'${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' is disabled by the client.`, transport);
      }
    }
  }

  _isITransport(transport) {
    return transport && typeof transport === "object" && "connect" in transport;
  }

  _stopConnection(error) {
    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `HttpConnection.stopConnection(${error}) called while in state ${this._connectionState}.`);

    this.transport = undefined; // If we have a stopError, it takes precedence over the error from the transport

    error = this._stopError || error;
    this._stopError = undefined;

    if (this._connectionState === "Disconnected"
    /* Disconnected */
    ) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is already in the disconnected state.`);

      return;
    }

    if (this._connectionState === "Connecting"
    /* Connecting */
    ) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Warning, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is still in the connecting state.`);

      throw new Error(`HttpConnection.stopConnection(${error}) was called while the connection is still in the connecting state.`);
    }

    if (this._connectionState === "Disconnecting"
    /* Disconnecting */
    ) {
      // A call to stop() induced this call to stopConnection and needs to be completed.
      // Any stop() awaiters will be scheduled to continue after the onclose callback fires.
      this._stopPromiseResolver();
    }

    if (error) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `Connection disconnected with error '${error}'.`);
    } else {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, "Connection disconnected.");
    }

    if (this._sendQueue) {
      this._sendQueue.stop().catch(e => {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `TransportSendQueue.stop() threw error '${e}'.`);
      });

      this._sendQueue = undefined;
    }

    this.connectionId = undefined;
    this._connectionState = "Disconnected"
    /* Disconnected */
    ;

    if (this._connectionStarted) {
      this._connectionStarted = false;

      try {
        if (this.onclose) {
          this.onclose(error);
        }
      } catch (e) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `HttpConnection.onclose(${error}) threw error '${e}'.`);
      }
    }
  }

  _resolveUrl(url) {
    // startsWith is not supported in IE
    if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
      return url;
    }

    if (!_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isBrowser) {
      throw new Error(`Cannot resolve '${url}'.`);
    } // Setting the url to the href propery of an anchor tag handles normalization
    // for us. There are 3 main cases.
    // 1. Relative path normalization e.g "b" -> "http://localhost:5000/a/b"
    // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
    // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"


    const aTag = window.document.createElement("a");
    aTag.href = url;

    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, `Normalizing '${url}' to '${aTag.href}'.`);

    return aTag.href;
  }

  _resolveNegotiateUrl(url) {
    const index = url.indexOf("?");
    let negotiateUrl = url.substring(0, index === -1 ? url.length : index);

    if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
      negotiateUrl += "/";
    }

    negotiateUrl += "negotiate";
    negotiateUrl += index === -1 ? "" : url.substring(index);

    if (negotiateUrl.indexOf("negotiateVersion") === -1) {
      negotiateUrl += index === -1 ? "?" : "&";
      negotiateUrl += "negotiateVersion=" + this._negotiateVersion;
    }

    return negotiateUrl;
  }

}

function transportMatches(requestedTransport, actualTransport) {
  return !requestedTransport || (actualTransport & requestedTransport) !== 0;
}
/** @private */


class TransportSendQueue {
  constructor(_transport) {
    this._transport = _transport;
    this._buffer = [];
    this._executing = true;
    this._sendBufferedData = new PromiseSource();
    this._transportResult = new PromiseSource();
    this._sendLoopPromise = this._sendLoop();
  }

  send(data) {
    this._bufferData(data);

    if (!this._transportResult) {
      this._transportResult = new PromiseSource();
    }

    return this._transportResult.promise;
  }

  stop() {
    this._executing = false;

    this._sendBufferedData.resolve();

    return this._sendLoopPromise;
  }

  _bufferData(data) {
    if (this._buffer.length && typeof this._buffer[0] !== typeof data) {
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof data}`);
    }

    this._buffer.push(data);

    this._sendBufferedData.resolve();
  }

  _sendLoop() {
    var _this7 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      while (true) {
        yield _this7._sendBufferedData.promise;

        if (!_this7._executing) {
          if (_this7._transportResult) {
            _this7._transportResult.reject("Connection stopped.");
          }

          break;
        }

        _this7._sendBufferedData = new PromiseSource();
        const transportResult = _this7._transportResult;
        _this7._transportResult = undefined;
        const data = typeof _this7._buffer[0] === "string" ? _this7._buffer.join("") : TransportSendQueue._concatBuffers(_this7._buffer);
        _this7._buffer.length = 0;

        try {
          yield _this7._transport.send(data);
          transportResult.resolve();
        } catch (error) {
          transportResult.reject(error);
        }
      }
    })();
  }

  static _concatBuffers(arrayBuffers) {
    const totalLength = arrayBuffers.map(b => b.byteLength).reduce((a, b) => a + b);
    const result = new Uint8Array(totalLength);
    let offset = 0;

    for (const item of arrayBuffers) {
      result.set(new Uint8Array(item), offset);
      offset += item.byteLength;
    }

    return result.buffer;
  }

}

class PromiseSource {
  constructor() {
    this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
  }

  resolve() {
    this._resolver();
  }

  reject(reason) {
    this._rejecter(reason);
  }

}

/***/ }),

/***/ 6271:
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HubConnection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HubConnectionState": () => (/* binding */ HubConnectionState),
/* harmony export */   "HubConnection": () => (/* binding */ HubConnection)
/* harmony export */ });
/* harmony import */ var C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HandshakeProtocol */ 4246);
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IHubProtocol */ 785);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ 7863);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Subject */ 154);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ 345);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





const DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
const DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
/** Describes the current state of the {@link HubConnection} to the server. */

var HubConnectionState;

(function (HubConnectionState) {
  /** The hub connection is disconnected. */
  HubConnectionState["Disconnected"] = "Disconnected";
  /** The hub connection is connecting. */

  HubConnectionState["Connecting"] = "Connecting";
  /** The hub connection is connected. */

  HubConnectionState["Connected"] = "Connected";
  /** The hub connection is disconnecting. */

  HubConnectionState["Disconnecting"] = "Disconnecting";
  /** The hub connection is reconnecting. */

  HubConnectionState["Reconnecting"] = "Reconnecting";
})(HubConnectionState || (HubConnectionState = {}));
/** Represents a connection to a SignalR Hub. */


class HubConnection {
  constructor(connection, logger, protocol, reconnectPolicy) {
    this._nextKeepAlive = 0;

    this._freezeEventListener = () => {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    };

    _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isRequired(connection, "connection");
    _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isRequired(logger, "logger");
    _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isRequired(protocol, "protocol");
    this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
    this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
    this._logger = logger;
    this._protocol = protocol;
    this.connection = connection;
    this._reconnectPolicy = reconnectPolicy;
    this._handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_3__.HandshakeProtocol();

    this.connection.onreceive = data => this._processIncomingData(data);

    this.connection.onclose = error => this._connectionClosed(error);

    this._callbacks = {};
    this._methods = {};
    this._closedCallbacks = [];
    this._reconnectingCallbacks = [];
    this._reconnectedCallbacks = [];
    this._invocationId = 0;
    this._receivedHandshakeResponse = false;
    this._connectionState = HubConnectionState.Disconnected;
    this._connectionStarted = false;
    this._cachedPingMessage = this._protocol.writeMessage({
      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Ping
    });
  }
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.


  static create(connection, logger, protocol, reconnectPolicy) {
    return new HubConnection(connection, logger, protocol, reconnectPolicy);
  }
  /** Indicates the state of the {@link HubConnection} to the server. */


  get state() {
    return this._connectionState;
  }
  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
   *  in the disconnected state or if the negotiation step was skipped.
   */


  get connectionId() {
    return this.connection ? this.connection.connectionId || null : null;
  }
  /** Indicates the url of the {@link HubConnection} to the server. */


  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  /**
   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
   * Reconnecting states.
   * @param {string} url The url to connect to.
   */


  set baseUrl(url) {
    if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    }

    if (!url) {
      throw new Error("The HubConnection url must be a valid url.");
    }

    this.connection.baseUrl = url;
  }
  /** Starts the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
   */


  start() {
    this._startPromise = this._startWithStateTransitions();
    return this._startPromise;
  }

  _startWithStateTransitions() {
    var _this = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this._connectionState !== HubConnectionState.Disconnected) {
        return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
      }

      _this._connectionState = HubConnectionState.Connecting;

      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Starting HubConnection.");

      try {
        yield _this._startInternal();

        if (_Utils__WEBPACK_IMPORTED_MODULE_2__.Platform.isBrowser) {
          // Log when the browser freezes the tab so users know why their connection unexpectedly stopped working
          window.document.addEventListener("freeze", _this._freezeEventListener);
        }

        _this._connectionState = HubConnectionState.Connected;
        _this._connectionStarted = true;

        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "HubConnection connected successfully.");
      } catch (e) {
        _this._connectionState = HubConnectionState.Disconnected;

        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `HubConnection failed to start successfully because of error '${e}'.`);

        return Promise.reject(e);
      }
    })();
  }

  _startInternal() {
    var _this2 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._stopDuringStartError = undefined;
      _this2._receivedHandshakeResponse = false; // Set up the promise before any connection is (re)started otherwise it could race with received messages

      const handshakePromise = new Promise((resolve, reject) => {
        _this2._handshakeResolver = resolve;
        _this2._handshakeRejecter = reject;
      });
      yield _this2.connection.start(_this2._protocol.transferFormat);

      try {
        const handshakeRequest = {
          protocol: _this2._protocol.name,
          version: _this2._protocol.version
        };

        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Sending handshake request.");

        yield _this2._sendMessage(_this2._handshakeProtocol.writeHandshakeRequest(handshakeRequest));

        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, `Using HubProtocol '${_this2._protocol.name}'.`); // defensively cleanup timeout in case we receive a message from the server before we finish start


        _this2._cleanupTimeout();

        _this2._resetTimeoutPeriod();

        _this2._resetKeepAliveInterval();

        yield handshakePromise; // It's important to check the stopDuringStartError instead of just relying on the handshakePromise
        // being rejected on close, because this continuation can run after both the handshake completed successfully
        // and the connection was closed.

        if (_this2._stopDuringStartError) {
          // It's important to throw instead of returning a rejected promise, because we don't want to allow any state
          // transitions to occur between now and the calling code observing the exceptions. Returning a rejected promise
          // will cause the calling continuation to get scheduled to run later.
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw _this2._stopDuringStartError;
        }
      } catch (e) {
        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`);

        _this2._cleanupTimeout();

        _this2._cleanupPingTimer(); // HttpConnection.stop() should not complete until after the onclose callback is invoked.
        // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.


        yield _this2.connection.stop(e);
        throw e;
      }
    })();
  }
  /** Stops the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
   */


  stop() {
    var _this3 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Capture the start promise before the connection might be restarted in an onclose callback.
      const startPromise = _this3._startPromise;
      _this3._stopPromise = _this3._stopInternal();
      yield _this3._stopPromise;

      try {
        // Awaiting undefined continues immediately
        yield startPromise;
      } catch (e) {// This exception is returned to the user as a rejected Promise from the start method.
      }
    })();
  }

  _stopInternal(error) {
    if (this._connectionState === HubConnectionState.Disconnected) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `Call to HubConnection.stop(${error}) ignored because it is already in the disconnected state.`);

      return Promise.resolve();
    }

    if (this._connectionState === HubConnectionState.Disconnecting) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);

      return this._stopPromise;
    }

    this._connectionState = HubConnectionState.Disconnecting;

    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Stopping HubConnection.");

    if (this._reconnectDelayHandle) {
      // We're in a reconnect delay which means the underlying connection is currently already stopped.
      // Just clear the handle to stop the reconnect loop (which no one is waiting on thankfully) and
      // fire the onclose callbacks.
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");

      clearTimeout(this._reconnectDelayHandle);
      this._reconnectDelayHandle = undefined;

      this._completeClose();

      return Promise.resolve();
    }

    this._cleanupTimeout();

    this._cleanupPingTimer();

    this._stopDuringStartError = error || new Error("The connection was stopped before the hub handshake could complete."); // HttpConnection.stop() should not complete until after either HttpConnection.start() fails
    // or the onclose callback is invoked. The onclose callback will transition the HubConnection
    // to the disconnected state if need be before HttpConnection.stop() completes.

    return this.connection.stop(error);
  }
  /** Invokes a streaming hub method on the server using the specified name and arguments.
   *
   * @typeparam T The type of the items returned by the server.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
   */


  stream(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);

    const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds); // eslint-disable-next-line prefer-const


    let promiseQueue;
    const subject = new _Subject__WEBPACK_IMPORTED_MODULE_5__.Subject();

    subject.cancelCallback = () => {
      const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);

      delete this._callbacks[invocationDescriptor.invocationId];
      return promiseQueue.then(() => {
        return this._sendWithProtocol(cancelInvocation);
      });
    };

    this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
      if (error) {
        subject.error(error);
        return;
      } else if (invocationEvent) {
        // invocationEvent will not be null when an error is not passed to the callback
        if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion) {
          if (invocationEvent.error) {
            subject.error(new Error(invocationEvent.error));
          } else {
            subject.complete();
          }
        } else {
          subject.next(invocationEvent.item);
        }
      }
    };

    promiseQueue = this._sendWithProtocol(invocationDescriptor).catch(e => {
      subject.error(e);
      delete this._callbacks[invocationDescriptor.invocationId];
    });

    this._launchStreams(streams, promiseQueue);

    return subject;
  }

  _sendMessage(message) {
    this._resetKeepAliveInterval();

    return this.connection.send(message);
  }
  /**
   * Sends a js object to the server.
   * @param message The js object to serialize and send.
   */


  _sendWithProtocol(message) {
    return this._sendMessage(this._protocol.writeMessage(message));
  }
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
   *
   * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
   * be processing the invocation.
   *
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
   */


  send(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);

    const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));

    this._launchStreams(streams, sendPromise);

    return sendPromise;
  }
  /** Invokes a hub method on the server using the specified name and arguments.
   *
   * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
   * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
   * resolving the Promise.
   *
   * @typeparam T The expected return type.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
   */


  invoke(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);

    const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);

    const p = new Promise((resolve, reject) => {
      // invocationId will always have a value for a non-blocking invocation
      this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
        if (error) {
          reject(error);
          return;
        } else if (invocationEvent) {
          // invocationEvent will not be null when an error is not passed to the callback
          if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion) {
            if (invocationEvent.error) {
              reject(new Error(invocationEvent.error));
            } else {
              resolve(invocationEvent.result);
            }
          } else {
            reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
          }
        }
      };

      const promiseQueue = this._sendWithProtocol(invocationDescriptor).catch(e => {
        reject(e); // invocationId will always have a value for a non-blocking invocation

        delete this._callbacks[invocationDescriptor.invocationId];
      });

      this._launchStreams(streams, promiseQueue);
    });
    return p;
  }
  /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
   *
   * @param {string} methodName The name of the hub method to define.
   * @param {Function} newMethod The handler that will be raised when the hub method is invoked.
   */


  on(methodName, newMethod) {
    if (!methodName || !newMethod) {
      return;
    }

    methodName = methodName.toLowerCase();

    if (!this._methods[methodName]) {
      this._methods[methodName] = [];
    } // Preventing adding the same handler multiple times.


    if (this._methods[methodName].indexOf(newMethod) !== -1) {
      return;
    }

    this._methods[methodName].push(newMethod);
  }

  off(methodName, method) {
    if (!methodName) {
      return;
    }

    methodName = methodName.toLowerCase();
    const handlers = this._methods[methodName];

    if (!handlers) {
      return;
    }

    if (method) {
      const removeIdx = handlers.indexOf(method);

      if (removeIdx !== -1) {
        handlers.splice(removeIdx, 1);

        if (handlers.length === 0) {
          delete this._methods[methodName];
        }
      }
    } else {
      delete this._methods[methodName];
    }
  }
  /** Registers a handler that will be invoked when the connection is closed.
   *
   * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
   */


  onclose(callback) {
    if (callback) {
      this._closedCallbacks.push(callback);
    }
  }
  /** Registers a handler that will be invoked when the connection starts reconnecting.
   *
   * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
   */


  onreconnecting(callback) {
    if (callback) {
      this._reconnectingCallbacks.push(callback);
    }
  }
  /** Registers a handler that will be invoked when the connection successfully reconnects.
   *
   * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
   */


  onreconnected(callback) {
    if (callback) {
      this._reconnectedCallbacks.push(callback);
    }
  }

  _processIncomingData(data) {
    this._cleanupTimeout();

    if (!this._receivedHandshakeResponse) {
      data = this._processHandshakeResponse(data);
      this._receivedHandshakeResponse = true;
    } // Data may have all been read when processing handshake response


    if (data) {
      // Parse the messages
      const messages = this._protocol.parseMessages(data, this._logger);

      for (const message of messages) {
        switch (message.type) {
          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Invocation:
            this._invokeClientMethod(message);

            break;

          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.StreamItem:
          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion:
            {
              const callback = this._callbacks[message.invocationId];

              if (callback) {
                if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion) {
                  delete this._callbacks[message.invocationId];
                }

                try {
                  callback(message);
                } catch (e) {
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `Stream callback threw error: ${(0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getErrorString)(e)}`);
                }
              }

              break;
            }

          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Ping:
            // Don't care about pings
            break;

          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Close:
            {
              this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, "Close message received from server.");

              const error = message.error ? new Error("Server returned an error on close: " + message.error) : undefined;

              if (message.allowReconnect === true) {
                // It feels wrong not to await connection.stop() here, but processIncomingData is called as part of an onreceive callback which is not async,
                // this is already the behavior for serverTimeout(), and HttpConnection.Stop() should catch and log all possible exceptions.
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.connection.stop(error);
              } else {
                // We cannot await stopInternal() here, but subsequent calls to stop() will await this if stopInternal() is still ongoing.
                this._stopPromise = this._stopInternal(error);
              }

              break;
            }

          default:
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Warning, `Invalid message type: ${message.type}.`);

            break;
        }
      }
    }

    this._resetTimeoutPeriod();
  }

  _processHandshakeResponse(data) {
    let responseMessage;
    let remainingData;

    try {
      [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data);
    } catch (e) {
      const message = "Error parsing handshake response: " + e;

      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, message);

      const error = new Error(message);

      this._handshakeRejecter(error);

      throw error;
    }

    if (responseMessage.error) {
      const message = "Server returned handshake error: " + responseMessage.error;

      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, message);

      const error = new Error(message);

      this._handshakeRejecter(error);

      throw error;
    } else {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Server handshake complete.");
    }

    this._handshakeResolver();

    return remainingData;
  }

  _resetKeepAliveInterval() {
    if (this.connection.features.inherentKeepAlive) {
      return;
    } // Set the time we want the next keep alive to be sent
    // Timer will be setup on next message receive


    this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds;

    this._cleanupPingTimer();
  }

  _resetTimeoutPeriod() {
    var _this4 = this;

    if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
      // Set the timeout timer
      this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds); // Set keepAlive timer if there isn't one

      if (this._pingServerHandle === undefined) {
        let nextPing = this._nextKeepAlive - new Date().getTime();

        if (nextPing < 0) {
          nextPing = 0;
        } // The timer needs to be set from a networking callback to avoid Chrome timer throttling from causing timers to run once a minute


        this._pingServerHandle = setTimeout( /*#__PURE__*/(0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (_this4._connectionState === HubConnectionState.Connected) {
            try {
              yield _this4._sendMessage(_this4._cachedPingMessage);
            } catch {
              // We don't care about the error. It should be seen elsewhere in the client.
              // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
              _this4._cleanupPingTimer();
            }
          }
        }), nextPing);
      }
    }
  } // eslint-disable-next-line @typescript-eslint/naming-convention


  serverTimeout() {
    // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
    // Terminate the connection, but we don't need to wait on the promise. This could trigger reconnecting.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }

  _invokeClientMethod(invocationMessage) {
    const methods = this._methods[invocationMessage.target.toLowerCase()];

    if (methods) {
      try {
        methods.forEach(m => m.apply(this, invocationMessage.arguments));
      } catch (e) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `A callback for the method ${invocationMessage.target.toLowerCase()} threw error '${e}'.`);
      }

      if (invocationMessage.invocationId) {
        // This is not supported in v1. So we return an error to avoid blocking the server waiting for the response.
        const message = "Server requested a response, which is not supported in this version of the client.";

        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, message); // We don't want to wait on the stop itself.


        this._stopPromise = this._stopInternal(new Error(message));
      }
    } else {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Warning, `No client method with the name '${invocationMessage.target}' found.`);
    }
  }

  _connectionClosed(error) {
    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `HubConnection.connectionClosed(${error}) called while in state ${this._connectionState}.`); // Triggering this.handshakeRejecter is insufficient because it could already be resolved without the continuation having run yet.


    this._stopDuringStartError = this._stopDuringStartError || error || new Error("The underlying connection was closed before the hub handshake could complete."); // If the handshake is in progress, start will be waiting for the handshake promise, so we complete it.
    // If it has already completed, this should just noop.

    if (this._handshakeResolver) {
      this._handshakeResolver();
    }

    this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));

    this._cleanupTimeout();

    this._cleanupPingTimer();

    if (this._connectionState === HubConnectionState.Disconnecting) {
      this._completeClose(error);
    } else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this._reconnect(error);
    } else if (this._connectionState === HubConnectionState.Connected) {
      this._completeClose(error);
    } // If none of the above if conditions were true were called the HubConnection must be in either:
    // 1. The Connecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail it.
    // 2. The Reconnecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail the current reconnect attempt
    //    and potentially continue the reconnect() loop.
    // 3. The Disconnected state in which case we're already done.

  }

  _completeClose(error) {
    if (this._connectionStarted) {
      this._connectionState = HubConnectionState.Disconnected;
      this._connectionStarted = false;

      if (_Utils__WEBPACK_IMPORTED_MODULE_2__.Platform.isBrowser) {
        window.document.removeEventListener("freeze", this._freezeEventListener);
      }

      try {
        this._closedCallbacks.forEach(c => c.apply(this, [error]));
      } catch (e) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `An onclose callback called with error '${error}' threw error '${e}'.`);
      }
    }
  }

  _reconnect(error) {
    var _this5 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const reconnectStartTime = Date.now();
      let previousReconnectAttempts = 0;
      let retryError = error !== undefined ? error : new Error("Attempting to reconnect due to a unknown error.");

      let nextRetryDelay = _this5._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);

      if (nextRetryDelay === null) {
        _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");

        _this5._completeClose(error);

        return;
      }

      _this5._connectionState = HubConnectionState.Reconnecting;

      if (error) {
        _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, `Connection reconnecting because of error '${error}'.`);
      } else {
        _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, "Connection reconnecting.");
      }

      if (_this5._reconnectingCallbacks.length !== 0) {
        try {
          _this5._reconnectingCallbacks.forEach(c => c.apply(_this5, [error]));
        } catch (e) {
          _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `An onreconnecting callback called with error '${error}' threw error '${e}'.`);
        } // Exit early if an onreconnecting callback called connection.stop().


        if (_this5._connectionState !== HubConnectionState.Reconnecting) {
          _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");

          return;
        }
      }

      while (nextRetryDelay !== null) {
        _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts} will start in ${nextRetryDelay} ms.`);

        yield new Promise(resolve => {
          _this5._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
        });
        _this5._reconnectDelayHandle = undefined;

        if (_this5._connectionState !== HubConnectionState.Reconnecting) {
          _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");

          return;
        }

        try {
          yield _this5._startInternal();
          _this5._connectionState = HubConnectionState.Connected;

          _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, "HubConnection reconnected successfully.");

          if (_this5._reconnectedCallbacks.length !== 0) {
            try {
              _this5._reconnectedCallbacks.forEach(c => c.apply(_this5, [_this5.connection.connectionId]));
            } catch (e) {
              _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `An onreconnected callback called with connectionId '${_this5.connection.connectionId}; threw error '${e}'.`);
            }
          }

          return;
        } catch (e) {
          _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, `Reconnect attempt failed because of error '${e}'.`);

          if (_this5._connectionState !== HubConnectionState.Reconnecting) {
            _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `Connection moved to the '${_this5._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`); // The TypeScript compiler thinks that connectionState must be Connected here. The TypeScript compiler is wrong.


            if (_this5._connectionState === HubConnectionState.Disconnecting) {
              _this5._completeClose();
            }

            return;
          }

          retryError = e instanceof Error ? e : new Error(e.toString());
          nextRetryDelay = _this5._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
        }
      }

      _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);

      _this5._completeClose();
    })();
  }

  _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds,
        previousRetryCount,
        retryReason
      });
    } catch (e) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e}'.`);

      return null;
    }
  }

  _cancelCallbacksWithError(error) {
    const callbacks = this._callbacks;
    this._callbacks = {};
    Object.keys(callbacks).forEach(key => {
      const callback = callbacks[key];

      try {
        callback(null, error);
      } catch (e) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `Stream 'error' callback called with '${error}' threw error: ${(0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getErrorString)(e)}`);
      }
    });
  }

  _cleanupPingTimer() {
    if (this._pingServerHandle) {
      clearTimeout(this._pingServerHandle);
      this._pingServerHandle = undefined;
    }
  }

  _cleanupTimeout() {
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle);
    }
  }

  _createInvocation(methodName, args, nonblocking, streamIds) {
    if (nonblocking) {
      if (streamIds.length !== 0) {
        return {
          arguments: args,
          streamIds,
          target: methodName,
          type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Invocation
        };
      } else {
        return {
          arguments: args,
          target: methodName,
          type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Invocation
        };
      }
    } else {
      const invocationId = this._invocationId;
      this._invocationId++;

      if (streamIds.length !== 0) {
        return {
          arguments: args,
          invocationId: invocationId.toString(),
          streamIds,
          target: methodName,
          type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Invocation
        };
      } else {
        return {
          arguments: args,
          invocationId: invocationId.toString(),
          target: methodName,
          type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Invocation
        };
      }
    }
  }

  _launchStreams(streams, promiseQueue) {
    if (streams.length === 0) {
      return;
    } // Synchronize stream data so they arrive in-order on the server


    if (!promiseQueue) {
      promiseQueue = Promise.resolve();
    } // We want to iterate over the keys, since the keys are the stream ids
    // eslint-disable-next-line guard-for-in


    for (const streamId in streams) {
      streams[streamId].subscribe({
        complete: () => {
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
        },
        error: err => {
          let message;

          if (err instanceof Error) {
            message = err.message;
          } else if (err && err.toString) {
            message = err.toString();
          } else {
            message = "Unknown error";
          }

          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
        },
        next: item => {
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
        }
      });
    }
  }

  _replaceStreamingParams(args) {
    const streams = [];
    const streamIds = [];

    for (let i = 0; i < args.length; i++) {
      const argument = args[i];

      if (this._isObservable(argument)) {
        const streamId = this._invocationId;
        this._invocationId++; // Store the stream for later use

        streams[streamId] = argument;
        streamIds.push(streamId.toString()); // remove stream from args

        args.splice(i, 1);
      }
    }

    return [streams, streamIds];
  }

  _isObservable(arg) {
    // This allows other stream implementations to just work (like rxjs)
    return arg && arg.subscribe && typeof arg.subscribe === "function";
  }

  _createStreamInvocation(methodName, args, streamIds) {
    const invocationId = this._invocationId;
    this._invocationId++;

    if (streamIds.length !== 0) {
      return {
        arguments: args,
        invocationId: invocationId.toString(),
        streamIds,
        target: methodName,
        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.StreamInvocation
      };
    } else {
      return {
        arguments: args,
        invocationId: invocationId.toString(),
        target: methodName,
        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.StreamInvocation
      };
    }
  }

  _createCancelInvocation(id) {
    return {
      invocationId: id,
      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.CancelInvocation
    };
  }

  _createStreamItemMessage(id, item) {
    return {
      invocationId: id,
      item,
      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.StreamItem
    };
  }

  _createCompletionMessage(id, error, result) {
    if (error) {
      return {
        error,
        invocationId: id,
        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion
      };
    }

    return {
      invocationId: id,
      result,
      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion
    };
  }

}

/***/ }),

/***/ 32:
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HubConnectionBuilder": () => (/* binding */ HubConnectionBuilder)
/* harmony export */ });
/* harmony import */ var _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultReconnectPolicy */ 5545);
/* harmony import */ var _HttpConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HttpConnection */ 8266);
/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HubConnection */ 6271);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ 7863);
/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JsonHubProtocol */ 369);
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loggers */ 1904);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 345);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.







const LogLevelNameMapping = {
    trace: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace,
    debug: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug,
    info: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information,
    information: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information,
    warn: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning,
    warning: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning,
    error: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error,
    critical: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Critical,
    none: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.None,
};
function parseLogLevel(name) {
    // Case-insensitive matching via lower-casing
    // Yes, I know case-folding is a complicated problem in Unicode, but we only support
    // the ASCII strings defined in LogLevelNameMapping anyway, so it's fine -anurse.
    const mapping = LogLevelNameMapping[name.toLowerCase()];
    if (typeof mapping !== "undefined") {
        return mapping;
    }
    else {
        throw new Error(`Unknown log level: ${name}`);
    }
}
/** A builder for configuring {@link @microsoft/signalr.HubConnection} instances. */
class HubConnectionBuilder {
    configureLogging(logging) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(logging, "logging");
        if (isLogger(logging)) {
            this.logger = logging;
        }
        else if (typeof logging === "string") {
            const logLevel = parseLogLevel(logging);
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger(logLevel);
        }
        else {
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger(logging);
        }
        return this;
    }
    withUrl(url, transportTypeOrOptions) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isNotEmpty(url, "url");
        this.url = url;
        // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
        // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
        if (typeof transportTypeOrOptions === "object") {
            this.httpConnectionOptions = { ...this.httpConnectionOptions, ...transportTypeOrOptions };
        }
        else {
            this.httpConnectionOptions = {
                ...this.httpConnectionOptions,
                transport: transportTypeOrOptions,
            };
        }
        return this;
    }
    /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
     *
     * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
     */
    withHubProtocol(protocol) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
    }
    withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
        if (this.reconnectPolicy) {
            throw new Error("A reconnectPolicy has already been set.");
        }
        if (!retryDelaysOrReconnectPolicy) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__.DefaultReconnectPolicy();
        }
        else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__.DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
        }
        else {
            this.reconnectPolicy = retryDelaysOrReconnectPolicy;
        }
        return this;
    }
    /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
     *
     * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
     */
    build() {
        // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
        // provided to configureLogger
        const httpConnectionOptions = this.httpConnectionOptions || {};
        // If it's 'null', the user **explicitly** asked for null, don't mess with it.
        if (httpConnectionOptions.logger === undefined) {
            // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
            httpConnectionOptions.logger = this.logger;
        }
        // Now create the connection
        if (!this.url) {
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        const connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_3__.HttpConnection(this.url, httpConnectionOptions);
        return _HubConnection__WEBPACK_IMPORTED_MODULE_4__.HubConnection.create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_5__.NullLogger.instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_6__.JsonHubProtocol(), this.reconnectPolicy);
    }
}
function isLogger(logger) {
    return logger.log !== undefined;
}


/***/ }),

/***/ 785:
/*!******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageType": () => (/* binding */ MessageType)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Defines the type of a Hub Message. */
var MessageType;
(function (MessageType) {
    /** Indicates the message is an Invocation message and implements the {@link @microsoft/signalr.InvocationMessage} interface. */
    MessageType[MessageType["Invocation"] = 1] = "Invocation";
    /** Indicates the message is a StreamItem message and implements the {@link @microsoft/signalr.StreamItemMessage} interface. */
    MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
    /** Indicates the message is a Completion message and implements the {@link @microsoft/signalr.CompletionMessage} interface. */
    MessageType[MessageType["Completion"] = 3] = "Completion";
    /** Indicates the message is a Stream Invocation message and implements the {@link @microsoft/signalr.StreamInvocationMessage} interface. */
    MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
    /** Indicates the message is a Cancel Invocation message and implements the {@link @microsoft/signalr.CancelInvocationMessage} interface. */
    MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
    /** Indicates the message is a Ping message and implements the {@link @microsoft/signalr.PingMessage} interface. */
    MessageType[MessageType["Ping"] = 6] = "Ping";
    /** Indicates the message is a Close message and implements the {@link @microsoft/signalr.CloseMessage} interface. */
    MessageType[MessageType["Close"] = 7] = "Close";
})(MessageType || (MessageType = {}));


/***/ }),

/***/ 7863:
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ILogger.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;
(function (LogLevel) {
    /** Log level for very low severity diagnostic messages. */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /** Log level for low severity diagnostic messages. */
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    /** Log level for informational diagnostic messages. */
    LogLevel[LogLevel["Information"] = 2] = "Information";
    /** Log level for diagnostic messages that indicate a non-fatal problem. */
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    /** Log level for diagnostic messages that indicate a failure in the current operation. */
    LogLevel[LogLevel["Error"] = 4] = "Error";
    /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
    LogLevel[LogLevel["Critical"] = 5] = "Critical";
    /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
    LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));


/***/ }),

/***/ 4993:
/*!****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ITransport.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpTransportType": () => (/* binding */ HttpTransportType),
/* harmony export */   "TransferFormat": () => (/* binding */ TransferFormat)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;
(function (HttpTransportType) {
    /** Specifies no transport preference. */
    HttpTransportType[HttpTransportType["None"] = 0] = "None";
    /** Specifies the WebSockets transport. */
    HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
    /** Specifies the Server-Sent Events transport. */
    HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
    /** Specifies the Long Polling transport. */
    HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;
(function (TransferFormat) {
    /** Specifies that only text data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Text"] = 1] = "Text";
    /** Specifies that binary data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));


/***/ }),

/***/ 369:
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonHubProtocol": () => (/* binding */ JsonHubProtocol)
/* harmony export */ });
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IHubProtocol */ 785);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ILogger */ 7863);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ITransport */ 4993);
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggers */ 1904);
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextMessageFormat */ 4444);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





const JSON_HUB_PROTOCOL_NAME = "json";
/** Implements the JSON Hub Protocol. */
class JsonHubProtocol {
    constructor() {
        /** @inheritDoc */
        this.name = JSON_HUB_PROTOCOL_NAME;
        /** @inheritDoc */
        this.version = 1;
        /** @inheritDoc */
        this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_0__.TransferFormat.Text;
    }
    /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
     *
     * @param {string} input A string containing the serialized representation.
     * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
     */
    parseMessages(input, logger) {
        // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
        if (typeof input !== "string") {
            throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
            return [];
        }
        if (logger === null) {
            logger = _Loggers__WEBPACK_IMPORTED_MODULE_1__.NullLogger.instance;
        }
        // Parse the messages
        const messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__.TextMessageFormat.parse(input);
        const hubMessages = [];
        for (const message of messages) {
            const parsedMessage = JSON.parse(message);
            if (typeof parsedMessage.type !== "number") {
                throw new Error("Invalid payload.");
            }
            switch (parsedMessage.type) {
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation:
                    this._isInvocationMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem:
                    this._isStreamItemMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion:
                    this._isCompletionMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping:
                    // Single value, no need to validate
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Close:
                    // All optional values, no need to validate
                    break;
                default:
                    // Future protocol changes can add message types, old clients can ignore them
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                    continue;
            }
            hubMessages.push(parsedMessage);
        }
        return hubMessages;
    }
    /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
     *
     * @param {HubMessage} message The message to write.
     * @returns {string} A string containing the serialized representation of the message.
     */
    writeMessage(message) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__.TextMessageFormat.write(JSON.stringify(message));
    }
    _isInvocationMessage(message) {
        this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== undefined) {
            this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
    }
    _isStreamItemMessage(message) {
        this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === undefined) {
            throw new Error("Invalid payload for StreamItem message.");
        }
    }
    _isCompletionMessage(message) {
        if (message.result && message.error) {
            throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
            this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
    }
    _assertNotEmptyString(value, errorMessage) {
        if (typeof value !== "string" || value === "") {
            throw new Error(errorMessage);
        }
    }
}


/***/ }),

/***/ 1904:
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Loggers.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NullLogger": () => (/* binding */ NullLogger)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** A logger that does nothing when log messages are sent to it. */
class NullLogger {
    constructor() { }
    /** @inheritDoc */
    // eslint-disable-next-line
    log(_logLevel, _message) {
    }
}
/** The singleton instance of the {@link @microsoft/signalr.NullLogger}. */
NullLogger.instance = new NullLogger();


/***/ }),

/***/ 7239:
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LongPollingTransport": () => (/* binding */ LongPollingTransport)
/* harmony export */ });
/* harmony import */ var C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbortController */ 5058);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Errors */ 8649);
/* harmony import */ var _HeaderNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderNames */ 8304);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ILogger */ 7863);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ITransport */ 4993);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ 345);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





 // Not exported from 'index', this type is internal.

/** @private */

class LongPollingTransport {
  constructor(httpClient, accessTokenFactory, logger, options) {
    this._httpClient = httpClient;
    this._accessTokenFactory = accessTokenFactory;
    this._logger = logger;
    this._pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_1__.AbortController();
    this._options = options;
    this._running = false;
    this.onreceive = null;
    this.onclose = null;
  } // This is an internal type, not exported from 'index' so this is really just internal.


  get pollAborted() {
    return this._pollAbort.aborted;
  }

  connect(url, transferFormat) {
    var _this = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isRequired(url, "url");
      _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isRequired(transferFormat, "transferFormat");
      _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat, "transferFormat");
      _this._url = url;

      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Connecting."); // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)


      if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat.Binary && typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string") {
        throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
      }

      const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getUserAgentHeader)();
      const headers = {
        [name]: value,
        ..._this._options.headers
      };
      const pollOptions = {
        abortSignal: _this._pollAbort.signal,
        headers,
        timeout: 100000,
        withCredentials: _this._options.withCredentials
      };

      if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat.Binary) {
        pollOptions.responseType = "arraybuffer";
      }

      const token = yield _this._getAccessToken();

      _this._updateHeaderToken(pollOptions, token); // Make initial long polling request
      // Server uses first long polling request to finish initializing connection and it returns without data


      const pollUrl = `${url}&_=${Date.now()}`;

      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);

      const response = yield _this._httpClient.get(pollUrl, pollOptions);

      if (response.statusCode !== 200) {
        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`); // Mark running as false so that the poll immediately ends and runs the close logic


        _this._closeError = new _Errors__WEBPACK_IMPORTED_MODULE_5__.HttpError(response.statusText || "", response.statusCode);
        _this._running = false;
      } else {
        _this._running = true;
      }

      _this._receiving = _this._poll(_this._url, pollOptions);
    })();
  }

  _getAccessToken() {
    var _this2 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2._accessTokenFactory) {
        return yield _this2._accessTokenFactory();
      }

      return null;
    })();
  }

  _updateHeaderToken(request, token) {
    if (!request.headers) {
      request.headers = {};
    }

    if (token) {
      request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_6__.HeaderNames.Authorization] = `Bearer ${token}`;
      return;
    }

    if (request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_6__.HeaderNames.Authorization]) {
      delete request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_6__.HeaderNames.Authorization];
    }
  }

  _poll(url, pollOptions) {
    var _this3 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        while (_this3._running) {
          // We have to get the access token on each poll, in case it changes
          const token = yield _this3._getAccessToken();

          _this3._updateHeaderToken(pollOptions, token);

          try {
            const pollUrl = `${url}&_=${Date.now()}`;

            _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);

            const response = yield _this3._httpClient.get(pollUrl, pollOptions);

            if (response.statusCode === 204) {
              _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, "(LongPolling transport) Poll terminated by server.");

              _this3._running = false;
            } else if (response.statusCode !== 200) {
              _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`); // Unexpected status code


              _this3._closeError = new _Errors__WEBPACK_IMPORTED_MODULE_5__.HttpError(response.statusText || "", response.statusCode);
              _this3._running = false;
            } else {
              // Process the response
              if (response.content) {
                _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getDataDetail)(response.content, _this3._options.logMessageContent)}.`);

                if (_this3.onreceive) {
                  _this3.onreceive(response.content);
                }
              } else {
                // This is another way timeout manifest.
                _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
              }
            }
          } catch (e) {
            if (!_this3._running) {
              // Log but disregard errors that occur after stopping
              _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
            } else {
              if (e instanceof _Errors__WEBPACK_IMPORTED_MODULE_5__.TimeoutError) {
                // Ignore timeouts and reissue the poll.
                _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
              } else {
                // Close the connection with the error as the result.
                _this3._closeError = e;
                _this3._running = false;
              }
            }
          }
        }
      } finally {
        _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Polling complete."); // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
        // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.


        if (!_this3.pollAborted) {
          _this3._raiseOnClose();
        }
      }
    })();
  }

  send(data) {
    var _this4 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4._running) {
        return Promise.reject(new Error("Cannot send until the transport is connected"));
      }

      return (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(_this4._logger, "LongPolling", _this4._httpClient, _this4._url, _this4._accessTokenFactory, data, _this4._options);
    })();
  }

  stop() {
    var _this5 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Stopping polling."); // Tell receiving loop to stop, abort any current request, and then wait for it to finish


      _this5._running = false;

      _this5._pollAbort.abort();

      try {
        yield _this5._receiving; // Send DELETE to clean up long polling on the server

        _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${_this5._url}.`);

        const headers = {};
        const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getUserAgentHeader)();
        headers[name] = value;
        const deleteOptions = {
          headers: { ...headers,
            ..._this5._options.headers
          },
          timeout: _this5._options.timeout,
          withCredentials: _this5._options.withCredentials
        };
        const token = yield _this5._getAccessToken();

        _this5._updateHeaderToken(deleteOptions, token);

        yield _this5._httpClient.delete(_this5._url, deleteOptions);

        _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) DELETE request sent.");
      } finally {
        _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Stop finished."); // Raise close event here instead of in polling
        // It needs to happen after the DELETE request is sent


        _this5._raiseOnClose();
      }
    })();
  }

  _raiseOnClose() {
    if (this.onclose) {
      let logMessage = "(LongPolling transport) Firing onclose event.";

      if (this._closeError) {
        logMessage += " Error: " + this._closeError;
      }

      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, logMessage);

      this.onclose(this._closeError);
    }
  }

}

/***/ }),

/***/ 7347:
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerSentEventsTransport": () => (/* binding */ ServerSentEventsTransport)
/* harmony export */ });
/* harmony import */ var C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ 7863);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ 4993);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 345);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.



/** @private */

class ServerSentEventsTransport {
  constructor(httpClient, accessTokenFactory, logger, options) {
    this._httpClient = httpClient;
    this._accessTokenFactory = accessTokenFactory;
    this._logger = logger;
    this._options = options;
    this.onreceive = null;
    this.onclose = null;
  }

  connect(url, transferFormat) {
    var _this = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(transferFormat, "transferFormat");
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat, "transferFormat");

      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(SSE transport) Connecting."); // set url before accessTokenFactory because this.url is only for send and we set the auth header instead of the query string for send


      _this._url = url;

      if (_this._accessTokenFactory) {
        const token = yield _this._accessTokenFactory();

        if (token) {
          url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
        }
      }

      return new Promise((resolve, reject) => {
        let opened = false;

        if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Text) {
          reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
          return;
        }

        let eventSource;

        if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isBrowser || _Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isWebWorker) {
          eventSource = new _this._options.EventSource(url, {
            withCredentials: _this._options.withCredentials
          });
        } else {
          // Non-browser passes cookies via the dictionary
          const cookies = _this._httpClient.getCookieString(url);

          const headers = {};
          headers.Cookie = cookies;
          const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
          headers[name] = value;
          eventSource = new _this._options.EventSource(url, {
            withCredentials: _this._options.withCredentials,
            headers: { ...headers,
              ..._this._options.headers
            }
          });
        }

        try {
          eventSource.onmessage = e => {
            if (_this.onreceive) {
              try {
                _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(SSE transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getDataDetail)(e.data, _this._options.logMessageContent)}.`);

                _this.onreceive(e.data);
              } catch (error) {
                _this._close(error);

                return;
              }
            }
          }; // @ts-ignore: not using event on purpose


          eventSource.onerror = e => {
            // EventSource doesn't give any useful information about server side closes.
            if (opened) {
              _this._close();
            } else {
              reject(new Error("EventSource failed to connect. The connection could not be found on the server," + " either the connection ID is not present on the server, or a proxy is refusing/buffering the connection." + " If you have multiple servers check that sticky sessions are enabled."));
            }
          };

          eventSource.onopen = () => {
            _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, `SSE connected to ${_this._url}`);

            _this._eventSource = eventSource;
            opened = true;
            resolve();
          };
        } catch (e) {
          reject(e);
          return;
        }
      });
    })();
  }

  send(data) {
    var _this2 = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2._eventSource) {
        return Promise.reject(new Error("Cannot send until the transport is connected"));
      }

      return (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(_this2._logger, "SSE", _this2._httpClient, _this2._url, _this2._accessTokenFactory, data, _this2._options);
    })();
  }

  stop() {
    this._close();

    return Promise.resolve();
  }

  _close(e) {
    if (this._eventSource) {
      this._eventSource.close();

      this._eventSource = undefined;

      if (this.onclose) {
        this.onclose(e);
      }
    }
  }

}

/***/ }),

/***/ 154:
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Subject.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subject": () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ 345);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

/** Stream implementation to stream items to the server. */
class Subject {
    constructor() {
        this.observers = [];
    }
    next(item) {
        for (const observer of this.observers) {
            observer.next(item);
        }
    }
    error(err) {
        for (const observer of this.observers) {
            if (observer.error) {
                observer.error(err);
            }
        }
    }
    complete() {
        for (const observer of this.observers) {
            if (observer.complete) {
                observer.complete();
            }
        }
    }
    subscribe(observer) {
        this.observers.push(observer);
        return new _Utils__WEBPACK_IMPORTED_MODULE_0__.SubjectSubscription(this, observer);
    }
}


/***/ }),

/***/ 4444:
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextMessageFormat": () => (/* binding */ TextMessageFormat)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// Not exported from index
/** @private */
class TextMessageFormat {
    static write(output) {
        return `${output}${TextMessageFormat.RecordSeparator}`;
    }
    static parse(input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
            throw new Error("Message is incomplete.");
        }
        const messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
    }
}
TextMessageFormat.RecordSeparatorCode = 0x1e;
TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);


/***/ }),

/***/ 345:
/*!***********************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "Arg": () => (/* binding */ Arg),
/* harmony export */   "Platform": () => (/* binding */ Platform),
/* harmony export */   "getDataDetail": () => (/* binding */ getDataDetail),
/* harmony export */   "formatArrayBuffer": () => (/* binding */ formatArrayBuffer),
/* harmony export */   "isArrayBuffer": () => (/* binding */ isArrayBuffer),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage),
/* harmony export */   "createLogger": () => (/* binding */ createLogger),
/* harmony export */   "SubjectSubscription": () => (/* binding */ SubjectSubscription),
/* harmony export */   "ConsoleLogger": () => (/* binding */ ConsoleLogger),
/* harmony export */   "getUserAgentHeader": () => (/* binding */ getUserAgentHeader),
/* harmony export */   "constructUserAgent": () => (/* binding */ constructUserAgent),
/* harmony export */   "getErrorString": () => (/* binding */ getErrorString),
/* harmony export */   "getGlobalThis": () => (/* binding */ getGlobalThis)
/* harmony export */ });
/* harmony import */ var C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ 7863);
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loggers */ 1904);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

 // Version token that will be replaced by the prepack command

/** The version of the SignalR client. */

const VERSION = "6.0.3";
/** @private */

class Arg {
  static isRequired(val, name) {
    if (val === null || val === undefined) {
      throw new Error(`The '${name}' argument is required.`);
    }
  }

  static isNotEmpty(val, name) {
    if (!val || val.match(/^\s*$/)) {
      throw new Error(`The '${name}' argument should not be empty.`);
    }
  }

  static isIn(val, values, name) {
    // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
    if (!(val in values)) {
      throw new Error(`Unknown ${name} value: ${val}.`);
    }
  }

}
/** @private */

class Platform {
  // react-native has a window but no document so we should check both
  static get isBrowser() {
    return typeof window === "object" && typeof window.document === "object";
  } // WebWorkers don't have a window object so the isBrowser check would fail


  static get isWebWorker() {
    return typeof self === "object" && "importScripts" in self;
  } // react-native has a window but no document


  static get isReactNative() {
    return typeof window === "object" && typeof window.document === "undefined";
  } // Node apps shouldn't have a window object, but WebWorkers don't either
  // so we need to check for both WebWorker and window


  static get isNode() {
    return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
  }

}
/** @private */

function getDataDetail(data, includeContent) {
  let detail = "";

  if (isArrayBuffer(data)) {
    detail = `Binary data of length ${data.byteLength}`;

    if (includeContent) {
      detail += `. Content: '${formatArrayBuffer(data)}'`;
    }
  } else if (typeof data === "string") {
    detail = `String data of length ${data.length}`;

    if (includeContent) {
      detail += `. Content: '${data}'`;
    }
  }

  return detail;
}
/** @private */

function formatArrayBuffer(data) {
  const view = new Uint8Array(data); // Uint8Array.map only supports returning another Uint8Array?

  let str = "";
  view.forEach(num => {
    const pad = num < 16 ? "0" : "";
    str += `0x${pad}${num.toString(16)} `;
  }); // Trim of trailing space.

  return str.substr(0, str.length - 1);
} // Also in signalr-protocol-msgpack/Utils.ts

/** @private */

function isArrayBuffer(val) {
  return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  val.constructor && val.constructor.name === "ArrayBuffer");
}
/** @private */

function sendMessage(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
  return _sendMessage.apply(this, arguments);
}
/** @private */

function _sendMessage() {
  _sendMessage = (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (logger, transportName, httpClient, url, accessTokenFactory, content, options) {
    let headers = {};

    if (accessTokenFactory) {
      const token = yield accessTokenFactory();

      if (token) {
        headers = {
          ["Authorization"]: `Bearer ${token}`
        };
      }
    }

    const [name, value] = getUserAgentHeader();
    headers[name] = value;
    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
    const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
    const response = yield httpClient.post(url, {
      content,
      headers: { ...headers,
        ...options.headers
      },
      responseType,
      timeout: options.timeout,
      withCredentials: options.withCredentials
    });
    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
  });
  return _sendMessage.apply(this, arguments);
}

function createLogger(logger) {
  if (logger === undefined) {
    return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information);
  }

  if (logger === null) {
    return _Loggers__WEBPACK_IMPORTED_MODULE_2__.NullLogger.instance;
  }

  if (logger.log !== undefined) {
    return logger;
  }

  return new ConsoleLogger(logger);
}
/** @private */

class SubjectSubscription {
  constructor(subject, observer) {
    this._subject = subject;
    this._observer = observer;
  }

  dispose() {
    const index = this._subject.observers.indexOf(this._observer);

    if (index > -1) {
      this._subject.observers.splice(index, 1);
    }

    if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
      this._subject.cancelCallback().catch(_ => {});
    }
  }

}
/** @private */

class ConsoleLogger {
  constructor(minimumLogLevel) {
    this._minLevel = minimumLogLevel;
    this.out = console;
  }

  log(logLevel, message) {
    if (logLevel >= this._minLevel) {
      const msg = `[${new Date().toISOString()}] ${_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel[logLevel]}: ${message}`;

      switch (logLevel) {
        case _ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Critical:
        case _ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error:
          this.out.error(msg);
          break;

        case _ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Warning:
          this.out.warn(msg);
          break;

        case _ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information:
          this.out.info(msg);
          break;

        default:
          // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
          this.out.log(msg);
          break;
      }
    }
  }

}
/** @private */

function getUserAgentHeader() {
  let userAgentHeaderName = "X-SignalR-User-Agent";

  if (Platform.isNode) {
    userAgentHeaderName = "User-Agent";
  }

  return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
}
/** @private */

function constructUserAgent(version, os, runtime, runtimeVersion) {
  // Microsoft SignalR/[Version] ([Detailed Version]; [Operating System]; [Runtime]; [Runtime Version])
  let userAgent = "Microsoft SignalR/";
  const majorAndMinor = version.split(".");
  userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
  userAgent += ` (${version}; `;

  if (os && os !== "") {
    userAgent += `${os}; `;
  } else {
    userAgent += "Unknown OS; ";
  }

  userAgent += `${runtime}`;

  if (runtimeVersion) {
    userAgent += `; ${runtimeVersion}`;
  } else {
    userAgent += "; Unknown Runtime Version";
  }

  userAgent += ")";
  return userAgent;
} // eslint-disable-next-line spaced-comment

/*#__PURE__*/

function getOsName() {
  if (Platform.isNode) {
    switch (process.platform) {
      case "win32":
        return "Windows NT";

      case "darwin":
        return "macOS";

      case "linux":
        return "Linux";

      default:
        return process.platform;
    }
  } else {
    return "";
  }
} // eslint-disable-next-line spaced-comment

/*#__PURE__*/


function getRuntimeVersion() {
  if (Platform.isNode) {
    return process.versions.node;
  }

  return undefined;
}

function getRuntime() {
  if (Platform.isNode) {
    return "NodeJS";
  } else {
    return "Browser";
  }
}
/** @private */


function getErrorString(e) {
  if (e.stack) {
    return e.stack;
  } else if (e.message) {
    return e.message;
  }

  return `${e}`;
}
/** @private */

function getGlobalThis() {
  // globalThis is semi-new and not available in Node until v12
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  throw new Error("could not find global");
}

/***/ }),

/***/ 3567:
/*!************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketTransport": () => (/* binding */ WebSocketTransport)
/* harmony export */ });
/* harmony import */ var C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _HeaderNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderNames */ 8304);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ 7863);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ 4993);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 345);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.




/** @private */

class WebSocketTransport {
  constructor(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
    this._logger = logger;
    this._accessTokenFactory = accessTokenFactory;
    this._logMessageContent = logMessageContent;
    this._webSocketConstructor = webSocketConstructor;
    this._httpClient = httpClient;
    this.onreceive = null;
    this.onclose = null;
    this._headers = headers;
  }

  connect(url, transferFormat) {
    var _this = this;

    return (0,C_Users_hichm_Desktop_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(transferFormat, "transferFormat");
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat, "transferFormat");

      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(WebSockets transport) Connecting.");

      if (_this._accessTokenFactory) {
        const token = yield _this._accessTokenFactory();

        if (token) {
          url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
        }
      }

      return new Promise((resolve, reject) => {
        url = url.replace(/^http/, "ws");
        let webSocket;

        const cookies = _this._httpClient.getCookieString(url);

        let opened = false;

        if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode) {
          const headers = {};
          const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
          headers[name] = value;

          if (cookies) {
            headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_4__.HeaderNames.Cookie] = `${cookies}`;
          } // Only pass headers when in non-browser environments


          webSocket = new _this._webSocketConstructor(url, undefined, {
            headers: { ...headers,
              ..._this._headers
            }
          });
        }

        if (!webSocket) {
          // Chrome is not happy with passing 'undefined' as protocol
          webSocket = new _this._webSocketConstructor(url);
        }

        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Binary) {
          webSocket.binaryType = "arraybuffer";
        }

        webSocket.onopen = _event => {
          _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, `WebSocket connected to ${url}.`);

          _this._webSocket = webSocket;
          opened = true;
          resolve();
        };

        webSocket.onerror = event => {
          let error = null; // ErrorEvent is a browser only type we need to check if the type exists before using it

          if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
            error = event.error;
          } else {
            error = "There was an error with the transport";
          }

          _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, `(WebSockets transport) ${error}.`);
        };

        webSocket.onmessage = message => {
          _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(WebSockets transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getDataDetail)(message.data, _this._logMessageContent)}.`);

          if (_this.onreceive) {
            try {
              _this.onreceive(message.data);
            } catch (error) {
              _this._close(error);

              return;
            }
          }
        };

        webSocket.onclose = event => {
          // Don't call close handler if connection was never established
          // We'll reject the connect call instead
          if (opened) {
            _this._close(event);
          } else {
            let error = null; // ErrorEvent is a browser only type we need to check if the type exists before using it

            if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
              error = event.error;
            } else {
              error = "WebSocket failed to connect. The connection could not be found on the server," + " either the endpoint may not be a SignalR endpoint," + " the connection ID is not present on the server, or there is a proxy blocking WebSockets." + " If you have multiple servers check that sticky sessions are enabled.";
            }

            reject(new Error(error));
          }
        };
      });
    })();
  }

  send(data) {
    if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(WebSockets transport) sending data. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getDataDetail)(data, this._logMessageContent)}.`);

      this._webSocket.send(data);

      return Promise.resolve();
    }

    return Promise.reject("WebSocket is not in the OPEN state");
  }

  stop() {
    if (this._webSocket) {
      // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
      // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
      this._close(undefined);
    }

    return Promise.resolve();
  }

  _close(event) {
    // webSocket will be null if the transport did not start successfully
    if (this._webSocket) {
      // Clear websocket handlers because we are considering the socket closed now
      this._webSocket.onclose = () => {};

      this._webSocket.onmessage = () => {};

      this._webSocket.onerror = () => {};

      this._webSocket.close();

      this._webSocket = undefined;
    }

    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(WebSockets transport) socket closed.");

    if (this.onclose) {
      if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1000)) {
        this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
      } else if (event instanceof Error) {
        this.onclose(event);
      } else {
        this.onclose();
      }
    }
  }

  _isCloseEvent(event) {
    return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
  }

}

/***/ }),

/***/ 7962:
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XhrHttpClient": () => (/* binding */ XhrHttpClient)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ 8649);
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ 2963);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ 7863);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.



class XhrHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
    constructor(logger) {
        super();
        this._logger = logger;
    }
    /** @inheritDoc */
    send(request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.AbortError());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(request.method, request.url, true);
            xhr.withCredentials = request.withCredentials === undefined ? true : request.withCredentials;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // Explicitly setting the Content-Type header for React Native on Android platform.
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            const headers = request.headers;
            if (headers) {
                Object.keys(headers)
                    .forEach((header) => {
                    xhr.setRequestHeader(header, headers[header]);
                });
            }
            if (request.responseType) {
                xhr.responseType = request.responseType;
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = () => {
                    xhr.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.AbortError());
                };
            }
            if (request.timeout) {
                xhr.timeout = request.timeout;
            }
            xhr.onload = () => {
                if (request.abortSignal) {
                    request.abortSignal.onabort = null;
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
                }
            };
            xhr.onerror = () => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.HttpError(xhr.statusText, xhr.status));
            };
            xhr.ontimeout = () => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Warning, `Timeout from HTTP request.`);
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.TimeoutError());
            };
            xhr.send(request.content || "");
        });
    }
}


/***/ }),

/***/ 6825:
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageRoutingModule": () => (/* binding */ ChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 9482);




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ 5988:
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 6825);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 9482);







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 9482:
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPage": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chat.page.html */ 633);
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss */ 9429);
/* harmony import */ var _models_messageDto_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/messageDto.model */ 3963);
/* harmony import */ var _services_chatApp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/chatApp.service */ 44);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);



/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */



let ChatPage = class ChatPage {
    constructor(chatService) {
        this.chatService = chatService;
        this.msgDto = new _models_messageDto_model__WEBPACK_IMPORTED_MODULE_2__.MessageDto();
        this.msgInboxArray = [];
    }
    ngOnInit() {
        this.chatService.retrieveMappedObject().subscribe((receivedObj) => { this.addToInbox(receivedObj); }); // calls the service method to get the new messages sent
    }
    send() {
        if (this.msgDto) {
            if (this.msgDto.user.length === 0 || this.msgDto.user.length === 0) {
                window.alert("Both fields are required.");
                return;
            }
            else {
                this.chatService.broadcastMessage(this.msgDto); // Send the message via a service
            }
        }
    }
    addToInbox(obj) {
        let newObj = new _models_messageDto_model__WEBPACK_IMPORTED_MODULE_2__.MessageDto();
        newObj.user = obj.user;
        newObj.msgText = obj.msgText;
        this.msgInboxArray.push(newObj);
    }
};
ChatPage.ctorParameters = () => [
    { type: _services_chatApp_service__WEBPACK_IMPORTED_MODULE_3__.ChatAppService }
];
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-chat',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatPage);



/***/ }),

/***/ 3963:
/*!********************************************!*\
  !*** ./src/app/models/messageDto.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageDto": () => (/* binding */ MessageDto)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-inferrable-types */
class MessageDto {
    constructor() {
        this.user = '';
        this.msgText = '';
    }
}


/***/ }),

/***/ 44:
/*!*********************************************!*\
  !*** ./src/app/services/chatApp.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatAppService": () => (/* binding */ ChatAppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/signalr */ 32);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ 7863);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _models_messageDto_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/messageDto.model */ 3963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4008);

/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */

 // import signalR



let ChatAppService = class ChatAppService {
    constructor(http) {
        this.http = http;
        this.connection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__.HubConnectionBuilder().withUrl("https://localhost:44336/chatsocket") // mapping to the chathub as in startup.cs
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Information)
            .build();
        this.POST_URL = "https://localhost:44336/api/chat/send";
        this.receivedMessageObject = new _models_messageDto_model__WEBPACK_IMPORTED_MODULE_0__.MessageDto();
        this.sharedObj = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.connection.onclose(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.start();
        }));
        this.connection.on("ReceiveOne", (user, message) => { this.mapReceivedMessage(user, message); });
        this.start();
    }
    // Strart the connection
    start() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.connection.start();
                console.log("connected");
            }
            catch (err) {
                console.log(err);
                setTimeout(() => this.start(), 5000);
            }
        });
    }
    mapReceivedMessage(user, message) {
        this.receivedMessageObject.user = user;
        this.receivedMessageObject.msgText = message;
        this.sharedObj.next(this.receivedMessageObject);
    }
    /* ****************************** Public Mehods **************************************** */
    // Calls the controller method
    broadcastMessage(msgDto) {
        this.http.post(this.POST_URL, msgDto).subscribe(data => console.log(data));
        // this.connection.invoke("SendMessage1", msgDto.user, msgDto.msgText).catch(err => console.error(err));    // This can invoke the server method named as "SendMethod1" directly.
    }
    retrieveMappedObject() {
        return this.sharedObj.asObservable();
    }
};
ChatAppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
ChatAppService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ChatAppService);



/***/ }),

/***/ 633:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/chat/chat.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>chat</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ud-header\">\n        <h2 class=\"text-center\">Public Chat</h2>\n    </div>\n    <div class=\"ud-body\">\n        <div class=\"msg-box\">\n            <ul>\n                <li *ngFor=\"let mObj of msgInboxArray\" [ngClass]=\"mObj.user === msgDto.user ? 'in-msg' : 'ex-msg'\">{{mObj.user}} :<br /><span class=\"msg-italic-style\">{{mObj.msgText}}</span></li>\n            </ul>\n        </div>\n        <div class=\"ud-flex-row\">\n            <input type=\"text\" placeholder=\"Type message here\" class=\"msg-input\" [(ngModel)]=\"msgDto.msgText\" />\n            <button class=\"send-btn\" (click)=\"send()\"><i class=\"fa fa-paper-plane\"></i></button>\n        </div>\n        <input type=\"text\" placeholder=\"Your name\" class=\"name-box\" [(ngModel)]=\"msgDto.user\" />\n    </div>\n</ion-content>");

/***/ }),

/***/ 9429:
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.text-center {\n  text-align: center;\n}\n\nh2 {\n  margin: 0;\n}\n\n.msg-italic-style {\n  font-style: italic;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-size: 18px;\n}\n\n.ud-header {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  width: 100%;\n  background-color: #191d32;\n  height: 8vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.ud-header h2 {\n  color: #FDFFFF;\n}\n\n.ud-body {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 9vh 10% 2vh;\n  padding: 0 10% 0;\n}\n\n.ud-body .msg-box {\n  width: 100%;\n  height: calc(100% - 140px);\n  margin-top: 20px;\n  border: 2px solid #191D32;\n  border-radius: 0.5em;\n  padding: 10px 30px;\n  font-size: 14px;\n  overflow: auto;\n}\n\n.ud-body .msg-box ul {\n  list-style: none;\n}\n\n.ud-body .msg-box ul .ex-msg {\n  margin-bottom: 10px;\n  color: #459c1a;\n  text-align: left;\n}\n\n.ud-body .msg-box ul .in-msg {\n  margin-bottom: 10px;\n  color: #DD1155;\n  text-align: right;\n}\n\n.ud-body .ud-flex-row {\n  margin-top: 20px;\n  height: 40px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.ud-body .ud-flex-row .msg-input {\n  height: 100%;\n  border-radius: 0.5em;\n  border: 0px solid rgba(0, 0, 0, 0);\n  padding: 10px;\n  flex: 1 1 0;\n  border: 1.5px solid #DD1155;\n}\n\n.ud-body .ud-flex-row .msg-input:focus {\n  outline: none;\n  border-color: #DD1155;\n  box-shadow: 0 0 5px #DD1155;\n}\n\n.ud-body .ud-flex-row .send-btn {\n  height: 100%;\n  width: 100px;\n  border-radius: 0.3em;\n  background-color: #DD1155;\n  margin-left: 20px;\n  border: 0px solid rgba(0, 0, 0, 0);\n  font-size: 25px;\n  color: #FDFFFF;\n  position: relative;\n}\n\n.ud-body .ud-flex-row .send-btn:focus {\n  outline: none;\n  border-color: #DD1155;\n  box-shadow: 0 0 5px #DD1155;\n}\n\n@media screen and (max-width: 500px) {\n  .ud-body .ud-flex-row {\n    flex-direction: column;\n    align-items: flex-start;\n    height: 80px;\n  }\n  .ud-body .ud-flex-row .msg-input {\n    width: 100%;\n  }\n  .ud-body .ud-flex-row .send-btn {\n    margin-left: 0px;\n    font-size: 20px;\n    margin-top: 7px;\n    height: 80%;\n  }\n}\n\n.ud-body .name-box {\n  margin-top: 10px;\n  height: 40px;\n  width: 180px;\n  border-radius: 0.5em;\n  border: 0px solid rgba(0, 0, 0, 0);\n  padding: 10px;\n  font-size: 15px;\n  border: 1px solid #b423d1;\n}\n\n.ud-body .name-box:focus {\n  outline: none;\n}\n\n@media screen and (max-width: 500px) {\n  .ud-body {\n    margin: 9vh 5% 2vh;\n    padding: 0 5% 0;\n  }\n  .ud-body .msg-box {\n    height: calc(100% - 180px);\n    padding: 10px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFDSTtFQUNJLGNBQUE7QUFDUjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUVJO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUNRO0VBQ0ksZ0JBQUE7QUFDWjs7QUFBWTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRWhCOztBQUFZO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFaEI7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFSOztBQUNRO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBQ1o7O0FBQ1E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQUNaOztBQUNRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDWjs7QUFDUTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBQ1o7O0FBRUk7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0VBQVY7RUFDVTtJQUNJLFdBQUE7RUFDZDtFQUNVO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUFDZDtBQUNGOztBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQVI7O0FBRUk7RUFDSSxhQUFBO0FBQVI7O0FBSUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtFQUROO0VBRU07SUFDSSwwQkFBQTtJQUNBLGtCQUFBO0VBQVY7QUFDRiIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1zZy1pdGFsaWMtc3R5bGUge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi8vIEhlYWRlciBcclxuLnVkLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMjksIDUwKTtcclxuICAgIGhlaWdodDogOHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgY29sb3I6ICNGREZGRkY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGJvZHlcclxuLnVkLWJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiA5dmggMTAlIDJ2aDtcclxuICAgIHBhZGRpbmc6IDAgMTAlIDA7XHJcbiAgICAubXNnLWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNDBweCk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTkxRDMyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIC5leC1tc2cge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDU5YzFhO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW4tbXNnIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0REMTE1NTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVkLWZsZXgtcm93IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLm1zZy1pbnB1dCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZmxleDogMSAxIDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgI0REMTE1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1zZy1pbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI0REMTE1NTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjREQxMTU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VuZC1idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjNlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0REMTE1NTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGREZGRkY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlbmQtYnRuOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjREQxMTU1O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNERDExNTU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAudWQtZmxleC1yb3cge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAubXNnLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZW5kLWJ0biB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmFtZS1ib3gge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xyXG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I0MjNkMTtcclxuICAgIH1cclxuICAgIC5uYW1lLWJveDpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC51ZC1ib2R5IHtcclxuICAgICAgICBtYXJnaW46IDl2aCA1JSAydmg7XHJcbiAgICAgICAgcGFkZGluZzogMCA1JSAwO1xyXG4gICAgICAgIC5tc2ctYm94IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxODBweCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_chat_chat_module_ts.js.map