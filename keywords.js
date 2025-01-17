// * this call apply bind 

//1>  this -> this keyword changes its value in different context

// 1) global scope 
 console.log(this)  //gives value as window

//2) fuction Scope
function abcd (){
    console.log(this)  // gives window
}
abcd()
 
//3) Method Scope

var obj = {
    name:"Anirudh",
    baatkaro: function(){
        console.log(this) // in case of method this refers to the parent object   in this case  ( obj ) 
    }
}
obj.baatkaro()

// we will take a small example of this using event listener

var button = document.querySelector("button")
button.addEventListener("click",function(){
    this.style.color = "red"   // (this) here is equal to whatever is written before addEventListerner
 })


 //---------------------------------------------------------------------------------------------------------------------

 // 2> if there is a function which has  value of this as window then you can change iits value to the object by passing it through call

 function abcd(var1, var2){
    console.log(this)
    console.log(var1,var2)
    console.log(this.age)
 }
 var obj = {age:23}
 abcd.call(obj,1,3)

// 3> apply  when we have a function that also accepts the parameter then we can pass the other parameter as the arry

function efgh(var1, var2,var3,var4){
    console.log(this)
    console.log(var1,var2,var3,var4)
    console.log(this.age)
 }
 var obj2 = {age:25}
 efgh.apply(obj2,[1,2,3,4])


//  4> bind-> in call and apply we run the code instantly but in bind we can just bind this with obj and can run anytime later we want 

function bindtest(){
    console.log(this)
    console.log(this.age)
 }
 var obj3 = {age:43}
 var bindfunc = bindtest.bind(obj3)

 bindfunc();