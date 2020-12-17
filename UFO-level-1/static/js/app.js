// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputDate = inputElement.property("value");
  console.log(inputDate);
  // Use the form input to filter the data by date
  
  var days_data = tableData.filter(day_data => day_data.datetime === inputDate);
  console.log(days_data);
  //Gather the data from the days_data to be dislayed on in the table
  var dataDate = days_data.map(day_data => day_data.datetime);
  var dataCity = days_data.map(day_data => day_data.city);
  var dataState = days_data.map(day_data => day_data.state);
  var dataCountry = days_data.map(day_data => day_data.country);
  var dataShape = days_data.map(day_data => day_data.shape);
  var dataDuration = days_data.map(day_data => day_data.durationMinutes);
  var dataComments = days_data.map(day_data => day_data.comments);

  // Display the data in the table on the website. Need to use a "this"
  tbody = d3.select("tbody");
  tbody.append(tr).text(dataDate)








};