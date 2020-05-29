// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const assert = require("assert");


/**
 * Object utility functions.
 */
class ObjectUtils {
	/**
	 * Returns true oif the given object is a "plain" javascript object, meaning it
	 * doesnt inherit from some other type of js object like an array, date, error, etc.
	 *
	 * @param  {Object}  obj
	 * @return {Boolean}
	 */
	isPlainObject(obj) {
		if (obj===undefined || obj===null) return false;
		if (typeof obj!=="object") return false;
		return Object.getPrototypeOf(obj)===Object.prototype || Object.getPrototypeOf(obj)===null;
	}

	/**
	 * deep clone of each given source into the target.
	 *
	 * @param  {Object|null} target
	 * @param  {Object} sources
	 * @return {Object}
	 */
	extend(target,...sources) {
		if (target===undefined || target===null) target = {};
		sources.forEach((source)=>{
			if (source===undefined || source===null) return;
			if (source instanceof Array || this.isPlainObject(source)) {
				Object.keys(source).forEach((key)=>{
					let src = source[key];
					if (src instanceof Array || this.isPlainObject(src)) {
						let tgt = target[key];
						if (src instanceof Array) tgt = tgt instanceof Array ? tgt : [];
						else tgt = this.isPlainObject(tgt) ? tgt : {};
						target[key] = this.extend(tgt,src);
					}
					else {
						target[key] = src;
					}
				});
			}
			else {
				target = source;
			}
		});
		return target;
	}

	deepStrictEqual(a,b) {
		try {
			assert.deepStrictEqual(a,b);
			return true;
		}
		catch (ex) {
			if (ex instanceof assert.AssertionError) return false;
			throw ex;
		}
	}

	/**
	 * Call Object.freeze() on the object and each property of the
	 * object, essentially freezing the entire structure.
	 *
	 * @param  {Object} obj
	 * @return {void}
	 */
	deepFreeze(obj) {
		if (obj===undefined || obj===null) return;
		if (typeof obj!=="object") return;

		Object.freeze(obj);
		Object.keys(obj).forEach((key)=>{
			this.deepFreeze(obj[key]);
		});
	}

	/**
	 * Return an array of all possible paths for a given object.
	 *
	 * @param  {Object}  obj
	 * @param  {string}  path
	 * @param  {Boolean} [leafsOnly=false]
	 * @param  {String}  [delimiter="."]
	 * @return {Array<string>}
	 */
	paths(obj,path,leafsOnly=false,delimiter=".") {
		if (obj===undefined || obj===null) return [];
		if (typeof obj!=="object") return [];

		if (path) obj = this.get(obj,path,undefined,delimiter);

		let found = [];
		Object.keys(obj).forEach((key)=>{
			let children = this.paths(obj[key],null,leafsOnly,delimiter);
			if (children.length===0 || (children.length>0 && !leafsOnly)) found.push(key);
			children.forEach((child)=>{
				found.push(key+delimiter+child);
			});
		});

		if (path) {
			found = found.map((key)=>{
				return path+delimiter+key;
			});
			if (!leafsOnly) found.unshift(path);
		}

		return found;
	}

	/**
	 * Get a value for a given path of a given object.
	 *
	 * @param  {Object} obj
	 * @param  {string} path
	 * @param  {*} [defaultValue=undefined]
	 * @param  {String} [delimiter="."]
	 * @return {*}
	 */
	get(obj,path,defaultValue=undefined,delimiter=".") {
		if (obj===undefined || obj===null) return obj;
		if (path===undefined || path===null || path==="") return obj===undefined ?  defaultValue : obj;
		if (!(path instanceof Array)) path = ""+path;
		if (typeof path==="string") path = path.split(delimiter);

		if (path.length<1) return obj===undefined ?  defaultValue : obj;

		let next = path.shift();
		let value = this.get(obj[next],path,defaultValue,delimiter);
		if (value===undefined) value = defaultValue;
		return value;
	}

	/**
	 * Set a value for a given path of a given object.
	 *
	 * @param {Object} obj
	 * @param {string} path
	 * @param {*} value
	 * @param {String} [delimiter="."]
	 * @return {Object}
	 */
	set(obj,path,value,delimiter=".") {
		if (obj===undefined || obj===null) return obj;
		if (path===undefined || path===null || path==="") return obj;
		if (!(path instanceof Array)) path = ""+path;
		if (typeof path==="string") path = path.split(delimiter);

		if (path.length<1) return obj;

		let next = path.shift();
		if (next===undefined || next===null || next==="") return obj;

		if (path.length<1) {
			obj[next] = value;
		}
		else {
			if (obj[next]===undefined || obj[next]===null) obj[next] = {};
			return this.set(obj[next],path,value,delimiter);
		}

		return obj;
	}

	/**
	 * Delete a value for a given path of a given object.
	 *
	 * @param  {Object}  obj
	 * @param  {string}  path
	 * @param  {Boolean} [prune=true]
	 * @param  {String}  [delimiter="."]
	 * @return {Object}
	 */
	delete(obj,path,prune=true,delimiter=".") {
		if (obj==undefined || obj===null) return obj;
		if (path=== undefined || path===null || path==="") return obj;
		if (!(path instanceof Array)) path = ""+path;
		if (typeof path==="string") path = path.split(delimiter);

		if (path.length<1) return obj;

		let next = path.shift();
		if (next===undefined || next===null || next==="") return obj;

		if (path.length<1) {
			delete obj[next];
		}
		else {
			if (obj[next]===undefined || obj[next]===null) return obj;
			this.delete(obj[next],path,prune,delimiter);
			if (prune && Object.keys(obj[next]).length<1) delete obj[next];
		}

		return obj;
	}
}

module.exports = new ObjectUtils();
