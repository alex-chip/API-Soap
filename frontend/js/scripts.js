const monedas = [
  { moneda: "Quetzal", fecha: "10/02/2021", venta: 7.75873, compra: 7.75873 },
  { moneda: "Quetzal", fecha: "11/02/2021", venta: 7.75519, compra: 7.75519 },
  { moneda: "Quetzal", fecha: "12/02/2021", venta: 7.75002, compra: 7.75002 },
  { moneda: "Quetzal", fecha: "13/02/2021", venta: 7.75002, compra: 7.75002 },
  { moneda: "Quetzal", fecha: "14/02/2021", venta: 7.75002, compra: 7.75002 },
  { moneda: "Quetzal", fecha: "15/02/2021", venta: 7.74667, compra: 7.74667 },
  { moneda: "Quetzal", fecha: "16/02/2021", venta: 7.7464, compra: 7.7464 },
  { moneda: "Quetzal", fecha: "17/02/2021", venta: 7.74185, compra: 7.74185 },
  { moneda: "Quetzal", fecha: "18/02/2021", venta: 7.73698, compra: 7.73698 },
  { moneda: "Quetzal", fecha: "19/02/2021", venta: 7.73197, compra: 7.73197 },
  { moneda: "Quetzal", fecha: "20/02/2021", venta: 7.73197, compra: 7.73197 },
  { moneda: "Quetzal", fecha: "21/02/2021", venta: 7.73197, compra: 7.73197 },
  { moneda: "Quetzal", fecha: "22/02/2021", venta: 7.71868, compra: 7.71868 },
  { moneda: "Quetzal", fecha: "23/02/2021", venta: 7.72021, compra: 7.72021 },
  { moneda: "Quetzal", fecha: "24/02/2021", venta: 7.71568, compra: 7.71568 },
  { moneda: "Quetzal", fecha: "25/02/2021", venta: 7.7148, compra: 7.7148 },
  { moneda: "Quetzal", fecha: "26/02/2021", venta: 7.70922, compra: 7.70922 },
]

const app = document.querySelector(".tasks")
const list = document.querySelector(".list")
const btnAdd = document.querySelector(".btn-add")
const btnDelete = document.querySelector(".btn-delete")

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const addItem = () => {
  const randomNumberItem = randomNumber(0, monedas.length - 1)
  console.log(randomNumberItem)

  const container = document.createElement("article")
  const title = document.createElement("h3")
  const date = document.createElement("p")
  const sale = document.createElement("p")
  const buy = document.createElement("p")

  container.classList.add("card")
  title.classList.add("card-title")
  date.classList.add("card-date")
  sale.classList.add("card-sale")
  buy.classList.add("card-buy")

  title.textContent = monedas[randomNumberItem].moneda
  date.textContent = monedas[randomNumberItem].fecha
  sale.textContent = monedas[randomNumberItem].venta
  buy.textContent = monedas[randomNumberItem].compra

  container.append(title, date, sale, buy)
  app.append(container)
  console.log(randomNumberItem)
};

const removeItem = () => {
  if (app.childNodes.length > 0)
    app.removeChild(app.childNodes[app.childNodes.length - 1])
};

btnAdd.addEventListener("click", addItem)
btnDelete.addEventListener("click", removeItem)
