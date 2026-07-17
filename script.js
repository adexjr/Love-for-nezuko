// =========================
// Love Heart Animation
// Part 1
// =========================

const container = document.getElementById("container");
const name = document.getElementById("name");

const TOTAL_WORDS = 300;      // Increase to 500+ if you want a fuller heart
const HEART_SIZE = 22;        // Heart scale
const BUILD_TIME = 10000;     // 10 seconds

const particles = [];
const heartPoints = [];

// Create heart points
for (let t = 0; t < Math.PI * 2; t += 0.02) {

    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);

    heartPoints.push({
        x: x * HEART_SIZE,
        y: -y * HEART_SIZE
    });

}

// Create all "I love you" words
for (let i = 0; i < TOTAL_WORDS; i++) {

    const span = document.createElement("span");

    span.className = "love";

    span.innerText = "I love you";

    span.style.left = Math.random() * innerWidth + "px";

    span.style.top = Math.random() * innerHeight + "px";

    container.appendChild(span);

    particles.push(span);

      }
