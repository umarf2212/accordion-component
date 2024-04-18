export default function calculateYearsSince(date: Date) {
    // Calculate the difference in milliseconds between the current date and the given date
    const differenceInMillis = Date.now() - date.getTime();

    // Convert milliseconds to years
    const years = differenceInMillis / (1000 * 60 * 60 * 24 * 365);

    // Round down the years to get the whole number of years
    return Math.floor(years);
}

// Example usage:
// const birthday = new Date('1990-01-01');
// const yearsSinceBirthday = calculateYearsSince(birthday);
// console.log(yearsSinceBirthday); // Output: 34 (assuming current date is in 2024)
