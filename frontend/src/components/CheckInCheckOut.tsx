import "./EmployeesForm.tsx"
import '../styles/EmployeesForm.css'
import {useNavigate} from "react-router-dom";

type CheckInProps = {
    onCheckIn: () => void,
    onCheckOut: () => void
    startTime:string
    endTime:string
    hoursWorked: number
}

export default function CheckInCheckOut(props: Readonly<CheckInProps>) {
 const navigate = useNavigate();
    return (
        <>

            <div className="app-container">
                <div className={"app-inner-container"}>
                    <label className={"employees-label-styler"}>Melde dich vor der Arbeitsaufnahme bitte an: </label>
                    <button onClick={props.onCheckIn}>Anmelden:</button>
                    {props.startTime} Anmeldezeit
                </div>

                <div className={"app-inner-container"}>
                    <label className={"employees-label-styler"}>Melde dich hier nach der Arbeitsaufnahme bitte
                        ab: </label>
                    <button onClick={props.onCheckOut}>Abmelden:</button>
                    {props.endTime} Abmeldezeit
                    <h4 className={"h4"}>{props.hoursWorked}h für heute geleistete Arbeitsstunde</h4>
                </div>
            </div>
           <button id={"back-button-styler"} onClick={()=> navigate("/")}> Zurück zur Hauptseite</button>


        </>
    )
}