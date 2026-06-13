const employeeService = require("../services/employeeService");

const createEmployee = async (req, res) => {
    try {

        const employee = await employeeService.createEmployee(req.body);

        res.status(201).json({
            success: true,
            message: "Employee created successfully",
            data: employee
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
const getAllEmployees = async (req, res) => {

    try {

        const employees = await employeeService.getAllEmployees();

        res.status(200).json({
            success: true,
            count: employees.length,
            data: employees
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createEmployee,
    getAllEmployees
};