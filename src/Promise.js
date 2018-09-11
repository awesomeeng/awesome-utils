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
	 * @param  {number} ms
	 * @return {Promise}
	 */
	sleep(ms) {
		if (!ms) return Promise.resolve();
		return new Promise((resolve,reject)=>{
			try {
				setTimeout(()=>{
					resolve();
				},ms);
			}
			catch (ex) {
				return reject(ex);
			}
		});
	}

	/**
	 * Execute an array of Promises in serial order. Resolve when
	 * all have resolve. Reject when any reject. Reject will short
	 * circuit and any remaining promises after one rejects will
	 * not be executed.
	 *
	 * @param  {Array<Promise>} array
	 * @return {Promise}
	 */
	series(array) {
		if (!array || array.length<1) return Promise.resolve();

		let items = [].concat(array);
		return new Promise((resolve,reject)=>{
			try {
				const next = async function next() {
					if (items.length<1) return resolve();
					let p = items.shift();
					if (p instanceof Promise) await p;
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
