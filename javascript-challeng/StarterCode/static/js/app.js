// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

function ufoTable(data){


  tbody.html("");
  // Step 1: Loop Through `data` and console.log 
  data.forEach(function(ufoReport) {
    console.log(ufoReport);
  });

  // Step 2:  Use d3 to append one table row `tr` 
  
  data.forEach((ufoReport)=>{
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.values(ufoReport).forEach((ufoData)=>{
    var cell=row.append("td");
    cell.text(ufoData);
  }
  );
  });
}

function ufoSelect(){
  var date=d3.select("#datetime").property("value");
  var copyData= tableData
  if(date){
    filterData=copyData.filter(data=>data.datetime===date);
    ufoTable(filterData);
  }
}

d3.select("#filter-btn").on("click",ufoSelect);

ufoTable(tableData);

