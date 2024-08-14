import {Employees, EmployeesData} from "../types/Employees.ts";
import {FC, ReactNode, useEffect, useState} from "react";
import axios from "axios";
import {EmployeesContext} from "../hooks/useEmployeesContext.ts";

export type EmployeesContextType = {
    employees: Employees[];
    getAllEmployees: () => void;
    updateEmployees: (employeesData: EmployeesData, id: string) => void;
    addEmployees: (employeesData: EmployeesData) => void;
    deleteEmployeesById: (id: string) => void;
    addWorkDayById: (id: string) => void;
    getEndWorkDayById: (id: string,timeOut:string) => void;
    getEmployeesById: (id: string) => void;
    employee:Employees;
    getHoursWorkedPerMonthById: (id: string) => void;
    hoursWorkedPerMonth:number;
    searchEmployees: (query:string) => void;
    setHoursWorkedPerMonth: (hoursWorked: number) => void;
}
    export const EmployeesProvider: FC<{ children: ReactNode }> = ({children}) => {
        const [employee, setEmployee]=useState<Employees>({name:"",employeeNr:0,id:""})
        const [employees, setEmployees] = useState<Employees[]>([])
        const [hoursWorkedPerMonth, setHoursWorkedPerMonth] = useState<number>(0.0)
        const addEmployees = (newEmployees: EmployeesData) => {
            axios.post("/api/add", newEmployees)
                .then(getAllEmployees)
                .catch(error => console.error("error by adding some Employees : ", error));
        };

        const updateEmployees = (employeesData: EmployeesData, id: string) => {
            axios.put("/api/update/" + id, employeesData)
                .then(getAllEmployees)
                .catch(error => console.error("Error by updating some Employees: ", error));
        }

        const getAllEmployees = () => {
            axios.get("/api")
                .then(response => {
                    setEmployees(response.data)
                })
                .catch(error => console.error("something went wrong", error))
        };

        const deleteEmployeesById= (id: string) => {
            axios.delete('/api/' + id)
                .then(getAllEmployees)
                .catch(error => console.error("something went wrong", error))
        }
      const addWorkDayById = (id:string) =>{
            axios.get("/api/update/" + id)
                .then(response =>{
                    setEmployees(response.data)
                }).catch(error => console.error("Something went wrong",error))
      }
      const getEndWorkDayById = (id:string,timeOut:string)=>{
            axios.get("/id/timeOut" + id + timeOut)
                .then(response =>{
                    setEmployees(response.data)
                }).catch(error => console.error("Something went wrong in getEndWorkDayById in frontend",error)
            )
      }

      const getEmployeesById = (id:string)=> {
            axios.get("/api/" + id)

                .then(response =>setEmployee(response.data))
                .catch(error => console.error("No such data found",error))
        }
        const getHoursWorkedPerMonthById = (id:string) =>{
            axios.get("/api/hoursPerMonth/" + id)
                .then(response =>setHoursWorkedPerMonth(response.data))
                .catch(error => console.error("No such worked hours found",error))
        }
        const searchEmployees = (query:string)=>{
            axios.get("/api/search" + query)
                .then(response => searchEmployees(response.data))
                .catch(error => console.error("No such name found in searchEmployees",error))
        }
        useEffect(() => {
            getAllEmployees();


        }, []);

        return (
            <>
            <EmployeesContext.Provider value = {{employees,getAllEmployees,updateEmployees, addEmployees, deleteEmployeesById, addWorkDayById,getEndWorkDayById,getEmployeesById,employee,getHoursWorkedPerMonthById,hoursWorkedPerMonth,searchEmployees,setHoursWorkedPerMonth}}>
                {children}
            </EmployeesContext.Provider>

        </>
    )
}
