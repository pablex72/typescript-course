interface MyInterface<T> {
    field: T;
}

const myValue: MyInterface<string> = {
    field: "fdafa"
}

// Generics mas complejos
interface MyInterface2<T> {
    field: T;
}

interface Example2 {
    id: string;
    name: string;
}

const myValue2: MyInterface2<Example2> = {
    field: {
        id:"1",
        name:"das"
    }
}

///// Ejemplo con CLASE
interface MyInterface3<T> {
    field: T
}

class MyClass<T> {
    field: T;

    constructor(field: T) {
        this.field = field;
    }
}

// const myObject: MyClass<string> = new MyClass();

//para funcion
function getData<T>(id: string): Promise<T> | void{
}

getData('Hola')

//Example with Class Real - crear codigo facil de mantener
interface UserResponse{
    id: number;
    name: string;
}

class HttpResponse<T> {
    data: T;
    status: number;
    code: number;

    constructor(data: T, status:number, code: number){
        this.data = data;
        this.status = status;
        this.code = code;
    }
}

const fetchUser = (): UserResponse => {
    return {//este sera generic cualquier valor
        id: 1,
        name: "Kevin"
    }
}

const myUser = fetchUser();
const res = new HttpResponse(myUser, 200, 1);
console.log(res);


