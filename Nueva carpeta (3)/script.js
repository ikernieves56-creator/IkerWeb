function randomColor() {
    const colors = [
        "#ff79c6", // rosa
        "#ffb86c", // durazno
        "#8be9fd", // celeste
        "#bd93f9", // violeta
        "#f1fa8c", // amarillo
        "#ff5555"  // rojo
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}



function createFlower() {
    const container = document.getElementById("flowers-container");

    const flower = document.createElement("div");
    flower.classList.add("flower");

    const size = 40 + Math.random() * 60;
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;

    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.top = `${Math.random() * 100}vh`;

    flower.style.background = randomColor();
    flower.style.boxShadow = `0 0 15px ${flower.style.background}`;

    container.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 4000);
}




// Crear flores cada 400 ms
setInterval(createFlower, 400);
