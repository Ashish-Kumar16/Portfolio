//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick]. classList. add("active");
}
imgCards.forEach((imgCard, i) => {
    imgCard. addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns. forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});
//Our clients - Swiper

//Website dark/light theme    
const themeBtn = document.querySelector(".theme-btn");

themeBtn. addEventListener("click", () => {
    document.body. classList. toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());

});
const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn. classList. contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage. getItem("saved-icon");

if(savedTheme) {
    document.body. classList[savedTheme === "dark" ? "add" : "remove"] ("dark-theme");
    themeBtn. classList[savedIcon === "sun" ? "add" : "remove"] ("sun");
}
//Scroll to top button
const scrollTopbtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopbtn.classList.toggle("active",window.scrollY > 500);
});
scrollTopbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
//aninmation
document.addEventListener('DOMContentLoaded', function() {
    var sentences = document.querySelectorAll('.typewriter');
    var currentIndex = 0;
  
    function showNextSentence() {
      sentences[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % sentences.length;
      sentences[currentIndex].style.display = 'inline-block';
      setTimeout(showNextSentence, 4000); // Change sentence every 4 seconds
    }
  
    setTimeout(showNextSentence, 4000); // Start the animation
  });
  
//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const section = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    section.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
            document.querySelector(".nav-items a[href *= " + id + "]"). classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href *= " + id + "]"). classList.remove("active");
        }
    });
});
// //Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelector(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach ((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
//Common reveal options to create reveal animations
//Scroll reveal animations 
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});
//form
// Initialize EmailJS with your User ID
emailjs.init("user_YOUR_USER_ID");

// Function to send email using EmailJS
function sendEmail(event) {
    event.preventDefault();

    // Get form data
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    // Send email
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Message sent successfully.");
            form.reset(); // Reset the form after successful submission
        }, function(error) {
            console.error("Failed to send email:", error);
            alert("Failed to send message. Please try again later.");
        });
}

// Attach submit event listener to the form
document.getElementById("contact-form").addEventListener("submit", sendEmail);


//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, section-title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin:'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .copy-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .contact-card,contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', {delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200});