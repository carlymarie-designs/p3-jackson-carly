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
  'Ratings are based on our personal experience\, click buttons to reveal our choices...Ratings are on a scale of 5 stars'
);

const header = `
  <header class="mt-5 pt-5 text-center">
    <div class="container">
      <div class="row justify-content-center">

        <div class="col-12 col-md-9 content">
          <h1>${mainHeader.pageTitle}</h1>
          <h2>${mainHeader.pageLogoSrc}</h2>
          <p>${mainHeader.message}</p>
        </div>

      </div>
    </div>
  </header>

  <div class="question mt-3">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <button class="btn btn-primary m-2" id="fast-food">Fast Food</button>
        <button class="btn btn-secondary m-2" id="sit-down">Sit Down Food</button>
      </div>
    </div>
  </div>
`;

document.body.innerHTML += header;