package com.kgoos.app.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="[user]")   //user是数据库的关键字,所以用[]括起来
@NamedQuery(name = "user.findByName",query = "select u from User u where u.name =?1")   //?1 是指第一个参数位
//此处定义一个命名查询,以便引用
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String password;
    private String email;
    private String tel;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", tel='" + tel + '\'' +
                '}';
    }

    //构造函数
    public User() {
    }

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }
}
