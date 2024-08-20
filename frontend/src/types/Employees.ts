export type Employees = {
    id: string,
    name: string,
    employeeNr: number
    timeManagers: TimeManager[]
}

export type EmployeesData = {
    name: string,
    employeeNr: number
}
export type TimeManager = {
    id: string,
    startTime: string,
    endTime: string,
    hoursWorked: number,
    numberOfHoursWorkedPerDay: Date,
    hoursWorkedPerMonth: number

}
