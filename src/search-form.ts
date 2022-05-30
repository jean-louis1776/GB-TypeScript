import { renderBlock } from "./lib.js";

export function renderSearchFormBlock(checkInDate: Date, checkOutDate: Date) {
  const defaultInDate = checkInDate.toLocaleDateString("en-ca");
  const defaultOutDate = checkOutDate.toLocaleDateString("en-ca");
  const minInDate = new Date();
  const maxCalDay = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 2,
    0
  ).toLocaleDateString("en-ca");

  renderBlock(
    "search-form-block",
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input 
              id="check-in-date" 
              type="date" 
              value="${defaultInDate}" 
              min="${minInDate.toLocaleDateString("en-ca")}" 
              max="${maxCalDay}" 
              name="checkin" 
            />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input 
              id="check-out-date" 
              type="date" 
              value="${defaultOutDate}" 
              min="${checkOutDate.toLocaleDateString("en-ca")}" 
              max="${maxCalDay}" 
              name="checkout" 
            />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
