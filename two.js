var Person = require("./one")

class Student extends Person {
  constructor(name, age, gender, Parent, favGames, schoo, numFriends) {
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
}

module.exports = Student;