/**
 * Typescript also has "type aliases" in addition to interfaces.
 * - https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
 * - Can be used for any kind of types: primitives, objects, union and intersection types
 * - Can be implemented by classes and extended by interfaces as well.
 *    - Exception being: types that have unions in them cannot be extended or implemented by classes
 *      or interfaces
 * - Describe functions or objects.
 * - Type aliases are unique and are not merged together.
 * - http://www.typescriptlang.org/docs/handbook/advanced-types.html
 */

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string;
    postalCode: number | string; // Union type
    state?: string;
    city: string;
  };
  readonly ssn: string;
};

type Employee = {
  company: string;
  employeeId: number;
};

// Intersection type
type WorkerPerson = Person & Employee;

var pekka: WorkerPerson = {
  firstName: "Pekka",
  lastName: "Meikalainen",
  age: 20,
  address: {
    street: "Katu 1",
    postalCode: 33210,
    city: "Tampere"
  },
  ssn: "01011950-012X",
  company: "Vincit",
  employeeId: 321
};

type GetFullNameFuncType = (person: IPerson) => string;

var getFullName: GetFullNameFuncType = function(person: IPerson) {
  return `${person.firstName} ${person.lastName}`;
};

getFullName(matti);
