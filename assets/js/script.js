let holidaySearch = $("#holidaySearch");
let holidayResults = $("#holidayResults");
let recipeSearch = $("#recipeSearch");
let resultsEl = $('#results');


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

// function getRecipe() {
//     fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=a71abed719d541e9a4342518ad2e1fba")
//         .then(function (response) {
            
//         })
// }

$(document).ready(function () {      
    // $(recipeSearch).on("click", getRecipe);
    $(holidaySearch).on("click", printResults);
});
