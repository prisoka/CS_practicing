// O(n)

// function linearSearch(array, target)
  // loop through each value in the array and compare the value of the current index to the given target
    // if array[i] = target, return index
  // after loop, if target not found, return -1

function linearSearch(array, target){
  for (let i = 0; i < array.length; i++){
    if (array[i] === target){
      return i
    }
  }
  return -1
}
