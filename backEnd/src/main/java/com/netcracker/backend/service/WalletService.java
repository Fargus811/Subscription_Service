package com.netcracker.backend.service;

import com.netcracker.backend.entity.Wallet;
import com.netcracker.backend.repository.UserRepository;
import com.netcracker.backend.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WalletService {

    @Autowired
    private WalletRepository walletRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;
    @Autowired
    TransactionService transactionService;

    public List<Wallet> findWalletsByUser(Long id, int page) {
        return walletRepository.findWalletsByUser(userService.findUserById(id), PageRequest.of(page, 10));
    }

    public void addFunds(Long id, Double amount) {
        transactionService.createTransaction(null, id, amount);
        Wallet walletDB = walletRepository.findById(id).get();
        walletDB.setBalance(walletDB.getBalance() + amount);
        walletRepository.save(walletDB);
    }

    public void addWallet(Wallet wallet, Long id) {
        wallet.setCurrency("$");
        wallet.setUser(userRepository.findUserById(id));
        walletRepository.save(wallet);
    }

    public boolean transferFunds(Long senderWalletId, Long receiverWalletId, Double amount) {
        Wallet senderWallet = walletRepository.findById(senderWalletId).get();
        boolean transfered;
        if (senderWallet.getBalance() < amount) {
            transfered = false;
        } else {
            transactionService.createTransaction(senderWalletId, receiverWalletId, amount);
            senderWallet.setBalance(senderWallet.getBalance() - amount);
            walletRepository.save(senderWallet);
            transfered = true;
        }
        return transfered;
    }

    public Wallet findWalletById(Long id) {
        return walletRepository.findWalletsById(id);
    }

}

