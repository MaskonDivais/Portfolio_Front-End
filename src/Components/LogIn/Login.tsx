import React, { useState } from 'react'
import module from './Login.module.css';
import ButtonLogForm from '../../UI/Button/ButtonLogForm';
import { useTheme } from '../../Components/ThemeContext';

const Login = () => {
    const { isDarkTheme } = useTheme();
    const user = isDarkTheme ? 'icon_user_w' : 'icon_user_d';
    const pass = isDarkTheme ? 'icon_pass_w' : 'icon_pass_d'; 


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

      <video src="/video/as.mov" autoPlay muted loop/>
     


     

        <div className={module.conteiner}>

            <div className={module.form}>
                <form className={module.conteiner_form} onSubmit={handleSubmit}>
                    <p className={module.th2}>Log In</p>
                    <div className={`${user} ${module['icon_user']}`}/>
                    <input className={module.form_name} type="text" placeholder="User Name (1)"
                        value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <div className={`${pass} ${module['icon_pass']}`}/>
                    <input className={module.form_password} type="password" placeholder="Password (1)"
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className={module.button}><ButtonLogForm/></div>
                </form>
            </div>


            <p className={module.cont_text}>© This application is an audio player designed for personal use and to provide information about the programming level and design abilities of the developer. All rights reserved.</p>

            <div className={module.TextVideo}>
              <p className={module.FonTextUpper}>MAS</p>
              <p className={module.FonTextAnder}>FLEX</p>
            </div>


        </div>
    </div>
  )
}

export default Login