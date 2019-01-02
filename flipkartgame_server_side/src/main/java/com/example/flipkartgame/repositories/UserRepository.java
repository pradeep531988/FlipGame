package com.example.flipkartgame.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.flipkartgame.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	public List<User> findByEmail(String userName);
}
