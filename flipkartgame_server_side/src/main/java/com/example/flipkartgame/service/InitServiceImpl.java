package com.example.flipkartgame.service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.flipkartgame.model.Captcha;
import com.example.flipkartgame.repositories.CaptchaRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class InitServiceImpl implements InitService {

	@Autowired
	private CaptchaRepository captchaRepository;

	@Override
	public String loadDataToDb() {
		long count = captchaRepository.count();
		if ( count == 0) {
			ObjectMapper mapper = new ObjectMapper();
			try {
				ClassLoader classLoader = new InitServiceImpl().getClass().getClassLoader();
				List<Captcha> captchList = mapper
						.readValue(new File(classLoader.getResource("captcha.json").getFile()), 
								new TypeReference<List<Captcha>>(){});
				List<Captcha> captchSavedList = captchaRepository.saveAll(captchList);
				System.out.println(captchSavedList);
			}
			catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return "failedTo Load";
			}
		}
		return "success";
	}

}
