package capstoneproject.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
public class Employees {
   @Id
   private String id;
   private String name;
   private int employeeNr;

private List<TimeManager> timeManagers;

public String addTimeManager(String id) {

   TimeManager timeManager = new TimeManager(id, LocalDateTime.now(), null, null);

   timeManagers.add(timeManager);
return id;
}
public void endWorkDay(String id){

   for (TimeManager timeManager : timeManagers) {
      if(timeManager.getId().equals(id)) {
         timeManager.setArbeitsende(LocalDateTime.now());
         timeManager.setAnzahlGeleisteteArbeitsstundeTag(Duration.between(timeManager.getArbeitsbeginn(), timeManager.getArbeitsende()));
      }

   }

}
}
