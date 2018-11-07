// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const $NUMBER = Symbol("number");

class SequenceNumber {
	constructor() {
		this[$NUMBER] = 10000000;
	}

	next() {
		return ++this[$NUMBER];
	}
}

module.exports = new SequenceNumber();
