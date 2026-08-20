// =========================================
// LOGO MENU
// =========================================

const logo = document.getElementById("logoToggle");
const menu = document.getElementById("mainNav");

if (logo && menu) {

    logo.addEventListener("click", function (e) {

        if (window.innerWidth <= 900) {

            e.stopPropagation();

            menu.classList.toggle("show-nav");

        }

    });

    // Close menu when user taps elsewhere
    document.addEventListener("click", function () {

        if (window.innerWidth <= 900) {

            menu.classList.remove("show-nav");

        }

    });

    menu.addEventListener("click", function (e) {

        e.stopPropagation();

    });

}


// =========================================
// ACTIVE NAVIGATION
// =========================================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    if (link.href === window.location.href) {

        link.classList.add("active");

    }

});


// =========================================
// SCROLL TO TOP BUTTON
// =========================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

topButton.setAttribute("aria-label", "Scroll to top");

document.body.appendChild(topButton);


window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


// =========================================
// SCROLL ANIMATION
// =========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});


document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================================
// GALLERY LIGHTBOX
// =========================================

const galleryImages = document.querySelectorAll(".gallery-track img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

    <span class="lightbox-close">&times;</span>

    <img id="lightbox-img" src="" alt="Gallery Image">

`;

document.body.appendChild(lightbox);


const lightboxImage = document.getElementById("lightbox-img");

const lightboxClose = document.querySelector(".lightbox-close");


galleryImages.forEach(image => {

    image.addEventListener("click", function () {

        lightboxImage.src = this.src;

        lightboxImage.alt = this.alt;

        lightbox.classList.add("active");

    });

});


// Close button

lightboxClose.addEventListener("click", function (event) {

    event.stopPropagation();

    lightbox.classList.remove("active");

});


// Close when clicking outside the picture

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


// Close with Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});


// =========================================
// FOOTER YEAR
// =========================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Fresh Oil Ministries | All Rights Reserved`;

}