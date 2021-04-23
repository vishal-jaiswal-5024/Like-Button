window.addEventListener('DOMContentLoaded', bindEvents);

function bindEvents(){
    document.querySelector('#like').addEventListener('click', plusCounter);
    // document.getElementById('count').innerHTML = '0';
}
var counter = 0;

function plusCounter(){
    counter++; 
    document.querySelector('#count').innerHTML = `<strong> ${counter} </strong>`;
    console.log(counter);
}