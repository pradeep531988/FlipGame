package com.example.flipkartgame.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.flipkartgame.model.User;
import com.example.flipkartgame.service.IUserService;

@RestController
@CrossOrigin(origins = "*")
public class RegistrationController {
	
	@Autowired
	private IUserService userService;
	
	@PostMapping(path="/api/register")
	public @ResponseBody ResponseEntity<User> submitUser(@ModelAttribute User user) {
		final User resp = userService.registerUser(user);
		
		return new ResponseEntity<>(resp, resp != null ? HttpStatus.ACCEPTED : HttpStatus.FORBIDDEN);
	}

}
