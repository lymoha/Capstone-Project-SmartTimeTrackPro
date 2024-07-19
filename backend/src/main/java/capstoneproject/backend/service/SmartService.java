package capstoneproject.backend.service;

import capstoneproject.backend.exceptions.InvalidIdException;
import capstoneproject.backend.model.Employees;
import capstoneproject.backend.model.EmployeesData;
import capstoneproject.backend.repository.SmartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor

public class SmartService {
private final IdService idService;
        private final SmartRepository smartRepository;

        public Employees addEmployees(EmployeesData employeesData) {
            Employees employees = new Employees(idService.generateId(),
                                   employeesData.getName(), employeesData.getEmployeeNr());
            return smartRepository.save(employees);
        }
    public List<Employees> getAllEmployees() {
        return smartRepository.findAll();
    }

    public Employees getEmployeesById(String id) throws InvalidIdException {
        return smartRepository.findById(id).orElseThrow(() -> new InvalidIdException("Employees with this " + id + " not found"));
    }
    public void deleteEmployeesById(String id) throws InvalidIdException {
            smartRepository.deleteById(id);
    }
    public Employees updateEmployeesById(String id, EmployeesData employeesData) throws InvalidIdException {
        Employees findEmployees = smartRepository.findById(id).orElseThrow(() -> new InvalidIdException("No Employees with this Id " + id + " found"));
        findEmployees.setId(id);
        findEmployees.setName(employeesData.getName());
        findEmployees.setEmployeeNr(employeesData.getEmployeeNr());
        return smartRepository.save(findEmployees);
    }

}
