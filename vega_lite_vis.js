// =============================================================================
// vega_lite_vis.js
// FIT3179 Data Visualisation 2 — Malaysia's High Risk Weather
// =============================================================================

var embedConfig = {
  actions: false,
  renderer: "svg"
};

// =============================================================================
// SECTION 1 — Overview: Malaysia at a Glance
// =============================================================================

// Chart 1: Choropleth map — average TEMPERATURE by Malaysian state (2024)
var vg_1 = "js/chart1_overview_map.vg.json";
vegaEmbed("#chart1", vg_1, embedConfig)
  .then(function(result) {})
  .catch(console.error);

// Chart 2: Choropleth map — average RAINFALL by Malaysian state (2024)
var vg_2 = "js/chart2_rainfall_map.vg.json";
vegaEmbed("#chart2", vg_2, embedConfig)
  .then(function(result) {})
  .catch(console.error);


// =============================================================================
// SECTION 2 — Rising Heat: Temperature Trends 2010–2023
// =============================================================================

// Chart 3: Line chart — annual mean temperature with trend line overlay
var vg_3 = "js/chart3_temp_trend.vg.json";
vegaEmbed("#chart3", vg_3, embedConfig)
  .then(function(result) {})
  .catch(console.error);

// Chart 4: Heatmap — month × year grid, colour = average temperature
var vg_4 = "js/chart4_temp_heatmap.vg.json";
vegaEmbed("#chart4", vg_4, embedConfig)
  .then(function(result) {})
  .catch(console.error);


// =============================================================================
// SECTION 3 — Rainfall & Flood Risk
// =============================================================================

// Chart 5: Choropleth map — average annual rainfall by Malaysian state
var vg_5 = "js/chart5_rainfall_map.vg.json";
vegaEmbed("#chart5", vg_5, embedConfig)
  .then(function(result) {})
  .catch(console.error);

// Chart 6: Line + area — national annual rainfall trend with flood event annotations
var vg_6 = "js/chart6_rainfall_trend.vg.json";
vegaEmbed("#chart6", vg_6, embedConfig)
  .then(function(result) {})
  .catch(console.error);


// =============================================================================
// SECTION 4 — Air Quality & Haze
// =============================================================================

// Chart 7: Line chart — annual count of unhealthy air quality days (API > 100)
var vg_7 = "js/chart7_aqi_trend.vg.json";
vegaEmbed("#chart7", vg_7, embedConfig)
  .then(function(result) {})
  .catch(console.error);

// Chart 8: Bar chart — monthly PM2.5 concentration, colour-coded by WHO risk level
var vg_8 = "js/chart8_pm25_bar.vg.json";
vegaEmbed("#chart8", vg_8, embedConfig)
  .then(function(result) {})
  .catch(console.error);


// =============================================================================
// SECTION 5 — UV Risk & What This Means for You
// =============================================================================

// Chart 9: Bubble map — average UV index per monitoring station
var vg_9 = "js/chart9_uv_prop_symbol_map.vg.json";
vegaEmbed("#chart9", vg_9, embedConfig)
  .then(function(result) {})
  .catch(console.error);

// Chart 10: Radar chart — combined climate risk (heat, rain, AQI, UV) per state
var vg_10 = "js/chart10_bubble.vg.json";
vegaEmbed("#chart10", vg_10, embedConfig)
  .then(function(result) {})
  .catch(console.error);




// Chart 12: Interactive bar chart — top 5 peak UV readings per state (state selector)
var vg_12 = "js/chart12_uv_top5_bar.vg.json";
vegaEmbed("#chart12", vg_12, embedConfig)
  .then(function(result) {})
  .catch(console.error);

// Chart 13: Heatmap — state × month grid, colour = average peak UV index
var vg_13 = "js/chart13_uv_seasonal_heatmap.vg.json";
vegaEmbed("#chart13", vg_13, embedConfig)
  .then(function(result) {})
  .catch(console.error);

// =============================================================================
// SECTION 1 SUPPLEMENTARY — Seasonal Rainfall Cycle
// =============================================================================

// Chart 11: Bar chart — monthly average rainfall (seasonal cycle, Jan–Dec)
var vg_11 = "js/chart11_seasonal_bar.vg.json";
vegaEmbed("#chart11", vg_11, embedConfig)
  .then(function(result) {})
  .catch(console.error);
