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


    /*
    Jag har inte gjort postnummer eller telefon,
    för det var jag lite mer osäker på hur jag skulle göra. 
    */


    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("order-form");
        if (!form) return;
      
        form.addEventListener("submit", function (e) {
          e.preventDefault();
      
          let valid = true;
      
          const name = document.getElementById("name");
          const address = document.getElementById("address");
          const city = document.getElementById("city");
          const email = document.getElementById("email");
      
          // Namn
          if (name.value.length < 2 || name.value.length > 50) {
            name.classList.add("is-invalid");
            valid = false;
          } else {
            name.classList.remove("is-invalid");
          }
      
          // Gatuadress
          if (address.value.length < 2 || address.value.length > 50) {
            address.classList.add("is-invalid");
            valid = false;
          } else {
            address.classList.remove("is-invalid");
          }
      
          // Stad
          if (city.value.length < 2 || city.value.length > 50) {
            city.classList.add("is-invalid");
            valid = false;
          } else {
            city.classList.remove("is-invalid");
          }
      
          // E-post
          if (!email.value.includes("@") || email.value.length > 50) {
            email.classList.add("is-invalid");
            valid = false;
          } else {
            email.classList.remove("is-invalid");
          }
      
          if (valid) {
            alert("Tack för din beställning!");
            form.reset();
          }
        });
      });
      










    