// Sorted array
// O(log n)

// function binarySearch(array, target)
  // var start = 0
  // var stop = array.length - 1
  // var mid = (start+stop)/2
  // while mid != target AND array doens't have a single item
    // if target < arry[mid]
      // stop = mid -1
    // else
      // start = mid + 1
    // recalculate mid
    // fi mid = target, return mid, otherwise -1

function binarySearch(array, target){
  let start = 0
  let stop = array.length - 1
  let mid = Math.floor((start+stop) / 2)

  while(array[mid] !== target && start < stop) {
    if (target < array[mid]){
      stop = mid - 1
    } else {
      start = mid + 1
    }
    mid = Math.floor((start+stop) / 2)
  }
  return array[mid] === target ? mid : -1
}
