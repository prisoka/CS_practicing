// O(n2)

// for each element in the array, look at the element to the right
  // if the value on the left > value on the right, swap the two values
  // keep swapping until you are at the end of the array
  // then move into the next element in the array and repeat
  // return array

function swap(array, i, j){
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function bubbleSort(array){
  let done = false

  while(!done){
    done = true
    for (let i = 0; i < array.length; i++){
      if (array[i] < array[i-1]){
        done = false
        swap(array, i, i-1)
      }
    }
  }
  return array
}
