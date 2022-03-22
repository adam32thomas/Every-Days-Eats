let holidaySearch = $("#holidaySearch")
let holidayResults = $("#holidayResults")

function printResults() {
fetch("https://national-api-day.herokuapp.com/api/today")
    .then(function(resp){
        console.log(resp)
});
};

$(holidaySearch).on("click", printResults);

function getHolidays() {
    fetch("https://national-api-day.herokuapp.com/api/today")
        .then(function (response) {
            let resultsEl = $("#holidayResults");
            let holidayEl = document.createElement("p");

            holidayEl.setAttribute("href", "https://national-api-day.herokuapp.com/api/today");

            // resultsEl.appendChild(holidayEl);      
        });
};

$(holidaySearch).on("click", getHolidays);

function getRecipe() {
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=a71abed719d541e9a4342518ad2e1fba")
        .then(function (response) {
        console.log(response);
    })
}

getRecipe();