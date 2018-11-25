// this is what's called an object literal.

var cats = {
    name:null,
    age:null,
    color:null,
    cuddles:null,
};

// this is what's called a constructor.  Looks like you can create new
// objects with just a single command.

function Person(first, last, age, eye, pet = "Kenzie"){

    this.first = first;
    this.last = last;
    this.eye = eye;
    this.age = age;
    this.pet = pet;
};

// one other thing to note here.  For each attribute in the constructor
// function, both the this.key and the value have to be the same name
// as it is called in the parameter.  this.pettt = pet returns 'undefined'
// no matter what variable you pass to the 5th parameter.

var Sarah = new Person("Sarah", "Flannery", 32, "blue", "Callie");


cats.age = 7;

// If I want to create a Munchi object as a child of the cat object,
// I can do it, but I have to populate each variable separately.

Munchi = cats;

Munchi.age = 3;

cats.age = 8;

// Interestingly, it seems that even children of object literals retain
// a link to their parents.  Even after setting Munchi.age to 3, changing
// cats.age to 8 means that Munchi.age prints as 8, not 3.

console.log(Sarah.age);
console.log(cats.age);
console.log(Sarah.pet);
console.log(Munchi.age);