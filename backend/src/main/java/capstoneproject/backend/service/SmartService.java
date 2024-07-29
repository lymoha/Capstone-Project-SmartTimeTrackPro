package capstoneproject.backend.service;

import capstoneproject.backend.exceptions.InvalidIdException;
import capstoneproject.backend.model.*;
import capstoneproject.backend.repository.SmartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor

public class SmartService {
    private final IdService idService;
    private final SmartRepository smartRepository;

    public Employees addEmployees(EmployeesData employeesData) {
        Employees employees = new Employees(idService.generateId(),
                employeesData.getName(), employeesData.getEmployeeNr(),
                new ArrayList<>()
        );

        return smartRepository.save(employees);
    }

    public List<Employees> getAllEmployees() {
        return smartRepository.findAll();
    }

    public Employees getEmployeesById(String id) throws InvalidIdException {
        return smartRepository.findById(id).orElseThrow(() -> new InvalidIdException("Employees with this id " + id + " could not be found"));
    }

    public void deleteEmployeesById(String id) {
        smartRepository.deleteById(id);
    }

    public Employees updateEmployeesById(String id, EmployeesData employeesData) throws InvalidIdException {
        Employees findEmployees = smartRepository.findById(id).orElseThrow(() -> new InvalidIdException("No Employees with this Id " + id + " was found"));
        findEmployees.setId(id);
        findEmployees.setName(employeesData.getName());
        findEmployees.setEmployeeNr(employeesData.getEmployeeNr()
        );
        return smartRepository.save(findEmployees);
    }

    public TimeDto addWorkDayById(String id) throws InvalidIdException {
        Employees employees = smartRepository.findById(id).orElseThrow(() -> new InvalidIdException("No Employees with this Id " + id + " was found"));
        String idLocal = idService.generateId();

        employees.addTimeManager(idLocal);
        smartRepository.save(employees);
        return new TimeDto(idLocal, employees.getTimeManagers().getLast().getStartTime().toString(),0.0);
    }

    public TimeDto getEndWorkDayById(String id, String endTime) throws InvalidIdException {
        Employees employees = smartRepository.findById(id).orElseThrow(() -> new InvalidIdException("No Employees with this Id " + id + " was found"));
        employees.endWorkDay(endTime);

        smartRepository.save(employees);
        return new TimeDto(id, employees.getTimeManagers().getLast().getEndTime().toString(),employees.getTimeManagers().getLast().getHoursWorked());
    }
    public List<Employees> getEmployeesTimeList() {
        List<Employees> allEmployees = smartRepository.findAll();
        List<EmployeesTimeInfos> employeesTimeInfosList = new ArrayList<>();
        for(Employees employees: allEmployees) {
            EmployeesTimeInfos employeeTimeInfo = new EmployeesTimeInfos(employees.getId(),employeesTimeInfosList.getLast().getHoursWorked());
            employeesTimeInfosList.add(employeeTimeInfo);
        }
        return smartRepository.findAll();
    }
}
