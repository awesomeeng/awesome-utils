// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const Path = require("path");

const ANONYMOUS_RE = /\(<anonymous>\)/;

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
	 * Returns the line number of the code of the line that called the line() function.
	 * This works by throwing and catching an exception and then reading the stack
	 * trace of the exception and finding the info it needs.
	 *
	 * *depth* specifies how far back into the stack we should go. So if you want
	 * the caller of this function, set it to 0 (or omit it). If you want the
	 * caller of the caller of this function, set it to 1. etc.
	 *
	 * @param {number} depth
	 *
	 * @return {number}
	 */
	line(depth=0) {
		try {
			throw new Error("AwesomeUtils.Module.line() call, ignore this error.");
		}
		catch (ex) {
			let stack = ex.stack.split(/\n/g).slice(2);

			depth = Math.min(stack.length-1,Math.max(0,depth));
			while (depth>0) {
				depth -= 1;
				stack.shift();
			}
			return stack[0].replace(/^.*:(\d+):\d+\)$/,"$1");
		}
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
	 * @return {[string]}
	 */
	source(depth=0,removeAnonymous=false) {
		try {
			throw new Error("AwesomeUtils.Module.line() call, ignore this error.");
		}
		catch (ex) {
			let stack = ex.stack.split(/\n/g).slice(2);
			if (removeAnonymous) {
				stack = stack.filter((line)=>{
					return !line.match(ANONYMOUS_RE);
				});
			}

			depth = Math.min(stack.length-1,Math.max(0,depth));
			while (depth>0) {
				depth -= 1;
				stack.shift();
			}
			return stack[0].match(ANONYMOUS_RE) && "anonymous" || stack[0].replace(/^.*\((.*):\d+:.*$/,"$1");
		}
	}

	/**
	 * Returns the filename and line number of the code that called this function.
	 * This works by throwing and catching an exception and then reading the stack
	 * trace of the exception and finding the info it needs.
	 *
	 * *depth* specifies how far back into the stack we should go. So if you want
	 * the caller of this function, set it to 0 (or omit it). If you want the
	 * caller of the caller of this function, set it to 1. etc.
	 *
	 * @param {number} depth
	 *
	 * @return {[string]}
	 */
	sourceAndLine(depth=0) {
		try {
			throw new Error("AwesomeUtils.Module.line() call, ignore this error.");
		}
		catch (ex) {
			let stack = ex.stack.split(/\n/g).slice(2);

			depth = Math.min(stack.length-1,Math.max(0,depth));
			while (depth>0) {
				depth -= 1;
				stack.shift();
			}
			return stack[0].replace(/^.*\((.*):(\d+):.*$/,"$1:$2");
		}
	}
}

module.exports = new ModuleUtils();
