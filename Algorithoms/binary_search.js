// Binary search always work on a sorted array
// if the array is not sorted at first you need to sort the array then perform binary search.....
// Time complexity O(logn)


function binarySearch(arr, targer) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
  

    if (arr[mid] < targer) {
      min = mid + 1;
    } else if (arr[mid] > targer) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],10))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],88))
