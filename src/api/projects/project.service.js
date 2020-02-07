const Project = require('./project.model');

exports.CreateProject = async (data) => {
  const proj = new Project(data);
  const prj = await proj.save();
  return prj.transform();
};

exports.GetProjects = async () => {
  const prjs = await Project.find({});
  return prjs.map((p) => p.transform());
};
