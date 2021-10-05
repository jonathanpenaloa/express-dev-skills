const Skill = require('../models/skill');

module.exports = {
    index,
    show
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}

function show(req, res) {
    const skill = Skill.getOne(req.param.id);
    res.render('skills/show', { skill });
}