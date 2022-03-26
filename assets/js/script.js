let holidaySearch = $("#holidaySearch")
let holidayResults = $("#holidayResults")
let recipeSearch = $("#recipeSearch");

function printResults() {
fetch("https://national-api-day.herokuapp.com/api/today")
    .then(function(response){
        console.log(response)
});
};



function getHolidays() {
    fetch("https://national-api-day.herokuapp.com/api/today")
        .then(function (response) {
            return response.json()
            // resultsEl.appendChild(holidayEl);      
        })
        .then(function(response){
            console.log(response)
            let resultsEl = $("#holidayResults");
            let holidayEl = document.createElement("p");
            holidayEl.setAttribute("href", "https://national-api-day.herokuapp.com/api/today");
        })
        
};

function getRecipe() {
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=a71abed719d541e9a4342518ad2e1fba")
        .then(function (response) {
            // let resultsEl = $("#recipeResults")
            // let recipeEl = document.createElement("p");
            // console.log(response);
    })
}

$(document).ready(function () {
    $(holidaySearch).on("click", getHolidays);
    $(recipeSearch).on("click", getRecipe);
    $(holidaySearch).on("click", printResults);
})



