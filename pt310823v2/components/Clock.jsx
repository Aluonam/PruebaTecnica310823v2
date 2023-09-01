import React, {useState, useEffect} from 'react'

const Clock = () => {

    const [hora, setHora] = useState("HH:MM:SS")

    useEffect(() => {
        const intervalId = setInterval(()=>{
        const hora1 = new Date();
        setHora(hora1.toLocaleString().split(",")[1]) 
        },1000)

        return () => clearInterval(intervalId);
       
      }, [])

      

  return (
    <>
    <div>Clock</div>
    {hora}
    </>
  )
}

export default Clock