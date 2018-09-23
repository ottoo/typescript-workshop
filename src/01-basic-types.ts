/**
 * Basic data types
 */

var str: string = "Nimi";

var number: number = 1;

var bool: boolean = true;

var obj: object = {
  x: 1,
  y: 2
};

var arr = [1, 2, 3];

// Enum with numeric values
enum Color {
  RED,
  BLUE,
  GREEN
}

// Color.RED --> 0
// Color[2] --> "GREEN"

// Enum with string values (Since ts 2.4)
enum PaymentType {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT"
}

// PaymentType.CREDIT --> "CREDIT"
// PaymentType["CREDIT"] --> "CREDIT"

var mixed: any[] = [1, {}, "2"];

function hello(name: string): void {
  console.log(name);
}

var hello2 = (name: string): void => {
  console.log(name);
};
