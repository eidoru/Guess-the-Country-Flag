package com.spring.backend.repositories;

import org.springframework.data.repository.CrudRepository;

import com.spring.backend.models.User;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
