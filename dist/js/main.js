/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ \"./modules/form.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//price\r\n\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('2022-04-16');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 500) => {\r\n  const inputNumber = document.querySelectorAll(\".calc-block input\");\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n\r\n  const regExpNumber = /[^0-9]+/i;\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n\r\n\r\n    total.textContent = Math.floor(totalValue);\r\n  };\r\n\r\n  inputNumber.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(regExpNumber, \"\");\r\n    });\r\n  });\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/form.js":
/*!*************************!*\
  !*** ./modules/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction form() {\r\n    const form = document.querySelector('.calc-block');\r\n    const square = form.querySelector('.calc-square');\r\n    const count = form.querySelector('.calc-count');\r\n    const day = form.querySelector('.calc-day');\r\n    let formName = document.querySelectorAll('.form-name');\r\n    let formTel = document.querySelectorAll('.form-phone');\r\n    const mess = document.querySelector('.mess');\r\n    const formEmail = document.querySelectorAll('.form-email');\r\n\r\n    formName = [...formName, mess]\r\n\r\n    formEmail.forEach(item => {\r\n        item.addEventListener('input', (e) => {\r\n            item.value = item.value.replace(/[^a-z0-9\\@\\-\\_\\.\\!\\~\\*\\']/gi, '');\r\n        })\r\n    })\r\n\r\n    formTel.forEach(item => {\r\n        item.addEventListener('input', (e) => {\r\n            item.value = item.value.replace(/[^0-9\\)\\(\\-]/gi, '')\r\n        });\r\n    })\r\n\r\n    \r\n\r\n    formName.forEach(item => {\r\n        item.addEventListener('input', (e) => {\r\n        item.value = item.value.replace(/[^а-я\\.\\-]/gi, '')\r\n    })\r\n    })\r\n\r\n    \r\n\r\n    square.addEventListener('input', (e) => {\r\n        square.value = square.value.replace(/[^\\d]/gi, '')\r\n    })\r\n\r\n    count.addEventListener('input', (e) => {\r\n        count.value = count.value.replace(/[^\\d]/gi, '')\r\n    })\r\n\r\n    day.addEventListener('input', (e) => {\r\n        day.value = day.value.replace(/[^\\d]/gi, '')\r\n    })\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack:///./modules/form.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu() {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul > li > a')\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    };\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close-btn') || e.target.matches('menu ul li a')) {\r\n            console.log('1')\r\n            handleMenu();\r\n        } else if (e.target.closest('.menu')) {\r\n            console.log('2')\r\n            handleMenu();\r\n         } else if (!(e.target.closest('menu')) && menu.classList.contains('active-menu')) {\r\n            console.log('3')\r\n            handleMenu();\r\n         }\r\n    })\r\n    \r\n    // menuBtn.addEventListener('click', handleMenu);\r\n\r\n    // menuItems.forEach(item => {\r\n    //     item.addEventListener('click', handleMenu)\r\n    // })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const btns = document.querySelectorAll('.popup-btn');\r\n    const modal = document.querySelector('.popup');\r\n    const content = modal.querySelector('.popup-content');\r\n    let idInterval;\r\n    let count = 0;\r\n\r\n    const animation = () => {\r\n        count++;\r\n        idInterval = requestAnimationFrame(animation);\r\n        if (count <= 40) {\r\n            console.log(content.style.left)\r\n            content.style.left = count + '%';\r\n        } else {\r\n            count = 0;\r\n            cancelAnimationFrame(idInterval)\r\n        }\r\n    };\r\n    \r\n    btns.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'flex';\r\n            if (document.documentElement.offsetWidth <= 768) {\r\n                content.style.left = 38 + '%';\r\n                modal.style.display = 'flex';\r\n            } else {\r\n                content.style.left = 30 + '%';\r\n                modal.style.display = 'flex';\r\n                animation()\r\n            }\r\n            \r\n        })\r\n    });\r\n\r\n    //\r\n    modal.addEventListener('click', (e) => {\r\n        if (!(e.target.closest('.popup-content')) || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none';\r\n        }\r\n    })\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector(\".portfolio-content\");\r\n  const slides = document.querySelectorAll(\".portfolio-item\");\r\n  const dotsBlock = document.querySelector(\".portfolio-dots\");\r\n\r\n  const timeInterval = 2000;\r\n\r\n  let dots;\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const getDots = () => {\r\n    slides.forEach((slide, index) => {\r\n      const dot = document.createElement(\"li\");\r\n\r\n      if (index === 0) {\r\n        dot.classList.add(\"dot\", \"dot-active\");\r\n      } else {\r\n        dot.classList.add(\"dot\");\r\n      }\r\n\r\n      dotsBlock.append(dot);\r\n    })\r\n\r\n    dots = document.querySelectorAll(\".dot\");\r\n  };\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timeInterval);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    } else if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  });\r\n\r\n  sliderBlock.addEventListener(\"mouseenter\", (e) => {\r\n    if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n      stopSlide();\r\n    }\r\n  }, true);\r\n\r\n  sliderBlock.addEventListener(\"mouseleave\", (e) => {\r\n    if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n      startSlide(timeInterval);\r\n    }\r\n  }, true);\r\n\r\n  getDots();\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs() {\r\n    const contentPanel = document.querySelector('.service-header');\r\n    const tabs = contentPanel.querySelectorAll('.service-header-tab');\r\n    const contentTab = document.querySelectorAll('.service-tab');\r\n\r\n    contentPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n            tabs.forEach((tab, index) => {\r\n                if (tabBtn === tab) {\r\n                    tab.classList.add('active')\r\n                    contentTab[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    contentTab[index].classList.add('d-none');\r\n                }\r\n            })\r\n        }\r\n        \r\n    })\r\n\r\n    // console.log(contentPanel);\r\n    // console.log(tabs);\r\n    // console.log(contentTab);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timer(deadline) {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n\r\n    const getTimeRemaining = () => {\r\n        const dateStop = Date.parse(deadline);\r\n        const dateNow = Date.parse(new Date());\r\n        const timeRemaining = dateStop - dateNow;\r\n        let h = Math.trunc((dateStop - dateNow) / 1000 / 60 / 60);\r\n        let min = Math.trunc(((dateStop - dateNow) / 1000 / 60) % 60);\r\n        let sec = Math.trunc(((dateStop - dateNow) / 1000) % 60);\r\n\r\n        return {\r\n            timeRemaining,\r\n            h,\r\n            min,\r\n            sec,\r\n        }\r\n    };\r\n\r\n    const checkDate = (number) => {\r\n        if (number < 10) {\r\n            return `0${number}` \r\n        } else {\r\n            return number\r\n        } \r\n    }\r\n\r\n    const updateClock = () => {\r\n        const getTime = getTimeRemaining(deadline);\r\n        timerHours.textContent = checkDate(getTime.h);\r\n        timerMinutes.textContent = checkDate(getTime.min);\r\n        timerSeconds.textContent = checkDate(getTime.sec);\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            setInterval(updateClock, 1000)\r\n        } else {\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n        }\r\n\r\n    }\r\n\r\n    updateClock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;