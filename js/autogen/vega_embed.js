
function startVegaEmbedding() {
  var embedOpt = {"mode": "vega-lite"};
  $(document).ready(function() {
    vegaEmbed("#jhu_world_cases", jhu_world_cases, embedOpt);
    vegaEmbed("#jhu_world_deaths", jhu_world_deaths, embedOpt);
    vegaEmbed("#jhu_us_cases", jhu_us_cases, embedOpt);
    vegaEmbed("#jhu_us_deaths", jhu_us_deaths, embedOpt);
    vegaEmbed("#jhu_world_cases_mobile", jhu_world_cases_mobile, embedOpt);
    vegaEmbed("#jhu_world_deaths_mobile", jhu_world_deaths_mobile, embedOpt);
    vegaEmbed("#jhu_us_cases_mobile", jhu_us_cases_mobile, embedOpt);
    vegaEmbed("#jhu_us_deaths_mobile", jhu_us_deaths_mobile, embedOpt);
  });
};
    