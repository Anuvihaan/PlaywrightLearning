let scores=[45,89,90,67,75];
let grades=scores.map(s=> s >70?"pass":"fail");
//function that transforms the arrays
console.log(grades);
//map function we use whenevr we want to trnsform the array of the same size

let passingscores=scores.filter(s=> s>70);
console.log(passingscores);
//filter is not preferred when we want to transform the array of the same size, it is used when we want to filter out the elements of the array based on a condition
//filter is not used over the for loop because it is more readable and easier to understand


//map::will give the same elemnt of the array and transfromed
//Filter:no same size array will give the filtered elements of the array based on the condition
//reduce:get one element

//sorting: