document.addEventListener("DOMContentLoaded", function () {
    const text = "Developer";
    const speed = 120; // typing speed
    const pause = 1000; // pause before erasing
    const eraseSpeed = 60;

    let i = 0;
    let isDeleting = false;
    const target = document.querySelector(".typewriter-text");

    const githubButton = document.querySelector(".btn");
    if (githubButton) {
        githubButton.addEventListener("click", function () {
            window.open("https://github.com/sormilabagui", "_blank");
        });
    }

    function typeLoop() {
        if (!isDeleting) {
            target.textContent += text.charAt(i);
            i++;
            if (i === text.length) {
                isDeleting = true;
                setTimeout(typeLoop, pause);
                return;
            }
        } else {
            target.textContent = text.substring(0, i - 1);
            i--;
            if (i === 0) {
                isDeleting = false;
            }
        }
        setTimeout(typeLoop, isDeleting ? eraseSpeed : speed);
    }

    typeLoop();
});
