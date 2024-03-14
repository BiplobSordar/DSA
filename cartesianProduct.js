// time complexity Big-O(n^&2)=Quadratic
// if two array has same length the the time complexity is O(n^2)
// if two array has not the same length then the time complexity is O(mn)


function cartisianProduct(arr1,arr2){
    let result=[]
    for(let i=0;i<arr1.length;i++){
        for (let j=0;j<arr2.length;j++){
            result.push([arr1[i],arr2[j]])

        }
    }

    return result
}


console.log(cartisianProduct([1,2],[7,8,9]))