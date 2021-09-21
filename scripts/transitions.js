

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();

  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.2,
  });
  tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".animate-fade-up", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.4,
    delay: 0.2,
  })
  // .from("p, h3, figure", {
  //   duration: 0.6,
  //   opacity: 0,
  //   stagger: 0.3,
  // }, "-=5");
}




const options = {
  threshold: 0.3,
  rootMargin: "0px",
};

const video = document.querySelector(".coffee-video")

// JS: Play videos while they are visible in the viewport
const videoObserver = new IntersectionObserver((entries, observer) => {
  for (const entry of entries) entry.isIntersecting ? video.play() : video.pause();
});

for (const element of document.querySelectorAll('.js-viewport-aware-video')) {
  videoObserver.observe(element);
}


const animationObserver = new IntersectionObserver((entries, observer)=>
{
  for (const entry of entries)
  {
    console.log(entry.target)
    entry.target.classList.toggle("animated", entry.isIntersecting)
  }
}, options)

// Use that IntersectionObserver to observe the visibility
// of some elements
for (const element of document.querySelectorAll('.build-in-animate')) {
  animationObserver.observe(element);
}
