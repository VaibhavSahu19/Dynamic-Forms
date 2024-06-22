import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    topic: '',
    favLanguage: '',
    experience: '',
    exercise: '',
    diet: '',
    qualification: '',
    fieldOfStudy: '',
    submitted: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setValues({
          ...values,
          additionalSkills: [...values.additionalSkills, value], 
        });
      } else {
        setValues({
          ...values,
          additionalSkills: values.additionalSkills.filter((skill) => skill !== value),
        });
      }
    }else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setValues({ ...values, submitted: true });
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;