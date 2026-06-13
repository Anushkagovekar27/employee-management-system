const Employee = require("../models/Employee");

const createEmployee = async (employeeData) => {

    const employee = await Employee.create(employeeData);

    return employee;

};
const getAllEmployees = async () => {

    const employees = await Employee.find();

    return employees;
};

module.exports = {
    createEmployee,
    getAllEmployees

};
