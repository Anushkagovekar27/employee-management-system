const express = require("express");

const router = express.Router();

const { createEmployee, getAllEmployees, updateEmployee } = require("../controllers/employeeController");

router.post("/", createEmployee);
router.get("/", getAllEmployees);
router.put("/:id", updateEmployee);

module.exports = router;