package com.ra.ems_bend.repository;

import com.ra.ems_bend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository not needed bcz SimpleJPARepositroy (implementation class of JpaRepo) it already
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    //Employee Id was Long
    //this JpaRepository has basic CRUD operatiob
}
