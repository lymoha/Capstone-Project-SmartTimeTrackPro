import {Employees} from "../types/Employees.ts";

type employeesTodoCardsProps = {
    employees: Employees[]
}

export default function EmployeesList(props: Readonly<employeesTodoCardsProps>) {

    return (
        <div>
            {props.employees.map((employee) => (<p key={employee.id}>  {employee.name}</p>))}

            {props.employees.map((e) => (<p key={e.id}>  {e.name} {e.id}</p>))
            })
        </div>
    )
}