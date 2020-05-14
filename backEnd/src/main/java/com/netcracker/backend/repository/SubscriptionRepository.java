package com.netcracker.backend.repository;

import com.netcracker.backend.entity.Subscription;
import com.netcracker.backend.entity.SubuService;
import com.netcracker.backend.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.math.BigInteger;
import java.util.List;


public interface SubscriptionRepository extends PagingAndSortingRepository<Subscription, Long> {

    List<Subscription> findSubscriptionsByUser(User user, Pageable pageable);

    Subscription findSubscriptionById(Long id);

    BigInteger countBySubuService(SubuService subuService);

    List<Subscription> findAll();


}
