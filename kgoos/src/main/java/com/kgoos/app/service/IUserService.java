package com.kgoos.app.service;

import com.kgoos.app.entity.User;
import org.springframework.data.domain.Page;

import java.util.List;


public interface IUserService {

    List<User> findUserByPassword(String pass);

    List<User> findAllUser();

    boolean addUser(User user);


}
