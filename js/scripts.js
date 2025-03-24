/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



    // Produktinfo
    if (window.location.pathname.includes("product.html")) {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const image = params.get('image');
    const description = params.get('description');

    // Fyll i på sidan
    if (name) document.getElementById('product-title').textContent = name;
    if (image) document.getElementById('product-image').src = image;
    if (description) document.getElementById('product-description').textContent = description;
    }


    