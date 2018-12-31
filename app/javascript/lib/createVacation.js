import { post } from 'lib/ajax';

const formKey = (field) => `vacation[${field}]`;
const formArrayKey = (field) => `${formKey(field)}[]`;

function generateFormData(vacation) {
  const formData = new FormData();
  Object.keys(vacation).forEach((key) => {
    const value = vacation[key];
    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(formArrayKey(key), v));
    } else {
      formData.append(formKey(key), value);
    }
  });
  return formData;
}

export default function createVacation(vacation) {
  const formData = generateFormData(vacation);
  return post('/vacations', formData);
}
