package com.example.flipkartgame.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class CaptchList implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private List<Captcha> captchList = new ArrayList<Captcha>();

	public List<Captcha> getCaptchList() {
		return captchList;
	}

	public void setCaptchList(List<Captcha> captchList) {
		this.captchList = captchList;
	} 
}
