//topic:nullvalue vs undefined in javascript

/*
undefined:a variable exists, but it has not been assigned to
yet javascript automatically itself sets this automatically

ex:born baby nt having any name
*/

/*
Null:a variable exists,but the developer explicitly assigns
"no value" or "empty"
it is intentional absence of any value

/*ex for undefined*/
var x;
console.log(x);

/* ex for null*/
var audit=null;
console.log(audit);

//ex for undefined
let userName;
console.log(userName); //undefined
console.log(typeof userName); //datatype is undefined

//ex for null
let profiPicture=null;
console.log(profiPicture); //null
console.log(typeof profiPicture); //datatype is object

//key difference between null and undefined//
/*Feature   undefined                              null
meaning     variable exists but not assigned      variable exists but assigned to no value
who sets it?    javascript                         developer manually
==comparison    null==undefined-->true
===comparison   null===undefined-->false