// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const Path = require("path");

const STACK_PARSER = /^\s*(at)\s((.+)\s\(|)(.+)(:(\d+))(:(\d+))\)?$|^\s*(at)\s(.+)\s\((<anonymous>)\)?$/;

/**
 * Utilities for working with modules, or understanding the code itself.
 */
class ModuleUtils {
	/**
	 * Resolves a given filename relative to a given module.
	 *
	 * @param  {Module} mod
	 * @param  {string} filename
	 *
	 * @return {string}
	 */
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

	/**
	 * Requires a filename, relative to a given module.
	 *
	 * @param  {Module} mod
	 * @param  {string} filename
	 *
	 * @return {string}
	 */
	require(mod,filename) {
		filename = this.resolve(mod,filename);
		return filename && require(filename) || null;
	}

	/**
	 * Removes a module from the require cache, thus making it
	 * reload again if required. Also, any children that
	 * were loaded by the given module are also removed.
	 *
	 * Returns the total number of modules removed.
	 *
	 * You may optional indicate if the unrequire should remove
	 * dependant children as well. This can have unwanted side-effects
	 * so use with caution.
	 *
	 * @param  {module|string} mod
	 * @param  {boolean} [removeChildren=false] removeChildren
	 * @return {number}
	 */
	unrequire(mod,removeChildren=false) {
		if (typeof mod!=="string" && mod.id) mod = mod.id;
		if (typeof mod!=="string") throw new Error("module argument must be a module or a string.");

		let count = 0;
		let cached = require.cache[mod];
		if (cached) {
			if (removeChildren) {
				(cached.children||[]).forEach((childmod)=>{
					count += this.unrequire(childmod,removeChildren);
				});
			}
			delete require.cache[mod];
			count += 1;
		}

		return count;
	}

	/**
	 * Returns the filename of the code that called this function.
	 * This works by throwing and catching an exception and then reading the stack
	 * trace of the exception and finding the info it needs.
	 *
	 * *depth* specifies how far back into the stack we should go. So if you want
	 * the caller of this function, set it to 0 (or omit it). If you want the
	 * caller of the caller of this function, set it to 1. etc.
	 *
	 * @param {number} depth
	 *
	 * @return {string}
	 */
	moduleSource(mod,depth=0) {
		if (!mod) throw new Error("Missing module.");
		depth = Math.min(999,Math.max(0,depth));

		let stack = this.moduleStack(mod,depth,depth+1);
		return stack[0];
	}

	/**
	 * Returns the module require stack for the given module. That is, how
	 * was the given module imported (required) into the current execution.
	 *
	 * This returns an array of strings, which are the module
	 * ancestor module.id values.
	 *
	 * @param  {[type]} mod            [description]
	 * @param  {Number} [start=0]      [description]
	 * @param  {[type]} [end=start+10] [description]
	 * @return {[type]}                [description]
	 */
	moduleStack(mod,start=0,end=start+10) {
		if (!mod) throw new Error("Missing module.");

		start = Math.min(999,Math.max(0,start));
		end = Math.min(999,Math.max(0,end));

		let stack = [];
		let current = mod;
		while (current) {
			stack.push(current.id);
			current = current.parent;
		}

		if (start>0) stack = stack.slice(start);
		if (end>start) stack = stack.slice(0,end-start);

		return stack;
	}
}

module.exports = new ModuleUtils();
