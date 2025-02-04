package com.sb.main.fullstack_development.db;

import com.sb.main.fullstack_development.entities.Customer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerDao implements CustomerService{




    private  final CustomerRepository customerRepository;


    public CustomerDao(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;

    }

    @Override
    public List<Customer> getAllCustomers() {

       return customerRepository.findAll();


    }

    @Override
    public Optional<Customer> getCustomerById(int id) {
        return customerRepository.findById(id);
    }

    @Override
    public boolean saveCustomer(Customer customer) {


        customer.setFirstName(customer.getFirstName().substring(0,1).toUpperCase()+customer.getFirstName().substring(1));
        customer.setLastName(customer.getLastName().toUpperCase());
        customerRepository.save(customer);

        return customerRepository.existsCustomerByCustomerId(customer.getCustomerId());
    }

    @Override
    public boolean updateCustomer(Customer customer) {

       var status = customerRepository.existsCustomerByEmail(customer.getEmail());

        if (status) {
            Customer customer1 = customerRepository.findCustomerByEmail(customer.getEmail());

            customer1.setFirstName(capitalize(customer1.getFirstName()));
            customer1.setLastName(capitalize( customer.getLastName()));
            customer1.setAge(customer.getAge());
            customer1.setPhone(customer.getPhone());
            customerRepository.save(customer1);

        }
        else {
            customerRepository.save(customer);

        }
        return customerRepository.existsCustomerByEmail(customer.getEmail());


    }

    @Override
    public boolean deleteCustomer(int id) {

         int status = customerRepository.deleteCustomerByCustomerId(id);
        return status>0;
    }

    public String capitalize(String input) {
        return input.substring(0,1).toUpperCase()+ input.substring(1);
    }

}
