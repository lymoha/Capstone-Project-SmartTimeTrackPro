import {FormEvent, useState} from "react";
import "../styles/EmployeesForm.css"
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
import {Employees} from "../types/Employees.ts";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export default function EmployeesForm() {
   const {addEmployees, updateEmployees, employees} = useEmployeesContext();
   /*Der useParams-Hook gibt ein Objekt der Route-Parameter zurück. Diese Parameter sind Platzhalter in der URL,
   die bei der Definition von Routen verwendet werden und spezifische Werte haben können, wenn eine Route aufgerufen wird. */
   const params = useParams();
   const id:string =params.id || "";
   const useEmployees:Employees | undefined = employees.find(emp => emp.id === params.id);
   /*Der useNavigate-Hook wird verwendet, um programmatisch zu einer anderen Route
   zu navigieren. Er gibt eine Funktion zurück, die aufgerufen werden kann, um die aktuelle URL zu ändern.*/
    /* useState ist ein Hook in React, der es ermöglicht, funktionalen Komponenten Zustände hinzuzufügen. */
    const [name, setName] = useState<string>(useEmployees?useEmployees.name:"");
    const [employeeNr, setEmployeeNr] = useState<number>(useEmployees?useEmployees.employeeNr:0);
   const navigate = useNavigate();
   /*Der useLocation-Hook gibt das aktuelle Standortobjekt (Location Object) zurück,
   das Informationen über die aktuelle URL enthält. Dieses Objekt wird aktualisiert,
   wenn sich die URL ändert.*/
   const location = useLocation();
    // Funktion, die aufgerufen wird, wenn das Formular eingereicht wird
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();// Verhindert das Standardverhalten des Formulars
                               //bzw. eingegebenen Daten verarbeiten, validieren und dann entweder eine Aktion auszulösen
                               //oder die Daten an einen Zustand zu übergeben.

     if (location.pathname===("/add/")) {
        addEmployees({name:name, employeeNr:employeeNr});
        navigate('/')

     }else if(location.pathname===("/")) {
         addEmployees({name:name, employeeNr:employeeNr});
     }
     else if (location.pathname===("/update" + id)) {
         updateEmployees({name:name, employeeNr:employeeNr},id);
         navigate('/update-employees')
     }
        setName("")
        setEmployeeNr(0)

   console.log(location.pathname)
    }
    function handleCancel() {
        if (location.pathname === ("/timeManager")) {
            navigate("/")
        } else if (location.pathname === ("/update/" + id)) {
            navigate("/update-employees/")
        }else if (location.pathname===("/add/")) {
                setName("")
               setEmployeeNr(0)
        }

    }
    return (
        <>
            <div className="employees-form-styler">
            <form onSubmit={event => handleSubmit(event)}>
                 <div className={"div-name"}>
                     <label className={"label-name"}>Name:</label>
                <input className={"input-name"} type="text" placeholder="Gib bitte deinen Namen ein"
                       onChange={e => setName(e.target.value)} value={name} required={true}/>
                </div>

                 <div className={"div-personalNr"}>
                <label className="label-employeeNr">PersonalNr.:</label>
                <input className="input-employeeNr" type="text" placeholder="Gib bitte deine Personalnummer ein"
                       onChange={e => setEmployeeNr(Number(e.target.value))} value={employeeNr} required={true}/>
                 </div>

                 <br/><br/>

                <div className="row-button-div">
                    <button id={"button-ok"} type={"submit"}>OK</button>
                </div>
                <br/>
                <div className={"row-button02-div"}>
                <button id={"button-abbrechen"} type={"button"} onClick={handleCancel}>Abbrechen</button>
                </div>
            </form>
            </div>
        </>
    )
}