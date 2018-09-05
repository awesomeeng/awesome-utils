// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const Moment = require("moment");

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

	duration(s) {
		if (!s) return 0;
		if (typeof s==="number") return Math.floor(s);

		s = s.replace(/\s?years?|\s?yrs?/g,"Y");
		s = s.replace(/\s?months?|\s?mos?/g,"M");
		s = s.replace(/\s?days?|\s?dys?/g,"D");
		s = s.replace(/\s?hours?|\s?hrs?/g,"H");
		s = s.replace(/\s?minutes?|\s?mins?/g,"X");
		s = s.replace(/\s?seconds?|\s?secs?/g,"S");

		if (s.startsWith("P")) s = s.slice(1);
		if (s.indexOf("T")<0) {
			let match = s.match(/\d+H|\d+X|\d+S/);
			if (match) s = s.slice(0,match.index)+"T"+s.slice(match.index);
		}
		s = s.replace(/X/,"M");
		s = s.replace(/\s+|,/g,"");
		if (!s.startsWith("P")) s = "P"+s;
		s = s.toUpperCase();

		return Moment.duration(s).asMilliseconds();
	}
}

module.exports = new DateUtils();
