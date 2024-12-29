const lines = document.querySelectorAll(".line");
const animateButton = document.getElementById("animate");

let minFrequency = 1200;
let deltaFrequency = 1500;
let detune = 0;
let stagger = 0.05;
let outDuration = 0.25;

animateButton.addEventListener("click", () => {
  // Update values from controls
  minFrequency = document.getElementById("min-frequency").value;
  deltaFrequency = document.getElementById("delta-frequency").value;
  detune = document.getElementById("detune").value;
  stagger = document.getElementById("stagger").value;
  outDuration = document.getElementById("out-duration").value;

  // Apply animation to each line
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.transform = `translateY(${Math.sin(index + parseFloat(detune)) * deltaFrequency}px)`;
      line.style.transition = `transform ${outDuration}s ease`;
    }, index * stagger * 1000);
  });
});
