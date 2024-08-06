import {Employees} from "../types/Employees.ts";
import {useNavigate} from "react-router-dom";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
type EmployeesCardProps = {
    employee:Employees;
}
export default function EmployeesCard(props:Readonly<EmployeesCardProps>) {
    const navigate = useNavigate();
    const {deleteEmployeesById} = useEmployeesContext();

    const handleEdit = () => {
        navigate("/update/" + props.employee.id);
    }

   const handleDelete = () => {
        deleteEmployeesById(props.employee.id);
        navigate("/employees-data/");
   }
return (
    <>
        <article className="article-employees-card-styler">
            <p> {props.employee.name} : {props.employee.employeeNr}</p>
            <div className="div-card-button-styler">
                <button type={"button"} onClick={handleDelete}> Löschen</button>
                <button type={"button"} onClick={handleEdit}>Bearbeiten</button>
            </div>

        </article>

        <button id={"back-button-styler"} onClick={() => navigate("/")}>Zurück zur Hauptseite</button>
    </>
)
}
