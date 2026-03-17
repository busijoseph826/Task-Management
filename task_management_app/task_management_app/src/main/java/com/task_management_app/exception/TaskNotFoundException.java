package com.task_management_app.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;

public class TaskNotFoundException extends RuntimeException {

    public TaskNotFoundException(String message){
        super(message);
    }
}
