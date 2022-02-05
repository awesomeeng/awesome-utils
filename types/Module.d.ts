declare const _exports: ModuleUtils;
export = _exports;
/**
 * Utilities for working with modules, or understanding the code itself.
 */
declare class ModuleUtils {
    /**
     * Resolves a given filename relative to a given module.
     *
     * @param  {Module} mod
     * @param  {string} filename
     *
     * @return {string}
     */
    resolve(mod: any, filename: string): string;
    /**
     * Requires a filename, relative to a given module.
     *
     * @param  {Module} mod
     * @param  {string} filename
     *
     * @return {string}
     */
    require(mod: any, filename: string): string;
    /**
     * Removes a module from the require cache, thus making it
     * reload again if required. Also, any children that
     * were loaded by the given module are also removed.
     *
     * Returns the total number of modules removed.
     *
     * You may optional indicate if the unrequire should remove
     * dependant children as well. This can have unwanted side-effects
     * so use with caution.
     *
     * @param  {module|string} mod
     * @param  {boolean} [removeChildren=false] removeChildren
     * @return {number}
     */
    unrequire(mod: any, removeChildren?: boolean): number;
    /**
     * Returns the filename of the code that called this function.
     * This works by throwing and catching an exception and then reading the stack
     * trace of the exception and finding the info it needs.
     *
     * *depth* specifies how far back into the stack we should go. So if you want
     * the caller of this function, set it to 0 (or omit it). If you want the
     * caller of the caller of this function, set it to 1. etc.
     *
     * @param {number} depth
     *
     * @return {string}
     */
    moduleSource(mod: any, depth?: number): string;
    /**
     * Returns the module require stack for the given module. That is, how
     * was the given module imported (required) into the current execution.
     *
     * This returns an array of strings, which are the module
     * ancestor module.id values.
     *
     * @param  {module} mod
     * @param  {Number} [start=0]
     * @param  {Number} [end=start+10]
     * @return {Array<String>}
     */
    moduleStack(mod: any, start?: number, end?: number): Array<string>;
}
//# sourceMappingURL=Module.d.ts.map