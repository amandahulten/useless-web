const homes = [
  {
    img: './images/fågelbo1.jpeg',
    street: 'Treetop Street 11',
    price: 7500,
    dm: 10,
  },
  {
    img: './images/fågelholk1.jpeg',
    street: 'Treetop Street 16',
    price: 8100,
    dm: 14,
  },
  {
    img: './images/fågelbo3.jpeg',
    street: 'Treetop Street 25',
    price: 7200,
    dm: 9,
  },
  {
    img: './images/fågelholk2.jpeg',
    street: 'Treetop Street 2',
    price: 9200,
    dm: 17,
  },
  {
    img: './images/fågelbo2.jpeg',
    street: 'Treetop Street 6',
    price: 7000,
    dm: 8,
  },
  {
    img: './images/fågelholk3.jpeg',
    street: 'Treetop Street 10',
    price: 8000,
    dm: 10,
  },
  {
    img: './images/fågelbo4.jpeg',
    street: 'Treetop Street 74',
    price: 6000,
    dm: 7,
  },
  {
    img: './images/fågelholk5.jpeg',
    street: 'Treetop Street 18',
    price: 8200,
    dm: 11,
  },
  {
    img: './images/fågelbo5.jpeg',
    street: 'Treetop Street 5',
    price: 6400,
    dm: 8,
  },
];

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

// Loops trough array and display all images with assigned information

homes.forEach((home) => {
  const div = document.querySelector('.content');

  const newDiv = document.createElement('div');
  newDiv.classList.add('div_styling');
  div.appendChild(newDiv);

  const img = document.createElement('img');
  img.src = home.img;
  img.alt = 'A bird nests or bird house in a forest environment';
  newDiv.appendChild(img);

  const title = document.createElement('h2');
  title.textContent = home.street;
  newDiv.appendChild(title);

  const price = document.createElement('h3');
  price.textContent = `Price: ${home.price}$`;
  newDiv.appendChild(price);

  const size = document.createElement('h3');
  size.textContent = `${home.dm} dm²`;
  newDiv.appendChild(size);
});

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
