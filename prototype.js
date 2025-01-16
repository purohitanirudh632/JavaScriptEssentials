// prototype is collection of built in helper function that adds to every object as a default given by Js 
// eg. when we create an array and we wanna know its lengtth ve use array.length() but we did not make .length it was given by js 

var a={
    name:"Anirudh",
    age : 22
}

// here when we see in console we can see a [[protoytype]] expand it and you will see many features and functionn by default 


// 2-> Prototypal Inheritance

// inheritence is passing the parent features and properties to the Child class . In js we can achive it jusing the prototype this is called prototypal inheritence 

var human = {
    canWalk: true,
    canTalk: true,
    willDie:true,
}

var cseStudent = {
    makeWebsite:true,
    canCode:true,
}

// now cseStudent can do all the things that human can also do so human can be made the parent calss to acess the features of the human 

cseStudent.__proto__ = human;

// check the [[prototype]] of cseStudent