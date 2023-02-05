package com.stackroute.springboot.service;




import com.stackroute.springboot.model.Creditcard;
import com.stackroute.springboot.repository.CreditcardRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CreditcardService implements ICreditcardService{

    private CreditcardRepo creditcardRepo;


    @Autowired
    public CreditcardService(CreditcardRepo creditcardRepo) {
        super();
        this.creditcardRepo = creditcardRepo;
    }

    @Override
    public Optional<Creditcard> getCreditcardbynumber(Long creditcardnumber) {
        return creditcardRepo.findById(creditcardnumber);
    }


    @Override
	public Creditcard saveUser(Creditcard creditcard)  {


        Creditcard createdUser = creditcardRepo.save(creditcard);

		return createdUser;
	}



    public boolean validateCreditCard(Long creditcardnumber) {
        return creditcardRepo.existsBycreditcardnumber(creditcardnumber);
    }

    @Override
    public void deleteUser(Long creditcardnumber) {
        creditcardRepo.deleteById(creditcardnumber);
    }






}
