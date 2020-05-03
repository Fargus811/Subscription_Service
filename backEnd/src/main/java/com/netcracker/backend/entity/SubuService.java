package com.netcracker.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "su_services")
@Data
@NoArgsConstructor
public class SubuService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @OneToOne(fetch = FetchType.EAGER )
    @JoinColumn(name = "company_id", referencedColumnName = "id")
    private User user;

    @Column(name = "cost",  nullable = false)
    private float cost;

    @Column(name = "description", nullable = false)
    private String description;



}
