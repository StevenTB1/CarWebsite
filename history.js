
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
var n = 1080;//every page interval is 1080.resolution: 1920x1080
function scrolling(e) {
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
////////////info1
  if (currentScroll > n/2 && currentScroll < 3*n/2) {//info1 open
    document.getElementById("info1").style.transform = `rotate(360deg)`;
    document.getElementById("info1Text").style.opacity = 1;
    document.getElementById("info1Sub").style.transform = `rotate(0deg)`;
    document.getElementById("info1Year").style.opacity = 1;
  }
  if(currentScroll > 3*n/2 && currentScroll < 5*n/2){//info1 close, info2 open
    document.getElementById("info1").style.transform = `rotate(270deg)`
    document.getElementById("info1Text").style.opacity = 0;
    document.getElementById("info1Sub").style.transform = `rotate(-90deg)`;
    document.getElementById("info1Year").style.opacity = 0;
    document.getElementById("info2").style.transform = `rotate(-0deg)`
    document.getElementById("info2Text").style.opacity = 1;
    document.getElementById("info2Sub").style.transform = `rotate(0deg)`;
    document.getElementById("info2Year").style.opacity = 1;
  }
  
////////////info2
  
  if(currentScroll > 5*n/2 && currentScroll < 7*n/2){//info2 close
    document.getElementById("info2").style.transform = `rotate(90deg)`
    document.getElementById("info2Text").style.opacity = 0;
    document.getElementById("info2Sub").style.transform = `rotate(90deg)`;
    document.getElementById("info2Year").style.opacity = 0;
    document.getElementById("info3").style.transform = `rotate(360deg)`
    document.getElementById("info3Text").style.opacity = 1;
    document.getElementById("info3Sub").style.transform = `rotate(0deg)`;
    document.getElementById("info3Year").style.opacity = 1;
  }
  
////////////info3
  
  if(currentScroll > 7*n/2 && currentScroll < 9*n/2){//info3 close
    document.getElementById("info3").style.transform = `rotate(270deg)`
    document.getElementById("info3Text").style.opacity = 0;
    document.getElementById("info3Sub").style.transform = `rotate(-90deg)`;
    document.getElementById("info3Year").style.opacity = 0;
    document.getElementById("info4").style.transform = `rotate(-0deg)`;
    document.getElementById("info4Text").style.opacity = 1;
    document.getElementById("info4Sub").style.transform = `rotate(0deg)`;
    document.getElementById("info4Year").style.opacity = 1;
  }
  
////////////info4
  if(currentScroll > 9*n/2 && currentScroll < 11*n/2){//info4 close
    document.getElementById("info4").style.transform = `rotate(90deg)`;
    document.getElementById("info4Text").style.opacity = 0;
    document.getElementById("info4Sub").style.transform = `rotate(90deg)`;
    document.getElementById("info4Year").style.opacity = 0;
    document.getElementById("info5").style.transform = `rotate(360deg)`;
    document.getElementById("info5Text").style.opacity = 1;
    document.getElementById("info5Sub").style.transform = `rotate(0deg)`;
    document.getElementById("info5Year").style.opacity = 1;
  }
  
////////info5
  if(currentScroll > 11*n/2 && currentScroll < 13*n/2){//info5 close
    document.getElementById("info5").style.transform = `rotate(270deg)`
    document.getElementById("info5Text").style.opacity = 0;
    document.getElementById("info5Sub").style.transform = `rotate(-90deg)`;
    document.getElementById("info5Year").style.opacity = 0;
    document.getElementById("info6").style.transform = `rotate(-0deg)`;
    document.getElementById("info6Text").style.opacity = 1;
    document.getElementById("info6Sub").style.transform = `rotate(0deg)`;
    document.getElementById("info6Year").style.opacity = 1;
  }

  if(currentScroll > 13*n/2 && currentScroll < 15*n/2){//info6 close
    document.getElementById("info6").style.transform = `rotate(90deg)`;
    document.getElementById("info6Text").style.opacity = 0;
    document.getElementById("info6Sub").style.transform = `rotate(90deg)`;
    document.getElementById("info6Year").style.opacity = 0;
    document.getElementById("info7").style.transform = `rotate(360deg)`;
    document.getElementById("info7Text").style.opacity = 1;
    document.getElementById("info7Sub").style.transform = `rotate(0deg)`;
    document.getElementById("info7Year").style.opacity = 1;
  }
  
  if(currentScroll > 15*n/2 && currentScroll < 17*n/2){//info7 close
    document.getElementById("info7").style.transform = `rotate(270deg)`
    document.getElementById("info7Text").style.opacity = 0;
    document.getElementById("info7Sub").style.transform = `rotate(-90deg)`;
    document.getElementById("info7Year").style.opacity = 0;
    document.getElementById("info8").style.transform = `rotate(-0deg)`;
    document.getElementById("info8Text").style.opacity = 1;
    document.getElementById("info8Sub").style.transform = `rotate(0deg)`;
    document.getElementById("info8Year").style.opacity = 1;
  }

  if(currentScroll > 17*n/2 && currentScroll < 19*n/2){//info8 close
    document.getElementById("info8").style.transform = `rotate(90deg)`;
    document.getElementById("info8Text").style.opacity = 0;
    document.getElementById("info8Sub").style.transform = `rotate(90deg)`;
    document.getElementById("info8Year").style.opacity = 0;
  }
  
}
document.addEventListener('scroll', (e) => scrolling(e))