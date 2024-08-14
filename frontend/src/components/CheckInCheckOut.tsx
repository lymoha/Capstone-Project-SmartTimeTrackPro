import "./EmployeesForm.tsx"
import {useNavigate} from "react-router-dom";
import '../styles/Back-Button.css'
import '../styles/CheckInCheckOut.css'
import {useEffect} from "react";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
import {format} from "date-fns";


type CheckInProps = {
    onCheckIn: () => void,
    onCheckOut: () => void
    startTime:string
    endTime:string
    hoursWorked: number
    hoursWorkedPerMonth: number
    setStartTime: React.Dispatch<React.SetStateAction<string>>
    setEndTime: React.Dispatch<React.SetStateAction<string>>

}

export default function CheckInCheckOut(props: Readonly<CheckInProps>) {
    const navigate = useNavigate();
   const {hoursWorkedPerMonth,setHoursWorkedPerMonth} = useEmployeesContext();

function navigateBack() {
    props.setStartTime("");
    props.setEndTime("");
    setHoursWorkedPerMonth(0.0);
    navigate("/");
}
    //<button onClick={props.onSumHoursWorkedOfTheMonth}>Anzahl Stunden Monat </button>
    useEffect(() => {
        console.log(hoursWorkedPerMonth)
    },[])
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
                <p className={"p-styler"}>
                    <label>Deine für heute geleistete Arbeit in Stunden: {props.hoursWorked}</label></p>
            </div>

            <div className="div-p-styler">
                <p className={"p-m-styler"}>
                    <label className={"l"}>Geleistete Arbeitsstunden für den Monat {"\"" + format(new Date(),'MMMM') + "\""} : {hoursWorkedPerMonth}</label></p>
            </div>


            <button id={"back-button-styler"} onClick={navigateBack}> Zurück zur Hauptseite</button>

        </>
    )
}