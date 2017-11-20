package com.kgoos.app.controller;

import com.kgoos.app.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.jws.WebParam;
import java.util.ArrayList;
import java.util.List;

@Controller
public class IndexController {

    @RequestMapping("/")
    public String index() {

        return "index";
    }

    @RequestMapping("/demo")
    public String demo(Model model) {
        User single = new User("zhangsan", "123456");

        List<User> user = new ArrayList<User>();
        User u1 = new User("u1", "123001");
        User u2 = new User("u2", "123002");
        User u3 = new User("u3", "123003");
        User u4 = new User("u4", "123004");
        user.add(u1);
        user.add(u2);
        user.add(u3);
        user.add(u4);

        //将数据放入模型中
        model.addAttribute("singlePerson", single);
        model.addAttribute("people", user);
        return "demo";
    }


}
