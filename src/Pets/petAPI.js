const pets = [
  { id: "a234", age: "18yrs", name: "Cinderella", species: "parrot" },
  { id: "a235", age: "3yrs", name: "Oreo", species: "cat" },
  { id: "a236", age: "1yr", name: "Lucky", species: "dog" },
  { id: "ad34", age: "8yrs", name: "Peanut", species: "cat" },
  { id: "a345", age: "10yrs", name: "Luna", species: "ferret" },
  { id: "b234", age: "11yrs", name: "Bell", species: "cat" },
  { id: "cda2", age: "4yrs", name: "Snowball", species: "rabbit" },
  { id: "def4", age: "9mos", name: "Nibbles", species: "gold fish" },
  { id: "eft2", age: "2yrs", name: "Bella", species: "chinchilla" }
];

const getAll = () => pets;

const getOne = id => pets.find(pet => pet.id === id);

export default {
  getOne,
  getAll
};
