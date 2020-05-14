package com.netcracker.backend.service;

import com.netcracker.backend.entity.Subscription;
import com.netcracker.backend.entity.Wallet;
import com.netcracker.backend.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Service
public class SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    private WalletService walletService;

    @Autowired
    private SubuServiceService subuServiceService;

    @Autowired
    private UserService userService;

    @Autowired
    private TransactionService transactionService;

    public List<Subscription> findSubscriptionByUser(Long id, int page) {
        return subscriptionRepository.findSubscriptionsByUser(userService.findUserById(id), PageRequest.of(page, 10));
    }

    public void unsubscribe(Long id) {
        Subscription subscriptionDB = subscriptionRepository.findById(id).get();
        unsubscribeByUser(subscriptionDB);
        if (isNotPaidForToday(subscriptionDB)) {
            payForDay(subscriptionDB);
        }
    }

    public void unsubscribeByUser(Subscription subscription) {
        subscription.setStatus(false);
        subscriptionRepository.save(subscription);
    }

    public boolean payForDay(Subscription subscriptionDB) {
        Wallet companyWallet = getCompanyWallet(subscriptionDB);
        double cost = subscriptionDB.getSubuService().getCost();
        boolean transfered = walletService.transferFunds(subscriptionDB.getWallet().getId(),
                companyWallet.getId(), cost);
        if (transfered) {
            subscriptionDB.setLastPaidDate(new Date());
            subscriptionRepository.save(subscriptionDB);
        }
        return transfered;
    }

    public List<Subscription> findAll() {
        return subscriptionRepository.findAll();
    }

    private Wallet getCompanyWallet(Subscription subscriptionDB) {
         return subscriptionDB.getSubuService().getWallet();
    }

    private boolean isNotPaidForToday(Subscription subscriptionDB) {
        return subscriptionDB.getLastPaidDate().before(new Date());
    }

    public BigInteger countBySubuService(Long id) {
        return subscriptionRepository.countBySubuService(subuServiceService.findSubuServiceById(id));
    }


    public boolean subscribe(Long userId, Long serviceId, Long walletId) {
        Subscription subscription = new Subscription();
        subscription.setSubuService(subuServiceService.findSubuServiceById(serviceId));
        subscription.setUser(userService.findUserById(userId));
        subscription.setWallet(walletService.findWalletById(walletId));
        return payForDay(subscription);
    }
}
