package com.stackroute.springboot.service;

import com.stackroute.springboot.model.Transaction;

import java.util.List;

public interface ITransactionService {

    public interface TransactionService {
        List<Transaction> getTransactionsByUserId(Long userId);
    }

}
