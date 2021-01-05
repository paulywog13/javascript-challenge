// from data.js
// var tableData = data;-- DID NOT USE THIS VARIABLE

// YOUR CODE HERE!
// data is from data.js
// function to add the data into the table
function uploadData(data){
    var tbody = d3.select("tbody");
    tbody.html("");
    data.forEach(ufoData=> {
        var row = tbody.append("tr");
        Object.values(ufoData).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
          });
    });
};

// Use the uploadData function to fill the data table 
uploadData(data)
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
d3.selectAll("input").on("change", runEnter);
// form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  $("#tbody").empty();
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");

  // Use the form input to filter the data by date
  if (inputDate){
    filter_data = data.filter(day_data => day_data.datetime === inputDate);
  console.log(filter_data)}
  if (inputCity){
    filter_data = data.filter(city_data => city_data.city === inputCity);
    console.log(filter_data)}
  if (inputState){
    filter_data = data.filter(state_data => state_data.state === inputState);
  }
  if (inputCountry){
    filter_data = data.filter(country_data => country_data.country === inputCountry);
  }
  if (inputShape){
    filter_data = data.filter(shape_data => shape_data.shape === inputShape);
  }

uploadData(filter_data);
  
};
