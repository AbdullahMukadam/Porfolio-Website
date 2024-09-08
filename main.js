const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
})

function wavedown(){
  tl.to(".ocean",{
    y:"97vh",
    opacity:1,
    duration:1.8
  })
}

function notificationshow(){
  tl.to(".notification",{
    y:"0vh",
    duration:1.8
  })
}

function navigationlinks(){
  gsap.to(".Middle a",{
    opacity:1,
    scale:1,
    duration:3
  })
}





const hamburger = document.querySelector(".hamburger")
let notification = document.querySelector(".notification")

hamburger.addEventListener("click",function(){
  hamburger.classList.toggle("active")
  notification.classList.toggle("notification-show")
  wavedown()
navigationlinks()
})


let title = document.querySelector("#elem1 h4")

title.addEventListener("click",()=>{
  let url = "https://portfolio-website-builder.vercel.app/"
 window.open(url,"_blank")
})

let title2 = document.querySelector("#elem3 h4")

title2.addEventListener("click",()=>{
  let url = "https://writing-buddy-livid.vercel.app/login"
 window.open(url,"_blank") 
})