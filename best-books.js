const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('day');

const apiKey = 'RT8UYmThazCFakysGfTJmjj8lVhNP6cG';

const appID = '1a663267-d8f0-42fa-81b2-99f07e81634c';

const urlStart = 'https://api.nytimes.com/svc/books/v3/lists/'

const urlEnd = '/hardcover-fiction.json?api-key='

///lists/2019-01-20/hardcover-fiction.json

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const day = dateEl.value;

  const dateCombined = `${year}-${month}-${day}`

  const urlCombined = urlStart + dateCombined + urlEnd;

  console.log(urlCombined);
  // Fetch bestselling books for date and add top 5 to page
/**
  const dataFetch = fetch('url');

  dataFetch.then((data) => {
    console.log(data)
    return data.json()
  })
  .then((data) => {
    console.log("second then callback", data)
  })
   */
});
