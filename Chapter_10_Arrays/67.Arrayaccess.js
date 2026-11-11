//array access modify

let status=["active","inactive","pending","blocked"];
status[1]="blocked"

console.log(status);
console.log(status.length);


let arr=[1,2,3];

//add to end
arr.push(4);
console.log(arr);
//remove from end
arr.pop(3);
console.log(arr);
//add to start
arr.unshift(6);
console.log(arr);
//remove from start
arr.shift();
console.log(arr);

//splice
arr.splice(2,1);
console.log(arr);

arr.splice(2,0,99);
console.log(arr);

//arr.splice(2,0,99) — at index 2, delete 0 elements, insert 99.
//Array before: [1,2] → inserts at index 2 → [1,2,99]

arr.splice(1,2,20,30);
console.log(arr);//at index1 removes 2 elements i.e 2 and 99 result will
//1,20,30

//splice supports a negative start, counted from the end of the array:


//let a = [1,2,3,4,5];
//a.splice(-1, 1);      // removes last element → [1,2,3,4]
//a.splice(-2, 0, 99);  // inserts before last 2 items → [1,2,3,99,4]