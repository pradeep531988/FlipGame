package com.example.flipkartgame.service;

import java.util.List;

import com.example.flipkartgame.model.Report;

public interface IReportService {

	public List<Report> generateReport(String emailId);

}
