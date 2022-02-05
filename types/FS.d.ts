declare const _exports: FSUtils;
export = _exports;
declare class FSUtils {
    exists(path: any): any;
    existsSync(path: any): boolean;
    list(path: any, filesOnly?: boolean): any;
    listSync(path: any, filesOnly?: boolean): any;
    recursiveList(path: any, matcher: any, filesOnly?: boolean): any;
    recursiveListSync(path: any, matcher: any, filesOnly?: boolean): any;
    recursiveMkdirSync(path: any): void;
    /**
     * This removes the given path and everything it contains.  IT IS HIGHLY
     * DESTRUCTIVE AND SHOULD BE USED WITH CARE.
     *
     * @param  {string} path
     * @return {void}
     */
    recursiveRmdirSync(path: string): void;
    stat(path: any): any;
    statSync(path: any): any;
}
//# sourceMappingURL=FS.d.ts.map