function debounce(func, ms) {
    let isCooldown = false;
    let wrapper = function(...args) {
        if(!isCooldown) {
            func.apply(this, args);
            isCooldown = true;
            setTimeout(() => isCooldown = false, ms);
        }
    }
    return wrapper;
}

let f = debounce(console.log, 2000);

f(12);
f(11);
f(10);