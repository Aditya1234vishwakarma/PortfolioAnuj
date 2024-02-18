const text = "Anuj Vishwakarma";
const speed = 400; 

let index = 0;
let direction = 1; 

function typeText() {
    const container = document.getElementById("text-container");
    const char = text.charAt(index);

    
    if (index === text.length) {
        direction = -1; 
    } else if (index === 0) {
        direction = 1; 
    }
    if (direction === 1) {
        container.innerHTML += char;
        index++;
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
        index--;
    }

    setTimeout(typeText, speed);
}

setInterval(typeText(), 3000);