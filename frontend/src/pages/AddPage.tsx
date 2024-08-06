import Header from "../components/Header.tsx";
import EmployeesForm from "../components/EmployeesForm.tsx";
import {useNavigate} from "react-router-dom";

export default function AddPage() {
const navigate = useNavigate();
    return (
        <>
        <Header/>
        <EmployeesForm />

            <button id={"back-button-styler"} onClick={()=>navigate("/")}>Zurück zur Hauptseite</button>
        </>
    )
}