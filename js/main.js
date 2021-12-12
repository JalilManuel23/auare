const header = document.querySelector("header");
const menuContainer = document.querySelector(".bar-menu-container");
const sectionOne = document.querySelector(".main");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
            menuContainer.classList.remove("bar-menu-container-2"); 
        } else {
            header.classList.remove("nav-scrolled");
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

window.onscroll = function() {
    if( pageYOffset != 0 ) {
        header.classList.add("shadow");
        menuContainer.classList.add("bar-menu-container-2");
        menuContainer.classList.remove("p-t-10"); 
    } else {
        header.classList.remove("shadow");
        menuContainer.classList.add("p-t-10");
        menuContainer.classList.remove("bar-menu-container-2"); 
    }
}


/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}