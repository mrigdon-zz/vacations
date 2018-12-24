import * as am4maps from '@amcharts/amcharts4/maps';

export default function createCountryShapes(map) {
  const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

  // Exclude Antartica
  polygonSeries.exclude = ['AQ'];

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true;

  return polygonSeries;
}
