// Scroll Indicator
window.addEventListener('scroll', function() {
    var scrollIndicator = document.getElementById('scroll-indicator');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / docHeight) * 100;
    scrollIndicator.style.setProperty('--scroll-fill', scrollPercent + '%');
});

// Back to Top Button
var backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
