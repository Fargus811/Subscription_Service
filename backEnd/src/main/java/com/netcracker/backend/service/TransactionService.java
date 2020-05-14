package com.netcracker.backend.service;

import com.netcracker.backend.entity.Transaction;
import com.netcracker.backend.repository.TransactionRepository;
import com.netcracker.backend.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private WalletRepository walletRepository;

    public List<Transaction> findTransactionsBySenderAndReceiver(Long walletId) {
        return transactionRepository.findTransactionsBySenderAndReceiver(walletId, walletId );
    }

    public Transaction createTransaction(Long senderWalletId, Long receiverWalletId, Double amount) {
        Transaction transaction = new Transaction();
        transaction.setSender(walletRepository.findById(senderWalletId).get());
        transaction.setReceiver(walletRepository.findById(receiverWalletId).get());
        transaction.setAmount(amount);
        transaction.setDate(new Date());
        return transactionRepository.save(transaction);
    }
}
