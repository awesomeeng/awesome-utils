// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

/*
	Tests for .......
 */

"use strict";

const assert = require("assert");

const PromiseUtils = require("../src/Promise");

describe("AwesomeUtils.Promise",function(){
	it("sleep",async function(){
		let start,spent;

		start = Date.now();
		await PromiseUtils.sleep(25);
		spent = Date.now()-start;
		assert(spent>=25);

		start = Date.now();
		await PromiseUtils.sleep(0);
		spent = Date.now()-start;
		assert(spent<5);

		start = Date.now();
		await PromiseUtils.sleep(-1);
		spent = Date.now()-start;
		assert(spent<5);

		assert.throws(()=>{
			PromiseUtils.sleep();
		});
		assert.throws(()=>{
			PromiseUtils.sleep(null);
		});
		assert.throws(()=>{
			PromiseUtils.sleep("asdf");
		});
	});

	it("series",async function(){
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



});
