// file json - data
const url = ".././text/data.json";

const searchInput = document.querySelector('#search-input');
const result = document.querySelector('#result');

searchInput.addEventListener('change', (e) => {
    console.log(searchInput.value);
    doGetJSON(url, searchInput.value);
});


function doGetJSON(url, inputWord) {
    //link database
    fetch(url)
        .then(async response => {
            if (!response.ok) {
                throw new Error("Error, stattus = " + response.status);
            }
            const data = await response.json();
            console.log("data: ", data);
            //search word (inputWord) in database
            data.find(function(e) {
                if (inputWord == e.word) {
                    console.log(e.mean);
                    result.innerHTML = e.mean;
                }
            });
        })
        .catch(error => {
            console.log(error);
        })
}