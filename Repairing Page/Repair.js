document.getElementById("repairForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from reloading the page

    const form = e.target;
    const data = new FormData(form);
    const scriptURL = "https://script.google.com/macros/s/AKfycbwTn3BuDzTyvdUpzN1sfolj5nNmNFgHfwxyRkgpm8XO7WknqcwoNa6K-vTdScM5LzNH/exec";

    fetch(scriptURL, { method: "POST", body: data })
        .then(response => {
            alert("Repair request submitted successfully!");
            form.reset(); // Clear the form
        })
        .catch(error => {
            console.error("Error!", error.message);
        });
});
