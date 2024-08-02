package com.ra.ems_bend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    //DTO (Data Transfer Object) classes are used to transfer the data between client & server
    //response for API
    //need a mapper class to convert EmployeeDTO to Employee JPA entity & vice-versa
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
}
