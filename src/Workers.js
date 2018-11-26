// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

let Workers = null;
try {
	Workers = require("worker_threads");
}
catch (ex) {
	Workers = null;
}


class WorkerUtils {
	get enabled() {
		return !!Workers;
	}

	get Workers() {
		return Workers;
	}

	sabLock(sab,index,frequency=1,timeout=100) {
		return new Promise((resolve,reject)=>{
			try {
				let start = Date.now();

				const f = ()=>{
					if (Date.now()-start>=timeout) return reject();

					Atomics.load(sab,index);
					let free = Atomics.wait(sab,index,0,0);
					if (free==="timed-out") {
						Atomics.store(sab,index,1);
						return resolve();
					}

					setTimeout(f,frequency);
				};

				f();
			}
			catch (ex) {
				return reject(ex);
			}
		});
	}

	sabUnlock(sab,index) {
		Atomics.store(sab,index,0);
	}

	sabLocked(sab,index) {
		return Atomics.load(sab,index)===1;
	}
}

module.exports = new WorkerUtils();
