import "./style.css";
import { setupShoppingList } from "./shoppingList";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="container" >
    <img src="/cat.png">
    <input type="text" id="input-field" placeholder="Bread">
    <button id="add-button">Add to cart</button>
    <ul id="shopping-list">
    </ul>
  </main>
`;

const inputFieldElement = document.getElementById("input-field") as HTMLInputElement;
const addButtonElement = document.getElementById("add-button") as HTMLButtonElement;
const shoppingListElement = document.getElementById("shopping-list") as HTMLElement;

setupShoppingList(addButtonElement, inputFieldElement, shoppingListElement);
