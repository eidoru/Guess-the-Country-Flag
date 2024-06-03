package com.spring.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.backend.models.Response;
import com.spring.backend.models.User;
import com.spring.backend.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Response<User> signin(User user) {
        User foundUser = userRepository.findByUsername(user.getUsername());
        return new Response<User>(foundUser != null && foundUser.getPassword().equals(user.getPassword()), foundUser);
    }

    public Response<User> signup(User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        return new Response<User>(existingUser == null && userRepository.save(user) != null);
    }
}
