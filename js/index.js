// Your code goes here

let anchors = document.querySelectorAll('.nav-link');

anchors.forEach(link => link.addEventListener('mouseover',(event) => {
    event.target.style.color = "red";
    setTimeout(function(){
        event.target.style.color = "black";
    }, 500);
}));

let bodyTest = document.querySelector('body');

bodyTest.addEventListener('keydown', event => {
    console.log(event.key);
});

let load = document.querySelector('img');

load.addEventListener('load', event => {
        console.log('page has loaded');
});

let clickTest = document.querySelector('h2');

clickTest.addEventListener('dblclick', event => {
    console.log("you clicked the h2!");  
});

let clickTest2 = document.querySelector('h1');

clickTest2.addEventListener('dblclick', event => {
    console.log("You clicked the h1!");
    event.stopPropagation()
});

let FocusTest = document.querySelector('.password1');

FocusTest.addEventListener('focus', (event) => {
    event.target.style.background = 'red';
});

let blurTest = document.querySelector('.user');

blurTest.addEventListener('blur', (event) => {
    event.target.style.background = "green"
});





