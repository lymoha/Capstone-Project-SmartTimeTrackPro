package capstoneproject.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.time.Duration;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class TimeManager {
    private String id;
    private LocalDateTime startOfWork;
    private LocalDateTime endOfWork;
    private Duration numberOfHoursWorkedPerDay;
private double hoursWorked;
    //private int anzahlArbeitstage ;

    //private   String benutzername;
    //private   String passwort;
    //private   String position;
    //String standort;
    //String email;
    //String telefonnummer;

}
