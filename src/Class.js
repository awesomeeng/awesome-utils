// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

class ClassUtils {
	isClass(c) {
		return /^class/.test(c.toString());
	}
}

module.exports = new ClassUtils();
