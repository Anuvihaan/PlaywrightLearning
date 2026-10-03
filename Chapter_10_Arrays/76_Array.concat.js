let a=[1,2];
let b=[3,4];
let c=a.concat(b);
console.log(c);

//spread(modern way) concatenation(...)
let d=[...a,...b];
console.log(d);
//we use for loop but ai agents will use map,filter,reduce


//array into bug strin
let s=["pass","fail","skip"].join("|");
    console.log(s);