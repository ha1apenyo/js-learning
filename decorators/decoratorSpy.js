function work(...nums) {
  let sum = 0;
  for(let num of nums) {
      sum += num;
  }
  console.log(sum);
}

function spy(func) {
  let wrapper = function(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  };
  wrapper.calls = [];
  return wrapper;
}

work = spy(work);

work(1, 2, 3);
work(6, 7);

console.log(work.calls);