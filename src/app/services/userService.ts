// services/userService.ts
import axios from 'axios';

const apiUrl = 'http://localhost:4000/users';

const logInUser = async (email: string, password: string): Promise<any> => {
  try {
    const response = await axios.post(`${apiUrl}/login`, {
      email: email,
      password: password
    });
    console.log("DATOS MANDADOS LA PETICION" + email, password)
    console.log("Datos que el servidor deberia de devoler" + response.data)
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

export { logInUser };
