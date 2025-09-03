import { generateId, PI, User } from "./utils.module";

const myNumber = 10 * PI;

const myUser: User = {id:'1', name: "Kevin"};
const myUser2: User = {id: generateId().toString(), name: "Kevin"};


console.log({
    myNumber, myUser
})
