//create html elements
function createHtml (gamesList, index){
    let html = "";

    for (let i = 0; i < index; i++){
        const game = validate (gamesList[i]);
        html += `<div class="list">
                <ul>
                    <li>Game: ${game.name}</li>
                    <li>Rating: ${game.rating}</li>
                    <li>Number of tags: ${game.tagLength}</li>
                </ul>
            </div>`;
    }

    return html;
}

//validate game values
function validate (gameItem){
    let validGame = [];

    validGame.name = gameItem.name;
    validGame.rating = gameItem.rating;
    validGame.tagLength = gameItem.tags.length;

    if (!validGame.name){
        validGame.name = "Unknown";
    }

    if (!validGame.rating){
        validGame.rating = "Unknown";
    }

    if (!validGame.tagLength){
        validGame.name = "Unknown";
    }

    return validGame;
}

//create error html
function displayError(){
    const html = `<div class="list error"><p>An error occurred</p></div>`;
    return html;
}