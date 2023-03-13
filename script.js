// Esercizio 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  ageConfront(x, y) {
    if (x.age > y.age) {
      return x.first.Name + " è più vecchio di " + y.first.name;
    } else if (x.age < y.age) {
      return x.firstName + "è più giovane di " + y.firstName;
    } else {
      return x.firstName + " e " + y.firstName + " sono coetanei";
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


