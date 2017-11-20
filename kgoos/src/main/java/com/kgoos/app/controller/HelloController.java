package com.kgoos.app.controller;

import com.kgoos.app.utils.AuthorSettings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @Value("${app.author}")
    private String appAuthor;       //值来源于配置文件
    @Value("${app.createtime}")
    private String appCreateTime;

    @Autowired
    private AuthorSettings authorSettings;

    @RequestMapping("/hello")
    public String index() {
        return "Hello Spring Boot! ,app create time:" + appCreateTime + "author name:" + authorSettings.getName() + ",author age:" + authorSettings.getAge();
    }

}
