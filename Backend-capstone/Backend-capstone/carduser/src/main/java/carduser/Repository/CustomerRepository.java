package carduser.Repository;

import carduser.models.customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<customer, String> {
}
