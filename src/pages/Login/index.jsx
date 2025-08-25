import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao fazer login. Verifique suas credenciais.');
      }
    } catch (err) {
      console.error(err);
      setError('Não foi possível conectar ao servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* Background decorative elements */}
      <div className={styles.backgroundDecorations}>
        <div className={`${styles.decorativeIcon} ${styles.decorativeIcon1}`}>🍃</div>
        <div className={`${styles.decorativeIcon} ${styles.decorativeIcon2}`}>🌲</div>
        <div className={`${styles.decorativeIcon} ${styles.decorativeIcon3}`}>💧</div>
        <div className={`${styles.decorativeIcon} ${styles.decorativeIcon4}`}>♻️</div>
      </div>

      <div className={styles.loginWrapper}>
        <div className={styles.loginBox}>
          {/* Header with gradient */}
          <div className={styles.loginHeader}>
            <div className={styles.headerContent}>
              <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>♻️</div>
              </div>
              <h1 className={styles.companyName}>Reciclaville365</h1>
              <p className={styles.companySubtitle}>Consciência Ambiental & Reciclagem</p>
            </div>
          </div>

          {/* Form section */}
          <div className={styles.loginContent}>
            <form onSubmit={handleLogin} className={styles.loginForm}>
              <input className={styles.loginEmail}
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input className={styles.loginPassword}
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {error && <p className={styles.errorMessage}>{error}</p>}

              <button type="submit" className={styles.loginButton}>
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;