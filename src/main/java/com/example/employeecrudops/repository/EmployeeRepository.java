package com.example.employeecrudops.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.employeecrudops.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
