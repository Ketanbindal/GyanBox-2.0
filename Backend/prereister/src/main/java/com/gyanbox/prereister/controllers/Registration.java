package com.gyanbox.prereister.controllers;


import com.gyanbox.prereister.Models.User;
import com.gyanbox.prereister.controllers.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Registration {


//    @Autowired
//    User user;

    @Autowired
    UserRepository userRepository;
    @PostMapping("/preregister")
    public String preregister(@RequestBody User user){

        userRepository.save(user);
        return "User preregistered successfully";
    }

}
