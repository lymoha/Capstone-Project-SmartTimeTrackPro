import CheckInCheckOut from "../components/CheckInCheckOut.tsx";
import Header from "../components/Header.tsx";
import {useEffect} from "react";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";

type LoginLogOutTimeManagerProps = {
    id:string;
    onCheckOut: () => void;
    onCheckIn: () => void;
    startTime:string;
    endTime:string;
    hoursWorked:number;
    hoursWorkedPerMonth:string;
    setEndTime: React.Dispatch<React.SetStateAction<string>>;
    setStartTime: React.Dispatch<React.SetStateAction<string>>;
    setHoursWorkedPerMonth: React.Dispatch<React.SetStateAction<string>>;

}
export default function TimeManager(props:Readonly<LoginLogOutTimeManagerProps>) {
const {getHoursWorkedPerMonthById,hoursWorkedPerMonth} = useEmployeesContext();

useEffect(() => {
    getHoursWorkedPerMonthById(props.id)},
[getHoursWorkedPerMonthById, props.id])
    return(
        <>
            <Header/>
        <CheckInCheckOut onCheckIn={props.onCheckIn} onCheckOut={props.onCheckOut} startTime={props.startTime} endTime={props.endTime} hoursWorked={props.hoursWorked} hoursWorkedPerMonth={hoursWorkedPerMonth} setEndTime={props.setEndTime} setStartTime={props.setStartTime} setHoursWorkedPerMonth={props.setHoursWorkedPerMonth}/>

        </>
    )
}