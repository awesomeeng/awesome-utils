// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

/*
	Tests for .......
 */

"use strict";

const assert = require("assert");

const PromiseUtils = require("../src/Promise");

describe("AwesomeUtils.Promise",function(){
	it("sleep",async function(){
		this.slow(250);
		
		let start,spent;

		assert.throws(()=>{
			PromiseUtils.sleep();
		});
		assert.throws(()=>{
			PromiseUtils.sleep(null);
		});
		assert.throws(()=>{
			PromiseUtils.sleep("asdf");
		});

		start = Date.now();
		await PromiseUtils.sleep(10);
		spent = Date.now()-start;
		assert(spent>=10);

		start = Date.now();
		await PromiseUtils.sleep(1);
		spent = Date.now()-start;
		assert(spent<25);

		start = Date.now();
		await PromiseUtils.sleep(-1);
		spent = Date.now()-start;
		assert(spent<25);

	});

	it("series",async function(){
		this.slow(250);

		let x = 2;
		let answer = await PromiseUtils.series([2,3,4,5],(y)=>{
			return new Promise((resolve,reject)=>{
				try {
					setTimeout(()=>{
						x = x*y;
						resolve(x);
					},y);
				}
				catch (ex) {
					return reject(ex);
				}
			});
		});
		assert.deepStrictEqual(answer,[4,12,48,240]);

		assert.deepStrictEqual(await PromiseUtils.series([],()=>{}),[]);

		assert.throws(()=>{
			PromiseUtils.series();
		});
		assert.throws(()=>{
			PromiseUtils.series(1,2,3);
		});
		assert.throws(()=>{
			PromiseUtils.series([1,2,3]);
		});
	});

	it("timeout",async function(){
		this.slow(250);

		try {
			await PromiseUtils.timeout(PromiseUtils.sleep(50),5);
			assert.fail("Promise should not resolve, timeout should have occured.");
		}
		catch (ex) {
			assert(true);
		}

		try {
			await PromiseUtils.timeout(PromiseUtils.sleep(5),50);
			assert(true);
		}
		catch (ex) {
			console.log(ex);
			assert.fail("Promise should resolve before timeout.");
		}
	});




});
