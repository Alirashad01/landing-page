/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Global Variables 

const navbarList = document.querySelector("#navbar_list");
const sections= document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu_link");

// End Global Variables

 // Start Helper Functions
function liCreate(num) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const text = document.createTextNode(`section${num}`);
    listItem.appendChild(link);
    link.appendChild(text);
    navbarList.appendChild(listItem);
    link.setAttribute("href", "#");
    link.setAttribute("class", "menu__link");
    link.setAttribute("id", `sect${num}`);
    //listItem.setAttribute("id", "list");
    
} 

function createNav() {
    for(var i = 1; i <= sections.length; i++) {
        liCreate(i);
     }
     
}





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
window.addEventListener("load", createNav);


// Add class 'active' to section when near top of viewport

/*if("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if(entry.isIntersecting) {
                // remove all active classes from all sections and links
                section.classList.remove('your-active-class');
                // add active class to active class entry target
                entry.target.classList.add('your-active-class');
                observer.unobserve(entry.target);
            }
        });
    },
        {rootMargin: "0px 0px -300px 0px"}
    );

    for (const section of sections) {
        observer.observe(section);
    }
}*/


/*if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // remove active class from all sections and links
                for(var j = 1; j <= sections.length; j++) {
                    let section = document.querySelector(`#section${j}`);
                    section.classList.remove('your-active-class');
                    let activeLink = document.querySelector(`#section${j}`);
                    activeLink.classList.remove('your-active-class');
                    
                }
                //add active class to the active section
                entry.target.classList.add('your-active-class');
                const equivlantLink = document.querySelector(`#section${j}`)

                observer.unobserve(entry.target);
            }
        });
    },
        { rootMargin: "0px 0px -300px 0px"}
    );

    for (const section of sections) {
        observer.observe(section);
    }
}*/








// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
function scrollToSection(event) {
    event.preventDefault();
    const equivSection = document.querySelector(`[id = ${event.target.textContent}]`);
    equivSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    console.log(equivSection);
}

navbarList.addEventListener('click', scrollToSection);
// Set sections as active
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // remove active class from all sections and links
               for (const section of sections) {
                   section.classList.remove('your-active-class');
               }

               for (const navLink of navLinks) {
                navLink.classList.remove('your-active-class');
            }

               entry.target.classList.add('your-active-class');

               
                observer.unobserve(entry.target);
            }
        });
    },
        { rootMargin: "0px 0px -300px 0px"}
    );

    for (const section of sections) {
        observer.observe(section);
    }
}





