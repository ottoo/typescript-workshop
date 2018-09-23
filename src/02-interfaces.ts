/**
 * Interfaces
 *
 * - Interfaces are not compiled to Javascript. They only exist in the context of Typescript and are
 * only used for typechecking purposes. They can be extended by other interfaces.
 * - Describe functions or objects.
 * - Always introduces a named object type.
 * - Interface declarations with the same names are merged together.
 * - https://www.typescriptlang.org/docs/handbook/interfaces.html
 */

interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string;
    postalCode: number;
    state?: string;
    city: string;
  };
  readonly ssn: string;
}

interface IEmployee extends IPerson {
  company: string;
  employeeId: number;
}

var matti: IEmployee = {
  firstName: "Matti",
  lastName: "Meikalainen",
  age: 20,
  address: {
    street: "Katu 1",
    postalCode: 33210,
    city: "Tampere"
  },
  company: "Vincit",
  employeeId: 123,
  ssn: "01011950-011X"
};

interface GetFullNameFunc {
  (person: IPerson): string;
}

var getFullName: GetFullNameFunc = function(person: IPerson) {
  return `${person.firstName} ${person.lastName}`;
};

getFullName(matti);
