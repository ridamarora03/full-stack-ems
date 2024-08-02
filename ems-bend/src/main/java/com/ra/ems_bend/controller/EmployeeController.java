package com.ra.ems_bend.controller;

import com.ra.ems_bend.dto.EmployeeDto;
import com.ra.ems_bend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity; //look at this
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController//able to handle http requests //spring container is handling all this
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {

    private EmployeeService employeeService;

    //build Add Employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        //@RequestBody parses the json input & converts it into EmployeeDto JAVA OBJECT
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);

    }

    //build Get Employee REST API
    @GetMapping("{id}")//now we need to bind this id with employeeId
    public ResponseEntity<EmployeeDto> getEmployeeByID(@PathVariable("id") Long employeeID) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeID);
        return ResponseEntity.ok(employeeDto);
    }

    //Build get all employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employees=  employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }
    //build updateEmployee REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,  @RequestBody EmployeeDto updatedEmployee) {
        EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
        return ResponseEntity.ok(employeeDto);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId) {
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully!!");
    }
}
