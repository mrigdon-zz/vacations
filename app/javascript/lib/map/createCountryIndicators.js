export default function createCountryIndicators(map, polygonSeries) {
  const polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = '{name}';
  polygonTemplate.fill = map.colors.getIndex(0).lighten(0.5);
  return polygonTemplate;
}
