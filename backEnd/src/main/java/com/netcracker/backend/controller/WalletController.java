package com.netcracker.backend.controller;

import com.netcracker.backend.entity.Wallet;
import com.netcracker.backend.service.UserService;
import com.netcracker.backend.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class WalletController {

    @Autowired
    private WalletService walletService;

    @GetMapping("/byUser/{userId}")
    public List<Wallet> findWalletsByUser(@PathVariable Long userId,@RequestParam(defaultValue = "0") int page) {
        return walletService.findWalletsByUser(userId,page);
    }

    @GetMapping("/wallet/{walletId}/addFunds/{amount}")
    public void addFunds(@PathVariable Long walletId, @PathVariable Double amount) {
        walletService.addFunds(walletId, amount);
    }

    @PostMapping("/wallet/{userId}/add")
    public void addWallet(@PathVariable Long userId, @RequestBody Wallet wallet) {
        walletService.addWallet(wallet, userId);
    }
}
