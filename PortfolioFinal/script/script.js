//Scroll Styles

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    function checkVisibility() {
        projectCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                card.style.opacity = 2;
                card.style.transform = "translateY(0)";
            } else {
                card.style.opacity = 0;
                card.style.transform = "translateY(50px)";
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check initial visibility
});



document.addEventListener("DOMContentLoaded", function () {
        const animateElements = document.querySelectorAll(".animate-element");

        function checkVisibility() {
            animateElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isVisible) {
                    element.style.opacity = 1;
                    element.style.transform = "translateY(0)";
                } else {
                    element.style.opacity = 0;
                    element.style.transform = "translateY(50px)";
                }
            });
        }

        window.addEventListener("scroll", checkVisibility);
        checkVisibility(); // Check initial visibility
});
//Close Scroll Styles

//Buttom Functions
function redirectToInstagram() {
    window.open("https://www.instagram.com/f_alvarez16/", "_blank");
}

function redirectToGithub(){
    window.open("https://github.com/tostyxx","_blank");
}

function redirectToLinkedin(){
    window.open("https://www.linkedin.com/in/fabianalvarezz/","_blank");
}

function redirectToCV() {
    const link = document.createElement("a");
    link.href = "/resources/CV Fabian (2).pdf";
    link.download = "CV_Fabian.pdf";
    link.click();
}
// Close Buttom Functions