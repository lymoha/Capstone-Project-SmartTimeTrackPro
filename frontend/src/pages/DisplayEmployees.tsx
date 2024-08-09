import Header from "../components/Header.tsx";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
import EmployeesCard from "../components/EmployeesCard.tsx";
import {useNavigate} from "react-router-dom";
import '../styles/Back-Button.css'
type DisplayEmployeesPageProps = {
    setId: (id: string) => void;

}
export default function DisplayEmployees(props:Readonly<DisplayEmployeesPageProps>): JSX.Element {
    const navigate = useNavigate();
const {employees} = useEmployeesContext();

    return (
        <>
            <Header/>

                { employees.map(employee => {
                    return (
                        <EmployeesCard key={employee.id} employee={employee} setId={props.setId}/>
                    );
                })}

            <button id={"back-button-styler"} onClick={() => navigate("/")}>Zurück zur Hauptseite</button>

        </>
    )
}