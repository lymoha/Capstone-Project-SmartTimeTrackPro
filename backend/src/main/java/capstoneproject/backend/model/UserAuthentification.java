package capstoneproject.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserAuthentification {

    private String username;
    private String password;
}
