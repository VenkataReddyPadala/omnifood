const yearEl = document.querySelector('.year');
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('header');
const allLinks = document.querySelectorAll('a:link');

const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear;

btnNavEl.addEventListener('click',()=>{
    headerEl.classList.toggle('nav-open');
    document.body.classList.toggle('overflow-vt'); /* To avoid scroll on mobile nav */
});


//scroll implimentation for safari browser
allLinks.forEach(link =>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const href = link.getAttribute('href');
        if(href === '#'){
            window.scrollTo({
                top:0,
                behavior:'smooth',
            });
        }

        if(href !== '#' && href.startsWith('#')){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior:'smooth'});
        }

        if(link.classList.contains('main-nav-link')){
            headerEl.classList.remove('nav-open');
            document.body.classList.toggle('overflow-vt'); /* To avoid scroll on mobile nav */

        }
    })
})

//sticky nav 


const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
    function(entries){
        const ent = entries[0];
        if(ent.isIntersecting === false) {
           document.body.classList.add('sticky')
        }
        else {
            document.body.classList.remove('sticky')
        }
    },
    {
    root:null,
    threshold:0,
    rootMargin:'-80px',//only pxs will work here and 80 bcz nav height is 8rem no need for other projects
});


obs.observe(sectionHeroEl);
