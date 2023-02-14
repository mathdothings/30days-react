class Person {
  constructor(name, says) {
    this.name = name;
    this.says = says;
  }

  greet() {
    console.log(this.name + " says: " + this.says);
  }
}

export default Person;
