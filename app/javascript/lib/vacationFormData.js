export default function vacationFormData({
  title,
  year,
  summary,
  latitude,
  longitude,
  images
}) {
  const f = new FormData();
  f.append('vacation[title]', title);
  f.append('vacation[year]', year);
  f.append('vacation[summary]', summary);
  f.append('vacation[latitude]', latitude);
  f.append('vacation[longitude]', longitude);
  images.forEach(({ file }) => f.append('vacation[images][]', file));
  return f;
}
