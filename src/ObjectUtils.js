// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

class ObjectUtils {
	isPlainObject(obj) {
		if (obj===undefined || obj===null) return false;
		if (typeof obj!=="object") return false;
		return Object.getPrototypeOf(obj)===Object.prototype || Object.getPrototypeOf(obj)===null;
	}

	extend(target,...sources) {
		if (target===undefined || target===null) target = {};
		sources.forEach((source)=>{
			Object.assign(target,source);
			Object.keys(source).forEach((key)=>{
				if (typeof source[key]==="object") {
					this.extend(target[key],source[key]);
				}
			});
		});
		return target;
	}

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

	get(obj,path,defaultValue=undefined,delimiter=".") {
		if (obj==undefined || obj===null) return undefined;
		if (path=== undefined || path===null || path==="") return obj===undefined ?  defaultValue : obj;
		if (!(path instanceof Array)) path = ""+path;
		if (typeof path==="string") path = path.split(delimiter);

		if (path.length<1) return obj===undefined ?  defaultValue : obj;

		let next = path.shift();
		let value = this.get(obj[next],path,defaultValue,delimiter);
		if (value===undefined) value = defaultValue;
		return value;
	}

	set(obj,path,value,delimiter=".") {
		if (obj==undefined || obj===null) return obj;
		if (path=== undefined || path===null || path==="") return obj;
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
