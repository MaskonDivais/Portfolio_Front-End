
import React, { useState } from 'react'
import module from './Login.module.css';
import ButtonLogForm from '../../UI/Button/ButtonLogForm';
import { useTheme } from '../../Components/ThemeContext';
import ButtonSwitchLog from '../../UI/Button/ButtonSwitchLog/ButtonSwitchLog';
import ButtonLogWith from '../../UI/Button/ButtonLogWith/ButtonLogWith';
import { motion } from 'framer-motion';

interface Props {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<Props> = ({ setIsAuthenticated }) => {

  
  const { isDarkTheme } = useTheme();
  const user = isDarkTheme ? 'icon_user_w' : 'icon_user_d';
  const pass = isDarkTheme ? 'icon_pass_w' : 'icon_pass_d';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLogWith, setShowLogWith] = useState(false);


  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };
  
  const handleSignInClick = () => {
    setShowSignUpForm(false);
  };
  

  const handleLogWithOn = () => { setShowLogWith(true); };
  const handleLogWithOff = () => { setShowLogWith(false); };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === '1' && password === '1') {
      setIsAuthenticated(true); // Устанавливаем isAuthenticated в true
    }
  };
  
  
  return (
    <div className={module.conteiner_fon}>
      <video src="/video/as3.mov" autoPlay muted loop />

      <div className={module.conteiner}>


        <div className={module.form}>
          {showSignUpForm && (
            <motion.div
            className={module.ConteinerFonFirst}
            initial={{
              x: 100, // Начальное положение по горизонтали (слева)
              y: 0, // Начальное положение по вертикали (сверху)
              opacity: 0, // Начальная непрозрачность
            }}
            animate={{
              x: 0, // Конечное положение по горизонтали (центр)
              y: 0, // Конечное положение по вертикали (центр)
              opacity: 1, // Полная непрозрачность
            }}
          ><ButtonSwitchLog onClick={handleSignInClick} buttonText="Sign In" /></motion.div>
           
          )}


          {!showSignUpForm && (
            <form className={module.conteiner_form} onSubmit={handleSubmit}>

              <div className={module.ContUp}>
                <div className={module.LogoLog}></div>
                <p className={module.th2}>Log in to account</p>
              </div>
              <div className={module.ContItAll}>
                <div className={module.ContItem1}>
                  <div className={`${user} ${module['icon_user']}`} />
                  <input className={module.form_name} type="text" placeholder="User Name (1)" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className={module.ContItem2}>
                  <div className={`${pass} ${module['icon_pass']}`} />
                  <input className={module.form_password} type="password" placeholder="Password (1)" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <p className={module.TI}>Forgot your password?</p>
                </div>

              </div>
              <div className={module.ContLow}>
                <div className={module.button}><ButtonLogForm buttonText="Sign In"/></div>
                <p className={module.TL}>Privacy Policy</p><p className={module.TL}>Terms of Service</p>
              </div>

            </form>
          )}


          <div className={module.ContWith}>

            {!showSignUpForm && (
               <motion.div
               className={module.ConteinerFonSecond}
               initial={{
                 x: -100, // Начальное положение по горизонтали (слева)
                 y: -0, // Начальное положение по вертикали (сверху)
                 opacity: 0, // Начальная непрозрачность
               }}
               animate={{
                 x: 0, // Конечное положение по горизонтали (центр)
                 y: 0, // Конечное положение по вертикали (центр)
                 opacity: 1, // Полная непрозрачность
               }}
             ><ButtonSwitchLog onClick={handleSignUpClick} buttonText="Sign Up" /></motion.div>

            )}


            {showSignUpForm && (
              showLogWith ? (
                <form className={module.ContFormSecond} onSubmit={handleSubmit} >
                  <div className={module.ContUp}>
                    <div className={module.LogoLog}></div>
                    <p className={module.th2}>Create your account</p>
                  </div>

                  <div className={module.ContItAll}>
                    <div className={module.ContItem1}>
                      <div className={`${user} ${module['icon_user']}`} />
                      <input className={module.form_name} type="text" placeholder="User Name" value={username} />
                    </div>
                    <div className={module.ContItem3}>
                      <div className={`${pass} ${module['icon_telephone']}`} />
                      <input className={module.form_telephone} type="telephone" placeholder="Telephone" value={password} />
                    </div>
                    <div className={module.ContItem2}>
                      <div className={`${pass} ${module['icon_pass']}`} />
                      <input className={module.form_password} type="email" placeholder="Email" value={password} />
                    </div>
                    <ButtonLogWith onClick={handleLogWithOff} buttonText="Login With" />
                  </div>
                  <div className={module.ContLow}>
                    <div className={module.button}><ButtonLogForm buttonText="Sign Up"/></div>
                    <p className={module.TL}>Privacy Policy</p><p className={module.TL}>Terms of Service</p>
                  </div>
                </form>
              ) : (
                <form className={module.ContFormHiden} onSubmit={handleSubmit}>
                  <div className={module.ContUp}>
                    <div className={module.LogoLog}></div>
                    <p className={module.th2}>Login using services</p>
                  </div>
                  <div className={module.ContLogWith}>
                  <div className={module.conWith}><div className={module.LogMicrosoft} /><p className={module.PW}>Microsoft Corporation</p></div>
                    <div className={module.conWith}><div className={module.LogApple} /><p className={module.PW}>Apple Computer Inc</p></div>
                    <div className={module.conWith}><div className={module.LogGoogle} /><p className={module.PW}>Google Company</p></div>
                    
                    <ButtonLogWith onClick={handleLogWithOn} buttonText="Registration" />
                  </div>
                  <div className={module.ContLow}>
                    <div className={module.button}><ButtonLogForm buttonText="Login With"/></div>
                    <p className={module.TL}>Privacy Policy</p><p className={module.TL}>Terms of Service</p>
                  </div>
                </form>
              )
            )}

          </div>
        </div>
      </div>
    </div >
  )
}

export default Login;



