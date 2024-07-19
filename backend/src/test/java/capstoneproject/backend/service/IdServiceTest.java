package capstoneproject.backend.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class IdServiceTest {
@Autowired
IdService idService;
    @Test
    void generateId_ShouldReturnAUniqueGeneratedId_WhenCalled() {
     String id = idService.generateId();
 assertFalse(id.isEmpty(),"id should never be empty");

 assertTrue(id.matches("^[0-9a-fA-F-]{36}$"),"id has UUID format");
    }
}