
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function add(num1, num2) {
  return num1 + num2 + x;

}
console.log(add(1,2))
// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const addArrow = (num1, num2) =>{
  return num1 + num2 + x;
}
console.log(addArrow(1,2))

// 3. Write a function that returns another function. (use arrow functions please)

const greeting = (func) =>{
  return `Hello, ${func}.`
}
const name = (name) =>{
  return name;
}

console.log(greeting(name('Bradley')))

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))
//Answer:
//insideFunc() has access to y because it is enclosed inside getFunction, with y.



// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  return 'success'
}

const  callBackFunc = (func) => {
  try {
    return func
  }catch (e) {
    console.log("sorry, there was an error")
  }
}

// I got success to show, but the error is not showing.
console.log(callBackFunc(couldThrowError())) 
////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]
const mapUserData = userData.map( data =>{
  user ={
    id: data.id,
    favoriteFoods: data.favorites.food.length
  }
  return user
})

console.log(mapUserData)

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']
const reduceUserData = userData.reduce(((accumulator, user) => {

  if(user.favorites.food.includes('pizza')){

    accumulator.push(user.name)
  }
  return accumulator

}),[])

console.log(reduceUserData);

// 7. Show an an example of a switch statement being used
let myName = "Bradley"
switch(myName === 'Bradley'){
  case true:
    console.log (`${myName} is my name.`);
    break;
  case false:
    console.log(`${myName} is not my name.`);
    break;

}


////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const combineObjs = ( userPersonalData, userGameData) =>{
  let userObj = {
    ...userPersonalData,
    ...userGameData
  }
  return userObj
}
const userObj = combineObjs(userPersonalData,userGameData)
console.log(userObj);




// 9. Make a copy of your new user object but override the birthday to december 31st
 const copyUserObj = userObj;
 copyUserObj.birthday = 'december 31st'
 console.log(copyUserObj)

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

let accomplishmentsArray = [...copyUserObj.accomplishments]
console.log(accomplishmentsArray);


//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

let favoriteFoodArray = [...user.favoriteThings.food];
console.log(favoriteFoodArray);
// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
const firstTwoArr = [...favoriteFoodArray.slice(0,2)]
console.log(firstTwoArr)
// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];
const keyNames = ['name','age','food']

const objectMaker = (keyNames,values) =>{
  let returnObj = new Object;
  const nameAge = [...values.slice(0,2)]
  const favoriteFoods = [...values.slice(2,)]
  const data2 = [...nameAge,favoriteFoods]

  keyNames.forEach((element, index)=>{
    returnObj = {
      ...returnObj,
      [element]: data2[index]

    }
  })

  return returnObj;

}
console.log(objectMaker(keyNames,data));

// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};
const userName = userInfo.name
const favoriteFood = [...userInfo.favorites.needs.food]
const favoriteThing = userInfo.favorites.wants.things[0]
const secondFavoriteThing = userInfo.favorites.wants.things[1]

console.log(userName)
console.log(favoriteFood);
console.log(favoriteThing);
console.log(secondFavoriteThing);






var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
fetchData().then((value)=>{
  console.log(value)
}).catch((error)=>{
  console.error(error)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const fetchDataAsync = async () => {
  try {
    const results =  await fetchData()
    console.log(results);
  } catch (error) {
    console.log(error)
  }
}

fetchDataAsync()