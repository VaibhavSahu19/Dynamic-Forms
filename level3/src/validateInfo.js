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
  
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (values.phoneNumber.length != 10) {
      errors.phoneNumber = 'Phone Number must contains 10 digits';
    }

    if(!values.position || values.position === '-Select-'){
      errors.position = 'Select valid position';
    }
  
    if ((values.position === 'Designer' || values.position === 'Developer') && !values.experience > 0) {
      errors.experience = 'At least 1 Year experience is required';
    }

    if(values.position === 'Designer'){
      const pattern = new RegExp('^(https?:\\/\\/)?'+ 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i'); 
      
      const check = pattern.test(values.portfolio);
      if(!values.portfolio || !check){
        errors.portfolio = 'Please enter a valid URL';
      }
    }

    if(values.position === 'Manager' && (!values.managerialExperience || values.managerialExperience < 1)){
      errors.managerialExperience = 'At least 1 Year of Managerial Experience is required';
    }

    if(values.additionalSkills.length === 0){
      errors.additionalSkills = 'At least 1 skill is required';
    }

    if(!values.dateAndTime || checkValidDateAndTime(values.dateAndTime)){
      errors.dateAndTime = 'Please enter a valid date and time';
    }

    function checkValidDateAndTime(dateAndTime){
      const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
      
      if (!dateTimeRegex.test(dateAndTime)) {
        return false;
      }
      const date = new Date(dateAndTime);

      if (isNaN(date.getTime())) {
        return false;
      }
      const formattedDateTimeStr = date.toISOString().slice(0, 16);
      const formattedLocalDateTimeStr = formattedDateTimeStr.replace('T', ' ');

      return dateAndTime === formattedDateTimeStr || dateAndTime === formattedLocalDateTimeStr;
    }
  
    return errors;
  }
  