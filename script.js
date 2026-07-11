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

    // close when user taps elsewhere
    document.addEventListener("click", function () {

        if (window.innerWidth <= 900) {

            menu.classList.remove("show-nav");

        }

    });

    menu.addEventListener("click", function (e) {

        e.stopPropagation();

    });

}

//=========================================
// ACTIVE NAVIGATION
//=========================================

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

if(link.href===window.location.href){

link.classList.add("active");

}

});

//=========================================
// SCROLL TO TOP BUTTON
//=========================================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

//=========================================
// SCROLL ANIMATION
//=========================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

//=========================================
// GALLERY LIGHTBOX
//=========================================

const galleryImages=document.querySelectorAll(".gallery-track img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

const img=document.createElement("img");

img.src=image.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(img);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

//=========================================
// FOOTER YEAR
//=========================================

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=`© ${new Date().getFullYear()} Fresh Oil Ministries | All Rights Reserved`;

}
