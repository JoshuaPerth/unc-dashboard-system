"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/accounts/management",{

/***/ "./pages/components/navigation/navbar-management.js":
/*!**********************************************************!*\
  !*** ./pages/components/navigation/navbar-management.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar */ \"./pages/components/sidebar.js\");\n/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout */ \"./pages/components/navigation/logout.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"E:\\\\Documents\\\\NEXT.JS\\\\unc-dashboard-system\\\\pages\\\\components\\\\navigation\\\\navbar-management.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar NavMang = function NavMang() {\n  _s();\n\n  var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  /*\r\n   auth.onAuthStateChanged((user) => {\r\n    if (user) {\r\n      console.log(user.uid)\r\n      console.log('user logged in: ', user.email);\r\n    } else {\r\n      console.log('user logged out');\r\n    }\r\n  });\r\n  \r\n  */\n\n  function goToReports() {\n    router.push('/accounts/management/reports');\n  }\n\n  function goToHome() {\n    router.push('/accounts/management');\n  }\n\n  function Logout() {\n    (0,_logout__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    router.push('/');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"fixed top-0 h-screen w-16 m-0 flex flex-col bg-true-red text-white shadow-lg\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n      src: \"/unc-dbs-logo.png\",\n      width: 60,\n      height: 60\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n      onClick: goToHome,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiFillHome, {\n          size: \"30\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 28\n        }, _this),\n        text: \"Home \\uD83C\\uDFE0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n      onClick: goToReports,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        href: \"/accounts/management/reports\",\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiFillFilePdf, {\n          size: \"30\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 17\n        }, _this),\n        text: \"Reports \\uD83D\\uDCC1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n      onClick: Logout,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n        className: \"inline-block absolute bottom-5 right-0 left-0 text-xs text-center\",\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavMang, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = NavMang;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavMang);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavMang\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2YmFyLW1hbmFnZW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07RUFBQTs7RUFDcEIsSUFBTUMsSUFBSSxHQUFHSCxzREFBTyxFQUFwQjtFQUNBLElBQU1JLE1BQU0sR0FBR0gsc0RBQVMsRUFBeEI7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUlFLFNBQVNJLFdBQVQsR0FBdUI7SUFDckJELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLDhCQUFaO0VBQ0Q7O0VBQ0QsU0FBU0MsUUFBVCxHQUFvQjtJQUNsQkgsTUFBTSxDQUFDRSxJQUFQLENBQVksc0JBQVo7RUFDRDs7RUFDRCxTQUFTRSxNQUFULEdBQWtCO0lBQ2hCVCxtREFBTTtJQUNOSyxNQUFNLENBQUNFLElBQVAsQ0FBWSxHQUFaO0VBQ0Q7O0VBRUQsb0JBQ0U7SUFBSyxTQUFTLEVBQUMsOEVBQWY7SUFBQSx3QkFDRSw4REFBQyxtREFBRDtNQUFPLEdBQUcsRUFBQyxtQkFBWDtNQUErQixLQUFLLEVBQUUsRUFBdEM7TUFBMEMsTUFBTSxFQUFFO0lBQWxEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQUdFO01BQVEsT0FBTyxFQUFFQyxRQUFqQjtNQUFBLHVCQUNFLDhEQUFDLGdEQUFEO1FBQWEsSUFBSSxlQUFFLDhEQUFDLHNEQUFEO1VBQVksSUFBSSxFQUFDO1FBQWpCO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FBbkI7UUFBNkMsSUFBSSxFQUFDO01BQWxEO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBSEYsZUFPRTtNQUFRLE9BQU8sRUFBRUYsV0FBakI7TUFBQSx1QkFDRSw4REFBQyxnREFBRDtRQUNFLElBQUksRUFBQyw4QkFEUDtRQUVFLElBQUksZUFBRSw4REFBQyx5REFBRDtVQUFlLElBQUksRUFBQztRQUFwQjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRlI7UUFHRSxJQUFJLEVBQUM7TUFIUDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVBGLGVBY0U7TUFBUSxPQUFPLEVBQUVHLE1BQWpCO01BQUEsdUJBQ0U7UUFBRyxTQUFTLEVBQUMsbUVBQWI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBZEY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFzQkQsQ0FuREQ7O0dBQU1OO1VBRVdEOzs7S0FGWEM7QUFxRE4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmJhci1tYW5hZ2VtZW50LmpzPzMzZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWlGaWxsSG9tZSwgQWlGaWxsRmlsZVBkZiB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgTWRPdXRsaW5lRGFzaGJvYXJkIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBTaWRlQmFySWNvbiBmcm9tICcuLi9zaWRlYmFyJztcclxuaW1wb3J0IGxvZ291dCBmcm9tICcuL2xvZ291dCc7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTmF2TWFuZyA9ICgpID0+IHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvKlxyXG4gICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgY29uc29sZS5sb2codXNlci51aWQpXHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyIGxvZ2dlZCBpbjogJywgdXNlci5lbWFpbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygndXNlciBsb2dnZWQgb3V0Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgKi9cclxuXHJcbiBcclxuXHJcbiAgZnVuY3Rpb24gZ29Ub1JlcG9ydHMoKSB7XHJcbiAgICByb3V0ZXIucHVzaCgnL2FjY291bnRzL21hbmFnZW1lbnQvcmVwb3J0cycpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBnb1RvSG9tZSgpIHtcclxuICAgIHJvdXRlci5wdXNoKCcvYWNjb3VudHMvbWFuYWdlbWVudCcpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBMb2dvdXQoKSB7XHJcbiAgICBsb2dvdXQoKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBoLXNjcmVlbiB3LTE2IG0tMCBmbGV4IGZsZXgtY29sIGJnLXRydWUtcmVkIHRleHQtd2hpdGUgc2hhZG93LWxnXCI+XHJcbiAgICAgIDxJbWFnZSBzcmM9XCIvdW5jLWRicy1sb2dvLnBuZ1wiIHdpZHRoPXs2MH0gaGVpZ2h0PXs2MH0gLz5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Z29Ub0hvbWV9PlxyXG4gICAgICAgIDxTaWRlQmFySWNvbiBpY29uPXs8QWlGaWxsSG9tZSBzaXplPVwiMzBcIiAvPn0gdGV4dD1cIkhvbWUg8J+PoFwiIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvUmVwb3J0c30+XHJcbiAgICAgICAgPFNpZGVCYXJJY29uXHJcbiAgICAgICAgICBocmVmPVwiL2FjY291bnRzL21hbmFnZW1lbnQvcmVwb3J0c1wiXHJcbiAgICAgICAgICBpY29uPXs8QWlGaWxsRmlsZVBkZiBzaXplPVwiMzBcIiAvPn1cclxuICAgICAgICAgIHRleHQ9XCJSZXBvcnRzIPCfk4FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xvZ291dH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGFic29sdXRlIGJvdHRvbS01IHJpZ2h0LTAgbGVmdC0wIHRleHQteHMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIExvZ291dFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TWFuZztcclxuIl0sIm5hbWVzIjpbIkFpRmlsbEhvbWUiLCJBaUZpbGxGaWxlUGRmIiwiTWRPdXRsaW5lRGFzaGJvYXJkIiwiSW1hZ2UiLCJTaWRlQmFySWNvbiIsImxvZ291dCIsImdldEF1dGgiLCJ1c2VSb3V0ZXIiLCJOYXZNYW5nIiwiYXV0aCIsInJvdXRlciIsImdvVG9SZXBvcnRzIiwicHVzaCIsImdvVG9Ib21lIiwiTG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/navigation/navbar-management.js\n"));

/***/ })

});