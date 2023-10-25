console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Essie ',
  lastName: 'Schlotterbeck',
  hasSiblings: true,
  shoeCount: 15,
  favThreeFood: ['pad see ew', 'tacos al pastor', 'raspberries']// TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + me.lastName;
console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('One of my favorite foods is: ', me.favThreeFood[0]);
console.log('Another one of my favorite foods is: ', me.favThreeFood[me.favThreeFood.length-1]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('I have ' + me.shoeCount + ' pairs of shoes.');
me.shoeCount += 1;
console.log('Oh boy! Now I have ' + me.shoeCount + ' pairs of shoes.')

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'marigold yellow';

console.log('My favorite color is: ', me.favoriteColor);

console.log(me);