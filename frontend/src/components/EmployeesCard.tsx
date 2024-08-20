import {Employees} from "../types/Employees.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useEmployeesContext} from "../hooks/useEmployeesContext.ts";
import '../styles/E-Card.css'

type EmployeesCardProps = {
    employee:Employees;
    setId:(id:string) => void;

}
export default function EmployeesCard(props:Readonly<EmployeesCardProps>) {
    const navigate = useNavigate();
    const {deleteEmployeesById} = useEmployeesContext();
    const location = useLocation();
    const handleEdit = () => {
        navigate("/update/" + props.employee.id);
    }

   const handleDelete = () => {
        deleteEmployeesById(props.employee.id);
        navigate("/update-employees/");
   }
   const handleLogin = () => {
        props.setId(props.employee.id);
        navigate("/timeManager/");
   }

return (
    <>
        <article className="article-card-styler">
            <p>{"Name: " + props.employee.name}; {"PersonalNr:" + props.employee.employeeNr}</p>
            <div className="divCardButtonStyler">
            {
              location.pathname===("/")?
            <button type={"button"} onClick={handleLogin}>TimeLogInLogOut</button>:
            <>
            <button type={"button"} onClick={handleDelete}> Löschen</button>
            <button type={"button"} onClick={handleEdit}>Bearbeiten</button>

            </>
            }
            </div>

        </article>

    </>
)
}
