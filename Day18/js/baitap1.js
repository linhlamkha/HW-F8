const examResults = [
    { student: "An", scores: [8.5, 7, 9, 6.5] },
    { student: "Bình", scores: [10, 9.5, 8, 10] },
    { student: "Chi", scores: [5, 4.5, 6, 5.5] },
    { student: "Duy", scores: [7, 7, 7, 7] },
];

// Hàm 1
function getAverage(scores) {
    let total = 0;
    for (const score of scores) {
        total += score;
    }
    return Number((total / scores.length).toFixed(1));
}

console.log(getAverage([8.5, 7, 9, 6.5])); // 7.75 -> 7.8
console.log(getAverage([10, 9.5, 8, 10])); // 9.375 -> 9.4

// Hàm 2
function classifyStudent(average) {
    if (average >= 9) {
        return "Xuất sắc";
    } else if (average >= 8) {
        return "Giỏi";
    } else if (average >= 6.5) {
        return "Khá";
    } else if (average >= 5) {
        return "Trung bình";
    }
    return "Yếu";
}

console.log(classifyStudent(9.4)); // "Xuất sắc"
console.log(classifyStudent(7.8)); // "Khá"
console.log(classifyStudent(4.5)); // "Yếu"

// Hàm 3
function isValidScore(score) {
    return Number.isFinite(score) && score >= 0 && score <= 10;
}
console.log(isValidScore(8.5)); // true
console.log(isValidScore(-1)); // false
console.log(isValidScore(11)); // false
console.log(isValidScore(Infinity)); // false
console.log(isValidScore(NaN)); // false

// Hàm 4
function getReportCard(examResults) {
    return examResults.map((examResult) => {
        const student = examResult.student;
        const average = getAverage(examResult.scores);
        const classification = classifyStudent(average);

        return {
            student: student,
            average: average,
            classification: classification
        };
    });
}
console.log(getReportCard(examResults));
// [
//   { student: "An",   average: 7.8, classification: "Khá" },
//   { student: "Bình", average: 9.4, classification: "Xuất sắc" },
//   { student: "Chi",  average: 5.3, classification: "Trung bình" },
//   { student: "Duy",  average: 7,   classification: "Khá" },
// ]
