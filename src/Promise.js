// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";
/**
 * Utilities for dealing with Promises.
 */
class PromiseUtils {
	/**
	 * Creates a promise that resolves after n milliseconds. Great for usage
	 * with await for delaying some period of time.
	 *
	 * @param  {number} duration
	 * @return {Promise}
	 */
	sleep(duration) {
		if (!duration && duration!==0) throw new Error("Missing duration.");
		if (typeof duration!=="number") throw new Error("Invalid duration.");
		if (!duration) return Promise.resolve();
		return new Promise((resolve,reject)=>{
			try {
				setTimeout(()=>{
					resolve();
				},duration);
			}
			catch (ex) {
				return reject(ex);
			}
		});
	}

	/**
	 * Execute the given function for each cell of the array, in series order.
	 * If the given function returns a Promise, the promise will await resolution
	 * before the function is called next.  This creates a series execution of
	 * an array of Promise executions.  On a reject, all remaining executions
	 * are skipped.
	 *
	 * The given function is called with the signature
	 * f(item,index,originalArray,resultsArray).
	 *
	 * @param  {Array<Promise>} array
	 * @param  {Function} f
	 * @return {Promise}
	 */
	series(array,f) {
		if (!array) throw new Error("Missing array.");
		if (!(array instanceof Array)) throw new Error("Invalid array.");
		if (!f) throw new Error("Missing function.");
		if (!(f instanceof Function)) throw new Error("Invalid function.");

		if (array.length<1) return Promise.resolve([]);

		let items = [].concat(array);
		let results = [];
		let index = -1;
		return new Promise((resolve,reject)=>{
			try {
				const next = async function next() {
					if (items.length<1) return resolve(results);

					index += 1;
					let item = items.shift();

					let result = f(item,index,array,results);
					if (result instanceof Promise) result = await result;
					results[index] = result;

					setImmediate(next);
				};

				next();
			}
			catch (ex) {
				return reject(ex);
			}
		});
	}
}

module.exports = new PromiseUtils();
