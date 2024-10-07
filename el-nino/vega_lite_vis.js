var vg_1 = "el-nino-map.vg";
var vg_2 = "el-nino-chart.vg";

vegaEmbed("#el-nino-map", vg_1).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#el-nino-chart", vg_2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
