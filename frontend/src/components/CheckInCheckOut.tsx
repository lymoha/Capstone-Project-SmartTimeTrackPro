import "./EmployeesForm.tsx"
import {useNavigate} from "react-router-dom";
import '../styles/Back-Button.css'
import '../styles/CheckInCheckOut.css'


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


            <div className="div-container-styler">
                <label>Anmeldung vor Arbeitsaufnahme: </label>
                <button onClick={props.onCheckIn}>Anmelden:</button>
                 {"Anmeldung erfolgte um: " + props.startTime}
            </div>

            <div className="div-container-styler">
                <label>Abmeldung nach Arbeitsaufnahme: </label>
                <button onClick={props.onCheckOut}>Abmelden:</button>
                  {"Abmeldung erfolgte um: " + props.endTime}
            </div>

            <div className="div-p-styler">
                <p className={"p-styler"}>  {props.hoursWorked} für heute geleistete Arbeit in Stunden</p>
            </div>

            <button id={"back-button-styler"} onClick={() => navigate("/")}> Zurück zur Hauptseite</button>


        </>
    )
}