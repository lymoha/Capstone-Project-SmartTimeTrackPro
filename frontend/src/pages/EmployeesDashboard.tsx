import CheckInCheckOut from "../components/CheckInCheckOut.tsx";
type EmployeesDashboardProps = {
    onCheckIn: () => void,
    onCheckOut: () => void,
    startTime: string,
    endTime: string,
    hoursWorked: number
}

export default function EmployeesDashboard(props: EmployeesDashboardProps) {

    return (
        <>
            < CheckInCheckOut onCheckIn={props.onCheckIn} onCheckOut={props.onCheckOut}
                             startTime={props.startTime} endTime={props.endTime} hoursWorked={props.hoursWorked}/>
        </>
    )
}