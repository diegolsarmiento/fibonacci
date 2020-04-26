// Sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

function fib(num) {
  if (num < 2) return num;
  // Inefficient but does the job
  return fib(num-1) + fib(num-2);
}

// Memoization to optimize calls for the algorithm
function memoize(fn) {
  const cache = {};
  return function (...args){
   if (cache[args]){
    return cache[args]; 
   }
    const result = fn.apply(this,args);
    cache[args] = result;
    return result;
  }
}

const fibOpt = memoize(fib);
console.log(fibOpt(7));
