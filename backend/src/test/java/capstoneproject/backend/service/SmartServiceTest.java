package capstoneproject.backend.service;

import capstoneproject.backend.exceptions.InvalidIdException;
import capstoneproject.backend.model.Employees;
import capstoneproject.backend.model.EmployeesData;
import capstoneproject.backend.model.TimeManager;
import capstoneproject.backend.repository.SmartRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verify;

class SmartServiceTest {
    private final SmartRepository mockSmartRepository = mock(SmartRepository.class);
    private final IdService mockIdService = mock(IdService.class);
    private static List<Employees> mockEmployeesList;
    private final SmartService smartService = new SmartService(mockIdService, mockSmartRepository);

     @BeforeAll

static void setUp() {

    mockEmployeesList = new ArrayList<>(){{
        add(new Employees("1","Max",123,new ArrayList<>()));
        add(new Employees("2","Maxi",456,new ArrayList<>()));
        add(new Employees("3","maxim",789,new ArrayList<>()));
    }};
}


    @Test
    void addEmployees_shouldCreateRandomId_WhenCalled() {
        // GIVEN
        EmployeesData newData = new EmployeesData("Max", 567);
        Employees expected = new Employees("1", "Max", 567,new ArrayList<>());

        // WHEN & THEN
        when(mockIdService.generateId()).thenReturn("1");
        when(mockSmartRepository.save(expected)).thenReturn(expected);
        smartService.addEmployees(newData);
        verify(mockSmartRepository).save(expected);
        verify(mockIdService).generateId();
    }

    @Test
    void addEmployees_shouldThrowException_WhenSomethingWentWrong() {
        // GIVEN
        EmployeesData employeesData = new EmployeesData("Max", 567);

        // Mock-Objekt so konfigurieren, dass es eine Ausnahme wirft
        when(mockSmartRepository.save(any(Employees.class))).thenThrow(new NullPointerException("Error message"));

        // WHEN & THEN
        try {
            smartService.addEmployees(employeesData);
            verify(mockSmartRepository).save(any(Employees.class));
            fail("Expected exception, but was not thrown");
        } catch (NullPointerException e) {
            assertEquals("Error message", e.getMessage());
        }
    }
        @Test
        void getAllEmployees_ShouldReturnAllEmployees_WhenEmployeesListIsCalled () {
            //WHEN
            when(mockSmartRepository.findAll()).thenReturn(mockEmployeesList);
            List<Employees> actual = smartService.getAllEmployees();
            //THEN
            verify(mockSmartRepository).findAll();
            assertEquals(mockEmployeesList, actual);
        }

        @Test
        void getAllEmployees_shouldThrowException_WhenSomethingWentWrong () {
            // Mock-Objekt so konfigurieren, dass es eine Ausnahme wirft
            when(mockSmartRepository.findAll()).thenThrow(new NullPointerException("Error message"));

            // WHEN & THEN
            try {
                smartService.getAllEmployees();
                verify(mockSmartRepository).findAll();
                verify(smartService).getAllEmployees();
                fail("Expected exception, but was not thrown");
            } catch (Exception e) {
                assertEquals("Error message", e.getMessage());
            }
        }


    @Test
    void getEmployeesById_shouldReturnEmployee_WhenCalledWithAGivenId() throws InvalidIdException {
        //WHEN
        when(mockSmartRepository.findById("1")).thenReturn(Optional.of(mockEmployeesList.get(1)));
        Employees actual = smartService.getEmployeesById("1");
        //THEN
        verify(mockSmartRepository).findById("1");
        assertEquals(mockEmployeesList.get(1), actual);
    }

    @Test
    void getEmployeesById_shouldThrowException_WhenSomethingWentWrong() {
        when(mockSmartRepository.findById(any(String.class)))
                .thenReturn(Optional.empty());
        assertThrows(InvalidIdException.class, () -> smartService.getEmployeesById("2"));
        verify(mockSmartRepository).findById("2");
    }

    @Test
    void deleteEmployeesById_shouldDeleteEmployeesById_WhenCalledWithAGivenId() throws InvalidIdException {
        //WHEN
        smartService.deleteEmployeesById("2");
        //THEN
        verify(mockSmartRepository).deleteById("2");

    }

    @Test
    void updateEmployeesById_shouldReturnUpdatedEmployees_WhenCalledWithAGivenId() throws InvalidIdException {
        //WHEN
        when(mockSmartRepository.findById("1")).thenReturn(Optional.of(mockEmployeesList.get(1)));
        Employees actual = smartService.updateEmployeesById("1", new EmployeesData("Lukas Podolski", 456));
        when(mockSmartRepository.save(any(Employees.class))).thenReturn(actual);
        //THEN
        verify(mockSmartRepository).findById("1");
        verify(mockSmartRepository).save(any(Employees.class));
        assertNotEquals(mockEmployeesList.get(1), actual);
    }

    @Test
    void updateEmployeesById_shouldThrowException_WhenSomeThingWentWrong() {
        when(mockSmartRepository.findById(any(String.class))).thenReturn(Optional.empty());

        assertThrows(InvalidIdException.class, () -> smartService.updateEmployeesById("3", new EmployeesData("Lukas Podolski", 456)));
        verify(mockSmartRepository).findById("3");
    }
}
