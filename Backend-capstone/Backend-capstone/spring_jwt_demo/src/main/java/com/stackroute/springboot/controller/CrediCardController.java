package com.stackroute.springboot.controller;


import com.stackroute.springboot.model.Creditcard;
import com.stackroute.springboot.model.Transaction;
import com.stackroute.springboot.service.CreditcardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v2")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class CrediCardController {

    private CreditcardService creditcardService;
    private ResponseEntity<?> responseEntity;

    @Autowired
    public CrediCardController(CreditcardService creditcardService) {
        super();
        this.creditcardService = creditcardService;
    }

    @GetMapping("/home")
    public String home() {
        return "this is credit card home page";
    }

    @PostMapping("/users")
    public ResponseEntity<?> savecredituserToDB(@RequestBody Creditcard creditcard)  {
            Creditcard createdUser = creditcardService.saveUser(creditcard);
            this.responseEntity = new ResponseEntity<>(createdUser, HttpStatus.CREATED);

        return this.responseEntity;
    }

    @GetMapping("/user/{creditcardnumber}")
    public ResponseEntity<?> getCreditCardUserById(@PathVariable Long creditcardnumber) {
        Optional<Creditcard> creditcard = creditcardService.getCreditcardbynumber(creditcardnumber);
        return new ResponseEntity<>(creditcard, HttpStatus.OK);
    }

    @GetMapping("/validate/{creditcardnumber}")
    public ResponseEntity<Boolean> validateCreditCardBynumber(@PathVariable Long creditcardnumber) {
        boolean isValid = creditcardService.validateCreditCard(creditcardnumber);
        return new ResponseEntity<>(isValid, HttpStatus.OK);
    }


    @DeleteMapping("/user/{creditcardnumber}")
    public ResponseEntity<String> deleteUser(@PathVariable Long creditcardnumber) {
        creditcardService.deleteUser(creditcardnumber);
        return new ResponseEntity<>("User with credit card number " + creditcardnumber + " deleted successfully.", HttpStatus.OK);
    }




}
