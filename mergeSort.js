function merge(array1, array2){
  let newArr = []
  let leftPointer = 0
  let rightPointer = 0

  while(leftPointer < array1.length && rightPointer < array2.length){
    if(array1[leftPointer] < array2[rightPointer]){
      newArr.push(array1[leftPointer++])
    } else {
      newArr.push(array2[rightPointer++])
    }
  }

  return newArr.concat(array1.slice(leftPointer)).concat(array2.slice(rightPointer))
}

// Merge Sort using recursion:
function mergeSort (array) {
  // create base case:
  if (array.length === 1) {
    return array
  }

  // recursion case: split the array until arrays of one single element that I'm sure is sorted
  let midPoint = array.length/2
  let arrayA = array.slice(0, midPoint)
  let arrayB = array.slice(midPoint)

  arrayA = mergeSort(arrayA)
  arrayB = mergeSort(arrayB)

  return merge(arrayA, arrayB)
  // then apply merge to each sub-tree
}
