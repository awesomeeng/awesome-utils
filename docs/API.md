## Classes

<dl>
<dt><a href="#DateUtils">DateUtils</a></dt>
<dd><p>Utilities for working with dates.</p>
</dd>
<dt><a href="#ModuleUtils">ModuleUtils</a></dt>
<dd><p>Utilities for working with modules, or understanding the code itself.</p>
</dd>
<dt><a href="#ObjectUtils">ObjectUtils</a></dt>
<dd><p>Object utility functions.</p>
</dd>
<dt><a href="#PromiseUtils">PromiseUtils</a></dt>
<dd><p>Utilities for dealing with Promises.</p>
</dd>
<dt><a href="#VMUtils">VMUtils</a></dt>
<dd><p>Utilities for working with the underlying virtual machine.</p>
</dd>
</dl>

<a name="DateUtils"></a>

## DateUtils
Utilities for working with dates.

**Kind**: global class  

* [DateUtils](#DateUtils)
    * [.SECOND](#DateUtils+SECOND)
    * [.MINUTE](#DateUtils+MINUTE)
    * [.HOUR](#DateUtils+HOUR)
    * [.DAY](#DateUtils+DAY)
    * [.WEEK](#DateUtils+WEEK)
    * [.DAYS_OF_WEEK](#DateUtils+DAYS_OF_WEEK)
    * [.DAYS_OF_WEEK3](#DateUtils+DAYS_OF_WEEK3)
    * [.DAYS_OF_WEEK2](#DateUtils+DAYS_OF_WEEK2)
    * [.MONTHS](#DateUtils+MONTHS)
    * [.MONTHS3](#DateUtils+MONTHS3)
    * [.floor(date, to)](#DateUtils+floor) ⇒ <code>Date</code>
    * [.floorSeconds(date)](#DateUtils+floorSeconds) ⇒ <code>Date</code>
    * [.floorMinutes(date)](#DateUtils+floorMinutes) ⇒ <code>Date</code>
    * [.floorHours(date)](#DateUtils+floorHours) ⇒ <code>Date</code>
    * [.floorDays(date)](#DateUtils+floorDays) ⇒ <code>Date</code>
    * [.from(date)](#DateUtils+from) ⇒ <code>Date</code>
    * [.computeDayOfYear(date)](#DateUtils+computeDayOfYear) ⇒ <code>number</code>
    * [.format(date, pattern)](#DateUtils+format) ⇒ <code>string</code>


* * *

<a name="DateUtils+SECOND"></a>

### dateUtils.SECOND
Returns the number of milliseconds in a single second.

**Kind**: instance property of [<code>DateUtils</code>](#DateUtils)  

* * *

<a name="DateUtils+MINUTE"></a>

### dateUtils.MINUTE
Returns the number of milliseconds in a single minute.

**Kind**: instance property of [<code>DateUtils</code>](#DateUtils)  

* * *

<a name="DateUtils+HOUR"></a>

### dateUtils.HOUR
Returns the number of milliseconds in a single hour.

**Kind**: instance property of [<code>DateUtils</code>](#DateUtils)  

* * *

<a name="DateUtils+DAY"></a>

### dateUtils.DAY
Returns the number of milliseconds in a single day.

**Kind**: instance property of [<code>DateUtils</code>](#DateUtils)  

* * *

<a name="DateUtils+WEEK"></a>

### dateUtils.WEEK
Returns the number of milliseconds in a single week.

**Kind**: instance property of [<code>DateUtils</code>](#DateUtils)  

* * *

<a name="DateUtils+DAYS_OF_WEEK"></a>

### dateUtils.DAYS\_OF\_WEEK
Returns an array of the days of the week, in english.

**Kind**: instance property of [<code>DateUtils</code>](#DateUtils)  

* * *

<a name="DateUtils+DAYS_OF_WEEK3"></a>

### dateUtils.DAYS\_OF\_WEEK3
Returns an array of the shortened 3 character days of the week, in english.

**Kind**: instance property of [<code>DateUtils</code>](#DateUtils)  

* * *

<a name="DateUtils+DAYS_OF_WEEK2"></a>

### dateUtils.DAYS\_OF\_WEEK2
Returns an array of the shortened 2 character days of the week, in english.

**Kind**: instance property of [<code>DateUtils</code>](#DateUtils)  

* * *

<a name="DateUtils+MONTHS"></a>

### dateUtils.MONTHS
Returns an array of the months of the year, in english.

**Kind**: instance property of [<code>DateUtils</code>](#DateUtils)  

* * *

<a name="DateUtils+MONTHS3"></a>

### dateUtils.MONTHS3
Returns an array of the shortened 3 character months of the year, in english.

**Kind**: instance property of [<code>DateUtils</code>](#DateUtils)  

* * *

<a name="DateUtils+floor"></a>

### dateUtils.floor(date, to) ⇒ <code>Date</code>
Given some date, floor it to the nearest `to` argument, where `to` is some
number of milliseconds. For example, to floor to the nearest minute you
would do `floor(date,60000)` where `60000` is the number of milliseconds in
a single date.  You can use this in conjunction with `SECOND`, `MINUTE`,
`HOUR`, and `DAY`. See also `floorSecond()`, `floorMinute()`, `floorHour()`,
and `floorDay()` below.

**Kind**: instance method of [<code>DateUtils</code>](#DateUtils)  

| Param | Type | Default |
| --- | --- | --- |
| date | <code>Date</code> \| <code>number</code> \| <code>string</code> |  | 
| to | <code>Number</code> | <code>0</code> | 


* * *

<a name="DateUtils+floorSeconds"></a>

### dateUtils.floorSeconds(date) ⇒ <code>Date</code>
Floor the given date to the nearest second.

**Kind**: instance method of [<code>DateUtils</code>](#DateUtils)  

| Param | Type |
| --- | --- |
| date | <code>Date</code> \| <code>number</code> \| <code>string</code> | 


* * *

<a name="DateUtils+floorMinutes"></a>

### dateUtils.floorMinutes(date) ⇒ <code>Date</code>
Floor the given date to the nearest minute.

**Kind**: instance method of [<code>DateUtils</code>](#DateUtils)  

| Param | Type |
| --- | --- |
| date | <code>Date</code> \| <code>number</code> \| <code>string</code> | 


* * *

<a name="DateUtils+floorHours"></a>

### dateUtils.floorHours(date) ⇒ <code>Date</code>
Floor the given date to the nearest hour.

**Kind**: instance method of [<code>DateUtils</code>](#DateUtils)  

| Param | Type |
| --- | --- |
| date | <code>Date</code> \| <code>number</code> \| <code>string</code> | 


* * *

<a name="DateUtils+floorDays"></a>

### dateUtils.floorDays(date) ⇒ <code>Date</code>
Floor the given date to the nearest day.

**Kind**: instance method of [<code>DateUtils</code>](#DateUtils)  

| Param | Type |
| --- | --- |
| date | <code>Date</code> \| <code>number</code> \| <code>string</code> | 


* * *

<a name="DateUtils+from"></a>

### dateUtils.from(date) ⇒ <code>Date</code>
Given some date or date line object, return a Date object.  This allows
you to quickly move between different types of date like objects.  It
will parse numbers as a unix epoch, a string of numbers as a unix epoch,
JS Date object as a Date Object, or a String as a `Date.parse()` call.

Basically, it does its best to return a Date Object or an exception.

**Kind**: instance method of [<code>DateUtils</code>](#DateUtils)  

| Param | Type |
| --- | --- |
| date | <code>Date</code> \| <code>number</code> \| <code>string</code> | 


* * *

<a name="DateUtils+computeDayOfYear"></a>

### dateUtils.computeDayOfYear(date) ⇒ <code>number</code>
Given some date, compute what day of the year it is.

**Kind**: instance method of [<code>DateUtils</code>](#DateUtils)  

| Param | Type |
| --- | --- |
| date | <code>Date</code> \| <code>number</code> \| <code>string</code> | 


* * *

<a name="DateUtils+format"></a>

### dateUtils.format(date, pattern) ⇒ <code>string</code>
Format a given date using a given pattern.  Patterns are built using the following chart similar to
how momentjs, datejs, php strftime, Java SimpleDateFormat, etc.

You use one or more of the patterns from above to create a pattern.  You may also use literals in your
pattern like `YYYYMMDD'T'HHMMSSSSS'ZULU'` where both 'T' and 'ZULU' are literals and are inserted verbatim.

| Pattern | Substitution                             | Example against July 20, 1969, 20:18:04.017 UTC |
|---------|------------------------------------------|-------------------------------------------------|
| YY      | 2 digit year.                            | 69                                              |
| YYYY    | 4 digit year.                            | 1969                                            |
| M       | numeric month, not zero filled.          | 7                                               |
| MM      | numeric month, zero filled.              | 07                                              |
| MMM     | shortened 3 character month name.        | Jul                                             |
| MMMM    | full month name                          | July                                            |
| D       | numeric day of month, not zero filled.   | 20                                              |
| DD      | numeric day of month, zero filled.       | 20                                              |
| DDD     | numeric day of year, not zero filled.    | 200                                             |
| DDDD    | numeric day of year, zero filled.        | 200                                             |
| d       | numeric day of the week (0=sunday).      | 0                                               |
| dd      | shortened 2 character day of the week    | Su                                              |
| ddd     | shortened 3 character day of the week    | Sun                                             |
| dddd    | full textual day of the week             | Sunday                                          |
| A       | AM or PM.                                | PM                                              |
| a       | am or pm.                                | pm                                              |
| H       | 24 0 based hour of day, not zero filled. | 20                                              |
| HH      | 24 0 based hour of day, zero filled.     | 20                                              |
| h       | 12 hour of day, not zero filled.         | 8                                               |
| hh      | 12 hour of day, zero filled.             | 8                                               |
| k       | 24 1 based hour of day, not zero filled. | 21                                              |
| kk      | 24 1 based hour of day, zero filled.     | 21                                              |
| m       | minute of hour, not zero filled.         | 18                                              |
| mm      | minute of hour, zero filled.             | 18                                              |
| s       | second of minute, not zero filled.       | 4                                               |
| ss      | second of minute, zero filled.           | 04                                              |
| S       | milliseconds of second, not zero filled. | 17                                              |
| SSS     | milliseconds of second, zero filled.     | 017                                             |
| z       | textual time zone                        | UTC                                             |
| Z       | relative time zone with separator        | -00:00                                          |
| ZZ      | relative time zone without separator     | -0000                                           |
| X       | unix timestamp (seconds)                 | -14182916                                       |
| x       | unix timestamp (milliseconds)            | -14182916000                                    |

**Kind**: instance method of [<code>DateUtils</code>](#DateUtils)  

| Param | Type |
| --- | --- |
| date | <code>Date</code> \| <code>number</code> \| <code>string</code> | 
| pattern | <code>string</code> | 


* * *

<a name="ModuleUtils"></a>

## ModuleUtils
Utilities for working with modules, or understanding the code itself.

**Kind**: global class  

* [ModuleUtils](#ModuleUtils)
    * [.resolve(mod, filename)](#ModuleUtils+resolve) ⇒ <code>string</code>
    * [.require(mod, filename)](#ModuleUtils+require) ⇒ <code>string</code>
    * [.unrequire(mod, [removeChildren])](#ModuleUtils+unrequire) ⇒ <code>number</code>
    * [.moduleSource(depth)](#ModuleUtils+moduleSource) ⇒ <code>string</code>
    * [.moduleStack(mod, [start], [end])](#ModuleUtils+moduleStack) ⇒ <code>Array.&lt;String&gt;</code>


* * *

<a name="ModuleUtils+resolve"></a>

### moduleUtils.resolve(mod, filename) ⇒ <code>string</code>
Resolves a given filename relative to a given module.

**Kind**: instance method of [<code>ModuleUtils</code>](#ModuleUtils)  

| Param | Type |
| --- | --- |
| mod | <code>Module</code> | 
| filename | <code>string</code> | 


* * *

<a name="ModuleUtils+require"></a>

### moduleUtils.require(mod, filename) ⇒ <code>string</code>
Requires a filename, relative to a given module.

**Kind**: instance method of [<code>ModuleUtils</code>](#ModuleUtils)  

| Param | Type |
| --- | --- |
| mod | <code>Module</code> | 
| filename | <code>string</code> | 


* * *

<a name="ModuleUtils+unrequire"></a>

### moduleUtils.unrequire(mod, [removeChildren]) ⇒ <code>number</code>
Removes a module from the require cache, thus making it
reload again if required. Also, any children that
were loaded by the given module are also removed.

Returns the total number of modules removed.

You may optional indicate if the unrequire should remove
dependant children as well. This can have unwanted side-effects
so use with caution.

**Kind**: instance method of [<code>ModuleUtils</code>](#ModuleUtils)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| mod | <code>module</code> \| <code>string</code> |  |  |
| [removeChildren] | <code>boolean</code> | <code>false</code> | removeChildren |


* * *

<a name="ModuleUtils+moduleSource"></a>

### moduleUtils.moduleSource(depth) ⇒ <code>string</code>
Returns the filename of the code that called this function.
This works by throwing and catching an exception and then reading the stack
trace of the exception and finding the info it needs.

*depth* specifies how far back into the stack we should go. So if you want
the caller of this function, set it to 0 (or omit it). If you want the
caller of the caller of this function, set it to 1. etc.

**Kind**: instance method of [<code>ModuleUtils</code>](#ModuleUtils)  

| Param | Type | Default |
| --- | --- | --- |
| depth | <code>number</code> | <code>0</code> | 


* * *

<a name="ModuleUtils+moduleStack"></a>

### moduleUtils.moduleStack(mod, [start], [end]) ⇒ <code>Array.&lt;String&gt;</code>
Returns the module require stack for the given module. That is, how
was the given module imported (required) into the current execution.

This returns an array of strings, which are the module
ancestor module.id values.

**Kind**: instance method of [<code>ModuleUtils</code>](#ModuleUtils)  

| Param | Type | Default |
| --- | --- | --- |
| mod | <code>module</code> |  | 
| [start] | <code>Number</code> | <code>0</code> | 
| [end] | <code>Number</code> | <code>start+10</code> | 


* * *

<a name="ObjectUtils"></a>

## ObjectUtils
Object utility functions.

**Kind**: global class  

* [ObjectUtils](#ObjectUtils)
    * [.isPlainObject(obj)](#ObjectUtils+isPlainObject) ⇒ <code>Boolean</code>
    * [.extend(target, ...sources)](#ObjectUtils+extend) ⇒ <code>Object</code>
    * [.deepFreeze(obj)](#ObjectUtils+deepFreeze) ⇒ <code>void</code>
    * [.paths(obj, path, [leafsOnly], [delimiter])](#ObjectUtils+paths) ⇒ <code>Array.&lt;string&gt;</code>
    * [.get(obj, path, [defaultValue], [delimiter])](#ObjectUtils+get) ⇒ <code>\*</code>
    * [.set(obj, path, value, [delimiter])](#ObjectUtils+set) ⇒ <code>Object</code>
    * [.delete(obj, path, [prune], [delimiter])](#ObjectUtils+delete) ⇒ <code>Object</code>


* * *

<a name="ObjectUtils+isPlainObject"></a>

### objectUtils.isPlainObject(obj) ⇒ <code>Boolean</code>
Returns true oif the given object is a "plain" javascript object, meaning it
doesn't inherit from some other type of js object like an array, date, error, etc.

**Kind**: instance method of [<code>ObjectUtils</code>](#ObjectUtils)  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 


* * *

<a name="ObjectUtils+extend"></a>

### objectUtils.extend(target, ...sources) ⇒ <code>Object</code>
deep clone of each given source into the target.

**Kind**: instance method of [<code>ObjectUtils</code>](#ObjectUtils)  

| Param | Type |
| --- | --- |
| target | <code>Object</code> \| <code>null</code> | 
| ...sources | <code>Object</code> | 


* * *

<a name="ObjectUtils+deepFreeze"></a>

### objectUtils.deepFreeze(obj) ⇒ <code>void</code>
Call Object.freeze() on the object and each property of the
object, essentially freezing the entire structure.

**Kind**: instance method of [<code>ObjectUtils</code>](#ObjectUtils)  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 


* * *

<a name="ObjectUtils+paths"></a>

### objectUtils.paths(obj, path, [leafsOnly], [delimiter]) ⇒ <code>Array.&lt;string&gt;</code>
Return an array of all possible paths for a given object.

**Kind**: instance method of [<code>ObjectUtils</code>](#ObjectUtils)  

| Param | Type | Default |
| --- | --- | --- |
| obj | <code>Object</code> |  | 
| path | <code>string</code> |  | 
| [leafsOnly] | <code>Boolean</code> | <code>false</code> | 
| [delimiter] | <code>String</code> | <code>&quot;.&quot;</code> | 


* * *

<a name="ObjectUtils+get"></a>

### objectUtils.get(obj, path, [defaultValue], [delimiter]) ⇒ <code>\*</code>
Get a value for a given path of a given object.

**Kind**: instance method of [<code>ObjectUtils</code>](#ObjectUtils)  

| Param | Type | Default |
| --- | --- | --- |
| obj | <code>Object</code> |  | 
| path | <code>string</code> |  | 
| [defaultValue] | <code>\*</code> |  | 
| [delimiter] | <code>String</code> | <code>&quot;.&quot;</code> | 


* * *

<a name="ObjectUtils+set"></a>

### objectUtils.set(obj, path, value, [delimiter]) ⇒ <code>Object</code>
Set a value for a given path of a given object.

**Kind**: instance method of [<code>ObjectUtils</code>](#ObjectUtils)  

| Param | Type | Default |
| --- | --- | --- |
| obj | <code>Object</code> |  | 
| path | <code>string</code> |  | 
| value | <code>\*</code> |  | 
| [delimiter] | <code>String</code> | <code>&quot;.&quot;</code> | 


* * *

<a name="ObjectUtils+delete"></a>

### objectUtils.delete(obj, path, [prune], [delimiter]) ⇒ <code>Object</code>
Delete a value for a given path of a given object.

**Kind**: instance method of [<code>ObjectUtils</code>](#ObjectUtils)  

| Param | Type | Default |
| --- | --- | --- |
| obj | <code>Object</code> |  | 
| path | <code>string</code> |  | 
| [prune] | <code>Boolean</code> | <code>true</code> | 
| [delimiter] | <code>String</code> | <code>&quot;.&quot;</code> | 


* * *

<a name="PromiseUtils"></a>

## PromiseUtils
Utilities for dealing with Promises.

**Kind**: global class  

* [PromiseUtils](#PromiseUtils)
    * [.sleep(duration)](#PromiseUtils+sleep) ⇒ <code>Promise</code>
    * [.series(array, f)](#PromiseUtils+series) ⇒ <code>Promise</code>
    * [.timeout(promise, [ttl], [timeoutException])](#PromiseUtils+timeout) ⇒ <code>Promise</code>


* * *

<a name="PromiseUtils+sleep"></a>

### promiseUtils.sleep(duration) ⇒ <code>Promise</code>
Creates a promise that resolves after n milliseconds. Great for usage
with await for delaying some period of time.

**Kind**: instance method of [<code>PromiseUtils</code>](#PromiseUtils)  

| Param | Type |
| --- | --- |
| duration | <code>number</code> | 


* * *

<a name="PromiseUtils+series"></a>

### promiseUtils.series(array, f) ⇒ <code>Promise</code>
Execute the given function for each cell of the array, in series order.
If the given function returns a Promise, the promise will await resolution
before the function is called next.  This creates a series execution of
an array of Promise executions.  On a reject, all remaining executions
are skipped.

The given function is called with the signature
f(item,index,originalArray,resultsArray).

**Kind**: instance method of [<code>PromiseUtils</code>](#PromiseUtils)  

| Param | Type |
| --- | --- |
| array | <code>Array.&lt;Promise&gt;</code> | 
| f | <code>function</code> | 


* * *

<a name="PromiseUtils+timeout"></a>

### promiseUtils.timeout(promise, [ttl], [timeoutException]) ⇒ <code>Promise</code>
In essence this lets you wrap a promise in a timeout such that if the
timeout occurs before the promise resolves or reject, this rejects.

Returns a promise that will resolve/reject if the passed in promise resolves
or rejects before the passed in ttl time has elapsed. If the ttl time does
elsapse, the returned promise will reject (with the optional exception) and
the passed in promise resolve or reject will be swallowed.

**Kind**: instance method of [<code>PromiseUtils</code>](#PromiseUtils)  

| Param | Type | Default |
| --- | --- | --- |
| promise | <code>Promise</code> |  | 
| [ttl] | <code>number</code> | <code>30000</code> | 
| [timeoutException] | <code>Error</code> | <code>new Error(&quot;Timed  out.&quot;)</code> | 


* * *

<a name="VMUtils"></a>

## VMUtils
Utilities for working with the underlying virtual machine.

**Kind**: global class  

* [VMUtils](#VMUtils)
    * [.executionLine(depth)](#VMUtils+executionLine) ⇒ <code>number</code>
    * [.executionSource(depth)](#VMUtils+executionSource) ⇒ <code>string</code>
    * [.executionSourceAndLine(depth)](#VMUtils+executionSourceAndLine) ⇒ <code>string</code>
    * [.executionStack([start], [end])](#VMUtils+executionStack) ⇒ <code>Array.&lt;Object&gt;</code>


* * *

<a name="VMUtils+executionLine"></a>

### vmUtils.executionLine(depth) ⇒ <code>number</code>
Returns the line number of the code of the line that called the line() function.
This works by throwing and catching an exception and then reading the stack
trace of the exception and finding the info it needs.

*depth* specifies how far back into the stack we should go. So if you want
the caller of this function, set it to 0 (or omit it). If you want the
caller of the caller of this function, set it to 1. etc.

**Kind**: instance method of [<code>VMUtils</code>](#VMUtils)  

| Param | Type | Default |
| --- | --- | --- |
| depth | <code>number</code> | <code>0</code> | 


* * *

<a name="VMUtils+executionSource"></a>

### vmUtils.executionSource(depth) ⇒ <code>string</code>
Returns the filename of the code that called this function.
This works by throwing and catching an exception and then reading the stack
trace of the exception and finding the info it needs.

*depth* specifies how far back into the stack we should go. So if you want
the caller of this function, set it to 0 (or omit it). If you want the
caller of the caller of this function, set it to 1. etc.

**Kind**: instance method of [<code>VMUtils</code>](#VMUtils)  

| Param | Type | Default |
| --- | --- | --- |
| depth | <code>number</code> | <code>0</code> | 


* * *

<a name="VMUtils+executionSourceAndLine"></a>

### vmUtils.executionSourceAndLine(depth) ⇒ <code>string</code>
Returns the filename and line number of the code that called this function.
This works by throwing and catching an exception and then reading the stack
trace of the exception and finding the info it needs.

*depth* specifies how far back into the stack we should go. So if you want
the caller of this function, set it to 0 (or omit it). If you want the
caller of the caller of this function, set it to 1. etc.

**Kind**: instance method of [<code>VMUtils</code>](#VMUtils)  

| Param | Type | Default |
| --- | --- | --- |
| depth | <code>number</code> | <code>0</code> | 


* * *

<a name="VMUtils+executionStack"></a>

### vmUtils.executionStack([start], [end]) ⇒ <code>Array.&lt;Object&gt;</code>
Returns the currently running stack trace, as an array of objects (see below)
that describes where in the current execution stack the application
currently is.

The returned array is comprised of stack entry objects which
have the following shape:

```
entry = {
  entry: string - the full stack trace entry string
  method: the method name from the stack trace entry
  source: the filename the method is in
  line: the line number the execution is on
  position: the line position the execution is on
}
```

**Kind**: instance method of [<code>VMUtils</code>](#VMUtils)  

| Param | Type | Default |
| --- | --- | --- |
| [start] | <code>Number</code> | <code>0</code> | 
| [end] | <code>Number</code> | <code>10</code> | 


* * *

