/**    navigation effect on scroll  */

window.addEventListener('scroll',() =>{
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

/**    responsive navigation sidebar menu (burger-menu)  */

const burgerMenu = document.querySelector('.header__burger'),
    nav = document.querySelector('.navigation');
    navigationItems = document.querySelectorAll('.navigation a')

burgerMenu.addEventListener('click', () => {
    // document.body.classList.toggle('lock');
    // document.body.classList.toggle('opacity');
    burgerMenu.classList.toggle('active');
    // nav.classList.toggle('.active');

    if (burgerMenu.classList.contains('active')) {
        nav.classList.remove('none')
        nav.classList.add('active')
    } else {
        nav.classList.add('none');
    }
})

navigationItems.forEach(navigationItems => {
    navigationItems.addEventListener('click', () =>{
        burgerMenu.classList.remove('active');
        nav.classList.remove('.active');
    })
})

/**  scroll to button  */

const scrollBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500);
})

/**  scroll back to top  */

scrollBtn.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
