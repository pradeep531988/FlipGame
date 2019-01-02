package com.example.flipkartgame.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.flipkartgame.model.Report;

@Repository
public interface ReportsRepository extends JpaRepository<Report, Integer> {

	List<Report> findByUserEmailId(String emailId);

}