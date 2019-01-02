package com.example.flipkartgame.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.flipkartgame.service.InitService;

@RestController
public class InitController {

	@Autowired
	private InitService initService;
	
	@GetMapping("/loadJsonToDB")
	public String loadJsonData() {
		return initService.loadDataToDb();
	}
}
