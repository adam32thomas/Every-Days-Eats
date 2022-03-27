let holidaySearch = $("#holidaySearch")
let holidayResults = $("#holidayResults")
let recipeSearch = $("#recipeSearch");
let resultsEl = $('#results')


function printResults() {
fetch("https://national-api-day.herokuapp.com/api/today")
     .then(function(response){
         return response.json();
     })
        .then(function(holidays){
        for (let i= 0; i < holidays.length; i++) {
            console.log(holidays[i])
            let resultsEl = ("li");
            let holidayEl = document.createElement("li");
            holidayEl.textContent = response[i].html_url
            resultsEl.appendChild(holidayEl)
         

 }
 console.log(holidays)
         })
        }

function getRecipe() {
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=a71abed719d541e9a4342518ad2e1fba")
        .then(function (response) {
    })
}

$(document).ready(function () {
    // $(holidaySearch).on("click", getHolidays);
    $(recipeSearch).on("click", getRecipe);
    $(holidaySearch).on("click", printResults);
})




