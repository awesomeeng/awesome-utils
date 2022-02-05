declare const _exports: DateUtils;
export = _exports;
/**
 * Utilities for working with dates.
 */
declare class DateUtils {
    /**
     * Returns the number of milliseconds in a single second.
     */
    get SECOND(): number;
    /**
    * Returns the number of milliseconds in a single minute.
    */
    get MINUTE(): number;
    /**
    * Returns the number of milliseconds in a single hour.
    */
    get HOUR(): number;
    /**
    * Returns the number of milliseconds in a single day.
    */
    get DAY(): number;
    /**
    * Returns the number of milliseconds in a single week.
    */
    get WEEK(): number;
    /**
     * Returns an array of the days of the week, in english.
     */
    get DAYS_OF_WEEK(): any[];
    /**
     * Returns an array of the shortened 3 character days of the week, in english.
     */
    get DAYS_OF_WEEK3(): any[];
    /**
     * Returns an array of the shortened 2 character days of the week, in english.
     */
    get DAYS_OF_WEEK2(): any[];
    /**
     * Returns an array of the months of the year, in english.
     */
    get MONTHS(): any[];
    /**
     * Returns an array of the shortened 3 character months of the year, in english.
     */
    get MONTHS3(): any[];
    /**
     * Given some date, floor it to the nearest `to` argument, where `to` is some
     * number of milliseconds. For example, to floor to the nearest minute you
     * would do `floor(date,60000)` where `60000` is the number of milliseconds in
     * a single date.  You can use this in conjunction with `SECOND`, `MINUTE`,
     * `HOUR`, and `DAY`. See also `floorSecond()`, `floorMinute()`, `floorHour()`,
     * and `floorDay()` below.
     *
     * @param  {Date|number|string}
     * @param  {Number}
     * @return {Date}
     */
    floor(date: any, to?: number): Date;
    /**
     * Floor the given date to the nearest second.
     *
     * @param  {Date|number|string}
     * @return {Date}
     */
    floorSeconds(date: any): Date;
    /**
    * Floor the given date to the nearest minute.
    *
    * @param  {Date|number|string}
    * @return {Date}
    */
    floorMinutes(date: any): Date;
    /**
    * Floor the given date to the nearest hour.
    *
    * @param  {Date|number|string}
    * @return {Date}
    */
    floorHours(date: any): Date;
    /**
    * Floor the given date to the nearest day.
    *
    * @param  {Date|number|string}
    * @return {Date}
    */
    floorDays(date: any): Date;
    /**
     * Given some date or date line object, return a Date object.  This allows
     * you to quickly move between different types of date like objects.  It
     * will parse numbers as a unix epoch, a string of numbers as a unix epoch,
     * JS Date object as a Date Object, or a String as a `Date.parse()` call.
     *
     * Basically, it does its best to return a Date Object or an exception.
     *
     * @param  {Date|number|string}
     * @return {Date}
     */
    from(date: any): Date;
    /**
     * Given some date, compute what day of the year it is.
     *
     * @param  {Date|number|string}
     * @return {number}
     */
    computeDayOfYear(date: any): number;
    /**
     * Format a given date using a given pattern.  Patterns are built using the following chart similar to
     * how momentjs, datejs, php strftime, Java SimpleDateFormat, etc.
     *
     * You use one or more of the patterns from above to create a pattern.  You may also use literals in your
     * pattern like `YYYYMMDD'T'HHMMSSSSS'ZULU'` where both 'T' and 'ZULU' are literals and are inserted verbatim.
     *
     * | Pattern | Substitution                             | Example against July 20, 1969, 20:18:04.017 UTC |
     * |---------|------------------------------------------|-------------------------------------------------|
     * | YY      | 2 digit year.                            | 69                                              |
     * | YYYY    | 4 digit year.                            | 1969                                            |
     * | M       | numeric month, not zero filled.          | 7                                               |
     * | MM      | numeric month, zero filled.              | 07                                              |
     * | MMM     | shortened 3 character month name.        | Jul                                             |
     * | MMMM    | full month name                          | July                                            |
     * | D       | numeric day of month, not zero filled.   | 20                                              |
     * | DD      | numeric day of month, zero filled.       | 20                                              |
     * | DDD     | numeric day of year, not zero filled.    | 200                                             |
     * | DDDD    | numeric day of year, zero filled.        | 200                                             |
     * | d       | numeric day of the week (0=sunday).      | 0                                               |
     * | dd      | shortened 2 character day of the week    | Su                                              |
     * | ddd     | shortened 3 character day of the week    | Sun                                             |
     * | dddd    | full textual day of the week             | Sunday                                          |
     * | A       | AM or PM.                                | PM                                              |
     * | a       | am or pm.                                | pm                                              |
     * | H       | 24 0 based hour of day, not zero filled. | 20                                              |
     * | HH      | 24 0 based hour of day, zero filled.     | 20                                              |
     * | h       | 12 hour of day, not zero filled.         | 8                                               |
     * | hh      | 12 hour of day, zero filled.             | 8                                               |
     * | k       | 24 1 based hour of day, not zero filled. | 21                                              |
     * | kk      | 24 1 based hour of day, zero filled.     | 21                                              |
     * | m       | minute of hour, not zero filled.         | 18                                              |
     * | mm      | minute of hour, zero filled.             | 18                                              |
     * | s       | second of minute, not zero filled.       | 4                                               |
     * | ss      | second of minute, zero filled.           | 04                                              |
     * | S       | milliseconds of second, not zero filled. | 17                                              |
     * | SSS     | milliseconds of second, zero filled.     | 017                                             |
     * | z       | textual time zone                        | UTC                                             |
     * | Z       | relative time zone with separator        | -00:00                                          |
     * | ZZ      | relative time zone without separator     | -0000                                           |
     * | X       | unix timestamp (seconds)                 | -14182916                                       |
     * | x       | unix timestamp (milliseconds)            | -14182916000                                    |
     *
     * @param  {Date|number|string}
     * @param  {string} pattern
     * @return {string}
     */
    format(date: any, pattern: string): string;
}
//# sourceMappingURL=Date.d.ts.map