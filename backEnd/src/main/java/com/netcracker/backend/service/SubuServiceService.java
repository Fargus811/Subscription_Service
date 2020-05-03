package com.netcracker.backend.service;

import com.netcracker.backend.entity.SubuService;
import com.netcracker.backend.repository.SubuServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.YearMonth;
import java.util.List;

@Service
public class SubuServiceService {

    @Autowired
    private SubuServiceRepository subuServiceRepository;

    public List<SubuService> findAll() {
        return subuServiceRepository.findAll();
    }

    public List<SubuService> findBaseServiceByUser(Long id) {
        return subuServiceRepository.findBaseServiceByUser(id);
    }

    public double calculateDailyPayment(SubuService subuService) {
        double monthlyPayment = subuService.getCost();
        int daysInMonth = YearMonth.now().lengthOfMonth();
        return monthlyPayment / daysInMonth;

    }
}
