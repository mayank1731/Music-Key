const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const audio1 = new Audio('18.mp3');
const audio2 = new Audio('17.mp3');
const audio3 = new Audio('19.mp3');
const audio4 = new Audio('20.mp3');

if(btn1) {
    btn1.addEventListener('click', () => {
        audio1.play();
    });
}
if(btn2) {
    btn2.addEventListener('click', () => {
        audio2.play();
    });
}
if(btn3) {
    btn3.addEventListener('click', () => {
        audio3.play();
    });
}
if(btn4) {
    btn4.addEventListener('click', () => {
        audio4.play();
    });
}
 document.addEventListener('keypress', (event) => {
    switch (event.key) {
        case 'w': 
            audio1.play();
            break;
        case 'm': 
            audio2.play();
            break;
        case 'i': 
            audio3.play();
            break;
        case 'k': 
            audio4.play();
            break;
        default:
            alert('404 key  not found!');
    }
});