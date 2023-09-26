/* side bar */
function openNav() {
  document.getElementById("sidebar").style.left = "0%";
}

function closeNav() {
  document.getElementById("sidebar").style.left = "-20%";
}

// menu button
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    openNav();
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    closeNav();
  }
})

// Fade animations 
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      //entry.target.classList.remove('show')
    }
  })
})

// fade in animations
const hiddenFadeLeftElements = document.querySelectorAll('.hiddenFadeLeft');
hiddenFadeLeftElements.forEach((el) => fadeObserver.observe(el));

const hiddenFadeRightElements = document.querySelectorAll('.hiddenFadeRight');
hiddenFadeRightElements.forEach((el) => fadeObserver.observe(el));

// animation for the big players text
let observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showThe');
    } else {
      entry.target.classList.remove('showThe')
    }
  })
})
document.querySelectorAll('.intro-block3-title-the').forEach((el) => observer1.observe(el));

// animation for the big players text
let observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(function() {
        entry.target.classList.add('showBig');
      }, 250);
    } else {
      entry.target.classList.remove('showBig')
    }
  })
})
document.querySelectorAll('.intro-block3-title-big').forEach((el) => observer2.observe(el));

// animation for the big players text
let observer3  = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
     setTimeout(function() {
        entry.target.classList.add('showPlayers');
      }, 600);
    } else {
      entry.target.classList.remove('showPlayers')
    }
  })
})
document.querySelectorAll('.intro-block3-title-players').forEach((el) => observer3.observe(el));

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       document.querySelectorAll(".animated")[0].classList.add("fadeFromLeft");
//       document.querySelectorAll(".animated")[1].classList.add("fadeFromRight");
//     }
//   })
// })

// observer.observe(document.querySelector(".intro-block1-container"));


// From https://youtu.be/PkADl0HubMY: sliding image track effect from https://camillemormal.com.
const track = document.getElementById("image-track");

if (track !== null) {
  const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  }

  const handleOnMove = e => {
    if (track === null || track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth / 4;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -68);

    track.dataset.percentage = nextPercentage;

    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for (const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  }

  /* -- Had to add extra lines for touch events -- */
  window.onmousedown = e => handleOnDown(e);
  window.ontouchstart = e => handleOnDown(e.touches[0]);
  window.onmouseup = e => handleOnUp(e);
  window.ontouchend = e => handleOnUp(e.touches[0]);
  window.onmousemove = e => handleOnMove(e);
  window.ontouchmove = e => handleOnMove(e.touches[0]);
}
