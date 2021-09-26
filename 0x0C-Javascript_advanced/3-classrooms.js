function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {return seat}
    }
    students = [];
    for (let count = 0; count < numbersOfStudents; count++) {
        students.push(studentSeat(count + 1));
    }
    return students;
}

let classRoom = createClassRoom(10);