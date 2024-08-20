
import '../styles/HomePage.css'
import DisplayEmployees from "./DisplayEmployees.tsx";
import React from "react";

type HomePageProps = {
    setId: (id: string) => void;
    setStartTime: React.Dispatch<React.SetStateAction<string>>;
    setEndTime: React.Dispatch<React.SetStateAction<string>>;
    //setHoursWorkedPerMonth: React.Dispatch<React.SetStateAction<string>>;
    setHoursWorkedPerMonth: number;// React.Dispatch<React.SetStateAction<string>>;
}

export function HomePage(props:Readonly< HomePageProps>): JSX.Element {

    return (
        <>
            <div className="home-page">
                <DisplayEmployees setId={props.setId} 
                setEndTime={props.setEndTime} setStartTime={props.setStartTime}  setHoursWorkedPerMonth={hoursWorkedPerMonth => hoursWorkedPerMonth}/>
            </div>

        </>
    )
}