// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

/*
	Tests for .......
 */

"use strict";

const assert = require("assert");

const ObjectUtils = require("../src/ObjectUtils");

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
		assert(obj.one);
		assert(!(obj.one.two && !obj.one.two.three));
		assert(obj.two);
		assert(!obj.two.three);
	});



});
