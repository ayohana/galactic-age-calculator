import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import $ from 'jquery';
import { User } from '../src/user';

function newUser(age) {
  let user = new User(age);
  user.demographics.assignDailyExercise(false);
  user.demographics.assignBMI("Slightly Obese");
  user.demographics.assignOccupation("Couch Potato");
  user.checkLife();
  // Insert console.log(user) here to check object key-pair values
}

const inputAge = 50;
newUser(inputAge);



