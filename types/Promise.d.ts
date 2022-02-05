declare const _exports: PromiseUtils;
export = _exports;
/**
 * Utilities for dealing with Promises.
 */
declare class PromiseUtils {
    /**
     * Creates a promise that resolves after n milliseconds. Great for usage
     * with await for delaying some period of time.
     *
     * @param  {number} duration
     * @return {Promise}
     */
    sleep(duration: number): Promise<any>;
    /**
     * Execute the given function for each cell of the array, in series order.
     * If the given function returns a Promise, the promise will await resolution
     * before the function is called next.  This creates a series execution of
     * an array of Promise executions.  On a reject, all remaining executions
     * are skipped.
     *
     * The given function is called with the signature
     * f(item,index,originalArray,resultsArray).
     *
     * @param  {Array<Promise>} array
     * @param  {Function} f
     * @return {Promise}
     */
    series(array: Array<Promise<any>>, f: Function): Promise<any>;
    /**
     * In essence this lets you wrap a promise in a timeout such that if the
     * timeout occurs before the promise resolves or reject, this rejects.
     *
     * Returns a promise that will resolve/reject if the passed in promise resolves
     * or rejects before the passed in ttl time has elapsed. If the ttl time does
     * elsapse, the returned promise will reject (with the optional exception) and
     * the passed in promise resolve or reject will be swallowed.
     *
     * @param  {Promise} promise
     * @param  {number} [ttl=30000]
     * @param  {Error}  [timeoutException=new Error("Timed  out.")]
     * @return {Promise}
     */
    timeout(promise: Promise<any>, ttl?: number, timeoutException?: Error): Promise<any>;
}
//# sourceMappingURL=Promise.d.ts.map