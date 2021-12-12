/*$(document).ready(function() {
  	var myElements = $("#id1");
  	$("#coba").text("The text from the id01 paragraph is: " + myElements[0].innerHTML);
});*/
/*$(document).ready(function() {
  	var myElements = $("p");
  	$("#coba").text("The text in the first paragraph is: " + myElements[0].innerHTML);
});*/
/*$(document).ready(function() {
  	var myElements = $(".intro");
  	$("#coba").text("The text in the first paragraph is: " + myElements[0].innerHTML);
});*/
/*$(document).ready(function() {
  	var myElements = $("p.intro");
  	$("#coba").text("The text in the first paragraph is: " + myElements[0].innerHTML);
});*/
/*set text content
$(document).ready(function() {
  	var myElement = $("#01");
  	myElement.text("Hello Japan");
});*/
/*$(document).ready(function() {
  	var myText = $("#02").text();
  	$("#coba").text(myText);
});*/
/*$(document).ready(function() {
  	$("#02").html("<h3>Argentina</h3>");
});*/
/*$(document).ready(function() {
  	var content = $("#02").html();
  	$("#01").html(content);
});*/
/*$(document).ready(function() {
  	$("#01").hide();
});*/
/*$(document).ready(function() {
  	$("#01").show();
});*/
/*$(document).ready(function() {
  	$("#coba").css("font-size","30px");
});*/
/*$(document).ready(function() {
  	$("#01").remove();
});*/
/*$(document).ready(function() {
  	$("#coba").text($("#02").parent().prop("nodeName"));
});*/

/*const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

ctx.fillStyle = "red";
for (let i = 0; i < xArray.length-1; i++) {
  	let x = xArray[i]*400/150;
  	let y = yArray[i]*400/15;
  	ctx.beginPath();
  	ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
  	ctx.fill();
}*/
/*const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#ff0000";
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

let xMax = canvas.height;
let slope = 1.2;
let intercept = 70;

ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.strokeStyle = "black";
ctx.stroke();

function f(x) {
	return x * slope + intercept;
}*/
/*const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

let xMax = canvas.height;
let yMax = canvas.width;
let slope = 1.2;
let intercept = 70;

const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Plot Scatter
ctx.fillStyle = "red";
for (let i = 0; i < xArray.length-1; i++) {
  	let x = xArray[i]*xMax/150;
  	let y = yArray[i]*yMax/15;
  	ctx.beginPath();
  	ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
  	ctx.fill();
}

// Plot Line
ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.strokeStyle = "black";
ctx.stroke();

// Line Function<br>
function f(x) {
  	return x * slope + intercept;
}*/
/*var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
var data = [{
  	x:xArray,
  	y:yArray,
  	mode:"lines" //markers/lines
}];

// Define Layout
var layout = {
  	xaxis: {range: [40, 160], title: "Square Meters"},
  	yaxis: {range: [5, 16], title: "Price in Millions"},  
  	title: "House Prices vs. Size"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);*/

/*linear
var exp = "x + 17";

// Generate values
var xValues = [];
var yValues = [];
for (var x = 0; x <= 10; x += 1) {
  	xValues.push(x);
  	yValues.push(eval(exp));
}

// Define Data
var data = [{
  	x: xValues,
  	y: yValues,
  	mode:"lines"
}];

// Define Layout
var layout = {title: "y = " + exp};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);*/

/*multiple line
var exp1 = "x";
var exp2 = "1.5*x";
var exp3 = "1.5*x + 7";
// Generate values

var x1Values = [];
var x2Values = [];
var x3Values = [];
var y1Values = [];
var y2Values = [];
var y3Values = [];

for (var x = 0; x <= 10; x += 1) {
  	x1Values.push(x);
  	x2Values.push(x);
  	x3Values.push(x);
  	y1Values.push(eval(exp1));
  	y2Values.push(eval(exp2));
  	y3Values.push(eval(exp3));
}

// Define Data
var data = [
  	{x: x1Values, y: y1Values, mode:"lines"},
  	{x: x2Values, y: y2Values, mode:"lines"},
  	{x: x3Values, y: y3Values, mode:"lines"}
];

//Define Layout
var layout = {title: "[y=" + exp1 + "]  [y=" + exp2 + "]  [y=" + exp3 + "]"};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);*/

/*bar chart
var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];

var data = [{
  	x:xArray,
  	y:yArray,
  	type:"bar"
}];

var layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);*/

/*bar chart (horizontal)
var xArray = [55, 49, 44, 24, 15];
var yArray = ["Italy ", "France ", "Spain ", "USA ", "Argentina "];

var data = [{
  	x:xArray,
  	y:yArray,
  	type:"bar",
  	orientation:"h",
  	marker: {color:"rgba(255,0,0,0.6)"}
}];

var layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);*/

/*pie chart
var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];

var layout = {title:"World Wide Wine Production"};

var data = [{labels:xArray, values:yArray, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);*/

/*donut chart
var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];

var layout = {title:"World Wide Wine Production"};

var data = [{labels:xArray, values:yArray, hole:.4, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);*/

/*Plotting Equations
var exp = "Math.sin(x)";

// Generate values
var xValues = [];
var yValues = [];
for (var x = 0; x <= 10; x += 0.1) {
  	xValues.push(x);
  	yValues.push(eval(exp));
}

// Display using Plotly
var data = [{x:xValues, y:yValues, mode:"lines"}];
var layout = {title: "y = " + exp};
Plotly.newPlot("myPlot", data, layout);*/

/*var exp = "Math.cos(x)";

// Generate values
var xValues = [];
var yValues = [];
for (var x = 0; x <= 10; x += 0.2) {
  yValues.push(eval(exp));
  xValues.push(x);
}

// Display using Plotly
var data = [{x:xValues, y:yValues, mode:"markers"}];
var layout = {title: "y = " + exp};
Plotly.newPlot("myPlot", data, layout);*/

/*Scatter Plots
var xyValues = [
  	{x:50, y:7},
  	{x:60, y:8},
  	{x:70, y:8},
  	{x:80, y:9},
  	{x:90, y:9},
  	{x:100, y:9},
  	{x:110, y:10},
  	{x:120, y:11},
  	{x:130, y:14},
  	{x:140, y:14},
  	{x:150, y:15}
];

new Chart("myChart", {
  	type: "scatter",
  	data: {
    	datasets: [{
      		pointRadius: 4,
      		pointBackgroundColor: "rgb(0,0,255)",
      		data: xyValues
    	}]
  	},
  	options: {
    	legend: {display: false},
    	scales: {
      		xAxes: [{ticks: {min: 40, max:160}}],
      		yAxes: [{ticks: {min: 6, max:16}}],
    	}
  	}
});*/

/*line graphs
var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart", {
  	type: "line",
  	data: {
    	labels: xValues,
    	datasets: [{
      		fill: false,
      		lineTension: 0,
      		backgroundColor: "rgba(0,0,255,1.0)",
      		borderColor: "rgba(0,0,255,0.1)",
      		//borderColor: "rgba(0,0,0,0)",
      		data: yValues
    	}]
  	},
  	options: {
    	legend: {display: false},
    	scales: {
      		yAxes: [{ticks: {min: 6, max:16}}],
    	}
  	}
});*/

/*Multiple Lines
var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  	type: "line",
  	data: {
    	labels: xValues,
    	datasets: [{ 
      		data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      		borderColor: "red",
      		fill: false
    	}, { 
      		data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      		borderColor: "green",
      		fill: false
    	}, { 
      		data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      		borderColor: "blue",
      		fill: false
    	}]
  	},
  	options: {
    	legend: {display: false}
  	}
});*/

/*linear graphs
var xValues = [];
var yValues = [];
generateData("x * 2 + 7", 0, 10, 0.5);
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(255,0,0,0.5)",
      data: yValues
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "y = x * 2 + 7",
      fontSize: 16
    }
  }
});
function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
    xValues.push(x);
  }
}*/

/*Function Graphs
var xValues = [];
var yValues = [];
generateData("Math.sin(x)", 0, 10, 0.5);

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 2,
      borderColor: "rgba(0,0,255,0.5)",
      data: yValues
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "y = x * 2 + 7",
      fontSize: 16
    }
  }
});
function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
    xValues.push(x);
  }
}*/

/*bar chart
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});*/

/*horizontal chart
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "horizontalBar",
  data: {
  labels: xValues,
  datasets: [{
    backgroundColor: barColors,
    data: yValues
  }]
},
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    },
    scales: {
      xAxes: [{ticks: {min: 10, max:60}}]
    }
  }
});*/

/*pie chart
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});*/

/*doughnut chart
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});*/

/*line graph
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
// Set Data
var data = google.visualization.arrayToDataTable([
  ['Price', 'Size'],
  [50,7],[60,8],[70,8],[80,9],[90,9],
  [100,9],[110,10],[120,11],
  [130,14],[140,14],[150,15]
]);
// Set Options
var options = {
  title: 'House Prices vs. Size',
  hAxis: {title: 'Square Meters'},
  vAxis: {title: 'Price in Millions'},
  legend: 'none'
};
// Draw
var chart = new google.visualization.LineChart(document.getElementById('myChart'));
chart.draw(data, options);
}*/

/*scatter plots
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
// Set Data
var data = google.visualization.arrayToDataTable([
  ['Price', 'Size'],
  [50,7],[60,8],[70,8],[80,9],[90,9],
  [100,9],[110,10],[120,11],
  [130,14],[140,14],[150,15]
]);
// Set Options
var options = {
  title: 'House Prices vs. Size',
  hAxis: {title: 'Square Meters'},
  vAxis: {title: 'Price in Millions'},
  legend: 'none'
};
// Draw
var chart = new google.visualization.ScatterChart(document.getElementById('myChart'));
chart.draw(data, options);
}*/

/*bar chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Italy',55],
  ['France',49],
  ['Spain',44],
  ['USA',24],
  ['Argentina',15]
]);

var options = {
  title:'World Wide Wine Production'
};

var chart = new google.visualization.BarChart(document.getElementById('myChart'));
  chart.draw(data, options);
}*/

/*pie chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Italy',54.8],
  ['France',48.6],
  ['Spain',44.4],
  ['USA',23.9],
  ['Argentina',14.5]
]);

var options = {
  title:'World Wide Wine Production'
};

var chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}*/

/*3d pie
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Italy',54.8],
  ['France',48.6],
  ['Spain',44.4],
  ['USA',23.9],
  ['Argentina',14.5]
]);

var options = {
  title:'World Wide Wine Production',
  is3D:true
};

var chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}*/

//d3.select("body").append("p").text("Hello World!");
// Set Dimensions
const xSize = 500; 
const ySize = 500;
const margin = 40;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

// Create Random Points
const numPoints = 100;
const data = [];
for (let i = 0; i < numPoints; i++) {
  data.push([Math.random() * xMax, Math.random() * yMax]);
}

// Append SVG Object to the Page
const svg = d3.select("#myPlot")
  .append("svg")
  .append("g")
  .attr("transform","translate(" + margin + "," + margin + ")");

// X Axis
const x = d3.scaleLinear()
  .domain([0, 500])
  .range([0, xMax]);

svg.append("g")
  .attr("transform", "translate(0," + yMax + ")")
  .call(d3.axisBottom(x));

// Y Axis
const y = d3.scaleLinear()
  .domain([0, 500])
  .range([ yMax, 0]);

svg.append("g")
  .call(d3.axisLeft(y));

// Dots
svg.append('g')
  .selectAll("dot")
  .data(data).enter()
  .append("circle")
  .attr("cx", function (d) { return d[0] } )
  .attr("cy", function (d) { return d[1] } )
  .attr("r", 3)
  .style("fill", "Red");