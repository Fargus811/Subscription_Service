package com.netcracker.backend.repository;

import com.netcracker.backend.entity.User;
import com.netcracker.backend.entity.Wallet;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface WalletRepository extends PagingAndSortingRepository<Wallet,Long> {

    List<Wallet> findWalletsByUser(User user, Pageable pageable);

    Wallet findWalletsById(Long id);

}
