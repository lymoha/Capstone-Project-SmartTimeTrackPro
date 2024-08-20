import {FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
import '../styles/UpdateEmployeesForm.css'

type EmployeesUpdateFormProps = {
    id:string
    name:string,
    employeeNr:number

}
export default function UpdateEmployeesForm(props: Readonly<EmployeesUpdateFormProps>) {
    //const [name, setName] = useState<string>(props.name);
    const [name, setName] = useState<string>("");
    //const [employeeNr,setEmployeeNr] = useState<number>(props.employeeNr);
    const [employeeNr,setEmployeeNr] = useState<number>(0);
    useEffect(() => {
        setName(props.name);
        setEmployeeNr(props.employeeNr);
    }, [props.name, props.employeeNr]);
    const {updateEmployees} = useEmployeesContext();
    const navigate = useNavigate();
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        updateEmployees({name:name, employeeNr:employeeNr},props.id);
        navigate("/update-employees");
    }

   // useEffect(()=> {
        console.log("props.id" + props.name)
        console.log("props.employeeNr"+ props.employeeNr);
        console.log("state.name" + name)
        console.log("state.employeeNr" + employeeNr)
    //})

    return(
        <>
            <form onSubmit={onSubmit}>
                <div className="div-styler">
                    <label id={"label-styler"}> Name:</label>

                    <input id="input-styler" type="text" placeholder="Gib bitte deinen Namen ein"
                           onChange={e => setName(e.target.value)}
                           value={name} required={true}/>
                    <label id={"label-styler"}> Personal-Nr.:</label>

                    <input id="input-styler" type="text" placeholder="Gib bitte deine Personalnummer ein"
                           onChange={e => setEmployeeNr(Number(e.target.value))}
                           value={employeeNr} required={true}/>
                    <div className="button-div">
                    <button id="button-styler"> Bestätigen</button>
                    </div>
                </div>

            </form>
            <br/>
            <button id={"back-button-styler"} onClick={()=>navigate("/")}>Zurück</button>
        </>
    )
}