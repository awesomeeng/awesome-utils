declare const _exports: VMUtils;
export = _exports;
/**
 * Utilities for working with the underlying virtual machine.
 */
declare class VMUtils {
    /**
     * Returns the line number of the code of the line that called the line() function.
     * This works by throwing and catching an exception and then reading the stack
     * trace of the exception and finding the info it needs.
     *
     * *depth* specifies how far back into the stack we should go. So if you want
     * the caller of this function, set it to 0 (or omit it). If you want the
     * caller of the caller of this function, set it to 1. etc.
     *
     * @param {number} depth
     *
     * @return {number}
     */
    executionLine(depth?: number): number;
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
    executionSource(depth?: number): string;
    /**
     * Returns the filename and line number of the code that called this function.
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
    executionSourceAndLine(depth?: number): string;
    /**
     * Returns the currently running stack trace, as an array of objects (see below)
     * that describes where in the current execution stack the application
     * currently is.
     *
     * The returned array is comprised of stack entry objects which
     * have the following shape:
     *
     * ```
     * entry = {
     *   entry: string - the full stack trace entry string
     *   method: the method name from the stack trace entry
     *   source: the filename the method is in
     *   line: the line number the execution is on
     *   position: the line position the execution is on
     * }
     * ```
     *
     * @param  {Number} [start=0]
     * @param  {Number} [end=10]
     * @return {Array<Object>}
     */
    executionStack(start?: number, end?: number): Array<any>;
}
//# sourceMappingURL=VM.d.ts.map