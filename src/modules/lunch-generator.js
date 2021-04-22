export default class Resturaunt {
  constructor( name, location, number ) {
    this.name = name;
    this.location = location;
    this.number = number;
  }
}

//sub class
export class ResturauntChoice extends Resturaunt {
  constructor( name, location, number, rating ) {
    super(name, location, number);
    this.rating = rating;
  }
}

// Store Fast food options in an array
const fastFood = [
  new ResturauntChoice( 'Chick Fli A', '252 Bumby Road', '(845) 645-7787', '*****' ),
  new ResturauntChoice( 'Burger King', '898 Load Road', '(998) 645-7787', '***' ),
  new ResturauntChoice( 'Zaxbys', '8987 Some Road', '(998) 894-7787', '****' ),
  new ResturauntChoice( 'McDonalds', '8987 Golden Road', '(788) 895-7787', '**' ),
  new ResturauntChoice( 'Whataburger', '434 Space Road', '(889) 895-9785', '****' )
];

// log out fastFood
// console.log(fastFood);

const sitDownFood = [
  new ResturauntChoice( 'Mom & Pops', '454 Bumby Road', '(884) 645-4845', '****' ),
  new ResturauntChoice( 'River Side', '898 River Way', '(998) 645-7444', '*****' ),
  new ResturauntChoice( 'Silver Slipper', '373 Slider Way', '(989) 894-7889', '**' ),
  new ResturauntChoice( 'Bone Foxes', '8987 Golden Road', '(788) 895-7787', '**' ),
  new ResturauntChoice( 'Real Soul', '4344 Soul Road', '(889) 895-9785', '****' )
];

// console.log(sitDownFood);

// shuffle array
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(sitDownFood);
shuffle(fastFood);

console.log(sitDownFood[0]);
console.log(fastFood[0]);


// const template = `
//   <div>
//     <h1>${pepperoniPizza.name}</h1>
//     <h2>Type: ${pepperoniPizza.type}</h2>
    
//     <ul>
//       <li>${pepperoniPizza.crust}</li>
//       <li>${pepperoniPizza.cheese}</li>
//       <li>${pepperoniPizza.sauce}</li>
//       <li>${pepperoniPizza.topping}</li>
//     </ul>
//   </div>
// `;

// document.body.innerHTML += template;