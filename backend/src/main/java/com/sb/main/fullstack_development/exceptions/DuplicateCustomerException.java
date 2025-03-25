package com.sb.main.fullstack_development.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT , reason = "This email is already taken")
public class DuplicateCustomerException extends RuntimeException{

    public DuplicateCustomerException(String message){
        super(message);
    }
}
