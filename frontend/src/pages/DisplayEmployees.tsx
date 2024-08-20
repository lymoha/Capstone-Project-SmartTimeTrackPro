import Header from "../components/Header.tsx";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
import EmployeesCard from "../components/EmployeesCard.tsx";
import {useNavigate} from "react-router-dom";
import '../styles/Back-Button.css'
import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
//import '../styles/Header.css'
import '../styles/DisplayEmployees.css'
import '../styles/SearchBar.css'

type DisplayEmployeesPageProps = {
    setId: (id: string) => void;
    setHoursWorkedPerMonth: (hoursWorkedPerMonth: number) => void;
    setStartTime:  React.Dispatch<React.SetStateAction<string>>;
    setEndTime: React.Dispatch<React.SetStateAction<string>>;

}
export default function DisplayEmployees(props:Readonly<DisplayEmployeesPageProps>): JSX.Element {
    const navigate = useNavigate();
    const {employees} = useEmployeesContext();
    const [query, setQuery] = useState<string>("");

    const filteredList = query?
        employees.filter((employee) => employee.name.toLowerCase().includes(query.toLowerCase()) ):employees;

    return (
        <>
            <Header/>

            <div className={"input-wrapper"}>
                <FaSearch id={"search-icon"}/>
                <input
                    type="text" name="search" placeholder="Tippe zum Suchen ..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

            </div>
            {filteredList.map(employee => {
                return (
                    <EmployeesCard key={employee.id} employee={employee} setId={props.setId}/>
                );
            })}
            <button id={"back-button-styler"} onClick={() => navigate("/")}>Zurück</button>
        </>
    )
}