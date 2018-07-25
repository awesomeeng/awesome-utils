// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const Path = require("path");

class ModuleUtils {
	resolve(mod,filename) {
		if (mod && typeof mod==="string" && !filename) [mod,filename] = [null,mod];
		let root = mod && mod.filename && Path.dirname(mod.filename) || null;
		try {
			return require.resolve(root && Path.resolve(root,filename) || Path.resolve(filename));
		}
		catch (ex) {
			return root && Path.resolve(root,filename) || Path.resolve(filename);
		}
	}

	require(mod,filename) {
		filename = this.resolve(mod,filename);
		return filename && require(filename) || null;
	}
}

module.exports = new ModuleUtils();
