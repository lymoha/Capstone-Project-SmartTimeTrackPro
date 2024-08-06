import {createContext, useContext} from "react";
import {EmployeesContextType} from "../context/EmployeesContext.tsx";

export const EmployeesContext = createContext<EmployeesContextType | undefined>(undefined);

export const useEmployeesContext = () => {
    const context = useContext(EmployeesContext);
    if(!context) throw new Error("useEmployeesContext musst be used within an Employees Provider");
    return context;
}
