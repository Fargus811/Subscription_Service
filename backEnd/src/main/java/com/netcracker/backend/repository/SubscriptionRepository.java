package com.netcracker.backend.repository;

import com.netcracker.backend.entity.Subscription;
import com.netcracker.backend.entity.SubuService;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface SubscriptionRepository extends PagingAndSortingRepository<Subscription, Long> {

    List<Subscription> findSubscriptionsByUser(Long id);

    Optional<Subscription> findById(Long id);

    List<Subscription> findAllBySubuService(Long id);

    List<Subscription> findAll();

}
