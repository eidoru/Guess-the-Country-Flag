package com.spring.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.backend.models.Response;
import com.spring.backend.models.Score;
import com.spring.backend.services.ScoreService;

@RestController
public class ScoreController {
    @Autowired
    private ScoreService scoreService;

    @PostMapping(value = "/api/scores")
    public Response<Score> setScore(@RequestBody Score score) {
        return scoreService.setScore(score);
    }

    @GetMapping(value = "/api/scores")
    public Response<Score> getScores(@RequestParam String continent) {
        return scoreService.getScores(continent);
    }
}
