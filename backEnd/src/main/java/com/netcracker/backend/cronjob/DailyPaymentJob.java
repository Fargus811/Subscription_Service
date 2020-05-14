package com.netcracker.backend.cronjob;

import com.netcracker.backend.entity.Subscription;
import com.netcracker.backend.exception.TransactionException;
import com.netcracker.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DailyPaymentJob {

    @Autowired
    private SubscriptionService subscriptionService;

    @Scheduled( cron = "0 0 0 * * ?") //if^else
    public void work() {
        List<Subscription> subscriptions = subscriptionService.findAll();
        for (Subscription subscription : subscriptions) {
            try {
                subscriptionService.payForDay(subscription);
            } catch (TransactionException e) {
                subscriptionService.unsubscribeByUser(subscription);
            }
        }
    }
}
