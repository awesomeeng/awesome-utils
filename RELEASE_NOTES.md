# AwesomeUtils Release Notes

#### **Version 1.4.1**

 - AwesomeUtils.Workers: Changes lock to use -1 as the unlocked value. Adds initializeLock() function.

 - AwesomeUtils.Workers: Fixes a bug in Workers.lock() and related where it would throw an exception when worker_threads not available in node.

 - Documentation: Fix minor typo in documetation.

 - Documentation: Merge pull request #1 from skratchdot/patch-1

 - Documentation: fixing small typo in documentation.

#### **Version 1.4.0**

 - AwesomeUtils.Workers: Switch worker locks to use threadId instead of processId since workers use the same processId as their parents.
 - AwesomeUtils.Workers: Renamed lock methods. no longer require SAB for lock objects.
 - AwesomeUtils.Workers: Adds lock/unlock for workers and SharedArrayBuffers.
 - AwesomeUtils.Workers: Added. Utilities for working with worker_threads.
 - AwesomeUtils.Request: Adds better parsing of contentType and contentEncoding.
 - AwesomeUtils.Request: Use lowercase header names, more in line with how node does it.
 - AwesomeUtils.Sequence: Added. For generating sequence number.
 - AwesomeUtils.Request: Added. HTTP Request utilities.
 - AwesomeUtils.Random: Fixed typo in names().
 - AwesomeUtils.Compartor: Added. Utilities for sorting.
 - AwesomeUtils.Promise: Adds timeout().

#### **Version 1.3.0**

 - AwesomeUtils.Object: Adds Object.deepStrictEqual().
 - AwesomeUtils.Promise: Fixes Promise.series() to work as expected. Prior to this the promises would each start when created, and then series() was just waiting on them resolving. Now you pass series an array and a function to execute for each cell in the array. If the function returns a promise, series() waits for that promise to resolve before moving to the next item in the series. This is a change to how series() is structured.
 - AwesomeUtils.Random: Adds Random.uuid().
 - AwesomeUtils.Promise: Adds tests for Promise.sleep() and Promise.series().

#### **Version 1.2.0**

 - AwesomeUtils.Module/AwesomeUtils.VM: Splits the Module.stack() call up into module.moduleStack() and VM.executionStack() as these are different things.

#### **Version 1.1.2**

 - AwesomeUtils.Object: Make Object.deepFreeze() try not to freeze primatives.

#### **Version 1.1.1**

 - AwesomeUtils.Object: Adds Object.deepFreeze().

#### **Version 1.1.0**

 - Bug fixes for various parts.

#### **Version 1.0.2**

 - Bug fixes for various parts.

#### **Version 1.0.1**

 - Bug fixes for various parts.

#### **Version 1.0.0**

 - Initial release.
