export default function addCountryHoverEffect(map, polygonTemplate) {
  // Create hover state and set alternative fill color
  const hs = polygonTemplate.states.create('hover');
  hs.properties.fill = map.colors.getIndex(0);
}
