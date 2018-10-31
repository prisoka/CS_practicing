// O(n2)

// var current minimun = left-most point in the unsorted section
// compare current minimun to each item in the unsorted section
  // if any item is < current minimun, set that item to current minimun
  // at the end fo the unsorted section, current minimun must be the absolute minimun value in the unsorted array
// swap the absolute minimun to the left-most index in the unsorted section. This item is now the right-most member of the sorted section

function swap(array, i, j){
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function selectionSort(array){
  for (let i = 0; i < array.length; i++){
    let currMin = i

    for (let j = i + 1; j < array.length; j++){
      if (array[j] < array[currMin]){
        currMin = j
      }
    }

    if (i !== currMin){
      swap(array, i, currMin)
    }
  }
  return array
}
