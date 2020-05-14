function findMinAndRemove(array){
    let minIdx
    let min = array[0]
    for(let i = 0; i < array.length; i++) {
        let element = array[i]
        if(element < min) {
            min = element;
            minIdx = i 
        }
    }
    array.splice(minIdx, 1)
    return min;
}

function insertionSort(array){
    let newMin; 
    let sortedArr = [];
    while(array.length > 0) {
        newMin = findMinAndRemove(array)
        sortedArr.push(newMin)
    }
    return sortedArr
}
