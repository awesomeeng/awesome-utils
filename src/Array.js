// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

class ArrayUtils {
	compact(array) {
		if (!array) throw new Error("Missing array.");
		if (!(array instanceof Array)) throw new Error("Invalid array.");

		return array.filter((x)=>{
			return x!==undefined && x!==null;
		});
	}

	flatten(array) {
		if (!array) throw new Error("Missing array.");
		if (!(array instanceof Array)) throw new Error("Invalid array.");

		return array.reduce((array,x)=>{
			if (x instanceof Array) {
				this.flatten(x).forEach((x)=>{
					array.push(x);
				});
			}
			else {
				array.push(x);
			}
			return array;
		},[]);
	}

	without(array,...excludes) {
		if (!array) throw new Error("Missing array.");
		if (!(array instanceof Array)) throw new Error("Invalid array.");

		excludes = this.flatten(excludes);
		return array.filter((x)=>{
			return excludes.indexOf(x)<0;
		});
	}
}

module.exports = new ArrayUtils();
