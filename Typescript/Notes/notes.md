# Typescript Course in 1 Shot

youtube.com/watch?v=kvP6hDXWy88

## Introduction to TypeScript

TypeScript is essentially a superset of JavaScript, acting as an add-on that introduces "types" to the language to help recognize and prevent bugs early during development. It is not a standalone language; TypeScript code never runs directly in the browser or environment. Instead, it must pass through a compiler pipeline (Lexer -> Parser -> Binder -> Checker -> Emitter) which strips away the TypeScript-specific types and emits standard JavaScript.

## Setting up TypeScript

When setting up TypeScript in a project, it is generally recommended to install it on a per-project basis rather than globally.

- Initialize a project with `npm init -y`.
- Install TypeScript as a development dependency using `npm install -D typescript`.
- Create a TypeScript configuration file using `npx tsc --init`(if you installed project specific). For global install: `tsc --init`
- In the generated `tsconfig.json` file, you primarily configure options like `rootDir` (where your `.ts` files live, e.g., `./src`) and `outDir` (where the compiled `.js` files will be output, e.g., `./dist`).
- You can run the compiler using `tsc`(global) `npx tsc`(project) to generate the JavaScript files (created in dist/)  based on your configuration.
- To run the generated .js file created in `dist/`, do: `node dist/filename.js`

>TL:DR using `ts-node`, just execute `ts-node filename.ts`

## Types in TypeScript

### Type Annotation vs Inference

TypeScript assigns types in two main ways:

- **Type Inference**: TypeScript is smart enough to automatically guess the data type based on the assigned value. For example, if you write `let drink = "chai"`, TypeScript automatically infers that `drink` is a string.
- **Type Annotation**: You explicitly declare the type using a colon `:`. This forces the variable to strictly hold that specific data type.

```typescript
let chaiFlavor: string = "masala";
let price: number = 20;
let isHot: boolean = true;
```

### Union Types

When a value can be of more than one type, you can use Union Types separated by a pipe `|` symbol. This is also highly useful for restricting values to specific literal strings or numbers.

```typescript
let subs: number | string = 10;
subs = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";
```

### `any` vs `unknown`

- **`any`**: Bypasses TypeScript's type checking completely. Using `any` means the compiler does not care what type of data is assigned or how it is used, which defeats the purpose of TypeScript.
- **`unknown`**: A safer alternative to `any`. It allows you to assign any type of data, but TypeScript forces you to strictly check its type (Type Narrowing) before you are allowed to perform operations on it.

### The `never` Type

The `never` type represents a state or value that should never occur. It is commonly used in exhaustive type checking (like in a `switch` statement to ensure all cases are handled) or for functions that strictly throw an error or contain an infinite loop and thus never naturally return.

## Type Assertion and Narrowing

### Type Narrowing (Type Guards)

Type narrowing (or type guarding) is the practice of explicitly checking a variable's type before interacting with it. By using JavaScript features like `typeof` or `instanceof`, you narrow down a generic type to a specific one so you can safely access its methods.

```typescript
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai`;
  }
  return `Order number: ${kind}`;
}
```

### Type Assertion

Sometimes you know the exact type of a value better than TypeScript does (e.g., when parsing a JSON string from LocalStorage or reading DOM elements). You can forcefully assert a type using the `as` keyword.

```typescript
let response: any = "42";
let length = (response as string).length;
```

## Objects and Type Aliases

### Defining Object Types

You can create custom type definitions using the `type` keyword, defining the exact structure (shape) an object should follow. Properties can be made optional using `?` or read-only using the `readonly` keyword.

```typescript
type ChaiOrder = {
  readonly id: string;
  name: string;
  sugar: number;
  isStrong?: boolean; 
};
```

### Utility Types

TypeScript provides built-in utility types to manipulate existing types:

- **`Partial<T>`**: Makes all properties in type `T` optional.
- **`Required<T>`**: Forces all properties in type `T` to be strictly required, regardless of how they were originally defined.
- **`Pick<T, Keys>`**: Creates a new type by picking specific properties from an existing type.
- **`Omit<T, Keys>`**: Creates a new type by omitting specific properties from an existing type.

## Arrays, Tuples, and Enums

### Arrays

Arrays can be typed by appending `[]` to a data type or using the `Array<Type>` generic syntax. You can also define an array of specific custom objects.

```typescript
let flavors: string[] = ["masala", "ginger"];
let prices: number[] =;
```

### Tuples

Tuples are strict arrays where both the fixed length and the specific type of each element at a specific index are pre-defined. Named tuples provide better developer readability.

```typescript
let userTuple: [name: string, age: number, isActive?: boolean] = ["Hitesh", 100];
```

### Enums

Enums are used to declare a strictly restricted set of named constants. This prevents arbitrary inputs and restricts options to specifically allowed values.

```typescript
enum CupSize {
  Small = "SMALL",
  Medium = "MEDIUM",
  Large = "LARGE"
}
let size: CupSize = CupSize.Large;
```

## Interfaces

### Defining Interfaces

Interfaces act incredibly similar to `type` aliases and are specifically used to dictate the shape of objects and class architectures. Unlike classes, interfaces do not compile into JavaScript code; they strictly exist for TypeScript's type checking.

```typescript
interface ChaiShop {
  readonly id: number;
  name: string;
}
```

### Interface Merging and Extending

- **Merging**: If you declare the same interface multiple times, TypeScript automatically merges all their properties together.
- **Extending**: Interfaces can extend other interfaces using the `extends` keyword to inherit properties.

## Functions

Functions in TypeScript require typing for parameters and the return value. If a function does not return any data, its return type should be declared as `void`. Parameters can be made optional with `?` or assigned default values.

```typescript
function makeChai(type: string, cups: number = 1): void {
  console.log(`Making ${cups} cups of ${type} chai`);
}
```

## Object-Oriented Programming (OOP) in TS

### Classes and Access Modifiers

TypeScript adds access modifiers to JavaScript's standard class syntax:

- **`public`**: The default modifier; variables are accessible from anywhere.
- **`private`**: Variables are only accessible from directly within the class.
- **`protected`**: Variables are accessible within the class and any class that extends it (subclasses).

```typescript
class Chai {
  public flavor: string;
  private secretIngredient: string;

  constructor(flavor: string, secretIngredient: string) {
    this.flavor = flavor;
    this.secretIngredient = secretIngredient;
  }
}
```

### Getters, Setters, and Abstract Classes

- **Getters/Setters**: Used to control access and modification to `private` class members via `get` and `set` keywords.
- **Abstract Classes**: Defined using the `abstract` keyword. These classes act purely as blueprints and cannot generate object instances on their own; they must be extended.

## Generics

Generics act as reusable templates that allow functions, interfaces, or classes to work flexibly with any data type passed into them. Defined using angle brackets `<T>`, they heavily reduce code duplication, especially in API responses and utility functions.

```typescript
function wrapInArray<T>(item: T): T[] {
  return [item];
}
let stringArray = wrapInArray<string>("masala");
```

## Type Declarations and Web Requests

- **Type Declaration Files (`.d.ts`)**: These files contain no logic; they merely describe the structure of existing JavaScript libraries to provide TypeScript with autocompletion and error checking.
- When utilizing a third-party library, you often need to install its types via npm, like `npm install -D @types/library-name`.
- When doing web requests (via Axios or Fetch), you pair Generics with Interfaces to strongly type the incoming JSON payload and API Errors.
- You can explicitly import just the typing from a library using `import type { TypeName } from 'library'`.

## TypeScript with React

When using React with TypeScript, files use the `.tsx` extension. All standard JavaScript logic remains identical, but React-specific typings are added for components and hooks.

### Component Props

To type the props passed into a React component, define an `interface` and assign it to the destructured props argument. For components acting as layout wrappers, you can extend the built-in `PropsWithChildren` type to easily allow nesting elements.

```tsx
import type { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  title: string;
}

export function Card({ title, children }: CardProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

### Hooks and Events

- **`useState`**: You can pass Generics into hooks to guarantee the state's type: `useState<number>(0)`.
- **Events**: Typing form and input events utilizes strictly typed React events like `ChangeEvent<HTMLInputElement>` for inputs and `FormEvent<HTMLFormElement>` for form submissions.
