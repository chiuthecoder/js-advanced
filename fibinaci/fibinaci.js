//fibinaci

function fib(n){
  if(n<2){
    return n;
  }
  return fib(n-1)+fib(n-2);
}
console.log(fib(8));


/*
function fib(n){
  if(n===0){
    return 0;
  }
  else if(n===1){
  	return 1;
  }
  return fib(n-1)+fib(n-2);
}
console.log(fib(8));
*/