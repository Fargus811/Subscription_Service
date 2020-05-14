package com.netcracker.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "su_transactions")
@Data
@NoArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
    @OneToOne(fetch = FetchType.EAGER )
    @JoinColumn(name = "receiver", referencedColumnName = "id")
    private Wallet receiver;
    @OneToOne(fetch = FetchType.EAGER )
    @JoinColumn(name = "sender", referencedColumnName = "id")
    private Wallet sender;
    @Column(name = "amount")
    private Double amount;
    @Column(name = "date")
    private Date date;
}
