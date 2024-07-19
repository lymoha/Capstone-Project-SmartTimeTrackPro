package capstoneproject.backend.controller;

import capstoneproject.backend.repository.SmartRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class SmartControllerTest {
@Autowired
private SmartRepository smartRepository;
@Autowired
private MockMvc mockMvc;

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
                    .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists());
        } catch (NullPointerException e ){
            throw new NullPointerException(e.getMessage());
        }
    }
}