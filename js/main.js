
/* --> SHOW AND HIDDEN MENU */
// --> show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// --> menu show 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// --> menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



/* --> REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));



/* --> CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);



/* --> TESTIMONIAL SWIPER */
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



/* --> TESTIMONIAL SWIPER */
let blogSwiper = new Swiper(".blog-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        // 1024: {
        //   slidesPerView: 4,
        // },
    },

});


/* --> SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/* --> SHOW SCROLL UP */ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





/* --> PORTFOLIO POPUP */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("portfolio__button")){
        togglePortfolioPopup();
        // document.querySelector(".portfolio-popup").scrollTo(0.0);
        portfolioItemDetails(e.target.parentElement);
    }
}) 
function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open")
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".header").classList.toggle("fade-out");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp__close").addEventListener("click", togglePortfolioPopup);
// hide popup with outside
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp__inner")) {
        togglePortfolioPopup();
    }
})

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".portfolio__img").src;
    document.querySelector(".pp__header h3").innerHTML = portfolioItem.querySelector(".portfolio__title").innerHTML;
    document.querySelector(".pp__body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
  



/* --> BLOG POPUP */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("blog__button")){
        toggleBlogPopup();
        // document.querySelector(".portfolio-popup").scrollTo(0.0);
        blogItemDetails(e.target.parentElement);
    }
}) 
function toggleBlogPopup() {
    document.querySelector(".blog__popup").classList.toggle("open")
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".header").classList.toggle("fade-out");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".blog__close").addEventListener("click", toggleBlogPopup);
// hide popup with outside
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("blog__inner")) {
        toggleBlogPopup();
    }
})

function blogItemDetails(portfolioItem) {
    document.querySelector(".blog__thumbnail img").src = portfolioItem.querySelector(".blog__img").src;
    document.querySelector(".blog__header h3").innerHTML = portfolioItem.querySelector(".blog__title").innerHTML;
    document.querySelector(".blog__body").innerHTML = portfolioItem.querySelector(".blog__item-details").innerHTML;
}




/* --> DARK LIGHT THEME */ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-solid fa-moon' : 'fa-solid fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-solid fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/* --> TYPE JS */
let typed = new Typed(".type", {
    strings: 
            [
             "Frontend Web Developer.",
             "React Developer.",
             "Junior Backend Developer.",
             "MERN Stack Developer.",
             " Freelancer.",
             "Student.",
                ],
             typeSpeed: 40,
             backSpeed: 40,
             backDelay: 2000,
             loop: true,
  });
$(".gallery-content").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    }
});