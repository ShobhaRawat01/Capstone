package com.stackroute.springboot.repository;

import com.stackroute.springboot.model.Creditcard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CreditcardRepo extends JpaRepository<Creditcard, Long> {


    Optional<Creditcard> findById(Long creditcardnumber);


    boolean existsBycreditcardnumber(Long creditcardnumber);




}
