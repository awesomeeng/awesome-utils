// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

class DateUtils {
	get SECOND() {
		return 1000;
	}

	get MINUTE() {
		return this.SECOND*60;
	}

	get HOUR() {
		return this.MINUTE*60;
	}

	get DAY() {
		return this.HOUR*24;
	}

	get WEEK() {
		return this.DAY*7;
	}

	from(date) {
		if (!date) return null;
		if (typeof date==="number") return new Date(date);
		if (typeof date==="string") {
			if (date.match(/^\d+$/)) return new Date(parseInt(date));
			let d = new Date(date);
			if (d.toString()!=="Invalid Date") return d;
		}
		if (date instanceof Date) return date;
		throw new Error("Unknown date format.");
	}
}

module.exports = new DateUtils();
