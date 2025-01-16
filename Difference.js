// See the difference between var Let and const
// 1-> var  is part of es5 and let is part of es6 

//   2-> var is function scoped and let is braces scoped 

function abcd(){
    for (var i=0;i<10;i++){
        console.log(i);
    }
    console.log(i);  // in any other language i over here is out of scope but because var is function scoped this will work 
    
    for (let j=0;j<10;j++){
        console.log(j);
    }
    console.log(j) // since let is braces scoped this willl give an error 
}
abcd();

// 2-> var adds itself to the window object 
var a =12
let b = 13
   
// in console type window and check if there is a or b 

