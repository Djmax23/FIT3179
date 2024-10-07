var vg_1 = "la-nina-map.vg";
var vg_2 = "la-nina-chart.vg";

vegaEmbed("#la-nina-map", vg_1).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#la-nina-chart", vg_2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
