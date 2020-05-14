package com.netcracker.backend.service;

import com.netcracker.backend.entity.User;
import com.netcracker.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {


    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    public List<User> findAll(int page) {
        Page<User> allUsers = userRepository.findAll(PageRequest.of(page, 10));
        return allUsers.getContent();
    }

    public User findUserById(Long id) {
        return userRepository.findUserById(id);
    }

    public HttpStatus createUser(User user) {
        if (userRepository.findUserByEmail((user.getEmail())) == null) {
            userRepository.save(user);
            return HttpStatus.CREATED;
        } else {
            return HttpStatus.CONFLICT;

        }
    }
//return user
    public HttpStatus login(String email, String password) {
        if (userRepository.findUserByEmail(email) != null) {
            String userPassword = userRepository.findUserByEmail(email).getPassword();
            if (passwordEncoder.matches(password,userPassword)) {
                return HttpStatus.OK;
            } else {
                return HttpStatus.UNAUTHORIZED;
            }
        }else {
            return HttpStatus.UNAUTHORIZED;
        }
    }

}
