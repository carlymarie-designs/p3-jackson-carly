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
  'The Lunch Generator', 
  'What would you like for lunch?',
  'Ultricies Ullamcorper Cras Bibendum Purus'
);

const header = `
  <header>
    <h1>${mainHeader.pageTitle}</h1>
    <h2>${mainHeader.pageLogoSrc}</h2>
    <p>${mainHeader.message}</p>
  </header>
`;

document.body.innerHTML += header;