
document.addEventListener("DOMContentLoaded", init());
function init() {
    document.getElementById("btnSearch").addEventListener('click', ev => {
        ev.preventDefault() // Stop page from reload
        let url = 'https://api.giphy.com/v1/gifs/translate?api_key=yy7Z4ezeephLrAq6aag7h60pCq2so7wH&s=';
        let str = document.getElementById('search').value.trim();
        url = url.concat(str);
        //console.log(url);
        fetch(url, {mode: 'cors'})
        .then(response => response.json())
        .then(content => {
            // data, paginationn, meta
            console.log(content.data);
            console.log('META', content.data);
            let fig = document.createElement('figure');
            let img = document.createElement('img');
            let fc = document.createElement('figcaption');
            img.src = content.data.images.downsized.url;
            img.alt = content.data.title;
            fc.textContent = content.data.title;
            fig.appendChild(img);
            fig.appendChild(fc);
            let out = document.querySelector('.out');
            out.insertAdjacentElement('afterbegin', fig);
            document.querySelector("#search").value = "";
        })
        .catch(error => {
            console.error(error);
        })
    })
}




// // Fetch data from API
// let generateGifs = fetch(url, {mode: 'cors'})
// .then((response) => {
//     return response.json();
// })
// .then((response) => { 
//     img.src = response.data.images.original.url;
// })
// .catch(e => {
//   console.log(e);
// }) 

// //Button to generate Gifs
// button.addEventListener('click', () => {
//     return generateGifs;
// })
