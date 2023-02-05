package carduser.Controller;

import carduser.Repository.CustomerRepository;
import carduser.Repository.NotesRepo;
import carduser.models.Notes;
import carduser.models.customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*")
public class NotesController {

    @Autowired
    private NotesRepo notesRepo;

    @GetMapping("/home")
    public String home() {
        return "this is home page";
    }
    @PostMapping("/note")
    public ResponseEntity<?> addnote(@RequestBody Notes notes){
        Notes save = this.notesRepo.save(notes);
        return ResponseEntity.ok(save);
    }

    @GetMapping("/notes")
    public ResponseEntity<?> getnotes(){
        return ResponseEntity.ok(this.notesRepo.findAll());
    }

    @GetMapping("/customer/{email}")
    public ResponseEntity<Notes> getnotesByEmail(@PathVariable String email) {
        Notes notes = notesRepo.findByEmail(email);
        if (notes == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(notes);
    }
}
