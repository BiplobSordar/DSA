function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length)



  


}


function search(arr,target,min,max){

    if(min>max){
        return -1
    }
    let mid=Math.floor((min+max)/2)

    if(target===arr[mid]){
        return mid
    }

    if(target<mid){
        return search(arr,target,0,mid-1)

    }else{
        return search(arr,target,mid+1,max)
    }

}
console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7))
console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],10))
console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],88))