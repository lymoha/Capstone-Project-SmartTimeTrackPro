import Header from "../components/Header.tsx";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
import EmployeesCard from "../components/EmployeesCard.tsx";
import {useNavigate} from "react-router-dom";

export default function DisplayEmployees() {
    const navigate = useNavigate();
const {employees} = useEmployeesContext();
    return (
        <>
            <Header/>
            <div className="displayEmployees-styler">
                {employees.map(employee => {
                    return (
                        <EmployeesCard key={employee.id} employee={employee}/>
                    );
                })}
            </div>

            <button id={"back-button-styler"} onClick={() => navigate("/")}>Zurück zur Hauptseite</button>
        </>
    )
}