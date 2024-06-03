package com.spring.backend.models;

public class Response<T> {
    private boolean status;
    private T object;
    private Iterable<T> iterable;

    public Response() {
    }

    public Response(boolean status) {
        this.status = status;
    }

    public Response(boolean status, T object) {
        this.status = status;
        this.object = object;
    }

    public Response(boolean status, Iterable<T> iterable) {
        this.status = status;
        this.iterable = iterable;
    }

    public boolean getStatus() {
        return status;
    }

    public T getObject() {
        return object;
    }

    public Iterable<T> getIterable() {
        return iterable;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public void setObject(T object) {
        this.object = object;
    }

    public void setIterable(Iterable<T> iterable) {
        this.iterable = iterable;
    }
}
