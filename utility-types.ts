interface MyUser {
    name: string;
    id: number;
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
        id: 4,
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

//Omit utility type,
//takes a type and keys and generates a type without those keys 
type UserWithoutId = Omit<MyUser, "id">;

//Record utility type,
//takes two parameters: id type and output type

const mapById = (users: MyUser[]): Record<MyUser["id"], Omit<MyUser, "id">> => {
    return users.reduce((a,v) => {
        const { id, ...other } = v
        return {
            ...a,
            [id]: other,
        }
    }, {}) 
}

console.log(mapById([
    {
        id: 3,
        name: "Mr. Bar"
    },
    {
        id: 7,
        name: "Mrs. Baz"
    }
]));

