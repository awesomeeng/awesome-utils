// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const Parser = require("./Parser");

const DOW = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const DOW3 = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const DOW2 = ["Su","Mo","Tu","We","Th","Fr","Sa"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS3 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

class DateFormatParser extends Parser.AbstractParser {
	parse(date,format) {
		super.parse(format);

		return this.parseFormat(date);
	}

	parseFormat(date) {
		let s = "";
		let quoting = null;
		while (this.pos<this.content.length) {
			let next = this.peek();

			if (!quoting && (next==="'" || next==="\"")) {
				quoting = this.pop();
			}
			else if (quoting && next===quoting) {
				this.pop();
				quoting = null;
			}
			else if (quoting) {
				s += this.pop();
			}
			else if (next==="Y") {
				s += this.parseYear(date);
			}
			else if (next==="M") {
				s += this.parseMonth(date);
			}
			else if (next==="D") {
				s += this.parseDay(date);
			}
			else if (next==="d") {
				s += this.parseDOW(date);
			}
			else if (next==="a" || next==="A") {
				s += this.parseAMPM(date);
			}
			else if (next==="H") {
				s += this.parseHour24(date);
			}
			else if (next==="h") {
				s += this.parseHour12(date);
			}
			else if (next==="k") {
				s += this.parseHour24Plus1(date);
			}
			else if (next==="m") {
				s += this.parseMinute(date);
			}
			else if (next==="s") {
				s += this.parseSecond(date);
			}
			else if (next==="S") {
				s += this.parseMillisecond(date);
			}
			else if (next==="Z" || next==="z") {
				s += this.parseTimezone(date);
			}
			else if (next==="X" || next==="x") {
				s += this.parseTimestamp(date);
			}
			else {
				s += this.pop();
			}
		}

		return s;
	}

	parseYear(date) {
		if (this.peek(4)==="YYYY") {
			this.pop(4);
			return ""+date.getUTCFullYear();
		}
		else if (this.peek(2)==="YY") {
			this.pop(2);
			return (""+date.getUTCFullYear()).slice(2,4);
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseMonth(date) {
		if (this.peek(4)==="MMMM") {
			this.pop(4);
			return MONTHS[date.getUTCMonth()];
		}
		else if (this.peek(3)==="MMM") {
			this.pop(3);
			return MONTHS3[date.getUTCMonth()];
		}
		else if (this.peek(2)==="MM") {
			this.pop(2);
			return (""+date.getUTCMonth()+1).padStart(2,"0");
		}
		else if (this.peek(1)==="M") {
			this.pop(1);
			return ""+(date.getUTCMonth()+1);
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseDay(date) {
		if (this.peek(4)==="DDDD") {
			this.pop(4);
			return (""+computeDayOfYear(date)).padStart(3,"0");
		}
		else if (this.peek(3)==="DDD") {
			this.pop(3);
			return ""+computeDayOfYear(date);
		}
		else if (this.peek(2)==="DD") {
			this.pop(2);
			return (""+date.getUTCDate(date)).padStart(2,"0");
		}
		else if (this.peek(1)==="D") {
			this.pop(1);
			return ""+date.getUTCDate(date);
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseDOW(date) {
		if (this.peek(4)==="dddd") {
			this.pop(4);
			return DOW[date.getUTCDay()];
		}
		else if (this.peek(3)==="ddd") {
			this.pop(3);
			return DOW3[date.getUTCDay()];
		}
		else if (this.peek(2)==="dd") {
			this.pop(2);
			return DOW2[date.getUTCDay()];
		}
		else if (this.peek(1)==="d") {
			this.pop(1);
			return ""+date.getUTCDay();
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseAMPM(date) {
		if (this.peek()==="a") {
			this.pop(1);
			return date.getUTCHours()<12 ? "am" : "pm";
		}
		else if (this.peek()==="A") {
			this.pop(1);
			return date.getUTCHours()<12 ? "AM" : "PM";
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseHour24(date) {
		if (this.peek(2)==="HH") {
			this.pop(2);
			return (""+date.getUTCHours(date)).padStart(2,"0");
		}
		else if (this.peek()==="H") {
			this.pop(1);
			return ""+date.getUTCHours(date);
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseHour12(date) {
		if (this.peek(2)==="hh") {
			this.pop(2);
			return (""+(date.getUTCHours(date)%12)).padStart(2,"0");
		}
		else if (this.peek()==="h") {
			this.pop(1);
			return ""+(date.getUTCHours(date)%12);
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseHour24Plus1(date) {
		if (this.peek(2)==="kk") {
			this.pop(2);
			return (""+(date.getUTCHours(date)+1)).padStart(2,"0");
		}
		else if (this.peek()==="k") {
			this.pop(1);
			return ""+(date.getUTCHours(date)+1);
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseMinute(date) {
		if (this.peek(2)==="mm") {
			this.pop(2);
			return (""+date.getUTCMinutes(date)).padStart(2,"0");
		}
		else if (this.peek()==="m") {
			this.pop(1);
			return ""+date.getUTCMinutes(date);
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseSecond(date) {
		if (this.peek(2)==="ss") {
			this.pop(2);
			return (""+date.getUTCSeconds(date)).padStart(2,"0");
		}
		else if (this.peek()==="s") {
			this.pop(1);
			return ""+date.getUTCSeconds(date);
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseMillisecond(date) {
		if (this.peek(3)==="SSS") {
			this.pop(3);
			return (""+date.getUTCMilliseconds(date)).padStart(3,"0");
		}
		else if (this.peek()==="S") {
			this.pop(1);
			return ""+date.getUTCMilliseconds(date);
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseTimezone(/*date*/) {
		if (this.peek(2)==="ZZ") {
			this.pop(2);
			return "-0000";
		}
		else if (this.peek()==="Z") {
			this.pop(1);
			return "-00:00";
		}
		else if (this.peek()==="z") {
			this.pop(1);
			return "UTC";
		}
		else {
			this.error("Not a valid format.");
		}
	}

	parseTimestamp(date) {
		if (this.peek(1)==="X") {
			this.pop(1);
			return ""+((date.getTime()/1000)|0);
		}
		else if (this.peek()==="x") {
			this.pop(1);
			return ""+date.getTime();
		}
		else {
			this.error("Not a valid format.");
		}
	}

}

const computeDayOfYear = function computeDayOfYear(date) {
	let start = new Date(date.getTime());
	start.setUTCMilliseconds(0);
	start.setUTCSeconds(0);
	start.setUTCMinutes(0);
	start.setUTCHours(0);
	start.setUTCDate(1);
	start.setUTCMonth(0);
	let diff = date.getTime()-start.getTime();
	return ((diff/(1000*60*60*24))|0)+1;
};

module.exports = DateFormatParser;
