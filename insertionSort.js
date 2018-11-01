// if the array is already sort = O(n)
// but in general, the complexity is O(n2)

// Select the left-most item in the unsorted section, call this the current item.
// Select the right-most index of the sorted section and call this element current sorted item.
  // Compare the current item to the current sorted item
  // If current item is less than the value of current sorted item, swap the two.
  // Now update current sorted item to be the item to the left of current item's new position.
  // Repeat this process until current item is greater than or equal to the current sorted item. Now current item is part of the sorted section.
// Repeat until the unsorted section is empty.

function swap(array, i, j){
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function insertionSort(array){
  
}
