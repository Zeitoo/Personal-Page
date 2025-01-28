const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cols = 70; // Quantidade de colunas
const rows = 30; // Quantidae de linhas
const spacing = 25; // Espaçamento entre os pontosd
let time = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let xPos = x * spacing + (canvas.width - cols * spacing) / 2;
            let yPos = y * spacing + (canvas.height - rows * spacing) / 2;
            let offset = Math.sin((x + time) * 0.3) * 5; // Movimento de onda
            let randomBlink = Math.random() > 0.9 ? 0 : 1; // Piscar aleatório
            let opacity =
                ((Math.sin((x + y + time) * 0.2) + 1) / 2) * randomBlink; // Efeito de piscada

            ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
            ctx.beginPath();
            ctx.arc(xPos, yPos + offset, 1, 0, Math.PI * 2); // Pontos menores
            ctx.fill();
        }
    }
    time += 0.1;
    requestAnimationFrame(draw);
}
draw();
