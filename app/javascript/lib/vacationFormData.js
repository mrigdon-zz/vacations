export default function vacationFormData({
  title,
  year,
  summary,
  latitude,
  longitude,
  images
}) {
  const f = new FormData();
  if (title) f.append("vacation[title]", title);
  if (year) f.append("vacation[year]", year);
  if (summary) f.append("vacation[summary]", summary);
  if (latitude) f.append("vacation[latitude]", latitude);
  if (longitude) f.append("vacation[longitude]", longitude);
  if (images) images.forEach(({ file }) => f.append("images[]", file));
  return f;
}
