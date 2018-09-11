// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const Net = require("net");

class NetUtils {
	randomPort() {
		return new Promise((resolve,reject)=>{
			try {
				let port = null;
				let server = Net.createServer();
				server.once("listening",()=>{
					port = server && server.address().port || null;
					server.close();
				});
				server.once("error",()=>{
					server.close();
				});
				server.once("close",()=>{
					if (port) resolve(port);
					else reject();
				});
				server.listen({
					host: "127.0.0.1",
					port: 0,
					exclusive: true
				});
			}
			catch (ex) {
				return reject(ex);
			}
		});
	}

	portInUse(port,host="127.0.0.1") {
		return new Promise((resolve,reject)=>{
			try {
				let inuse = null;
				let server = Net.createServer();
				server.once("listening",()=>{
					inuse = false;
					server.close();
				});
				server.once("error",()=>{
					inuse = true;
					server.close();
				});
				server.once("close",()=>{
					resolve(inuse);
				});
				server.listen({
					host,
					port,
					exclusive: true
				});
			}
			catch (ex) {
				return reject(ex);
			}
		});

	}
}

module.exports = new NetUtils();
