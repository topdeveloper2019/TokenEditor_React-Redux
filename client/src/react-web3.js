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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var IconNoWeb3 = __webpack_require__(7);
var stylesheet = __webpack_require__(8);

function ErrorTemplate(props) {
  return React.createElement(
    'div',
    { className: 'Web3Provider-container' },
    React.createElement('style', { dangerouslySetInnerHTML: { __html: stylesheet }
    }),
    React.createElement(
      'div',
      { className: 'Web3Provider-wrapper' },
      React.createElement(
        'div',
        { className: 'Web3Provider-image' },
        React.createElement(IconNoWeb3, null)
      ),
      React.createElement('h1', {
        className: 'Web3Provider-title',
        dangerouslySetInnerHTML: { __html: props.title }
      }),
      React.createElement('p', {
        className: 'Web3Provider-message',
        dangerouslySetInnerHTML: { __html: props.message }
      })
    )
  );
}

module.exports = ErrorTemplate;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Web3Provider = __webpack_require__(3);
var ErrorTemplate = __webpack_require__(1);

module.exports.Web3Provider = Web3Provider;
module.exports.ErrorTemplate = ErrorTemplate;

module.exports = {
  Web3Provider: Web3Provider,
  ErrorTemplate: ErrorTemplate
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(4);
var isEmpty = __webpack_require__(5);
var AccountUnavailable = __webpack_require__(6);
var Web3Unavailable = __webpack_require__(9);

var ONE_SECOND = 1000;
var ONE_MINUTE = ONE_SECOND * 60;
var propTypes = {
  web3UnavailableScreen: PropTypes.any,
  accountUnavailableScreen: PropTypes.any,
  onChangeAccount: PropTypes.func
};
var defaultProps = {
  passive: false,
  web3UnavailableScreen: Web3Unavailable,
  accountUnavailableScreen: AccountUnavailable
};
var childContextTypes = {
  web3: PropTypes.shape({
    accounts: PropTypes.array,
    selectedAccount: PropTypes.string,
    network: PropTypes.string,
    networkId: PropTypes.string
  })
};

var Web3Provider = function (_React$Component) {
  _inherits(Web3Provider, _React$Component);

  function Web3Provider(props, context) {
    _classCallCheck(this, Web3Provider);

    var _this = _possibleConstructorReturn(this, (Web3Provider.__proto__ || Object.getPrototypeOf(Web3Provider)).call(this, props, context));

    var accounts = _this.getAccounts();

    _this.state = {
      accounts: accounts,
      networkId: null,
      networkError: null
    };
    _this.interval = null;
    _this.networkInterval = null;
    _this.fetchAccounts = _this.fetchAccounts.bind(_this);
    _this.fetchNetwork = _this.fetchNetwork.bind(_this);

    if (accounts) {
      _this.handleAccounts(accounts, true);
    }
    return _this;
  }

  _createClass(Web3Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        web3: {
          accounts: this.state.accounts,
          selectedAccount: this.state.accounts && this.state.accounts[0],
          network: getNetwork(this.state.networkId),
          networkId: this.state.networkId
        }
      };
    }

    /**
     * Start polling accounts, & network. We poll indefinitely so that we can
     * react to the user changing accounts or netowrks.
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchAccounts();
      this.fetchNetwork();
      this.initPoll();
      this.initNetworkPoll();
    }

    /**
     * Init web3/account polling, and prevent duplicate interval.
     * @return {void}
     */

  }, {
    key: 'initPoll',
    value: function initPoll() {
      if (!this.interval) {
        this.interval = setInterval(this.fetchAccounts, ONE_SECOND);
      }
    }

    /**
     * Init network polling, and prevent duplicate intervals.
     * @return {void}
     */

  }, {
    key: 'initNetworkPoll',
    value: function initNetworkPoll() {
      if (!this.networkInterval) {
        this.networkInterval = setInterval(this.fetchNetwork, ONE_MINUTE);
      }
    }

    /**
     * Update state regarding the availability of web3 and an ETH account.
     * @return {void}
     */

  }, {
    key: 'fetchAccounts',
    value: function fetchAccounts() {
      var _this2 = this;

      var _window = window,
          web3 = _window.web3;

      var ethAccounts = this.getAccounts();

      if (isEmpty(ethAccounts)) {
        web3 && web3.eth && web3.eth.getAccounts(function (err, accounts) {
          if (err) {
            _this2.setState({
              accountsError: err
            });
          } else {
            _this2.handleAccounts(accounts);
          }
        });
      } else {
        this.handleAccounts(ethAccounts);
      }
    }
  }, {
    key: 'handleAccounts',
    value: function handleAccounts(accounts) {
      var isConstructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var onChangeAccount = this.props.onChangeAccount;
      var store = this.context.store;

      var next = accounts[0];
      var curr = this.state.accounts[0];
      next = next && next.toLowerCase();
      curr = curr && curr.toLowerCase();
      var didChange = curr && next && curr !== next;

      if (isEmpty(this.state.accounts) && !isEmpty(accounts)) {
        this.setState({
          accountsError: null,
          accounts: accounts
        });
      }

      if (didChange && !isConstructor) {
        this.setState({
          accountsError: null,
          accounts: accounts
        });
      }

      // If provided, execute callback
      if (didChange && typeof onChangeAccount === 'function') {
        onChangeAccount(next);
      }

      // If available, dispatch redux action
      if (store && typeof store.dispatch === 'function') {
        var didDefine = !curr && next;

        if (didDefine || isConstructor && next) {
          store.dispatch({
            type: 'web3/RECEIVE_ACCOUNT',
            address: next
          });
        } else if (didChange) {
          store.dispatch({
            type: 'web3/CHANGE_ACCOUNT',
            address: next
          });
        }
      }
    }

    /**
     * Get the network and update state accordingly.
     * @return {void}
     */

  }, {
    key: 'fetchNetwork',
    value: function fetchNetwork() {
      var _this3 = this;

      var _window2 = window,
          web3 = _window2.web3;


      web3 && web3.version && web3.version.getNetwork(function (err, netId) {
        if (err) {
          _this3.setState({
            networkError: err
          });
        } else {
          if (netId != _this3.state.networkId) {
            _this3.setState({
              networkError: null,
              networkId: netId
            });
          }
        }
      });
    }

    /**
     * Get the account. We wrap in try/catch because reading `web3.eth.accounrs`
     * will throw if no account is selected.
     * @return {String}
     */

  }, {
    key: 'getAccounts',
    value: function getAccounts() {
      try {
        var _window3 = window,
            web3 = _window3.web3;
        // throws if no account selected

        var accounts = web3.eth.accounts;

        return accounts;
      } catch (e) {
        return [];
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _window4 = window,
          web3 = _window4.web3;
      var _props = this.props,
          passive = _props.passive,
          Web3UnavailableComponent = _props.web3UnavailableScreen,
          AccountUnavailableComponent = _props.accountUnavailableScreen;


      if (passive) {
        return this.props.children;
      }

      if (!web3) {
        return React.createElement(Web3UnavailableComponent, null);
      }

      if (isEmpty(this.state.accounts)) {
        return React.createElement(AccountUnavailableComponent, null);
      }

      return this.props.children;
    }
  }]);

  return Web3Provider;
}(React.Component);

Web3Provider.contextTypes = {
  store: PropTypes.object
};


Web3Provider.propTypes = propTypes;
Web3Provider.defaultProps = defaultProps;
Web3Provider.childContextTypes = childContextTypes;

module.exports = Web3Provider;

/* =============================================================================
=    Deps
============================================================================= */
function getNetwork(networkId) {
  switch (networkId) {
    case '1':
      return 'MAINNET';
    case '2':
      return 'MORDEN';
    case '3':
      return 'ROPSTEN';
    case '4':
      return 'RINKEBY';
    case '42':
      return 'KOVAN';
    default:
      return 'UNKNOWN';
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var ErrorTemplate = __webpack_require__(1);

var AccountUnavailable = ErrorTemplate.bind(null, {
  title: 'No ETH Account Available',
  message: '\nIt seems that you don&apos;t have an ETH account selected. If using\nMetaMask, please make sure that your wallet is unlocked and that\nyou have at least one account in your accounts list. <br/><br/> Install Metamask from here: <button style="align-self: center; padding: 14px 40px 12px; color: #7A7A7B; font-family: Roboto; font-weight: 500; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; text-align: center; background: white; border-radius: 4px; transition: all 0.1s ease-in-out; cursor: pointer; border:2px solid #B3B3B3; margin-top: 10px;"><a href="https://metamask.io/" target="_blank"> Metamask.io </a></button>'
});

module.exports = AccountUnavailable;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNoWeb3(props) {
  return _react2.default.createElement(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 332 417", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { d: "M198.610685,43.1017808 C107.24977,43.1017808 33.1017808,117.24977 33.1017808,208.610685 C33.1017808,299.971599 107.24977,374.119588 198.610685,374.119588 C289.971599,374.119588 364.119588,299.971599 364.119588,208.610685 C364.119588,117.24977 289.971599,43.1017808 198.610685,43.1017808 L198.610685,43.1017808 Z M198.610685,341.017808 C125.455749,341.017808 66.2035615,281.76562 66.2035615,208.610685 C66.2035615,177.991537 76.6306225,149.855024 94.1745663,127.511322 L279.710047,313.046803 C257.366345,330.590747 229.229832,341.017808 198.610685,341.017808 L198.610685,341.017808 Z M303.046803,289.710047 L117.511322,104.174566 C139.855024,86.6306225 167.991537,76.2035615 198.610685,76.2035615 C271.76562,76.2035615 331.017808,135.455749 331.017808,208.610685 C331.017808,239.229832 320.590747,267.366345 303.046803,289.710047 L303.046803,289.710047 Z", id: "path-1" })
    ),
    _react2.default.createElement(
      "g",
      { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
      _react2.default.createElement(
        "g",
        { id: "Group", transform: "translate(-33.000000, 0.000000)" },
        _react2.default.createElement(
          "g",
          { id: "Ethereum_logo_2014", opacity: "0.208899457", transform: "translate(71.000000, 0.000000)", fillRule: "nonzero" },
          _react2.default.createElement("polygon", { id: "Shape", fill: "#343434", points: "127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#8C8C8C", points: "127.962 0 0 212.32 127.962 287.959 127.962 154.158" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#3C3C3B", points: "127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#8C8C8C", points: "127.962 416.9052 127.962 312.1852 0 236.5852" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#141414", points: "127.9611 287.9577 255.9211 212.3207 127.9611 154.1587" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#393939", points: "0.0009 212.3208 127.9609 287.9578 127.9609 154.1588" })
        ),
        _react2.default.createElement("g", { id: "ic_do_not_disturb", transform: "translate(0.000000, 10.000000)" }),
        _react2.default.createElement("polygon", { id: "Bounds", points: "0 10 397.221369 10 397.221369 407.221369 0 407.221369" }),
        _react2.default.createElement(
          "g",
          { id: "Icon" },
          _react2.default.createElement("use", { fill: "#FFE1DE", fillRule: "evenodd", xlinkHref: "#path-1" }),
          _react2.default.createElement("path", { stroke: "#FFFFFF", strokeWidth: "6", d: "M198.610685,46.1017808 C288.314745,46.1017808 361.119588,118.906624 361.119588,208.610685 C361.119588,298.314745 288.314745,371.119588 198.610685,371.119588 C108.906624,371.119588 36.1017808,298.314745 36.1017808,208.610685 C36.1017808,118.906624 108.906624,46.1017808 198.610685,46.1017808 Z M198.610685,344.017808 C123.798895,344.017808 63.2035615,283.422474 63.2035615,208.610685 C63.2035615,178.077442 73.3736714,149.145233 91.8150049,125.658629 L93.9040007,122.998115 L284.223254,313.317368 L281.56274,315.406364 C258.076136,333.847698 229.143927,344.017808 198.610685,344.017808 Z M303.317368,294.223254 L112.998115,103.904001 L115.658629,101.815005 C139.145233,83.3736714 168.077442,73.2035615 198.610685,73.2035615 C273.422474,73.2035615 334.017808,133.798895 334.017808,208.610685 C334.017808,239.143927 323.847698,268.076136 305.406364,291.56274 L303.317368,294.223254 Z" })
        )
      )
    )
  );
}

module.exports = IconNoWeb3;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "\n.Web3Provider-container {\n  font-family: Helvetica, Arial;\n  color: hsl(0,0%,50%);\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background: hsl(0, 0%, 95%);\n  background: -webkit-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: -moz-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: -o-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n}\n.Web3Provider-wrapper {\n  width: 400px;\n  border: 1px solid hsl(207, 90%, 54%);\n  border-radius: 20px;\n  text-align: center;\n  padding: 50px 40px;\n  margin: 80px auto;\n}\n.Web3Provider-image {\n  max-height: 175px;\n}\n.Web3Provider-title {\n  margin-top: 50px;\n  color: hsl(0,0%,25%);\n}\n.Web3Provider-message {\n  line-height: 27px;\n  font-size: 18px;\n  color: hsl(0,0%,50%);\n}\n";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var ErrorTemplate = __webpack_require__(1);

var Web3Unavailable = ErrorTemplate.bind(null, {
  title: 'Web3 Not Found',
  message: '\nIt seems that you are using a browser without Web3 capabilities. Please\nmake sure that you are using a web3-capable browser like mist or parity.\nIf you are using MetaMask or Parity extension, make sure that it is\nenabled.\n'
});

module.exports = Web3Unavailable;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmUxMGNlZDY3NmRiYTg4NjY2ODAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3JUZW1wbGF0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9XZWIzUHJvdmlkZXIuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFbXB0eVwiIiwid2VicGFjazovLy8uL3NyYy9BY2NvdW50VW5hdmFpbGFibGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9JY29uTm9XZWIzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViM1VuYXZhaWxhYmxlLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJY29uTm9XZWIzIiwic3R5bGVzaGVldCIsIkVycm9yVGVtcGxhdGUiLCJwcm9wcyIsIl9faHRtbCIsInRpdGxlIiwibWVzc2FnZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJXZWIzUHJvdmlkZXIiLCJQcm9wVHlwZXMiLCJpc0VtcHR5IiwiQWNjb3VudFVuYXZhaWxhYmxlIiwiV2ViM1VuYXZhaWxhYmxlIiwiT05FX1NFQ09ORCIsIk9ORV9NSU5VVEUiLCJwcm9wVHlwZXMiLCJ3ZWIzVW5hdmFpbGFibGVTY3JlZW4iLCJhbnkiLCJhY2NvdW50VW5hdmFpbGFibGVTY3JlZW4iLCJvbkNoYW5nZUFjY291bnQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwicGFzc2l2ZSIsImNoaWxkQ29udGV4dFR5cGVzIiwid2ViMyIsInNoYXBlIiwiYWNjb3VudHMiLCJhcnJheSIsInNlbGVjdGVkQWNjb3VudCIsInN0cmluZyIsIm5ldHdvcmsiLCJuZXR3b3JrSWQiLCJjb250ZXh0IiwiZ2V0QWNjb3VudHMiLCJzdGF0ZSIsIm5ldHdvcmtFcnJvciIsImludGVydmFsIiwibmV0d29ya0ludGVydmFsIiwiZmV0Y2hBY2NvdW50cyIsImJpbmQiLCJmZXRjaE5ldHdvcmsiLCJoYW5kbGVBY2NvdW50cyIsImdldE5ldHdvcmsiLCJpbml0UG9sbCIsImluaXROZXR3b3JrUG9sbCIsInNldEludGVydmFsIiwid2luZG93IiwiZXRoQWNjb3VudHMiLCJldGgiLCJlcnIiLCJzZXRTdGF0ZSIsImFjY291bnRzRXJyb3IiLCJpc0NvbnN0cnVjdG9yIiwic3RvcmUiLCJuZXh0IiwiY3VyciIsInRvTG93ZXJDYXNlIiwiZGlkQ2hhbmdlIiwiZGlzcGF0Y2giLCJkaWREZWZpbmUiLCJ0eXBlIiwiYWRkcmVzcyIsInZlcnNpb24iLCJuZXRJZCIsImUiLCJXZWIzVW5hdmFpbGFibGVDb21wb25lbnQiLCJBY2NvdW50VW5hdmFpbGFibGVDb21wb25lbnQiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQzs7Ozs7Ozs7O0FDQUEsSUFBTUEsUUFBUSxtQkFBQUMsQ0FBUSxDQUFSLENBQWQ7QUFDQSxJQUFNQyxhQUFhLG1CQUFBRCxDQUFRLENBQVIsQ0FBbkI7QUFDQSxJQUFNRSxh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QVosRUFBcUIsUUFBTyx1REFBNUIsR0FWRjtBQVdFO0FBQUE7QUFBQSxZQUFHLElBQUcsTUFBTjtBQUNFLGlEQUFLLE1BQUssU0FBVixFQUFvQixVQUFTLFNBQTdCLEVBQXVDLFdBQVUsU0FBakQsR0FERjtBQUVFLGtEQUFNLFFBQU8sU0FBYixFQUF1QixhQUFZLEdBQW5DLEVBQXVDLEdBQUUsazNCQUF6QztBQUZGO0FBWEY7QUFERjtBQUpBLEdBRkY7QUEwQkQ7O0FBRURJLE9BQU9DLE9BQVAsR0FBaUJSLFVBQWpCLEM7Ozs7Ozs7OztBQy9CQU8sT0FBT0MsT0FBUCxxM0I7Ozs7Ozs7OztBQ0FBLElBQU1WLFFBQVEsbUJBQUFDLENBQVEsQ0FBUixDQUFkO0FBQ0EsSUFBTUcsZ0JBQWdCLG1CQUFBSCxDQUFRLENBQVIsQ0FBdEI7O0FBRUEsSUFBTWMsa0JBQWtCWCxjQUFjc0MsSUFBZCxDQUFtQixJQUFuQixFQUF5QjtBQUMvQ25DLFNBQU8sZ0JBRHdDO0FBRS9DQztBQUYrQyxDQUF6QixDQUF4Qjs7QUFVQUMsT0FBT0MsT0FBUCxHQUFpQkssZUFBakIsQyIsImZpbGUiOiIuL2Rpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZTEwY2VkNjc2ZGJhODg2NjY4MCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBJY29uTm9XZWIzID0gcmVxdWlyZSgnLi9JY29uTm9XZWIzJyk7XG5jb25zdCBzdHlsZXNoZWV0ID0gcmVxdWlyZSgnLi9zdHlsZXNoZWV0Jyk7XG5cbmZ1bmN0aW9uIEVycm9yVGVtcGxhdGUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1jb250YWluZXJcIj5cbiAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2ViM1Byb3ZpZGVyLWltYWdlXCI+XG4gICAgICAgICAgPEljb25Ob1dlYjMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMVxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci10aXRsZVwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy50aXRsZSB9fVxuICAgICAgICAvPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1tZXNzYWdlXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLm1lc3NhZ2UgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JUZW1wbGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvclRlbXBsYXRlLmpzeCIsImNvbnN0IFdlYjNQcm92aWRlciA9IHJlcXVpcmUoJy4vV2ViM1Byb3ZpZGVyJyk7XG5jb25zdCBFcnJvclRlbXBsYXRlID0gcmVxdWlyZSgnLi9FcnJvclRlbXBsYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzLldlYjNQcm92aWRlciA9IFdlYjNQcm92aWRlcjtcbm1vZHVsZS5leHBvcnRzLkVycm9yVGVtcGxhdGUgPSBFcnJvclRlbXBsYXRlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgV2ViM1Byb3ZpZGVyLFxuICBFcnJvclRlbXBsYXRlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuY29uc3QgaXNFbXB0eSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0VtcHR5Jyk7XG5jb25zdCBBY2NvdW50VW5hdmFpbGFibGUgPSByZXF1aXJlKCcuL0FjY291bnRVbmF2YWlsYWJsZScpO1xuY29uc3QgV2ViM1VuYXZhaWxhYmxlID0gcmVxdWlyZSgnLi9XZWIzVW5hdmFpbGFibGUnKTtcblxuY29uc3QgT05FX1NFQ09ORCA9IDEwMDA7XG5jb25zdCBPTkVfTUlOVVRFID0gT05FX1NFQ09ORCAqIDYwO1xuY29uc3QgcHJvcFR5cGVzID0ge1xuICB3ZWIzVW5hdmFpbGFibGVTY3JlZW46IFByb3BUeXBlcy5hbnksXG4gIGFjY291bnRVbmF2YWlsYWJsZVNjcmVlbjogUHJvcFR5cGVzLmFueSxcbiAgb25DaGFuZ2VBY2NvdW50OiBQcm9wVHlwZXMuZnVuY1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogZmFsc2UsXG4gIHdlYjNVbmF2YWlsYWJsZVNjcmVlbjogV2ViM1VuYXZhaWxhYmxlLFxuICBhY2NvdW50VW5hdmFpbGFibGVTY3JlZW46IEFjY291bnRVbmF2YWlsYWJsZVxufTtcbmNvbnN0IGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB3ZWIzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFjY291bnRzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0ZWRBY2NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5ldHdvcms6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmV0d29ya0lkOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pXG59O1xuXG5jbGFzcyBXZWIzUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICBjb25zdCBhY2NvdW50cyA9IHRoaXMuZ2V0QWNjb3VudHMoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY2NvdW50cyxcbiAgICAgIG5ldHdvcmtJZDogbnVsbCxcbiAgICAgIG5ldHdvcmtFcnJvcjogbnVsbFxuICAgIH07XG4gICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5uZXR3b3JrSW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMuZmV0Y2hBY2NvdW50cyA9IHRoaXMuZmV0Y2hBY2NvdW50cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hOZXR3b3JrID0gdGhpcy5mZXRjaE5ldHdvcmsuYmluZCh0aGlzKTtcblxuICAgIGlmIChhY2NvdW50cykge1xuICAgICAgdGhpcy5oYW5kbGVBY2NvdW50cyhhY2NvdW50cywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3ZWIzOiB7XG4gICAgICAgIGFjY291bnRzOiB0aGlzLnN0YXRlLmFjY291bnRzLFxuICAgICAgICBzZWxlY3RlZEFjY291bnQ6IHRoaXMuc3RhdGUuYWNjb3VudHMgJiYgdGhpcy5zdGF0ZS5hY2NvdW50c1swXSxcbiAgICAgICAgbmV0d29yazogZ2V0TmV0d29yayh0aGlzLnN0YXRlLm5ldHdvcmtJZCksXG4gICAgICAgIG5ldHdvcmtJZDogdGhpcy5zdGF0ZS5uZXR3b3JrSWRcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHBvbGxpbmcgYWNjb3VudHMsICYgbmV0d29yay4gV2UgcG9sbCBpbmRlZmluaXRlbHkgc28gdGhhdCB3ZSBjYW5cbiAgICogcmVhY3QgdG8gdGhlIHVzZXIgY2hhbmdpbmcgYWNjb3VudHMgb3IgbmV0b3dya3MuXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoQWNjb3VudHMoKTtcbiAgICB0aGlzLmZldGNoTmV0d29yaygpO1xuICAgIHRoaXMuaW5pdFBvbGwoKTtcbiAgICB0aGlzLmluaXROZXR3b3JrUG9sbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgd2ViMy9hY2NvdW50IHBvbGxpbmcsIGFuZCBwcmV2ZW50IGR1cGxpY2F0ZSBpbnRlcnZhbC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGluaXRQb2xsKCkge1xuICAgIGlmICghdGhpcy5pbnRlcnZhbCkge1xuICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZmV0Y2hBY2NvdW50cywgT05FX1NFQ09ORCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgbmV0d29yayBwb2xsaW5nLCBhbmQgcHJldmVudCBkdXBsaWNhdGUgaW50ZXJ2YWxzLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgaW5pdE5ldHdvcmtQb2xsKCkge1xuICAgIGlmICghdGhpcy5uZXR3b3JrSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMubmV0d29ya0ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5mZXRjaE5ldHdvcmssIE9ORV9NSU5VVEUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc3RhdGUgcmVnYXJkaW5nIHRoZSBhdmFpbGFiaWxpdHkgb2Ygd2ViMyBhbmQgYW4gRVRIIGFjY291bnQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBmZXRjaEFjY291bnRzKCkge1xuICAgIGNvbnN0IHsgd2ViMyB9ID0gd2luZG93O1xuICAgIGNvbnN0IGV0aEFjY291bnRzID0gdGhpcy5nZXRBY2NvdW50cygpO1xuXG4gICAgaWYgKGlzRW1wdHkoZXRoQWNjb3VudHMpKSB7XG4gICAgICB3ZWIzICYmIHdlYjMuZXRoICYmIHdlYjMuZXRoLmdldEFjY291bnRzKChlcnIsIGFjY291bnRzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjY291bnRzRXJyb3I6IGVyclxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVBY2NvdW50cyhldGhBY2NvdW50cyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMsIGlzQ29uc3RydWN0b3IgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2VBY2NvdW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICBsZXQgbmV4dCA9IGFjY291bnRzWzBdO1xuICAgIGxldCBjdXJyID0gdGhpcy5zdGF0ZS5hY2NvdW50c1swXTtcbiAgICBuZXh0ID0gbmV4dCAmJiBuZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgY3VyciA9IGN1cnIgJiYgY3Vyci50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGRpZENoYW5nZSA9IGN1cnIgJiYgbmV4dCAmJiAoY3VyciAhPT0gbmV4dCk7XG5cbiAgICBpZiAoaXNFbXB0eSh0aGlzLnN0YXRlLmFjY291bnRzKSAmJiAhaXNFbXB0eShhY2NvdW50cykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY2NvdW50c0Vycm9yOiBudWxsLFxuICAgICAgICBhY2NvdW50czogYWNjb3VudHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChkaWRDaGFuZ2UgJiYgIWlzQ29uc3RydWN0b3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY2NvdW50c0Vycm9yOiBudWxsLFxuICAgICAgICBhY2NvdW50c1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgcHJvdmlkZWQsIGV4ZWN1dGUgY2FsbGJhY2tcbiAgICBpZiAoZGlkQ2hhbmdlICYmIHR5cGVvZiBvbkNoYW5nZUFjY291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uQ2hhbmdlQWNjb3VudChuZXh0KTtcbiAgICB9XG5cbiAgICAvLyBJZiBhdmFpbGFibGUsIGRpc3BhdGNoIHJlZHV4IGFjdGlvblxuICAgIGlmIChzdG9yZSAmJiB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGRpZERlZmluZSA9ICFjdXJyICYmIG5leHQ7XG5cbiAgICAgIGlmIChkaWREZWZpbmUgfHwgKGlzQ29uc3RydWN0b3IgJiYgbmV4dCkpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICd3ZWIzL1JFQ0VJVkVfQUNDT1VOVCcsXG4gICAgICAgICAgYWRkcmVzczogbmV4dFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZGlkQ2hhbmdlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnd2ViMy9DSEFOR0VfQUNDT1VOVCcsXG4gICAgICAgICAgYWRkcmVzczogbmV4dFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5ldHdvcmsgYW5kIHVwZGF0ZSBzdGF0ZSBhY2NvcmRpbmdseS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZldGNoTmV0d29yaygpIHtcbiAgICBjb25zdCB7IHdlYjMgfSA9IHdpbmRvdztcblxuICAgIHdlYjMgJiYgd2ViMy52ZXJzaW9uICYmIHdlYjMudmVyc2lvbi5nZXROZXR3b3JrKChlcnIsIG5ldElkKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG5ldHdvcmtFcnJvcjogZXJyXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5ldElkICE9IHRoaXMuc3RhdGUubmV0d29ya0lkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXR3b3JrRXJyb3I6IG51bGwsXG4gICAgICAgICAgICBuZXR3b3JrSWQ6IG5ldElkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYWNjb3VudC4gV2Ugd3JhcCBpbiB0cnkvY2F0Y2ggYmVjYXVzZSByZWFkaW5nIGB3ZWIzLmV0aC5hY2NvdW5yc2BcbiAgICogd2lsbCB0aHJvdyBpZiBubyBhY2NvdW50IGlzIHNlbGVjdGVkLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBnZXRBY2NvdW50cygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB3ZWIzIH0gPSB3aW5kb3c7XG4gICAgICAvLyB0aHJvd3MgaWYgbm8gYWNjb3VudCBzZWxlY3RlZFxuICAgICAgY29uc3QgYWNjb3VudHMgPSB3ZWIzLmV0aC5hY2NvdW50cztcblxuICAgICAgcmV0dXJuIGFjY291bnRzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3ZWIzIH0gPSB3aW5kb3c7XG4gICAgY29uc3Qge1xuICAgICAgcGFzc2l2ZSxcbiAgICAgIHdlYjNVbmF2YWlsYWJsZVNjcmVlbjogV2ViM1VuYXZhaWxhYmxlQ29tcG9uZW50LFxuICAgICAgYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuOiBBY2NvdW50VW5hdmFpbGFibGVDb21wb25lbnRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYXNzaXZlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICBpZiAoIXdlYjMpIHtcbiAgICAgIHJldHVybiA8V2ViM1VuYXZhaWxhYmxlQ29tcG9uZW50IC8+O1xuICAgIH1cblxuICAgIGlmIChpc0VtcHR5KHRoaXMuc3RhdGUuYWNjb3VudHMpKSB7XG4gICAgICByZXR1cm4gPEFjY291bnRVbmF2YWlsYWJsZUNvbXBvbmVudCAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5XZWIzUHJvdmlkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuV2ViM1Byb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbldlYjNQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IGNoaWxkQ29udGV4dFR5cGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYjNQcm92aWRlcjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj0gICAgRGVwc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmZ1bmN0aW9uIGdldE5ldHdvcmsobmV0d29ya0lkKSB7XG4gIHN3aXRjaCAobmV0d29ya0lkKSB7XG4gICAgY2FzZSAnMSc6XG4gICAgICByZXR1cm4gJ01BSU5ORVQnO1xuICAgIGNhc2UgJzInOlxuICAgICAgcmV0dXJuICdNT1JERU4nO1xuICAgIGNhc2UgJzMnOlxuICAgICAgcmV0dXJuICdST1BTVEVOJztcbiAgICBjYXNlICc0JzpcbiAgICAgIHJldHVybiAnUklOS0VCWSc7XG4gICAgY2FzZSAnNDInOlxuICAgICAgcmV0dXJuICdLT1ZBTic7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnVU5LTk9XTic7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9XZWIzUHJvdmlkZXIuanN4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNFbXB0eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaC9pc0VtcHR5XCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgRXJyb3JUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vRXJyb3JUZW1wbGF0ZScpO1xuXG5jb25zdCBBY2NvdW50VW5hdmFpbGFibGUgPSBFcnJvclRlbXBsYXRlLmJpbmQobnVsbCwge1xuICB0aXRsZTogJ05vIEVUSCBBY2NvdW50IEF2YWlsYWJsZScsXG4gIG1lc3NhZ2U6IGBcbkl0IHNlZW1zIHRoYXQgeW91IGRvbiZhcG9zO3QgaGF2ZSBhbiBFVEggYWNjb3VudCBzZWxlY3RlZC4gSWYgdXNpbmdcbk1ldGFNYXNrLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91ciB3YWxsZXQgaXMgdW5sb2NrZWQgYW5kIHRoYXRcbnlvdSBoYXZlIGF0IGxlYXN0IG9uZSBhY2NvdW50IGluIHlvdXIgYWNjb3VudHMgbGlzdC5gXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBY2NvdW50VW5hdmFpbGFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWNjb3VudFVuYXZhaWxhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEljb25Ob1dlYjMocHJvcHMpIHtcbiAgcmV0dXJuIChcblxuICAgIDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMzMyIDQxN1wiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICA8ZGVmcz5cbiAgICAgIDxwYXRoIGQ9XCJNMTk4LjYxMDY4NSw0My4xMDE3ODA4IEMxMDcuMjQ5NzcsNDMuMTAxNzgwOCAzMy4xMDE3ODA4LDExNy4yNDk3NyAzMy4xMDE3ODA4LDIwOC42MTA2ODUgQzMzLjEwMTc4MDgsMjk5Ljk3MTU5OSAxMDcuMjQ5NzcsMzc0LjExOTU4OCAxOTguNjEwNjg1LDM3NC4xMTk1ODggQzI4OS45NzE1OTksMzc0LjExOTU4OCAzNjQuMTE5NTg4LDI5OS45NzE1OTkgMzY0LjExOTU4OCwyMDguNjEwNjg1IEMzNjQuMTE5NTg4LDExNy4yNDk3NyAyODkuOTcxNTk5LDQzLjEwMTc4MDggMTk4LjYxMDY4NSw0My4xMDE3ODA4IEwxOTguNjEwNjg1LDQzLjEwMTc4MDggWiBNMTk4LjYxMDY4NSwzNDEuMDE3ODA4IEMxMjUuNDU1NzQ5LDM0MS4wMTc4MDggNjYuMjAzNTYxNSwyODEuNzY1NjIgNjYuMjAzNTYxNSwyMDguNjEwNjg1IEM2Ni4yMDM1NjE1LDE3Ny45OTE1MzcgNzYuNjMwNjIyNSwxNDkuODU1MDI0IDk0LjE3NDU2NjMsMTI3LjUxMTMyMiBMMjc5LjcxMDA0NywzMTMuMDQ2ODAzIEMyNTcuMzY2MzQ1LDMzMC41OTA3NDcgMjI5LjIyOTgzMiwzNDEuMDE3ODA4IDE5OC42MTA2ODUsMzQxLjAxNzgwOCBMMTk4LjYxMDY4NSwzNDEuMDE3ODA4IFogTTMwMy4wNDY4MDMsMjg5LjcxMDA0NyBMMTE3LjUxMTMyMiwxMDQuMTc0NTY2IEMxMzkuODU1MDI0LDg2LjYzMDYyMjUgMTY3Ljk5MTUzNyw3Ni4yMDM1NjE1IDE5OC42MTA2ODUsNzYuMjAzNTYxNSBDMjcxLjc2NTYyLDc2LjIwMzU2MTUgMzMxLjAxNzgwOCwxMzUuNDU1NzQ5IDMzMS4wMTc4MDgsMjA4LjYxMDY4NSBDMzMxLjAxNzgwOCwyMzkuMjI5ODMyIDMyMC41OTA3NDcsMjY3LjM2NjM0NSAzMDMuMDQ2ODAzLDI4OS43MTAwNDcgTDMwMy4wNDY4MDMsMjg5LjcxMDA0NyBaXCIgaWQ9XCJwYXRoLTFcIj48L3BhdGg+XG4gICAgPC9kZWZzPlxuICAgIDxnIGlkPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICA8ZyBpZD1cIkdyb3VwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMy4wMDAwMDAsIDAuMDAwMDAwKVwiPlxuICAgICAgICA8ZyBpZD1cIkV0aGVyZXVtX2xvZ29fMjAxNFwiIG9wYWNpdHk9XCIwLjIwODg5OTQ1N1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3MS4wMDAwMDAsIDAuMDAwMDAwKVwiIGZpbGxSdWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzM0MzQzNFwiIHBvaW50cz1cIjEyNy45NjExIDAgMTI1LjE2NjEgOS41IDEyNS4xNjYxIDI4NS4xNjggMTI3Ljk2MTEgMjg3Ljk1OCAyNTUuOTIzMSAyMTIuMzJcIj48L3BvbHlnb24+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjOEM4QzhDXCIgcG9pbnRzPVwiMTI3Ljk2MiAwIDAgMjEyLjMyIDEyNy45NjIgMjg3Ljk1OSAxMjcuOTYyIDE1NC4xNThcIj48L3BvbHlnb24+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjM0MzQzNCXCIgcG9pbnRzPVwiMTI3Ljk2MTEgMzEyLjE4NjYgMTI2LjM4NjEgMzE0LjEwNjYgMTI2LjM4NjEgNDEyLjMwNTYgMTI3Ljk2MTEgNDE2LjkwNjYgMjU1Ljk5OTEgMjM2LjU4NjZcIj48L3BvbHlnb24+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjOEM4QzhDXCIgcG9pbnRzPVwiMTI3Ljk2MiA0MTYuOTA1MiAxMjcuOTYyIDMxMi4xODUyIDAgMjM2LjU4NTJcIj48L3BvbHlnb24+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjMTQxNDE0XCIgcG9pbnRzPVwiMTI3Ljk2MTEgMjg3Ljk1NzcgMjU1LjkyMTEgMjEyLjMyMDcgMTI3Ljk2MTEgMTU0LjE1ODdcIj48L3BvbHlnb24+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjMzkzOTM5XCIgcG9pbnRzPVwiMC4wMDA5IDIxMi4zMjA4IDEyNy45NjA5IDI4Ny45NTc4IDEyNy45NjA5IDE1NC4xNTg4XCI+PC9wb2x5Z29uPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGlkPVwiaWNfZG9fbm90X2Rpc3R1cmJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEwLjAwMDAwMClcIj48L2c+XG4gICAgICAgIDxwb2x5Z29uIGlkPVwiQm91bmRzXCIgcG9pbnRzPVwiMCAxMCAzOTcuMjIxMzY5IDEwIDM5Ny4yMjEzNjkgNDA3LjIyMTM2OSAwIDQwNy4yMjEzNjlcIj48L3BvbHlnb24+XG4gICAgICAgIDxnIGlkPVwiSWNvblwiPlxuICAgICAgICAgIDx1c2UgZmlsbD1cIiNGRkUxREVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiB4bGlua0hyZWY9XCIjcGF0aC0xXCI+PC91c2U+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZVdpZHRoPVwiNlwiIGQ9XCJNMTk4LjYxMDY4NSw0Ni4xMDE3ODA4IEMyODguMzE0NzQ1LDQ2LjEwMTc4MDggMzYxLjExOTU4OCwxMTguOTA2NjI0IDM2MS4xMTk1ODgsMjA4LjYxMDY4NSBDMzYxLjExOTU4OCwyOTguMzE0NzQ1IDI4OC4zMTQ3NDUsMzcxLjExOTU4OCAxOTguNjEwNjg1LDM3MS4xMTk1ODggQzEwOC45MDY2MjQsMzcxLjExOTU4OCAzNi4xMDE3ODA4LDI5OC4zMTQ3NDUgMzYuMTAxNzgwOCwyMDguNjEwNjg1IEMzNi4xMDE3ODA4LDExOC45MDY2MjQgMTA4LjkwNjYyNCw0Ni4xMDE3ODA4IDE5OC42MTA2ODUsNDYuMTAxNzgwOCBaIE0xOTguNjEwNjg1LDM0NC4wMTc4MDggQzEyMy43OTg4OTUsMzQ0LjAxNzgwOCA2My4yMDM1NjE1LDI4My40MjI0NzQgNjMuMjAzNTYxNSwyMDguNjEwNjg1IEM2My4yMDM1NjE1LDE3OC4wNzc0NDIgNzMuMzczNjcxNCwxNDkuMTQ1MjMzIDkxLjgxNTAwNDksMTI1LjY1ODYyOSBMOTMuOTA0MDAwNywxMjIuOTk4MTE1IEwyODQuMjIzMjU0LDMxMy4zMTczNjggTDI4MS41NjI3NCwzMTUuNDA2MzY0IEMyNTguMDc2MTM2LDMzMy44NDc2OTggMjI5LjE0MzkyNywzNDQuMDE3ODA4IDE5OC42MTA2ODUsMzQ0LjAxNzgwOCBaIE0zMDMuMzE3MzY4LDI5NC4yMjMyNTQgTDExMi45OTgxMTUsMTAzLjkwNDAwMSBMMTE1LjY1ODYyOSwxMDEuODE1MDA1IEMxMzkuMTQ1MjMzLDgzLjM3MzY3MTQgMTY4LjA3NzQ0Miw3My4yMDM1NjE1IDE5OC42MTA2ODUsNzMuMjAzNTYxNSBDMjczLjQyMjQ3NCw3My4yMDM1NjE1IDMzNC4wMTc4MDgsMTMzLjc5ODg5NSAzMzQuMDE3ODA4LDIwOC42MTA2ODUgQzMzNC4wMTc4MDgsMjM5LjE0MzkyNyAzMjMuODQ3Njk4LDI2OC4wNzYxMzYgMzA1LjQwNjM2NCwyOTEuNTYyNzQgTDMwMy4zMTczNjgsMjk0LjIyMzI1NCBaXCI+PC9wYXRoPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9nPlxuICA8L3N2Zz5cbiAgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJY29uTm9XZWIzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ljb25Ob1dlYjMuanN4IiwibW9kdWxlLmV4cG9ydHMgPSBgXG4uV2ViM1Byb3ZpZGVyLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsO1xuICBjb2xvcjogaHNsKDAsMCUsNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgOTUlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDAlLCA5NSUpKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDAlLCA5NSUpKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAwJSwgOTUlKSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMCUsIDk1JSkpO1xufVxuLldlYjNQcm92aWRlci13cmFwcGVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjA3LCA5MCUsIDU0JSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCA0MHB4O1xuICBtYXJnaW46IDgwcHggYXV0bztcbn1cbi5XZWIzUHJvdmlkZXItaW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiAxNzVweDtcbn1cbi5XZWIzUHJvdmlkZXItdGl0bGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBjb2xvcjogaHNsKDAsMCUsMjUlKTtcbn1cbi5XZWIzUHJvdmlkZXItbWVzc2FnZSB7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBoc2woMCwwJSw1MCUpO1xufVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZXNoZWV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgRXJyb3JUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vRXJyb3JUZW1wbGF0ZScpO1xuXG5jb25zdCBXZWIzVW5hdmFpbGFibGUgPSBFcnJvclRlbXBsYXRlLmJpbmQobnVsbCwge1xuICB0aXRsZTogJ1dlYjMgTm90IEZvdW5kJyxcbiAgbWVzc2FnZTogYFxuSXQgc2VlbXMgdGhhdCB5b3UgYXJlIHVzaW5nIGEgYnJvd3NlciB3aXRob3V0IFdlYjMgY2FwYWJpbGl0aWVzLiBQbGVhc2Vcbm1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgdXNpbmcgYSB3ZWIzLWNhcGFibGUgYnJvd3NlciBsaWtlIG1pc3Qgb3IgcGFyaXR5LlxuSWYgeW91IGFyZSB1c2luZyBNZXRhTWFzayBvciBQYXJpdHkgZXh0ZW5zaW9uLCBtYWtlIHN1cmUgdGhhdCBpdCBpc1xuZW5hYmxlZC5cbmBcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYjNVbmF2YWlsYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9XZWIzVW5hdmFpbGFibGUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==