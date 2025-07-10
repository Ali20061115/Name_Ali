import { useState } from "react";

function UseState() {
  
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [showRegister, setShowRegister] = useState(false);
      const [emailOrPhone, setEmailOrPhone] = useState('');
      const [password, setPassword] = useState('');
    
      const handleLogin = () => {
        setIsLoggedIn(true);
      };
    
      const handleLogout = () => {
        setIsLoggedIn(false);
      };
    
      const handleRegisterClick = () => {
        setShowRegister(true);
      };
    
      const handleRegisterSubmit = (e) => {
        e.preventDefault();
        
        alert("Тіркелді:", emailOrPhone, password);
    
      
        setShowRegister(false);
        setEmailOrPhone('');
        setPassword('');
      };
    
      return (
        <div style={styles.container}>
          {!isLoggedIn && !showRegister && (
            <>
              
              <button onClick={handleLogin} style={styles.button}> Lodin as Guest</button>
              <button onClick={handleRegisterClick} style={styles.button}>Login</button>
            </>
          )}
    
          {isLoggedIn && (
            <>
              <h2>Welcome,Guest!</h2>
              <button onClick={handleLogout} style={styles.button}>Log out</button>
            </>
          )}
    
          {!isLoggedIn && showRegister && (
            <form onSubmit={handleRegisterSubmit} style={styles.form}>
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Email немесе телефон"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                style={styles.input}
                required
              />
              <input
                type="password"
                placeholder="Құпия сөз"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <button type="submit" style={styles.button}>Login</button>
              <br />
              <button type="submit" style={styles.button}>Reguster</button>
            </form>
          )}
        </div>
      );
    }
    
    
    const styles = {
      container: {
        textAlign: 'center',
        marginTop: '50px',
      },
      form: {
        display: 'inline-block',
        flexDirection: 'column',
        gap: '10px',
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
    
  
    


export default UseState