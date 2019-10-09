"use strict";
/*!
@author RedCamel / https://github.com/redcamel / webseon@gmail.com
MIT License
Copyright (c) 2019 ~ By RedCamel.
*/
import detector from 'project-simple-red-detector';

var RedCss;
var RedCssCls;
var style, sheet, rullSet;
var UU_TABLE, UUID;
var fn;
var getIndex;
var temp;
UU_TABLE = {}, UUID = 0;
style = document.createElement('style');
document.head.appendChild(style);
sheet = style.sheet || style.stylesheet;
rullSet = sheet.cssRules;
RedCssCls = function (k) {
	this.__key = k;
	if (!UU_TABLE[k]) {
		try {
			sheet.insertRule(k + '{}', UUID);
			this.rull = rullSet[UUID].style
		} catch (e) {
			this.__noHasBrowser = true
		}
	}
},
	getIndex = function (k) {
		var i = sheet.cssRules.length;
		var result;
		while (i--) {
			if (sheet.cssRules[i].selectorText == k) {
				result = i;
				break
			}
		}
		return result
	},
	//////////////////////////////////
	// 프로토타입 정의
	fn = RedCssCls.prototype,
	// 외부 유출용 프로토타입 정의
	RedCssCls.fn = fn,
	fn.S = (function () {
		var isIE9 = detector.browser == 'ie' && detector.browserVer < 10;
		var exp = /-([a-z])/gi;
		var noPx = {'opacity': 1, 'z-index': 1, 'zIndex': 1};
		var regFunc = function (match, char, index, str) {
			return char.toUpperCase();
		};
		if (isIE9) {
			return function () {
				var arg = arguments;
				var max, i;
				var k, v, tS;
				i = 0, max = arg.length;
				tS = this.rull;
				for (i; i < max; i++) {
					k = arg[i], i++, v = arg[i];
					k = k.replace(exp, regFunc);
					if (i < arg.length) {
						typeof this[k] == "function" ? this[k](v) :
							typeof v == "number" && !noPx[k] ? tS[k] = (v + "px") : tS[k] = v
					} else {
						return typeof this[k] == "function" ? this[k]() : typeof v == "number" ? parseFloat(tS[k]) : tS[k];
					}
					if (i == max - 1) return this
				}
			}
		} else {
			return function () {
				var arg = arguments;
				var max, i;
				var k, v, tS;
				i = 0, max = arg.length;
				tS = this.rull;
				for (i; i < max; i++) {
					k = arg[i], i++, v = arg[i];
					if (i < arg.length) {
						typeof this[k] == "function" ? this[k](v) :
							typeof v == "number" && !noPx[k] ? tS[k] = (v + "px") : tS[k] = v
					} else {
						return typeof this[k] == "function" ? this[k]() : typeof v == "number" ? parseFloat(tS[k]) : tS[k];
					}
					if (i == max - 1) return this
				}
			}
		}
	})(),
	fn.remove = function () {
		sheet.deleteRule(getIndex(this.__key));
		delete UU_TABLE[this.__key];
		UUID--
	};
RedCss = function (key) {
	if (!UU_TABLE[key]) {
		temp = new RedCssCls(key);
		if (!temp.__noHasBrowser) UU_TABLE[key] = temp, UUID++
	}
	return UU_TABLE[key]
}
export default RedCss;