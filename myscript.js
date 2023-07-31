document.addEventListener('contextmenu', event => event.preventDefault());
let leftbtn=document.getElementById("left");
let rightbtn=document.getElementById('right');
let workCarousel=document.getElementsByClassName('carouselcont');
let workCarouselArray=[...workCarousel];

let left=0;
let right=1;
rightbtn.addEventListener("click",function(){
    if(left<2 && right>=0)
    {
        left++;
        right--;
        workCarouselArray.forEach(element => {
            element.style.transform=`translateX(${left*-100}%)`
        });
    }
})

leftbtn.addEventListener("click",function(){
    if(right<=1 && left>1)
    {
        left--;
        right++;
        workCarouselArray.forEach(element => {
            element.style.transform=`translateX(${left*-100+100}%)`
        });
    }
})

gsap.to('.right>img',{
    width:"450px",
    scrollTrigger:{
        trigger:".right>img",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub: true,
        ease: "power2.inOut"
    }
})
gsap.to('.header',{
    scrollTrigger:{
        trigger:"body",
        start:"top -5px",
        end:"top -5px",
        scrub:true,
        yoyo:true
        
    },
    backgroundColor: "#fff",
    transition:1,

})
gsap.to('.supportright>img',{
    transform:"scale(1.3)",
    scrollTrigger:{
        trigger:".supportright>img",
        scroller:"body",
        start:"top 80%",
        end:"top 10%",
        scrub: true,
    }
})

const typed1=new Typed('#changingText',{
    strings:['men','women','lgbtq+'],
    fadeOut: true,
    fadeOutDelay: 500,
    loop:true,
    showCursor:false
});



ScrollReveal({ 
    distance: '150px',
    duration:1000,
});
ScrollReveal().reveal('.workCarousel,.whatmakesinner', {
    origin:'bottom',
    reset:true,
    viewFactor:0.5
});