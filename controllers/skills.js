const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/todos');
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}