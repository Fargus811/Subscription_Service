package com.netcracker.backend.controller;

import com.netcracker.backend.entity.SubuService;
import com.netcracker.backend.service.SubuServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/service")
public class SubuServiceController {

    @Autowired
    public SubuServiceService subuServiceService;

    @GetMapping("/all")
    public Page<SubuService> findAll(@RequestParam(defaultValue = "0") int page) {
        return subuServiceService.findAll(page);
    }

    @GetMapping("/{userId}")
    public List<SubuService> findSubuServiceByUser(@PathVariable Long userId, @RequestParam(defaultValue = "0") int page) {
        return subuServiceService.findSubuServiceByUser(userId, page);
    }


    @PostMapping("/{userId}/add")
    public void createSubuService(@PathVariable Long userId, @RequestBody SubuService subuService) {
        subuServiceService.createSubuService(userId, subuService);
    }

    ;
}
