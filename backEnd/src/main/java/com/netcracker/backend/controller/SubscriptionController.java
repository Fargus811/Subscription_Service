package com.netcracker.backend.controller;


import com.netcracker.backend.entity.Subscription;
import com.netcracker.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionController {

    @Autowired
    public SubscriptionService subscriptionService;

    @GetMapping("/{userId}")
    public List<Subscription> findSubscriptionByUser(@PathVariable Long userId, @RequestParam(defaultValue = "0") int page) {
        return subscriptionService.findSubscriptionByUser(userId, page);
    }

    @PostMapping("/add")
    public ResponseEntity<String> subscribe(@RequestParam Long userId, Long serviceId, Long walletId) {
        if (subscriptionService.subscribe(userId, serviceId, walletId)) {
            return new ResponseEntity<>("OK", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("You don't have enough money on your wallet", HttpStatus.PAYMENT_REQUIRED);
        }

    }

    @PostMapping("/{subscriptionId}")
    public void unsubscribe(@PathVariable Long subscriptionId) {
        subscriptionService.unsubscribe(subscriptionId);
    }

    @GetMapping("/{serviceId}/count")
    public BigInteger сountAllSubscribes(@PathVariable Long serviceId) {
        return subscriptionService.countBySubuService(serviceId);
    }

}
