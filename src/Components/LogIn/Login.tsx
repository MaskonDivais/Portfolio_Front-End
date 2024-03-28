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
      
      return <div className={module.Authenticat}></div>;
    }
    
  return (
    <div className={module.conteiner_fon}>

      <video src="/video/as3.mov" autoPlay muted loop/>
     


     
      <div className={module.conteiner}>
        

            <div className={module.form}>
                <form className={module.conteiner_form} onSubmit={handleSubmit}>

                    <div className={module.ContUp}>
                      <div className={module.LogoLog}></div>
                      <p className={module.th2}>Sign up or Login with</p>
                    </div>

                    <div className={module.ContLogWith}>
                      <div className={module.conWith}><div className={module.LogApple}/><p className={module.PW}>Apple</p></div>
                      <div className={module.conWith}><div className={module.LogGoogle}/><p className={module.PW}>Google</p></div>
                      <div className={module.conWith}><div className={module.LogMicrosoft}/><p className={module.PW}>Microsoft</p></div>
                    </div>

                    <div className={module.OR}>OR</div>

                    <div className={module.ContItAll}>
                      <div className={module.ContItem1}>
                        <div className={`${user} ${module['icon_user']}`}/>
                        <input className={module.form_name} type="text" placeholder="User Name (1)" value={username} onChange={(e) => setUsername(e.target.value)}/>
                      </div>

                      <div className={module.ContItem2}>
                        <div className={`${pass} ${module['icon_pass']}`}/>
                        <input className={module.form_password} type="password" placeholder="Password (1)" value={password} onChange={(e) => setPassword(e.target.value)}/>
                          <p className={module.TI}>Forgot your password?</p>
                      </div>

                    </div>
                    <div className={module.ContLow}>
                      <div className={module.button}><ButtonLogForm/></div>
                      <p className={module.TL}>Privacy Policy</p><p className={module.TL}>Terms of Service</p>
                    </div>

                </form>
            </div>

            {/*
            <p className={module.cont_text}>© This application is an audio player designed for personal use and to provide information about the programming level and design abilities of the developer. All rights reserved.</p>

             <div className={module.TextVideo}>
              <p className={module.FonTextUpper}>MAS</p>
              <p className={module.FonTextAnder}>FLEX</p>
            </div> */}


        </div>
    </div>
  )
}

export default Login;
