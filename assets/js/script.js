let holidaySearch = $("#holidaySearch")

function printResults() {
fetch("https://national-api-day.herokuapp.com/api/today")
    .then(function(resp){
        console.log(resp)
});
};

$(holidaySearch).on("click", printResults);

