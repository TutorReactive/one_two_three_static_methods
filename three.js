var Person = require("./one");
var Student = require("./two");

var james = new Person("James", 40, 'male', null, ["Halo"]);
var jane = new Person("Jane", 38, 'female', null, ["Overwatch"]);
var kevin = new Person("Kevin", 28, 'male', null, ["CoD"]);

var leo = new Student("Leo", 12, 'male', kevin, ["Mario"], "Chatswood Public", 2);
var anne = new Student("Anne", 12, 'female', jane, ["Sonic"], "James Ruse", 3);

var personMethods = ["getName", "getAge", "getGender", "getParent", "getFavGames", "greeting"]
var studentMethods = ["getSchool", "getNumFriends"];

Person.doAllMethods(james);
Person.doAllMethods(jane);
Person.doAllMethods(kevin);

Student.doAllMethods(leo);
Student.doAllMethods(anne);