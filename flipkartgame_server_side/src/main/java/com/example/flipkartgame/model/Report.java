package com.example.flipkartgame.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "GameReport")
public class Report implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id @GeneratedValue
	@Column(name = "id")
	private Integer id;
	
	@Column(name="gameId")
	private String gameId;
	
	@Column(name="userEmailId")
	private String userEmailId;
	
	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	private Boolean isValidAnswer;
	

	@Column(nullable = false, updatable = false)
	@CreationTimestamp
	private Date created_at;

	
	public Boolean getIsValidAnswer() {
		return isValidAnswer;
	}

	public void setIsValidAnswer(Boolean isValidAnswer) {
		this.isValidAnswer = isValidAnswer;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getGameId() {
		return gameId;
	}

	public void setGameId(String gameId) {
		this.gameId = gameId;
	}

	public String getUserEmailId() {
		return userEmailId;
	}

	public void setUserEmailId(String userEmailId) {
		this.userEmailId = userEmailId;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getCorrectAnswer() {
		return correctAnswer;
	}

	public void setCorrectAnswer(String correctAnswer) {
		this.correctAnswer = correctAnswer;
	}

	public String getUserAnswer() {
		return userAnswer;
	}

	public void setUserAnswer(String userAnswer) {
		this.userAnswer = userAnswer;
	}

	@Column(name="question")
	private String question;
	
	@Column(name="correctAnswer")
	private String correctAnswer;
	
	@Column(name="userAnswer")
	private String userAnswer;
	

}
