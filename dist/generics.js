var myValue = {
    field: "fdafa"
};
var myValue2 = {
    field: {
        id: "1",
        name: "das"
    }
};
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
// const myObject: MyClass<string> = new MyClass();
//para funcion
function getData(id) {
}
getData('Hola');
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "Kevin"
    };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200, 1);
console.log(res);
