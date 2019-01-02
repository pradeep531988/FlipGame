package com.example.flipkartgame.service;

import com.example.flipkartgame.model.Captcha;
import com.example.flipkartgame.model.User;

public interface ICaptchaService {
	
	public Captcha getCaptcha(Byte level, User user);

	public Captcha getCaptchaBasedOnUserInput(String gameId, String emailId, String userInput, Captcha captcha);

}
