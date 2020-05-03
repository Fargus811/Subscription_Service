package com.netcracker.backend.controller;


import com.netcracker.backend.entity.Subscription;
import com.netcracker.backend.entity.User;
import com.netcracker.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SubscriptionController {

    @Autowired
    public SubscriptionService subscriptionService;

    @GetMapping("/user/subscriptions/{userId}")
    public List<Subscription> findSubscriptionByUser(@PathVariable Long userId) {
        return subscriptionService.findSubscriptionByUser(userId);
    }

    @PostMapping("/user/subscriptions/{subscriptionId}")
    public void deleteSubscription(@PathVariable Long subscriptionId) {
        subscriptionService.unsubscribe(subscriptionId);
    }

    @GetMapping("/service/{serviceId}/count")
    public Integer сountAllSubscribes(@PathVariable Long serviceId) {
        return subscriptionService.findAllBySubuService(serviceId).size();
    }

    @PostMapping("/test")
    public void test(@RequestBody User user) {
        System.out.println(user);
    }
}
