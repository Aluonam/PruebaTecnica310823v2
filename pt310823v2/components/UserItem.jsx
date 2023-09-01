import React from 'react'
import UserModal from './UserModal'

const UserItem = ({datosAPI}) => {

    const listaUsuarios = datosAPI.map((valorActual)=>{
        return(
            <ul key={valorActual.id}>
                <li>{valorActual.name} <UserModal></UserModal></li>
            </ul>
        )
    })

  return (
    <div>{listaUsuarios}</div>
  )
}

export default UserItem