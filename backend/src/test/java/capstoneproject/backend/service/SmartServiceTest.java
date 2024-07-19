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
private static SmartService smartService;

private static SmartRepository mockSmartRepository;
private static IdService mockIdService;
private static List<Employees> mockEmployeesList;
@BeforeAll

static void setUp() {
    mockSmartRepository = mock(SmartRepository.class);
    mockIdService = mock(IdService.class);
    smartService = new SmartService(mockIdService, mockSmartRepository);
    mockEmployeesList = new ArrayList<>(){{
        add(new Employees("1","Max",123));
        add(new Employees("2","Maxi",456));
        add(new Employees("3","maxim",789));
    }};
}
    @Test
    void addEmployees_shouldCreateRandomId_WhenCalled() {
        // GIVEN
        EmployeesData newDat = new EmployeesData("Max", 567);
        Employees expected = new Employees("123", "Max", 567);

        // WHEN & THEN
        when(mockIdService.generateId()).thenReturn("123");
        when(mockSmartRepository.save(expected)).thenReturn(expected);
        smartService.addEmployees(newDat);
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