let holidaySearch = $("#holidaySearch")
let holidayResults = $("#holidayResults")
let recipeSearch = $("#recipeSearch");
let resultsEl = $('#results')

// function pageDisplay() {
//     document.querySelector('#results').innerHTML = '<li>test</li>'
// }

function printResults() {
    fetch("https://national-api-day.herokuapp.com/api/today")
        .then(function (response) {
            return response.json();
        })
        .then(holidays => {
            console.log(holidays.holidays);
            const html = holidays.holidays
                .map(holidays => {
                        console.log(holidays)
                    return `<li>Holiday: ${holidays}</li>`;
                })
            $("#results").html(html)
        })
}

function getRecipe() {
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=a71abed719d541e9a4342518ad2e1fba")
        .then(function (response) {
            // let resultsEl = $("#recipeResults")
            // let recipeEl = document.createElement("p");
            // console.log(response);
        })
}

$(document).ready(function () {
    // $(holidaySearch).on("click", getHolidays);
    $(recipeSearch).on("click", getRecipe);
    $(holidaySearch).on("click", printResults);
})

// pageDisplay();
