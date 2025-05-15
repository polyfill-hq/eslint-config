// sample.ts

// Variable declarations
const x: number = 10;
const y: string = 'Hello, ESLint!';
const z = true; // Should trigger a lint warning/error

// Functions
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function with implicit return
const multiply = (a: number, b: number): number => a * b;

// Async function with promises
async function fetchData(url: string): Promise<string> {
  return await fetch(url).then((response) => response.text());
}

async function fetchDataAwait(url: string): Promise<string> {
  const resp = await fetch(url);
  return await resp.text();
}

function personFunction(person: { age: number,
  name: string }): void {
  const obj = {
    age: 30,
    name: 'Alice',
  };
  console.log(person);
}

// Interface and class usage
interface Person {
  name: string;
  age?: number; // Optional property
}

class User implements Person {
  constructor(public name: string, public age: number) { }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

// Generics
function identity<T>(arg: T): T {
  return arg;
}

// Enum
enum Status {
  Active,
  Inactive,
  Pending,
}

// Type assertions
const someValue: unknown = 'I am a string';
const strLength: number = (someValue as string).length;

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Destructuring
const {
  name, age,
} = new User('Alice', 30);

// Optional chaining and nullish coalescing
const user: Person | null = {
  name: 'Bob',
  age: undefined,
};
console.log(user?.age ?? 'No age available');

// Template literals
console.log(`Sum: ${add(5, 10)}, Multiply: ${multiply(2, 3)}`);

// Default parameters
function greet(message: string = 'Hello World!'): void {
  console.log(message);
}

// Map and forEach
const numbers = [1, 2, 3];
numbers.map((n) => n * 2).forEach(console.log);

export {
  add, multiply, fetchData, User, Status, identity,
};
