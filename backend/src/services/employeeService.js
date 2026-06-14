const Employee = require("../models/Employee");

const createEmployee = async (employeeData) => {

    const employee = await Employee.create(employeeData);

    return employee;

};
const getAllEmployees = async () => {

    const employees = await Employee.find();

    return employees;
};
const updateEmployee = async (id, employeeData) => {

    const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        employeeData,
        {
            new: true,
            runValidators: true
        }
    );

    return updatedEmployee;
};

module.exports = {
    createEmployee,
    getAllEmployees,
    updateEmployee

};
