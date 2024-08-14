import {FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
type EmployeesUpdateFormProps = {
    id:string
    name:string,
    employeeNr:number

}
export default function UpdateEmployeesForm(props: Readonly<EmployeesUpdateFormProps>) {
    const [name, setName] = useState<string>(props.name);
    const [employeeNr,setEmployeeNr] = useState<number>(props.employeeNr);

    const {updateEmployees} = useEmployeesContext();
    const navigate = useNavigate();
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        updateEmployees({name:name, employeeNr:employeeNr},props.id);
        navigate("/update-employees");
    }

    useEffect(()=> {
        console.log("props.id" + props.name)
        console.log("props.employeeNr"+ props.employeeNr);
        console.log("state.name" + name)
        console.log("state.employeeNr" + employeeNr)
    })

    return(
        <>
        <form className={"employees-form-styler"} onSubmit={onSubmit}>
            <div className="employees-div-styler">
                <label className={"employees-label-styler"}> Name:
                </label>
                <input className="employees-input-styler" type="text" placeholder="Gib bitte deinen Namen ein"
                       onChange={e => setName(e.target.value)} value={name} required={true}/>
                <label className={"employees-label-styler"}> Personal-Nr.:

                </label>
                <input className="employees-input-styler" type="text" placeholder="Gib bitte deine Personalnummer ein"
                       onChange={e => setEmployeeNr(Number(e.target.value))} value={employeeNr} required={true}/>
            </div>
  <button> Bestätigen</button>
        </form>
            <button id={"back-button-styler"} onClick={()=>navigate("/")}>Zurück zur Hauptseite</button>
        </>
    )
}