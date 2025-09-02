class Animal {
    name: "Generic animal";
    private age = 10; // priavate cerrado al exterior pero se usa dentro de la clase
    sayHi(){
        console.log("grrrrr", this.age);
    }
}


const myAnimal: Animal = new Animal();
myAnimal.sayHi();

//herencia 

class Dog extends Animal {
    type: "Pastor Aleman";
}
const myDog: Dog = new Dog();
myDog.type;