import axios from "axios";
import {useState} from "react";

type CheckInProps = {
    id:string
}

export  default function CheckIn (props:Readonly<CheckInProps>){
    const [timeId, setTimeId] = useState<string>(" ");
    function onCheckIn(){
        axios.post(
            "/api/add/" + props.id
        ).then((response)=> setTimeId(response.data))
    }
    function onCheckOut(){
      axios.get( "/api/" +props.id + "/" + timeId ).catch(error=>console.error(error.message))
    }
    return (
        <>
            <button onClick={onCheckIn}> Check In</button>
            <button onClick={onCheckOut}> Check Out</button>
        </>
    )
}