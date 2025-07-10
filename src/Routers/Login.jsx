import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();


    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate("/dashboard")
    };

    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
            <div  style={styles.container}>
                <input
                    type="text"
                    placeholder="Email немесе телефон"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    style={styles.input}
                    required
                /> <br />
                <input
                    type="password"
                    placeholder="Құпия сөз"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    required
                />
                <br />
                <button type="submit" style={styles.button}>Reguster</button>
            </div>
        </div>
    );

};
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
      },
    input: {
      display: 'block',
      padding: '10px',
      margin: '10px auto',
      width: '250px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      margin: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };
  

    export default Login