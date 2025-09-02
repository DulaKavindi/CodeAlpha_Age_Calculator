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