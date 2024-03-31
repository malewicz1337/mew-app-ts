import { app } from "./firebaseConfig";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";

const database = getDatabase(app);
const shoppingListInDB = ref(database, "DATABASE_NAME");

export function setupShoppingList(
  addButtonElement: HTMLButtonElement,
  inputFieldElement: HTMLInputElement,
  shoppingListElement: HTMLElement
) {
  addButtonElement.addEventListener("click", function () {
    let inputValue = inputFieldElement.value;

    push(shoppingListInDB, inputValue);

    clearInputFieldEl();
  });

  onValue(shoppingListInDB, function (snapshot) {
    if (snapshot.exists()) {
      const itemsArray: [string, string][] = Object.entries(snapshot.val() as Record<string, string>);

      clearShoppingListEl();

      itemsArray.forEach((currentItem: [string, string]) => {
        appendItemToShoppingListEl(currentItem);
      });
    } else {
      shoppingListElement.innerHTML = "No items here... yet";
    }
  });

  function clearShoppingListEl() {
    shoppingListElement.innerHTML = "";
  }

  function clearInputFieldEl() {
    inputFieldElement.value = "";
  }

  function appendItemToShoppingListEl(item: [string, string]) {
    let itemID = item[0];
    let itemValue = item[1];

    let newEl = document.createElement("li");

    newEl.textContent = itemValue;

    newEl.addEventListener("click", function () {
      let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);

      remove(exactLocationOfItemInDB);
    });

    shoppingListElement.append(newEl);
  }
}
