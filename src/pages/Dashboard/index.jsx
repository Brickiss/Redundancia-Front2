import './style.css'

function Dashboard() {

  return<> 
  Eu sou o Dashboard
  <h1>Dashboard-Teste-Texto</h1>
  <article>
    <div className='matriz'>
      <table>
        <thead>
          <tr>Olá</tr>
            <th>Mundo</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
            <th>
              <td>3</td>
              <td>4</td>
            </th>
          </tbody>
      </table>
      
    </div>
  </article>
   </>
}

export default Dashboard;































// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import styles from './Login.module.css';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!email || !password) {
//             toast.error('Por favor, preencha todos os campos.');
//             return;
//         }

//         try {
//             const response = await fetch('http://localhost:8080/auth/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 localStorage.setItem('token', data.token);
//                 toast.success('Login realizado com sucesso!');
//                 navigate('/dashboard');
//             } else {
//                 const errorData = await response.json();
//                 toast.error(errorData.message || 'Erro ao fazer login.');
//             }
//         } catch (error) {
//             console.error('Erro na requisição:', error);
//             toast.error('Erro ao conectar com o servidor.');
//         }
//     };

//     return (
//         <div className={styles.loginContainer}>
//             <form className={styles.loginForm} onSubmit={handleSubmit}>
//                 <h2>Login</h2>
//                 <div className={styles.inputGroup}>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className={styles.inputGroup}>
//                     <label htmlFor="password">Senha:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
                    