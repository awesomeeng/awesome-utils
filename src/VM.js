// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const STACK_PARSER = /^\s*(at)\s((.+)\s\(|)(.+)(:(\d+))(:(\d+))\)?$|^\s*(at)\s(.+)\s\((<anonymous>)\)?$/;

/**
 * Utilities for working with the underlying virtual machine.
 */
class VMUtils {
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
	executionLine(depth=0) {
		depth = Math.min(999,Math.max(0,depth));

		let stack = this.executionStack(depth,depth+1);
		return stack[0].line;
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
	executionSource(depth=0) {
		depth = Math.min(999,Math.max(0,depth));

		let stack = this.executionStack(depth,depth+1);
		return stack[0].source;
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
	 * @return {string}
	 */
	executionSourceAndLine(depth=0) {
		depth = Math.min(999,Math.max(0,depth));

		let stack = this.executionStack(depth,depth+1);
		return stack[0].source+":"+stack[0].line;
	}

	/**
	 * Returns the currently running stack trace, as an array of objects (see below)
	 * that describes where in the current execution stack the application
	 * currently is.
	 *
	 * The returned array is comprised of stack entry objects which
	 * have the following shape:
	 *
	 * ```
	 * entry = {
	 *   entry: string - the full stack trace entry string
	 *   method: the method name from the stack trace entry
	 *   source: the filename the method is in
	 *   line: the line number the execution is on
	 *   position: the line position the execution is on
	 * }
	 * ```
	 *
	 * @param  {Number} [start=0]
	 * @param  {Number} [end=10]
	 * @return {Array<Object>}
	 */
	executionStack(start=0,end=start+10) {
		start = Math.min(999,Math.max(0,start));
		end = Math.min(999,Math.max(0,end));

		let saved = Error.stackTraceLimit;
		if (start+end>=saved) Error.stackTraceLimit = start+end+1;

		let obj = {};
		Error.captureStackTrace(obj);
		Error.stackTraceLimit = saved;
		let stack = obj.stack.split(/\n/g).slice(1);

		stack = stack.map((entry)=>{
			entry = entry.trim();
			let match = entry.match(STACK_PARSER);

			return {
				entry: entry,
				method: match && match[3] || match && match[10] || "",
				source: match && match[4] || match && match[11] || "",
				line: match && match[6] && parseInt(match[6]) || 0,
				position: match && match[8] && parseInt(match[8]) || 0
			};
		});

		if (start>0) stack = stack.slice(start);
		if (end>start) stack = stack.slice(0,end-start);

		return stack;
	}
}

module.exports = new VMUtils();
