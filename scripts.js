document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", function() {
            this.querySelector(".dropdown-menu").style.display = "block";
        });
        dropdown.addEventListener("mouseleave", function() {
            this.querySelector(".dropdown-menu").style.display = "none";
        });
    });

    const buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productSection = document.createElement("section");
            productSection.classList.add("product-detail");
            productSection.innerHTML = `
                <button class="back-btn">&#8592; Takaisin</button>
                <h2>${this.parentElement.querySelector("h3").innerText}</h2>
                <img src="${this.parentElement.querySelector("img").src}" alt="${this.parentElement.querySelector("h3").innerText}">
                <p>${this.parentElement.querySelector("p").innerText}</p>
                <button class="buy-btn">Osta nyt</button>
            `;
            document.body.innerHTML = "";
            document.body.appendChild(productSection);
            document.querySelector(".back-btn").addEventListener("click", function() {
                location.reload();
            });
        });
    });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Kiitos yhteydenotosta! Vastaamme pian.");
        this.reset();
    });

    // Tuotteiden  suodatus
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Etsi tuotteita...");
    searchInput.id = "product-search";
    document.querySelector("#products").prepend(searchInput);

    searchInput.addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase();
        document.querySelectorAll(".product").forEach(product => {
            const productName = product.querySelector("h3").innerText.toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    // Animaatio dropdown-menul
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", function() {
            const menu = this.querySelector(".dropdown-menu");
            menu.style.opacity = "0";
            menu.style.display = "block";
            setTimeout(() => menu.style.opacity = "1", 50);
        });
        dropdown.addEventListener("mouseleave", function() {
            const menu = this.querySelector(".dropdown-menu");
            menu.style.opacity = "0";
            setTimeout(() => menu.style.display = "none", 300);
        });
    });
});


document.getElementById("menu").addEventListener("click", function (event) {
    event.preventDefault();
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});




