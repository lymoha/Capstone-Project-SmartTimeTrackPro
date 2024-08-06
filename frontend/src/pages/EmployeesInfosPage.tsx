import EmployeesForm from "../components/EmployeesForm.tsx";
import {useNavigate} from "react-router-dom";

export default function EmployeesInfosPage(): JSX.Element {
const navigate = useNavigate();
    return(
        <>
            <EmployeesForm/>


            <button id={"back-button-styler"} onClick={() => navigate("/")}>Zurück zur Hauptseite</button>
        </>
    )
}