import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {EmployeesProvider} from "./context/EmployeesContext.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLFormElement).render(
    <React.StrictMode>
        <EmployeesProvider>
            <App/>
        </EmployeesProvider>

    </React.StrictMode>
)
