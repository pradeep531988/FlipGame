package com.example.flipkartgame.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	@Id @GeneratedValue
	@Column(name = "id")
	private Integer id;
	
	@Column(name="userName")
	private String userName;
	
	@Column(name="password")
	private String password;
	
	
	@Column(name="email")
	private String email;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
