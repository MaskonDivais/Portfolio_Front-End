import React, { useState } from 'react'
import module from './Login.module.css';
import ButtonLogForm from '../../UI/Button/ButtonLogForm';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    
      if (username === '1' && password === '1') {
        setIsAuthenticated(true); 
      }
    };
  
    if (isAuthenticated) {
      return <div></div>;
    }

  return (
    <div className={module.conteiner_fon}>
        <div className={module.conteiner}>

            <div className={module.login}>Log In</div>

            <div className={module.form}>
                <form className={module.conteiner_form} onSubmit={handleSubmit}>
                    <p>Log In</p>
                    <p>Name:</p>
                    <input className={module.form_name} type="text" placeholder="Имя пользователя"
                        value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                    <p>Password:</p>
                    <input className={module.form_password} type="password" placeholder="Пароль"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />

                    <ButtonLogForm/>

                </form>
            </div>


            <div className={module.cont_text}><p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button.</p></div>


        </div>
    </div>
  )
}

export default Login