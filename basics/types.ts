let age: string = "55";
let agmonths:number = 20;
let isSenior: boolean = true;
let person: Object = {};

let fruits: string[] = ["manzana", "pera"]; //array de string
let fruits2: Object[] = [{},{name: "manzana"}]

let response: any = "Holaaa";
response = 20;
response = true;
response = ["hola", 123];

function saludar(): void {
    console.log("soy void")
}

let response3 = null;
let response44 = undefined;

let response5: number | null = 5;
response5?.toString(); //null safety

let responseProducts: number | undefined;

type ResponseTypeService = string | undefined;

let responseProducts333: ResponseTypeService;





