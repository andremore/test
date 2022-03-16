// * Javascript Cheatsheet
// 1.

const object = {
    first: {
        id: 1,
        name: 'tosta',
        age: 50,
        date: Date(),
    },

    second: {
        id: 2,
        name: 'tasdta',
        age: 11,
        date: Date(),
    },
};

// console.log(object);

// Array of Objects
let arrayOfObjects = [];

arrayOfObjects.push(object);

const budingo = document.querySelector('body');
const saling = document.createElement('p');

budingo.append(saling);

const strine = JSON.stringify(arrayOfObjects);

saling.innerHTML = strine;

// console.log(arrayOfObjects);

// Object constructor pushes to array
let people = [];

function Person(name, age) {
    this.name = name;
    this.age = age;

    people.push(this);
}

const potato = new Person('you', 52);
const tricato = new Person('them', 24);

// console.log(people);
