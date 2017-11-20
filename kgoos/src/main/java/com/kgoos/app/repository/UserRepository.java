package com.kgoos.app.repository;

import com.kgoos.app.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByName(String name);//此处不是使用系统的实现,是我们自己写的命名查询

    List<User> findByName(String name, Sort sort);  //使用Sort对象,对查询结果进行排序

    //下面是我们自己写的一个实现.
    @Query("select u from User u where u.password=?1")   //注意此处使用的是hql,不是sql,若需要使用原生的SQL,指定注解属性nativeQuery=true
    List<User> findUserByPassword(String pass);

    //这是查询传参的另一种形式
    @Query("select u from User u where u.password= :password")
    List<User> findUserByPwd(@Param("password") String pass);   //使用@Param注解为pass参数起了一个别名在查询语句中使用

    @Modifying
    @Transactional
    @Query("update User u set u.password =?1")      //修改要@Modifying和@Query一起用,@Transactional这是事务
    int setPassword(String password);

    List<User> findAll();

    List<User> findAll(Sort sort);  //对查询结果进行排序

    Page<User> findAll(Pageable pageable);  //对查询结果进行分页


    User save(User user);

    User findOne(Long aLong);

    boolean exists(Long aLong);

    long count();

    void delete(Long aLong);

    void delete(User entity);

    void delete(Iterable<? extends User> entities);

    void deleteAll();
}
