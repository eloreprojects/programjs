function swap(array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
 }

function partition(array, pivot, left, right){
    var pivotValue = array[pivot];
    var partitionIndex = left;
 
    for(var i = left; i < right; i++){
     if(array[i] < pivotValue){
       swap(array, i, partitionIndex);
       partitionIndex++;
     }
   }
   swap(array, right, partitionIndex);
   return partitionIndex;
 }
 
function quickSort(array, left, right){
    var pivot, partitionIndex;
 
   if(left < right){
     pivot = right;
     partitionIndex = partition(array, pivot, left, right);
     
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
   }
   return array;
 }

 module.exports = quickSort;
