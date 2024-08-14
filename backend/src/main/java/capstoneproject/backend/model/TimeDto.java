package capstoneproject.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TimeDto{
    String id;
    String time;
    double hoursWorked;
    double hoursWorkedPerMonth;
}
