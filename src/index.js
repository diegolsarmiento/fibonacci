function fib(num) {
	if (num < 2) return num;
    // Inefficient but does the job
    return fib(num-1) + fib(num-2);
}
 console.log(fib(8));

