import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

export default function createMap() {
  // Create map instance
  const chart = am4core.create("chartdiv", am4maps.MapChart);

  // disable zoom, drag, and resize
  // chart.maxZoomLevel = 1;
  // chart.seriesContainer.draggable = false;
  chart.seriesContainer.resizable = false;

  // Set map definition
  chart.geodata = am4geodata_worldLow;

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  return chart;
}
