let btn_input = document.querySelector(".input");
let container_regist = document.querySelector(".registration");
let btn_sumbit = document.querySelector(".sumbit");
btn_input.addEventListener("click", () => {
  container_regist.style.display = "block";
  btn_input.style.display = "none";
});

btn_sumbit.addEventListener("click", () => {
  alert("Вам надано знижку 30%");
  container_regist.style.display = "none";
  btn_input.style.display = "flex";
  btn_input.innerHTML = "30%";
});

// === БРОНЮВАННЯ ===
document.addEventListener("DOMContentLoaded", function () {
  const bookButtons = document.querySelectorAll(".book-button");

  bookButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const countryBlock = button.closest(".country");

      const countryName =
        countryBlock.querySelector(".country-name")?.innerText;
      const peopleCount = countryBlock.querySelector(".people-count")?.value;
      const mealOption = countryBlock.querySelector(
        'input[type="radio"]:checked'
      );
      const pricePerPerson =
        countryBlock.querySelector(".price")?.dataset.price;

      if (!countryName || !peopleCount || !mealOption || !pricePerPerson) {
        alert("Будь ласка, заповніть усі поля перед бронюванням.");
        return;
      }

      const totalPrice = Number(pricePerPerson) * Number(peopleCount);

      const order = {
        country: countryName,
        people: Number(peopleCount),
        meal: mealOption.value,
        pricePerPerson: Number(pricePerPerson),
        totalPrice: totalPrice,
        date: new Date().toLocaleString(),
      };

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(order);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Тур додано до корзини!");
    });
  });

  // === КОРЗИНА ===
  const cartItemsList = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("cart-total");

  if (cartItemsList) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let grandTotal = 0;

    if (cart.length === 0) {
      cartItemsList.innerHTML = "<li>Корзина порожня</li>";
    } else {
      cart.forEach((item, index) => {
        grandTotal += item.totalPrice;

        const li = document.createElement("li");
        li.innerHTML = `
          <strong>Країна:</strong> ${item.country}<br />
          <strong>Людей:</strong> ${item.people}<br />
          <strong>Харчування:</strong> ${item.meal}<br />
          <strong>Ціна за людину:</strong> ${item.pricePerPerson} €<br />
          <strong>Разом:</strong> ${item.totalPrice} €<br />
          <strong>Дата:</strong> ${item.date}<br />
          <hr />
        `;
        cartItemsList.appendChild(li);
      });
    }

    if (totalPriceElement) {
      totalPriceElement.innerHTML = `<strong>Загальна сума: ${grandTotal} €</strong>`;
    }
  }

  // === ОЧИСТКА КОРЗИНИ ===
  const clearBtn = document.getElementById("clear-cart");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      localStorage.removeItem("cart");
      location.reload();
    });
  }
});
