// DOM
const anchor = Array.from(document.getElementsByTagName('a'));

// Function
const getTargetElement = e => {
    const href = e.target.getAttribute('href')
    const targetElement = document.getElementById(href);
    return targetElement;
};

const smoothScroll =  e => {
    e.preventDefault();
    const targetElement = getTargetElement(e);
    const offset = targetElement.offsetTop;
    const gap = 40;
    window.scrollTo({
        top: offset - gap,
        behavior: 'smooth'
    });
};

// Event
anchor.forEach(a => {
    a.addEventListener('click', smoothScroll);
});
