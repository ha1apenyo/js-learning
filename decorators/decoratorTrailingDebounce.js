function debounce(func, ms) {
        let timeout = null;
    let wrapper = function(...args) {
        if(timeout) {
            clearTimeout(timeout)
        };
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, ms);                
    };
    return wrapper;

}

let f = debounce(console.log, 2000);

f(12);
f(11);
f(10);

