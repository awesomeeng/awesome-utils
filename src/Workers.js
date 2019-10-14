// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

/* global Atomics */

"use strict";

const UNLOCKED = -1;

const FSUtils = require("./FS");

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

	get threadId() {
		if (Workers) return Workers.threadId;
		return process.pid;
	}

	create(filename,options) {
		if (!filename) throw new Error("Missing filename.");
		if (typeof filename!=="string") throw new Error("Invalid filename.");
		if (!FSUtils.existsSync(filename)) throw new Error("Filename '"+filename+"' not found.");

		return new Workers.Worker(filename,options);
	}

	initializeLock(lock,index=0) {
		if (!lock) throw new Error("Missing lock.");
		if (!(lock instanceof Int32Array)) throw new Error("Invalid lock; must be Int32Array.");
		if (index===undefined || index===null) throw new Error("Missing index.");
		if (typeof index!=="number") throw new Error("Invalid index.");
		if (index<0 || index>lock.length) throw new Error("Index out of range.");

		lock[0] = UNLOCKED;
	}

	/**
	 * Returns true of the lock was obtained, false otherwise.
	 *
	 * @param  {Int32Array} lock
	 * @param  {number} index
	 * @return {boolean}
	 */
	lock(lock,index=0) {
		if (!lock) throw new Error("Missing lock.");
		if (!(lock instanceof Int32Array)) throw new Error("Invalid lock; must be Int32Array.");
		if (index===undefined || index===null) throw new Error("Missing index.");
		if (typeof index!=="number") throw new Error("Invalid index.");
		if (index<0 || index>lock.length) throw new Error("Index out of range.");

		return Atomics.compareExchange(lock,index,UNLOCKED,this.threadId)===UNLOCKED;
	}

	unlock(lock,index=0) {
		if (!lock) throw new Error("Missing lock.");
		if (!(lock instanceof Int32Array)) throw new Error("Invalid lock; must be Int32Array.");
		if (index===undefined || index===null) throw new Error("Missing index.");
		if (typeof index!=="number") throw new Error("Invalid index.");
		if (index<0 || index>lock.length) throw new Error("Index out of range.");

		let pid = Atomics.compareExchange(lock,index,this.threadId,UNLOCKED);
		if (pid!==this.threadId) throw new Error("Not lock owner.");
		return true;
	}

	locked(lock,index=0) {
		if (!lock) throw new Error("Missing lock.");
		if (!(lock instanceof Int32Array)) throw new Error("Invalid lock; must be Int32Array.");
		if (index===undefined || index===null) throw new Error("Missing index.");
		if (typeof index!=="number") throw new Error("Invalid index.");
		if (index<0 || index>lock.length) throw new Error("Index out of range.");

		return Atomics.load(lock,index)!==UNLOCKED;
	}

	isLocked(lock,index=0) {
		return this.locked(lock,index);
	}

	isLockOwner(lock,index=0) {
		if (!lock) throw new Error("Missing lock.");
		if (!(lock instanceof Int32Array)) throw new Error("Invalid lock; must be Int32Array.");
		if (index===undefined || index===null) throw new Error("Missing index.");
		if (typeof index!=="number") throw new Error("Invalid index.");
		if (index<0 || index>lock.length) throw new Error("Index out of range.");

		return Atomics.load(lock,index)===this.threadId;
	}

	waitForLock(lock,index=0,frequency=1,timeout=100) {
		if (!lock) throw new Error("Missing lock.");
		if (!(lock instanceof Int32Array)) throw new Error("Invalid lock; must be Int32Array.");
		if (index===undefined || index===null) throw new Error("Missing index.");
		if (typeof index!=="number") throw new Error("Invalid index.");
		if (index<0 || index>lock.length) throw new Error("Index out of range.");
		if (typeof frequency!=="number") throw new Error("Invalid frequency; must be a number.");
		if (typeof timeout!=="number") throw new Error("Invalid timeout; must be a number.");

		return new Promise((resolve,reject)=>{
			try {
				let start = Date.now();

				const attempt = ()=>{
					if (Date.now()-start>=timeout) return resolve(false);
					if (this.lock(lock,index)) return resolve(true);
					setTimeout(attempt,frequency);
				};

				attempt();
			}
			catch (ex) {
				return reject(ex);
			}
		});
	}

	waitLock(lock,index=0,frequency=1,timeout=100) {
		return this.waitForLock(lock,index,frequency,timeout);
	}

	blockUntilLocked(lock,index=0) {
		if (!lock) throw new Error("Missing lock.");
		if (!(lock instanceof Int32Array)) throw new Error("Invalid lock; must be Int32Array.");
		if (index===undefined || index===null) throw new Error("Missing index.");
		if (typeof index!=="number") throw new Error("Invalid index.");
		if (index<0 || index>lock.length) throw new Error("Index out of range.");

		while (true) {
			if (this.locked(lock,index) && this.isLockOwner(lock,index)) return;
			this.lock(lock,index);
		}
	}

	blockLock(lock,index=0) {
		return this.blockUntilLocked(lock,index);
	}
}

module.exports = new WorkerUtils();
