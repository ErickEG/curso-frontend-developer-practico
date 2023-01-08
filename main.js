const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const CloseAsideProductButton =document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);
CloseAsideProductButton.addEventListener('click', closeProductDetailAside)


function toggleDesktopMenu() {

    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {

    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoshoppingCartContainer() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price : 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Consola',
    price : 320,
    image: 'https://images.pexels.com/photos/14005916/pexels-photo-14005916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Tv',
    price : 220,
    image: 'https://media.istockphoto.com/id/1146518299/es/foto/tv-en-el-gabinete-en-la-sala-de-estar-moderna-sobre-fondo-de-pared-blanca.jpg?s=612x612&w=0&k=20&c=Z0i9uAXQpFUzB-vU9w3kOLN4cnpXjKCB-bZkxysc1HI='
});

function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.append(productPrice, productName);
        
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCard);
     
        productInfo.append(productInfoDiv, productInfoFigure)
     
        productCard.append(productImg, productInfo)
     
        cardsContainer.appendChild(productCard);
     }
}
renderProducts(productList)
