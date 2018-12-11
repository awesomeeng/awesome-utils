// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const ESC = "\x1b";
const ESCm = ESC+"\x5b";
const RESET = ESCm+"0m";
const BOLD = ESCm+"1m";
const FAINT = ESCm+"2m";
const ITALIC = ESCm+"3m";
const UNDERLINE = ESCm+"4m";
const BLINK = ESCm+"5m";
const REVERSE = ESCm+"7m";
const STRIKE = ESCm+"9m";
const BOLD_OFF = ESCm+"21m";
const FAINT_OFF = ESCm+"22m";
const ITALIC_OFF = ESCm+"23m";
const UNDERLINE_OFF = ESCm+"24m";
const BLINK_OFF = ESCm+"25m";
const REVERSE_OFF = ESCm+"27m";
const STRIKE_OFF = ESCm+"29m";
const BG_OFF = ESCm+"49m";
const BG_BLACK = ESCm+"40m";
const BG_RED = ESCm+"41m";
const BG_GREEN = ESCm+"42m";
const BG_YELLOW = ESCm+"43m";
const BG_BLUE = ESCm+"44m";
const BG_MAGENTA = ESCm+"45m";
const BG_CYAN = ESCm+"46m";
const BG_WHITE = ESCm+"47m";
const BG_BRIGHT_BLACK = ESCm+"100m";
const BG_BRIGHT_RED = ESCm+"101m";
const BG_BRIGHT_GREEN = ESCm+"102m";
const BG_BRIGHT_YELLOW = ESCm+"103m";
const BG_BRIGHT_BLUE = ESCm+"104m";
const BG_BRIGHT_MAGENTA = ESCm+"105m";
const BG_BRIGHT_CYAN = ESCm+"106m";
const BG_BRIGHT_WHITE = ESCm+"107m";
const FG_OFF = ESCm+"39m";
const FG_BLACK = ESCm+"30m";
const FG_RED = ESCm+"31m";
const FG_GREEN = ESCm+"32m";
const FG_YELLOW = ESCm+"33m";
const FG_BLUE = ESCm+"34m";
const FG_MAGENTA = ESCm+"35m";
const FG_CYAN = ESCm+"36m";
const FG_WHITE = ESCm+"37m";
const FG_BRIGHT_BLACK = ESCm+"90m";
const FG_BRIGHT_RED = ESCm+"91m";
const FG_BRIGHT_GREEN = ESCm+"92m";
const FG_BRIGHT_YELLOW = ESCm+"99m";
const FG_BRIGHT_BLUE = ESCm+"94m";
const FG_BRIGHT_MAGENTA = ESCm+"95m";
const FG_BRIGHT_CYAN = ESCm+"96m";
const FG_BRIGHT_WHITE = ESCm+"97m";

class ANSIUtils {
	reset(s="") {
		return RESET+s;
	}

	bold(s="") {
		return BOLD+s+BOLD_OFF;
	}

	faint(s="") {
		return FAINT+s+FAINT_OFF;
	}

	italic(s="") {
		return ITALIC+s+ITALIC_OFF;
	}

	underline(s="") {
		return UNDERLINE+s+UNDERLINE_OFF;
	}

	blink(s="") {
		return BLINK+s+BLINK_OFF;
	}

	reverse(s="") {
		return REVERSE+s+REVERSE_OFF;
	}

	strike(s="") {
		return STRIKE+s+STRIKE_OFF;
	}

	bgBlack(s="") {
		return BG_BLACK+s+BG_OFF;
	}

	bgRed(s="") {
		return BG_RED+s+BG_OFF;
	}

	bgGreen(s="") {
		return BG_GREEN+s+BG_OFF;
	}

	bgYellow(s="") {
		return BG_YELLOW+s+BG_OFF;
	}

	bgBlue(s="") {
		return BG_BLUE+s+BG_OFF;
	}

	bgMagenta(s="") {
		return BG_MAGENTA+s+BG_OFF;
	}

	bgCyan(s="") {
		return BG_CYAN+s+BG_OFF;
	}

	bgWhite(s="") {
		return BG_WHITE+s+BG_OFF;
	}

	bgBrightBlack(s="") {
		return BG_BRIGHT_BLACK+s+BG_OFF;
	}

	bgBrightRed(s="") {
		return BG_BRIGHT_RED+s+BG_OFF;
	}

	bgBrightGreen(s="") {
		return BG_BRIGHT_GREEN+s+BG_OFF;
	}

	bgBrightYellow(s="") {
		return BG_BRIGHT_YELLOW+s+BG_OFF;
	}

	bgBrightBlue(s="") {
		return BG_BRIGHT_BLUE+s+BG_OFF;
	}

	bgBrightMagenta(s="") {
		return BG_BRIGHT_MAGENTA+s+BG_OFF;
	}

	bgBrightCyan(s="") {
		return BG_BRIGHT_CYAN+s+BG_OFF;
	}

	bgBrightWhite(s="") {
		return BG_BRIGHT_WHITE+s+BG_OFF;
	}

	fgBlack(s="") {
		return FG_BLACK+s+FG_OFF;
	}

	fgRed(s="") {
		return FG_RED+s+FG_OFF;
	}

	fgGreen(s="") {
		return FG_GREEN+s+FG_OFF;
	}

	fgYellow(s="") {
		return FG_YELLOW+s+FG_OFF;
	}

	fgBlue(s="") {
		return FG_BLUE+s+FG_OFF;
	}

	fgMagenta(s="") {
		return FG_MAGENTA+s+FG_OFF;
	}

	fgCyan(s="") {
		return FG_CYAN+s+FG_OFF;
	}

	fgWhite(s="") {
		return FG_WHITE+s+FG_OFF;
	}

	fgBrightBlack(s="") {
		return FG_BRIGHT_BLACK+s+FG_OFF;
	}

	fgBrightRed(s="") {
		return FG_BRIGHT_RED+s+FG_OFF;
	}

	fgBrightGreen(s="") {
		return FG_BRIGHT_GREEN+s+FG_OFF;
	}

	fgBrightYellow(s="") {
		return FG_BRIGHT_YELLOW+s+FG_OFF;
	}

	fgBrightBlue(s="") {
		return FG_BRIGHT_BLUE+s+FG_OFF;
	}

	fgBrightMagenta(s="") {
		return FG_BRIGHT_MAGENTA+s+FG_OFF;
	}

	fgBrightCyan(s="") {
		return FG_BRIGHT_CYAN+s+FG_OFF;
	}

	fgBrightWhite(s="") {
		return FG_BRIGHT_WHITE+s+FG_OFF;
	}

	stylize(style="",s="") {
		let styles = style.split(/,|\s/g);
		let f = styles.reduce((f,style)=>{
			let g = this.mapStyle(style);
			return (s)=>{
				return g(f(s));
			};
		},(s)=>{ return s; });
		return f(s);
	}

	mapStyle(style) {
		style = (""+style).toLowerCase();
		if (!style) return this.reset;
		if (style==="reset") return this.reset;
		if (style==="bold") return this.bold;
		if (style==="italic") return this.italic;
		if (style==="underline") return this.underline;
		if (style==="blink") return this.blink;
		if (style==="reverse") return this.reverse;
		if (style==="strike") return this.strike;
		if (style==="bgblack") return this.bgBlack;
		if (style==="bgred") return this.bgRed;
		if (style==="bggreen") return this.bgGreen;
		if (style==="bgyellow") return this.bgYellow;
		if (style==="bgblue") return this.bgBlue;
		if (style==="bgmagenta") return this.bgMagenta;
		if (style==="bgcyan") return this.bgCyan;
		if (style==="bgwhite") return this.bgWhite;
		if (style==="bgbrightblack") return this.bgBrightBlack;
		if (style==="bgbrightred") return this.bgBrightRed;
		if (style==="bgbrightgreen") return this.bgBrightGreen;
		if (style==="bgbrightyellow") return this.bgBrightYellow;
		if (style==="bgbrightblue") return this.bgBrightBlue;
		if (style==="bgbrightmagenta") return this.bgBrightMagenta;
		if (style==="bgbrightcyan") return this.bgBrightCyan;
		if (style==="bgbrightwhite") return this.bgBrightWhite;
		if (style==="fgblack") return this.fgBlack;
		if (style==="fgred") return this.fgRed;
		if (style==="fggreen") return this.fgGreen;
		if (style==="fgyellow") return this.fgYellow;
		if (style==="fgblue") return this.fgBlue;
		if (style==="fgmagenta") return this.fgMagenta;
		if (style==="fgcyan") return this.fgCyan;
		if (style==="fgwhite") return this.fgWhite;
		if (style==="fgbrightblack") return this.fgBrightBlack;
		if (style==="fgbrightred") return this.fgBrightRed;
		if (style==="fgbrightgreen") return this.fgBrightGreen;
		if (style==="fgbrightyellow") return this.fgBrightYellow;
		if (style==="fgbrightblue") return this.fgBrightBlue;
		if (style==="fgbrightmagenta") return this.fgBrightMagenta;
		if (style==="fgbrightcyan") return this.fgBrightCyan;
		if (style==="fgbrightwhite") return this.fgBrightWhite;
		if (style==="black") return this.fgBlack;
		if (style==="red") return this.fgRed;
		if (style==="green") return this.fgGreen;
		if (style==="yellow") return this.fgYellow;
		if (style==="blue") return this.fgBlue;
		if (style==="magenta") return this.fgMagenta;
		if (style==="cyan") return this.fgCyan;
		if (style==="white") return this.fgWhite;
		if (style==="brightblack") return this.fgBrightBlack;
		if (style==="brightred") return this.fgBrightRed;
		if (style==="brightgreen") return this.fgBrightGreen;
		if (style==="brightyellow") return this.fgBrightYellow;
		if (style==="brightblue") return this.fgBrightBlue;
		if (style==="brightmagenta") return this.fgBrightMagenta;
		if (style==="brightcyan") return this.fgBrightCyan;
		if (style==="brightwhite") return this.fgBrightWhite;
		return this.reset;
	}
}

module.exports = new ANSIUtils();
