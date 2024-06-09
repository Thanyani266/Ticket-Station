const addToCart = document.querySelector('.add-to-cart button');

addToCart.addEventListener("click", jimba);

function jimba(){
    localStorage.setItem('input', val.value);
    //window.location.href = "cart";
}
