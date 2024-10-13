// JSON file paths
var graph1 = "AverageWageMap.json";
var graph2 = "bubble.json"; // Example for the second graph
var graph3 = "corruption.json";
var graph4 = "Unemployment.json";

// Embed the first graph (Average Wage Map)
vegaEmbed("#average_wage_map", graph1).then(function(result) {
    console.log("First graph (Average Wage Map) loaded");
}).catch(console.error);

// Embed the second graph (Bubble Chart)
vegaEmbed("#bubble_chart", graph2).then(function(result) {
    console.log("Second graph (Bubble Chart) loaded");
}).catch(console.error);

// Embed the third graph (Corruption Index Bar Chart)
vegaEmbed("#bar_chart", graph3).then(function(result) {
    console.log("Third graph (Corruption Index Bar Chart) loaded");
}).catch(console.error);

// Embed the fourth graph (Unemployment Chart)
vegaEmbed("#unemployment_chart", graph4).then(function(result) {
    console.log("Fourth graph (Unemployment Chart) loaded");
}).catch(console.error);
