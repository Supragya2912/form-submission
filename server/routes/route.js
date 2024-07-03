const express = require('express');
const router = express.Router();

const { submitForm } = require('../controller/form');

router.post('/submit-form', submitForm);

module.exports = router;