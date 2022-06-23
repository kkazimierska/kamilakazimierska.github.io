let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name.')
    if(!myName) {
        setUserName();
    } else{
        localStorage.setItem('name', myName)
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }

}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool,' + storedName;
}
myButton.onclick = function () {
    setUserName();
}

const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Enter a new name');
    para.textContent = `Player 1: ${name}`;
}

function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the button and therefore added new paragraph!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', createParagraph);
}

/*
Everything in between is a comment.
*/
// This is a comment

