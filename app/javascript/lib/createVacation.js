const formKey = (field) => `vacation[${field}]`;

function generateFormData(vacation) {
  const formData = new FormData();
  Object.keys(vacation).forEach((key) => {
    formData.append(formKey(key), vacation[key]);
  });
  return formData;
}

export default function createVacation(vacation) {
  const formData = generateFormData(vacation);
  console.log(formData);
}
