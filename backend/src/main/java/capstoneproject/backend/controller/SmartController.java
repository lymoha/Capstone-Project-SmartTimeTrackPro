package capstoneproject.backend.controller;

import capstoneproject.backend.exceptions.InvalidIdException;
import capstoneproject.backend.model.Employees;
import capstoneproject.backend.model.EmployeesData;
import capstoneproject.backend.model.TimeDto;
import capstoneproject.backend.service.SmartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SmartController {
    private final SmartService smartService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/add")
    public Employees addEmployees(@RequestBody EmployeesData employeesData) {
        return smartService.addEmployees(employeesData);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping
    public List<Employees> getAllEmployees() {
        return smartService.getAllEmployees();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public Employees getEmployeesById(@PathVariable String id) throws InvalidIdException {
        return smartService.getEmployeesById(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/{id}")
    public void deleteEmployeesById(@PathVariable String id) throws InvalidIdException {
        smartService.deleteEmployeesById(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PutMapping("/update/{id}")
    public Employees updateEmployees(@PathVariable String id, @RequestBody EmployeesData employeesData) throws InvalidIdException {
        return smartService.updateEmployeesById(id, employeesData);
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/add/{id}")
    public TimeDto addWorkDayById(@PathVariable String id) throws InvalidIdException {
        return smartService.addWorkDayById(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}/{timeOut}")
    public TimeDto getEndWorkDayById(@PathVariable String id, @PathVariable String timeOut) throws InvalidIdException {
        return smartService.getEndWorkDayById(id, timeOut);

    }
}
