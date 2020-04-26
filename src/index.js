function fib(num) {
 // Inneficient but does the job
	if (num < 2) return num;
    
    return fib(num-1) + fib(num-2);
}
 console.log(fib(8));

