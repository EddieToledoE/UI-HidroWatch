import React from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';

const crearPublicacion = async () => {
  const session = useSession();

  Swal.fire({
    title: 'Escribe tu publicación',
    input: 'text',
    inputPlaceholder: 'Escribe aquí...',
    showCancelButton: true,
    confirmButtonText: 'Crear',
    confirmButtonColor: 'green',
    cancelButtonText: 'Cancelar',
    showLoaderOnConfirm: true,
    preConfirm: async (inputValue) => {
      try {
        const res = await Axios.post("/api/auth/post", {
        //   user_id: session.data?.user._id,
          fecha: format(new Date(), "hh:mm a dd/MM/yyyy "),
          content: inputValue
        });
        //Long polling
        // await Axios.post("http://localhost:3001/notificaciones", {
        //   cuerpo: "Nueva publicacion",
        // //   id_user: session.data?.user._id
        // });
        /////////////////////////////////
        console.log(res.data);
      } catch (error) {
        console.log("Hubo un error: ", error)
      }
    },
  });
}

export default crearPublicacion;
