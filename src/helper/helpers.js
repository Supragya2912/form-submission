//email validation check
export const emailValidation = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

//Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters
export const passwordValidation = (password) => {
    
    const capitalLetters = /[A-Z]/g;
    const smallLetters = /[a-z]/g;
    const numbers = /[0-9]/g;
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;

    const capitalCount = (password.match(capitalLetters) || []).length;
    const smallCount = (password.match(smallLetters) || []).length;
    const numberCount = (password.match(numbers) || []).length;
    const specialCount = (password.match(specialCharacters) || []).length;

    return capitalCount >= 2 && smallCount >= 2 && numberCount >= 2 && specialCount >= 2;
}

// Allow only alphabets. Minimum of 2 character and maximum 50.
export const firstNameValidation = (firstName) => {
    const nameRegex = /^[a-zA-Z]{2,50}$/;
    return nameRegex.test(firstName);
}

export const lastNameValidation = (lastName) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(lastName);
}

// Minimum length 10.
export const addressValidation = (address) => {
    return address.length >= 10;
}

export const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^[0-9]{10}$/;
    return phoneNumberRegex.test(phoneNumber);
}
