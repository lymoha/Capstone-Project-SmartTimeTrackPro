import CheckInCheckOut from "../components/CheckInCheckOut.tsx";
import React from "react";
type EmployeesDashboardProps = {
    onCheckIn: () => void,
    onCheckOut: () => void,
    startTime: string,
    endTime: string,
    hoursWorked: number
    hoursWorkedPerMonth: number;
    setStartTime:  React.Dispatch<React.SetStateAction<string>>;
    setEndTime: React.Dispatch<React.SetStateAction<string>>;
}

export default function EmployeesDashboard(props: EmployeesDashboardProps) {

    return (
        <>
            < CheckInCheckOut onCheckIn={props.onCheckIn} onCheckOut={props.onCheckOut}
                             startTime={props.startTime} endTime={props.endTime} hoursWorked={props.hoursWorked} hoursWorkedPerMonth={props.hoursWorkedPerMonth}  setEndTime={props.setEndTime} setStartTime={props.setEndTime}/>
        </>
    )
}