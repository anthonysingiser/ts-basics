interface MyUser {
    name: string;
    id: string;
    email?: string
}

//Partial utility type: 
//makes a copy of a type with all fields being optional
type MyUserOptionals = Partial<MyUser>

// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }


const merge = (user: MyUser, overrides: MyUserOptionals ): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(
    merge(
    {
        name: "Tony",
        id: "CoolFnny2",
        email: "emailaddress@coolemail.com"
    }, 
    {
    email: "betteremailaddress@cooleremail.com"
    }
));

//Required utility type,
//makes a copy of a type with all fields being required
type RequiredMyUser = Required<MyUser>

//Pick utility type,
//generate a new type from an existing type with the fields in the second argument, optionality from initial type is preserved 
type JustEmailAndName = Pick<MyUser, "email" | "name">