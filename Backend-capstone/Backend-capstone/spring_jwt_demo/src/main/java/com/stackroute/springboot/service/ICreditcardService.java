package com.stackroute.springboot.service;

import com.stackroute.springboot.model.Creditcard;

import java.util.Optional;

public interface ICreditcardService {

    public Optional<Creditcard> getCreditcardbynumber (Long creditcardnumber);

    public Creditcard saveUser(Creditcard creditcard);

    boolean validateCreditCard(Long creditcardnumber);

    void deleteUser(Long creditcardnumber);
}
