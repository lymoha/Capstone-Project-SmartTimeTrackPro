import "./EmployeesForm.tsx"
import '../styles/EmployeesForm.css'

type CheckInProps = {
    onCheckIn: () => void,
    onCheckOut: () => void
}

export default function CheckIn(props: Readonly<CheckInProps>) {

    return (
        <>
            <div>
                <label className={"employees-label-styler"}>Zum Anmelden hier Klicken: </label>
                <button onClick={props.onCheckIn}>Anmelden</button>
            </div>

            <div>
                <label>Zum Abmelden hier Klicken:</label>
                <button onClick={props.onCheckOut}>Abmelden</button>
            </div>
        </>
    )
}