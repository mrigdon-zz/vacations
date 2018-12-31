export default function generatePreview(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result, file);
    reader.readAsDataURL(file);
  });
}
