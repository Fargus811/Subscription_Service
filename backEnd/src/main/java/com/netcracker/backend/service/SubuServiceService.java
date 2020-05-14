package com.netcracker.backend.service;

import com.netcracker.backend.entity.SubuService;
import com.netcracker.backend.repository.SubuServiceRepository;
import com.netcracker.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.YearMonth;
import java.util.List;

@Service
public class SubuServiceService {

    @Autowired
    private SubuServiceRepository subuServiceRepository;

    @Autowired
    private UserRepository userRepository;

    public Page<SubuService> findAll(int page) {
        return subuServiceRepository.findAll(PageRequest.of(page, 10));
    }

    public List<SubuService> findSubuServiceByUser(Long id, int page) {
        return subuServiceRepository.findSubuServiceByUser(userRepository.findUserById(id), PageRequest.of(page, 10));
    }

    public void createSubuService(Long userId, SubuService subuService) {
        subuService.setUser(userRepository.findUserById(userId));
        subuServiceRepository.save(subuService);
    }

    public SubuService findSubuServiceById(Long serviceId) {
        return subuServiceRepository.findSubuServiceById(serviceId);
    }

}
