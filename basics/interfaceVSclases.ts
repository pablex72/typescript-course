interface PersonInterface {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    token: string;
    sayHello: () => string;
}

class PersonClass {
    sayHello(){
        console.log("fdsafdas");
        fetch("...");
    }
}

// const personOne: PersonInterface = {};
const personTwo: PersonClass = {sayHello() {}};
const personThree: PersonClass = new PersonClass();

interface PetInterface{
    sayHello : () => string;
}

class Dog2 implements PetInterface {
    sayHello() {
        return "fdas";
    }
}

