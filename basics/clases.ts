class Animal {
    name: "Generic animal";
    private age = 10; // priavate cerrado al exterior pero se usa dentro de la clase
    protected identity = "lll";

    sayHi(){
        console.log("grrrrr", this.age);
    }

    constructor(){}
}


const myAnimal: Animal = new Animal();
myAnimal.sayHi();

//herencia 

class Dog extends Animal {
    type: "Pastor Aleman";

    constructor() {
        super();
    }

    sayHi(){
        this.identity;
    }
}
const myDog: Dog = new Dog();
myDog.type;