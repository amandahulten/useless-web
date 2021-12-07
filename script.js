const homes = [
  {
    img: './images/fågelbo1.jpeg',
    street: 'Treetop Street 11',
    price: 7500,
    kvd: 10,
  },
  {
    img: './images/fågelholk1.jpeg',
    street: 'Treetop Street 16',
    price: 8100,
    kvd: 14,
  },
  {
    img: './images/fågelbo3.jpeg',
    street: 'Treetop Street 25',
    price: 7200,
    kvd: 9,
  },
  {
    img: './images/fågelholk2.jpeg',
    street: 'Treetop Street 2',
    price: 9200,
    kvd: 17,
  },
  {
    img: './images/fågelbo2.jpeg',
    street: 'Treetop Street 6',
    price: 7000,
    kvd: 8,
  },
  {
    img: './images/fågelholk3.jpeg',
    street: 'Treetop Street 10',
    price: 8000,
    kvd: 10,
  },
];
const music = document.querySelector('.bird_sound');

document.addEventListener('keypress', startMusic);

function startMusic(press) {
  if (press.keyCode == 13) {
    music.play();
  } else {
    music.pause();
  }
}

homes.forEach((home) => {
  const div = document.querySelector('.content');

  const newDiv = document.createElement('div');
  newDiv.classList.add('div_styling');
  div.appendChild(newDiv);

  const img = document.createElement('img');
  img.src = home.img;
  newDiv.appendChild(img);

  const title = document.createElement('h2');
  title.textContent = home.street;
  newDiv.appendChild(title);

  const price = document.createElement('h3');
  price.textContent = `Price: ${home.price}$`;
  newDiv.appendChild(price);

  const size = document.createElement('h3');
  size.textContent = `${home.kvd} kvd`;
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

function scrollEvent() {
  const email = document.querySelector('.mail');
  const y = window.scrollY;

  if (y > 300) {
    email.className = 'mail show';
  } else {
    email.className = 'mail hide';
  }
}

window.addEventListener('scroll', scrollEvent);

// window.onscroll = function (e) {
//   console.log(window.scrollY); // Value of scroll Y in px
// };
