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
      const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); 
      
      const check = pattern.test(values.portfolio);
      if(!values.portfolio || !check){
        errors.portfolio = 'Please enter a valid URL';
      }
    }

    if(values.position === 'Manager' && (!values.managerialExperience || values.managerialExperience < 1)){
      errors.managerialExperience = 'At least 1 Year of Managerial Experience is required';
    }
  
    return errors;
  }
  