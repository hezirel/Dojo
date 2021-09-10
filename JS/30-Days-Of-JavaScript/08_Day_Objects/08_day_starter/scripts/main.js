//var data = require('./countries');
const Dog = {
  name: "Fido",
  color: "Blue",
  legs: '7',
  bark() {
    return "Death to capitalism";
  }
}

//let myDog = Object.assign({}, Dog)
//console.log(myDog.color);
//console.log(myDog.bark());
//myDog.breed = 'Xenon'
//console.log(myDog.breed);
//myDog.getDogInfo = function() {
//	console.log("success")
//}
//myDog.getDogInfo();

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'brook@brook.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let data = Object.assign({}, users)
let index = Object.keys(data).length;

function maxSkill(list) {
  let max = 0;
  let result;
  for (i = 0; data[Object.keys(list)[i]]; i++) {
    if (data[Object.keys(data)[i]].skills.length > max) {
      max = data[Object.keys(list)[i]].skills.length;
      result = Object.keys(list)[i];
    }
  }
  console.log(result);
}

function loggerInUsers(list) {
  let logged = 0;
  for (i = 0; data[Object.keys(list)[i]]; i++) {
    if (data[Object.keys(list)[i]].isLoggedIn)
      logged += 1;
  }
  return logged;
}

function str_Comp(str1, str2) {
  if (str1 === str2)
    return true;
}

function mernCheck(user) {
  let MERN = ["HTML", "CSS", "MongoDB", "Express", "React", "Node"];
  if (user.skills[3] === MERN[4]) {
    ///why my for loop doesn't work ? Need to compare strings in skills for user
    return true;
  }
}

function listMERNDevs(users) {
  for (i = 0; users[Object.keys(users)[i]]; i++) {
    if (mernCheck(users[Object.keys(users)[i]])) {
      console.log(Object.keys(users)[i]);
    }
  }
}

listMERNDevs(users);