
var COVIDVIS_CHARTS = {};
function startVegaEmbedding() {
  var embedOpt = {"mode": "vega-lite"};
  $(document).ready(function() {
vegaEmbed("#jhu_world_cases", jhu_world_cases, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_world_cases'] = chart;
    
});
vegaEmbed("#jhu_world_deaths", jhu_world_deaths, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_world_deaths'] = chart;
    
});
vegaEmbed("#jhu_us_cases", jhu_us_cases, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_us_cases'] = chart;
    
});
vegaEmbed("#jhu_us_deaths", jhu_us_deaths, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_us_deaths'] = chart;
    
});
vegaEmbed("#jhu_world_cases_mobile", jhu_world_cases_mobile, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_world_cases_mobile'] = chart;
    
});
vegaEmbed("#jhu_world_deaths_mobile", jhu_world_deaths_mobile, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_world_deaths_mobile'] = chart;
    
});
vegaEmbed("#jhu_us_cases_mobile", jhu_us_cases_mobile, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_us_cases_mobile'] = chart;
    
});
vegaEmbed("#jhu_us_deaths_mobile", jhu_us_deaths_mobile, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_us_deaths_mobile'] = chart;
    
});
  });
}
    