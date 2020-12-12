// This hw is relatively straight forward.  It utilizes javascript and D3 to filter data from
// a dataset then adds it to a website, a relatively common situation in websites in general

// Approach: i'll write code backwards with what has to happen.  First the most basic thing: append
// the data from the data from the set into the website.  Next, use filters for the data itself,
// finally, create code which does this on a button click or using the enter key 

// the code itself which you see will take on this general structure: filter first, then the 
// button and event code, then creating the table list in the html

// Get a reference to the table body, button, form
var tbody = d3.select("tbody");
var dateForm = d3.select("#datetimeform");
var button = d3.select("#filter-btn");

// utilize the event (pressing enter) to activate the filtering process
dateForm.on("submit", startFiltering);
button.on("click", startFiltering);


// create a function which appends the data from the data.js file to the website
function startFiltering(){
    d3.event.preventDefault();

    // console.log("test")
    tbody.html("");
    // get the data from the form for the filter
    let getTheDate = d3.select("#datetime").property("value");
    let getTheCity = d3.select("#city").property("value");
    let getTheState = d3.select("#state").property("value");
    let getTheCountry = d3.select("#country").property("value");
    
    //create the dateFilter  variables; i had some help from askbcs asst here
    let dateFilter = data;

    // attach the filter to the date
    if (getTheDate != "") {
        dateFilter = data.filter(dates => dates.datetime === getTheDate)
    }
    else {dataFilter = data};

    if (getTheCity != "") {
        dateFilter = dateFilter.filter(cities => cities.city === getTheCity)
    };

    if (getTheState != "") {
        dateFilter = dateFilter.filter(states => states.state === getTheState)
    };

    if (getTheCountry != "") {
        dateFilter = dateFilter.filter(countries => countries.country === getTheCountry)
    };

    // run a forEach loop to go through each value in the dataset
    dateFilter.forEach(function(ufoSighting) {
        // console.log(ufoSighting);
        var row = tbody.append("tr");
        Object.values(ufoSighting).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};



// function dateTest(date){
//     if (inputtx.value.length == 0)
//      { 
//         alert("No Date");  	
//         return true; 
//      }  	
//      return date; 
//    } 
