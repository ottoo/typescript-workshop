/**
 * Basic data types
 */

let str: string = "Nimi";

let num: number = 1;

let bool: boolean = true;

let obj: object = {
  x: 1,
  y: 2
};

let arr = [1, 2, 3];

// Enum with numeric values
enum Color {
  RED,
  BLUE,
  GREEN
}

// Color.RED --> 0
// Color[2] --> "GREEN"

// Enum with string values (Since ts 2.4)
enum Animal {
  CAT = "CAT",
  DOG = "DOG",
  HORSE = "HORSE"
}

// Animal.CAT --> "CAT"
// Animal["CAT"] --> "CAT"

let mixed: any[] = [1, {}, "2"];

function hello(name: string): void {
  console.log(name);
}

let hello2 = (name: string): void => {
  console.log(name);
};

class Cat {
  public color: Color;
  private nickname: string;

  constructor(nickname: string, color: Color) {
    this.nickname = nickname;
    this.color = color;
  }

  public getNickname() {
    return this.nickname;
  }
}
