package com.spring.backend.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="scores")
public class Score {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name="continent")
    private String continent;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user", referencedColumnName = "username")
    private User user;

    @Column(name="accuracy")
    private Float accuracy;

    @Column(name="time")
    private Integer time;

    @Column(name="score")
    private Integer score;

    public Score() {}

    public Score(String continent, User user, Float accuracy, Integer time, Integer score) {
        this.continent = continent;
        this.user = user;
        this.accuracy = accuracy;
        this.time = time;
        this.score = score;
    }

    public Long getId() {
        return id;
    }

    public String getContinent() {
        return continent;
    }

    public Integer getScore() {
        return score;
    }

    public User getUser() {
        return user;
    }

    public Float getAccuracy() {
        return accuracy;
    }

    public Integer getTime() {
        return time;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setAccuracy(Float accuracy) {
        this.accuracy = accuracy;
    }

    public void setTime(Integer time) {
        this.time = time;
    }
}
