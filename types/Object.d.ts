declare const _exports: ObjectUtils;
export = _exports;
/**
 * Object utility functions.
 */
declare class ObjectUtils {
    /**
     * Returns true oif the given object is a "plain" javascript object, meaning it
     * doesn't inherit from some other type of js object like an array, date, error, etc.
     *
     * @param  {Object}  obj
     * @return {Boolean}
     */
    isPlainObject(obj: any): boolean;
    /**
     * deep clone of each given source into the target.
     *
     * @param  {Object|null} target
     * @param  {Object} sources
     * @return {Object}
     */
    extend(target: any | null, ...sources: any): any;
    deepStrictEqual(a: any, b: any): boolean;
    /**
     * Call Object.freeze() on the object and each property of the
     * object, essentially freezing the entire structure.
     *
     * @param  {Object} obj
     * @return {void}
     */
    deepFreeze(obj: any): void;
    /**
     * Return an array of all possible paths for a given object.
     *
     * @param  {Object}  obj
     * @param  {string}  path
     * @param  {Boolean} [leafsOnly=false]
     * @param  {String}  [delimiter="."]
     * @return {Array<string>}
     */
    paths(obj: any, path: string, leafsOnly?: boolean, delimiter?: string): Array<string>;
    /**
     * Get a value for a given path of a given object.
     *
     * @param  {Object} obj
     * @param  {string} path
     * @param  {*} [defaultValue=undefined]
     * @param  {String} [delimiter="."]
     * @return {*}
     */
    get(obj: any, path: string, defaultValue?: any, delimiter?: string): any;
    /**
     * Set a value for a given path of a given object.
     *
     * @param {Object} obj
     * @param {string} path
     * @param {*} value
     * @param {String} [delimiter="."]
     * @return {Object}
     */
    set(obj: any, path: string, value: any, delimiter?: string): any;
    /**
     * Delete a value for a given path of a given object.
     *
     * @param  {Object}  obj
     * @param  {string}  path
     * @param  {Boolean} [prune=true]
     * @param  {String}  [delimiter="."]
     * @return {Object}
     */
    delete(obj: any, path: string, prune?: boolean, delimiter?: string): any;
}
//# sourceMappingURL=Object.d.ts.map