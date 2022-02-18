const names = document.getElementById("students");
const number = document.getElementById("amount");
const groupNumber = document.getElementById("numberOfGroups");
const studentNumber = document.getElementById("numberOfStudents");
const output = document.getElementById("output");


function getInput () {
    const inputNames = names.value;
    const inputNumber = number.value;
    let individual = names.split(",");

    let randomGroup = individual.sort(() => Math.random() - 0.5);

    function chunk(array, size) {
        if (array.length <= size) {
            return [array];
        }
        return [array.slice(0, size), ...chunk(array.slice(size), size)];
    }

    var group = chunk(random, total);

    for (let i=0; i < group.length; i++) {
        output.innerHTML += <p>Team-${i+1}: ${team[i]}</p>;
    }
}

