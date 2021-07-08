package com.scrumconnect.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class UserAlreadyExistException extends RuntimeException {

	private static final long serialVersionUID = -2329023039302095681L;

	public UserAlreadyExistException(String message) {
		super(message); 
	}
}
