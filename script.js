// =========================
// Love Heart Animation
// Part 1
// =========================

const container = document.getElementById("container");
const name = document.getElementById("name");

const TOTAL_WORDS = 600;      // Increase to 500+ if you want a fuller heart
const HEART_SIZE = 22;        // Heart scale
const BUILD_TIME = 10000;     // 10 seconds

const particles = [];
const heartPoints = [];
// =========================
// Filled Heart
// =========================

for (let layer = 1; layer >= 0.15; layer -= 0.08) {

    for (let t = 0; t < Math.PI * 2; t += 0.05) {

        const x = 16 * Math.pow(Math.sin(t), 3);

        const y =
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);

        heartPoints.push({
            x: x * HEART_SIZE * layer,
            y: -y * HEART_SIZE * layer
        });

    }

                          }

// Create all "I love you" words
for (let i = 0; i < TOTAL_WORDS; i++) {

    const span = document.createElement("span");

    span.className = "love";

    span.innerText = "I love you";
    span.style.opacity = "0";

    span.style.left = Math.random() * innerWidth + "px";

    span.style.top = Math.random() * innerHeight + "px";

    container.appendChild(span);

    particles.push(span);

      }
// =========================
// Part 2 - Build the Heart
// =========================

function buildHeart() {

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    particles.forEach((particle, index) => {

        const point = heartPoints[index % heartPoints.length];

        particle.style.transition = `
            left ${BUILD_TIME / 1000}s ease,
            top ${BUILD_TIME / 1000}s ease,
            transform ${BUILD_TIME / 1000}s ease
        `;

        particle.style.left = (centerX + point.x) + "px";
        particle.style.top = (centerY + point.y) + "px";
        particle.style.transform = "translate(-50%, -50%)";

    });

    // Show Nezuko after the heart has formed
    setTimeout(() => {
        name.classList.add("show");
    }, BUILD_TIME);

}

// Start building after a short delay
setTimeout(buildHeart, 1000);

// Re-center the heart if the screen size changes
window.addEventListener("resize", () => {
    if (name.classList.contains("show")) {
        buildHeart();
    }
});
const delay = index * 12; // milliseconds between each word

setTimeout(() => {

    particle.style.transition = `
        left 6s ease,
        top 6s ease,
        transform 6s ease,
        opacity 1.5s ease
    `;

    particle.style.left = (centerX + point.x) + "px";
    particle.style.top = (centerY + point.y) + "px";
    particle.style.transform = "translate(-50%, -50%)";
    particle.style.opacity = "1";

}, delay);
