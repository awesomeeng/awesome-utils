// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const FS = require("fs");

class FSUtils {
	exists(path,callback) {
		try {
			FS.statSync(path);
			callback(true);
		}
		catch (ex) {
			callback(false);
		}
	}

	existsSync(path) {
		try {
			FS.statSync(path);
			return true;
		}
		catch (ex) {
			return false;
		}
	}
}

module.exports = new FSUtils();
