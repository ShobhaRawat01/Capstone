package carduser;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Date;

import carduser.models.Notes;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import carduser.models.customer;

class Customertest {
    @Mock
    private customer customer;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetName() {
        when(customer.getName()).thenReturn("John");
        assertEquals("John", customer.getName());
    }


    @Test
    void testGetEmail() {
        when(customer.getEmail()).thenReturn("johndoe@email.com");
        assertEquals("johndoe@email.com", customer.getEmail());
    }


    @Test
    void testGetSubject() {
        when(customer.getSubject()).thenReturn("Feedback");
        assertEquals("Feedback", customer.getSubject());
    }


    @Test
    void testGetMessage() {
        when(customer.getMessage()).thenReturn("Great Service!");
        assertEquals("Great Service!", customer.getMessage());
    }

}

