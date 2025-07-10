import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
    setSuccessMessage('');
  };

  const validate = () => {
    const newErrors = {};

    
    if (!/^[A-Za-zА-Яа-яЁё\s]+$/.test(formData.name)) {
      newErrors.name = 'Аты-жөніңіз тек әріптерден тұруы керек';
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Email дұрыс емес';
    }

    
    if (formData.password.length < 8) {
      newErrors.password = 'Құпия сөз кемінде 8 таңбадан тұруы керек';
    }

    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Құпия сөздер сәйкес келмейді';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccessMessage('Тіркелу сәтті аяқталды!');
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  const isFormValid =
    formData.name &&
    /^[A-Za-zА-Яа-яЁё\s]+$/.test(formData.name) &&
    formData.email.includes('@') &&
    formData.password.length >= 8 &&
    formData.password === formData.confirmPassword;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Аты-жөніңіз:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div>
        <label>Құпия сөз:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <div style={{ color: 'red' }}>{errors.password}</div>
        )}
      </div>

      <div>
        <label>Құпия сөзді қайталаңыз:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <div style={{ color: 'red' }}>{errors.confirmPassword}</div>
        )}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Тіркелу
      </button>

      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
    </form>
  );
}

export default RegistrationForm;