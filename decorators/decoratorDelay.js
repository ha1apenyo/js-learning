function f(x) {
    console.log(x);
}

function delay(func, ms) {
    let wrapper = function(...args) {
        setTimeout(() => {func.apply(this, args)}, ms);
    }
    return wrapper;
}

let f1500 = delay(f, 1500);

f1500(1234);