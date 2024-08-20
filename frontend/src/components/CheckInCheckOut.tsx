import "./EmployeesForm.tsx"
import {useNavigate} from "react-router-dom";
import '../styles/Back-Button.css'
import '../styles/CheckInCheckOut.css'
import React, {useEffect} from "react";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
import {format} from "date-fns";

type CheckInProps = {
    onCheckIn: () => void,
    onCheckOut: () => void,
    navigateBack:()=> void,
    startTime: string,
    endTime: string,
    hoursWorked: number,
    hoursWorkedPerMonth: number,
    name:string,
    employeeNr:number
    setStartTime: React.Dispatch<React.SetStateAction<string>>,
    setEndTime: React.Dispatch<React.SetStateAction<string>>,
    setHoursWorkedPerMonth: React.Dispatch<React.SetStateAction<number>>
    setName: React.Dispatch<React.SetStateAction<string>>,
    setEmployeeNr: React.Dispatch<React.SetStateAction<number>>

}

export default function CheckInCheckOut(props: Readonly<CheckInProps>) {
    const navigate = useNavigate();
    const {hoursWorkedPerMonth} = useEmployeesContext();
    function navigateBack() {
        props.setStartTime("");
        props.setEndTime("");
        props.setHoursWorkedPerMonth(0.0);

        navigate("/");
    }

    useEffect(() => {
        console.log(hoursWorkedPerMonth)
    }, [])
    return (
        <>
            <div className="div-container-styler">
                <label>Anmeldung vor Arbeitsaufnahme: </label>
                <button id={"button-styler-an"} onClick={props.onCheckIn}>Anmelden:</button>
                {props.startTime}
            </div>

            <div className="div-container-styler">
                <label>Abmeldung nach Arbeitsende: </label>
                <button id={"button-styler-ab"} onClick={props.onCheckOut}>Abmelden:</button>

                {props.endTime}
            </div>

            <div className="div-p-styler">
                <p className={"p-styler"}>
                    <label>Deine für heute geleistete Arbeit in Stunden: {props.hoursWorked}s</label></p>
            </div>

            <div className="div-p-styler">
                <p className={"p-m-styler"}>
                    <label className={"l"}>Geleistete Arbeitsstunden für den
                        Monat {"'" + format(new Date(), 'MMMM') + "'"} : {hoursWorkedPerMonth}s</label></p>
            </div>

            <button id={"back-button-styler"} onClick={navigateBack}>Zurück</button>


        </>
    )
}