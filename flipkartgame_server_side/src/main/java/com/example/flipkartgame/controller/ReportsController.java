package com.example.flipkartgame.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.flipkartgame.model.Report;
import com.example.flipkartgame.service.IReportService;

@RestController
@CrossOrigin(origins = "*")
public class ReportsController {

	@Autowired
	private IReportService reportService;
	
	@GetMapping(path= "/api/report/{emailId}")
	public @ResponseBody ResponseEntity<List<Report>> loadJsonData(@PathVariable
			(value = "emailId") String emailId) {
		return new ResponseEntity<>(reportService.generateReport(emailId), HttpStatus.ACCEPTED);
	}
	
	
}
