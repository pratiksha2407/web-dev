window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    
    // If user scrolls more than 50px, add the 'scrolled' class
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
