
export interface Person {
    firstName: string;
    lastName?: string;
};

const person: Person = {
    firstName: 'Augusto',
    lastName: 'Chaves Fiore'
};

console.log(person);