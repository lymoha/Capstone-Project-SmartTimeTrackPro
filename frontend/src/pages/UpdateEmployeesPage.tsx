import Navigate from "../components/Navigate.tsx";
import UpdateEmployeesForm from "../types/UpdateEmployeesForm.tsx";
import { useEffect} from "react";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
import {useParams} from "react-router-dom";

export default function UpdateEmployeesPage() {
    const params = useParams();
    const id = params.id || "";

        const {employee,getEmployeesById}= useEmployeesContext();

        useEffect (()=> {

            getEmployeesById(id)
        },[id]);
    return(
        <>
        <Navigate/>
            <UpdateEmployeesForm name={employee.name} employeeNr={employee.employeeNr} id={id}/>

        </>
    )
}