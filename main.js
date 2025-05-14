/*
    Carousel
*/
// Carousel Variables
let thumbnails = document.querySelector(".thumbnail");
let slider = document.querySelector(".containe-r");
let btnRight = document.querySelector("#slide-right");
let btnLeft = document.querySelector("#slide-left");
const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');

const triggers = document.querySelectorAll('li.filter-trigger');
const users = document.querySelectorAll('.user');
var all = document.querySelector('.reset')

function clearActive() {
  var activeLink = document.querySelector('.active');
  activeLink.classList.remove("active");
}

triggers.forEach(element => {
  element.addEventListener('click', function() {
    clearActive();
    element.classList.add('active');
    
    let filter = element.dataset.filter;
    console.log(filter);
    
    users.forEach(users => {
      if(!users.classList.contains(filter)) {
        users.classList.add('hide');
      } else {
        users.classList.remove('hide');
      }
    });
    
    if(filter === 'featured') {
      users.forEach(users => {
        users.classList.remove('hide');
      })
    }
  })
});


/* $(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
            $(".f-footer").show();
            $(".social-card").css("margin-bottom","55%");
        }else {
            $(".f-footer").hide();
        }
    });
}); */

$('.tab-link').click(function(){
    var contClass = $(this).data('div');
    $('.content').hide().filter('.' + contClass).show()
})

function changeIcon(anchor) {
    let icon = anchor.querySelector("#caretIcon");
    icon.classList.toggle('fa-caret-right');
    icon.classList.toggle('fa-caret-down');
}

function changeFaIcon(anchor) {
    let icon = anchor.querySelector("#faHeart");
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');
}

//import { jimba } from "./js/detail.js";
//jimba();
// Variables

const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartTotalTwo = document.querySelector('.cart-total-two');
const cartContent = document.querySelector('.cart-content');  
const clearCartBtn = document.querySelector('.clear-cart');  
const featuredProducts = document.querySelector('.user-wrapper');
const featuredEvents = document.querySelector('.featured-events');
const tourismEvents = document.querySelector('.tourism-events');
const musicEvents = document.querySelector('.music-events');
const festivalEvents = document.querySelector('.festival-events');
const theatreEvents = document.querySelector('.theatre-events');
const moviesEvents = document.querySelector('.movies-events');
const featuredVouchers = document.querySelector('.vouchers');
const all_btns = document.querySelector('.btn-nn');
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const resultsBox = document.querySelector('.result-box');

// testing
document.querySelector('#featured-city').addEventListener("change", filterEventsByCity);
document.querySelector('#featured-date').addEventListener("change", filterEventsByDate);
document.querySelector('#music-city').addEventListener("change", filterEventsByCity);
document.querySelector('#music-date').addEventListener("change", filterEventsByDate);
document.querySelector('#tourism-city').addEventListener("change", filterEventsByCity);
document.querySelector('#tourism-date').addEventListener("change", filterEventsByDate);
document.querySelector('#festival-city').addEventListener("change", filterEventsByCity);
document.querySelector('#festival-date').addEventListener("change", filterEventsByDate);
document.querySelector('#theatre-city').addEventListener("change", filterEventsByCity);
document.querySelector('#theatre-date').addEventListener("change", filterEventsByDate);
document.querySelector('#movies-city').addEventListener("change", filterEventsByCity);
document.querySelector('#movies-date').addEventListener("change", filterEventsByDate);

const featuredDate = document.querySelector('#featured-date');
const musicDate = document.querySelector('#music-date');
const tourismDate = document.querySelector('#tourism-date');
const festivalDate = document.querySelector('#festival-date');
const theatreDate = document.querySelector('#theatre-date');
const moviesDate = document.querySelector('#movies-date');

let x = '';
const d = new Date();
const getDate = (d.getDate() < 10 ? '0' : '') + d.getDate();
const getDateT = (d.getDate() < 10 ? '0' : '') + (d.getDate() + 1);
const getDateS = (d.getDate() < 10 ? '0' : '') + (d.getDate() + (6 - d.getDay()));
const getDateSun = (d.getDate() < 10 ? '0' : '') + (d.getDate() + (7 - d.getDay()));
const monthName = month[d.getMonth()];

const selectData = [{value:"anytime", label:"Anytime"},
    {value:`${getDate} ${monthName} ${d.getFullYear()}`, label: "Today"},
    {value:`${getDateT} ${monthName} ${d.getFullYear()}`, label:"Tomorrow"},
    {value:`${getDateS} ${monthName} ${d.getFullYear()}`, label:"This Saturday"},
    {value:`${getDateSun} ${monthName} ${d.getFullYear()}`, label:"This Sunday"},
    {value:`${monthName} ${d.getFullYear()}`, label:"This Month"}
]

selectData.forEach(t => {
    x += `<option value="${t.value}">${t.label}</option>`;
})

featuredDate.innerHTML = x;
musicDate.innerHTML = x;
tourismDate.innerHTML = x;
festivalDate.innerHTML = x;
theatreDate.innerHTML = x;
moviesDate.innerHTML = x;

function filterEventsByCity(){
    const selectedFeaturedCity = document.querySelector('#featured-city').value;
    const featuredCards = document.querySelectorAll('#featured-cards .item-city');
    const selectedMusicCity = document.querySelector('#music-city').value;
    const musicCards = document.querySelectorAll('#music-cards .item-city');
    const selectedTourismCity = document.querySelector('#tourism-city').value;
    const tourismCards = document.querySelectorAll('#tourism-cards .item-city');
    const selectedFestivalCity = document.querySelector('#festival-city').value;
    const festivalCards = document.querySelectorAll('#festival-cards .item-city');
    const selectedTheatreCity = document.querySelector('#theatre-city').value;
    const theatreCards = document.querySelectorAll('#theatre-cards .item-city');
    const selectedMoviesCity = document.querySelector('#movies-city').value;
    const moviesCards = document.querySelectorAll('#movies-cards .item-city');

    featuredCards.forEach((item) => {
        if(item.textContent.toLowerCase() === selectedFeaturedCity.toLowerCase() || selectedFeaturedCity === "anywhere"){
            let section = item.parentElement;
            section.parentNode.style.display = "";
        }else{
            let section = item.parentElement;
            section.parentNode.style.display = "none";
                //item.style.display = "";
        }
    });

    musicCards.forEach((item) => {
        if(item.textContent.toLowerCase() === selectedMusicCity.toLowerCase() || selectedMusicCity === "anywhere"){
            let section = item.parentElement;
            section.parentNode.style.display = "";
        }else{
            let section = item.parentElement;
            section.parentNode.style.display = "none";
                //item.style.display = "";
        }
    });

    tourismCards.forEach((item) => {
        if(item.textContent.toLowerCase() === selectedTourismCity.toLowerCase() || selectedTourismCity === "anywhere"){
            let section = item.parentElement;
            section.parentNode.style.display = "";
        }else{
            let section = item.parentElement;
            section.parentNode.style.display = "none";
                //item.style.display = "";
        }
    });

    festivalCards.forEach((item) => {
        if(item.textContent.toLowerCase() === selectedFestivalCity.toLowerCase() || selectedFestivalCity === "anywhere"){
            let section = item.parentElement;
            section.parentNode.style.display = "";
        }else{
            let section = item.parentElement;
            section.parentNode.style.display = "none";
                //item.style.display = "";
        }
    });

    theatreCards.forEach((item) => {
        if(item.textContent.toLowerCase() === selectedTheatreCity.toLowerCase() || selectedTheatreCity === "anywhere"){
            let section = item.parentElement;
            section.parentNode.style.display = "";
        }else{
            let section = item.parentElement;
            section.parentNode.style.display = "none";
                //item.style.display = "";
        }
    });
    moviesCards.forEach((item) => {
        if(item.textContent.toLowerCase() === selectedMoviesCity.toLowerCase() || selectedMoviesCity === "anywhere"){
            let section = item.parentElement;
            section.parentNode.style.display = "";
        }else{
            let section = item.parentElement;
            section.parentNode.style.display = "none";
                //item.style.display = "";
        }
    });
}

function filterEventsByDate(){
    const selectedFeaturedDate = document.querySelector('#featured-date').value;
    const featuredCards = document.querySelectorAll('#featured-cards .item-date');
    const selectedMusicDate = document.querySelector('#music-date').value;
    const musicCards = document.querySelectorAll('#music-cards .item-date');
    const selectedTourismDate = document.querySelector('#tourism-date').value;
    const tourismCards = document.querySelectorAll('#tourism-cards .item-date');
    const selectedFestivalDate = document.querySelector('#festival-date').value;
    const festivalCards = document.querySelectorAll('#festival-cards .item-date');
    const selectedTheatreDate = document.querySelector('#theatre-date').value;
    const theatreCards = document.querySelectorAll('#theatre-cards .item-date');
    const selectedMoviesDate = document.querySelector('#movies-date').value;
    const moviesCards = document.querySelectorAll('#movies-cards .item-date');

    featuredCards.forEach((item) => {
    if(item.textContent.includes(selectedFeaturedDate) || selectedFeaturedDate === "anytime"){
        let section = item.parentElement;
        section.parentNode.style.display = "";
    }else{
        let section = item.parentElement;
        section.parentNode.style.display = "none";
        //item.style.display = "";
    }});

    musicCards.forEach((item) => {
    if(item.textContent.includes(selectedMusicDate) || selectedMusicDate === "anytime"){
        let section = item.parentElement;
        section.parentNode.style.display = "";
    }else{
        let section = item.parentElement;
        section.parentNode.style.display = "none";
        //item.style.display = "";
    }});

    tourismCards.forEach((item) => {
    if(item.textContent.includes(selectedTourismDate) || selectedTourismDate === "anytime"){
        let section = item.parentElement;
        section.parentNode.style.display = "";
    }else{
        let section = item.parentElement;
        section.parentNode.style.display = "none";
        //item.style.display = "";
    }});

    festivalCards.forEach((item) => {
    if(item.textContent.includes(selectedFestivalDate) || selectedFestivalDate === "anytime"){
        let section = item.parentElement;
        section.parentNode.style.display = "";
    }else{
        let section = item.parentElement;
        section.parentNode.style.display = "none";
        //item.style.display = "";
    }});

    theatreCards.forEach((item) => {
    if(item.textContent.includes(selectedTheatreDate) || selectedTheatreDate === "anytime"){
        let section = item.parentElement;
        section.parentNode.style.display = "";
    }else{
        let section = item.parentElement;
        section.parentNode.style.display = "none";
        //item.style.display = "";
    }});
    moviesCards.forEach((item) => {
    if(item.textContent.includes(selectedMoviesDate) || selectedMoviesDate === "anytime"){
        let section = item.parentElement;
        section.parentNode.style.display = "";
    }else{
        let section = item.parentElement;
        section.parentNode.style.display = "none";
        //item.style.display = "";
    }});
}




// cart

let cart = [];

// Getting the products
class Products {
    async getProducts(){
        try {
            let result = await fetch('data.json');
            let data = await result.json();
            let products = data.items;
            /* products = products.map(item => {
                const { id, title, desc_title, desc_text, venue, img} = item;
                return {id, title, desc_title, desc_text, venue, img};
            }) */
            return products
        } catch (error) {
            console.log(error);
        }
    }
}

// setting up shopping cart

let sc = localStorage.getItem("cartt");
if(sc){
    cart = JSON.parse(localStorage.getItem("cartt"));
}else{
    cart = [];
}

// Display products
class UI {
    constructor() {
        this.hardcodedUser = {
            username: "admin",
            password: "password123"
        };
    }

    checkLoginStatus() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            this.showDashboard(loggedInUser);
        }
    }

    login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === this.hardcodedUser.username && password === this.hardcodedUser.password) {
            localStorage.setItem("loggedInUser", username);
            location.reload(); // Reload the page after successful login
        } else {
            alert("Invalid username or password!");
        }
    }

    logout() {
        localStorage.removeItem("loggedInUser");
        document.querySelector(".user-name").style.display = "none";
        document.querySelector(".log-in").style.display = "block";
        document.querySelector("#logoutBtn").style.display = "none";
    }

    showDashboard(username) {
        document.querySelector(".user-name").style.display = "block";
        document.querySelector("#logoutBtn").style.display = "block";
        document.querySelector(".log-in").style.display = "none";
        document.querySelector("body").style.display = "block";
        document.getElementById("user").innerText = username;
    }

    displayProducts(products){

        const categoryMap = {};
    
        // Group products by genre
        products.forEach(product => {
            if (!categoryMap[product.genre]) {
                categoryMap[product.genre] = [];
            }
            if (categoryMap[product.genre].length < 4) {
                categoryMap[product.genre].push(product);
            }
        });

        const defaultFeatured = [];

        // Pick one from each category to build a 4-item "featured" set
        Object.keys(categoryMap).forEach(genre => {
            if (categoryMap[genre][0]) {
                defaultFeatured.push(categoryMap[genre][0]);
            }
        });
    
        // Limit to max 4 default featured
        const featuredItems = defaultFeatured.slice(0, 4);

        let resultHome = '';
        Object.keys(categoryMap).forEach(genre => {
        categoryMap[genre].forEach(product => {
            const d = new Date(product.date);
            const getDate = (d.getDate() < 10 ? '0' : '') + d.getDate();
            const monthName = month[d.getMonth()];
            const hour = (d.getHours() < 10 ? '0' : '') + d.getHours();
            const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            const time = `${hour}:${minutes}`;

            // Check if this product is one of the featured defaults
            const isFeatured = featuredItems.includes(product) ? 'featured' : '';
            
            //if(product.genre === )
            resultHome +=`
            <div class="col-3 filterDiv ${product.genre} ${isFeatured}">
             <a href="./pages/details.html?genre=${product.genre}&id=${product.id}" style="text-decoration:none;">
            <div class="card kard">
              <div class="img">
                <img src="./images/${product.img}" class="img-fluid" draggable="false" alt="">
              </div>
              <h6 class="card-text text-muted fw-bold text-uppercase mt-2">From ${getDate} ${monthName} ${new Date(product.date).getFullYear()} ${time}</h6>
              <span class="card-title fw-bold fs-5">${product.title}</span>
              <p>${product.venue}</p>
              <span class="card-text text-secondary fw-bold">R ${product.price}</span>
            </div>
            </a>
            </div>`;
        });
        });
        let resultEvents = '';
        let tourismE = '';
        let musicE = '';
        let festivalE = '';
        let theatreE = '';
        let moviesE = '';
        
        products.filter(value => value.genre !== "Vouchers").forEach(product => {
            //newEventsElm.href = `./pages/details.html?id=${product.id}`;
            //document.querySelector('a').style.textDecoration = 'none';
            //newEventsElm.innerHTML = 'Ghjst';
            //featuredEvents.classList.add('row');
            const d = new Date(product.date);
            const getDate = (d.getDate() < 10 ? '0' : '') + d.getDate();
            const monthName = month[d.getMonth()];
            const hour = (d.getHours() < 10 ? '0' : '') + d.getHours();
            const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            const time = `${hour}:${minutes}`;
            
            resultEvents +=`
            <div class="col-md-4 mb-3">
            <a href="./pages/details.html?genre=${product.genre}&id=${product.id}" style="text-decoration:none;">
                  <div class="card border-0 bg-success bg-opacity-25">
                    <img src="./images/${product.img}" class="card-img-top" alt="...">
                    <div class="card-img-overlay heartIcon text-end">
                      <span onclick="changeFaIcon(this)" class="me-3 text-danger bg-white bg-opacity-50 rounded-pill fs-4 px-1">
                        <i id="faHeart" class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div class="card-body d-flex flex-column" style="height:250px;">
                      <p class="text-muted text-uppercase fw-bold item-date">From ${getDate} ${monthName} ${new Date(product.date).getFullYear()} ${time}</p>
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.venue}</p>
                      <p class="card-text item-city">${product.city}</p>
                      <div class="btn-nn"></div>
                      <p class="card-text fs-5 text-secondary mt-auto">${product.price}</p>
                    </div>
                  </div>
                  </a>
                </div>`;
        });
        products.filter(value => value.genre === "Tourism" && value.genre !== "Vouchers").forEach(product => {
            //newEventsElm.href = `./pages/details.html?id=${product.id}`;
            //document.querySelector('a').style.textDecoration = 'none';
            //newEventsElm.innerHTML = 'Ghjst';
            //featuredEvents.classList.add('row');
            const d = new Date(product.date);
            const getDate = (d.getDate() < 10 ? '0' : '') + d.getDate();
            const monthName = month[d.getMonth()];
            const hour = (d.getHours() < 10 ? '0' : '') + d.getHours();
            const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            const time = `${hour}:${minutes}`;
            
            tourismE +=`
            <div class="col-md-4 mb-3">
            <a href="./pages/details.html?genre=${product.genre}&id=${product.id}" style="text-decoration:none;">
                  <div class="card border-0 bg-success bg-opacity-25">
                    <img src="./images/${product.img}" class="card-img-top" alt="...">
                    <div class="card-img-overlay heartIcon text-end">
                      <span onclick="changeFaIcon(this)" class="me-3 text-danger bg-white bg-opacity-50 rounded-pill fs-4 px-1">
                        <i id="faHeart" class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div class="card-body d-flex flex-column" style="height:250px;">
                      <p class="text-muted text-uppercase fw-bold item-date">From ${getDate} ${monthName} ${new Date(product.date).getFullYear()} ${time}</p>
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.venue}</p>
                      <p class="card-text item-city">${product.city}</p>
                      <div class="btn-nn"></div>
                      <p class="card-text fs-5 text-secondary mt-auto">${product.price}</p>
                    </div>
                  </div>
                  </a>
                </div>`;
        });
        products.filter(value => value.genre === "Music" && value.genre !== "Vouchers").forEach(product => {
            //newEventsElm.href = `./pages/details.html?id=${product.id}`;
            //document.querySelector('a').style.textDecoration = 'none';
            //newEventsElm.innerHTML = 'Ghjst';
            //featuredEvents.classList.add('row');
            const d = new Date(product.date);
            const getDate = (d.getDate() < 10 ? '0' : '') + d.getDate();
            const monthName = month[d.getMonth()];
            const hour = (d.getHours() < 10 ? '0' : '') + d.getHours();
            const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            const time = `${hour}:${minutes}`;
            
            musicE +=`
            <div class="col-md-4 mb-3">
            <a href="./pages/details.html?genre=${product.genre}&id=${product.id}" style="text-decoration:none;">
                  <div class="card border-0 bg-success bg-opacity-25">
                    <img src="./images/${product.img}" class="card-img-top" alt="...">
                    <div class="card-img-overlay heartIcon text-end">
                      <span onclick="changeFaIcon(this)" class="me-3 text-danger bg-white bg-opacity-50 rounded-pill fs-4 px-1">
                        <i id="faHeart" class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div class="card-body d-flex flex-column" style="height:250px;">
                      <p class="text-muted text-uppercase fw-bold item-date">From ${getDate} ${monthName} ${new Date(product.date).getFullYear()} ${time}</p>
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.venue}</p>
                      <p class="card-text item-city">${product.city}</p>
                      <div class="btn-nn"></div>
                      <p class="card-text fs-5 text-secondary mt-auto">${product.price}</p>
                    </div>
                  </div>
                  </a>
                </div>`;
        });
        products.filter(value => value.genre === "Festival" && value.genre !== "Vouchers").forEach(product => {
            //newEventsElm.href = `./pages/details.html?id=${product.id}`;
            //document.querySelector('a').style.textDecoration = 'none';
            //newEventsElm.innerHTML = 'Ghjst';
            //featuredEvents.classList.add('row');
            const d = new Date(product.date);
            const getDate = (d.getDate() < 10 ? '0' : '') + d.getDate();
            const monthName = month[d.getMonth()];
            const hour = (d.getHours() < 10 ? '0' : '') + d.getHours();
            const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            const time = `${hour}:${minutes}`;
            
            festivalE +=`
            <div class="col-md-4 mb-3">
            <a href="./pages/details.html?genre=${product.genre}&id=${product.id}" style="text-decoration:none;">
                  <div class="card border-0 bg-success bg-opacity-25">
                    <img src="./images/${product.img}" class="card-img-top" alt="...">
                    <div class="card-img-overlay heartIcon text-end">
                      <span onclick="changeFaIcon(this)" class="me-3 text-danger bg-white bg-opacity-50 rounded-pill fs-4 px-1">
                        <i id="faHeart" class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div class="card-body d-flex flex-column" style="height:250px;">
                      <p class="text-muted text-uppercase fw-bold item-date">From ${getDate} ${monthName} ${new Date(product.date).getFullYear()} ${time}</p>
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.venue}</p>
                      <div class="btn-nn"></div>
                      <p class="card-text fs-5 text-secondary mt-auto">${product.price}</p>
                    </div>
                  </div>
                  </a>
                </div>`;
        });
        products.filter(value => value.genre === "Theatre" && value.genre !== "Vouchers").forEach(product => {
            //newEventsElm.href = `./pages/details.html?id=${product.id}`;
            //document.querySelector('a').style.textDecoration = 'none';
            //newEventsElm.innerHTML = 'Ghjst';
            //featuredEvents.classList.add('row');
            const d = new Date(product.date);
            const getDate = (d.getDate() < 10 ? '0' : '') + d.getDate();
            const monthName = month[d.getMonth()];
            const hour = (d.getHours() < 10 ? '0' : '') + d.getHours();
            const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            const time = `${hour}:${minutes}`;
            
            theatreE +=`
            <div class="col-md-4 mb-3">
            <a href="./pages/details.html?genre=${product.genre}&id=${product.id}" style="text-decoration:none;">
                  <div class="card border-0 bg-success bg-opacity-25">
                    <img src="./images/${product.img}" class="card-img-top" alt="...">
                    <div class="card-img-overlay heartIcon text-end">
                      <span onclick="changeFaIcon(this)" class="me-3 text-danger bg-white bg-opacity-50 rounded-pill fs-4 px-1">
                        <i id="faHeart" class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div class="card-body d-flex flex-column" style="height:250px;">
                      <p class="text-muted text-uppercase fw-bold item-date">From ${getDate} ${monthName} ${new Date(product.date).getFullYear()} ${time}</p>
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.venue}</p>
                      <p class="card-text item-city">${product.city}</p>
                      <div class="btn-nn"></div>
                      <p class="card-text fs-5 text-secondary mt-auto">${product.price}</p>
                    </div>
                  </div>
                  </a>
                </div>`;
        });
        products.filter(value => value.genre === "Movies" && value.genre !== "Vouchers").forEach(product => {
            //newEventsElm.href = `./pages/details.html?id=${product.id}`;
            //document.querySelector('a').style.textDecoration = 'none';
            //newEventsElm.innerHTML = 'Ghjst';
            //featuredEvents.classList.add('row');
            const d = new Date(product.date);
            const getDate = (d.getDate() < 10 ? '0' : '') + d.getDate();
            const monthName = month[d.getMonth()];
            const hour = (d.getHours() < 10 ? '0' : '') + d.getHours();
            const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            const time = `${hour}:${minutes}`;
            
            moviesE +=`
            <div class="col-md-4 mb-3">
            <a href="./pages/details.html?genre=${product.genre}&id=${product.id}" style="text-decoration:none;">
                  <div class="card border-0 bg-success bg-opacity-25">
                    <img src="./images/${product.img}" class="card-img-top" alt="...">
                    <div class="card-img-overlay heartIcon text-end">
                      <span onclick="changeFaIcon(this)" class="me-3 text-danger bg-white bg-opacity-50 rounded-pill fs-4 px-1">
                        <i id="faHeart" class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div class="card-body d-flex flex-column" style="height:250px;">
                      <p class="text-muted text-uppercase fw-bold item-date">From ${getDate} ${monthName} ${new Date(product.date).getFullYear()} ${time}</p>
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.venue}</p>
                      <p class="card-text item-city">${product.city}</p>
                      <div class="btn-nn"></div>
                      <p class="card-text fs-5 text-secondary mt-auto">${product.price}</p>
                    </div>
                  </div>
                  </a>
                </div>`;
        });

        
        let resultVouchers = '';
        products.filter(x => x.genre === "Vouchers").forEach(product => {
            resultVouchers +=`
            <div class="col-md-3 mb-3">
            <div class="card border-0 bg-success bg-opacity-25">
              <img src="./images/${product.img}" alt="...">
              <div class="card-img-overlay heartIcon text-end">
                <span onclick="changeFaIcon(this)" class="me-3 text-danger bg-white bg-opacity-50 rounded-pill fs-4 px-1">
                  <i id="faHeart" class="fa-regular fa-heart"></i>
                </span>
              </div>
              <div class="card-body d-flex flex-column" style="height:250px;">
                <p class="text-muted text-uppercase fw-bold">${product.date}</p>
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.venue}</p>
                <p class="card-text fs-5 text-secondary mt-auto">${product.price}</p>
              </div>
            </div>
          </div>`;
        });
    
        // If no product has x.id = productId, then return to homepage
        //if(!thisProduct){
            //window.location.href = '/';
        //}
        // and if has, then add data for the single product
        
        // add new element to featured events
        //featuredEvents.appendChild(newEventsElm);
        featuredProducts.innerHTML = resultHome;
        featuredEvents.innerHTML = resultEvents;
        tourismEvents.innerHTML = tourismE;
        musicEvents.innerHTML = musicE;
        festivalEvents.innerHTML = festivalE;
        theatreEvents.innerHTML = theatreE;
        moviesEvents.innerHTML = moviesE;
        featuredVouchers.innerHTML = resultVouchers;
    }
    filterSelection(c) {
        let x = document.getElementsByClassName("filterDiv");
        if (c === "all") c = "";
        for (let i = 0; i < x.length; i++) {
            this.w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) {
                this.w3AddClass(x[i], "show");
            }
        }
    }

    w3AddClass(element, name) {
        let arr = element.className.split(" ");
        if (arr.indexOf(name) === -1) {
            element.className += " " + name;
        }
    }

    w3RemoveClass(element, name) {
        let arr = element.className.split(" ");
        while (arr.indexOf(name) > -1) {
            arr.splice(arr.indexOf(name), 1);
        }
        element.className = arr.join(" ");
    }
    searchEvents(products){
        const availableKeywords = products.map(item => item.title);
        const inputBox = document.querySelector('#input-box');
        const inputTitle = document.querySelector('#input-title');

        inputBox.onkeyup = () => {
            let result = [];
            let input = inputBox.value;
            inputTitle.value = input;
            if(input.length){
                result = availableKeywords.filter(keyword => {
                    return keyword.toLowerCase().includes(input.toLowerCase());
                })
                this.displayKeywords(result, products);
            }
        }

        inputTitle.onkeyup = () => {
            let result = [];
            let input = inputTitle.value;
            if(input.length){
                result = availableKeywords.filter(keyword => {
                    return keyword.toLowerCase().includes(input.toLowerCase());
                })
                this.displaySearchedEventsTwo(result, products);
            }else{
                result = [];
                this.displaySearchedEventsTwo(result, products);
            }
        }
    }
    displayKeywords(result, products){
        let content = "";
        result.forEach(keyword => {
            const genre = products.filter(product => product.title === keyword).map(product => product.genre);
            const id = products.filter(product => product.title === keyword).map(product => product.id);
            content +=  `<a href="../pages/details.html?genre=${genre}&id=${id}" class="list-group-item list-group-item-action">${keyword}</a>`;
        });
        this.displaySearchedEvents(result, products);
        resultsBox.innerHTML = content;
    }
    displaySearchedEvents(result, products){
        const searchedEvents = document.querySelector('.search-events');
        const searchBtn = document.querySelector('.search-btn');
        let searchedContent = "";
        let searchedData = [];
        for (let i = 0; i < result.length; i++) {
            let data = products.filter(item => item.title === result[i])[0];
            searchedData.push(data);
        }
        searchBtn.addEventListener("click", () => {
            searchedData.forEach(item => {
                searchedContent += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
                <a href="./pages/details.html?genre=${item.genre}&id=${item.id}" style="text-decoration:none;">
                    <div class="card border-0 bg-success bg-opacity-25">
                      <img src="./images/${item.img}" class="card-img-top" alt="...">
                      <div class="card-img-overlay heartIcon text-end">
                        <span onclick="changeFaIcon(this)" class="me-3 text-danger bg-white bg-opacity-50 rounded-pill fs-4 px-1">
                          <i id="faHeart" class="fa-regular fa-heart"></i>
                        </span>
                      </div>
                      <div class="card-body d-flex flex-column" style="height:250px;">
                        <p class="text-muted text-uppercase fw-bold item-date">03 Jul 2024</p>
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.venue}</p>
                        <p class="card-text item-city">${item.city}</p>
                        <div class="btn-nn"></div>
                        <p class="card-text fs-5 text-secondary mt-auto">${item.price}</p>
                      </div>
                    </div>
                </a>
              </div>`
            })
            searchedEvents.innerHTML = searchedContent;
            resultsBox.style.display = 'none';
        })
    }
    displaySearchedEventsTwo(result, products){
        const searchedEvents = document.querySelector('.search-events');
        const searchBtnTwo = document.querySelector('.search-btn-two');
        const resultLength = document.querySelector('.result-length');
        let searchedContent = "";
        let searchedData = [];
        for (let i = 0; i < result.length; i++) {
            let data = products.filter(item => item.title === result[i])[0];
            searchedData.push(data);
        }
        
        searchBtnTwo.addEventListener("click", () => {
            searchedData.forEach(item => {
                searchedContent += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
                <a href="./pages/details.html?genre=${item.genre}&id=${item.id}" style="text-decoration:none;">
                    <div class="card border-0 bg-success bg-opacity-25">
                      <img src="./images/${item.img}" class="card-img-top" alt="...">
                      <div class="card-img-overlay heartIcon text-end">
                        <span onclick="changeFaIcon(this)" class="me-3 text-danger bg-white bg-opacity-50 rounded-pill fs-4 px-1">
                          <i id="faHeart" class="fa-regular fa-heart"></i>
                        </span>
                      </div>
                      <div class="card-body d-flex flex-column" style="height:250px;">
                        <p class="text-muted text-uppercase fw-bold item-date">03 Jul 2024</p>
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.venue}</p>
                        <p class="card-text item-city">${item.city}</p>
                        <div class="btn-nn"></div>
                        <p class="card-text fs-5 text-secondary mt-auto">${item.price}</p>
                      </div>
                    </div>
                </a>
              </div>`
            })
            searchedEvents.innerHTML = searchedContent;
            resultLength.innerText = searchedData.length;
        })
    }
    setCartValues(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.quantity;
            itemsTotal += item.quantity;
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartTotalTwo.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }
    showCartItems(cart){
        let resultItem = '';
        cart.forEach(item => {

            resultItem +=`
            <tr>
                <th scope="row">
                    <div class="p-2">
                        <img src="./images/${item.img}" alt="" width="70" class="img-fluid rounded shadow-sm">
                        <div class="ml-3 d-inline-block align-middle">
                            <h5 class="mb-0"><a href="#" class="text-muted text-decoration-none d-inline-block">${item.title}</a></h5><span class="text-muted font-weight-normal fst-italic">Category: ${item.genre}</span>
                        </div>
                    </div>
                </th>
                <td class="align-middle"><strong>R${item.price * item.quantity}</strong></td>
                <td class="align-middle"><i class="fa-solid fa-minus text-success" data-id=${item.id}></i><strong class="mx-2">${item.quantity}</strong><i class="fa-solid fa-plus text-danger" data-id=${item.id}></i></td>
                <td class="align-middle"><i class="fa fa-trash text-danger" data-id=${item.id}></i></td>
            </tr>`;
        });

        cartContent.innerHTML = resultItem;
    }
    cartLogic(){
        // clear cart button
        clearCartBtn.addEventListener("click", () => {
            this.clearCart();
        });

        // cart functionality
        cartContent.addEventListener("click", event => {
            if(event.target.classList.contains('fa-trash')){
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement);
                this.removeCartItem(id);
            }else if(event.target.classList.contains('fa-plus')){
                let increaseQuantity = event.target;
                let id = increaseQuantity.dataset.id;
                let tempItem = cart.find(item => item.id == id);
                tempItem.quantity = tempItem.quantity + 1;
                localStorage.setItem('cartt', JSON.stringify(cart));
                this.setCartValues(cart);
                increaseQuantity.previousSibling.innerText = tempItem.quantity;
            }else if(event.target.classList.contains('fa-minus')){
                let decreaseQuantity = event.target;
                let id = decreaseQuantity.dataset.id;
                let tempItem = cart.find(item => item.id == id);
                tempItem.quantity = tempItem.quantity - 1;
                if(tempItem.quantity > 0){
                    localStorage.setItem('cartt', JSON.stringify(cart));
                    this.setCartValues(cart);
                    decreaseQuantity.nextSibling.innerText = tempItem.quantity;
                }else{
                    cartContent.removeChild(decreaseQuantity.parentElement.parentElement);
                    this.removeCartItem(id)
                }
            }
        })
    }
    clearCart(){
        let cartList = cart.map(item => item.id);
        cartList.forEach(id => this.removeCartItem(id));
        console.log(cartContent.children);
        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0])
        }
    }
    removeCartItem(id){
            cart = cart.filter(item => item.id != id);
            this.setCartValues(cart);
            localStorage.setItem('cartt', JSON.stringify(cart));
    }
}

// Local storage
class Storage {
    
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    ui.checkLoginStatus();

    // Attach login and logout to buttons
    document.getElementById("loginBtn").addEventListener("click", () => ui.login());
    document.getElementById("logoutBtn").addEventListener("click", () => ui.logout());

    // Get all products
    products.getProducts().then(products => {
        ui.displayProducts(products);
        ui.filterSelection("featured");
        // Add event listeners to filter buttons
        document.querySelectorAll("#myBtnContainer1 .btn1").forEach(button => {
            button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            document.querySelectorAll("#myBtnContainer1 .btn1").forEach(btn => btn.classList.remove("active"));
            // Add 'active' class to the clicked button
            this.classList.add("active");

            const category = this.getAttribute("data-filter");
            ui.filterSelection(category);
            });
        });
        ui.searchEvents(products);
        ui.setCartValues(cart);
        ui.showCartItems(cart);
        ui.cartLogic();
    });
})

/*
  const slides = document.querySelectorAll('.slide');
let index = 0;

function prevSlide(){
    slides[index].classList.remove('active');
    index--;

    if(index < 0)
        index = slides.length -1;

    slides[index].classList.add('active');      
}

document.querySelector('.prev').addEventListener('click', e => {
    prevSlide();
});

function nextSlide(){
    slides[index].classList.remove('active');
    index++;

    if(index > slides.length -1)
        index = 0;

    slides[index].classList.add('active');      
}

document.querySelector('.next').addEventListener('click', e => {
    nextSlide();
});


let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 1;
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
}) */