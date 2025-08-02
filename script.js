function calculateAge() {
    const dob = document.getElementById("dob").value;
    const current = document.getElementById("current").value;

    if (!dob || !current) {
        document.getElementById("result").textContent = "Please select both dates.";
        return;
    }

    const dobobj = new Date(dob);
    const currentobj = new Date(current);

    let age = currentobj.getFullYear() - dobobj.getFullYear();
    let monthdiff = currentobj.getMonth() - dobobj.getMonth();
    let daydiff = currentobj.getDate() - dobobj.getDate();  // Fixed this line

    if (monthdiff < 0 || (monthdiff === 0 && daydiff < 0)) {
        age--;
        monthdiff += 12;
    }

    if (daydiff < 0) {
        const prevMonth = (currentobj.getMonth() - 1 + 12) % 12;
        const daysInPrevMonth = new Date(currentobj.getFullYear(), prevMonth + 1, 0).getDate();
        daydiff += daysInPrevMonth;
        monthdiff--;
    }

    const diffInMs = currentobj - dobobj;
    let days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diffInMs / (1000 * 60 * 60));
    let mins = Math.floor(diffInMs / (1000 * 60));

    document.getElementById("result").textContent =
        `Your age is ${age} year(s), ${monthdiff} month(s), ${daydiff} day(s), ${hours} hour(s), and ${mins} minute(s).`;
}
