class Person {
  constructor(name, age, gender, Parent, favGames) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.Parent = Parent;
    this.favGames = favGames;
  }

  getName() {
    console.log(this.name);
  }

  getAge() {
    console.log(this.age);
  }

  getGender() {
    console.log(this.gender);
  }

  getParent() {
    console.log(this.Parent);
  }

  getFavGames() {
    console.log(this.favGames);
  }

  greeting() {
    console.log("Greetings!");
  }

  static doAllMethods(person) {
    person.getName();
    person.getAge();
    person.getGender();
    person.getParent();
    person.getFavGames();
    person.greeting();
  }
}

module.exports = Person;