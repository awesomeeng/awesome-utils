// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const $CONTENT = Symbol("content");
const $POSITION = Symbol("position");

class ParserUtils {
	constructor() {
	}

	get AbstractParser() {
		return AbstractParser;
	}

	isSpace(c) {
		return c===" " || c==="\t";
	}

	isNewLine(c) {
		return c==="\n" || c==="\r" || c==="\v" ||  c==="\f";
	}

	isWhiteSpace(c) {
		return this.isSpace(c) || this.isNewLine(c);
	}

	isDigit(c) {
		return c>="0" && c<="9";
	}

	isLetter(c) {
		return (c>="A" && c<="Z") || (c>="a" && c<="z");
	}
}

const Utils = new ParserUtils();
module.exports = Utils;

class AbstractParser {
	constructor() {
		this[$CONTENT] = "";
		this[$POSITION] = 0;
	}

	get content() {
		return this[$CONTENT];
	}

	set content(s) {
		if (s===undefined || s===null) throw new Error("Missing content.");
		if (typeof s!=="string") throw new Error("Invalid content.");

		this[$CONTENT] = s;
	}

	get position() {
		return this[$POSITION];
	}

	set position(n) {
		if (n===undefined || n===null) throw new Error("Missing position.");
		if (typeof n!=="number") throw new Error("Invalid position.");
		if (n<0) throw new Error("Position cannot be less than 0.");
		this[$POSITION] = n;
	}

	get pos() {
		return this.position;
	}

	set pos(n) {
		return this.position = n;
	}

	get index() {
		return this.position;
	}

	set index(n) {
		return this.position = n;
	}

	isSpace(c) {
		return Utils.isSpace(c);
	}

	isNewLine(c) {
		return Utils.isNewLine(c);
	}

	isWhiteSpace(c) {
		return Utils.isWhiteSpace(c);
	}

	isDigit(c) {
		return Utils.isDigit(c);
	}

	isLetter(c) {
		return Utils.isLetter(c);
	}

	peek(length=1) {
		return this.content.slice(this.position,this.position+length);
	}

	pop(length=1) {
		if (this.position+length>this.content.length) this.error("Unexpectedly reached end of content.");
		this.position += length;
		return this.content.slice(this.position-length,this.position);
	}

	previous(length=1) {
		let start = Math.max(0,this.position-length);
		return this.content.slice(start,this.position);
	}

	back(length=1) {
		if (this.position+length>=0) this.position -= length;
	}

	popSpace() {
		while (this.isSpace(this.peek())) {
			this.pop();
		}
	}

	popWhiteSpace() {
		while (this.isWhiteSpace(this.peek())) {
			this.pop();
		}
	}

	parse(content) {
		this.position = 0;
		this.content = content;

		return undefined;
	}

	error(message,pos=null) {
		if (pos===null) pos = this.position;
		let lines = this.content.slice(0,pos).split(/\r\n|\n|\r|\v|\f/g);
		let line = lines.length;
		let offset = pos-lines.slice(0,-1).join(" ").length;
		throw new Error("Error at line "+line+" position "+offset+": "+message);
	}
}
