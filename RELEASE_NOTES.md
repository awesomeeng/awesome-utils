# AwesomeUtils Release Notes

#### **Version 1.6.0**

 - Adds typescript typings for easier usage.

#### **Version 1.5.1**

 - updated dependencies.

 - Fixes an error where null values would be returned as undefined when using Object.get.

#### **Version 1.5.0**

 - AwesomeUtils.Request: Adds abort and timeout events cause rejection in requests.

#### **Version 1.4.10**

 - AwesomeUtils.Net: Fixes Net.portInUse() to work under node 11 or later.

#### **Version 1.4.9**

 - AwesomeUtils.FS: Fixes minor error in FS.recursiveMkdir that would occur when running in linux.

#### **Version 1.4.8**

 - AwesomeUtils.MimeTypes: Adds MimeTypes utilities.

#### **Version 1.4.7**

 - AwesomeUtils.FS: Changes FS.stat and FS.statSync to resolve or return null if the file is not found.

#### **Version 1.4.6**

 - Updating dependencies.

#### **Version 1.4.5**

 - AwesomeUtils.Array: Adds Array.unique().

 - AwesomeUtils.FS: Changes exist to return false on an error.

 - AwesomeUtils.FS: fixes bug in asyncronous exists call which would return true even if file didnt exist.

 - AwesomeUtils.Workers: Adds Workers.create() as shortcut to new Worker().

#### **Version 1.4.4**

 - AwesomeUtils.Request: Fix minor bugs in contentType and contentEncoding parsers. Adds contetType and contentEncoding properties to response object.

#### **Version 1.4.3**

 - AwesomeUtils.FS: Minor refactor for recursiveRmdirSync not removing sub-directories.

#### **Version 1.4.2**

 - AwesomeUtils.ANSI: Fixes minor edge error.

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
