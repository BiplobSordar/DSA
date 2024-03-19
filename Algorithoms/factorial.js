// Time complexity O(n)Linear   

function factorial(n=0){
    // console.log(n)
    let result=1
    for (let i=n;i>1;i--){
       result=result*i
    }
    return result
    
}
console.log(factorial(5))
console.log(factorial(1))
console.log(factorial(0))
