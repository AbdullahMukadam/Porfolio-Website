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

const Links = document.querySelectorAll(".work-date")



const GithubLink = [
  {
    project:"Portfolio Website Builder",
    Link : "https://github.com/AbdullahMukadam/Portfolio-Website-Builder"
  },
  {
    project:"Writing Buddy",
    Link : "https://github.com/AbdullahMukadam/Writing-Buddy"
  },
  {
    project:"Blogger",
    Link : "https://github.com/AbdullahMukadam/Blogger"
  },
  {
    project:"Gsap Website",
    Link : "https://github.com/AbdullahMukadam/gsap-website-canvas-"
  },
  {
    project:"HackerMan",
    Link : "https://github.com/AbdullahMukadam/hackerman-simulator"
  },
]


Links.forEach((link,index)=>{
  if(index < GithubLink.length){
    link.href = GithubLink[index].Link
  }
})