package capstoneproject.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
public class Employees {
   @Id
   private String id;
   private String name;
   private int employeeNr;
}
