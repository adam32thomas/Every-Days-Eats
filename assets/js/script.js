let holidaySearch = $("#holidaySearch");
let holidayResults = $("#holidayResults");
let recipeSearch = $("#recipeSearch");
let resultsEl = $('#results'); 
const recipeResult = $('#recipeResult');
let recipeButton = $('#recipeIndex');

function printResults() {
    fetch("https://national-api-day.herokuapp.com/api/today")
        .then(function (response) {
            return response.json();
        })
        .then(holidays => {
            console.log(holidays.holidays);
            const holidayList = holidays.holidays
                .map(holidays => {
                        console.log(holidays)
                    return `<li class="results-items">Holiday: ${holidays}</li>`;
                })
            let results = holidayList.join("")
            $("#results").html(`<ul class="results">${results}</ul>`)
        })
}


const loadRecipe= async () => {
    try {
        const res = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=a71abed719d541e9a4342518ad2e1fba');
        const recipeList = await res.json();
        // displayRecipe(recipeList);
        console.log(recipeList)
    } catch (err) {
        console.error(err);
    }
};

const displayRecipe = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <ul id="recipe">
               
            </ul>
        `;
        })
        console.log(recipeList)
        .join('');
    charactersList.innerHTML = htmlString;
};



$(document).ready(function () {      
    $(recipeButton).on("click", loadRecipe);
    $(holidaySearch).on("click", printResults);
});
