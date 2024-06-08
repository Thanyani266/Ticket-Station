/*
    Carousel
*/
const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.wrapper i');
const firstCardWidth = document.querySelector('.car-card').offsetWidth;
const carouselChildren = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to the begining of the carousel for infinite scrolling
carouselChildren.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
});

// Insert copies of the last few cards to the end of the carousel for infinite scrolling
carouselChildren.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
});

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging');
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // If the dragging is false, return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
}

const autoPlay = () => {
    if(window.innerWidth < 800) return; // Return if window is smaller than 800
    // Auto play the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500)
}

autoPlay();

const infiniteScroll = () => {
    // If the carousel is at the begining, scroll to the end
    if(carousel.scrollLeft < 1)  {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove('no-transition');
    // If the carousel is at the end, scroll to the begining
    }else if(carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-transition');
    }

    // Clear existing timeout and start auto play if mouse is not hovering over the carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', infiniteScroll);
wrapper.addEventListener("mouseenter", () => setTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

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

// Variables

const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');  
const featuredProducts = document.querySelector('.carousel');
const featuredEvents = document.querySelector('.featured-events');
const tourismEvents = document.querySelector('.tourism-events');
const musicEvents = document.querySelector('.music-events');
const festivalEvents = document.querySelector('.festival-events');
const theatreEvents = document.querySelector('.theatre-events');
const moviesEvents = document.querySelector('.movies-events');
const featuredVouchers = document.querySelector('.vouchers');
const all_btns = document.querySelector('.btn-nn');
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

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

// Display products
class UI {
    displayProducts(products){
        let resultHome = '';
        products.forEach(product => {

            const d = new Date(product.date);
            const getDate = (d.getDate() < 10 ? '0' : '') + d.getDate();
            const monthName = month[d.getMonth()];
            const hour = (d.getHours() < 10 ? '0' : '') + d.getHours();
            const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            const time = `${hour}:${minutes}`;

            resultHome +=`
            <div class="card mx-2">
              <div class="img">
                <img src="./images/${product.img}" class="img-fluid" draggable="false" alt="">
              </div>
              <h6 class="card-text text-muted fw-bold text-uppercase mt-2">From ${getDate} ${monthName} ${new Date(product.date).getFullYear()} ${time}</h6>
              <span class="card-title fw-bold fs-5">${product.title}</span>
              <p>${product.venue}</p>
              <span class="card-text text-secondary fw-bold">${product.price}</span>
            </div>`;
        });
        let resultEvents = '';
        let tourismE = '';
        let musicE = '';
        let festivalE = '';
        let theatreE = '';
        let moviesE = '';
        
        products.forEach(product => {
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
        products.filter(value => value.genre === "Tourism").forEach(product => {
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
        products.filter(value => value.genre === "Music").forEach(product => {
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
        products.filter(value => value.genre === "Festival").forEach(product => {
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
        products.filter(value => value.genre === "Theatre").forEach(product => {
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
        products.filter(value => value.genre === "Movies").forEach(product => {
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
}

// Local storage
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();

    // Get all products
    products.getProducts().then(products => ui.displayProducts(products));
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
*/