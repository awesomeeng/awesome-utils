# AwesomeUtils Release Notes

#### **Version 1.3.0**

 - Adds Object.deepStrictEqual().
 - Fixes Promise.series() to work as expected. Prior to this the promises would each start when created, and then series() was just waiting on them resolving. Now you pass series an array and a function to execute for each cell in the array. If the function returns a promise, series() waits for that promise to resolve before moving to the next item in the series. This is a change to how series() is structured.
 - Adds Random.uuid().
 - Adds tests for Promise.sleep() and Promise.series().

#### **Version 1.2.0**

 - Splits the Module.stack() call up into module.moduleStack() and VM.executionStack() as these are different things.

#### **Version 1.1.2**

 - Make Object.deepFreeze() try not to freeze primatives.

#### **Version 1.1.1**

 - Adds Object.deepFreeze().

#### **Version 1.1.0**

 - Bug fixes for various parts.

#### **Version 1.0.2**

 - Bug fixes for various parts.

#### **Version 1.0.1**

 - Bug fixes for various parts.

#### **Version 1.0.0**

 - Initial release.
