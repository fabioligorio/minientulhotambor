const drumQty = document.querySelector("#drumQty");
const summaryQty = document.querySelector("#summaryQty");
const summaryCapacity = document.querySelector("#summaryCapacity");
const summaryPrice = document.querySelector("#summaryPrice");
const quoteLink = document.querySelector("#quoteLink");
const quickButtons = document.querySelectorAll("[data-qty]");

const priceByQty = {
  1: 100,
  2: 180,
  3: 240,
  4: 280,
  5: 320,
  6: null
};

function selectedQuantity() {
  const value = Number(drumQty.value);
  return Number.isNaN(value) ? 1 : value;
}

function updateOrder() {
  const qty = selectedQuantity();
  const label = qty === 1 ? "1 tambor de 200L" : qty === 6 ? "6 a 10 tambores de 200L" : `${qty} tambores de 200L`;
  const capacity = qty === 6 ? "Capacidade aproximada: acima de 30 carrinhos de mao" : `Capacidade aproximada: ${qty * 5} carrinhos de mao`;
  const price = priceByQty[qty];
  const priceLabel = price ? `R$ ${price}` : "Sob consulta";

  summaryQty.textContent = label;
  summaryCapacity.textContent = capacity;
  summaryPrice.textContent = priceLabel;

  quickButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.qty) === qty);
  });

  const message = [
    "Ola, quero fazer um pedido da Mini Entulho Tambores.",
    `Quantidade desejada: ${label}.`,
    capacity + ".",
    `Total estimado no site: ${priceLabel}.`,
    "Cidade: Fazenda Rio Grande."
  ].join(" ");

  quoteLink.href = `https://wa.me/5541999999999?text=${encodeURIComponent(message)}`;
}

quickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    drumQty.value = button.dataset.qty;
    updateOrder();
  });
});

drumQty.addEventListener("change", updateOrder);
updateOrder();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
