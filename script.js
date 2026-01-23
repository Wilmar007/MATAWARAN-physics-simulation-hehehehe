const canvas = document.getElementById("circuitCanvas");
const ctx = canvas.getContext("2d");

const voltageInput = document.getElementById("voltage");
const resistanceInput = document.getElementById("resistance");
const currentDisplay = document.getElementById("current");
const toggleBtn = document.getElementById("toggle");

let isOn = false;

function drawCircuit() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Battery
  ctx.fillStyle = "yellow";
  ctx.fillRect(50, 120, 20, 60);
  ctx.fillRect(80, 100, 10, 100);

  // Wires
  ctx.strokeStyle = isOn ? "lime" : "gray";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(90, 150);
  ctx.lineTo(300, 150);
  ctx.lineTo(300, 80);
  ctx.lineTo(500, 80);
  ctx.lineTo(500, 220);
  ctx.lineTo(90, 220);
  ctx.closePath();
  ctx.stroke();

  // Bulb (resistor)
  ctx.fillStyle = isOn ? "orange" : "white";
  ctx.beginPath();
  ctx.arc(400, 80, 15, 0, Math.PI * 2);
  ctx.fill();
}

function updatePhysics() {
  if (isOn) {
    const V = Number(voltageInput.value);
    const R = Number(resistanceInput.value);
    const I = (V / R).toFixed(2); // Ohm’s Law
    currentDisplay.textContent = I;
  } else {
    currentDisplay.textContent = "0";
  }
}

toggleBtn.addEventListener("click", () => {
  isOn = !isOn;
  toggleBtn.textContent = isOn ? "Switch OFF" : "Switch ON";
  drawCircuit();
  updatePhysics();
});

drawCircuit();

