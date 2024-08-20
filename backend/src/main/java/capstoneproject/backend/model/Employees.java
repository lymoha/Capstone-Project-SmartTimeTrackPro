package capstoneproject.backend.model;

import capstoneproject.backend.exceptions.InvalidIdException;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.Month;
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

        TimeManager timeManager = new TimeManager(id, LocalDateTime.now(), null, 0.0, 0.0,LocalDateTime.now().getMonth(),0.0);
        timeManagers.add(timeManager);
        return id;
    }

    public void endWorkDay(String id) {

        for (TimeManager timeManager : timeManagers) {
            if (timeManager.getId().equals(id)) {
                timeManager.setEndTime(LocalDateTime.now());

                //timeManager.setNumberOfHoursWorkedPerDay(Duration.between(timeManager.getStartTime(), timeManager.getEndTime()));//Geht auch!!
                Duration duration = Duration.between(timeManager.getStartTime(), timeManager.getEndTime());
                timeManager.setNumberOfHoursWorkedPerDay(duration.toSeconds());

                double hoursWorked = duration.toSeconds();
                timeManager.setHoursWorked(hoursWorked);
            }
        }

    }
    public double hoursWorkedPerMonth() throws InvalidIdException {

        // Finde die gesamte Arbeitszeit für den angegebenen Mitarbeiter und den aktuellen Monat
        Month currentMonth = LocalDateTime.now().getMonth();

        double hoursWorkedPerMonth = 0.0;
        for (TimeManager timeManager : timeManagers) {
            if (timeManager.getWorkMonths().equals(currentMonth)) {
                hoursWorkedPerMonth += timeManager.getHoursWorked();
               // System.out.println(hoursWorkedPerMonth);
               // roundMe += Math.round(hoursWorkedPerMonth * 1000) / 1000.0;
                //System.out.println(roundMe);
               // roundMe++;//führt zur Erhöhung bei, wo es nicht sein sollte!
                //timeManager.setHoursWorkedPerMonth(roundMe);
              // System.out.println(roundMe);


            }
        }
        return hoursWorkedPerMonth;

        }


     }


