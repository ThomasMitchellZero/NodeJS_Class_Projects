var obj = {
    name: "John Doe",
    greet: function (){
        console.log(`Hello ${this.name}`);
    }
};

var obj2 = {
    name: "Dick"

};

obj.greet();

/* Invoking a function with obj.call means that any .this methods used
will point to the parameter object and not the original object */
obj.greet.call(obj2);

/* If called on functions with no parameters, .call and .apply work
the same way.  However, they accept parameters, but in different ways. */

obj.greet.call(obj2, param1, param2); // takes CSV
obj.greet.call(obj2, [param1, param2]); // takes an array.