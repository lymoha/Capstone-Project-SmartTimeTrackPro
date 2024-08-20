package capstoneproject.backend.service;

import capstoneproject.backend.exceptions.InvalidIdException;
import capstoneproject.backend.model.*;
import capstoneproject.backend.repository.SmartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
        return smartRepository.findById(id).orElseThrow(() -> new InvalidIdException("Employees with this id getEmployeesById-backend" + id + " could not be found"));
    }

    public void deleteEmployeesById(String id) {smartRepository.deleteById(id);
    }

    public Employees updateEmployeesById(String id, EmployeesData employeesData) throws InvalidIdException {
        Employees findEmployees = smartRepository.findById(id).orElseThrow(() -> new InvalidIdException("No Employees with this Id in updateEmployeesById-backend" + id + " was found"));
        findEmployees.setId(id);
        findEmployees.setName(employeesData.getName());
        findEmployees.setEmployeeNr(employeesData.getEmployeeNr()
        );
        return smartRepository.save(findEmployees);
    }
/*LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatterEigene = DateTimeFormatter.ofPattern("EEEE MMMM.yyyy HH:mm:ss");
        String formattedDateTime = now.format(formatterEigene);
 */
    public TimeDto addWorkDayById(String id) throws InvalidIdException {

        Employees employees = smartRepository.findById(id).orElseThrow(() -> new InvalidIdException("No Employees with this Id in addWorkDayById-backend" + id + " was found"));
        String idLocal = idService.generateId();
        /*
  ///***
        //LocalDateTime now = LocalDateTime.now();
        LocalDateTime now = employees.getTimeManagers().getLast().getStartTime();

        DateTimeFormatter formatterEigene = DateTimeFormatter.ofPattern("EEEE MMMM.yyyy HH:mm:ss");
        String formattedDateTime = now.format(DateTimeFormatter.ofPattern(formatterEigene.toString()));
///*****
  */
        employees.addTimeManager(idLocal);
        smartRepository.save(employees);
        return new TimeDto(idLocal, employees.getTimeManagers().getLast().getStartTime().toString(),0.0,employees.hoursWorkedPerMonth());
       // return new TimeDto(idLocal, formattedDateTime,0.0,employees.hoursWorkedPerMonth());
    }

    public TimeDto getEndWorkDayById(String id, String endTime) throws InvalidIdException {
        Employees employees = smartRepository.findById(id).orElseThrow(() -> new InvalidIdException("No Employees with this Id in getEndWorkDayById-backend" + id + " was found"));
        employees.endWorkDay(endTime);

       Employees updatedEmployees = smartRepository.save(employees);

       // employees.getTimeManagers().getLast().setHoursWorkedPerMonth(getHoursWorkedPerMonthById(id));
        //smartRepository.save(employees);
/*
        //&&&&
        LocalDateTime now = employees.getTimeManagers().getLast().getEndTime();

        DateTimeFormatter formatterEigene = DateTimeFormatter.ofPattern("EEEE MMMM.yyyy HH:mm:ss");
        String formattedDateTime = now.format(DateTimeFormatter.ofPattern(formatterEigene.toString()));
//&&&&&

 */
        return new TimeDto(id, updatedEmployees.getTimeManagers().getLast().getEndTime().toString(),updatedEmployees.getTimeManagers().getLast().getHoursWorked(),updatedEmployees.hoursWorkedPerMonth());
        //return new TimeDto(id,formattedDateTime ,employees.getTimeManagers().getLast().getHoursWorked(),employees.hoursWorkedPerMonth());
    }
   public double getHoursWorkedPerMonthById(String id) throws InvalidIdException {
       //double result = 0.0;
        Employees employee = smartRepository.findById(id).orElseThrow(()-> new InvalidIdException("No Employees with this Id in getHoursWorkedPerMonthById-backend" + id + " was found"));

        //result +=employee.getTimeManagers().getLast().getHoursWorked();
        //employee.getTimeManagers().getLast().setHoursWorkedPerMonth(result);

       //smartRepository.save(employee);//16.08.2024 added line

      return employee.hoursWorkedPerMonth();//16.08.2024

   }

    public List<Employees> searchEmployees(String query) {
    List<Employees> employees = smartRepository.findAll();
        // Filtere Ergebnisse, die mit der Suchanfrage übereinstimmen
        employees
                = employees.stream()
                .filter(result -> result.getName().toLowerCase().contains(query.toLowerCase()))
                .collect(Collectors.toList());
        return employees;
    }

}
