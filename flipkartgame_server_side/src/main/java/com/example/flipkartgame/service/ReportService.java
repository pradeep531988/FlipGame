package com.example.flipkartgame.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.flipkartgame.model.Report;
import com.example.flipkartgame.repositories.ReportsRepository;
import com.example.flipkartgame.util.ReportsDateComparator;

@Service
public class ReportService implements IReportService {
	
	@Autowired
	private ReportsRepository reportsRepository;
	
	public List<Report> generateReport(String emailId){
		List<Report> report = reportsRepository.findByUserEmailId(emailId);
		Collections.sort(report, new ReportsDateComparator());
		return report;
	}

}
