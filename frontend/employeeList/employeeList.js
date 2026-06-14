const employeeTableBody =
    document.getElementById("employeeTableBody");

async function getEmployees() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/employees"
        );

        const result = await response.json();

        displayEmployees(result.data);

    }

    catch (error) {

        console.log(error);

    }

}

getEmployees();
function displayEmployees(employees) {

    employeeTableBody.innerHTML = "";

    employees.forEach((employee) => {

        employeeTableBody.innerHTML += `

        <tr>

            <td>${employee.name}</td>

            <td>${employee.email}</td>

            <td>${employee.department}</td>

            <td>${employee.salary}</td>

            <td>
                <button onclick="editEmployee('${employee._id}')">
                    Edit
                </button>
            </td>

            <td>
                <button onclick="deleteEmployee('${employee._id}')">
                    Delete
                </button>
            </td>

        </tr>

        `;
    });
}
async function deleteEmployee(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this employee?");

    if (!confirmDelete) return;

    try {

        await fetch(
            `http://localhost:5000/api/employees/${id}`,
            {
                method: "DELETE"
            }
        );

        getEmployees();

    }

    catch (error) {

        console.log(error);

    }

}
function editEmployee(id) {

    window.location.href =
        `../editEmployee/editEmployee.html?id=${id}`;

}