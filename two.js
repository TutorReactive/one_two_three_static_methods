var Person = require("./one")

class Student extends Person {
  constructor(name, age, gender, Parent, favGames, school, numFriends) {
    super(name, age, gender, Parent, favGames);
    this.school = school;
    this.numFriends = numFriends;
  }

  getSchool() {
    console.log(this.school);
  }

  getNumFriends() {
    console.log(this.numFriends);
  }

  static doAllMethods(person) {
    super.doAllMethods(person);
    person.getSchool();
    person.getNumFriends();
  }
}

module.exports = Student;