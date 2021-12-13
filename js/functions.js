const music = document.querySelector('.bird_sound');
const icon = document.querySelector('.icon');

// Keypress can't be used on mobile so I used a button instead
function clickMusic() {
  if (music.paused) {
    music.play();
    icon.src = '/images/pause-min.png';
  } else {
    music.pause();
    icon.src = '/images/play-min.png';
  }
}

icon.addEventListener('click', clickMusic);

// Here is the music function for desktop

function startMusic(press) {
  if (press.keyCode == 13) {
    music.play();
  } else {
    music.pause();
  }
}

document.addEventListener('keypress', startMusic);

window.addEventListener('scroll', scrollEventMobile);

function scrollEventDesktop() {
  const email = document.querySelector('.mail');
  const y = window.scrollY;

  if (y > 20) {
    email.className = 'mail show';
  } else {
    email.className = 'mail hide';
  }
}

window.addEventListener('scroll', scrollEventDesktop);

// Display array when clicked

const coll = document.getElementsByClassName('see_open');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;

    if (content.style.display === 'flex') {
      content.style.display = 'none';
    } else {
      content.style.display = 'flex';
    }
  });
}

function scrollEventMobile() {
  const email = document.querySelector('.mail');
  const y = window.scrollY;

  if (y > 200) {
    email.className = 'mail show';
  } else {
    email.className = 'mail hide';
  }
}
