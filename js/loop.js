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
