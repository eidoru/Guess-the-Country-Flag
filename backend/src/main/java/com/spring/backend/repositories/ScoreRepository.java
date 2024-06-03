package com.spring.backend.repositories;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.lang.NonNull;

import com.spring.backend.models.Score;

public interface ScoreRepository extends CrudRepository<Score, Long> {
    @NonNull
    List<Score> findAllByContinent(String continent);
}
