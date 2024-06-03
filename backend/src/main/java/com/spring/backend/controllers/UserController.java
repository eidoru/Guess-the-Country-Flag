package com.spring.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.backend.models.Response;
import com.spring.backend.models.User;
import com.spring.backend.services.UserService;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    
    @PostMapping(value = "/api/signin")
    public Response<User> signin(@RequestBody User user) {
        return userService.signin(user);
    }

    @PostMapping(value ="/api/signup", consumes = "application/json")
    public Response<User> signup(@RequestBody User user) {
        return userService.signup(user);
    }
}
