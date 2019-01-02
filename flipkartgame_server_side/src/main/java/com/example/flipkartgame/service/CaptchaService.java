package com.example.flipkartgame.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.flipkartgame.model.Captcha;
import com.example.flipkartgame.model.Report;
import com.example.flipkartgame.model.User;
import com.example.flipkartgame.repositories.CaptchaRepository;
import com.example.flipkartgame.repositories.ReportsRepository;

@Service
public class CaptchaService implements ICaptchaService{

	@Autowired
	private CaptchaRepository captchaRepository;

	@Autowired
	private ReportsRepository reportsRepository;
	
	private Captcha findRandomCaptchaBasedOnLevel(Byte level, Integer counter) {
		final List<Captcha> levelList = captchaRepository.findByDifficulty(level);
		if (levelList.size() >= 4 ) {
			final int min = 0;
			final int max = 4;
			final int random = new Random().nextInt((max - min) + 1) + min;
			Captcha randomCaptcha = levelList.get(random);
			randomCaptcha.setCounter(counter);
			return randomCaptcha;
		} else {
			return null;
		}
	}
	
	@Override
	public Captcha getCaptcha(Byte level, User user) {
		return findRandomCaptchaBasedOnLevel(level, 1);
	}

	@Override
	public Captcha getCaptchaBasedOnUserInput(String gameId, String emailId, String userInput, Captcha captcha) {
		Boolean isValidAnswer = userInput.toLowerCase().equals(captcha.getAnswer().toLowerCase());

		Report report = new Report();
		report.setQuestion(captcha.getName());
		report.setCorrectAnswer(captcha.getAnswer());
		report.setUserAnswer(userInput);
		report.setUserEmailId(emailId);
		report.setIsValidAnswer(isValidAnswer);
		report.setGameId(gameId);
		reportsRepository.save(report);
		
		Integer counter = captcha.getCounter() + 1;
		
		if ( counter > 5) {
			Captcha captchaDummy = new Captcha();
			captchaDummy.setCounter(counter);
			return captchaDummy;
		}
		
		//captcha.setCounter(counter);
		Byte level = captcha.getDifficulty();
		if (isValidAnswer) {
			if (level < 5) {
				level = (byte) (level + 1);
			}
		} else {
			level = (byte) (level - 1);
			if ( level == 0 || counter > 5) {
				Captcha captchaDummy = new Captcha();
				captchaDummy.setCounter(Integer.MAX_VALUE);
				return captchaDummy;
			}
		}
		return findRandomCaptchaBasedOnLevel(level, counter);
	}


}
