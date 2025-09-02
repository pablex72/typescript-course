var sayHi = function (name) {
    console.log("Hola ".concat(name, " "));
};
sayHi("holaaaaaaaa");
function sayGoodBye(name) {
    console.log("Adios ".concat(name, ", casi"));
}
sayGoodBye("fffff");
//tipando retorno
function show() {
    console.log("holaaa");
    return 1;
}
var response321 = show();
// tipando entrada parametros
function show2(name) {
    name.map(function (n) { return n.concat(""); });
    return 1;
}
//destructuracion basic 1
var response444 = {
    id: 1,
    name: 'Kevin',
    charge: "dev",
    number: 4
};
function show3(_a) {
    var name = _a.name;
    console.log("El id mandado es: ", name);
    return 2;
}
show3(response444);
