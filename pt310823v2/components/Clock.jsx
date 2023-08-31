import React, {useState, useEffect} from 'react'

const Clock = () => {

    const [hora, setHora] = useState("HH:MM:SS")

    useEffect(() => {
        const hora1 = new Date();
        // setHora()
        console.log(hora1)
      }, [1000])

  return (
    <>
    <div>Clock</div>
    {hora}
    </>
  )
}

export default Clock