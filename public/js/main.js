"use strict";

const httpGet = (theUrl)=>
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

let s = 0;


let genelAyar = httpGet("/doc/api/genelAyar");
let firma = httpGet("/doc/api/firma");
let sayfaMenu = httpGet("/doc/api/sayfamenu");
let sliders = httpGet("/doc/api/slider");
//console.log(genelAyar)
// HEad bölümü
let head = document.querySelector("head");
let header = document.querySelector("aquaHeader");
let slider = document.querySelector("aquaturkSlider");
let urunler = document.querySelector("aquaturkUrunler");
let sponsor = document.querySelector("aquaturkSponsor");
let ebulten = document.querySelector("ebulten");
let aquaturkFooter = document.querySelector("aquaturkFooter");

head.innerHTML = `
        <title > ${genelAyar.title}</title>
        <meta name="keywords" content="${ genelAyar.keywords }"> 
        <meta name="description" content="${ genelAyar.description }">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#fff">
        <link rel="stylesheet" href="assets/dist/css/custom/custom.css">
        `;

// HEADER
header.innerHTML= `<header id="header">
    <div class="header-top">
        <div class="container">
            <div class="header-top-container">
                <div class="header-top-left">
                    <a class="header-top-phone" href="${firma.telefon}" title=" ${firma.telefon}"><i class="icon icon-header-phone"></i>444 7 HSC (472)</a>
                </div>
                <div class="header-top-right">
                    <div class="header-top-search">
                        <button class="button" type="submit"><i class="icon icon-header-search"></i></button>
                        <input type="text" placeholder="Aranacak Kelime">
                    </div>
                    <div class="header-top-language">
                        <button class="button header-top-language-button" type="button">Türkçe <i class="icon icon-header-language-caret"></i></button>
                        <div class="header-top-language-dropdown">
                            <a class="header-top-language-dropdown-link" href="" title="Language">English</a>
                            <a class="header-top-language-dropdown-link" href="" title="Language">Türkçe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-bottom">
        <div class="container">
            <div class="header-bottom-container">
                <div class="header-bottom-logo">
                    <a href="" title="${genelAyar.title}">
                        <img src="assets/dist/img/logo.png" alt="${genelAyar.title}">
                    </a>
                </div>
                <div class="header-bottom-menu"> 
                 <nav>
                     <ul class="header-bottom-menu-list hidden-sm hidden-xs hidden-xxs">
                        <li class="header-bottom-menu-list-item">
                                    <a href="/" title="${genelAyar.title}">Anasayfa</a>
                                    </li>
                      ${ sayfaMenu.map((d)=> d.lokasyon == "header" ? 
                                    `<li class="header-bottom-menu-list-item">
                                    <a href="${d.seoUrl}.html" title="${d.adi}">${d.adi}</a>
                                    </li>` : '').join(" ")}
                           
                            
                            </ul>  
                        <button class="button button-mobile-menu hidden-lg hidden-md" type="button"><i class="icon icon-header-bars"></i></button>
                    </nav>
                </div>
            </div>
        </div>
        <div class="header-bottom-dropdown hidden-lg hidden-md">
            <ul class="header-bottom-dropdown-list">
                <li class="header-bottom-dropdown-list-item">
                    <a href="" title="Menu Item">Anasayfa</a>
                </li>
                <li class="header-bottom-dropdown-list-item">
                    <a href="" title="Menu Item">Hakkımızda</a>
                </li>
                <li class="header-bottom-dropdown-list-item">
                    <a href="" title="Menu Item">Ürünler</a>
                </li>
                <li class="header-bottom-dropdown-list-item">
                    <a href="" title="Menu Item">İletişim</a>
                </li>
            </ul>
        </div>
    </div>
</header>`;


slider.innerHTML = `
<div id="hero">
    <div id="heroSlider" class="swiper-container">
        <div class="swiper-wrapper">
            ${sliders.map((sdata)=> `<div class="swiper-slide">
                <div class="hero-item">
                    <div class="hero-item-image">
                        <img src="assets/dist/img/hero-1.png" alt="Hero Image">
                    </div>
                    <div class="hero-item-content">
                        <div class="container">
                            <h2 class="hero-item-content-title">${ sdata.title}</h2>
                            <p class="hero-item-content-text">
                                ${sdata.info}
                            </p>
                            <img class="hero-item-content-image" src="${sdata.resim}" alt="Hero Image">
                        </div>
                    </div>
                </div>
            </div>` )}
            
            
            
           
          
        </div>
    </div>
    <div class="hero-pagination">
        <span class="hero-pagination-item active"></span>
   
    </div>
</div>`;


urunler.innerHTML = `
<div id="products">
    <div class="container">
        <div class="products-container">
            <a class="products-item" href="" title="Product Item">
                <div class="products-item-background">
                    <img src="assets/dist/img/products-bg-1.png" alt="Product Background">
                </div>
                <div class="products-item-content">
                    <div class="products-item-content-title">Su Arıtma Sistemleri</div>
                    <div class="products-item-content-image">
                        <img src="assets/dist/img/product-1.png" alt="Product">
                    </div>
                </div>
                <div class="products-item-button">
                    Ürünleri İncele
                </div>
            </a>
            <a class="products-item" href="" title="Product Item">
                <div class="products-item-background">
                    <img src="assets/dist/img/products-bg-2.png" alt="Product Background">
                </div>
                <div class="products-item-content">
                    <div class="products-item-content-title">Filtre Grubu</div>
                    <div class="products-item-content-image">
                        <img src="assets/dist/img/product-2.png" alt="Product">
                    </div>
                </div>
                <div class="products-item-button">
                    Ürünleri İncele
                </div>
            </a>
            <a class="products-item" href="" title="Product Item">
                <div class="products-item-background">
                    <img src="assets/dist/img/products-bg-3.png" alt="Product Background">
                </div>
                <div class="products-item-content">
                    <div class="products-item-content-title">Yedek Parça ve Filtre Grubu</div>
                    <div class="products-item-content-image">
                        <img src="assets/dist/img/product-3.png" alt="Product">
                    </div>
                </div>
                <div class="products-item-button">
                    Ürünleri İncele
                </div>
            </a>
        </div>
    </div>
</div>

`;

sponsor.innerHTML = `<div id="sponsors">
    <div class="container">
        <div class="sponsors">
            <div class="sponsors-left">
                <button class="button" type="button"><i class="icon icon-sponsors-left-arrow"></i></button>
            </div>
            <div class="sponsors-center">
                <div id="sponsorSlide" class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><div class="sponsors-item"><img src="assets/dist/img/sponsors-1.png" alt="Sponsor"></div></div>
                        <div class="swiper-slide"><div class="sponsors-item"><img src="assets/dist/img/sponsors-2.png" alt="Sponsor"></div></div>
                        <div class="swiper-slide"><div class="sponsors-item"><img src="assets/dist/img/sponsors-3.png" alt="Sponsor"></div></div>
                        <div class="swiper-slide"><div class="sponsors-item"><img src="assets/dist/img/sponsors-4.png" alt="Sponsor"></div></div>
                        <div class="swiper-slide"><div class="sponsors-item"><img src="assets/dist/img/sponsors-5.png" alt="Sponsor"></div></div>
                        <div class="swiper-slide"><div class="sponsors-item"><img src="assets/dist/img/sponsors-6.png" alt="Sponsor"></div></div>
                        <div class="swiper-slide"><div class="sponsors-item"><img src="assets/dist/img/sponsors-7.png" alt="Sponsor"></div></div>
                    </div>
                </div>
            </div>
            <div class="sponsors-right">
                <button class="button" type="button"><i class="icon icon-sponsors-right-arrow"></i></button>
            </div>
        </div>
    </div>
</div>`;

ebulten.innerHTML = `<div id="subscribe">
    <div class="container">
        <div class="subscribe-container">
            <div class="subscribe-content">
                <h3 class="subscribe-content-title">Gelişmelerden <strong>Haberdar Olun</strong></h3>
                <p class="subscribe-content-text">Yeni ürün ve duyurularımızdan anında haberdar olun</p>
            </div>
            <div class="subscribe-input">
                    <div class="col-md-3 ebultenHata" style="color:green; display: none">asdasd</div>
                    <form id="ebultenForm" >
                    <input type="email" name="eposta" placeholder="E-Posta Adresi">
                   
                    <button class="button ebultenYolla" name="formName"  value="ebultenForm" type="button"><i class="icon icon-subscribe"></i></button>
                </form>    
            </div>
        </div>
    </div>
</div>`;

aquaturkFooter.innerHTML = `<footer id="footer">
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h3 class="footer-title">Su Arıtma Ürünleri</h3>
                    <ul class="footer-list">
                        <li><a href="" title="List Item">Stratos</a></li>
                        <li><a href="" title="List Item">Stilmax</a></li>
                        <li><a href="" title="List Item">Ecoplus</a></li>
                        <li><a href="" title="List Item">Prizma</a></li>
                     
                    </ul>
                </div>
                <div class="col-md-3">
                    <h3 class="footer-title">Su Arıtma Ürünleri</h3>
                    <ul class="footer-list">
                        <li><a href="" title="List Item">Stratos</a></li>
                        <li><a href="" title="List Item">Stilmax</a></li>
                        <li><a href="" title="List Item">Ecoplus</a></li>
                        <li><a href="" title="List Item">Prizma</a></li>
                        <li><a href="" title="List Item">Safir</a></li>
                    
                    </ul>
                </div>
                <div class="col-md-3">
                    <h3 class="footer-title">Su Arıtma Ürünleri</h3>
                    <ul class="footer-list">
                        <li><a href="" title="List Item">Stratos</a></li>
                        <li><a href="" title="List Item">Stilmax</a></li>
                        <li><a href="" title="List Item">Ecoplus</a></li>
                
                </div>
                <div class="col-md-3">
                    <h3 class="footer-title">Bizi Takip Edin</h3>
                    <div class="footer-social">
                        <a class="button" href="" title="Social"><i class="icon icon-footer-facebook"></i></a>
                        <a class="button" href="" title="Social"><i class="icon icon-footer-twitter"></i></a>
                        <a class="button" href="" title="Social"><i class="icon icon-footer-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        Copyright © 2018 ${genelAyar.copyright}.
    </div>
</footer>`;