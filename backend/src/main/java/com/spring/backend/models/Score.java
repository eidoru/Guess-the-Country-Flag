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
    @JoinColumn(name = "user_id", referencedColumnName = "username")
    private User user;

    @Column(name="accuracy")
    private String accuracy;

    @Column(name="time")
    private Float time;

    @Column(name="score")
    private Float score;

    public Score() {}

    public Score(String continent, User user, String accuracy, Float time, Float score) {
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

    public Float getScore() {
        return score;
    }

    public User getUser() {
        return user;
    }

    public String getAccuracy() {
        return accuracy;
    }

    public Float getTime() {
        return time;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    public void setScore(Float score) {
        this.score = score;
    }

    public void setUsername(User user) {
        this.user = user;
    }

    public void setAccuracy(String accuracy) {
        this.accuracy = accuracy;
    }

    public void setTime(Float time) {
        this.time = time;
    }
}
