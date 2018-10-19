// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const $TIMEOUTS = Symbol("timeouts");
const $TIMEOUTTIMER = Symbol("timeoutTimer");

/**
 * Utilities for dealing with Promises.
 */
class PromiseUtils {
	constructor() {
		this[$TIMEOUTS] = new Set();
		this[$TIMEOUTTIMER] = null;
	}

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

	/**
	 * In essence this lets you wrap a promise in a timeout such that if the
	 * timeout occurs before the promise resolves or reject, this rejects.
	 *
	 * Returns a promise that will resolve/reject if the passed in promise resolves
	 * or rejects before the passed in ttl time has elapsed. If the ttl time does
	 * elsapse, the returned promise will reject (with the optional exception) and
	 * the passed in promise resolve or reject will be swallowed.
	 *
	 * @param  {Promise} promise
	 * @param  {number} [ttl=30000]           
	 * @param  {Error}  [timeoutException=new Error("Timed  out.")]
	 * @return {Promise}
	 */
	timeout(promise,ttl=30000,timeoutException=new Error("Timed out.")) {
		if (!promise) throw new Error("Missing promise.");
		if (!(promise instanceof Promise)) throw new Error("Invalid promise.");
		if (!ttl) throw new Error("Missing ttl.");
		if (typeof ttl!=="number") throw new Error("Invalid ttl.");

		return new Promise((resolve,reject)=>{
			let timedOut = false;
			let timer = setTimeout(()=>{
				timedOut = true;
				reject(timeoutException);
			},ttl);
			promise.then((result)=>{
				if (timedOut) return;
				clearTimeout(timer);
				resolve(result);
			});
			promise.catch((err)=>{
				if (timedOut) return;
				clearTimeout(timer);
				reject(err);
			});
		});
	}
}

module.exports = new PromiseUtils();
