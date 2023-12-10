"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import {Card, CardMedia} from "@mui/material";
import image from  './components/Images/euro.png';
import './Login.css';
import { Title } from './components/Title/Title';
import { Label } from './components/Label/Label';
import { Input } from './components/Input/Input';

export const Login = () => {
  const [user,setUser] = useState('');
  const [ password,setPassword ] = useState ('');
  const [passwordError, setPasswordError ] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState (false);

  function handleChange(name, value) {
      if(name === 'usuario'){
        setUser(value);
        setHasError(false);
      } else {
          if (value.length > 6){
            setPasswordError(true);
            setHasError(false);
          }else {
            setPasswordError(false);
            setPassword(value)
            setHasError(false);
          }
        
    }
  };
  function ifMatch(param){
    if(param.user.length > 0 && param.password.length > 0) {
      if(param.user === 'Manuel' && param.password ==='123456'){
        const {user,password} =param;
        let ac ={user,password };
        let account = JSON.stringify(ac);
        localStorage.setItem('accont',account);
        setIsLogin(true);
      }else{
          setIsLogin(false);
          setHasError(true);
      }
      } else{
        setIsLogin(false);
        
      }
    }

  function handleSubmit() {
      let account = { user,password }
      if (account) {
          ifMatch(account);
      }
  };

  return (
    <div className='login-container'>
      { isLogin ? 

      <div className='home-container'>
          <h1>Enorabuena {user} !!</h1>
          <label>Estás Logueado</label>
      </div>
       
      :
      <div className='login-content'>
      <Image
          src={image}
          width={100}
          height={100}
          alt="Picture of the author"
        />
       <Title text='GESTION DE USUARIOS'/>
       
            { hasError &&
                <label className='alert-error'>
                  Su contraseña o usuario no incorrectos o no existen.
                </label>
            }
       <Label text ='Usuario'/>
       <Input
        attribute={{
          id: 'usuario',
          name: 'usuario',
          type: 'text',
          placeholder: 'Ingrese su usuario'
        }} 
        handleChange={handleChange} param={undefined}      
         />

       <Label text ='Contraseña'/>
       <Input  
        attribute={{
          id: 'contraseña',
          name: 'contraseña',
          type: 'password',
          placeholder: 'Ingrese su contraseña',
        }} 
        handleChange={handleChange} 
        param={passwordError}      
         />
         { passwordError &&
         <label className='label-error'>
             Contraseña inválida o incompleta.
         </label>
        }

        <div className='submit-button-container'>
         <button  onClick ={handleSubmit}>
            Ingresar
         </button >
         </div>
      </div>
          }
         
    </div>
  )

}
