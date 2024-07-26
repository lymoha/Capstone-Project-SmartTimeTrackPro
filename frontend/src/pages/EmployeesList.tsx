import {Employee} from "../types/Employee.ts";

type employeesTodoCardsProps = {
    employees: Employee[]
}

export default function EmployeesList(props: Readonly<employeesTodoCardsProps>) {

    return (
        <div>
            {props.employees.map((employee) => (<p key={employee.id}>  {employee.name}</p>))}

            {props.employees.map((empl) => (<p key={empl.id}>  {empl.name} {empl.id}</p>))
            })
        </div>
    )
}