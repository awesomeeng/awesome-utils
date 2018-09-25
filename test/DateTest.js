// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

/*
	Tests for .......
 */

"use strict";

const assert = require("assert");

const DateUtils = require("../src/Date");

describe("DateUtils",function(){
	it("constants",function(){
		assert.equal(DateUtils.SECOND,1000);
		assert.equal(DateUtils.MINUTE,1000*60);
		assert.equal(DateUtils.HOUR,1000*60*60);
		assert.equal(DateUtils.DAY,1000*60*60*24);
	});

	it("from",function(){
		let now = Date.now();

		assert(DateUtils.from(now) instanceof Date);
		assert(DateUtils.from(new Date()) instanceof Date);
		assert(DateUtils.from(""+now) instanceof Date);
		assert(DateUtils.from("1969-07-20") instanceof Date);
		assert(DateUtils.from("1969-07-20T00:00:00.000Z") instanceof Date);
		assert.equal(DateUtils.from(now).getTime(),now);
		assert.equal(DateUtils.from(new Date(now)).getTime(),now);
		assert.equal(DateUtils.from(""+now).getTime(),now);
		assert.equal(DateUtils.from(new Date(now).toISOString().replace(/T.*$/,"")).getTime(),DateUtils.floorDays(now).getTime());
		assert.equal(DateUtils.from(new Date(now).toISOString()).getTime(),now);
	});

	it("computeDayOfYear",function(){
		let one = new Date("2050-01-01T123:59:59.999Z");
		let two = new Date("2050-01-02T12:34:56.789Z");
		let three = new Date("2050-01-03T09:09:09.009Z");
		let thirtythree = new Date("2050-02-02T13:00:59.000Z");

		assert.equal(DateUtils.computeDayOfYear(one),1);
		assert.equal(DateUtils.computeDayOfYear(two),2);
		assert.equal(DateUtils.computeDayOfYear(three),3);
		assert.equal(DateUtils.computeDayOfYear(thirtythree),33);
	});

	it("floor",function(){
		let now = new Date("1969-07-21T12:34:56.789Z");
		let secs = new Date("1969-07-21T12:34:56.000Z").getTime();
		let mins = new Date("1969-07-21T12:34:00.000Z").getTime();
		let hours = new Date("1969-07-21T12:00:00.000Z").getTime();
		let days = new Date("1969-07-21T00:00:00.000Z").getTime();

		assert.equal(DateUtils.floor(now,DateUtils.SECOND).getTime(),secs);
		assert.equal(DateUtils.floor(now,DateUtils.MINUTE).getTime(),mins);
		assert.equal(DateUtils.floor(now,DateUtils.HOUR).getTime(),hours);
		assert.equal(DateUtils.floor(now,DateUtils.DAY).getTime(),days);
		assert.equal(DateUtils.floorSeconds(now).getTime(),secs);
		assert.equal(DateUtils.floorMinutes(now).getTime(),mins);
		assert.equal(DateUtils.floorHours(now).getTime(),hours);
		assert.equal(DateUtils.floorDays(now).getTime(),days);
	});

	it("format",function(){
		let now = new Date("1969-01-02T03:04:05.006Z");
		assert.strictEqual(DateUtils.format(now,"YY"),"69");
		assert.strictEqual(DateUtils.format(now,"YYYY"),"1969");
		assert.strictEqual(DateUtils.format(now,"M"),"1");
		assert.strictEqual(DateUtils.format(now,"MM"),"01");
		assert.strictEqual(DateUtils.format(now,"MMM"),"Jan");
		assert.strictEqual(DateUtils.format(now,"MMMM"),"January");
		assert.strictEqual(DateUtils.format(now,"D"),"2");
		assert.strictEqual(DateUtils.format(now,"DD"),"02");
		assert.strictEqual(DateUtils.format(now,"DDD"),"2");
		assert.strictEqual(DateUtils.format(now,"DDDD"),"002");
		assert.strictEqual(DateUtils.format(now,"d"),"4");
		assert.strictEqual(DateUtils.format(now,"dd"),"Th");
		assert.strictEqual(DateUtils.format(now,"ddd"),"Thu");
		assert.strictEqual(DateUtils.format(now,"dddd"),"Thursday");
		assert.strictEqual(DateUtils.format(now,"A"),"AM");
		assert.strictEqual(DateUtils.format(now,"a"),"am");
		assert.strictEqual(DateUtils.format(now,"H"),"3");
		assert.strictEqual(DateUtils.format(now,"HH"),"03");
		assert.strictEqual(DateUtils.format(now,"h"),"3");
		assert.strictEqual(DateUtils.format(now,"hh"),"03");
		assert.strictEqual(DateUtils.format(now,"k"),"4");
		assert.strictEqual(DateUtils.format(now,"kk"),"04");
		assert.strictEqual(DateUtils.format(now,"m"),"4");
		assert.strictEqual(DateUtils.format(now,"mm"),"04");
		assert.strictEqual(DateUtils.format(now,"s"),"5");
		assert.strictEqual(DateUtils.format(now,"ss"),"05");
		assert.strictEqual(DateUtils.format(now,"S"),"6");
		assert.strictEqual(DateUtils.format(now,"SSS"),"006");
		assert.strictEqual(DateUtils.format(now,"z"),"UTC");
		assert.strictEqual(DateUtils.format(now,"Z"),"-00:00");
		assert.strictEqual(DateUtils.format(now,"ZZ"),"-0000");
		assert.strictEqual(DateUtils.format(now,"X"),""+(DateUtils.floorSeconds(now).getTime()/1000+1));
		assert.strictEqual(DateUtils.format(now,"x"),""+now.getTime());

		assert.strictEqual(DateUtils.format(now,"YYYYMMDD"),"19690102");
		assert.strictEqual(DateUtils.format(now,"HHmmssSSS"),"030405006");
		assert.strictEqual(DateUtils.format(now,"YYYY-MM-DD'T'HH:mm:ss.SSS'Z'"),now.toISOString());
		assert.strictEqual(DateUtils.format(now,"ddd MMM DD YYYY HH:mm:ss ZZ"),"Thu Jan 02 1969 03:04:05 -0000");
	});
});
