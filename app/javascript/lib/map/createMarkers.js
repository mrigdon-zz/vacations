import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';

export default function createMarkers(map, data, onClick) {
  const imageSeries = map.series.push(new am4maps.MapImageSeries());
  const imageSeriesTemplate = imageSeries.mapImages.template;
  const circle = imageSeriesTemplate.createChild(am4core.Circle);
  circle.radius = 6;
  circle.fill = am4core.color('#B27799');
  circle.stroke = am4core.color('#FFFFFF');
  circle.strokeWidth = 2;
  circle.nonScaling = true;
  circle.tooltipText = '{title}';
  circle.events.on('down', (e) => onClick(e.target.dataItem.dataContext.id));

  // Set property fields
  imageSeriesTemplate.propertyFields.latitude = 'latitude';
  imageSeriesTemplate.propertyFields.longitude = 'longitude';

  // Add data for the three cities
  imageSeries.data = data;
  return imageSeries;
}
