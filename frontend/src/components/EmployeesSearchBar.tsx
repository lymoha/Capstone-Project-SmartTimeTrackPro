import React from "react";
import {useState} from "react";
import '../styles/EmployeesSearchBar.css'
import EmployeesCard from "./EmployeesCard.tsx";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
import { FaSearch } from "react-icons/fa";

type EmployeesSearchBarProps = {
    setId: (id: string) => void;
    setHoursWorkedPerMonth: (hoursWorkedPerMonth: number) => void;
    setStartTime:  React.Dispatch<React.SetStateAction<string>>;
    setEndTime: React.Dispatch<React.SetStateAction<string>>;
}
export default function EmployeesSearchBar(props:Readonly<EmployeesSearchBarProps>) {

        const [query, setQuery] = useState<string>("");
    const {employees} = useEmployeesContext();

        const filteredList = query?
             employees.filter((employee) => employee.name.toLowerCase().includes(query) ):employees;

        return (
            <>
                <div>
                <FaSearch className="search-icon-styler"/>
                </div>
                <div>
                    <input className={"div-container-styler"}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Tippe zum Suchen ..."/>
                </div>
                <div>
                    <button className={"button-styler"}>Mitarbeitersuche</button>

                    <ul>
                        {filteredList.map((employee, index) => (
                            <li key={index}>
                                {employee.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
}