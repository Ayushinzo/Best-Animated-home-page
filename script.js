let cursor  = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")
document.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.x-12+"px"
    cursor.style.top = e.y-12+"px"
    blur.style.left = e.x-125+"px"
    blur.style.top = e.y-125+"px"
})

gsap.to("#nav", {
    backgroundColor:"#000",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger:"#main",
        scroller: "body",
        start: "top -25%",
        end:"top -70%",
        scrub: 2,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:3,
    }
})

gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:3,
    }
})