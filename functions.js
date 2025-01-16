// here we will see about the Different type of functions in JS

// 1-> callback function 

setTimeout(function(){console.log("2 sec baad chala")},2000)

// when the function takes time to complete and run we give it a function that will complete and then callback for the run 

// 2-> First Call functions   -> in js we can pass functions as a parameter in other functions as a varibale this type of function are called first class fucntion


function abcd(a){
    a();
}
abcd(function(){console.log("hey there it is first class function")})


// 3-> higher order function  -> those functions that accept other function as a parameter or return function as a parameter 

function efgh(){
    return function(){}
}
efgh();

// here above abcd() and efgh() are both highe order functions cause one accepts function as parameter and other returns one


// 4-> Constructor Functions ->
// when we are able to create an instance of the function to make little changes in the same key value 
function Remotebutton(color,name){
    this.radious =21;
    this.color = color;
    this.name =name;
    this.pressabble = true;
}

var powerbtn = new Remotebutton("red","power")
var mutebtn = new Remotebutton("Green","Mute")

// here Remotebutton is the constructor function 


// 5-> iffe => immiditely invoked function expression 
// Immediately Invoked Function Expressions (IIFE) are JavaScript functions
//  that are executed immediately after they are defined.
//  They are typically used to create a local scope for variables(create  private variables) to prevent them from polluting the global scope. 


var ans = (function(){
    var privateVal = 12;
    return {
         getter: function(){
            console.log(privateVal);
        },
        setter: function(val){
            privateVal = val

        }
    }
})()

// console.log(privateVal) // this will give error as privateval is the private value 
console.log(ans.getter()) // this is the true way of acessing the private val
ans.setter(24) // this is the way to change the privateval
console.log(ans.getter())

