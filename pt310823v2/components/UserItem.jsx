import React from 'react'

const UserItem = ({datosAPI}) => {

    const listaUsuarios = datosAPI.map((valorActual)=>{
        return(
            <ul key={valorActual.id}>
                <li>{valorActual.name}</li>
            </ul>
        )
    })

  return (
    <div>{listaUsuarios}</div>
  )
}

export default UserItem