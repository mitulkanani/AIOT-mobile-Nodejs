const express = require('express');

const { create, getProjects } = require('./project.controller');
const { Create } = require('./project.validations');
const { Authorize } = require('../../middleware/auth');
const upload = require('../../utils/upload');

const app = express.Router();


app.route('/').post(Authorize(), upload.single('attachment'), Create, create);
app.route('/').get(Authorize(), getProjects);

module.exports = app;
