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

// Store sit down food options
const sitDownFood = [
  new ResturauntChoice( 'Mom & Pops', '454 Bumby Road', '(884) 645-4845', '****' ),
  new ResturauntChoice( 'River Side', '898 River Way', '(998) 645-7444', '*****' ),
  new ResturauntChoice( 'Silver Slipper', '373 Slider Way', '(989) 894-7889', '**' ),
  new ResturauntChoice( 'Bone Foxes', '8987 Golden Road', '(788) 895-7787', '**' ),
  new ResturauntChoice( 'Real Soul', '4344 Soul Road', '(889) 895-9785', '****' )
];

// shuffle array
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(sitDownFood);
shuffle(fastFood);

// test array shuffle
console.log(sitDownFood[0].name);

// store buttons
const fastBtn = document.querySelector("#fast-food");
const sitBtn = document.querySelector("#sit-dow");
const output = document.querySelector('#output');

// show fast food result 
fastBtn.addEventListener("click", function() {
  output.innerHTML = foodResults;
});
  
const foodResults = `
  <div class="results">
    <div class="container">
      <div class="row justify-content-center align-item-center">

        <div class="col-12 col-md-6">
          <div id="output">${fastFood[0].name}</div>
        </div>

      </div>
    </div>
  </div>
`;

