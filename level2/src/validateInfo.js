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
  
    if (values.attendingWithGuest === 'Yes' && !values.guestName.trim()) {
      errors.guestName = 'Guest Name is required';
    }
  
    return errors;
  }
  