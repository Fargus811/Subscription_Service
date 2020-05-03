package com.netcracker.backend.service;

import com.netcracker.backend.entity.Wallet;
import com.netcracker.backend.exception.TransactionException;
import com.netcracker.backend.repository.UserRepository;
import com.netcracker.backend.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WalletService {

    @Autowired
    private WalletRepository walletRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    TransactionService transactionService;

    public List<Wallet> findWalletsByUser(Long id) {
        return walletRepository.findWalletsByUser(id);
    }

    public void addFunds(Long id, Double amount) {
        transactionService.createTransaction(null, id, amount);
        Wallet walletDB = walletRepository.findById(id).get();
        walletDB.setBalance(walletDB.getBalance() + amount);
        walletRepository.save(walletDB);
    }

    public void addWallet(Wallet wallet, Long id) {
        wallet.setUser(userRepository.findUserById(id));
        walletRepository.save(wallet);
    }

    public double findAllUserCash(Long id) {
        double userCash = 0;
        for (Wallet wallet : walletRepository.findWalletsByUser(id)) {
            userCash += wallet.getBalance();
        }
        return userCash;
    }

    public void transferFunds(Long senderWalletId, Long receiverWalletId, Double amount) {
        Wallet senderWallet = walletRepository.findById(senderWalletId).get();
        if (senderWallet.getBalance() < amount) {
            throw new TransactionException("Not enough money on the wallet");
        }
        transactionService.createTransaction(senderWalletId, receiverWalletId, amount);
        senderWallet.setBalance(senderWallet.getBalance() - amount);
        walletRepository.save(senderWallet);
    }

}

