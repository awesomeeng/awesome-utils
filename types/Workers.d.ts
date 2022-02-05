declare const _exports: WorkerUtils;
export = _exports;
declare class WorkerUtils {
    get enabled(): boolean;
    get Workers(): any;
    get threadId(): any;
    create(filename: any, options: any): any;
    initializeLock(lock: any, index?: number): void;
    /**
     * Returns true of the lock was obtained, false otherwise.
     *
     * @param  {Int32Array} lock
     * @param  {number} index
     * @return {boolean}
     */
    lock(lock: Int32Array, index?: number): boolean;
    unlock(lock: any, index?: number): boolean;
    locked(lock: any, index?: number): boolean;
    isLocked(lock: any, index?: number): boolean;
    isLockOwner(lock: any, index?: number): boolean;
    waitForLock(lock: any, index?: number, frequency?: number, timeout?: number): any;
    waitLock(lock: any, index?: number, frequency?: number, timeout?: number): any;
    blockUntilLocked(lock: any, index?: number): void;
    blockLock(lock: any, index?: number): void;
}
//# sourceMappingURL=Workers.d.ts.map