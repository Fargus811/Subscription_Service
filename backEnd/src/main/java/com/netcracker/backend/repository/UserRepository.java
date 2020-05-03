package com.netcracker.backend.repository;

import com.netcracker.backend.entity.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserRepository extends PagingAndSortingRepository<User,Long> {

    List<User> findUserByName(String name);

    List<User> findAll();

    User findUserById(Long id);
}
