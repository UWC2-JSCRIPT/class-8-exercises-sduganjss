const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('day');

const apiKey = 'RT8UYmThazCFakysGfTJmjj8lVhNP6cG';

const appID = '1a663267-d8f0-42fa-81b2-99f07e81634c';

const urlStart = 'https://api.nytimes.com/svc/books/v3/lists/'

const urlEnd = '/hardcover-fiction.json?api-key='


formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  
  const dateCombined = `${yearEl.value}-${monthEl.value}-${dateEl.value}`

  const urlCombined = urlStart + dateCombined + urlEnd + apiKey;

 // Fetch bestselling books for date and add top 5 to page

  const dataFetch = fetch(urlCombined);

  dataFetch.then((data) => {
    return data.json()
  })
  .then((data) => {
    const bookEl = document.getElementById('books-container');
   
     for (let i = 0; i < 5; i++) {
      let title = data.results.books[i].title;
      let author = data.results.books[i].author;
      let description = data.results.books[i].description;

      let bookDisplay = `Title: ${title}  
      Author: ${author} 
      Description: ${description}
      `;

      bookEl.innerText += bookDisplay;

    }
  })
   
});
