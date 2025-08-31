type Indiv = {
    name: string;
    code: string | number;
    description?: string;
};

const newPerson: Indiv = {
    code: "H",
    name: "keb",
}

type ServiceResponse = string | null | number | undefined;

type UserCharges = "admin" | "normal" | "superUser";
let response3332: ServiceResponse;

const myUserType: UserCharges = "admin";