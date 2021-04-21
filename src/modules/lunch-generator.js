export default class Pizza {
  constructor( name, crust, cheese, sauce ) {
    this.name = name;
    this.crust = crust;
    this.cheese = cheese;
    this.sauce = sauce;
  }
}

export class FlavorPizza extends Pizza {
  constructor( name, crust, cheese, sauce, topping ) {
    super(name, crust, cheese, sauce);
    this.topping = topping;
  }
}

// object based on child class
const pepperoniPizza = new FlavorPizza( 'Pepperoni Pizza', 'Punk ass', 'American', 'Marinara', 'Pepperoni' );
const myPizza = new FlavorPizza( 'My Pizza', 'Butter', 'American', 'White', 'Pepperoni' );

console.log(pepperoniPizza);
console.log(myPizza);

const template = `
  <div>
    <h1>${pepperoniPizza.name}</h1>
    <h2>Type: ${pepperoniPizza.type}</h2>
    
    <ul>
      <li>${pepperoniPizza.crust}</li>
      <li>${pepperoniPizza.cheese}</li>
      <li>${pepperoniPizza.sauce}</li>
      <li>${pepperoniPizza.topping}</li>
    </ul>
  </div>
`;

document.body.innerHTML += template;