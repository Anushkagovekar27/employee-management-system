const params = new URLSearchParams(window.location.search);

const employeeId = params.get("id");

const editEmployeeForm = document.getElementById("editEmployeeForm");


// Load employee data
async function loadEmployee() {

    try {

        const response = await fetch(
            `http://localhost:5000/api/employees/${employeeId}`
        );

        const result = await response.json();

        const employee = result.data;

        document.getElementById("name").value = employee.name;

        document.getElementById("email").value = employee.email;

        document.getElementById("department").value =
            employee.department;

        document.getElementById("salary").value =
            employee.salary;

    }

    catch (error) {

        console.log(error);

    }

}


loadEmployee();


// Update employee

editEmployeeForm.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();

        const updatedEmployee = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            department: document.getElementById("department").value,

            salary: document.getElementById("salary").value

        };

        try {

            await fetch(
                `http://localhost:5000/api/employees/${employeeId}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(updatedEmployee)
                }
            );

            alert("Employee updated successfully");

            window.location.href =
                "../employeeList/employeeList.html";

        }

        catch (error) {

            console.log(error);

        }

    }
);