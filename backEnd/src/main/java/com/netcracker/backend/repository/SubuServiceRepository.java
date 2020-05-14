package com.netcracker.backend.repository;

import com.netcracker.backend.entity.SubuService;
import com.netcracker.backend.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;


import java.util.List;

public interface SubuServiceRepository extends PagingAndSortingRepository<SubuService, Long> {

    Page<SubuService> findAll(Pageable pageable);

    List<SubuService> findSubuServiceByUser(User user, Pageable pageable);

    SubuService findSubuServiceById(Long id);





}
