package com.example.flipkartgame.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.flipkartgame.model.User;

public interface IUserService {

 public	User registerUser(User user);
 
 public Boolean isValidUser(User user);
}
