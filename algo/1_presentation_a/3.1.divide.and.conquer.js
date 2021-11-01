
// Binary search 

function binarySearch(items, value){
  let firstIndex  = 0,
      lastIndex   = items.length - 1,
      middleIndex = Math.floor((lastIndex + firstIndex)/2);

  while(items[middleIndex] != value && firstIndex < lastIndex) {
    
     if (value < items[middleIndex]) {
          lastIndex = middleIndex - 1;
      } else if (value > items[middleIndex]) {
          firstIndex = middleIndex + 1;
      }
    
      middleIndex = Math.floor((lastIndex + firstIndex)/2);
  }

  return (items[middleIndex] != value) ? -1 : middleIndex;
}

const items = [1, 2, 3, 4, 5, 7, 8, 9];

console.log(binarySearch(items, 1));
console.log(binarySearch(items, 5));
