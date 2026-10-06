
// =====================================================
// PRANAV STORIES
// SCRIPT.JS
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // -------------------------------------------------
    // MOBILE MENU
    // -------------------------------------------------

    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");
    const mobileMenu = document.getElementById("mobileMenu");

    // Open mobile menu
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    // Close mobile menu
    menuClose.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });


    // -------------------------------------------------
    // MOBILE MENU LINKS
    // -------------------------------------------------

    const mobileLinks =
        document.querySelectorAll(".mobile-menu-links a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });

    });


    // -------------------------------------------------
    // CLOSE MENU WHEN CLICKING OUTSIDE
    // -------------------------------------------------

    mobileMenu.addEventListener("click", function (event) {

        if (event.target === mobileMenu) {
            mobileMenu.classList.remove("active");
        }

    });


    // -------------------------------------------------
    // NAVBAR SCROLL EFFECT
    // -------------------------------------------------

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(7, 7, 7, 0.96)";

        } else {

            navbar.style.background =
                "rgba(7, 7, 7, 0.82)";

        }

    });


    // -------------------------------------------------
    // PORTFOLIO CLICK EFFECT
    // -------------------------------------------------

    const portfolioCards =
        document.querySelectorAll(".portfolio-card");

    portfolioCards.forEach(function (card) {

        card.addEventListener("click", function () {

            card.classList.toggle("active");

        });

    });


    // -------------------------------------------------
    // FOOTER YEAR
    // -------------------------------------------------

    const copyright =
        document.querySelector(".copyright");

    if (copyright) {

        const currentYear =
            new Date().getFullYear();

        copyright.textContent =
            "© " +
            currentYear +
            " Pranav Stories. demo website.";

    }

});
