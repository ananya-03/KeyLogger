const leftdiv = document.getElementsByClassName('left-container')[0];
const rightdiv = document.getElementsByClassName('right-container')[0];

const startbtn = document.getElementById('start-btn');
const stopbtn = document.getElementById('stop-btn');

startbtn.addEventListener('click', () => {
    document.addEventListener('keydown', handleDown)
    document.addEventListener('keyup', handleUp)
    startbtn.disabled = true;
    stopbtn.disabled=false;
})
stopbtn.addEventListener('click', () => {
    document.removeEventListener('keydown', handleDown)
    document.removeEventListener('keyup', handleUp)
    leftdiv.textContent = "";
    rightdiv.textContent = " ";
    stopbtn.disabled=true;
    startbtn.disabled=false;
}) 

function handleDown(e){
    leftdiv.textContent= `Key ${e.key} is pressed down`;
    rightdiv.textContent=`Key is down`;
}
function handleUp(e){
    leftdiv.textContent= `Key ${e.key} is pressed up`;
    rightdiv.textContent=`Key is up`;
}
