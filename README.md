## Method/Function/Kill

Methods! They're cool!

1. fork
2. clone
3. `jest --watch-all`


### Guidelines

* Be SURE not to use arrow functions for your methods. Here is a good explanation of what happens when you do so, but the short of it is: your `this` won't work, and besides you don't gain anything, since you're rarely using a method as an inline function.


### Hints

1. Pay careful attention to what `main.test.js` says, as well as both your terminal's descriptions of each test and the differences between what `jest` said it Expects and Receives.
2. Remember that `this` always refers to the particular object the method is in. So if you call `person1.someMethod()`, `this` is `person1`, whereas if you call `person2.someMethod()`, `this` will be `person2`. You'll be using `this` a lot here!
3. For `divorce`, look up how to remove a property from an object. You're probably not gonna just have that memorized!
