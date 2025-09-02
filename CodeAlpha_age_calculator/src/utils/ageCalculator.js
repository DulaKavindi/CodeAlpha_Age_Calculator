export const calculateAge = (birthDate) => {

    const today= new Date();  //get today date
    const birth = new Date(birthDate.year, birthDate.month - 1, birthDate.day);

    if (birth > today) {
        throw new Error('Birth date cannot be in the future');
    }

    let years = today.getFullYear()-birth.getFullYear();
    let months = today.getMonth()- birth.getMonth();
    let days = today.getDate() - birth.getDate();
    
    if (days<0){
        months--;   //decrease month by 1, if date is negative 
        const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += daysInPreviousMonth;
    }

    if(months <0){
        years--;
        months+= 12;
    }

    return {years, months, days};
}

export const validateDate = (day, month, year) => {
    const currentYear = new Date().getFullYear();
    if (!day || !month || !year) {
        return 'Please enter day, month, and year.';
    }
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return 'Day, month, and year must be numbers.';
    }
    if (year < 1900 || year > currentYear) {
        return 'Year must be between 1900 and ' + currentYear + '.';
    }
    if (month < 1 || month > 12) {
        return 'Month must be between 1 and 12.';
    }
    if (day < 1 || day > 31) {
        return 'Day must be between 1 and 31.';
    }
    // Check for valid day in month
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        return 'Invalid date.';
    }
    if (date > new Date()) {
        return 'Birth date cannot be in the future.';
    }
    return '';
}