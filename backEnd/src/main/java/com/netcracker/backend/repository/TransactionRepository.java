package com.netcracker.backend.repository;

import com.netcracker.backend.entity.Transaction;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface TransactionRepository extends PagingAndSortingRepository<Transaction, Long> {

    List<Transaction> findTransactionsBySenderAndReceiver(Long senderId,Long receiverId);


}
