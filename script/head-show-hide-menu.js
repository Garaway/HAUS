let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.head__show');

const scrollPosition = () => document.documentElement.scrollTop;
const scrollHide = () => header.classList.contains('head__hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !scrollHide() && scrollPosition() > defaultOffset) {
        header.classList.add('head__hide');
    } else if (scrollPosition() < lastScroll && scrollHide()) {
        header.classList.remove('head__hide');
    }

    lastScroll = scrollPosition();

})




