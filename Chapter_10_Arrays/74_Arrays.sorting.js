let fruits=["Banana","Apple","Mango","Grapes"];
fruits.sort();
console.log(fruits);

let score=[3,2,41,5];
console.log(score.sort());
let score1=[1,2,34,12];
console.log(score1.sort());

//this is call natural sorting where it picks the
//1,12 as chks for 1 and then 2,34
//if you want normal sorting then 

score1.sort((a,b) => a-b);
score1.sort((a,b) => b-a);//desc
 console.log(score1);

 score1.reverse();
 console.log(score1);

