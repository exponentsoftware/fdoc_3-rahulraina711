const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

const convertArrayToObject = (studentsList) =>{
    let newArr = [];
    studentsList.map(student=>{
        let mapObj = {};
        mapObj.name = student[0];
        mapObj.skills = student[1];
        mapObj.scores = student[2];
        newArr.push(mapObj);
    });
    
    console.log(newArr);

    let newStudent = {...newArr[0]};

    newStudent.skills = {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
    newStudent.skills.frontEnd.push({skill:"Bootstrap",level:"8"});
    newStudent.skills.backEnd.push({skill:"Express",level:"9"});
    newStudent.skills.dataBase.push({skill:"SQL",level:"8"});
    newStudent.skills.dataScience.push("SQL");

    return newStudent;
}

console.log(convertArrayToObject(students));