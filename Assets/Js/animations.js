//shifting titles
document.addEventListener("DOMContentLoaded", () => {
    const glitchContainer = document.getElementById("GlitchyText");
    const glitchText = glitchContainer.querySelector("h3");
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

    const titles = ["Multimedia Developer", "Music Producer", "Game Designer", "3D Artist", "Web Developer", "Software Engineer"];
    let currentTitleIndex = 0;

    function applyGlitchEffect(text) {
        glitchText.dataset.value = text;
        glitchText.innerText = text;
        
        let iterations = 0;
        const interval = setInterval(() => {
            glitchText.innerText = text.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return text[index];
                    }
                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join("");

            if (iterations >= text.length) {
                clearInterval(interval);
            }
            iterations += 1 / 4;
        }, 30);
    }

    function cycleTitles() {
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        const nextTitle = titles[currentTitleIndex];
        applyGlitchEffect(nextTitle);
    }

    // Start cycling after page load
    setInterval(cycleTitles, 3000);    
});

//parallax effect
document.addEventListener("DOMContentLoaded", () => {
    const bgPosition = window.getComputedStyle(document.body).backgroundPosition;
    const [startX, startY] = bgPosition.split(" ").map(pos => parseFloat(pos));

    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        document.body.style.backgroundPosition = `${startX + x}% ${startY + y}%`;
    });
});


