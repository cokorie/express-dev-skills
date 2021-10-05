const skills = [
 {id: 0001, skill: 'HTML', mastered: true},
 {id: 0002, skill: 'CSS', mastered: true},
 {id: 0003, skill: 'JavaScript', mastered: true},
 {id: 0004, skill: 'Node', mastered: false},
 {id: 0005, skill: 'Express', mastered: false}
];

module.exports = {
    getAll,
    getOne
}

function getAll () {
    return skills;
}

function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}