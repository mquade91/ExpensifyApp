//  OBJECT DEZSTRUCTURING

// const person = {
//   // name: 'Matt',
//   age: 27,
//   location: {
//     city: 'Charlotte',
//     temp: 95,
//   },
// };

// const { name: firstName = 'Anymous', age } = person;

// console.log(`${firstName} is ${age} and lives in ${person.location.city}`)

// const { city, temp: temprature } = person.location

// if (city && temprature) {
//   console.log(` it's ${temprature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan H.',
//   publisher: {
//     name: 'Penguin',
//   }
// };

// const { name: publisherName = 'self published' } = book.publisher

// console.log(publisherName);


// ARRAY DESTRUCTURING

// const address = ['1299 South Blvd', 'Charlotte', , '28209'];
// const [, city, myState = 'MD'] = address;
// console.log(`you are in ${city} ${myState}`)

const items = ['coffee', '$2.00', '$2.50', '$2.75'];

const [drink, , mediumPrice = '(pricing unknown)'] = items

console.log(` A mediumm ${drink} cost ${mediumPrice}`)