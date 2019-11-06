// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const Net = require("net");
const Socket = Net.Socket;

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

	portInUse(port,host="127.0.0.1",timeout=250) {
		return new Promise((resolve,reject)=>{
			try {
				let inuse = null;
				let error = null;

				let socket = new Socket();
				socket.setTimeout(timeout);

				socket.once("connect",()=>{
					inuse = true;
					socket.destroy();
				});

				socket.once("timeout",()=>{
					inuse = false;
					socket.destroy();
				});

				socket.once("error",(err)=>{
					if (err.code === 'ECONNREFUSED') {
						inuse = false;
						socket.destroy();
					}
					else {
						error = err;
					}
				});

				socket.once("close",()=>{
					if (error) reject(error);
					else resolve(inuse);
				});

				socket.connect(port,host);
			}
			catch (ex) {
				return reject(ex);
			}
		});

	}
}

module.exports = new NetUtils();
