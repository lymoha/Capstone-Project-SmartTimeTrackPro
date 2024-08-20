import EmployeesForm from "../components/EmployeesForm.tsx";
import {useNavigate} from "react-router-dom";
import '../styles/Back-Button.css'

export default function EmployeesInfosPage(): JSX.Element {
const navigate = useNavigate();
    return(
        <>
            <EmployeesForm/>


            <button id={"back-button-styler"} onClick={() => navigate("/")}>Zurück</button>
        </>
    )
}