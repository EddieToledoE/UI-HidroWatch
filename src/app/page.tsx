// LoginComponent.tsx
'use client'
import { useState } from 'react';
import { logInUser } from '@/app/services/userService';
import { useRouter } from "next/navigation";
import './auth.css';
import Image from "next/image";


const LoginComponent = () => {
  const router = useRouter();

  const [loginError, setLoginError] = useState<string>('');

  const logIn = async () => {
    const email = (document.getElementById('usuario') as HTMLInputElement).value;
    const password = (document.getElementById('contraseña') as HTMLInputElement).value;
    setLoginError('');

    try {
      // Llamar al método logInUser del servicio UserService
      const user = await logInUser(email, password);
      
      // Verificar si el usuario se ha autenticado correctamente
      if (user) {
        console.log('Inicio de sesión exitoso:', user);
        setLoginError('');
        router.push('/menu');
        // Aquí podrías realizar alguna acción adicional después del inicio de sesión
      } else {
        console.log('Credenciales incorrectas');
        setLoginError('Error al iniciar sesión, las credenciales son invalidas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLoginError('Error al iniciar sesión: ' + error);
    }
  };

  return (
    <div className="Container">
      <div className="main-form">
        <div className="two-section-form">
          <div className="form-section">
            <div className="titulo">
              <h3>HYDRO-WATCH</h3>
              <label>Bienvenido, Ingresa tus credenciales</label>
            </div>
            <div className="formulario">
              <div className="inputs">
                <label>Usuario</label>
                <input id="usuario" className="Usuario" type="text" />
              </div>
              <div className="inputs">
                <label>Contraseña</label>
                <input id="contraseña" className="Usuario" type="password" />
              </div>
              {loginError && <p className="error-message">{loginError}</p>}
              <button onClick={logIn}>Ingresar</button>
            </div>
          </div>
          <div className="foto-main">
                  <Image
                   alt="orquidea"
                   src="/image.png"
                   className="Orquidea"
                   layout="fill"
                   objectFit="cover"
                   objectPosition="center top"
                  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
