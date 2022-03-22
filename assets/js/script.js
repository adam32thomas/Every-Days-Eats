let holidaySearch = $("#holidaySearch");
let holidayResults = $("#holidayResults");

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
    fetch("https://api.spoonacular.com/recipes/complexSearch")
        .then(function (response) {
        console.log(response);
    })
}

getRecipe();