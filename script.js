window.addEventListener('load', () => {
    const images = document.querySelectorAll('.fade-in-image');
    const logo = document.querySelector('.logo')
    images.forEach(image => {
        image.style.opacity = 1; // Fade-in effect
        image.style.transform = 'translateY(0)'; // Slide-up effect
        image.style.transform = 'translateX(0)'; // Slide-up effect
    });
    setTimeout(() => {
        logo.style.opacity = 1; // Fade-in effect
        logo.style.transform = 'translateX(0)'; // Slide-up effect
    }, 1000); // 2000 milliseconds = 2 seconds
    
});

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('text');

    // Function to wrap text in spans, preserving <br> tags
    function wrapTextWithSpans() {
        const text = textElement.innerHTML;
        const words = text.split(/(\s+|\<br\s*\/?\>)/);
        textElement.innerHTML = words.map(word => {
            if (word === '<br>' || word === '<br />') {
                return '<br>'; // Preserve <br> tags
            } else {
                return `<span>${word === '' ? '&nbsp;' : word}</span>`; // Wrap words in <span>
            }
        }).join('');
    }

    wrapTextWithSpans();

    const fadeInSpans = textElement.querySelectorAll('span');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function applyFadeInOnScroll() {
        if (isElementInViewport(textElement)) {
            textElement.classList.add('visible');
        } else {
            textElement.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', applyFadeInOnScroll);
    window.addEventListener('resize', applyFadeInOnScroll); // Check visibility on resize as well
    applyFadeInOnScroll(); // Initial check in case the element is already in view
});
for (let i = 0; i < 350; i++){
    let box = document.createElement("span");
    document.getElementById("container").appendChild(box);
}
let cursor = document.getElementById("cursor");
window.addEventListener("mousemove", function(e){
    cursor.style.left = e.clientX - 350 + "px";
    if(e.clientY < 800)
    {
        cursor.style.top = e.clientY - 350 + "px";
    }
    
    
});



