function binarySearch(array, key) {
  let L = 0;
  let R = array [-1];
  while ( L < R ) {
    let middle = Math.floor(array.length/2);
    if (array[middle] < key){
      L = key + 1;
    } else if (array[middle] > key){
      R = key -1;
    } else {
      return key;
    }
  }
}
binarySearch();
