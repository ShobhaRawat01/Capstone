package com.stackroute.springboot.controller;

import com.stackroute.springboot.model.Transaction;
import com.stackroute.springboot.repository.TransactionRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "*")
public class TransactionsController {
    private final TransactionRepository transactionRepository;

    public TransactionsController(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }


    @GetMapping("/home")
    public String home() {
        return "this is home page";
    }



    @GetMapping("/{userId}")
    public List<Transaction> getTransactionsByUserId(@PathVariable Long userId) {
        return transactionRepository.findByUserId(userId);
    }

    @PostMapping("/transaction")
    public Transaction addUser(@RequestBody Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @GetMapping("/transactions")
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

}

