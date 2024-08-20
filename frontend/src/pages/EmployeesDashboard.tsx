import CheckInCheckOut from "../components/CheckInCheckOut.tsx";
import React from "react";
type EmployeesDashboardProps = {
    navigateBack: () => void;
    onCheckIn: () => void,
    onCheckOut: () => void,
    startTime: string,
    endTime: string,
    hoursWorked: number
    hoursWorkedPerMonth: number;
    setStartTime:  React.Dispatch<React.SetStateAction<string>>;
    setEndTime: React.Dispatch<React.SetStateAction<string>>;
    setHoursWorkedPerMonth: React.Dispatch<React.SetStateAction<number>>
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmployeeNr: React.Dispatch<React.SetStateAction<number>>
}

export default function EmployeesDashboard(props: EmployeesDashboardProps) {

    return (
        <>
            < CheckInCheckOut onCheckIn={props.onCheckIn} onCheckOut={props.onCheckOut}
                              startTime={props.startTime} endTime={props.endTime} hoursWorked={props.hoursWorked}
                              hoursWorkedPerMonth={props.hoursWorkedPerMonth} setEndTime={props.setEndTime}
                              setStartTime={props.setEndTime} setHoursWorkedPerMonth={props.setHoursWorkedPerMonth}
                              setName={props.setName} setEmployeeNr={props.setEmployeeNr} name={""} employeeNr={0}
                              navigateBack={props.navigateBack}/>
        </>
    )
}