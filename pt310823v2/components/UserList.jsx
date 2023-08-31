import React, { useEffect, useState} from 'react'
import axios from 'axios';
import UserItem from './UserItem';

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


    

  return (
    <>
    <div>UserList</div>
    <UserItem  datosAPI={datosAPI}></UserItem>
    </>
    
  )
}

export default UserList