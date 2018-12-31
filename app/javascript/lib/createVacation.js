import vacationFormData from 'lib/vacationFormData';
import { post } from 'lib/ajax';

export default function createVacation(vacation) {
  return post('/vacations', vacationFormData(vacation));
}
