package carduser;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Date;

import carduser.models.Notes;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

class ControllerTests {

    @Mock
    private Notes notes;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetFirstname() {
        when(notes.getFirstname()).thenReturn("John");
        assertEquals("John", notes.getFirstname());
    }



    @Test
    void testGetLastname() {
        when(notes.getLastname()).thenReturn("Doe");
        assertEquals("Doe", notes.getLastname());
    }



    @Test
    void testGetEmail() {
        when(notes.getEmail()).thenReturn("johndoe@email.com");
        assertEquals("johndoe@email.com", notes.getEmail());
    }



    @Test
    void testGetCountry() {
        when(notes.getCountry()).thenReturn("USA");
        assertEquals("USA", notes.getCountry());
    }



    @Test
    void testGetDate() {
        Date date = new Date();
        when(notes.getDate()).thenReturn(date);
        assertEquals(date, notes.getDate());
    }



    @Test
    void testGetTodate() {
        Date todate = new Date();
        when(notes.getTodate()).thenReturn(todate);
        assertEquals(todate, notes.getTodate());
    }


}
