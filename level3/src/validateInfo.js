export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if(!values.experience){
    errors.experience = 'Experience is required';
  }else if(values.experience < 0){
    errors.experience = 'Experience cannot be negative';
  }

  if(!values.topic || values.topic === '-Select-'){
    errors.topic = 'Select valid topic';
  }
  if(!values.favLanguage || values.favLanguage === '-Select-'){
    errors.favLanguage = 'Select language';
  }
  if(!values.exercise || values.exercise === '-Select-'){
    errors.exercise = 'Select exercise frequency';
  }
  if(!values.diet || values.diet === '-Select-'){
    errors.diet = 'Select diet';
  }
  if(!values.qualification || values.qualification === '-Select-'){
    errors.qualification = 'Select valid qualification';
  }
  if(!values.fieldOfStudy){
    errors.fieldOfStudy = 'Please provide your field of study';
  }

  return errors;
}
