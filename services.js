/*console.log("Services JavaScript is working!");
const filterButtons = document.querySelectorAll(".filter-btn");
const serviceCards = document.querySelectorAll(".service-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.getAttribute("data-category");

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        serviceCards.forEach(function(card) {

            const cardCategory = card.getAttribute("data-category");

            if (selectedCategory === "all" || cardCategory === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});*/
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".service-card");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Filter the service cards
            cards.forEach((card) => {
                const cardCategory = card.getAttribute("data-category");

                card.style.display =
                    category === "all" || cardCategory === category
                        ? ""
                        : "none";
            });

            // Highlight the selected button
            buttons.forEach((btn) => {
                btn.classList.remove("active");
            });

            button.classList.add("active");
        });
    });
});