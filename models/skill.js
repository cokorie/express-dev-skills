const skills = [
 {id: 0001, skill: 'HTML', mastered: true},
 {id: 0002, skill: 'CSS', mastered: true},
 {id: 0003, skill: 'JavaScript', mastered: true},
 {id: 0004, skill: 'Node', mastered: false},
 {id: 0005, skill: 'Express', mastered: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.mastered = false;
    skills.push(skill);
}

function getAll () {
    return skills;
}

function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}