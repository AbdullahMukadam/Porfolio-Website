const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()



function wavedown(){
  tl.to(".ocean",{
    y:"97vh",
    duration:1.8
  })
}

function waveup(){
  tl.to(".ocean",{
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
