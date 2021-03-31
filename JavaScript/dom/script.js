// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Check it!';

const para = document.createElement('p');
para.classList.add('red-p');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';



container.appendChild(content);
content.appendChild(para)


btn.addEventListener('click', function (e) {
    console.log(e)
});