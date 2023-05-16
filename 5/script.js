const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image: '1.jpeg',
    price: 15.50,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image: '2.webp',
    price: 79.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image: '3.webp',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image: '4.webp',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image: '5.jpeg',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image: '6.webp',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image: '7.webp',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image: '8.webp',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image: '9.png',
    price: 39.95,
  },
  
];



let bars = document.querySelector(".bars")

let nav_list_bars = () =>{
    let nav_list = document.querySelector(".nav-list").classList
    nav_list.toggle("nav")
}

bars.addEventListener("click", nav_list_bars)








// let imya = document.querySelector('.imya') 
// let login = document.querySelector('.login') 
// let pass = document.querySelector('.pass') 
// let pass2 = document.querySelector('.pass2') 
// let error = document.querySelectorAll('.error') 
// let errorl = document.querySelector('.errorl') 
// let errorp = document.querySelector('.errorp') 
// let button = document.querySelector('.reg') 
 
// let  reg = () =>{ 
//     if(imya.value=='' || login.value == ''){ 
//        error.forEach((item) => { 
//         item.innerHTML="Укажите логин!" 
//        }) 
//     } 
//     else if (imya.value.length < 5 || login.value.length < 5){ 
//         error.forEach((item) => { 
//             item.innerHTML=" От 5 до 25 символов!" 
//            }) 
       
//     } 
 
//     if (pass.value == '' || pass2.value == ''   ){ 
//         errorp.forEach((item) => { 
//             item.innerHTML=" pisi !" 
//            }) 
         
//     } 
//     else 
//     { 
//         error.innerHTML=" " 
//     } 
     
// if(pass.value == pass2.value) { 
//     errorp.innerHTML=" " 
// } else { 
//     errorp.innerHTML ="пароль не совпадает" 
// } 
 
// } 
// button.addEventListener("click", reg) 
 
 
// // menu 
// let open = document.querySelector ('.open') 
// let menu = document.querySelector ('.menu') 
// let close = document.querySelector ('.close') 
 
// open.addEventListener ('click', () => { 
//     menu.classList.add ('active') 
// }) 
 
// close.addEventListener ('click', () => { 
//     menu.classList.remove ('active') 
// })




let filteredProducts = [...products];
const productsContainer = document.querySelector('.products-container');
const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Товар не найден!!!</h6>`;
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join('');
};


displayProducts();

// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// console.log(
//   products.filter((product) => {
//     return product.title.toLowerCase().includes('');
//   })
// );

// Filter Buttons

const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];
  // console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join('');
};

displayButtons();

companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = '';
    displayProducts();
  }
});
