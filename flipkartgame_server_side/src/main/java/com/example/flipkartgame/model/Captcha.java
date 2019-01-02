  package com.example.flipkartgame.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "Captcha")
public class Captcha implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 9019577982997367308L;

	@Id
	@Column(name = "id")
	private byte id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "difficulty")
	private byte difficulty;
	
	@Column(name = "answer")
	private String answer;

	@Transient
	private  Integer counter = 1;
	
	public Integer getCounter() {
		return counter;
	}

	public void setCounter(Integer counter) {
		this.counter = counter;
	}

	public byte getDifficulty() {
		return difficulty;
	}

	public void setDifficulty(byte difficulty) {
		this.difficulty = difficulty;
	}
	 
	public byte getId() {
		return id;
	}

	public void setId(byte id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String imageName) {
		this.name = imageName;
	}


	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

}
