package com.netcracker.backend.repository;

import com.netcracker.backend.entity.SubuService;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface SubuServiceRepository extends PagingAndSortingRepository<SubuService,Long> {

    public List <SubuService> findAll();

    public List<SubuService> findBaseServiceByUser(Long id);


}
