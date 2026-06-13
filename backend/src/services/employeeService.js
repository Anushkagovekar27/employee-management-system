const Employee = require("../models/Employee");

const createEmployee = async (employeeData) => {

    const employee = await Employee.create(employeeData);

    return employee;

};

module.exports = {
    createEmployee
};