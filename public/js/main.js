"use strict";

const httpGet = (theUrl)=>
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}




let genelAyar = httpGet("/doc/api/genelAyar")
let firma = httpGet("/doc/api/firma")
//console.log(genelAyar)
// HEad bölümü
let head = document.querySelector("head");
let body = document.querySelector("body");

head.innerHTML = `
        <title > ${genelAyar.title}</title>
        <meta name="keywords" content="${ genelAyar.keywords }"> 
        <meta name="description" content="${ genelAyar.description }">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#fff">
        <link rel="stylesheet" href="assets/dist/css/custom/custom.css">
        `;


body.innerHTML = `<header id="header">
    <div class="header-top">
        <div class="container">
            <div class="header-top-container">
                <div class="header-top-left">
                    <a class="header-top-phone" href="tel: 4447472" title=" 444 7 HSC (472)"><i class="icon icon-header-phone"></i>444 7 HSC (472)</a>
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
                    <a href="" title="AquaTurk">
                        <img src="assets/dist/img/logo.png" alt="AquaTurk">
                    </a>
                </div>
                <div class="header-bottom-menu">
                    <nav>
                        <ul class="header-bottom-menu-list hidden-sm hidden-xs hidden-xxs">
                            <li class="header-bottom-menu-list-item">
                                <a href="" title="Menu Item">Anasayfa</a>
                            </li>
                            <li class="header-bottom-menu-list-item">
                                <a href="" title="Menu Item">Hakkımızda</a>
                            </li>
                            <li class="header-bottom-menu-list-item">
                                <a href="" title="Menu Item">Ürünler <i class="icon icon-header-menu-caret"></i></a>
                                <ul class="header-bottom-menu-list-dropdown">
                                    <li><a href="" title="Menu Item">Ürünler</a></li>
                                    <li><a href="" title="Menu Item">Ürünler</a></li>
                                    <li><a href="" title="Menu Item">Ürünler</a></li>
                                    <li><a href="" title="Menu Item">Ürünler</a></li>
                                </ul>
                            </li>
                            <li class="header-bottom-menu-list-item">
                                <a href="" title="Menu Item">İletişim</a>
                            </li>
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
