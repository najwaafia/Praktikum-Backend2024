// import AlumniController
const AlumniController = require('../controllers/AlumniController');

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */

// Membuat routing alumni
router.get('/alumni', AlumniController.getAll); //get all data
router.get('/alumni/:id', AlumniController.show); //get detail berdasarkan id
router.get('/alumni/search/:name', AlumniController.search); //search berdasarkan name
router.get('/alumni/fresh-graduate', AlumniController.getFreshGraduates); //search berdasarkan fresh graduates
router.get('/alumni/employed', AlumniController.getEmployed); //search berdasarkan employed
router.get('/alumni/unemployed', AlumniController.getUnemployed); //seach berdasarkan unemployed

router.post('/alumni', AlumniController.store); //menambahkan data baru
router.put('/alumni/:id', AlumniController.update); //update data berdasarkan ID
router.delete('/alumni/:id', AlumniController.destroy); //delete data berdasarkan ID

// export router
module.exports = router;
