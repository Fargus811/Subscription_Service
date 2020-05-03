package com.netcracker.backend.controller;

import com.netcracker.backend.entity.Wallet;
import com.netcracker.backend.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WalletController {

    @Autowired
    private WalletService walletService;

    @GetMapping("/user/wallets/{userId}")
    public List<Wallet> findWalletsByUser(@PathVariable Long userId) {
        return walletService.findWalletsByUser(userId);
    }

    @GetMapping("/personal/mywallet/{walletId}/addFunds/{amount}")
    public void addFunds(@PathVariable Long walletId, @PathVariable Double amount) {
        walletService.addFunds(walletId, amount);
    }

    @PostMapping("/personal/mywallet/{userId}/add")
    public void addWallet(@PathVariable Long userId, @RequestBody Wallet wallet) {
        walletService.addWallet(wallet, userId);
    }

    @GetMapping("/personal/profile/{userId}")
    public double findAllUserCash(@PathVariable Long userId) {
        double userCash = walletService.findAllUserCash(userId);
        return userCash;
    }
}
