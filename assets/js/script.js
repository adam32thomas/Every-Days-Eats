let holidaySearch = $("#holidaySearch")

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
