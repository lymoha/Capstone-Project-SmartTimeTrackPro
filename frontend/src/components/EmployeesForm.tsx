import {FormEvent, useState} from "react";
import "../styles/EmployeesForm.css"

type EmployeesFormProps = {
    startTime: string,
    endTime: string,
}
export default function EmployeesForm(props: EmployeesFormProps) {
    const [name, setName] = useState('');
    const [employeeNr, setEmployeeNr,] = useState(0);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setName("")
        setEmployeeNr(0)
    }

    return (
        <>
            <form className="employees-form-styler" onSubmit={event => handleSubmit(event)}>
                <label className="employees-label-styler">Name:</label>
                <input className="employees-input-styler" type="text" placeholder="Gib bitte deinen Namen ein"
                       onChange={e => setName(e.target.value)} value={name}/>
                <label className="employees-label-styler">Personal-Nr.:</label>
                <input className="employees-input-styler" type="text" placeholder="Gib bitte deine Personalnummer ein"
                       onChange={e => setEmployeeNr(Number(e.target.value))} value={employeeNr}/>

                <label className={"employees-label-styler"}> Start in den Arbeitstag: {props.startTime}</label>

                <label className={"employees-label-styler"}> Ende den Tag: {props.endTime}</label>
            </form>

        </>
    )
}