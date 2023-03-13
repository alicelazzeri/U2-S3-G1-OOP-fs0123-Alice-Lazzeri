// Esercizio 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

    static ageConfront(a, b) {
    if (a.age > b.age) {
      return a.firstName + " è più vecchio di " + b.firstName;
    } else if (a.age < b.age) {
      return a.firstName + " è più giovane di " + b.firstName;
    } else {
      return a.firstName + " e " + b.firstName + " sono coetanei";
    }
  }
}

const userOne = new User("Roberta", "Gavazzi", 58, "Piombino");
console.log(userOne);

const userTwo = new User("Alice", "Lazzeri", 27, "Campiglia Marittima");
console.log(userTwo);

const userThree = new User("Nicola", "Cresci", 26, "La Spezia");
console.log(userThree);

const userFour = new User("Edoardo", "Zilioli", 28, "La Spezia");
console.log(userFour);



console.log(User.ageConfront(userOne, userTwo));

console.log(User.ageConfront(userThree, userTwo));

console.log(User.ageConfront(userTwo, userFour));


// Esercizio 2

class Pet {
  constructor (petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static sameOwner (firstPet, secondPet) {
    if (firstPet.ownerName === secondPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const pet1 = new Pet ("Byron", "Alice", "gatto", "soriano tigrato");
console.log(pet1);

const pet2 = new Pet ("Eliot", "Alice", "gatto", "soriano tigrato");
console.log(pet2);

const pet3 = new Pet ("Tortellino", "Edoardo", "gatto", "Maine Coon");
console.log(pet3);

const pet4 = new Pet ("Asia", "Roberta", "cane", "Border Collie");
console.log(pet4);

console.log(Pet.sameOwner(pet1, pet2));

console.log(Pet.sameOwner(pet4, pet3));

