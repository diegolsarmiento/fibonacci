function fib(num) {
 	let serie = [];
  
    for (let i=0; i <= num; i++){
     if (i>=2) {
      serie.push((i-1) + (i-2)); 
      } else {
       serie.push(i);
      }
    }
      
     return console.log(serie[num-1]);
}
  
 fib(4);
