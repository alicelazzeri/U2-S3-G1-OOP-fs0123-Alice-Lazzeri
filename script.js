// Esercizio 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

    ageConfront(a, b) {
    if (a.age > b.age) {
      return a.first.Name + " è più vecchio di " + b.first.name;
    } else if (a.age < b.age) {
      return a.firstName + "è più giovane di " + b.firstName;
    } else {
      return a.firstName + " e " + b.firstName + " sono coetanei";
    }
  }
}

const userOne = new User("Roberta", "Gavazzi", 58, "Piombino");
console.log(userOne);

const userTwo = new User("Alice", "Lazzeri", 27, "Campiglia Marittima");
console.log(userTwo);

const userThree = new User("Nicola", "Cresci", 27, "La Spezia");
console.log(userThree);

const userFour = new User("Edoardo", "Zilioli", 28, "La Spezia");
console.log(userFour);

console.log(User.ageConfront(userOne, userTwo));
