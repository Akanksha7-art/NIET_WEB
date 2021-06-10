// top to bottom compile
//left to right

//cout
//System.out.println();

console.log("hello world");

//char , int, double, float, boolean, string,

//JavaScript data types
//Number, Boolean, String, undefined, Object(Array, object)


//declaration and initialization of a variable

//ES6 syntax => let and const

// let is block scoped

let a;// it takes undefined

 a = 10;


if(true){
    a = 200;
    console.log(a);
}

console.log(a);

//const => block scoped and constant

const pi = 3.14;
console.log(pi);

//pi = 200;  not allowed TypeError/Assisgnment to a const variable



let b = "akansha";
let c = true;
let e = 3.45556;
let f = undefined;

//Non primitive => Objects arrays

//Arrays => dynamic

let movies = ["soldier" , "bhoothnath", 50, 100, ""];
console.log(movies);

//Arrays supports push, pop ,unshift ,shift ,splice

console.log(movies[2]);

console.log(movies.pop());
movies.push("End game");
movies.unshift("the end"); // append at the start of array
console.log(movies);
movies.shift();// deletes from start of the array
console.log(movies);

movies.splice(2, 2);// eska mtlb h secoond index se 2 log nkal do // only works on array

movies[100] = "ye kya hua";

console.log(movies);
console.log(movies.length);

// let movies = [] // new Array();

//object => key values ka pair
//let avenger = {} ; //new Object();


//keys are always unique
//values may be duplicates
let avenger = {
    full_name: "Steve Rogers",
    place: "Queens",
    skills: [
      "Martial Arts",
      "Taekwondo",
      {
        BestFriend: [
          { name: "Bucky", skills: [] },
          { name: "Natasha", skills: ["Fighting" , "asdas" , "asfasf"] },
        ],
      },
    ],
   
    age: 200,
  };
  
  console.log(avenger.skills[2]["BestFriend"][1].skills[0].substring(4)); 

  console.log(avenger.skills[2].BestFriend[1].skills[0].substring(4)); 
  
  
  
  // dot notation => literal check
  // console.log(avenger.place);
  // console.log(avenger.movies);
  // avenger["skills"];
  
  // bracket notation
  // let key = "age";
  
  // console.log( avenger[key]  );




    
