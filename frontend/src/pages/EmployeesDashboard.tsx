import CheckIn from "../components/CheckIn.tsx";
import EmployeesForm from "../components/EmployeesForm.tsx";

interface EmployeesDashboardProps {
    onCheckIn: () => void
    onCheckOut: () => void
    startTime: string,
    endTime: string,
}

export default function EmployeesDashboard(props: EmployeesDashboardProps) {

    return (
        <>
            < CheckIn onCheckIn={props.onCheckIn} onCheckOut={props.onCheckOut}/>
            <EmployeesForm startTime={props.startTime} endTime={props.endTime}/>
        </>
    )
}