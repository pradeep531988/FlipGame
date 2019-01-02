package com.example.flipkartgame.constants;

public class Response<T> {

	private String errorMessage;
	private T responseObject;
	
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	public T getResponseObject() {
		return responseObject;
	}
	public void setResponseObject(T responseObject) {
		this.responseObject = responseObject;
	}
	
	
	
}
