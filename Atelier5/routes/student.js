const express = require("express");
const router = express.Router();
var Student = require("../models/student.js");
const { getStudent, saveStudent , deleteStudent , updateStudent ,studentsNoteSorted, searchStudent,deleteStudentName ,searchStudentByName,displayAge,displayStudent} = require("../services/student.js");

router.get('/',getStudent);
router.post('/',saveStudent);
//router.delete('/delete/:id',deleteStudent);
router.put('/update',updateStudent);
//router.put('/:id',updateStudent);
// router.get('/find/:id',searchStudent);
router.get('/find/:name',searchStudentByName);
router.get('/getage',displayAge);
router.put('/filterStudent',displayStudent);
router.delete('/delete/:name',deleteStudentName);
router.get('/studentsNoteSorted',studentsNoteSorted)








module.exports = router