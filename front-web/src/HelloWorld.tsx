import { type } from "os";
import { useEffect } from "react";

type Props ={
    message:string;
}



function Hello({message}:Props){

    useEffect(()=>{
        console.log('componente iniciado')
    },
    []);




    return(
        <h1>chamada {message}</h1>
    )

}
export default Hello;