import './App.css'
import {useState} from "react";
import axios from "axios";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './styles/EmployeesForm.css'
import {HomePage} from "./pages/HomePage.tsx";

import AddPage from "./pages/AddPage.tsx";
import DisplayEmployees from "./pages/DisplayEmployees.tsx";
import TimeManager from "./pages/TimeManager.tsx";
import UpdateEmployeesPage from "./pages/UpdateEmployeesPage.tsx";
import {useEmployeesContext} from "./hooks/useEmployeesContext.ts";

function App() {

    const [startTime, setStartTime] = useState<string>(" ");
    const [endTimeId, setEndTimeId] = useState<string>(" ");
    const [id,setId] = useState<string>("");

    const [endTime, setEndTime] = useState<string>(" ");
    const [hoursWorked, setHoursWorked] = useState(0.0);
    //const [hoursWorkedPerMonth, setHoursWorkedPerMonth] = useState(0.0);
    const {hoursWorkedPerMonth,setHoursWorkedPerMonth} = useEmployeesContext();
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


    const router = createBrowserRouter([
        {
            path:"/",
            element:<HomePage setId={setId} setStartTime={setStartTime} setEndTime={setEndTime} setHoursWorkedPerMonth={setHoursWorkedPerMonth}/>
        },
        {
            path: "/add/",
            element:<AddPage />
        },
        {
            path:"/update-employees/",
            element:<DisplayEmployees setId={setId} setHoursWorkedPerMonth={setHoursWorkedPerMonth} setStartTime={setStartTime} setEndTime={setEndTime}/>
        },
        {
            path:"/timeManager/",
            element:<TimeManager id={id} onCheckOut={onCheckOut} onCheckIn={onCheckIn} startTime={startTime} endTime={endTime} hoursWorked={hoursWorked} setEndTime={setEndTime} setStartTime={setStartTime} setHoursWorkedPerMonth={setHoursWorkedPerMonth} hoursWorkedPerMonth={hoursWorkedPerMonth}/>
        },
        {
            path:"/update/:id",
            element:<UpdateEmployeesPage/>
        },
        {
            path:"/hoursPerMonth/id/",
            element:<DisplayEmployees setId={setId}   setHoursWorkedPerMonth={setHoursWorkedPerMonth} setStartTime={setStartTime} setEndTime={setEndTime}/>
        },
        {
            path:"/{id}/{timeOut}",
            element:<DisplayEmployees setId={setId} setHoursWorkedPerMonth={setHoursWorkedPerMonth} setStartTime={setStartTime} setEndTime={setEndTime}/>
        }
    ])
    return (
        <>

            <RouterProvider router={router}/>


        </>
    )
}

export default App
