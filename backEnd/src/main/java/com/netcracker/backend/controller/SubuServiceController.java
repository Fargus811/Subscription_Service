package com.netcracker.backend.controller;

import com.netcracker.backend.entity.SubuService;
import com.netcracker.backend.service.SubuServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SubuServiceController {

    @Autowired
    public SubuServiceService subuServiceService;

    @GetMapping("/services")
    public List<SubuService> findAll() {
        return subuServiceService.findAll();
    }

    @GetMapping("/service/{userId}")
    public List<SubuService> findBaseServiceByUser(@PathVariable Long userId) {
        return subuServiceService.findBaseServiceByUser(userId);
    }
}
