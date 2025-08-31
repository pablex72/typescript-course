interface Student {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    sayHello: () => string
}

let student: Student = {  
    name: 'Kevin',
    code: '01',
    charge: 1,
    description: "Hola",
    sayHello: () => {
        return "fff";
    }
};

student.charge = 33;

////
let thirdPerson: Student = {
    name: "",
    code: "",
    charge: 0,
    sayHello: () => {
        return "fff";
    }
};

