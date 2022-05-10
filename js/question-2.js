//#Question 2

const key = "e5d7fa81c35c4e9c88516aaa14c09712";

const api ="https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";
const url = api + key;

const container = document.querySelector(".collection");

container.innerHTML = `<div class="list loading">Loading...</div>`;

async function getGames (){
    try {
        const response = await fetch(url);

        const data = await response.json();

        const games = data.results;

        container.innerHTML = createHtml (games, 8);
    }
    catch (error) {
        container.innerHTML = displayError();
    }
}

getGames();