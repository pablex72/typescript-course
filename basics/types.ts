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

//combinacion de tipos
let responseProducts: number | undefined;

type ResponseTypeService = string | undefined;

let responseProducts333: ResponseTypeService;

//type ASSERTION
//OPCION 1
let message:any = "";
let messageUppercase = (message as string).toUpperCase();
//OPCION 2
let message2:any = "";
let message2Uppercase = <string> message2;
message2Uppercase.toUpperCase();

const canvas = <HTMLCanvasElement> document.getElementById("canvas")
canvas.CDATA_SECTION_NODE;

//opciona 4
const canvas2 = document.getElementById("canvas") as HTMLCanvasElement;
