package capstoneproject.backend.repository;

import capstoneproject.backend.model.Employees;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SmartRepository extends MongoRepository<Employees, String> {

}
