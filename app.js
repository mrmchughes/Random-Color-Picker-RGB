const button = document.querySelector('button');
const p = document.querySelector('p');

button.addEventListener('click', function(){
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    p.innerText = newColor;
})

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const textCheck = r + g + b;
    if (textCheck < 250) {
        p.style.color = 'white';
    } else {
        p.style.color = 'black';
    }
    return `rgb(${r},${g},${b})`;
}