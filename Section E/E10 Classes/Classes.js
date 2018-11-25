

class Person {
    constructor(firstname, lastname){
        // these are added to the new object when the constructor
        // function is run.
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // anything outside the constructor is automatically put on the
    // prototype, which I assume means automatically inherited?
    greet(){
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}


var john = new Person("John", "Doe");
john.greet();

var jane = new Person("Jane", "Doe");
jane.greet();

