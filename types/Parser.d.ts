export = Utils;
declare const Utils: ParserUtils;
declare class ParserUtils {
    /**
     * @type Class
     */
    get AbstractParser(): any;
    isSpace(c: any): boolean;
    isNewLine(c: any): boolean;
    isWhiteSpace(c: any): boolean;
    isDigit(c: any): boolean;
    isLetter(c: any): boolean;
}
//# sourceMappingURL=Parser.d.ts.map