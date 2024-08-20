package capstoneproject.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.Month;

@Data
@AllArgsConstructor
public class TimeManager {
   private String id;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
   private double numberOfHoursWorkedPerDay;
    private double hoursWorked;
    private Month workMonths;
    private Double hoursWorkedPerMonth;

    //private   String benutzername;
    //private   String passwort;
    //private   String position;
    //String standort;
    //String email;
    //String telefonnummer;

}
