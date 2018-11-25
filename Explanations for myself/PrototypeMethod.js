function Cats(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}

var delGato = new Cats("Bu", 3, "Calico");

console.log(delGato.color);

// this works.  You can change an individual child object once it's created.
delGato.tail = "fluffy";
console.log(delGato.tail);

// this returns 'undefined' because the format below doesn't affect the 
// prototype.
Cats.eyes = "green";
console.log(delGato.eyes);

// this does return "white" because invoking the .prototype method
// allows you to change a prototype and all its downstream children.
Cats.prototype.paws = "white";
console.log(delGato.paws);


