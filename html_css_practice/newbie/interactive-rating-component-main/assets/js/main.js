const listElements = [];

function chooseRating(rating) {
  let buttonId = rating.innerText;
  const listRateButtons = document.querySelectorAll('.rate-button');
  
  for (i = 0; i < listRateButtons.length; i++) {
    let rateButton = listRateButtons[i];

    if (listRateButtons[i].innerText === buttonId) {
      rateButton.style.background = 'hsl(217, 12%, 63%)';
      rateButton.style.color= 'white';
      rateButton.setAttribute('id', 'choosed-rating');
    } else {
      rateButton.style.background = 'hsl(216, 12%, 22%)';
      rateButton.style.color= 'hsl(216, 12%, 54%)';
      rateButton.removeAttribute('id');
    }
  }
}

function createImage() {
  let img = document.createElement('img');
  img.src = './assets/images/illustration-thank-you.svg'
  listElements.push(img);
}

function createRatingResponse(rating) {
  let ratingResponse = document.createElement('p');
  ratingResponse.innerText = `You selected ${rating} out of 5`;
  ratingResponse.setAttribute(
    'style', `background: hsl(216, 12%, 22%);
    border: none;
    border-radius: 24px;
    color: hsl(25, 97%, 45%);
    margin: 30px 0 36px 0;
    padding: 4px 26px;`
  );

  listElements.push(ratingResponse);
}

function createThankYouH1() {
  let h1 = document.createElement('h1');
  h1.style.color = 'white';
  h1.innerText = 'Thank You!'
  listElements.push(h1);
}

function createDescription() {
  let description = document.createElement('p');

  description.innerHTML = `We appreciate you taking the time to give a rating. 
  <span style="display: block;">If you ever need more support, don't hesitate to</span>
  get in touch!`;
  description.setAttribute('style', 'margin: 18px 0 50px 0;')

  listElements.push(description);
}

function createThankYouPage(rating) {
  const thankYouContainer = document.createElement('div');
  createImage();
  createRatingResponse(rating);
  createThankYouH1();
  createDescription();

  thankYouContainer.setAttribute(
    'style', `display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 32px;`
  );

  for (let i = 0; i < listElements.length; i++) {
    thankYouContainer.appendChild(listElements[i]);
  }

  return thankYouContainer;
}

function sendRating() {
  const rating = document.getElementById('choosed-rating').innerText;

  const thankYouPage = createThankYouPage(rating);
  const mainElement = document.querySelector('main');
  const oldDiv = document.getElementById('rating-component');
  mainElement.removeChild(oldDiv);
  mainElement.appendChild(thankYouPage);
}
