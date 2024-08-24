import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>My First React App</h1>
    </header>
  );
}
function Menu() {
  const numPizza = pizzaData.length;
  return (
    <main className="menu">
      <h2>Pizza Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>lgvfdhbcsm gvefbhdcsaxkml eryfbwhidsjak ubhsdaojknl</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </>
      ) : (
        <p>We are still workimg on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours;
  const openHour = 10;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        // a component
        <Order closeHour={closeHour}></Order>
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 & {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} to {closeHour}:00. Come visit us or order
        Online.
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  // we have object from Menu component
  if (pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
        <soan>{pizzaObj.price}</soan>
      </div>
    </li>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
