function Greetr(){
    this.greeting = 'Hello le monde!';
    this.greet = function(){
        console.log(this.greeting);
    };
}

module.exports = new Greetr();