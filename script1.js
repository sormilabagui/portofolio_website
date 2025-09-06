document.addEventListener("DOMContentLoaded", function () {
    const text = "Developer";
    const speed = 120; // typing speed
    const pause = 1000; // pause before erasing
    const eraseSpeed = 60;

    let i = 0;
    let isDeleting = false;
    const target = document.querySelector(".typewriter-text");

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

const toggle = document.getElementById('toggle');
        const body = document.body;
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            body.classList.toggle('night');
        });

const skillsSection = document.querySelector("#skills");
    const skillElements = document.querySelectorAll(".skill");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    };

    const animateSkills = () => {
      skillElements.forEach(skill => {
        const progress = skill.querySelector(".progress");
        const percentageSpan = skill.querySelector(".percentage");
        const percent = parseInt(skill.getAttribute("data-percent"));

        // Animate the bar
        progress.style.width = percent + "%";

        // Animate the number
        let current = 0;
        const duration = 2000; // 2 seconds
        const stepTime = Math.max(Math.floor(duration / percent), 20);

        const counter = setInterval(() => {
          current++;
          percentageSpan.textContent = current + "%";
          if (current >= percent) {
            clearInterval(counter);
          }
        }, stepTime);
      });
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.unobserve(skillsSection);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(skillsSection);
