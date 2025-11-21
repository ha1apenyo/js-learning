function f(a) {
    console.log(a);
}

function throttle(func, ms) {
    let isThrottle = false;
    let savedThis = null;
    let savedArgs = null;
   let wrapper = function(...args) {

    if(isThrottle) {
        savedThis = this;
        savedArgs = args;
      } else {
        func.apply(this, args);
        isThrottle = true;
        setTimeout(() => {
            isThrottle = false;
            if(savedArgs !== null && savedThis !== null) {
            func.apply(savedThis, savedArgs);
            };
            savedThis = null;
            savedArgs = null;
        }, ms);
    };
   }
    return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1234);
f1000(21);
f1000(22);
f1000('chuesh');