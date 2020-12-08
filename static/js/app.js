// This hw is relatively straight forward.  It utilizes javascript and D3 to filter data from
// a dataset then adds it to a website, a relatively common situation in websites in general

// Approach: i'll write code backwards with what has to happen.  First the most basic thing: append
// the data from the data from the set into the website.  Next, use filters for the data itself,
// finally, create code which does this on a button click or using the enter key 

// Get a reference to the table body
var tbody = d3.select("tbody");

// create a function which appends the data from the data.js file to the website
data.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.values(ufoSighting).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });