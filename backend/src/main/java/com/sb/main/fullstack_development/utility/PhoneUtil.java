package com.sb.main.fullstack_development.utility;

import com.google.i18n.phonenumbers.NumberParseException;
import com.google.i18n.phonenumbers.PhoneNumberUtil;
import com.google.i18n.phonenumbers.Phonenumber;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.MethodArgumentNotValidException;

@Service
public class PhoneUtil {
    public boolean validatePhoneNumber(String phoneNumber, String countryCode) {
        PhoneNumberUtil phoneUtil = PhoneNumberUtil.getInstance();
        try {
            Phonenumber.PhoneNumber parsedNumber = phoneUtil.parse(phoneNumber, countryCode);
            return phoneUtil.isValidNumberForRegion(parsedNumber, countryCode);
        } catch (NumberParseException e) {
            return false;
        }
    }
}
