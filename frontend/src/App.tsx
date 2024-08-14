import './App.css'
import {useState} from "react";
import axios from "axios";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './styles/EmployeesForm.css'
import {HomePage} from "./pages/HomePage.tsx";
import {EmployeesProvider} from "./context/EmployeesContext.tsx";

import AddPage from "./pages/AddPage.tsx";
import DisplayEmployees from "./pages/DisplayEmployees.tsx";
import TimeManager from "./pages/TimeManager.tsx";
import UpdateEmployeesPage from "./pages/UpdateEmployeesPage.tsx";

function App() {

    const [startTime, setStartTime] = useState<string>(" ");
    const [endTimeId, setEndTimeId] = useState<string>(" ");
    const [id,setId] = useState<string>("");

    const [endTime, setEndTime] = useState<string>(" ");
    const [hoursWorked, setHoursWorked] = useState(0.0);
    const [hoursWorkedPerMonth, setHoursWorkedPerMonth] = useState("");

    function onCheckIn(){
        axios.post(
            "/api/add/" + id
        ).then((response) => {
            setStartTime(response.data.time)
            setEndTimeId(response.data.id)
            console.log(response.data)
        })
    }

    function onCheckOut() {
        axios.get("/api/" + id + "/" + endTimeId)
            .then((response) => {
                setEndTime(response.data.time)
                setHoursWorked(response.data.hoursWorked)
                //console.log(response.data)
            })
            .catch(error => console.error(error.message))
    }

    /*
     createBrowserRouter wird verwendet, um eine Routing-Konfiguration zu definieren, die festlegt, welche Komponenten unter welchen URL-Pfaden gerendert werden sollen.
     --path: Der URL-Pfad, bei dem diese Route aktiv wird.
     --element: Die Komponente, die für diesen Pfad gerendert werden soll.
     */
    const router = createBrowserRouter([
        {
            path:"/",
            element:<HomePage setId={setId} setHoursWorkedPerMonth={setHoursWorked} setStartTime={setStartTime} setEndTime={setEndTime}/>
        },
        {
            path: "/add/",
            element:<AddPage />
        },
        {
            path:"/update-employees/",
            element:<DisplayEmployees setId={setId} setHoursWorkedPerMonth={setHoursWorked} setStartTime={setStartTime} setEndTime={setEndTime}/>
        },
        {
            path:"/timeManager/",
            element:<TimeManager id={id} onCheckOut={onCheckOut} onCheckIn={onCheckIn} startTime={startTime} endTime={endTime} hoursWorked={hoursWorked} setEndTime={setEndTime} setStartTime={setStartTime}  hoursWorkedPerMonth={hoursWorkedPerMonth} setHoursWorkedPerMonth={setHoursWorkedPerMonth}/>
        },
        {
            path:"/update/:id",
            element:<UpdateEmployeesPage/>
        },
        {
            path:"/id/hoursPerMonth/",
            element:<DisplayEmployees setId={setId}   setHoursWorkedPerMonth={setHoursWorked} setStartTime={setStartTime} setEndTime={setEndTime}/>
        },
        {
            path:"/{id}/{timeOut}",
            element:<DisplayEmployees setId={setId} setHoursWorkedPerMonth={setHoursWorked} setStartTime={setStartTime} setEndTime={setEndTime}/>
        }
    ])
    return (
        <>

            <EmployeesProvider> <RouterProvider router={router}/> </EmployeesProvider>


        </>
    )
}

export default App
