const img = document.querySelector('img');
const button = document.querySelector('.button');
let url = 'https://api.giphy.com/v1/gifs/translate?api_key=yy7Z4ezeephLrAq6aag7h60pCq2so7wH&s=pandas';

// Fetch data from API
let generateGifs = fetch(url, {mode: 'cors'})
.then((response) => {
    return response.json();
})
.then((response) => {
    img.src = response.data.images.original.url;
})
.catch(e => {
  console.log(e);
}) 

//Button to generate Gifs
button.addEventListener('click', () => {
    return generateGifs;
})
