# AwesomeUtils

Javascript Utility functions for Enterprise Ready nodejs applications

## Disclaimer

These are utilities largerly for use within the suite of applications for The Awesome Engineering Company. You are free to use it for your own purposes (MIT License), but keep in mind that we are only supporting it in relation to needs of our other applications.

## Installation

```
	npm install @AwesomeEng/AwesomeUtils
```

## Usage

Require it, then make calls against it. See below for documentation.

```
	const AwesomeUtils = require("AwesomeUtils");

	...

	await AwesumeUtils.Promise.sleep(1000); // sleeps for 1 second.

	...
```

## Documentation

### Class Utilities

### Date Utilities

#### AwesomeUtils.Date.SECOND > 1000

Constant for the number of milliseconds in a second.

#### AwesomeUtils.Date.MINUTE > 60000

Constant for the number of milliseconds in a minute.

#### AwesomeUtils.Date.HOUR > 3600000

Constant for the number of milliseconds in a hour.

#### AwesomeUtils.Date.DAY > 86400000

Constant for the number of milliseconds in a day.

#### AwesomeUtils.Date.WEEK > 604800000

Constant for the number of milliseconds in a week.

#### AwesomeUtils.Date.from(x) > Date

Returns a Date object from a number of different possible date types.
 - If `x` is a number, returns a Date based on the unix epoc number.
 - If `x` is a string, attempts to parse the date string using Moment.js and return a Date object from that. Note that it does not return a Moment.js object, but a JS Date object.
 - If `x` is a Date, return that.

#### AwesomeUtils.Date.duraton(expression) > number

Returns the number of milliseconds for a given duration expression. A duration expression may be a number, which would just return itself, or an [ISO 8601 duration expression](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals), or a human readable string expression like "14 hours, 22 minutes, 12 seconds."

### FS Utilities

#### AwesomeUtils.FS.exists(filename,callback) > void

Calls the given callback with the signature `callback(exists)` after checking to see if the given filename/path exists. If it does `exists` is true, otherwise false.

#### AwesomeUtils.FS.existsSync(filename) > boolean

Returns true if the given filename/path exists, otherwise false.

### Promise Utilities

#### AwesomeUtils.Promise.sleep(ms) > Promise

Returns a promise that will resolve approximately `ms` milliseconds later. Useful in async/await structures when you need to delay slightly.

### Random Utilities

#### AwesomeUtils.Random.integer(min,max) > number

Returns a random whole number between min and max (exclusive). If min is not supplied or otherwise falsey, defaults to 0. If max is not supplied or otherwise falsey, defaults to `Number.MAX_SAFE_INTEGER`.

#### AwesomeUtils.Random.float(min,max) > number

Returns a random number between min and max (exclusive). If min is not supplied or otherwise falsey, defaults to 0. If max is not supplied or otherwise falsey, defaults to `Number.MAX_SAFE_INTEGER`.

#### AwesomeUtils.Random.decimal(min,max) > number

Returns a random number between min and max (exclusive). If min is not supplied or otherwise falsey, defaults to 0. If max is not supplied or otherwise falsey, defaults to `Number.MAX_SAFE_INTEGER`.

#### AwesomeUtils.Random.byte() > number

Returns a random whole number between 0 and 256 (exclusive).

#### AwesomeUtils.Random.character(optionalCharacters) > number

Returns a random string of length. The character is either chosen from the string of `optionalCharacters` passed in or is an asci character between 32 and 128 (exclusive).

#### AwesomeUtils.Random.string(length,characters) > number

Returns a random string of the given length. The characters are randomly selected from the optional characters string, or if an optional character string is not given, is `"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"`.

## The Awesome Engineering Company

AwesomeLog is written and maintained by The Awesome Engineering Company. We belive in building clean, configurable, creative software for engineers and architects and customers.

To learn more about The Awesome Engineering Company and our suite of products, visit us on the web at https://awesomeeng.com.

## Support and Help

## License

AwesomeLog is released under the MIT License. Please read the  [LICENSE](https://raw.githubusercontent.com/awesomeeng/AwesomeLog/master/LICENSE?token=ABA2_wogpYds4a1qC_4aeUZd8C1in6Qcks5bUiQFwA%3D%3D) file for details.
