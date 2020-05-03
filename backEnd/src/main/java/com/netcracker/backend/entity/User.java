package com.netcracker.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "su_users")
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "name", nullable = false, length = 20)
    private String name;

    @Column(name = "mail", nullable = false, length = 50)
    private String email;

    @ManyToOne(fetch = FetchType.EAGER )
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private Role role;

}
