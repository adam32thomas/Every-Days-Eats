let holidaySearch = $("#holidaySearch")

function printResults() {
    fetch("https://national-api-day.herokuapp.com/api/today")
        .then(function (response) {
            console.log(response);
        });
};

$(holidaySearch).on("click", printResults);
