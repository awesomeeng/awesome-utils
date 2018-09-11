// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

class RandomUtils {
	integer(min,max) {
		if (!min) min = 0;
		if (!max) max = Number.MAX_SAFE_INTEGER;
		return Math.floor((Math.random()*(max-min))+min);
	}

	float(min,max) {
		if (!min) min = 0;
		if (!max) max = Number.MAX_VALUE;
		return (Math.random()*(max-min))+min;
	}

	decimal(min,max) {
		return this.float(min,max);
	}

	byte() {
		return this.integer(0,256);
	}

	character(optionalChars) {
		return optionalChars ? optionalChars[this.integer(0,optionalChars.length)] : String.fromCharCode(this.integer(32,128));
	}

	string(length,characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890") {
		if (!length || length<1) return "";
		return new Array(length).fill(0).map(()=> this.character(characters)).join("");
	}

}

module.exports = new RandomUtils();
