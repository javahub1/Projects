package com.kgoos.app.service.impl;

import com.kgoos.app.entity.User;
import com.kgoos.app.repository.UserRepository;
import com.kgoos.app.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findUserByPassword(String pass) {
        return userRepository.findUserByPassword(pass);
    }

    @Override
    public List<User> findAllUser() {
      //  return userRepository.findAll();
        return userRepository.findAll(new Sort(Sort.Direction.DESC,"id"));//降序
        //return userRepository.findAll(new PageRequest(0,3));    //分页,暂时不可用
    }

    @Override
    public boolean addUser(User user) {
        userRepository.save(user);
        return true;

    }


}
