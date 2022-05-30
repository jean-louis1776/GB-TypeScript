import { renderUserBlock } from "./user.js";
import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderToast } from "./lib.js";

function getDefaultCheckInDate() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
}

function getDefaultCheckOutDate() {
  return new Date(
    getDefaultCheckInDate().getFullYear(),
    getDefaultCheckInDate().getMonth(),
    getDefaultCheckInDate().getDate() + 2
  );
}

const checkInDate = getDefaultCheckInDate();
const checkOutDate = getDefaultCheckOutDate();

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock("Wade Warren", "./img/avatar.png", 0);
  renderSearchFormBlock(checkInDate, checkOutDate);
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});
