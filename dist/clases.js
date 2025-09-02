var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sayHi = function () {
        console.log("grrrrr");
    };
    return Animal;
}());
var myAnimal = new Animal();
myAnimal.sayHi();
