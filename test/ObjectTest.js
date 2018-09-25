// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

/*
	Tests for .......
 */

"use strict";

const assert = require("assert");

const ObjectUtils = require("../src/Object");

describe("ObjectUtils",function(){
	let base = {
		one: {
			two: {
				three: 123
			}
		},
		two: {
			three: "3"
		}
	};

	it("isPlainObject",function(){
		assert.equal(ObjectUtils.isPlainObject(undefined),false);
		assert.equal(ObjectUtils.isPlainObject(null),false);
		assert.equal(ObjectUtils.isPlainObject(true),false);
		assert.equal(ObjectUtils.isPlainObject(false),false);
		assert.equal(ObjectUtils.isPlainObject(""),false);
		assert.equal(ObjectUtils.isPlainObject("asdf"),false);
		assert.equal(ObjectUtils.isPlainObject(0),false);
		assert.equal(ObjectUtils.isPlainObject(123),false);
		assert.equal(ObjectUtils.isPlainObject(123.45),false);
		assert.equal(ObjectUtils.isPlainObject(()=>{}),false);
		assert.equal(ObjectUtils.isPlainObject(/asdf/),false);
		assert.equal(ObjectUtils.isPlainObject(new Date()),false);
		assert.equal(ObjectUtils.isPlainObject([1,2,3]),false);
		assert.equal(ObjectUtils.isPlainObject({}),true);
		assert.equal(ObjectUtils.isPlainObject({
			one: 1,
			two: 2
		}),true);
		assert.equal(ObjectUtils.isPlainObject(Object.create(null)),true);
		assert.equal(ObjectUtils.isPlainObject(Object.create({})),false);
		assert.equal(ObjectUtils.isPlainObject(new Object()),true);
	});

	it("extend",function(){
		let extended = ObjectUtils.extend({},base,{
			two: {
				three: {
					four: 234
				}
			},
			five: 5
		},{
			six: {
				seven: "7"
			}
		});
		assert(base!==extended);
		assert(base.one);
		assert(base.one.two);
		assert(base.one.two.three);
		assert(base.two);
		assert(base.two.three);
		assert(!base.five);
		assert(!base.six);
		assert.deepStrictEqual(base.one.two.three,123);
		assert.notDeepStrictEqual(extended.two.three,"3");
		assert.deepStrictEqual(extended.two.three,{
			four: 234
		});
		assert.deepStrictEqual(extended.five,5);
		assert.deepStrictEqual(extended.six.seven,"7");
	});

	it("deepFreeze",function(){
		let obj = {
			one: {
				two: {
					three: 123
				}
			}
		};
		ObjectUtils.deepFreeze(obj);
		assert.equal(obj.one.two.three,123);
		assert.throws(()=>{
			obj.one.two.three = 456;
		});
		assert.equal(obj.one.two.three,123);
	});

	it("paths",function(){
		let obj = ObjectUtils.extend({},base);

		assert.deepStrictEqual(ObjectUtils.paths(obj),["one","one.two","one.two.three","two","two.three"]);
		assert.deepStrictEqual(ObjectUtils.paths(obj,"one"),["one","one.two","one.two.three"]);
		assert.deepStrictEqual(ObjectUtils.paths(obj,null,true),["one.two.three","two.three"]);
		assert.deepStrictEqual(ObjectUtils.paths(obj,"one",true),["one.two.three"]);
		assert.deepStrictEqual(ObjectUtils.paths(obj,"one",true,"/"),["one/two/three"]);
	});

	it("get",function(){
		let obj = ObjectUtils.extend({},base);

		assert.deepStrictEqual(ObjectUtils.get(obj,"one.two.three"),123);
		assert.deepStrictEqual(ObjectUtils.get(obj,"two.three"),"3");
		assert.deepStrictEqual(ObjectUtils.get(obj,"four.five"),undefined);
		assert.deepStrictEqual(ObjectUtils.get(obj,"four.five","red"),"red");
		assert.deepStrictEqual(ObjectUtils.get(obj,"four.five",null),null);
		assert.deepStrictEqual(ObjectUtils.get(obj,"one/two/three",null,"/"),123);
		assert.deepStrictEqual(ObjectUtils.get(obj,"one"),{
			two: {
				three: 123
			}
		});
	});

	it("set",function(){
		let obj = ObjectUtils.extend({},base);

		ObjectUtils.set(obj,"six.seven.eight",678);
		ObjectUtils.set(obj,"nine",{
			ten: 910
		});
		ObjectUtils.set(obj,"eleven/twelve",1112,"/");
		ObjectUtils.set(obj,"one.thirteen",113);
		assert.deepStrictEqual(obj,{
			one: {
				two: {
					three: 123
				},
				thirteen: 113
			},
			two: {
				three: "3"
			},
			six: {
				seven: {
					eight: 678
				}
			},
			nine: {
				ten: 910
			},
			eleven: {
				twelve: 1112
			}
		});
	});

	it("delete",function(){
		let obj = ObjectUtils.extend({},base);

		ObjectUtils.delete(obj,"one.two.three");
		ObjectUtils.delete(obj,"two/three",false,"/");
		assert(!obj.one);
		assert(obj.two);
		assert(!obj.two.three);
	});
});
