package com.netcracker.backend.repository;

import com.netcracker.backend.entity.Role;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface RoleRepository extends PagingAndSortingRepository<Role,Long> {
}
