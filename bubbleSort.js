// time complexity Big-O(n^2)=Quaditic


function bubbleSort(arr){
   
    let swaped
    do{
        swaped=false
        for (let i=0;i<arr.length-1;i++){
           if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swaped=true

           }
        }
    }while(swaped)

 
    return arr

}



console.log(bubbleSort([8,20,-2,4,-6]))