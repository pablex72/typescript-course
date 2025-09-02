const sayHi = (name) => {
    console.log(`Hola ${name} `);
};

sayHi("holaaaaaaaa");

function sayGoodBye(name) {
    console.log(`Adios ${name}, casi`)
}
sayGoodBye("fffff")

//tipando retorno

function show(): number {
    console.log("holaaa");
    return 1;
}

const response321 = show();

// tipando entrada parametros
function show2(name: string[]): number {
    name.map(n => n.concat(""))
    return 1;
}

//destructuracion basic 1
const response444 = {
    id: 1,
    name: 'Kevin',
    charge: "dev",
    number: 4
}

function show3({name}: {id; name; charge; number}): number {
    console.log("El id mandado es: " , name);
    return 2;
}

show3(response444);
