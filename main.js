function calculateAge() {
    // Get values from input fields
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    // Validate input
    if (!day || !month || !year) {
        alert('Please enter a valid date of birth.');
        return;
    }

    // Create a new date object from the input
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if the birth month and day have not yet occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Display the result
    document.getElementById('result').innerHTML = `You are ${age} years old.`;
}