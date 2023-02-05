package com.stackroute.springboot.controller;

import java.util.List;

import com.stackroute.springboot.exception.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//import com.stackroute.springboot.exception.UserAlreadyExistsException;
import com.stackroute.springboot.model.User;
import com.stackroute.springboot.service.UserService;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "*")
public class UserController {

	
	private UserService userService;
	private ResponseEntity<?> responseEntity;

	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@GetMapping("/home")
	public String home() {
		return "this is home page";
	}
	


    @PostMapping("/user")
    public ResponseEntity<?> saveuserToDB(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            User createdUser = userService.saveUser(user);
            this.responseEntity = new ResponseEntity<>(createdUser,HttpStatus.CREATED);
        } catch (UserAlreadyExistsException exception) {
            throw exception;
        }
        catch(Exception e) {
            System.out.println(e);
            this.responseEntity = new ResponseEntity<>("Some internal error occured..", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return this.responseEntity;
    }


    @GetMapping("/users")
	public ResponseEntity<?> getAllUsers(){
		try {
			List<User> usersList = this.userService.getAllUsers();
			this.responseEntity = new ResponseEntity<>(usersList,HttpStatus.OK);
		} catch (Exception e) {
			this.responseEntity = new ResponseEntity<>("Some internal error occured..", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return this.responseEntity;
	}

	@DeleteMapping("/user/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable int id) {
		userService.deleteUser(id);
		return new ResponseEntity<>("User with credit card number " + id + " deleted successfully.", HttpStatus.OK);
	}


}
