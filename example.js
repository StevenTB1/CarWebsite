function openNav() {
  document.getElementById("sidebar").style.left = "0%";
}

function closeNav() {
  document.getElementById("sidebar").style.left = "-20%";
}

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

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.height == "0px") {
      content.style.height = "65%";
      content.style.borderWidth = "4px";
    } else {
      content.style.height = "0";
      content.style.borderWidth = "0px";
    }
  });
}

// Fade animations 
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
  })
})

// fade in animations
const hiddenFadeLeftElements = document.querySelectorAll('.hiddenFadeLeft');
hiddenFadeLeftElements.forEach((el) => fadeObserver.observe(el));

const hiddenFadeRightElements = document.querySelectorAll('.hiddenFadeRight');
hiddenFadeRightElements.forEach((el) => fadeObserver.observe(el));

const hiddenFadeBottomElements = document.querySelectorAll('.hiddenFadeBottom');
hiddenFadeBottomElements.forEach((el) => fadeObserver.observe(el));

consoleText(['See The Examples', 'Meet The Representatives'], 'text', ['#FEFEFE', '#FDB731']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}