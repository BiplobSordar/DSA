// Time complexity Big O(n^2) 
// insertion sort always start with index 1 and Compeared with the previous index or left index


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > cur) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = cur
    }
    return arr
}
console.log(insertionSort([-88,2,1,22,55,-5,-6,-8,8,9,6,2,0]))