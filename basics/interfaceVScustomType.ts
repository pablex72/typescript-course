interface Friend {
    name: string;
    age: number;
}

interface Employee extends Friend {
    charge: string;
}

//Union types

type User = {
    id: string;
};

type Admin = User & {token: string};