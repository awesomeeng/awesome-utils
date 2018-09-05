// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const FS = require("fs");
const Path = require("path");

const ArrayUtils = require("./ArrayUtils");

class FSUtils {
	exists(path) {
		return new Promise(async (resolve,reject)=>{
			try {
				resolve(await !!this.stat(path));
			}
			catch (ex) {
				return reject(ex);
			}
		});
	}

	existsSync(path) {
		try {
			return !!this.statSync(path);
		}
		catch (ex) {
			return false;
		}
	}

	list(path,filesOnly=true) {
		return new Promise(async (resolve,reject)=>{
			try {
				let files = await _list.call(this,path,filesOnly);
				files = files.map((fileObj)=>{
					return fileObj.file;
				});

				resolve(files);
			}
			catch (ex) {
				return reject(ex);
			}
		});
	}

	listSync(path,filesOnly=true){
		let files = _listSync.call(this,path,filesOnly);
		files = files.map((fileObj)=>{
			return fileObj.file;
		});

		return files;
	}

	recursiveList(path,matcher,filesOnly=true) {
		if (!path) throw new Error("Missing path.");
		if (typeof path!=="string") throw new Error("Invalid path.");

		path = path.replace(/\\\\|\\/g,"/");

		if (!matcher) matcher = AllFilesMatcher();
		if (matcher instanceof RegExp) matcher = RegExpFilesMatcher(matcher);
		if (!(matcher instanceof Function)) throw new Error("Invalid matcher.");

		return new Promise(async (resolve,reject)=>{
			try {
				let found = await _list.call(this,path);

				let files = ArrayUtils.flatten(await Promise.all(found.map((fileObj)=>{
					return new Promise(async (resolve,reject)=>{
						try {
							let files = [];
							let filename = fileObj.file;

							if (!fileObj.stat) fileObj.stat = await this.stat(fileObj.resolved);

							let isDir = fileObj.stat.isDirectory();
							if (isDir) {
								if (!filesOnly) files.push(filename);

								let subfiles = await this.recurse(path.endsWith("/") ? path+filename : path+"/"+filename,matcher,filesOnly);
								subfiles.forEach((file)=>{
									files.push(filename+"/"+file);
								});
							}
							else {
								let matches =  matcher(fileObj.resolved);
								if (matches) files.push(filename);
							}

							resolve(files);
						}
						catch (ex) {
							return reject(ex);
						}
					});
				})));

				resolve(files);
			}
			catch (ex) {
				return reject(ex);
			}
		});
	}

	recursiveListSync(path,matcher,filesOnly=true) {
		if (!path) throw new Error("Missing path.");
		if (typeof path!=="string") throw new Error("Invalid path.");

		path = path.replace(/\\\\|\\/g,"/");

		if (!matcher) matcher = AllFilesMatcher();
		if (matcher instanceof RegExp) matcher = RegExpFilesMatcher(matcher);
		if (!(matcher instanceof Function)) throw new Error("Invalid matcher.");

		let found = _listSync.call(this,path);

		let files = ArrayUtils.flatten(found.map((fileObj)=>{
			let files = [];
			let filename = fileObj.file;

			if (!fileObj.stat) fileObj.stat = this.statSync(fileObj.resolved);

			let isDir = fileObj.stat.isDirectory();
			if (isDir) {
				if (!filesOnly) files.push(filename);

				let subfiles = this.recursiveListSync(path.endsWith("/") ? path+filename : path+"/"+filename,matcher,filesOnly);
				subfiles.forEach((file)=>{
					files.push(filename+"/"+file);
				});
			}
			else {
				let matches =  matcher(fileObj.resolved);
				if (matches) files.push(filename);
			}

			return files;
		}));

		return files;
	}

	recursiveMkdirSync(path) {
		if (!path) throw new Error("Missing path.");
		if (typeof path!=="string") throw new Error("Invalid path.");

		path = path.replace(/\\\\|\\/g,"/");

		let paths = path.split(/\//g);
		paths.forEach((p,i)=>{
			let before = paths.slice(0,i).join("/");
			let filename = (before ? before+"/" : "")+p;

			let stat = this.statSync(filename);
			if (!stat) return FS.mkdirSync(filename);
			if (!stat.isDirectory()) throw new Error("Invalid directory "+filename);
		});
	}

	/**
	 * This removes the given path and everything it contains.  IT IS HIGHLY
	 * DESTRUCTIVE AND SHOULD BE USED WITH CARE.
	 *
	 * @param  {[type]} path [description]
	 * @return {[type]}      [description]
	 */
	recursiveRmdirSync(path) {
		if (!path) throw new Error("Missing path.");
		if (typeof path!=="string") throw new Error("Invalid path.");

		path = path.replace(/\\\\|\\/g,"/");

		let stat = this.statSync(path);
		if (!stat) throw new Error("Invalid path, not found: "+path);

		if (stat.isDirectory()) {
			let files = this.recursiveListSync(path,null,false);

			files.reverse().forEach((file)=>{
				file = (path.endsWith("/") ? path : path+"/")+file;
				let stat = this.statSync(file);
				if (stat.isDirectory()) FS.rmdirSync(file);
				else FS.unlinkSync(file);
			});

			FS.rmdirSync(path);
		}
		else {
			throw new Error("Cannot use recursiveRmdirSync on a non-directory: "+path);
		}
	}

	stat(path) {
		return new Promise((resolve,reject)=>{
			try {
				FS.stat(path,(err,stats)=>{
					if (err) reject(err);
					resolve(stats);
				});
			}
			catch (ex) {
				return resolve(null);
			}
		});
	}

	statSync(path) {
		try {
			return FS.statSync(path);
		}
		catch (ex) {
			return null;
		}
	}

}

const _list = function _list(path,filesOnly) {
	return new Promise((resolve,reject)=>{
		try {
			FS.readdir(path,async (err,files)=>{
				if (err) return reject(err);

				files = files.map((file)=>{
					return {
						file,
						resolved: Path.resolve(path,file),
						stat: null
					};
				});

				if (filesOnly) {
					files = await Promise.all(files.map((fileObj)=>{
						return new Promise(async (resolve,reject)=>{
							try {
								let stat = await this.stat(fileObj.resolved);
								fileObj.stat = stat;
								let dir = stat.isDirectory();
								resolve(dir ? null : fileObj);
							}
							catch (ex) {
								return reject(ex);
							}
						});
					}));
					files = ArrayUtils.compact(files);
				}

				resolve(files);
			});
		}
		catch (ex) {
			return reject(ex);
		}
	});
};

const _listSync = function _listSync(path,filesOnly) {
	let files = FS.readdirSync(path);

	files = files.map((file)=>{
		return {
			file,
			resolved: Path.resolve(path,file),
			stat: null
		};
	});

	if (filesOnly) {
		files = files.filter((fileObj)=>{
			let stat = this.statSync(fileObj.resolved);
			fileObj.stat = stat;
			return !stat.isDirectory();
		});
	}

	return files;
};

const AllFilesMatcher = function AllFilesMatcher() {
	return () => true;
};

const RegExpFilesMatcher = function RegExpFilesMatcher(regex) {
	if (!(regex instanceof RegExp)) throw new Error("Invalid regex.");
	return (filename)=>{
		return !!filename.match(regex);
	};
};

module.exports = new FSUtils();
