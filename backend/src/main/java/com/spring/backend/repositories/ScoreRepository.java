package com.spring.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

import com.spring.backend.models.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {
    @NonNull
    List<Score> findTop10ByContinentOrderByScoreDesc(String continent);
}
