package com.sb.main.fullstack_development.entities;


import com.google.i18n.phonenumbers.NumberParseException;
import com.google.i18n.phonenumbers.PhoneNumberUtil;
import com.google.i18n.phonenumbers.Phonenumber;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;

@Entity
@Table(name = "customers")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;
    @Column(nullable = false)
    private String firstName;
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;


    @Column(nullable = false)
    private String phone;



    @Column(nullable = false)
    @Min(value = 10 ,message = "Age cannot be less than 10 ")
    @Max(value = 100, message = "Age cannot be greater than 100")
    private Integer age;


    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(nullable = false)

    private String phoneCode;

    @AssertTrue(message = "Invalid Number")
    public boolean isValidPhoneNumber() {
        if (phone==null || phoneCode==null) {
            return false;
        }
        try {
            PhoneNumberUtil phoneUtil = PhoneNumberUtil.getInstance();
            Phonenumber.PhoneNumber parsedNumber = phoneUtil.parse(phone,phoneCode);

            return phoneUtil.isValidNumber(parsedNumber);
        }
        catch (NumberParseException e){
            return false;
        }
    }


    public Customer( String firstName, String lastName, String email, String phone, Integer age, Gender gender) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.gender = gender;

    }



}
