package com.kgoos.app.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.kgoos.app.entity.User;
import com.kgoos.app.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private IUserService userService;

    @RequestMapping("/user/get")
    public String getUserByPasswd() {
        User user = userService.findUserByPassword("123456").get(0);
        System.out.print(user);
        return user.toString();
    }

    @RequestMapping("/user/all")
    public String getAllUser() {

        return userService.findAllUser().toString();
    }

    @RequestMapping("/user/add")
    public String addUser(){
        User user = new User();
        user.setName("wangwu");
        user.setPassword("888888");
        user.setEmail("demo@sina.com");
        user.setTel("13900002222");

        userService.addUser(user);
        return user.toString();
    }


}
