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

        TimeManager timeManager = new TimeManager(id, LocalDateTime.now(), null, null, 0.0,LocalDateTime.now().getMonth());
        timeManagers.add(timeManager);
        return id;
    }

    public void endWorkDay(String id) {

        for (TimeManager timeManager : timeManagers) {
            if (timeManager.getId().equals(id)) {
                timeManager.setEndTime(LocalDateTime.now());

                //timeManager.setNumberOfHoursWorkedPerDay(Duration.between(timeManager.getStartTime(), timeManager.getEndTime()));
                Duration duration = Duration.between(timeManager.getStartTime(), timeManager.getEndTime());
                timeManager.setNumberOfHoursWorkedPerDay(duration);

                double hoursWorked = duration.toMinutes() / 60.0;
                timeManager.setHoursWorked(Math.round(hoursWorked * 100000) / 100000.0);
            }
        }

    }
    public double hoursWorkedPerMonth() throws InvalidIdException {

        // Finde die gesamte Arbeitszeit für den angegebenen Mitarbeiter und den aktuellen Monat
        Month currentMonth = LocalDateTime.now().getMonth();
         double roundMe = 0.0;
        double hoursWorkedPerMonth = 0.0;
        for (TimeManager timeManager : timeManagers) {
            if (timeManager.getWorkMonths().equals(currentMonth)) {
                hoursWorkedPerMonth += timeManager.getHoursWorked();
               roundMe = Math.round(hoursWorkedPerMonth * 100000) / 100000.0;
            }
        }
        return roundMe;
//        double hoursWorkedPerMonth = 0;
//        for (TimeManager timeManager : timeManagers) {
//            if (timeManager.getId().equals(id) && timeManager.getWorkMonths().toString().contains(currentMonth.toString())) {
//              hoursWorkedPerMonth +=  timeManager.setHoursWorked(timeManager.getHoursWorked() + 1);
//
//            }
//
//        }
//
//       return getTimeManagers().getLast().getHoursWorked();

//        Month currentMonth = LocalDateTime.now().getMonth();
//        AtomicReference<Double> hoursPerMonth = new AtomicReference<>(0.0);
//        for (TimeManager timeManager : timeManagers) {
//
//            // Vergleiche den Monatsnamen und gib die Summe der Gesamtarbeitsstunden je Monat zurückgeben
//            if (currentMonth == Month.JANUARY) {
//            timeManagers.stream()
//                    .filter(timeManager1 -> timeManager1.getId().equals(id))
//                    .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//            } else if (currentMonth == Month.FEBRUARY) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getId().equals(id))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//            } else if (currentMonth == Month.MARCH) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getId().equals(id))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//            } else if (currentMonth == Month.APRIL) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getId().equals(id))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//            } else if (currentMonth == Month.MAY) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getId().equals(id))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//            } else if (currentMonth == Month.JUNE) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getId().equals(id))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//            } else if (currentMonth == Month.JULY) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getId().equals(id))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//
//            } else if (currentMonth == Month.AUGUST) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getWorkMonths().equals(currentMonth))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double) (v + timeManager1.getHoursWorked())));
//
//            } else if (currentMonth == Month.SEPTEMBER) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getId().equals(id))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//            } else if (currentMonth == Month.OCTOBER) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getId().equals(id))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//            } else if (currentMonth == Month.NOVEMBER) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getId().equals(id))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//            } else if (currentMonth == Month.DECEMBER) {
//                timeManagers.stream()
//                        .filter(timeManager1 -> timeManager1.getId().equals(id))
//                        .forEach(timeManager1 -> hoursPerMonth.updateAndGet(v -> (double)(v + timeManager1.getHoursWorked())));
//            }
//        }
//            return hoursPerMonth;

        }
     }


