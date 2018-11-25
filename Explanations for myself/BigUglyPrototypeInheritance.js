var util = require('util');

/* This might be the key.  This is a function constructor. Running this 
function give an object the firstname and lastname properties and 
the associated values.  But it doesn't do anything UNTIL IT IS RUN.

Basically, this says: objects created with this function point at Person
as their prototype and also the .firstname and .lastname functions.
*/
function Person() {
    this.firstname = "John";
    this.lastname = "Doe";
/** If I place the .greet function in here, it also doesn't work. */

}

var John = new Person();

Person.prototype.greet = function() {
    console.log('Hello '+ this.firstname + " " + this.lastname);
};

/*

Interesting tidbit.  This link:  
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
says that the .prototype method is how you define which members are
to be inherited.  What does that do to the theory?

Initially this didn't make sense because third-tier objects like McNulty 
were inheriting "John" and  Doe" - but then I realized Policemen started
with the .call on the Person constructor.  With that line removed,
greet returns 'undefined' for each of the names.

*/

John.greet();  /* so how the fuck does John inherit the .greet
method?  This doesn't fit my 'things only inherit when told to' theory.
 */

function Policeman() {
//    Person.call(this);  
    this.badgenumber = "1234";
}

// OK.  So Policeman is actually not a child of Person in any way.  If
// it were, I think .greet would be available.



var McNulty = new Policeman();
McNulty.firstname = "Jimmy";
McNulty.lastname = "McNulty";


/* This right here is what I don't understand.  McNulty is a Policeman.
Policeman is a Person, and therefore it should have access to the .greet
function that I added to the Person prototype.  

Theory as of right now is that 


*/

util.inherits(Policeman, Person);  
/* When this executes, McNulty's
__proto__ changes from Object to Person.  It also gains access to the 
.greet method.  
*/
McNulty.greet();

var officer = new Policeman();

officer.greet();

console.log(officer.badgenumber);

// No matter how an object was constructed, its prototype will always be
// __object__ unless you specifically tell it otherwise?
