//slicing and combining
let arr=[1,2,3,4,5,6];

//slice(start,end)-->returns the new array
//doesnot mutate actual-->(start,end-1).index=0
//dont give the end automatically take from start to end


console.log(arr.slice(1,3));
//here it starts with index 0 and 1 having value2
//and 3 eleemtns from start
console.log(arr);

console.log(arr.slice(3));
//if we dint give any end then it will consider all
//from start to end i.e 4,5,6

console.log(arr.slice(-3));
//4,5,6
console.log(arr.slice(0));
//undefined
console.log(arr.slice(-3,-5));
//we always go from right side


