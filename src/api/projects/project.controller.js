const { CreateProject, GetProjects } = require('./project.service');
const { CREATED, OK } = require('../../utils/http-status');

exports.create = async (req, res, next) => {
  try {
    const fileName = req.file.path.split('public')[1];
    req.body.user = req.user.id;
    // eslint-disable-next-line prefer-destructuring
    req.body.attachment = fileName.split('\\')[1];
    const data = await CreateProject(req.body);
    res.status(CREATED).json({ data });
  } catch (err) {
    next(err);
  }
};

exports.getProjects = async (req, res, next) => {
  try {
    const data = await GetProjects();
    res.status(OK).json({ data });
  } catch (err) {
    next(err);
  }
};
