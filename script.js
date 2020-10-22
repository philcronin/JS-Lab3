"use strict"

let submissions = [
	{
		name: "Jane",
		score: 95,
		date: "2020-01-24",
		passed: true,
	},
	{
		name: "Joe",
		score: 77,
		date: "2018-05-14",
		passed: true,
	},
	{
		name: "Jack",
		score: 59,
		date: "2019-07-05",
		passed: false,
	},
	{
		name: "Jill",
		score: 88,
		date: "2020-04-22",
		passed: true,
	},
];

// Number 2 //

const addSubmission = (array, newName, newScore, newDate)=>{
	let newStudent = {
		name: newName,
		score: newScore,
		date: newDate,
		passed: newScore >= 60
	}
	array.push(newStudent);
}

addSubmission(submissions, "Phil", 100, "2020-10-21")

console.log(submissions)

// Number 3 //

const deleteSubmissionByIndex = (array, index)=>{
	array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 0);
console.log(submissions)

// Number 4 //

const deleteSubmissionByName = (array, name)=>{
	let studentIndex = array.findIndex ((studentName)=>{
		return studentName.name === name;
	})
	array.splice(studentIndex, 0);
}

deleteSubmissionByName(submissions, "Jane")
console.log(submissions)

// Number 5 //

const editSubmission = (array, index, score)=>{
	array[index].score = score;
	array[index].passed = score >= 60;
	return array;
}

editSubmission(submissions, 0, 100)
console.log(submissions)

// Number 6 //

const findSubmissionByName = (array, name)=>{
	return array.find ((studentName)=>{
		return studentName.name === name;
	});
};

console.log(findSubmissionByName(submissions, "Phil"))

// Number 7 //

const findLowestScore = (array)=>{
	let lowestScore = array[0].score;
	array.forEach((submission)=>{
		if (submission.score < lowestScore){
			lowestScore = submission.score;
		}
	});
	return lowestScore;
	};
console.log(findLowestScore(submissions));