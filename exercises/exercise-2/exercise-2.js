let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// Task 1
function GryffindorHouse(arr) {
  let [...gryffindors] = arr.filter((person) => person.house === "Gryffindor");

  return [...gryffindors].forEach((person) => {
    console.log(`${person.firstName} ${person.lastName}`);
  });
}
console.log(`--- Task 1 ---`);
GryffindorHouse(hogwarts);

// Task 2
function teachersWithPets(arr) {
  let [...teachers] = arr.filter(
    (person) => person.occupation === "Teacher" && person.pet !== null
  );
  return [...teachers].forEach((person) => {
    console.log(`${person.firstName} ${person.lastName}`);
  });
}

console.log(`\n--- Task 2 ---`);
teachersWithPets(hogwarts);
