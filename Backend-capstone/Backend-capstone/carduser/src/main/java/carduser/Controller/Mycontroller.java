package carduser.Controller;

import carduser.Repository.CustomerRepository;
import carduser.models.customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v3")
@CrossOrigin(origins = "*")
public class Mycontroller {

    @Autowired
    private CustomerRepository CustomerRepository;

    @GetMapping("/home")
    public String home() {
        return "this is home page";
    }


    @PostMapping("/customer")
    public ResponseEntity<?> addcustomer(@RequestBody customer customer){
        customer save = this.CustomerRepository.save(customer);
        return ResponseEntity.ok(save);
    }

    @GetMapping("/customers")
    public ResponseEntity<?> getcustomers(){
        return ResponseEntity.ok(this.CustomerRepository.findAll());
    }
}
