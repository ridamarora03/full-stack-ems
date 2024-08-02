package com.ra.ems_bend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees") //tells the table name
//make this employee class a JPA entity by using JPA annotations
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//auto increment PK
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email_id", nullable =false, unique = true)
    private String email;

}
