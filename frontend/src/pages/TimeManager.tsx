import CheckInCheckOut from "../components/CheckInCheckOut.tsx";
import Header from "../components/Header.tsx";

type LoginLogOutTimeManagerProps = {
    onCheckOut: () => void;
    onCheckIn: () => void;
    startTime:string;
    endTime:string;
    hoursWorked:number;
}
export default function TimeManager(props:Readonly<LoginLogOutTimeManagerProps>) {

    return(
        <>
            <Header/>
        <CheckInCheckOut onCheckIn={props.onCheckIn} onCheckOut={props.onCheckOut} startTime={props.startTime} endTime={props.endTime} hoursWorked={props.hoursWorked}/>

        </>
    )
}