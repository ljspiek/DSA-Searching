function binarySearch(arr, value, start, end) {
    start = start === undefined ? 0 : start
    end = end === undefined ? arr.length : end
    
    if (start > end) {
        return -1
    }

    const index = Math.floor((start + end) / 2)
    const item = arr[index]

    console.log(item)

    if(item == value) {
        return index
    }

    else if(item < value) {
    
        return binarySearch(arr, value, index + 1, end)
    }

    else if(item > value) {
    
        return binarySearch(arr, value, start, index - 1)
    }

}

module.exports = binarySearch

//Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.



binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8);

//Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16

binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16)