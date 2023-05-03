function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + -100;
        window.scrollTo({top: y, behavior: 'smooth' });
    }
}