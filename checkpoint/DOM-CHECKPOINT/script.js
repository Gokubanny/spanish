// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-body");
  
    function updateTotal() {
      let total = 0;
      cards.forEach(card => {
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        const price = parseFloat(card.querySelector(".unit-price").textContent);
        total += quantity * price;
      });
      document.querySelector(".total").textContent = total + " $";
    }
  
    cards.forEach(card => {
      const plusBtn = card.querySelector(".fa-plus-circle");
      const minusBtn = card.querySelector(".fa-minus-circle");
      const quantitySpan = card.querySelector(".quantity");
      const deleteBtn = card.querySelector(".fa-trash-alt");
      const heartBtn = card.querySelector(".fa-heart");
  
      plusBtn.addEventListener("click", () => {
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;
        updateTotal();
      });
  
      minusBtn.addEventListener("click", () => {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 0) {
          quantity--;
          quantitySpan.textContent = quantity;
          updateTotal();
        }
      });
  
      deleteBtn.addEventListener("click", () => {
        card.parentElement.remove(); // remove the .card-body
        updateTotal();
      });
  
      heartBtn.addEventListener("click", () => {
        heartBtn.classList.toggle("liked");
        if (heartBtn.classList.contains("liked")) {
          heartBtn.style.color = "red";
        } else {
          heartBtn.style.color = "black";
        }
      });
    });
  
    updateTotal(); // Initialize total
  });
  