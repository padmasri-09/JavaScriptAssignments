const arr1 = [34, 21, 2, 56, 17];
const arr2 = [12, 86, 1, 54, 28];
let run = 0, first = 0, second = 0;
const newArr = [];
while(run < arr1.length + arr2.length){
   if(first > second){
      newArr[run] = arr2[second];
      second++;
   }else{
      newArr[run] = arr1[first];
      first++;
   }
   run++;
};
console.log(newArr);