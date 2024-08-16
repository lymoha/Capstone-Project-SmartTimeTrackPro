package capstoneproject.backend.controller;

import capstoneproject.backend.model.Employees;
import capstoneproject.backend.model.TimeDto;
import capstoneproject.backend.repository.SmartRepository;
import capstoneproject.backend.service.SmartService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class SmartControllerTest {
@Autowired
private SmartRepository smartRepository;
@Autowired
private MockMvc mockMvc;
@Autowired
private SmartService smartService;

    @Test
    void addEmployees_ShouldReturnEmployees_WhenCalledWithEmployeesId() throws Exception {
        try {
            mockMvc.perform(MockMvcRequestBuilders.post("/api/add")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""" 
                                    {
                                    "name": "Maxim",
                                    "employeeNr": 77
                                    }"""))
                    .andExpect(MockMvcResultMatchers.status().isCreated())
                    .andExpect(MockMvcResultMatchers.content().json("""
                             {
                                                       "name": "Maxim",
                                                       "employeeNr": 77
                                                     }
                           """))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.id" ).exists());
        } catch (NullPointerException e ){
            throw new NullPointerException(e.getMessage());
        }
}
        @Test
        void getAllEmployees_ShouldReturnEmployeesList_whenCalled() throws Exception {
            smartRepository.saveAll(List.of(
                    (new Employees("2","Urmel",773,new ArrayList<>()))
            ));

            try {
                mockMvc.perform(MockMvcRequestBuilders.get("/api"))
                        .andExpect(MockMvcResultMatchers.status().isOk())
                        .andExpect(MockMvcResultMatchers.content().json("""
                            [{
                            id: "2",
                            name: "Urmel",
                            employeeNr: 773
                             }]
                           """));
            } catch (NullPointerException e ){
                throw new NullPointerException(e.getMessage());
            }
        }

    @Test
    void getEmployeesById_ShouldReturnEmployees_WhenCalledWithAGivenValideId() throws Exception {
        smartRepository.saveAll(List.of(
                (new Employees("3","Max",533,new ArrayList<>()))));
        mockMvc.perform(MockMvcRequestBuilders.get("/api/3"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                            {
                            id: "3",
                            name: "Max",
                            employeeNr: 533
                             }
                           """));
    }

    @Test
    void deleteEmployeesById_ShouldDeleteEmployee_WhenCalledWithAGivenId() throws Exception {
        smartRepository.save(new Employees("4","Maxi",991, new ArrayList<>()));
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/{id}","4"))
                .andExpect(MockMvcResultMatchers.status().isOk());

    }

    @Test
    void updateEmployeesById_ShouldReturnUpdatedEmployees_WhenUpdatedWithAGivenId() throws Exception {
        smartRepository.saveAll(List.of(
                (new Employees("5","Maxima",132, new ArrayList<>()))
        ));
        mockMvc.perform(MockMvcRequestBuilders.put("/api/update/5")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                            {
                            "name": "Maxima",
                            "employeeNr": 132
                             }
                            """))

                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.content().json("""
                            {
                            id: "5",
                            name: "Maxima",
                            employeeNr: 132
                             }
                          
  
                           """));
    }
///////////////////////////Was hinzugefügt////////

    @Test
    void addWorkDayById_ShouldReturnAddedWorkDay_WhenCalledWithWorkDayId() throws Exception {
        smartRepository.saveAll(List.of(
                new Employees("1ed359ce-8d1e-4d2f-97b1-8a96cec23837", "Chuck Norris", 9876, new ArrayList<>())
        ));

        String id = "1ed359ce-8d1e-4d2f-97b1-8a96cec23837";
        String timeOut = "18:00";

        mockMvc.perform(MockMvcRequestBuilders.post("/api/{id}/{timeOut}", id, timeOut))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                [{
                   id: "1ed359ce-8d1e-4d2f-97b1-8a96cec23837",
                   name: "Chuck Norris",
                   employeeNr: 9876
                 }]
            """));
    }
    @Test
    void getEndWorkDayById_ShouldReturnCorrectTimeDto_WhenCalledWithValidIdAndTimeOut() throws Exception {
        // Arrange
        String employeeId = "1ed359ce-8d1e-4d2f-97b1-8a96cec23837";
        String timeOut = "18:00";

        Employees employee = new Employees(employeeId, "Chuck Noris", 9876, new ArrayList<>());
        smartRepository.save(employee);

        TimeDto expectedTimeDto = new TimeDto("197b447b-ccc9-4769-bf9a-4332a2ac87a1", "08:00", 8.0, 0.0);

        when(smartService.getEndWorkDayById(employeeId, timeOut)).thenReturn(expectedTimeDto);

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/api/{id}/{timeOut}", employeeId, timeOut))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                {
                    "id": "197b447b-ccc9-4769-bf9a-4332a2ac87a1",
                    "startTime": "08:00",
                    "hoursWorked": 8.0,
                    "overtime": 0.0
                }
            """));
    }

}