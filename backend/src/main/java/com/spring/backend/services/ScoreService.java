package com.spring.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.backend.models.Response;
import com.spring.backend.models.Score;
import com.spring.backend.repositories.ScoreRepository;

@Service
public class ScoreService {
    @Autowired
    private ScoreRepository scoreRepository;

    public Response<Score> getScores(String continent) {
        return new Response<Score>(true, scoreRepository.findTop10ByContinentOrderByScoreDesc(continent));
    }

    public Response<Score> setScore(Score score) {
        return new Response<Score>(scoreRepository.save(score) != null);
    }
}
