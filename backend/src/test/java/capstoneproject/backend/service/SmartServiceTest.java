package capstoneproject.backend.service;

import capstoneproject.backend.model.Employees;
import capstoneproject.backend.model.EmployeesData;
import capstoneproject.backend.repository.SmartRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verify;

class SmartServiceTest {
private SmartRepository mockSmartRepository = mock(SmartRepository.class);
private IdService mockIdService = mock(IdService.class);
private static List<Employees> mockEmployeesList;
    private SmartService smartService = new SmartService(mockIdService, mockSmartRepository);

    /* @BeforeAll

static void setUp() {

    mockEmployeesList = new ArrayList<>(){{
        add(new Employees("1","Max",123));
        add(new Employees("2","Maxi",456));
        add(new Employees("3","maxim",789));
    }};
}
*/

    @Test
    void addEmployees_shouldCreateRandomId_WhenCalled() {
        // GIVEN
        EmployeesData newData = new EmployeesData("Max", 567);
        Employees expected = new Employees("1", "Max", 567);

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

}