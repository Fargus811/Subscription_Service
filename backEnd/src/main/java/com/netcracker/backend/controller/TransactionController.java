package com.netcracker.backend.controller;

import com.netcracker.backend.entity.Transaction;
import com.netcracker.backend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/user/wallets/{walletId}")
    public List<Transaction> findTransactionsBySenderAndReceiver(@PathVariable Long walletId) {
        return transactionService.findTransactionsBySenderAndReceiver(walletId);
    }
}
