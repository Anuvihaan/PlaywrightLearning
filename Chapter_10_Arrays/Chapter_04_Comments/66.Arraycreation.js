//Array literal(preferred)
let browsers=["chrome","firefox","safari","edge"];//prefferd this array creation

//array constructor
let scores=new Array(3);//creates [empty*3] fixed size array

scores[0]=10;
scores[1]=20;

let scores2=new Array(1,2,3);

let numbers=new Array(100,200,300,400,500);

let test=Array.of(10,20,30,40,50);
console.log(test.length);//we use less

let test1=Array.from("hello");
console.log(test1);//basically from splits from strin got character used in inteview