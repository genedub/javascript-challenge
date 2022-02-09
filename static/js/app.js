// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");
var date = d3.select("#datetime").property("value");
// YOUR CODE HERE!

tableData.forEach(function(info) {
    console.log(info);
    var row = tbody.append("tr");

    Object.entries(info).forEach(function ([key, value]) {
        console.log(key, value);

        var cell = row.append("td");

        cell.text(value);
    });
});



function handleClick() {
    function selectUfo(info) {
        var inputField = d3.select("#datetime");
        return info.datetime == inputField.property("value")
    }
    
var date = d3.select("#datetime").property("value");
      var filteredData  = tableData.filter(selectUfo);
    console.log("A button was clicked!");

    tbody.html(""); 

        filteredData.forEach(function (info) {
            console.log(info);
            var row = tbody.append("tr");
        
            Object.entries(info).forEach(function ([key, value]) {
                console.log(key, value);
        
                var cell = row.append("td");
        
                cell.text(value);
            });
        });
      }
button.on("click", handleClick);

