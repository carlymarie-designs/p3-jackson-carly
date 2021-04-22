export default class Footer {
  constructor( content ) {
    this.content = content;
  }
}

export class MainFooter extends Footer {
  constructor( content, date ) {
    super( content );
    this.date = date;
  }
}

// object based on child class
const mainFooter = new MainFooter( 
  'All Rights Reserved.',
  '&copy 2021 <strong>The Lunch Decider</strong>'   
);

const footer = `
  <footer class="mt-5 pt-5 text-center">
    <div class="container">
      <div class="row justify-content-center">

        <div class="col-12 col-md-10 content">
          <p>${mainFooter.date} ${mainFooter.content}</p>
        </div>

      </div>
    </div>
  </footer>
`;

document.body.innerHTML += footer;