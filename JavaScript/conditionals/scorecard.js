
let response;
let score = 75;
let machineActive = false;

// Edit below
if (machineActive) {
    switch (true) {
        case (score < 20):
            response = "Terrible....FAIL!";
            break;
        case (score < 40):
            response = "You know a couple things";
            break;
        case (score < 70):
            response = "Passable";
            break;
        case (score < 90):
            response = "Great Score";
            break;
        case (score < 101):
            response = "What and amazing Score";
            break;
        case (score > 100):
            response = "You are off the charts";
            break; 
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
    