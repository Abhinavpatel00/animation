const container = document.getElementById("bubble-container");
const bubbleCount = 30;
for (let i = 0; i < bubbleCount; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  container.appendChild(bubble);
}
