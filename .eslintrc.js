"use strict";

module.exports = {
	"extends": "eslint:recommended",
	parserOptions: {
		ecmaVersion: 2018
	},
    env: {
        node: true,
        es6: true,
		mocha: true
    },
	globals: {
		Atomics: true,
		SharedArrayBuffer: true
	},
    rules: {
		"no-self-assign": [
			"off"
		],
        indent: [
            "error",
            "tab",
			{ "SwitchCase": 1 }
        ],
        semi: [
            "error",
            "always"
        ],
		"require-await": [
			"error"
		],
		"no-constant-condition": [
			"off"
		]
    }
};
