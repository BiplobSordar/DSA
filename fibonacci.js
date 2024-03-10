// time complexity O(n) linear

function fibonacci(n=1){
    const fib=[0,1]
    if(n<2){
        return fib
    }
    for (let i=2;i<n;i++){
        fib[i]=fib[i-2]+fib[i-1]
    }
    return fib
}

console.log(fibonacci(10))
console.log(fibonacci(8))
console.log(fibonacci(1))
console.log(fibonacci(2))
