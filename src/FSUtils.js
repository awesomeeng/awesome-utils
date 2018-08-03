// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const FS = require("fs");

class FSUtils {
	exists(path) {
		return new Promise((resolve,reject)=>{
			try {
				FS.stat(path,(err,stats)=>{
					resolve(!err && stats);
				});
			}
			catch (ex) {
				return reject(ex);
			}
		});
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
