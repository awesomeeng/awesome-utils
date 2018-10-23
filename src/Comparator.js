// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

class ComparatorUtils {
	compare(a,b) {
		if (a===undefined && b===undefined) return 0;
		if (a===undefined && b!==undefined) return -1;
		if (a!==undefined && b===undefined) return 1;

		if (a===null && b===null) return 0;
		if (a===null && b!==null) return -1;
		if (a!==null && b===null) return 1;

		let ta = typeof a;
		let tb = typeof b;

		if (ta==="number" || tb==="number") return module.exports.numberCompare(a,b);
		if (ta==="string" || tb==="string") return module.exports.stringCompare(a,b);

		return module.exports.stringCompare(a,b);
	}

	numberCompare(a,b) {
		if (a===undefined && b===undefined) return 0;
		if (a===undefined && b!==undefined) return -1;
		if (a!==undefined && b===undefined) return 1;

		if (a===null && b===null) return 0;
		if (a===null && b!==null) return -1;
		if (a!==null && b===null) return 1;

		a = +a;
		b = +b;
		return b-a;
	}

	stringCompare(a,b) {
		if (a===undefined && b===undefined) return 0;
		if (a===undefined && b!==undefined) return -1;
		if (a!==undefined && b===undefined) return 1;

		if (a===null && b===null) return 0;
		if (a===null && b!==null) return -1;
		if (a!==null && b===null) return 1;

		a = ""+a;
		b = ""+b;
		if (b<a) return -1;
		if (b>a) return 1;
		return 0;
	}

	stringIgnoreCaseCompare(a,b) {
		if (a===undefined && b===undefined) return 0;
		if (a===undefined && b!==undefined) return -1;
		if (a!==undefined && b===undefined) return 1;

		if (a===null && b===null) return 0;
		if (a===null && b!==null) return -1;
		if (a!==null && b===null) return 1;

		a = (""+a).toLowerCase();
		b = (""+b).toLowerCase();
		if (b<a) return -1;
		if (b>a) return 1;
		return 0;
	}
}

module.exports = new ComparatorUtils();
