package com.kgoos.app.utils;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ConfigurationProperties(prefix = "author") //通过 prefix 属性指定properties 的自己置的前缀，通过 locations 指定 properties 文件的位置
//若配置写在application.properties中可以不指定location的位置
public class AuthorSettings {
    private String name;
    private int age;
}
