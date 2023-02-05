package com.stackroute.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.stackroute.springboot.model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	//Query Methods

	//SQL
	//"select username, password from user_details where username =? and password = ?"

	@Query("SELECT u FROM User u WHERE u.username = :username AND u.password = :password")
	User validateUser(@Param("username") String username, @Param("password") String password);


//	@Query("{'username': ?0}")
//	public User findByname(String name);

	@Query("SELECT u FROM User u WHERE u.username = :username")
	User findByname(@Param("username") String username);

	Optional<User> findByUsername(String username);

}