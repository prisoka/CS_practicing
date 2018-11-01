// function merge(arr1, arr2) {
  // declare a new empty array
  // declare pointers corresponding to indices in arr1 and arr2, and set them to 0
  // if the first element in arr1 < first element in arr2, push the first element in arr1 to the new array, and move the pointer for arr1 one spot to the right. Otherwise, do this for arr2.
  // Repeat process until gone through one of the arrays
  // return the new array, concatenated with whatever elements are remaining from the array that you haven't exhausted yet.
// }

function merge(arr1, arr2){
  let newArr= []
  // declare a new array to store the merged result, set it to empty

  let leftPointer = 0
  let rightPointer = 0
  // declare pointers corresponding to indices in arr1 and arr2, and set them both to 0

  while(leftPointer < arr1.length && rightPointer < arr2.length){
    if (arr1[leftPointer] < arr2[rightPointer]){
      newArr.push(arr1[leftPointer++])
    } else {
      newArr.push(arr2[rightPointer++])
    }
    // if the first element in arr1 < first element in arr2, PUSH arr1 element to new array, and move the pointer arr1 one spot to the right. Otherwise, do this for arr2.
    // repeat the process until gone  gone through one of the arrays
  }

  return newArr.concat(arr1.slice(leftPointer)).concat(arr2.slice(rightPointer))
  // return new array, concatenated with whatever elements are remaining from the array that you haven't exhausted yet.
}
