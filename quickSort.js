// always select a pivot for start the quick sort
// divide the original array using the pivot and if array element is<pivot then push it in the left array else push it right array.
// if(arr.length<2) terminate the execution...


// time Complexity O(nlogn)
// we using recursion in quickSort



function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}


console.log(quickSort([ -2, 4, -6, 8, 20 ]))