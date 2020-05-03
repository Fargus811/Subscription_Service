package com.netcracker.backend.service;

import com.netcracker.backend.entity.Subscription;
import com.netcracker.backend.entity.Wallet;
import com.netcracker.backend.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public List<Subscription> findSubscriptionByUser(Long id) {
        return subscriptionRepository.findSubscriptionsByUser(id);
    }

    public void unsubscribe(Long id) {
        Subscription subscriptionDB = subscriptionRepository.findById(id).get();
        delete(subscriptionDB);
        if (isNotPaidForToday(subscriptionDB)) {
            payForDay(subscriptionDB);
        }
    }

    public void delete(Subscription subscription){
        subscription.setStatus(false);
        subscriptionRepository.save(subscription);
    }

    public void payForDay(Subscription subscriptionDB) {
        Wallet companyWallet = getCompanyWallet(subscriptionDB);
        double dailyPayment = subuServiceService.calculateDailyPayment(subscriptionDB.getSubuService());
        walletService.transferFunds(subscriptionDB.getWallet().getId(), companyWallet.getId(), dailyPayment);
    }

    public List<Subscription> findAll() {
        return subscriptionRepository.findAll();
    }

    private Wallet getCompanyWallet(Subscription subscriptionDB) {
        Long companyUserId = subscriptionDB.getSubuService().getUser().getId();
        List<Wallet> companyWallets = walletService.findWalletsByUser(companyUserId);
        return companyWallets.get(0);
    }

    private boolean isNotPaidForToday(Subscription subscriptionDB) {
        return subscriptionDB.getLastPaidDate().before(new Date());
    }

    public List<Subscription> findAllBySubuService(Long id) {
        return subscriptionRepository.findAllBySubuService(id);
    }


}
