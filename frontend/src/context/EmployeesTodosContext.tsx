import {EmployeesData,Employees} from "../types/Employees.ts";
import {FC, ReactNode, useEffect, useState} from "react";
import axios from "axios";
export default function EmployeesTodosContext(){

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const EmployeesTodosProvider: FC<{children:ReactNode}>=({children}) => {
        const [employees, setEmployees] = useState<Employees[]>([])
        const addEmployees = (newEmployeesData: EmployeesData) => {
            axios.post("/api/add", newEmployeesData)
                .then(getAllEmployees)
                .catch((error) => console.error("error, adding employees was not successfully: ", error));
        };

        const updateEmployees = (employees: EmployeesData, id: string) => {
            axios.put("/api/update/" + id, employees)
                .then(getAllEmployees)
                .catch(error => console.error("Error, updating employees was not a success: ", error));
        };

        const getAllEmployees = () => {
            axios.get("/api/")
                .then(response => {
                    setEmployees(response.data)
                })
                .catch(error => console.error("something went wrong", error))
        };

        const deleteEmployeesById = (id: string) => {
            axios.delete('/api/' + id)
                .then(getAllEmployees)
                .catch(error => console.error("something went wrong", error))
        };
        const addWorkDayById = (id: string) => {
            axios.post('/api/' + id)
                .then(getAllEmployees)
                .catch(error => console.error("something went wrong", error))
        };
        const getEndWorkDayById = (id: string) => {
            axios.get('/api/' + id)
                .then(getAllEmployees)
                .catch(error => console.error("something went wrong", error))
        };

        useEffect(() => {
            getAllEmployees();
        }, []);


        // @ts-ignore
        return (
            <>
                <EmployeesTodosProvider value={{
                    employees, getAllEmployees, updateEmployees, addEmployees,
                    deleteEmployeesById, addWorkDayById, getEndWorkDayById
                }}>
                    {children}
                </EmployeesTodosProvider>
            </>

        )
    }
        }
