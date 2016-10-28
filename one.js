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
}

module.exports = Person;