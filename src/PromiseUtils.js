// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

class PromiseUtils {
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
}

module.exports = new PromiseUtils();
