
let response;
let score = 75;
let machineActive = false;

// Edit below
if (machineActive) {
    if (score < 20) {
        response = "Terrible....FAIL!";
    } else if (score < 40) {
        response = "You know a couple things";
    } else if (score < 70) {
        response = "Passable";
    } else if (score <90) {
        response = "Great Score";
    }else if (score < 101) {
        response = "What and amazing Score";
    } else {
        response = "You are off the charts";
    }
} else {
    score = 0;
    response = "Turn the machine on ya dope";
}


// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
    