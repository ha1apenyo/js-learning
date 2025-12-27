'use strict';

function SafeCounter(start) {
    Object.defineProperty(this, 'value', {value: start, enumerable: false, writable: true, configurable: false});
}

Object.defineProperties(SafeCounter.prototype, {
    inc: {value: function() {return ++this.value}, enumerable: false, writable: false, configurable: false},
    dec: {value: function() {return --this.value}, enumerable: false, writable: false, configurable: false},
    get: {value: function() {return this.value}, enumerable: false, writable: false, configurable: false}
});

let c1 = new SafeCounter(0);

console.log(c1.get());

Object.preventExtensions(SafeCounter.prototype);
console.log(Object.isExtensible(SafeCounter.prototype));
