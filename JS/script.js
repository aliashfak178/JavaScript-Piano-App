
const body = document.getElementsByClassName('body');
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');
const E = document.getElementById('E');
const F = document.getElementById('F');
const G = document.getElementById('G');

document.addEventListener('keypress', (e)=>{
    console.log(e.code)
    if(e.code == 'KeyA'){
        alert('A');
        A.style.backgroundColor='blue';
    }
    else{
        alert('Other Key')
    }
});