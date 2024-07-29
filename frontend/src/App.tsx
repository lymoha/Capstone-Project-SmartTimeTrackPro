import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import EmployeesList from "./pages/EmployeesList.tsx";
import {Employee} from "./types/Employee.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EmployeesDashboard from "./pages/EmployeesDashboard.tsx";

function App() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [startTime, setStartTime] = useState<string>(" ");
    const [endTimeId, setEndTimeId] = useState<string>(" ");
    const [id, setId] = useState<string>("beeb9aa6-7b00-401c-b966-3426b9ae98d5");
    const [endTime, setEndTime] = useState<string>(" ");
    const [hoursWorked, setHoursWorked] = useState(0.0);
    function onCheckIn() {
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

    function getAllEmployees() {
        axios.get("/api")
            .then((response) => setEmployees(response.data))
            .catch(error => console.log(error, "No employees"));
    }

    useEffect(() => {
        getAllEmployees();
    }, []);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <EmployeesList employees={employees}/>
        }
    ])
    return (
        <>
            <RouterProvider router={router}/>
            <EmployeesDashboard onCheckIn={onCheckIn} onCheckOut={onCheckOut} startTime={startTime}
                                endTime={endTime} hoursWorked={hoursWorked}/>
        </>
    )
}

export default App
