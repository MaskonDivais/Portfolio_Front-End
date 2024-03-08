import React, { useState } from 'react'
import module from './Login.module.css';
import ButtonLogForm from '../../UI/Button/ButtonLogForm';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    
      if (username === 'User' && password === 'Code') {
        setIsAuthenticated(true); 
      }
    };
  
    if (isAuthenticated) {
      return <div></div>;
    }

  return (
    <div className={module.conteiner_fon}>
        <div className={module.conteiner}>

            <div className={module.form}>
                <form className={module.conteiner_form} onSubmit={handleSubmit}>

                    <p className={module.th2}>Log In</p>

                    <p className={module.thN}>Name:</p>

                    <input className={module.form_name} type="text" placeholder="User"
                        value={username} onChange={(e) => setUsername(e.target.value)}/>

                    <p className={module.thP}>Password:</p>

                    <input className={module.form_password} type="password" placeholder="Code"
                        value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <div className={module.button}><ButtonLogForm/></div>

                </form>
            </div>


            <p className={module.cont_text}>© This application is an audio player designed for personal use and to provide information about the programming level and design abilities of the developer. All rights reserved.</p>


        </div>
    </div>
  )
}

export default Login