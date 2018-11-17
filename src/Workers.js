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
}

module.exports = new WorkerUtils();
