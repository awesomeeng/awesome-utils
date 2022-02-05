export = DateFormatParser;
declare class DateFormatParser {
    parse(date: any, format: any): string;
    parseFormat(date: any): string;
    parseYear(date: any): string;
    parseMonth(date: any): any;
    parseDay(date: any): any;
    parseDOW(date: any): string;
    parseAMPM(date: any): "am" | "pm" | "AM" | "PM";
    parseHour24(date: any): any;
    parseHour12(date: any): any;
    parseHour24Plus1(date: any): any;
    parseMinute(date: any): any;
    parseSecond(date: any): any;
    parseMillisecond(date: any): any;
    parseTimezone(): "-0000" | "-00:00" | "UTC";
    parseTimestamp(date: any): string;
}
//# sourceMappingURL=DateFormatParser.d.ts.map