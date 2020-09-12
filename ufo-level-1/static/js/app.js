// from data.js
var tbody = d3.select("tbody");

var tableData = data;

// YOUR CODE HERE!
// append rows of data to table
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
//button.on("click", runEnter);

// Complete the event handler function for the form
button.on("click", function () {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //empty the table
    tbody.html("")
    // Select the input element and get the raw HTML node
    
    var inputText = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputdate = inputText.property("value");
    
    // check
    console.log(inputdate);

    //filter data by input date
    var filteredData = tableData.filter(sighting => sighting.datetime === inputdate);
    
    // check
    console.log(filteredData);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
         });
    });
 });

