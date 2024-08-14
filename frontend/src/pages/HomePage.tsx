
import '../styles/HomePage.css'
import DisplayEmployees from "./DisplayEmployees.tsx";
import EmployeesSearchBar from "../components/EmployeesSearchBar.tsx";
type HomePageProps = {
    setId: (id: string) => void;
    setHoursWorkedPerMonth: (hours: number) => void;
    setStartTime: React.Dispatch<React.SetStateAction<string>>;
    setEndTime: React.Dispatch<React.SetStateAction<string>>;
}

export function HomePage(props:Readonly< HomePageProps>): JSX.Element {

    return (
        <>
            <div className="home-page">
                <DisplayEmployees setId={props.setId} setHoursWorkedPerMonth={props.setHoursWorkedPerMonth}
                                  setEndTime={props.setEndTime} setStartTime={props.setStartTime}/>
            </div>

            <div className="App">
                <h1>Suche</h1>
                <EmployeesSearchBar setId={props.setId} setHoursWorkedPerMonth={props.setHoursWorkedPerMonth} setStartTime={props.setStartTime}
                                    setEndTime={props.setEndTime}/>
            </div>

        </>
    )
}