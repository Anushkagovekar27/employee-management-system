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

module.exports = {
    createEmployee
};