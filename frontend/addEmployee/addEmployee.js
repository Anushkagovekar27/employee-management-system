const employeeForm = document.getElementById("employeeForm");

employeeForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const employeeData = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        department: document.getElementById("department").value,

        salary: document.getElementById("salary").value
    };

    try {

        const response = await fetch(
            "http://localhost:5000/api/employees",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(employeeData)
            }
        );

        const result = await response.json();

        alert(result.message);

        employeeForm.reset();

    }
    catch (error) {

        console.log(error);

    }

});