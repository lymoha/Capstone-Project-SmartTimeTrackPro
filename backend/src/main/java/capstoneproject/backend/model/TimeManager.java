package capstoneproject.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Date;
@Data
@AllArgsConstructor
public class TimeManager {
 private String id;
    private LocalDateTime arbeitsbeginn ;
     private LocalDateTime arbeitsende;
     private Duration anzahlGeleisteteArbeitsstundeTag;

    //  private int anzahlArbeitstage ;
    //private Date arbeitsbeginn ;
    //private Date arbeitsende;

    //private   String benutzername;
    //private   String passwort;
    //private   String position;
    //String standort;
    //String email;
    //String telefonnummer;

}
