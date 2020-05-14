package com.netcracker.backend.controller;

import com.netcracker.backend.entity.User;
import com.netcracker.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> findAll(@RequestParam(defaultValue = "0") int page) {

        return userService.findAll(page);
    }

    @GetMapping("/user/{id}")
    public User findById(@PathVariable Long id) {
        return userService.findUserById(id);
    }

    @PostMapping("/registration")
    public HttpStatus createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping ("/login")
    public HttpStatus login(@RequestParam String email, String password) {
        return userService.login(email, password);
    }


}
