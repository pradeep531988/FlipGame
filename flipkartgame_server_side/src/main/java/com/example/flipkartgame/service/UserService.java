package com.example.flipkartgame.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.flipkartgame.model.User;
import com.example.flipkartgame.repositories.UserRepository;

@Service
public class UserService implements IUserService{

	@Autowired
	private UserRepository userRepository;

	@Override
	public User registerUser(User user) {
		// TODO Auto-generated method stub
		List<User> userNameList = userRepository.findByEmail(user.getEmail());
		if (userNameList.size() == 0) {
			User userSaved = userRepository.save(user);
			return userSaved;
		} else {
			return null;
		}


	}

	@Override
	public Boolean isValidUser(User user) {
		List<User> userNameList = userRepository.findByEmail(user.getEmail());
		if (userNameList.size() > 0) {
			return (userNameList.get(0).getEmail().equals(user.getEmail())
					&& userNameList.get(0).getPassword().equals(user.getPassword())
					);
		}
		return false;
	}

}
