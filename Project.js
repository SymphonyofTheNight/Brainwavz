gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({default:{ ease: "Power1.Out" }});

const box = document.querySelector('.content-box-2');

tl.to(".brand-name",{
    x: 0, duration: 2, opacity: 1
});
tl.to(".brand-description",{
    x: 0, duration:2, opacity: 1,
});

const details = document.querySelector('.more-details-text');
const btn = document.querySelector('.more-details-inner');

btn.addEventListener('click', function(){
    gsap.from('.text-hm5',{
        opacity: 0, duration: 2,
    });
    document.querySelector('.text-hm5').innerHTML = "The HM5 are high-performance Studio Monitors that won't <tr> color your music but reproduce it honestly just the way it sounded in the studio.<tr>The HM5 are for those that really want to hear everything clear and precise, that demand the upmost accuracy and perfection in their music.";
});
details.addEventListener('click', function(){
    document.querySelector('.text-hm5').innerHTML = "GINO";
});

