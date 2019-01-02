package com.example.flipkartgame.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.flipkartgame.model.Captcha;
import com.example.flipkartgame.model.User;
import com.example.flipkartgame.service.ICaptchaService;

@RestController
@CrossOrigin(origins = "*")
public class HomeController {
	
	@Autowired
	private ICaptchaService captchaService;
	
	@PostMapping(path="/api/captcha/{level}")
	public @ResponseBody ResponseEntity<Captcha> submitUser(@PathVariable
			(value = "level") String userLevel, @ModelAttribute User user) {
		return new ResponseEntity<>(captchaService.getCaptcha(Byte.parseByte(userLevel), user), HttpStatus.ACCEPTED);
	}
	
	@PostMapping(path="/api/captcha/user/{gameId}/{emailId}/{userInput}")
	public @ResponseBody ResponseEntity<Captcha> submitUser(
			@PathVariable
			(value = "gameId") String gameId, @PathVariable
			(value = "emailId") String emailId, @PathVariable
			(value = "userInput") String userInput, @ModelAttribute Captcha captcha) {
		return new ResponseEntity<>(captchaService.getCaptchaBasedOnUserInput(gameId, emailId, userInput, captcha), HttpStatus.ACCEPTED);
	}
}
