// from data.js
// var tableData = data; -- DID NOT USE THIS VARIABLE

// YOUR CODE HERE!
// data is from the data.js file

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
form.on("submit",runEnter);
// Complete the event handler function for the form
function runEnter() {
  $("#tbody").empty();
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputDate = inputElement.property("value");
  console.log(inputDate);
  // Use the form input to filter the data by date
  
  var days_data = data.filter(day_data => day_data.datetime === inputDate);
  console.log(days_data);

// Update the table with the date as the filter
uploadData(days_data)  
$("#datetime").val('')


};