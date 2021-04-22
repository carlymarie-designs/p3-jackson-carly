export default class Header {
  constructor( pageTitle, pageLogoSrc ) {
    this.pageTitle = pageTitle;
    this.pageLogoSrc = pageLogoSrc;
  }
}

export class MainHeader extends Header {
  constructor( pageTitle, pageLogoSrc, message ) {
    super( pageTitle, pageLogoSrc );
    this.message = message;
  }
}

// object based on child class
const mainHeader = new MainHeader( 
  'The Lunch Decider', 
  'Let us help you figuare out what to eat for lunch today...',
  'Ultricies Ullamcorper Cras Bibendum Purus'
);

const header = `
  <header>
    <h1>${mainHeader.pageTitle}</h1>
    <h2>${mainHeader.pageLogoSrc}</h2>
    <p>${mainHeader.message}</p>
  </header>

  <div class="question">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <button id="fast-food">Fast Food</button>
        <button id="sit-down">Sit Down Food</button>
      </div>
    </div>
  </div>
`;

document.body.innerHTML += header;