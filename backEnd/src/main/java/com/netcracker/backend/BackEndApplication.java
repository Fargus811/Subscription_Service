package com.netcracker.backend;

import com.netcracker.backend.entity.Role;
import com.netcracker.backend.entity.User;
import com.netcracker.backend.repository.RoleRepository;
import com.netcracker.backend.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.GetMapping;
@EnableScheduling
@SpringBootApplication
public class BackEndApplication {

    public static void main(String[] args) {

        ConfigurableApplicationContext context = SpringApplication.run(BackEndApplication.class, args);
        RoleRepository roleRepository = context.getBean(RoleRepository.class);
        UserRepository userRepository = context.getBean(UserRepository.class);


    //    Role role = new Role();
    //    role.setName("Admin");
      //  Role savedRole = roleRepository.save(role);
    //    System.out.println(role);

   //     Role role1 = new Role();
    //    role1.setId(1l);

    //    User user = new User();
    //    user.setName("Danik");
    //    user.setEmail("ggas@mail.ru");
    //    user.setRole(role1);
   //     userRepository.save(user);


   //     Iterable<User> users = userRepository.findAll();
  //      System.out.println(users);
    }

}
