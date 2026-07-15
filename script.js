/* ==========================================
   TECH FEST EXTRAVAGANZA 2026
   Government Technical High School Kurichy
==========================================*/

/* ============================
   COUNTDOWN TIMER
============================ */

const eventDate = new Date("July 31, 2026 09:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

    }

}, 1000);


/* ============================
   NAVBAR SCROLL EFFECT
============================ */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.padding = "12px 7%";

        navbar.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.12)";

    } else {

        navbar.style.padding = "16px 7%";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.08)";
    }

});
/* ============================
   SMOOTH SCROLL
============================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ============================
   ACTIVE NAVIGATION
============================ */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ============================
   FADE IN ANIMATION
============================ */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(

".feature-card,.competition-card,.member-card,.timeline-item,.gallery-box,.contact-card"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});
/* ============================
   BACK TO TOP BUTTON
============================ */

const button=document.createElement("button");

button.innerHTML="↑";

button.className="top-btn";

document.body.appendChild(button);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        button.classList.add("show-top");

    }else{

        button.classList.remove("show-top");

    }

});

button.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
