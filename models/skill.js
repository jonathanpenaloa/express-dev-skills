
const skills = [
    {id: 1, skill: 'css', done: true},
    {id: 2, skill: 'js', done: true},
    {id: 3, skill: 'HTML', done: true},
    {id: 4, skill: 'Python', done: false},
    {id: 5, skill: 'Ruby', done: false},
    {id: 6, skill: 'C#', done: false}  
];

module.exports = {
    getAll,
    getOne,
    create,
}


function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}
