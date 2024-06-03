package com.spring.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.backend.models.Response;
import com.spring.backend.models.Score;
import com.spring.backend.models.User;

import com.spring.backend.repositories.ScoreRepository;
import com.spring.backend.repositories.UserRepository;

@Service
public class ScoreService {
    @Autowired
    private ScoreRepository scoreRepository;
    
    @Autowired
    private UserRepository userRepository; // Add this line to inject the UserRepository
    
    public Response<Score> setScore(Score score) {
        User user = userRepository.findByUsername(score.getUser().getUsername());

        Score savedScore = new Score();
        savedScore.setContinent(score.getContinent());
        savedScore.setUser(user);
        savedScore.setAccuracy(score.getAccuracy());
        savedScore.setTime(score.getTime());
        savedScore.setScore(score.getScore());

        return new Response<Score>(scoreRepository.save(savedScore) != null);
    }

    public Response<Score> getScores(String continent) {
        return new Response<Score>(true, scoreRepository.findTop10ByContinentOrderByScoreDesc(continent));
    }

}
