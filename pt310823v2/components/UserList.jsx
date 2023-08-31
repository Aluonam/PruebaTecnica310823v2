import React, { useEffect, useState} from 'react'
import axios from 'axios';

const UserList = () => {


    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
        llamadaAPI()
    }, [])

    const llamadaAPI = () => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        axios.get(url)
        .then((response)=>setDatosAPI(response.data))
        .catch(error => console.log('Error al obtener los datos:', error));
    }

    const listaUsuarios = datosAPI.map((valorActual)=>{
        return(
            <ul key={valorActual.id}>
                <li>{valorActual.name}</li>
            </ul>
        )
    })
    

  return (
    <>
    <div>UserList</div>
    {listaUsuarios}
    </>
    
  )
}

export default UserList