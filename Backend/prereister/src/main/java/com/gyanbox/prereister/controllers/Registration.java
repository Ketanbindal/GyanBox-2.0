package com.gyanbox.prereister.controllers;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Registration {

    @PostMapping("/preregister")
    public String preregister(){

        return "Y";
    }

}
