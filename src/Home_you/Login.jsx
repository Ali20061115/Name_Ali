import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    if (!formData.email.includes('@')) {
      newErrors.email = 'Email дұрыс емес';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Құпия сөз кемінде 6 таңбадан тұруы керек';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ⛔️ Prevent full page refresh

    if (validate()) {
      setSuccessMessage('Кіру сәтті аяқталды!');
      setFormData({
        email: '',
        password: '',
      });
   
    }
  };

  return (
    <div id="container">
      <h1>Welcome Back</h1>
      <p>Login to your BookShelf account</p>
      <form onSubmit={handleSubmit}> {/* ✅ Wrap all inputs and button */}
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </div>

        <button type="submit">Login</button> {/* ✅ Works with form */}
      </form>

      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}


      <button onClick={()=>{
        
      setIsAuthenticated(true); // ✅ Set auth state
           navigate("/home"); // ✅ Navigate to home
      }}>Login</button>
    </div>
  );
};

export default Login;
