
// function blogBtn(e) {
//     console.log(e);
//     toggleBlogPopup();
//     blogItemDetails(e.target.parentElement);
// }

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
    
    document.querySelector(".pp__body").innerHTML = portfolioItem.querySelector(".blog__item-details").innerHTML;
}