import createMap from 'lib/map/createMap';
import createCountryShapes from 'lib/map/createCountryShapes';
import createCountryIndicators from 'lib/map/createCountryIndicators';
import addCountryHoverEffect from 'lib/map/addCountryHoverEffect';
import createMarkers from 'lib/map/createMarkers';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

export default function drawMap(data, onClickMarker) {
  am4core.useTheme(am4themes_animated);
  const map = createMap();
  const polygonSeries = createCountryShapes(map);
  const polygonTemplate = createCountryIndicators(map, polygonSeries);
  addCountryHoverEffect(map, polygonTemplate);
  createMarkers(map, data, onClickMarker);
  return map;
}
