import CheckIn from "../components/CheckIn.tsx";
import {useState} from "react";


export default function EmployeesDashboard(){
    // @ts-ignore
    const [id,setId] = useState<string>("aa9fe818-c6b2-4b54-8955-232eb6ed0a85");
    const [idBill,setIdBill] = useState<string>("e556db83-4e52-45a7-ac0c-ddd0a778bd05");
    return(
        <>
        <h1>Well come Check Norris</h1>
            < CheckIn id={id}/>
            <h1>Hallo Bill Gates</h1>
            <CheckIn id={idBill}/>

        </>
    )
}