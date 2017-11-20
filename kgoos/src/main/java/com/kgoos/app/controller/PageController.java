package com.kgoos.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/page")
public class PageController {

    @RequestMapping("/login")
    public String toLogin() {
        return "page/login";
    }

    @RequestMapping("/register")
    public String toRegister() {
        return "page/register";
    }


}
