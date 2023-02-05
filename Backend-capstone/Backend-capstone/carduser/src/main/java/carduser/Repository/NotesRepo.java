package carduser.Repository;

import carduser.models.Notes;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface NotesRepo  extends MongoRepository<Notes, String> {

    Notes findByEmail(String email);



}
