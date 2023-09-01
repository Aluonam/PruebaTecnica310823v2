import React from 'react'
import UserModal from './UserModal'

const UserItem = ({datosAPI}) => {

    const listaUsuarios = datosAPI.map((valorActual)=>{
        return(
            <ul key={valorActual.id}>
                <li style={{backgroundColor: "lightblue", border: "1px solid black"}}>{valorActual.name}</li> 
                <UserModal datosUsuario={valorActual}></UserModal>
            </ul>
        )
    })

  return (
    <div>{listaUsuarios}</div>
  )
}

export default UserItem