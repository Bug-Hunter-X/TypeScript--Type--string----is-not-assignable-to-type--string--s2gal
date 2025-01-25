function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return person.map(name => "Hello, " + name);
  }
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user)); // This will now work correctly
console.log(greeter("Jane Doe")); // This will also work correctly